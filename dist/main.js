(()=>{var e={895:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{static rand(){const e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/4294967296}static text(e=32){let t="";for(let i=0;i<e;i++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*n.rand()));return t}}t.default=n},307:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BridgeMessage=void 0;const i=n(337),r=n(486),s=n(895);t.BridgeMessage=class{constructor(e){this.handlerName=e,this.addCallback()}sendMessage(e,t){return new Promise(((n,o)=>{let a=s.default.text();console.log("Request->",e,a,t||{});var c={Method:e,Params:t,MessageId:a};r.callbacks[a]={reject:o,resolve:n},i.default.ios?window.webkit.messageHandlers[this.handlerName].postMessage(JSON.stringify(c)):i.default.android?window[this.handlerName].postMessage(JSON.stringify(c)):window[this.handlerName+"Callback"](a,"Invalid host")}))}addCallback(){const e={[this.handlerName+"Callback"]:r.callback};Object.assign(window,e)}}},486:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.callback=t.callbacks=void 0,t.callbacks=new Array,t.callback=function(e,n,i){for(var r in console.log("response->",e,n||i),t.callbacks)if(r==e){n?t.callbacks[r].reject(new Error(n)):t.callbacks[r].resolve(i),delete t.callbacks[r];break}}},165:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(307),t),r(n(895),t),r(n(337),t)},337:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=navigator.userAgent.toLowerCase(),i={trident:n.indexOf("trident")>-1,presto:n.indexOf("presto")>-1,webKit:n.indexOf("appleWebKit")>-1,gecko:n.indexOf("gecko")>-1&&-1===n.indexOf("KHTML"),mobile:!!n.match(/appleWebKit.*mobile.*/),ios:!!n.match(/\(i[^;]+;( u;)? cpu.+mac os x/),android:n.indexOf("android")>-1||n.indexOf("linux")>-1,iPhone:n.indexOf("iphone")>-1||n.indexOf("mac")>-1,iPad:n.indexOf("ipad")>-1,iPod:n.indexOf("ipod")>-1,webApp:-1===n.indexOf("safari"),wx:n.indexOf("micromessenger")>-1,nokia:n.indexOf("nokia")>-1,pcwx:n.indexOf("windowswechat")>-1,pc:!/Android|iPhone|SymbianOS|Windows\s+Phone|iPad|iPod/i.test(n),ie:(n.indexOf("msie")>-1||n.indexOf("edge")>-1||n.indexOf("trident")>-1)&&-1===n.indexOf("opera"),x5:n.indexOf("mqqbrowser")>-1,weibo:n.indexOf("weibo")>-1||n.indexOf("Weibo")>-1,iphoneX:!!n.match(/\(i[^;]+;( u;)? cpu.+mac os x/)&&screen.height>=812,iphone5:!!n.match(/\(i[^;]+;( u;)? cpu.+mac os x/)&&568===screen.height};t.default=i},590:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,s),i(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}p(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&p(e,"error",t,{once:!0})}(e,r)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,n,i){var r,s,o,u;if(a(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),(r=c(e))>0&&o.length>r&&!o.warned){o.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=o.length,u=d,console&&console.warn&&console.warn(u)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(i);return r.listener=n,i.wrapFn=r,r}function l(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):v(r,r.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function p(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(s){i.once&&e.removeEventListener(t,r),n(s)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=s[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var u=c.length,d=v(c,u);for(n=0;n<u;++n)i(d[n],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,i,r,s,o;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,s=Object.keys(n);for(i=0;i<s.length;++i)"removeListener"!==(r=s[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},s.prototype.listeners=function(e){return l(this,e,!0)},s.prototype.rawListeners=function(e){return l(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},460:function(e,t,n){var i,r,s=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};i=[n,t,n(590),n(165)],r=function(e,t,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MathWalletProvider=void 0;class r extends n.EventEmitter{constructor(){super(),this.requestAccounts=()=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("requestAccounts",null)})),this.getAccounts=()=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("getAccounts",null)})),this.getNetwork=()=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("getNetwork",null)})),this.switchNetwork=e=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("switchNetwork",e)})),this.getPublicKey=()=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("getPublicKey",null)})),this.getBalance=()=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("getBalance",null)})),this.getInscriptions=(e,t)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("getInscriptions",{cursor:e,size:t})})),this.sendBitcoin=(e,t,n)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("sendBitcoin",{toAddress:e,satoshis:t,options:n})})),this.sendInscription=(e,t,n)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("sendInscription",{toAddress:e,inscriptionId:t,options:n})})),this.signMessage=(e,t)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("signMessage",{msg:e,type:t})})),this.pushTx=e=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("pushTx",e)})),this.signPsbt=(e,t)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("signPsbt",{psbtHex:e,options:t})})),this.signPsbts=(e,t)=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("signPsbts",{psbtHex:e,options:t})})),this.pushPsbt=e=>s(this,void 0,void 0,(function*(){return this.messageBridge.sendMessage("pushPsbt",e)})),this.messageBridge=new i.BridgeMessage("bitcoin"),this.setMaxListeners(100)}}t.MathWalletProvider=r;const o=new r;window.unisat||(window.unisat=new Proxy(o,{deleteProperty:()=>!0})),Object.defineProperty(window,"unisat",{value:new Proxy(o,{deleteProperty:()=>!0}),writable:!1}),window.dispatchEvent(new Event("unisat#initialized"))}.apply(t,i),void 0===r||(e.exports=r)}},t={};!function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}(460)})();