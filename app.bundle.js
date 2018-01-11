/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};(function(a,b){'use strict'; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):'object'===('undefined'==typeof exports?'undefined':_typeof(exports))&&'object'===('undefined'==typeof module?'undefined':_typeof(module))?module.exports=b():a.smoothScroll=b()})(void 0,function(){'use strict';if('object'===('undefined'==typeof window?'undefined':_typeof(window))&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var a=function(a,b){return'HTML'===a.nodeName?-b:a.getBoundingClientRect().top+b},b=function(a){return .5>a?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1},c=function(a,c,d,e){return d>e?c:a+(c-a)*b(d/e)},d=function(b,d,e,f){d=d||500,f=f||window;var g=f.scrollTop||window.pageYOffset;if('number'==typeof b)var h=parseInt(b);else var h=a(b,g);var i=Date.now(),j=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){window.setTimeout(a,15)},k=function(){var a=Date.now()-i;f===window?window.scroll(0,c(g,h,a,d)):f.scrollTop=c(g,h,a,d),a>d?'function'==typeof e&&e(b):j(k)};k()},e=function(a){if(!a.defaultPrevented){a.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var b=document.getElementById(this.hash.substring(1));if(!b)return;d(b,500,function(a){location.replace('#'+a.id)})}};return document.addEventListener('DOMContentLoaded',function(){for(var b,a=document.querySelectorAll('a[href^="#"]:not([href="#"])'),c=a.length;b=a[--c];)b.addEventListener('click',e,!1)}),d}});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(13);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(0),__webpack_require__(3),__webpack_require__(6),__webpack_require__(7),__webpack_require__(8),__webpack_require__(9),__webpack_require__(11);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var Typed=__webpack_require__(4),type=new Typed('#typed',{stringsElement:'#typed-strings',smartBackspace:!0,loop:!0,typeSpeed:45});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};(function(a,b){'object'===( false?'undefined':_typeof(exports))&&'object'===( false?'undefined':_typeof(module))?module.exports=b(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):'object'===('undefined'==typeof exports?'undefined':_typeof(exports))?exports.Typed=b():a.Typed=b()})(void 0,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p='',b(0)}([function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var e=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=c(1),g=c(3),h=function(){function a(b,c){d(this,a),f.initializer.load(this,c,b),this.begin()}return e(a,[{key:'toggle',value:function(){this.pause.status?this.start():this.stop()}},{key:'stop',value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:'start',value:function(){this.typingComplete||!this.pause.status||(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:'destroy',value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:'reset',value:function(){var a=0>=arguments.length||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(''),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,a&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:'begin',value:function(){var a=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){a.currentElContent&&0!==a.currentElContent.length?a.backspace(a.currentElContent,a.currentElContent.length):a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)}},{key:'typewrite',value:function(a,b){var c=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var d=this.humanizer(this.typeSpeed),e=1;return!0===this.pause.status?void this.setPauseStatus(a,b,!0):void(this.timeout=setTimeout(function(){b=g.htmlParser.typeHtmlChars(a,b,c);var d=0,f=a.substr(b);if('^'===f.charAt(0)&&/^\^\d+/.test(f)){var h=1;f=/\d+/.exec(f)[0],h+=f.length,d=parseInt(f),c.temporaryPause=!0,c.options.onTypingPaused(c.arrayPos,c),a=a.substring(0,b)+a.substring(b+h),c.toggleBlinking(!0)}if('`'===f.charAt(0)){for(;'`'!==a.substr(b+e).charAt(0)&&(e++,!(b+e>a.length)););var i=a.substring(0,b),j=a.substring(i.length+1,b+e),k=a.substring(b+e+1);a=i+j+k,e--}c.timeout=setTimeout(function(){c.toggleBlinking(!1),b===a.length?c.doneTyping(a,b):c.keepTyping(a,b,e),c.temporaryPause&&(c.temporaryPause=!1,c.options.onTypingResumed(c.arrayPos,c))},d)},d))}},{key:'keepTyping',value:function(a,b,c){0===b&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),b+=c;var d=a.substr(0,b);this.replaceText(d),this.typewrite(a,b)}},{key:'doneTyping',value:function(a,b){var c=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){c.backspace(a,b)},this.backDelay))}},{key:'backspace',value:function(a,b){var c=this;if(!0===this.pause.status)return void this.setPauseStatus(a,b,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var d=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){b=g.htmlParser.backSpaceHtmlChars(a,b,c);var d=a.substr(0,b);if(c.replaceText(d),c.smartBackspace){var e=c.strings[c.arrayPos+1];c.stopNum=e&&d===e.substr(0,b)?b:0}b>c.stopNum?(b--,c.backspace(a,b)):b<=c.stopNum&&(c.arrayPos++,c.arrayPos===c.strings.length?(c.arrayPos=0,c.options.onLastStringBackspaced(),c.shuffleStringsIfNeeded(),c.begin()):c.typewrite(c.strings[c.sequence[c.arrayPos]],b))},d)}},{key:'complete',value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:'setPauseStatus',value:function(a,b,c){this.pause.typewrite=c,this.pause.curString=a,this.pause.curStrPos=b}},{key:'toggleBlinking',value:function(a){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==a){this.cursorBlinking=a;var b=a?'infinite':0;this.cursor.style.animationIterationCount=b}}},{key:'humanizer',value:function(a){return Math.round(Math.random()*a/2)+a}},{key:'shuffleStringsIfNeeded',value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-0.5}))}},{key:'initFadeOut',value:function(){var a=this;return this.el.className+=' '+this.fadeOutClass,this.cursor&&(this.cursor.className+=' '+this.fadeOutClass),setTimeout(function(){a.arrayPos++,a.replaceText(''),a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)}},{key:'replaceText',value:function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:'html'===this.contentType?this.el.innerHTML=a:this.el.textContent=a}},{key:'bindFocusEvents',value:function(){var a=this;this.isInput&&(this.el.addEventListener('focus',function(){a.stop()}),this.el.addEventListener('blur',function(){a.el.value&&0!==a.el.value.length||a.start()}))}},{key:'insertCursor',value:function(){!this.showCursor||this.cursor||(this.cursor=document.createElement('span'),this.cursor.className='typed-cursor',this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),a}();b['default']=h,a.exports=b['default']},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var e=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},f=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=c(2),h=function(a){return a&&a.__esModule?a:{default:a}}(g),i=function(){function a(){d(this,a)}return f(a,[{key:'load',value:function(a,b,c){if(a.el='string'==typeof c?document.querySelector(c):c,a.options=e({},h['default'],b),a.isInput='input'===a.el.tagName.toLowerCase(),a.attr=a.options.attr,a.bindInputFocusEvents=a.options.bindInputFocusEvents,a.showCursor=!a.isInput&&a.options.showCursor,a.cursorChar=a.options.cursorChar,a.cursorBlinking=!0,a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent,a.contentType=a.options.contentType,a.typeSpeed=a.options.typeSpeed,a.startDelay=a.options.startDelay,a.backSpeed=a.options.backSpeed,a.smartBackspace=a.options.smartBackspace,a.backDelay=a.options.backDelay,a.fadeOut=a.options.fadeOut,a.fadeOutClass=a.options.fadeOutClass,a.fadeOutDelay=a.options.fadeOutDelay,a.isPaused=!1,a.strings=a.options.strings.map(function(a){return a.trim()}),a.stringsElement='string'==typeof a.options.stringsElement?document.querySelector(a.options.stringsElement):a.options.stringsElement,a.stringsElement){a.strings=[],a.stringsElement.style.display='none';var d=Array.prototype.slice.apply(a.stringsElement.children),f=d.length;if(f)for(var g,j=0;j<f;j+=1)g=d[j],a.strings.push(g.innerHTML.trim())}for(var j in a.strPos=0,a.arrayPos=0,a.stopNum=0,a.loop=a.options.loop,a.loopCount=a.options.loopCount,a.curLoop=0,a.shuffle=a.options.shuffle,a.sequence=[],a.pause={status:!1,typewrite:!0,curString:'',curStrPos:0},a.typingComplete=!1,a.strings)a.sequence[j]=j;a.currentElContent=this.getCurrentElContent(a),a.autoInsertCss=a.options.autoInsertCss,this.appendAnimationCss(a)}},{key:'getCurrentElContent',value:function(a){var b='';return b=a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:'html'===a.contentType?a.el.innerHTML:a.el.textContent,b}},{key:'appendAnimationCss',value:function(a){if(a.autoInsertCss&&a.showCursor&&a.fadeOut){var b=document.createElement('style');b.type='text/css';var c='';a.showCursor&&(c+='\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),a.fadeOut&&(c+='\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      '),0===b.length||(b.innerHTML=c,document.head.appendChild(b))}}}]),a}();b['default']=i;var j=new i;b.initializer=j},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c={strings:['These are the default values...','You know what you should do?','Use your own!','Have a great day!'],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:'typed-fade-out',fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:'|',autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:'html',onComplete:function(){},preStringTyped:function(){},onStringTyped:function(){},onLastStringBackspaced:function(){},onTypingPaused:function(){},onTypingResumed:function(){},onReset:function(){},onStop:function(){},onStart:function(){},onDestroy:function(){}};b['default']=c,a.exports=b['default']},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}Object.defineProperty(b,'__esModule',{value:!0});var d=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=function(){function a(){c(this,a)}return d(a,[{key:'typeHtmlChars',value:function(a,b,c){if('html'!==c.contentType)return b;var d=a.substr(b).charAt(0);if('<'===d||'&'===d){var e='';for(e='<'===d?'>':';';a.substr(b+1).charAt(0)!==e&&(b++,!(b+1>a.length)););b++}return b}},{key:'backSpaceHtmlChars',value:function(a,b,c){if('html'!==c.contentType)return b;var d=a.substr(b).charAt(0);if('>'===d||';'===d){var e='';for(e='>'===d?'<':'&';a.substr(b-1).charAt(0)!==e&&(b--,!(0>b)););b--}return b}}]),a}();b['default']=e;var f=new e;b.htmlParser=f}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(a){return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],!a.children&&(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function get(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function get(){return a.i}}),a.webpackPolyfill=1),a};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var parallax=document.querySelectorAll('.parallax-layer'),hero=document.getElementById('hero');hero.addEventListener('mousemove',function(a){var b=15,c=a.pageX,d=a.pageY;parallax.forEach(function(a,e){a.style.backgroundPosition='calc(50% - '+c/((e+1)*b)+'px) calc(50% - '+d/((e+1)*b)+'px)'})});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var smoothScroll=__webpack_require__(0),upBtn=document.getElementById('project--up'),downBtn=document.getElementById('project--down'),projects=document.querySelectorAll('.project'),activeIndex=0;upBtn.addEventListener('click',function(){0<activeIndex&&(smoothScroll(projects[activeIndex-1]),activeIndex-=1)}),downBtn.addEventListener('click',function(){activeIndex<projects.length-1&&(smoothScroll(projects[activeIndex+1]),activeIndex+=1)});var getActiveProject=function(){for(var a=projects.length-1;0<=a;a--){var b=projects[a],c=b.getBoundingClientRect(),d=c.top;if(200>d)return b}return projects[0]},setActiveAnchor=function(){var a=getActiveProject(),b=document.querySelectorAll('a[href^="#project--"]'),c=document.querySelector('a[href=\'#'+a.id+'\']');b.forEach(function(a,b){a===c?(a.classList.add('active'),activeIndex=b):a.classList.remove('active')})};window.addEventListener('scroll',setActiveAnchor);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var handleIntersect=function(a){a.forEach(function(a){a.isIntersecting&&(a.target.classList.remove('hidden'),a.target.classList.add('animated','fadeInUp'))})},createObserver=function(a){if(IntersectionObserver){var b=new IntersectionObserver(handleIntersect,{root:null,rootMargin:'0px',threshold:0.5});a.forEach(function(a){a.classList.add('hidden'),b.observe(a)})}};window.addEventListener('load',function(){var a=document.querySelectorAll('.timeline--block'),b=document.querySelectorAll('.project');IntersectionObserver&&(createObserver(a),createObserver(b))},!1);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var slider=__webpack_require__(10);slider.getSlider();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)b(exports);else{var c={exports:{}};b(c.exports),a.simpleslider=c.exports}})(void 0,function(a){"use strict";function b(a,b){return null==a?b:a}function c(a){return a.length}function d(a,b,d,e,f,g){var h,j=[];b||(b=a.children);for(var k=c(b);0<=--k;)j[k]=b[k],h=j[k].style,h.position="absolute",h.top=h.left=h.zIndex=0,h[g]=e+d;return h[g]=f+d,h.zIndex=1,j}function e(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}Object.defineProperty(a,"__esModule",{value:!0}),a.getSlider=function(a){function f(){q=F(),p=setTimeout(function(){q=F(),s=w,j(k()),f()},s)}function g(){h()&&(p&&clearTimeout(p),f())}function h(){return!B&&1<c(r)}function i(){h()&&(s=w-(F()-q),clearTimeout(p),p=0)}function j(a){for(var b=c(r);0<=--b;)r[b].style.zIndex=1;r[a].style.zIndex=3,r[o].style.zIndex=2,m(r[o].style,z,A,r[a].style,y,z,v,0,0,C),o=a,D&&D(l(),o)}function k(){var a=o+1;return a>=c(r)?0:a}function l(){var a=o-1;return 0>a?c(r)-1:a}function m(a,b,c,d,e,f,g,h,i,j){function l(a,b,c){a[u]=j(i-h,b,c-b,g)+x}if(0<h)if(i-h<g)l(a,b,c),l(d,e,f);else return a[u]=c+x,d[u]=f+x,void(E&&E(o,k()));requestAnimationFrame(function(i){0===h&&(h=i),m(a,b,c,d,e,f,g,h,i,j)})}function n(){document.hidden?i():g()}a=a||{};var o,p,q,r,s,t=b(a.container,document.querySelector("*[data-simple-slider]")),u=b(a.prop,"left"),v=1e3*b(a.duration,0.5),w=1e3*b(a.delay,3),x=b(a.unit,"%"),y=b(a.init,-100),z=b(a.show,0),A=b(a.end,100),B=a.paused,C=b(a.ease,e),D=b(a.onChange,0),E=b(a.onChangeEnd,0),F=Date.now;return document.addEventListener("visibilitychange",n),function(){if(0<c(t.children)){var b=t.style;b.position="relative",b.overflow="hidden",b.display="block",r=d(t,a.children,x,y,z,u),o=0,s=w}}(),r&&1<c(r)&&g(),{currentIndex:function(){return o},pause:i,resume:g,nextIndex:k,prevIndex:l,next:function(){j(k()),g()},prev:function(){j(l()),g()},change:j,reverse:function(){var a=y;y=A,A=a,o=Math.abs(o-(c(r)-1)),r=r.reverse()},dispose:function(){clearTimeout(p),document.removeEventListener("visibilitychange",n),r=t=p=u=v=w=y=A=B=o=s=D=E=null}}}});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var basicLightbox=__webpack_require__(12),photos=document.querySelectorAll('.thumbnail-container');photos.forEach(function(a){a.addEventListener('click',function(){var b=a.getAttribute('data-src');basicLightbox.create('<img src="'+b+'">').show()})});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a){"object"==( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=a(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):("undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window).basicLightbox=a()}(function(){return function b(d,e,g){function a(i,f){if(!e[i]){if(!d[i]){var j="function"==typeof require&&require;if(!f&&j)return require(i,!0);if(h)return h(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[i]={exports:{}};d[i][0].call(k.exports,function(b){var c=d[i][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[i].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}({1:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(a,b){var c=a.children;return 1===c.length&&c[0].tagName===b},f=c.visible=function(a){return null!=(a=a||document.querySelector(".basicLightbox"))&&!0===a.ownerDocument.body.contains(a)};c.create=function(a,b){var c=function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",c=arguments[1],e=document.createElement("div");e.classList.add("basicLightbox"),null!=c.className&&e.classList.add(c.className),e.innerHTML="\n\t\t"+c.beforePlaceholder+"\n\t\t<div class=\"basicLightbox__placeholder\" role=\"dialog\">\n\t\t\t"+b+"\n\t\t</div>\n\t\t"+c.afterPlaceholder+"\n\t";var g=e.querySelector(".basicLightbox__placeholder"),h=d(g,"IMG"),i=d(g,"VIDEO"),f=d(g,"IFRAME");return!0===h&&e.classList.add("basicLightbox--img"),!0===i&&e.classList.add("basicLightbox--video"),!0===f&&e.classList.add("basicLightbox--iframe"),e}(a,b=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return!1!==(a=Object.assign({},a)).closable&&(a.closable=!0),"function"==typeof a.className&&(a.className=a.className()),"string"!=typeof a.className&&(a.className=null),"function"!=typeof a.beforeShow&&(a.beforeShow=function(){}),"function"!=typeof a.afterShow&&(a.afterShow=function(){}),"function"!=typeof a.beforeClose&&(a.beforeClose=function(){}),"function"!=typeof a.afterClose&&(a.afterClose=function(){}),"function"==typeof a.beforePlaceholder&&(a.beforePlaceholder=a.beforePlaceholder()),"string"!=typeof a.beforePlaceholder&&(a.beforePlaceholder=""),"function"==typeof a.afterPlaceholder&&(a.afterPlaceholder=a.afterPlaceholder()),"string"!=typeof a.afterPlaceholder&&(a.afterPlaceholder=""),a}(b)),g=function(a){return!1!==b.beforeClose(h)&&function(a,b){return a.classList.remove("basicLightbox--visible"),setTimeout(function(){requestAnimationFrame(function(){return!1===f(a)?b():(a.parentElement.removeChild(a),b())})},410),!0}(c,function(){if(b.afterClose(h),"function"==typeof a)return a(h)})};!0===b.closable&&(c.onclick=function(a){a.target===this&&(g(),function(a){"function"==typeof a.stopPropagation&&a.stopPropagation(),"function"==typeof a.preventDefault&&a.preventDefault()}(a))});var h={element:function element(){return c},visible:function visible(){return f(c)},show:function show(a){return!1!==b.beforeShow(h)&&function(a,b){return document.body.appendChild(a),setTimeout(function(){requestAnimationFrame(function(){return a.classList.add("basicLightbox--visible"),b()})},10),!0}(c,function(){if(b.afterShow(h),"function"==typeof a)return a(h)})},close:g};return h}},{}]},{},[1])(1)});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map