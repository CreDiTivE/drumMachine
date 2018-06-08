!function(n,e,A){"use strict";function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null),k&&(k.$destroy(),k=null),l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){b=a.$new();var d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()}),y()}),(k=d.scope=b).$emit("$viewContentLoaded"),k.$eval(u)}else y()}var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v),v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f)),w(a)}}}(n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new(e.extend(function(){},{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];return a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){return a="?"===c?c:null,c="*"===c?c:null,h.push({name:b,optional:!!a}),e=e||"",(a?"":e)+"(?:"+(a?e:"")+(c?"(.+?)":"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1"),f.regexp=RegExp("^"+a+"$",b?"i":""),f}var h={};this.when=function(a,c){if(h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c)),a){var b="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this},this.otherwise=function(a){return this.when(null,a),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=function(){var a,b;return e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&((b=s(f,{params:e.extend({},c.search(),a),pathParams:a})).$$route=f)}),b||h.null&&s(h.null,{params:{},pathParams:{}})}(),m=r.current;d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u?(m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m)):(d||m)&&(u=!1,a.$broadcast("$routeChangeStart",d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(function(a,c){var b=[];return e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];b.push(c[f]),b.push(e[2]||""),delete c[f]}}),b.join("")}(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var c,b,a=e.extend({},d.resolve);return e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)}),e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=b,c=n.get(b,{cache:v}).then(function(a){return a.data}))),e.isDefined(c)&&(a.$template=c),f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)}))}var u=!1,r={routes:h,reload:function(){u=!0,a.$evalAsync(l)}};return a.$on("$locationChangeSuccess",l),r}]})).provider("$routeParams",function(){this.$get=function(){return{}}}),n.directive("ngView",x),n.directive("ngView",z),x.$inject=["$route","$anchorScroll","$animate"],z.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){var e={},o=null,n=!0,r=!1;try{"undefined"!=typeof AudioContext?o=new AudioContext:"undefined"!=typeof webkitAudioContext?o=new webkitAudioContext:n=!1}catch(t){n=!1}if(!n)if("undefined"!=typeof Audio)try{new Audio}catch(t){r=!0}else r=!0;if(n){var a=void 0===o.createGain?o.createGainNode():o.createGain();a.gain.value=1,a.connect(o.destination)}var i=function(e){this._volume=1,this._muted=!1,this.usingWebAudio=n,this.ctx=o,this.noAudio=r,this._howls=[],this._codecs=e,this.iOSAutoEnable=!0};i.prototype={volume:function(e){var o=this;if(0<=(e=parseFloat(e))&&e<=1){for(var r in o._volume=e,n&&(a.gain.value=e),o._howls)if(o._howls.hasOwnProperty(r)&&!1===o._howls[r]._webAudio)for(var t=0;t<o._howls[r]._audioNode.length;t++)o._howls[r]._audioNode[t].volume=o._howls[r]._volume*o._volume;return o}return n?a.gain.value:o._volume},mute:function(){return this._setMuted(!0),this},unmute:function(){return this._setMuted(!1),this},_setMuted:function(e){var o=this;for(var r in o._muted=e,n&&(a.gain.value=e?0:o._volume),o._howls)if(o._howls.hasOwnProperty(r)&&!1===o._howls[r]._webAudio)for(var t=0;t<o._howls[r]._audioNode.length;t++)o._howls[r]._audioNode[t].muted=e},codecs:function(e){return this._codecs[e]},_enableiOSAudio:function(){var e=this;if(!o||!e._iOSEnabled&&/iPhone|iPad|iPod/i.test(navigator.userAgent)){e._iOSEnabled=!1;var n=function(){var r=o.createBuffer(1,1,22050),t=o.createBufferSource();t.buffer=r,t.connect(o.destination),void 0===t.start?t.noteOn(0):t.start(0),setTimeout(function(){(t.playbackState===t.PLAYING_STATE||t.playbackState===t.FINISHED_STATE)&&(e._iOSEnabled=!0,e.iOSAutoEnable=!1,window.removeEventListener("touchend",n,!1))},0)};return window.addEventListener("touchend",n,!1),e}}};var u=null,d={};r||(u=new Audio,d={mp3:!!u.canPlayType("audio/mpeg;").replace(/^no$/,""),opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")});var l=new i(d),f=function(e){var r=this;r._autoplay=e.autoplay||!1,r._buffer=e.buffer||!1,r._duration=e.duration||0,r._format=e.format||null,r._loop=e.loop||!1,r._loaded=!1,r._sprite=e.sprite||{},r._src=e.src||"",r._pos3d=e.pos3d||[0,0,-.5],r._volume=void 0!==e.volume?e.volume:1,r._urls=e.urls||[],r._rate=e.rate||1,r._model=e.model||null,r._onload=[e.onload||function(){}],r._onloaderror=[e.onloaderror||function(){}],r._onend=[e.onend||function(){}],r._onpause=[e.onpause||function(){}],r._onplay=[e.onplay||function(){}],r._onendTimer=[],r._webAudio=n&&!r._buffer,r._audioNode=[],r._webAudio&&r._setupAudioNode(),void 0!==o&&o&&l.iOSAutoEnable&&l._enableiOSAudio(),l._howls.push(r),r.load()};if(f.prototype={load:function(){var e=this,o=null;if(r)e.on("loaderror",new Error("No audio support."));else{for(var n=0;n<e._urls.length;n++){var t,a;if(e._format)t=e._format;else{if(a=e._urls[n],(t=/^data:audio\/([^;,]+);/i.exec(a))||(t=/\.([^.]+)$/.exec(a.split("?",1)[0])),!t)return void e.on("loaderror",new Error("Could not extract format from passed URLs, please add format parameter."));t=t[1].toLowerCase()}if(d[t]){o=e._urls[n];break}}if(o){if(e._src=o,e._webAudio)s(e,o);else{var u=new Audio;u.addEventListener("error",function(){u.error&&4===u.error.code&&(i.noAudio=!0),e.on("loaderror",{type:u.error?u.error.code:0})},!1),e._audioNode.push(u),u.src=o,u._pos=0,u.preload="auto",u.volume=l._muted?0:e._volume*l.volume();var f=function(){e._duration=Math.ceil(10*u.duration)/10,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play(),u.removeEventListener("canplaythrough",f,!1)};u.addEventListener("canplaythrough",f,!1),u.load()}return e}e.on("loaderror",new Error("No codec support for selected audio sources."))}},urls:function(e){var o=this;return e?(o.stop(),o._urls="string"==typeof e?[e]:e,o._loaded=!1,o.load(),o):o._urls},play:function(e,n){var r=this;return"function"==typeof e&&(n=e),e&&"function"!=typeof e||(e="_default"),r._loaded?r._sprite[e]?r._inactiveNode(function(t){t._sprite=e;var a=0<t._pos?t._pos:r._sprite[e][0]/1e3,i=0;r._webAudio?(i=r._sprite[e][1]/1e3-t._pos,0<t._pos&&(a=r._sprite[e][0]/1e3+a)):i=r._sprite[e][1]/1e3-(a-r._sprite[e][0]/1e3);var u,d=!(!r._loop&&!r._sprite[e][2]),f="string"==typeof n?n:Math.round(Date.now()*Math.random())+"";if(function(){var o={id:f,sprite:e,loop:d};u=setTimeout(function(){!r._webAudio&&d&&r.stop(o.id).play(e,o.id),r._webAudio&&!d&&(r._nodeById(o.id).paused=!0,r._nodeById(o.id)._pos=0,r._clearEndTimer(o.id)),r._webAudio||d||r.stop(o.id),r.on("end",f)},i/r._rate*1e3),r._onendTimer.push({timer:u,id:o.id})}(),r._webAudio){var s=r._sprite[e][0]/1e3,_=r._sprite[e][1]/1e3;t.id=f,t.paused=!1,p(r,[d,s,_],f),r._playStart=o.currentTime,t.gain.value=r._volume,void 0===t.bufferSource.start?d?t.bufferSource.noteGrainOn(0,a,86400):t.bufferSource.noteGrainOn(0,a,i):d?t.bufferSource.start(0,a,86400):t.bufferSource.start(0,a,i)}else{if(4!==t.readyState&&(t.readyState||!navigator.isCocoonJS))return r._clearEndTimer(f),function(){var o=r,a=e,i=n,u=t,d=function(){o.play(a,i),u.removeEventListener("canplaythrough",d,!1)};u.addEventListener("canplaythrough",d,!1)}(),r;t.readyState=4,t.id=f,t.currentTime=a,t.muted=l._muted||t.muted,t.volume=r._volume*l.volume(),setTimeout(function(){t.play()},0)}return r.on("play"),"function"==typeof n&&n(f),r}):"function"==typeof n&&n():r.on("load",function(){r.play(e,n)}),r},pause:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.pause(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=o.pos(null,e),o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,void 0===n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else n.pause();return o.on("pause"),o},stop:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.stop(e)}),o;o._clearEndTimer(e);var n=e?o._nodeById(e):o._activeNode();if(n)if(n._pos=0,o._webAudio){if(!n.bufferSource||n.paused)return o;n.paused=!0,void 0===n.bufferSource.stop?n.bufferSource.noteOff(0):n.bufferSource.stop(0)}else isNaN(n.duration)||(n.pause(),n.currentTime=0);return o},mute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.mute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=0:n.muted=!0),o},unmute:function(e){var o=this;if(!o._loaded)return o.on("play",function(){o.unmute(e)}),o;var n=e?o._nodeById(e):o._activeNode();return n&&(o._webAudio?n.gain.value=o._volume:n.muted=!1),o},volume:function(e,o){var n=this;if(0<=(e=parseFloat(e))&&e<=1){if(n._volume=e,!n._loaded)return n.on("play",function(){n.volume(e,o)}),n;var r=o?n._nodeById(o):n._activeNode();return r&&(n._webAudio?r.gain.value=e:r.volume=e*l.volume()),n}return n._volume},loop:function(e){var o=this;return"boolean"==typeof e?(o._loop=e,o):o._loop},sprite:function(e){var o=this;return"object"==typeof e?(o._sprite=e,o):o._sprite},pos:function(e,n){var r=this;if(!r._loaded)return r.on("load",function(){r.pos(e)}),"number"==typeof e?r:r._pos||0;e=parseFloat(e);var t=n?r._nodeById(n):r._activeNode();if(t)return 0<=e?(r.pause(n),t._pos=e,r.play(t._sprite,n),r):r._webAudio?t._pos+(o.currentTime-r._playStart):t.currentTime;if(0<=e)return r;for(var a=0;a<r._audioNode.length;a++)if(r._audioNode[a].paused&&4===r._audioNode[a].readyState)return r._webAudio?r._audioNode[a]._pos:r._audioNode[a].currentTime},pos3d:function(e,o,n,r){var t=this;if(o=void 0!==o&&o?o:0,n=void 0!==n&&n?n:-.5,!t._loaded)return t.on("play",function(){t.pos3d(e,o,n,r)}),t;if(!(0<=e||e<0))return t._pos3d;if(t._webAudio){var a=r?t._nodeById(r):t._activeNode();a&&(t._pos3d=[e,o,n],a.panner.setPosition(e,o,n),a.panner.panningModel=t._model||"HRTF")}return t},fade:function(e,o,n,r,t){var a=this,i=Math.abs(e-o),u=o<e?"down":"up",d=i/.01,l=n/d;if(!a._loaded)return a.on("load",function(){a.fade(e,o,n,r,t)}),a;a.volume(e,t);for(var f=1;f<=d;f++)!function(){var e=a._volume+("up"===u?.01:-.01)*f,n=Math.round(1e3*e)/1e3,i=o;setTimeout(function(){a.volume(n,t),n===i&&r&&r()},l*f)}()},fadeIn:function(e,o,n){return this.volume(0).play().fade(0,e,o,n)},fadeOut:function(e,o,n,r){var t=this;return t.fade(t._volume,e,o,function(){n&&n(),t.pause(r),t.on("end")},r)},_nodeById:function(e){for(var o=this,n=o._audioNode[0],r=0;r<o._audioNode.length;r++)if(o._audioNode[r].id===e){n=o._audioNode[r];break}return n},_activeNode:function(){for(var e=this,o=null,n=0;n<e._audioNode.length;n++)if(!e._audioNode[n].paused){o=e._audioNode[n];break}return e._drainPool(),o},_inactiveNode:function(e){for(var o=this,n=null,r=0;r<o._audioNode.length;r++)if(o._audioNode[r].paused&&4===o._audioNode[r].readyState){e(o._audioNode[r]),n=!0;break}var t;if(o._drainPool(),!n)if(o._webAudio)t=o._setupAudioNode(),e(t);else{o.load(),t=o._audioNode[o._audioNode.length-1];var a=navigator.isCocoonJS?"canplaythrough":"loadedmetadata",i=function(){t.removeEventListener(a,i,!1),e(t)};t.addEventListener(a,i,!1)}},_drainPool:function(){var e,o=this,n=0;for(e=0;e<o._audioNode.length;e++)o._audioNode[e].paused&&n++;for(e=o._audioNode.length-1;0<=e&&!(n<=5);e--)o._audioNode[e].paused&&(o._webAudio&&o._audioNode[e].disconnect(0),n--,o._audioNode.splice(e,1))},_clearEndTimer:function(e){for(var o=this,n=-1,r=0;r<o._onendTimer.length;r++)if(o._onendTimer[r].id===e){n=r;break}var t=o._onendTimer[n];t&&(clearTimeout(t.timer),o._onendTimer.splice(n,1))},_setupAudioNode:function(){var e=this,n=e._audioNode,r=e._audioNode.length;return n[r]=void 0===o.createGain?o.createGainNode():o.createGain(),n[r].gain.value=e._volume,n[r].paused=!0,n[r]._pos=0,n[r].readyState=4,n[r].connect(a),n[r].panner=o.createPanner(),n[r].panner.panningModel=e._model||"equalpower",n[r].panner.setPosition(e._pos3d[0],e._pos3d[1],e._pos3d[2]),n[r].panner.connect(n[r]),n[r]},on:function(e,o){var n=this,r=n["_on"+e];if("function"==typeof o)r.push(o);else for(var t=0;t<r.length;t++)o?r[t].call(n,o):r[t].call(n);return n},off:function(e,o){var n=this,r=n["_on"+e];if(o){for(var t=0;t<r.length;t++)if(o===r[t]){r.splice(t,1);break}}else n["_on"+e]=[];return n},unload:function(){for(var o=this,n=o._audioNode,r=0;r<o._audioNode.length;r++)n[r].paused||(o.stop(n[r].id),o.on("end",n[r].id)),o._webAudio?n[r].disconnect(0):n[r].src="";for(r=0;r<o._onendTimer.length;r++)clearTimeout(o._onendTimer[r].timer);var t=l._howls.indexOf(o);null!==t&&0<=t&&l._howls.splice(t,1),delete e[o._src],o=null}},n)var s=function(o,n){if(n in e)return o._duration=e[n].duration,void c(o);if(/^data:[^;]+;base64,/.test(n)){for(var r=atob(n.split(",")[1]),t=new Uint8Array(r.length),a=0;a<r.length;++a)t[a]=r.charCodeAt(a);_(t.buffer,o,n)}else{var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){_(i.response,o,n)},i.onerror=function(){o._webAudio&&(o._buffer=!0,o._webAudio=!1,o._audioNode=[],delete o._gainNode,delete e[n],o.load())};try{i.send()}catch(u){i.onerror()}}},_=function(n,r,t){o.decodeAudioData(n,function(o){o&&(e[t]=o,c(r,o))},function(e){r.on("loaderror",e)})},c=function(e,o){e._duration=o?o.duration:e._duration,0===Object.getOwnPropertyNames(e._sprite).length&&(e._sprite={_default:[0,1e3*e._duration]}),e._loaded||(e._loaded=!0,e.on("load")),e._autoplay&&e.play()},p=function(n,r,t){var a=n._nodeById(t);a.bufferSource=o.createBufferSource(),a.bufferSource.buffer=e[n._src],a.bufferSource.connect(a.panner),a.bufferSource.loop=r[0],r[0]&&(a.bufferSource.loopStart=r[1],a.bufferSource.loopEnd=r[1]+r[2]),a.bufferSource.playbackRate.value=n._rate};"function"==typeof define&&define.amd&&define(function(){return{Howler:l,Howl:f}}),"undefined"!=typeof exports&&(exports.Howler=l,exports.Howl=f),"undefined"!=typeof window&&(window.Howler=l,window.Howl=f)}();"use strict";var app=angular.module("JVS",[]);app.run(["pads","$q","$rootScope","$timeout",function(pads,$q,$rootScope,$timeout){$rootScope.loading=!0,pads.loadInstruments().then(function(result){pads.loadSequence().then(function(result){$rootScope.machine=pads,$rootScope.tempo=pads.tempo.call(this),$rootScope.loading=!1})})}]),app.controller("JVSCtrl",function($scope){$scope.lock=!1,$scope.playLoop=function(){$scope.lock||($scope.machine.play(),$scope.fade_msg_play=!0,console.log("Playing"),$scope.lock=!0)},$scope.stopLoop=function(){$scope.lock=!1,$scope.machine.stop()},$scope.resetLoop=function(){$scope.machine.reset()},$scope.updateTempo=function(){$scope.machine.setTempo($scope.tempo)},$scope.EditBPM=function(){var bpmEdit=document.getElementById("bpmEdit");document.getElementById("bpm").style.display="none",bpmEdit.style.display="inline-block"},$scope.CloseEdit=function(){bpm.style.display="inline-block",bpmEdit.style.display="none"}}),app.filter("range",function(){return function(input,total){total=parseInt(total);for(var i=0;i<total;i++)input.push(i);return input}}),app.factory("pads",function($http,$q,timerQueue){var _currentBeat=0,_delay=100,_gridLength=16,_tempo=120,_timers=timerQueue,_rows=[];function setTempo(newTempo){_tempo=newTempo,_delay=beatDelay()}function stop(){!1,_timers.clear()}function reset(){stop(),_currentBeat=0,function(){for(var i=0;i<_rows.length;i++)_rows[i].reset()}()}function beatDelay(){return 1e3/(2*_tempo)*60}return{loadInstruments:function(instrumentFile){var item,player,instrument,file=instrumentFile||"/app/services/data/instruments/kit-1.json";return $http.get(file).then(function(response){for(var i=0;i<4;i++)item=response.data.instruments[i],player=new Howl({urls:["assets/audio/"+item.file]}),instrument=new Instrument(player,item),_rows.push(new Row(instrument,_gridLength));return"Instruments Loaded"})},loadSequence:function(sequenceFile){var file=sequenceFile||"/app/services/data/sequences/seq-1.json";return reset(),$http.get(file).then(function(response){_gridLength=response.data.gridLength,setTempo(response.data.tempo);for(var i=0;i<4;i++)for(var j=0;j<_gridLength;j++)"1"===response.data.rows[i][j]?_rows[i].getBeats()[j].activate():_rows[i].getBeats()[j].deactivate();return"Sequence Loaded"})},gridLength:function(){return _gridLength},currentBeat:function(){return _currentBeat},rows:function(){return _rows},tempo:function(){return _tempo},setTempo:setTempo,play:function(){!0,_timers.add(function playBeat(){return function(){_gridLength<=_currentBeat&&(_currentBeat=0);for(var i=0;i<_rows.length;i++)_rows[i].playSound(_currentBeat);_currentBeat+=1,_timers.add(playBeat(),_delay)}}(),beatDelay())},stop:stop,reset:reset}});var Beat=function(){var active=!1;return{isActive:function(){return active},activate:function(){active=!0},deactivate:function(){active=!1},toggle:function(){active=!active}}},Instrument=function(player,inst){var audioPlayer=player,name=inst.name,description=inst.description;return{getName:function(){return name},getDescription:function(){return description},play:function(){try{return audioPlayer.play(),!0}catch(e){return console.log("Unable to play sound",e),!1}}}},Row=function(instrument,initialBeats){instrument=instrument;var beats=[];function addBeats(num){for(var i=0;i<num;i++)beats.push(new Beat)}return addBeats(initialBeats),{getInstrument:function(){return instrument},getBeats:function(){return beats},addBeats:addBeats,reset:function(){for(var i=0;i<beats.length;i++)beats[i].deactivate()},playSound:function(index){return!!beats[index].isActive()&&instrument.play()}}};app.factory("timerQueue",function($timeout){var _queue=new Array;return{queue:function(){return _queue},add:function(fn,delay){_queue.push($timeout(fn,delay))},clear:function(){for(var i=0;i<_queue.length;i++)$timeout.cancel(_queue[i]);_queue=[]}}});