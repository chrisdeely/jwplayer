if(typeof jwplayer=="undefined"){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="6.0.2360";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(d){var j=document,g=window,b=navigator,h="undefined",f="string",c="object";var k=d.utils=function(){};k.exists=function(l){switch(typeof(l)){case f:return(l.length>0);break;case c:return(l!==null);case h:return false}return true};k.styleDimension=function(l){return l+(l.toString().indexOf("%")>0?"":"px")};k.getAbsolutePath=function(r,q){if(!k.exists(q)){q=j.location.href}if(!k.exists(r)){return undefined}if(a(r)){return r}var s=q.substring(0,q.indexOf("://")+3);var p=q.substring(s.length,q.indexOf("/",s.length+1));var m;if(r.indexOf("/")===0){m=r.split("/")}else{var n=q.split("?")[0];n=n.substring(s.length+p.length+1,n.lastIndexOf("/"));m=n.split("/").concat(r.split("/"))}var l=[];for(var o=0;o<m.length;o++){if(!m[o]||!k.exists(m[o])||m[o]=="."){continue}else{if(m[o]==".."){l.pop()}else{l.push(m[o])}}}return s+p+"/"+l.join("/")};function a(m){if(!k.exists(m)){return}var n=m.indexOf("://");var l=m.indexOf("?");return(n>0&&(l<0||(l>n)))}k.extend=function(){var l=k.extend["arguments"];if(l.length>1){for(var n=1;n<l.length;n++){for(var m in l[n]){if(k.exists(l[n][m])){l[0][m]=l[n][m]}}}return l[0]}return null};k.log=function(m,l){if(typeof console!=h&&typeof console.log!=h){if(l){console.log(m,l)}else{console.log(m)}}};var e=k.userAgentMatch=function(m){var l=b.userAgent.toLowerCase();return(l.match(m)!==null)};k.isIE=function(){return e(/msie/i)};k.isMobile=function(){return e(/(iP(hone|ad|od))|android/i)};k.isIOS=function(){return e(/iP(hone|ad|od)/i)};k.isIPod=function(){return e(/iP(hone|od)/i)};k.isIPad=function(){return e(/iPad/i)};k.saveCookie=function(l,m){j.cookie="jwplayer."+l+"="+m+"; path=/"};k.getCookies=function(){var o={};var n=j.cookie.split("; ");for(var m=0;m<n.length;m++){var l=n[m].split("=");if(l[0].indexOf("jwplayer.")==0){o[l[0].substring(9,l[0].length)]=l[1]}}return o};k.typeOf=function(m){var l=typeof m;if(l==="object"){if(!m){return"null"}return(m instanceof Array)?"array":l}else{return l}};k.translateEventResponse=function(n,l){var p=k.extend({},l);if(n==d.events.JWPLAYER_FULLSCREEN&&!p.fullscreen){p.fullscreen=p.message=="true"?true:false;delete p.message}else{if(typeof p.data==c){p=k.extend(p,p.data);delete p.data}else{if(typeof p.metadata==c){k.deepReplaceKeyName(p.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var m=["position","duration","offset"];for(var o in m){if(p[m[o]]){p[m[o]]=Math.round(p[m[o]]*1000)/1000}}return p};k.flashVersion=function(){var l=b.plugins,m;if(l!=h){m=l["Shockwave Flash"];if(m){return parseInt(m.description.replace(/\D+(\d+)\..*/,"$1"))}}if(typeof g.ActiveXObject!=h){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(m){return parseInt(m.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(n){}}return 0};k.getScriptPath=function(n){var l=j.getElementsByTagName("script");for(var m=0;m<l.length;m++){var o=l[m].src;if(o&&o.indexOf(n)>=0){return o.substr(0,o.indexOf(n))}}return""};k.deepReplaceKeyName=function(s,n,l){switch(d.utils.typeOf(s)){case"array":for(var p=0;p<s.length;p++){s[p]=d.utils.deepReplaceKeyName(s[p],n,l)}break;case c:for(var o in s){var r,q;if(n instanceof Array&&l instanceof Array){if(n.length!=l.length){continue}else{r=n;q=l}}else{r=[n];q=[l]}var m=o;for(var p=0;p<r.length;p++){m=m.replace(new RegExp(n[p],"g"),l[p])}s[m]=d.utils.deepReplaceKeyName(s[o],n,l);if(o!=m){delete s[o]}}break}return s};var i=k.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};k.getPluginPathType=function(m){if(typeof m!=f){return}m=m.split("?")[0];var n=m.indexOf("://");if(n>0){return i.ABSOLUTE}var l=m.indexOf("/");var o=k.extension(m);if(n<0&&l<0&&(!o||!isNaN(o))){return i.CDN}return i.RELATIVE};k.getPluginName=function(l){return l.replace(/^.*\/([^-]*)-?.*\.(swf|js)$/,"$1")};k.getPluginVersion=function(l){return l.replace(/[^-]*-?([^\.]*).*$/,"$1")};k.isYouTube=function(l){return(l.indexOf("youtube.com")>-1||l.indexOf("youtu.be")>-1)};k.foreach=function(n,m){for(var l in n){if(n.hasOwnProperty(l)){m(l)}}}})(jwplayer);(function(n){var d="video/",i="audio/",g="image",j="mp4",c="webm",b="aac",k="mp3",l="vorbis",m={mp4:d+j,vorbis:i+"ogg",webm:d+c,aac:i+j,mp3:i+k,hls:"application/vnd.apple.mpegurl"},h={mp4:m[j],f4v:m[j],m4v:m[j],mov:m[j],m4a:m[b],f4a:m[b],aac:m[b],mp3:m[k],ogg:m[l],oga:m[l],webm:m[c],m3u8:m.hls,},d="video",f={flv:d,f4v:d,mov:d,m4a:d,m4v:d,mp4:d,aac:d,mp3:"sound",smil:"rtmp",m3u8:"hls"};var a=n.extensionmap={};for(var e in h){a[e]={html5:h[e]}}for(e in f){if(!a[e]){a[e]={}}a[e].flash=f[e]}a.types=m;a.mimeType=function(p){for(var o in m){if(m[o]==p){return o}}};a.extType=function(o){return a.mimeType(h[o])}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,h=jwplayer.events,d=new h.eventdispatcher();b.extend(this,d);this.load=function(){var j=b.scriptloader.loaders[e];if(j&&(j.getStatus()==a.NEW||j.getStatus()==a.LOADING)){j.addEventListener(h.ERROR,g);j.addEventListener(h.COMPLETE,i);return}b.scriptloader.loaders[e]=this;if(f==a.NEW){f=a.LOADING;scriptTag=c.createElement("script");scriptTag.onload=i;scriptTag.onerror=g;scriptTag.onreadystatechange=function(){if(scriptTag.readyState=="loaded"||scriptTag.readyState=="complete"){i()}};c.getElementsByTagName("head")[0].appendChild(scriptTag);scriptTag.src=e}};function g(j){f=a.ERROR;d.sendEvent(h.ERROR)}function i(j){f=a.COMPLETE;d.sendEvent(h.COMPLETE)}this.getStatus=function(){return f}};b.scriptloader.loaders={}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}};a.extension=function(b){if(!b){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0];if(b.lastIndexOf(".")>-1){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(b.length==3){b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)}return parseInt(b,16)}})(jwplayer.utils);(function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)=="string"){l=(new Function("return "+l))()}f[i].push({listener:l,count:k})}catch(j){b.log("error",j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i<f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log("error",k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)=="string"){k=(new Function("return "+k))()}d.push({listener:k,count:j})}catch(i){b.log("error",i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i<d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log("error",j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!="undefined"){for(var j=0;j<f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count>0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i<d.length;i++){try{d[i].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count>0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(b){var a=jwplayer.utils,c=jwplayer.events,d="undefined";b.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};b.plugin=function(e){var g="http://plugins.longtailvideo.com",l=a.loaderstatus.NEW,m,k,n;var f=new c.eventdispatcher();a.extend(this,f);function h(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href);case a.pluginPathType.CDN:var q=a.getPluginName(e);var p=a.getPluginVersion(e);var o=(window.location.href.indexOf("https://")==0)?g.replace("http://","https://secure"):g;return o+"/"+jwplayer.version.split(".")[0]+"/"+q+"/"+q+(p!==""?("-"+p):"")+".js"}}function j(o){n=setTimeout(function(){l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE)},1000)}function i(o){l=a.loaderstatus.ERROR;f.sendEvent(c.ERROR)}this.load=function(){if(l==a.loaderstatus.NEW){if(e.lastIndexOf(".swf")>0){m=e;l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE);return}l=a.loaderstatus.LOADING;var o=new a.scriptloader(h());o.addEventListener(c.COMPLETE,j);o.addEventListener(c.ERROR,i);o.load()}};this.registerPlugin=function(q,p,o){if(n){clearTimeout(n);n=undefined}if(p&&o){m=o;k=p}else{if(typeof p=="string"){m=p}else{if(typeof p=="function"){k=p}else{if(!p&&!o){m=q}}}}l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:if(e.lastIndexOf(".swf")>0){return a.getAbsolutePath(m,window.location.href)}return a.getAbsolutePath(m,h());case a.pluginPathType.CDN:if(m.indexOf("-")>-1){return m+"h"}return m+"-h"}}return null};this.getJS=function(){return k};this.getPluginmode=function(){if(typeof m!=d&&typeof k!=d){return b.pluginmodes.HYBRID}else{if(typeof m!=d){return b.pluginmodes.FLASH}else{if(typeof k!=d){return b.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(p,o,q){return new k(p,o,q)};this.getURL=function(){return e}}})(jwplayer.plugins);(function(b){var a=b.utils,c=b.events;b.plugins.pluginloader=function(j,h){var i={},n=a.loaderstatus.NEW,g=false,d=false,l=false,e=new c.eventdispatcher();a.extend(this,e);function f(){if(l){e.sendEvent(c.ERROR)}else{if(!d){d=true;n=a.loaderstatus.COMPLETE;e.sendEvent(c.COMPLETE)}}}function m(){if(!d){var p=0;for(plugin in i){var o=i[plugin].getStatus();if(o==a.loaderstatus.LOADING||o==a.loaderstatus.NEW){p++}}if(p==0){f()}}}this.setupPlugins=function(q,o,v){var p={length:0,plugins:{}};var s={length:0,plugins:{}};for(var r in i){var t=i[r].getPluginName();if(i[r].getFlashPath()){p.plugins[i[r].getFlashPath()]=o.plugins[r];p.plugins[i[r].getFlashPath()].pluginmode=i[r].getPluginmode();p.length++}if(i[r].getJS()){var u=document.createElement("div");u.id=q.id+"_"+t;u.style.position="absolute";u.style.zIndex=s.length+10;s.plugins[t]=i[r].getNewInstance(q,o.plugins[r],u);s.length++;q.onReady(v(s.plugins[t],u,true));q.onResize(v(s.plugins[t],u))}}q.plugins=s.plugins;return p};this.load=function(){if(a.typeOf(h)!="object"){m();return}n=a.loaderstatus.LOADING;g=true;for(var o in h){if(a.exists(o)){i[o]=j.addPlugin(o);i[o].addEventListener(c.COMPLETE,m);i[o].addEventListener(c.ERROR,k)}}for(o in i){i[o].load()}g=false;m()};var k=this.pluginFailed=function(){if(!l){l=true;f()}};this.getStatus=function(){return n}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)=="array"){for(var b=0;b<c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(b){var a=b.item=function(d){var c=jwplayer.utils.extend({},a.defaults,d);if(c.sources.length==0){c.sources=[new b.source(c)]}for(var e=0;e<c.sources.length;e++){c.sources[e]=new b.source(c.sources[e])}return c};a.defaults={description:"",image:"",mediaid:"",title:"",duration:-1,sources:[]}})(jwplayer.playlist);(function(d){var b=undefined,a=jwplayer.utils,c={file:b,width:b,label:b,bitrate:b,type:b};d.source=function(f){var e=a.extend({},c);for(var g in c){if(a.exists(f[g])){e[g]=f[g];delete f[g]}}if(e.type&&e.type.indexOf("/")>0){e.type=a.extensionmap.mimeType(e.type)}return e}})(jwplayer.playlist);(function(b){var a=b.utils,c=b.events;var d=b.embed=function(o){var l=new d.config(o.config),h,j="Error loading player: ",g=b.plugins.loadPlugins(o.id,l.plugins);l.id=o.id;h=document.getElementById(o.id);function i(r,q){for(var p in q){if(typeof r[p]=="function"){(r[p]).call(r,q[p])}}}function e(){if(a.typeOf(l.playlist)=="array"&&l.playlist.length<2){if(l.playlist.length==0||!l.playlist[0].sources||l.playlist[0].sources.length==0){m();return}}if(g.getStatus()==a.loaderstatus.COMPLETE){for(var r=0;r<l.modes.length;r++){if(l.modes[r].type&&d[l.modes[r].type]){var s=l.modes[r].config;var p=a.extend({},s?d.config.addConfig(l,s):l);var q=new d[l.modes[r].type](h,l.modes[r],p,g,o);if(q.supportsConfig()){q.addEventListener(c.ERROR,f);q.embed();i(o,p.events);return o}}}if(l.fallback){a.log("No suitable players found and fallback enabled");new d.download(h,l,m)}else{a.log("No suitable players found and fallback disabled")}}}function f(p){n(h,j+p.message)}function k(p){n(h,j+"Could not load plugins")}function m(){n(h,j+"No media sources found")}function n(p,r){if(!l.fallback){return}var q=p.style;q.backgroundColor="#000";q.color="#FFF";q.width=a.styleDimension(l.width);q.height=a.styleDimension(l.height);q.display="table";q.padding="50px";var t=document.createElement("p"),s=t.style;s.verticalAlign="middle";s.textAlign="center";s.display="table-cell";s.font="15px/20px Arial, Helvetica, sans-serif";t.innerHTML=r.replace(":",":<br>");p.innerHTML="";p.appendChild(t)}b.embed.errorScreen=n;g.addEventListener(c.COMPLETE,e);g.addEventListener(c.ERROR,k);g.load();return o}})(jwplayer);(function(d){var a=d.utils,h=d.embed,b=d.playlist.item,f=undefined;var c=h.config=function(j){function m(q,p,o){for(var n=0;n<q.length;n++){var r=q[n].type;if(!q[n].src){q[n].src=o[r]?o[r]:p+"jwplayer."+r+(r=="flash"?".swf":".js")}}}var l={fallback:true,height:300,primary:"html5",width:400,base:f},i={html5:{type:"html5"},flash:{type:"flash"}},k=a.extend(l,j);if(!k.base){k.base=a.getScriptPath("jwplayer.js")}if(!k.modes){k.modes=(k.primary=="flash")?[i.flash,i.html5]:[i.html5,i.flash]}if(k.listbar){k.playlistsize=k.listbar.size;k.playlistposition=k.listbar.position}m(k.modes,k.base,{html5:k.html5player,flash:k.flashplayer});e(k);return k};c.addConfig=function(i,j){e(j);return a.extend(i,j)};function e(l){if(!l.playlist){var n={};for(var k in b.defaults){g(l,n,k)}if(!n.sources){if(l.levels){n.sources=l.levels;delete l.levels}else{var j={};g(l,j,"file");g(l,j,"type");n.sources=j.file?[j]:[]}}l.playlist=[n]}else{for(var m=0;m<l.playlist.length;m++){l.playlist[m]=new b(l.playlist[m])}}}function g(k,i,j){if(a.exists(k[j])){i[j]=k[j];delete k[j]}}})(jwplayer);(function(d){var f=d.embed,i=d.utils,h=document,g="pointer",c="none",a="block",e="100%",b="absolute";f.download=function(m,x,k){var p=i.extend({},x),t,n=p.width?p.width:480,q=p.height?p.height:320,y,r,j=x.logo?x.logo:{prefix:"http://l.longtailvideo.com/download/",file:"logo.png",margin:10};function w(){var D,E,C,F,B=p.playlist,H,A;if(B&&B.length){H=B[0];A=H.sources;for(F=0;F<A.length;F++){var z=A[F],G=z.type?z.type:i.extensionmap.extType(i.extension(z.file));if(z.file){if(("mp4,flv,webm,aac,mp3,vorbis").split(",").indexOf(G)>-1){D=z.file;E=H.image;continue}else{if(i.isYouTube(z.file)){C=z.file}}}}}else{return}if(D){y=D;r=E;if(j.prefix){j.prefix+=d.version.split(/\W/).splice(0,2).join("/")+"/"}s();o()}else{if(C){l(C)}else{k()}}}function s(){if(m){t=u("a","display",m);u("div","iconbackground",t);u("div","icon",t);u("div","logo",t);if(y){t.setAttribute("href",i.getAbsolutePath(y))}}}function v(z,B){var C=h.querySelectorAll(z);for(var A=0;A<C.length;A++){for(var D in B){C[A].style[D]=B[D]}}}function o(){var z="#"+m.id+" .jwdownload";v(z+"display",{width:i.styleDimension(n),height:i.styleDimension(q),background:"black center no-repeat "+(r?"url("+r+")":""),backgroundSize:"contain",position:b,border:c,display:a});v(z+"display div",{position:b,width:e,height:e});v(z+"logo",{bottom:j.margin+"px",left:j.margin+"px",background:"bottom left no-repeat url("+j.prefix+j.file+")"});v(z+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"});v(z+"iconbackground",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"})}function u(z,C,B){var A=h.createElement(z);if(C){A.className="jwdownload"+C}if(B){B.appendChild(A)}return A}function l(z){var A=u("embed","",m);A.src="http://www.youtube.com/v/"+(/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i).exec(z).slice(1).join("");A.type="application/x-shockwave-flash";A.width=n;A.height=q}w()}})(jwplayer);(function(b){var a=b.utils,c=b.events;b.embed.flash=function(k,l,p,j,n){var f=new b.events.eventdispatcher(),g=a.flashVersion();a.extend(this,f);function q(s,r,t){var u=document.createElement("param");u.setAttribute("name",r);u.setAttribute("value",t);s.appendChild(u)}function o(s,t,r){return function(u){if(r){document.getElementById(n.id+"_wrapper").appendChild(t)}var v=document.getElementById(n.id).getPluginConfig("display");if(typeof s.resize=="function"){s.resize(v.width,v.height)}t.style.left=v.x;t.style.top=v.h}}function i(t){if(!t){return{}}var v={};for(var s in t){var r=t[s];for(var u in r){v[s+"."+u]=r[u]}}return v}function m(u,t){if(u[t]){var w=u[t];for(var s in w){var r=w[s];if(typeof r=="string"){if(!u[s]){u[s]=r}}else{for(var v in r){if(!u[s+"."+v]){u[s+"."+v]=r[v]}}}}delete u[t]}}function e(u){if(!u){return{}}var x={},w=[];for(var r in u){var t=a.getPluginName(r);var s=u[r];w.push(r);for(var v in s){x[t+"."+v]=s[v]}}x.plugins=w.join(",");return x}function h(t){var r="";for(var s in t){if(typeof(t[s])=="object"){r+=s+"="+encodeURIComponent("[[JSON]]"+a.jsonToString(t[s]))+"&"}else{r+=s+"="+encodeURIComponent(t[s])+"&"}}return r.substring(0,r.length-1)}this.embed=function(){p.id=n.id;if(g<10){f.sendEvent(c.ERROR,{message:"Flash version must be 10.0 or greater"});return false}var C;var w=a.extend({},p);if(k.id+"_wrapper"==k.parentNode.id){C=document.getElementById(k.id+"_wrapper")}else{C=document.createElement("div");C.id=k.id+"_wrapper";C.style.position="relative";C.style.width=a.styleDimension(w.width);C.style.height=a.styleDimension(w.height);k.parentNode.replaceChild(C,k);C.appendChild(k)}var r=j.setupPlugins(n,w,o);if(r.length>0){a.extend(w,e(r.plugins))}else{delete w.plugins}m(w,"components");m(w,"providers");if(typeof w["dock.position"]!="undefined"){if(w["dock.position"].toString().toLowerCase()=="false"){w.dock=w["dock.position"];delete w["dock.position"]}}var B=a.getCookies();for(var s in B){if(typeof(w[s])=="undefined"){w[s]=B[s]}}var D="#000000",z,u,t=w.wmode?w.wmode:(w.height&&w.height<=40?"transparent":"opaque"),v=["height","width","modes","events","primary","base","fallback"];for(var y=0;y<v.length;y++){delete w[v[y]]}u=h(w);if(a.isIE()){var A='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+D+'" width="100%" height="100%" id="'+k.id+'" name="'+k.id+'" tabindex=0"">';A+='<param name="movie" value="'+l.src+'">';A+='<param name="allowfullscreen" value="true">';A+='<param name="allowscriptaccess" value="always">';A+='<param name="seamlesstabbing" value="true">';A+='<param name="wmode" value="'+t+'">';A+='<param name="flashvars" value="'+u+'">';A+="</object>";k.outerHTML=A;z=document.getElementById(k.id)}else{var x=document.createElement("object");x.setAttribute("type","application/x-shockwave-flash");x.setAttribute("data",l.src);x.setAttribute("width","100%");x.setAttribute("height","100%");x.setAttribute("bgcolor","#000000");x.setAttribute("id",k.id);x.setAttribute("name",k.id);x.setAttribute("tabindex",0);q(x,"allowfullscreen","true");q(x,"allowscriptaccess","always");q(x,"seamlesstabbing","true");q(x,"wmode",t);q(x,"flashvars",u);k.parentNode.replaceChild(x,k);z=x}n.container=z;n.setPlayer(z,"flash")};this.supportsConfig=function(){if(g){if(p){try{var t=p.playlist[0],r=t.sources;if(typeof r=="undefined"){return true}else{for(var s=0;s<r.length;s++){if(r[s].file&&d(r[s].file,r[s].type)){return true}}}}catch(u){return false}}else{return true}}return false};function d(r,s){if(a.isYouTube(r)){return true}if(s=="rtmp"){return true}var t=a.extensionmap[s?s:a.extension(r)];if(!t){return false}return !!(t.flash)}}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap,d=c.events;c.embed.html5=function(g,h,o,f,k){var j=this,e=new d.eventdispatcher();a.extend(j,e);function l(q,r,p){return function(s){var t=document.getElementById(g.id+"_displayarea");if(p){t.appendChild(r)}if(typeof q.resize=="function"){q.resize(t.clientWidth,t.clientHeight)}r.left=t.style.left;r.top=t.style.top}}j.embed=function(){if(c.html5){f.setupPlugins(k,o,l);g.innerHTML="";var p=c.utils.extend({},o);if(p.skin&&p.skin.toLowerCase().indexOf(".zip")>0){p.skin=p.skin.replace(/\.zip/i,".xml")}var q=new c.html5.player(p);k.container=document.getElementById(k.id);k.setPlayer(q,"html5")}else{var r=new a.scriptloader(h.src);r.addEventListener(d.ERROR,i);r.addEventListener(d.COMPLETE,j.embed);r.load()}};function i(p){j.sendEvent(p.type,{message:"HTML5 player not found"})}j.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(o.playlist)=="string"){return true}else{var p=o.playlist[0].sources;for(var r=0;r<p.length;r++){var q=p[r].file,s=p[r].type;if(n(q,s)){return true}}}}catch(t){return false}}return false};function n(p,q){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}var r=b[q?q:a.extension(p)];if(!r){return false}if(r.flash&&!r.html5){return false}return m(r.html5)}function m(p){var q=c.vid;if(!p){return true}try{if(q.canPlayType(p)){return true}else{if(p=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return q.canPlayType("audio/mpeg")}else{return false}}}catch(r){return false}}}})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state;var f=d.api=function(s){var w=this,g={},k={},z={},n=[],h=undefined,C=false,o=[],x=undefined,r={},m={};w.container=s;w.id=s.id;w.getBuffer=function(){return v("jwGetBuffer")};w.getContainer=function(){return w.container};w.addButton=function(G,E,F,J){try{m[J]=F;var I="jwplayer('"+h.id+"').callback('"+J+"')";h.jwDockAddButton(G,E,I,J)}catch(H){a.log("Could not add dock button"+H.message)}};w.removeButton=function(E){v("jwDockRemoveButton",E)},w.callback=function(E){if(m[E]){m[E]()}};w.getDuration=function(){return v("jwGetDuration")};w.getFullscreen=function(){return v("jwGetFullscreen")};w.getStretching=function(){return v("jwGetStretching")};w.getHeight=function(){return v("jwGetHeight")};w.getLockState=function(){return v("jwGetLockState")};w.getMeta=function(){return w.getItemMeta()};w.getMute=function(){return v("jwGetMute")};w.getPlaylist=function(){var F=v("jwGetPlaylist");if(w.renderingMode=="flash"){a.deepReplaceKeyName(F,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var E=0;E<F.length;E++){if(!a.exists(F[E].index)){F[E].index=E}}return F};w.getPlaylistItem=function(E){if(!a.exists(E)){E=w.getCurrentItem()}return w.getPlaylist()[E]};w.getPosition=function(){return v("jwGetPosition")};w.getRenderingMode=function(){return w.renderingMode};w.getState=function(){return v("jwGetState")};w.getVolume=function(){return v("jwGetVolume")};w.getWidth=function(){return v("jwGetWidth")};w.setFullscreen=function(E){if(!a.exists(E)){v("jwSetFullscreen",!v("jwGetFullscreen"))}else{v("jwSetFullscreen",E)}return w};w.setStretching=function(E){v("jwSetStretching",E);return w};w.setMute=function(E){if(!a.exists(E)){v("jwSetMute",!v("jwGetMute"))}else{v("jwSetMute",E)}return w};w.lock=function(){return w};w.unlock=function(){return w};w.load=function(E){v("jwLoad",E);return w};w.playlistItem=function(E){v("jwPlaylistItem",parseInt(E));return w};w.playlistPrev=function(){v("jwPlaylistPrev");return w};w.playlistNext=function(){v("jwPlaylistNext");return w};w.resize=function(F,E){if(w.renderingMode=="html5"){h.jwResize(F,E)}else{var G=document.getElementById(w.id+"_wrapper");if(G){G.style.width=a.styleDimension(F);G.style.height=a.styleDimension(E)}}return w};w.play=function(E){if(typeof E=="undefined"){E=w.getState();if(E==b.PLAYING||E==b.BUFFERING){v("jwPause")}else{v("jwPlay")}}else{v("jwPlay",E)}return w};w.pause=function(E){if(typeof E=="undefined"){E=w.getState();if(E==b.PLAYING||E==b.BUFFERING){v("jwPause")}else{v("jwPlay")}}else{v("jwPause",E)}return w};w.stop=function(){v("jwStop");return w};w.seek=function(E){v("jwSeek",E);return w};w.setVolume=function(E){v("jwSetVolume",E);return w};w.loadInstream=function(F,E){x=new f.instream(this,h,F,E);return x};w.getQualityLevels=function(){return v("jwGetQualityLevels")};w.getCurrentQuality=function(){return v("jwGetCurrentQuality")};w.setCurrentQuality=function(E){v("jwSetCurrentQuality",E)};var q={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED};a.foreach(q,function(E){w[E]=B(q[E],y)});var u={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};a.foreach(u,function(E){w[E]=B(u[E],p)});function B(E,F){return function(G){return F(E,G)}}w.remove=function(){if(!C){throw"Cannot call remove() before player is ready";return}l(this)};function l(E){o=[];f.destroyPlayer(E.id)}w.setup=function(E){if(d.embed){l(w);if(a.clearCss){a.clearCss("#"+w.id)}var F=d(w.id);F.config=E;return new d.embed(F)}return w};w.registerPlugin=function(G,F,E){d.plugins.registerPlugin(G,F,E)};w.setPlayer=function(E,F){h=E;w.renderingMode=F};w.detachMedia=function(){if(w.renderingMode=="html5"){return v("jwDetachMedia")}};w.attachMedia=function(){if(w.renderingMode=="html5"){return v("jwAttachMedia")}};function p(E,F){if(!k[E]){k[E]=[];y(e.JWPLAYER_PLAYER_STATE,D(E))}k[E].push(F);return w}function D(E){return function(G){var F=G.newstate,I=G.oldstate;if(F==E){var H=k[F];if(H){for(var J=0;J<H.length;J++){if(typeof H[J]=="function"){H[J].call(this,{oldstate:I,newstate:F})}}}}}}function A(E,F,G){if(!z[E]){z[E]={}}if(!z[E][F]){z[E][F]=[];y(F,j(E,F))}z[E][F].push(G);return w}function j(E,F){return function(H){if(E==H.component){var G=z[E][F];if(G){for(var I=0;I<G.length;I++){if(typeof G[I]=="function"){G[I].call(this,H)}}}}}}function i(E,F){try{E.jwAddEventListener(F,'function(dat) { jwplayer("'+w.id+'").dispatchEvent("'+F+'", dat); }')}catch(G){a.log("Could not add internal listener")}}function y(E,F){if(!g[E]){g[E]=[];if(h&&C){i(h,E)}}g[E].push(F);return w}w.dispatchEvent=function(G){if(g[G]){var F=a.translateEventResponse(G,arguments[1]);for(var E=0;E<g[G].length;E++){if(typeof g[G][E]=="function"){g[G][E].call(this,F)}}}};w.dispatchInstreamEvent=function(E){if(x){x.dispatchEvent(E,arguments)}};function v(){if(C){var G=arguments[0],E=[];for(var F=1;F<arguments.length;F++){E.push(arguments[F])}if(typeof h!="undefined"&&typeof h[G]=="function"){if(E.length==2){return(h[G])(E[0],E[1])}else{if(E.length==1){return(h[G])(E[0])}else{return(h[G])()}}}return null}else{o.push(arguments)}}w.playerReady=function(E){C=true;if(!h){w.setPlayer(document.getElementById(E.id))}w.container=document.getElementById(w.id);a.foreach(g,function(F){i(h,F)});y(e.JWPLAYER_PLAYLIST_ITEM,function(F){r={}});y(e.JWPLAYER_MEDIA_META,function(F){a.extend(r,F.metadata)});w.dispatchEvent(e.API_READY);while(o.length>0){v.apply(this,o.shift())}};w.getItemMeta=function(){return r};w.getCurrentItem=function(){return v("jwGetPlaylistIndex")};function t(G,I,H){var E=[];if(!I){I=0}if(!H){H=G.length-1}for(var F=I;F<=H;F++){E.push(G[F])}return E}return w};f.selectPlayer=function(h){var g;if(!a.exists(h)){h=0}if(h.nodeType){g=h}else{if(typeof h=="string"){g=document.getElementById(h)}}if(g){var i=f.playerById(g.id);if(i){return i}else{return f.addPlayer(new f(g))}}else{if(typeof h=="number"){return c[h]}}return null};f.playerById=function(h){for(var g=0;g<c.length;g++){if(c[g].id==h){return c[g]}}return null};f.addPlayer=function(g){for(var h=0;h<c.length;h++){if(c[h]==g){return g}}c.push(g);return g};f.destroyPlayer=function(i){var h=-1;for(var k=0;k<c.length;k++){if(c[k].id==i){h=k;continue}}if(h>=0){var l=c[h].id,g=document.getElementById(l+"_wrapper");if(g){var j=document.createElement("div");j.id=l;g.parentNode.replaceChild(j,g)}c.splice(h,1)}return null}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal("jwLoadInstream",o,r)}function n(s,t){d.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+j.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s<g[v].length;s++){if(typeof g[v][s]=="function"){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};