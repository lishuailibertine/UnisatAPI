(()=>{"use strict";var e={590:e=>{var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}h(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&h(e,"error",t,{once:!0})}(e,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function a(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){var i,o,s,c;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=a(e))>0&&s.length>i&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,c=f,console&&console.warn&&console.warn(c)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function h(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return a(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)r(a,this,t);else{var c=a.length,f=v(a,c);for(n=0;n<c;++n)r(f[n],this,t)}return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{const e=navigator.userAgent.toLowerCase(),t=(e.indexOf("trident"),e.indexOf("presto"),e.indexOf("appleWebKit"),e.indexOf("gecko")>-1&&e.indexOf("KHTML"),e.match(/appleWebKit.*mobile.*/),!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/)),r=e.indexOf("android")>-1||e.indexOf("linux")>-1;e.indexOf("iphone")>-1||e.indexOf("mac"),e.indexOf("ipad"),e.indexOf("ipod"),e.indexOf("safari"),e.indexOf("micromessenger"),e.indexOf("nokia"),e.indexOf("windowswechat"),/Android|iPhone|SymbianOS|Windows\s+Phone|iPad|iPod/i.test(e),(e.indexOf("msie")>-1||e.indexOf("edge")>-1||e.indexOf("trident")>-1)&&e.indexOf("opera"),e.indexOf("mqqbrowser"),e.indexOf("weibo")>-1||e.indexOf("Weibo"),!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/)&&screen.height,e.match(/\(i[^;]+;( u;)? cpu.+mac os x/)&&screen.height;let i=new Array;window.callback=function(e,t,n){for(var r in i)if(r==e){console.log("Callback->",e,t||n),t?i[r].reject(new Error(t)):i[r].resolve(n),delete i[r];break}};class o{constructor(e){this.handlerName=e}sendMessage(e,n){return new Promise(((o,s)=>{let u=e+"_"+Date.now();console.log("Request->",u,n||{});var a={Method:e,Params:n,MessageId:u};i[u]={reject:s,resolve:o},t?window.webkit.messageHandlers[this.handlerName].postMessage(JSON.stringify(a)):r?window[this.handlerName].postMessage(JSON.stringify(a)):window.callback(u,"Invalid host")}))}}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(i)?i:String(i)),r)}var i}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var f=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(l,e);var t,n,r,i,f=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(r);if(i){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=f.call(this)).setMaxListeners(100),e.messageBridge=new o("bitcoin"),e}return t=l,(n=[{key:"requestAccounts",value:function(){return this.messageBridge.sendMessage("requestAccounts",null)}},{key:"getAccounts",value:function(){return this.messageBridge.sendMessage("getAccounts",null)}},{key:"getNetwork",value:function(){return this.messageBridge.sendMessage("getNetwork",null)}},{key:"switchNetwork",value:function(e){return this.messageBridge.sendMessage("switchNetwork",e)}},{key:"getPublicKey",value:function(){return this.messageBridge.sendMessage("getPublicKey",null)}},{key:"getBalance",value:function(){return this.messageBridge.sendMessage("getBalance",null)}},{key:"getInscriptions",value:function(e,t){return this.messageBridge.sendMessage("getInscriptions",{cursor:e,size:t})}},{key:"sendBitcoin",value:function(e,t,n){return this.messageBridge.sendMessage("sendBitcoin",{toAddress:e,satoshis:t,options:n})}},{key:"sendInscription",value:function(e,t,n){return this.messageBridge.sendMessage("sendInscription",{address:e,inscriptionId:t,options:n})}},{key:"signMessage",value:function(e,t){return this.messageBridge.sendMessage("signMessage",{msg:e,type:t})}},{key:"pushTx",value:function(e){return this.messageBridge.sendMessage("pushTx",e)}},{key:"signPsbt",value:function(e,t){return this.messageBridge.sendMessage("signPsbt",{psbtHex:e,options:t})}},{key:"signPsbts",value:function(e,t){return this.messageBridge.sendMessage("signPsbts",{psbtHexs:e,options:t})}},{key:"pushPsbt",value:function(e){return this.messageBridge.sendMessage("pushPsbt",e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(n(590).EventEmitter));window.unisat||(window.unisat=new Proxy(f,{deleteProperty:function(){return!0}})),Object.defineProperty(window,"unisat",{value:new Proxy(f,{deleteProperty:function(){return!0}}),writable:!1}),window.dispatchEvent(new Event("unisat#initialized"))})()})();