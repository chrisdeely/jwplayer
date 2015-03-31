define([
    'utils/helpers',
    'underscore',
    'utils/eventdispatcher',
    'events/events',
    'events/states',
    'controller/model',
    'view/adskipbutton',
    'playlist/item'
], function(utils, _, eventdispatcher,
            events, states, Model, Adskipbutton, PlaylistItem) {

    var Instream = function(_controller, _model, _view) {
        var _defaultOptions = {
            controlbarseekable: 'never',
            controlbarpausable: true,
            controlbarstoppable: true,
            loadingmessage: 'Loading ad',
            playlistclickable: true,
            skipoffset: null,
            tag: null
        };

        var _item,
            _array, // the copied in playlist
            _arrayIndex = 0,
            _optionList,
            _options = { // these are for before load
                controlbarseekable: 'never',
                controlbarpausable: false,
                controlbarstoppable: false
            },
            _skipButton,
            _oldProvider,
            _oldpos,
            _oldstate,
            _olditem,
            _adModel,
            _currentProvider,
            _completeTimeoutId = -1,
            _this = _.extend(this, new eventdispatcher());

        // Listen for player resize events
        _controller.jwAddEventListener(events.JWPLAYER_FULLSCREEN, _fullscreenHandler);

        /*****************************************
         *****  Public instream API methods  *****
         *****************************************/

        _this.init = function() {

            /** Blocking playback and show Instream Display **/

            // Make sure the original player's provider stops broadcasting events (pseudo-lock...)
            _oldProvider = _model.getVideo();

            // Was used to get video tag and store media state
            _oldProvider.detachMedia();

            // Keep track of the original player state
            _oldpos = _model.position;

            // Initialize the instream player's model copied from main player's model
            _adModel = new Model({
                id: _model.id,
                volume: _model.volume,
                fullscreen: _model.fullscreen,
                mute: _model.mute
            });
            _checkProvider();
            _adModel.addEventListener('fullscreenchange', _nativeFullscreenHandler);
            _olditem = _model.playlist[_model.item];

            if ( _controller.checkBeforePlay() || (_oldpos === 0 && !_oldProvider.checkComplete()) ) {
                // make sure video restarts after preroll
                _oldpos = 0;
                _oldstate = states.PLAYING;
            } else if (_oldProvider && _oldProvider.checkComplete()) {
                 // AKA  postroll
                 _oldstate = states.IDLE;
             }  else if (_controller.jwGetState() === states.IDLE) {
                _oldstate = states.IDLE;
            } else {
                _oldstate = states.PLAYING;
            }

            // If the player's currently playing, pause the video tag
            if (_oldstate === states.PLAYING) {
                _oldProvider.pause();
            }

            // Show the instream layer
            _view.setupInstream(_adModel);
            _view.forceState(states.BUFFERING);

            _this.jwInstreamSetText(_defaultOptions.loadingmessage);
        };

        /** Load an instream item and initialize playback **/
        _this.load = function(item, options) {
            if (utils.isAndroid(2.3)) {
                errorHandler({
                    type: events.JWPLAYER_ERROR,
                    message: 'Error loading instream: Cannot play instream on Android 2.3'
                });
                return;
            }
            _sendEvent(events.JWPLAYER_PLAYLIST_ITEM, {
                index: _arrayIndex
            }, true);

            var controlbar = document.getElementById(_model.id + '_controlbar');
            var bottom = 10 + utils.bounds(_view.controlsContainer()).bottom - utils.bounds(controlbar).top;

            // Copy the playlist item passed in and make sure it's formatted as a proper playlist item
            if (_.isArray(item)) {
                if (options) {
                    _optionList = options;
                    options = options[_arrayIndex];
                }
                _array = item;
                item = _array[_arrayIndex];
            }
            _options = _.extend(_defaultOptions, options);
            _item = new PlaylistItem(item);

            _adModel.setPlaylist([item]);
            // check provider after item change
            _checkProvider();

            // Show the instream layer
            _view.showInstream();

            _skipButton = new Adskipbutton(_controller.id, bottom, _options.skipMessage, _options.skipText);
            _skipButton.addEventListener(events.JWPLAYER_AD_SKIPPED, _skipAd);
            _skipButton.reset(_options.skipoffset || -1);


            if (_controller.jwGetControls()) {
                _skipButton.show();
            } else {
                _skipButton.hide();
            }

            var skipElem = _skipButton.element();
            _view.controlsContainer().appendChild(skipElem);

            // Match the main player's controls state
            _adModel.addEventListener(events.JWPLAYER_ERROR, errorHandler);

            // start listening for ad click
            _view.displayComp().setAlternateClickHandler(function(evt) {
                evt = evt || {};
                evt.hasControls = !!_controller.jwGetControls();

                _sendEvent(events.JWPLAYER_INSTREAM_CLICK, evt);

                // toggle playback after click event

                if (_adModel.state === states.PAUSED) {
                    if (evt.hasControls) {
                        _this.jwInstreamPlay();
                    }
                } else {
                    _this.jwInstreamPause();
                }
            });

            if (utils.isMSIE()) {
                _oldProvider.parentElement.addEventListener('click', _view.displayComp().clickHandler);
            }

            _view.addEventListener(events.JWPLAYER_AD_SKIPPED, _skipAd);

            // Load the instream item
            _adModel.getVideo().load(_adModel.playlist[0]);
            //_fakemodel.getVideo().addEventListener('webkitendfullscreen', _fullscreenChangeHandler, FALSE);
        };

        function errorHandler(evt) {
            _sendEvent(evt.type, evt);

            if (_adModel) {
                _controller.jwInstreamDestroy(false, _this);
            }
        }

        /** Stop the instream playback and revert the main player back to its original state **/
        _this.jwInstreamDestroy = function(complete) {
            if (!_adModel) {
                return;
            }

            var skipElem = _skipButton.element();
            _view.controlsContainer().removeChild(skipElem);

            _adModel.removeEventListener('fullscreenchange', _nativeFullscreenHandler);
            clearTimeout(_completeTimeoutId);
            _completeTimeoutId = -1;

            // We don't want the instream provider to be attached to the video tag anymore
            _this.resetEventListeners();
            if (_currentProvider) {
                _currentProvider.detachMedia();
                _currentProvider.resetEventListeners();
                _currentProvider.destroy();
            }
            _adModel.resetEventListeners();

            // Return the view to its normal state
            _view.destroyInstream(_adModel.getVideo().isAudioFile());
            if (_view.displayComp()) {
                if (_oldProvider && _oldProvider.parentElement) {
                    _oldProvider.parentElement.removeEventListener('click', _view.displayComp().clickHandler);
                }
                _view.displayComp().revertAlternateClickHandler();
            }
            _adModel = null;

            // Re-attach the controller
            _controller.attachMedia();
            // Load the original item into our provider, which sets up the regular player's video tag
            _oldProvider = _model.getVideo();
            if (_oldstate !== states.IDLE) {
                var item = _.extend({}, _olditem);
                item.starttime = _oldpos;
                _oldProvider.load(item);

            } else {
                _oldProvider.stop();
            }

            // Let listeners know the instream player has been destroyed, and why
            _sendEvent(events.JWPLAYER_INSTREAM_DESTROYED, {
                reason: complete ? 'complete' : 'destroyed'
            }, true);


            if (_oldstate === states.PLAYING) {
                // Model was already correct; just resume playback
                _oldProvider.play();
            }
        };

        /** Start instream playback **/
        _this.jwInstreamPlay = function() {
            //if (!_item) return;
            _adModel.getVideo().play(true);
            _view.releaseControls();
            _view.forceState(states.PLAYING);
        };

        /** Pause instream playback **/
        _this.jwInstreamPause = function() {
            //if (!_item) return;
            _adModel.getVideo().pause(true);
            _view.forceState(states.PAUSED);
        };

        /** Seek to a point in instream media **/
        _this.jwInstreamSeek = function(position) {
            //if (!_item) return;
            _adModel.getVideo().seek(position);
        };

        /** Set custom text in the controlbar **/
        _this.jwInstreamSetText = function(text) {
            _view.setInstreamText(text);
        };

        _this.jwInstreamState = function() {
            //if (!_item) return;
            return _adModel.state;
        };

        /*****************************
         ****** Private methods ******
         *****************************/

        function _checkProvider() {
            var provider = _adModel.getVideo();

            if (_currentProvider !== provider) {
                _currentProvider = provider;

                if (!provider) {
                    return;
                }

                provider.resetEventListeners();

                provider.addGlobalListener(_forward);
                provider.addEventListener(events.JWPLAYER_MEDIA_META, _metaHandler);
                provider.addEventListener(events.JWPLAYER_MEDIA_COMPLETE, _completeHandler);
                provider.addEventListener(events.JWPLAYER_MEDIA_BUFFER_FULL, _bufferFullHandler);
                provider.addEventListener(events.JWPLAYER_MEDIA_ERROR, errorHandler);

                provider.addEventListener(events.JWPLAYER_PLAYER_STATE, stateHandler);
                provider.addEventListener(events.JWPLAYER_MEDIA_TIME, function(evt) {
                    if (_skipButton) {
                        _skipButton.updateSkipTime(evt.position, evt.duration);
                    }
                });
                provider.attachMedia();
                provider.mute(_model.mute);
                provider.volume(_model.volume);
            }
        }

        function stateHandler(evt) {
            switch(evt.newstate) {
                case states.PLAYING:
                    _this.jwInstreamPlay();
                    break;
                case states.PAUSED:
                    _this.jwInstreamPause();
                    break;
            }
        }

        function _skipAd(evt) {
            _sendEvent(evt.type, evt);
            _completeHandler();
        }
        /** Forward provider events to listeners **/
        function _forward(evt) {
            _sendEvent(evt.type, evt);
        }
        
        function _nativeFullscreenHandler(evt) {
            _model.sendEvent(evt.type,evt);
            _sendEvent(events.JWPLAYER_FULLSCREEN, {fullscreen:evt.jwstate});
        }
        function _fullscreenHandler(evt) {
            // required for updating the controlbars toggle icon
            _forward(evt);
            if (!_adModel) {
                return;
            }
        }

        /** Handle the JWPLAYER_MEDIA_BUFFER_FULL event **/
        function _bufferFullHandler() {
            _adModel.getVideo().play();
        }

        /** Handle the JWPLAYER_MEDIA_COMPLETE event **/
        function _completeHandler() {
            if (_array && _arrayIndex + 1 < _array.length) {
                _arrayIndex++;
                var item = _array[_arrayIndex];
                _item = new PlaylistItem(item);
                _adModel.setPlaylist([item]);
                // check provider after item change
                _checkProvider();

                var curOpt;
                if (_optionList) {
                    curOpt = _optionList[_arrayIndex];
                }
                _options = _.extend(_defaultOptions, curOpt);
                _adModel.getVideo().load(_adModel.playlist[0]);
                _skipButton.reset(_options.skipoffset || -1);
                _completeTimeoutId = setTimeout(function() {
                    _sendEvent(events.JWPLAYER_PLAYLIST_ITEM, {
                        index: _arrayIndex
                    }, true);
                }, 0);
            } else {
                _completeTimeoutId = setTimeout(function() {
                    // this is called on every ad completion of the final video in a playlist
                    //   1) vast.js (to trigger ad_complete event)
                    //   2) display.js (to set replay icon and image)
                    _sendEvent(events.JWPLAYER_PLAYLIST_COMPLETE, {}, true);
                    _controller.jwInstreamDestroy(true, _this);
                }, 0);
            }
        }

        /** Handle the JWPLAYER_MEDIA_META event **/
        function _metaHandler(evt) {
            // If we're getting video dimension metadata from the provider, allow the view to resize the media
            if (evt.width && evt.height) {
                _view.releaseState();
                _view.resizeMedia();
            }
        }

        function _sendEvent(type, data) {
            data = data || {};
            if (_defaultOptions.tag && !data.tag) {
                data.tag = _defaultOptions.tag;
            }
            _this.sendEvent(type, data);
        }

        _this.setControls = function(mode) {
            if (mode) {
                _skipButton.show();
            } else {
                _skipButton.hide();
            }
        };

        /**************************************
         *****  Duplicate main html5 api  *****
         **************************************/

        _this.jwPlay = function() {
            if (_options.controlbarpausable.toString().toLowerCase() === 'true') {
                _this.jwInstreamPlay();
            }
        };

        _this.jwPause = function() {
            if (_options.controlbarpausable.toString().toLowerCase() === 'true') {
                _this.jwInstreamPause();
            }
        };

        _this.jwStop = function() {
            if (_options.controlbarstoppable.toString().toLowerCase() === 'true') {
                _controller.jwInstreamDestroy(false, _this);
                _controller.jwStop();
            }
        };

        _this.jwSeek = function(position) {
            switch (_options.controlbarseekable.toLowerCase()) {
                case 'never':
                    return;
                case 'always':
                    _this.jwInstreamSeek(position);
                    break;
                case 'backwards':
                    if (_adModel.position > position) {
                        _this.jwInstreamSeek(position);
                    }
                    break;
            }
        };

        _this.jwSeekDrag = function(state) {
            _adModel.seekDrag(state);
        };

        _this.jwGetPosition = function() {};
        _this.jwGetDuration = function() {};
        _this.jwGetWidth = _controller.jwGetWidth;
        _this.jwGetHeight = _controller.jwGetHeight;
        _this.jwGetFullscreen = _controller.jwGetFullscreen;
        _this.jwSetFullscreen = _controller.jwSetFullscreen;
        _this.jwGetVolume = function() {
            return _model.volume;
        };
        _this.jwSetVolume = function(vol) {
            _adModel.setVolume(vol);
            _controller.jwSetVolume(vol);
        };
        _this.jwGetMute = function() {
            return _model.mute;
        };
        _this.jwSetMute = function(state) {
            _adModel.setMute(state);
            _controller.jwSetMute(state);
        };
        _this.jwGetState = function() {
            if (!_adModel) {
                return states.IDLE;
            }
            return _adModel.state;
        };
        _this.jwGetPlaylist = function() {
            return [_item];
        };
        _this.jwGetPlaylistIndex = function() {
            return 0;
        };
        _this.jwGetStretching = function() {
            return _model.config.stretching;
        };
        _this.jwAddEventListener = function(type, handler) {
            _this.addEventListener(type, handler);
        };
        _this.jwRemoveEventListener = function(type, handler) {
            _this.removeEventListener(type, handler);
        };

        _this.jwSetCurrentQuality = function() {};
        _this.jwGetQualityLevels = function() {
            return [];
        };

        // for supporting api interface in html5 display
        _this.jwGetControls = function() {
            return _controller.jwGetControls();
        };

        _this.skin = _view._skin;
        _this.id = _controller.id + '_instream';

        return _this;
    };

    return Instream;
});