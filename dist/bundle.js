/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	var LoginController = __webpack_require__(5);
	var HomeController = __webpack_require__(6);
	var SignUpController = __webpack_require__(7);
	// require('../content/css/index.scss');
	__webpack_require__(8);
	__webpack_require__(18);
	__webpack_require__(20);
	//require('../node_modules/semantic-ui/dist/semantic.js');
	__webpack_require__(22);
	__webpack_require__(24);

	var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate', 'LoginController', 'HomeController', 'SignUpController']);

	zerdaReader.config(['$routeProvider', function($routeProvider){
	  $routeProvider
	    .when('/login', {
	      templateUrl: 'views/login.html',
	      controller: 'LoginController',
	    })
	    .when('/signup', {
	      templateUrl: 'views/registration.html',
	      controller: 'SignUpController',
	    })
	    .when('/home', {
	      templateUrl: 'views/home.html',
	      controller: 'HomeController',
	    }).otherwise({
	      redirectTo: '/login',
	    });
	}]);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.6.1
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(z){'use strict';function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.1/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(C(a)||E(a)||D&&a instanceof
	D)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(y(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(C(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Dc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
	b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Ec(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Fc(a){return function(b,d){a(d,b)}}function ie(){return++rb}function Sb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(F(g)||y(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&F(n)?fa(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
	Tb(n)?a[m]=n.clone():(F(a[m])||(a[m]=C(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,wa.call(arguments,1),!1)}function je(a){return Sb(a,wa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function w(){}function Ya(a){return a}function ma(a){return function(){return a}}function Vb(a){return y(a.toString)&&a.toString!==na}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==
	typeof a}function F(a){return null!==a&&"object"===typeof a}function Dc(a){return null!==a&&"object"===typeof a&&!Gc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){return"[object Date]"===na.call(a)}function y(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===na.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function ke(a){return a&&Y(a.length)&&
	le.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function me(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(C(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Dc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
	(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=C(a)?[]:Object.create(Gc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
	a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(y(a.cloneNode))return a.cloneNode(!0)}
	var e=[],g=[];if(b){if(ke(b)||"[object ArrayBuffer]"===na.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");C(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function qa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(C(a)){if(!C(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!qa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?qa(a.getTime(),
	b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||C(b)||fa(b)||Xa(b))return!1;d=W();for(c in a)if("$"!==c.charAt(0)&&!y(a[c])){if(!qa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!y(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!y(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
	ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Hc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Hc,b)}function Ic(a){return E(a)?JSON.parse(a):a}function Jc(a,b){a=a.replace(ne,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Wb(a,
	b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Jc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Ja?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Kc(a){try{return decodeURIComponent(a)}catch(b){}}function Lc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
	c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Kc(f),v(f)&&(e=v(e)?Kc(e):!0,va.call(b,f)?C(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Xb(a){var b=[];q(a,function(a,c){C(a)?q(a,function(a){b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))}):b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))});return b.length?b.join("&"):""}function db(a){return ka(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ka(a,b){return encodeURIComponent(a).replace(/%40/gi,
	"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function oe(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,E(d=a.getAttribute(d)))return d;return null}function pe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(qe?(f.strictDi=null!==oe(d,"strict-di"),
	b(d,c?[c]:[],f)):z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Mc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===z.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
	b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;z&&f.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(f,""));if(z&&!e.test(z.name))return c();z.name=z.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};y($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function re(){z.name=
	"NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function se(a){a=$.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Nc(a,b){b=b||"_";return a.replace(te,function(a,c){return(c?b:"")+a.toLowerCase()})}function ue(){var a;if(!Oc){var b=sb();(oa=x(b)?z.jQuery:b?z[b]:void 0)&&oa.fn.on?(D=oa,R(oa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){for(var c,
	f=0,e;null!=(e=b[f]);f++)(c=oa._data(e,"events"))&&c.$destroy&&oa(e).triggerHandler("$destroy");a(b)}):D=X;$.element=D;Oc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&C(a)&&(a=a[a.length-1]);fb(y(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Pa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Pc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
	b[g],a&&(a=(f=a)[c]);return!d&&y(a)?bb(f,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=D(wa.call(a,0,f))),c.push(b);return c||a}function W(){return Object.create(null)}function Yb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Vb(a)||C(a)||fa(a)?cb(a):a.toString()}return a}function ve(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
	a.$$minErr||M;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d,f){f||(f=c);return function(b,c){c&&y(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return J}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],r=a("$injector","invoke","push",f),J={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
	requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:r,run:function(a){p.push(a);return this}};h&&r(h);return J})}})}
	function ra(a,b){if(C(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function we(a){var b=[];return JSON.stringify(a,function(a,c){c=Hc(a,c);if(F(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function xe(a){R(a,{bootstrap:Mc,copy:Fa,extend:R,merge:je,equals:qa,element:D,forEach:q,injector:eb,noop:w,bind:bb,toJson:cb,fromJson:Ic,identity:Ya,isUndefined:x,isDefined:v,isString:E,isFunction:y,
	isObject:F,isNumber:Y,isElement:Tb,isArray:C,version:ye,isDate:fa,lowercase:P,uppercase:vb,callbacks:{$$counter:0},getTestability:se,reloadWithDebugInfo:re,$$minErr:M,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ka,$$stringify:Yb});Zb=ve(z);Zb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ze});a.provider("$compile",Qc).directive({a:Ae,input:Rc,textarea:Rc,form:Be,script:Ce,select:De,option:Ee,ngBind:Fe,ngBindHtml:Ge,ngBindTemplate:He,ngClass:Ie,ngClassEven:Je,ngClassOdd:Ke,
	ngCloak:Le,ngController:Me,ngForm:Ne,ngHide:Oe,ngIf:Pe,ngInclude:Qe,ngInit:Re,ngNonBindable:Se,ngPluralize:Te,ngRepeat:Ue,ngShow:Ve,ngStyle:We,ngSwitch:Xe,ngSwitchWhen:Ye,ngSwitchDefault:Ze,ngOptions:$e,ngTransclude:af,ngModel:bf,ngList:cf,ngChange:df,pattern:Sc,ngPattern:Sc,required:Tc,ngRequired:Tc,minlength:Uc,ngMinlength:Uc,maxlength:Vc,ngMaxlength:Vc,ngValue:ef,ngModelOptions:ff}).directive({ngInclude:gf}).directive(wb).directive(Wc);a.provider({$anchorScroll:hf,$animate:jf,$animateCss:kf,$$animateJs:lf,
	$$animateQueue:mf,$$AnimateRunner:nf,$$animateAsyncRun:of,$browser:pf,$cacheFactory:qf,$controller:rf,$document:sf,$$isDocumentHidden:tf,$exceptionHandler:uf,$filter:Xc,$$forceReflow:vf,$interpolate:wf,$interval:xf,$http:yf,$httpParamSerializer:zf,$httpParamSerializerJQLike:Af,$httpBackend:Bf,$xhrFactory:Cf,$jsonpCallbacks:Df,$location:Ef,$log:Ff,$parse:Gf,$rootScope:Hf,$q:If,$$q:Jf,$sce:Kf,$sceDelegate:Lf,$sniffer:Mf,$templateCache:Nf,$templateRequest:Of,$$testability:Pf,$timeout:Qf,$window:Rf,$$rAF:Sf,
	$$jqLite:Tf,$$HashMap:Uf,$$cookieReader:Vf})}])}function gb(a,b){return b.toUpperCase()}function xb(a){return a.replace(Wf,gb)}function Yc(a){a=a.nodeType;return 1===a||!a||9===a}function Zc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if($b.test(a)){d=f.appendChild(b.createElement("div"));c=(Xf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Yf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
	f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function X(a){if(a instanceof X)return a;var b;E(a)&&(a=S(a),b=!0);if(!(this instanceof X)){if(b&&"<"!==a.charAt(0))throw ac("nosel");return new X(a)}if(b){b=z.document;var d;a=(d=Zf.exec(a))?[b.createElement(d[1])]:(d=Zc(a,b))?d.childNodes:[];bc(this,a)}else y(a)?$c(a):bc(this,a)}function cc(a){return a.cloneNode(!0)}function yb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
	function ad(a,b,d,c){if(v(c))throw ac("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ad(a)),delete ib[d],a.ng339=void 0))}function zb(a,
	b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++$f,d=ib[d]={events:{},data:{},handle:void 0});return d}function dc(a,b,d){if(Yc(a)){var c,f=v(d),e=!f&&b&&!F(b),g=!b;a=(a=zb(a,!e))&&a.data;if(f)a[xb(b)]=d;else{if(g)return a;if(e)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",S((" "+(a.getAttribute("class")||
	"")+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=S(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",S(d))}}function bc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function bd(a,b){return Eb(a,"$"+(b||"ngController")+
	"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=C(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(v(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function cd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function ag(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function $c(a){function b(){z.document.removeEventListener("DOMContentLoaded",
	b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function dd(a,b){var d=Gb[b.toLowerCase()];return d&&ed[xa(a)]&&d}function bg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
	!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||cg;1<g&&(e=ra(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function cg(a,b,d){d.call(a,b)}function dg(a,b,d){var c=b.relatedTarget;c&&(c===a||eg.call(a,c))||d.call(a,b)}function Tf(){this.$get=function(){return R(X,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,
	b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function la(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ie)():d+":"+a}function Qa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function fd(a){a=(Function.prototype.toString.call(a)+" ").replace(fg,"");return a.match(gg)||a.match(hg)}function ig(a){return(a=fd(a))?
	"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))q(b,Fc(a));else return a(b,c)}}function c(a,b){Pa(a,"service");if(y(b)||C(b))b=p.instantiate(b);if(!b.$get)throw da("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=O.invoke(b,this);if(x(c))throw da("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||C(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
	c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Zb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):C(a)?b.push(p.invoke(a)):tb(a,"module")}catch(e){throw C(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
	k)throw da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);C(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
	Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=C(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Qa([],!0),n={$provide:{provider:d(c),factory:d(e),
	service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ma(b),!1)}),constant:d(function(a,b){Pa(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=O.invoke(d,c);return O.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw da("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return O.invoke(c.$get,c,
	void 0,a)}),O=J;n.$injectorProvider={$get:ma(J)};var u=g(a),O=J.get("$injector");O.strictDi=b;q(u,function(a){a&&O.invoke(a)});return O}function hf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;y(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
	Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||ag(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;C(a)&&(a=a.join(" "));C(b)&&(b=b.join(" "));return a+" "+b}function jg(a){E(a)&&
	(a=a.split(" "));var b=W();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return F(a)?a:{}}function kg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(J--,0===J)for(;O.length;)try{O.pop()()}catch(b){d.error(b)}}}function e(){ia=null;g();h()}function g(){u=A();u=x(u)?null:u;qa(u,B)&&(u=B);B=u}function h(){if(U!==k.url()||H!==u)U=k.url(),H=u,q(K,function(a){a(k.url(),u)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=!1;var J=
	0,O=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():O.push(a)};var u,H,U=l.href,t=b.find("base"),ia=null,A=c.history?function(){try{return m.state}catch(a){}}:w;g();H=u;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=H===e;if(U===b&&(!c.history||f))return k;var h=U&&Ba(U)===Ba(b);U=b;H=e;!c.history||h&&f?(h||(ia=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
	e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(ia=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),H=u);ia&&(ia=b);return k}return ia||l.href.replace(/%27/g,"'")};k.state=function(){return u};var K=[],I=!1,B=null;k.onUrlChange=function(b){if(!I){if(c.history)D(a).on("popstate",e);D(a).on("hashchange",e);I=!0}K.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
	""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];f(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),f(w),!0):!1}}function pf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new kg(a,c,b,d)}]}function qf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,h=
	R({},c,{id:a}),k=W(),l=c&&c.capacity||Number.MAX_VALUE,m=W(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=W();g=0;m=W();n=p=null},destroy:function(){m=
	h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Nf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Qc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=W();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
	{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!C(b)&&F(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=me("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
	m=/^(on[a-z]+|formaction)$/,n=W();this.directive=function U(b,d){fb(b,"name");Pa(b,"directive");E(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);y(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw ea("badrestrict",l,b);k.restrict=
	l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Fc(U));return this};this.component=function(a,b){function c(a){function e(b){return y(b)||C(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:lg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
	q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,y(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?
	(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return v(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var O=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(O=a,this):O};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
	b,c,f,n,I,B,L,N,G){function T(){try{if(!--za)throw da=void 0,ea("infchng",J);B.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=void 0;if(a.length)throw a;})}finally{za++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ma(a,
	b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof D||(a=D(a));var f=Na(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw ea("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?D(ha(g,D("<div>").append(a).html())):
	c?Oa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Na(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(D(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
	k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=C(a)||a instanceof D,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===La&&M(a,r,k);m=fc(a[r],[],l,0===r?d:void 0,e);(f=m.length?X(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Na(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function M(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
	Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=W(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function fc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);Y(b,
	Ca(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var A=!1,B=!1;k=p[K];l=k.name;m=k.value;k=Ca(l);(n=Ha.test(k))&&(l=l.replace(gd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(A=l,B=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,dd(a,k)&&(c[k]=!0);ra(a,b,m,k,n);Y(b,k,"A",d,e,A,B)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
	"off");if(!Ga)break;f=a.className;F(f)&&(f=f.animVal);if(E(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),Y(b,k,"C",d,e)&&(c[k]=S(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ma(b,a.nodeValue);break;case 8:if(!Fa)break;kb(a,b,c,d,e)}b.sort(ka);return b}function kb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);Y(b,h,"M",d,e)&&(c[h]=S(f[2]))}}catch(k){}}function hd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
	e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function id(a,b,c){return function(d,e,f,g,h){e=hd(e[0],b,c);return a(d,e,f,g,h)}}function gc(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function X(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=id(a,c,d));a.require=t.require;a.directiveName=L;if(B===t||t.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=id(b,c,d));b.require=
	t.require;b.directiveName=L;if(B===t||t.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);U&&(e=N);c||(c=U?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw ea("noslot",d,ya(L));}else return l(a,b,e,c,Q)}var p,t,u,G,J,N,T,L;b===f?(g=d,L=d.$$element):(L=D(f),g=new s(L,d));J=e;B?G=e.$new(!0):K&&(J=e.$parent);l&&(T=m,T.$$boundTransclude=l,T.isSlotFilled=function(a){return!!l.$$slots[a]});A&&(N=
	ca(L,g,T,A,G,e,B));B&&(ba.$$addScopeInfo(L,G,!0,!(I&&(I===B||I===B.$$originalDirective))),ba.$$addScopeClass(L,!0),G.$$isolateBindings=B.$$isolateBindings,t=oa(e,g,G,G.$$isolateBindings,B),t.removeWatches&&G.$on("$destroy",t.removeWatches));for(p in N){t=A[p];u=N[p];var Hb=t.$$bindings.bindToController;if(r){u.bindingInfo=Hb?oa(J,g,u.instance,Hb,t):{};var O=u();O!==u.instance&&(u.instance=O,L.data("$"+t.name+"Controller",O),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=
	oa(J,g,u.instance,Hb,t))}else u.instance=u(),L.data("$"+t.name+"Controller",u.instance),u.bindingInfo=oa(J,g,u.instance,Hb,t)}q(A,function(a,b){var c=a.require;a.bindToController&&!C(c)&&F(c)&&R(N[b].instance,V(b,c,L,N))});q(N,function(a){var b=a.instance;if(y(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(y(b.$onInit))try{b.$onInit()}catch(e){c(e)}y(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());y(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
	p=0;for(t=h.length;p<t;p++)u=h[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);var Q=e;B&&(B.template||null===B.templateUrl)&&(Q=G);a&&a(Q,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);q(N,function(a){a=a.instance;y(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,A=l.controllerDirectives,B=l.newIsolateScopeDirective,I=l.templateDirective,u=l.nonTlbTranscludeDirective,
	J=!1,N=!1,U=l.hasElementTranscludeDirective,G=d.$$element=D(b),t,L,T,O=e,Q,v=!1,Ma=!1,w,z=0,E=a.length;z<E;z++){t=a[z];var Na=t.$$start,M=t.$$end;Na&&(G=hd(b,Na,M));T=void 0;if(p>t.priority)break;if(w=t.scope)t.templateUrl||(F(w)?($("new/isolated scope",B||K,t,G),B=t):$("new/isolated scope",B,t,G)),K=K||t;L=t.name;if(!v&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(w=z+1;v=a[w++];)if(v.transclude&&!v.$$tlb||v.replace&&(v.templateUrl||v.template)){Ma=!0;break}v=!0}!t.templateUrl&&
	t.controller&&(A=A||W(),$("'"+L+"' controller",A[L],t,G),A[L]=t);if(w=t.transclude)if(J=!0,t.$$tlb||($("transclusion",u,t,G),u=t),"element"===w)U=!0,p=t.priority,T=G,G=d.$$element=D(ba.$$createComment(L,d[L])),b=G[0],la(f,wa.call(T,0),b),T[0].$$parentNode=T[0].parentNode,O=gc(Ma,T,e,p,g&&g.name,{nonTlbTranscludeDirective:u});else{var ja=W();if(F(w)){T=[];var P=W(),kb=W();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;P[a]=b;ja[b]=null;kb[b]=c});q(G.contents(),function(a){var b=P[Ca(xa(a))];
	b?(kb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):T.push(a)});q(kb,function(a,b){if(!a)throw ea("reqslot",b);});for(var ec in ja)ja[ec]&&(ja[ec]=gc(Ma,ja[ec],e))}else T=D(cc(b)).contents();G.empty();O=gc(Ma,T,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});O.$$slots=ja}if(t.template)if(N=!0,$("template",I,t,G),I=t,w=y(t.template)?t.template(G,d):t.template,w=Ea(w),t.replace){g=t;T=$b.test(w)?jd(ha(t.templateNamespace,S(w))):[];b=T[0];if(1!==T.length||1!==b.nodeType)throw ea("tplrt",L,"");
	la(f,G,b);E={$attr:{}};w=fc(b,[],E);var Y=a.splice(z+1,a.length-(z+1));(B||K)&&aa(w,B,K);a=a.concat(w).concat(Y);fa(d,E);E=a.length}else G.html(w);if(t.templateUrl)N=!0,$("template",I,t,G),I=t,t.replace&&(g=t),n=ga(a.splice(z,a.length-z),G,d,f,J&&O,h,k,{controllerDirectives:A,newScopeDirective:K!==t&&K,newIsolateScopeDirective:B,templateDirective:I,nonTlbTranscludeDirective:u}),E=a.length;else if(t.compile)try{Q=t.compile(G,d,O);var Z=t.$$originalDirective||t;y(Q)?m(null,bb(Z,Q),Na,M):Q&&m(bb(Z,Q.pre),
	bb(Z,Q.post),Na,M)}catch(da){c(da,ya(G))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=N;n.transclude=O;l.hasElementTranscludeDirective=U;return n}function V(a,b,c,d){var e;if(E(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(C(b))for(e=
	[],g=0,f=b.length;g<f;g++)e[g]=V(a,b[g],c,d);else F(b)&&(e={},q(b,function(b,f){e[f]=V(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,f,g){var h=W(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=I(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,f,g,h,k,l){if(c===
	h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Ub(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,A={isolateScope:null,bindToController:null};F(K.scope)&&(!0===K.bindToController?(A.bindToController=d(K.scope,r,!0),A.isolateScope={}):A.isolateScope=d(K.scope,r,!1));F(K.bindToController)&&(A.bindToController=d(K.bindToController,r,!0));if(A.bindToController&&!K.controller)throw ea("noctrl",
	r);m=m.$$bindings=A;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
	function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),u=Ub(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),t=y(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,B=r.templateNamespace;b.empty();f(t).then(function(c){var f,A;c=Ea(c);if(r.replace){c=$b.test(c)?jd(ha(B,S(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw ea("tplrt",r.name,t);c={$attr:{}};la(e,b,f);var I=fc(f,[],c);F(r.scope)&&aa(I,!0);a=I.concat(a);fa(d,c)}else f=K,b.html(c);a.unshift(u);n=X(a,f,d,g,b,
	r,h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Na(b[0].childNodes,g);m.length;){c=m.shift();A=m.shift();var G=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(A!==K){var N=A.className;l.hasElementTranscludeDirective&&r.replace||(I=cc(f));la(G,D(A),I);Ma(D(I),N)}A=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,e,A)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(w);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
	e)),n(p,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
	a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return L.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return L.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return L.RESOURCE_URL}function ra(a,
	c,d,e,f){var g=pa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw ea("selmulti",ya(a));if(m.test(e))throw ea("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=W());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=
	b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);D.hasData(d)&&(D.data(c,D.data(d)),D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return R(function(){return a.apply(null,arguments)},
	a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function oa(a,c,d,e,f){function g(b,c,e){!y(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(T),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,A,u,B;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(E(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
	a;r=c[m];E(r)?d[h]=b(r)(a):Ia(r)&&(d[h]=r);l[h]=new Ib(hc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);B=A.literal?qa:function(a,b){return a===b||a!==a&&b!==b};u=A.assign||function(){r=d[h]=A(a);throw ea("nonassign",c[m],m,f.name);};r=d[h]=A(a);p=function(b){B(b,d[h])||(B(b,r)?u(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
	c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var I=A.literal,G=d[h]=A(a);l[h]=new Ib(hc,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===G||I&&qa(b,G))return;b=G}g(h,a,b);d[h]=a},I);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=z.document.createElement("div"),Fa=O,Ga=u,za=J,da;s.prototype={$normalize:Ca,$addClass:function(a){a&&
	0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=kd(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=kd(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=dd(this.$$element[0],a),g=ld[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Nc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
	a)||"img"===f&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===f&&"srcset"===a&&v(b)){for(var f="",g=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+G(S(g[m]),!0),f=f+(" "+S(g[m+1]));g=S(g[2*l]).split(/\s/);f+=G(S(g[0]),!0);2===g.length&&(f+=" "+S(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
	$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=W()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];C(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ba.$$addBindingClass=
	p?function(a){Ma(a,"ng-binding")}:w;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ba.$$addScopeClass=p?function(a,b){Ma(a,b?"ng-isolate-scope":"ng-scope")}:w;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};return ba}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(gd,"").replace(mg,gb)}function kd(a,b){var d="",c=a.split(/\s+/),
	f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function jd(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&ng.call(a,b,1)}return a}function lg(a,b){if(b&&E(b))return b;if(E(a)){var d=md.exec(a);if(d)return d[3]}}function rf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Pa(b,"controller");F(b)?
	R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!F(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&E(k)&&(n=k);if(E(e)){k=e.match(md);if(!k)throw nd("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Pc(g.$scope,m,!0)||(b?Pc(c,m,!0):void 0);if(!e)throw nd("ctrlreg",m);tb(e,m,!0)}if(h)return h=(C(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
	l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(F(a)||y(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function sf(){this.$get=["$window",function(a){return D(a.document)}]}function tf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function uf(){this.$get=
	["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function ic(a){return F(a)?fa(a)?a.toISOString():cb(a):a}function zf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ec(a,function(a,c){null===a||x(a)||(C(a)?q(a,function(a){b.push(ka(c)+"="+ka(ic(a)))}):b.push(ka(c)+"="+ka(ic(a))))});return b.join("&")}}}function Af(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(C(a)?q(a,function(a,c){b(a,f+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?Ec(a,
	function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ka(f)+"="+ka(ic(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function jc(a,b){if(E(a)){var d=a.replace(og,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(od))||(c=(c=d.match(pg))&&qg[c[0]].test(d));c&&(a=Ic(d))}}return a}function pd(a){var b=W(),d;E(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=P(S(a.substr(0,d)));a=S(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):F(a)&&q(a,function(a,d){var e=P(d),g=S(a);e&&
	(b[e]=b[e]?b[e]+", "+g:g)});return b}function qd(a){var b;return function(d){b||(b=pd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function rd(a,b,d,c){if(y(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function yf(){var a=this.defaults={transformResponse:[jc],transformRequest:[function(a){return F(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(kc),put:ra(kc),
	patch:ra(kc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
	d={};q(a,function(a,e){y(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=rd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
	a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ra(b))}(b);g.method=vb(g.method);g.paramSerializer=E(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
	b.headers,d=rd(b.data,qd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(w)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}N&&
	(200<=a&&300>a?N.put(Q,[a,c,pd(d),e]):N.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:qd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var B=k.defer(),L=B.promise,N,G,T=c.headers,s="jsonp"===P(c.method),Q=c.url;s?Q=m.getTrustedResourceUrl(Q):E(Q)||(Q=m.valueOf(Q));Q=r(Q,
	c.paramSerializer(c.params));s&&(Q=J(Q,c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=F(c.cache)?c.cache:F(a.cache)?a.cache:O);N&&(G=N.get(Q),v(G)?G&&y(G.then)?G.then(K,K):C(G)?p(G[1],G[0],ra(G[2]),G[3]):p(G,200,{},"OK"):N.put(Q,L));x(G)&&((G=sd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=G),f(c.method,Q,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
	g(c.uploadEventHandlers)));return L}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw td("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw td("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var O=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];q(d,function(a){u.unshift(E(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
	function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Cf(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Bf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return rg(a,c,a.defer,b,d[0])}]}function rg(a,b,d,c,f){function e(a,
	b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,r,J,O){function u(){U&&U();t&&
	t.abort()}h=h||a.url();if("jsonp"===P(f))var H=c.createCallback(h),U=e(h,H,function(a,b){var e=200===a&&c.getResponse(H);v(A)&&d.cancel(A);U=t=null;l(a,e,"",b);c.removeCallback(H)});else{var t=b(f,h);t.open(f,h,!0);q(m,function(a,b){v(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=t.getAllResponseHeaders();v(A)&&d.cancel(A);U=t=null;l(c,b,e,a)};f=
	function(){v(A)&&d.cancel(A);U=t=null;l(-1,null,null,"")};t.onerror=f;t.onabort=f;t.ontimeout=f;q(J,function(a,b){t.addEventListener(b,a)});q(O,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(r)try{t.responseType=r}catch(s){if("json"!==r)throw s;}t.send(x(k)?null:k)}if(0<n)var A=d(u,n);else n&&y(n.then)&&n.then(u)}}function wf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
	"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,n,p){function H(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);return p&&!v(a)?a:Yb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var q;k||(k=g(e),q=ma(k),q.exp=e,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var t,s,A=0,K=[],I=[];q=e.length;for(var B=[],L=[];A<q;)if(-1!==(t=e.indexOf(a,
	A))&&-1!==(s=e.indexOf(b,t+l)))A!==t&&B.push(g(e.substring(A,t))),A=e.substring(t+l,s),K.push(A),I.push(d(A,H)),A=s+m,L.push(B.length),B.push("");else{A!==q&&B.push(g(e.substring(A)));break}n&&1<B.length&&Ea.throwNoconcat(e);if(!k||K.length){var N=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&x(a[b]))return;B[L[b]]=a[b]}return B.join("")};return R(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=I[b](a);return N(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,$$watchDelegate:function(a,
	b){var c;return a.$watchGroup(I,function(d,e){var f=N(d);y(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function xf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,r):e(u)}var p=4<arguments.length,r=p?wa.call(arguments,4):[],J=b.setInterval,q=b.clearInterval,
	u=0,H=v(m)&&!m,U=(H?c:d).defer(),t=U.promise;l=v(l)?l:0;t.$$intervalId=J(function(){H?f.defer(n):a.$evalAsync(n);U.notify(u++);0<l&&u>=l&&(U.resolve(u),q(t.$$intervalId),delete g[t.$$intervalId]);H||a.$apply()},k);g[t.$$intervalId]=U;return t}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(w),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function lc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
	db(a[b]);return a.join("/")}function ud(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||sg[d.protocol]||null}function vd(a,b){if(tg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Lc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function mc(a,b){return a.slice(0,b.length)===
	b}function sa(a,b){if(mc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function nc(a,b,d){this.$$html5=!0;d=d||"";ud(a,this);this.$$parse=function(a){var d=sa(b,a);if(!E(d))throw lb("ipthprfx",a,b);vd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
	this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;v(e=sa(a,c))?(g=e,g=d&&v(e=sa(d,e))?b+(sa("/",e)||e):a+g):v(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function oc(a,b,d){ud(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));vd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;mc(e,f)&&(e=e.replace(f,""));g.exec(e)||
	(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function wd(a,b,d){this.$$html5=!0;oc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===
	c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Jb(a){return function(){return this[a]}}function xd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ef(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=
	a,this;if(F(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();
	var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?nc:wd}else p=Ba(n),m=oc;var r=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=D(a.target);"a"!==xa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!E(f)||
	!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");F(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);J.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){mc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=
	b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?
	null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ff(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
	return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function ug(a){return a+""}function vg(a,b){return"undefined"!==typeof a?a:b}function yd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function V(a,b){var d,c,f;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;
	case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,
	b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=f?c:[a];
	break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=
	!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function zd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Ad(a){return a.type===s.Identifier||a.type===s.MemberExpression}function Bd(a){if(1===a.body.length&&Ad(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Cd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
	s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function Dd(a,b){this.astBuilder=a;this.$filter=b}function Ed(a,b){this.astBuilder=a;this.$filter=b}function pc(a){return y(a.valueOf)?a.valueOf():wg.call(a)}function Gf(){var a=W(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
	a||null==b?a===b:"object"===typeof a&&(a=pc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&pc(b));return h},b,c,f)}for(var l=[],m=[],n=0,I=g.length;n<I;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&pc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
	b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;y(b)&&b(a,c,d);v(a)&&d.$$postDigest(function(){v(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;y(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
	a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:y(d)&&d,isIdentifierContinue:y(c)&&c};return function(b,c){var d,e,u;switch(typeof b){case "string":return u=
	b=b.trim(),d=a[u],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new qc(n),d=(new rc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[u]=d),m(d,c);case "function":return m(b,c);default:return m(w,c)}}}]}function If(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Fd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Jf(){var a=
	!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Fd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Fd(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!v&&t.length;){var a=t.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
	("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?we(c):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===v&&0===t.length&&a(g),t.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++v,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{y(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,
	b.value)}catch(n){m(e,n)}}}finally{--v,d&&0===v&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,H("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(F(b)||y(b))f=b.then;y(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
	c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,y(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new e;m(b,a);return b}function J(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return r(e)}return d&&y(d.then)?d.then(function(){return b(a)},r):b(a)}function s(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function u(a){if(!y(a))throw H("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var H=
	M("$q",TypeError),v=0,t=[];R(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,w,a)},function(b){return J(b,r,a)},b)}});var w=s;u.prototype=e.prototype;u.defer=c;u.reject=r;u.when=s;u.resolve=w;u.all=function(a){var b=new e,c=0,d=C(a)?
	[]:{};q(a,function(a,e){c++;s(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};u.race=function(a){var b=c();q(a,function(a){s(a).then(b.resolve,b.reject)});return b.promise};return u}function Sf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
	b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Hf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=
	!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(H.$$phase)throw d("inprog",
	H.$$phase);H.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function s(){for(;ia.length;)try{ia.shift()()}catch(a){e(a)}f=null}function u(){null===f&&(f=h.defer(function(){H.$apply(s)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
	d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;y(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
	a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
	$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)va.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
	g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,u=b,q,w=[],x,ia;n("$digest");h.$$checkUrlChange();this===H&&null!==f&&(h.defer.cancel(f),s());c=null;do{r=!1;q=this;for(p=0;p<v.length;p++){try{ia=v[p],ia.scope.$eval(ia.expression,ia.locals)}catch(z){e(z)}c=null}v.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
	p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?qa(g,k):ga(g)&&ga(k)))r=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>u&&(x=4-u,w[x]||(w[x]=[]),w[x].push({msg:y(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){e(D)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||v.length)&&!u--)throw H.$$phase=
	null,d("infdig",b,w);}while(r||v.length);for(H.$$phase=null;A<t.length;)try{t[A++]()}catch(E){e(E)}t.length=A=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
	this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||v.length||h.defer(function(){v.length&&H.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");
	try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){e(b)}finally{try{H.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&ia.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,
	g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},
	defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var H=new m,v=H.$$asyncQueue=[],t=H.$$postDigestQueue=[],ia=H.$$applyAsyncQueue=[],A=0;return H}]}function ze(){var a=
	/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function xg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Gd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
	a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Hd(a){var b=[];v(a)&&q(a,function(a){b.push(xg(a))});return b}function Lf(){this.SCE_CONTEXTS=pa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Hd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Hd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?sd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=
	function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[pa.HTML]=f(g);h[pa.CSS]=f(g);h[pa.URL]=f(g);h[pa.JS]=f(g);h[pa.RESOURCE_URL]=f(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||
	""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===pa.RESOURCE_URL){var g=Da(f.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return f;throw ua("insecurl",f.toString());}if(d===pa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof
	g?a.$$unwrapTrustedValue():a}}}]}function Kf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ra(pa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,
	e=c.getTrusted,g=c.trustAs;q(pa,function(a,b){var d=P(b);c[("parse_as_"+d).replace(sc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(sc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(sc,gb)]=function(b){return g(a,b)}});return c}]}function Mf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(P((a.navigator||
	{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Of(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
	"$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;C(l)?l=l.filter(function(a){return a!==jc}):l===jc&&(l=null);return c.get(h,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=yg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=
	0;return g}]}function Pf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Gd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');
	if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Qf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){y(e)||(l=k,k=e,e=w);var m=wa.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[r.$$timeoutId]}n||
	a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(w),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function Da(a){La&&(ca.setAttribute("href",a),a=ca.href);ca.setAttribute("href",a);return{href:ca.href,protocol:ca.protocol?ca.protocol.replace(/:$/,""):"",host:ca.host,search:ca.search?ca.search.replace(/^\?/,""):"",hash:ca.hash?ca.hash.replace(/^#/,""):
	"",hostname:ca.hostname,port:ca.port,pathname:"/"===ca.pathname.charAt(0)?ca.pathname:"/"+ca.pathname}}function sd(a){a=E(a)?Da(a):a;return a.protocol===Id.protocol&&a.host===Id.host}function Rf(){this.$get=ma(z)}function Jd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&
	(c[l]=b(g.substring(k+1))));return c}}function Vf(){this.$get=Jd}function Xc(a){function b(d,c){if(F(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Kd);b("date",Ld);b("filter",zg);b("json",Ag);b("limitTo",Bg);b("lowercase",Cg);b("number",Md);b("orderBy",Nd);b("uppercase",Dg)}function zg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw M("filter")("notarray",
	a);}c=c||"$";var f;switch(tc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Eg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Eg(a,b,d,c){var f=F(a)&&d in a;!0===b?b=qa:y(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!Vb(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!F(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,
	e){var g=tc(a),h=tc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(C(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!y(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function tc(a){return null===a?"null":typeof a}function Kd(a){var b=
	a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Od(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Md(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Od(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Fg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Pd))&&(a=a.replace(Pd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===uc;f++);
	if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===uc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Qd&&(d=d.splice(0,Qd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Gg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-
	1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Od(a,b,d,c,f){if(!E(a)&&!Y(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Fg(h);Gg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
	b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=uc+a;d&&(a=a.substr(a.length-b));return f+a}function aa(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Kb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=
	c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Rd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Sd(a){return function(b){var d=Rd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function vc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ld(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
	k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Hg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;
	for(;d;)(l=Ig.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Jc(e,m),c=Wb(c,e,!0));q(h,function(b){k=Jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ag(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Bg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ga(b))return a;Y(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
	d):d;return 0<=b?wc(a,d,d+b):0===d?wc(a,b,a.length):wc(a,Math.max(0,d+b),d)}}function wc(a,b,d){return E(a)?a.slice(b,d):wa.call(a,b,d)}function Nd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(y(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
	function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(k)&&(k=a.index),F(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw M("orderBy")("notarray",a);C(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=y(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
	c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(y(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Vb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){y(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Lb(a,b,d,
	c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Td(this)}function Td(a){a.$$classCache={};a.$$classCache[Ud]=!(a.$$classCache[ob]=a.$$element.hasClass(ob))}function Vd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
	b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Nc(c,"-"):"";b(a,ob+c,!0===d);b(a,Ud+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Wd(this.$pending)&&(this.$pending=void 0));Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
	void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Wd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Wd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function xc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=P(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",
	function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=S(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",
	m)}b.on("change",l);if(Xd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var f,e;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Kg.test(d))return new Date(d);
	a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function pb(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!fa(a)?d(a)||
	void 0:a}yc(f,e,g,h);Sa(f,e,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Wb(a,r)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw qb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Wb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(v(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||x(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var u;
	h.$validators.max=function(a){return!n(a)||x(u)||d(a)<=u};g.$observe("max",function(a){u=p(a);h.$validate()})}}}function yc(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Yd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Lg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw qb("numfmt",b);b=b.toString()}return b})}
	function Ta(a){v(a)&&!Y(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function zc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Zd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(zc(a),zc(b),zc(d)),c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function $d(a,b,d,c,f){if(v(c)){a=a(c);if(!a.constant)throw qb("constexpr",d,c);return a(b)}return f}function Ac(a,b){function d(a,b){if(!a||!a.length)return[];
	if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;C(a)?b=a.map(c).join(" "):F(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function f(a){var b=a;if(C(a))b=a.map(f);else if(F(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var e;return["$parse",function(g){return{restrict:"AC",link:function(h,
	k,l){function m(a,b){var c=[];q(a,function(a){if(0<b||H[a])H[a]=(H[a]||0)+b,H[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=t,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=t,c=m(c&&c.split(" "),-1),l.$removeClass(c);w=a}function p(a){a=c(a);a!==t&&r(a)}function r(a){if(w===b){var c=t&&t.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=m(f,-1),c=m(c,1);l.$addClass(c);l.$removeClass(f)}t=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?f:c),u=v?p:r,H=k.data("$classCounts"),
	w=!0,t;H||(H=W(),k.data("$classCounts",H));"ngClass"!==a&&(e||(e=g("$index",function(a){return a&1})),h.$watch(e,n));h.$watch(s,u,v)}}}]}function Ob(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;
	this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=f;this.$$q=h;this.$$exceptionHandler=b;Td(this);Mg(this)}function Mg(a){a.$$scope.$watch(function(){var b=
	a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,w))}return b})}function Bc(a){this.$$options=a}function ae(a,b){q(b,function(b,c){v(a[c])||(a[c]=b)})}var Ng=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,
	P=function(a){return E(a)?a.toLowerCase():a},vb=function(a){return E(a)?a.toUpperCase():a},La,D,oa,wa=[].slice,ng=[].splice,Og=[].push,na=Object.prototype.toString,Gc=Object.getPrototypeOf,Ga=M("ng"),$=z.angular||(z.angular={}),Zb,rb=0;La=z.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};w.$inject=[];Ya.$inject=[];var C=Array.isArray,le=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,S=function(a){return E(a)?a.trim():a},Gd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
	"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!v(za.rules)){var a=z.document.querySelector("[ng-csp]")||z.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return za.rules},sb=function(){if(v(sb.name_))return sb.name_;var a,b,d=Ka.length,
	c,f;for(b=0;b<d;++b)if(c=Ka[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return sb.name_=f},ne=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],qe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(z.document),te=/[A-Z]/g,Oc=!1,Ja=
	3,ye={full:"1.6.1",major:1,minor:6,dot:1,codeName:"promise-rectification"};X.expando="ng339";var ib=X.cache={},$f=1;X._data=function(a){return this.cache[a[this.expando]]||{}};var Wf=/-([a-z])/g,Pg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},ac=M("jqLite"),Zf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,$b=/<|&#?\w+;/,Xf=/<([\w:-]+)/,Yf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],
	col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var eg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=X.prototype={ready:$c,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+
	a])},length:0,push:Og,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[P(a)]=a});var ed={};q("input select option textarea button form details".split(" "),function(a){ed[a]=!0});var ld={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:dc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<
	d;b++)hb(a[b])}},function(a,b){X[b]=a});q({data:dc,inheritedData:Eb,scope:function(a){return D.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||D.data(a,"$isolateScopeNoTemplate")},controller:bd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(Pg,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;
	if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=P(b),f=Gb[c];if(v(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||
	a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:cd},function(a,b){X.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==cd&&x(2===a.length&&a!==Bb&&a!==bd?b:c)){if(F(b)){for(f=0;f<g;f++)if(a===dc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:hb,on:function(a,b,d,
	c){if(v(c))throw ac("onargs");if(Yc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=bg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],dg),h(b,void 0,!0)):h(b)}},off:ad,one:function(a,b,d){a=D(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new X(b),function(b){d?
	c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new X(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new X(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=D(b).eq(0).clone()[0],c=a.parentNode;
	c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new X(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
	a.getElementsByTagName(b):[]},clone:cc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ra(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||
	b.apply(a,f)})}},function(a,b){X.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),v(e)&&(e=D(e))):bc(e,a(this[g],b,c,f));return v(e)?e:this}});X.prototype.bind=X.prototype.on;X.prototype.unbind=X.prototype.off;Qa.prototype={put:function(a,b){this[la(a,this.nextUid)]=b},get:function(a){return this[la(a,this.nextUid)]},remove:function(a){var b=this[a=la(a,this.nextUid)];delete this[a];return b}};var Uf=[function(){this.$get=[function(){return Qa}]}],gg=/^([^(]+?)=>/,
	hg=/^[^(]*\(\s*([^)]*)\)/m,Qg=/,/,Rg=/^\s*(_?)(\S+?)\1\s*$/,fg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,da=M("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||ig(a)),da("strictdi",d);b=fd(a);q(b[1].split(Qg),function(a){a.replace(Rg,function(a,b,d){c.push(d)})})}a.$inject=c}}else C(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var be=M("$animate"),lf=function(){this.$get=w},mf=function(){var a=
	new Qa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):C(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=jg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
	k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},jf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw be("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&
	(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw be("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
	enter:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);
	h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],of=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},nf=function(){this.$get=
	["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
	this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
	this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},kf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
	null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},ea=M("$compile"),hc=new function(){};Qc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===hc};var gd=/^((?:x|data)[:\-_])/i,mg=/[:\-_]+(.)/g,nd=M("$controller"),
	md=/^(\S+)(\s+as\s+([\w$]+))?$/,vf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},od="application/json",kc={"Content-Type":od+";charset=utf-8"},pg=/^\[|^\{(?!\{)/,qg={"[":/]$/,"{":/}$/},og=/^\)]\}',?\n/,td=M("$http"),Ea=$.$interpolateMinErr=M("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};var Df=function(){this.$get=["$window",
	function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Sg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,sg={http:80,https:443,ftp:21},lb=M("$location"),tg=/^\s*[\\/]{2,}/,Tg={$$absUrl:"",
	$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Sg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:xd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=
	Lc(a);else if(F(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:xd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([wd,oc,nc],function(a){a.prototype=Object.create(Tg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==nc||!this.$$html5)throw lb("nostate");this.$$state=
	x(b)?null:b;return this}});var Ua=M("$parse"),wg={}.constructor.prototype.valueOf,Qb=W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var Ug={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},qc=function(a){this.options=a};qc.prototype={constructor:qc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
	else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
	a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
	this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
	a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
	c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
	for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ug[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
	a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
	s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
	expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Ad(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
	test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
	return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
	unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
	this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
	return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
	arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
	(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
	this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
	$locals:{type:s.LocalsExpression}}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Bd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=zd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
	d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,ug,vg,yd);this.state=this.stage=void 0;d.literal=Cd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
	b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
	";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
	break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
	b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
	1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
	h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
	m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
	function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
	s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||
	"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
	a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
	b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();
	if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Ed.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);V(a,b.$filter);var d,c;if(d=Bd(a))c=this.recurse(d);d=zd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
	a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?w:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Cd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
	a.operator](f,b);case s.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return e.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
	a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var r=0;r<
	g.length;++r)p.push(g[r](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
	g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
	c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=yd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
	h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
	f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
	g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
	name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
	return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var rc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new Ed(this.ast,b):new Dd(this.ast,b)};rc.prototype={constructor:rc,parse:function(a){return this.astCompiler.compile(a)}};var ua=M("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},sc=/_([a-z])/g,yg=M("$compile"),ca=z.document.createElement("a"),Id=
	Da(z.location.href);Jd.$inject=["$document"];Xc.$inject=["$provide"];var Qd=22,Pd=".",uc="0";Kd.$inject=["$locale"];Md.$inject=["$locale"];var Jg={yyyy:aa("FullYear",4,0,!1,!0),yy:aa("FullYear",2,0,!0,!0),y:aa("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),LLLL:nb("Month",!1,!0),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",
	1),sss:aa("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Sd(2),w:Sd(1),G:vc,GG:vc,GGG:vc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ig=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Hg=/^-?\d+$/;Ld.$inject=["$locale"];var Cg=ma(P),Dg=ma(vb);Nd.$inject=
	["$parse"];var Ae=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),wb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});wb[c]=function(){return{restrict:"A",
	priority:100,link:f}}}});q(ld,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Ng))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);wb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",
	e=null);f.$observe(b,function(b){b?(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Mb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Pa(a.$name,
	"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
	Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
	Vd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ce=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,e){d.addClass(Va).addClass(ob);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
	e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):w;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);R(n,Mb)})}}}}}]},Be=ce(),
	Ne=ce(!0),Kg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Vg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Wg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Lg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,de=/^(\d{4,})-(\d{2})-(\d{2})$/,ee=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	Cc=/^(\d{4,})-W(\d\d)$/,fe=/^(\d{4,})-(\d\d)$/,ge=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Xd=W();q(["date","datetime-local","month","time","week"],function(a){Xd[a]=!0});var he={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c)},date:pb("date",de,Nb(de,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":pb("datetimelocal",ee,Nb(ee,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:pb("time",ge,Nb(ge,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:pb("week",Cc,function(a,b){if(fa(a))return a;
	if(E(a)){Cc.lastIndex=0;var d=Cc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Rd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:pb("month",fe,Nb(fe,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var g,h;if(v(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
	if(v(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(v(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Zd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName=
	"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Wg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==S(d.ngTrim);x(d.name)&&b.attr("name",++rb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=S(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=S(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
	(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=v(d.min);f=v(d.max);e=v(d.step);var s=c.$render;c.$render=m&&v(q.rangeUnderflow)&&
	v(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||Zd(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",
	d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return qa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Rc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(he[P(g.type)]||he.text)(f,e,g,h[0],b,a,d,c)}}}}],Xg=/^(true|false|\d+)$/,
	ef=function(){return{restrict:"A",priority:100,compile:function(a,b){return Xg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Fe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Yb(a)})}}}}],He=["$interpolate","$compile",function(a,
	b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Ge=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
	c.html(a.getTrustedHtml(d)||"")})}}}}],df=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ie=Ac("",!0),Ke=Ac("Odd",0),Je=Ac("Even",1),Le=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Me=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wc={},Yg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
	function(a){var b=Ca("ng-"+a);Wc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Yg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Pe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
	b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=ub(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Qe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,s,w,u,H=function(){w&&(w.remove(),
	w=null);s&&(s.$destroy(),s=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(e,function(e){var m=function(a){!1===a||!v(h)||h&&!c.$eval(h)||b()},w=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){H();d.enter(a,null,f).done(m)});s=b;u=a;s.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||w!==q||(H(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(H(),n.template=null)})}}}}],
	gf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){na.call(d[0]).match(/SVG/)?(d.empty(),a(Zc(f.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Re=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),cf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
	e?S(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?S(a):a)});return b}});c.$formatters.push(function(a){if(C(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ud="ng-invalid",Va="ng-pristine",Rb="ng-dirty",qb=M("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
	this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);y(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){y(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw qb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
	"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},
	$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
	d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!y(h.then))throw qb("nopromise",
	h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},w):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
	b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
	this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
	this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
	this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Vd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var bf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
	function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,Zg=/(\s+|^)default(\s+|$)/;Bc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
	!1;a=R({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=S(d.replace(Zg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ae(a,this.$$options));ae(a,Pb.$$options);return new Bc(a)}};Pb=new Bc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ff=function(){function a(a,d){this.$$attrs=a;this.$$scope=
	d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Se=Ra({terminal:!0,priority:1E3}),$g=M("ngOptions"),ah=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	$e=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(ah);if(!n)throw $g("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,u=s&&d(s),w=s?function(a,b){return u(c,b)}:function(a){return la(a)},
	x=function(a,b){return w(a,B(a,b))},t=d(n[2]||n[1]),z=d(n[3]||""),A=d(n[4]||""),K=d(n[8]),I={},B=q?function(a,b){I[q]=b;I[p]=a;return I}:function(a){I[p]=a;return I};return{trackBy:s,getTrackByValue:x,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
	g?n:g[n],q=B(d[p],p),r=v(c,q),p=w(r,q),u=t(c,q),I=z(c,q),q=A(c,q),r=new e(p,r,u,I,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return s?Fa(a.viewValue):a.viewValue}}}}}var f=z.document.createElement("option"),e=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
	a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=t&&r.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];v(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=y.getOptions();var d={};z&&h.prepend(r.emptyOption);t.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),A.appendChild(b),b.label=null===a.group?
	"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=A,c=f.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(A);s.$render();s.$isEmpty(a)||(b=r.readValue(),(y.trackBy||w?qa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],w=k.multiple;l=0;for(var u=h.children(),x=u.length;l<x;l++)if(""===u[l].value){r.hasEmptyOption=!0;r.emptyOption=u.eq(l);break}var z=!!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,y=c(k.ngOptions,h,d),A=b[0].createDocumentFragment();r.generateUnknownOptionValue=
	function(a){return"?"};w?(r.writeValue=function(a){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(C(s.$viewValue))return s.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
	function(a){var b=t.selectValueMap[h.val()],c=t.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):z?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
	t.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(s.$viewValue)},function(){s.$render()}));z&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables,
	p)}}}}],Te=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+n+v,H=$.noop,y;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,u))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-
	n));c===y||f&&ga(y)||(H(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),H=w,k()):H=e.$watch(f,k),y=c)})}}}],Ue=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
	h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var u,w,x,t,y={$id:la};r?u=a(r):(x=function(a,b){return la(b)},
	t=function(a){return a});return function(a,d,e,g,l){u&&(w=function(b,c,d){v&&(y[v]=b);y[s]=c;y.$index=d;return u(a,y)});var m=W();a.$watchCollection(n,function(e){var g,n,r=d[0],u,y=W(),z,D,E,B,F,C,I;p&&(a[p]=e);if(ta(e))F=e,n=w||x;else for(I in n=w||t,F=[],e)va.call(e,I)&&"$"!==I.charAt(0)&&F.push(I);z=F.length;I=Array(z);for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],B=n(D,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,B,E);I[g]={id:B,
	scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=ub(C.clone);b.leave(B);if(B[0].parentNode)for(g=0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(ub(C.clone),null,r);r=C.clone[C.clone.length-1];f(C.scope,g,s,E,v,D,z)}else l(function(a,c){C.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;f(C.scope,g,s,E,v,D,z)});m=
	y})}}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
	!0)}),Xe=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var s=ub(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
	var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ze=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
	b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),bh=M("ngTransclude"),af=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw bh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==
	Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ce=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ch={$setViewValue:w,$render:w},dh=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
	a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}var e=this,g=new Qa;e.selectValueMap={};e.ngModelCtrl=ch;e.multiple=!1;e.unknownOption=D(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
	a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+la(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=
	function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?(e.removeUnknownOption(),c=la(b),a.val(c in e.selectValueMap?c:b),f(D(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Pa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,
	c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");v(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=la(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();
	var d,f=b.prop("selected");v(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&
	-1!==a.indexOf(b)||a===b)&&c(!0)})}}],De=function(){return{restrict:"E",require:["select","?ngModel"],controller:dh,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=
	function(a){var c=new Qa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))||v(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||qa(g,e.$viewValue)||(g=ra(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=w},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ee=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,
	d){var c,f;v(d.ngValue)||(v(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Tc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Sc=function(){return{restrict:"A",require:"?ngModel",
	link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>
	f||c.$isEmpty(b)||b.length<=f}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load angular more than once."):(ue(),xe($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",
	{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
	WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
	c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==e?"one":"other"}})}]),D(function(){pe(z.document,Mc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.0
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(r,d,C){'use strict';function x(s,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function k(){n&&(g.cancel(n),n=null);l&&(l.$destroy(),l=null);m&&(n=g.leave(m),n.then(function(){n=null}),m=null)}function z(){var b=s.current&&s.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=s.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(u)||u&&!a.$eval(u)||h()});k()});l=f.scope=b;l.$emit("$viewContentLoaded");
	l.$eval(v)}else k()}var l,m,n,u=b.autoscroll,v=b.onload||"";a.$on("$routeChangeSuccess",z);z()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());if(b.controller){f.$scope=a;var k=h(b.controller,f);b.controllerAs&&(a[b.controllerAs]=k);c.data("$ngControllerController",k);c.children().data("$ngControllerController",k)}a[b.resolveAs||"$resolve"]=f;y(a)}}}r=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,
	c){return d.extend(Object.create(a),c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&
	(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,k,r){function l(b){var e=
	t.current;(x=(p=n())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!v)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function m(){var w=t.current,e=p;if(x)w.params=e.params,d.copy(w.params,b),a.$broadcast("$routeUpdate",w);else if(e||w)v=!1,(t.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(u(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
	d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),d.isDefined(c)&&(e.loadedTemplateUrl=r.valueOf(c),b=k(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==t.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,w))},function(b){e==t.current&&a.$broadcast("$routeChangeError",
	e,w,b)})}function n(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,n=h.length;k<n;++k){var m=q[k-1],p=h[k];m&&p&&(l[m.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&s(g[null],{params:{},pathParams:{}})}function u(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
	g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var v=!1,p,x,t={routes:g,reload:function(){v=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;v=!1}};a.$evalAsync(function(){l(b);b.defaultPrevented||m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),c.path(u(this.current.$$route.originalPath,a)),c.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
	m);return t}]});var B=d.$$minErr("ngRoute");r.provider("$routeParams",function(){this.$get=function(){return{}}});r.directive("ngView",x);r.directive("ngView",A);x.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
	//# sourceMappingURL=angular-route.min.js.map


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.6.1
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(U,C){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=X(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];r(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Qa(a){if(a instanceof w)switch(a.length){case 0:return a;
	case 1:if(1===a[0].nodeType)return a;break;default:return w(ua(a))}if(1===a.nodeType)return w(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){r(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){r(b,function(b){a.removeClass(b,c)})}function Z(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
	N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ga(a,b);Ha(a,b)}function Ga(a,b){b.from&&(a.css(b.from),b.from=null)}function Ha(a,b){b.to&&(a.css(b.to),b.to=null)}function V(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=ea(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
	f=d.domOperation!==N?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};r(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);r(b,function(a,b){f[b]=1});c=d(c);r(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};r(f,function(b,c){var d,f;1===b?(d="addClass",
	f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function z(a){return a instanceof w?a[0]:a}function Ua(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=ea(d,Y(c.addClass,"-add")));c.removeClass&&(d=ea(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
	b){a.style[b[0]]=b[1]}function ea(a,b){return a?b?a+" "+b:a:b}function Ia(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};r(c,function(a,b){var c=f[a];if(c){var y=c.charAt(0);if("-"===y||"+"===y||0<=y)c=Va(c);0===c&&(c=null);d[b]=c}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);r(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ja(a,b){var c=R,d=a+"s";b?c+="Duration":
	d+=" linear all";return[c,d]}function Ka(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function La(a,b,c){r(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var R,za,$,Aa;void 0===U.ontransitionend&&void 0!==U.onwebkittransitionend?(R="WebkitTransition",za="webkitTransitionEnd transitionend"):(R="transition",za=
	"transitionend");void 0===U.onanimationend&&void 0!==U.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var qa=$+"Delay",Ba=$+"Duration",la=R+"Delay",Ma=R+"Duration",Oa=C.$$minErr("ng"),Wa={transitionDuration:Ma,transitionDelay:la,transitionProperty:R+"Property",animationDuration:Ba,animationDelay:qa,animationIterationCount:$+"IterationCount"},Xa={transitionDuration:Ma,transitionDelay:la,animationDuration:Ba,animationDelay:qa},Ca,va,
	r,X,ya,aa,Da,ra,G,K,w,N;C.module("ngAnimate",[],function(){N=C.noop;Ca=C.copy;va=C.extend;w=C.element;r=C.forEach;X=C.isArray;G=C.isString;ra=C.isObject;K=C.isUndefined;ya=C.isDefined;Da=C.isFunction;aa=C.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,m){var A,y;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){A&&a.leave(A);y&&(y.$destroy(),y=null);if(f||0===f)y=b.$new(),m(y,
	function(b){A=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;G(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();f||a(function(){f||c()})}}var d,
	f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);r(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return e[a].some(function(a){return a(b,c,d)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?
	c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b,c){return!b.structural&&f(b)});e.skip.push(function(a,b,c){return!b.structural&&!f(b)});e.skip.push(function(a,b,c){return"leave"===c.event&&b.structural});e.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});e.cancel.push(function(a,b,c){return c.structural&&b.structural});e.cancel.push(function(a,b,c){return 2===c.state&&b.structural});e.cancel.push(function(a,b,d){if(d.structural)return!1;a=
	b.addClass;b=b.removeClass;var f=d.addClass;d=d.removeClass;return K(a)&&K(b)||K(f)&&K(d)?!1:c(a,d)||c(b,f)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,y,e,ba,Ya,O,v,H,S,P){function I(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function B(a,b,c){var g=z(b),d=z(a),E=[];(a=t[c])&&r(a,function(a){J.call(a.node,g)?E.push(a.callback):
	"leave"===c&&J.call(a.node,d)&&E.push(a.callback)});return E}function n(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function p(a,h,u){function p(c,g,d,h){y(function(){var c=B(S,a,g);c.length?b(function(){r(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(g,d,h)}function n(b){var c=a,g=k;g.preparationClasses&&(c.removeClass(g.preparationClasses),g.preparationClasses=null);g.activeClasses&&
	(c.removeClass(g.activeClasses),g.activeClasses=null);Na(a,k);ha(a,k);k.domOperation();e.complete(!b)}var k=Ca(u),t,S;if(a=Qa(a))t=z(a),S=a.parent();var k=oa(k),e=new O,y=I();X(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!G(k.addClass)&&(k.addClass=null);X(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!G(k.removeClass)&&(k.removeClass=null);k.from&&!ra(k.from)&&(k.from=null);k.to&&!ra(k.to)&&(k.to=null);if(!t)return n(),e;u=[t.getAttribute("class"),k.addClass,
	k.removeClass].join(" ");if(!F(u))return n(),e;var s=0<=["enter","move","leave"].indexOf(h),x=P(),v=!ma||x||g.get(t);u=!v&&E.get(t)||{};var J=!!u.state;v||J&&1===u.state||(v=!L(a,S,h));if(v)return x&&p(e,h,"start"),n(),x&&p(e,h,"close"),e;s&&ta(a);x={structural:s,element:a,event:h,addClass:k.addClass,removeClass:k.removeClass,close:n,options:k,runner:e};if(J){if(d("skip",a,x,u)){if(2===u.state)return n(),e;V(a,u,x);return u.runner}if(d("cancel",a,x,u))if(2===u.state)u.runner.end();else if(u.structural)u.close();
	else return V(a,u,x),u.runner;else if(d("join",a,x,u))if(2===u.state)V(a,x,{});else return Ua(a,s?h:null,k),h=x.event=u.event,k=V(a,u,x),u.runner}else V(a,x,{});(J=x.structural)||(J="animate"===x.event&&0<Object.keys(x.options.to||{}).length||f(x));if(!J)return n(),l(a),e;var H=(u.counter||0)+1;x.counter=H;Q(a,1,x);c.$$postDigest(function(){var b=E.get(t),c=!b,b=b||{},g=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==H||!g){c&&(Na(a,k),ha(a,k));if(c||s&&b.event!==
	h)k.domOperation(),e.end();g||l(a)}else h=!b.structural&&f(b,!0)?"setClass":b.event,Q(a,2),b=Ya(a,h,b.options),e.setHost(b),p(e,h,"start",{}),b.done(function(b){n(!b);(b=E.get(t))&&b.counter===H&&l(z(a));p(e,h,"close",{})})});return e}function ta(a){a=z(a).querySelectorAll("[data-ng-animate]");r(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=E.get(a);if(c)switch(b){case 2:c.runner.end();case 1:E.remove(a)}})}function l(a){a=z(a);a.removeAttribute("data-ng-animate");E.remove(a)}
	function k(a,b){return z(a)===z(b)}function L(a,b,c){c=w(e[0].body);var d=k(a,c)||"HTML"===a[0].nodeName,h=k(a,y),f=!1,B,p=g.get(z(a));(a=w.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=z(b);b;){h||(h=k(b,y));if(1!==b.nodeType)break;a=E.get(b)||{};if(!f){var n=g.get(b);if(!0===n&&!1!==p){p=!0;break}else!1===n&&(p=!1);f=a.structural}if(K(B)||!0===B)a=w.data(b,"$$ngAnimateChildren"),ya(a)&&(B=a);if(f&&!1===B)break;d||(d=k(b,c));if(d&&h)break;if(!h&&(a=w.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!f||
	B)&&!0!==p&&h&&d}function Q(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=E.get(a))?va(b,c):c;E.put(a,c)}var E=new ba,g=new ba,ma=null,h=c.$watch(function(){return 0===v.totalPendingRequests},function(a){a&&(h(),c.$$postDigest(function(){c.$$postDigest(function(){null===ma&&(ma=!0)})}))}),t=Object.create(null),x=a.classNameFilter(),F=x?function(a){return x.test(a)}:function(){return!0},Na=Z(H),J=U.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
	16)},sa={on:function(a,b,c){var g=ua(b);t[a]=t[a]||[];t[a].push({node:g,callback:c});w(b).on("$destroy",function(){E.get(g)||sa.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var g=t[a];g&&(t[a]=1===arguments.length?null:n(g,b,c))}else for(g in b=arguments[0],t)t[g]=n(t[g],b)},pin:function(a,b){Ea(aa(a),"element","not an element");Ea(aa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return p(a,b,c)},enabled:function(a,
	b){var c=arguments.length;if(0===c)b=!!ma;else if(aa(a)){var d=z(a);1===c?b=!g.get(d):g.put(d,!b)}else b=ma=!!a;return b}};return sa}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,f,e,m,A){function y(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,n=d.parentNode;f.put(d,a);for(var p;n;){if(p=f.get(n)){p.processed||(p=b(p));break}n=n.parentNode}(p||
	c).children.push(a);return a}var c={children:[]},d,f=new m;for(d=0;d<a.length;d++){var e=a[d];f.put(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var s=[],ba=Z(a);return function(m,O,v){function H(a){a=
	a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];r(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function S(a){var b=[],c={};r(a,function(a,d){var h=z(a.element),k=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var f=k?"to":"from";r(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:w(a)}})}else b.push(a)});var d={},k={};r(c,function(c,f){var e=c.from,
	B=c.to;if(e&&B){var p=a[e.animationID],n=a[B.animationID],l=e.animationID.toString();if(!k[l]){var m=k[l]={structural:!0,beforeStart:function(){p.beforeStart();n.beforeStart()},close:function(){p.close();n.close()},classes:P(p.classes,n.classes),from:p,to:n,anchors:[]};m.classes.length?b.push(m):(b.push(p),b.push(n))}k[l].anchors.push({out:e.element,"in":B.element})}else e=e?e.animationID:B.animationID,B=e.toString(),d[B]||(d[B]=!0,b.push(a[e]))});return b}function P(a,b){a=a.split(" ");b=b.split(" ");
	for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var f=0;f<b.length;f++)if(k===b[f]){c.push(k);break}}return c.join(" ")}function I(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function B(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function n(){var a=m.data("$$animationRunner");!a||"leave"===O&&v.$$domOperationFired||a.end()}function p(b){m.off("$destroy",n);m.removeData("$$animationRunner");
	ba(m,v);ha(m,v);v.domOperation();L&&a.removeClass(m,L);m.removeClass("ng-animate");l.complete(!b)}v=oa(v);var ta=0<=["enter","move","leave"].indexOf(O),l=new e({end:function(){p()},cancel:function(){p(!0)}});if(!b.length)return p(),l;m.data("$$animationRunner",l);var k=Fa(m.attr("class"),Fa(v.addClass,v.removeClass)),L=v.tempClasses;L&&(k+=" "+L,v.tempClasses=null);var Q;ta&&(Q="ng-"+O+"-prepare",a.addClass(m,Q));s.push({element:m,classes:k,event:O,structural:ta,options:v,beforeStart:function(){m.addClass("ng-animate");
	L&&a.addClass(m,L);Q&&(a.removeClass(m,Q),Q=null)},close:p});m.on("$destroy",n);if(1<s.length)return l;d.$$postDigest(function(){var a=[];r(s,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});s.length=0;var b=S(a),c=[];r(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=I(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),B(a,b)):
	c()}})});A(y(c))});return l}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ka(),c=Ka();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,m,A,y,s,ba){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++P))+"-"+a.getAttribute("class")+"-"+b}function O(e,n,p,m){var l;0<b.count(p)&&(l=c.get(p),l||(n=Y(n,"-stagger"),f.addClass(e,n),l=Ia(a,e,m),l.animationDuration=
	Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),f.removeClass(e,n),c.put(p,l)));return l||{}}function v(a){I.push(a);s.waitUntilQuiet(function(){b.flush();c.flush();for(var a=A(),d=0;d<I.length;d++)I[d](a);I.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ia(a,c,Wa),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*
	c.animationIterationCount,c.transitionDuration);return c}var S=Z(f),P=0,I=[];return function(a,c){function d(){l()}function s(){l(!0)}function l(b){if(!(A||P&&J)){A=!0;J=!1;g.$$skipPreparationClasses||f.removeClass(a,ga);f.removeClass(a,ea);wa(h,!1);pa(h,!1);r(t,function(a){h.style[a[0]]=""});S(a,g);ha(a,g);Object.keys(I).length&&r(I,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();fa&&fa.length&&a.off(fa.join(" "),Q);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),
	a.removeData("$$animateCss"));w&&w.complete(!b)}}function k(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&wa(h,!!a)}function L(){w=new e({end:d,cancel:s});v(N);l();return{$$willAnimate:!1,start:function(){return w},end:d}}function Q(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-V,0)>=K&&b>=M&&(P=!0,l())}function E(){function b(){if(!A){k(!1);r(t,function(a){h.style[a[0]]=a[1]});S(a,g);f.addClass(a,ea);if(q.recalculateTimingStyles){na=
	h.getAttribute("class")+" "+ga;ja=C(h,na);D=H(h,na,ja);ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;if(0===M){l();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ca,u=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],t.push(da),h.style[da[0]]=da[1]);K=1E3*u;U=1E3*M;if(g.easing){var d,e=g.easing;q.hasTransitions&&(d=R+"TimingFunction",t.push([d,e]),h.style[d]=e);q.hasAnimations&&
	(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}D.transitionDuration&&fa.push(za);D.animationDuration&&fa.push(Aa);V=Date.now();var E=K+1.5*U;d=V+E;var e=a.data("$$animateCss")||[],n=!0;if(e.length){var p=e[0];(n=d>p.expectedEndTime)?m.cancel(p.timer):e.push(l)}n&&(E=m(c,E,!1),e[0]={timer:E,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(fa.length)a.on(fa.join(" "),Q);g.to&&(g.cleanupStyles&&La(I,h,Object.keys(g.to)),Ha(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
	1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!A)if(h.parentNode){var d=function(a){if(P)J&&a&&(J=!1,l());else if(J=!a,D.animationDuration)if(a=wa(h,J),J)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(D.transitionDuration&&0===W.transitionDuration||D.animationDuration&&0===W.animationDuration)&&Math.max(W.animationDelay,W.transitionDelay);e?m(b,Math.floor(e*aa*1E3),!1):b();G.resume=function(){d(!0)};G.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=oa(Ca(g)));
	var I={},h=z(a);if(!h||!h.parentNode||!ba.enabled())return L();var t=[],x=a.attr("class"),F=Pa(g),A,J,P,w,G,u,K,M,U,V,fa=[];if(0===g.duration||!y.animations&&!y.transitions)return L();var ia=g.event&&X(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=Y(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=Y(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=Y(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&S(a,g);var ga=[Z,T].join(" ").trim(),na=x+" "+ga,ea=Y(ga,"-active"),x=F.to&&
	0<Object.keys(F.to).length;if(!(0<(g.keyframeStyle||"").length||x||ga))return L();var ja,W;0<g.stagger?(F=parseFloat(g.stagger),W={transitionDelay:F,animationDelay:F,transitionDuration:0,animationDuration:0}):(ja=C(h,na),W=O(h,ga,ja,Xa));g.$$skipPreparationClasses||f.addClass(a,ga);g.transitionStyle&&(F=[R,g.transitionStyle],ka(h,F),t.push(F));0<=g.duration&&(F=0<h.style[R].length,F=Ja(g.duration,F),ka(h,F),t.push(F));g.keyframeStyle&&(F=[$,g.keyframeStyle],ka(h,F),t.push(F));var aa=W?0<=g.staggerIndex?
	g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&pa(h,9999);var D=H(h,na,ja),ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"===D.transitionProperty;q.applyTransitionDuration=x&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=g.duration&&q.hasAnimations;q.applyTransitionDelay=xa(g.delay)&&(q.applyTransitionDuration||
	q.hasTransitions);q.applyAnimationDelay=xa(g.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<T.length;if(q.applyTransitionDuration||q.applyAnimationDuration)M=g.duration?parseFloat(g.duration):M,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=M,F=0<h.style[R+"Property"].length,t.push(Ja(M,F))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=M,t.push([Ba,M+"s"]));if(0===M&&!q.recalculateTimingStyles)return L();if(null!=g.delay){var da;"boolean"!==typeof g.delay&&
	(da=parseFloat(g.delay),u=Math.max(da,0));q.applyTransitionDelay&&t.push([la,da+"s"]);q.applyAnimationDelay&&t.push([qa,da+"s"])}null==g.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ia);K=1E3*u;U=1E3*M;g.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<W.animationDelay&&0===W.animationDuration);g.from&&(g.cleanupStyles&&La(I,h,Object.keys(g.from)),Ga(a,g));q.blockTransition||q.blockKeyframeAnimation?
	k(M):g.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!A)return G={end:d,cancel:s,resume:null,pause:null},w=new e(G),v(E),w}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,m,A){function y(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===
	b.indexOf(a)}).join(" ")}function ba(c,e,f){function m(a){var b={},c=z(a).getBoundingClientRect();r(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=v.scrollTop;break;case "left":d+=v.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function n(){var c=y(f.attr("class")||""),d=s(c,l),c=s(l,c),d=a(A,{to:m(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function p(){A.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}
	var A=w(z(e).cloneNode(!0)),l=y(A.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");A.addClass("ng-anchor");H.append(A);var k;c=function(){var c=a(A,{addClass:"ng-anchor-out",delay:!0,from:m(e)});return c.$$willAnimate?c:null}();if(!c&&(k=n(),!k))return p();var L=c||k;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!k&&(k=n()))return c=k.start(),c.done(function(){c=null;p();b.complete()}),c;p();b.complete()});return b=new d({end:a,
	cancel:a})}}}function C(a,b,c,e){var f=O(a,N),m=O(b,N),y=[];r(e,function(a){(a=ba(c,a.out,a["in"]))&&y.push(a)});if(f||m||0!==y.length)return{start:function(){function a(){r(b,function(a){a.end()})}var b=[];f&&b.push(f.start());m&&b.push(m.start());r(y,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function O(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
	e.domOperation));e.preparationClasses&&(e.event=ea(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return N;var v=A[0].body;c=z(f);var H=w(c.parentNode&&11===c.parentNode.nodeType||v.contains(c)?c:v);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):O(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=X(c)?c:c.split(" ");for(var d=
	[],e={},f=0;f<c.length;f++){var r=c[f],w=a.$$registeredAnimations[r];w&&!e[r]&&(d.push(b.get(w)),e[r]=!0)}return d}var e=Z(d);return function(a,b,d,s){function w(){s.domOperation();e(a,s)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,P,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,P,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;return N}function z(a,
	b,d,e,f){var l=[];r(e,function(e){var m=e[f];m&&l.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=C(m,a,b,d,function(a){h(!1===a)});return e})});return l}function v(a,b,d,e,f){var l=z(a,b,d,e,f);if(0===l.length){var h,m;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),m=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),m=z(a,"addClass",d,e,"addClass"));
	h&&(l=l.concat(h));m&&(l=l.concat(m))}if(0!==l.length)return function(a){var b=[];l.length&&r(l,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){r(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ra(d)&&(s=d,d=null);s=oa(s);d||(d=a.attr("class")||"",s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var G=s.addClass,P=s.removeClass,I=f(d),B,n;if(I.length){var p,K;"leave"===b?(K="leave",p="afterLeave"):(K="before"+b.charAt(0).toUpperCase()+
	b.substr(1),p=b);"enter"!==b&&"move"!==b&&(B=v(a,b,s,I,K));n=v(a,b,s,I,p)}if(B||n){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,w(),ha(a,s),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;w();ha(a,s);l.complete(c)}if(l)return l;l=new c;var d,e=[];B&&e.push(function(a){d=B(a)});e.length?e.push(function(a){w();a(!0)}):w();n&&e.push(function(a){d=n(a)});l.setHost({end:function(){H||((d||N)(void 0),b(void 0))},cancel:function(){H||((d||N)(!0),b(!0))}});c.chain(e,
	b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){r(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
	return f}}}else return d(a)}}]}])})(window,window.angular);
	//# sourceMappingURL=angular-animate.min.js.map


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.6.1
	 * (c) 2010-2016 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {

	'use strict';

	/**
	 * @ngdoc object
	 * @name angular.mock
	 * @description
	 *
	 * Namespace from 'angular-mocks.js' which contains testing related code.
	 *
	 */
	angular.mock = {};

	/**
	 * ! This is a private undocumented service !
	 *
	 * @name $browser
	 *
	 * @description
	 * This service is a mock implementation of {@link ng.$browser}. It provides fake
	 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
	 * cookies, etc.
	 *
	 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
	 * that there are several helper methods available which can be used in tests.
	 */
	angular.mock.$BrowserProvider = function() {
	  this.$get = function() {
	    return new angular.mock.$Browser();
	  };
	};

	angular.mock.$Browser = function() {
	  var self = this;

	  this.isMock = true;
	  self.$$url = 'http://server/';
	  self.$$lastUrl = self.$$url; // used by url polling fn
	  self.pollFns = [];

	  // TODO(vojta): remove this temporary api
	  self.$$completeOutstandingRequest = angular.noop;
	  self.$$incOutstandingRequestCount = angular.noop;


	  // register url polling fn

	  self.onUrlChange = function(listener) {
	    self.pollFns.push(
	      function() {
	        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
	          self.$$lastUrl = self.$$url;
	          self.$$lastState = self.$$state;
	          listener(self.$$url, self.$$state);
	        }
	      }
	    );

	    return listener;
	  };

	  self.$$applicationDestroyed = angular.noop;
	  self.$$checkUrlChange = angular.noop;

	  self.deferredFns = [];
	  self.deferredNextId = 0;

	  self.defer = function(fn, delay) {
	    delay = delay || 0;
	    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
	    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
	    return self.deferredNextId++;
	  };


	  /**
	   * @name $browser#defer.now
	   *
	   * @description
	   * Current milliseconds mock time.
	   */
	  self.defer.now = 0;


	  self.defer.cancel = function(deferId) {
	    var fnIndex;

	    angular.forEach(self.deferredFns, function(fn, index) {
	      if (fn.id === deferId) fnIndex = index;
	    });

	    if (angular.isDefined(fnIndex)) {
	      self.deferredFns.splice(fnIndex, 1);
	      return true;
	    }

	    return false;
	  };


	  /**
	   * @name $browser#defer.flush
	   *
	   * @description
	   * Flushes all pending requests and executes the defer callbacks.
	   *
	   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
	   */
	  self.defer.flush = function(delay) {
	    var nextTime;

	    if (angular.isDefined(delay)) {
	      // A delay was passed so compute the next time
	      nextTime = self.defer.now + delay;
	    } else {
	      if (self.deferredFns.length) {
	        // No delay was passed so set the next time so that it clears the deferred queue
	        nextTime = self.deferredFns[self.deferredFns.length - 1].time;
	      } else {
	        // No delay passed, but there are no deferred tasks so flush - indicates an error!
	        throw new Error('No deferred tasks to be flushed');
	      }
	    }

	    while (self.deferredFns.length && self.deferredFns[0].time <= nextTime) {
	      // Increment the time and call the next deferred function
	      self.defer.now = self.deferredFns[0].time;
	      self.deferredFns.shift().fn();
	    }

	    // Ensure that the current time is correct
	    self.defer.now = nextTime;
	  };

	  self.$$baseHref = '/';
	  self.baseHref = function() {
	    return this.$$baseHref;
	  };
	};
	angular.mock.$Browser.prototype = {

	  /**
	   * @name $browser#poll
	   *
	   * @description
	   * run all fns in pollFns
	   */
	  poll: function poll() {
	    angular.forEach(this.pollFns, function(pollFn) {
	      pollFn();
	    });
	  },

	  url: function(url, replace, state) {
	    if (angular.isUndefined(state)) {
	      state = null;
	    }
	    if (url) {
	      this.$$url = url;
	      // Native pushState serializes & copies the object; simulate it.
	      this.$$state = angular.copy(state);
	      return this;
	    }

	    return this.$$url;
	  },

	  state: function() {
	    return this.$$state;
	  },

	  notifyWhenNoOutstandingRequests: function(fn) {
	    fn();
	  }
	};


	/**
	 * @ngdoc provider
	 * @name $exceptionHandlerProvider
	 *
	 * @description
	 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
	 * passed to the `$exceptionHandler`.
	 */

	/**
	 * @ngdoc service
	 * @name $exceptionHandler
	 *
	 * @description
	 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
	 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
	 * information.
	 *
	 *
	 * ```js
	 *   describe('$exceptionHandlerProvider', function() {
	 *
	 *     it('should capture log messages and exceptions', function() {
	 *
	 *       module(function($exceptionHandlerProvider) {
	 *         $exceptionHandlerProvider.mode('log');
	 *       });
	 *
	 *       inject(function($log, $exceptionHandler, $timeout) {
	 *         $timeout(function() { $log.log(1); });
	 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
	 *         $timeout(function() { $log.log(3); });
	 *         expect($exceptionHandler.errors).toEqual([]);
	 *         expect($log.assertEmpty());
	 *         $timeout.flush();
	 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
	 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
	 *       });
	 *     });
	 *   });
	 * ```
	 */

	angular.mock.$ExceptionHandlerProvider = function() {
	  var handler;

	  /**
	   * @ngdoc method
	   * @name $exceptionHandlerProvider#mode
	   *
	   * @description
	   * Sets the logging mode.
	   *
	   * @param {string} mode Mode of operation, defaults to `rethrow`.
	   *
	   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
	   *     mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of
	   *     them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
	   *     {@link ngMock.$log#reset reset()}.
	   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
	   *     is a bug in the application or test, so this mock will make these tests fail. For any
	   *     implementations that expect exceptions to be thrown, the `rethrow` mode will also maintain
	   *     a log of thrown errors in `$exceptionHandler.errors`.
	   */
	  this.mode = function(mode) {

	    switch (mode) {
	      case 'log':
	      case 'rethrow':
	        var errors = [];
	        handler = function(e) {
	          if (arguments.length === 1) {
	            errors.push(e);
	          } else {
	            errors.push([].slice.call(arguments, 0));
	          }
	          if (mode === 'rethrow') {
	            throw e;
	          }
	        };
	        handler.errors = errors;
	        break;
	      default:
	        throw new Error('Unknown mode \'' + mode + '\', only \'log\'/\'rethrow\' modes are allowed!');
	    }
	  };

	  this.$get = function() {
	    return handler;
	  };

	  this.mode('rethrow');
	};


	/**
	 * @ngdoc service
	 * @name $log
	 *
	 * @description
	 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
	 * (one array per logging level). These arrays are exposed as `logs` property of each of the
	 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
	 *
	 */
	angular.mock.$LogProvider = function() {
	  var debug = true;

	  function concat(array1, array2, index) {
	    return array1.concat(Array.prototype.slice.call(array2, index));
	  }

	  this.debugEnabled = function(flag) {
	    if (angular.isDefined(flag)) {
	      debug = flag;
	      return this;
	    } else {
	      return debug;
	    }
	  };

	  this.$get = function() {
	    var $log = {
	      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
	      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
	      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
	      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
	      debug: function() {
	        if (debug) {
	          $log.debug.logs.push(concat([], arguments, 0));
	        }
	      }
	    };

	    /**
	     * @ngdoc method
	     * @name $log#reset
	     *
	     * @description
	     * Reset all of the logging arrays to empty.
	     */
	    $log.reset = function() {
	      /**
	       * @ngdoc property
	       * @name $log#log.logs
	       *
	       * @description
	       * Array of messages logged using {@link ng.$log#log `log()`}.
	       *
	       * @example
	       * ```js
	       * $log.log('Some Log');
	       * var first = $log.log.logs.unshift();
	       * ```
	       */
	      $log.log.logs = [];
	      /**
	       * @ngdoc property
	       * @name $log#info.logs
	       *
	       * @description
	       * Array of messages logged using {@link ng.$log#info `info()`}.
	       *
	       * @example
	       * ```js
	       * $log.info('Some Info');
	       * var first = $log.info.logs.unshift();
	       * ```
	       */
	      $log.info.logs = [];
	      /**
	       * @ngdoc property
	       * @name $log#warn.logs
	       *
	       * @description
	       * Array of messages logged using {@link ng.$log#warn `warn()`}.
	       *
	       * @example
	       * ```js
	       * $log.warn('Some Warning');
	       * var first = $log.warn.logs.unshift();
	       * ```
	       */
	      $log.warn.logs = [];
	      /**
	       * @ngdoc property
	       * @name $log#error.logs
	       *
	       * @description
	       * Array of messages logged using {@link ng.$log#error `error()`}.
	       *
	       * @example
	       * ```js
	       * $log.error('Some Error');
	       * var first = $log.error.logs.unshift();
	       * ```
	       */
	      $log.error.logs = [];
	        /**
	       * @ngdoc property
	       * @name $log#debug.logs
	       *
	       * @description
	       * Array of messages logged using {@link ng.$log#debug `debug()`}.
	       *
	       * @example
	       * ```js
	       * $log.debug('Some Error');
	       * var first = $log.debug.logs.unshift();
	       * ```
	       */
	      $log.debug.logs = [];
	    };

	    /**
	     * @ngdoc method
	     * @name $log#assertEmpty
	     *
	     * @description
	     * Assert that all of the logging methods have no logged messages. If any messages are present,
	     * an exception is thrown.
	     */
	    $log.assertEmpty = function() {
	      var errors = [];
	      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
	        angular.forEach($log[logLevel].logs, function(log) {
	          angular.forEach(log, function(logItem) {
	            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
	                        (logItem.stack || ''));
	          });
	        });
	      });
	      if (errors.length) {
	        errors.unshift('Expected $log to be empty! Either a message was logged unexpectedly, or ' +
	          'an expected log message was not checked and removed:');
	        errors.push('');
	        throw new Error(errors.join('\n---------\n'));
	      }
	    };

	    $log.reset();
	    return $log;
	  };
	};


	/**
	 * @ngdoc service
	 * @name $interval
	 *
	 * @description
	 * Mock implementation of the $interval service.
	 *
	 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
	 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
	 * time.
	 *
	 * @param {function()} fn A function that should be called repeatedly.
	 * @param {number} delay Number of milliseconds between each function call.
	 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
	 *   indefinitely.
	 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
	 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
	 * @param {...*=} Pass additional parameters to the executed function.
	 * @returns {promise} A promise which will be notified on each iteration.
	 */
	angular.mock.$IntervalProvider = function() {
	  this.$get = ['$browser', '$rootScope', '$q', '$$q',
	       function($browser,   $rootScope,   $q,   $$q) {
	    var repeatFns = [],
	        nextRepeatId = 0,
	        now = 0;

	    var $interval = function(fn, delay, count, invokeApply) {
	      var hasParams = arguments.length > 4,
	          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
	          iteration = 0,
	          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
	          deferred = (skipApply ? $$q : $q).defer(),
	          promise = deferred.promise;

	      count = (angular.isDefined(count)) ? count : 0;
	      promise.then(null, function() {}, (!hasParams) ? fn : function() {
	        fn.apply(null, args);
	      });

	      promise.$$intervalId = nextRepeatId;

	      function tick() {
	        deferred.notify(iteration++);

	        if (count > 0 && iteration >= count) {
	          var fnIndex;
	          deferred.resolve(iteration);

	          angular.forEach(repeatFns, function(fn, index) {
	            if (fn.id === promise.$$intervalId) fnIndex = index;
	          });

	          if (angular.isDefined(fnIndex)) {
	            repeatFns.splice(fnIndex, 1);
	          }
	        }

	        if (skipApply) {
	          $browser.defer.flush();
	        } else {
	          $rootScope.$apply();
	        }
	      }

	      repeatFns.push({
	        nextTime:(now + delay),
	        delay: delay,
	        fn: tick,
	        id: nextRepeatId,
	        deferred: deferred
	      });
	      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

	      nextRepeatId++;
	      return promise;
	    };
	    /**
	     * @ngdoc method
	     * @name $interval#cancel
	     *
	     * @description
	     * Cancels a task associated with the `promise`.
	     *
	     * @param {promise} promise A promise from calling the `$interval` function.
	     * @returns {boolean} Returns `true` if the task was successfully cancelled.
	     */
	    $interval.cancel = function(promise) {
	      if (!promise) return false;
	      var fnIndex;

	      angular.forEach(repeatFns, function(fn, index) {
	        if (fn.id === promise.$$intervalId) fnIndex = index;
	      });

	      if (angular.isDefined(fnIndex)) {
	        repeatFns[fnIndex].deferred.promise.then(undefined, function() {});
	        repeatFns[fnIndex].deferred.reject('canceled');
	        repeatFns.splice(fnIndex, 1);
	        return true;
	      }

	      return false;
	    };

	    /**
	     * @ngdoc method
	     * @name $interval#flush
	     * @description
	     *
	     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
	     *
	     * @param {number=} millis maximum timeout amount to flush up until.
	     *
	     * @return {number} The amount of time moved forward.
	     */
	    $interval.flush = function(millis) {
	      now += millis;
	      while (repeatFns.length && repeatFns[0].nextTime <= now) {
	        var task = repeatFns[0];
	        task.fn();
	        task.nextTime += task.delay;
	        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
	      }
	      return millis;
	    };

	    return $interval;
	  }];
	};


	function jsonStringToDate(string) {
	  // The R_ISO8061_STR regex is never going to fit into the 100 char limit!
	  // eslit-disable-next-line max-len
	  var R_ISO8061_STR = /^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

	  var match;
	  if ((match = string.match(R_ISO8061_STR))) {
	    var date = new Date(0),
	        tzHour = 0,
	        tzMin  = 0;
	    if (match[9]) {
	      tzHour = toInt(match[9] + match[10]);
	      tzMin = toInt(match[9] + match[11]);
	    }
	    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
	    date.setUTCHours(toInt(match[4] || 0) - tzHour,
	                     toInt(match[5] || 0) - tzMin,
	                     toInt(match[6] || 0),
	                     toInt(match[7] || 0));
	    return date;
	  }
	  return string;
	}

	function toInt(str) {
	  return parseInt(str, 10);
	}

	function padNumberInMock(num, digits, trim) {
	  var neg = '';
	  if (num < 0) {
	    neg =  '-';
	    num = -num;
	  }
	  num = '' + num;
	  while (num.length < digits) num = '0' + num;
	  if (trim) {
	    num = num.substr(num.length - digits);
	  }
	  return neg + num;
	}


	/**
	 * @ngdoc type
	 * @name angular.mock.TzDate
	 * @description
	 *
	 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
	 *
	 * Mock of the Date type which has its timezone specified via constructor arg.
	 *
	 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
	 * offset, so that we can test code that depends on local timezone settings without dependency on
	 * the time zone settings of the machine where the code is running.
	 *
	 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
	 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
	 *
	 * @example
	 * !!!! WARNING !!!!!
	 * This is not a complete Date object so only methods that were implemented can be called safely.
	 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
	 *
	 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
	 * incomplete we might be missing some non-standard methods. This can result in errors like:
	 * "Date.prototype.foo called on incompatible Object".
	 *
	 * ```js
	 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
	 * newYearInBratislava.getTimezoneOffset() => -60;
	 * newYearInBratislava.getFullYear() => 2010;
	 * newYearInBratislava.getMonth() => 0;
	 * newYearInBratislava.getDate() => 1;
	 * newYearInBratislava.getHours() => 0;
	 * newYearInBratislava.getMinutes() => 0;
	 * newYearInBratislava.getSeconds() => 0;
	 * ```
	 *
	 */
	angular.mock.TzDate = function(offset, timestamp) {
	  var self = new Date(0);
	  if (angular.isString(timestamp)) {
	    var tsStr = timestamp;

	    self.origDate = jsonStringToDate(timestamp);

	    timestamp = self.origDate.getTime();
	    if (isNaN(timestamp)) {
	      // eslint-disable-next-line no-throw-literal
	      throw {
	        name: 'Illegal Argument',
	        message: 'Arg \'' + tsStr + '\' passed into TzDate constructor is not a valid date string'
	      };
	    }
	  } else {
	    self.origDate = new Date(timestamp);
	  }

	  var localOffset = new Date(timestamp).getTimezoneOffset();
	  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
	  self.date = new Date(timestamp + self.offsetDiff);

	  self.getTime = function() {
	    return self.date.getTime() - self.offsetDiff;
	  };

	  self.toLocaleDateString = function() {
	    return self.date.toLocaleDateString();
	  };

	  self.getFullYear = function() {
	    return self.date.getFullYear();
	  };

	  self.getMonth = function() {
	    return self.date.getMonth();
	  };

	  self.getDate = function() {
	    return self.date.getDate();
	  };

	  self.getHours = function() {
	    return self.date.getHours();
	  };

	  self.getMinutes = function() {
	    return self.date.getMinutes();
	  };

	  self.getSeconds = function() {
	    return self.date.getSeconds();
	  };

	  self.getMilliseconds = function() {
	    return self.date.getMilliseconds();
	  };

	  self.getTimezoneOffset = function() {
	    return offset * 60;
	  };

	  self.getUTCFullYear = function() {
	    return self.origDate.getUTCFullYear();
	  };

	  self.getUTCMonth = function() {
	    return self.origDate.getUTCMonth();
	  };

	  self.getUTCDate = function() {
	    return self.origDate.getUTCDate();
	  };

	  self.getUTCHours = function() {
	    return self.origDate.getUTCHours();
	  };

	  self.getUTCMinutes = function() {
	    return self.origDate.getUTCMinutes();
	  };

	  self.getUTCSeconds = function() {
	    return self.origDate.getUTCSeconds();
	  };

	  self.getUTCMilliseconds = function() {
	    return self.origDate.getUTCMilliseconds();
	  };

	  self.getDay = function() {
	    return self.date.getDay();
	  };

	  // provide this method only on browsers that already have it
	  if (self.toISOString) {
	    self.toISOString = function() {
	      return padNumberInMock(self.origDate.getUTCFullYear(), 4) + '-' +
	            padNumberInMock(self.origDate.getUTCMonth() + 1, 2) + '-' +
	            padNumberInMock(self.origDate.getUTCDate(), 2) + 'T' +
	            padNumberInMock(self.origDate.getUTCHours(), 2) + ':' +
	            padNumberInMock(self.origDate.getUTCMinutes(), 2) + ':' +
	            padNumberInMock(self.origDate.getUTCSeconds(), 2) + '.' +
	            padNumberInMock(self.origDate.getUTCMilliseconds(), 3) + 'Z';
	    };
	  }

	  //hide all methods not implemented in this mock that the Date prototype exposes
	  var unimplementedMethods = ['getUTCDay',
	      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
	      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
	      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
	      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
	      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

	  angular.forEach(unimplementedMethods, function(methodName) {
	    self[methodName] = function() {
	      throw new Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
	    };
	  });

	  return self;
	};

	//make "tzDateInstance instanceof Date" return true
	angular.mock.TzDate.prototype = Date.prototype;


	/**
	 * @ngdoc service
	 * @name $animate
	 *
	 * @description
	 * Mock implementation of the {@link ng.$animate `$animate`} service. Exposes two additional methods
	 * for testing animations.
	 *
	 * You need to require the `ngAnimateMock` module in your test suite for instance `beforeEach(module('ngAnimateMock'))`
	 */
	angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

	  .config(['$provide', function($provide) {

	    $provide.factory('$$forceReflow', function() {
	      function reflowFn() {
	        reflowFn.totalReflows++;
	      }
	      reflowFn.totalReflows = 0;
	      return reflowFn;
	    });

	    $provide.factory('$$animateAsyncRun', function() {
	      var queue = [];
	      var queueFn = function() {
	        return function(fn) {
	          queue.push(fn);
	        };
	      };
	      queueFn.flush = function() {
	        if (queue.length === 0) return false;

	        for (var i = 0; i < queue.length; i++) {
	          queue[i]();
	        }
	        queue = [];

	        return true;
	      };
	      return queueFn;
	    });

	    $provide.decorator('$$animateJs', ['$delegate', function($delegate) {
	      var runners = [];

	      var animateJsConstructor = function() {
	        var animator = $delegate.apply($delegate, arguments);
	        // If no javascript animation is found, animator is undefined
	        if (animator) {
	          runners.push(animator);
	        }
	        return animator;
	      };

	      animateJsConstructor.$closeAndFlush = function() {
	        runners.forEach(function(runner) {
	          runner.end();
	        });
	        runners = [];
	      };

	      return animateJsConstructor;
	    }]);

	    $provide.decorator('$animateCss', ['$delegate', function($delegate) {
	      var runners = [];

	      var animateCssConstructor = function(element, options) {
	        var animator = $delegate(element, options);
	        runners.push(animator);
	        return animator;
	      };

	      animateCssConstructor.$closeAndFlush = function() {
	        runners.forEach(function(runner) {
	          runner.end();
	        });
	        runners = [];
	      };

	      return animateCssConstructor;
	    }]);

	    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF', '$animateCss', '$$animateJs',
	                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
	                            function($delegate,   $timeout,   $browser,   $$rAF,   $animateCss,   $$animateJs,
	                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
	      var animate = {
	        queue: [],
	        cancel: $delegate.cancel,
	        on: $delegate.on,
	        off: $delegate.off,
	        pin: $delegate.pin,
	        get reflows() {
	          return $$forceReflow.totalReflows;
	        },
	        enabled: $delegate.enabled,
	        /**
	         * @ngdoc method
	         * @name $animate#closeAndFlush
	         * @description
	         *
	         * This method will close all pending animations (both {@link ngAnimate#javascript-based-animations Javascript}
	         * and {@link ngAnimate.$animateCss CSS}) and it will also flush any remaining animation frames and/or callbacks.
	         */
	        closeAndFlush: function() {
	          // we allow the flush command to swallow the errors
	          // because depending on whether CSS or JS animations are
	          // used, there may not be a RAF flush. The primary flush
	          // at the end of this function must throw an exception
	          // because it will track if there were pending animations
	          this.flush(true);
	          $animateCss.$closeAndFlush();
	          $$animateJs.$closeAndFlush();
	          this.flush();
	        },
	        /**
	         * @ngdoc method
	         * @name $animate#flush
	         * @description
	         *
	         * This method is used to flush the pending callbacks and animation frames to either start
	         * an animation or conclude an animation. Note that this will not actually close an
	         * actively running animation (see {@link ngMock.$animate#closeAndFlush `closeAndFlush()`} for that).
	         */
	        flush: function(hideErrors) {
	          $rootScope.$digest();

	          var doNextRun, somethingFlushed = false;
	          do {
	            doNextRun = false;

	            if ($$rAF.queue.length) {
	              $$rAF.flush();
	              doNextRun = somethingFlushed = true;
	            }

	            if ($$animateAsyncRun.flush()) {
	              doNextRun = somethingFlushed = true;
	            }
	          } while (doNextRun);

	          if (!somethingFlushed && !hideErrors) {
	            throw new Error('No pending animations ready to be closed or flushed');
	          }

	          $rootScope.$digest();
	        }
	      };

	      angular.forEach(
	        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
	        animate[method] = function() {
	          animate.queue.push({
	            event: method,
	            element: arguments[0],
	            options: arguments[arguments.length - 1],
	            args: arguments
	          });
	          return $delegate[method].apply($delegate, arguments);
	        };
	      });

	      return animate;
	    }]);

	  }]);


	/**
	 * @ngdoc function
	 * @name angular.mock.dump
	 * @description
	 *
	 * *NOTE*: This is not an injectable instance, just a globally available function.
	 *
	 * Method for serializing common angular objects (scope, elements, etc..) into strings.
	 * It is useful for logging objects to the console when debugging.
	 *
	 * @param {*} object - any object to turn into string.
	 * @return {string} a serialized string of the argument
	 */
	angular.mock.dump = function(object) {
	  return serialize(object);

	  function serialize(object) {
	    var out;

	    if (angular.isElement(object)) {
	      object = angular.element(object);
	      out = angular.element('<div></div>');
	      angular.forEach(object, function(element) {
	        out.append(angular.element(element).clone());
	      });
	      out = out.html();
	    } else if (angular.isArray(object)) {
	      out = [];
	      angular.forEach(object, function(o) {
	        out.push(serialize(o));
	      });
	      out = '[ ' + out.join(', ') + ' ]';
	    } else if (angular.isObject(object)) {
	      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
	        out = serializeScope(object);
	      } else if (object instanceof Error) {
	        out = object.stack || ('' + object.name + ': ' + object.message);
	      } else {
	        // TODO(i): this prevents methods being logged,
	        // we should have a better way to serialize objects
	        out = angular.toJson(object, true);
	      }
	    } else {
	      out = String(object);
	    }

	    return out;
	  }

	  function serializeScope(scope, offset) {
	    offset = offset ||  '  ';
	    var log = [offset + 'Scope(' + scope.$id + '): {'];
	    for (var key in scope) {
	      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
	        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
	      }
	    }
	    var child = scope.$$childHead;
	    while (child) {
	      log.push(serializeScope(child, offset + '  '));
	      child = child.$$nextSibling;
	    }
	    log.push('}');
	    return log.join('\n' + offset);
	  }
	};

	/**
	 * @ngdoc service
	 * @name $httpBackend
	 * @description
	 * Fake HTTP backend implementation suitable for unit testing applications that use the
	 * {@link ng.$http $http service}.
	 *
	 * <div class="alert alert-info">
	 * **Note**: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
	 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
	 * </div>
	 *
	 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
	 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
	 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
	 * to verify whether a certain request has been sent or not, or alternatively just let the
	 * application make requests, respond with pre-trained responses and assert that the end result is
	 * what we expect it to be.
	 *
	 * This mock implementation can be used to respond with static or dynamic responses via the
	 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
	 *
	 * When an Angular application needs some data from a server, it calls the $http service, which
	 * sends the request to a real server using $httpBackend service. With dependency injection, it is
	 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
	 * the requests and respond with some testing data without sending a request to a real server.
	 *
	 * There are two ways to specify what test data should be returned as http responses by the mock
	 * backend when the code under test makes http requests:
	 *
	 * - `$httpBackend.expect` - specifies a request expectation
	 * - `$httpBackend.when` - specifies a backend definition
	 *
	 *
	 * ## Request Expectations vs Backend Definitions
	 *
	 * Request expectations provide a way to make assertions about requests made by the application and
	 * to define responses for those requests. The test will fail if the expected requests are not made
	 * or they are made in the wrong order.
	 *
	 * Backend definitions allow you to define a fake backend for your application which doesn't assert
	 * if a particular request was made or not, it just returns a trained response if a request is made.
	 * The test will pass whether or not the request gets made during testing.
	 *
	 *
	 * <table class="table">
	 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
	 *   <tr>
	 *     <th>Syntax</th>
	 *     <td>.expect(...).respond(...)</td>
	 *     <td>.when(...).respond(...)</td>
	 *   </tr>
	 *   <tr>
	 *     <th>Typical usage</th>
	 *     <td>strict unit tests</td>
	 *     <td>loose (black-box) unit testing</td>
	 *   </tr>
	 *   <tr>
	 *     <th>Fulfills multiple requests</th>
	 *     <td>NO</td>
	 *     <td>YES</td>
	 *   </tr>
	 *   <tr>
	 *     <th>Order of requests matters</th>
	 *     <td>YES</td>
	 *     <td>NO</td>
	 *   </tr>
	 *   <tr>
	 *     <th>Request required</th>
	 *     <td>YES</td>
	 *     <td>NO</td>
	 *   </tr>
	 *   <tr>
	 *     <th>Response required</th>
	 *     <td>optional (see below)</td>
	 *     <td>YES</td>
	 *   </tr>
	 * </table>
	 *
	 * In cases where both backend definitions and request expectations are specified during unit
	 * testing, the request expectations are evaluated first.
	 *
	 * If a request expectation has no response specified, the algorithm will search your backend
	 * definitions for an appropriate response.
	 *
	 * If a request didn't match any expectation or if the expectation doesn't have the response
	 * defined, the backend definitions are evaluated in sequential order to see if any of them match
	 * the request. The response from the first matched definition is returned.
	 *
	 *
	 * ## Flushing HTTP requests
	 *
	 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
	 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
	 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
	 * change the execution of the code under test. For this reason, the mock $httpBackend has a
	 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
	 * the async api of the backend, while allowing the test to execute synchronously.
	 *
	 *
	 * ## Unit testing with mock $httpBackend
	 * The following code shows how to setup and use the mock backend when unit testing a controller.
	 * First we create the controller under test:
	 *
	  ```js
	  // The module code
	  angular
	    .module('MyApp', [])
	    .controller('MyController', MyController);

	  // The controller code
	  function MyController($scope, $http) {
	    var authToken;

	    $http.get('/auth.py').then(function(response) {
	      authToken = response.headers('A-Token');
	      $scope.user = response.data;
	    });

	    $scope.saveMessage = function(message) {
	      var headers = { 'Authorization': authToken };
	      $scope.status = 'Saving...';

	      $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
	        $scope.status = '';
	      }).catch(function() {
	        $scope.status = 'Failed...';
	      });
	    };
	  }
	  ```
	 *
	 * Now we setup the mock backend and create the test specs:
	 *
	  ```js
	    // testing controller
	    describe('MyController', function() {
	       var $httpBackend, $rootScope, createController, authRequestHandler;

	       // Set up the module
	       beforeEach(module('MyApp'));

	       beforeEach(inject(function($injector) {
	         // Set up the mock http service responses
	         $httpBackend = $injector.get('$httpBackend');
	         // backend definition common for all tests
	         authRequestHandler = $httpBackend.when('GET', '/auth.py')
	                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

	         // Get hold of a scope (i.e. the root scope)
	         $rootScope = $injector.get('$rootScope');
	         // The $controller service is used to create instances of controllers
	         var $controller = $injector.get('$controller');

	         createController = function() {
	           return $controller('MyController', {'$scope' : $rootScope });
	         };
	       }));


	       afterEach(function() {
	         $httpBackend.verifyNoOutstandingExpectation();
	         $httpBackend.verifyNoOutstandingRequest();
	       });


	       it('should fetch authentication token', function() {
	         $httpBackend.expectGET('/auth.py');
	         var controller = createController();
	         $httpBackend.flush();
	       });


	       it('should fail authentication', function() {

	         // Notice how you can change the response even after it was set
	         authRequestHandler.respond(401, '');

	         $httpBackend.expectGET('/auth.py');
	         var controller = createController();
	         $httpBackend.flush();
	         expect($rootScope.status).toBe('Failed...');
	       });


	       it('should send msg to server', function() {
	         var controller = createController();
	         $httpBackend.flush();

	         // now you don’t care about the authentication, but
	         // the controller will still send the request and
	         // $httpBackend will respond without you having to
	         // specify the expectation and response for this request

	         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
	         $rootScope.saveMessage('message content');
	         expect($rootScope.status).toBe('Saving...');
	         $httpBackend.flush();
	         expect($rootScope.status).toBe('');
	       });


	       it('should send auth header', function() {
	         var controller = createController();
	         $httpBackend.flush();

	         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
	           // check if the header was sent, if it wasn't the expectation won't
	           // match the request and the test will fail
	           return headers['Authorization'] === 'xxx';
	         }).respond(201, '');

	         $rootScope.saveMessage('whatever');
	         $httpBackend.flush();
	       });
	    });
	  ```
	 *
	 * ## Dynamic responses
	 *
	 * You define a response to a request by chaining a call to `respond()` onto a definition or expectation.
	 * If you provide a **callback** as the first parameter to `respond(callback)` then you can dynamically generate
	 * a response based on the properties of the request.
	 *
	 * The `callback` function should be of the form `function(method, url, data, headers, params)`.
	 *
	 * ### Query parameters
	 *
	 * By default, query parameters on request URLs are parsed into the `params` object. So a request URL
	 * of `/list?q=searchstr&orderby=-name` would set `params` to be `{q: 'searchstr', orderby: '-name'}`.
	 *
	 * ### Regex parameter matching
	 *
	 * If an expectation or definition uses a **regex** to match the URL, you can provide an array of **keys** via a
	 * `params` argument. The index of each **key** in the array will match the index of a **group** in the
	 * **regex**.
	 *
	 * The `params` object in the **callback** will now have properties with these keys, which hold the value of the
	 * corresponding **group** in the **regex**.
	 *
	 * This also applies to the `when` and `expect` shortcut methods.
	 *
	 *
	 * ```js
	 *   $httpBackend.expect('GET', /\/user\/(.+)/, undefined, undefined, ['id'])
	 *     .respond(function(method, url, data, headers, params) {
	 *       // for requested url of '/user/1234' params is {id: '1234'}
	 *     });
	 *
	 *   $httpBackend.whenPATCH(/\/user\/(.+)\/article\/(.+)/, undefined, undefined, ['user', 'article'])
	 *     .respond(function(method, url, data, headers, params) {
	 *       // for url of '/user/1234/article/567' params is {user: '1234', article: '567'}
	 *     });
	 * ```
	 *
	 * ## Matching route requests
	 *
	 * For extra convenience, `whenRoute` and `expectRoute` shortcuts are available. These methods offer colon
	 * delimited matching of the url path, ignoring the query string. This allows declarations
	 * similar to how application routes are configured with `$routeProvider`. Because these methods convert
	 * the definition url to regex, declaration order is important. Combined with query parameter parsing,
	 * the following is possible:
	 *
	  ```js
	    $httpBackend.whenRoute('GET', '/users/:id')
	      .respond(function(method, url, data, headers, params) {
	        return [200, MockUserList[Number(params.id)]];
	      });

	    $httpBackend.whenRoute('GET', '/users')
	      .respond(function(method, url, data, headers, params) {
	        var userList = angular.copy(MockUserList),
	          defaultSort = 'lastName',
	          count, pages, isPrevious, isNext;

	        // paged api response '/v1/users?page=2'
	        params.page = Number(params.page) || 1;

	        // query for last names '/v1/users?q=Archer'
	        if (params.q) {
	          userList = $filter('filter')({lastName: params.q});
	        }

	        pages = Math.ceil(userList.length / pagingLength);
	        isPrevious = params.page > 1;
	        isNext = params.page < pages;

	        return [200, {
	          count:    userList.length,
	          previous: isPrevious,
	          next:     isNext,
	          // sort field -> '/v1/users?sortBy=firstName'
	          results:  $filter('orderBy')(userList, params.sortBy || defaultSort)
	                      .splice((params.page - 1) * pagingLength, pagingLength)
	        }];
	      });
	  ```
	 */
	angular.mock.$HttpBackendProvider = function() {
	  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
	};

	/**
	 * General factory function for $httpBackend mock.
	 * Returns instance for unit testing (when no arguments specified):
	 *   - passing through is disabled
	 *   - auto flushing is disabled
	 *
	 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
	 *   - passing through (delegating request to real backend) is enabled
	 *   - auto flushing is enabled
	 *
	 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
	 * @param {Object=} $browser Auto-flushing enabled if specified
	 * @return {Object} Instance of $httpBackend mock
	 */
	function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
	  var definitions = [],
	      expectations = [],
	      responses = [],
	      responsesPush = angular.bind(responses, responses.push),
	      copy = angular.copy;

	  function createResponse(status, data, headers, statusText) {
	    if (angular.isFunction(status)) return status;

	    return function() {
	      return angular.isNumber(status)
	          ? [status, data, headers, statusText]
	          : [200, status, data, headers];
	    };
	  }

	  // TODO(vojta): change params to: method, url, data, headers, callback
	  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {

	    var xhr = new MockXhr(),
	        expectation = expectations[0],
	        wasExpected = false;

	    xhr.$$events = eventHandlers;
	    xhr.upload.$$events = uploadEventHandlers;

	    function prettyPrint(data) {
	      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
	          ? data
	          : angular.toJson(data);
	    }

	    function wrapResponse(wrapped) {
	      if (!$browser && timeout) {
	        if (timeout.then) {
	          timeout.then(handleTimeout);
	        } else {
	          $timeout(handleTimeout, timeout);
	        }
	      }

	      return handleResponse;

	      function handleResponse() {
	        var response = wrapped.response(method, url, data, headers, wrapped.params(url));
	        xhr.$$respHeaders = response[2];
	        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
	                 copy(response[3] || ''));
	      }

	      function handleTimeout() {
	        for (var i = 0, ii = responses.length; i < ii; i++) {
	          if (responses[i] === handleResponse) {
	            responses.splice(i, 1);
	            callback(-1, undefined, '');
	            break;
	          }
	        }
	      }
	    }

	    if (expectation && expectation.match(method, url)) {
	      if (!expectation.matchData(data)) {
	        throw new Error('Expected ' + expectation + ' with different data\n' +
	            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
	      }

	      if (!expectation.matchHeaders(headers)) {
	        throw new Error('Expected ' + expectation + ' with different headers\n' +
	                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
	                        prettyPrint(headers));
	      }

	      expectations.shift();

	      if (expectation.response) {
	        responses.push(wrapResponse(expectation));
	        return;
	      }
	      wasExpected = true;
	    }

	    var i = -1, definition;
	    while ((definition = definitions[++i])) {
	      if (definition.match(method, url, data, headers || {})) {
	        if (definition.response) {
	          // if $browser specified, we do auto flush all requests
	          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
	        } else if (definition.passThrough) {
	          $delegate(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers);
	        } else throw new Error('No response defined !');
	        return;
	      }
	    }
	    throw wasExpected ?
	        new Error('No response defined !') :
	        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
	                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
	  }

	  /**
	   * @ngdoc method
	   * @name $httpBackend#when
	   * @description
	   * Creates a new backend definition.
	   *
	   * @param {string} method HTTP method.
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	   *   data string and returns true if the data is as expected.
	   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
	   *   object and returns true if the headers match the current definition.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   *
	   *  - respond –
	   *      ```js
	   *      {function([status,] data[, headers, statusText])
	   *      | function(function(method, url, data, headers, params)}
	   *      ```
	   *    – The respond method takes a set of static data to be returned or a function that can
	   *    return an array containing response status (number), response data (Array|Object|string),
	   *    response headers (Object), and the text for the status (string). The respond method returns
	   *    the `requestHandler` object for possible overrides.
	   */
	  $httpBackend.when = function(method, url, data, headers, keys) {

	    assertArgDefined(arguments, 1, 'url');

	    var definition = new MockHttpExpectation(method, url, data, headers, keys),
	        chain = {
	          respond: function(status, data, headers, statusText) {
	            definition.passThrough = undefined;
	            definition.response = createResponse(status, data, headers, statusText);
	            return chain;
	          }
	        };

	    if ($browser) {
	      chain.passThrough = function() {
	        definition.response = undefined;
	        definition.passThrough = true;
	        return chain;
	      };
	    }

	    definitions.push(definition);
	    return chain;
	  };

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenGET
	   * @description
	   * Creates a new backend definition for GET requests. For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(Object|function(Object))=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenHEAD
	   * @description
	   * Creates a new backend definition for HEAD requests. For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(Object|function(Object))=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenDELETE
	   * @description
	   * Creates a new backend definition for DELETE requests. For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(Object|function(Object))=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenPOST
	   * @description
	   * Creates a new backend definition for POST requests. For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	   *   data string and returns true if the data is as expected.
	   * @param {(Object|function(Object))=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenPUT
	   * @description
	   * Creates a new backend definition for PUT requests.  For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	   *   data string and returns true if the data is as expected.
	   * @param {(Object|function(Object))=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenJSONP
	   * @description
	   * Creates a new backend definition for JSONP requests. For more info see `when()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled.
	   */
	  createShortMethods('when');

	  /**
	   * @ngdoc method
	   * @name $httpBackend#whenRoute
	   * @description
	   * Creates a new backend definition that compares only with the requested route.
	   *
	   * @param {string} method HTTP method.
	   * @param {string} url HTTP url string that supports colon param matching.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled. See #when for more info.
	   */
	  $httpBackend.whenRoute = function(method, url) {
	    var pathObj = parseRoute(url);
	    return $httpBackend.when(method, pathObj.regexp, undefined, undefined, pathObj.keys);
	  };

	  function parseRoute(url) {
	    var ret = {
	      regexp: url
	    },
	    keys = ret.keys = [];

	    if (!url || !angular.isString(url)) return ret;

	    url = url
	      .replace(/([().])/g, '\\$1')
	      .replace(/(\/)?:(\w+)([?*])?/g, function(_, slash, key, option) {
	        var optional = option === '?' ? option : null;
	        var star = option === '*' ? option : null;
	        keys.push({ name: key, optional: !!optional });
	        slash = slash || '';
	        return ''
	          + (optional ? '' : slash)
	          + '(?:'
	          + (optional ? slash : '')
	          + (star && '(.+?)' || '([^/]+)')
	          + (optional || '')
	          + ')'
	          + (optional || '');
	      })
	      .replace(/([/$*])/g, '\\$1');

	    ret.regexp = new RegExp('^' + url, 'i');
	    return ret;
	  }

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expect
	   * @description
	   * Creates a new request expectation.
	   *
	   * @param {string} method HTTP method.
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
	   *  receives data string and returns true if the data is as expected, or Object if request body
	   *  is in JSON format.
	   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
	   *   object and returns true if the headers match the current expectation.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *  request is handled. You can save this object for later use and invoke `respond` again in
	   *  order to change how a matched request is handled.
	   *
	   *  - respond –
	   *    ```
	   *    { function([status,] data[, headers, statusText])
	   *    | function(function(method, url, data, headers, params)}
	   *    ```
	   *    – The respond method takes a set of static data to be returned or a function that can
	   *    return an array containing response status (number), response data (Array|Object|string),
	   *    response headers (Object), and the text for the status (string). The respond method returns
	   *    the `requestHandler` object for possible overrides.
	   */
	  $httpBackend.expect = function(method, url, data, headers, keys) {

	    assertArgDefined(arguments, 1, 'url');

	    var expectation = new MockHttpExpectation(method, url, data, headers, keys),
	        chain = {
	          respond: function(status, data, headers, statusText) {
	            expectation.response = createResponse(status, data, headers, statusText);
	            return chain;
	          }
	        };

	    expectations.push(expectation);
	    return chain;
	  };

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectGET
	   * @description
	   * Creates a new request expectation for GET requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled. See #expect for more info.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectHEAD
	   * @description
	   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectDELETE
	   * @description
	   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectPOST
	   * @description
	   * Creates a new request expectation for POST requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
	   *  receives data string and returns true if the data is as expected, or Object if request body
	   *  is in JSON format.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectPUT
	   * @description
	   * Creates a new request expectation for PUT requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
	   *  receives data string and returns true if the data is as expected, or Object if request body
	   *  is in JSON format.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectPATCH
	   * @description
	   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	   *   and returns true if the url matches the current definition.
	   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
	   *  receives data string and returns true if the data is as expected, or Object if request body
	   *  is in JSON format.
	   * @param {Object=} headers HTTP headers.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectJSONP
	   * @description
	   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
	   *
	   * @param {string|RegExp|function(string)=} url HTTP url or function that receives an url
	   *   and returns true if the url matches the current definition.
	   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   *   request is handled. You can save this object for later use and invoke `respond` again in
	   *   order to change how a matched request is handled.
	   */
	  createShortMethods('expect');

	  /**
	   * @ngdoc method
	   * @name $httpBackend#expectRoute
	   * @description
	   * Creates a new request expectation that compares only with the requested route.
	   *
	   * @param {string} method HTTP method.
	   * @param {string} url HTTP url string that supports colon param matching.
	   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
	   * request is handled. You can save this object for later use and invoke `respond` again in
	   * order to change how a matched request is handled. See #expect for more info.
	   */
	  $httpBackend.expectRoute = function(method, url) {
	    var pathObj = parseRoute(url);
	    return $httpBackend.expect(method, pathObj.regexp, undefined, undefined, pathObj.keys);
	  };


	  /**
	   * @ngdoc method
	   * @name $httpBackend#flush
	   * @description
	   * Flushes pending requests using the trained responses. Requests are flushed in the order they
	   * were made, but it is also possible to skip one or more requests (for example to have them
	   * flushed later). This is useful for simulating scenarios where responses arrive from the server
	   * in any order.
	   *
	   * If there are no pending requests to flush when the method is called, an exception is thrown (as
	   * this is typically a sign of programming error).
	   *
	   * @param {number=} count - Number of responses to flush. If undefined/null, all pending requests
	   *     (starting after `skip`) will be flushed.
	   * @param {number=} [skip=0] - Number of pending requests to skip. For example, a value of `5`
	   *     would skip the first 5 pending requests and start flushing from the 6th onwards.
	   */
	  $httpBackend.flush = function(count, skip, digest) {
	    if (digest !== false) $rootScope.$digest();

	    skip = skip || 0;
	    if (skip >= responses.length) throw new Error('No pending request to flush !');

	    if (angular.isDefined(count) && count !== null) {
	      while (count--) {
	        var part = responses.splice(skip, 1);
	        if (!part.length) throw new Error('No more pending request to flush !');
	        part[0]();
	      }
	    } else {
	      while (responses.length > skip) {
	        responses.splice(skip, 1)[0]();
	      }
	    }
	    $httpBackend.verifyNoOutstandingExpectation(digest);
	  };


	  /**
	   * @ngdoc method
	   * @name $httpBackend#verifyNoOutstandingExpectation
	   * @description
	   * Verifies that all of the requests defined via the `expect` api were made. If any of the
	   * requests were not made, verifyNoOutstandingExpectation throws an exception.
	   *
	   * Typically, you would call this method following each test case that asserts requests using an
	   * "afterEach" clause.
	   *
	   * ```js
	   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
	   * ```
	   */
	  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
	    if (digest !== false) $rootScope.$digest();
	    if (expectations.length) {
	      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
	    }
	  };


	  /**
	   * @ngdoc method
	   * @name $httpBackend#verifyNoOutstandingRequest
	   * @description
	   * Verifies that there are no outstanding requests that need to be flushed.
	   *
	   * Typically, you would call this method following each test case that asserts requests using an
	   * "afterEach" clause.
	   *
	   * ```js
	   *   afterEach($httpBackend.verifyNoOutstandingRequest);
	   * ```
	   */
	  $httpBackend.verifyNoOutstandingRequest = function(digest) {
	    if (digest !== false) $rootScope.$digest();
	    if (responses.length) {
	      throw new Error('Unflushed requests: ' + responses.length);
	    }
	  };


	  /**
	   * @ngdoc method
	   * @name $httpBackend#resetExpectations
	   * @description
	   * Resets all request expectations, but preserves all backend definitions. Typically, you would
	   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
	   * $httpBackend mock.
	   */
	  $httpBackend.resetExpectations = function() {
	    expectations.length = 0;
	    responses.length = 0;
	  };

	  return $httpBackend;


	  function createShortMethods(prefix) {
	    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
	     $httpBackend[prefix + method] = function(url, headers, keys) {
	        assertArgDefined(arguments, 0, 'url');

	        // Change url to `null` if `undefined` to stop it throwing an exception further down
	        if (angular.isUndefined(url)) url = null;

	       return $httpBackend[prefix](method, url, undefined, headers, keys);
	     };
	    });

	    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
	      $httpBackend[prefix + method] = function(url, data, headers, keys) {
	        assertArgDefined(arguments, 0, 'url');

	        // Change url to `null` if `undefined` to stop it throwing an exception further down
	        if (angular.isUndefined(url)) url = null;

	        return $httpBackend[prefix](method, url, data, headers, keys);
	      };
	    });
	  }
	}

	function assertArgDefined(args, index, name) {
	  if (args.length > index && angular.isUndefined(args[index])) {
	    throw new Error('Undefined argument `' + name + '`; the argument is provided but not defined');
	  }
	}


	function MockHttpExpectation(method, url, data, headers, keys) {

	  function getUrlParams(u) {
	    var params = u.slice(u.indexOf('?') + 1).split('&');
	    return params.sort();
	  }

	  function compareUrl(u) {
	    return (url.slice(0, url.indexOf('?')) === u.slice(0, u.indexOf('?')) &&
	      getUrlParams(url).join() === getUrlParams(u).join());
	  }

	  this.data = data;
	  this.headers = headers;

	  this.match = function(m, u, d, h) {
	    if (method !== m) return false;
	    if (!this.matchUrl(u)) return false;
	    if (angular.isDefined(d) && !this.matchData(d)) return false;
	    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
	    return true;
	  };

	  this.matchUrl = function(u) {
	    if (!url) return true;
	    if (angular.isFunction(url.test)) return url.test(u);
	    if (angular.isFunction(url)) return url(u);
	    return (url === u || compareUrl(u));
	  };

	  this.matchHeaders = function(h) {
	    if (angular.isUndefined(headers)) return true;
	    if (angular.isFunction(headers)) return headers(h);
	    return angular.equals(headers, h);
	  };

	  this.matchData = function(d) {
	    if (angular.isUndefined(data)) return true;
	    if (data && angular.isFunction(data.test)) return data.test(d);
	    if (data && angular.isFunction(data)) return data(d);
	    if (data && !angular.isString(data)) {
	      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
	    }
	    // eslint-disable-next-line eqeqeq
	    return data == d;
	  };

	  this.toString = function() {
	    return method + ' ' + url;
	  };

	  this.params = function(u) {
	    return angular.extend(parseQuery(), pathParams());

	    function pathParams() {
	      var keyObj = {};
	      if (!url || !angular.isFunction(url.test) || !keys || keys.length === 0) return keyObj;

	      var m = url.exec(u);
	      if (!m) return keyObj;
	      for (var i = 1, len = m.length; i < len; ++i) {
	        var key = keys[i - 1];
	        var val = m[i];
	        if (key && val) {
	          keyObj[key.name || key] = val;
	        }
	      }

	      return keyObj;
	    }

	    function parseQuery() {
	      var obj = {}, key_value, key,
	          queryStr = u.indexOf('?') > -1
	          ? u.substring(u.indexOf('?') + 1)
	          : '';

	      angular.forEach(queryStr.split('&'), function(keyValue) {
	        if (keyValue) {
	          key_value = keyValue.replace(/\+/g,'%20').split('=');
	          key = tryDecodeURIComponent(key_value[0]);
	          if (angular.isDefined(key)) {
	            var val = angular.isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
	            if (!hasOwnProperty.call(obj, key)) {
	              obj[key] = val;
	            } else if (angular.isArray(obj[key])) {
	              obj[key].push(val);
	            } else {
	              obj[key] = [obj[key],val];
	            }
	          }
	        }
	      });
	      return obj;
	    }
	    function tryDecodeURIComponent(value) {
	      try {
	        return decodeURIComponent(value);
	      } catch (e) {
	        // Ignore any invalid uri component
	      }
	    }
	  };
	}

	function createMockXhr() {
	  return new MockXhr();
	}

	function MockXhr() {

	  // hack for testing $http, $httpBackend
	  MockXhr.$$lastInstance = this;

	  this.open = function(method, url, async) {
	    this.$$method = method;
	    this.$$url = url;
	    this.$$async = async;
	    this.$$reqHeaders = {};
	    this.$$respHeaders = {};
	  };

	  this.send = function(data) {
	    this.$$data = data;
	  };

	  this.setRequestHeader = function(key, value) {
	    this.$$reqHeaders[key] = value;
	  };

	  this.getResponseHeader = function(name) {
	    // the lookup must be case insensitive,
	    // that's why we try two quick lookups first and full scan last
	    var header = this.$$respHeaders[name];
	    if (header) return header;

	    name = angular.lowercase(name);
	    header = this.$$respHeaders[name];
	    if (header) return header;

	    header = undefined;
	    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
	      if (!header && angular.lowercase(headerName) === name) header = headerVal;
	    });
	    return header;
	  };

	  this.getAllResponseHeaders = function() {
	    var lines = [];

	    angular.forEach(this.$$respHeaders, function(value, key) {
	      lines.push(key + ': ' + value);
	    });
	    return lines.join('\n');
	  };

	  this.abort = angular.noop;

	  // This section simulates the events on a real XHR object (and the upload object)
	  // When we are testing $httpBackend (inside the angular project) we make partial use of this
	  // but store the events directly ourselves on `$$events`, instead of going through the `addEventListener`
	  this.$$events = {};
	  this.addEventListener = function(name, listener) {
	    if (angular.isUndefined(this.$$events[name])) this.$$events[name] = [];
	    this.$$events[name].push(listener);
	  };

	  this.upload = {
	    $$events: {},
	    addEventListener: this.addEventListener
	  };
	}


	/**
	 * @ngdoc service
	 * @name $timeout
	 * @description
	 *
	 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
	 * that adds a "flush" and "verifyNoPendingTasks" methods.
	 */

	angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

	  /**
	   * @ngdoc method
	   * @name $timeout#flush
	   * @description
	   *
	   * Flushes the queue of pending tasks.
	   *
	   * @param {number=} delay maximum timeout amount to flush up until
	   */
	  $delegate.flush = function(delay) {
	    $browser.defer.flush(delay);
	  };

	  /**
	   * @ngdoc method
	   * @name $timeout#verifyNoPendingTasks
	   * @description
	   *
	   * Verifies that there are no pending tasks that need to be flushed.
	   */
	  $delegate.verifyNoPendingTasks = function() {
	    if ($browser.deferredFns.length) {
	      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
	          formatPendingTasksAsString($browser.deferredFns));
	    }
	  };

	  function formatPendingTasksAsString(tasks) {
	    var result = [];
	    angular.forEach(tasks, function(task) {
	      result.push('{id: ' + task.id + ', time: ' + task.time + '}');
	    });

	    return result.join(', ');
	  }

	  return $delegate;
	}];

	angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
	  var rafFn = function(fn) {
	    var index = rafFn.queue.length;
	    rafFn.queue.push(fn);
	    return function() {
	      rafFn.queue.splice(index, 1);
	    };
	  };

	  rafFn.queue = [];
	  rafFn.supported = $delegate.supported;

	  rafFn.flush = function() {
	    if (rafFn.queue.length === 0) {
	      throw new Error('No rAF callbacks present');
	    }

	    var length = rafFn.queue.length;
	    for (var i = 0; i < length; i++) {
	      rafFn.queue[i]();
	    }

	    rafFn.queue = rafFn.queue.slice(i);
	  };

	  return rafFn;
	}];

	/**
	 *
	 */
	var originalRootElement;
	angular.mock.$RootElementProvider = function() {
	  this.$get = ['$injector', function($injector) {
	    originalRootElement = angular.element('<div ng-app></div>').data('$injector', $injector);
	    return originalRootElement;
	  }];
	};

	/**
	 * @ngdoc service
	 * @name $controller
	 * @description
	 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
	 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
	 *
	 * Depending on the value of
	 * {@link ng.$compileProvider#preAssignBindingsEnabled `preAssignBindingsEnabled()`}, the properties
	 * will be bound before or after invoking the constructor.
	 *
	 *
	 * ## Example
	 *
	 * ```js
	 *
	 * // Directive definition ...
	 *
	 * myMod.directive('myDirective', {
	 *   controller: 'MyDirectiveController',
	 *   bindToController: {
	 *     name: '@'
	 *   }
	 * });
	 *
	 *
	 * // Controller definition ...
	 *
	 * myMod.controller('MyDirectiveController', ['$log', function($log) {
	 *   this.log = function() {
	 *     $log.info(this.name);
	 *   };
	 * }]);
	 *
	 *
	 * // In a test ...
	 *
	 * describe('myDirectiveController', function() {
	 *   describe('log()', function() {
	 *     it('should write the bound name to the log', inject(function($controller, $log) {
	 *       var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
	 *       ctrl.log();
	 *
	 *       expect(ctrl.name).toEqual('Clark Kent');
	 *       expect($log.info.logs).toEqual(['Clark Kent']);
	 *     }));
	 *   });
	 * });
	 *
	 * ```
	 *
	 * @param {Function|string} constructor If called with a function then it's considered to be the
	 *    controller constructor function. Otherwise it's considered to be a string which is used
	 *    to retrieve the controller constructor using the following steps:
	 *
	 *    * check if a controller with given name is registered via `$controllerProvider`
	 *    * check if evaluating the string on the current scope returns a constructor
	 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
	 *      `window` object (deprecated, not recommended)
	 *
	 *    The string can use the `controller as property` syntax, where the controller instance is published
	 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
	 *    to work correctly.
	 *
	 * @param {Object} locals Injection locals for Controller.
	 * @param {Object=} bindings Properties to add to the controller instance. This is used to simulate
	 *                           the `bindToController` feature and simplify certain kinds of tests.
	 * @return {Object} Instance of given controller.
	 */
	function createControllerDecorator(compileProvider) {
	  angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
	    return function(expression, locals, later, ident) {
	      if (later && typeof later === 'object') {
	        var preAssignBindingsEnabled = compileProvider.preAssignBindingsEnabled();

	        var instantiate = $delegate(expression, locals, true, ident);
	        if (preAssignBindingsEnabled) {
	          angular.extend(instantiate.instance, later);
	        }

	        var instance = instantiate();
	        if (!preAssignBindingsEnabled || instance !== instantiate.instance) {
	          angular.extend(instance, later);
	        }

	        return instance;
	      }
	      return $delegate(expression, locals, later, ident);
	    };
	  }];

	  return angular.mock.$ControllerDecorator;
	}

	/**
	 * @ngdoc service
	 * @name $componentController
	 * @description
	 * A service that can be used to create instances of component controllers. Useful for unit-testing.
	 *
	 * Be aware that the controller will be instantiated and attached to the scope as specified in
	 * the component definition object. If you do not provide a `$scope` object in the `locals` param
	 * then the helper will create a new isolated scope as a child of `$rootScope`.
	 *
	 * If you are using `$element` or `$attrs` in the controller, make sure to provide them as `locals`.
	 * The `$element` must be a jqLite-wrapped DOM element, and `$attrs` should be an object that
	 * has all properties / functions that you are using in the controller. If this is getting too complex,
	 * you should compile the component instead and access the component's controller via the
	 * {@link angular.element#methods `controller`} function.
	 *
	 * See also the section on {@link guide/component#unit-testing-component-controllers unit-testing component controllers}
	 * in the guide.
	 *
	 * @param {string} componentName the name of the component whose controller we want to instantiate
	 * @param {Object} locals Injection locals for Controller.
	 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
	 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
	 * @param {string=} ident Override the property name to use when attaching the controller to the scope.
	 * @return {Object} Instance of requested controller.
	 */
	angular.mock.$ComponentControllerProvider = ['$compileProvider',
	    function ComponentControllerProvider($compileProvider) {
	  this.$get = ['$controller','$injector', '$rootScope', function($controller, $injector, $rootScope) {
	    return function $componentController(componentName, locals, bindings, ident) {
	      // get all directives associated to the component name
	      var directives = $injector.get(componentName + 'Directive');
	      // look for those directives that are components
	      var candidateDirectives = directives.filter(function(directiveInfo) {
	        // components have controller, controllerAs and restrict:'E'
	        return directiveInfo.controller && directiveInfo.controllerAs && directiveInfo.restrict === 'E';
	      });
	      // check if valid directives found
	      if (candidateDirectives.length === 0) {
	        throw new Error('No component found');
	      }
	      if (candidateDirectives.length > 1) {
	        throw new Error('Too many components found');
	      }
	      // get the info of the component
	      var directiveInfo = candidateDirectives[0];
	      // create a scope if needed
	      locals = locals || {};
	      locals.$scope = locals.$scope || $rootScope.$new(true);
	      return $controller(directiveInfo.controller, locals, bindings, ident || directiveInfo.controllerAs);
	    };
	  }];
	}];


	/**
	 * @ngdoc module
	 * @name ngMock
	 * @packageName angular-mocks
	 * @description
	 *
	 * # ngMock
	 *
	 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
	 * In addition, ngMock also extends various core ng services such that they can be
	 * inspected and controlled in a synchronous manner within test code.
	 *
	 *
	 * <div doc-module-components="ngMock"></div>
	 *
	 * @installation
	 *
	 *  First, download the file:
	 *  * [Google CDN](https://developers.google.com/speed/libraries/devguide#angularjs) e.g.
	 *    `"//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-mocks.js"`
	 *  * [NPM](https://www.npmjs.com/) e.g. `npm install angular-mocks@X.Y.Z`
	 *  * [Yarn](https://yarnpkg.com) e.g. `yarn add angular-mocks@X.Y.Z`
	 *  * [Bower](http://bower.io) e.g. `bower install angular-mocks#X.Y.Z`
	 *  * [code.angularjs.org](https://code.angularjs.org/) (discouraged for production use)  e.g.
	 *    `"//code.angularjs.org/X.Y.Z/angular-mocks.js"`
	 *
	 * where X.Y.Z is the AngularJS version you are running.
	 *
	 * Then, configure your test runner to load `angular-mocks.js` after `angular.js`.
	 * This example uses <a href="http://karma-runner.github.io/">Karma</a>:
	 *
	 * ```
	 * config.set({
	 *   files: [
	 *     'build/angular.js', // and other module files you need
	 *     'build/angular-mocks.js',
	 *     '<path/to/application/files>',
	 *     '<path/to/spec/files>'
	 *   ]
	 * });
	 * ```
	 *
	 * Including the `angular-mocks.js` file automatically adds the `ngMock` module, so your tests
	 *  are ready to go!
	 */
	angular.module('ngMock', ['ng']).provider({
	  $browser: angular.mock.$BrowserProvider,
	  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
	  $log: angular.mock.$LogProvider,
	  $interval: angular.mock.$IntervalProvider,
	  $httpBackend: angular.mock.$HttpBackendProvider,
	  $rootElement: angular.mock.$RootElementProvider,
	  $componentController: angular.mock.$ComponentControllerProvider
	}).config(['$provide', '$compileProvider', function($provide, $compileProvider) {
	  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
	  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
	  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
	  $provide.decorator('$controller', createControllerDecorator($compileProvider));
	}]);

	/**
	 * @ngdoc module
	 * @name ngMockE2E
	 * @module ngMockE2E
	 * @packageName angular-mocks
	 * @description
	 *
	 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
	 * Currently there is only one mock present in this module -
	 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
	 */
	angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
	  $provide.value('$httpBackend', angular.injector(['ng']).get('$httpBackend'));
	  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
	}]);

	/**
	 * @ngdoc service
	 * @name $httpBackend
	 * @module ngMockE2E
	 * @description
	 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
	 * applications that use the {@link ng.$http $http service}.
	 *
	 * <div class="alert alert-info">
	 * **Note**: For fake http backend implementation suitable for unit testing please see
	 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
	 * </div>
	 *
	 * This implementation can be used to respond with static or dynamic responses via the `when` api
	 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
	 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
	 * templates from a webserver).
	 *
	 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
	 * is being developed with the real backend api replaced with a mock, it is often desirable for
	 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
	 * templates or static files from the webserver). To configure the backend with this behavior
	 * use the `passThrough` request handler of `when` instead of `respond`.
	 *
	 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
	 * testing. For this reason the e2e $httpBackend flushes mocked out requests
	 * automatically, closely simulating the behavior of the XMLHttpRequest object.
	 *
	 * To setup the application to run with this http backend, you have to create a module that depends
	 * on the `ngMockE2E` and your application modules and defines the fake backend:
	 *
	 * ```js
	 *   var myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
	 *   myAppDev.run(function($httpBackend) {
	 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
	 *
	 *     // returns the current list of phones
	 *     $httpBackend.whenGET('/phones').respond(phones);
	 *
	 *     // adds a new phone to the phones array
	 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
	 *       var phone = angular.fromJson(data);
	 *       phones.push(phone);
	 *       return [200, phone, {}];
	 *     });
	 *     $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templates are handled by the real server
	 *     //...
	 *   });
	 * ```
	 *
	 * Afterwards, bootstrap your app with this new module.
	 *
	 * ## Example
	 * <example name="httpbackend-e2e-testing" module="myAppE2E" deps="angular-mocks.js">
	 * <file name="app.js">
	 *   var myApp = angular.module('myApp', []);
	 *
	 *   myApp.controller('MainCtrl', function MainCtrl($http) {
	 *     var ctrl = this;
	 *
	 *     ctrl.phones = [];
	 *     ctrl.newPhone = {
	 *       name: ''
	 *     };
	 *
	 *     ctrl.getPhones = function() {
	 *       $http.get('/phones').then(function(response) {
	 *         ctrl.phones = response.data;
	 *       });
	 *     };
	 *
	 *     ctrl.addPhone = function(phone) {
	 *       $http.post('/phones', phone).then(function() {
	 *         ctrl.newPhone = {name: ''};
	 *         return ctrl.getPhones();
	 *       });
	 *     };
	 *
	 *     ctrl.getPhones();
	 *   });
	 * </file>
	 * <file name="e2e.js">
	 *   var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E']);
	 *
	 *   myAppDev.run(function($httpBackend) {
	 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
	 *
	 *     // returns the current list of phones
	 *     $httpBackend.whenGET('/phones').respond(phones);
	 *
	 *     // adds a new phone to the phones array
	 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
	 *       var phone = angular.fromJson(data);
	 *       phones.push(phone);
	 *       return [200, phone, {}];
	 *     });
	 *   });
	 * </file>
	 * <file name="index.html">
	 *   <div ng-controller="MainCtrl as $ctrl">
	 *   <form name="newPhoneForm" ng-submit="$ctrl.addPhone($ctrl.newPhone)">
	 *     <input type="text" ng-model="$ctrl.newPhone.name">
	 *     <input type="submit" value="Add Phone">
	 *   </form>
	 *   <h1>Phones</h1>
	 *   <ul>
	 *     <li ng-repeat="phone in $ctrl.phones">{{phone.name}}</li>
	 *   </ul>
	 *   </div>
	 * </file>
	 * </example>
	 *
	 *
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#when
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition.
	 *
	 * @param {string} method HTTP method.
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	 *   data string and returns true if the data is as expected.
	 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
	 *   object and returns true if the headers match the current definition.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 *
	 *  - respond –
	 *    ```
	 *    { function([status,] data[, headers, statusText])
	 *    | function(function(method, url, data, headers, params)}
	 *    ```
	 *    – The respond method takes a set of static data to be returned or a function that can return
	 *    an array containing response status (number), response data (Array|Object|string), response
	 *    headers (Object), and the text for the status (string).
	 *  - passThrough – `{function()}` – Any request matching a backend definition with
	 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
	 *    to the server.)
	 *  - Both methods return the `requestHandler` object for possible overrides.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenGET
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for GET requests. For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenHEAD
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for HEAD requests. For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenDELETE
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for DELETE requests. For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenPOST
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for POST requests. For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	 *   data string and returns true if the data is as expected.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenPUT
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for PUT requests.  For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	 *   data string and returns true if the data is as expected.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenPATCH
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
	 *   data string and returns true if the data is as expected.
	 * @param {(Object|function(Object))=} headers HTTP headers.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */

	/**
	 * @ngdoc method
	 * @name $httpBackend#whenJSONP
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition for JSONP requests. For more info see `when()`.
	 *
	 * @param {string|RegExp|function(string)=} url HTTP url or function that receives a url
	 *   and returns true if the url matches the current definition.
	 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
	 *   {@link ngMock.$httpBackend $httpBackend mock}.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */
	/**
	 * @ngdoc method
	 * @name $httpBackend#whenRoute
	 * @module ngMockE2E
	 * @description
	 * Creates a new backend definition that compares only with the requested route.
	 *
	 * @param {string} method HTTP method.
	 * @param {string} url HTTP url string that supports colon param matching.
	 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
	 *   control how a matched request is handled. You can save this object for later use and invoke
	 *   `respond` or `passThrough` again in order to change how a matched request is handled.
	 */
	angular.mock.e2e = {};
	angular.mock.e2e.$httpBackendDecorator =
	  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


	/**
	 * @ngdoc type
	 * @name $rootScope.Scope
	 * @module ngMock
	 * @description
	 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
	 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
	 * `ngMock` module is loaded.
	 *
	 * In addition to all the regular `Scope` methods, the following helper methods are available:
	 */
	angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

	  var $rootScopePrototype = Object.getPrototypeOf($delegate);

	  $rootScopePrototype.$countChildScopes = countChildScopes;
	  $rootScopePrototype.$countWatchers = countWatchers;

	  return $delegate;

	  // ------------------------------------------------------------------------------------------ //

	  /**
	   * @ngdoc method
	   * @name $rootScope.Scope#$countChildScopes
	   * @module ngMock
	   * @this $rootScope.Scope
	   * @description
	   * Counts all the direct and indirect child scopes of the current scope.
	   *
	   * The current scope is excluded from the count. The count includes all isolate child scopes.
	   *
	   * @returns {number} Total number of child scopes.
	   */
	  function countChildScopes() {
	    var count = 0; // exclude the current scope
	    var pendingChildHeads = [this.$$childHead];
	    var currentScope;

	    while (pendingChildHeads.length) {
	      currentScope = pendingChildHeads.shift();

	      while (currentScope) {
	        count += 1;
	        pendingChildHeads.push(currentScope.$$childHead);
	        currentScope = currentScope.$$nextSibling;
	      }
	    }

	    return count;
	  }


	  /**
	   * @ngdoc method
	   * @name $rootScope.Scope#$countWatchers
	   * @this $rootScope.Scope
	   * @module ngMock
	   * @description
	   * Counts all the watchers of direct and indirect child scopes of the current scope.
	   *
	   * The watchers of the current scope are included in the count and so are all the watchers of
	   * isolate child scopes.
	   *
	   * @returns {number} Total number of watchers.
	   */
	  function countWatchers() {
	    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
	    var pendingChildHeads = [this.$$childHead];
	    var currentScope;

	    while (pendingChildHeads.length) {
	      currentScope = pendingChildHeads.shift();

	      while (currentScope) {
	        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
	        pendingChildHeads.push(currentScope.$$childHead);
	        currentScope = currentScope.$$nextSibling;
	      }
	    }

	    return count;
	  }
	}];


	(function(jasmineOrMocha) {

	  if (!jasmineOrMocha) {
	    return;
	  }

	  var currentSpec = null,
	      injectorState = new InjectorState(),
	      annotatedFunctions = [],
	      wasInjectorCreated = function() {
	        return !!currentSpec;
	      };

	  angular.mock.$$annotate = angular.injector.$$annotate;
	  angular.injector.$$annotate = function(fn) {
	    if (typeof fn === 'function' && !fn.$inject) {
	      annotatedFunctions.push(fn);
	    }
	    return angular.mock.$$annotate.apply(this, arguments);
	  };

	  /**
	   * @ngdoc function
	   * @name angular.mock.module
	   * @description
	   *
	   * *NOTE*: This function is also published on window for easy access.<br>
	   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
	   *
	   * This function registers a module configuration code. It collects the configuration information
	   * which will be used when the injector is created by {@link angular.mock.inject inject}.
	   *
	   * See {@link angular.mock.inject inject} for usage example
	   *
	   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
	   *        aliases or as anonymous module initialization functions. The modules are used to
	   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
	   *        object literal is passed each key-value pair will be registered on the module via
	   *        {@link auto.$provide $provide}.value, the key being the string name (or token) to associate
	   *        with the value on the injector.
	   */
	  var module = window.module = angular.mock.module = function() {
	    var moduleFns = Array.prototype.slice.call(arguments, 0);
	    return wasInjectorCreated() ? workFn() : workFn;
	    /////////////////////
	    function workFn() {
	      if (currentSpec.$injector) {
	        throw new Error('Injector already created, can not register a module!');
	      } else {
	        var fn, modules = currentSpec.$modules || (currentSpec.$modules = []);
	        angular.forEach(moduleFns, function(module) {
	          if (angular.isObject(module) && !angular.isArray(module)) {
	            fn = ['$provide', function($provide) {
	              angular.forEach(module, function(value, key) {
	                $provide.value(key, value);
	              });
	            }];
	          } else {
	            fn = module;
	          }
	          if (currentSpec.$providerInjector) {
	            currentSpec.$providerInjector.invoke(fn);
	          } else {
	            modules.push(fn);
	          }
	        });
	      }
	    }
	  };

	  module.$$beforeAllHook = (window.before || window.beforeAll);
	  module.$$afterAllHook = (window.after || window.afterAll);

	  // purely for testing ngMock itself
	  module.$$currentSpec = function(to) {
	    if (arguments.length === 0) return to;
	    currentSpec = to;
	  };

	  /**
	   * @ngdoc function
	   * @name angular.mock.module.sharedInjector
	   * @description
	   *
	   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
	   *
	   * This function ensures a single injector will be used for all tests in a given describe context.
	   * This contrasts with the default behaviour where a new injector is created per test case.
	   *
	   * Use sharedInjector when you want to take advantage of Jasmine's `beforeAll()`, or mocha's
	   * `before()` methods. Call `module.sharedInjector()` before you setup any other hooks that
	   * will create (i.e call `module()`) or use (i.e call `inject()`) the injector.
	   *
	   * You cannot call `sharedInjector()` from within a context already using `sharedInjector()`.
	   *
	   * ## Example
	   *
	   * Typically beforeAll is used to make many assertions about a single operation. This can
	   * cut down test run-time as the test setup doesn't need to be re-run, and enabling focussed
	   * tests each with a single assertion.
	   *
	   * ```js
	   * describe("Deep Thought", function() {
	   *
	   *   module.sharedInjector();
	   *
	   *   beforeAll(module("UltimateQuestion"));
	   *
	   *   beforeAll(inject(function(DeepThought) {
	   *     expect(DeepThought.answer).toBeUndefined();
	   *     DeepThought.generateAnswer();
	   *   }));
	   *
	   *   it("has calculated the answer correctly", inject(function(DeepThought) {
	   *     // Because of sharedInjector, we have access to the instance of the DeepThought service
	   *     // that was provided to the beforeAll() hook. Therefore we can test the generated answer
	   *     expect(DeepThought.answer).toBe(42);
	   *   }));
	   *
	   *   it("has calculated the answer within the expected time", inject(function(DeepThought) {
	   *     expect(DeepThought.runTimeMillennia).toBeLessThan(8000);
	   *   }));
	   *
	   *   it("has double checked the answer", inject(function(DeepThought) {
	   *     expect(DeepThought.absolutelySureItIsTheRightAnswer).toBe(true);
	   *   }));
	   *
	   * });
	   *
	   * ```
	   */
	  module.sharedInjector = function() {
	    if (!(module.$$beforeAllHook && module.$$afterAllHook)) {
	      throw Error('sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll');
	    }

	    var initialized = false;

	    module.$$beforeAllHook(/** @this */ function() {
	      if (injectorState.shared) {
	        injectorState.sharedError = Error('sharedInjector() cannot be called inside a context that has already called sharedInjector()');
	        throw injectorState.sharedError;
	      }
	      initialized = true;
	      currentSpec = this;
	      injectorState.shared = true;
	    });

	    module.$$afterAllHook(function() {
	      if (initialized) {
	        injectorState = new InjectorState();
	        module.$$cleanup();
	      } else {
	        injectorState.sharedError = null;
	      }
	    });
	  };

	  module.$$beforeEach = function() {
	    if (injectorState.shared && currentSpec && currentSpec !== this) {
	      var state = currentSpec;
	      currentSpec = this;
	      angular.forEach(['$injector','$modules','$providerInjector', '$injectorStrict'], function(k) {
	        currentSpec[k] = state[k];
	        state[k] = null;
	      });
	    } else {
	      currentSpec = this;
	      originalRootElement = null;
	      annotatedFunctions = [];
	    }
	  };

	  module.$$afterEach = function() {
	    if (injectorState.cleanupAfterEach()) {
	      module.$$cleanup();
	    }
	  };

	  module.$$cleanup = function() {
	    var injector = currentSpec.$injector;

	    annotatedFunctions.forEach(function(fn) {
	      delete fn.$inject;
	    });

	    angular.forEach(currentSpec.$modules, function(module) {
	      if (module && module.$$hashKey) {
	        module.$$hashKey = undefined;
	      }
	    });

	    currentSpec.$injector = null;
	    currentSpec.$modules = null;
	    currentSpec.$providerInjector = null;
	    currentSpec = null;

	    if (injector) {
	      // Ensure `$rootElement` is instantiated, before checking `originalRootElement`
	      var $rootElement = injector.get('$rootElement');
	      var rootNode = $rootElement && $rootElement[0];
	      var cleanUpNodes = !originalRootElement ? [] : [originalRootElement[0]];
	      if (rootNode && (!originalRootElement || rootNode !== originalRootElement[0])) {
	        cleanUpNodes.push(rootNode);
	      }
	      angular.element.cleanData(cleanUpNodes);

	      // Ensure `$destroy()` is available, before calling it
	      // (a mocked `$rootScope` might not implement it (or not even be an object at all))
	      var $rootScope = injector.get('$rootScope');
	      if ($rootScope && $rootScope.$destroy) $rootScope.$destroy();
	    }

	    // clean up jquery's fragment cache
	    angular.forEach(angular.element.fragments, function(val, key) {
	      delete angular.element.fragments[key];
	    });

	    MockXhr.$$lastInstance = null;

	    angular.forEach(angular.callbacks, function(val, key) {
	      delete angular.callbacks[key];
	    });
	    angular.callbacks.$$counter = 0;
	  };

	  (window.beforeEach || window.setup)(module.$$beforeEach);
	  (window.afterEach || window.teardown)(module.$$afterEach);

	  /**
	   * @ngdoc function
	   * @name angular.mock.inject
	   * @description
	   *
	   * *NOTE*: This function is also published on window for easy access.<br>
	   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
	   *
	   * The inject function wraps a function into an injectable function. The inject() creates new
	   * instance of {@link auto.$injector $injector} per test, which is then used for
	   * resolving references.
	   *
	   *
	   * ## Resolving References (Underscore Wrapping)
	   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
	   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
	   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
	   * the variable to have the same name of the reference we have a problem, since the parameter
	   * to the `inject()` function would hide the outer variable.
	   *
	   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
	   * These are ignored by the injector when the reference name is resolved.
	   *
	   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
	   * Since it is available in the function body as `_myService_`, we can then assign it to a variable
	   * defined in an outer scope.
	   *
	   * ```
	   * // Defined out reference variable outside
	   * var myService;
	   *
	   * // Wrap the parameter in underscores
	   * beforeEach( inject( function(_myService_){
	   *   myService = _myService_;
	   * }));
	   *
	   * // Use myService in a series of tests.
	   * it('makes use of myService', function() {
	   *   myService.doStuff();
	   * });
	   *
	   * ```
	   *
	   * See also {@link angular.mock.module angular.mock.module}
	   *
	   * ## Example
	   * Example of what a typical jasmine tests looks like with the inject method.
	   * ```js
	   *
	   *   angular.module('myApplicationModule', [])
	   *       .value('mode', 'app')
	   *       .value('version', 'v1.0.1');
	   *
	   *
	   *   describe('MyApp', function() {
	   *
	   *     // You need to load modules that you want to test,
	   *     // it loads only the "ng" module by default.
	   *     beforeEach(module('myApplicationModule'));
	   *
	   *
	   *     // inject() is used to inject arguments of all given functions
	   *     it('should provide a version', inject(function(mode, version) {
	   *       expect(version).toEqual('v1.0.1');
	   *       expect(mode).toEqual('app');
	   *     }));
	   *
	   *
	   *     // The inject and module method can also be used inside of the it or beforeEach
	   *     it('should override a version and test the new version is injected', function() {
	   *       // module() takes functions or strings (module aliases)
	   *       module(function($provide) {
	   *         $provide.value('version', 'overridden'); // override version here
	   *       });
	   *
	   *       inject(function(version) {
	   *         expect(version).toEqual('overridden');
	   *       });
	   *     });
	   *   });
	   *
	   * ```
	   *
	   * @param {...Function} fns any number of functions which will be injected using the injector.
	   */



	  var ErrorAddingDeclarationLocationStack = function ErrorAddingDeclarationLocationStack(e, errorForStack) {
	    this.message = e.message;
	    this.name = e.name;
	    if (e.line) this.line = e.line;
	    if (e.sourceId) this.sourceId = e.sourceId;
	    if (e.stack && errorForStack)
	      this.stack = e.stack + '\n' + errorForStack.stack;
	    if (e.stackArray) this.stackArray = e.stackArray;
	  };
	  ErrorAddingDeclarationLocationStack.prototype = Error.prototype;

	  window.inject = angular.mock.inject = function() {
	    var blockFns = Array.prototype.slice.call(arguments, 0);
	    var errorForStack = new Error('Declaration Location');
	    // IE10+ and PhanthomJS do not set stack trace information, until the error is thrown
	    if (!errorForStack.stack) {
	      try {
	        throw errorForStack;
	      } catch (e) { /* empty */ }
	    }
	    return wasInjectorCreated() ? WorkFn.call(currentSpec) : WorkFn;
	    /////////////////////
	    function WorkFn() {
	      var modules = currentSpec.$modules || [];
	      var strictDi = !!currentSpec.$injectorStrict;
	      modules.unshift(['$injector', function($injector) {
	        currentSpec.$providerInjector = $injector;
	      }]);
	      modules.unshift('ngMock');
	      modules.unshift('ng');
	      var injector = currentSpec.$injector;
	      if (!injector) {
	        if (strictDi) {
	          // If strictDi is enabled, annotate the providerInjector blocks
	          angular.forEach(modules, function(moduleFn) {
	            if (typeof moduleFn === 'function') {
	              angular.injector.$$annotate(moduleFn);
	            }
	          });
	        }
	        injector = currentSpec.$injector = angular.injector(modules, strictDi);
	        currentSpec.$injectorStrict = strictDi;
	      }
	      for (var i = 0, ii = blockFns.length; i < ii; i++) {
	        if (currentSpec.$injectorStrict) {
	          // If the injector is strict / strictDi, and the spec wants to inject using automatic
	          // annotation, then annotate the function here.
	          injector.annotate(blockFns[i]);
	        }
	        try {
	          injector.invoke(blockFns[i] || angular.noop, this);
	        } catch (e) {
	          if (e.stack && errorForStack) {
	            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
	          }
	          throw e;
	        } finally {
	          errorForStack = null;
	        }
	      }
	    }
	  };


	  angular.mock.inject.strictDi = function(value) {
	    value = arguments.length ? !!value : true;
	    return wasInjectorCreated() ? workFn() : workFn;

	    function workFn() {
	      if (value !== currentSpec.$injectorStrict) {
	        if (currentSpec.$injector) {
	          throw new Error('Injector already created, can not modify strict annotations');
	        } else {
	          currentSpec.$injectorStrict = value;
	        }
	      }
	    }
	  };

	  function InjectorState() {
	    this.shared = false;
	    this.sharedError = null;

	    this.cleanupAfterEach = function() {
	      return !this.shared || this.sharedError;
	    };
	  }
	})(window.jasmine || window.mocha);

	'use strict';

	(function() {
	  /**
	   * Triggers a browser event. Attempts to choose the right event if one is
	   * not specified.
	   *
	   * @param {Object} element Either a wrapped jQuery/jqLite node or a DOMElement
	   * @param {string} eventType Optional event type
	   * @param {Object=} eventData An optional object which contains additional event data (such as x,y
	   * coordinates, keys, etc...) that are passed into the event when triggered
	   */
	  window.browserTrigger = function browserTrigger(element, eventType, eventData) {
	    if (element && !element.nodeName) element = element[0];
	    if (!element) return;

	    eventData = eventData || {};
	    var relatedTarget = eventData.relatedTarget || element;
	    var keys = eventData.keys;
	    var x = eventData.x;
	    var y = eventData.y;

	    var inputType = (element.type) ? element.type.toLowerCase() : null,
	        nodeName = element.nodeName.toLowerCase();
	    if (!eventType) {
	      eventType = {
	        'text':            'change',
	        'textarea':        'change',
	        'hidden':          'change',
	        'password':        'change',
	        'button':          'click',
	        'submit':          'click',
	        'reset':           'click',
	        'image':           'click',
	        'checkbox':        'click',
	        'radio':           'click',
	        'select-one':      'change',
	        'select-multiple': 'change',
	        '_default_':       'click'
	      }[inputType || '_default_'];
	    }

	    if (nodeName === 'option') {
	      element.parentNode.value = element.value;
	      element = element.parentNode;
	      eventType = 'change';
	    }

	    keys = keys || [];
	    function pressed(key) {
	      return keys.indexOf(key) !== -1;
	    }

	    var evnt;
	    if (/transitionend/.test(eventType)) {
	      if (window.WebKitTransitionEvent) {
	        evnt = new window.WebKitTransitionEvent(eventType, eventData);
	        evnt.initEvent(eventType, false, true);
	      } else {
	        try {
	          evnt = new window.TransitionEvent(eventType, eventData);
	        } catch (e) {
	          evnt = window.document.createEvent('TransitionEvent');
	          evnt.initTransitionEvent(eventType, null, null, null, eventData.elapsedTime || 0);
	        }
	      }
	    } else if (/animationend/.test(eventType)) {
	      if (window.WebKitAnimationEvent) {
	        evnt = new window.WebKitAnimationEvent(eventType, eventData);
	        evnt.initEvent(eventType, false, true);
	      } else {
	        try {
	          evnt = new window.AnimationEvent(eventType, eventData);
	        } catch (e) {
	          evnt = window.document.createEvent('AnimationEvent');
	          evnt.initAnimationEvent(eventType, null, null, null, eventData.elapsedTime || 0);
	        }
	      }
	    } else if (/touch/.test(eventType) && supportsTouchEvents()) {
	      evnt = createTouchEvent(element, eventType, x, y);
	    } else if (/key/.test(eventType)) {
	      evnt = window.document.createEvent('Events');
	      evnt.initEvent(eventType, eventData.bubbles, eventData.cancelable);
	      evnt.view = window;
	      evnt.ctrlKey = pressed('ctrl');
	      evnt.altKey = pressed('alt');
	      evnt.shiftKey = pressed('shift');
	      evnt.metaKey = pressed('meta');
	      evnt.keyCode = eventData.keyCode;
	      evnt.charCode = eventData.charCode;
	      evnt.which = eventData.which;
	    } else {
	      evnt = window.document.createEvent('MouseEvents');
	      x = x || 0;
	      y = y || 0;
	      evnt.initMouseEvent(eventType, true, true, window, 0, x, y, x, y, pressed('ctrl'),
	          pressed('alt'), pressed('shift'), pressed('meta'), 0, relatedTarget);
	    }

	    /* we're unable to change the timeStamp value directly so this
	     * is only here to allow for testing where the timeStamp value is
	     * read */
	    evnt.$manualTimeStamp = eventData.timeStamp;

	    if (!evnt) return;

	    var originalPreventDefault = evnt.preventDefault,
	        appWindow = element.ownerDocument.defaultView,
	        fakeProcessDefault = true,
	        finalProcessDefault,
	        angular = appWindow.angular || {};

	    // igor: temporary fix for https://bugzilla.mozilla.org/show_bug.cgi?id=684208
	    angular['ff-684208-preventDefault'] = false;
	    evnt.preventDefault = function() {
	      fakeProcessDefault = false;
	      return originalPreventDefault.apply(evnt, arguments);
	    };

	    if (!eventData.bubbles || supportsEventBubblingInDetachedTree() || isAttachedToDocument(element)) {
	      element.dispatchEvent(evnt);
	    } else {
	      triggerForPath(element, evnt);
	    }

	    finalProcessDefault = !(angular['ff-684208-preventDefault'] || !fakeProcessDefault);

	    delete angular['ff-684208-preventDefault'];

	    return finalProcessDefault;
	  };

	  function supportsTouchEvents() {
	    if ('_cached' in supportsTouchEvents) {
	      return supportsTouchEvents._cached;
	    }
	    if (!window.document.createTouch || !window.document.createTouchList) {
	      supportsTouchEvents._cached = false;
	      return false;
	    }
	    try {
	      window.document.createEvent('TouchEvent');
	    } catch (e) {
	      supportsTouchEvents._cached = false;
	      return false;
	    }
	    supportsTouchEvents._cached = true;
	    return true;
	  }

	  function createTouchEvent(element, eventType, x, y) {
	    var evnt = new window.Event(eventType);
	    x = x || 0;
	    y = y || 0;

	    var touch = window.document.createTouch(window, element, Date.now(), x, y, x, y);
	    var touches = window.document.createTouchList(touch);

	    evnt.touches = touches;

	    return evnt;
	  }

	  function supportsEventBubblingInDetachedTree() {
	    if ('_cached' in supportsEventBubblingInDetachedTree) {
	      return supportsEventBubblingInDetachedTree._cached;
	    }
	    supportsEventBubblingInDetachedTree._cached = false;
	    var doc = window.document;
	    if (doc) {
	      var parent = doc.createElement('div'),
	          child = parent.cloneNode();
	      parent.appendChild(child);
	      parent.addEventListener('e', function() {
	        supportsEventBubblingInDetachedTree._cached = true;
	      });
	      var evnt = window.document.createEvent('Events');
	      evnt.initEvent('e', true, true);
	      child.dispatchEvent(evnt);
	    }
	    return supportsEventBubblingInDetachedTree._cached;
	  }

	  function triggerForPath(element, evnt) {
	    var stop = false;

	    var _stopPropagation = evnt.stopPropagation;
	    evnt.stopPropagation = function() {
	      stop = true;
	      _stopPropagation.apply(evnt, arguments);
	    };
	    patchEventTargetForBubbling(evnt, element);
	    do {
	      element.dispatchEvent(evnt);
	      // eslint-disable-next-line no-unmodified-loop-condition
	    } while (!stop && (element = element.parentNode));
	  }

	  function patchEventTargetForBubbling(event, target) {
	    event._target = target;
	    Object.defineProperty(event, 'target', {get: function() { return this._target;}});
	  }

	  function isAttachedToDocument(element) {
	    while ((element = element.parentNode)) {
	        if (element === window) {
	            return true;
	        }
	    }
	    return false;
	  }
	})();


	})(window, window.angular);


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = angular.module('LoginController', ['ngRoute', 'ngAnimate']).controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	  $scope.token={}

	  $scope.login = function() {
	    if($scope.user.email == "" && $scope.user.password == ""){
	      console.log('Both fields are empty');
	    }else if($scope.user.email !== "" && $scope.user.password !== "") {
	      $http({
	        method: 'POST',
	        data: {
	          email: $scope.user.email,
	          password: $scope.user.password,
	        },
	        url: 'http://localhost:3000/user/login',
	      }).then(function (data) {
	        console.log(data);
	        var respond = (data.data);

	        if(respond.result === 'success') {
	          // console.log(respond.token);
	          // console.log(respond);
	          localStorage.setItem("token", respond.token);
	          // console.log(localStorage);
	          $location.path('/home');
	        }
	      }).catch(function (data) {
	        console.log('error');
	      });
	    }
	  };
	  $scope.signUpView = function () {
	    $location.path('/signup');
	  };
	}]);


	// LoginController;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = angular.module('SignUpController', ['ngRoute', 'ngAnimate']).controller('SignUpController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

	  $scope.signUp = function() {
	    if ($scope.user.email !== '' && $scope.user.password !== '') {
	      $http({
	        method: 'POST',
	        data: {
	          email: $scope.user.email,
	          password: $scope.user.password,
	        },
	        url: 'http://localhost:3000/user/signup',
	      }).then(function (data) {
	        let respond = (data.data);
	        if (respond.result === 'success') {
	          localStorage.setItem("token", respond.token);
	          $location.path('/home');
	        } else {
	          alert(respond.message);
	        }
	      }).catch(function (data) {
	        console.log('error');
	      })
	    }
	  }

	}]);


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = angular.module('HomeController', ['ngRoute', 'ngAnimate']).controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {


	  $scope.checkToken = function ($routeProvider){
	    if (localStorage.length === 0) {
	      $location.path('/login');
	    };
	  };

	  $scope.checkToken();

	  $scope.logout = function(){
	    //console.log(localStorage);
	    localStorage.clear();
	    //console.log(localStorage);
	    $location.path( "/login" );
	  }


	  $scope.makevisible = function(){
	    if($scope.visible == "visible"){
	      $scope.visible = "hidden";
	    } else {
	      $scope.visible = "visible";
	    }
	  }

	  $scope.clickitem = function($index){
	    $scope.subscriptions.map( function ( folder ) {
	      folder.active = false;
	    });
	    $scope.subscriptions[ $index ].active = true;
	  }

	  $scope.getSubscription = function () {
	    console.log(localStorage)
	    $http({
	      method: 'GET',
	      url: 'http://localhost:3000/subscription',
	    }).then(function (data) {
	      $scope.subscriptions = data.data;

	    }).catch(function (data) {
	      console.log('error');
	    });
	  };

	  $scope.getFeed = function () {
	    $http({
	      method: 'GET',
	      url: 'http://localhost:3000/feed/43673',
	    }).then(function (data) {
	      $scope.articles = (data.data);

	    }).catch(function (data) {
	      console.log('error');
	    });
	  };

	  $scope.getSubscription();
	  $scope.getFeed();

	}]);

	//module.exports = HomeController;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./semantic.min.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./semantic.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);", ""]);

	// module
	exports.push([module.id, " /*\n * # Semantic UI - 2.2.7\n * https://github.com/Semantic-Org/Semantic-UI\n * http://www.semantic-ui.com/\n *\n * Copyright 2014 Contributors\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}input[type=text],input[type=email],input[type=search],input[type=password]{-webkit-appearance:none;-moz-appearance:none}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#4183C4;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,optgroup,strong{font-weight:700}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0}pre,textarea{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}body,html{height:100%}html{font-size:14px}body{margin:0;padding:0;overflow-x:hidden;min-width:320px;background:#FFF;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4285em;color:rgba(0,0,0,.87);font-smoothing:antialiased}h1,h2,h3,h4,h5{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;line-height:1.2857em;margin:calc(2rem - .14285em) 0 1rem;font-weight:700;padding:0}h1{min-height:1rem;font-size:2rem}h2{font-size:1.714rem}h3{font-size:1.28rem}h4{font-size:1.071rem}h5{font-size:1rem}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child,p:first-child{margin-top:0}h1:last-child,h2:last-child,h3:last-child,h4:last-child,h5:last-child,p:last-child{margin-bottom:0}p{margin:0 0 1em;line-height:1.4285em}a:hover{color:#1e70bf;text-decoration:none}::-webkit-selection{background-color:#CCE2FF;color:rgba(0,0,0,.87)}::-moz-selection{background-color:#CCE2FF;color:rgba(0,0,0,.87)}::selection{background-color:#CCE2FF;color:rgba(0,0,0,.87)}input::-webkit-selection,textarea::-webkit-selection{background-color:rgba(100,100,100,.4);color:rgba(0,0,0,.87)}input::-moz-selection,textarea::-moz-selection{background-color:rgba(100,100,100,.4);color:rgba(0,0,0,.87)}input::selection,textarea::selection{background-color:rgba(100,100,100,.4);color:rgba(0,0,0,.87)}.ui.button{cursor:pointer;display:inline-block;min-height:1em;outline:0;border:none;vertical-align:baseline;background:#E0E1E2;color:rgba(0,0,0,.6);font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;margin:0 .25em 0 0;padding:.78571429em 1.5em;text-transform:none;text-shadow:none;font-weight:700;line-height:1em;font-style:normal;text-align:center;text-decoration:none;border-radius:.28571429rem;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;will-change:'';-webkit-tap-highlight-color:transparent}.ui.button:hover{background-color:#CACBCD;background-image:none;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;color:rgba(0,0,0,.8)}.ui.button:hover .icon{opacity:.85}.ui.button:focus{background-color:#CACBCD;color:rgba(0,0,0,.8);background-image:''!important;box-shadow:''!important}.ui.button:focus .icon{opacity:.85}.ui.active.button:active,.ui.button:active{background-color:#BABBBC;background-image:'';color:rgba(0,0,0,.9);box-shadow:0 0 0 1px transparent inset,none}.ui.active.button{background-color:#C0C1C2;background-image:none;box-shadow:0 0 0 1px transparent inset;color:rgba(0,0,0,.95)}.ui.active.button:hover{background-color:#C0C1C2;background-image:none;color:rgba(0,0,0,.95)}.ui.active.button:active{background-color:#C0C1C2;background-image:none}.ui.loading.loading.loading.loading.loading.loading.button{position:relative;cursor:default;text-shadow:none!important;color:transparent!important;opacity:1;pointer-events:auto;-webkit-transition:all 0s linear,opacity .1s ease;transition:all 0s linear,opacity .1s ease}.ui.loading.button:before{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:.2em solid rgba(0,0,0,.15)}.ui.loading.button:after{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:button-spin .6s linear;animation:button-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#FFF transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}.ui.labeled.icon.loading.button .icon{background-color:transparent;box-shadow:none}@-webkit-keyframes button-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes button-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ui.basic.loading.button:not(.inverted):before{border-color:rgba(0,0,0,.1)}.ui.basic.loading.button:not(.inverted):after{border-top-color:#767676}.ui.button:disabled,.ui.buttons .disabled.button,.ui.disabled.active.button,.ui.disabled.button,.ui.disabled.button:hover{cursor:default;opacity:.45!important;background-image:none!important;box-shadow:none!important;pointer-events:none!important}.ui.basic.buttons .ui.disabled.button{border-color:rgba(34,36,38,.5)}.ui.animated.button{position:relative;overflow:hidden;padding-right:0!important;vertical-align:middle;z-index:1}.ui.animated.button .content{will-change:transform,opacity}.ui.animated.button .visible.content{position:relative;margin-right:1.5em;left:auto;right:0}.ui.animated.button .hidden.content{position:absolute;width:100%;top:50%;left:auto;right:-100%;margin-top:-.5em}.ui.animated.button .hidden.content,.ui.animated.button .visible.content{-webkit-transition:right .3s ease 0s;transition:right .3s ease 0s}.ui.animated.button:focus .visible.content,.ui.animated.button:hover .visible.content{left:auto;right:200%}.ui.animated.button:focus .hidden.content,.ui.animated.button:hover .hidden.content{left:auto;right:0}.ui.vertical.animated.button .hidden.content,.ui.vertical.animated.button .visible.content{-webkit-transition:top .3s ease,-webkit-transform .3s ease;transition:top .3s ease,-webkit-transform .3s ease;transition:top .3s ease,transform .3s ease;transition:top .3s ease,transform .3s ease,-webkit-transform .3s ease}.ui.vertical.animated.button .visible.content{-webkit-transform:translateY(0);transform:translateY(0);right:auto}.ui.vertical.animated.button .hidden.content{top:-50%;left:0;right:auto}.ui.vertical.animated.button:focus .visible.content,.ui.vertical.animated.button:hover .visible.content{-webkit-transform:translateY(200%);transform:translateY(200%);right:auto}.ui.vertical.animated.button:focus .hidden.content,.ui.vertical.animated.button:hover .hidden.content{top:50%;right:auto}.ui.fade.animated.button .hidden.content,.ui.fade.animated.button .visible.content{-webkit-transition:opacity .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,transform .3s ease;transition:opacity .3s ease,transform .3s ease,-webkit-transform .3s ease}.ui.fade.animated.button .visible.content{left:auto;right:auto;opacity:1;-webkit-transform:scale(1);transform:scale(1)}.ui.fade.animated.button .hidden.content{opacity:0;left:0;right:auto;-webkit-transform:scale(1.5);transform:scale(1.5)}.ui.fade.animated.button:focus .visible.content,.ui.fade.animated.button:hover .visible.content{left:auto;right:auto;opacity:0;-webkit-transform:scale(.75);transform:scale(.75)}.ui.fade.animated.button:focus .hidden.content,.ui.fade.animated.button:hover .hidden.content{left:0;right:auto;opacity:1;-webkit-transform:scale(1);transform:scale(1)}.ui.inverted.button{box-shadow:0 0 0 2px #FFF inset!important;background:0 0;color:#FFF;text-shadow:none!important}.ui.inverted.buttons .button{margin:0 0 0 -2px}.ui.inverted.buttons .button:first-child{margin-left:0}.ui.inverted.vertical.buttons .button{margin:0 0 -2px}.ui.inverted.vertical.buttons .button:first-child{margin-top:0}.ui.inverted.button.active,.ui.inverted.button:focus,.ui.inverted.button:hover{background:#FFF;box-shadow:0 0 0 2px #FFF inset!important;color:rgba(0,0,0,.8)}.ui.inverted.button.active:focus{background:#DCDDDE;box-shadow:0 0 0 2px #DCDDDE inset!important;color:rgba(0,0,0,.8)}.ui.labeled.button:not(.icon){display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background:0 0!important;padding:0!important;border:none!important;box-shadow:none!important}.ui.labeled.button>.button{margin:0}.ui.labeled.button>.label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 0 -1px!important;padding:'';font-size:1em;border-color:rgba(34,36,38,.15)}.ui.labeled.button>.tag.label:before{width:1.85em;height:1.85em}.ui.labeled.button:not([class*=\"left labeled\"])>.button{border-top-right-radius:0;border-bottom-right-radius:0}.ui.labeled.button:not([class*=\"left labeled\"])>.label,.ui[class*=\"left labeled\"].button>.button{border-top-left-radius:0;border-bottom-left-radius:0}.ui[class*=\"left labeled\"].button>.label{border-top-right-radius:0;border-bottom-right-radius:0}.ui.facebook.button{background-color:#3B5998;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.facebook.button:hover{background-color:#304d8a;color:#FFF;text-shadow:none}.ui.facebook.button:active{background-color:#2d4373;color:#FFF;text-shadow:none}.ui.twitter.button{background-color:#55ACEE;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.twitter.button:hover{background-color:#35a2f4;color:#FFF;text-shadow:none}.ui.twitter.button:active{background-color:#2795e9;color:#FFF;text-shadow:none}.ui.google.plus.button{background-color:#DD4B39;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.google.plus.button:hover{background-color:#e0321c;color:#FFF;text-shadow:none}.ui.google.plus.button:active{background-color:#c23321;color:#FFF;text-shadow:none}.ui.linkedin.button{background-color:#1F88BE;color:#FFF;text-shadow:none}.ui.linkedin.button:hover{background-color:#147baf;color:#FFF;text-shadow:none}.ui.linkedin.button:active{background-color:#186992;color:#FFF;text-shadow:none}.ui.youtube.button{background-color:#CC181E;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.youtube.button:hover{background-color:#bd0d13;color:#FFF;text-shadow:none}.ui.youtube.button:active{background-color:#9e1317;color:#FFF;text-shadow:none}.ui.instagram.button{background-color:#49769C;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.instagram.button:hover{background-color:#3d698e;color:#FFF;text-shadow:none}.ui.instagram.button:active{background-color:#395c79;color:#FFF;text-shadow:none}.ui.pinterest.button{background-color:#BD081C;color:#FFF;text-shadow:none;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.pinterest.button:hover{background-color:#ac0013;color:#FFF;text-shadow:none}.ui.pinterest.button:active{background-color:#8c0615;color:#FFF;text-shadow:none}.ui.vk.button{background-color:#4D7198;color:#FFF;background-image:none;box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.vk.button:hover{background-color:#41648a;color:#FFF}.ui.vk.button:active{background-color:#3c5876;color:#FFF}.ui.button>.icon:not(.button){height:.85714286em;opacity:.8;margin:0 .42857143em 0 -.21428571em;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;vertical-align:'';color:''}.ui.button:not(.icon)>.icon:not(.button):not(.dropdown){margin:0 .42857143em 0 -.21428571em}.ui.button:not(.icon)>.right.icon:not(.button):not(.dropdown){margin:0 -.21428571em 0 .42857143em}.ui[class*=\"left floated\"].button,.ui[class*=\"left floated\"].buttons{float:left;margin-left:0;margin-right:.25em}.ui[class*=\"right floated\"].button,.ui[class*=\"right floated\"].buttons{float:right;margin-right:0;margin-left:.25em}.ui.compact.button,.ui.compact.buttons .button{padding:.58928571em 1.125em}.ui.compact.icon.button,.ui.compact.icon.buttons .button{padding:.58928571em}.ui.compact.labeled.icon.button,.ui.compact.labeled.icon.buttons .button{padding:.58928571em 3.69642857em}.ui.mini.button,.ui.mini.buttons .button,.ui.mini.buttons .or{font-size:.78571429rem}.ui.tiny.button,.ui.tiny.buttons .button,.ui.tiny.buttons .or{font-size:.85714286rem}.ui.small.button,.ui.small.buttons .button,.ui.small.buttons .or{font-size:.92857143rem}.ui.button,.ui.buttons .button,.ui.buttons .or{font-size:1rem}.ui.large.button,.ui.large.buttons .button,.ui.large.buttons .or{font-size:1.14285714rem}.ui.big.button,.ui.big.buttons .button,.ui.big.buttons .or{font-size:1.28571429rem}.ui.huge.button,.ui.huge.buttons .button,.ui.huge.buttons .or{font-size:1.42857143rem}.ui.massive.button,.ui.massive.buttons .button,.ui.massive.buttons .or{font-size:1.71428571rem}.ui.icon.button,.ui.icon.buttons .button{padding:.78571429em}.ui.icon.button>.icon,.ui.icon.buttons .button>.icon{opacity:.9;margin:0;vertical-align:top}.ui.basic.button,.ui.basic.buttons .button{background:0 0!important;color:rgba(0,0,0,.6)!important;font-weight:400;border-radius:.28571429rem;text-transform:none;text-shadow:none!important;box-shadow:0 0 0 1px rgba(34,36,38,.15) inset}.ui.basic.buttons{box-shadow:none;border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem}.ui.basic.button:focus,.ui.basic.button:hover,.ui.basic.buttons .button:focus,.ui.basic.buttons .button:hover{background:#FFF!important;color:rgba(0,0,0,.8)!important;box-shadow:0 0 0 1px rgba(34,36,38,.35) inset,0 0 0 0 rgba(34,36,38,.15) inset}.ui.basic.button:active,.ui.basic.buttons .button:active{background:#F8F8F8!important;color:rgba(0,0,0,.9)!important;box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px 0 rgba(34,36,38,.15) inset}.ui.basic.active.button,.ui.basic.buttons .active.button{background:rgba(0,0,0,.05)!important;box-shadow:''!important;color:rgba(0,0,0,.95)}.ui.basic.active.button:hover,.ui.basic.buttons .active.button:hover{background-color:rgba(0,0,0,.05)}.ui.basic.buttons .button:hover{box-shadow:0 0 0 1px rgba(34,36,38,.35) inset,0 0 0 0 rgba(34,36,38,.15) inset inset}.ui.basic.buttons .button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 1px 4px 0 rgba(34,36,38,.15) inset inset}.ui.basic.buttons .active.button{box-shadow:rgba(34,36,38,.35) inset}.ui.basic.inverted.button,.ui.basic.inverted.buttons .button{background-color:transparent!important;color:#F9FAFB!important;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important}.ui.basic.inverted.button:focus,.ui.basic.inverted.button:hover,.ui.basic.inverted.buttons .button:focus,.ui.basic.inverted.buttons .button:hover{color:#FFF!important;box-shadow:0 0 0 2px #fff inset!important}.ui.basic.inverted.button:active,.ui.basic.inverted.buttons .button:active{background-color:rgba(255,255,255,.08)!important;color:#FFF!important;box-shadow:0 0 0 2px rgba(255,255,255,.9) inset!important}.ui.basic.inverted.active.button,.ui.basic.inverted.buttons .active.button{background-color:rgba(255,255,255,.08);color:#FFF;text-shadow:none;box-shadow:0 0 0 2px rgba(255,255,255,.7) inset}.ui.basic.inverted.active.button:hover,.ui.basic.inverted.buttons .active.button:hover{background-color:rgba(255,255,255,.15);box-shadow:0 0 0 2px #fff inset!important}.ui.basic.buttons .button{border-radius:0;border-left:1px solid rgba(34,36,38,.15);box-shadow:none}.ui.basic.vertical.buttons .button{border-left:none;border-left-width:0;border-top:1px solid rgba(34,36,38,.15)}.ui.basic.vertical.buttons .button:first-child{border-top-width:0}.ui.labeled.icon.button,.ui.labeled.icon.buttons .button{position:relative;padding-left:4.07142857em!important;padding-right:1.5em!important}.ui.labeled.icon.button>.icon,.ui.labeled.icon.buttons>.button>.icon{position:absolute;height:100%;line-height:1;border-radius:0;border-top-left-radius:inherit;border-bottom-left-radius:inherit;text-align:center;margin:0;width:2.57142857em;background-color:rgba(0,0,0,.05);color:'';box-shadow:-1px 0 0 0 transparent inset;top:0;left:0}.ui[class*=\"right labeled\"].icon.button{padding-right:4.07142857em!important;padding-left:1.5em!important}.ui[class*=\"right labeled\"].icon.button>.icon{left:auto;right:0;border-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;box-shadow:1px 0 0 0 transparent inset}.ui.labeled.icon.button>.icon:after,.ui.labeled.icon.button>.icon:before,.ui.labeled.icon.buttons>.button>.icon:after,.ui.labeled.icon.buttons>.button>.icon:before{display:block;position:absolute;width:100%;top:50%;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.ui.labeled.icon.buttons .button>.icon{border-radius:0}.ui.labeled.icon.buttons .button:first-child>.icon{border-top-left-radius:.28571429rem;border-bottom-left-radius:.28571429rem}.ui.labeled.icon.buttons .button:last-child>.icon{border-top-right-radius:.28571429rem;border-bottom-right-radius:.28571429rem}.ui.vertical.labeled.icon.buttons .button:first-child>.icon{border-radius:.28571429rem 0 0}.ui.vertical.labeled.icon.buttons .button:last-child>.icon{border-radius:0 0 0 .28571429rem}.ui.fluid[class*=\"left labeled\"].icon.button,.ui.fluid[class*=\"right labeled\"].icon.button{padding-left:1.5em!important;padding-right:1.5em!important}.ui.button.toggle.active,.ui.buttons .button.toggle.active,.ui.toggle.buttons .active.button{background-color:#21BA45!important;box-shadow:none!important;text-shadow:none;color:#FFF!important}.ui.button.toggle.active:hover{background-color:#16ab39!important;text-shadow:none;color:#FFF!important}.ui.circular.button{border-radius:10em}.ui.circular.button>.icon{width:1em;vertical-align:baseline}.ui.buttons .or{position:relative;width:.3em;height:2.57142857em;z-index:3}.ui.buttons .or:before{position:absolute;text-align:center;border-radius:500rem;content:'or';top:50%;left:50%;background-color:#FFF;text-shadow:none;margin-top:-.89285714em;margin-left:-.89285714em;width:1.78571429em;height:1.78571429em;line-height:1.78571429em;color:rgba(0,0,0,.4);font-style:normal;font-weight:700;box-shadow:0 0 0 1px transparent inset}.ui.buttons .or[data-text]:before{content:attr(data-text)}.ui.fluid.buttons .or{width:0!important}.ui.fluid.buttons .or:after{display:none}.ui.attached.button{position:relative;display:block;margin:0;border-radius:0;box-shadow:0 0 0 1px rgba(34,36,38,.15)!important}.ui.attached.top.button{border-radius:.28571429rem .28571429rem 0 0}.ui.attached.bottom.button{border-radius:0 0 .28571429rem .28571429rem}.ui.left.attached.button{display:inline-block;border-left:none;text-align:right;padding-right:.75em;border-radius:.28571429rem 0 0 .28571429rem}.ui.right.attached.button{display:inline-block;text-align:left;padding-left:.75em;border-radius:0 .28571429rem .28571429rem 0}.ui.attached.buttons{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:0;width:auto!important;z-index:2;margin-left:-1px;margin-right:-1px}.ui.attached.buttons .button{margin:0}.ui.attached.buttons .button:first-child,.ui.attached.buttons .button:last-child{border-radius:0}.ui[class*=\"top attached\"].buttons{margin-bottom:-1px;border-radius:.28571429rem .28571429rem 0 0}.ui[class*=\"top attached\"].buttons .button:first-child{border-radius:.28571429rem 0 0}.ui[class*=\"top attached\"].buttons .button:last-child{border-radius:0 .28571429rem 0 0}.ui[class*=\"bottom attached\"].buttons{margin-top:-1px;border-radius:0 0 .28571429rem .28571429rem}.ui[class*=\"bottom attached\"].buttons .button:first-child{border-radius:0 0 0 .28571429rem}.ui[class*=\"bottom attached\"].buttons .button:last-child{border-radius:0 0 .28571429rem}.ui[class*=\"left attached\"].buttons{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:0;margin-left:-1px;border-radius:0 .28571429rem .28571429rem 0}.ui[class*=\"left attached\"].buttons .button:first-child{margin-left:-1px;border-radius:0 .28571429rem 0 0}.ui[class*=\"left attached\"].buttons .button:last-child{margin-left:-1px;border-radius:0 0 .28571429rem}.ui[class*=\"right attached\"].buttons{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:0;margin-right:-1px;border-radius:.28571429rem 0 0 .28571429rem}.ui[class*=\"right attached\"].buttons .button:first-child{margin-left:-1px;border-radius:.28571429rem 0 0}.ui[class*=\"right attached\"].buttons .button:last-child{margin-left:-1px;border-radius:0 0 0 .28571429rem}.ui.fluid.button,.ui.fluid.buttons{width:100%}.ui.fluid.button{display:block}.ui.two.buttons{width:100%}.ui.two.buttons>.button{width:50%}.ui.three.buttons{width:100%}.ui.three.buttons>.button{width:33.333%}.ui.four.buttons{width:100%}.ui.four.buttons>.button{width:25%}.ui.five.buttons{width:100%}.ui.five.buttons>.button{width:20%}.ui.six.buttons{width:100%}.ui.six.buttons>.button{width:16.666%}.ui.seven.buttons{width:100%}.ui.seven.buttons>.button{width:14.285%}.ui.eight.buttons{width:100%}.ui.eight.buttons>.button{width:12.5%}.ui.nine.buttons{width:100%}.ui.nine.buttons>.button{width:11.11%}.ui.ten.buttons{width:100%}.ui.ten.buttons>.button{width:10%}.ui.eleven.buttons{width:100%}.ui.eleven.buttons>.button{width:9.09%}.ui.twelve.buttons{width:100%}.ui.twelve.buttons>.button{width:8.3333%}.ui.fluid.vertical.buttons,.ui.fluid.vertical.buttons>.button{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto}.ui.two.vertical.buttons>.button{height:50%}.ui.three.vertical.buttons>.button{height:33.333%}.ui.four.vertical.buttons>.button{height:25%}.ui.five.vertical.buttons>.button{height:20%}.ui.six.vertical.buttons>.button{height:16.666%}.ui.seven.vertical.buttons>.button{height:14.285%}.ui.eight.vertical.buttons>.button{height:12.5%}.ui.nine.vertical.buttons>.button{height:11.11%}.ui.ten.vertical.buttons>.button{height:10%}.ui.eleven.vertical.buttons>.button{height:9.09%}.ui.twelve.vertical.buttons>.button{height:8.3333%}.ui.black.button,.ui.black.buttons .button{background-color:#1B1C1D;color:#FFF;text-shadow:none;background-image:none}.ui.black.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.black.button:hover,.ui.black.buttons .button:hover{background-color:#27292a;color:#FFF;text-shadow:none}.ui.black.button:focus,.ui.black.buttons .button:focus{background-color:#2f3032;color:#FFF;text-shadow:none}.ui.black.button:active,.ui.black.buttons .button:active{background-color:#343637;color:#FFF;text-shadow:none}.ui.black.active.button,.ui.black.button .active.button:active,.ui.black.buttons .active.button,.ui.black.buttons .active.button:active{background-color:#0f0f10;color:#FFF;text-shadow:none}.ui.basic.black.button,.ui.basic.black.buttons .button{box-shadow:0 0 0 1px #1B1C1D inset!important;color:#1B1C1D!important}.ui.basic.black.button:hover,.ui.basic.black.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #27292a inset!important;color:#27292a!important}.ui.basic.black.button:focus,.ui.basic.black.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #2f3032 inset!important;color:#27292a!important}.ui.basic.black.active.button,.ui.basic.black.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #0f0f10 inset!important;color:#343637!important}.ui.basic.black.button:active,.ui.basic.black.buttons .button:active{box-shadow:0 0 0 1px #343637 inset!important;color:#343637!important}.ui.buttons:not(.vertical)>.basic.black.button:not(:first-child){margin-left:-1px}.ui.inverted.black.button,.ui.inverted.black.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #D4D4D5 inset!important;color:#FFF}.ui.inverted.black.button.active,.ui.inverted.black.button:active,.ui.inverted.black.button:focus,.ui.inverted.black.button:hover,.ui.inverted.black.buttons .button.active,.ui.inverted.black.buttons .button:active,.ui.inverted.black.buttons .button:focus,.ui.inverted.black.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.black.active.button,.ui.inverted.black.button:active,.ui.inverted.black.button:focus,.ui.inverted.black.button:hover,.ui.inverted.black.buttons .active.button,.ui.inverted.black.buttons .button:active,.ui.inverted.black.buttons .button:focus,.ui.inverted.black.buttons .button:hover{background-color:#000}.ui.inverted.black.basic.button,.ui.inverted.black.basic.buttons .button,.ui.inverted.black.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.black.basic.button:hover,.ui.inverted.black.basic.buttons .button:hover,.ui.inverted.black.buttons .basic.button:hover{box-shadow:0 0 0 2px #000 inset!important;color:#FFF!important}.ui.inverted.black.basic.button:focus,.ui.inverted.black.basic.buttons .button:focus{box-shadow:0 0 0 2px #000 inset!important;color:#545454!important}.ui.inverted.black.basic.active.button,.ui.inverted.black.basic.button:active,.ui.inverted.black.basic.buttons .active.button,.ui.inverted.black.basic.buttons .button:active,.ui.inverted.black.buttons .basic.active.button,.ui.inverted.black.buttons .basic.button:active{box-shadow:0 0 0 2px #000 inset!important;color:#FFF!important}.ui.grey.button,.ui.grey.buttons .button{background-color:#767676;color:#FFF;text-shadow:none;background-image:none}.ui.grey.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.grey.button:hover,.ui.grey.buttons .button:hover{background-color:#838383;color:#FFF;text-shadow:none}.ui.grey.button:focus,.ui.grey.buttons .button:focus{background-color:#8a8a8a;color:#FFF;text-shadow:none}.ui.grey.button:active,.ui.grey.buttons .button:active{background-color:#909090;color:#FFF;text-shadow:none}.ui.grey.active.button,.ui.grey.button .active.button:active,.ui.grey.buttons .active.button,.ui.grey.buttons .active.button:active{background-color:#696969;color:#FFF;text-shadow:none}.ui.basic.grey.button,.ui.basic.grey.buttons .button{box-shadow:0 0 0 1px #767676 inset!important;color:#767676!important}.ui.basic.grey.button:hover,.ui.basic.grey.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #838383 inset!important;color:#838383!important}.ui.basic.grey.button:focus,.ui.basic.grey.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #8a8a8a inset!important;color:#838383!important}.ui.basic.grey.active.button,.ui.basic.grey.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #696969 inset!important;color:#909090!important}.ui.basic.grey.button:active,.ui.basic.grey.buttons .button:active{box-shadow:0 0 0 1px #909090 inset!important;color:#909090!important}.ui.buttons:not(.vertical)>.basic.grey.button:not(:first-child){margin-left:-1px}.ui.inverted.grey.button,.ui.inverted.grey.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #D4D4D5 inset!important;color:#FFF}.ui.inverted.grey.button.active,.ui.inverted.grey.button:active,.ui.inverted.grey.button:focus,.ui.inverted.grey.button:hover,.ui.inverted.grey.buttons .button.active,.ui.inverted.grey.buttons .button:active,.ui.inverted.grey.buttons .button:focus,.ui.inverted.grey.buttons .button:hover{box-shadow:none!important;color:rgba(0,0,0,.6)}.ui.inverted.grey.button:hover,.ui.inverted.grey.buttons .button:hover{background-color:#cfd0d2}.ui.inverted.grey.button:focus,.ui.inverted.grey.buttons .button:focus{background-color:#c7c9cb}.ui.inverted.grey.active.button,.ui.inverted.grey.buttons .active.button{background-color:#cfd0d2}.ui.inverted.grey.button:active,.ui.inverted.grey.buttons .button:active{background-color:#c2c4c5}.ui.inverted.grey.basic.button,.ui.inverted.grey.basic.buttons .button,.ui.inverted.grey.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.grey.basic.button:hover,.ui.inverted.grey.basic.buttons .button:hover,.ui.inverted.grey.buttons .basic.button:hover{box-shadow:0 0 0 2px #cfd0d2 inset!important;color:#FFF!important}.ui.inverted.grey.basic.button:focus,.ui.inverted.grey.basic.buttons .button:focus{box-shadow:0 0 0 2px #c7c9cb inset!important;color:#DCDDDE!important}.ui.inverted.grey.basic.active.button,.ui.inverted.grey.basic.buttons .active.button,.ui.inverted.grey.buttons .basic.active.button{box-shadow:0 0 0 2px #cfd0d2 inset!important;color:#FFF!important}.ui.inverted.grey.basic.button:active,.ui.inverted.grey.basic.buttons .button:active,.ui.inverted.grey.buttons .basic.button:active{box-shadow:0 0 0 2px #c2c4c5 inset!important;color:#FFF!important}.ui.brown.button,.ui.brown.buttons .button{background-color:#A5673F;color:#FFF;text-shadow:none;background-image:none}.ui.brown.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.brown.button:hover,.ui.brown.buttons .button:hover{background-color:#975b33;color:#FFF;text-shadow:none}.ui.brown.button:focus,.ui.brown.buttons .button:focus{background-color:#90532b;color:#FFF;text-shadow:none}.ui.brown.button:active,.ui.brown.buttons .button:active{background-color:#805031;color:#FFF;text-shadow:none}.ui.brown.active.button,.ui.brown.button .active.button:active,.ui.brown.buttons .active.button,.ui.brown.buttons .active.button:active{background-color:#995a31;color:#FFF;text-shadow:none}.ui.basic.brown.button,.ui.basic.brown.buttons .button{box-shadow:0 0 0 1px #A5673F inset!important;color:#A5673F!important}.ui.basic.brown.button:hover,.ui.basic.brown.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #975b33 inset!important;color:#975b33!important}.ui.basic.brown.button:focus,.ui.basic.brown.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #90532b inset!important;color:#975b33!important}.ui.basic.brown.active.button,.ui.basic.brown.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #995a31 inset!important;color:#805031!important}.ui.basic.brown.button:active,.ui.basic.brown.buttons .button:active{box-shadow:0 0 0 1px #805031 inset!important;color:#805031!important}.ui.buttons:not(.vertical)>.basic.brown.button:not(:first-child){margin-left:-1px}.ui.inverted.brown.button,.ui.inverted.brown.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #D67C1C inset!important;color:#D67C1C}.ui.inverted.brown.button.active,.ui.inverted.brown.button:active,.ui.inverted.brown.button:focus,.ui.inverted.brown.button:hover,.ui.inverted.brown.buttons .button.active,.ui.inverted.brown.buttons .button:active,.ui.inverted.brown.buttons .button:focus,.ui.inverted.brown.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.brown.button:hover,.ui.inverted.brown.buttons .button:hover{background-color:#c86f11}.ui.inverted.brown.button:focus,.ui.inverted.brown.buttons .button:focus{background-color:#c16808}.ui.inverted.brown.active.button,.ui.inverted.brown.buttons .active.button{background-color:#cc6f0d}.ui.inverted.brown.button:active,.ui.inverted.brown.buttons .button:active{background-color:#a96216}.ui.inverted.brown.basic.button,.ui.inverted.brown.basic.buttons .button,.ui.inverted.brown.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.brown.basic.button:hover,.ui.inverted.brown.basic.buttons .button:hover,.ui.inverted.brown.buttons .basic.button:hover{box-shadow:0 0 0 2px #c86f11 inset!important;color:#D67C1C!important}.ui.inverted.brown.basic.button:focus,.ui.inverted.brown.basic.buttons .button:focus{box-shadow:0 0 0 2px #c16808 inset!important;color:#D67C1C!important}.ui.inverted.brown.basic.active.button,.ui.inverted.brown.basic.buttons .active.button,.ui.inverted.brown.buttons .basic.active.button{box-shadow:0 0 0 2px #cc6f0d inset!important;color:#D67C1C!important}.ui.inverted.brown.basic.button:active,.ui.inverted.brown.basic.buttons .button:active,.ui.inverted.brown.buttons .basic.button:active{box-shadow:0 0 0 2px #a96216 inset!important;color:#D67C1C!important}.ui.blue.button,.ui.blue.buttons .button{background-color:#2185D0;color:#FFF;text-shadow:none;background-image:none}.ui.blue.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.blue.button:hover,.ui.blue.buttons .button:hover{background-color:#1678c2;color:#FFF;text-shadow:none}.ui.blue.button:focus,.ui.blue.buttons .button:focus{background-color:#0d71bb;color:#FFF;text-shadow:none}.ui.blue.button:active,.ui.blue.buttons .button:active{background-color:#1a69a4;color:#FFF;text-shadow:none}.ui.blue.active.button,.ui.blue.button .active.button:active,.ui.blue.buttons .active.button,.ui.blue.buttons .active.button:active{background-color:#1279c6;color:#FFF;text-shadow:none}.ui.basic.blue.button,.ui.basic.blue.buttons .button{box-shadow:0 0 0 1px #2185D0 inset!important;color:#2185D0!important}.ui.basic.blue.button:hover,.ui.basic.blue.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #1678c2 inset!important;color:#1678c2!important}.ui.basic.blue.button:focus,.ui.basic.blue.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #0d71bb inset!important;color:#1678c2!important}.ui.basic.blue.active.button,.ui.basic.blue.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #1279c6 inset!important;color:#1a69a4!important}.ui.basic.blue.button:active,.ui.basic.blue.buttons .button:active{box-shadow:0 0 0 1px #1a69a4 inset!important;color:#1a69a4!important}.ui.buttons:not(.vertical)>.basic.blue.button:not(:first-child){margin-left:-1px}.ui.inverted.blue.button,.ui.inverted.blue.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #54C8FF inset!important;color:#54C8FF}.ui.inverted.blue.button.active,.ui.inverted.blue.button:active,.ui.inverted.blue.button:focus,.ui.inverted.blue.button:hover,.ui.inverted.blue.buttons .button.active,.ui.inverted.blue.buttons .button:active,.ui.inverted.blue.buttons .button:focus,.ui.inverted.blue.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.blue.button:hover,.ui.inverted.blue.buttons .button:hover{background-color:#3ac0ff}.ui.inverted.blue.button:focus,.ui.inverted.blue.buttons .button:focus{background-color:#2bbbff}.ui.inverted.blue.active.button,.ui.inverted.blue.buttons .active.button{background-color:#3ac0ff}.ui.inverted.blue.button:active,.ui.inverted.blue.buttons .button:active{background-color:#21b8ff}.ui.inverted.blue.basic.button,.ui.inverted.blue.basic.buttons .button,.ui.inverted.blue.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.blue.basic.button:hover,.ui.inverted.blue.basic.buttons .button:hover,.ui.inverted.blue.buttons .basic.button:hover{box-shadow:0 0 0 2px #3ac0ff inset!important;color:#54C8FF!important}.ui.inverted.blue.basic.button:focus,.ui.inverted.blue.basic.buttons .button:focus{box-shadow:0 0 0 2px #2bbbff inset!important;color:#54C8FF!important}.ui.inverted.blue.basic.active.button,.ui.inverted.blue.basic.buttons .active.button,.ui.inverted.blue.buttons .basic.active.button{box-shadow:0 0 0 2px #3ac0ff inset!important;color:#54C8FF!important}.ui.inverted.blue.basic.button:active,.ui.inverted.blue.basic.buttons .button:active,.ui.inverted.blue.buttons .basic.button:active{box-shadow:0 0 0 2px #21b8ff inset!important;color:#54C8FF!important}.ui.green.button,.ui.green.buttons .button{background-color:#21BA45;color:#FFF;text-shadow:none;background-image:none}.ui.green.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.green.button:hover,.ui.green.buttons .button:hover{background-color:#16ab39;color:#FFF;text-shadow:none}.ui.green.button:focus,.ui.green.buttons .button:focus{background-color:#0ea432;color:#FFF;text-shadow:none}.ui.green.button:active,.ui.green.buttons .button:active{background-color:#198f35;color:#FFF;text-shadow:none}.ui.green.active.button,.ui.green.button .active.button:active,.ui.green.buttons .active.button,.ui.green.buttons .active.button:active{background-color:#13ae38;color:#FFF;text-shadow:none}.ui.basic.green.button,.ui.basic.green.buttons .button{box-shadow:0 0 0 1px #21BA45 inset!important;color:#21BA45!important}.ui.basic.green.button:hover,.ui.basic.green.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #16ab39 inset!important;color:#16ab39!important}.ui.basic.green.button:focus,.ui.basic.green.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #0ea432 inset!important;color:#16ab39!important}.ui.basic.green.active.button,.ui.basic.green.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #13ae38 inset!important;color:#198f35!important}.ui.basic.green.button:active,.ui.basic.green.buttons .button:active{box-shadow:0 0 0 1px #198f35 inset!important;color:#198f35!important}.ui.buttons:not(.vertical)>.basic.green.button:not(:first-child){margin-left:-1px}.ui.inverted.green.button,.ui.inverted.green.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #2ECC40 inset!important;color:#2ECC40}.ui.inverted.green.button.active,.ui.inverted.green.button:active,.ui.inverted.green.button:focus,.ui.inverted.green.button:hover,.ui.inverted.green.buttons .button.active,.ui.inverted.green.buttons .button:active,.ui.inverted.green.buttons .button:focus,.ui.inverted.green.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.green.button:hover,.ui.inverted.green.buttons .button:hover{background-color:#22be34}.ui.inverted.green.button:focus,.ui.inverted.green.buttons .button:focus{background-color:#19b82b}.ui.inverted.green.active.button,.ui.inverted.green.buttons .active.button{background-color:#1fc231}.ui.inverted.green.button:active,.ui.inverted.green.buttons .button:active{background-color:#25a233}.ui.inverted.green.basic.button,.ui.inverted.green.basic.buttons .button,.ui.inverted.green.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.green.basic.button:hover,.ui.inverted.green.basic.buttons .button:hover,.ui.inverted.green.buttons .basic.button:hover{box-shadow:0 0 0 2px #22be34 inset!important;color:#2ECC40!important}.ui.inverted.green.basic.button:focus,.ui.inverted.green.basic.buttons .button:focus{box-shadow:0 0 0 2px #19b82b inset!important;color:#2ECC40!important}.ui.inverted.green.basic.active.button,.ui.inverted.green.basic.buttons .active.button,.ui.inverted.green.buttons .basic.active.button{box-shadow:0 0 0 2px #1fc231 inset!important;color:#2ECC40!important}.ui.inverted.green.basic.button:active,.ui.inverted.green.basic.buttons .button:active,.ui.inverted.green.buttons .basic.button:active{box-shadow:0 0 0 2px #25a233 inset!important;color:#2ECC40!important}.ui.orange.button,.ui.orange.buttons .button{background-color:#F2711C;color:#FFF;text-shadow:none;background-image:none}.ui.orange.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.orange.button:hover,.ui.orange.buttons .button:hover{background-color:#f26202;color:#FFF;text-shadow:none}.ui.orange.button:focus,.ui.orange.buttons .button:focus{background-color:#e55b00;color:#FFF;text-shadow:none}.ui.orange.button:active,.ui.orange.buttons .button:active{background-color:#cf590c;color:#FFF;text-shadow:none}.ui.orange.active.button,.ui.orange.button .active.button:active,.ui.orange.buttons .active.button,.ui.orange.buttons .active.button:active{background-color:#f56100;color:#FFF;text-shadow:none}.ui.basic.orange.button,.ui.basic.orange.buttons .button{box-shadow:0 0 0 1px #F2711C inset!important;color:#F2711C!important}.ui.basic.orange.button:hover,.ui.basic.orange.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #f26202 inset!important;color:#f26202!important}.ui.basic.orange.button:focus,.ui.basic.orange.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #e55b00 inset!important;color:#f26202!important}.ui.basic.orange.active.button,.ui.basic.orange.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #f56100 inset!important;color:#cf590c!important}.ui.basic.orange.button:active,.ui.basic.orange.buttons .button:active{box-shadow:0 0 0 1px #cf590c inset!important;color:#cf590c!important}.ui.buttons:not(.vertical)>.basic.orange.button:not(:first-child){margin-left:-1px}.ui.inverted.orange.button,.ui.inverted.orange.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #FF851B inset!important;color:#FF851B}.ui.inverted.orange.button.active,.ui.inverted.orange.button:active,.ui.inverted.orange.button:focus,.ui.inverted.orange.button:hover,.ui.inverted.orange.buttons .button.active,.ui.inverted.orange.buttons .button:active,.ui.inverted.orange.buttons .button:focus,.ui.inverted.orange.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.orange.button:hover,.ui.inverted.orange.buttons .button:hover{background-color:#ff7701}.ui.inverted.orange.button:focus,.ui.inverted.orange.buttons .button:focus{background-color:#f17000}.ui.inverted.orange.active.button,.ui.inverted.orange.buttons .active.button{background-color:#ff7701}.ui.inverted.orange.button:active,.ui.inverted.orange.buttons .button:active{background-color:#e76b00}.ui.inverted.orange.basic.button,.ui.inverted.orange.basic.buttons .button,.ui.inverted.orange.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.orange.basic.button:hover,.ui.inverted.orange.basic.buttons .button:hover,.ui.inverted.orange.buttons .basic.button:hover{box-shadow:0 0 0 2px #ff7701 inset!important;color:#FF851B!important}.ui.inverted.orange.basic.button:focus,.ui.inverted.orange.basic.buttons .button:focus{box-shadow:0 0 0 2px #f17000 inset!important;color:#FF851B!important}.ui.inverted.orange.basic.active.button,.ui.inverted.orange.basic.buttons .active.button,.ui.inverted.orange.buttons .basic.active.button{box-shadow:0 0 0 2px #ff7701 inset!important;color:#FF851B!important}.ui.inverted.orange.basic.button:active,.ui.inverted.orange.basic.buttons .button:active,.ui.inverted.orange.buttons .basic.button:active{box-shadow:0 0 0 2px #e76b00 inset!important;color:#FF851B!important}.ui.pink.button,.ui.pink.buttons .button{background-color:#E03997;color:#FFF;text-shadow:none;background-image:none}.ui.pink.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.pink.button:hover,.ui.pink.buttons .button:hover{background-color:#e61a8d;color:#FFF;text-shadow:none}.ui.pink.button:focus,.ui.pink.buttons .button:focus{background-color:#e10f85;color:#FFF;text-shadow:none}.ui.pink.button:active,.ui.pink.buttons .button:active{background-color:#c71f7e;color:#FFF;text-shadow:none}.ui.pink.active.button,.ui.pink.button .active.button:active,.ui.pink.buttons .active.button,.ui.pink.buttons .active.button:active{background-color:#ea158d;color:#FFF;text-shadow:none}.ui.basic.pink.button,.ui.basic.pink.buttons .button{box-shadow:0 0 0 1px #E03997 inset!important;color:#E03997!important}.ui.basic.pink.button:hover,.ui.basic.pink.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #e61a8d inset!important;color:#e61a8d!important}.ui.basic.pink.button:focus,.ui.basic.pink.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #e10f85 inset!important;color:#e61a8d!important}.ui.basic.pink.active.button,.ui.basic.pink.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #ea158d inset!important;color:#c71f7e!important}.ui.basic.pink.button:active,.ui.basic.pink.buttons .button:active{box-shadow:0 0 0 1px #c71f7e inset!important;color:#c71f7e!important}.ui.buttons:not(.vertical)>.basic.pink.button:not(:first-child){margin-left:-1px}.ui.inverted.pink.button,.ui.inverted.pink.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #FF8EDF inset!important;color:#FF8EDF}.ui.inverted.pink.button.active,.ui.inverted.pink.button:active,.ui.inverted.pink.button:focus,.ui.inverted.pink.button:hover,.ui.inverted.pink.buttons .button.active,.ui.inverted.pink.buttons .button:active,.ui.inverted.pink.buttons .button:focus,.ui.inverted.pink.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.pink.button:hover,.ui.inverted.pink.buttons .button:hover{background-color:#ff74d8}.ui.inverted.pink.button:focus,.ui.inverted.pink.buttons .button:focus{background-color:#ff65d3}.ui.inverted.pink.active.button,.ui.inverted.pink.buttons .active.button{background-color:#ff74d8}.ui.inverted.pink.button:active,.ui.inverted.pink.buttons .button:active{background-color:#ff5bd1}.ui.inverted.pink.basic.button,.ui.inverted.pink.basic.buttons .button,.ui.inverted.pink.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.pink.basic.button:hover,.ui.inverted.pink.basic.buttons .button:hover,.ui.inverted.pink.buttons .basic.button:hover{box-shadow:0 0 0 2px #ff74d8 inset!important;color:#FF8EDF!important}.ui.inverted.pink.basic.button:focus,.ui.inverted.pink.basic.buttons .button:focus{box-shadow:0 0 0 2px #ff65d3 inset!important;color:#FF8EDF!important}.ui.inverted.pink.basic.active.button,.ui.inverted.pink.basic.buttons .active.button,.ui.inverted.pink.buttons .basic.active.button{box-shadow:0 0 0 2px #ff74d8 inset!important;color:#FF8EDF!important}.ui.inverted.pink.basic.button:active,.ui.inverted.pink.basic.buttons .button:active,.ui.inverted.pink.buttons .basic.button:active{box-shadow:0 0 0 2px #ff5bd1 inset!important;color:#FF8EDF!important}.ui.violet.button,.ui.violet.buttons .button{background-color:#6435C9;color:#FFF;text-shadow:none;background-image:none}.ui.violet.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.violet.button:hover,.ui.violet.buttons .button:hover{background-color:#5829bb;color:#FFF;text-shadow:none}.ui.violet.button:focus,.ui.violet.buttons .button:focus{background-color:#4f20b5;color:#FFF;text-shadow:none}.ui.violet.button:active,.ui.violet.buttons .button:active{background-color:#502aa1;color:#FFF;text-shadow:none}.ui.violet.active.button,.ui.violet.button .active.button:active,.ui.violet.buttons .active.button,.ui.violet.buttons .active.button:active{background-color:#5626bf;color:#FFF;text-shadow:none}.ui.basic.violet.button,.ui.basic.violet.buttons .button{box-shadow:0 0 0 1px #6435C9 inset!important;color:#6435C9!important}.ui.basic.violet.button:hover,.ui.basic.violet.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #5829bb inset!important;color:#5829bb!important}.ui.basic.violet.button:focus,.ui.basic.violet.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #4f20b5 inset!important;color:#5829bb!important}.ui.basic.violet.active.button,.ui.basic.violet.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #5626bf inset!important;color:#502aa1!important}.ui.basic.violet.button:active,.ui.basic.violet.buttons .button:active{box-shadow:0 0 0 1px #502aa1 inset!important;color:#502aa1!important}.ui.buttons:not(.vertical)>.basic.violet.button:not(:first-child){margin-left:-1px}.ui.inverted.violet.button,.ui.inverted.violet.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #A291FB inset!important;color:#A291FB}.ui.inverted.violet.button.active,.ui.inverted.violet.button:active,.ui.inverted.violet.button:focus,.ui.inverted.violet.button:hover,.ui.inverted.violet.buttons .button.active,.ui.inverted.violet.buttons .button:active,.ui.inverted.violet.buttons .button:focus,.ui.inverted.violet.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.violet.button:hover,.ui.inverted.violet.buttons .button:hover{background-color:#8a73ff}.ui.inverted.violet.button:focus,.ui.inverted.violet.buttons .button:focus{background-color:#7d64ff}.ui.inverted.violet.active.button,.ui.inverted.violet.buttons .active.button{background-color:#8a73ff}.ui.inverted.violet.button:active,.ui.inverted.violet.buttons .button:active{background-color:#7860f9}.ui.inverted.violet.basic.button,.ui.inverted.violet.basic.buttons .button,.ui.inverted.violet.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.violet.basic.button:hover,.ui.inverted.violet.basic.buttons .button:hover,.ui.inverted.violet.buttons .basic.button:hover{box-shadow:0 0 0 2px #8a73ff inset!important;color:#A291FB!important}.ui.inverted.violet.basic.button:focus,.ui.inverted.violet.basic.buttons .button:focus{box-shadow:0 0 0 2px #7d64ff inset!important;color:#A291FB!important}.ui.inverted.violet.basic.active.button,.ui.inverted.violet.basic.buttons .active.button,.ui.inverted.violet.buttons .basic.active.button{box-shadow:0 0 0 2px #8a73ff inset!important;color:#A291FB!important}.ui.inverted.violet.basic.button:active,.ui.inverted.violet.basic.buttons .button:active,.ui.inverted.violet.buttons .basic.button:active{box-shadow:0 0 0 2px #7860f9 inset!important;color:#A291FB!important}.ui.purple.button,.ui.purple.buttons .button{background-color:#A333C8;color:#FFF;text-shadow:none;background-image:none}.ui.purple.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.purple.button:hover,.ui.purple.buttons .button:hover{background-color:#9627ba;color:#FFF;text-shadow:none}.ui.purple.button:focus,.ui.purple.buttons .button:focus{background-color:#8f1eb4;color:#FFF;text-shadow:none}.ui.purple.button:active,.ui.purple.buttons .button:active{background-color:#82299f;color:#FFF;text-shadow:none}.ui.purple.active.button,.ui.purple.button .active.button:active,.ui.purple.buttons .active.button,.ui.purple.buttons .active.button:active{background-color:#9724be;color:#FFF;text-shadow:none}.ui.basic.purple.button,.ui.basic.purple.buttons .button{box-shadow:0 0 0 1px #A333C8 inset!important;color:#A333C8!important}.ui.basic.purple.button:hover,.ui.basic.purple.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #9627ba inset!important;color:#9627ba!important}.ui.basic.purple.button:focus,.ui.basic.purple.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #8f1eb4 inset!important;color:#9627ba!important}.ui.basic.purple.active.button,.ui.basic.purple.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #9724be inset!important;color:#82299f!important}.ui.basic.purple.button:active,.ui.basic.purple.buttons .button:active{box-shadow:0 0 0 1px #82299f inset!important;color:#82299f!important}.ui.buttons:not(.vertical)>.basic.purple.button:not(:first-child){margin-left:-1px}.ui.inverted.purple.button,.ui.inverted.purple.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #DC73FF inset!important;color:#DC73FF}.ui.inverted.purple.button.active,.ui.inverted.purple.button:active,.ui.inverted.purple.button:focus,.ui.inverted.purple.button:hover,.ui.inverted.purple.buttons .button.active,.ui.inverted.purple.buttons .button:active,.ui.inverted.purple.buttons .button:focus,.ui.inverted.purple.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.purple.button:hover,.ui.inverted.purple.buttons .button:hover{background-color:#d65aff}.ui.inverted.purple.button:focus,.ui.inverted.purple.buttons .button:focus{background-color:#d24aff}.ui.inverted.purple.active.button,.ui.inverted.purple.buttons .active.button{background-color:#d65aff}.ui.inverted.purple.button:active,.ui.inverted.purple.buttons .button:active{background-color:#cf40ff}.ui.inverted.purple.basic.button,.ui.inverted.purple.basic.buttons .button,.ui.inverted.purple.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.purple.basic.button:hover,.ui.inverted.purple.basic.buttons .button:hover,.ui.inverted.purple.buttons .basic.button:hover{box-shadow:0 0 0 2px #d65aff inset!important;color:#DC73FF!important}.ui.inverted.purple.basic.button:focus,.ui.inverted.purple.basic.buttons .button:focus{box-shadow:0 0 0 2px #d24aff inset!important;color:#DC73FF!important}.ui.inverted.purple.basic.active.button,.ui.inverted.purple.basic.buttons .active.button,.ui.inverted.purple.buttons .basic.active.button{box-shadow:0 0 0 2px #d65aff inset!important;color:#DC73FF!important}.ui.inverted.purple.basic.button:active,.ui.inverted.purple.basic.buttons .button:active,.ui.inverted.purple.buttons .basic.button:active{box-shadow:0 0 0 2px #cf40ff inset!important;color:#DC73FF!important}.ui.red.button,.ui.red.buttons .button{background-color:#DB2828;color:#FFF;text-shadow:none;background-image:none}.ui.red.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.red.button:hover,.ui.red.buttons .button:hover{background-color:#d01919;color:#FFF;text-shadow:none}.ui.red.button:focus,.ui.red.buttons .button:focus{background-color:#ca1010;color:#FFF;text-shadow:none}.ui.red.button:active,.ui.red.buttons .button:active{background-color:#b21e1e;color:#FFF;text-shadow:none}.ui.red.active.button,.ui.red.button .active.button:active,.ui.red.buttons .active.button,.ui.red.buttons .active.button:active{background-color:#d41515;color:#FFF;text-shadow:none}.ui.basic.red.button,.ui.basic.red.buttons .button{box-shadow:0 0 0 1px #DB2828 inset!important;color:#DB2828!important}.ui.basic.red.button:hover,.ui.basic.red.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #d01919 inset!important;color:#d01919!important}.ui.basic.red.button:focus,.ui.basic.red.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #ca1010 inset!important;color:#d01919!important}.ui.basic.red.active.button,.ui.basic.red.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #d41515 inset!important;color:#b21e1e!important}.ui.basic.red.button:active,.ui.basic.red.buttons .button:active{box-shadow:0 0 0 1px #b21e1e inset!important;color:#b21e1e!important}.ui.buttons:not(.vertical)>.basic.red.button:not(:first-child){margin-left:-1px}.ui.inverted.red.button,.ui.inverted.red.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #FF695E inset!important;color:#FF695E}.ui.inverted.red.button.active,.ui.inverted.red.button:active,.ui.inverted.red.button:focus,.ui.inverted.red.button:hover,.ui.inverted.red.buttons .button.active,.ui.inverted.red.buttons .button:active,.ui.inverted.red.buttons .button:focus,.ui.inverted.red.buttons .button:hover{box-shadow:none!important;color:#FFF}.ui.inverted.red.button:hover,.ui.inverted.red.buttons .button:hover{background-color:#ff5144}.ui.inverted.red.button:focus,.ui.inverted.red.buttons .button:focus{background-color:#ff4335}.ui.inverted.red.active.button,.ui.inverted.red.buttons .active.button{background-color:#ff5144}.ui.inverted.red.button:active,.ui.inverted.red.buttons .button:active{background-color:#ff392b}.ui.inverted.red.basic.button,.ui.inverted.red.basic.buttons .button,.ui.inverted.red.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.red.basic.button:hover,.ui.inverted.red.basic.buttons .button:hover,.ui.inverted.red.buttons .basic.button:hover{box-shadow:0 0 0 2px #ff5144 inset!important;color:#FF695E!important}.ui.inverted.red.basic.button:focus,.ui.inverted.red.basic.buttons .button:focus{box-shadow:0 0 0 2px #ff4335 inset!important;color:#FF695E!important}.ui.inverted.red.basic.active.button,.ui.inverted.red.basic.buttons .active.button,.ui.inverted.red.buttons .basic.active.button{box-shadow:0 0 0 2px #ff5144 inset!important;color:#FF695E!important}.ui.inverted.red.basic.button:active,.ui.inverted.red.basic.buttons .button:active,.ui.inverted.red.buttons .basic.button:active{box-shadow:0 0 0 2px #ff392b inset!important;color:#FF695E!important}.ui.teal.button,.ui.teal.buttons .button{background-color:#00B5AD;color:#FFF;text-shadow:none;background-image:none}.ui.teal.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.teal.button:hover,.ui.teal.buttons .button:hover{background-color:#009c95;color:#FFF;text-shadow:none}.ui.teal.button:focus,.ui.teal.buttons .button:focus{background-color:#008c86;color:#FFF;text-shadow:none}.ui.teal.button:active,.ui.teal.buttons .button:active{background-color:#00827c;color:#FFF;text-shadow:none}.ui.teal.active.button,.ui.teal.button .active.button:active,.ui.teal.buttons .active.button,.ui.teal.buttons .active.button:active{background-color:#009c95;color:#FFF;text-shadow:none}.ui.basic.teal.button,.ui.basic.teal.buttons .button{box-shadow:0 0 0 1px #00B5AD inset!important;color:#00B5AD!important}.ui.basic.teal.button:hover,.ui.basic.teal.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #009c95 inset!important;color:#009c95!important}.ui.basic.teal.button:focus,.ui.basic.teal.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #008c86 inset!important;color:#009c95!important}.ui.basic.teal.active.button,.ui.basic.teal.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #009c95 inset!important;color:#00827c!important}.ui.basic.teal.button:active,.ui.basic.teal.buttons .button:active{box-shadow:0 0 0 1px #00827c inset!important;color:#00827c!important}.ui.buttons:not(.vertical)>.basic.teal.button:not(:first-child){margin-left:-1px}.ui.inverted.teal.button,.ui.inverted.teal.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #6DFFFF inset!important;color:#6DFFFF}.ui.inverted.teal.button.active,.ui.inverted.teal.button:active,.ui.inverted.teal.button:focus,.ui.inverted.teal.button:hover,.ui.inverted.teal.buttons .button.active,.ui.inverted.teal.buttons .button:active,.ui.inverted.teal.buttons .button:focus,.ui.inverted.teal.buttons .button:hover{box-shadow:none!important;color:rgba(0,0,0,.6)}.ui.inverted.teal.button:hover,.ui.inverted.teal.buttons .button:hover{background-color:#54ffff}.ui.inverted.teal.button:focus,.ui.inverted.teal.buttons .button:focus{background-color:#4ff}.ui.inverted.teal.active.button,.ui.inverted.teal.buttons .active.button{background-color:#54ffff}.ui.inverted.teal.button:active,.ui.inverted.teal.buttons .button:active{background-color:#3affff}.ui.inverted.teal.basic.button,.ui.inverted.teal.basic.buttons .button,.ui.inverted.teal.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.teal.basic.button:hover,.ui.inverted.teal.basic.buttons .button:hover,.ui.inverted.teal.buttons .basic.button:hover{box-shadow:0 0 0 2px #54ffff inset!important;color:#6DFFFF!important}.ui.inverted.teal.basic.button:focus,.ui.inverted.teal.basic.buttons .button:focus{box-shadow:0 0 0 2px #4ff inset!important;color:#6DFFFF!important}.ui.inverted.teal.basic.active.button,.ui.inverted.teal.basic.buttons .active.button,.ui.inverted.teal.buttons .basic.active.button{box-shadow:0 0 0 2px #54ffff inset!important;color:#6DFFFF!important}.ui.inverted.teal.basic.button:active,.ui.inverted.teal.basic.buttons .button:active,.ui.inverted.teal.buttons .basic.button:active{box-shadow:0 0 0 2px #3affff inset!important;color:#6DFFFF!important}.ui.olive.button,.ui.olive.buttons .button{background-color:#B5CC18;color:#FFF;text-shadow:none;background-image:none}.ui.olive.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.olive.button:hover,.ui.olive.buttons .button:hover{background-color:#a7bd0d;color:#FFF;text-shadow:none}.ui.olive.button:focus,.ui.olive.buttons .button:focus{background-color:#a0b605;color:#FFF;text-shadow:none}.ui.olive.button:active,.ui.olive.buttons .button:active{background-color:#8d9e13;color:#FFF;text-shadow:none}.ui.olive.active.button,.ui.olive.button .active.button:active,.ui.olive.buttons .active.button,.ui.olive.buttons .active.button:active{background-color:#aac109;color:#FFF;text-shadow:none}.ui.basic.olive.button,.ui.basic.olive.buttons .button{box-shadow:0 0 0 1px #B5CC18 inset!important;color:#B5CC18!important}.ui.basic.olive.button:hover,.ui.basic.olive.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #a7bd0d inset!important;color:#a7bd0d!important}.ui.basic.olive.button:focus,.ui.basic.olive.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #a0b605 inset!important;color:#a7bd0d!important}.ui.basic.olive.active.button,.ui.basic.olive.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #aac109 inset!important;color:#8d9e13!important}.ui.basic.olive.button:active,.ui.basic.olive.buttons .button:active{box-shadow:0 0 0 1px #8d9e13 inset!important;color:#8d9e13!important}.ui.buttons:not(.vertical)>.basic.olive.button:not(:first-child){margin-left:-1px}.ui.inverted.olive.button,.ui.inverted.olive.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #D9E778 inset!important;color:#D9E778}.ui.inverted.olive.button.active,.ui.inverted.olive.button:active,.ui.inverted.olive.button:focus,.ui.inverted.olive.button:hover,.ui.inverted.olive.buttons .button.active,.ui.inverted.olive.buttons .button:active,.ui.inverted.olive.buttons .button:focus,.ui.inverted.olive.buttons .button:hover{box-shadow:none!important;color:rgba(0,0,0,.6)}.ui.inverted.olive.button:hover,.ui.inverted.olive.buttons .button:hover{background-color:#d8ea5c}.ui.inverted.olive.button:focus,.ui.inverted.olive.buttons .button:focus{background-color:#daef47}.ui.inverted.olive.active.button,.ui.inverted.olive.buttons .active.button{background-color:#daed59}.ui.inverted.olive.button:active,.ui.inverted.olive.buttons .button:active{background-color:#cddf4d}.ui.inverted.olive.basic.button,.ui.inverted.olive.basic.buttons .button,.ui.inverted.olive.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.olive.basic.button:hover,.ui.inverted.olive.basic.buttons .button:hover,.ui.inverted.olive.buttons .basic.button:hover{box-shadow:0 0 0 2px #d8ea5c inset!important;color:#D9E778!important}.ui.inverted.olive.basic.button:focus,.ui.inverted.olive.basic.buttons .button:focus{box-shadow:0 0 0 2px #daef47 inset!important;color:#D9E778!important}.ui.inverted.olive.basic.active.button,.ui.inverted.olive.basic.buttons .active.button,.ui.inverted.olive.buttons .basic.active.button{box-shadow:0 0 0 2px #daed59 inset!important;color:#D9E778!important}.ui.inverted.olive.basic.button:active,.ui.inverted.olive.basic.buttons .button:active,.ui.inverted.olive.buttons .basic.button:active{box-shadow:0 0 0 2px #cddf4d inset!important;color:#D9E778!important}.ui.yellow.button,.ui.yellow.buttons .button{background-color:#FBBD08;color:#FFF;text-shadow:none;background-image:none}.ui.yellow.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.yellow.button:hover,.ui.yellow.buttons .button:hover{background-color:#eaae00;color:#FFF;text-shadow:none}.ui.yellow.button:focus,.ui.yellow.buttons .button:focus{background-color:#daa300;color:#FFF;text-shadow:none}.ui.yellow.button:active,.ui.yellow.buttons .button:active{background-color:#cd9903;color:#FFF;text-shadow:none}.ui.yellow.active.button,.ui.yellow.button .active.button:active,.ui.yellow.buttons .active.button,.ui.yellow.buttons .active.button:active{background-color:#eaae00;color:#FFF;text-shadow:none}.ui.basic.yellow.button,.ui.basic.yellow.buttons .button{box-shadow:0 0 0 1px #FBBD08 inset!important;color:#FBBD08!important}.ui.basic.yellow.button:hover,.ui.basic.yellow.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #eaae00 inset!important;color:#eaae00!important}.ui.basic.yellow.button:focus,.ui.basic.yellow.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #daa300 inset!important;color:#eaae00!important}.ui.basic.yellow.active.button,.ui.basic.yellow.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #eaae00 inset!important;color:#cd9903!important}.ui.basic.yellow.button:active,.ui.basic.yellow.buttons .button:active{box-shadow:0 0 0 1px #cd9903 inset!important;color:#cd9903!important}.ui.buttons:not(.vertical)>.basic.yellow.button:not(:first-child){margin-left:-1px}.ui.inverted.yellow.button,.ui.inverted.yellow.buttons .button{background-color:transparent;box-shadow:0 0 0 2px #FFE21F inset!important;color:#FFE21F}.ui.inverted.yellow.button.active,.ui.inverted.yellow.button:active,.ui.inverted.yellow.button:focus,.ui.inverted.yellow.button:hover,.ui.inverted.yellow.buttons .button.active,.ui.inverted.yellow.buttons .button:active,.ui.inverted.yellow.buttons .button:focus,.ui.inverted.yellow.buttons .button:hover{box-shadow:none!important;color:rgba(0,0,0,.6)}.ui.inverted.yellow.button:hover,.ui.inverted.yellow.buttons .button:hover{background-color:#ffdf05}.ui.inverted.yellow.button:focus,.ui.inverted.yellow.buttons .button:focus{background-color:#f5d500}.ui.inverted.yellow.active.button,.ui.inverted.yellow.buttons .active.button{background-color:#ffdf05}.ui.inverted.yellow.button:active,.ui.inverted.yellow.buttons .button:active{background-color:#ebcd00}.ui.inverted.yellow.basic.button,.ui.inverted.yellow.basic.buttons .button,.ui.inverted.yellow.buttons .basic.button{background-color:transparent;box-shadow:0 0 0 2px rgba(255,255,255,.5) inset!important;color:#FFF!important}.ui.inverted.yellow.basic.button:hover,.ui.inverted.yellow.basic.buttons .button:hover,.ui.inverted.yellow.buttons .basic.button:hover{box-shadow:0 0 0 2px #ffdf05 inset!important;color:#FFE21F!important}.ui.inverted.yellow.basic.button:focus,.ui.inverted.yellow.basic.buttons .button:focus{box-shadow:0 0 0 2px #f5d500 inset!important;color:#FFE21F!important}.ui.inverted.yellow.basic.active.button,.ui.inverted.yellow.basic.buttons .active.button,.ui.inverted.yellow.buttons .basic.active.button{box-shadow:0 0 0 2px #ffdf05 inset!important;color:#FFE21F!important}.ui.inverted.yellow.basic.button:active,.ui.inverted.yellow.basic.buttons .button:active,.ui.inverted.yellow.buttons .basic.button:active{box-shadow:0 0 0 2px #ebcd00 inset!important;color:#FFE21F!important}.ui.primary.button,.ui.primary.buttons .button{background-color:#2185D0;color:#FFF;text-shadow:none;background-image:none}.ui.primary.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.primary.button:hover,.ui.primary.buttons .button:hover{background-color:#1678c2;color:#FFF;text-shadow:none}.ui.primary.button:focus,.ui.primary.buttons .button:focus{background-color:#0d71bb;color:#FFF;text-shadow:none}.ui.primary.button:active,.ui.primary.buttons .button:active{background-color:#1a69a4;color:#FFF;text-shadow:none}.ui.primary.active.button,.ui.primary.button .active.button:active,.ui.primary.buttons .active.button,.ui.primary.buttons .active.button:active{background-color:#1279c6;color:#FFF;text-shadow:none}.ui.basic.primary.button,.ui.basic.primary.buttons .button{box-shadow:0 0 0 1px #2185D0 inset!important;color:#2185D0!important}.ui.basic.primary.button:hover,.ui.basic.primary.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #1678c2 inset!important;color:#1678c2!important}.ui.basic.primary.button:focus,.ui.basic.primary.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #0d71bb inset!important;color:#1678c2!important}.ui.basic.primary.active.button,.ui.basic.primary.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #1279c6 inset!important;color:#1a69a4!important}.ui.basic.primary.button:active,.ui.basic.primary.buttons .button:active{box-shadow:0 0 0 1px #1a69a4 inset!important;color:#1a69a4!important}.ui.secondary.button,.ui.secondary.buttons .button{background-color:#1B1C1D;color:#FFF;text-shadow:none;background-image:none}.ui.secondary.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.secondary.button:hover,.ui.secondary.buttons .button:hover{background-color:#27292a;color:#FFF;text-shadow:none}.ui.secondary.button:focus,.ui.secondary.buttons .button:focus{background-color:#2e3032;color:#FFF;text-shadow:none}.ui.secondary.button:active,.ui.secondary.buttons .button:active{background-color:#343637;color:#FFF;text-shadow:none}.ui.secondary.active.button,.ui.secondary.button .active.button:active,.ui.secondary.buttons .active.button,.ui.secondary.buttons .active.button:active{background-color:#27292a;color:#FFF;text-shadow:none}.ui.basic.secondary.button,.ui.basic.secondary.buttons .button{box-shadow:0 0 0 1px #1B1C1D inset!important;color:#1B1C1D!important}.ui.basic.secondary.button:hover,.ui.basic.secondary.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #27292a inset!important;color:#27292a!important}.ui.basic.secondary.button:focus,.ui.basic.secondary.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #2e3032 inset!important;color:#27292a!important}.ui.basic.secondary.active.button,.ui.basic.secondary.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #27292a inset!important;color:#343637!important}.ui.basic.secondary.button:active,.ui.basic.secondary.buttons .button:active{box-shadow:0 0 0 1px #343637 inset!important;color:#343637!important}.ui.positive.button,.ui.positive.buttons .button{background-color:#21BA45;color:#FFF;text-shadow:none;background-image:none}.ui.positive.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.positive.button:hover,.ui.positive.buttons .button:hover{background-color:#16ab39;color:#FFF;text-shadow:none}.ui.positive.button:focus,.ui.positive.buttons .button:focus{background-color:#0ea432;color:#FFF;text-shadow:none}.ui.positive.button:active,.ui.positive.buttons .button:active{background-color:#198f35;color:#FFF;text-shadow:none}.ui.positive.active.button,.ui.positive.button .active.button:active,.ui.positive.buttons .active.button,.ui.positive.buttons .active.button:active{background-color:#13ae38;color:#FFF;text-shadow:none}.ui.basic.positive.button,.ui.basic.positive.buttons .button{box-shadow:0 0 0 1px #21BA45 inset!important;color:#21BA45!important}.ui.basic.positive.button:hover,.ui.basic.positive.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #16ab39 inset!important;color:#16ab39!important}.ui.basic.positive.button:focus,.ui.basic.positive.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #0ea432 inset!important;color:#16ab39!important}.ui.basic.positive.active.button,.ui.basic.positive.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #13ae38 inset!important;color:#198f35!important}.ui.basic.positive.button:active,.ui.basic.positive.buttons .button:active{box-shadow:0 0 0 1px #198f35 inset!important;color:#198f35!important}.ui.negative.button,.ui.negative.buttons .button{background-color:#DB2828;color:#FFF;text-shadow:none;background-image:none}.ui.negative.button{box-shadow:0 0 0 0 rgba(34,36,38,.15) inset}.ui.negative.button:hover,.ui.negative.buttons .button:hover{background-color:#d01919;color:#FFF;text-shadow:none}.ui.negative.button:focus,.ui.negative.buttons .button:focus{background-color:#ca1010;color:#FFF;text-shadow:none}.ui.negative.button:active,.ui.negative.buttons .button:active{background-color:#b21e1e;color:#FFF;text-shadow:none}.ui.negative.active.button,.ui.negative.button .active.button:active,.ui.negative.buttons .active.button,.ui.negative.buttons .active.button:active{background-color:#d41515;color:#FFF;text-shadow:none}.ui.basic.negative.button,.ui.basic.negative.buttons .button{box-shadow:0 0 0 1px #DB2828 inset!important;color:#DB2828!important}.ui.basic.negative.button:hover,.ui.basic.negative.buttons .button:hover{background:0 0!important;box-shadow:0 0 0 1px #d01919 inset!important;color:#d01919!important}.ui.basic.negative.button:focus,.ui.basic.negative.buttons .button:focus{background:0 0!important;box-shadow:0 0 0 1px #ca1010 inset!important;color:#d01919!important}.ui.basic.negative.active.button,.ui.basic.negative.buttons .active.button{background:0 0!important;box-shadow:0 0 0 1px #d41515 inset!important;color:#b21e1e!important}.ui.basic.negative.button:active,.ui.basic.negative.buttons .button:active{box-shadow:0 0 0 1px #b21e1e inset!important;color:#b21e1e!important}.ui.buttons:not(.vertical)>.basic.primary.button:not(:first-child){margin-left:-1px}.ui.buttons{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:0;vertical-align:baseline;margin:0 .25em 0 0}.ui.buttons:not(.basic):not(.inverted){box-shadow:none}.ui.buttons:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.ui.buttons .button{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;border-radius:0;margin:0}.ui.buttons:not(.basic):not(.inverted)>.button,.ui.buttons>.ui.button:not(.basic):not(.inverted){box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset}.ui.buttons .button:first-child{border-left:none;margin-left:0;border-top-left-radius:.28571429rem;border-bottom-left-radius:.28571429rem}.ui.buttons .button:last-child{border-top-right-radius:.28571429rem;border-bottom-right-radius:.28571429rem}.ui.vertical.buttons{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.vertical.buttons .button{display:block;float:none;width:100%;margin:0;box-shadow:none;border-radius:0}.ui.vertical.buttons .button:first-child{border-top-left-radius:.28571429rem;border-top-right-radius:.28571429rem}.ui.vertical.buttons .button:last-child{margin-bottom:0;border-bottom-left-radius:.28571429rem;border-bottom-right-radius:.28571429rem}.ui.vertical.buttons .button:only-child{border-radius:.28571429rem}.ui.container{display:block;max-width:100%!important}@media only screen and (max-width:767px){.ui.container{width:auto!important;margin-left:1em!important;margin-right:1em!important}.ui.grid.container,.ui.relaxed.grid.container,.ui.very.relaxed.grid.container{width:auto!important}}@media only screen and (min-width:768px) and (max-width:991px){.ui.container{width:723px;margin-left:auto!important;margin-right:auto!important}.ui.grid.container{width:calc(723px + 2rem)!important}.ui.relaxed.grid.container{width:calc(723px + 3rem)!important}.ui.very.relaxed.grid.container{width:calc(723px + 5rem)!important}}@media only screen and (min-width:992px) and (max-width:1199px){.ui.container{width:933px;margin-left:auto!important;margin-right:auto!important}.ui.grid.container{width:calc(933px + 2rem)!important}.ui.relaxed.grid.container{width:calc(933px + 3rem)!important}.ui.very.relaxed.grid.container{width:calc(933px + 5rem)!important}}@media only screen and (min-width:1200px){.ui.container{width:1127px;margin-left:auto!important;margin-right:auto!important}.ui.grid.container{width:calc(1127px + 2rem)!important}.ui.relaxed.grid.container{width:calc(1127px + 3rem)!important}.ui.very.relaxed.grid.container{width:calc(1127px + 5rem)!important}}.ui.text.container{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;max-width:700px!important;line-height:1.5;font-size:1.14285714rem}.ui.fluid.container{width:100%}.ui[class*=\"left aligned\"].container{text-align:left}.ui[class*=\"center aligned\"].container{text-align:center}.ui[class*=\"right aligned\"].container{text-align:right}.ui.justified.container{text-align:justify;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.ui.divider{margin:1rem 0;line-height:1;height:0;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:rgba(0,0,0,.85);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;font-size:1rem}.ui.divider:not(.vertical):not(.horizontal){border-top:1px solid rgba(34,36,38,.15);border-bottom:1px solid rgba(255,255,255,.1)}.ui.grid>.column+.divider,.ui.grid>.row>.column+.divider{left:auto}.ui.horizontal.divider{display:table;white-space:nowrap;height:auto;margin:'';line-height:1;text-align:center}.ui.horizontal.divider:after,.ui.horizontal.divider:before{content:'';display:table-cell;position:relative;top:50%;width:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)}.ui.horizontal.divider:before{background-position:right 1em top 50%}.ui.horizontal.divider:after{background-position:left 1em top 50%}.ui.vertical.divider{position:absolute;z-index:2;top:50%;left:50%;margin:0;padding:0;width:auto;height:50%;line-height:0;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ui.vertical.divider:after,.ui.vertical.divider:before{position:absolute;left:50%;content:'';z-index:3;border-left:1px solid rgba(34,36,38,.15);border-right:1px solid rgba(255,255,255,.1);width:0;height:calc(100% - 1rem)}.ui.vertical.divider:before{top:-100%}.ui.vertical.divider:after{top:auto;bottom:0}@media only screen and (max-width:767px){.ui.grid .stackable.row .ui.vertical.divider,.ui.stackable.grid .ui.vertical.divider{display:table;white-space:nowrap;height:auto;margin:'';overflow:hidden;line-height:1;text-align:center;position:static;top:0;left:0;-webkit-transform:none;transform:none}.ui.grid .stackable.row .ui.vertical.divider:after,.ui.grid .stackable.row .ui.vertical.divider:before,.ui.stackable.grid .ui.vertical.divider:after,.ui.stackable.grid .ui.vertical.divider:before{left:0;border-left:none;border-right:none;content:'';display:table-cell;position:relative;top:50%;width:50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)}.ui.grid .stackable.row .ui.vertical.divider:before,.ui.stackable.grid .ui.vertical.divider:before{background-position:right 1em top 50%}.ui.grid .stackable.row .ui.vertical.divider:after,.ui.stackable.grid .ui.vertical.divider:after{background-position:left 1em top 50%}}.ui.divider>.icon{margin:0;font-size:1rem;height:1em;vertical-align:middle}.ui.hidden.divider{border-color:transparent!important}.ui.hidden.divider:after,.ui.hidden.divider:before{display:none}.ui.divider.inverted,.ui.horizontal.inverted.divider,.ui.vertical.inverted.divider{color:#FFF}.ui.divider.inverted,.ui.divider.inverted:after,.ui.divider.inverted:before{border-top-color:rgba(34,36,38,.15)!important;border-left-color:rgba(34,36,38,.15)!important;border-bottom-color:rgba(255,255,255,.15)!important;border-right-color:rgba(255,255,255,.15)!important}.ui.fitted.divider{margin:0}.ui.clearing.divider{clear:both}.ui.section.divider{margin-top:2rem;margin-bottom:2rem}i.flag:not(.icon){display:inline-block;width:16px;height:11px;line-height:11px;vertical-align:baseline;margin:0 .5em 0 0;text-decoration:inherit;speak:none;font-smoothing:antialiased;-webkit-backface-visibility:hidden;backface-visibility:hidden}i.flag:not(.icon):before{display:inline-block;content:'';background:url(" + __webpack_require__(11) + ") -108px -1976px no-repeat;width:16px;height:11px}i.flag.ad:before,i.flag.andorra:before{background-position:0 0}i.flag.ae:before,i.flag.uae:before,i.flag.united.arab.emirates:before{background-position:0 -26px}i.flag.af:before,i.flag.afghanistan:before{background-position:0 -52px}i.flag.ag:before,i.flag.antigua:before{background-position:0 -78px}i.flag.ai:before,i.flag.anguilla:before{background-position:0 -104px}i.flag.al:before,i.flag.albania:before{background-position:0 -130px}i.flag.am:before,i.flag.armenia:before{background-position:0 -156px}i.flag.an:before,i.flag.netherlands.antilles:before{background-position:0 -182px}i.flag.angola:before,i.flag.ao:before{background-position:0 -208px}i.flag.ar:before,i.flag.argentina:before{background-position:0 -234px}i.flag.american.samoa:before,i.flag.as:before{background-position:0 -260px}i.flag.at:before,i.flag.austria:before{background-position:0 -286px}i.flag.au:before,i.flag.australia:before{background-position:0 -312px}i.flag.aruba:before,i.flag.aw:before{background-position:0 -338px}i.flag.aland.islands:before,i.flag.ax:before{background-position:0 -364px}i.flag.az:before,i.flag.azerbaijan:before{background-position:0 -390px}i.flag.ba:before,i.flag.bosnia:before{background-position:0 -416px}i.flag.barbados:before,i.flag.bb:before{background-position:0 -442px}i.flag.bangladesh:before,i.flag.bd:before{background-position:0 -468px}i.flag.be:before,i.flag.belgium:before{background-position:0 -494px}i.flag.bf:before,i.flag.burkina.faso:before{background-position:0 -520px}i.flag.bg:before,i.flag.bulgaria:before{background-position:0 -546px}i.flag.bahrain:before,i.flag.bh:before{background-position:0 -572px}i.flag.bi:before,i.flag.burundi:before{background-position:0 -598px}i.flag.benin:before,i.flag.bj:before{background-position:0 -624px}i.flag.bermuda:before,i.flag.bm:before{background-position:0 -650px}i.flag.bn:before,i.flag.brunei:before{background-position:0 -676px}i.flag.bo:before,i.flag.bolivia:before{background-position:0 -702px}i.flag.br:before,i.flag.brazil:before{background-position:0 -728px}i.flag.bahamas:before,i.flag.bs:before{background-position:0 -754px}i.flag.bhutan:before,i.flag.bt:before{background-position:0 -780px}i.flag.bouvet.island:before,i.flag.bv:before{background-position:0 -806px}i.flag.botswana:before,i.flag.bw:before{background-position:0 -832px}i.flag.belarus:before,i.flag.by:before{background-position:0 -858px}i.flag.belize:before,i.flag.bz:before{background-position:0 -884px}i.flag.ca:before,i.flag.canada:before{background-position:0 -910px}i.flag.cc:before,i.flag.cocos.islands:before{background-position:0 -962px}i.flag.cd:before,i.flag.congo:before{background-position:0 -988px}i.flag.central.african.republic:before,i.flag.cf:before{background-position:0 -1014px}i.flag.cg:before,i.flag.congo.brazzaville:before{background-position:0 -1040px}i.flag.ch:before,i.flag.switzerland:before{background-position:0 -1066px}i.flag.ci:before,i.flag.cote.divoire:before{background-position:0 -1092px}i.flag.ck:before,i.flag.cook.islands:before{background-position:0 -1118px}i.flag.chile:before,i.flag.cl:before{background-position:0 -1144px}i.flag.cameroon:before,i.flag.cm:before{background-position:0 -1170px}i.flag.china:before,i.flag.cn:before{background-position:0 -1196px}i.flag.co:before,i.flag.colombia:before{background-position:0 -1222px}i.flag.costa.rica:before,i.flag.cr:before{background-position:0 -1248px}i.flag.cs:before,i.flag.serbia:before{background-position:0 -1274px}i.flag.cu:before,i.flag.cuba:before{background-position:0 -1300px}i.flag.cape.verde:before,i.flag.cv:before{background-position:0 -1326px}i.flag.christmas.island:before,i.flag.cx:before{background-position:0 -1352px}i.flag.cy:before,i.flag.cyprus:before{background-position:0 -1378px}i.flag.cz:before,i.flag.czech.republic:before{background-position:0 -1404px}i.flag.de:before,i.flag.germany:before{background-position:0 -1430px}i.flag.dj:before,i.flag.djibouti:before{background-position:0 -1456px}i.flag.denmark:before,i.flag.dk:before{background-position:0 -1482px}i.flag.dm:before,i.flag.dominica:before{background-position:0 -1508px}i.flag.do:before,i.flag.dominican.republic:before{background-position:0 -1534px}i.flag.algeria:before,i.flag.dz:before{background-position:0 -1560px}i.flag.ec:before,i.flag.ecuador:before{background-position:0 -1586px}i.flag.ee:before,i.flag.estonia:before{background-position:0 -1612px}i.flag.eg:before,i.flag.egypt:before{background-position:0 -1638px}i.flag.eh:before,i.flag.western.sahara:before{background-position:0 -1664px}i.flag.er:before,i.flag.eritrea:before{background-position:0 -1716px}i.flag.es:before,i.flag.spain:before{background-position:0 -1742px}i.flag.et:before,i.flag.ethiopia:before{background-position:0 -1768px}i.flag.eu:before,i.flag.european.union:before{background-position:0 -1794px}i.flag.fi:before,i.flag.finland:before{background-position:0 -1846px}i.flag.fiji:before,i.flag.fj:before{background-position:0 -1872px}i.flag.falkland.islands:before,i.flag.fk:before{background-position:0 -1898px}i.flag.fm:before,i.flag.micronesia:before{background-position:0 -1924px}i.flag.faroe.islands:before,i.flag.fo:before{background-position:0 -1950px}i.flag.fr:before,i.flag.france:before{background-position:0 -1976px}i.flag.ga:before,i.flag.gabon:before{background-position:-36px 0}i.flag.gb:before,i.flag.united.kingdom:before{background-position:-36px -26px}i.flag.gd:before,i.flag.grenada:before{background-position:-36px -52px}i.flag.ge:before,i.flag.georgia:before{background-position:-36px -78px}i.flag.french.guiana:before,i.flag.gf:before{background-position:-36px -104px}i.flag.gh:before,i.flag.ghana:before{background-position:-36px -130px}i.flag.gi:before,i.flag.gibraltar:before{background-position:-36px -156px}i.flag.gl:before,i.flag.greenland:before{background-position:-36px -182px}i.flag.gambia:before,i.flag.gm:before{background-position:-36px -208px}i.flag.gn:before,i.flag.guinea:before{background-position:-36px -234px}i.flag.gp:before,i.flag.guadeloupe:before{background-position:-36px -260px}i.flag.equatorial.guinea:before,i.flag.gq:before{background-position:-36px -286px}i.flag.gr:before,i.flag.greece:before{background-position:-36px -312px}i.flag.gs:before,i.flag.sandwich.islands:before{background-position:-36px -338px}i.flag.gt:before,i.flag.guatemala:before{background-position:-36px -364px}i.flag.gu:before,i.flag.guam:before{background-position:-36px -390px}i.flag.guinea-bissau:before,i.flag.gw:before{background-position:-36px -416px}i.flag.guyana:before,i.flag.gy:before{background-position:-36px -442px}i.flag.hk:before,i.flag.hong.kong:before{background-position:-36px -468px}i.flag.heard.island:before,i.flag.hm:before{background-position:-36px -494px}i.flag.hn:before,i.flag.honduras:before{background-position:-36px -520px}i.flag.croatia:before,i.flag.hr:before{background-position:-36px -546px}i.flag.haiti:before,i.flag.ht:before{background-position:-36px -572px}i.flag.hu:before,i.flag.hungary:before{background-position:-36px -598px}i.flag.id:before,i.flag.indonesia:before{background-position:-36px -624px}i.flag.ie:before,i.flag.ireland:before{background-position:-36px -650px}i.flag.il:before,i.flag.israel:before{background-position:-36px -676px}i.flag.in:before,i.flag.india:before{background-position:-36px -702px}i.flag.indian.ocean.territory:before,i.flag.io:before{background-position:-36px -728px}i.flag.iq:before,i.flag.iraq:before{background-position:-36px -754px}i.flag.ir:before,i.flag.iran:before{background-position:-36px -780px}i.flag.iceland:before,i.flag.is:before{background-position:-36px -806px}i.flag.it:before,i.flag.italy:before{background-position:-36px -832px}i.flag.jamaica:before,i.flag.jm:before{background-position:-36px -858px}i.flag.jo:before,i.flag.jordan:before{background-position:-36px -884px}i.flag.japan:before,i.flag.jp:before{background-position:-36px -910px}i.flag.ke:before,i.flag.kenya:before{background-position:-36px -936px}i.flag.kg:before,i.flag.kyrgyzstan:before{background-position:-36px -962px}i.flag.cambodia:before,i.flag.kh:before{background-position:-36px -988px}i.flag.ki:before,i.flag.kiribati:before{background-position:-36px -1014px}i.flag.comoros:before,i.flag.km:before{background-position:-36px -1040px}i.flag.kn:before,i.flag.saint.kitts.and.nevis:before{background-position:-36px -1066px}i.flag.kp:before,i.flag.north.korea:before{background-position:-36px -1092px}i.flag.kr:before,i.flag.south.korea:before{background-position:-36px -1118px}i.flag.kuwait:before,i.flag.kw:before{background-position:-36px -1144px}i.flag.cayman.islands:before,i.flag.ky:before{background-position:-36px -1170px}i.flag.kazakhstan:before,i.flag.kz:before{background-position:-36px -1196px}i.flag.la:before,i.flag.laos:before{background-position:-36px -1222px}i.flag.lb:before,i.flag.lebanon:before{background-position:-36px -1248px}i.flag.lc:before,i.flag.saint.lucia:before{background-position:-36px -1274px}i.flag.li:before,i.flag.liechtenstein:before{background-position:-36px -1300px}i.flag.lk:before,i.flag.sri.lanka:before{background-position:-36px -1326px}i.flag.liberia:before,i.flag.lr:before{background-position:-36px -1352px}i.flag.lesotho:before,i.flag.ls:before{background-position:-36px -1378px}i.flag.lithuania:before,i.flag.lt:before{background-position:-36px -1404px}i.flag.lu:before,i.flag.luxembourg:before{background-position:-36px -1430px}i.flag.latvia:before,i.flag.lv:before{background-position:-36px -1456px}i.flag.libya:before,i.flag.ly:before{background-position:-36px -1482px}i.flag.ma:before,i.flag.morocco:before{background-position:-36px -1508px}i.flag.mc:before,i.flag.monaco:before{background-position:-36px -1534px}i.flag.md:before,i.flag.moldova:before{background-position:-36px -1560px}i.flag.me:before,i.flag.montenegro:before{background-position:-36px -1586px}i.flag.madagascar:before,i.flag.mg:before{background-position:-36px -1613px}i.flag.marshall.islands:before,i.flag.mh:before{background-position:-36px -1639px}i.flag.macedonia:before,i.flag.mk:before{background-position:-36px -1665px}i.flag.mali:before,i.flag.ml:before{background-position:-36px -1691px}i.flag.burma:before,i.flag.mm:before,i.flag.myanmar:before{background-position:-36px -1717px}i.flag.mn:before,i.flag.mongolia:before{background-position:-36px -1743px}i.flag.macau:before,i.flag.mo:before{background-position:-36px -1769px}i.flag.mp:before,i.flag.northern.mariana.islands:before{background-position:-36px -1795px}i.flag.martinique:before,i.flag.mq:before{background-position:-36px -1821px}i.flag.mauritania:before,i.flag.mr:before{background-position:-36px -1847px}i.flag.montserrat:before,i.flag.ms:before{background-position:-36px -1873px}i.flag.malta:before,i.flag.mt:before{background-position:-36px -1899px}i.flag.mauritius:before,i.flag.mu:before{background-position:-36px -1925px}i.flag.maldives:before,i.flag.mv:before{background-position:-36px -1951px}i.flag.malawi:before,i.flag.mw:before{background-position:-36px -1977px}i.flag.mexico:before,i.flag.mx:before{background-position:-72px 0}i.flag.malaysia:before,i.flag.my:before{background-position:-72px -26px}i.flag.mozambique:before,i.flag.mz:before{background-position:-72px -52px}i.flag.na:before,i.flag.namibia:before{background-position:-72px -78px}i.flag.nc:before,i.flag.new.caledonia:before{background-position:-72px -104px}i.flag.ne:before,i.flag.niger:before{background-position:-72px -130px}i.flag.nf:before,i.flag.norfolk.island:before{background-position:-72px -156px}i.flag.ng:before,i.flag.nigeria:before{background-position:-72px -182px}i.flag.ni:before,i.flag.nicaragua:before{background-position:-72px -208px}i.flag.netherlands:before,i.flag.nl:before{background-position:-72px -234px}i.flag.no:before,i.flag.norway:before{background-position:-72px -260px}i.flag.nepal:before,i.flag.np:before{background-position:-72px -286px}i.flag.nauru:before,i.flag.nr:before{background-position:-72px -312px}i.flag.niue:before,i.flag.nu:before{background-position:-72px -338px}i.flag.new.zealand:before,i.flag.nz:before{background-position:-72px -364px}i.flag.om:before,i.flag.oman:before{background-position:-72px -390px}i.flag.pa:before,i.flag.panama:before{background-position:-72px -416px}i.flag.pe:before,i.flag.peru:before{background-position:-72px -442px}i.flag.french.polynesia:before,i.flag.pf:before{background-position:-72px -468px}i.flag.new.guinea:before,i.flag.pg:before{background-position:-72px -494px}i.flag.ph:before,i.flag.philippines:before{background-position:-72px -520px}i.flag.pakistan:before,i.flag.pk:before{background-position:-72px -546px}i.flag.pl:before,i.flag.poland:before{background-position:-72px -572px}i.flag.pm:before,i.flag.saint.pierre:before{background-position:-72px -598px}i.flag.pitcairn.islands:before,i.flag.pn:before{background-position:-72px -624px}i.flag.pr:before,i.flag.puerto.rico:before{background-position:-72px -650px}i.flag.palestine:before,i.flag.ps:before{background-position:-72px -676px}i.flag.portugal:before,i.flag.pt:before{background-position:-72px -702px}i.flag.palau:before,i.flag.pw:before{background-position:-72px -728px}i.flag.paraguay:before,i.flag.py:before{background-position:-72px -754px}i.flag.qa:before,i.flag.qatar:before{background-position:-72px -780px}i.flag.re:before,i.flag.reunion:before{background-position:-72px -806px}i.flag.ro:before,i.flag.romania:before{background-position:-72px -832px}i.flag.rs:before,i.flag.serbia:before{background-position:-72px -858px}i.flag.ru:before,i.flag.russia:before{background-position:-72px -884px}i.flag.rw:before,i.flag.rwanda:before{background-position:-72px -910px}i.flag.sa:before,i.flag.saudi.arabia:before{background-position:-72px -936px}i.flag.sb:before,i.flag.solomon.islands:before{background-position:-72px -962px}i.flag.sc:before,i.flag.seychelles:before{background-position:-72px -988px}i.flag.gb.sct:before,i.flag.scotland:before{background-position:-72px -1014px}i.flag.sd:before,i.flag.sudan:before{background-position:-72px -1040px}i.flag.se:before,i.flag.sweden:before{background-position:-72px -1066px}i.flag.sg:before,i.flag.singapore:before{background-position:-72px -1092px}i.flag.saint.helena:before,i.flag.sh:before{background-position:-72px -1118px}i.flag.si:before,i.flag.slovenia:before{background-position:-72px -1144px}i.flag.jan.mayen:before,i.flag.sj:before,i.flag.svalbard:before{background-position:-72px -1170px}i.flag.sk:before,i.flag.slovakia:before{background-position:-72px -1196px}i.flag.sierra.leone:before,i.flag.sl:before{background-position:-72px -1222px}i.flag.san.marino:before,i.flag.sm:before{background-position:-72px -1248px}i.flag.senegal:before,i.flag.sn:before{background-position:-72px -1274px}i.flag.so:before,i.flag.somalia:before{background-position:-72px -1300px}i.flag.sr:before,i.flag.suriname:before{background-position:-72px -1326px}i.flag.sao.tome:before,i.flag.st:before{background-position:-72px -1352px}i.flag.el.salvador:before,i.flag.sv:before{background-position:-72px -1378px}i.flag.sy:before,i.flag.syria:before{background-position:-72px -1404px}i.flag.swaziland:before,i.flag.sz:before{background-position:-72px -1430px}i.flag.caicos.islands:before,i.flag.tc:before{background-position:-72px -1456px}i.flag.chad:before,i.flag.td:before{background-position:-72px -1482px}i.flag.french.territories:before,i.flag.tf:before{background-position:-72px -1508px}i.flag.tg:before,i.flag.togo:before{background-position:-72px -1534px}i.flag.th:before,i.flag.thailand:before{background-position:-72px -1560px}i.flag.tajikistan:before,i.flag.tj:before{background-position:-72px -1586px}i.flag.tk:before,i.flag.tokelau:before{background-position:-72px -1612px}i.flag.timorleste:before,i.flag.tl:before{background-position:-72px -1638px}i.flag.tm:before,i.flag.turkmenistan:before{background-position:-72px -1664px}i.flag.tn:before,i.flag.tunisia:before{background-position:-72px -1690px}i.flag.to:before,i.flag.tonga:before{background-position:-72px -1716px}i.flag.tr:before,i.flag.turkey:before{background-position:-72px -1742px}i.flag.trinidad:before,i.flag.tt:before{background-position:-72px -1768px}i.flag.tuvalu:before,i.flag.tv:before{background-position:-72px -1794px}i.flag.taiwan:before,i.flag.tw:before{background-position:-72px -1820px}i.flag.tanzania:before,i.flag.tz:before{background-position:-72px -1846px}i.flag.ua:before,i.flag.ukraine:before{background-position:-72px -1872px}i.flag.ug:before,i.flag.uganda:before{background-position:-72px -1898px}i.flag.um:before,i.flag.us.minor.islands:before{background-position:-72px -1924px}i.flag.america:before,i.flag.united.states:before,i.flag.us:before{background-position:-72px -1950px}i.flag.uruguay:before,i.flag.uy:before{background-position:-72px -1976px}i.flag.uz:before,i.flag.uzbekistan:before{background-position:-108px 0}i.flag.va:before,i.flag.vatican.city:before{background-position:-108px -26px}i.flag.saint.vincent:before,i.flag.vc:before{background-position:-108px -52px}i.flag.ve:before,i.flag.venezuela:before{background-position:-108px -78px}i.flag.british.virgin.islands:before,i.flag.vg:before{background-position:-108px -104px}i.flag.us.virgin.islands:before,i.flag.vi:before{background-position:-108px -130px}i.flag.vietnam:before,i.flag.vn:before{background-position:-108px -156px}i.flag.vanuatu:before,i.flag.vu:before{background-position:-108px -182px}i.flag.gb.wls:before,i.flag.wales:before{background-position:-108px -208px}i.flag.wallis.and.futuna:before,i.flag.wf:before{background-position:-108px -234px}i.flag.samoa:before,i.flag.ws:before{background-position:-108px -260px}i.flag.ye:before,i.flag.yemen:before{background-position:-108px -286px}i.flag.mayotte:before,i.flag.yt:before{background-position:-108px -312px}i.flag.south.africa:before,i.flag.za:before{background-position:-108px -338px}i.flag.zambia:before,i.flag.zm:before{background-position:-108px -364px}i.flag.zimbabwe:before,i.flag.zw:before{background-position:-108px -390px}.ui.header{border:none;margin:calc(2rem - .14285em) 0 1rem;padding:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:700;line-height:1.2857em;text-transform:none;color:rgba(0,0,0,.87)}.ui.header:first-child{margin-top:-.14285em}.ui.header:last-child{margin-bottom:0}.ui.header .sub.header{display:block;font-weight:400;padding:0;margin:0;line-height:1.2em;color:rgba(0,0,0,.6)}.ui.header>.icon{display:table-cell;opacity:1;font-size:1.5em;padding-top:.14285em;vertical-align:middle}.ui.header .icon:only-child{display:inline-block;padding:0;margin-right:.75rem}.ui.header>.image,.ui.header>img{display:inline-block;margin-top:.14285em;width:2.5em;height:auto;vertical-align:middle}.ui.header>.image:only-child,.ui.header>img:only-child{margin-right:.75rem}.ui.header .content{display:inline-block;vertical-align:top}.ui.header>.image+.content,.ui.header>img+.content{padding-left:.75rem;vertical-align:middle}.ui.header>.icon+.content{padding-left:.75rem;display:table-cell;vertical-align:middle}.ui.header .ui.label{font-size:'';margin-left:.5rem;vertical-align:middle}.ui.header+p{margin-top:0}h1.ui.header{font-size:2rem}h2.ui.header{font-size:1.714rem}h3.ui.header{font-size:1.28rem}h4.ui.header{font-size:1.071rem}h5.ui.header{font-size:1rem}h1.ui.header .sub.header,h2.ui.header .sub.header{font-size:1.14285714rem}h3.ui.header .sub.header,h4.ui.header .sub.header{font-size:1rem}h5.ui.header .sub.header{font-size:.92857143rem}.ui.huge.header{min-height:1em;font-size:2em}.ui.large.header{font-size:1.714em}.ui.medium.header{font-size:1.28em}.ui.small.header{font-size:1.071em}.ui.tiny.header{font-size:1em}.ui.huge.header .sub.header,.ui.large.header .sub.header{font-size:1.14285714rem}.ui.header .sub.header,.ui.small.header .sub.header{font-size:1rem}.ui.tiny.header .sub.header{font-size:.92857143rem}.ui.small.sub.header{font-size:.78571429em}.ui.sub.header{padding:0;margin-bottom:.14285714rem;font-weight:700;text-transform:uppercase;color:'';font-size:.85714286em}.ui.large.sub.header{font-size:.92857143em}.ui.huge.sub.header{font-size:1em}.ui.icon.header{display:inline-block;text-align:center;margin:2rem 0 1rem}.ui.icon.header:after{content:'';display:block;height:0;clear:both;visibility:hidden}.ui.icon.header:first-child{margin-top:0}.ui.icon.header .icon{float:none;display:block;width:auto;height:auto;line-height:1;padding:0;font-size:3em;margin:0 auto .5rem;opacity:1}.ui.icon.header .content{display:block;padding:0}.ui.icon.header .circular.icon,.ui.icon.header .square.icon{font-size:2em}.ui.block.icon.header .icon{margin-bottom:0}.ui.icon.header.aligned{margin-left:auto;margin-right:auto;display:block}.ui.disabled.header{opacity:.45}.ui.inverted.header{color:#FFF}.ui.inverted.header .sub.header{color:rgba(255,255,255,.8)}.ui.inverted.attached.header{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) #545454;background:linear-gradient(transparent,rgba(0,0,0,.05)) #545454;box-shadow:none;border-color:transparent}.ui.inverted.block.header{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) #545454;background:linear-gradient(transparent,rgba(0,0,0,.05)) #545454;box-shadow:none;border-bottom:none}.ui.red.header{color:#DB2828!important}a.ui.red.header:hover{color:#d01919!important}.ui.red.dividing.header{border-bottom:2px solid #DB2828}.ui.inverted.red.header{color:#FF695E!important}a.ui.inverted.red.header:hover{color:#ff5144!important}.ui.orange.header{color:#F2711C!important}a.ui.orange.header:hover{color:#f26202!important}.ui.orange.dividing.header{border-bottom:2px solid #F2711C}.ui.inverted.orange.header{color:#FF851B!important}a.ui.inverted.orange.header:hover{color:#ff7701!important}.ui.olive.header{color:#B5CC18!important}a.ui.olive.header:hover{color:#a7bd0d!important}.ui.olive.dividing.header{border-bottom:2px solid #B5CC18}.ui.inverted.olive.header{color:#D9E778!important}a.ui.inverted.olive.header:hover{color:#d8ea5c!important}.ui.yellow.header{color:#FBBD08!important}a.ui.yellow.header:hover{color:#eaae00!important}.ui.yellow.dividing.header{border-bottom:2px solid #FBBD08}.ui.inverted.yellow.header{color:#FFE21F!important}a.ui.inverted.yellow.header:hover{color:#ffdf05!important}.ui.green.header{color:#21BA45!important}a.ui.green.header:hover{color:#16ab39!important}.ui.green.dividing.header{border-bottom:2px solid #21BA45}.ui.inverted.green.header{color:#2ECC40!important}a.ui.inverted.green.header:hover{color:#22be34!important}.ui.teal.header{color:#00B5AD!important}a.ui.teal.header:hover{color:#009c95!important}.ui.teal.dividing.header{border-bottom:2px solid #00B5AD}.ui.inverted.teal.header{color:#6DFFFF!important}a.ui.inverted.teal.header:hover{color:#54ffff!important}.ui.blue.header{color:#2185D0!important}a.ui.blue.header:hover{color:#1678c2!important}.ui.blue.dividing.header{border-bottom:2px solid #2185D0}.ui.inverted.blue.header{color:#54C8FF!important}a.ui.inverted.blue.header:hover{color:#3ac0ff!important}.ui.violet.header{color:#6435C9!important}a.ui.violet.header:hover{color:#5829bb!important}.ui.violet.dividing.header{border-bottom:2px solid #6435C9}.ui.inverted.violet.header{color:#A291FB!important}a.ui.inverted.violet.header:hover{color:#8a73ff!important}.ui.purple.header{color:#A333C8!important}a.ui.purple.header:hover{color:#9627ba!important}.ui.purple.dividing.header{border-bottom:2px solid #A333C8}.ui.inverted.purple.header{color:#DC73FF!important}a.ui.inverted.purple.header:hover{color:#d65aff!important}.ui.pink.header{color:#E03997!important}a.ui.pink.header:hover{color:#e61a8d!important}.ui.pink.dividing.header{border-bottom:2px solid #E03997}.ui.inverted.pink.header{color:#FF8EDF!important}a.ui.inverted.pink.header:hover{color:#ff74d8!important}.ui.brown.header{color:#A5673F!important}a.ui.brown.header:hover{color:#975b33!important}.ui.brown.dividing.header{border-bottom:2px solid #A5673F}.ui.inverted.brown.header{color:#D67C1C!important}a.ui.inverted.brown.header:hover{color:#c86f11!important}.ui.grey.header{color:#767676!important}a.ui.grey.header:hover{color:#838383!important}.ui.grey.dividing.header{border-bottom:2px solid #767676}.ui.inverted.grey.header{color:#DCDDDE!important}a.ui.inverted.grey.header:hover{color:#cfd0d2!important}.ui.left.aligned.header{text-align:left}.ui.right.aligned.header{text-align:right}.ui.center.aligned.header,.ui.centered.header{text-align:center}.ui.justified.header{text-align:justify}.ui.justified.header:after{display:inline-block;content:'';width:100%}.ui.floated.header,.ui[class*=\"left floated\"].header{float:left;margin-top:0;margin-right:.5em}.ui[class*=\"right floated\"].header{float:right;margin-top:0;margin-left:.5em}.ui.fitted.header{padding:0}.ui.dividing.header{padding-bottom:.21428571rem;border-bottom:1px solid rgba(34,36,38,.15)}.ui.dividing.header .sub.header{padding-bottom:.21428571rem}.ui.dividing.header .icon{margin-bottom:0}.ui.inverted.dividing.header{border-bottom-color:rgba(255,255,255,.1)}.ui.block.header{background:#F3F4F5;padding:.78571429rem 1rem;box-shadow:none;border:1px solid #D4D4D5;border-radius:.28571429rem}.ui.tiny.block.header{font-size:.85714286rem}.ui.small.block.header{font-size:.92857143rem}.ui.block.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6){font-size:1rem}.ui.large.block.header{font-size:1.14285714rem}.ui.huge.block.header{font-size:1.42857143rem}.ui.attached.header{background:#FFF;padding:.78571429rem 1rem;margin-left:-1px;margin-right:-1px;box-shadow:none;border:1px solid #D4D4D5}.ui.attached.block.header{background:#F3F4F5}.ui.attached:not(.top):not(.bottom).header{margin-top:0;margin-bottom:0;border-top:none;border-radius:0}.ui.top.attached.header{margin-bottom:0;border-radius:.28571429rem .28571429rem 0 0}.ui.bottom.attached.header{margin-top:0;border-top:none;border-radius:0 0 .28571429rem .28571429rem}.ui.tiny.attached.header{font-size:.85714286em}.ui.small.attached.header{font-size:.92857143em}.ui.attached.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6){font-size:1em}.ui.large.attached.header{font-size:1.14285714em}.ui.huge.attached.header{font-size:1.42857143em}.ui.header:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6){font-size:1.28em}@font-face{font-family:Icons;src:url(" + __webpack_require__(12) + ");src:url(" + __webpack_require__(12) + "?#iefix) format('embedded-opentype'),url(" + __webpack_require__(13) + ") format('woff2'),url(" + __webpack_require__(14) + ") format('woff'),url(" + __webpack_require__(15) + ") format('truetype'),url(" + __webpack_require__(16) + "#icons) format('svg');font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-transform:none}i.icon{display:inline-block;opacity:1;margin:0 .25rem 0 0;width:1.18em;height:1em;font-family:Icons;font-style:normal;font-weight:400;text-decoration:inherit;text-align:center;speak:none;font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-backface-visibility:hidden;backface-visibility:hidden}i.icon:before{background:0 0!important}i.icon.loading{height:1em;line-height:1;-webkit-animation:icon-loading 2s linear infinite;animation:icon-loading 2s linear infinite}@-webkit-keyframes icon-loading{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes icon-loading{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}i.emphasized.icon,i.icon.active,i.icon.hover{opacity:1!important}i.disabled.icon{opacity:.45!important}i.fitted.icon{width:auto;margin:0}i.link.icon,i.link.icons{cursor:pointer;opacity:.8;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}i.link.icon:hover,i.link.icons:hover{opacity:1!important}i.circular.icon{border-radius:500em!important;line-height:1!important;padding:.5em!important;box-shadow:0 0 0 .1em rgba(0,0,0,.1) inset;width:2em!important;height:2em!important}i.circular.inverted.icon{border:none;box-shadow:none}i.flipped.icon,i.horizontally.flipped.icon{-webkit-transform:scale(-1,1);transform:scale(-1,1)}i.vertically.flipped.icon{-webkit-transform:scale(1,-1);transform:scale(1,-1)}i.clockwise.rotated.icon,i.right.rotated.icon,i.rotated.icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}i.counterclockwise.rotated.icon,i.left.rotated.icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}i.bordered.icon{line-height:1;vertical-align:baseline;width:2em;height:2em;padding:.5em .41em!important;box-shadow:0 0 0 .1em rgba(0,0,0,.1) inset}i.bordered.inverted.icon{border:none;box-shadow:none}i.inverted.bordered.icon,i.inverted.circular.icon{background-color:#1B1C1D!important;color:#FFF!important}i.inverted.icon{color:#FFF}i.red.icon{color:#DB2828!important}i.inverted.red.icon{color:#FF695E!important}i.inverted.bordered.red.icon,i.inverted.circular.red.icon{background-color:#DB2828!important;color:#FFF!important}i.orange.icon{color:#F2711C!important}i.inverted.orange.icon{color:#FF851B!important}i.inverted.bordered.orange.icon,i.inverted.circular.orange.icon{background-color:#F2711C!important;color:#FFF!important}i.yellow.icon{color:#FBBD08!important}i.inverted.yellow.icon{color:#FFE21F!important}i.inverted.bordered.yellow.icon,i.inverted.circular.yellow.icon{background-color:#FBBD08!important;color:#FFF!important}i.olive.icon{color:#B5CC18!important}i.inverted.olive.icon{color:#D9E778!important}i.inverted.bordered.olive.icon,i.inverted.circular.olive.icon{background-color:#B5CC18!important;color:#FFF!important}i.green.icon{color:#21BA45!important}i.inverted.green.icon{color:#2ECC40!important}i.inverted.bordered.green.icon,i.inverted.circular.green.icon{background-color:#21BA45!important;color:#FFF!important}i.teal.icon{color:#00B5AD!important}i.inverted.teal.icon{color:#6DFFFF!important}i.inverted.bordered.teal.icon,i.inverted.circular.teal.icon{background-color:#00B5AD!important;color:#FFF!important}i.blue.icon{color:#2185D0!important}i.inverted.blue.icon{color:#54C8FF!important}i.inverted.bordered.blue.icon,i.inverted.circular.blue.icon{background-color:#2185D0!important;color:#FFF!important}i.violet.icon{color:#6435C9!important}i.inverted.violet.icon{color:#A291FB!important}i.inverted.bordered.violet.icon,i.inverted.circular.violet.icon{background-color:#6435C9!important;color:#FFF!important}i.purple.icon{color:#A333C8!important}i.inverted.purple.icon{color:#DC73FF!important}i.inverted.bordered.purple.icon,i.inverted.circular.purple.icon{background-color:#A333C8!important;color:#FFF!important}i.pink.icon{color:#E03997!important}i.inverted.pink.icon{color:#FF8EDF!important}i.inverted.bordered.pink.icon,i.inverted.circular.pink.icon{background-color:#E03997!important;color:#FFF!important}i.brown.icon{color:#A5673F!important}i.inverted.brown.icon{color:#D67C1C!important}i.inverted.bordered.brown.icon,i.inverted.circular.brown.icon{background-color:#A5673F!important;color:#FFF!important}i.grey.icon{color:#767676!important}i.inverted.grey.icon{color:#DCDDDE!important}i.inverted.bordered.grey.icon,i.inverted.circular.grey.icon{background-color:#767676!important;color:#FFF!important}i.black.icon{color:#1B1C1D!important}i.inverted.black.icon{color:#545454!important}i.inverted.bordered.black.icon,i.inverted.circular.black.icon{background-color:#1B1C1D!important;color:#FFF!important}i.mini.icon,i.mini.icons{line-height:1;font-size:.4em}i.tiny.icon,i.tiny.icons{line-height:1;font-size:.5em}i.small.icon,i.small.icons{line-height:1;font-size:.75em}i.icon,i.icons{font-size:1em}i.large.icon,i.large.icons{line-height:1;vertical-align:middle;font-size:1.5em}i.big.icon,i.big.icons{line-height:1;vertical-align:middle;font-size:2em}i.huge.icon,i.huge.icons{line-height:1;vertical-align:middle;font-size:4em}i.massive.icon,i.massive.icons{line-height:1;vertical-align:middle;font-size:8em}i.icons{display:inline-block;position:relative;line-height:1}i.icons .icon{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);margin:0}i.icons .icon:first-child{position:static;width:auto;height:auto;vertical-align:top;-webkit-transform:none;transform:none;margin-right:.25rem}i.icons .corner.icon{top:auto;left:auto;right:0;bottom:0;-webkit-transform:none;transform:none;font-size:.45em;text-shadow:-1px -1px 0 #FFF,1px -1px 0 #FFF,-1px 1px 0 #FFF,1px 1px 0 #FFF}i.icons .inverted.corner.icon{text-shadow:-1px -1px 0 #1B1C1D,1px -1px 0 #1B1C1D,-1px 1px 0 #1B1C1D,1px 1px 0 #1B1C1D}i.icon.search:before{content:\"\\F002\"}i.icon.mail.outline:before{content:\"\\F003\"}i.icon.signal:before{content:\"\\F012\"}i.icon.setting:before{content:\"\\F013\"}i.icon.home:before{content:\"\\F015\"}i.icon.inbox:before{content:\"\\F01C\"}i.icon.browser:before{content:\"\\F022\"}i.icon.tag:before{content:\"\\F02B\"}i.icon.tags:before{content:\"\\F02C\"}i.icon.image:before{content:\"\\F03E\"}i.icon.calendar:before{content:\"\\F073\"}i.icon.comment:before{content:\"\\F075\"}i.icon.shop:before{content:\"\\F07A\"}i.icon.privacy:before{content:\"\\F084\"}i.icon.settings:before{content:\"\\F085\"}i.icon.comments:before{content:\"\\F086\"}i.icon.external:before{content:\"\\F08E\"}i.icon.trophy:before{content:\"\\F091\"}i.icon.payment:before{content:\"\\F09D\"}i.icon.feed:before{content:\"\\F09E\"}i.icon.alarm.outline:before{content:\"\\F0A2\"}i.icon.tasks:before{content:\"\\F0AE\"}i.icon.cloud:before{content:\"\\F0C2\"}i.icon.lab:before{content:\"\\F0C3\"}i.icon.mail:before{content:\"\\F0E0\"}i.icon.dashboard:before{content:\"\\F0E4\"}i.icon.comment.outline:before{content:\"\\F0E5\"}i.icon.comments.outline:before{content:\"\\F0E6\"}i.icon.sitemap:before{content:\"\\F0E8\"}i.icon.idea:before{content:\"\\F0EB\"}i.icon.alarm:before{content:\"\\F0F3\"}i.icon.terminal:before{content:\"\\F120\"}i.icon.code:before{content:\"\\F121\"}i.icon.protect:before{content:\"\\F132\"}i.icon.calendar.outline:before{content:\"\\F133\"}i.icon.ticket:before{content:\"\\F145\"}i.icon.external.square:before{content:\"\\F14C\"}i.icon.bug:before{content:\"\\F188\"}i.icon.mail.square:before{content:\"\\F199\"}i.icon.history:before{content:\"\\F1DA\"}i.icon.options:before{content:\"\\F1DE\"}i.icon.text.telephone:before{content:\"\\F1E4\"}i.icon.find:before{content:\"\\F1E5\"}i.icon.wifi:before{content:\"\\F1EB\"}i.icon.alarm.mute:before{content:\"\\F1F6\"}i.icon.alarm.mute.outline:before{content:\"\\F1F7\"}i.icon.copyright:before{content:\"\\F1F9\"}i.icon.at:before{content:\"\\F1FA\"}i.icon.eyedropper:before{content:\"\\F1FB\"}i.icon.paint.brush:before{content:\"\\F1FC\"}i.icon.heartbeat:before{content:\"\\F21E\"}i.icon.mouse.pointer:before{content:\"\\F245\"}i.icon.hourglass.empty:before{content:\"\\F250\"}i.icon.hourglass.start:before{content:\"\\F251\"}i.icon.hourglass.half:before{content:\"\\F252\"}i.icon.hourglass.end:before{content:\"\\F253\"}i.icon.hourglass.full:before{content:\"\\F254\"}i.icon.hand.pointer:before{content:\"\\F25A\"}i.icon.trademark:before{content:\"\\F25C\"}i.icon.registered:before{content:\"\\F25D\"}i.icon.creative.commons:before{content:\"\\F25E\"}i.icon.add.to.calendar:before{content:\"\\F271\"}i.icon.remove.from.calendar:before{content:\"\\F272\"}i.icon.delete.calendar:before{content:\"\\F273\"}i.icon.checked.calendar:before{content:\"\\F274\"}i.icon.industry:before{content:\"\\F275\"}i.icon.shopping.bag:before{content:\"\\F290\"}i.icon.shopping.basket:before{content:\"\\F291\"}i.icon.hashtag:before{content:\"\\F292\"}i.icon.percent:before{content:\"\\F295\"}i.icon.wait:before{content:\"\\F017\"}i.icon.download:before{content:\"\\F019\"}i.icon.repeat:before{content:\"\\F01E\"}i.icon.refresh:before{content:\"\\F021\"}i.icon.lock:before{content:\"\\F023\"}i.icon.bookmark:before{content:\"\\F02E\"}i.icon.print:before{content:\"\\F02F\"}i.icon.write:before{content:\"\\F040\"}i.icon.adjust:before{content:\"\\F042\"}i.icon.theme:before{content:\"\\F043\"}i.icon.edit:before{content:\"\\F044\"}i.icon.external.share:before{content:\"\\F045\"}i.icon.ban:before{content:\"\\F05E\"}i.icon.mail.forward:before,i.icon.share:before{content:\"\\F064\"}i.icon.expand:before{content:\"\\F065\"}i.icon.compress:before{content:\"\\F066\"}i.icon.unhide:before{content:\"\\F06E\"}i.icon.hide:before{content:\"\\F070\"}i.icon.random:before{content:\"\\F074\"}i.icon.retweet:before{content:\"\\F079\"}i.icon.sign.out:before{content:\"\\F08B\"}i.icon.pin:before{content:\"\\F08D\"}i.icon.sign.in:before{content:\"\\F090\"}i.icon.upload:before{content:\"\\F093\"}i.icon.call:before{content:\"\\F095\"}i.icon.remove.bookmark:before{content:\"\\F097\"}i.icon.call.square:before{content:\"\\F098\"}i.icon.unlock:before{content:\"\\F09C\"}i.icon.configure:before{content:\"\\F0AD\"}i.icon.filter:before{content:\"\\F0B0\"}i.icon.wizard:before{content:\"\\F0D0\"}i.icon.undo:before{content:\"\\F0E2\"}i.icon.exchange:before{content:\"\\F0EC\"}i.icon.cloud.download:before{content:\"\\F0ED\"}i.icon.cloud.upload:before{content:\"\\F0EE\"}i.icon.reply:before{content:\"\\F112\"}i.icon.reply.all:before{content:\"\\F122\"}i.icon.erase:before{content:\"\\F12D\"}i.icon.unlock.alternate:before{content:\"\\F13E\"}i.icon.write.square:before{content:\"\\F14B\"}i.icon.share.square:before{content:\"\\F14D\"}i.icon.archive:before{content:\"\\F187\"}i.icon.translate:before{content:\"\\F1AB\"}i.icon.recycle:before{content:\"\\F1B8\"}i.icon.send:before{content:\"\\F1D8\"}i.icon.send.outline:before{content:\"\\F1D9\"}i.icon.share.alternate:before{content:\"\\F1E0\"}i.icon.share.alternate.square:before{content:\"\\F1E1\"}i.icon.add.to.cart:before{content:\"\\F217\"}i.icon.in.cart:before{content:\"\\F218\"}i.icon.add.user:before{content:\"\\F234\"}i.icon.remove.user:before{content:\"\\F235\"}i.icon.object.group:before{content:\"\\F247\"}i.icon.object.ungroup:before{content:\"\\F248\"}i.icon.clone:before{content:\"\\F24D\"}i.icon.talk:before{content:\"\\F27A\"}i.icon.talk.outline:before{content:\"\\F27B\"}i.icon.help.circle:before{content:\"\\F059\"}i.icon.info.circle:before{content:\"\\F05A\"}i.icon.warning.circle:before{content:\"\\F06A\"}i.icon.warning.sign:before{content:\"\\F071\"}i.icon.announcement:before{content:\"\\F0A1\"}i.icon.help:before{content:\"\\F128\"}i.icon.info:before{content:\"\\F129\"}i.icon.warning:before{content:\"\\F12A\"}i.icon.birthday:before{content:\"\\F1FD\"}i.icon.help.circle.outline:before{content:\"\\F29C\"}i.icon.user:before{content:\"\\F007\"}i.icon.users:before{content:\"\\F0C0\"}i.icon.doctor:before{content:\"\\F0F0\"}i.icon.handicap:before{content:\"\\F193\"}i.icon.student:before{content:\"\\F19D\"}i.icon.child:before{content:\"\\F1AE\"}i.icon.spy:before{content:\"\\F21B\"}i.icon.female:before{content:\"\\F182\"}i.icon.male:before{content:\"\\F183\"}i.icon.woman:before{content:\"\\F221\"}i.icon.man:before{content:\"\\F222\"}i.icon.non.binary.transgender:before{content:\"\\F223\"}i.icon.intergender:before{content:\"\\F224\"}i.icon.transgender:before{content:\"\\F225\"}i.icon.lesbian:before{content:\"\\F226\"}i.icon.gay:before{content:\"\\F227\"}i.icon.heterosexual:before{content:\"\\F228\"}i.icon.other.gender:before{content:\"\\F229\"}i.icon.other.gender.vertical:before{content:\"\\F22A\"}i.icon.other.gender.horizontal:before{content:\"\\F22B\"}i.icon.neuter:before{content:\"\\F22C\"}i.icon.genderless:before{content:\"\\F22D\"}i.icon.universal.access:before{content:\"\\F29A\"}i.icon.wheelchair:before{content:\"\\F29B\"}i.icon.blind:before{content:\"\\F29D\"}i.icon.audio.description:before{content:\"\\F29E\"}i.icon.volume.control.phone:before{content:\"\\F2A0\"}i.icon.braille:before{content:\"\\F2A1\"}i.icon.asl:before{content:\"\\F2A3\"}i.icon.assistive.listening.systems:before{content:\"\\F2A2\"}i.icon.deafness:before{content:\"\\F2A4\"}i.icon.sign.language:before{content:\"\\F2A7\"}i.icon.low.vision:before{content:\"\\F2A8\"}i.icon.block.layout:before{content:\"\\F009\"}i.icon.grid.layout:before{content:\"\\F00A\"}i.icon.list.layout:before{content:\"\\F00B\"}i.icon.zoom:before{content:\"\\F00E\"}i.icon.zoom.out:before{content:\"\\F010\"}i.icon.resize.vertical:before{content:\"\\F07D\"}i.icon.resize.horizontal:before{content:\"\\F07E\"}i.icon.maximize:before{content:\"\\F0B2\"}i.icon.crop:before{content:\"\\F125\"}i.icon.cocktail:before{content:\"\\F000\"}i.icon.road:before{content:\"\\F018\"}i.icon.flag:before{content:\"\\F024\"}i.icon.book:before{content:\"\\F02D\"}i.icon.gift:before{content:\"\\F06B\"}i.icon.leaf:before{content:\"\\F06C\"}i.icon.fire:before{content:\"\\F06D\"}i.icon.plane:before{content:\"\\F072\"}i.icon.magnet:before{content:\"\\F076\"}i.icon.lemon:before{content:\"\\F094\"}i.icon.world:before{content:\"\\F0AC\"}i.icon.travel:before{content:\"\\F0B1\"}i.icon.shipping:before{content:\"\\F0D1\"}i.icon.money:before{content:\"\\F0D6\"}i.icon.legal:before{content:\"\\F0E3\"}i.icon.lightning:before{content:\"\\F0E7\"}i.icon.umbrella:before{content:\"\\F0E9\"}i.icon.treatment:before{content:\"\\F0F1\"}i.icon.suitcase:before{content:\"\\F0F2\"}i.icon.bar:before{content:\"\\F0FC\"}i.icon.flag.outline:before{content:\"\\F11D\"}i.icon.flag.checkered:before{content:\"\\F11E\"}i.icon.puzzle:before{content:\"\\F12E\"}i.icon.fire.extinguisher:before{content:\"\\F134\"}i.icon.rocket:before{content:\"\\F135\"}i.icon.anchor:before{content:\"\\F13D\"}i.icon.bullseye:before{content:\"\\F140\"}i.icon.sun:before{content:\"\\F185\"}i.icon.moon:before{content:\"\\F186\"}i.icon.fax:before{content:\"\\F1AC\"}i.icon.life.ring:before{content:\"\\F1CD\"}i.icon.bomb:before{content:\"\\F1E2\"}i.icon.soccer:before{content:\"\\F1E3\"}i.icon.calculator:before{content:\"\\F1EC\"}i.icon.diamond:before{content:\"\\F219\"}i.icon.sticky.note:before{content:\"\\F249\"}i.icon.sticky.note.outline:before{content:\"\\F24A\"}i.icon.law:before{content:\"\\F24E\"}i.icon.hand.peace:before{content:\"\\F25B\"}i.icon.hand.rock:before{content:\"\\F255\"}i.icon.hand.paper:before{content:\"\\F256\"}i.icon.hand.scissors:before{content:\"\\F257\"}i.icon.hand.lizard:before{content:\"\\F258\"}i.icon.hand.spock:before{content:\"\\F259\"}i.icon.tv:before{content:\"\\F26C\"}i.icon.crosshairs:before{content:\"\\F05B\"}i.icon.asterisk:before{content:\"\\F069\"}i.icon.square.outline:before{content:\"\\F096\"}i.icon.certificate:before{content:\"\\F0A3\"}i.icon.square:before{content:\"\\F0C8\"}i.icon.quote.left:before{content:\"\\F10D\"}i.icon.quote.right:before{content:\"\\F10E\"}i.icon.spinner:before{content:\"\\F110\"}i.icon.circle:before{content:\"\\F111\"}i.icon.ellipsis.horizontal:before{content:\"\\F141\"}i.icon.ellipsis.vertical:before{content:\"\\F142\"}i.icon.cube:before{content:\"\\F1B2\"}i.icon.cubes:before{content:\"\\F1B3\"}i.icon.circle.notched:before{content:\"\\F1CE\"}i.icon.circle.thin:before{content:\"\\F1DB\"}i.icon.checkmark:before{content:\"\\F00C\"}i.icon.remove:before{content:\"\\F00D\"}i.icon.checkmark.box:before{content:\"\\F046\"}i.icon.move:before{content:\"\\F047\"}i.icon.add.circle:before{content:\"\\F055\"}i.icon.minus.circle:before{content:\"\\F056\"}i.icon.remove.circle:before{content:\"\\F057\"}i.icon.check.circle:before{content:\"\\F058\"}i.icon.remove.circle.outline:before{content:\"\\F05C\"}i.icon.check.circle.outline:before{content:\"\\F05D\"}i.icon.plus:before{content:\"\\F067\"}i.icon.minus:before{content:\"\\F068\"}i.icon.add.square:before{content:\"\\F0FE\"}i.icon.radio:before{content:\"\\F10C\"}i.icon.minus.square:before{content:\"\\F146\"}i.icon.minus.square.outline:before{content:\"\\F147\"}i.icon.check.square:before{content:\"\\F14A\"}i.icon.selected.radio:before{content:\"\\F192\"}i.icon.plus.square.outline:before{content:\"\\F196\"}i.icon.toggle.off:before{content:\"\\F204\"}i.icon.toggle.on:before{content:\"\\F205\"}i.icon.film:before{content:\"\\F008\"}i.icon.sound:before{content:\"\\F025\"}i.icon.photo:before{content:\"\\F030\"}i.icon.bar.chart:before{content:\"\\F080\"}i.icon.camera.retro:before{content:\"\\F083\"}i.icon.newspaper:before{content:\"\\F1EA\"}i.icon.area.chart:before{content:\"\\F1FE\"}i.icon.pie.chart:before{content:\"\\F200\"}i.icon.line.chart:before{content:\"\\F201\"}i.icon.arrow.circle.outline.down:before{content:\"\\F01A\"}i.icon.arrow.circle.outline.up:before{content:\"\\F01B\"}i.icon.chevron.left:before{content:\"\\F053\"}i.icon.chevron.right:before{content:\"\\F054\"}i.icon.arrow.left:before{content:\"\\F060\"}i.icon.arrow.right:before{content:\"\\F061\"}i.icon.arrow.up:before{content:\"\\F062\"}i.icon.arrow.down:before{content:\"\\F063\"}i.icon.chevron.up:before{content:\"\\F077\"}i.icon.chevron.down:before{content:\"\\F078\"}i.icon.pointing.right:before{content:\"\\F0A4\"}i.icon.pointing.left:before{content:\"\\F0A5\"}i.icon.pointing.up:before{content:\"\\F0A6\"}i.icon.pointing.down:before{content:\"\\F0A7\"}i.icon.arrow.circle.left:before{content:\"\\F0A8\"}i.icon.arrow.circle.right:before{content:\"\\F0A9\"}i.icon.arrow.circle.up:before{content:\"\\F0AA\"}i.icon.arrow.circle.down:before{content:\"\\F0AB\"}i.icon.caret.down:before{content:\"\\F0D7\"}i.icon.caret.up:before{content:\"\\F0D8\"}i.icon.caret.left:before{content:\"\\F0D9\"}i.icon.caret.right:before{content:\"\\F0DA\"}i.icon.angle.double.left:before{content:\"\\F100\"}i.icon.angle.double.right:before{content:\"\\F101\"}i.icon.angle.double.up:before{content:\"\\F102\"}i.icon.angle.double.down:before{content:\"\\F103\"}i.icon.angle.left:before{content:\"\\F104\"}i.icon.angle.right:before{content:\"\\F105\"}i.icon.angle.up:before{content:\"\\F106\"}i.icon.angle.down:before{content:\"\\F107\"}i.icon.chevron.circle.left:before{content:\"\\F137\"}i.icon.chevron.circle.right:before{content:\"\\F138\"}i.icon.chevron.circle.up:before{content:\"\\F139\"}i.icon.chevron.circle.down:before{content:\"\\F13A\"}i.icon.toggle.down:before{content:\"\\F150\"}i.icon.toggle.up:before{content:\"\\F151\"}i.icon.toggle.right:before{content:\"\\F152\"}i.icon.long.arrow.down:before{content:\"\\F175\"}i.icon.long.arrow.up:before{content:\"\\F176\"}i.icon.long.arrow.left:before{content:\"\\F177\"}i.icon.long.arrow.right:before{content:\"\\F178\"}i.icon.arrow.circle.outline.right:before{content:\"\\F18E\"}i.icon.arrow.circle.outline.left:before{content:\"\\F190\"}i.icon.toggle.left:before{content:\"\\F191\"}i.icon.tablet:before{content:\"\\F10A\"}i.icon.mobile:before{content:\"\\F10B\"}i.icon.battery.full:before{content:\"\\F240\"}i.icon.battery.high:before{content:\"\\F241\"}i.icon.battery.medium:before{content:\"\\F242\"}i.icon.battery.low:before{content:\"\\F243\"}i.icon.battery.empty:before{content:\"\\F244\"}i.icon.power:before{content:\"\\F011\"}i.icon.trash.outline:before{content:\"\\F014\"}i.icon.disk.outline:before{content:\"\\F0A0\"}i.icon.desktop:before{content:\"\\F108\"}i.icon.laptop:before{content:\"\\F109\"}i.icon.game:before{content:\"\\F11B\"}i.icon.keyboard:before{content:\"\\F11C\"}i.icon.plug:before{content:\"\\F1E6\"}i.icon.trash:before{content:\"\\F1F8\"}i.icon.file.outline:before{content:\"\\F016\"}i.icon.folder:before{content:\"\\F07B\"}i.icon.folder.open:before{content:\"\\F07C\"}i.icon.file.text.outline:before{content:\"\\F0F6\"}i.icon.folder.outline:before{content:\"\\F114\"}i.icon.folder.open.outline:before{content:\"\\F115\"}i.icon.level.up:before{content:\"\\F148\"}i.icon.level.down:before{content:\"\\F149\"}i.icon.file:before{content:\"\\F15B\"}i.icon.file.text:before{content:\"\\F15C\"}i.icon.file.pdf.outline:before{content:\"\\F1C1\"}i.icon.file.word.outline:before{content:\"\\F1C2\"}i.icon.file.excel.outline:before{content:\"\\F1C3\"}i.icon.file.powerpoint.outline:before{content:\"\\F1C4\"}i.icon.file.image.outline:before{content:\"\\F1C5\"}i.icon.file.archive.outline:before{content:\"\\F1C6\"}i.icon.file.audio.outline:before{content:\"\\F1C7\"}i.icon.file.video.outline:before{content:\"\\F1C8\"}i.icon.file.code.outline:before{content:\"\\F1C9\"}i.icon.qrcode:before{content:\"\\F029\"}i.icon.barcode:before{content:\"\\F02A\"}i.icon.rss:before{content:\"\\F09E\"}i.icon.fork:before{content:\"\\F126\"}i.icon.html5:before{content:\"\\F13B\"}i.icon.css3:before{content:\"\\F13C\"}i.icon.rss.square:before{content:\"\\F143\"}i.icon.openid:before{content:\"\\F19B\"}i.icon.database:before{content:\"\\F1C0\"}i.icon.server:before{content:\"\\F233\"}i.icon.usb:before{content:\"\\F287\"}i.icon.bluetooth:before{content:\"\\F293\"}i.icon.bluetooth.alternative:before{content:\"\\F294\"}i.icon.heart:before{content:\"\\F004\"}i.icon.star:before{content:\"\\F005\"}i.icon.empty.star:before{content:\"\\F006\"}i.icon.thumbs.outline.up:before{content:\"\\F087\"}i.icon.thumbs.outline.down:before{content:\"\\F088\"}i.icon.star.half:before{content:\"\\F089\"}i.icon.empty.heart:before{content:\"\\F08A\"}i.icon.smile:before{content:\"\\F118\"}i.icon.frown:before{content:\"\\F119\"}i.icon.meh:before{content:\"\\F11A\"}i.icon.star.half.empty:before{content:\"\\F123\"}i.icon.thumbs.up:before{content:\"\\F164\"}i.icon.thumbs.down:before{content:\"\\F165\"}i.icon.music:before{content:\"\\F001\"}i.icon.video.play.outline:before{content:\"\\F01D\"}i.icon.volume.off:before{content:\"\\F026\"}i.icon.volume.down:before{content:\"\\F027\"}i.icon.volume.up:before{content:\"\\F028\"}i.icon.record:before{content:\"\\F03D\"}i.icon.step.backward:before{content:\"\\F048\"}i.icon.fast.backward:before{content:\"\\F049\"}i.icon.backward:before{content:\"\\F04A\"}i.icon.play:before{content:\"\\F04B\"}i.icon.pause:before{content:\"\\F04C\"}i.icon.stop:before{content:\"\\F04D\"}i.icon.forward:before{content:\"\\F04E\"}i.icon.fast.forward:before{content:\"\\F050\"}i.icon.step.forward:before{content:\"\\F051\"}i.icon.eject:before{content:\"\\F052\"}i.icon.unmute:before{content:\"\\F130\"}i.icon.mute:before{content:\"\\F131\"}i.icon.video.play:before{content:\"\\F144\"}i.icon.closed.captioning:before{content:\"\\F20A\"}i.icon.pause.circle:before{content:\"\\F28B\"}i.icon.pause.circle.outline:before{content:\"\\F28C\"}i.icon.stop.circle:before{content:\"\\F28D\"}i.icon.stop.circle.outline:before{content:\"\\F28E\"}i.icon.marker:before{content:\"\\F041\"}i.icon.coffee:before{content:\"\\F0F4\"}i.icon.food:before{content:\"\\F0F5\"}i.icon.building.outline:before{content:\"\\F0F7\"}i.icon.hospital:before{content:\"\\F0F8\"}i.icon.emergency:before{content:\"\\F0F9\"}i.icon.first.aid:before{content:\"\\F0FA\"}i.icon.military:before{content:\"\\F0FB\"}i.icon.h:before{content:\"\\F0FD\"}i.icon.location.arrow:before{content:\"\\F124\"}i.icon.compass:before{content:\"\\F14E\"}i.icon.space.shuttle:before{content:\"\\F197\"}i.icon.university:before{content:\"\\F19C\"}i.icon.building:before{content:\"\\F1AD\"}i.icon.paw:before{content:\"\\F1B0\"}i.icon.spoon:before{content:\"\\F1B1\"}i.icon.car:before{content:\"\\F1B9\"}i.icon.taxi:before{content:\"\\F1BA\"}i.icon.tree:before{content:\"\\F1BB\"}i.icon.bicycle:before{content:\"\\F206\"}i.icon.bus:before{content:\"\\F207\"}i.icon.ship:before{content:\"\\F21A\"}i.icon.motorcycle:before{content:\"\\F21C\"}i.icon.street.view:before{content:\"\\F21D\"}i.icon.hotel:before{content:\"\\F236\"}i.icon.train:before{content:\"\\F238\"}i.icon.subway:before{content:\"\\F239\"}i.icon.map.pin:before{content:\"\\F276\"}i.icon.map.signs:before{content:\"\\F277\"}i.icon.map.outline:before{content:\"\\F278\"}i.icon.map:before{content:\"\\F279\"}i.icon.table:before{content:\"\\F0CE\"}i.icon.columns:before{content:\"\\F0DB\"}i.icon.sort:before{content:\"\\F0DC\"}i.icon.sort.descending:before{content:\"\\F0DD\"}i.icon.sort.ascending:before{content:\"\\F0DE\"}i.icon.sort.alphabet.ascending:before{content:\"\\F15D\"}i.icon.sort.alphabet.descending:before{content:\"\\F15E\"}i.icon.sort.content.ascending:before{content:\"\\F160\"}i.icon.sort.content.descending:before{content:\"\\F161\"}i.icon.sort.numeric.ascending:before{content:\"\\F162\"}i.icon.sort.numeric.descending:before{content:\"\\F163\"}i.icon.font:before{content:\"\\F031\"}i.icon.bold:before{content:\"\\F032\"}i.icon.italic:before{content:\"\\F033\"}i.icon.text.height:before{content:\"\\F034\"}i.icon.text.width:before{content:\"\\F035\"}i.icon.align.left:before{content:\"\\F036\"}i.icon.align.center:before{content:\"\\F037\"}i.icon.align.right:before{content:\"\\F038\"}i.icon.align.justify:before{content:\"\\F039\"}i.icon.list:before{content:\"\\F03A\"}i.icon.outdent:before{content:\"\\F03B\"}i.icon.indent:before{content:\"\\F03C\"}i.icon.cut:before{content:\"\\F0C4\"}i.icon.copy:before{content:\"\\F0C5\"}i.icon.attach:before{content:\"\\F0C6\"}i.icon.save:before{content:\"\\F0C7\"}i.icon.content:before{content:\"\\F0C9\"}i.icon.unordered.list:before{content:\"\\F0CA\"}i.icon.ordered.list:before{content:\"\\F0CB\"}i.icon.strikethrough:before{content:\"\\F0CC\"}i.icon.underline:before{content:\"\\F0CD\"}i.icon.paste:before{content:\"\\F0EA\"}i.icon.unlinkify:before{content:\"\\F127\"}i.icon.superscript:before{content:\"\\F12B\"}i.icon.subscript:before{content:\"\\F12C\"}i.icon.header:before{content:\"\\F1DC\"}i.icon.paragraph:before{content:\"\\F1DD\"}i.icon.text.cursor:before{content:\"\\F246\"}i.icon.euro:before{content:\"\\F153\"}i.icon.pound:before{content:\"\\F154\"}i.icon.dollar:before{content:\"\\F155\"}i.icon.rupee:before{content:\"\\F156\"}i.icon.yen:before{content:\"\\F157\"}i.icon.ruble:before{content:\"\\F158\"}i.icon.won:before{content:\"\\F159\"}i.icon.bitcoin:before{content:\"\\F15A\"}i.icon.lira:before{content:\"\\F195\"}i.icon.shekel:before{content:\"\\F20B\"}i.icon.paypal:before{content:\"\\F1ED\"}i.icon.google.wallet:before{content:\"\\F1EE\"}i.icon.visa:before{content:\"\\F1F0\"}i.icon.mastercard:before{content:\"\\F1F1\"}i.icon.discover:before{content:\"\\F1F2\"}i.icon.american.express:before{content:\"\\F1F3\"}i.icon.paypal.card:before{content:\"\\F1F4\"}i.icon.stripe:before{content:\"\\F1F5\"}i.icon.japan.credit.bureau:before{content:\"\\F24B\"}i.icon.diners.club:before{content:\"\\F24C\"}i.icon.credit.card.alternative:before{content:\"\\F283\"}i.icon.twitter.square:before{content:\"\\F081\"}i.icon.facebook.square:before{content:\"\\F082\"}i.icon.linkedin.square:before{content:\"\\F08C\"}i.icon.github.square:before{content:\"\\F092\"}i.icon.twitter:before{content:\"\\F099\"}i.icon.facebook.f:before{content:\"\\F09A\"}i.icon.github:before{content:\"\\F09B\"}i.icon.pinterest.square:before{content:\"\\F0D3\"}i.icon.google.plus.square:before{content:\"\\F0D4\"}i.icon.google.plus:before{content:\"\\F0D5\"}i.icon.linkedin:before{content:\"\\F0E1\"}i.icon.github.alternate:before{content:\"\\F113\"}i.icon.maxcdn:before{content:\"\\F136\"}i.icon.youtube.square:before{content:\"\\F166\"}i.icon.youtube:before{content:\"\\F167\"}i.icon.xing:before{content:\"\\F168\"}i.icon.xing.square:before{content:\"\\F169\"}i.icon.youtube.play:before{content:\"\\F16A\"}i.icon.dropbox:before{content:\"\\F16B\"}i.icon.stack.overflow:before{content:\"\\F16C\"}i.icon.instagram:before{content:\"\\F16D\"}i.icon.flickr:before{content:\"\\F16E\"}i.icon.adn:before{content:\"\\F170\"}i.icon.bitbucket:before{content:\"\\F171\"}i.icon.bitbucket.square:before{content:\"\\F172\"}i.icon.tumblr:before{content:\"\\F173\"}i.icon.tumblr.square:before{content:\"\\F174\"}i.icon.apple:before{content:\"\\F179\"}i.icon.windows:before{content:\"\\F17A\"}i.icon.android:before{content:\"\\F17B\"}i.icon.linux:before{content:\"\\F17C\"}i.icon.dribble:before{content:\"\\F17D\"}i.icon.skype:before{content:\"\\F17E\"}i.icon.foursquare:before{content:\"\\F180\"}i.icon.trello:before{content:\"\\F181\"}i.icon.gittip:before{content:\"\\F184\"}i.icon.vk:before{content:\"\\F189\"}i.icon.weibo:before{content:\"\\F18A\"}i.icon.renren:before{content:\"\\F18B\"}i.icon.pagelines:before{content:\"\\F18C\"}i.icon.stack.exchange:before{content:\"\\F18D\"}i.icon.vimeo.square:before{content:\"\\F194\"}i.icon.slack:before{content:\"\\F198\"}i.icon.wordpress:before{content:\"\\F19A\"}i.icon.yahoo:before{content:\"\\F19E\"}i.icon.google:before{content:\"\\F1A0\"}i.icon.reddit:before{content:\"\\F1A1\"}i.icon.reddit.square:before{content:\"\\F1A2\"}i.icon.stumbleupon.circle:before{content:\"\\F1A3\"}i.icon.stumbleupon:before{content:\"\\F1A4\"}i.icon.delicious:before{content:\"\\F1A5\"}i.icon.digg:before{content:\"\\F1A6\"}i.icon.pied.piper:before{content:\"\\F1A7\"}i.icon.pied.piper.alternate:before{content:\"\\F1A8\"}i.icon.drupal:before{content:\"\\F1A9\"}i.icon.joomla:before{content:\"\\F1AA\"}i.icon.behance:before{content:\"\\F1B4\"}i.icon.behance.square:before{content:\"\\F1B5\"}i.icon.steam:before{content:\"\\F1B6\"}i.icon.steam.square:before{content:\"\\F1B7\"}i.icon.spotify:before{content:\"\\F1BC\"}i.icon.deviantart:before{content:\"\\F1BD\"}i.icon.soundcloud:before{content:\"\\F1BE\"}i.icon.vine:before{content:\"\\F1CA\"}i.icon.codepen:before{content:\"\\F1CB\"}i.icon.jsfiddle:before{content:\"\\F1CC\"}i.icon.rebel:before{content:\"\\F1D0\"}i.icon.empire:before{content:\"\\F1D1\"}i.icon.git.square:before{content:\"\\F1D2\"}i.icon.git:before{content:\"\\F1D3\"}i.icon.hacker.news:before{content:\"\\F1D4\"}i.icon.tencent.weibo:before{content:\"\\F1D5\"}i.icon.qq:before{content:\"\\F1D6\"}i.icon.wechat:before{content:\"\\F1D7\"}i.icon.slideshare:before{content:\"\\F1E7\"}i.icon.twitch:before{content:\"\\F1E8\"}i.icon.yelp:before{content:\"\\F1E9\"}i.icon.lastfm:before{content:\"\\F202\"}i.icon.lastfm.square:before{content:\"\\F203\"}i.icon.ioxhost:before{content:\"\\F208\"}i.icon.angellist:before{content:\"\\F209\"}i.icon.meanpath:before{content:\"\\F20C\"}i.icon.buysellads:before{content:\"\\F20D\"}i.icon.connectdevelop:before{content:\"\\F20E\"}i.icon.dashcube:before{content:\"\\F210\"}i.icon.forumbee:before{content:\"\\F211\"}i.icon.leanpub:before{content:\"\\F212\"}i.icon.sellsy:before{content:\"\\F213\"}i.icon.shirtsinbulk:before{content:\"\\F214\"}i.icon.simplybuilt:before{content:\"\\F215\"}i.icon.skyatlas:before{content:\"\\F216\"}i.icon.facebook:before{content:\"\\F230\"}i.icon.pinterest:before{content:\"\\F231\"}i.icon.whatsapp:before{content:\"\\F232\"}i.icon.viacoin:before{content:\"\\F237\"}i.icon.medium:before{content:\"\\F23A\"}i.icon.y.combinator:before{content:\"\\F23B\"}i.icon.optinmonster:before{content:\"\\F23C\"}i.icon.opencart:before{content:\"\\F23D\"}i.icon.expeditedssl:before{content:\"\\F23E\"}i.icon.gg:before{content:\"\\F260\"}i.icon.gg.circle:before{content:\"\\F261\"}i.icon.tripadvisor:before{content:\"\\F262\"}i.icon.odnoklassniki:before{content:\"\\F263\"}i.icon.odnoklassniki.square:before{content:\"\\F264\"}i.icon.pocket:before{content:\"\\F265\"}i.icon.wikipedia:before{content:\"\\F266\"}i.icon.safari:before{content:\"\\F267\"}i.icon.chrome:before{content:\"\\F268\"}i.icon.firefox:before{content:\"\\F269\"}i.icon.opera:before{content:\"\\F26A\"}i.icon.internet.explorer:before{content:\"\\F26B\"}i.icon.contao:before{content:\"\\F26D\"}i.icon.\\35 00px:before{content:\"\\F26E\"}i.icon.amazon:before{content:\"\\F270\"}i.icon.houzz:before{content:\"\\F27C\"}i.icon.vimeo:before{content:\"\\F27D\"}i.icon.black.tie:before{content:\"\\F27E\"}i.icon.fonticons:before{content:\"\\F280\"}i.icon.reddit.alien:before{content:\"\\F281\"}i.icon.microsoft.edge:before{content:\"\\F282\"}i.icon.codiepie:before{content:\"\\F284\"}i.icon.modx:before{content:\"\\F285\"}i.icon.fort.awesome:before{content:\"\\F286\"}i.icon.product.hunt:before{content:\"\\F288\"}i.icon.mixcloud:before{content:\"\\F289\"}i.icon.scribd:before{content:\"\\F28A\"}i.icon.gitlab:before{content:\"\\F296\"}i.icon.wpbeginner:before{content:\"\\F297\"}i.icon.wpforms:before{content:\"\\F298\"}i.icon.envira.gallery:before{content:\"\\F299\"}i.icon.glide:before{content:\"\\F2A5\"}i.icon.glide.g:before{content:\"\\F2A6\"}i.icon.viadeo:before{content:\"\\F2A9\"}i.icon.viadeo.square:before{content:\"\\F2AA\"}i.icon.snapchat:before{content:\"\\F2AB\"}i.icon.snapchat.ghost:before{content:\"\\F2AC\"}i.icon.snapchat.square:before{content:\"\\F2AD\"}i.icon.pied.piper.hat:before{content:\"\\F2AE\"}i.icon.first.order:before{content:\"\\F2B0\"}i.icon.yoast:before{content:\"\\F2B1\"}i.icon.themeisle:before{content:\"\\F2B2\"}i.icon.google.plus.circle:before{content:\"\\F2B3\"}i.icon.font.awesome:before{content:\"\\F2B4\"}i.icon.like:before{content:\"\\F004\"}i.icon.favorite:before{content:\"\\F005\"}i.icon.video:before{content:\"\\F008\"}i.icon.check:before{content:\"\\F00C\"}i.icon.cancel:before,i.icon.close:before,i.icon.delete:before,i.icon.x:before{content:\"\\F00D\"}i.icon.magnify:before,i.icon.zoom.in:before{content:\"\\F00E\"}i.icon.shutdown:before{content:\"\\F011\"}i.icon.clock:before,i.icon.time:before{content:\"\\F017\"}i.icon.play.circle.outline:before{content:\"\\F01D\"}i.icon.headphone:before{content:\"\\F025\"}i.icon.camera:before{content:\"\\F030\"}i.icon.video.camera:before{content:\"\\F03D\"}i.icon.picture:before{content:\"\\F03E\"}i.icon.compose:before,i.icon.pencil:before{content:\"\\F040\"}i.icon.point:before{content:\"\\F041\"}i.icon.tint:before{content:\"\\F043\"}i.icon.signup:before{content:\"\\F044\"}i.icon.plus.circle:before{content:\"\\F055\"}i.icon.question.circle:before{content:\"\\F059\"}i.icon.dont:before{content:\"\\F05E\"}i.icon.minimize:before{content:\"\\F066\"}i.icon.add:before{content:\"\\F067\"}i.icon.attention:before,i.icon.exclamation.circle:before{content:\"\\F06A\"}i.icon.eye:before{content:\"\\F06E\"}i.icon.exclamation.triangle:before{content:\"\\F071\"}i.icon.shuffle:before{content:\"\\F074\"}i.icon.chat:before{content:\"\\F075\"}i.icon.cart:before,i.icon.shopping.cart:before{content:\"\\F07A\"}i.icon.bar.graph:before{content:\"\\F080\"}i.icon.key:before{content:\"\\F084\"}i.icon.cogs:before{content:\"\\F085\"}i.icon.discussions:before{content:\"\\F086\"}i.icon.like.outline:before{content:\"\\F087\"}i.icon.dislike.outline:before{content:\"\\F088\"}i.icon.heart.outline:before{content:\"\\F08A\"}i.icon.log.out:before{content:\"\\F08B\"}i.icon.thumb.tack:before{content:\"\\F08D\"}i.icon.winner:before{content:\"\\F091\"}i.icon.phone:before{content:\"\\F095\"}i.icon.bookmark.outline:before{content:\"\\F097\"}i.icon.phone.square:before{content:\"\\F098\"}i.icon.credit.card:before{content:\"\\F09D\"}i.icon.hdd.outline:before{content:\"\\F0A0\"}i.icon.bullhorn:before{content:\"\\F0A1\"}i.icon.bell.outline:before{content:\"\\F0A2\"}i.icon.hand.outline.right:before{content:\"\\F0A4\"}i.icon.hand.outline.left:before{content:\"\\F0A5\"}i.icon.hand.outline.up:before{content:\"\\F0A6\"}i.icon.hand.outline.down:before{content:\"\\F0A7\"}i.icon.globe:before{content:\"\\F0AC\"}i.icon.wrench:before{content:\"\\F0AD\"}i.icon.briefcase:before{content:\"\\F0B1\"}i.icon.group:before{content:\"\\F0C0\"}i.icon.chain:before,i.icon.linkify:before{content:\"\\F0C1\"}i.icon.flask:before{content:\"\\F0C3\"}i.icon.bars:before,i.icon.sidebar:before{content:\"\\F0C9\"}i.icon.list.ul:before{content:\"\\F0CA\"}i.icon.list.ol:before,i.icon.numbered.list:before{content:\"\\F0CB\"}i.icon.magic:before{content:\"\\F0D0\"}i.icon.truck:before{content:\"\\F0D1\"}i.icon.currency:before{content:\"\\F0D6\"}i.icon.dropdown:before,i.icon.triangle.down:before{content:\"\\F0D7\"}i.icon.triangle.up:before{content:\"\\F0D8\"}i.icon.triangle.left:before{content:\"\\F0D9\"}i.icon.triangle.right:before{content:\"\\F0DA\"}i.icon.envelope:before{content:\"\\F0E0\"}i.icon.conversation:before{content:\"\\F0E6\"}i.icon.rain:before{content:\"\\F0E9\"}i.icon.clipboard:before{content:\"\\F0EA\"}i.icon.lightbulb:before{content:\"\\F0EB\"}i.icon.bell:before{content:\"\\F0F3\"}i.icon.ambulance:before{content:\"\\F0F9\"}i.icon.medkit:before{content:\"\\F0FA\"}i.icon.fighter.jet:before{content:\"\\F0FB\"}i.icon.beer:before{content:\"\\F0FC\"}i.icon.plus.square:before{content:\"\\F0FE\"}i.icon.computer:before{content:\"\\F108\"}i.icon.gamepad:before{content:\"\\F11B\"}i.icon.star.half.full:before{content:\"\\F123\"}i.icon.broken.chain:before{content:\"\\F127\"}i.icon.question:before{content:\"\\F128\"}i.icon.exclamation:before{content:\"\\F12A\"}i.icon.eraser:before{content:\"\\F12D\"}i.icon.microphone:before{content:\"\\F130\"}i.icon.microphone.slash:before{content:\"\\F131\"}i.icon.shield:before{content:\"\\F132\"}i.icon.target:before{content:\"\\F140\"}i.icon.play.circle:before{content:\"\\F144\"}i.icon.pencil.square:before{content:\"\\F14B\"}i.icon.eur:before{content:\"\\F153\"}i.icon.gbp:before{content:\"\\F154\"}i.icon.usd:before{content:\"\\F155\"}i.icon.inr:before{content:\"\\F156\"}i.icon.cny:before,i.icon.jpy:before,i.icon.rmb:before{content:\"\\F157\"}i.icon.rouble:before,i.icon.rub:before{content:\"\\F158\"}i.icon.krw:before{content:\"\\F159\"}i.icon.btc:before{content:\"\\F15A\"}i.icon.gratipay:before{content:\"\\F184\"}i.icon.zip:before{content:\"\\F187\"}i.icon.dot.circle.outline:before{content:\"\\F192\"}i.icon.try:before{content:\"\\F195\"}i.icon.graduation:before{content:\"\\F19D\"}i.icon.circle.outline:before{content:\"\\F1DB\"}i.icon.sliders:before{content:\"\\F1DE\"}i.icon.weixin:before{content:\"\\F1D7\"}i.icon.teletype:before,i.icon.tty:before{content:\"\\F1E4\"}i.icon.binoculars:before{content:\"\\F1E5\"}i.icon.power.cord:before{content:\"\\F1E6\"}i.icon.wi-fi:before{content:\"\\F1EB\"}i.icon.visa.card:before{content:\"\\F1F0\"}i.icon.mastercard.card:before{content:\"\\F1F1\"}i.icon.discover.card:before{content:\"\\F1F2\"}i.icon.american.express.card:before,i.icon.amex:before{content:\"\\F1F3\"}i.icon.stripe.card:before{content:\"\\F1F5\"}i.icon.bell.slash:before{content:\"\\F1F6\"}i.icon.bell.slash.outline:before{content:\"\\F1F7\"}i.icon.area.graph:before{content:\"\\F1FE\"}i.icon.pie.graph:before{content:\"\\F200\"}i.icon.line.graph:before{content:\"\\F201\"}i.icon.cc:before{content:\"\\F20A\"}i.icon.ils:before,i.icon.sheqel:before{content:\"\\F20B\"}i.icon.plus.cart:before{content:\"\\F217\"}i.icon.arrow.down.cart:before{content:\"\\F218\"}i.icon.detective:before{content:\"\\F21B\"}i.icon.venus:before{content:\"\\F221\"}i.icon.mars:before{content:\"\\F222\"}i.icon.mercury:before{content:\"\\F223\"}i.icon.intersex:before{content:\"\\F224\"}i.icon.female.homosexual:before,i.icon.venus.double:before{content:\"\\F226\"}i.icon.male.homosexual:before,i.icon.mars.double:before{content:\"\\F227\"}i.icon.venus.mars:before{content:\"\\F228\"}i.icon.mars.alternate:before,i.icon.mars.stroke:before{content:\"\\F229\"}i.icon.mars.stroke.vertical:before,i.icon.mars.vertical:before{content:\"\\F22A\"}i.icon.mars.horizontal:before,i.icon.mars.stroke.horizontal:before{content:\"\\F22B\"}i.icon.asexual:before{content:\"\\F22D\"}i.icon.facebook.official:before{content:\"\\F230\"}i.icon.user.plus:before{content:\"\\F234\"}i.icon.user.cancel:before,i.icon.user.close:before,i.icon.user.delete:before,i.icon.user.times:before,i.icon.user.x:before{content:\"\\F235\"}i.icon.bed:before{content:\"\\F236\"}i.icon.yc:before,i.icon.ycombinator:before{content:\"\\F23B\"}i.icon.battery.four:before{content:\"\\F240\"}i.icon.battery.three.quarters:before,i.icon.battery.three:before{content:\"\\F241\"}i.icon.battery.half:before,i.icon.battery.two:before{content:\"\\F242\"}i.icon.battery.one:before,i.icon.battery.quarter:before{content:\"\\F243\"}i.icon.battery.zero:before{content:\"\\F244\"}i.icon.i.cursor:before{content:\"\\F246\"}i.icon.japan.credit.bureau.card:before,i.icon.jcb:before{content:\"\\F24B\"}i.icon.diners.club.card:before{content:\"\\F24C\"}i.icon.balance:before{content:\"\\F24E\"}i.icon.hourglass.outline:before,i.icon.hourglass.zero:before{content:\"\\F250\"}i.icon.hourglass.one:before{content:\"\\F251\"}i.icon.hourglass.two:before{content:\"\\F252\"}i.icon.hourglass.three:before{content:\"\\F253\"}i.icon.hourglass.four:before{content:\"\\F254\"}i.icon.grab:before{content:\"\\F255\"}i.icon.hand.victory:before{content:\"\\F25B\"}i.icon.tm:before{content:\"\\F25C\"}i.icon.r.circle:before{content:\"\\F25D\"}i.icon.television:before{content:\"\\F26C\"}i.icon.five.hundred.pixels:before{content:\"\\F26E\"}i.icon.calendar.plus:before{content:\"\\F271\"}i.icon.calendar.minus:before{content:\"\\F272\"}i.icon.calendar.times:before{content:\"\\F273\"}i.icon.calendar.check:before{content:\"\\F274\"}i.icon.factory:before{content:\"\\F275\"}i.icon.commenting:before{content:\"\\F27A\"}i.icon.commenting.outline:before{content:\"\\F27B\"}i.icon.edge:before,i.icon.ms.edge:before{content:\"\\F282\"}i.icon.wordpress.beginner:before{content:\"\\F297\"}i.icon.wordpress.forms:before{content:\"\\F298\"}i.icon.envira:before{content:\"\\F299\"}i.icon.question.circle.outline:before{content:\"\\F29C\"}i.icon.ald:before,i.icon.als:before,i.icon.assistive.listening.devices:before{content:\"\\F2A2\"}i.icon.asl.interpreting:before{content:\"\\F2A3\"}i.icon.deaf:before{content:\"\\F2A4\"}i.icon.american.sign.language.interpreting:before{content:\"\\F2A3\"}i.icon.hard.of.hearing:before{content:\"\\F2A4\"}i.icon.signing:before{content:\"\\F2A7\"}i.icon.new.pied.piper:before{content:\"\\F2AE\"}i.icon.theme.isle:before{content:\"\\F2B2\"}i.icon.google.plus.official:before{content:\"\\F2B3\"}i.icon.fa:before{content:\"\\F2B4\"}.ui.image{position:relative;display:inline-block;vertical-align:middle;max-width:100%;background-color:transparent}img.ui.image{display:block}.ui.image img,.ui.image svg{display:block;max-width:100%;height:auto}.ui.hidden.image,.ui.hidden.images{display:none}.ui.hidden.transition.image,.ui.hidden.transition.images{display:block;visibility:hidden}.ui.disabled.image,.ui.disabled.images{cursor:default;opacity:.45}.ui.inline.image,.ui.inline.image img,.ui.inline.image svg{display:inline-block}.ui.top.aligned.image,.ui.top.aligned.image img,.ui.top.aligned.image svg,.ui.top.aligned.images .image{display:inline-block;vertical-align:top}.ui.middle.aligned.image,.ui.middle.aligned.image img,.ui.middle.aligned.image svg,.ui.middle.aligned.images .image{display:inline-block;vertical-align:middle}.ui.bottom.aligned.image,.ui.bottom.aligned.image img,.ui.bottom.aligned.image svg,.ui.bottom.aligned.images .image{display:inline-block;vertical-align:bottom}.ui.rounded.image,.ui.rounded.image>*,.ui.rounded.images .image,.ui.rounded.images .image>*{border-radius:.3125em}.ui.bordered.image img,.ui.bordered.image svg,.ui.bordered.images .image,.ui.bordered.images img,.ui.bordered.images svg,img.ui.bordered.image{border:1px solid rgba(0,0,0,.1)}.ui.circular.image,.ui.circular.images{overflow:hidden}.ui.circular.image,.ui.circular.image>*,.ui.circular.images .image,.ui.circular.images .image>*{border-radius:500rem}.ui.fluid.image,.ui.fluid.image img,.ui.fluid.image svg,.ui.fluid.images,.ui.fluid.images img,.ui.fluid.images svg{display:block;width:100%;height:auto}.ui.avatar.image,.ui.avatar.image img,.ui.avatar.image svg,.ui.avatar.images .image,.ui.avatar.images img,.ui.avatar.images svg{margin-right:.25em;display:inline-block;width:2em;height:2em;border-radius:500rem}.ui.spaced.image{display:inline-block!important;margin-left:.5em;margin-right:.5em}.ui[class*=\"left spaced\"].image{margin-left:.5em;margin-right:0}.ui[class*=\"right spaced\"].image{margin-left:0;margin-right:.5em}.ui.floated.image,.ui.floated.images{float:left;margin-right:1em;margin-bottom:1em}.ui.right.floated.image,.ui.right.floated.images{float:right;margin-right:0;margin-bottom:1em;margin-left:1em}.ui.floated.image:last-child,.ui.floated.images:last-child{margin-bottom:0}.ui.centered.image,.ui.centered.images{margin-left:auto;margin-right:auto}.ui.mini.image,.ui.mini.images .image,.ui.mini.images img,.ui.mini.images svg{width:35px;height:auto;font-size:.78571429rem}.ui.tiny.image,.ui.tiny.images .image,.ui.tiny.images img,.ui.tiny.images svg{width:80px;height:auto;font-size:.85714286rem}.ui.small.image,.ui.small.images .image,.ui.small.images img,.ui.small.images svg{width:150px;height:auto;font-size:.92857143rem}.ui.medium.image,.ui.medium.images .image,.ui.medium.images img,.ui.medium.images svg{width:300px;height:auto;font-size:1rem}.ui.large.image,.ui.large.images .image,.ui.large.images img,.ui.large.images svg{width:450px;height:auto;font-size:1.14285714rem}.ui.big.image,.ui.big.images .image,.ui.big.images img,.ui.big.images svg{width:600px;height:auto;font-size:1.28571429rem}.ui.huge.image,.ui.huge.images .image,.ui.huge.images img,.ui.huge.images svg{width:800px;height:auto;font-size:1.42857143rem}.ui.massive.image,.ui.massive.images .image,.ui.massive.images img,.ui.massive.images svg{width:960px;height:auto;font-size:1.71428571rem}.ui.images{font-size:0;margin:0 -.25rem}.ui.images .image,.ui.images img,.ui.images svg{display:inline-block;margin:0 .25rem .5rem}.ui.input{position:relative;font-weight:400;font-style:normal;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;color:rgba(0,0,0,.87)}.ui.input input{margin:0;max-width:100%;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0);text-align:left;line-height:1.2142em;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;padding:.67861429em 1em;background:#FFF;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);border-radius:.28571429rem;-webkit-transition:box-shadow .1s ease,border-color .1s ease;transition:box-shadow .1s ease,border-color .1s ease;box-shadow:none}.ui.input input::-webkit-input-placeholder{color:rgba(191,191,191,.87)}.ui.input input::-moz-placeholder{color:rgba(191,191,191,.87)}.ui.input input:-ms-input-placeholder{color:rgba(191,191,191,.87)}.ui.disabled.input,.ui.input input[disabled]{opacity:.45}.ui.disabled.input input,.ui.input input[disabled]{pointer-events:none}.ui.input input:active,.ui.input.down input{border-color:rgba(0,0,0,.3);background:#FAFAFA;color:rgba(0,0,0,.87);box-shadow:none}.ui.loading.loading.input>i.icon:before{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.loading.loading.input>i.icon:after{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:button-spin .6s linear;animation:button-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}.ui.input input:focus,.ui.input.focus input{border-color:#85B7D9;background:#FFF;color:rgba(0,0,0,.8);box-shadow:none}.ui.input input:focus::-webkit-input-placeholder,.ui.input.focus input::-webkit-input-placeholder{color:rgba(115,115,115,.87)}.ui.input input:focus::-moz-placeholder,.ui.input.focus input::-moz-placeholder{color:rgba(115,115,115,.87)}.ui.input input:focus:-ms-input-placeholder,.ui.input.focus input:-ms-input-placeholder{color:rgba(115,115,115,.87)}.ui.input.error input{background-color:#FFF6F6;border-color:#E0B4B4;color:#9F3A38;box-shadow:none}.ui.input.error input::-webkit-input-placeholder{color:#e7bdbc}.ui.input.error input::-moz-placeholder{color:#e7bdbc}.ui.input.error input:-ms-input-placeholder{color:#e7bdbc!important}.ui.input.error input:focus::-webkit-input-placeholder{color:#da9796}.ui.input.error input:focus::-moz-placeholder{color:#da9796}.ui.input.error input:focus:-ms-input-placeholder{color:#da9796!important}.ui.transparent.input input{border-color:transparent!important;background-color:transparent!important;padding:0!important;box-shadow:none!important}.ui.transparent.icon.input>i.icon{width:1.1em}.ui.transparent.icon.input>input{padding-left:0!important;padding-right:2em!important}.ui.transparent[class*=\"left icon\"].input>input{padding-left:2em!important;padding-right:0!important}.ui.transparent.inverted.input{color:#FFF}.ui.transparent.inverted.input input{color:inherit}.ui.transparent.inverted.input input::-webkit-input-placeholder{color:rgba(255,255,255,.5)}.ui.transparent.inverted.input input::-moz-placeholder{color:rgba(255,255,255,.5)}.ui.transparent.inverted.input input:-ms-input-placeholder{color:rgba(255,255,255,.5)}.ui.icon.input>i.icon{cursor:default;position:absolute;line-height:1;text-align:center;top:0;right:0;margin:0;height:100%;width:2.67142857em;opacity:.5;border-radius:0 .28571429rem .28571429rem 0;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.ui.icon.input>i.icon:not(.link){pointer-events:none}.ui.icon.input input{padding-right:2.67142857em!important}.ui.icon.input>i.icon:after,.ui.icon.input>i.icon:before{left:0;position:absolute;text-align:center;top:50%;width:100%;margin-top:-.5em}.ui.icon.input>i.link.icon{cursor:pointer}.ui.icon.input>i.circular.icon{top:.35em;right:.5em}.ui[class*=\"left icon\"].input>i.icon{right:auto;left:1px;border-radius:.28571429rem 0 0 .28571429rem}.ui[class*=\"left icon\"].input>i.circular.icon{right:auto;left:.5em}.ui[class*=\"left icon\"].input>input{padding-left:2.67142857em!important;padding-right:1em!important}.ui.icon.input>input:focus~i.icon{opacity:1}.ui.labeled.input>.label{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin:0;font-size:1em}.ui.labeled.input>.label:not(.corner){padding-top:.78571429em;padding-bottom:.78571429em}.ui.labeled.input:not([class*=\"corner labeled\"]) .label:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ui.labeled.input:not([class*=\"corner labeled\"]) .label:first-child+input{border-top-left-radius:0;border-bottom-left-radius:0;border-left-color:transparent}.ui.labeled.input:not([class*=\"corner labeled\"]) .label:first-child+input:focus{border-left-color:#85B7D9}.ui[class*=\"right labeled\"].input input{border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-color:transparent!important}.ui[class*=\"right labeled\"].input input+.label{border-top-left-radius:0;border-bottom-left-radius:0}.ui[class*=\"right labeled\"].input input:focus{border-right-color:#85B7D9!important}.ui.labeled.input .corner.label{top:1px;right:1px;font-size:.64285714em;border-radius:0 .28571429rem 0 0}.ui[class*=\"corner labeled\"]:not([class*=\"left corner labeled\"]).labeled.input input{padding-right:2.5em!important}.ui[class*=\"corner labeled\"].icon.input:not([class*=\"left corner labeled\"])>input{padding-right:3.25em!important}.ui[class*=\"corner labeled\"].icon.input:not([class*=\"left corner labeled\"])>.icon{margin-right:1.25em}.ui[class*=\"left corner labeled\"].labeled.input input{padding-left:2.5em!important}.ui[class*=\"left corner labeled\"].icon.input>input{padding-left:3.25em!important}.ui[class*=\"left corner labeled\"].icon.input>.icon{margin-left:1.25em}.ui.input>.ui.corner.label{top:1px;right:1px}.ui.input>.ui.left.corner.label{right:auto;left:1px}.ui.action.input>.button,.ui.action.input>.buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.ui.action.input>.button,.ui.action.input>.buttons>.button{padding-top:.78571429em;padding-bottom:.78571429em;margin:0}.ui.action.input:not([class*=\"left action\"])>input{border-top-right-radius:0!important;border-bottom-right-radius:0!important;border-right-color:transparent!important}.ui.action.input:not([class*=\"left action\"])>.button:not(:first-child),.ui.action.input:not([class*=\"left action\"])>.buttons:not(:first-child)>.button,.ui.action.input:not([class*=\"left action\"])>.dropdown:not(:first-child){border-radius:0}.ui.action.input:not([class*=\"left action\"])>.button:last-child,.ui.action.input:not([class*=\"left action\"])>.buttons:last-child>.button,.ui.action.input:not([class*=\"left action\"])>.dropdown:last-child{border-radius:0 .28571429rem .28571429rem 0}.ui.action.input:not([class*=\"left action\"]) input:focus{border-right-color:#85B7D9!important}.ui[class*=\"left action\"].input>input{border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left-color:transparent!important}.ui[class*=\"left action\"].input>.button,.ui[class*=\"left action\"].input>.buttons>.button,.ui[class*=\"left action\"].input>.dropdown{border-radius:0}.ui[class*=\"left action\"].input>.button:first-child,.ui[class*=\"left action\"].input>.buttons:first-child>.button,.ui[class*=\"left action\"].input>.dropdown:first-child{border-radius:.28571429rem 0 0 .28571429rem}.ui[class*=\"left action\"].input>input:focus{border-left-color:#85B7D9!important}.ui.inverted.input input{border:none}.ui.fluid.input{display:-webkit-box;display:-ms-flexbox;display:flex}.ui.fluid.input>input{width:0!important}.ui.mini.input{font-size:.78571429em}.ui.small.input{font-size:.92857143em}.ui.input{font-size:1em}.ui.large.input{font-size:1.14285714em}.ui.big.input{font-size:1.28571429em}.ui.huge.input{font-size:1.42857143em}.ui.massive.input{font-size:1.71428571em}.ui.label{display:inline-block;line-height:1;vertical-align:baseline;margin:0 .14285714em;background-color:#E8E8E8;background-image:none;padding:.5833em .833em;color:rgba(0,0,0,.6);text-transform:none;font-weight:700;border:0 solid transparent;border-radius:.28571429rem;-webkit-transition:background .1s ease;transition:background .1s ease}.ui.label:first-child{margin-left:0}.ui.label:last-child{margin-right:0}a.ui.label{cursor:pointer}.ui.label>a{cursor:pointer;color:inherit;opacity:.5;-webkit-transition:.1s opacity ease;transition:.1s opacity ease}.ui.label>a:hover{opacity:1}.ui.label>img{width:auto!important;vertical-align:middle;height:2.1666em!important}.ui.label>.icon{width:auto;margin:0 .75em 0 0}.ui.label>.detail{display:inline-block;vertical-align:top;font-weight:700;margin-left:1em;opacity:.8}.ui.label>.detail .icon{margin:0 .25em 0 0}.ui.label>.close.icon,.ui.label>.delete.icon{cursor:pointer;margin-right:0;margin-left:.5em;font-size:.92857143em;opacity:.5;-webkit-transition:background .1s ease;transition:background .1s ease}.ui.label>.delete.icon:hover{opacity:1}.ui.labels>.label{margin:0 .5em .5em 0}.ui.header>.ui.label{margin-top:-.29165em}.ui.attached.segment>.ui.top.left.attached.label,.ui.bottom.attached.segment>.ui.top.left.attached.label{border-top-left-radius:0}.ui.attached.segment>.ui.top.right.attached.label,.ui.bottom.attached.segment>.ui.top.right.attached.label{border-top-right-radius:0}.ui.top.attached.segment>.ui.bottom.left.attached.label{border-bottom-left-radius:0}.ui.top.attached.segment>.ui.bottom.right.attached.label{border-bottom-right-radius:0}.ui.top.attached.label+[class*=\"right floated\"]+*,.ui.top.attached.label:first-child+:not(.attached){margin-top:2rem!important}.ui.bottom.attached.label:first-child~:last-child:not(.attached){margin-top:0;margin-bottom:2rem!important}.ui.image.label{width:auto!important;margin-top:0;margin-bottom:0;max-width:9999px;vertical-align:baseline;text-transform:none;background:#E8E8E8;padding:.5833em .833em .5833em .5em;border-radius:.28571429rem;box-shadow:none}.ui.image.label img{display:inline-block;vertical-align:top;height:2.1666em;margin:-.5833em .5em -.5833em -.5em;border-radius:.28571429rem 0 0 .28571429rem}.ui.image.label .detail{background:rgba(0,0,0,.1);margin:-.5833em -.833em -.5833em .5em;padding:.5833em .833em;border-radius:0 .28571429rem .28571429rem 0}.ui.tag.label,.ui.tag.labels .label{margin-left:1em;position:relative;padding-left:1.5em;padding-right:1.5em;border-radius:0 .28571429rem .28571429rem 0;-webkit-transition:none;transition:none}.ui.tag.label:before,.ui.tag.labels .label:before{position:absolute;-webkit-transform:translateY(-50%) translateX(50%) rotate(-45deg);transform:translateY(-50%) translateX(50%) rotate(-45deg);top:50%;right:100%;content:'';background-color:inherit;background-image:none;width:1.56em;height:1.56em;-webkit-transition:none;transition:none}.ui.tag.label:after,.ui.tag.labels .label:after{position:absolute;content:'';top:50%;left:-.25em;margin-top:-.25em;background-color:#FFF!important;width:.5em;height:.5em;box-shadow:0 -1px 1px 0 rgba(0,0,0,.3);border-radius:500rem}.ui.corner.label{position:absolute;top:0;right:0;margin:0;padding:0;text-align:center;border-color:#E8E8E8;width:4em;height:4em;z-index:1;-webkit-transition:border-color .1s ease;transition:border-color .1s ease;background-color:transparent!important}.ui.corner.label:after{position:absolute;content:\"\";right:0;top:0;z-index:-1;width:0;height:0;background-color:transparent!important;border-top:0 solid transparent;border-right:4em solid transparent;border-bottom:4em solid transparent;border-left:0 solid transparent;border-right-color:inherit;-webkit-transition:border-color .1s ease;transition:border-color .1s ease}.ui.corner.label .icon{cursor:default;position:relative;top:.64285714em;left:.78571429em;font-size:1.14285714em;margin:0}.ui.left.corner.label,.ui.left.corner.label:after{right:auto;left:0}.ui.left.corner.label:after{border-top:4em solid transparent;border-right:4em solid transparent;border-bottom:0 solid transparent;border-left:0 solid transparent;border-top-color:inherit}.ui.left.corner.label .icon{left:-.78571429em}.ui.segment>.ui.corner.label{top:-1px;right:-1px}.ui.segment>.ui.left.corner.label{right:auto;left:-1px}.ui.ribbon.label{position:relative;margin:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;border-radius:0 .28571429rem .28571429rem 0;border-color:rgba(0,0,0,.15)}.ui.ribbon.label:after{position:absolute;content:'';top:100%;left:0;background-color:transparent!important;border-style:solid;border-width:0 1.2em 1.2em 0;border-color:transparent;border-right-color:inherit;width:0;height:0}.ui.ribbon.label{left:calc(-1rem - 1.2em);margin-right:-1.2em;padding-left:calc(1rem + 1.2em);padding-right:1.2em}.ui[class*=\"right ribbon\"].label{left:calc(100% + 1rem + 1.2em);padding-left:1.2em;padding-right:calc(1rem + 1.2em);text-align:left;-webkit-transform:translateX(-100%);transform:translateX(-100%);border-radius:.28571429rem 0 0 .28571429rem}.ui[class*=\"right ribbon\"].label:after{left:auto;right:0;border-style:solid;border-width:1.2em 1.2em 0 0;border-color:transparent;border-top-color:inherit}.ui.card .image>.ribbon.label,.ui.image>.ribbon.label{position:absolute;top:1rem}.ui.card .image>.ui.ribbon.label,.ui.image>.ui.ribbon.label{left:calc(.05rem - 1.2em)}.ui.card .image>.ui[class*=\"right ribbon\"].label,.ui.image>.ui[class*=\"right ribbon\"].label{left:calc(100% + -.05rem + 1.2em);padding-left:.833em}.ui.table td>.ui.ribbon.label{left:calc(-.78571429em - 1.2em)}.ui.table td>.ui[class*=\"right ribbon\"].label{left:calc(100% + .78571429em + 1.2em);padding-left:.833em}.ui.attached.label,.ui[class*=\"top attached\"].label{width:100%;position:absolute;margin:0;top:0;left:0;padding:.75em 1em;border-radius:.21428571rem .21428571rem 0 0}.ui[class*=\"bottom attached\"].label{top:auto;bottom:0;border-radius:0 0 .21428571rem .21428571rem}.ui[class*=\"top left attached\"].label{width:auto;margin-top:0!important;border-radius:.21428571rem 0 .28571429rem}.ui[class*=\"top right attached\"].label{width:auto;left:auto;right:0;border-radius:0 .21428571rem 0 .28571429rem}.ui[class*=\"bottom left attached\"].label{width:auto;top:auto;bottom:0;border-radius:0 .28571429rem 0 .21428571rem}.ui[class*=\"bottom right attached\"].label{top:auto;bottom:0;left:auto;right:0;width:auto;border-radius:.28571429rem 0 .21428571rem}.ui.label.disabled{opacity:.5}a.ui.label:hover,a.ui.labels .label:hover{background-color:#E0E0E0;border-color:#E0E0E0;background-image:none;color:rgba(0,0,0,.8)}.ui.labels a.label:hover:before,a.ui.label:hover:before{color:rgba(0,0,0,.8)}.ui.active.label{background-color:#D0D0D0;border-color:#D0D0D0;background-image:none;color:rgba(0,0,0,.95)}.ui.active.label:before{background-color:#D0D0D0;background-image:none;color:rgba(0,0,0,.95)}a.ui.active.label:hover,a.ui.labels .active.label:hover{background-color:#C8C8C8;border-color:#C8C8C8;background-image:none;color:rgba(0,0,0,.95)}.ui.labels a.active.label:ActiveHover:before,a.ui.active.label:ActiveHover:before{background-color:#C8C8C8;background-image:none;color:rgba(0,0,0,.95)}.ui.label.visible:not(.dropdown),.ui.labels.visible .label{display:inline-block!important}.ui.label.hidden,.ui.labels.hidden .label{display:none!important}.ui.red.label,.ui.red.labels .label{background-color:#DB2828!important;border-color:#DB2828!important;color:#FFF!important}.ui.red.labels .label:hover,a.ui.red.label:hover{background-color:#d01919!important;border-color:#d01919!important;color:#FFF!important}.ui.red.corner.label,.ui.red.corner.label:hover{background-color:transparent!important}.ui.red.ribbon.label{border-color:#b21e1e!important}.ui.basic.red.label{background-color:#FFF!important;color:#DB2828!important;border-color:#DB2828!important}.ui.basic.red.labels a.label:hover,a.ui.basic.red.label:hover{background-color:#FFF!important;color:#d01919!important;border-color:#d01919!important}.ui.orange.label,.ui.orange.labels .label{background-color:#F2711C!important;border-color:#F2711C!important;color:#FFF!important}.ui.orange.labels .label:hover,a.ui.orange.label:hover{background-color:#f26202!important;border-color:#f26202!important;color:#FFF!important}.ui.orange.corner.label,.ui.orange.corner.label:hover{background-color:transparent!important}.ui.orange.ribbon.label{border-color:#cf590c!important}.ui.basic.orange.label{background-color:#FFF!important;color:#F2711C!important;border-color:#F2711C!important}.ui.basic.orange.labels a.label:hover,a.ui.basic.orange.label:hover{background-color:#FFF!important;color:#f26202!important;border-color:#f26202!important}.ui.yellow.label,.ui.yellow.labels .label{background-color:#FBBD08!important;border-color:#FBBD08!important;color:#FFF!important}.ui.yellow.labels .label:hover,a.ui.yellow.label:hover{background-color:#eaae00!important;border-color:#eaae00!important;color:#FFF!important}.ui.yellow.corner.label,.ui.yellow.corner.label:hover{background-color:transparent!important}.ui.yellow.ribbon.label{border-color:#cd9903!important}.ui.basic.yellow.label{background-color:#FFF!important;color:#FBBD08!important;border-color:#FBBD08!important}.ui.basic.yellow.labels a.label:hover,a.ui.basic.yellow.label:hover{background-color:#FFF!important;color:#eaae00!important;border-color:#eaae00!important}.ui.olive.label,.ui.olive.labels .label{background-color:#B5CC18!important;border-color:#B5CC18!important;color:#FFF!important}.ui.olive.labels .label:hover,a.ui.olive.label:hover{background-color:#a7bd0d!important;border-color:#a7bd0d!important;color:#FFF!important}.ui.olive.corner.label,.ui.olive.corner.label:hover{background-color:transparent!important}.ui.olive.ribbon.label{border-color:#198f35!important}.ui.basic.olive.label{background-color:#FFF!important;color:#B5CC18!important;border-color:#B5CC18!important}.ui.basic.olive.labels a.label:hover,a.ui.basic.olive.label:hover{background-color:#FFF!important;color:#a7bd0d!important;border-color:#a7bd0d!important}.ui.green.label,.ui.green.labels .label{background-color:#21BA45!important;border-color:#21BA45!important;color:#FFF!important}.ui.green.labels .label:hover,a.ui.green.label:hover{background-color:#16ab39!important;border-color:#16ab39!important;color:#FFF!important}.ui.green.corner.label,.ui.green.corner.label:hover{background-color:transparent!important}.ui.green.ribbon.label{border-color:#198f35!important}.ui.basic.green.label{background-color:#FFF!important;color:#21BA45!important;border-color:#21BA45!important}.ui.basic.green.labels a.label:hover,a.ui.basic.green.label:hover{background-color:#FFF!important;color:#16ab39!important;border-color:#16ab39!important}.ui.teal.label,.ui.teal.labels .label{background-color:#00B5AD!important;border-color:#00B5AD!important;color:#FFF!important}.ui.teal.labels .label:hover,a.ui.teal.label:hover{background-color:#009c95!important;border-color:#009c95!important;color:#FFF!important}.ui.teal.corner.label,.ui.teal.corner.label:hover{background-color:transparent!important}.ui.teal.ribbon.label{border-color:#00827c!important}.ui.basic.teal.label{background-color:#FFF!important;color:#00B5AD!important;border-color:#00B5AD!important}.ui.basic.teal.labels a.label:hover,a.ui.basic.teal.label:hover{background-color:#FFF!important;color:#009c95!important;border-color:#009c95!important}.ui.blue.label,.ui.blue.labels .label{background-color:#2185D0!important;border-color:#2185D0!important;color:#FFF!important}.ui.blue.labels .label:hover,a.ui.blue.label:hover{background-color:#1678c2!important;border-color:#1678c2!important;color:#FFF!important}.ui.blue.corner.label,.ui.blue.corner.label:hover{background-color:transparent!important}.ui.blue.ribbon.label{border-color:#1a69a4!important}.ui.basic.blue.label{background-color:#FFF!important;color:#2185D0!important;border-color:#2185D0!important}.ui.basic.blue.labels a.label:hover,a.ui.basic.blue.label:hover{background-color:#FFF!important;color:#1678c2!important;border-color:#1678c2!important}.ui.violet.label,.ui.violet.labels .label{background-color:#6435C9!important;border-color:#6435C9!important;color:#FFF!important}.ui.violet.labels .label:hover,a.ui.violet.label:hover{background-color:#5829bb!important;border-color:#5829bb!important;color:#FFF!important}.ui.violet.corner.label,.ui.violet.corner.label:hover{background-color:transparent!important}.ui.violet.ribbon.label{border-color:#502aa1!important}.ui.basic.violet.label{background-color:#FFF!important;color:#6435C9!important;border-color:#6435C9!important}.ui.basic.violet.labels a.label:hover,a.ui.basic.violet.label:hover{background-color:#FFF!important;color:#5829bb!important;border-color:#5829bb!important}.ui.purple.label,.ui.purple.labels .label{background-color:#A333C8!important;border-color:#A333C8!important;color:#FFF!important}.ui.purple.labels .label:hover,a.ui.purple.label:hover{background-color:#9627ba!important;border-color:#9627ba!important;color:#FFF!important}.ui.purple.corner.label,.ui.purple.corner.label:hover{background-color:transparent!important}.ui.purple.ribbon.label{border-color:#82299f!important}.ui.basic.purple.label{background-color:#FFF!important;color:#A333C8!important;border-color:#A333C8!important}.ui.basic.purple.labels a.label:hover,a.ui.basic.purple.label:hover{background-color:#FFF!important;color:#9627ba!important;border-color:#9627ba!important}.ui.pink.label,.ui.pink.labels .label{background-color:#E03997!important;border-color:#E03997!important;color:#FFF!important}.ui.pink.labels .label:hover,a.ui.pink.label:hover{background-color:#e61a8d!important;border-color:#e61a8d!important;color:#FFF!important}.ui.pink.corner.label,.ui.pink.corner.label:hover{background-color:transparent!important}.ui.pink.ribbon.label{border-color:#c71f7e!important}.ui.basic.pink.label{background-color:#FFF!important;color:#E03997!important;border-color:#E03997!important}.ui.basic.pink.labels a.label:hover,a.ui.basic.pink.label:hover{background-color:#FFF!important;color:#e61a8d!important;border-color:#e61a8d!important}.ui.brown.label,.ui.brown.labels .label{background-color:#A5673F!important;border-color:#A5673F!important;color:#FFF!important}.ui.brown.labels .label:hover,a.ui.brown.label:hover{background-color:#975b33!important;border-color:#975b33!important;color:#FFF!important}.ui.brown.corner.label,.ui.brown.corner.label:hover{background-color:transparent!important}.ui.brown.ribbon.label{border-color:#805031!important}.ui.basic.brown.label{background-color:#FFF!important;color:#A5673F!important;border-color:#A5673F!important}.ui.basic.brown.labels a.label:hover,a.ui.basic.brown.label:hover{background-color:#FFF!important;color:#975b33!important;border-color:#975b33!important}.ui.grey.label,.ui.grey.labels .label{background-color:#767676!important;border-color:#767676!important;color:#FFF!important}.ui.grey.labels .label:hover,a.ui.grey.label:hover{background-color:#838383!important;border-color:#838383!important;color:#FFF!important}.ui.grey.corner.label,.ui.grey.corner.label:hover{background-color:transparent!important}.ui.grey.ribbon.label{border-color:#805031!important}.ui.basic.grey.label{background-color:#FFF!important;color:#767676!important;border-color:#767676!important}.ui.basic.grey.labels a.label:hover,a.ui.basic.grey.label:hover{background-color:#FFF!important;color:#838383!important;border-color:#838383!important}.ui.black.label,.ui.black.labels .label{background-color:#1B1C1D!important;border-color:#1B1C1D!important;color:#FFF!important}.ui.black.labels .label:hover,a.ui.black.label:hover{background-color:#27292a!important;border-color:#27292a!important;color:#FFF!important}.ui.black.corner.label,.ui.black.corner.label:hover{background-color:transparent!important}.ui.black.ribbon.label{border-color:#805031!important}.ui.basic.black.label{background-color:#FFF!important;color:#1B1C1D!important;border-color:#1B1C1D!important}.ui.basic.black.labels a.label:hover,a.ui.basic.black.label:hover{background-color:#FFF!important;color:#27292a!important;border-color:#27292a!important}.ui.basic.label{background:#FFF;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);box-shadow:none}a.ui.basic.label:hover{text-decoration:none;background:#FFF;color:#1e70bf;box-shadow:1px solid rgba(34,36,38,.15);box-shadow:none}.ui.basic.pointing.label:before{border-color:inherit}.ui.fluid.labels>.label,.ui.label.fluid{width:100%;box-sizing:border-box}.ui.inverted.label,.ui.inverted.labels .label{color:rgba(255,255,255,.9)!important}.ui.horizontal.label,.ui.horizontal.labels .label{margin:0 .5em 0 0;padding:.4em .833em;min-width:3em;text-align:center}.ui.circular.label,.ui.circular.labels .label{min-width:2em;min-height:2em;padding:.5em!important;line-height:1em;text-align:center;border-radius:500rem}.ui.empty.circular.label,.ui.empty.circular.labels .label{min-width:0;min-height:0;overflow:hidden;width:.5em;height:.5em;vertical-align:baseline}.ui.pointing.label{position:relative}.ui.attached.pointing.label{position:absolute}.ui.pointing.label:before{background-color:inherit;border-style:solid;border-color:inherit;position:absolute;content:'';-webkit-transform:rotate(45deg);transform:rotate(45deg);background-image:none;z-index:2;width:.6666em;height:.6666em;-webkit-transition:background .1s ease;transition:background .1s ease}.ui.pointing.label,.ui[class*=\"pointing above\"].label{margin-top:1em}.ui.pointing.label:before,.ui[class*=\"pointing above\"].label:before{border-width:1px 0 0 1px;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);top:0;left:50%}.ui[class*=\"bottom pointing\"].label,.ui[class*=\"pointing below\"].label{margin-top:0;margin-bottom:1em}.ui[class*=\"bottom pointing\"].label:before,.ui[class*=\"pointing below\"].label:before{border-width:0 1px 1px 0;right:auto;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);top:100%;left:50%}.ui[class*=\"left pointing\"].label{margin-top:0;margin-left:.6666em}.ui[class*=\"left pointing\"].label:before{border-width:0 0 1px 1px;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);bottom:auto;right:auto;top:50%;left:0}.ui[class*=\"right pointing\"].label{margin-top:0;margin-right:.6666em}.ui[class*=\"right pointing\"].label:before{border-width:1px 1px 0 0;-webkit-transform:translateX(50%) translateY(-50%) rotate(45deg);transform:translateX(50%) translateY(-50%) rotate(45deg);top:50%;right:0;bottom:auto;left:auto}.ui.basic.pointing.label:before,.ui.basic[class*=\"pointing above\"].label:before{margin-top:-1px}.ui.basic[class*=\"bottom pointing\"].label:before,.ui.basic[class*=\"pointing below\"].label:before{bottom:auto;top:100%;margin-top:1px}.ui.basic[class*=\"left pointing\"].label:before{top:50%;left:-1px}.ui.basic[class*=\"right pointing\"].label:before{top:50%;right:-1px}.ui.floating.label{position:absolute;z-index:100;top:-1em;left:100%;margin:0 0 0 -1.5em!important}.ui.mini.label,.ui.mini.labels .label{font-size:.64285714rem}.ui.tiny.label,.ui.tiny.labels .label{font-size:.71428571rem}.ui.small.label,.ui.small.labels .label{font-size:.78571429rem}.ui.label,.ui.labels .label{font-size:.85714286rem}.ui.large.label,.ui.large.labels .label{font-size:1rem}.ui.big.label,.ui.big.labels .label{font-size:1.28571429rem}.ui.huge.label,.ui.huge.labels .label{font-size:1.42857143rem}.ui.massive.label,.ui.massive.labels .label{font-size:1.71428571rem}.ui.list,ol.ui.list,ul.ui.list{list-style-type:none;margin:1em 0;padding:0}.ui.list:first-child,ol.ui.list:first-child,ul.ui.list:first-child{margin-top:0;padding-top:0}.ui.list:last-child,ol.ui.list:last-child,ul.ui.list:last-child{margin-bottom:0;padding-bottom:0}.ui.list .list>.item,.ui.list>.item,ol.ui.list li,ul.ui.list li{display:list-item;table-layout:fixed;list-style-type:none;list-style-position:outside;padding:.21428571em 0;line-height:1.14285714em}.ui.list>.item:after,.ui.list>.list>.item,ol.ui.list>li:first-child:after,ul.ui.list>li:first-child:after{content:'';display:block;height:0;clear:both;visibility:hidden}.ui.list .list>.item:first-child,.ui.list>.item:first-child,ol.ui.list li:first-child,ul.ui.list li:first-child{padding-top:0}.ui.list .list>.item:last-child,.ui.list>.item:last-child,ol.ui.list li:last-child,ul.ui.list li:last-child{padding-bottom:0}.ui.list .list,ol.ui.list ol,ul.ui.list ul{clear:both;margin:0;padding:.75em 0 .25em .5em}.ui.list .list>.item,ol.ui.list ol li,ul.ui.list ul li{padding:.14285714em 0;line-height:inherit}.ui.list .list>.item>i.icon,.ui.list>.item>i.icon{display:table-cell;margin:0;padding-top:.07142857em;padding-right:.28571429em;vertical-align:top;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.list .list>.item>i.icon:only-child,.ui.list>.item>i.icon:only-child{display:inline-block;vertical-align:top}.ui.list .list>.item>.image,.ui.list>.item>.image{display:table-cell;background-color:transparent;margin:0;vertical-align:top}.ui.list .list>.item>.image:not(:only-child):not(img),.ui.list>.item>.image:not(:only-child):not(img){padding-right:.5em}.ui.list .list>.item>.image img,.ui.list>.item>.image img{vertical-align:top}.ui.list .list>.item>.image:only-child,.ui.list .list>.item>img.image,.ui.list>.item>.image:only-child,.ui.list>.item>img.image{display:inline-block}.ui.list .list>.item>.content,.ui.list>.item>.content{line-height:1.14285714em}.ui.list .list>.item>.icon+.content,.ui.list .list>.item>.image+.content,.ui.list>.item>.icon+.content,.ui.list>.item>.image+.content{display:table-cell;padding:0 0 0 .5em;vertical-align:top}.ui.list .list>.item>img.image+.content,.ui.list>.item>img.image+.content{display:inline-block}.ui.list .list>.item>.content>.list,.ui.list>.item>.content>.list{margin-left:0;padding-left:0}.ui.list .list>.item .header,.ui.list>.item .header{display:block;margin:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:700;color:rgba(0,0,0,.87)}.ui.list .list>.item .description,.ui.list>.item .description{display:block;color:rgba(0,0,0,.7)}.ui.list .list>.item a,.ui.list>.item a{cursor:pointer}.ui.list .list>a.item,.ui.list>a.item{cursor:pointer;color:#4183C4}.ui.list .list>a.item:hover,.ui.list>a.item:hover{color:#1e70bf}.ui.list .list>a.item i.icon,.ui.list>a.item i.icon{color:rgba(0,0,0,.4)}.ui.list .list>.item a.header,.ui.list>.item a.header{cursor:pointer;color:#4183C4!important}.ui.list .list>.item a.header:hover,.ui.list>.item a.header:hover{color:#1e70bf!important}.ui[class*=\"left floated\"].list{float:left}.ui[class*=\"right floated\"].list{float:right}.ui.list .list>.item [class*=\"left floated\"],.ui.list>.item [class*=\"left floated\"]{float:left;margin:0 1em 0 0}.ui.list .list>.item [class*=\"right floated\"],.ui.list>.item [class*=\"right floated\"]{float:right;margin:0 0 0 1em}.ui.menu .ui.list .list>.item,.ui.menu .ui.list>.item{display:list-item;table-layout:fixed;background-color:transparent;list-style-type:none;list-style-position:outside;padding:.21428571em 0;line-height:1.14285714em}.ui.menu .ui.list .list>.item:before,.ui.menu .ui.list>.item:before{border:none;background:0 0}.ui.menu .ui.list .list>.item:first-child,.ui.menu .ui.list>.item:first-child{padding-top:0}.ui.menu .ui.list .list>.item:last-child,.ui.menu .ui.list>.item:last-child{padding-bottom:0}.ui.horizontal.list{display:inline-block;font-size:0}.ui.horizontal.list>.item{display:inline-block;margin-left:1em;font-size:1rem}.ui.horizontal.list:not(.celled)>.item:first-child{margin-left:0!important;padding-left:0!important}.ui.horizontal.list .list{padding-left:0;padding-bottom:0}.ui.horizontal.list .list>.item>.content,.ui.horizontal.list .list>.item>.icon,.ui.horizontal.list .list>.item>.image,.ui.horizontal.list>.item>.content,.ui.horizontal.list>.item>.icon,.ui.horizontal.list>.item>.image{vertical-align:middle}.ui.horizontal.list>.item:first-child,.ui.horizontal.list>.item:last-child{padding-top:.21428571em;padding-bottom:.21428571em}.ui.horizontal.list>.item>i.icon{margin:0;padding:0 .25em 0 0}.ui.horizontal.list>.item>.icon,.ui.horizontal.list>.item>.icon+.content{float:none;display:inline-block}.ui.list .list>.disabled.item,.ui.list>.disabled.item{pointer-events:none;color:rgba(40,40,40,.3)!important}.ui.inverted.list .list>.disabled.item,.ui.inverted.list>.disabled.item{color:rgba(225,225,225,.3)!important}.ui.list .list>a.item:hover .icon,.ui.list>a.item:hover .icon{color:rgba(0,0,0,.87)}.ui.inverted.list .list>a.item>.icon,.ui.inverted.list>a.item>.icon{color:rgba(255,255,255,.7)}.ui.inverted.list .list>.item .header,.ui.inverted.list>.item .header{color:rgba(255,255,255,.9)}.ui.inverted.list .list>.item .description,.ui.inverted.list>.item .description{color:rgba(255,255,255,.7)}.ui.inverted.list .list>a.item,.ui.inverted.list>a.item{cursor:pointer;color:rgba(255,255,255,.9)}.ui.inverted.list .list>a.item:hover,.ui.inverted.list>a.item:hover{color:#1e70bf}.ui.inverted.list .item a:not(.ui){color:rgba(255,255,255,.9)!important}.ui.inverted.list .item a:not(.ui):hover{color:#1e70bf!important}.ui.list [class*=\"top aligned\"],.ui.list[class*=\"top aligned\"] .content,.ui.list[class*=\"top aligned\"] .image{vertical-align:top!important}.ui.list [class*=\"middle aligned\"],.ui.list[class*=\"middle aligned\"] .content,.ui.list[class*=\"middle aligned\"] .image{vertical-align:middle!important}.ui.list [class*=\"bottom aligned\"],.ui.list[class*=\"bottom aligned\"] .content,.ui.list[class*=\"bottom aligned\"] .image{vertical-align:bottom!important}.ui.link.list .item,.ui.link.list .item a:not(.ui),.ui.link.list a.item{color:rgba(0,0,0,.4);-webkit-transition:.1s color ease;transition:.1s color ease}.ui.link.list .item a:not(.ui):hover,.ui.link.list a.item:hover{color:rgba(0,0,0,.8)}.ui.link.list .item a:not(.ui):active,.ui.link.list a.item:active{color:rgba(0,0,0,.9)}.ui.link.list .active.item,.ui.link.list .active.item a:not(.ui){color:rgba(0,0,0,.95)}.ui.inverted.link.list .item,.ui.inverted.link.list .item a:not(.ui),.ui.inverted.link.list a.item{color:rgba(255,255,255,.5)}.ui.inverted.link.list .active.item a:not(.ui),.ui.inverted.link.list .item a:not(.ui):active,.ui.inverted.link.list .item a:not(.ui):hover,.ui.inverted.link.list a.active.item,.ui.inverted.link.list a.item:active,.ui.inverted.link.list a.item:hover{color:#fff}.ui.selection.list .list>.item,.ui.selection.list>.item{cursor:pointer;background:0 0;padding:.5em;margin:0;color:rgba(0,0,0,.4);border-radius:.5em;-webkit-transition:.1s color ease,.1s padding-left ease,.1s background-color ease;transition:.1s color ease,.1s padding-left ease,.1s background-color ease}.ui.selection.list .list>.item:last-child,.ui.selection.list>.item:last-child{margin-bottom:0}.ui.selection.list.list>.item:hover,.ui.selection.list>.item:hover{background:rgba(0,0,0,.03);color:rgba(0,0,0,.8)}.ui.selection.list .list>.item:active,.ui.selection.list>.item:active{background:rgba(0,0,0,.05);color:rgba(0,0,0,.9)}.ui.selection.list .list>.item.active,.ui.selection.list>.item.active{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.inverted.selection.list>.item{background:0 0;color:rgba(255,255,255,.5)}.ui.inverted.selection.list>.item:hover{background:rgba(255,255,255,.02);color:#fff}.ui.inverted.selection.list>.item.active,.ui.inverted.selection.list>.item:active{background:rgba(255,255,255,.08);color:#fff}.ui.celled.selection.list .list>.item,.ui.celled.selection.list>.item,.ui.divided.selection.list .list>.item,.ui.divided.selection.list>.item{border-radius:0}.ui.animated.list>.item{-webkit-transition:.25s color ease .1s,.25s padding-left ease .1s,.25s background-color ease .1s;transition:.25s color ease .1s,.25s padding-left ease .1s,.25s background-color ease .1s}.ui.animated.list:not(.horizontal)>.item:hover{padding-left:1em}.ui.fitted.list:not(.selection) .list>.item,.ui.fitted.list:not(.selection)>.item{padding-left:0;padding-right:0}.ui.fitted.selection.list .list>.item,.ui.fitted.selection.list>.item{margin-left:-.5em;margin-right:-.5em}.ui.bulleted.list,ul.ui.list{margin-left:1.25rem}.ui.bulleted.list .list>.item,.ui.bulleted.list>.item,ul.ui.list li{position:relative}.ui.bulleted.list .list>.item:before,.ui.bulleted.list>.item:before,ul.ui.list li:before{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;top:auto;left:auto;font-weight:400;margin-left:-1.25rem;content:'\\2022';opacity:1;color:inherit;vertical-align:top}.ui.bulleted.list .list>a.item:before,.ui.bulleted.list>a.item:before,ul.ui.list li:before{color:rgba(0,0,0,.87)}.ui.bulleted.list .list,ul.ui.list ul{padding-left:1.25rem}.ui.horizontal.bulleted.list,ul.ui.horizontal.bulleted.list{margin-left:0}.ui.horizontal.bulleted.list>.item,ul.ui.horizontal.bulleted.list li{margin-left:1.75rem}.ui.horizontal.bulleted.list>.item:first-child,ul.ui.horizontal.bulleted.list li:first-child{margin-left:0}.ui.horizontal.bulleted.list>.item::before,ul.ui.horizontal.bulleted.list li::before{color:rgba(0,0,0,.87)}.ui.horizontal.bulleted.list>.item:first-child::before,ul.ui.horizontal.bulleted.list li:first-child::before{display:none}.ui.ordered.list,.ui.ordered.list .list,ol.ui.list,ol.ui.list ol{counter-reset:ordered;margin-left:1.25rem;list-style-type:none}.ui.ordered.list .list>.item,.ui.ordered.list>.item,ol.ui.list li{list-style-type:none;position:relative}.ui.ordered.list .list>.item:before,.ui.ordered.list>.item:before,ol.ui.list li:before{position:absolute;top:auto;left:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;margin-left:-1.25rem;counter-increment:ordered;content:counters(ordered,\".\") \" \";text-align:right;color:rgba(0,0,0,.87);vertical-align:middle;opacity:.8}.ui.ordered.inverted.list .list>.item:before,.ui.ordered.inverted.list>.item:before,ol.ui.inverted.list li:before{color:rgba(255,255,255,.7)}.ui.ordered.list>.item[data-value],.ui.ordered.list>.list>.item[data-value]{content:attr(data-value)}ol.ui.list li[value]:before{content:attr(value)}.ui.ordered.list .list,ol.ui.list ol{margin-left:1em}.ui.ordered.list .list>.item:before,ol.ui.list ol li:before{margin-left:-2em}.ui.ordered.horizontal.list,ol.ui.horizontal.list{margin-left:0}.ui.ordered.horizontal.list .list>.item:before,.ui.ordered.horizontal.list>.item:before,ol.ui.horizontal.list li:before{position:static;margin:0 .5em 0 0}.ui.divided.list>.item{border-top:1px solid rgba(34,36,38,.15)}.ui.divided.list .item .list>.item,.ui.divided.list .list>.item,.ui.divided.list .list>.item:first-child,.ui.divided.list>.item:first-child{border-top:none}.ui.divided.list:not(.horizontal) .list>.item:first-child{border-top-width:1px}.ui.divided.bulleted.list .list,.ui.divided.bulleted.list:not(.horizontal){margin-left:0;padding-left:0}.ui.divided.bulleted.list>.item:not(.horizontal){padding-left:1.25rem}.ui.divided.ordered.list{margin-left:0}.ui.divided.ordered.list .list>.item,.ui.divided.ordered.list>.item{padding-left:1.25rem}.ui.divided.ordered.list .item .list{margin-left:0;margin-right:0;padding-bottom:.21428571em}.ui.divided.ordered.list .item .list>.item{padding-left:1em}.ui.divided.selection.list .list>.item,.ui.divided.selection.list>.item{margin:0;border-radius:0}.ui.divided.horizontal.list{margin-left:0}.ui.divided.horizontal.list>.item:not(:first-child){padding-left:.5em}.ui.divided.horizontal.list>.item:not(:last-child){padding-right:.5em}.ui.divided.horizontal.list>.item{border-top:none;border-left:1px solid rgba(34,36,38,.15);margin:0;line-height:.6}.ui.horizontal.divided.list>.item:first-child{border-left:none}.ui.divided.inverted.horizontal.list>.item,.ui.divided.inverted.list>.item,.ui.divided.inverted.list>.list{border-color:rgba(255,255,255,.1)}.ui.celled.list>.item,.ui.celled.list>.list{border-top:1px solid rgba(34,36,38,.15);padding-left:.5em;padding-right:.5em}.ui.celled.list>.item:last-child{border-bottom:1px solid rgba(34,36,38,.15)}.ui.celled.list>.item:first-child,.ui.celled.list>.item:last-child{padding-top:.21428571em;padding-bottom:.21428571em}.ui.celled.list .item .list>.item{border-width:0}.ui.celled.list .list>.item:first-child{border-top-width:0}.ui.celled.bulleted.list{margin-left:0}.ui.celled.bulleted.list .list>.item,.ui.celled.bulleted.list>.item{padding-left:1.25rem}.ui.celled.bulleted.list .item .list{margin-left:-1.25rem;margin-right:-1.25rem;padding-bottom:.21428571em}.ui.celled.ordered.list{margin-left:0}.ui.celled.ordered.list .list>.item,.ui.celled.ordered.list>.item{padding-left:1.25rem}.ui.celled.ordered.list .item .list{margin-left:0;margin-right:0;padding-bottom:.21428571em}.ui.celled.ordered.list .list>.item{padding-left:1em}.ui.horizontal.celled.list{margin-left:0}.ui.horizontal.celled.list .list>.item,.ui.horizontal.celled.list>.item{border-top:none;border-left:1px solid rgba(34,36,38,.15);margin:0;padding-left:.5em;padding-right:.5em;line-height:.6}.ui.horizontal.celled.list .list>.item:last-child,.ui.horizontal.celled.list>.item:last-child{border-bottom:none;border-right:1px solid rgba(34,36,38,.15)}.ui.celled.inverted.horizontal.list .list>.item,.ui.celled.inverted.horizontal.list>.item,.ui.celled.inverted.list>.item,.ui.celled.inverted.list>.list{border-color:1px solid rgba(255,255,255,.1)}.ui.relaxed.list:not(.horizontal)>.item:not(:first-child){padding-top:.42857143em}.ui.relaxed.list:not(.horizontal)>.item:not(:last-child){padding-bottom:.42857143em}.ui.horizontal.relaxed.list .list>.item:not(:first-child),.ui.horizontal.relaxed.list>.item:not(:first-child){padding-left:1rem}.ui.horizontal.relaxed.list .list>.item:not(:last-child),.ui.horizontal.relaxed.list>.item:not(:last-child){padding-right:1rem}.ui[class*=\"very relaxed\"].list:not(.horizontal)>.item:not(:first-child){padding-top:.85714286em}.ui[class*=\"very relaxed\"].list:not(.horizontal)>.item:not(:last-child){padding-bottom:.85714286em}.ui.horizontal[class*=\"very relaxed\"].list .list>.item:not(:first-child),.ui.horizontal[class*=\"very relaxed\"].list>.item:not(:first-child){padding-left:1.5rem}.ui.horizontal[class*=\"very relaxed\"].list .list>.item:not(:last-child),.ui.horizontal[class*=\"very relaxed\"].list>.item:not(:last-child){padding-right:1.5rem}.ui.mini.list{font-size:.78571429em}.ui.tiny.list{font-size:.85714286em}.ui.small.list{font-size:.92857143em}.ui.list{font-size:1em}.ui.large.list{font-size:1.14285714em}.ui.big.list{font-size:1.28571429em}.ui.huge.list{font-size:1.42857143em}.ui.massive.list{font-size:1.71428571em}.ui.mini.horizontal.list .list>.item,.ui.mini.horizontal.list>.item{font-size:.78571429rem}.ui.tiny.horizontal.list .list>.item,.ui.tiny.horizontal.list>.item{font-size:.85714286rem}.ui.small.horizontal.list .list>.item,.ui.small.horizontal.list>.item{font-size:.92857143rem}.ui.horizontal.list .list>.item,.ui.horizontal.list>.item{font-size:1rem}.ui.large.horizontal.list .list>.item,.ui.large.horizontal.list>.item{font-size:1.14285714rem}.ui.big.horizontal.list .list>.item,.ui.big.horizontal.list>.item{font-size:1.28571429rem}.ui.huge.horizontal.list .list>.item,.ui.huge.horizontal.list>.item{font-size:1.42857143rem}.ui.massive.horizontal.list .list>.item,.ui.massive.horizontal.list>.item{font-size:1.71428571rem}.ui.loader{display:none;position:absolute;top:50%;left:50%;margin:0;text-align:center;z-index:1000;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.ui.loader:before{position:absolute;content:'';top:0;left:50%;border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.loader:after{position:absolute;content:'';top:0;left:50%;-webkit-animation:loader .6s linear;animation:loader .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}@-webkit-keyframes loader{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ui.mini.loader:after,.ui.mini.loader:before{width:1rem;height:1rem;margin:0 0 0 -.5rem}.ui.tiny.loader:after,.ui.tiny.loader:before{width:1.14285714rem;height:1.14285714rem;margin:0 0 0 -.57142857rem}.ui.small.loader:after,.ui.small.loader:before{width:1.71428571rem;height:1.71428571rem;margin:0 0 0 -.85714286rem}.ui.loader:after,.ui.loader:before{width:2.28571429rem;height:2.28571429rem;margin:0 0 0 -1.14285714rem}.ui.large.loader:after,.ui.large.loader:before{width:3.42857143rem;height:3.42857143rem;margin:0 0 0 -1.71428571rem}.ui.big.loader:after,.ui.big.loader:before{width:3.71428571rem;height:3.71428571rem;margin:0 0 0 -1.85714286rem}.ui.huge.loader:after,.ui.huge.loader:before{width:4.14285714rem;height:4.14285714rem;margin:0 0 0 -2.07142857rem}.ui.massive.loader:after,.ui.massive.loader:before{width:4.57142857rem;height:4.57142857rem;margin:0 0 0 -2.28571429rem}.ui.dimmer .loader{display:block}.ui.dimmer .ui.loader{color:rgba(255,255,255,.9)}.ui.dimmer .ui.loader:before{border-color:rgba(255,255,255,.15)}.ui.dimmer .ui.loader:after{border-color:#FFF transparent transparent}.ui.inverted.dimmer .ui.loader{color:rgba(0,0,0,.87)}.ui.inverted.dimmer .ui.loader:before{border-color:rgba(0,0,0,.1)}.ui.inverted.dimmer .ui.loader:after{border-color:#767676 transparent transparent}.ui.text.loader{width:auto!important;height:auto!important;text-align:center;font-style:normal}.ui.indeterminate.loader:after{-webkit-animation-direction:reverse;animation-direction:reverse;-webkit-animation-duration:1.2s;animation-duration:1.2s}.ui.loader.active,.ui.loader.visible{display:block}.ui.loader.disabled,.ui.loader.hidden{display:none}.ui.inverted.dimmer .ui.mini.loader,.ui.mini.loader{width:1rem;height:1rem;font-size:.78571429em}.ui.inverted.dimmer .ui.tiny.loader,.ui.tiny.loader{width:1.14285714rem;height:1.14285714rem;font-size:.85714286em}.ui.inverted.dimmer .ui.small.loader,.ui.small.loader{width:1.71428571rem;height:1.71428571rem;font-size:.92857143em}.ui.inverted.dimmer .ui.loader,.ui.loader{width:2.28571429rem;height:2.28571429rem;font-size:1em}.ui.inverted.dimmer .ui.large.loader,.ui.large.loader{width:3.42857143rem;height:3.42857143rem;font-size:1.14285714em}.ui.big.loader,.ui.inverted.dimmer .ui.big.loader{width:3.71428571rem;height:3.71428571rem;font-size:1.28571429em}.ui.huge.loader,.ui.inverted.dimmer .ui.huge.loader{width:4.14285714rem;height:4.14285714rem;font-size:1.42857143em}.ui.inverted.dimmer .ui.massive.loader,.ui.massive.loader{width:4.57142857rem;height:4.57142857rem;font-size:1.71428571em}.ui.mini.text.loader{min-width:1rem;padding-top:1.78571429rem}.ui.tiny.text.loader{min-width:1.14285714rem;padding-top:1.92857143rem}.ui.small.text.loader{min-width:1.71428571rem;padding-top:2.5rem}.ui.text.loader{min-width:2.28571429rem;padding-top:3.07142857rem}.ui.large.text.loader{min-width:3.42857143rem;padding-top:4.21428571rem}.ui.big.text.loader{min-width:3.71428571rem;padding-top:4.5rem}.ui.huge.text.loader{min-width:4.14285714rem;padding-top:4.92857143rem}.ui.massive.text.loader{min-width:4.57142857rem;padding-top:5.35714286rem}.ui.inverted.loader{color:rgba(255,255,255,.9)}.ui.inverted.loader:before{border-color:rgba(255,255,255,.15)}.ui.inverted.loader:after{border-top-color:#FFF}.ui.inline.loader{position:relative;vertical-align:middle;margin:0;left:0;top:0;-webkit-transform:none;transform:none}.ui.inline.loader.active,.ui.inline.loader.visible{display:inline-block}.ui.centered.inline.loader.active,.ui.centered.inline.loader.visible{display:block;margin-left:auto;margin-right:auto}.ui.rail{position:absolute;top:0;width:300px;height:100%}.ui.left.rail{left:auto;right:100%;padding:0 2rem 0 0;margin:0 2rem 0 0}.ui.right.rail{left:100%;right:auto;padding:0 0 0 2rem;margin:0 0 0 2rem}.ui.left.internal.rail{left:0;right:auto;padding:0 0 0 2rem;margin:0 0 0 2rem}.ui.right.internal.rail{left:auto;right:0;padding:0 2rem 0 0;margin:0 2rem 0 0}.ui.dividing.rail{width:302.5px}.ui.left.dividing.rail{padding:0 2.5rem 0 0;margin:0 2.5rem 0 0;border-right:1px solid rgba(34,36,38,.15)}.ui.right.dividing.rail{border-left:1px solid rgba(34,36,38,.15);padding:0 0 0 2.5rem;margin:0 0 0 2.5rem}.ui.close.rail{width:calc(300px + 1em)}.ui.close.left.rail{padding:0 1em 0 0;margin:0 1em 0 0}.ui.close.right.rail{padding:0 0 0 1em;margin:0 0 0 1em}.ui.very.close.rail{width:calc(300px + .5em)}.ui.very.close.left.rail{padding:0 .5em 0 0;margin:0 .5em 0 0}.ui.very.close.right.rail{padding:0 0 0 .5em;margin:0 0 0 .5em}.ui.attached.left.rail,.ui.attached.right.rail{padding:0;margin:0}.ui.mini.rail{font-size:.78571429rem}.ui.tiny.rail{font-size:.85714286rem}.ui.small.rail{font-size:.92857143rem}.ui.rail{font-size:1rem}.ui.large.rail{font-size:1.14285714rem}.ui.big.rail{font-size:1.28571429rem}.ui.huge.rail{font-size:1.42857143rem}.ui.massive.rail{font-size:1.71428571rem}.ui.reveal{display:inherit;position:relative!important;font-size:0!important}.ui.reveal>.visible.content{position:absolute!important;top:0!important;left:0!important;z-index:3!important;-webkit-transition:all .5s ease .1s;transition:all .5s ease .1s}.ui.reveal>.hidden.content{position:relative!important;z-index:2!important}.ui.active.reveal .visible.content,.ui.reveal:hover .visible.content{z-index:4!important}.ui.slide.reveal{position:relative!important;overflow:hidden!important;white-space:nowrap}.ui.slide.reveal>.content{display:block;width:100%;float:left;margin:0;-webkit-transition:-webkit-transform .5s ease .1s;transition:-webkit-transform .5s ease .1s;transition:transform .5s ease .1s;transition:transform .5s ease .1s,-webkit-transform .5s ease .1s}.ui.slide.reveal>.visible.content{position:relative!important}.ui.slide.reveal>.hidden.content{position:absolute!important;left:0!important;width:100%!important;-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}.ui.slide.active.reveal>.visible.content,.ui.slide.reveal:hover>.visible.content{-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}.ui.slide.active.reveal>.hidden.content,.ui.slide.reveal:hover>.hidden.content,.ui.slide.right.reveal>.visible.content{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.ui.slide.right.reveal>.hidden.content{-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}.ui.slide.right.active.reveal>.visible.content,.ui.slide.right.reveal:hover>.visible.content{-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}.ui.slide.right.active.reveal>.hidden.content,.ui.slide.right.reveal:hover>.hidden.content{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.ui.slide.up.reveal>.hidden.content{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}.ui.slide.up.active.reveal>.visible.content,.ui.slide.up.reveal:hover>.visible.content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important}.ui.slide.up.active.reveal>.hidden.content,.ui.slide.up.reveal:hover>.hidden.content{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}.ui.slide.down.reveal>.hidden.content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important}.ui.slide.down.active.reveal>.visible.content,.ui.slide.down.reveal:hover>.visible.content{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}.ui.slide.down.active.reveal>.hidden.content,.ui.slide.down.reveal:hover>.hidden.content{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}.ui.fade.reveal>.visible.content{opacity:1}.ui.fade.active.reveal>.visible.content,.ui.fade.reveal:hover>.visible.content{opacity:0}.ui.move.reveal{position:relative!important;overflow:hidden!important;white-space:nowrap}.ui.move.reveal>.content{display:block;float:left;margin:0;-webkit-transition:-webkit-transform .5s cubic-bezier(.175,.885,.32,1) .1s;transition:-webkit-transform .5s cubic-bezier(.175,.885,.32,1) .1s;transition:transform .5s cubic-bezier(.175,.885,.32,1) .1s;transition:transform .5s cubic-bezier(.175,.885,.32,1) .1s,-webkit-transform .5s cubic-bezier(.175,.885,.32,1) .1s}.ui.move.reveal>.visible.content{position:relative!important}.ui.move.reveal>.hidden.content{position:absolute!important;left:0!important;width:100%!important}.ui.move.active.reveal>.visible.content,.ui.move.reveal:hover>.visible.content{-webkit-transform:translateX(-100%)!important;transform:translateX(-100%)!important}.ui.move.right.active.reveal>.visible.content,.ui.move.right.reveal:hover>.visible.content{-webkit-transform:translateX(100%)!important;transform:translateX(100%)!important}.ui.move.up.active.reveal>.visible.content,.ui.move.up.reveal:hover>.visible.content{-webkit-transform:translateY(-100%)!important;transform:translateY(-100%)!important}.ui.move.down.active.reveal>.visible.content,.ui.move.down.reveal:hover>.visible.content{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}.ui.rotate.reveal>.visible.content{-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transform:rotate(0);transform:rotate(0)}.ui.rotate.reveal>.visible.content,.ui.rotate.right.reveal>.visible.content{-webkit-transform-origin:bottom right;transform-origin:bottom right}.ui.rotate.active.reveal>.visible.content,.ui.rotate.reveal:hover>.visible.content,.ui.rotate.right.active.reveal>.visible.content,.ui.rotate.right.reveal:hover>.visible.content{-webkit-transform:rotate(110deg);transform:rotate(110deg)}.ui.rotate.left.reveal>.visible.content{-webkit-transform-origin:bottom left;transform-origin:bottom left}.ui.rotate.left.active.reveal>.visible.content,.ui.rotate.left.reveal:hover>.visible.content{-webkit-transform:rotate(-110deg);transform:rotate(-110deg)}.ui.disabled.reveal:hover>.visible.visible.content{position:static!important;display:block!important;opacity:1!important;top:0!important;left:0!important;right:auto!important;bottom:auto!important;-webkit-transform:none!important;transform:none!important}.ui.disabled.reveal:hover>.hidden.hidden.content{display:none!important}.ui.visible.reveal{overflow:visible}.ui.instant.reveal>.content{-webkit-transition-delay:0s!important;transition-delay:0s!important}.ui.reveal>.content{font-size:1rem!important}.ui.segment{position:relative;background:#FFF;box-shadow:0 1px 2px 0 rgba(34,36,38,.15);margin:1rem 0;padding:1em;border-radius:.28571429rem;border:1px solid rgba(34,36,38,.15)}.ui.segment:first-child{margin-top:0}.ui.segment:last-child{margin-bottom:0}.ui.vertical.segment{margin:0;padding-left:0;padding-right:0;background:none;border-radius:0;box-shadow:none;border:none;border-bottom:1px solid rgba(34,36,38,.15)}.ui.vertical.segment:last-child{border-bottom:none}.ui.inverted.segment>.ui.header{color:#FFF}.ui[class*=\"bottom attached\"].segment>[class*=\"top attached\"].label{border-top-left-radius:0;border-top-right-radius:0}.ui[class*=\"top attached\"].segment>[class*=\"bottom attached\"].label{border-bottom-left-radius:0;border-bottom-right-radius:0}.ui.attached.segment:not(.top):not(.bottom)>[class*=\"top attached\"].label{border-top-left-radius:0;border-top-right-radius:0}.ui.attached.segment:not(.top):not(.bottom)>[class*=\"bottom attached\"].label{border-bottom-left-radius:0;border-bottom-right-radius:0}.ui.grid>.row>.ui.segment.column,.ui.grid>.ui.segment.column,.ui.page.grid.segment{padding-top:2em;padding-bottom:2em}.ui.grid.segment{margin:1rem 0;border-radius:.28571429rem}.ui.basic.table.segment{background:#FFF;border:1px solid rgba(34,36,38,.15);box-shadow:0 1px 2px 0 rgba(34,36,38,.15)}.ui[class*=\"very basic\"].table.segment{padding:1em}.ui.piled.segment,.ui.piled.segments{margin:3em 0;box-shadow:'';z-index:auto}.ui.piled.segment:first-child{margin-top:0}.ui.piled.segment:last-child{margin-bottom:0}.ui.piled.segment:after,.ui.piled.segment:before,.ui.piled.segments:after,.ui.piled.segments:before{background-color:#FFF;visibility:visible;content:'';display:block;height:100%;left:0;position:absolute;width:100%;border:1px solid rgba(34,36,38,.15);box-shadow:''}.ui.piled.segment:before,.ui.piled.segments:before{-webkit-transform:rotate(-1.2deg);transform:rotate(-1.2deg);top:0;z-index:-2}.ui.piled.segment:after,.ui.piled.segments:after{-webkit-transform:rotate(1.2deg);transform:rotate(1.2deg);top:0;z-index:-1}.ui[class*=\"top attached\"].piled.segment{margin-top:3em;margin-bottom:0}.ui.piled.segment[class*=\"top attached\"]:first-child{margin-top:0}.ui.piled.segment[class*=\"bottom attached\"]{margin-top:0;margin-bottom:3em}.ui.piled.segment[class*=\"bottom attached\"]:last-child{margin-bottom:0}.ui.stacked.segment{padding-bottom:1.4em}.ui.stacked.segment:after,.ui.stacked.segment:before,.ui.stacked.segments:after,.ui.stacked.segments:before{content:'';position:absolute;bottom:-3px;left:0;border-top:1px solid rgba(34,36,38,.15);background:rgba(0,0,0,.03);width:100%;height:6px;visibility:visible}.ui.stacked.segment:before,.ui.stacked.segments:before{display:none}.ui.tall.stacked.segment:before,.ui.tall.stacked.segments:before{display:block;bottom:0}.ui.stacked.inverted.segment:after,.ui.stacked.inverted.segment:before,.ui.stacked.inverted.segments:after,.ui.stacked.inverted.segments:before{background-color:rgba(0,0,0,.03);border-top:1px solid rgba(34,36,38,.35)}.ui.padded.segment{padding:1.5em}.ui[class*=\"very padded\"].segment{padding:3em}.ui.compact.segment{display:table}.ui.compact.segments{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.ui.compact.segments .segment,.ui.segments .compact.segment{display:block;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.ui.circular.segment{display:table-cell;padding:2em;text-align:center;vertical-align:middle;border-radius:500em}.ui.raised.segment,.ui.raised.segments{box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)}.ui.segments{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;margin:1rem 0;border:1px solid rgba(34,36,38,.15);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border-radius:.28571429rem}.ui.segments:first-child{margin-top:0}.ui.segments:last-child{margin-bottom:0}.ui.segments>.segment{top:0;bottom:0;border-radius:0;margin:0;width:auto;box-shadow:none;border:none;border-top:1px solid rgba(34,36,38,.15)}.ui.segments:not(.horizontal)>.segment:first-child{border-top:none;margin-top:0;bottom:0;margin-bottom:0;top:0;border-radius:.28571429rem .28571429rem 0 0}.ui.segments:not(.horizontal)>.segment:last-child{top:0;bottom:0;margin-top:0;margin-bottom:0;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),none;border-radius:0 0 .28571429rem .28571429rem}.ui.segments:not(.horizontal)>.segment:only-child{border-radius:.28571429rem}.ui.segments>.ui.segments{border-top:1px solid rgba(34,36,38,.15);margin:1rem}.ui.segments>.segments:first-child{border-top:none}.ui.segments>.segment+.segments:not(.horizontal){margin-top:0}.ui.horizontal.segments{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:0;background-color:#FFF;box-shadow:0 1px 2px 0 rgba(34,36,38,.15);margin:1rem 0;border-radius:.28571429rem;border:1px solid rgba(34,36,38,.15)}.ui.segments>.horizontal.segments{margin:0;background-color:transparent;border-radius:0;border:none;box-shadow:none;border-top:1px solid rgba(34,36,38,.15)}.ui.horizontal.segments>.segment{-webkit-box-flex:1;flex:1 1 auto;-ms-flex:1 1 0px;margin:0;min-width:0;background-color:transparent;border-radius:0;border:none;box-shadow:none;border-left:1px solid rgba(34,36,38,.15)}.ui.segments>.horizontal.segments:first-child{border-top:none}.ui.horizontal.segments>.segment:first-child{border-left:none}.ui.disabled.segment{opacity:.45;color:rgba(40,40,40,.3)}.ui.loading.segment{position:relative;cursor:default;pointer-events:none;text-shadow:none!important;color:transparent!important;-webkit-transition:all 0s linear;transition:all 0s linear}.ui.loading.segment:before{position:absolute;content:'';top:0;left:0;background:rgba(255,255,255,.8);width:100%;height:100%;border-radius:.28571429rem;z-index:100}.ui.loading.segment:after{position:absolute;content:'';top:50%;left:50%;margin:-1.5em 0 0 -1.5em;width:3em;height:3em;-webkit-animation:segment-spin .6s linear;animation:segment-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 rgba(0,0,0,.1) rgba(0,0,0,.1);border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent;visibility:visible;z-index:101}@-webkit-keyframes segment-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes segment-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ui.basic.segment{background:none;box-shadow:none;border:none;border-radius:0}.ui.clearing.segment:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}.ui.red.segment:not(.inverted){border-top:2px solid #DB2828}.ui.inverted.red.segment{background-color:#DB2828!important;color:#FFF!important}.ui.orange.segment:not(.inverted){border-top:2px solid #F2711C}.ui.inverted.orange.segment{background-color:#F2711C!important;color:#FFF!important}.ui.yellow.segment:not(.inverted){border-top:2px solid #FBBD08}.ui.inverted.yellow.segment{background-color:#FBBD08!important;color:#FFF!important}.ui.olive.segment:not(.inverted){border-top:2px solid #B5CC18}.ui.inverted.olive.segment{background-color:#B5CC18!important;color:#FFF!important}.ui.green.segment:not(.inverted){border-top:2px solid #21BA45}.ui.inverted.green.segment{background-color:#21BA45!important;color:#FFF!important}.ui.teal.segment:not(.inverted){border-top:2px solid #00B5AD}.ui.inverted.teal.segment{background-color:#00B5AD!important;color:#FFF!important}.ui.blue.segment:not(.inverted){border-top:2px solid #2185D0}.ui.inverted.blue.segment{background-color:#2185D0!important;color:#FFF!important}.ui.violet.segment:not(.inverted){border-top:2px solid #6435C9}.ui.inverted.violet.segment{background-color:#6435C9!important;color:#FFF!important}.ui.purple.segment:not(.inverted){border-top:2px solid #A333C8}.ui.inverted.purple.segment{background-color:#A333C8!important;color:#FFF!important}.ui.pink.segment:not(.inverted){border-top:2px solid #E03997}.ui.inverted.pink.segment{background-color:#E03997!important;color:#FFF!important}.ui.brown.segment:not(.inverted){border-top:2px solid #A5673F}.ui.inverted.brown.segment{background-color:#A5673F!important;color:#FFF!important}.ui.grey.segment:not(.inverted){border-top:2px solid #767676}.ui.inverted.grey.segment{background-color:#767676!important;color:#FFF!important}.ui.black.segment:not(.inverted){border-top:2px solid #1B1C1D}.ui.inverted.black.segment{background-color:#1B1C1D!important;color:#FFF!important}.ui[class*=\"left aligned\"].segment{text-align:left}.ui[class*=\"right aligned\"].segment{text-align:right}.ui[class*=\"center aligned\"].segment{text-align:center}.ui.floated.segment,.ui[class*=\"left floated\"].segment{float:left;margin-right:1em}.ui[class*=\"right floated\"].segment{float:right;margin-left:1em}.ui.inverted.segment{border:none;box-shadow:none}.ui.inverted.segment,.ui.primary.inverted.segment{background:#1B1C1D;color:rgba(255,255,255,.9)}.ui.inverted.segment .segment{color:rgba(0,0,0,.87)}.ui.inverted.segment .inverted.segment{color:rgba(255,255,255,.9)}.ui.inverted.attached.segment{border-color:#555}.ui.secondary.segment{background:#F3F4F5;color:rgba(0,0,0,.6)}.ui.secondary.inverted.segment{background:-webkit-linear-gradient(rgba(255,255,255,.2) 0,rgba(255,255,255,.2) 100%) #4c4f52;background:linear-gradient(rgba(255,255,255,.2) 0,rgba(255,255,255,.2) 100%) #4c4f52;color:rgba(255,255,255,.8)}.ui.tertiary.segment{background:#DCDDDE;color:rgba(0,0,0,.6)}.ui.tertiary.inverted.segment{background:-webkit-linear-gradient(rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 100%) #717579;background:linear-gradient(rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 100%) #717579;color:rgba(255,255,255,.8)}.ui.attached.segment{top:0;bottom:0;border-radius:0;margin:0 -1px;width:calc(100% + 2px);max-width:calc(100% + 2px);box-shadow:none;border:1px solid #D4D4D5}.ui.attached:not(.message)+.ui.attached.segment:not(.top){border-top:none}.ui[class*=\"top attached\"].segment{bottom:0;margin-bottom:0;top:0;margin-top:1rem;border-radius:.28571429rem .28571429rem 0 0}.ui.segment[class*=\"top attached\"]:first-child{margin-top:0}.ui.segment[class*=\"bottom attached\"]{bottom:0;margin-top:0;top:0;margin-bottom:1rem;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),none;border-radius:0 0 .28571429rem .28571429rem}.ui.segment[class*=\"bottom attached\"]:last-child{margin-bottom:0}.ui.mini.segment,.ui.mini.segments .segment{font-size:.78571429rem}.ui.tiny.segment,.ui.tiny.segments .segment{font-size:.85714286rem}.ui.small.segment,.ui.small.segments .segment{font-size:.92857143rem}.ui.segment,.ui.segments .segment{font-size:1rem}.ui.large.segment,.ui.large.segments .segment{font-size:1.14285714rem}.ui.big.segment,.ui.big.segments .segment{font-size:1.28571429rem}.ui.huge.segment,.ui.huge.segments .segment{font-size:1.42857143rem}.ui.massive.segment,.ui.massive.segments .segment{font-size:1.71428571rem}.ui.steps{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:1em 0;background:0 0;box-shadow:none;line-height:1.14285714em;border-radius:.28571429rem;border:1px solid rgba(34,36,38,.15)}.ui.steps:first-child{margin-top:0}.ui.steps:last-child{margin-bottom:0}.ui.steps .step{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;vertical-align:middle;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:1.14285714em 2em;background:#FFF;color:rgba(0,0,0,.87);box-shadow:none;border-radius:0;border:none;border-right:1px solid rgba(34,36,38,.15);-webkit-transition:background-color .1s ease,opacity .1s ease,color .1s ease,box-shadow .1s ease;transition:background-color .1s ease,opacity .1s ease,color .1s ease,box-shadow .1s ease}.ui.steps .step:after{position:absolute;z-index:2;content:'';top:50%;right:0;border:solid;background-color:#FFF;width:1.14285714em;height:1.14285714em;border-color:rgba(34,36,38,.15);border-width:0 1px 1px 0;-webkit-transition:background-color .1s ease,opacity .1s ease,color .1s ease,box-shadow .1s ease;transition:background-color .1s ease,opacity .1s ease,color .1s ease,box-shadow .1s ease;-webkit-transform:translateY(-50%) translateX(50%) rotate(-45deg);transform:translateY(-50%) translateX(50%) rotate(-45deg)}.ui.steps .step:first-child{padding-left:2em;border-radius:.28571429rem 0 0 .28571429rem}.ui.steps .step:last-child{border-radius:0 .28571429rem .28571429rem 0;border-right:none;margin-right:0}.ui.steps .step:only-child{border-radius:.28571429rem}.ui.steps .step .title{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1.14285714em;font-weight:700}.ui.steps .step>.title{width:100%}.ui.steps .step .description{font-weight:400;font-size:.92857143em;color:rgba(0,0,0,.87)}.ui.steps .step>.description{width:100%}.ui.steps .step .title~.description{margin-top:.25em}.ui.steps .step>.icon{line-height:1;font-size:2.5em;margin:0 1rem 0 0}.ui.steps .step>.icon,.ui.steps .step>.icon~.content{display:block;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-ms-flex-item-align:middle;-ms-grid-row-align:middle;align-self:middle}.ui.steps .step>.icon~.content{-webkit-box-flex:1 0 auto;-ms-flex-positive:1 0 auto;flex-grow:1 0 auto}.ui.steps:not(.vertical) .step>.icon{width:auto}.ui.steps .link.step,.ui.steps a.step{cursor:pointer}.ui.ordered.steps{counter-reset:ordered}.ui.ordered.steps .step:before{display:block;position:static;text-align:center;content:counters(ordered,\".\");-ms-flex-item-align:middle;-ms-grid-row-align:middle;align-self:middle;margin-right:1rem;font-size:2.5em;counter-increment:ordered;font-family:inherit;font-weight:700}.ui.ordered.steps .step>*{display:block;-ms-flex-item-align:middle;-ms-grid-row-align:middle;align-self:middle}.ui.vertical.steps{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:visible}.ui.vertical.steps .step{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;border-radius:0;padding:1.14285714em 2em;border-right:none;border-bottom:1px solid rgba(34,36,38,.15)}.ui.vertical.steps .step:first-child{padding:1.14285714em 2em;border-radius:.28571429rem .28571429rem 0 0}.ui.vertical.steps .step:last-child{border-bottom:none;border-radius:0 0 .28571429rem .28571429rem}.ui.vertical.steps .step:only-child{border-radius:.28571429rem}.ui.vertical.steps .step:after{top:50%;right:0;border-width:0 1px 1px 0;display:none}.ui.vertical.steps .active.step:after{display:block}.ui.vertical.steps .step:last-child:after{display:none}.ui.vertical.steps .active.step:last-child:after{display:block}@media only screen and (max-width:767px){.ui.steps{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;overflow:visible;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.steps .step{width:100%!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:0;padding:1.14285714em 2em}.ui.steps .step:first-child{padding:1.14285714em 2em;border-radius:.28571429rem .28571429rem 0 0}.ui.steps .step:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui.steps .step:after{display:none!important}.ui.steps .step .content{text-align:center}.ui.ordered.steps .step:before,.ui.steps .step>.icon{margin:0 0 1rem}}.ui.steps .link.step:hover,.ui.steps .link.step:hover::after,.ui.steps a.step:hover,.ui.steps a.step:hover::after{background:#F9FAFB;color:rgba(0,0,0,.8)}.ui.steps .link.step:active,.ui.steps .link.step:active::after,.ui.steps a.step:active,.ui.steps a.step:active::after{background:#F3F4F5;color:rgba(0,0,0,.9)}.ui.steps .step.active{cursor:auto;background:#F3F4F5}.ui.steps .step.active:after{background:#F3F4F5}.ui.steps .step.active .title{color:#4183C4}.ui.ordered.steps .step.active:before,.ui.steps .active.step .icon{color:rgba(0,0,0,.85)}.ui.steps .active.step:after,.ui.steps .step:after{display:block}.ui.steps .active.step:last-child:after,.ui.steps .step:last-child:after{display:none}.ui.steps .link.active.step:hover,.ui.steps .link.active.step:hover::after,.ui.steps a.active.step:hover,.ui.steps a.active.step:hover::after{cursor:pointer;background:#DCDDDE;color:rgba(0,0,0,.87)}.ui.ordered.steps .step.completed:before,.ui.steps .step.completed>.icon:before{color:#21BA45;font-family:Step;content:'\\E800'}.ui.steps .disabled.step{cursor:auto;background:#FFF;pointer-events:none}.ui.steps .disabled.step,.ui.steps .disabled.step .description,.ui.steps .disabled.step .title{color:rgba(40,40,40,.3)}.ui.steps .disabled.step:after{background:#FFF}@media only screen and (max-width:991px){.ui[class*=\"tablet stackable\"].steps{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;overflow:visible;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui[class*=\"tablet stackable\"].steps .step{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-radius:0;padding:1.14285714em 2em}.ui[class*=\"tablet stackable\"].steps .step:first-child{padding:1.14285714em 2em;border-radius:.28571429rem .28571429rem 0 0}.ui[class*=\"tablet stackable\"].steps .step:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui[class*=\"tablet stackable\"].steps .step:after{display:none!important}.ui[class*=\"tablet stackable\"].steps .step .content{text-align:center}.ui[class*=\"tablet stackable\"].ordered.steps .step:before,.ui[class*=\"tablet stackable\"].steps .step>.icon{margin:0 0 1rem}}.ui.fluid.steps{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.ui.attached.steps{width:calc(100% + 2px)!important;margin:0 -1px;max-width:calc(100% + 2px);border-radius:.28571429rem .28571429rem 0 0}.ui.attached.steps .step:first-child{border-radius:.28571429rem 0 0}.ui.attached.steps .step:last-child{border-radius:0 .28571429rem 0 0}.ui.bottom.attached.steps{margin:0 -1px;border-radius:0 0 .28571429rem .28571429rem}.ui.bottom.attached.steps .step:first-child{border-radius:0 0 0 .28571429rem}.ui.bottom.attached.steps .step:last-child{border-radius:0 0 .28571429rem}.ui.eight.steps,.ui.five.steps,.ui.four.steps,.ui.one.steps,.ui.seven.steps,.ui.six.steps,.ui.three.steps,.ui.two.steps{width:100%}.ui.eight.steps>.step,.ui.five.steps>.step,.ui.four.steps>.step,.ui.one.steps>.step,.ui.seven.steps>.step,.ui.six.steps>.step,.ui.three.steps>.step,.ui.two.steps>.step{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ui.one.steps>.step{width:100%}.ui.two.steps>.step{width:50%}.ui.three.steps>.step{width:33.333%}.ui.four.steps>.step{width:25%}.ui.five.steps>.step{width:20%}.ui.six.steps>.step{width:16.666%}.ui.seven.steps>.step{width:14.285%}.ui.eight.steps>.step{width:12.5%}.ui.mini.step,.ui.mini.steps .step{font-size:.78571429rem}.ui.tiny.step,.ui.tiny.steps .step{font-size:.85714286rem}.ui.small.step,.ui.small.steps .step{font-size:.92857143rem}.ui.step,.ui.steps .step{font-size:1rem}.ui.large.step,.ui.large.steps .step{font-size:1.14285714rem}.ui.big.step,.ui.big.steps .step{font-size:1.28571429rem}.ui.huge.step,.ui.huge.steps .step{font-size:1.42857143rem}.ui.massive.step,.ui.massive.steps .step{font-size:1.71428571rem}@font-face{font-family:Step;src:url(data:application/x-font-ttf;charset=utf-8;;base64,AAEAAAAOAIAAAwBgT1MvMj3hSQEAAADsAAAAVmNtYXDQEhm3AAABRAAAAUpjdnQgBkn/lAAABuwAAAAcZnBnbYoKeDsAAAcIAAAJkWdhc3AAAAAQAAAG5AAAAAhnbHlm32cEdgAAApAAAAC2aGVhZAErPHsAAANIAAAANmhoZWEHUwNNAAADgAAAACRobXR4CykAAAAAA6QAAAAMbG9jYQA4AFsAAAOwAAAACG1heHAApgm8AAADuAAAACBuYW1lzJ0aHAAAA9gAAALNcG9zdK69QJgAAAaoAAAAO3ByZXCSoZr/AAAQnAAAAFYAAQO4AZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6ADoAQNS/2oAWgMLAE8AAAABAAAAAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAADoAf//AAAAAOgA//8AABgBAAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAADpAKYABUAHEAZDwEAAQFCAAIBAmoAAQABagAAAGEUFxQDEisBFAcBBiInASY0PwE2Mh8BATYyHwEWA6QP/iAQLBD+6g8PTBAsEKQBbhAsEEwPAhYWEP4gDw8BFhAsEEwQEKUBbxAQTBAAAAH//f+xA18DCwAMABJADwABAQpDAAAACwBEFRMCESsBFA4BIi4CPgEyHgEDWXLG6MhuBnq89Lp+AV51xHR0xOrEdHTEAAAAAAEAAAABAADDeRpdXw889QALA+gAAAAAzzWYjQAAAADPNWBN//3/sQOkAwsAAAAIAAIAAAAAAAAAAQAAA1L/agBaA+gAAP/3A6QAAQAAAAAAAAAAAAAAAAAAAAMD6AAAA+gAAANZAAAAAAAAADgAWwABAAAAAwAWAAEAAAAAAAIABgATAG4AAAAtCZEAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEACAA1AAEAAAAAAAIABwA9AAEAAAAAAAMACABEAAEAAAAAAAQACABMAAEAAAAAAAUACwBUAAEAAAAAAAYACABfAAEAAAAAAAoAKwBnAAEAAAAAAAsAEwCSAAMAAQQJAAAAagClAAMAAQQJAAEAEAEPAAMAAQQJAAIADgEfAAMAAQQJAAMAEAEtAAMAAQQJAAQAEAE9AAMAAQQJAAUAFgFNAAMAAQQJAAYAEAFjAAMAAQQJAAoAVgFzAAMAAQQJAAsAJgHJQ29weXJpZ2h0IChDKSAyMDE0IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21mb250ZWxsb1JlZ3VsYXJmb250ZWxsb2ZvbnRlbGxvVmVyc2lvbiAxLjBmb250ZWxsb0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAEMAbwBwAHkAcgBpAGcAaAB0ACAAKABDACkAIAAyADAAMQA0ACAAYgB5ACAAbwByAGkAZwBpAG4AYQBsACAAYQB1AHQAaABvAHIAcwAgAEAAIABmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQBmAG8AbgB0AGUAbABsAG8AUgBlAGcAdQBsAGEAcgBmAG8AbgB0AGUAbABsAG8AZgBvAG4AdABlAGwAbABvAFYAZQByAHMAaQBvAG4AIAAxAC4AMABmAG8AbgB0AGUAbABsAG8ARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAQIBAwljaGVja21hcmsGY2lyY2xlAAAAAAEAAf//AA8AAAAAAAAAAAAAAAAAAAAAADIAMgML/7EDC/+xsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywB0MrsgACAENgQi2wBSywByNCIyCwACNCYbCAYrABYLAEKi2wBiwgIEUgsAJFY7ABRWJgRLABYC2wBywgIEUgsAArI7ECBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAgssQUFRbABYUQtsAkssAFgICCwCUNKsABQWCCwCSNCWbAKQ0qwAFJYILAKI0JZLbAKLCC4BABiILgEAGOKI2GwC0NgIIpgILALI0IjLbALLEtUWLEHAURZJLANZSN4LbAMLEtRWEtTWLEHAURZGyFZJLATZSN4LbANLLEADENVWLEMDEOwAWFCsAorWbAAQ7ACJUKxCQIlQrEKAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAJKiEjsAFhIIojYbAJKiEbsQEAQ2CwAiVCsAIlYbAJKiFZsAlDR7AKQ0dgsIBiILACRWOwAUViYLEAABMjRLABQ7AAPrIBAQFDYEItsA4ssQAFRVRYALAMI0IgYLABYbUNDQEACwBCQopgsQ0FK7BtKxsiWS2wDyyxAA4rLbAQLLEBDistsBEssQIOKy2wEiyxAw4rLbATLLEEDistsBQssQUOKy2wFSyxBg4rLbAWLLEHDistsBcssQgOKy2wGCyxCQ4rLbAZLLAIK7EABUVUWACwDCNCIGCwAWG1DQ0BAAsAQkKKYLENBSuwbSsbIlktsBossQAZKy2wGyyxARkrLbAcLLECGSstsB0ssQMZKy2wHiyxBBkrLbAfLLEFGSstsCAssQYZKy2wISyxBxkrLbAiLLEIGSstsCMssQkZKy2wJCwgPLABYC2wJSwgYLANYCBDI7ABYEOwAiVhsAFgsCQqIS2wJiywJSuwJSotsCcsICBHICCwAkVjsAFFYmAjYTgjIIpVWCBHICCwAkVjsAFFYmAjYTgbIVktsCgssQAFRVRYALABFrAnKrABFTAbIlktsCkssAgrsQAFRVRYALABFrAnKrABFTAbIlktsCosIDWwAWAtsCssALADRWOwAUVisAArsAJFY7ABRWKwACuwABa0AAAAAABEPiM4sSoBFSotsCwsIDwgRyCwAkVjsAFFYmCwAENhOC2wLSwuFzwtsC4sIDwgRyCwAkVjsAFFYmCwAENhsAFDYzgtsC8ssQIAFiUgLiBHsAAjQrACJUmKikcjRyNhIFhiGyFZsAEjQrIuAQEVFCotsDAssAAWsAQlsAQlRyNHI2GwBkUrZYouIyAgPIo4LbAxLLAAFrAEJbAEJSAuRyNHI2EgsAQjQrAGRSsgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjILAIQyCKI0cjRyNhI0ZgsARDsIBiYCCwACsgiophILACQ2BkI7ADQ2FkUFiwAkNhG7ADQ2BZsAMlsIBiYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsIBiYCMgsAArI7AEQ2CwACuwBSVhsAUlsIBisAQmYSCwBCVgZCOwAyVgZFBYIRsjIVkjICCwBCYjRmE4WS2wMiywABYgICCwBSYgLkcjRyNhIzw4LbAzLLAAFiCwCCNCICAgRiNHsAArI2E4LbA0LLAAFrADJbACJUcjRyNhsABUWC4gPCMhG7ACJbACJUcjRyNhILAFJbAEJUcjRyNhsAYlsAUlSbACJWGwAUVjIyBYYhshWWOwAUViYCMuIyAgPIo4IyFZLbA1LLAAFiCwCEMgLkcjRyNhIGCwIGBmsIBiIyAgPIo4LbA2LCMgLkawAiVGUlggPFkusSYBFCstsDcsIyAuRrACJUZQWCA8WS6xJgEUKy2wOCwjIC5GsAIlRlJYIDxZIyAuRrACJUZQWCA8WS6xJgEUKy2wOSywMCsjIC5GsAIlRlJYIDxZLrEmARQrLbA6LLAxK4ogIDywBCNCijgjIC5GsAIlRlJYIDxZLrEmARQrsARDLrAmKy2wOyywABawBCWwBCYgLkcjRyNhsAZFKyMgPCAuIzixJgEUKy2wPCyxCAQlQrAAFrAEJbAEJSAuRyNHI2EgsAQjQrAGRSsgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjIEewBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhsAIlRmE4IyA8IzgbISAgRiNHsAArI2E4IVmxJgEUKy2wPSywMCsusSYBFCstsD4ssDErISMgIDywBCNCIzixJgEUK7AEQy6wJistsD8ssAAVIEewACNCsgABARUUEy6wLCotsEAssAAVIEewACNCsgABARUUEy6wLCotsEEssQABFBOwLSotsEIssC8qLbBDLLAAFkUjIC4gRoojYTixJgEUKy2wRCywCCNCsEMrLbBFLLIAADwrLbBGLLIAATwrLbBHLLIBADwrLbBILLIBATwrLbBJLLIAAD0rLbBKLLIAAT0rLbBLLLIBAD0rLbBMLLIBAT0rLbBNLLIAADkrLbBOLLIAATkrLbBPLLIBADkrLbBQLLIBATkrLbBRLLIAADsrLbBSLLIAATsrLbBTLLIBADsrLbBULLIBATsrLbBVLLIAAD4rLbBWLLIAAT4rLbBXLLIBAD4rLbBYLLIBAT4rLbBZLLIAADorLbBaLLIAATorLbBbLLIBADorLbBcLLIBATorLbBdLLAyKy6xJgEUKy2wXiywMiuwNistsF8ssDIrsDcrLbBgLLAAFrAyK7A4Ky2wYSywMysusSYBFCstsGIssDMrsDYrLbBjLLAzK7A3Ky2wZCywMyuwOCstsGUssDQrLrEmARQrLbBmLLA0K7A2Ky2wZyywNCuwNystsGgssDQrsDgrLbBpLLA1Ky6xJgEUKy2waiywNSuwNistsGsssDUrsDcrLbBsLLA1K7A4Ky2wbSwrsAhlsAMkUHiwARUwLQAAAEu4AMhSWLEBAY5ZuQgACABjILABI0SwAyNwsgQoCUVSRLIKAgcqsQYBRLEkAYhRWLBAiFixBgNEsSYBiFFYuAQAiFixBgFEWVlZWbgB/4WwBI2xBQBEAAA=) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAoUAA4AAAAAEPQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABRAAAAEQAAABWPeFJAWNtYXAAAAGIAAAAOgAAAUrQEhm3Y3Z0IAAAAcQAAAAUAAAAHAZJ/5RmcGdtAAAB2AAABPkAAAmRigp4O2dhc3AAAAbUAAAACAAAAAgAAAAQZ2x5ZgAABtwAAACuAAAAtt9nBHZoZWFkAAAHjAAAADUAAAA2ASs8e2hoZWEAAAfEAAAAIAAAACQHUwNNaG10eAAAB+QAAAAMAAAADAspAABsb2NhAAAH8AAAAAgAAAAIADgAW21heHAAAAf4AAAAIAAAACAApgm8bmFtZQAACBgAAAF3AAACzcydGhxwb3N0AAAJkAAAACoAAAA7rr1AmHByZXAAAAm8AAAAVgAAAFaSoZr/eJxjYGTewTiBgZWBg6mKaQ8DA0MPhGZ8wGDIyMTAwMTAysyAFQSkuaYwOLxgeMHIHPQ/iyGKmZvBHyjMCJIDAPe9C2B4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGF4w/v8PUvCCAURLMELVAwEjG8OIBwBk5AavAAB4nGNgQANGDEbM3P83gjAAELQD4XicnVXZdtNWFJU8ZHASOmSgoA7X3DhQ68qEKRgwaSrFdiEdHAitBB2kDHTkncc+62uOQrtWH/m07n09JLR0rbYsls++R1tn2DrnRhwjKn0aiGvUoZKXA6msPZZK90lc13Uvj5UMBnFdthJPSZuonSRKat3sUC7xWOsqWSdYJ+PlIFZPVZ5noAziFB5lSUQbRBuplyZJ4onjJ4kWZxAfJUkgJaMQp9LIUEI1GsRS1aFM6dCr1xNx00DKRqMedVhU90PFJ8c1p9SsA0YqVznCFevVRr4bpwMve5DEOsGzrYcxHnisfpQqkIqR6cg/dkpOlIaBVHHUoVbi6DCTX/eRTCrNQKaMYkWl7oG43f102xYxPXQ6vi5KlUaqurnOKJrt0fGogygP2cbppNzQ2fbw5RlTVKtdcbPtQGYNXErJbHSfRAAdJlLj6QFONZwCqRn1R8XZ588BEslclKo8VTKHegOZMzt7cTHtbiersnCknwcyb3Z2452HQ6dXh3/R+hdM4cxHj+Jifj5C+lBqfiJOJKVGWMzyp4YfcVcgQrkxiAsXyuBThDl0RdrZZl3jtTH2hs/5SqlhPQna6KP4fgr9TiQrHGdRo/VInM1j13Wt3GdQS7W7Fzsyr0OVIu7vCwuuM+eEYZ4WC1VfnvneBTT/Bohn/EDeNIVL+5YpSrRvm6JMu2iKCu0SVKVdNsUU7YoppmnPmmKG9h1TzNKeMzLj/8vc55H7HN7xkJv2XeSmfQ+5ad9HbtoPkJtWITdtHblpLyA3rUZu2lWjOnYEGgZpF1IVQdA0svph3Fab9UDWjDR8aWDyLmLI+upER521tcofxX914gsHcmmip7siF5viLq/bFj483e6rj5pG3bDV+MaR8jAeRnocmtBZ+c3hv+1N3S6a7jKqMugBFUwKwABl7UAC0zrbCaT1mqf48gdgXIZ4zkpDtVSfO4am7+V5X/exOfG+x+3GLrdcd3kJWdYNcmP28N9SZKrrH+UtrVQnR6wrJ49VaxhDKrwour6SlHu0tRu/KKmy8l6U1srnk5CbPYMbQlu27mGwI0xpyiUeXlOlKD3UUo6yQyxvKco84JSLC1qGxLgOdQ9qa8TpoXoYGwshhqG0vRBwSCldFd+0ynfxHqtr2Oj4xRXh6XpyEhGf4ir7UfBU10b96A7avGbdMoMpVaqn+4xPsa/b9lFZaaSOsxe3VAfXNOsaORXTT+Rr4HRvOGjdAz1UfDRBI1U1x+jGKGM0ljXl3wR0MVZ+w2jVYvs93E+dpFWsuUuY7JsT9+C0u/0q+7WcW0bW/dcGvW3kip8jMb8tCvw7B2K3ZA3UO5OBGAvIWdAYxhYmdxiug23EbfY/Jqf/34aFRXJXOxq7eerD1ZNRJXfZ8rjLTXZZ16M2R9VOGvsIjS0PN+bY4XIstsRgQbb+wf8x7gF3aVEC4NDIZZiI2nShnurh6h6rsW04VxIBds2x43QAegAuQd8cu9bzCYD13CPnLsB9cgh2yCH4lByCz8i5BfA5OQRfkEMwIIdgl5w7AA/IIXhIDsEeOQSPyNkE+JIcgq/IIYjJIUjIuQ3wmByCJ+QQfE0OwTdGrk5k/pYH2QD6zqKbQKmdGhzaOGRGrk3Y+zxY9oFFZB9aROqRkesT6lMeLPV7i0j9wSJSfzRyY0L9iQdL/dkiUn+xiNRnxpeZIymvDp7zjg7+BJfqrV4AAAAAAQAB//8AD3icY2BkAALmJUwzGEQZZBwk+RkZGBmdGJgYmbIYgMwsoGSiiLgIs5A2owg7I5uSOqOaiT2jmZE8I5gQY17C/09BQEfg3yt+fh8gvYQxD0j68DOJiQn8U+DnZxQDcQUEljLmCwBpBgbG/3//b2SOZ+Zm4GEQcuAH2sblDLSEm8FFVJhJEGgLH6OSHpMdo5EcI3Nk0bEXJ/LYqvZ82VXHGFd6pKTkyCsQwQAAq+QkqAAAeJxjYGRgYADiw5VSsfH8Nl8ZuJlfAEUYzpvO6IXQCb7///7fyLyEmRvI5WBgAokCAFb/DJAAAAB4nGNgZGBgDvqfxRDF/IKB4f935iUMQBEUwAwAi5YFpgPoAAAD6AAAA1kAAAAAAAAAOABbAAEAAAADABYAAQAAAAAAAgAGABMAbgAAAC0JkQAAAAB4nHWQy2rCQBSG//HSi0JbWui2sypKabxgN4IgWHTTbqS4LTHGJBIzMhkFX6Pv0IfpS/RZ+puMpShNmMx3vjlz5mQAXOMbAvnzxJGzwBmjnAs4Rc9ykf7Zcon8YrmMKt4sn9C/W67gAYHlKm7wwQqidM5ogU/LAlfi0nIBF+LOcpH+0XKJ3LNcxq14tXxC71muYCJSy1Xci6+BWm11FIRG1gZ12W62OnK6lYoqStxYumsTKp3KvpyrxPhxrBxPLfc89oN17Op9uJ8nvk4jlciW09yrkZ/42jX+bFc93QRtY+ZyrtVSDm2GXGm18D3jhMasuo3G3/MwgMIKW2hEvKoQBhI12jrnNppooUOaMkMyM8+KkMBFTONizR1htpIy7nPMGSW0PjNisgOP3+WRH5MC7o9ZRR+tHsYT0u6MKPOSfTns7jBrREqyTDezs9/eU2x4WpvWcNeuS511JTE8qCF5H7u1BY1H72S3Ymi7aPD95/9+AN1fhEsAeJxjYGKAAC4G7ICZgYGRiZGZMzkjNTk7N7Eomy05syg5J5WBAQBE1QZBAABLuADIUlixAQGOWbkIAAgAYyCwASNEsAMjcLIEKAlFUkSyCgIHKrEGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAA) format('woff')}.ui.breadcrumb{line-height:1;display:inline-block;margin:0;vertical-align:middle}.ui.breadcrumb:first-child{margin-top:0}.ui.breadcrumb:last-child{margin-bottom:0}.ui.breadcrumb .divider{display:inline-block;opacity:.7;margin:0 .21428571rem;font-size:.92857143em;color:rgba(0,0,0,.4);vertical-align:baseline}.ui.breadcrumb a{color:#4183C4}.ui.breadcrumb a:hover{color:#1e70bf}.ui.breadcrumb .icon.divider{font-size:.85714286em;vertical-align:baseline}.ui.breadcrumb a.section{cursor:pointer}.ui.breadcrumb .section{display:inline-block;margin:0;padding:0}.ui.breadcrumb.segment{display:inline-block;padding:.78571429em 1em}.ui.breadcrumb .active.section{font-weight:700}.ui.mini.breadcrumb{font-size:.78571429rem}.ui.tiny.breadcrumb{font-size:.85714286rem}.ui.small.breadcrumb{font-size:.92857143rem}.ui.breadcrumb{font-size:1rem}.ui.large.breadcrumb{font-size:1.14285714rem}.ui.big.breadcrumb{font-size:1.28571429rem}.ui.huge.breadcrumb{font-size:1.42857143rem}.ui.massive.breadcrumb{font-size:1.71428571rem}.ui.form{position:relative;max-width:100%}.ui.form>p{margin:1em 0}.ui.form .field{clear:both;margin:0 0 1em}.ui.form .field:last-child,.ui.form .fields:last-child .field{margin-bottom:0}.ui.form .fields .field{clear:both;margin:0}.ui.form .field>label{display:block;margin:0 0 .28571429rem;color:rgba(0,0,0,.87);font-size:.92857143em;font-weight:700;text-transform:none}.ui.form input:not([type]),.ui.form input[type=text],.ui.form input[type=email],.ui.form input[type=search],.ui.form input[type=password],.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=tel],.ui.form input[type=time],.ui.form input[type=file],.ui.form input[type=url],.ui.form input[type=number],.ui.form textarea{width:100%;vertical-align:top}.ui.form ::-webkit-datetime-edit,.ui.form ::-webkit-inner-spin-button{height:1.2142em}.ui.form input:not([type]),.ui.form input[type=text],.ui.form input[type=email],.ui.form input[type=search],.ui.form input[type=password],.ui.form input[type=date],.ui.form input[type=datetime-local],.ui.form input[type=tel],.ui.form input[type=time],.ui.form input[type=file],.ui.form input[type=url],.ui.form input[type=number]{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;margin:0;outline:0;-webkit-appearance:none;tap-highlight-color:rgba(255,255,255,0);line-height:1.2142em;padding:.67861429em 1em;font-size:1em;background:#FFF;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);border-radius:.28571429rem;box-shadow:0 0 0 0 transparent inset;-webkit-transition:color .1s ease,border-color .1s ease;transition:color .1s ease,border-color .1s ease}.ui.form textarea{margin:0;-webkit-appearance:none;tap-highlight-color:rgba(255,255,255,0);padding:.78571429em 1em;background:#FFF;border:1px solid rgba(34,36,38,.15);outline:0;color:rgba(0,0,0,.87);border-radius:.28571429rem;box-shadow:0 0 0 0 transparent inset;-webkit-transition:color .1s ease,border-color .1s ease;transition:color .1s ease,border-color .1s ease;font-size:1em;line-height:1.2857;resize:vertical}.ui.form textarea:not([rows]){height:12em;min-height:8em;max-height:24em}.ui.form input[type=checkbox],.ui.form textarea{vertical-align:top}.ui.form input.attached{width:auto}.ui.form select{display:block;height:auto;width:100%;background:#FFF;border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;box-shadow:0 0 0 0 transparent inset;padding:.62em 1em;color:rgba(0,0,0,.87);-webkit-transition:color .1s ease,border-color .1s ease;transition:color .1s ease,border-color .1s ease}.ui.form .field>.selection.dropdown{width:100%}.ui.form .field>.selection.dropdown>.dropdown.icon{float:right}.ui.form .inline.field>.selection.dropdown,.ui.form .inline.fields .field>.selection.dropdown{width:auto}.ui.form .inline.field>.selection.dropdown>.dropdown.icon,.ui.form .inline.fields .field>.selection.dropdown>.dropdown.icon{float:none}.ui.form .field .ui.input,.ui.form .fields .field .ui.input,.ui.form .wide.field .ui.input{width:100%}.ui.form .inline.field:not(.wide) .ui.input,.ui.form .inline.fields .field:not(.wide) .ui.input{width:auto;vertical-align:middle}.ui.form .field .ui.input input,.ui.form .fields .field .ui.input input{width:auto}.ui.form .eight.fields .ui.input input,.ui.form .five.fields .ui.input input,.ui.form .four.fields .ui.input input,.ui.form .nine.fields .ui.input input,.ui.form .seven.fields .ui.input input,.ui.form .six.fields .ui.input input,.ui.form .ten.fields .ui.input input,.ui.form .three.fields .ui.input input,.ui.form .two.fields .ui.input input,.ui.form .wide.field .ui.input input{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;width:0}.ui.form .error.message,.ui.form .success.message,.ui.form .warning.message{display:none}.ui.form .message:first-child{margin-top:0}.ui.form .field .prompt.label{white-space:normal;background:#FFF!important;border:1px solid #E0B4B4!important;color:#9F3A38!important}.ui.form .inline.field .prompt,.ui.form .inline.fields .field .prompt{vertical-align:top;margin:-.25em 0 -.5em .5em}.ui.form .inline.field .prompt:before,.ui.form .inline.fields .field .prompt:before{border-width:0 0 1px 1px;bottom:auto;right:auto;top:50%;left:0}.ui.form .field.field input:-webkit-autofill{box-shadow:0 0 0 100px ivory inset!important;border-color:#E5DFA1!important}.ui.form .field.field input:-webkit-autofill:focus{box-shadow:0 0 0 100px ivory inset!important;border-color:#D5C315!important}.ui.form .error.error input:-webkit-autofill{box-shadow:0 0 0 100px #FFFAF0 inset!important;border-color:#E0B4B4!important}.ui.form ::-webkit-input-placeholder{color:rgba(191,191,191,.87)}.ui.form :-ms-input-placeholder{color:rgba(191,191,191,.87)}.ui.form ::-moz-placeholder{color:rgba(191,191,191,.87)}.ui.form :focus::-webkit-input-placeholder{color:rgba(115,115,115,.87)}.ui.form :focus:-ms-input-placeholder{color:rgba(115,115,115,.87)}.ui.form :focus::-moz-placeholder{color:rgba(115,115,115,.87)}.ui.form .error ::-webkit-input-placeholder{color:#e7bdbc}.ui.form .error :-ms-input-placeholder{color:#e7bdbc!important}.ui.form .error ::-moz-placeholder{color:#e7bdbc}.ui.form .error :focus::-webkit-input-placeholder{color:#da9796}.ui.form .error :focus:-ms-input-placeholder{color:#da9796!important}.ui.form .error :focus::-moz-placeholder{color:#da9796}.ui.form input:not([type]):focus,.ui.form input[type=text]:focus,.ui.form input[type=email]:focus,.ui.form input[type=search]:focus,.ui.form input[type=password]:focus,.ui.form input[type=date]:focus,.ui.form input[type=datetime-local]:focus,.ui.form input[type=tel]:focus,.ui.form input[type=time]:focus,.ui.form input[type=file]:focus,.ui.form input[type=url]:focus,.ui.form input[type=number]:focus{color:rgba(0,0,0,.95);border-color:#85B7D9;border-radius:.28571429rem;background:#FFF;box-shadow:0 0 0 0 rgba(34,36,38,.35) inset}.ui.form textarea:focus{color:rgba(0,0,0,.95);border-color:#85B7D9;border-radius:.28571429rem;background:#FFF;box-shadow:0 0 0 0 rgba(34,36,38,.35) inset;-webkit-appearance:none}.ui.form.success .success.message:not(:empty){display:block}.ui.form.success .compact.success.message:not(:empty){display:inline-block}.ui.form.success .icon.success.message:not(:empty){display:-webkit-box;display:-ms-flexbox;display:flex}.ui.form.warning .warning.message:not(:empty){display:block}.ui.form.warning .compact.warning.message:not(:empty){display:inline-block}.ui.form.warning .icon.warning.message:not(:empty){display:-webkit-box;display:-ms-flexbox;display:flex}.ui.form.error .error.message:not(:empty){display:block}.ui.form.error .compact.error.message:not(:empty){display:inline-block}.ui.form.error .icon.error.message:not(:empty){display:-webkit-box;display:-ms-flexbox;display:flex}.ui.form .field.error .input,.ui.form .field.error label,.ui.form .fields.error .field .input,.ui.form .fields.error .field label{color:#9F3A38}.ui.form .field.error .corner.label,.ui.form .fields.error .field .corner.label{border-color:#9F3A38;color:#FFF}.ui.form .field.error input:not([type]),.ui.form .field.error input[type=text],.ui.form .field.error input[type=email],.ui.form .field.error input[type=search],.ui.form .field.error input[type=password],.ui.form .field.error input[type=date],.ui.form .field.error input[type=datetime-local],.ui.form .field.error input[type=tel],.ui.form .field.error input[type=time],.ui.form .field.error input[type=file],.ui.form .field.error input[type=url],.ui.form .field.error input[type=number],.ui.form .field.error select,.ui.form .field.error textarea,.ui.form .fields.error .field input:not([type]),.ui.form .fields.error .field input[type=text],.ui.form .fields.error .field input[type=email],.ui.form .fields.error .field input[type=search],.ui.form .fields.error .field input[type=password],.ui.form .fields.error .field input[type=date],.ui.form .fields.error .field input[type=datetime-local],.ui.form .fields.error .field input[type=tel],.ui.form .fields.error .field input[type=time],.ui.form .fields.error .field input[type=file],.ui.form .fields.error .field input[type=url],.ui.form .fields.error .field input[type=number],.ui.form .fields.error .field select,.ui.form .fields.error .field textarea{background:#FFF6F6;border-color:#E0B4B4;color:#9F3A38;border-radius:'';box-shadow:none}.ui.form .field.error input:not([type]):focus,.ui.form .field.error input[type=text]:focus,.ui.form .field.error input[type=email]:focus,.ui.form .field.error input[type=search]:focus,.ui.form .field.error input[type=password]:focus,.ui.form .field.error input[type=date]:focus,.ui.form .field.error input[type=datetime-local]:focus,.ui.form .field.error input[type=tel]:focus,.ui.form .field.error input[type=time]:focus,.ui.form .field.error input[type=file]:focus,.ui.form .field.error input[type=url]:focus,.ui.form .field.error input[type=number]:focus,.ui.form .field.error select:focus,.ui.form .field.error textarea:focus{background:#FFF6F6;border-color:#E0B4B4;color:#9F3A38;-webkit-appearance:none;box-shadow:none}.ui.form .field.error select{-webkit-appearance:menulist-button}.ui.form .field.error .ui.dropdown,.ui.form .field.error .ui.dropdown .item,.ui.form .field.error .ui.dropdown .text,.ui.form .fields.error .field .ui.dropdown,.ui.form .fields.error .field .ui.dropdown .item{background:#FFF6F6;color:#9F3A38}.ui.form .field.error .ui.dropdown,.ui.form .field.error .ui.dropdown:hover,.ui.form .fields.error .field .ui.dropdown,.ui.form .fields.error .field .ui.dropdown:hover{border-color:#E0B4B4!important}.ui.form .field.error .ui.dropdown:hover .menu,.ui.form .fields.error .field .ui.dropdown:hover .menu{border-color:#E0B4B4}.ui.form .field.error .ui.multiple.selection.dropdown>.label,.ui.form .fields.error .field .ui.multiple.selection.dropdown>.label{background-color:#EACBCB;color:#9F3A38}.ui.form .field.error .ui.dropdown .menu .item:hover,.ui.form .field.error .ui.dropdown .menu .selected.item,.ui.form .fields.error .field .ui.dropdown .menu .item:hover,.ui.form .fields.error .field .ui.dropdown .menu .selected.item{background-color:#FBE7E7}.ui.form .field.error .ui.dropdown .menu .active.item,.ui.form .fields.error .field .ui.dropdown .menu .active.item{background-color:#FDCFCF!important}.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box,.ui.form .field.error .checkbox:not(.toggle):not(.slider) label,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label{color:#9F3A38}.ui.form .field.error .checkbox:not(.toggle):not(.slider) .box:before,.ui.form .field.error .checkbox:not(.toggle):not(.slider) label:before,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) .box:before,.ui.form .fields.error .field .checkbox:not(.toggle):not(.slider) label:before{background:#FFF6F6;border-color:#E0B4B4}.ui.form .field.error .checkbox .box:after,.ui.form .field.error .checkbox label:after,.ui.form .fields.error .field .checkbox .box:after,.ui.form .fields.error .field .checkbox label:after{color:#9F3A38}.ui.form .disabled.field,.ui.form .disabled.fields .field,.ui.form .field :disabled{pointer-events:none;opacity:.45}.ui.form .field.disabled>label,.ui.form .fields.disabled>label{opacity:.45}.ui.form .field.disabled :disabled{opacity:1}.ui.loading.form{position:relative;cursor:default;pointer-events:none}.ui.loading.form:before{position:absolute;content:'';top:0;left:0;background:rgba(255,255,255,.8);width:100%;height:100%;z-index:100}.ui.loading.form:after{position:absolute;content:'';top:50%;left:50%;margin:-1.5em 0 0 -1.5em;width:3em;height:3em;-webkit-animation:form-spin .6s linear;animation:form-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 rgba(0,0,0,.1) rgba(0,0,0,.1);border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent;visibility:visible;z-index:101}@-webkit-keyframes form-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes form-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ui.form .required.field>.checkbox:after,.ui.form .required.field>label:after,.ui.form .required.fields.grouped>label:after,.ui.form .required.fields:not(.grouped)>.field>.checkbox:after,.ui.form .required.fields:not(.grouped)>.field>label:after{margin:-.2em 0 0 .2em;content:'*';color:#DB2828}.ui.form .required.field>label:after,.ui.form .required.fields.grouped>label:after,.ui.form .required.fields:not(.grouped)>.field>label:after{display:inline-block;vertical-align:top}.ui.form .required.field>.checkbox:after,.ui.form .required.fields:not(.grouped)>.field>.checkbox:after{position:absolute;top:0;left:100%}.ui.form .inverted.segment .ui.checkbox .box,.ui.form .inverted.segment .ui.checkbox label,.ui.form .inverted.segment label,.ui.inverted.form .inline.field>label,.ui.inverted.form .inline.field>p,.ui.inverted.form .inline.fields .field>label,.ui.inverted.form .inline.fields .field>p,.ui.inverted.form .inline.fields>label,.ui.inverted.form .ui.checkbox .box,.ui.inverted.form .ui.checkbox label,.ui.inverted.form label{color:rgba(255,255,255,.9)}.ui.inverted.form input:not([type]),.ui.inverted.form input[type=text],.ui.inverted.form input[type=email],.ui.inverted.form input[type=search],.ui.inverted.form input[type=password],.ui.inverted.form input[type=date],.ui.inverted.form input[type=datetime-local],.ui.inverted.form input[type=tel],.ui.inverted.form input[type=time],.ui.inverted.form input[type=file],.ui.inverted.form input[type=url],.ui.inverted.form input[type=number]{background:#FFF;border-color:rgba(255,255,255,.1);color:rgba(0,0,0,.87);box-shadow:none}.ui.form .grouped.fields{display:block;margin:0 0 1em}.ui.form .grouped.fields:last-child{margin-bottom:0}.ui.form .grouped.fields>label{margin:0 0 .28571429rem;color:rgba(0,0,0,.87);font-size:.92857143em;font-weight:700;text-transform:none}.ui.form .grouped.fields .field,.ui.form .grouped.inline.fields .field{display:block;margin:.5em 0;padding:0}.ui.form .fields{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin:0 -.5em 1em}.ui.form .fields>.field{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;padding-left:.5em;padding-right:.5em}.ui.form .fields>.field:first-child{border-left:none;box-shadow:none}.ui.form .two.fields>.field,.ui.form .two.fields>.fields{width:50%}.ui.form .three.fields>.field,.ui.form .three.fields>.fields{width:33.33333333%}.ui.form .four.fields>.field,.ui.form .four.fields>.fields{width:25%}.ui.form .five.fields>.field,.ui.form .five.fields>.fields{width:20%}.ui.form .six.fields>.field,.ui.form .six.fields>.fields{width:16.66666667%}.ui.form .seven.fields>.field,.ui.form .seven.fields>.fields{width:14.28571429%}.ui.form .eight.fields>.field,.ui.form .eight.fields>.fields{width:12.5%}.ui.form .nine.fields>.field,.ui.form .nine.fields>.fields{width:11.11111111%}.ui.form .ten.fields>.field,.ui.form .ten.fields>.fields{width:10%}@media only screen and (max-width:767px){.ui.form .fields{-ms-flex-wrap:wrap;flex-wrap:wrap}.ui.form .eight.fields>.field,.ui.form .eight.fields>.fields,.ui.form .five.fields>.field,.ui.form .five.fields>.fields,.ui.form .four.fields>.field,.ui.form .four.fields>.fields,.ui.form .nine.fields>.field,.ui.form .nine.fields>.fields,.ui.form .seven.fields>.field,.ui.form .seven.fields>.fields,.ui.form .six.fields>.field,.ui.form .six.fields>.fields,.ui.form .ten.fields>.field,.ui.form .ten.fields>.fields,.ui.form .three.fields>.field,.ui.form .three.fields>.fields,.ui.form .two.fields>.field,.ui.form .two.fields>.fields,.ui.form [class*=\"equal width\"].fields>.field,.ui[class*=\"equal width\"].form .fields>.field{width:100%!important;margin:0 0 1em}}.ui.form .fields .wide.field{width:6.25%;padding-left:.5em;padding-right:.5em}.ui.form .one.wide.field{width:6.25%!important}.ui.form .two.wide.field{width:12.5%!important}.ui.form .three.wide.field{width:18.75%!important}.ui.form .four.wide.field{width:25%!important}.ui.form .five.wide.field{width:31.25%!important}.ui.form .six.wide.field{width:37.5%!important}.ui.form .seven.wide.field{width:43.75%!important}.ui.form .eight.wide.field{width:50%!important}.ui.form .nine.wide.field{width:56.25%!important}.ui.form .ten.wide.field{width:62.5%!important}.ui.form .eleven.wide.field{width:68.75%!important}.ui.form .twelve.wide.field{width:75%!important}.ui.form .thirteen.wide.field{width:81.25%!important}.ui.form .fourteen.wide.field{width:87.5%!important}.ui.form .fifteen.wide.field{width:93.75%!important}.ui.form .sixteen.wide.field{width:100%!important}@media only screen and (max-width:767px){.ui.form .fields>.eight.wide.field,.ui.form .fields>.eleven.wide.field,.ui.form .fields>.fifteen.wide.field,.ui.form .fields>.five.wide.field,.ui.form .fields>.four.wide.field,.ui.form .fields>.fourteen.wide.field,.ui.form .fields>.nine.wide.field,.ui.form .fields>.seven.wide.field,.ui.form .fields>.six.wide.field,.ui.form .fields>.sixteen.wide.field,.ui.form .fields>.ten.wide.field,.ui.form .fields>.thirteen.wide.field,.ui.form .fields>.three.wide.field,.ui.form .fields>.twelve.wide.field,.ui.form .fields>.two.wide.field,.ui.form .five.fields>.field,.ui.form .five.fields>.fields,.ui.form .four.fields>.field,.ui.form .four.fields>.fields,.ui.form .three.fields>.field,.ui.form .three.fields>.fields,.ui.form .two.fields>.field,.ui.form .two.fields>.fields{width:100%!important}.ui.form .fields{margin-bottom:0}}.ui.form [class*=\"equal width\"].fields>.field,.ui[class*=\"equal width\"].form .fields>.field{width:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.ui.form .inline.fields{margin:0 0 1em;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ui.form .inline.fields .field{margin:0;padding:0 1em 0 0}.ui.form .inline.field>label,.ui.form .inline.field>p,.ui.form .inline.fields .field>label,.ui.form .inline.fields .field>p,.ui.form .inline.fields>label{display:inline-block;width:auto;margin-top:0;margin-bottom:0;vertical-align:baseline;font-size:.92857143em;font-weight:700;color:rgba(0,0,0,.87);text-transform:none}.ui.form .inline.fields>label{margin:.035714em 1em 0 0}.ui.form .inline.field>input,.ui.form .inline.field>select,.ui.form .inline.fields .field>input,.ui.form .inline.fields .field>select{display:inline-block;width:auto;margin-top:0;margin-bottom:0;vertical-align:middle;font-size:1em}.ui.form .inline.field>:first-child,.ui.form .inline.fields .field>:first-child{margin:0 .85714286em 0 0}.ui.form .inline.field>:only-child,.ui.form .inline.fields .field>:only-child{margin:0}.ui.form .inline.fields .wide.field{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ui.form .inline.fields .wide.field>input,.ui.form .inline.fields .wide.field>select{width:100%}.ui.mini.form{font-size:.78571429rem}.ui.tiny.form{font-size:.85714286rem}.ui.small.form{font-size:.92857143rem}.ui.form{font-size:1rem}.ui.large.form{font-size:1.14285714rem}.ui.big.form{font-size:1.28571429rem}.ui.huge.form{font-size:1.42857143rem}.ui.massive.form{font-size:1.71428571rem}.ui.grid{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;padding:0;margin:-1rem}.ui.relaxed.grid{margin-left:-1.5rem;margin-right:-1.5rem}.ui[class*=\"very relaxed\"].grid{margin-left:-2.5rem;margin-right:-2.5rem}.ui.grid+.grid{margin-top:1rem}.ui.grid>.column:not(.row),.ui.grid>.row>.column{position:relative;display:inline-block;width:6.25%;padding-left:1rem;padding-right:1rem;vertical-align:top}.ui.grid>*{padding-left:1rem;padding-right:1rem}.ui.grid>.row{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:inherit;-ms-flex-pack:inherit;justify-content:inherit;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%!important;padding:1rem 0}.ui.grid>.column:not(.row){padding-top:1rem;padding-bottom:1rem}.ui.grid>.row>.column{margin-top:0;margin-bottom:0}.ui.grid>.row>.column>img,.ui.grid>.row>img{max-width:100%}.ui.grid>.ui.grid:first-child{margin-top:0}.ui.grid>.ui.grid:last-child{margin-bottom:0}.ui.aligned.grid .column>.segment:not(.compact):not(.attached),.ui.grid .aligned.row>.column>.segment:not(.compact):not(.attached){width:100%}.ui.grid .row+.ui.divider{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:1rem}.ui.grid .column+.ui.vertical.divider{height:calc(50% - 1rem)}.ui.grid>.column:last-child>.horizontal.segment,.ui.grid>.row>.column:last-child>.horizontal.segment{box-shadow:none}@media only screen and (max-width:767px){.ui.page.grid{width:auto;padding-left:0;padding-right:0;margin-left:0;margin-right:0}}@media only screen and (min-width:768px) and (max-width:991px){.ui.page.grid{width:auto;margin-left:0;margin-right:0;padding-left:2em;padding-right:2em}}@media only screen and (min-width:992px) and (max-width:1199px){.ui.page.grid{width:auto;margin-left:0;margin-right:0;padding-left:3%;padding-right:3%}}@media only screen and (min-width:1200px) and (max-width:1919px){.ui.page.grid{width:auto;margin-left:0;margin-right:0;padding-left:15%;padding-right:15%}}@media only screen and (min-width:1920px){.ui.page.grid{width:auto;margin-left:0;margin-right:0;padding-left:23%;padding-right:23%}}.ui.grid>.column:only-child,.ui.grid>.row>.column:only-child,.ui[class*=\"one column\"].grid>.column:not(.row),.ui[class*=\"one column\"].grid>.row>.column{width:100%}.ui[class*=\"two column\"].grid>.column:not(.row),.ui[class*=\"two column\"].grid>.row>.column{width:50%}.ui[class*=\"three column\"].grid>.column:not(.row),.ui[class*=\"three column\"].grid>.row>.column{width:33.33333333%}.ui[class*=\"four column\"].grid>.column:not(.row),.ui[class*=\"four column\"].grid>.row>.column{width:25%}.ui[class*=\"five column\"].grid>.column:not(.row),.ui[class*=\"five column\"].grid>.row>.column{width:20%}.ui[class*=\"six column\"].grid>.column:not(.row),.ui[class*=\"six column\"].grid>.row>.column{width:16.66666667%}.ui[class*=\"seven column\"].grid>.column:not(.row),.ui[class*=\"seven column\"].grid>.row>.column{width:14.28571429%}.ui[class*=\"eight column\"].grid>.column:not(.row),.ui[class*=\"eight column\"].grid>.row>.column{width:12.5%}.ui[class*=\"nine column\"].grid>.column:not(.row),.ui[class*=\"nine column\"].grid>.row>.column{width:11.11111111%}.ui[class*=\"ten column\"].grid>.column:not(.row),.ui[class*=\"ten column\"].grid>.row>.column{width:10%}.ui[class*=\"eleven column\"].grid>.column:not(.row),.ui[class*=\"eleven column\"].grid>.row>.column{width:9.09090909%}.ui[class*=\"twelve column\"].grid>.column:not(.row),.ui[class*=\"twelve column\"].grid>.row>.column{width:8.33333333%}.ui[class*=\"thirteen column\"].grid>.column:not(.row),.ui[class*=\"thirteen column\"].grid>.row>.column{width:7.69230769%}.ui[class*=\"fourteen column\"].grid>.column:not(.row),.ui[class*=\"fourteen column\"].grid>.row>.column{width:7.14285714%}.ui[class*=\"fifteen column\"].grid>.column:not(.row),.ui[class*=\"fifteen column\"].grid>.row>.column{width:6.66666667%}.ui[class*=\"sixteen column\"].grid>.column:not(.row),.ui[class*=\"sixteen column\"].grid>.row>.column{width:6.25%}.ui.grid>[class*=\"one column\"].row>.column{width:100%!important}.ui.grid>[class*=\"two column\"].row>.column{width:50%!important}.ui.grid>[class*=\"three column\"].row>.column{width:33.33333333%!important}.ui.grid>[class*=\"four column\"].row>.column{width:25%!important}.ui.grid>[class*=\"five column\"].row>.column{width:20%!important}.ui.grid>[class*=\"six column\"].row>.column{width:16.66666667%!important}.ui.grid>[class*=\"seven column\"].row>.column{width:14.28571429%!important}.ui.grid>[class*=\"eight column\"].row>.column{width:12.5%!important}.ui.grid>[class*=\"nine column\"].row>.column{width:11.11111111%!important}.ui.grid>[class*=\"ten column\"].row>.column{width:10%!important}.ui.grid>[class*=\"eleven column\"].row>.column{width:9.09090909%!important}.ui.grid>[class*=\"twelve column\"].row>.column{width:8.33333333%!important}.ui.grid>[class*=\"thirteen column\"].row>.column{width:7.69230769%!important}.ui.grid>[class*=\"fourteen column\"].row>.column{width:7.14285714%!important}.ui.grid>[class*=\"fifteen column\"].row>.column{width:6.66666667%!important}.ui.grid>[class*=\"sixteen column\"].row>.column{width:6.25%!important}.ui.celled.page.grid{box-shadow:none}.ui.column.grid>[class*=\"one wide\"].column,.ui.grid>.column.row>[class*=\"one wide\"].column,.ui.grid>.row>[class*=\"one wide\"].column,.ui.grid>[class*=\"one wide\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide\"].column,.ui.grid>.column.row>[class*=\"two wide\"].column,.ui.grid>.row>[class*=\"two wide\"].column,.ui.grid>[class*=\"two wide\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide\"].column,.ui.grid>.column.row>[class*=\"three wide\"].column,.ui.grid>.row>[class*=\"three wide\"].column,.ui.grid>[class*=\"three wide\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide\"].column,.ui.grid>.column.row>[class*=\"four wide\"].column,.ui.grid>.row>[class*=\"four wide\"].column,.ui.grid>[class*=\"four wide\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide\"].column,.ui.grid>.column.row>[class*=\"five wide\"].column,.ui.grid>.row>[class*=\"five wide\"].column,.ui.grid>[class*=\"five wide\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide\"].column,.ui.grid>.column.row>[class*=\"six wide\"].column,.ui.grid>.row>[class*=\"six wide\"].column,.ui.grid>[class*=\"six wide\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide\"].column,.ui.grid>.column.row>[class*=\"seven wide\"].column,.ui.grid>.row>[class*=\"seven wide\"].column,.ui.grid>[class*=\"seven wide\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide\"].column,.ui.grid>.column.row>[class*=\"eight wide\"].column,.ui.grid>.row>[class*=\"eight wide\"].column,.ui.grid>[class*=\"eight wide\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide\"].column,.ui.grid>.column.row>[class*=\"nine wide\"].column,.ui.grid>.row>[class*=\"nine wide\"].column,.ui.grid>[class*=\"nine wide\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide\"].column,.ui.grid>.column.row>[class*=\"ten wide\"].column,.ui.grid>.row>[class*=\"ten wide\"].column,.ui.grid>[class*=\"ten wide\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide\"].column,.ui.grid>.column.row>[class*=\"eleven wide\"].column,.ui.grid>.row>[class*=\"eleven wide\"].column,.ui.grid>[class*=\"eleven wide\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide\"].column,.ui.grid>.column.row>[class*=\"twelve wide\"].column,.ui.grid>.row>[class*=\"twelve wide\"].column,.ui.grid>[class*=\"twelve wide\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide\"].column,.ui.grid>.column.row>[class*=\"thirteen wide\"].column,.ui.grid>.row>[class*=\"thirteen wide\"].column,.ui.grid>[class*=\"thirteen wide\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide\"].column,.ui.grid>.column.row>[class*=\"fourteen wide\"].column,.ui.grid>.row>[class*=\"fourteen wide\"].column,.ui.grid>[class*=\"fourteen wide\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide\"].column,.ui.grid>.column.row>[class*=\"fifteen wide\"].column,.ui.grid>.row>[class*=\"fifteen wide\"].column,.ui.grid>[class*=\"fifteen wide\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide\"].column,.ui.grid>.column.row>[class*=\"sixteen wide\"].column,.ui.grid>.row>[class*=\"sixteen wide\"].column,.ui.grid>[class*=\"sixteen wide\"].column{width:100%!important}@media only screen and (min-width:320px) and (max-width:767px){.ui.column.grid>[class*=\"one wide mobile\"].column,.ui.grid>.column.row>[class*=\"one wide mobile\"].column,.ui.grid>.row>[class*=\"one wide mobile\"].column,.ui.grid>[class*=\"one wide mobile\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide mobile\"].column,.ui.grid>.column.row>[class*=\"two wide mobile\"].column,.ui.grid>.row>[class*=\"two wide mobile\"].column,.ui.grid>[class*=\"two wide mobile\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide mobile\"].column,.ui.grid>.column.row>[class*=\"three wide mobile\"].column,.ui.grid>.row>[class*=\"three wide mobile\"].column,.ui.grid>[class*=\"three wide mobile\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide mobile\"].column,.ui.grid>.column.row>[class*=\"four wide mobile\"].column,.ui.grid>.row>[class*=\"four wide mobile\"].column,.ui.grid>[class*=\"four wide mobile\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide mobile\"].column,.ui.grid>.column.row>[class*=\"five wide mobile\"].column,.ui.grid>.row>[class*=\"five wide mobile\"].column,.ui.grid>[class*=\"five wide mobile\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide mobile\"].column,.ui.grid>.column.row>[class*=\"six wide mobile\"].column,.ui.grid>.row>[class*=\"six wide mobile\"].column,.ui.grid>[class*=\"six wide mobile\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide mobile\"].column,.ui.grid>.column.row>[class*=\"seven wide mobile\"].column,.ui.grid>.row>[class*=\"seven wide mobile\"].column,.ui.grid>[class*=\"seven wide mobile\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide mobile\"].column,.ui.grid>.column.row>[class*=\"eight wide mobile\"].column,.ui.grid>.row>[class*=\"eight wide mobile\"].column,.ui.grid>[class*=\"eight wide mobile\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide mobile\"].column,.ui.grid>.column.row>[class*=\"nine wide mobile\"].column,.ui.grid>.row>[class*=\"nine wide mobile\"].column,.ui.grid>[class*=\"nine wide mobile\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide mobile\"].column,.ui.grid>.column.row>[class*=\"ten wide mobile\"].column,.ui.grid>.row>[class*=\"ten wide mobile\"].column,.ui.grid>[class*=\"ten wide mobile\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide mobile\"].column,.ui.grid>.column.row>[class*=\"eleven wide mobile\"].column,.ui.grid>.row>[class*=\"eleven wide mobile\"].column,.ui.grid>[class*=\"eleven wide mobile\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide mobile\"].column,.ui.grid>.column.row>[class*=\"twelve wide mobile\"].column,.ui.grid>.row>[class*=\"twelve wide mobile\"].column,.ui.grid>[class*=\"twelve wide mobile\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide mobile\"].column,.ui.grid>.column.row>[class*=\"thirteen wide mobile\"].column,.ui.grid>.row>[class*=\"thirteen wide mobile\"].column,.ui.grid>[class*=\"thirteen wide mobile\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide mobile\"].column,.ui.grid>.column.row>[class*=\"fourteen wide mobile\"].column,.ui.grid>.row>[class*=\"fourteen wide mobile\"].column,.ui.grid>[class*=\"fourteen wide mobile\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide mobile\"].column,.ui.grid>.column.row>[class*=\"fifteen wide mobile\"].column,.ui.grid>.row>[class*=\"fifteen wide mobile\"].column,.ui.grid>[class*=\"fifteen wide mobile\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide mobile\"].column,.ui.grid>.column.row>[class*=\"sixteen wide mobile\"].column,.ui.grid>.row>[class*=\"sixteen wide mobile\"].column,.ui.grid>[class*=\"sixteen wide mobile\"].column{width:100%!important}}@media only screen and (min-width:768px) and (max-width:991px){.ui.column.grid>[class*=\"one wide tablet\"].column,.ui.grid>.column.row>[class*=\"one wide tablet\"].column,.ui.grid>.row>[class*=\"one wide tablet\"].column,.ui.grid>[class*=\"one wide tablet\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide tablet\"].column,.ui.grid>.column.row>[class*=\"two wide tablet\"].column,.ui.grid>.row>[class*=\"two wide tablet\"].column,.ui.grid>[class*=\"two wide tablet\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide tablet\"].column,.ui.grid>.column.row>[class*=\"three wide tablet\"].column,.ui.grid>.row>[class*=\"three wide tablet\"].column,.ui.grid>[class*=\"three wide tablet\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide tablet\"].column,.ui.grid>.column.row>[class*=\"four wide tablet\"].column,.ui.grid>.row>[class*=\"four wide tablet\"].column,.ui.grid>[class*=\"four wide tablet\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide tablet\"].column,.ui.grid>.column.row>[class*=\"five wide tablet\"].column,.ui.grid>.row>[class*=\"five wide tablet\"].column,.ui.grid>[class*=\"five wide tablet\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide tablet\"].column,.ui.grid>.column.row>[class*=\"six wide tablet\"].column,.ui.grid>.row>[class*=\"six wide tablet\"].column,.ui.grid>[class*=\"six wide tablet\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide tablet\"].column,.ui.grid>.column.row>[class*=\"seven wide tablet\"].column,.ui.grid>.row>[class*=\"seven wide tablet\"].column,.ui.grid>[class*=\"seven wide tablet\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide tablet\"].column,.ui.grid>.column.row>[class*=\"eight wide tablet\"].column,.ui.grid>.row>[class*=\"eight wide tablet\"].column,.ui.grid>[class*=\"eight wide tablet\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide tablet\"].column,.ui.grid>.column.row>[class*=\"nine wide tablet\"].column,.ui.grid>.row>[class*=\"nine wide tablet\"].column,.ui.grid>[class*=\"nine wide tablet\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide tablet\"].column,.ui.grid>.column.row>[class*=\"ten wide tablet\"].column,.ui.grid>.row>[class*=\"ten wide tablet\"].column,.ui.grid>[class*=\"ten wide tablet\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide tablet\"].column,.ui.grid>.column.row>[class*=\"eleven wide tablet\"].column,.ui.grid>.row>[class*=\"eleven wide tablet\"].column,.ui.grid>[class*=\"eleven wide tablet\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide tablet\"].column,.ui.grid>.column.row>[class*=\"twelve wide tablet\"].column,.ui.grid>.row>[class*=\"twelve wide tablet\"].column,.ui.grid>[class*=\"twelve wide tablet\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide tablet\"].column,.ui.grid>.column.row>[class*=\"thirteen wide tablet\"].column,.ui.grid>.row>[class*=\"thirteen wide tablet\"].column,.ui.grid>[class*=\"thirteen wide tablet\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide tablet\"].column,.ui.grid>.column.row>[class*=\"fourteen wide tablet\"].column,.ui.grid>.row>[class*=\"fourteen wide tablet\"].column,.ui.grid>[class*=\"fourteen wide tablet\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide tablet\"].column,.ui.grid>.column.row>[class*=\"fifteen wide tablet\"].column,.ui.grid>.row>[class*=\"fifteen wide tablet\"].column,.ui.grid>[class*=\"fifteen wide tablet\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide tablet\"].column,.ui.grid>.column.row>[class*=\"sixteen wide tablet\"].column,.ui.grid>.row>[class*=\"sixteen wide tablet\"].column,.ui.grid>[class*=\"sixteen wide tablet\"].column{width:100%!important}}@media only screen and (min-width:992px){.ui.column.grid>[class*=\"one wide computer\"].column,.ui.grid>.column.row>[class*=\"one wide computer\"].column,.ui.grid>.row>[class*=\"one wide computer\"].column,.ui.grid>[class*=\"one wide computer\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide computer\"].column,.ui.grid>.column.row>[class*=\"two wide computer\"].column,.ui.grid>.row>[class*=\"two wide computer\"].column,.ui.grid>[class*=\"two wide computer\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide computer\"].column,.ui.grid>.column.row>[class*=\"three wide computer\"].column,.ui.grid>.row>[class*=\"three wide computer\"].column,.ui.grid>[class*=\"three wide computer\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide computer\"].column,.ui.grid>.column.row>[class*=\"four wide computer\"].column,.ui.grid>.row>[class*=\"four wide computer\"].column,.ui.grid>[class*=\"four wide computer\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide computer\"].column,.ui.grid>.column.row>[class*=\"five wide computer\"].column,.ui.grid>.row>[class*=\"five wide computer\"].column,.ui.grid>[class*=\"five wide computer\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide computer\"].column,.ui.grid>.column.row>[class*=\"six wide computer\"].column,.ui.grid>.row>[class*=\"six wide computer\"].column,.ui.grid>[class*=\"six wide computer\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide computer\"].column,.ui.grid>.column.row>[class*=\"seven wide computer\"].column,.ui.grid>.row>[class*=\"seven wide computer\"].column,.ui.grid>[class*=\"seven wide computer\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide computer\"].column,.ui.grid>.column.row>[class*=\"eight wide computer\"].column,.ui.grid>.row>[class*=\"eight wide computer\"].column,.ui.grid>[class*=\"eight wide computer\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide computer\"].column,.ui.grid>.column.row>[class*=\"nine wide computer\"].column,.ui.grid>.row>[class*=\"nine wide computer\"].column,.ui.grid>[class*=\"nine wide computer\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide computer\"].column,.ui.grid>.column.row>[class*=\"ten wide computer\"].column,.ui.grid>.row>[class*=\"ten wide computer\"].column,.ui.grid>[class*=\"ten wide computer\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide computer\"].column,.ui.grid>.column.row>[class*=\"eleven wide computer\"].column,.ui.grid>.row>[class*=\"eleven wide computer\"].column,.ui.grid>[class*=\"eleven wide computer\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide computer\"].column,.ui.grid>.column.row>[class*=\"twelve wide computer\"].column,.ui.grid>.row>[class*=\"twelve wide computer\"].column,.ui.grid>[class*=\"twelve wide computer\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide computer\"].column,.ui.grid>.column.row>[class*=\"thirteen wide computer\"].column,.ui.grid>.row>[class*=\"thirteen wide computer\"].column,.ui.grid>[class*=\"thirteen wide computer\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide computer\"].column,.ui.grid>.column.row>[class*=\"fourteen wide computer\"].column,.ui.grid>.row>[class*=\"fourteen wide computer\"].column,.ui.grid>[class*=\"fourteen wide computer\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide computer\"].column,.ui.grid>.column.row>[class*=\"fifteen wide computer\"].column,.ui.grid>.row>[class*=\"fifteen wide computer\"].column,.ui.grid>[class*=\"fifteen wide computer\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide computer\"].column,.ui.grid>.column.row>[class*=\"sixteen wide computer\"].column,.ui.grid>.row>[class*=\"sixteen wide computer\"].column,.ui.grid>[class*=\"sixteen wide computer\"].column{width:100%!important}}@media only screen and (min-width:1200px) and (max-width:1919px){.ui.column.grid>[class*=\"one wide large screen\"].column,.ui.grid>.column.row>[class*=\"one wide large screen\"].column,.ui.grid>.row>[class*=\"one wide large screen\"].column,.ui.grid>[class*=\"one wide large screen\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide large screen\"].column,.ui.grid>.column.row>[class*=\"two wide large screen\"].column,.ui.grid>.row>[class*=\"two wide large screen\"].column,.ui.grid>[class*=\"two wide large screen\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide large screen\"].column,.ui.grid>.column.row>[class*=\"three wide large screen\"].column,.ui.grid>.row>[class*=\"three wide large screen\"].column,.ui.grid>[class*=\"three wide large screen\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide large screen\"].column,.ui.grid>.column.row>[class*=\"four wide large screen\"].column,.ui.grid>.row>[class*=\"four wide large screen\"].column,.ui.grid>[class*=\"four wide large screen\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide large screen\"].column,.ui.grid>.column.row>[class*=\"five wide large screen\"].column,.ui.grid>.row>[class*=\"five wide large screen\"].column,.ui.grid>[class*=\"five wide large screen\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide large screen\"].column,.ui.grid>.column.row>[class*=\"six wide large screen\"].column,.ui.grid>.row>[class*=\"six wide large screen\"].column,.ui.grid>[class*=\"six wide large screen\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide large screen\"].column,.ui.grid>.column.row>[class*=\"seven wide large screen\"].column,.ui.grid>.row>[class*=\"seven wide large screen\"].column,.ui.grid>[class*=\"seven wide large screen\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide large screen\"].column,.ui.grid>.column.row>[class*=\"eight wide large screen\"].column,.ui.grid>.row>[class*=\"eight wide large screen\"].column,.ui.grid>[class*=\"eight wide large screen\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide large screen\"].column,.ui.grid>.column.row>[class*=\"nine wide large screen\"].column,.ui.grid>.row>[class*=\"nine wide large screen\"].column,.ui.grid>[class*=\"nine wide large screen\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide large screen\"].column,.ui.grid>.column.row>[class*=\"ten wide large screen\"].column,.ui.grid>.row>[class*=\"ten wide large screen\"].column,.ui.grid>[class*=\"ten wide large screen\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide large screen\"].column,.ui.grid>.column.row>[class*=\"eleven wide large screen\"].column,.ui.grid>.row>[class*=\"eleven wide large screen\"].column,.ui.grid>[class*=\"eleven wide large screen\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide large screen\"].column,.ui.grid>.column.row>[class*=\"twelve wide large screen\"].column,.ui.grid>.row>[class*=\"twelve wide large screen\"].column,.ui.grid>[class*=\"twelve wide large screen\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide large screen\"].column,.ui.grid>.column.row>[class*=\"thirteen wide large screen\"].column,.ui.grid>.row>[class*=\"thirteen wide large screen\"].column,.ui.grid>[class*=\"thirteen wide large screen\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide large screen\"].column,.ui.grid>.column.row>[class*=\"fourteen wide large screen\"].column,.ui.grid>.row>[class*=\"fourteen wide large screen\"].column,.ui.grid>[class*=\"fourteen wide large screen\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide large screen\"].column,.ui.grid>.column.row>[class*=\"fifteen wide large screen\"].column,.ui.grid>.row>[class*=\"fifteen wide large screen\"].column,.ui.grid>[class*=\"fifteen wide large screen\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide large screen\"].column,.ui.grid>.column.row>[class*=\"sixteen wide large screen\"].column,.ui.grid>.row>[class*=\"sixteen wide large screen\"].column,.ui.grid>[class*=\"sixteen wide large screen\"].column{width:100%!important}}@media only screen and (min-width:1920px){.ui.column.grid>[class*=\"one wide widescreen\"].column,.ui.grid>.column.row>[class*=\"one wide widescreen\"].column,.ui.grid>.row>[class*=\"one wide widescreen\"].column,.ui.grid>[class*=\"one wide widescreen\"].column{width:6.25%!important}.ui.column.grid>[class*=\"two wide widescreen\"].column,.ui.grid>.column.row>[class*=\"two wide widescreen\"].column,.ui.grid>.row>[class*=\"two wide widescreen\"].column,.ui.grid>[class*=\"two wide widescreen\"].column{width:12.5%!important}.ui.column.grid>[class*=\"three wide widescreen\"].column,.ui.grid>.column.row>[class*=\"three wide widescreen\"].column,.ui.grid>.row>[class*=\"three wide widescreen\"].column,.ui.grid>[class*=\"three wide widescreen\"].column{width:18.75%!important}.ui.column.grid>[class*=\"four wide widescreen\"].column,.ui.grid>.column.row>[class*=\"four wide widescreen\"].column,.ui.grid>.row>[class*=\"four wide widescreen\"].column,.ui.grid>[class*=\"four wide widescreen\"].column{width:25%!important}.ui.column.grid>[class*=\"five wide widescreen\"].column,.ui.grid>.column.row>[class*=\"five wide widescreen\"].column,.ui.grid>.row>[class*=\"five wide widescreen\"].column,.ui.grid>[class*=\"five wide widescreen\"].column{width:31.25%!important}.ui.column.grid>[class*=\"six wide widescreen\"].column,.ui.grid>.column.row>[class*=\"six wide widescreen\"].column,.ui.grid>.row>[class*=\"six wide widescreen\"].column,.ui.grid>[class*=\"six wide widescreen\"].column{width:37.5%!important}.ui.column.grid>[class*=\"seven wide widescreen\"].column,.ui.grid>.column.row>[class*=\"seven wide widescreen\"].column,.ui.grid>.row>[class*=\"seven wide widescreen\"].column,.ui.grid>[class*=\"seven wide widescreen\"].column{width:43.75%!important}.ui.column.grid>[class*=\"eight wide widescreen\"].column,.ui.grid>.column.row>[class*=\"eight wide widescreen\"].column,.ui.grid>.row>[class*=\"eight wide widescreen\"].column,.ui.grid>[class*=\"eight wide widescreen\"].column{width:50%!important}.ui.column.grid>[class*=\"nine wide widescreen\"].column,.ui.grid>.column.row>[class*=\"nine wide widescreen\"].column,.ui.grid>.row>[class*=\"nine wide widescreen\"].column,.ui.grid>[class*=\"nine wide widescreen\"].column{width:56.25%!important}.ui.column.grid>[class*=\"ten wide widescreen\"].column,.ui.grid>.column.row>[class*=\"ten wide widescreen\"].column,.ui.grid>.row>[class*=\"ten wide widescreen\"].column,.ui.grid>[class*=\"ten wide widescreen\"].column{width:62.5%!important}.ui.column.grid>[class*=\"eleven wide widescreen\"].column,.ui.grid>.column.row>[class*=\"eleven wide widescreen\"].column,.ui.grid>.row>[class*=\"eleven wide widescreen\"].column,.ui.grid>[class*=\"eleven wide widescreen\"].column{width:68.75%!important}.ui.column.grid>[class*=\"twelve wide widescreen\"].column,.ui.grid>.column.row>[class*=\"twelve wide widescreen\"].column,.ui.grid>.row>[class*=\"twelve wide widescreen\"].column,.ui.grid>[class*=\"twelve wide widescreen\"].column{width:75%!important}.ui.column.grid>[class*=\"thirteen wide widescreen\"].column,.ui.grid>.column.row>[class*=\"thirteen wide widescreen\"].column,.ui.grid>.row>[class*=\"thirteen wide widescreen\"].column,.ui.grid>[class*=\"thirteen wide widescreen\"].column{width:81.25%!important}.ui.column.grid>[class*=\"fourteen wide widescreen\"].column,.ui.grid>.column.row>[class*=\"fourteen wide widescreen\"].column,.ui.grid>.row>[class*=\"fourteen wide widescreen\"].column,.ui.grid>[class*=\"fourteen wide widescreen\"].column{width:87.5%!important}.ui.column.grid>[class*=\"fifteen wide widescreen\"].column,.ui.grid>.column.row>[class*=\"fifteen wide widescreen\"].column,.ui.grid>.row>[class*=\"fifteen wide widescreen\"].column,.ui.grid>[class*=\"fifteen wide widescreen\"].column{width:93.75%!important}.ui.column.grid>[class*=\"sixteen wide widescreen\"].column,.ui.grid>.column.row>[class*=\"sixteen wide widescreen\"].column,.ui.grid>.row>[class*=\"sixteen wide widescreen\"].column,.ui.grid>[class*=\"sixteen wide widescreen\"].column{width:100%!important}}.ui.centered.grid,.ui.centered.grid>.row,.ui.grid>.centered.row{text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ui.centered.grid>.column:not(.aligned):not(.justified):not(.row),.ui.centered.grid>.row>.column:not(.aligned):not(.justified),.ui.grid .centered.row>.column:not(.aligned):not(.justified){text-align:left}.ui.grid>.centered.column,.ui.grid>.row>.centered.column{display:block;margin-left:auto;margin-right:auto}.ui.grid>.relaxed.row>.column,.ui.relaxed.grid>.column:not(.row),.ui.relaxed.grid>.row>.column{padding-left:1.5rem;padding-right:1.5rem}.ui.grid>[class*=\"very relaxed\"].row>.column,.ui[class*=\"very relaxed\"].grid>.column:not(.row),.ui[class*=\"very relaxed\"].grid>.row>.column{padding-left:2.5rem;padding-right:2.5rem}.ui.grid .relaxed.row+.ui.divider,.ui.relaxed.grid .row+.ui.divider{margin-left:1.5rem;margin-right:1.5rem}.ui.grid [class*=\"very relaxed\"].row+.ui.divider,.ui[class*=\"very relaxed\"].grid .row+.ui.divider{margin-left:2.5rem;margin-right:2.5rem}.ui.padded.grid:not(.vertically):not(.horizontally){margin:0!important}[class*=\"horizontally padded\"].ui.grid{margin-left:0!important;margin-right:0!important}[class*=\"vertically padded\"].ui.grid{margin-top:0!important;margin-bottom:0!important}.ui.grid [class*=\"left floated\"].column{margin-right:auto}.ui.grid [class*=\"right floated\"].column{margin-left:auto}.ui.divided.grid:not([class*=\"vertically divided\"])>.column:not(.row),.ui.divided.grid:not([class*=\"vertically divided\"])>.row>.column{box-shadow:-1px 0 0 0 rgba(34,36,38,.15)}.ui[class*=\"vertically divided\"].grid>.column:not(.row),.ui[class*=\"vertically divided\"].grid>.row>.column{margin-top:1rem;margin-bottom:1rem;padding-top:0;padding-bottom:0}.ui[class*=\"vertically divided\"].grid>.row{margin-top:0;margin-bottom:0;position:relative}.ui.divided.grid:not([class*=\"vertically divided\"])>.column:first-child,.ui.divided.grid:not([class*=\"vertically divided\"])>.row>.column:first-child{box-shadow:none}.ui[class*=\"vertically divided\"].grid>.row:first-child>.column{margin-top:0}.ui.grid>.divided.row>.column{box-shadow:-1px 0 0 0 rgba(34,36,38,.15)}.ui.grid>.divided.row>.column:first-child{box-shadow:none}.ui[class*=\"vertically divided\"].grid>.row:before{position:absolute;content:\"\";top:0;left:0;width:calc(100% - 2rem);height:1px;margin:0 1rem;box-shadow:0 -1px 0 0 rgba(34,36,38,.15)}.ui.padded.divided.grid:not(.vertically):not(.horizontally),[class*=\"horizontally padded\"].ui.divided.grid{width:100%}.ui[class*=\"vertically divided\"].grid>.row:first-child:before{box-shadow:none}.ui.inverted.divided.grid:not([class*=\"vertically divided\"])>.column:not(.row),.ui.inverted.divided.grid:not([class*=\"vertically divided\"])>.row>.column{box-shadow:-1px 0 0 0 rgba(255,255,255,.1)}.ui.inverted.divided.grid:not([class*=\"vertically divided\"])>.column:not(.row):first-child,.ui.inverted.divided.grid:not([class*=\"vertically divided\"])>.row>.column:first-child{box-shadow:none}.ui.inverted[class*=\"vertically divided\"].grid>.row:before{box-shadow:0 -1px 0 0 rgba(255,255,255,.1)}.ui.relaxed[class*=\"vertically divided\"].grid>.row:before{margin-left:1.5rem;margin-right:1.5rem;width:calc(100% - 3rem)}.ui[class*=\"very relaxed\"][class*=\"vertically divided\"].grid>.row:before{margin-left:5rem;margin-right:5rem;width:calc(100% - 5rem)}.ui.celled.grid{width:100%;margin:1em 0;box-shadow:0 0 0 1px #D4D4D5}.ui.celled.grid>.row{width:100%!important;margin:0;padding:0;box-shadow:0 -1px 0 0 #D4D4D5}.ui.celled.grid>.column:not(.row),.ui.celled.grid>.row>.column{box-shadow:-1px 0 0 0 #D4D4D5;padding:1em}.ui.celled.grid>.column:first-child,.ui.celled.grid>.row>.column:first-child{box-shadow:none}.ui.relaxed.celled.grid>.column:not(.row),.ui.relaxed.celled.grid>.row>.column{padding:1.5em}.ui[class*=\"very relaxed\"].celled.grid>.column:not(.row),.ui[class*=\"very relaxed\"].celled.grid>.row>.column{padding:2em}.ui[class*=\"internally celled\"].grid{box-shadow:none;margin:0}.ui[class*=\"internally celled\"].grid>.row:first-child,.ui[class*=\"internally celled\"].grid>.row>.column:first-child{box-shadow:none}.ui.grid>.row>[class*=\"top aligned\"].column,.ui.grid>[class*=\"top aligned\"].column:not(.row),.ui.grid>[class*=\"top aligned\"].row>.column,.ui[class*=\"top aligned\"].grid>.column:not(.row),.ui[class*=\"top aligned\"].grid>.row>.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;vertical-align:top;-ms-flex-item-align:start!important;align-self:flex-start!important}.ui.grid>.row>[class*=\"middle aligned\"].column,.ui.grid>[class*=\"middle aligned\"].column:not(.row),.ui.grid>[class*=\"middle aligned\"].row>.column,.ui[class*=\"middle aligned\"].grid>.column:not(.row),.ui[class*=\"middle aligned\"].grid>.row>.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;vertical-align:middle;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.ui.grid>.row>[class*=\"bottom aligned\"].column,.ui.grid>[class*=\"bottom aligned\"].column:not(.row),.ui.grid>[class*=\"bottom aligned\"].row>.column,.ui[class*=\"bottom aligned\"].grid>.column:not(.row),.ui[class*=\"bottom aligned\"].grid>.row>.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;vertical-align:bottom;-ms-flex-item-align:end!important;align-self:flex-end!important}.ui.grid>.row>.stretched.column,.ui.grid>.stretched.column:not(.row),.ui.grid>.stretched.row>.column,.ui.stretched.grid>.column,.ui.stretched.grid>.row>.column{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.grid>.row>.stretched.column>*,.ui.grid>.stretched.column:not(.row)>*,.ui.grid>.stretched.row>.column>*,.ui.stretched.grid>.column>*,.ui.stretched.grid>.row>.column>*{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.ui.grid>.row>[class*=\"left aligned\"].column.column,.ui.grid>[class*=\"left aligned\"].column.column,.ui.grid>[class*=\"left aligned\"].row>.column,.ui[class*=\"left aligned\"].grid>.column,.ui[class*=\"left aligned\"].grid>.row>.column{text-align:left;-ms-flex-item-align:inherit;-ms-grid-row-align:inherit;align-self:inherit}.ui.grid>.row>[class*=\"center aligned\"].column.column,.ui.grid>[class*=\"center aligned\"].column.column,.ui.grid>[class*=\"center aligned\"].row>.column,.ui[class*=\"center aligned\"].grid>.column,.ui[class*=\"center aligned\"].grid>.row>.column{text-align:center;-ms-flex-item-align:inherit;-ms-grid-row-align:inherit;align-self:inherit}.ui[class*=\"center aligned\"].grid{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ui.grid>.row>[class*=\"right aligned\"].column.column,.ui.grid>[class*=\"right aligned\"].column.column,.ui.grid>[class*=\"right aligned\"].row>.column,.ui[class*=\"right aligned\"].grid>.column,.ui[class*=\"right aligned\"].grid>.row>.column{text-align:right;-ms-flex-item-align:inherit;-ms-grid-row-align:inherit;align-self:inherit}.ui.grid>.justified.column.column,.ui.grid>.justified.row>.column,.ui.grid>.row>.justified.column.column,.ui.justified.grid>.column,.ui.justified.grid>.row>.column{text-align:justify;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.ui.grid>.row>.black.column,.ui.grid>.row>.blue.column,.ui.grid>.row>.brown.column,.ui.grid>.row>.green.column,.ui.grid>.row>.grey.column,.ui.grid>.row>.olive.column,.ui.grid>.row>.orange.column,.ui.grid>.row>.pink.column,.ui.grid>.row>.purple.column,.ui.grid>.row>.red.column,.ui.grid>.row>.teal.column,.ui.grid>.row>.violet.column,.ui.grid>.row>.yellow.column{margin-top:-1rem;margin-bottom:-1rem;padding-top:1rem;padding-bottom:1rem}.ui.grid>.red.column,.ui.grid>.red.row,.ui.grid>.row>.red.column{background-color:#DB2828!important;color:#FFF}.ui.grid>.orange.column,.ui.grid>.orange.row,.ui.grid>.row>.orange.column{background-color:#F2711C!important;color:#FFF}.ui.grid>.row>.yellow.column,.ui.grid>.yellow.column,.ui.grid>.yellow.row{background-color:#FBBD08!important;color:#FFF}.ui.grid>.olive.column,.ui.grid>.olive.row,.ui.grid>.row>.olive.column{background-color:#B5CC18!important;color:#FFF}.ui.grid>.green.column,.ui.grid>.green.row,.ui.grid>.row>.green.column{background-color:#21BA45!important;color:#FFF}.ui.grid>.row>.teal.column,.ui.grid>.teal.column,.ui.grid>.teal.row{background-color:#00B5AD!important;color:#FFF}.ui.grid>.blue.column,.ui.grid>.blue.row,.ui.grid>.row>.blue.column{background-color:#2185D0!important;color:#FFF}.ui.grid>.row>.violet.column,.ui.grid>.violet.column,.ui.grid>.violet.row{background-color:#6435C9!important;color:#FFF}.ui.grid>.purple.column,.ui.grid>.purple.row,.ui.grid>.row>.purple.column{background-color:#A333C8!important;color:#FFF}.ui.grid>.pink.column,.ui.grid>.pink.row,.ui.grid>.row>.pink.column{background-color:#E03997!important;color:#FFF}.ui.grid>.brown.column,.ui.grid>.brown.row,.ui.grid>.row>.brown.column{background-color:#A5673F!important;color:#FFF}.ui.grid>.grey.column,.ui.grid>.grey.row,.ui.grid>.row>.grey.column{background-color:#767676!important;color:#FFF}.ui.grid>.black.column,.ui.grid>.black.row,.ui.grid>.row>.black.column{background-color:#1B1C1D!important;color:#FFF}.ui.grid>[class*=\"equal width\"].row>.column,.ui[class*=\"equal width\"].grid>.column:not(.row),.ui[class*=\"equal width\"].grid>.row>.column{display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.ui.grid>[class*=\"equal width\"].row>.wide.column,.ui[class*=\"equal width\"].grid>.row>.wide.column,.ui[class*=\"equal width\"].grid>.wide.column{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}@media only screen and (max-width:767px){.ui.grid>[class*=\"mobile reversed\"].row,.ui[class*=\"mobile reversed\"].grid,.ui[class*=\"mobile reversed\"].grid>.row{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ui.stackable[class*=\"mobile reversed\"],.ui[class*=\"mobile vertically reversed\"].grid{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ui[class*=\"mobile reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:first-child,.ui[class*=\"mobile reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:first-child{box-shadow:-1px 0 0 0 rgba(34,36,38,.15)}.ui[class*=\"mobile reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:last-child,.ui[class*=\"mobile reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:last-child{box-shadow:none}.ui.grid[class*=\"vertically divided\"][class*=\"mobile vertically reversed\"]>.row:first-child:before{box-shadow:0 -1px 0 0 rgba(34,36,38,.15)}.ui.grid[class*=\"vertically divided\"][class*=\"mobile vertically reversed\"]>.row:last-child:before{box-shadow:none}.ui[class*=\"mobile reversed\"].celled.grid>.row>.column:first-child{box-shadow:-1px 0 0 0 #D4D4D5}.ui[class*=\"mobile reversed\"].celled.grid>.row>.column:last-child{box-shadow:none}}@media only screen and (min-width:768px) and (max-width:991px){.ui.grid>[class*=\"tablet reversed\"].row,.ui[class*=\"tablet reversed\"].grid,.ui[class*=\"tablet reversed\"].grid>.row{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ui[class*=\"tablet vertically reversed\"].grid{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ui[class*=\"tablet reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:first-child,.ui[class*=\"tablet reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:first-child{box-shadow:-1px 0 0 0 rgba(34,36,38,.15)}.ui[class*=\"tablet reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:last-child,.ui[class*=\"tablet reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:last-child{box-shadow:none}.ui.grid[class*=\"vertically divided\"][class*=\"tablet vertically reversed\"]>.row:first-child:before{box-shadow:0 -1px 0 0 rgba(34,36,38,.15)}.ui.grid[class*=\"vertically divided\"][class*=\"tablet vertically reversed\"]>.row:last-child:before{box-shadow:none}.ui[class*=\"tablet reversed\"].celled.grid>.row>.column:first-child{box-shadow:-1px 0 0 0 #D4D4D5}.ui[class*=\"tablet reversed\"].celled.grid>.row>.column:last-child{box-shadow:none}}@media only screen and (min-width:992px){.ui.grid>[class*=\"computer reversed\"].row,.ui[class*=\"computer reversed\"].grid,.ui[class*=\"computer reversed\"].grid>.row{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.ui[class*=\"computer vertically reversed\"].grid{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.ui[class*=\"computer reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:first-child,.ui[class*=\"computer reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:first-child{box-shadow:-1px 0 0 0 rgba(34,36,38,.15)}.ui[class*=\"computer reversed\"].divided.grid:not([class*=\"vertically divided\"])>.column:last-child,.ui[class*=\"computer reversed\"].divided.grid:not([class*=\"vertically divided\"])>.row>.column:last-child{box-shadow:none}.ui.grid[class*=\"vertically divided\"][class*=\"computer vertically reversed\"]>.row:first-child:before{box-shadow:0 -1px 0 0 rgba(34,36,38,.15)}.ui.grid[class*=\"vertically divided\"][class*=\"computer vertically reversed\"]>.row:last-child:before{box-shadow:none}.ui[class*=\"computer reversed\"].celled.grid>.row>.column:first-child{box-shadow:-1px 0 0 0 #D4D4D5}.ui[class*=\"computer reversed\"].celled.grid>.row>.column:last-child{box-shadow:none}}@media only screen and (min-width:768px) and (max-width:991px){.ui.doubling.grid{width:auto}.ui.doubling.grid>.row,.ui.grid>.doubling.row{margin:0!important;padding:0!important}.ui.doubling.grid>.row>.column,.ui.grid>.doubling.row>.column{display:inline-block!important;padding-top:1rem!important;padding-bottom:1rem!important;box-shadow:none!important;margin:0}.ui.grid>[class*=\"two column\"].doubling.row.row>.column,.ui[class*=\"two column\"].doubling.grid>.column:not(.row),.ui[class*=\"two column\"].doubling.grid>.row>.column{width:100%!important}.ui.grid>[class*=\"three column\"].doubling.row.row>.column,.ui.grid>[class*=\"four column\"].doubling.row.row>.column,.ui[class*=\"three column\"].doubling.grid>.column:not(.row),.ui[class*=\"three column\"].doubling.grid>.row>.column,.ui[class*=\"four column\"].doubling.grid>.column:not(.row),.ui[class*=\"four column\"].doubling.grid>.row>.column{width:50%!important}.ui.grid>[class*=\"five column\"].doubling.row.row>.column,.ui.grid>[class*=\"six column\"].doubling.row.row>.column,.ui.grid>[class*=\"seven column\"].doubling.row.row>.column,.ui[class*=\"five column\"].doubling.grid>.column:not(.row),.ui[class*=\"five column\"].doubling.grid>.row>.column,.ui[class*=\"six column\"].doubling.grid>.column:not(.row),.ui[class*=\"six column\"].doubling.grid>.row>.column,.ui[class*=\"seven column\"].doubling.grid>.column:not(.row),.ui[class*=\"seven column\"].doubling.grid>.row>.column{width:33.33333333%!important}.ui.grid>[class*=\"eight column\"].doubling.row.row>.column,.ui.grid>[class*=\"nine column\"].doubling.row.row>.column,.ui[class*=\"eight column\"].doubling.grid>.column:not(.row),.ui[class*=\"eight column\"].doubling.grid>.row>.column,.ui[class*=\"nine column\"].doubling.grid>.column:not(.row),.ui[class*=\"nine column\"].doubling.grid>.row>.column{width:25%!important}.ui.grid>[class*=\"ten column\"].doubling.row.row>.column,.ui.grid>[class*=\"eleven column\"].doubling.row.row>.column,.ui[class*=\"ten column\"].doubling.grid>.column:not(.row),.ui[class*=\"ten column\"].doubling.grid>.row>.column,.ui[class*=\"eleven column\"].doubling.grid>.column:not(.row),.ui[class*=\"eleven column\"].doubling.grid>.row>.column{width:20%!important}.ui.grid>[class*=\"twelve column\"].doubling.row.row>.column,.ui.grid>[class*=\"thirteen column\"].doubling.row.row>.column,.ui[class*=\"twelve column\"].doubling.grid>.column:not(.row),.ui[class*=\"twelve column\"].doubling.grid>.row>.column,.ui[class*=\"thirteen column\"].doubling.grid>.column:not(.row),.ui[class*=\"thirteen column\"].doubling.grid>.row>.column{width:16.66666667%!important}.ui.grid>[class*=\"fourteen column\"].doubling.row.row>.column,.ui.grid>[class*=\"fifteen column\"].doubling.row.row>.column,.ui[class*=\"fourteen column\"].doubling.grid>.column:not(.row),.ui[class*=\"fourteen column\"].doubling.grid>.row>.column,.ui[class*=\"fifteen column\"].doubling.grid>.column:not(.row),.ui[class*=\"fifteen column\"].doubling.grid>.row>.column{width:14.28571429%!important}.ui.grid>[class*=\"sixteen column\"].doubling.row.row>.column,.ui[class*=\"sixteen column\"].doubling.grid>.column:not(.row),.ui[class*=\"sixteen column\"].doubling.grid>.row>.column{width:12.5%!important}.ui.grid.grid.grid>.row>[class*=\"computer only\"].column:not(.tablet),.ui.grid.grid.grid>.row>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"mobile only\"].column:not(.tablet),.ui.grid.grid.grid>[class*=\"computer only\"].column:not(.tablet),.ui.grid.grid.grid>[class*=\"computer only\"].row:not(.tablet),.ui.grid.grid.grid>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"large screen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"mobile only\"].column:not(.tablet),.ui.grid.grid.grid>[class*=\"mobile only\"].row:not(.tablet),.ui[class*=\"computer only\"].grid.grid.grid:not(.tablet),.ui[class*=\"large screen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"widescreen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"mobile only\"].grid.grid.grid:not(.tablet){display:none!important}}@media only screen and (max-width:767px){.ui.doubling.grid>.row,.ui.grid>.doubling.row{margin:0!important;padding:0!important}.ui.doubling.grid>.row>.column,.ui.grid>.doubling.row>.column{padding-top:1rem!important;padding-bottom:1rem!important;margin:0!important;box-shadow:none!important}.ui.grid>[class*=\"two column\"].doubling:not(.stackable).row.row>.column,.ui[class*=\"two column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"two column\"].doubling:not(.stackable).grid>.row>.column{width:100%!important}.ui.grid>[class*=\"three column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"four column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"five column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"six column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"seven column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"eight column\"].doubling:not(.stackable).row.row>.column,.ui[class*=\"three column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"three column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"four column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"four column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"five column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"five column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"six column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"six column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"seven column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"seven column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"eight column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"eight column\"].doubling:not(.stackable).grid>.row>.column{width:50%!important}.ui.grid>[class*=\"nine column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"ten column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"eleven column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"twelve column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"thirteen column\"].doubling:not(.stackable).row.row>.column,.ui[class*=\"nine column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"nine column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"ten column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"ten column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"eleven column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"eleven column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"twelve column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"twelve column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"thirteen column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"thirteen column\"].doubling:not(.stackable).grid>.row>.column{width:33.33333333%!important}.ui.grid>[class*=\"fourteen column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"fifteen column\"].doubling:not(.stackable).row.row>.column,.ui.grid>[class*=\"sixteen column\"].doubling:not(.stackable).row.row>.column,.ui[class*=\"fourteen column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"fourteen column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"fifteen column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"fifteen column\"].doubling:not(.stackable).grid>.row>.column,.ui[class*=\"sixteen column\"].doubling:not(.stackable).grid>.column:not(.row),.ui[class*=\"sixteen column\"].doubling:not(.stackable).grid>.row>.column{width:25%!important}.ui.stackable.grid{width:auto;margin-left:0!important;margin-right:0!important}.ui.grid>.stackable.stackable.row>.column,.ui.stackable.grid>.column.grid>.column,.ui.stackable.grid>.column.row>.column,.ui.stackable.grid>.column:not(.row),.ui.stackable.grid>.row>.column,.ui.stackable.grid>.row>.wide.column,.ui.stackable.grid>.wide.column{width:100%!important;margin:0!important;box-shadow:none!important;padding:1rem!important}.ui.stackable.grid:not(.vertically)>.row{margin:0;padding:0}.ui.container>.ui.stackable.grid>.column,.ui.container>.ui.stackable.grid>.row>.column{padding-left:0!important;padding-right:0!important}.ui.grid .ui.stackable.grid,.ui.segment:not(.vertical) .ui.stackable.page.grid{margin-left:-1rem!important;margin-right:-1rem!important}.ui.stackable.celled.grid>.column:not(.row):first-child,.ui.stackable.celled.grid>.row:first-child>.column:first-child,.ui.stackable.divided.grid>.column:not(.row):first-child,.ui.stackable.divided.grid>.row:first-child>.column:first-child{border-top:none!important}.ui.inverted.stackable.celled.grid>.column:not(.row),.ui.inverted.stackable.celled.grid>.row>.column,.ui.inverted.stackable.divided.grid>.column:not(.row),.ui.inverted.stackable.divided.grid>.row>.column{border-top:1px solid rgba(255,255,255,.1)}.ui.stackable.celled.grid>.column:not(.row),.ui.stackable.celled.grid>.row>.column,.ui.stackable.divided:not(.vertically).grid>.column:not(.row),.ui.stackable.divided:not(.vertically).grid>.row>.column{border-top:1px solid rgba(34,36,38,.15);box-shadow:none!important;padding-top:2rem!important;padding-bottom:2rem!important}.ui.stackable.celled.grid>.row{box-shadow:none!important}.ui.stackable.divided:not(.vertically).grid>.column:not(.row),.ui.stackable.divided:not(.vertically).grid>.row>.column{padding-left:0!important;padding-right:0!important}.ui.grid.grid.grid>.row>[class*=\"tablet only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"computer only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"tablet only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"tablet only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"computer only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"computer only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"large screen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].row:not(.mobile),.ui[class*=\"tablet only\"].grid.grid.grid:not(.mobile),.ui[class*=\"computer only\"].grid.grid.grid:not(.mobile),.ui[class*=\"large screen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"widescreen only\"].grid.grid.grid:not(.mobile){display:none!important}}@media only screen and (min-width:992px) and (max-width:1199px){.ui.grid.grid.grid>.row>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>.row>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].row:not(.computer),.ui.grid.grid.grid>[class*=\"large screen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"large screen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"mobile only\"].row:not(.computer),.ui[class*=\"tablet only\"].grid.grid.grid:not(.computer),.ui[class*=\"large screen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"widescreen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"mobile only\"].grid.grid.grid:not(.computer){display:none!important}}@media only screen and (min-width:1200px) and (max-width:1919px){.ui.grid.grid.grid>.row>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>.row>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>.row>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].row:not(.computer),.ui.grid.grid.grid>[class*=\"widescreen only\"].column:not(.mobile),.ui.grid.grid.grid>[class*=\"widescreen only\"].row:not(.mobile),.ui.grid.grid.grid>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"mobile only\"].row:not(.computer),.ui[class*=\"tablet only\"].grid.grid.grid:not(.computer),.ui[class*=\"widescreen only\"].grid.grid.grid:not(.mobile),.ui[class*=\"mobile only\"].grid.grid.grid:not(.computer){display:none!important}}@media only screen and (min-width:1920px){.ui.grid.grid.grid>.row>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>.row>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"tablet only\"].row:not(.computer),.ui.grid.grid.grid>[class*=\"mobile only\"].column:not(.computer),.ui.grid.grid.grid>[class*=\"mobile only\"].row:not(.computer),.ui[class*=\"tablet only\"].grid.grid.grid:not(.computer),.ui[class*=\"mobile only\"].grid.grid.grid:not(.computer){display:none!important}}.ui.menu{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1rem 0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;background:#FFF;font-weight:400;border:1px solid rgba(34,36,38,.15);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border-radius:.28571429rem;min-height:2.85714286em}.ui.menu:after{content:'';display:block;height:0;clear:both;visibility:hidden}.ui.menu:first-child{margin-top:0}.ui.menu:last-child{margin-bottom:0}.ui.menu .menu{margin:0}.ui.menu:not(.vertical)>.menu{display:-webkit-box;display:-ms-flexbox;display:flex}.ui.menu:not(.vertical) .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ui.menu .item{position:relative;vertical-align:middle;line-height:1;text-decoration:none;-webkit-tap-highlight-color:transparent;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:0 0;padding:.92857143em 1.14285714em;text-transform:none;color:rgba(0,0,0,.87);font-weight:400;-webkit-transition:background .1s ease,box-shadow .1s ease,color .1s ease;transition:background .1s ease,box-shadow .1s ease,color .1s ease}.ui.menu>.item:first-child{border-radius:.28571429rem 0 0 .28571429rem}.ui.menu .item:before{position:absolute;content:'';top:0;right:0;height:100%;width:1px;background:rgba(34,36,38,.1)}.ui.menu .item>a:not(.ui),.ui.menu .item>p:only-child,.ui.menu .text.item>*{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;line-height:1.3}.ui.menu .item>p:first-child{margin-top:0}.ui.menu .item>p:last-child{margin-bottom:0}.ui.menu .item>i.icon{opacity:.9;float:none;margin:0 .35714286em 0 0}.ui.menu:not(.vertical) .item>.button{position:relative;top:0;margin:-.5em 0;padding-bottom:.78571429em;padding-top:.78571429em;font-size:1em}.ui.menu>.container,.ui.menu>.grid{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:inherit;flex-direction:inherit}.ui.menu .item>.input{width:100%}.ui.menu:not(.vertical) .item>.input{position:relative;top:0;margin:-.5em 0}.ui.menu .item>.input input{font-size:1em;padding-top:.57142857em;padding-bottom:.57142857em}.ui.menu .header.item,.ui.vertical.menu .header.item{margin:0;background:0 0;text-transform:normal;font-weight:700}.ui.vertical.menu .item>.header:not(.ui){margin:0 0 .5em;font-size:1em;font-weight:700}.ui.menu .item>i.dropdown.icon{padding:0;float:right;margin:0 0 0 1em}.ui.menu .dropdown.item .menu{left:0;min-width:calc(100% - 1px);border-radius:0 0 .28571429rem .28571429rem;background:#FFF;margin:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.08);-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.ui.menu .ui.dropdown .menu>.item{margin:0;text-align:left;font-size:1em!important;padding:.78571429em 1.14285714em!important;background:0 0!important;color:rgba(0,0,0,.87)!important;text-transform:none!important;font-weight:400!important;box-shadow:none!important;-webkit-transition:none!important;transition:none!important}.ui.menu .ui.dropdown .menu>.item:hover,.ui.menu .ui.dropdown .menu>.selected.item{background:rgba(0,0,0,.05)!important;color:rgba(0,0,0,.95)!important}.ui.menu .ui.dropdown .menu>.active.item{background:rgba(0,0,0,.03)!important;font-weight:700!important;color:rgba(0,0,0,.95)!important}.ui.menu .ui.dropdown.item .menu .item:not(.filtered){display:block}.ui.menu .ui.dropdown .menu>.item .icon:not(.dropdown){display:inline-block;font-size:1em!important;float:none;margin:0 .75em 0 0}.ui.secondary.menu .dropdown.item>.menu,.ui.text.menu .dropdown.item>.menu{border-radius:.28571429rem;margin-top:.35714286em}.ui.menu .pointing.dropdown.item .menu{margin-top:.75em}.ui.inverted.menu .search.dropdown.item>.search,.ui.inverted.menu .search.dropdown.item>.text{color:rgba(255,255,255,.9)}.ui.vertical.menu .dropdown.item>.icon{float:right;content:\"\\F0DA\";margin-left:1em}.ui.vertical.menu .dropdown.item .menu{left:100%;min-width:0;margin:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.08);border-radius:0 .28571429rem .28571429rem}.ui.vertical.menu .dropdown.item.upward .menu{bottom:0}.ui.vertical.menu .dropdown.item:not(.upward) .menu{top:0}.ui.vertical.menu .active.dropdown.item{border-top-right-radius:0;border-bottom-right-radius:0}.ui.vertical.menu .dropdown.active.item{box-shadow:none}.ui.item.menu .dropdown .menu .item{width:100%}.ui.menu .item>.label{background:#999;color:#FFF;margin-left:1em;padding:.3em .78571429em}.ui.vertical.menu .item>.label{background:#999;color:#FFF;margin-top:-.15em;margin-bottom:-.15em;padding:.3em .78571429em;float:right;text-align:center}.ui.menu .item>.floating.label{padding:.3em .78571429em}.ui.menu .item>img:not(.ui){display:inline-block;vertical-align:middle;margin:-.3em 0;width:2.5em}.ui.vertical.menu .item>img:not(.ui):only-child{display:block;max-width:100%;width:auto}.ui.vertical.sidebar.menu>.item:first-child:before{display:block!important}.ui.vertical.sidebar.menu>.item::before{top:auto;bottom:0}@media only screen and (max-width:767px){.ui.menu>.ui.container{width:100%!important;margin-left:0!important;margin-right:0!important}}@media only screen and (min-width:768px){.ui.menu:not(.secondary):not(.text):not(.tabular):not(.borderless)>.container>.item:not(.right):not(.borderless):first-child{border-left:1px solid rgba(34,36,38,.1)}}.ui.link.menu .item:hover,.ui.menu .dropdown.item:hover,.ui.menu .link.item:hover,.ui.menu a.item:hover{cursor:pointer;background:rgba(0,0,0,.03);color:rgba(0,0,0,.95)}.ui.link.menu .item:active,.ui.menu .link.item:active,.ui.menu a.item:active{background:rgba(0,0,0,.03);color:rgba(0,0,0,.95)}.ui.menu .active.item{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);font-weight:400;box-shadow:none}.ui.menu .active.item>i.icon{opacity:1}.ui.menu .active.item:hover,.ui.vertical.menu .active.item:hover{background-color:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.menu .item.disabled,.ui.menu .item.disabled:hover{cursor:default;background-color:transparent!important;color:rgba(40,40,40,.3)}.ui.menu:not(.vertical) .left.item,.ui.menu:not(.vertical) .left.menu{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:auto!important}.ui.menu:not(.vertical) .right.item,.ui.menu:not(.vertical) .right.menu{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:auto!important}.ui.menu .right.item::before,.ui.menu .right.menu>.item::before{right:auto;left:0}.ui.vertical.menu{display:block;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#FFF;box-shadow:0 1px 2px 0 rgba(34,36,38,.15)}.ui.vertical.menu .item{display:block;background:0 0;border-top:none;border-right:none}.ui.vertical.menu>.item:first-child{border-radius:.28571429rem .28571429rem 0 0}.ui.vertical.menu>.item:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui.vertical.menu .item>i.icon{width:1.18em;float:right;margin:0 0 0 .5em}.ui.vertical.menu .item>.label+i.icon{float:none;margin:0 .5em 0 0}.ui.vertical.menu .item:before{position:absolute;content:'';top:0;left:0;width:100%;height:1px;background:rgba(34,36,38,.1)}.ui.vertical.menu .item:first-child:before{display:none!important}.ui.vertical.menu .item>.menu{margin:.5em -1.14285714em 0}.ui.vertical.menu .menu .item{background:0 0;padding:.5em 1.33333333em;font-size:.85714286em;color:rgba(0,0,0,.5)}.ui.vertical.menu .item .menu .link.item:hover,.ui.vertical.menu .item .menu a.item:hover{color:rgba(0,0,0,.85)}.ui.vertical.menu .menu .item:before{display:none}.ui.vertical.menu .active.item{background:rgba(0,0,0,.05);border-radius:0;box-shadow:none}.ui.vertical.menu>.active.item:first-child{border-radius:.28571429rem .28571429rem 0 0}.ui.vertical.menu>.active.item:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui.vertical.menu>.active.item:only-child{border-radius:.28571429rem}.ui.vertical.menu .active.item .menu .active.item{border-left:none}.ui.vertical.menu .item .menu .active.item{background-color:transparent;font-weight:700;color:rgba(0,0,0,.95)}.ui.tabular.menu{border-radius:0;box-shadow:none!important;border:none;background:none;border-bottom:1px solid #D4D4D5}.ui.tabular.fluid.menu{width:calc(100% + 2px)!important}.ui.tabular.menu .item{background:0 0;border-bottom:none;border-left:1px solid transparent;border-right:1px solid transparent;border-top:2px solid transparent;padding:.92857143em 1.42857143em;color:rgba(0,0,0,.87)}.ui.tabular.menu .item:before{display:none}.ui.tabular.menu .item:hover{background-color:transparent;color:rgba(0,0,0,.8)}.ui.tabular.menu .active.item{background:#FFF;color:rgba(0,0,0,.95);border-top-width:1px;border-color:#D4D4D5;font-weight:700;margin-bottom:-1px;box-shadow:none;border-radius:.28571429rem .28571429rem 0 0!important}.ui.tabular.menu+.attached:not(.top).segment,.ui.tabular.menu+.attached:not(.top).segment+.attached:not(.top).segment{border-top:none;margin-left:0;margin-top:0;margin-right:0;width:100%}.top.attached.segment+.ui.bottom.tabular.menu{position:relative;width:calc(100% + 2px);left:-1px}.ui.bottom.tabular.menu{background:none;border-radius:0;box-shadow:none!important;border-bottom:none;border-top:1px solid #D4D4D5}.ui.bottom.tabular.menu .item{background:0 0;border-left:1px solid transparent;border-right:1px solid transparent;border-bottom:1px solid transparent;border-top:none}.ui.bottom.tabular.menu .active.item{background:#FFF;color:rgba(0,0,0,.95);border-color:#D4D4D5;margin:-1px 0 0;border-radius:0 0 .28571429rem .28571429rem!important}.ui.vertical.tabular.menu{background:none;border-radius:0;box-shadow:none!important;border-bottom:none;border-right:1px solid #D4D4D5}.ui.vertical.tabular.menu .item{background:0 0;border-left:1px solid transparent;border-bottom:1px solid transparent;border-top:1px solid transparent;border-right:none}.ui.vertical.tabular.menu .active.item{background:#FFF;color:rgba(0,0,0,.95);border-color:#D4D4D5;margin:0 -1px 0 0;border-radius:.28571429rem 0 0 .28571429rem!important}.ui.vertical.right.tabular.menu{background:none;border-radius:0;box-shadow:none!important;border-bottom:none;border-right:none;border-left:1px solid #D4D4D5}.ui.vertical.right.tabular.menu .item{background:0 0;border-right:1px solid transparent;border-bottom:1px solid transparent;border-top:1px solid transparent;border-left:none}.ui.vertical.right.tabular.menu .active.item{background:#FFF;color:rgba(0,0,0,.95);border-color:#D4D4D5;margin:0 0 0 -1px;border-radius:0 .28571429rem .28571429rem 0!important}.ui.tabular.menu .active.dropdown.item{margin-bottom:0;border-left:1px solid transparent;border-right:1px solid transparent;border-top:2px solid transparent;border-bottom:none}.ui.pagination.menu{margin:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.ui.pagination.menu .item:last-child{border-radius:0 .28571429rem .28571429rem 0}.ui.pagination.menu .item:last-child:before{display:none}.ui.pagination.menu .item{min-width:3em;text-align:center}.ui.pagination.menu .icon.item i.icon{vertical-align:top}.ui.pagination.menu .active.item{border-top:none;padding-top:.92857143em;background-color:rgba(0,0,0,.05);color:rgba(0,0,0,.95);box-shadow:none}.ui.secondary.menu{background:0 0;margin-left:-.35714286em;margin-right:-.35714286em;border-radius:0;border:none;box-shadow:none}.ui.secondary.menu .item{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;box-shadow:none;border:none;padding:.78571429em .92857143em;margin:0 .35714286em;background:0 0;-webkit-transition:color .1s ease;transition:color .1s ease;border-radius:.28571429rem}.ui.secondary.menu .item:before{display:none!important}.ui.secondary.menu .header.item{border-radius:0;border-right:none;background:none}.ui.secondary.menu .item>img:not(.ui){margin:0}.ui.secondary.menu .dropdown.item:hover,.ui.secondary.menu .link.item:hover,.ui.secondary.menu a.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.secondary.menu .active.item{box-shadow:none;background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);border-radius:.28571429rem}.ui.secondary.menu .active.item:hover{box-shadow:none;background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.secondary.inverted.menu .link.item,.ui.secondary.inverted.menu a.item{color:rgba(255,255,255,.7)!important}.ui.secondary.inverted.menu .dropdown.item:hover,.ui.secondary.inverted.menu .link.item:hover,.ui.secondary.inverted.menu a.item:hover{background:rgba(255,255,255,.08);color:#fff!important}.ui.secondary.inverted.menu .active.item{background:rgba(255,255,255,.15);color:#fff!important}.ui.secondary.item.menu{margin-left:0;margin-right:0}.ui.secondary.item.menu .item:last-child{margin-right:0}.ui.secondary.attached.menu{box-shadow:none}.ui.vertical.secondary.menu .item:not(.dropdown)>.menu{margin:0 -.92857143em}.ui.vertical.secondary.menu .item:not(.dropdown)>.menu>.item{margin:0;padding:.5em 1.33333333em}.ui.secondary.vertical.menu>.item{border:none;margin:0 0 .35714286em;border-radius:.28571429rem!important}.ui.secondary.vertical.menu>.header.item{border-radius:0}.ui.secondary.inverted.menu,.ui.vertical.secondary.menu .item>.menu .item{background-color:transparent}.ui.secondary.pointing.menu{margin-left:0;margin-right:0;border-bottom:2px solid rgba(34,36,38,.15)}.ui.secondary.pointing.menu .item{border-bottom-color:transparent;border-bottom-style:solid;border-radius:0;-ms-flex-item-align:end;align-self:flex-end;margin:0 0 -2px;padding:.85714286em 1.14285714em;border-bottom-width:2px;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.secondary.pointing.menu .header.item{color:rgba(0,0,0,.85)!important}.ui.secondary.pointing.menu .text.item{box-shadow:none!important}.ui.secondary.pointing.menu .item:after{display:none}.ui.secondary.pointing.menu .dropdown.item:hover,.ui.secondary.pointing.menu .link.item:hover,.ui.secondary.pointing.menu a.item:hover{background-color:transparent;color:rgba(0,0,0,.87)}.ui.secondary.pointing.menu .dropdown.item:active,.ui.secondary.pointing.menu .link.item:active,.ui.secondary.pointing.menu a.item:active{background-color:transparent;border-color:rgba(34,36,38,.15)}.ui.secondary.pointing.menu .active.item{background-color:transparent;box-shadow:none;border-color:#1B1C1D;font-weight:700;color:rgba(0,0,0,.95)}.ui.secondary.pointing.menu .active.item:hover{border-color:#1B1C1D;color:rgba(0,0,0,.95)}.ui.secondary.pointing.menu .active.dropdown.item{border-color:transparent}.ui.secondary.vertical.pointing.menu{border-bottom-width:0;border-right-width:2px;border-right-style:solid;border-right-color:rgba(34,36,38,.15)}.ui.secondary.vertical.pointing.menu .item{border-bottom:none;border-right-style:solid;border-right-color:transparent;border-radius:0!important;margin:0 -2px 0 0;border-right-width:2px}.ui.secondary.vertical.pointing.menu .active.item{border-color:#1B1C1D}.ui.secondary.inverted.pointing.menu{border-width:2px;border-color:rgba(34,36,38,.15)}.ui.secondary.inverted.pointing.menu .item{color:rgba(255,255,255,.9)}.ui.secondary.inverted.pointing.menu .header.item{color:#FFF!important}.ui.secondary.inverted.pointing.menu .link.item:hover,.ui.secondary.inverted.pointing.menu a.item:hover{color:rgba(0,0,0,.95)}.ui.secondary.inverted.pointing.menu .active.item{border-color:#FFF;color:#fff}.ui.text.menu{background:none;border-radius:0;box-shadow:none;border:none;margin:1em -.5em}.ui.text.menu .item{border-radius:0;box-shadow:none;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;margin:0;padding:.35714286em .5em;font-weight:400;color:rgba(0,0,0,.6);-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.ui.text.menu .item:before,.ui.text.menu .menu .item:before{display:none!important}.ui.text.menu .header.item{background-color:transparent;opacity:1;color:rgba(0,0,0,.85);font-size:.92857143em;text-transform:uppercase;font-weight:700}.ui.text.item.menu .item,.ui.text.menu .item>img:not(.ui){margin:0}.ui.vertical.text.menu{margin:1em 0}.ui.vertical.text.menu:first-child{margin-top:0}.ui.vertical.text.menu:last-child{margin-bottom:0}.ui.vertical.text.menu .item{margin:.57142857em 0;padding-left:0;padding-right:0}.ui.vertical.text.menu .item>i.icon{float:none;margin:0 .35714286em 0 0}.ui.vertical.text.menu .header.item{margin:.57142857em 0 .71428571em}.ui.vertical.text.menu .item:not(.dropdown)>.menu{margin:0}.ui.vertical.text.menu .item:not(.dropdown)>.menu>.item{margin:0;padding:.5em 0}.ui.text.menu .item:hover{opacity:1;background-color:transparent}.ui.text.menu .active.item{background-color:transparent;border:none;box-shadow:none;font-weight:400;color:rgba(0,0,0,.95)}.ui.text.menu .active.item:hover{background-color:transparent}.ui.text.attached.menu,.ui.text.pointing.menu .active.item:after{box-shadow:none}.ui.inverted.text.menu,.ui.inverted.text.menu .active.item,.ui.inverted.text.menu .item,.ui.inverted.text.menu .item:hover{background-color:transparent!important}.ui.fluid.text.menu{margin-left:0;margin-right:0}.ui.vertical.icon.menu{display:inline-block;width:auto}.ui.icon.menu .item{height:auto;text-align:center;color:#1B1C1D}.ui.icon.menu .item>.icon:not(.dropdown){margin:0;opacity:1}.ui.icon.menu .icon:before{opacity:1}.ui.menu .icon.item>.icon{width:auto;margin:0 auto}.ui.vertical.icon.menu .item>.icon:not(.dropdown){display:block;opacity:1;margin:0 auto;float:none}.ui.inverted.icon.menu .item{color:#FFF}.ui.labeled.icon.menu{text-align:center}.ui.labeled.icon.menu .item{min-width:6em;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.labeled.icon.menu .item>.icon:not(.dropdown){height:1em;display:block;font-size:1.71428571em!important;margin:0 auto .5rem!important}.ui.fluid.labeled.icon.menu>.item{min-width:0}@media only screen and (max-width:767px){.ui.stackable.menu{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.stackable.menu .item{width:100%!important}.ui.stackable.menu .item:before{position:absolute;content:'';top:auto;bottom:0;left:0;width:100%;height:1px;background:rgba(34,36,38,.1)}.ui.stackable.menu .left.item,.ui.stackable.menu .left.menu{margin-right:0!important}.ui.stackable.menu .right.item,.ui.stackable.menu .right.menu{margin-left:0!important}}.ui.menu .red.active.item,.ui.red.menu .active.item{border-color:#DB2828!important;color:#DB2828!important}.ui.menu .orange.active.item,.ui.orange.menu .active.item{border-color:#F2711C!important;color:#F2711C!important}.ui.menu .yellow.active.item,.ui.yellow.menu .active.item{border-color:#FBBD08!important;color:#FBBD08!important}.ui.menu .olive.active.item,.ui.olive.menu .active.item{border-color:#B5CC18!important;color:#B5CC18!important}.ui.green.menu .active.item,.ui.menu .green.active.item{border-color:#21BA45!important;color:#21BA45!important}.ui.menu .teal.active.item,.ui.teal.menu .active.item{border-color:#00B5AD!important;color:#00B5AD!important}.ui.blue.menu .active.item,.ui.menu .blue.active.item{border-color:#2185D0!important;color:#2185D0!important}.ui.menu .violet.active.item,.ui.violet.menu .active.item{border-color:#6435C9!important;color:#6435C9!important}.ui.menu .purple.active.item,.ui.purple.menu .active.item{border-color:#A333C8!important;color:#A333C8!important}.ui.menu .pink.active.item,.ui.pink.menu .active.item{border-color:#E03997!important;color:#E03997!important}.ui.brown.menu .active.item,.ui.menu .brown.active.item{border-color:#A5673F!important;color:#A5673F!important}.ui.grey.menu .active.item,.ui.menu .grey.active.item{border-color:#767676!important;color:#767676!important}.ui.inverted.menu{border:0 solid transparent;background:#1B1C1D;box-shadow:none}.ui.inverted.menu .item,.ui.inverted.menu .item>a:not(.ui){background:0 0;color:rgba(255,255,255,.9)}.ui.inverted.menu .item.menu{background:0 0}.ui.inverted.menu .item:before,.ui.vertical.inverted.menu .item:before{background:rgba(255,255,255,.08)}.ui.vertical.inverted.menu .menu .item,.ui.vertical.inverted.menu .menu .item a:not(.ui){color:rgba(255,255,255,.5)}.ui.inverted.menu .header.item{margin:0;background:0 0;box-shadow:none}.ui.inverted.menu .item.disabled,.ui.inverted.menu .item.disabled:hover{color:rgba(225,225,225,.3)}.ui.inverted.menu .dropdown.item:hover,.ui.inverted.menu .link.item:hover,.ui.inverted.menu a.item:hover,.ui.link.inverted.menu .item:hover{background:rgba(255,255,255,.08);color:#fff}.ui.vertical.inverted.menu .item .menu .link.item:hover,.ui.vertical.inverted.menu .item .menu a.item:hover{background:0 0;color:#fff}.ui.inverted.menu .link.item:active,.ui.inverted.menu a.item:active{background:rgba(255,255,255,.08);color:#fff}.ui.inverted.menu .active.item{background:rgba(255,255,255,.15);color:#fff!important}.ui.inverted.vertical.menu .item .menu .active.item{background:0 0;color:#FFF}.ui.inverted.pointing.menu .active.item:after{background:#3D3E3F!important;margin:0!important;box-shadow:none!important;border:none!important}.ui.inverted.menu .active.item:hover{background:rgba(255,255,255,.15);color:#FFF!important}.ui.inverted.pointing.menu .active.item:hover:after{background:#3D3E3F!important}.ui.floated.menu{float:left;margin:0 .5rem 0 0}.ui.floated.menu .item:last-child:before{display:none}.ui.right.floated.menu{float:right;margin:0 0 0 .5rem}.ui.inverted.menu .red.active.item,.ui.inverted.red.menu{background-color:#DB2828}.ui.inverted.red.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.red.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .orange.active.item,.ui.inverted.orange.menu{background-color:#F2711C}.ui.inverted.orange.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.orange.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .yellow.active.item,.ui.inverted.yellow.menu{background-color:#FBBD08}.ui.inverted.yellow.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.yellow.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .olive.active.item,.ui.inverted.olive.menu{background-color:#B5CC18}.ui.inverted.olive.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.olive.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.green.menu,.ui.inverted.menu .green.active.item{background-color:#21BA45}.ui.inverted.green.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.green.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .teal.active.item,.ui.inverted.teal.menu{background-color:#00B5AD}.ui.inverted.teal.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.teal.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.blue.menu,.ui.inverted.menu .blue.active.item{background-color:#2185D0}.ui.inverted.blue.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.blue.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .violet.active.item,.ui.inverted.violet.menu{background-color:#6435C9}.ui.inverted.violet.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.violet.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .purple.active.item,.ui.inverted.purple.menu{background-color:#A333C8}.ui.inverted.purple.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.purple.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.menu .pink.active.item,.ui.inverted.pink.menu{background-color:#E03997}.ui.inverted.pink.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.pink.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.brown.menu,.ui.inverted.menu .brown.active.item{background-color:#A5673F}.ui.inverted.brown.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.brown.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.inverted.grey.menu,.ui.inverted.menu .grey.active.item{background-color:#767676}.ui.inverted.grey.menu .item:before{background-color:rgba(34,36,38,.1)}.ui.inverted.grey.menu .active.item{background-color:rgba(0,0,0,.1)!important}.ui.fitted.menu .item,.ui.fitted.menu .item .menu .item,.ui.menu .fitted.item{padding:0}.ui.horizontally.fitted.menu .item,.ui.horizontally.fitted.menu .item .menu .item,.ui.menu .horizontally.fitted.item{padding-top:.92857143em;padding-bottom:.92857143em}.ui.menu .vertically.fitted.item,.ui.vertically.fitted.menu .item,.ui.vertically.fitted.menu .item .menu .item{padding-left:1.14285714em;padding-right:1.14285714em}.ui.borderless.menu .item .menu .item:before,.ui.borderless.menu .item:before,.ui.menu .borderless.item:before{background:0 0!important}.ui.compact.menu{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0;vertical-align:middle}.ui.compact.vertical.menu{display:inline-block;width:auto!important}.ui.compact.menu .item:last-child{border-radius:0 .28571429rem .28571429rem 0}.ui.compact.menu .item:last-child:before{display:none}.ui.compact.vertical.menu .item:last-child::before{display:block}.ui.menu.fluid,.ui.vertical.menu.fluid{width:100%!important}.ui.item.menu,.ui.item.menu .item{width:100%;padding-left:0!important;padding-right:0!important;margin-left:0!important;margin-right:0!important;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ui.item.menu .item:last-child:before{display:none}.ui.menu.two.item .item{width:50%}.ui.menu.three.item .item{width:33.333%}.ui.menu.four.item .item{width:25%}.ui.menu.five.item .item{width:20%}.ui.menu.six.item .item{width:16.666%}.ui.menu.seven.item .item{width:14.285%}.ui.menu.eight.item .item{width:12.5%}.ui.menu.nine.item .item{width:11.11%}.ui.menu.ten.item .item{width:10%}.ui.menu.eleven.item .item{width:9.09%}.ui.menu.twelve.item .item{width:8.333%}.ui.menu.fixed{position:fixed;z-index:101;margin:0;width:100%}.ui.menu.fixed,.ui.menu.fixed .item:first-child,.ui.menu.fixed .item:last-child{border-radius:0!important}.ui.fixed.menu,.ui[class*=\"top fixed\"].menu{top:0;left:0;right:auto;bottom:auto}.ui[class*=\"top fixed\"].menu{border-top:none;border-left:none;border-right:none}.ui[class*=\"right fixed\"].menu{border-top:none;border-bottom:none;border-right:none;top:0;right:0;left:auto;bottom:auto;width:auto;height:100%}.ui[class*=\"bottom fixed\"].menu{border-bottom:none;border-left:none;border-right:none;bottom:0;left:0;top:auto;right:auto}.ui[class*=\"left fixed\"].menu{border-top:none;border-bottom:none;border-left:none;top:0;left:0;right:auto;bottom:auto;width:auto;height:100%}.ui.fixed.menu+.ui.grid{padding-top:2.75rem}.ui.pointing.menu .item:after{visibility:hidden;position:absolute;content:'';top:100%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);background:0 0;margin:.5px 0 0;width:.57142857em;height:.57142857em;border:none;border-bottom:1px solid #D4D4D5;border-right:1px solid #D4D4D5;z-index:2;-webkit-transition:background .1s ease;transition:background .1s ease}.ui.vertical.pointing.menu .item:after{position:absolute;top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateX(50%) translateY(-50%) rotate(45deg);transform:translateX(50%) translateY(-50%) rotate(45deg);margin:0 -.5px 0 0;border:none;border-top:1px solid #D4D4D5;border-right:1px solid #D4D4D5}.ui.pointing.menu .active.item:after{visibility:visible}.ui.pointing.menu .active.dropdown.item:after{visibility:hidden}.ui.pointing.menu .active.item .menu .active.item:after,.ui.pointing.menu .dropdown.active.item:after{display:none}.ui.pointing.menu .active.item:after,.ui.pointing.menu .active.item:hover:after,.ui.vertical.pointing.menu .active.item:after,.ui.vertical.pointing.menu .active.item:hover:after{background-color:#F2F2F2}.ui.vertical.pointing.menu .menu .active.item:after{background-color:#FFF}.ui.attached.menu{top:0;bottom:0;border-radius:0;margin:0 -1px;width:calc(100% + 2px);max-width:calc(100% + 2px);box-shadow:none}.ui.attached+.ui.attached.menu:not(.top){border-top:none}.ui[class*=\"top attached\"].menu{bottom:0;margin-bottom:0;top:0;margin-top:1rem;border-radius:.28571429rem .28571429rem 0 0}.ui.menu[class*=\"top attached\"]:first-child{margin-top:0}.ui[class*=\"bottom attached\"].menu{bottom:0;margin-top:0;top:0;margin-bottom:1rem;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),none;border-radius:0 0 .28571429rem .28571429rem}.ui[class*=\"bottom attached\"].menu:last-child{margin-bottom:0}.ui.top.attached.menu>.item:first-child{border-radius:.28571429rem 0 0}.ui.bottom.attached.menu>.item:first-child{border-radius:0 0 0 .28571429rem}.ui.attached.menu:not(.tabular){border:1px solid #D4D4D5}.ui.attached.inverted.menu{border:none}.ui.attached.tabular.menu{margin-left:0;margin-right:0;width:100%}.ui.mini.menu{font-size:.78571429rem}.ui.mini.vertical.menu{width:9rem}.ui.tiny.menu{font-size:.85714286rem}.ui.tiny.vertical.menu{width:11rem}.ui.small.menu{font-size:.92857143rem}.ui.small.vertical.menu{width:13rem}.ui.menu{font-size:1rem}.ui.vertical.menu{width:15rem}.ui.large.menu{font-size:1.07142857rem}.ui.large.vertical.menu{width:18rem}.ui.huge.menu{font-size:1.14285714rem}.ui.huge.vertical.menu{width:20rem}.ui.big.menu{font-size:1.21428571rem}.ui.big.vertical.menu{width:22rem}.ui.massive.menu{font-size:1.28571429rem}.ui.massive.vertical.menu{width:25rem}.ui.message{position:relative;min-height:1em;margin:1em 0;background:#F8F8F9;padding:1em 1.5em;line-height:1.4285em;color:rgba(0,0,0,.87);-webkit-transition:opacity .1s ease,color .1s ease,background .1s ease,box-shadow .1s ease;transition:opacity .1s ease,color .1s ease,background .1s ease,box-shadow .1s ease;border-radius:.28571429rem;box-shadow:0 0 0 1px rgba(34,36,38,.22) inset,0 0 0 0 transparent}.ui.message:first-child{margin-top:0}.ui.message:last-child{margin-bottom:0}.ui.message .header{display:block;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:700;margin:-.14285em 0 0}.ui.message .header:not(.ui){font-size:1.14285714em}.ui.message p{opacity:.85;margin:.75em 0}.ui.message p:first-child{margin-top:0}.ui.message p:last-child{margin-bottom:0}.ui.message .header+p{margin-top:.25em}.ui.message .list:not(.ui){text-align:left;padding:0;opacity:.85;list-style-position:inside;margin:.5em 0 0}.ui.message .list:not(.ui):first-child{margin-top:0}.ui.message .list:not(.ui):last-child{margin-bottom:0}.ui.message .list:not(.ui) li{position:relative;list-style-type:none;margin:0 0 .3em 1em;padding:0}.ui.message .list:not(.ui) li:before{position:absolute;content:'\\2022';left:-1em;height:100%;vertical-align:baseline}.ui.message .list:not(.ui) li:last-child{margin-bottom:0}.ui.message>.icon{margin-right:.6em}.ui.message>.close.icon{cursor:pointer;position:absolute;margin:0;top:.78575em;right:.5em;opacity:.7;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.ui.message>.close.icon:hover{opacity:1}.ui.message>:first-child{margin-top:0}.ui.message>:last-child{margin-bottom:0}.ui.dropdown .menu>.message{margin:0 -1px}.ui.visible.visible.visible.visible.message{display:block}.ui.icon.visible.visible.visible.visible.message{display:-webkit-box;display:-ms-flexbox;display:flex}.ui.hidden.hidden.hidden.hidden.message{display:none}.ui.compact.message{display:inline-block}.ui.attached.message{margin-bottom:-1px;border-radius:.28571429rem .28571429rem 0 0;box-shadow:0 0 0 1px rgba(34,36,38,.15) inset;margin-left:-1px;margin-right:-1px}.ui.attached+.ui.attached.message:not(.top):not(.bottom){margin-top:-1px;border-radius:0}.ui.bottom.attached.message{margin-top:-1px;border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 0 0 1px rgba(34,36,38,.15) inset,0 1px 2px 0 rgba(34,36,38,.15)}.ui.bottom.attached.message:not(:last-child){margin-bottom:1em}.ui.attached.icon.message{width:auto}.ui.icon.message{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ui.icon.message>.icon:not(.close){display:block;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;line-height:1;vertical-align:middle;font-size:3em;opacity:.8}.ui.icon.message>.content{display:block;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;vertical-align:middle}.ui.icon.message .icon:not(.close)+.content{padding-left:0}.ui.icon.message .circular.icon{width:1em}.ui.floating.message{box-shadow:0 0 0 1px rgba(34,36,38,.22) inset,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)}.ui.positive.message{background-color:#FCFFF5;color:#2C662D}.ui.attached.positive.message,.ui.positive.message{box-shadow:0 0 0 1px #A3C293 inset,0 0 0 0 transparent}.ui.positive.message .header{color:#1A531B}.ui.negative.message{background-color:#FFF6F6;color:#9F3A38}.ui.attached.negative.message,.ui.negative.message{box-shadow:0 0 0 1px #E0B4B4 inset,0 0 0 0 transparent}.ui.negative.message .header{color:#912D2B}.ui.info.message{background-color:#F8FFFF;color:#276F86}.ui.attached.info.message,.ui.info.message{box-shadow:0 0 0 1px #A9D5DE inset,0 0 0 0 transparent}.ui.info.message .header{color:#0E566C}.ui.warning.message{background-color:#FFFAF3;color:#573A08}.ui.attached.warning.message,.ui.warning.message{box-shadow:0 0 0 1px #C9BA9B inset,0 0 0 0 transparent}.ui.warning.message .header{color:#794B02}.ui.error.message{background-color:#FFF6F6;color:#9F3A38}.ui.attached.error.message,.ui.error.message{box-shadow:0 0 0 1px #E0B4B4 inset,0 0 0 0 transparent}.ui.error.message .header{color:#912D2B}.ui.success.message{background-color:#FCFFF5;color:#2C662D}.ui.attached.success.message,.ui.success.message{box-shadow:0 0 0 1px #A3C293 inset,0 0 0 0 transparent}.ui.success.message .header{color:#1A531B}.ui.black.message,.ui.inverted.message{background-color:#1B1C1D;color:rgba(255,255,255,.9)}.ui.red.message{background-color:#FFE8E6;color:#DB2828;box-shadow:0 0 0 1px #DB2828 inset,0 0 0 0 transparent}.ui.red.message .header{color:#c82121}.ui.orange.message{background-color:#FFEDDE;color:#F2711C;box-shadow:0 0 0 1px #F2711C inset,0 0 0 0 transparent}.ui.orange.message .header{color:#e7640d}.ui.yellow.message{background-color:#FFF8DB;color:#B58105;box-shadow:0 0 0 1px #B58105 inset,0 0 0 0 transparent}.ui.yellow.message .header{color:#9c6f04}.ui.olive.message{background-color:#FBFDEF;color:#8ABC1E;box-shadow:0 0 0 1px #8ABC1E inset,0 0 0 0 transparent}.ui.olive.message .header{color:#7aa61a}.ui.green.message{background-color:#E5F9E7;color:#1EBC30;box-shadow:0 0 0 1px #1EBC30 inset,0 0 0 0 transparent}.ui.green.message .header{color:#1aa62a}.ui.teal.message{background-color:#E1F7F7;color:#10A3A3;box-shadow:0 0 0 1px #10A3A3 inset,0 0 0 0 transparent}.ui.teal.message .header{color:#0e8c8c}.ui.blue.message{background-color:#DFF0FF;color:#2185D0;box-shadow:0 0 0 1px #2185D0 inset,0 0 0 0 transparent}.ui.blue.message .header{color:#1e77ba}.ui.violet.message{background-color:#EAE7FF;color:#6435C9;box-shadow:0 0 0 1px #6435C9 inset,0 0 0 0 transparent}.ui.violet.message .header{color:#5a30b5}.ui.purple.message{background-color:#F6E7FF;color:#A333C8;box-shadow:0 0 0 1px #A333C8 inset,0 0 0 0 transparent}.ui.purple.message .header{color:#922eb4}.ui.pink.message{background-color:#FFE3FB;color:#E03997;box-shadow:0 0 0 1px #E03997 inset,0 0 0 0 transparent}.ui.pink.message .header{color:#dd238b}.ui.brown.message{background-color:#F1E2D3;color:#A5673F;box-shadow:0 0 0 1px #A5673F inset,0 0 0 0 transparent}.ui.brown.message .header{color:#935b38}.ui.mini.message{font-size:.78571429em}.ui.tiny.message{font-size:.85714286em}.ui.small.message{font-size:.92857143em}.ui.message{font-size:1em}.ui.large.message{font-size:1.14285714em}.ui.big.message{font-size:1.28571429em}.ui.huge.message{font-size:1.42857143em}.ui.massive.message{font-size:1.71428571em}.ui.table{width:100%;background:#FFF;margin:1em 0;border:1px solid rgba(34,36,38,.15);box-shadow:none;border-radius:.28571429rem;text-align:left;color:rgba(0,0,0,.87);border-collapse:separate;border-spacing:0}.ui.table:first-child{margin-top:0}.ui.table:last-child{margin-bottom:0}.ui.table td,.ui.table th{-webkit-transition:background .1s ease,color .1s ease;transition:background .1s ease,color .1s ease}.ui.table thead{box-shadow:none}.ui.table thead th{cursor:auto;background:#F9FAFB;text-align:inherit;color:rgba(0,0,0,.87);padding:.92857143em .78571429em;vertical-align:inherit;font-style:none;font-weight:700;text-transform:none;border-bottom:1px solid rgba(34,36,38,.1);border-left:none}.ui.table thead tr>th:first-child{border-left:none}.ui.table thead tr:first-child>th:first-child{border-radius:.28571429rem 0 0}.ui.table thead tr:first-child>th:last-child{border-radius:0 .28571429rem 0 0}.ui.table thead tr:first-child>th:only-child{border-radius:.28571429rem .28571429rem 0 0}.ui.table tfoot{box-shadow:none}.ui.table tfoot th{cursor:auto;border-top:1px solid rgba(34,36,38,.15);background:#F9FAFB;text-align:inherit;color:rgba(0,0,0,.87);padding:.78571429em;vertical-align:middle;font-style:normal;font-weight:400;text-transform:none}.ui.table tfoot tr>th:first-child{border-left:none}.ui.table tfoot tr:first-child>th:first-child{border-radius:0 0 0 .28571429rem}.ui.table tfoot tr:first-child>th:last-child{border-radius:0 0 .28571429rem}.ui.table tfoot tr:first-child>th:only-child{border-radius:0 0 .28571429rem .28571429rem}.ui.table tr td{border-top:1px solid rgba(34,36,38,.1)}.ui.table tr:first-child td{border-top:none}.ui.table td{padding:.78571429em;text-align:inherit}.ui.table>.icon{vertical-align:baseline}.ui.table>.icon:only-child{margin:0}.ui.table.segment{padding:0}.ui.table.segment:after{display:none}.ui.table.segment.stacked:after{display:block}@media only screen and (max-width:767px){.ui.table:not(.unstackable){width:100%;padding:0}.ui.table:not(.unstackable) tbody,.ui.table:not(.unstackable) tr,.ui.table:not(.unstackable) tr>td,.ui.table:not(.unstackable) tr>th{width:auto!important;display:block!important}.ui.table:not(.unstackable) tfoot,.ui.table:not(.unstackable) thead{display:block}.ui.table:not(.unstackable) tr{padding-top:1em;padding-bottom:1em;box-shadow:0 -1px 0 0 rgba(0,0,0,.1) inset!important}.ui.table:not(.unstackable) tr>td,.ui.table:not(.unstackable) tr>th{background:0 0;border:none!important;padding:.25em .75em!important;box-shadow:none!important}.ui.table:not(.unstackable) td:first-child,.ui.table:not(.unstackable) th:first-child{font-weight:700}.ui.definition.table:not(.unstackable) thead th:first-child{box-shadow:none!important}}.ui.table td .image,.ui.table td .image img,.ui.table th .image,.ui.table th .image img{max-width:none}.ui.structured.table{border-collapse:collapse}.ui.structured.table thead th{border-left:none;border-right:none}.ui.structured.sortable.table thead th{border-left:1px solid rgba(34,36,38,.15);border-right:1px solid rgba(34,36,38,.15)}.ui.structured.basic.table th{border-left:none;border-right:none}.ui.structured.celled.table tr td,.ui.structured.celled.table tr th{border-left:1px solid rgba(34,36,38,.1);border-right:1px solid rgba(34,36,38,.1)}.ui.definition.table thead:not(.full-width) th:first-child{pointer-events:none;background:0 0;font-weight:400;color:rgba(0,0,0,.4);box-shadow:-1px -1px 0 1px #FFF}.ui.definition.table tfoot:not(.full-width) th:first-child{pointer-events:none;background:0 0;font-weight:rgba(0,0,0,.4);color:normal;box-shadow:1px 1px 0 1px #FFF}.ui.celled.definition.table thead:not(.full-width) th:first-child{box-shadow:0 -1px 0 1px #FFF}.ui.celled.definition.table tfoot:not(.full-width) th:first-child{box-shadow:0 1px 0 1px #FFF}.ui.definition.table tr td.definition,.ui.definition.table tr td:first-child:not(.ignored){background:rgba(0,0,0,.03);font-weight:700;color:rgba(0,0,0,.95);text-transform:'';box-shadow:'';text-align:'';font-size:1em;padding-left:'';padding-right:''}.ui.definition.table td:nth-child(2),.ui.definition.table tfoot:not(.full-width) th:nth-child(2),.ui.definition.table thead:not(.full-width) th:nth-child(2){border-left:1px solid rgba(34,36,38,.15)}.ui.table td.positive,.ui.table tr.positive{box-shadow:0 0 0 #A3C293 inset;background:#FCFFF5!important;color:#2C662D!important}.ui.table td.negative,.ui.table tr.negative{box-shadow:0 0 0 #E0B4B4 inset;background:#FFF6F6!important;color:#9F3A38!important}.ui.table td.error,.ui.table tr.error{box-shadow:0 0 0 #E0B4B4 inset;background:#FFF6F6!important;color:#9F3A38!important}.ui.table td.warning,.ui.table tr.warning{box-shadow:0 0 0 #C9BA9B inset;background:#FFFAF3!important;color:#573A08!important}.ui.table td.active,.ui.table tr.active{box-shadow:0 0 0 rgba(0,0,0,.87) inset;background:#E0E0E0!important;color:rgba(0,0,0,.87)!important}.ui.table tr td.disabled,.ui.table tr.disabled td,.ui.table tr.disabled:hover,.ui.table tr:hover td.disabled{pointer-events:none;color:rgba(40,40,40,.3)}@media only screen and (max-width:991px){.ui[class*=\"tablet stackable\"].table,.ui[class*=\"tablet stackable\"].table tbody,.ui[class*=\"tablet stackable\"].table tr,.ui[class*=\"tablet stackable\"].table tr>td,.ui[class*=\"tablet stackable\"].table tr>th{width:100%!important;display:block!important}.ui[class*=\"tablet stackable\"].table{padding:0}.ui[class*=\"tablet stackable\"].table tfoot,.ui[class*=\"tablet stackable\"].table thead{display:block}.ui[class*=\"tablet stackable\"].table tr{padding-top:1em;padding-bottom:1em;box-shadow:0 -1px 0 0 rgba(0,0,0,.1) inset!important}.ui[class*=\"tablet stackable\"].table tr>td,.ui[class*=\"tablet stackable\"].table tr>th{background:0 0;border:none!important;padding:.25em .75em;box-shadow:none!important}.ui.definition[class*=\"tablet stackable\"].table thead th:first-child{box-shadow:none!important}}.ui.table [class*=\"left aligned\"],.ui.table[class*=\"left aligned\"]{text-align:left}.ui.table [class*=\"center aligned\"],.ui.table[class*=\"center aligned\"]{text-align:center}.ui.table [class*=\"right aligned\"],.ui.table[class*=\"right aligned\"]{text-align:right}.ui.table [class*=\"top aligned\"],.ui.table[class*=\"top aligned\"]{vertical-align:top}.ui.table [class*=\"middle aligned\"],.ui.table[class*=\"middle aligned\"]{vertical-align:middle}.ui.table [class*=\"bottom aligned\"],.ui.table[class*=\"bottom aligned\"]{vertical-align:bottom}.ui.table td.collapsing,.ui.table th.collapsing{width:1px;white-space:nowrap}.ui.fixed.table{table-layout:fixed}.ui.fixed.table td,.ui.fixed.table th{overflow:hidden;text-overflow:ellipsis}.ui.selectable.table tbody tr:hover,.ui.table tbody tr td.selectable:hover{background:rgba(0,0,0,.05)!important;color:rgba(0,0,0,.95)!important}.ui.inverted.table tbody tr td.selectable:hover,.ui.selectable.inverted.table tbody tr:hover{background:rgba(255,255,255,.08)!important;color:#fff!important}.ui.table tbody tr td.selectable{padding:0}.ui.table tbody tr td.selectable>a:not(.ui){display:block;color:inherit;padding:.78571429em}.ui.selectable.table tr.error:hover,.ui.selectable.table tr:hover td.error,.ui.table tr td.selectable.error:hover{background:#ffe7e7!important;color:#943634!important}.ui.selectable.table tr.warning:hover,.ui.selectable.table tr:hover td.warning,.ui.table tr td.selectable.warning:hover{background:#fff4e4!important;color:#493107!important}.ui.selectable.table tr.active:hover,.ui.selectable.table tr:hover td.active,.ui.table tr td.selectable.active:hover{background:#E0E0E0!important;color:rgba(0,0,0,.87)!important}.ui.selectable.table tr.positive:hover,.ui.selectable.table tr:hover td.positive,.ui.table tr td.selectable.positive:hover{background:#f7ffe6!important;color:#275b28!important}.ui.selectable.table tr.negative:hover,.ui.selectable.table tr:hover td.negative,.ui.table tr td.selectable.negative:hover{background:#ffe7e7!important;color:#943634!important}.ui.attached.table{top:0;bottom:0;border-radius:0;margin:0 -1px;width:calc(100% + 2px);max-width:calc(100% + 2px);box-shadow:none;border:1px solid #D4D4D5}.ui.attached+.ui.attached.table:not(.top){border-top:none}.ui[class*=\"top attached\"].table{bottom:0;margin-bottom:0;top:0;margin-top:1em;border-radius:.28571429rem .28571429rem 0 0}.ui.table[class*=\"top attached\"]:first-child{margin-top:0}.ui[class*=\"bottom attached\"].table{bottom:0;margin-top:0;top:0;margin-bottom:1em;box-shadow:none,none;border-radius:0 0 .28571429rem .28571429rem}.ui[class*=\"bottom attached\"].table:last-child{margin-bottom:0}.ui.striped.table tbody tr:nth-child(2n),.ui.striped.table>tr:nth-child(2n){background-color:rgba(0,0,50,.02)}.ui.inverted.striped.table tbody tr:nth-child(2n),.ui.inverted.striped.table>tr:nth-child(2n){background-color:rgba(255,255,255,.05)}.ui.striped.selectable.selectable.selectable.table tbody tr.active:hover{background:#EFEFEF!important;color:rgba(0,0,0,.95)!important}.ui.table [class*=\"single line\"],.ui.table[class*=\"single line\"]{white-space:nowrap}.ui.red.table{border-top:.2em solid #DB2828}.ui.inverted.red.table{background-color:#DB2828!important;color:#FFF!important}.ui.orange.table{border-top:.2em solid #F2711C}.ui.inverted.orange.table{background-color:#F2711C!important;color:#FFF!important}.ui.yellow.table{border-top:.2em solid #FBBD08}.ui.inverted.yellow.table{background-color:#FBBD08!important;color:#FFF!important}.ui.olive.table{border-top:.2em solid #B5CC18}.ui.inverted.olive.table{background-color:#B5CC18!important;color:#FFF!important}.ui.green.table{border-top:.2em solid #21BA45}.ui.inverted.green.table{background-color:#21BA45!important;color:#FFF!important}.ui.teal.table{border-top:.2em solid #00B5AD}.ui.inverted.teal.table{background-color:#00B5AD!important;color:#FFF!important}.ui.blue.table{border-top:.2em solid #2185D0}.ui.inverted.blue.table{background-color:#2185D0!important;color:#FFF!important}.ui.violet.table{border-top:.2em solid #6435C9}.ui.inverted.violet.table{background-color:#6435C9!important;color:#FFF!important}.ui.purple.table{border-top:.2em solid #A333C8}.ui.inverted.purple.table{background-color:#A333C8!important;color:#FFF!important}.ui.pink.table{border-top:.2em solid #E03997}.ui.inverted.pink.table{background-color:#E03997!important;color:#FFF!important}.ui.brown.table{border-top:.2em solid #A5673F}.ui.inverted.brown.table{background-color:#A5673F!important;color:#FFF!important}.ui.grey.table{border-top:.2em solid #767676}.ui.inverted.grey.table{background-color:#767676!important;color:#FFF!important}.ui.black.table{border-top:.2em solid #1B1C1D}.ui.inverted.black.table{background-color:#1B1C1D!important;color:#FFF!important}.ui.one.column.table td{width:100%}.ui.two.column.table td{width:50%}.ui.three.column.table td{width:33.33333333%}.ui.four.column.table td{width:25%}.ui.five.column.table td{width:20%}.ui.six.column.table td{width:16.66666667%}.ui.seven.column.table td{width:14.28571429%}.ui.eight.column.table td{width:12.5%}.ui.nine.column.table td{width:11.11111111%}.ui.ten.column.table td{width:10%}.ui.eleven.column.table td{width:9.09090909%}.ui.twelve.column.table td{width:8.33333333%}.ui.thirteen.column.table td{width:7.69230769%}.ui.fourteen.column.table td{width:7.14285714%}.ui.fifteen.column.table td{width:6.66666667%}.ui.sixteen.column.table td,.ui.table td.one.wide,.ui.table th.one.wide{width:6.25%}.ui.table td.two.wide,.ui.table th.two.wide{width:12.5%}.ui.table td.three.wide,.ui.table th.three.wide{width:18.75%}.ui.table td.four.wide,.ui.table th.four.wide{width:25%}.ui.table td.five.wide,.ui.table th.five.wide{width:31.25%}.ui.table td.six.wide,.ui.table th.six.wide{width:37.5%}.ui.table td.seven.wide,.ui.table th.seven.wide{width:43.75%}.ui.table td.eight.wide,.ui.table th.eight.wide{width:50%}.ui.table td.nine.wide,.ui.table th.nine.wide{width:56.25%}.ui.table td.ten.wide,.ui.table th.ten.wide{width:62.5%}.ui.table td.eleven.wide,.ui.table th.eleven.wide{width:68.75%}.ui.table td.twelve.wide,.ui.table th.twelve.wide{width:75%}.ui.table td.thirteen.wide,.ui.table th.thirteen.wide{width:81.25%}.ui.table td.fourteen.wide,.ui.table th.fourteen.wide{width:87.5%}.ui.table td.fifteen.wide,.ui.table th.fifteen.wide{width:93.75%}.ui.table td.sixteen.wide,.ui.table th.sixteen.wide{width:100%}.ui.sortable.table thead th{cursor:pointer;white-space:nowrap;border-left:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87)}.ui.sortable.table thead th:first-child{border-left:none}.ui.sortable.table thead th.sorted,.ui.sortable.table thead th.sorted:hover{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui.sortable.table thead th:after{display:none;font-style:normal;font-weight:400;text-decoration:inherit;content:'';height:1em;width:auto;opacity:.8;margin:0 0 0 .5em;font-family:Icons}.ui.sortable.table thead th.ascending:after{content:'\\F0D8'}.ui.sortable.table thead th.descending:after{content:'\\F0D7'}.ui.sortable.table th.disabled:hover{cursor:auto;color:rgba(40,40,40,.3)}.ui.sortable.table thead th:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.8)}.ui.sortable.table thead th.sorted{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.sortable.table thead th.sorted:after{display:inline-block}.ui.sortable.table thead th.sorted:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95)}.ui.inverted.sortable.table thead th.sorted{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) rgba(255,255,255,.15);background:linear-gradient(transparent,rgba(0,0,0,.05)) rgba(255,255,255,.15);color:#fff}.ui.inverted.sortable.table thead th:hover{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) rgba(255,255,255,.08);background:linear-gradient(transparent,rgba(0,0,0,.05)) rgba(255,255,255,.08);color:#fff}.ui.inverted.sortable.table thead th{border-left-color:transparent;border-right-color:transparent}.ui.inverted.table{background:#333;color:rgba(255,255,255,.9);border:none}.ui.inverted.table th{background-color:rgba(0,0,0,.15);border-color:rgba(255,255,255,.1)!important;color:rgba(255,255,255,.9)}.ui.inverted.table tr td{border-color:rgba(255,255,255,.1)!important}.ui.inverted.table tr td.disabled,.ui.inverted.table tr.disabled td,.ui.inverted.table tr.disabled:hover td,.ui.inverted.table tr:hover td.disabled{pointer-events:none;color:rgba(225,225,225,.3)}.ui.inverted.definition.table tfoot:not(.full-width) th:first-child,.ui.inverted.definition.table thead:not(.full-width) th:first-child{background:#FFF}.ui.inverted.definition.table tr td:first-child{background:rgba(255,255,255,.02);color:#fff}.ui.collapsing.table{width:auto}.ui.basic.table{background:0 0;border:1px solid rgba(34,36,38,.15);box-shadow:none}.ui.basic.table tfoot,.ui.basic.table thead{box-shadow:none}.ui.basic.table th{background:0 0;border-left:none}.ui.basic.table tbody tr{border-bottom:1px solid rgba(0,0,0,.1)}.ui.basic.table td{background:0 0}.ui.basic.striped.table tbody tr:nth-child(2n){background-color:rgba(0,0,0,.05)!important}.ui[class*=\"very basic\"].table{border:none}.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) td,.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) th{padding:''}.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) td:first-child,.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) th:first-child{padding-left:0}.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) td:last-child,.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) th:last-child{padding-right:0}.ui[class*=\"very basic\"].table:not(.sortable):not(.striped) thead tr:first-child th{padding-top:0}.ui.celled.table tr td,.ui.celled.table tr th{border-left:1px solid rgba(34,36,38,.1)}.ui.celled.table tr td:first-child,.ui.celled.table tr th:first-child{border-left:none}.ui.padded.table th{padding-left:1em;padding-right:1em}.ui.padded.table td,.ui.padded.table th{padding:1em}.ui[class*=\"very padded\"].table th{padding-left:1.5em;padding-right:1.5em}.ui[class*=\"very padded\"].table td{padding:1.5em}.ui.compact.table th{padding-left:.7em;padding-right:.7em}.ui.compact.table td{padding:.5em .7em}.ui[class*=\"very compact\"].table th{padding-left:.6em;padding-right:.6em}.ui[class*=\"very compact\"].table td{padding:.4em .6em}.ui.small.table{font-size:.9em}.ui.table{font-size:1em}.ui.large.table{font-size:1.1em}.ui.ad{display:block;overflow:hidden;margin:1em 0}.ui.ad:first-child,.ui.ad:last-child{margin:0}.ui.ad iframe{margin:0;padding:0;border:none;overflow:hidden}.ui.leaderboard.ad{width:728px;height:90px}.ui[class*=\"medium rectangle\"].ad{width:300px;height:250px}.ui[class*=\"large rectangle\"].ad{width:336px;height:280px}.ui[class*=\"half page\"].ad{width:300px;height:600px}.ui.square.ad{width:250px;height:250px}.ui[class*=\"small square\"].ad{width:200px;height:200px}.ui[class*=\"small rectangle\"].ad{width:180px;height:150px}.ui[class*=\"vertical rectangle\"].ad{width:240px;height:400px}.ui.button.ad{width:120px;height:90px}.ui[class*=\"square button\"].ad{width:125px;height:125px}.ui[class*=\"small button\"].ad{width:120px;height:60px}.ui.skyscraper.ad{width:120px;height:600px}.ui[class*=\"wide skyscraper\"].ad{width:160px}.ui.banner.ad{width:468px;height:60px}.ui[class*=\"vertical banner\"].ad{width:120px;height:240px}.ui[class*=\"top banner\"].ad{width:930px;height:180px}.ui[class*=\"half banner\"].ad{width:234px;height:60px}.ui[class*=\"large leaderboard\"].ad{width:970px;height:90px}.ui.billboard.ad{width:970px;height:250px}.ui.panorama.ad{width:980px;height:120px}.ui.netboard.ad{width:580px;height:400px}.ui[class*=\"large mobile banner\"].ad{width:320px;height:100px}.ui[class*=\"mobile leaderboard\"].ad{width:320px;height:50px}.ui.mobile.ad{display:none}@media only screen and (max-width:767px){.ui.mobile.ad{display:block}}.ui.centered.ad{margin-left:auto;margin-right:auto}.ui.test.ad{position:relative;background:#545454}.ui.test.ad:after{position:absolute;top:50%;left:50%;width:100%;text-align:center;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);content:'Ad';color:#FFF;font-size:1em;font-weight:700}.ui.mobile.test.ad:after{font-size:.85714286em}.ui.test.ad[data-text]:after{content:attr(data-text)}.ui.card,.ui.cards>.card{max-width:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:290px;min-height:0;background:#FFF;padding:0;border:none;border-radius:.28571429rem;box-shadow:0 1px 3px 0 #D4D4D5,0 0 0 1px #D4D4D5;-webkit-transition:box-shadow .1s ease,-webkit-transform .1s ease;transition:box-shadow .1s ease,-webkit-transform .1s ease;transition:box-shadow .1s ease,transform .1s ease;transition:box-shadow .1s ease,transform .1s ease,-webkit-transform .1s ease;z-index:''}.ui.card{margin:1em 0}.ui.card a,.ui.cards>.card a{cursor:pointer}.ui.card:first-child{margin-top:0}.ui.card:last-child{margin-bottom:0}.ui.cards{display:-webkit-box;display:-ms-flexbox;display:flex;margin:-.875em -.5em;-ms-flex-wrap:wrap;flex-wrap:wrap}.ui.cards>.card{display:-webkit-box;display:-ms-flexbox;display:flex;margin:.875em .5em;float:none}.ui.card:after,.ui.cards:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.cards~.ui.cards{margin-top:.875em}.ui.card>:first-child,.ui.cards>.card>:first-child{border-radius:.28571429rem .28571429rem 0 0!important;border-top:none!important}.ui.card>:last-child,.ui.cards>.card>:last-child{border-radius:0 0 .28571429rem .28571429rem!important}.ui.card>:only-child,.ui.cards>.card>:only-child{border-radius:.28571429rem!important}.ui.card>.image,.ui.cards>.card>.image{position:relative;display:block;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;padding:0;background:rgba(0,0,0,.05)}.ui.card>.image>img,.ui.cards>.card>.image>img{display:block;width:100%;height:auto;border-radius:inherit}.ui.card>.image:not(.ui)>img,.ui.cards>.card>.image:not(.ui)>img{border:none}.ui.card>.content,.ui.cards>.card>.content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border:none;border-top:1px solid rgba(34,36,38,.1);background:0 0;margin:0;padding:1em;box-shadow:none;font-size:1em;border-radius:0}.ui.card>.content:after,.ui.cards>.card>.content:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.card>.content>.header,.ui.cards>.card>.content>.header{display:block;margin:'';font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;color:rgba(0,0,0,.85)}.ui.card>.content>.header:not(.ui),.ui.cards>.card>.content>.header:not(.ui){font-weight:700;font-size:1.28571429em;margin-top:-.21425em;line-height:1.2857em}.ui.card>.content>.header+.description,.ui.card>.content>.meta+.description,.ui.cards>.card>.content>.header+.description,.ui.cards>.card>.content>.meta+.description{margin-top:.5em}.ui.card [class*=\"left floated\"],.ui.cards>.card [class*=\"left floated\"]{float:left}.ui.card [class*=\"right floated\"],.ui.cards>.card [class*=\"right floated\"]{float:right}.ui.card [class*=\"left aligned\"],.ui.cards>.card [class*=\"left aligned\"]{text-align:left}.ui.card [class*=\"center aligned\"],.ui.cards>.card [class*=\"center aligned\"]{text-align:center}.ui.card [class*=\"right aligned\"],.ui.cards>.card [class*=\"right aligned\"]{text-align:right}.ui.card .content img,.ui.cards>.card .content img{display:inline-block;vertical-align:middle;width:''}.ui.card .avatar img,.ui.card img.avatar,.ui.cards>.card .avatar img,.ui.cards>.card img.avatar{width:2em;height:2em;border-radius:500rem}.ui.card>.content>.description,.ui.cards>.card>.content>.description{clear:both;color:rgba(0,0,0,.68)}.ui.card>.content p,.ui.cards>.card>.content p{margin:0 0 .5em}.ui.card>.content p:last-child,.ui.cards>.card>.content p:last-child{margin-bottom:0}.ui.card .meta,.ui.cards>.card .meta{font-size:1em;color:rgba(0,0,0,.4)}.ui.card .meta *,.ui.cards>.card .meta *{margin-right:.3em}.ui.card .meta :last-child,.ui.cards>.card .meta :last-child{margin-right:0}.ui.card .meta [class*=\"right floated\"],.ui.cards>.card .meta [class*=\"right floated\"]{margin-right:0;margin-left:.3em}.ui.card>.content a:not(.ui),.ui.cards>.card>.content a:not(.ui){color:'';-webkit-transition:color .1s ease;transition:color .1s ease}.ui.card>.content a:not(.ui):hover,.ui.cards>.card>.content a:not(.ui):hover{color:''}.ui.card>.content>a.header,.ui.cards>.card>.content>a.header{color:rgba(0,0,0,.85)}.ui.card>.content>a.header:hover,.ui.cards>.card>.content>a.header:hover{color:#1e70bf}.ui.card .meta>a:not(.ui),.ui.cards>.card .meta>a:not(.ui){color:rgba(0,0,0,.4)}.ui.card .meta>a:not(.ui):hover,.ui.cards>.card .meta>a:not(.ui):hover{color:rgba(0,0,0,.87)}.ui.card>.button,.ui.card>.buttons,.ui.cards>.card>.button,.ui.cards>.card>.buttons{margin:0 -1px;width:calc(100% + 2px)}.ui.card .dimmer,.ui.cards>.card .dimmer{background-color:'';z-index:10}.ui.card>.content .star.icon,.ui.cards>.card>.content .star.icon{cursor:pointer;opacity:.75;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.card>.content .star.icon:hover,.ui.cards>.card>.content .star.icon:hover{opacity:1;color:#FFB70A}.ui.card>.content .active.star.icon,.ui.cards>.card>.content .active.star.icon{color:#FFE623}.ui.card>.content .like.icon,.ui.cards>.card>.content .like.icon{cursor:pointer;opacity:.75;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.card>.content .like.icon:hover,.ui.cards>.card>.content .like.icon:hover{opacity:1;color:#FF2733}.ui.card>.content .active.like.icon,.ui.cards>.card>.content .active.like.icon{color:#FF2733}.ui.card>.extra,.ui.cards>.card>.extra{max-width:100%;min-height:0!important;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;border-top:1px solid rgba(0,0,0,.05)!important;position:static;background:0 0;width:auto;margin:0;padding:.75em 1em;top:0;left:0;color:rgba(0,0,0,.4);box-shadow:none;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.card>.extra a:not(.ui),.ui.cards>.card>.extra a:not(.ui){color:rgba(0,0,0,.4)}.ui.card>.extra a:not(.ui):hover,.ui.cards>.card>.extra a:not(.ui):hover{color:#1e70bf}.ui.link.cards .raised.card:hover,.ui.link.raised.card:hover,.ui.raised.cards a.card:hover,a.ui.raised.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 4px 0 rgba(34,36,38,.15),0 2px 10px 0 rgba(34,36,38,.25)}.ui.raised.card,.ui.raised.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)}.ui.centered.cards{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ui.centered.card{margin-left:auto;margin-right:auto}.ui.fluid.card{width:100%;max-width:9999px}.ui.cards a.card,.ui.link.card,.ui.link.cards .card,a.ui.card{-webkit-transform:none;transform:none}.ui.cards a.card:hover,.ui.link.card:hover,.ui.link.cards .card:hover,a.ui.card:hover{cursor:pointer;z-index:5;background:#FFF;border:none;box-shadow:0 1px 3px 0 #BCBDBD,0 0 0 1px #D4D4D5;-webkit-transform:translateY(-3px);transform:translateY(-3px)}.ui.cards>.red.card,.ui.red.card,.ui.red.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #DB2828,0 1px 3px 0 #D4D4D5}.ui.cards>.red.card:hover,.ui.red.card:hover,.ui.red.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #d01919,0 1px 3px 0 #BCBDBD}.ui.cards>.orange.card,.ui.orange.card,.ui.orange.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #F2711C,0 1px 3px 0 #D4D4D5}.ui.cards>.orange.card:hover,.ui.orange.card:hover,.ui.orange.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #f26202,0 1px 3px 0 #BCBDBD}.ui.cards>.yellow.card,.ui.yellow.card,.ui.yellow.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #FBBD08,0 1px 3px 0 #D4D4D5}.ui.cards>.yellow.card:hover,.ui.yellow.card:hover,.ui.yellow.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #eaae00,0 1px 3px 0 #BCBDBD}.ui.cards>.olive.card,.ui.olive.card,.ui.olive.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #B5CC18,0 1px 3px 0 #D4D4D5}.ui.cards>.olive.card:hover,.ui.olive.card:hover,.ui.olive.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #a7bd0d,0 1px 3px 0 #BCBDBD}.ui.cards>.green.card,.ui.green.card,.ui.green.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #21BA45,0 1px 3px 0 #D4D4D5}.ui.cards>.green.card:hover,.ui.green.card:hover,.ui.green.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #16ab39,0 1px 3px 0 #BCBDBD}.ui.cards>.teal.card,.ui.teal.card,.ui.teal.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #00B5AD,0 1px 3px 0 #D4D4D5}.ui.cards>.teal.card:hover,.ui.teal.card:hover,.ui.teal.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #009c95,0 1px 3px 0 #BCBDBD}.ui.blue.card,.ui.blue.cards>.card,.ui.cards>.blue.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #2185D0,0 1px 3px 0 #D4D4D5}.ui.blue.card:hover,.ui.blue.cards>.card:hover,.ui.cards>.blue.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #1678c2,0 1px 3px 0 #BCBDBD}.ui.cards>.violet.card,.ui.violet.card,.ui.violet.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #6435C9,0 1px 3px 0 #D4D4D5}.ui.cards>.violet.card:hover,.ui.violet.card:hover,.ui.violet.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #5829bb,0 1px 3px 0 #BCBDBD}.ui.cards>.purple.card,.ui.purple.card,.ui.purple.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #A333C8,0 1px 3px 0 #D4D4D5}.ui.cards>.purple.card:hover,.ui.purple.card:hover,.ui.purple.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #9627ba,0 1px 3px 0 #BCBDBD}.ui.cards>.pink.card,.ui.pink.card,.ui.pink.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #E03997,0 1px 3px 0 #D4D4D5}.ui.cards>.pink.card:hover,.ui.pink.card:hover,.ui.pink.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #e61a8d,0 1px 3px 0 #BCBDBD}.ui.brown.card,.ui.brown.cards>.card,.ui.cards>.brown.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #A5673F,0 1px 3px 0 #D4D4D5}.ui.brown.card:hover,.ui.brown.cards>.card:hover,.ui.cards>.brown.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #975b33,0 1px 3px 0 #BCBDBD}.ui.cards>.grey.card,.ui.grey.card,.ui.grey.cards>.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #767676,0 1px 3px 0 #D4D4D5}.ui.cards>.grey.card:hover,.ui.grey.card:hover,.ui.grey.cards>.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #838383,0 1px 3px 0 #BCBDBD}.ui.black.card,.ui.black.cards>.card,.ui.cards>.black.card{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #1B1C1D,0 1px 3px 0 #D4D4D5}.ui.black.card:hover,.ui.black.cards>.card:hover,.ui.cards>.black.card:hover{box-shadow:0 0 0 1px #D4D4D5,0 2px 0 0 #27292a,0 1px 3px 0 #BCBDBD}.ui.one.cards{margin-left:0;margin-right:0}.ui.one.cards>.card{width:100%}.ui.two.cards{margin-left:-1em;margin-right:-1em}.ui.two.cards>.card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.three.cards{margin-left:-1em;margin-right:-1em}.ui.three.cards>.card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.four.cards{margin-left:-.75em;margin-right:-.75em}.ui.four.cards>.card{width:calc(25% - 1.5em);margin-left:.75em;margin-right:.75em}.ui.five.cards{margin-left:-.75em;margin-right:-.75em}.ui.five.cards>.card{width:calc(20% - 1.5em);margin-left:.75em;margin-right:.75em}.ui.six.cards{margin-left:-.75em;margin-right:-.75em}.ui.six.cards>.card{width:calc(16.66666667% - 1.5em);margin-left:.75em;margin-right:.75em}.ui.seven.cards{margin-left:-.5em;margin-right:-.5em}.ui.seven.cards>.card{width:calc(14.28571429% - 1em);margin-left:.5em;margin-right:.5em}.ui.eight.cards{margin-left:-.5em;margin-right:-.5em}.ui.eight.cards>.card{width:calc(12.5% - 1em);margin-left:.5em;margin-right:.5em;font-size:11px}.ui.nine.cards{margin-left:-.5em;margin-right:-.5em}.ui.nine.cards>.card{width:calc(11.11111111% - 1em);margin-left:.5em;margin-right:.5em;font-size:10px}.ui.ten.cards{margin-left:-.5em;margin-right:-.5em}.ui.ten.cards>.card{width:calc(10% - 1em);margin-left:.5em;margin-right:.5em}@media only screen and (max-width:767px){.ui.two.doubling.cards{margin-left:0;margin-right:0}.ui.two.doubling.cards .card{width:100%;margin-left:0;margin-right:0}.ui.three.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.three.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.four.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.four.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.five.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.five.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.six.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.six.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.seven.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.seven.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.eight.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.eight.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.nine.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.nine.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.ten.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.ten.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}}@media only screen and (min-width:768px) and (max-width:991px){.ui.two.doubling.cards{margin-left:0;margin-right:0}.ui.two.doubling.cards .card{width:100%;margin-left:0;margin-right:0}.ui.three.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.three.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.four.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.four.doubling.cards .card{width:calc(50% - 2em);margin-left:1em;margin-right:1em}.ui.five.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.five.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.six.doubling.cards{margin-left:-1em;margin-right:-1em}.ui.six.doubling.cards .card{width:calc(33.33333333% - 2em);margin-left:1em;margin-right:1em}.ui.eight.doubling.cards{margin-left:-.75em;margin-right:-.75em}.ui.eight.doubling.cards .card{width:calc(25% - 1.5em);margin-left:.75em;margin-right:.75em}.ui.nine.doubling.cards{margin-left:-.75em;margin-right:-.75em}.ui.nine.doubling.cards .card{width:calc(25% - 1.5em);margin-left:.75em;margin-right:.75em}.ui.ten.doubling.cards{margin-left:-.75em;margin-right:-.75em}.ui.ten.doubling.cards .card{width:calc(20% - 1.5em);margin-left:.75em;margin-right:.75em}}@media only screen and (max-width:767px){.ui.stackable.cards{display:block!important}.ui.stackable.cards .card:first-child{margin-top:0!important}.ui.stackable.cards>.card{display:block!important;height:auto!important;margin:1em;padding:0!important;width:calc(100% - 2em)!important}}.ui.cards>.card{font-size:1em}.ui.comments{margin:1.5em 0;max-width:650px}.ui.comments:first-child{margin-top:0}.ui.comments:last-child{margin-bottom:0}.ui.comments .comment{position:relative;background:0 0;margin:.5em 0 0;padding:.5em 0 0;border:none;border-top:none;line-height:1.2}.ui.comments .comment:first-child{margin-top:0;padding-top:0}.ui.comments .comment .comments{margin:0 0 .5em .5em;padding:1em 0 1em 1em}.ui.comments .comment .comments:before{position:absolute;top:0;left:0}.ui.comments .comment .comments .comment{border:none;border-top:none;background:0 0}.ui.comments .comment .avatar{display:block;width:2.5em;height:auto;float:left;margin:.2em 0 0}.ui.comments .comment .avatar img,.ui.comments .comment img.avatar{display:block;margin:0 auto;width:100%;height:100%;border-radius:.25rem}.ui.comments .comment>.content{display:block}.ui.comments .comment>.avatar~.content{margin-left:3.5em}.ui.comments .comment .author{font-size:1em;color:rgba(0,0,0,.87);font-weight:700}.ui.comments .comment a.author{cursor:pointer}.ui.comments .comment a.author:hover{color:#1e70bf}.ui.comments .comment .metadata{display:inline-block;margin-left:.5em;color:rgba(0,0,0,.4);font-size:.875em}.ui.comments .comment .metadata>*{display:inline-block;margin:0 .5em 0 0}.ui.comments .comment .metadata>:last-child{margin-right:0}.ui.comments .comment .text{margin:.25em 0 .5em;font-size:1em;word-wrap:break-word;color:rgba(0,0,0,.87);line-height:1.3}.ui.comments .comment .actions{font-size:.875em}.ui.comments .comment .actions a{cursor:pointer;display:inline-block;margin:0 .75em 0 0;color:rgba(0,0,0,.4)}.ui.comments .comment .actions a:last-child{margin-right:0}.ui.comments .comment .actions a.active,.ui.comments .comment .actions a:hover{color:rgba(0,0,0,.8)}.ui.comments>.reply.form{margin-top:1em}.ui.comments .comment .reply.form{width:100%;margin-top:1em}.ui.comments .reply.form textarea{font-size:1em;height:12em}.ui.collapsed.comments,.ui.comments .collapsed.comment,.ui.comments .collapsed.comments{display:none}.ui.threaded.comments .comment .comments{margin:-1.5em 0 -1em 1.25em;padding:3em 0 2em 2.25em;box-shadow:-1px 0 0 rgba(34,36,38,.15)}.ui.minimal.comments .comment .actions{opacity:0;position:absolute;top:0;right:0;left:auto;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;-webkit-transition-delay:.1s;transition-delay:.1s}.ui.minimal.comments .comment>.content:hover>.actions{opacity:1}.ui.mini.comments{font-size:.78571429rem}.ui.tiny.comments{font-size:.85714286rem}.ui.small.comments{font-size:.9em}.ui.comments{font-size:1em}.ui.large.comments{font-size:1.1em}.ui.big.comments{font-size:1.28571429rem}.ui.huge.comments{font-size:1.2em}.ui.massive.comments{font-size:1.71428571rem}.ui.feed{margin:1em 0}.ui.feed:first-child{margin-top:0}.ui.feed:last-child{margin-bottom:0}.ui.feed>.event{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;padding:.21428571rem 0;margin:0;background:0 0;border-top:none}.ui.feed>.event:first-child{border-top:0;padding-top:0}.ui.feed>.event:last-child{padding-bottom:0}.ui.feed>.event>.label{display:block;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:2.5em;height:auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;text-align:left}.ui.feed>.event>.label .icon{opacity:1;font-size:1.5em;width:100%;padding:.25em;background:0 0;border:none;border-radius:none;color:rgba(0,0,0,.6)}.ui.feed>.event>.label img{width:100%;height:auto;border-radius:500rem}.ui.feed>.event>.label+.content{margin:.5em 0 .35714286em 1.14285714em}.ui.feed>.event>.content{display:block;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;text-align:left;word-wrap:break-word}.ui.feed>.event:last-child>.content{padding-bottom:0}.ui.feed>.event>.content a{cursor:pointer}.ui.feed>.event>.content .date{margin:-.5rem 0 0;padding:0;font-weight:400;font-size:1em;font-style:normal;color:rgba(0,0,0,.4)}.ui.feed>.event>.content .summary{margin:0;font-size:1em;font-weight:700;color:rgba(0,0,0,.87)}.ui.feed>.event>.content .summary img{display:inline-block;width:auto;height:10em;margin:-.25em .25em 0 0;border-radius:.25em;vertical-align:middle}.ui.feed>.event>.content .user{display:inline-block;font-weight:700;margin-right:0;vertical-align:baseline}.ui.feed>.event>.content .user img{margin:-.25em .25em 0 0;width:auto;height:10em;vertical-align:middle}.ui.feed>.event>.content .summary>.date{display:inline-block;float:none;font-weight:400;font-size:.85714286em;font-style:normal;margin:0 0 0 .5em;padding:0;color:rgba(0,0,0,.4)}.ui.feed>.event>.content .extra{margin:.5em 0 0;background:0 0;padding:0;color:rgba(0,0,0,.87)}.ui.feed>.event>.content .extra.images img{display:inline-block;margin:0 .25em 0 0;width:6em}.ui.feed>.event>.content .extra.text{padding:0;border-left:none;font-size:1em;max-width:500px;line-height:1.4285em}.ui.feed>.event>.content .meta{display:inline-block;font-size:.85714286em;margin:.5em 0 0;background:0 0;border:none;border-radius:0;box-shadow:none;padding:0;color:rgba(0,0,0,.6)}.ui.feed>.event>.content .meta>*{position:relative;margin-left:.75em}.ui.feed>.event>.content .meta>:after{content:'';color:rgba(0,0,0,.2);top:0;left:-1em;opacity:1;position:absolute;vertical-align:top}.ui.feed>.event>.content .meta .like{color:'';-webkit-transition:.2s color ease;transition:.2s color ease}.ui.feed>.event>.content .meta .like:hover .icon{color:#FF2733}.ui.feed>.event>.content .meta .active.like .icon{color:#EF404A}.ui.feed>.event>.content .meta>:first-child{margin-left:0}.ui.feed>.event>.content .meta>:first-child::after{display:none}.ui.feed>.event>.content .meta a,.ui.feed>.event>.content .meta>.icon{cursor:pointer;opacity:1;color:rgba(0,0,0,.5);-webkit-transition:color .1s ease;transition:color .1s ease}.ui.feed>.event>.content .meta a:hover,.ui.feed>.event>.content .meta a:hover .icon,.ui.feed>.event>.content .meta>.icon:hover{color:rgba(0,0,0,.95)}.ui.small.feed{font-size:.92857143rem}.ui.feed{font-size:1rem}.ui.large.feed{font-size:1.14285714rem}.ui.items>.item{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1em 0;width:100%;min-height:0;background:0 0;padding:0;border:none;border-radius:0;box-shadow:none;-webkit-transition:box-shadow .1s ease;transition:box-shadow .1s ease;z-index:''}.ui.items>.item a{cursor:pointer}.ui.items{margin:1.5em 0}.ui.items:first-child{margin-top:0!important}.ui.items:last-child{margin-bottom:0!important}.ui.items>.item:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.items>.item:first-child{margin-top:0}.ui.items>.item:last-child{margin-bottom:0}.ui.items>.item>.image{position:relative;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:block;float:none;margin:0;padding:0;max-height:'';-ms-flex-item-align:top;-ms-grid-row-align:top;align-self:top}.ui.items>.item>.image>img{display:block;width:100%;height:auto;border-radius:.125rem;border:none}.ui.items>.item>.image:only-child>img{border-radius:0}.ui.items>.item>.content{display:block;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;background:0 0;margin:0;padding:0;box-shadow:none;font-size:1em;border:none;border-radius:0}.ui.items>.item>.content:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.items>.item>.image+.content{min-width:0;width:auto;display:block;margin-left:0;-ms-flex-item-align:top;-ms-grid-row-align:top;align-self:top;padding-left:1.5em}.ui.items>.item>.content>.header{display:inline-block;margin:-.21425em 0 0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:700;color:rgba(0,0,0,.85)}.ui.items>.item>.content>.header:not(.ui){font-size:1.28571429em}.ui.items>.item [class*=\"left floated\"]{float:left}.ui.items>.item [class*=\"right floated\"]{float:right}.ui.items>.item .content img{-ms-flex-item-align:middle;-ms-grid-row-align:middle;align-self:middle;width:''}.ui.items>.item .avatar img,.ui.items>.item img.avatar{width:'';height:'';border-radius:500rem}.ui.items>.item>.content>.description{margin-top:.6em;max-width:auto;font-size:1em;line-height:1.4285em;color:rgba(0,0,0,.87)}.ui.items>.item>.content p{margin:0 0 .5em}.ui.items>.item>.content p:last-child{margin-bottom:0}.ui.items>.item .meta{margin:.5em 0;font-size:1em;line-height:1em;color:rgba(0,0,0,.6)}.ui.items>.item .meta *{margin-right:.3em}.ui.items>.item .meta :last-child{margin-right:0}.ui.items>.item .meta [class*=\"right floated\"]{margin-right:0;margin-left:.3em}.ui.items>.item>.content a:not(.ui){color:'';-webkit-transition:color .1s ease;transition:color .1s ease}.ui.items>.item>.content a:not(.ui):hover{color:''}.ui.items>.item>.content>a.header{color:rgba(0,0,0,.85)}.ui.items>.item>.content>a.header:hover{color:#1e70bf}.ui.items>.item .meta>a:not(.ui){color:rgba(0,0,0,.4)}.ui.items>.item .meta>a:not(.ui):hover{color:rgba(0,0,0,.87)}.ui.items>.item>.content .favorite.icon{cursor:pointer;opacity:.75;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.items>.item>.content .favorite.icon:hover{opacity:1;color:#FFB70A}.ui.items>.item>.content .active.favorite.icon{color:#FFE623}.ui.items>.item>.content .like.icon{cursor:pointer;opacity:.75;-webkit-transition:color .1s ease;transition:color .1s ease}.ui.items>.item>.content .like.icon:hover{opacity:1;color:#FF2733}.ui.items>.item>.content .active.like.icon{color:#FF2733}.ui.items>.item .extra{display:block;position:relative;background:0 0;margin:.5rem 0 0;width:100%;padding:0;top:0;left:0;color:rgba(0,0,0,.4);box-shadow:none;-webkit-transition:color .1s ease;transition:color .1s ease;border-top:none}.ui.items>.item .extra>*{margin:.25rem .5rem .25rem 0}.ui.items>.item .extra>[class*=\"right floated\"]{margin:.25rem 0 .25rem .5rem}.ui.items>.item .extra:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.items>.item>.image:not(.ui){width:175px}@media only screen and (min-width:768px) and (max-width:991px){.ui.items>.item{margin:1em 0}.ui.items>.item>.image:not(.ui){width:150px}.ui.items>.item>.image+.content{display:block;padding:0 0 0 1em}}@media only screen and (max-width:767px){.ui.items>.item{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:2em 0}.ui.items>.item>.image{display:block;margin-left:auto;margin-right:auto}.ui.items>.item>.image,.ui.items>.item>.image>img{max-width:100%!important;width:auto!important;max-height:250px!important}.ui.items>.item>.image+.content{display:block;padding:1.5em 0 0}}.ui.items>.item>.image+[class*=\"top aligned\"].content{-ms-flex-item-align:start;align-self:flex-start}.ui.items>.item>.image+[class*=\"middle aligned\"].content{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.ui.items>.item>.image+[class*=\"bottom aligned\"].content{-ms-flex-item-align:end;align-self:flex-end}.ui.relaxed.items>.item{margin:1.5em 0}.ui[class*=\"very relaxed\"].items>.item{margin:2em 0}.ui.divided.items>.item{border-top:1px solid rgba(34,36,38,.15);margin:0;padding:1em 0}.ui.divided.items>.item:first-child{border-top:none;margin-top:0!important;padding-top:0!important}.ui.divided.items>.item:last-child{margin-bottom:0!important;padding-bottom:0!important}.ui.relaxed.divided.items>.item{margin:0;padding:1.5em 0}.ui[class*=\"very relaxed\"].divided.items>.item{margin:0;padding:2em 0}.ui.items a.item:hover,.ui.link.items>.item:hover{cursor:pointer}.ui.items a.item:hover .content .header,.ui.link.items>.item:hover .content .header{color:#1e70bf}.ui.items>.item{font-size:1em}.ui.statistic{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:1em 0;max-width:auto}.ui.statistic+.ui.statistic{margin:0 0 0 1.5em}.ui.statistic:first-child{margin-top:0}.ui.statistic:last-child{margin-bottom:0}.ui.statistics{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.ui.statistics>.statistic{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0 1.5em 2em;max-width:auto}.ui.statistics{display:-webkit-box;display:-ms-flexbox;display:flex;margin:1em -1.5em -2em}.ui.statistics:after{display:block;content:' ';height:0;clear:both;overflow:hidden;visibility:hidden}.ui.statistics:first-child{margin-top:0}.ui.statistics:last-child{margin-bottom:0}.ui.statistic>.value,.ui.statistics .statistic>.value{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:400;line-height:1em;color:#1B1C1D;text-transform:uppercase;text-align:center}.ui.statistic>.label,.ui.statistics .statistic>.label{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1em;font-weight:700;color:rgba(0,0,0,.87);text-transform:uppercase;text-align:center}.ui.statistic>.label~.value,.ui.statistic>.value~.label,.ui.statistics .statistic>.label~.value,.ui.statistics .statistic>.value~.label{margin-top:0}.ui.statistic>.value .icon,.ui.statistics .statistic>.value .icon{opacity:1;width:auto;margin:0}.ui.statistic>.text.value,.ui.statistics .statistic>.text.value{line-height:1em;min-height:2em;font-weight:700;text-align:center}.ui.statistic>.text.value+.label,.ui.statistics .statistic>.text.value+.label{text-align:center}.ui.statistic>.value img,.ui.statistics .statistic>.value img{max-height:3rem;vertical-align:baseline}.ui.ten.statistics{margin:0 0 -2em}.ui.ten.statistics .statistic{min-width:10%;margin:0 0 2em}.ui.nine.statistics{margin:0 0 -2em}.ui.nine.statistics .statistic{min-width:11.11111111%;margin:0 0 2em}.ui.eight.statistics{margin:0 0 -2em}.ui.eight.statistics .statistic{min-width:12.5%;margin:0 0 2em}.ui.seven.statistics{margin:0 0 -2em}.ui.seven.statistics .statistic{min-width:14.28571429%;margin:0 0 2em}.ui.six.statistics{margin:0 0 -2em}.ui.six.statistics .statistic{min-width:16.66666667%;margin:0 0 2em}.ui.five.statistics{margin:0 0 -2em}.ui.five.statistics .statistic{min-width:20%;margin:0 0 2em}.ui.four.statistics{margin:0 0 -2em}.ui.four.statistics .statistic{min-width:25%;margin:0 0 2em}.ui.three.statistics{margin:0 0 -2em}.ui.three.statistics .statistic{min-width:33.33333333%;margin:0 0 2em}.ui.two.statistics{margin:0 0 -2em}.ui.two.statistics .statistic{min-width:50%;margin:0 0 2em}.ui.one.statistics{margin:0 0 -2em}.ui.one.statistics .statistic{min-width:100%;margin:0 0 2em}.ui.horizontal.statistic{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ui.horizontal.statistics{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;max-width:none}.ui.horizontal.statistics .statistic{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:none;margin:1em 0}.ui.horizontal.statistic>.text.value,.ui.horizontal.statistics>.statistic>.text.value{min-height:0!important}.ui.horizontal.statistic>.value .icon,.ui.horizontal.statistics .statistic>.value .icon{width:1.18em}.ui.horizontal.statistic>.label,.ui.horizontal.statistics .statistic>.label{display:inline-block;vertical-align:middle;margin:0 0 0 .75em}.ui.red.statistic>.value,.ui.red.statistics .statistic>.value,.ui.statistics .red.statistic>.value{color:#DB2828}.ui.orange.statistic>.value,.ui.orange.statistics .statistic>.value,.ui.statistics .orange.statistic>.value{color:#F2711C}.ui.statistics .yellow.statistic>.value,.ui.yellow.statistic>.value,.ui.yellow.statistics .statistic>.value{color:#FBBD08}.ui.olive.statistic>.value,.ui.olive.statistics .statistic>.value,.ui.statistics .olive.statistic>.value{color:#B5CC18}.ui.green.statistic>.value,.ui.green.statistics .statistic>.value,.ui.statistics .green.statistic>.value{color:#21BA45}.ui.statistics .teal.statistic>.value,.ui.teal.statistic>.value,.ui.teal.statistics .statistic>.value{color:#00B5AD}.ui.blue.statistic>.value,.ui.blue.statistics .statistic>.value,.ui.statistics .blue.statistic>.value{color:#2185D0}.ui.statistics .violet.statistic>.value,.ui.violet.statistic>.value,.ui.violet.statistics .statistic>.value{color:#6435C9}.ui.purple.statistic>.value,.ui.purple.statistics .statistic>.value,.ui.statistics .purple.statistic>.value{color:#A333C8}.ui.pink.statistic>.value,.ui.pink.statistics .statistic>.value,.ui.statistics .pink.statistic>.value{color:#E03997}.ui.brown.statistic>.value,.ui.brown.statistics .statistic>.value,.ui.statistics .brown.statistic>.value{color:#A5673F}.ui.grey.statistic>.value,.ui.grey.statistics .statistic>.value,.ui.statistics .grey.statistic>.value{color:#767676}.ui.inverted.statistic .value,.ui.inverted.statistics .statistic>.value{color:#FFF}.ui.inverted.statistic .label,.ui.inverted.statistics .statistic>.label{color:rgba(255,255,255,.9)}.ui.inverted.red.statistic>.value,.ui.inverted.red.statistics .statistic>.value,.ui.statistics .inverted.red.statistic>.value{color:#FF695E}.ui.inverted.orange.statistic>.value,.ui.inverted.orange.statistics .statistic>.value,.ui.statistics .inverted.orange.statistic>.value{color:#FF851B}.ui.inverted.yellow.statistic>.value,.ui.inverted.yellow.statistics .statistic>.value,.ui.statistics .inverted.yellow.statistic>.value{color:#FFE21F}.ui.inverted.olive.statistic>.value,.ui.inverted.olive.statistics .statistic>.value,.ui.statistics .inverted.olive.statistic>.value{color:#D9E778}.ui.inverted.green.statistic>.value,.ui.inverted.green.statistics .statistic>.value,.ui.statistics .inverted.green.statistic>.value{color:#2ECC40}.ui.inverted.teal.statistic>.value,.ui.inverted.teal.statistics .statistic>.value,.ui.statistics .inverted.teal.statistic>.value{color:#6DFFFF}.ui.inverted.blue.statistic>.value,.ui.inverted.blue.statistics .statistic>.value,.ui.statistics .inverted.blue.statistic>.value{color:#54C8FF}.ui.inverted.violet.statistic>.value,.ui.inverted.violet.statistics .statistic>.value,.ui.statistics .inverted.violet.statistic>.value{color:#A291FB}.ui.inverted.purple.statistic>.value,.ui.inverted.purple.statistics .statistic>.value,.ui.statistics .inverted.purple.statistic>.value{color:#DC73FF}.ui.inverted.pink.statistic>.value,.ui.inverted.pink.statistics .statistic>.value,.ui.statistics .inverted.pink.statistic>.value{color:#FF8EDF}.ui.inverted.brown.statistic>.value,.ui.inverted.brown.statistics .statistic>.value,.ui.statistics .inverted.brown.statistic>.value{color:#D67C1C}.ui.inverted.grey.statistic>.value,.ui.inverted.grey.statistics .statistic>.value,.ui.statistics .inverted.grey.statistic>.value{color:#DCDDDE}.ui[class*=\"left floated\"].statistic{float:left;margin:0 2em 1em 0}.ui[class*=\"right floated\"].statistic{float:right;margin:0 0 1em 2em}.ui.floated.statistic:last-child{margin-bottom:0}.ui.mini.horizontal.statistic>.value,.ui.mini.horizontal.statistics .statistic>.value,.ui.mini.statistic>.value,.ui.mini.statistics .statistic>.value{font-size:1.5rem!important}.ui.mini.statistic>.text.value,.ui.mini.statistics .statistic>.text.value{font-size:1rem!important}.ui.tiny.horizontal.statistic>.value,.ui.tiny.horizontal.statistics .statistic>.value,.ui.tiny.statistic>.value,.ui.tiny.statistics .statistic>.value{font-size:2rem!important}.ui.tiny.statistic>.text.value,.ui.tiny.statistics .statistic>.text.value{font-size:1rem!important}.ui.small.statistic>.value,.ui.small.statistics .statistic>.value{font-size:3rem!important}.ui.small.horizontal.statistic>.value,.ui.small.horizontal.statistics .statistic>.value{font-size:2rem!important}.ui.small.statistic>.text.value,.ui.small.statistics .statistic>.text.value{font-size:1rem!important}.ui.statistic>.value,.ui.statistics .statistic>.value{font-size:4rem!important}.ui.horizontal.statistic>.value,.ui.horizontal.statistics .statistic>.value{display:inline-block;vertical-align:middle;font-size:3rem!important}.ui.statistic>.text.value,.ui.statistics .statistic>.text.value{font-size:2rem!important}.ui.large.statistic>.value,.ui.large.statistics .statistic>.value{font-size:5rem!important}.ui.large.horizontal.statistic>.value,.ui.large.horizontal.statistics .statistic>.value{font-size:4rem!important}.ui.large.statistic>.text.value,.ui.large.statistics .statistic>.text.value{font-size:2.5rem!important}.ui.huge.statistic>.value,.ui.huge.statistics .statistic>.value{font-size:6rem!important}.ui.huge.horizontal.statistic>.value,.ui.huge.horizontal.statistics .statistic>.value{font-size:5rem!important}.ui.huge.statistic>.text.value,.ui.huge.statistics .statistic>.text.value{font-size:2.5rem!important}.ui.accordion,.ui.accordion .accordion{max-width:100%}.ui.accordion .accordion{margin:1em 0 0;padding:0}.ui.accordion .accordion .title,.ui.accordion .title{cursor:pointer}.ui.accordion .title:not(.ui){padding:.5em 0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1em;color:rgba(0,0,0,.87)}.ui.accordion .accordion .title~.content,.ui.accordion .title~.content{display:none}.ui.accordion:not(.styled) .accordion .title~.content:not(.ui),.ui.accordion:not(.styled) .title~.content:not(.ui){margin:'';padding:.5em 0 1em}.ui.accordion:not(.styled) .title~.content:not(.ui):last-child{padding-bottom:0}.ui.accordion .accordion .title .dropdown.icon,.ui.accordion .title .dropdown.icon{display:inline-block;float:none;opacity:1;width:1.25em;height:1em;margin:0 .25rem 0 0;padding:0;font-size:1em;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;vertical-align:baseline;-webkit-transform:none;transform:none}.ui.accordion.menu .item .title{display:block;padding:0}.ui.accordion.menu .item .title>.dropdown.icon{float:right;margin:.21425em 0 0 1em;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ui.accordion .ui.header .dropdown.icon{font-size:1em;margin:0 .25rem 0 0}.ui.accordion .accordion .active.title .dropdown.icon,.ui.accordion .active.title .dropdown.icon,.ui.accordion.menu .item .active.title>.dropdown.icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ui.styled.accordion{width:600px}.ui.styled.accordion,.ui.styled.accordion .accordion{border-radius:.28571429rem;background:#FFF;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15)}.ui.styled.accordion .accordion .title,.ui.styled.accordion .title{margin:0;padding:.75em 1em;color:rgba(0,0,0,.4);font-weight:700;border-top:1px solid rgba(34,36,38,.15);-webkit-transition:background .1s ease,color .1s ease;transition:background .1s ease,color .1s ease}.ui.styled.accordion .accordion .title:first-child,.ui.styled.accordion>.title:first-child{border-top:none}.ui.styled.accordion .accordion .content,.ui.styled.accordion .content{margin:0;padding:.5em 1em 1.5em}.ui.styled.accordion .accordion .content{padding:.5em 1em 1.5em}.ui.styled.accordion .accordion .active.title,.ui.styled.accordion .accordion .title:hover,.ui.styled.accordion .active.title,.ui.styled.accordion .title:hover{background:0 0;color:rgba(0,0,0,.87)}.ui.styled.accordion .accordion .active.title,.ui.styled.accordion .active.title{background:0 0;color:rgba(0,0,0,.95)}.ui.accordion .accordion .active.content,.ui.accordion .active.content{display:block}.ui.fluid.accordion,.ui.fluid.accordion .accordion{width:100%}.ui.inverted.accordion .title:not(.ui){color:rgba(255,255,255,.9)}@font-face{font-family:Accordion;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfOIKAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zryj6HgAAAFwAAAAyGhlYWT/0IhHAAACOAAAADZoaGVhApkB5wAAAnAAAAAkaG10eAJuABIAAAKUAAAAGGxvY2EAjABWAAACrAAAAA5tYXhwAAgAFgAAArwAAAAgbmFtZfC1n04AAALcAAABPHBvc3QAAwAAAAAEGAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQASAEkAtwFuABMAADc0PwE2FzYXFh0BFAcGJwYvASY1EgaABQgHBQYGBQcIBYAG2wcGfwcBAQcECf8IBAcBAQd/BgYAAAAAAQAAAEkApQFuABMAADcRNDc2MzIfARYVFA8BBiMiJyY1AAUGBwgFgAYGgAUIBwYFWwEACAUGBoAFCAcFgAYGBQcAAAABAAAAAQAAqWYls18PPPUACwIAAAAAAM/9o+4AAAAAz/2j7gAAAAAAtwFuAAAACAACAAAAAAAAAAEAAAHg/+AAAAIAAAAAAAC3AAEAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAQAAAAC3ABIAtwAAAAAAAAAKABQAHgBCAGQAAAABAAAABgAUAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAASwAAoAAAAABGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAS0AAAEtFpovuE9TLzIAAAIkAAAAYAAAAGAIIweQY21hcAAAAoQAAABMAAAATA984gpnYXNwAAAC0AAAAAgAAAAIAAAAEGhlYWQAAALYAAAANgAAADb/0IhHaGhlYQAAAxAAAAAkAAAAJAKZAedobXR4AAADNAAAABgAAAAYAm4AEm1heHAAAANMAAAABgAAAAYABlAAbmFtZQAAA1QAAAE8AAABPPC1n05wb3N0AAAEkAAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLa/iU+HQFHQAAAHkPHQAAAH4RHQAAAAkdAAABJBIABwEBBw0PERQZHnJhdGluZ3JhdGluZ3UwdTF1MjB1RjBEOXVGMERBAAACAYkABAAGAQEEBwoNVp38lA78lA78lA77lA773Z33bxWLkI2Qj44I9xT3FAWOj5CNkIuQi4+JjoePiI2Gi4YIi/uUBYuGiYeHiIiHh4mGi4aLho2Ijwj7FPcUBYeOiY+LkAgO+92L5hWL95QFi5CNkI6Oj4+PjZCLkIuQiY6HCPcU+xQFj4iNhouGi4aJh4eICPsU+xQFiIeGiYaLhouHjYePiI6Jj4uQCA74lBT4lBWLDAoAAAAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAADfYOJZfDzz1AAsCAAAAAADP/aPuAAAAAM/9o+4AAAAAALcBbgAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAAAtwABAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAEAAAAAtwASALcAAAAAUAAABgAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');font-weight:400;font-style:normal}.ui.accordion .accordion .title .dropdown.icon,.ui.accordion .title .dropdown.icon{font-family:Accordion;line-height:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;font-weight:400;font-style:normal;text-align:center}.ui.accordion .accordion .title .dropdown.icon:before,.ui.accordion .title .dropdown.icon:before{content:'\\F0DA'}.ui.checkbox{position:relative;display:inline-block;-webkit-backface-visibility:hidden;backface-visibility:hidden;outline:0;vertical-align:baseline;font-style:normal;min-height:17px;font-size:1rem;line-height:17px;min-width:17px}.ui.checkbox input[type=checkbox],.ui.checkbox input[type=radio]{cursor:pointer;position:absolute;top:0;left:0;opacity:0!important;outline:0;z-index:3;width:17px;height:17px}.ui.checkbox .box,.ui.checkbox label{cursor:auto;position:relative;display:block;padding-left:1.85714em;outline:0;font-size:1em}.ui.checkbox .box:before,.ui.checkbox label:before{position:absolute;top:0;left:0;width:17px;height:17px;content:'';background:#FFF;border-radius:.21428571rem;-webkit-transition:border .1s ease,opacity .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;transition:border .1s ease,opacity .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;transition:border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease;transition:border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;border:1px solid #D4D4D5}.ui.checkbox .box:after,.ui.checkbox label:after{position:absolute;font-size:14px;top:0;left:0;width:17px;height:17px;text-align:center;opacity:0;color:rgba(0,0,0,.87);-webkit-transition:border .1s ease,opacity .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;transition:border .1s ease,opacity .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;transition:border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease;transition:border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;font-family:Checkbox}.ui.checkbox label,.ui.checkbox+label{color:rgba(0,0,0,.87);-webkit-transition:color .1s ease;transition:color .1s ease}.ui.checkbox+label{vertical-align:middle}.ui.checkbox .box:hover::before,.ui.checkbox label:hover::before{background:#FFF;border-color:rgba(34,36,38,.35)}.ui.checkbox label:hover,.ui.checkbox+label:hover{color:rgba(0,0,0,.8)}.ui.checkbox .box:active::before,.ui.checkbox label:active::before{background:#F9FAFB;border-color:rgba(34,36,38,.35)}.ui.checkbox .box:active::after,.ui.checkbox input:active~label,.ui.checkbox label:active::after{color:rgba(0,0,0,.95)}.ui.checkbox input:focus~.box:before,.ui.checkbox input:focus~label:before{background:#FFF;border-color:#96C8DA}.ui.checkbox input:focus~.box:after,.ui.checkbox input:focus~label,.ui.checkbox input:focus~label:after{color:rgba(0,0,0,.95)}.ui.checkbox input:checked~.box:before,.ui.checkbox input:checked~label:before{background:#FFF;border-color:rgba(34,36,38,.35)}.ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{opacity:1;color:rgba(0,0,0,.95)}.ui.checkbox input:not([type=radio]):indeterminate~.box:before,.ui.checkbox input:not([type=radio]):indeterminate~label:before{background:#FFF;border-color:rgba(34,36,38,.35)}.ui.checkbox input:not([type=radio]):indeterminate~.box:after,.ui.checkbox input:not([type=radio]):indeterminate~label:after{opacity:1;color:rgba(0,0,0,.95)}.ui.checkbox input:checked:focus~.box:before,.ui.checkbox input:checked:focus~label:before,.ui.checkbox input:not([type=radio]):indeterminate:focus~.box:before,.ui.checkbox input:not([type=radio]):indeterminate:focus~label:before{background:#FFF;border-color:#96C8DA}.ui.checkbox input:checked:focus~.box:after,.ui.checkbox input:checked:focus~label:after,.ui.checkbox input:not([type=radio]):indeterminate:focus~.box:after,.ui.checkbox input:not([type=radio]):indeterminate:focus~label:after{color:rgba(0,0,0,.95)}.ui.read-only.checkbox,.ui.read-only.checkbox label{cursor:default}.ui.checkbox input[disabled]~.box:after,.ui.checkbox input[disabled]~label,.ui.disabled.checkbox .box:after,.ui.disabled.checkbox label{cursor:default!important;opacity:.5;color:#000}.ui.checkbox input.hidden{z-index:-1}.ui.checkbox input.hidden+label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui.radio.checkbox{min-height:15px}.ui.radio.checkbox .box,.ui.radio.checkbox label{padding-left:1.85714em}.ui.radio.checkbox .box:before,.ui.radio.checkbox label:before{content:'';-webkit-transform:none;transform:none;width:15px;height:15px;border-radius:500rem;top:1px;left:0}.ui.radio.checkbox .box:after,.ui.radio.checkbox label:after{border:none;content:''!important;line-height:15px;top:1px;left:0;width:15px;height:15px;border-radius:500rem;-webkit-transform:scale(.46666667);transform:scale(.46666667);background-color:rgba(0,0,0,.87)}.ui.radio.checkbox input:focus~.box:before,.ui.radio.checkbox input:focus~label:before{background-color:#FFF}.ui.radio.checkbox input:focus~.box:after,.ui.radio.checkbox input:focus~label:after{background-color:rgba(0,0,0,.95)}.ui.radio.checkbox input:indeterminate~.box:after,.ui.radio.checkbox input:indeterminate~label:after{opacity:0}.ui.radio.checkbox input:checked~.box:before,.ui.radio.checkbox input:checked~label:before{background-color:#FFF}.ui.radio.checkbox input:checked~.box:after,.ui.radio.checkbox input:checked~label:after{background-color:rgba(0,0,0,.95)}.ui.radio.checkbox input:focus:checked~.box:before,.ui.radio.checkbox input:focus:checked~label:before{background-color:#FFF}.ui.radio.checkbox input:focus:checked~.box:after,.ui.radio.checkbox input:focus:checked~label:after{background-color:rgba(0,0,0,.95)}.ui.slider.checkbox{min-height:1.25rem}.ui.slider.checkbox input{width:3.5rem;height:1.25rem}.ui.slider.checkbox .box,.ui.slider.checkbox label{padding-left:4.5rem;line-height:1rem;color:rgba(0,0,0,.4)}.ui.slider.checkbox .box:before,.ui.slider.checkbox label:before{display:block;position:absolute;content:'';border:none!important;left:0;z-index:1;top:.4rem;background-color:rgba(0,0,0,.05);width:3.5rem;height:.21428571rem;-webkit-transform:none;transform:none;border-radius:500rem;-webkit-transition:background .3s ease;transition:background .3s ease}.ui.slider.checkbox .box:after,.ui.slider.checkbox label:after{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) #FFF;background:linear-gradient(transparent,rgba(0,0,0,.05)) #FFF;position:absolute;content:''!important;opacity:1;z-index:2;border:none;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15) inset;width:1.5rem;height:1.5rem;top:-.25rem;left:0;-webkit-transform:none;transform:none;border-radius:500rem;-webkit-transition:left .3s ease;transition:left .3s ease}.ui.slider.checkbox input:focus~.box:before,.ui.slider.checkbox input:focus~label:before{background-color:rgba(0,0,0,.15);border:none}.ui.slider.checkbox .box:hover,.ui.slider.checkbox label:hover{color:rgba(0,0,0,.8)}.ui.slider.checkbox .box:hover::before,.ui.slider.checkbox label:hover::before{background:rgba(0,0,0,.15)}.ui.slider.checkbox input:checked~.box,.ui.slider.checkbox input:checked~label{color:rgba(0,0,0,.95)!important}.ui.slider.checkbox input:checked~.box:before,.ui.slider.checkbox input:checked~label:before{background-color:#545454!important}.ui.slider.checkbox input:checked~.box:after,.ui.slider.checkbox input:checked~label:after{left:2rem}.ui.slider.checkbox input:focus:checked~.box,.ui.slider.checkbox input:focus:checked~label{color:rgba(0,0,0,.95)!important}.ui.slider.checkbox input:focus:checked~.box:before,.ui.slider.checkbox input:focus:checked~label:before{background-color:#000!important}.ui.toggle.checkbox{min-height:1.5rem}.ui.toggle.checkbox input{width:3.5rem;height:1.5rem}.ui.toggle.checkbox .box,.ui.toggle.checkbox label{min-height:1.5rem;padding-left:4.5rem;color:rgba(0,0,0,.87)}.ui.toggle.checkbox label{padding-top:.15em}.ui.toggle.checkbox .box:before,.ui.toggle.checkbox label:before{display:block;position:absolute;content:'';z-index:1;-webkit-transform:none;transform:none;border:none;top:0;background:rgba(0,0,0,.05);box-shadow:none;width:3.5rem;height:1.5rem;border-radius:500rem}.ui.toggle.checkbox .box:after,.ui.toggle.checkbox label:after{background:-webkit-linear-gradient(transparent,rgba(0,0,0,.05)) #FFF;background:linear-gradient(transparent,rgba(0,0,0,.05)) #FFF;position:absolute;content:''!important;opacity:1;z-index:2;border:none;box-shadow:0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15) inset;width:1.5rem;height:1.5rem;top:0;left:0;border-radius:500rem;-webkit-transition:background .3s ease,left .3s ease;transition:background .3s ease,left .3s ease}.ui.toggle.checkbox input~.box:after,.ui.toggle.checkbox input~label:after{left:-.05rem;box-shadow:none}.ui.toggle.checkbox .box:hover::before,.ui.toggle.checkbox input:focus~.box:before,.ui.toggle.checkbox input:focus~label:before,.ui.toggle.checkbox label:hover::before{background-color:rgba(0,0,0,.15);border:none}.ui.toggle.checkbox input:checked~.box,.ui.toggle.checkbox input:checked~label{color:rgba(0,0,0,.95)!important}.ui.toggle.checkbox input:checked~.box:before,.ui.toggle.checkbox input:checked~label:before{background-color:#2185D0!important}.ui.toggle.checkbox input:checked~.box:after,.ui.toggle.checkbox input:checked~label:after{left:2.15rem;box-shadow:none}.ui.toggle.checkbox input:focus:checked~.box,.ui.toggle.checkbox input:focus:checked~label{color:rgba(0,0,0,.95)!important}.ui.toggle.checkbox input:focus:checked~.box:before,.ui.toggle.checkbox input:focus:checked~label:before{background-color:#0d71bb!important}.ui.fitted.checkbox .box,.ui.fitted.checkbox label{padding-left:0!important}.ui.fitted.slider.checkbox,.ui.fitted.toggle.checkbox{width:3.5rem}@font-face{font-family:Checkbox;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBD8AAAC8AAAAYGNtYXAYVtCJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zn4huwUAAAF4AAABYGhlYWQGPe1ZAAAC2AAAADZoaGVhB30DyAAAAxAAAAAkaG10eBBKAEUAAAM0AAAAHGxvY2EAmgESAAADUAAAABBtYXhwAAkALwAAA2AAAAAgbmFtZSC8IugAAAOAAAABknBvc3QAAwAAAAAFFAAAACAAAwMTAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADoAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6AL//f//AAAAAAAg6AD//f//AAH/4xgEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAEUAUQO7AvgAGgAAARQHAQYjIicBJjU0PwE2MzIfAQE2MzIfARYVA7sQ/hQQFhcQ/uMQEE4QFxcQqAF2EBcXEE4QAnMWEP4UEBABHRAXFhBOEBCoAXcQEE4QFwAAAAABAAABbgMlAkkAFAAAARUUBwYjISInJj0BNDc2MyEyFxYVAyUQEBf9SRcQEBAQFwK3FxAQAhJtFxAQEBAXbRcQEBAQFwAAAAABAAAASQMlA24ALAAAARUUBwYrARUUBwYrASInJj0BIyInJj0BNDc2OwE1NDc2OwEyFxYdATMyFxYVAyUQEBfuEBAXbhYQEO4XEBAQEBfuEBAWbhcQEO4XEBACEm0XEBDuFxAQEBAX7hAQF20XEBDuFxAQEBAX7hAQFwAAAQAAAAIAAHRSzT9fDzz1AAsEAAAAAADRsdR3AAAAANGx1HcAAAAAA7sDbgAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADuwABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABFAyUAAAMlAAAAAAAAAAoAFAAeAE4AcgCwAAEAAAAHAC0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHAGkAAQAAAAAAAwAIADkAAQAAAAAABAAIAH4AAQAAAAAABQALABgAAQAAAAAABgAIAFEAAQAAAAAACgAaAJYAAwABBAkAAQAQAAgAAwABBAkAAgAOAHAAAwABBAkAAwAQAEEAAwABBAkABAAQAIYAAwABBAkABQAWACMAAwABBAkABgAQAFkAAwABBAkACgA0ALBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhWZXJzaW9uIDIuMABWAGUAcgBzAGkAbwBuACAAMgAuADBDaGVja2JveABDAGgAZQBjAGsAYgBvAHhDaGVja2JveABDAGgAZQBjAGsAYgBvAHhSZWd1bGFyAFIAZQBnAHUAbABhAHJDaGVja2JveABDAGgAZQBjAGsAYgBvAHhGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype')}.ui.checkbox input:checked~.box:after,.ui.checkbox input:checked~label:after{content:'\\E800'}.ui.checkbox input:indeterminate~.box:after,.ui.checkbox input:indeterminate~label:after{font-size:12px;content:'\\E801'}.dimmable:not(.body){position:relative}.ui.dimmer{display:none;position:absolute;top:0!important;left:0!important;width:100%;height:100%;text-align:center;vertical-align:middle;background-color:rgba(0,0,0,.85);opacity:0;line-height:1;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-transition:background-color .5s linear;transition:background-color .5s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:opacity;z-index:1000}.ui.dimmer>.content{width:100%;height:100%;display:table;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ui.dimmer>.content>*{display:table-cell;vertical-align:middle;color:#FFF}.ui.segment>.ui.dimmer{border-radius:inherit!important}.animating.dimmable:not(body),.dimmed.dimmable:not(body){overflow:hidden}.dimmed.dimmable>.ui.animating.dimmer,.dimmed.dimmable>.ui.visible.dimmer,.ui.active.dimmer{display:block;opacity:1}.ui.disabled.dimmer{width:0!important;height:0!important}.ui.page.dimmer{position:fixed;-webkit-transform-style:'';transform-style:'';-webkit-perspective:2000px;perspective:2000px;-webkit-transform-origin:center center;transform-origin:center center}body.animating.in.dimmable,body.dimmed.dimmable{overflow:hidden}body.dimmable>.dimmer{position:fixed}.blurring.dimmable>:not(.dimmer){-webkit-filter:blur(0) grayscale(0);filter:blur(0) grayscale(0);-webkit-transition:.8s -webkit-filter ease;transition:.8s -webkit-filter ease;transition:.8s filter ease;transition:.8s filter ease,.8s -webkit-filter ease}.blurring.dimmed.dimmable>:not(.dimmer){-webkit-filter:blur(5px) grayscale(.7);filter:blur(5px) grayscale(.7)}.blurring.dimmable>.dimmer{background-color:rgba(0,0,0,.6)}.blurring.dimmable>.inverted.dimmer{background-color:rgba(255,255,255,.6)}.ui.dimmer>.top.aligned.content>*{vertical-align:top}.ui.dimmer>.bottom.aligned.content>*{vertical-align:bottom}.ui.inverted.dimmer{background-color:rgba(255,255,255,.85)}.ui.inverted.dimmer>.content>*{color:#FFF}.ui.simple.dimmer{display:block;overflow:hidden;opacity:1;width:0;height:0%;z-index:-100;background-color:rgba(0,0,0,0)}.dimmed.dimmable>.ui.simple.dimmer{overflow:visible;opacity:1;width:100%;height:100%;background-color:rgba(0,0,0,.85);z-index:1}.ui.simple.inverted.dimmer{background-color:rgba(255,255,255,0)}.dimmed.dimmable>.ui.simple.inverted.dimmer{background-color:rgba(255,255,255,.85)}.ui.dropdown{cursor:pointer;position:relative;display:inline-block;outline:0;text-align:left;-webkit-transition:box-shadow .1s ease,width .1s ease;transition:box-shadow .1s ease,width .1s ease;-webkit-tap-highlight-color:transparent}.ui.dropdown .menu{cursor:auto;position:absolute;display:none;outline:0;top:100%;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin:0;padding:0;background:#FFF;font-size:1em;text-shadow:none;text-align:left;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;z-index:11;will-change:transform,opacity}.ui.dropdown .menu>*{white-space:nowrap}.ui.dropdown>input:not(.search):first-child,.ui.dropdown>select{display:none!important}.ui.dropdown>.dropdown.icon{position:relative;font-size:.85714286em;margin:0 0 0 1em}.ui.dropdown .menu>.item .dropdown.icon{width:auto;float:right;margin:0 0 0 1em}.ui.dropdown .menu>.item .dropdown.icon+.text{margin-right:1em}.ui.dropdown>.text{display:inline-block;-webkit-transition:none;transition:none}.ui.dropdown .menu>.item{position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);padding:.78571429rem 1.14285714rem!important;font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;-webkit-touch-callout:none}.ui.dropdown .menu>.item:first-child{border-top-width:0}.ui.dropdown .menu .item>[class*=\"right floated\"],.ui.dropdown>.text>[class*=\"right floated\"]{float:right!important;margin-right:0!important;margin-left:1em!important}.ui.dropdown .menu .item>[class*=\"left floated\"],.ui.dropdown>.text>[class*=\"left floated\"]{float:left!important;margin-left:0!important;margin-right:1em!important}.ui.dropdown .menu .item>.flag.floated,.ui.dropdown .menu .item>.icon.floated,.ui.dropdown .menu .item>.image.floated,.ui.dropdown .menu .item>img.floated{margin-top:0}.ui.dropdown .menu>.header{margin:1rem 0 .75rem;padding:0 1.14285714rem;color:rgba(0,0,0,.85);font-size:.78571429em;font-weight:700;text-transform:uppercase}.ui.dropdown .menu>.divider{border-top:1px solid rgba(34,36,38,.1);height:0;margin:.5em 0}.ui.dropdown .menu>.input{width:auto;display:-webkit-box;display:-ms-flexbox;display:flex;margin:1.14285714rem .78571429rem;min-width:10rem}.ui.dropdown .menu>.header+.input{margin-top:0}.ui.dropdown .menu>.input:not(.transparent) input{padding:.5em 1em}.ui.dropdown .menu>.input:not(.transparent) .button,.ui.dropdown .menu>.input:not(.transparent) .icon,.ui.dropdown .menu>.input:not(.transparent) .label{padding-top:.5em;padding-bottom:.5em}.ui.dropdown .menu>.item>.description,.ui.dropdown>.text>.description{float:right;margin:0 0 0 1em;color:rgba(0,0,0,.4)}.ui.dropdown .menu>.message{padding:.78571429rem 1.14285714rem;font-weight:400}.ui.dropdown .menu>.message:not(.ui){color:rgba(0,0,0,.4)}.ui.dropdown .menu .menu{top:0!important;left:100%!important;right:auto!important;margin:0 0 0 -.5em!important;border-radius:.28571429rem!important;z-index:21!important}.ui.dropdown .menu .menu:after{display:none}.ui.dropdown .menu>.item>.flag,.ui.dropdown .menu>.item>.icon,.ui.dropdown .menu>.item>.image,.ui.dropdown .menu>.item>.label,.ui.dropdown .menu>.item>img,.ui.dropdown>.text>.flag,.ui.dropdown>.text>.icon,.ui.dropdown>.text>.image,.ui.dropdown>.text>.label,.ui.dropdown>.text>img{margin-top:0;margin-left:0;float:none;margin-right:.78571429rem}.ui.dropdown .menu>.item>.image,.ui.dropdown .menu>.item>img,.ui.dropdown>.text>.image,.ui.dropdown>.text>img{display:inline-block;vertical-align:middle;width:auto;max-height:2em}.ui.dropdown .ui.menu>.item:before,.ui.menu .ui.dropdown .menu>.item:before{display:none}.ui.menu .ui.dropdown .menu .active.item{border-left:none}.ui.buttons>.ui.dropdown:last-child .menu,.ui.menu .right.dropdown.item .menu,.ui.menu .right.menu .dropdown:last-child .menu{left:auto;right:0}.ui.label.dropdown .menu{min-width:100%}.ui.dropdown.icon.button>.dropdown.icon{margin:0}.ui.button.dropdown .menu{min-width:100%}.ui.selection.dropdown{cursor:pointer;word-wrap:break-word;line-height:1em;white-space:normal;outline:0;-webkit-transform:rotateZ(0);transform:rotateZ(0);min-width:14em;min-height:2.7142em;background:#FFF;display:inline-block;padding:.78571429em 2.1em .78571429em 1em;color:rgba(0,0,0,.87);box-shadow:none;border:1px solid rgba(34,36,38,.15);border-radius:.28571429rem;-webkit-transition:box-shadow .1s ease,width .1s ease;transition:box-shadow .1s ease,width .1s ease}.ui.selection.dropdown.active,.ui.selection.dropdown.visible{z-index:10}select.ui.dropdown{height:38px;padding:.5em;border:1px solid rgba(34,36,38,.15);visibility:visible}.ui.selection.dropdown>.delete.icon,.ui.selection.dropdown>.dropdown.icon,.ui.selection.dropdown>.search.icon{cursor:pointer;position:absolute;width:auto;height:auto;line-height:1.2142em;top:.78571429em;right:1em;z-index:3;margin:-.78571429em;padding:.78571429em;opacity:.8;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.ui.compact.selection.dropdown{min-width:0}.ui.selection.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;border-top-width:0!important;outline:0;margin:0 -1px;min-width:calc(100% + 2px);width:calc(100% + 2px);border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.ui.selection.dropdown .menu:after,.ui.selection.dropdown .menu:before{display:none}.ui.selection.dropdown .menu>.message{padding:.78571429rem 1.14285714rem}@media only screen and (max-width:767px){.ui.selection.dropdown .menu{max-height:8.01428571rem}}@media only screen and (min-width:768px){.ui.selection.dropdown .menu{max-height:10.68571429rem}}@media only screen and (min-width:992px){.ui.selection.dropdown .menu{max-height:16.02857143rem}}@media only screen and (min-width:1920px){.ui.selection.dropdown .menu{max-height:21.37142857rem}}.ui.selection.dropdown .menu>.item{border-top:1px solid #FAFAFA;padding:.78571429rem 1.14285714rem!important;white-space:normal;word-wrap:normal}.ui.selection.dropdown .menu>.hidden.addition.item{display:none}.ui.selection.dropdown:hover{border-color:rgba(34,36,38,.35);box-shadow:none}.ui.selection.active.dropdown,.ui.selection.active.dropdown .menu{border-color:#96C8DA;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.ui.selection.dropdown:focus{border-color:#96C8DA;box-shadow:none}.ui.selection.dropdown:focus .menu{border-color:#96C8DA;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.ui.selection.visible.dropdown>.text:not(.default){font-weight:400;color:rgba(0,0,0,.8)}.ui.selection.active.dropdown:hover,.ui.selection.active.dropdown:hover .menu{border-color:#96C8DA;box-shadow:0 2px 3px 0 rgba(34,36,38,.15)}.ui.active.selection.dropdown>.dropdown.icon,.ui.visible.selection.dropdown>.dropdown.icon{opacity:1;z-index:3}.ui.active.selection.dropdown{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.ui.active.empty.selection.dropdown{border-radius:.28571429rem!important;box-shadow:none!important}.ui.active.empty.selection.dropdown .menu{border:none!important;box-shadow:none!important}.ui.search.dropdown{min-width:''}.ui.search.dropdown>input.search{background:none!important;border:none!important;box-shadow:none!important;cursor:text;top:0;left:1px;width:100%;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0);padding:inherit;position:absolute;z-index:2}.ui.search.dropdown>.text{cursor:text;position:relative;left:1px;z-index:3}.ui.search.selection.dropdown>input.search{line-height:1.2142em;padding:.67861429em 2.1em .67861429em 1em}.ui.search.selection.dropdown>span.sizer{line-height:1.2142em;padding:.67861429em 2.1em .67861429em 1em;display:none;white-space:pre}.ui.search.dropdown.active>input.search,.ui.search.dropdown.visible>input.search{cursor:auto}.ui.search.dropdown.active>.text,.ui.search.dropdown.visible>.text{pointer-events:none}.ui.active.search.dropdown input.search:focus+.text .flag,.ui.active.search.dropdown input.search:focus+.text .icon{opacity:.45}.ui.active.search.dropdown input.search:focus+.text{color:rgba(115,115,115,.87)!important}.ui.search.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch}@media only screen and (max-width:767px){.ui.search.dropdown .menu{max-height:8.01428571rem}}@media only screen and (min-width:768px){.ui.search.dropdown .menu{max-height:10.68571429rem}}@media only screen and (min-width:992px){.ui.search.dropdown .menu{max-height:16.02857143rem}}@media only screen and (min-width:1920px){.ui.search.dropdown .menu{max-height:21.37142857rem}}.ui.multiple.dropdown{padding:.22620476em 2.1em .22620476em .35714286em}.ui.multiple.dropdown .menu{cursor:auto}.ui.multiple.search.dropdown,.ui.multiple.search.dropdown>input.search{cursor:text}.ui.multiple.dropdown>.label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;vertical-align:top;white-space:normal;font-size:1em;padding:.35714286em .78571429em;margin:.14285714rem .28571429rem .14285714rem 0;box-shadow:0 0 0 1px rgba(34,36,38,.15) inset}.ui.multiple.dropdown .dropdown.icon{margin:'';padding:''}.ui.multiple.dropdown>.text{position:static;padding:0;max-width:100%;margin:.45240952em 0 .45240952em .64285714em;line-height:1.21428571em}.ui.multiple.dropdown>.label~input.search{margin-left:.14285714em!important}.ui.multiple.dropdown>.label~.text{display:none}.ui.multiple.search.dropdown>.text{display:inline-block;position:absolute;top:0;left:0;padding:inherit;margin:.45240952em 0 .45240952em .64285714em;line-height:1.21428571em}.ui.multiple.search.dropdown>.label~.text{display:none}.ui.multiple.search.dropdown>input.search{position:static;padding:0;max-width:100%;margin:.45240952em 0 .45240952em .64285714em;width:2.2em;line-height:1.21428571em}.ui.inline.dropdown{cursor:pointer;display:inline-block;color:inherit}.ui.inline.dropdown .dropdown.icon{margin:0 .5em 0 .21428571em;vertical-align:baseline}.ui.inline.dropdown>.text{font-weight:700}.ui.inline.dropdown .menu{cursor:auto;margin-top:.21428571em;border-radius:.28571429rem}.ui.dropdown .menu .active.item{background:0 0;font-weight:700;color:rgba(0,0,0,.95);box-shadow:none;z-index:12}.ui.dropdown .menu>.item:hover{background:rgba(0,0,0,.05);color:rgba(0,0,0,.95);z-index:13}.ui.loading.dropdown>i.icon{height:1em!important;padding:1.14285714em 1.07142857em!important}.ui.loading.dropdown>i.icon:before{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.loading.dropdown>i.icon:after{position:absolute;content:'';top:50%;left:50%;box-shadow:0 0 0 1px transparent;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:dropdown-spin .6s linear;animation:dropdown-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:.2em}.ui.loading.dropdown.button>i.icon:after,.ui.loading.dropdown.button>i.icon:before{display:none}@-webkit-keyframes dropdown-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dropdown-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ui.default.dropdown:not(.button)>.text,.ui.dropdown:not(.button)>.default.text{color:rgba(191,191,191,.87)}.ui.default.dropdown:not(.button)>input:focus+.text,.ui.dropdown:not(.button)>input:focus+.default.text{color:rgba(115,115,115,.87)}.ui.loading.dropdown>.text{-webkit-transition:none;transition:none}.ui.dropdown .loading.menu{display:block;visibility:hidden;z-index:-1}.ui.dropdown .menu .selected.item,.ui.dropdown.selected{background:rgba(0,0,0,.03);color:rgba(0,0,0,.95)}.ui.dropdown>.filtered.text{visibility:hidden}.ui.dropdown .filtered.item{display:none!important}.ui.dropdown.error,.ui.dropdown.error>.default.text,.ui.dropdown.error>.text{color:#9F3A38}.ui.selection.dropdown.error{background:#FFF6F6;border-color:#E0B4B4}.ui.dropdown.error>.menu,.ui.dropdown.error>.menu .menu,.ui.selection.dropdown.error:hover{border-color:#E0B4B4}.ui.dropdown.error>.menu>.item{color:#9F3A38}.ui.multiple.selection.error.dropdown>.label{border-color:#E0B4B4}.ui.dropdown.error>.menu>.item:hover{background-color:#FFF2F2}.ui.dropdown.error>.menu .active.item{background-color:#FDCFCF}.ui.disabled.dropdown,.ui.dropdown .menu>.disabled.item{cursor:default;pointer-events:none;opacity:.45}.ui.dropdown .menu{left:0}.ui.dropdown .menu .right.menu,.ui.dropdown .right.menu>.menu{left:100%!important;right:auto!important;border-radius:.28571429rem!important}.ui.dropdown .menu .left.menu,.ui.dropdown>.left.menu .menu{left:auto!important;right:100%!important;border-radius:.28571429rem!important}.ui.dropdown .item .left.dropdown.icon,.ui.dropdown .left.menu .item .dropdown.icon{width:auto;float:left;margin:0 .78571429rem 0 0}.ui.dropdown .item .left.dropdown.icon+.text,.ui.dropdown .left.menu .item .dropdown.icon+.text{margin-left:1em}.ui.upward.dropdown>.menu{top:auto;bottom:100%;box-shadow:0 0 3px 0 rgba(0,0,0,.08);border-radius:.28571429rem .28571429rem 0 0}.ui.dropdown .upward.menu{top:auto!important;bottom:0!important}.ui.simple.upward.active.dropdown,.ui.simple.upward.dropdown:hover{border-radius:.28571429rem .28571429rem 0 0!important}.ui.upward.dropdown.button:not(.pointing):not(.floating).active{border-radius:.28571429rem .28571429rem 0 0}.ui.upward.selection.dropdown .menu{border-top-width:1px!important;border-bottom-width:0!important;box-shadow:0 -2px 3px 0 rgba(0,0,0,.08)}.ui.upward.selection.dropdown:hover{box-shadow:0 0 2px 0 rgba(0,0,0,.05)}.ui.active.upward.selection.dropdown{border-radius:0 0 .28571429rem .28571429rem!important}.ui.upward.selection.dropdown.visible{box-shadow:0 0 3px 0 rgba(0,0,0,.08);border-radius:0 0 .28571429rem .28571429rem!important}.ui.upward.active.selection.dropdown:hover{box-shadow:0 0 3px 0 rgba(0,0,0,.05)}.ui.upward.active.selection.dropdown:hover .menu{box-shadow:0 -2px 3px 0 rgba(0,0,0,.08)}.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{overflow-x:hidden;overflow-y:auto}.ui.scrolling.dropdown .menu{overflow-x:hidden;overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-overflow-scrolling:touch;min-width:100%!important;width:auto!important}.ui.dropdown .scrolling.menu{position:static;overflow-y:auto;border:none;box-shadow:none!important;border-radius:0!important;margin:0!important;min-width:100%!important;width:auto!important;border-top:1px solid rgba(34,36,38,.15)}.ui.dropdown .scrolling.menu>.item.item.item,.ui.scrolling.dropdown .menu .item.item.item{border-top:none;padding-right:calc(1.14285714rem + 17px)!important}.ui.dropdown .scrolling.menu .item:first-child,.ui.scrolling.dropdown .menu .item:first-child{border-top:none}.ui.dropdown>.animating.menu .scrolling.menu,.ui.dropdown>.visible.menu .scrolling.menu{display:block}@media all and (-ms-high-contrast:none){.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{min-width:calc(100% - 17px)}}@media only screen and (max-width:767px){.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{max-height:10.28571429rem}}.ui.simple.dropdown .menu:after,.ui.simple.dropdown .menu:before{display:none}.ui.simple.dropdown .menu{position:absolute;display:block;overflow:hidden;top:-9999px!important;opacity:0;width:0;height:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease}.ui.simple.active.dropdown,.ui.simple.dropdown:hover{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.ui.simple.active.dropdown>.menu,.ui.simple.dropdown:hover>.menu{overflow:visible;width:auto;height:auto;top:100%!important;opacity:1}.ui.simple.dropdown:hover>.menu>.item:hover>.menu,.ui.simple.dropdown>.menu>.item:active>.menu{overflow:visible;width:auto;height:auto;top:0!important;left:100%!important;opacity:1}.ui.simple.disabled.dropdown:hover .menu{display:none;height:0;width:0;overflow:hidden}.ui.simple.visible.dropdown>.menu{display:block}.ui.fluid.dropdown{display:block;width:100%;min-width:0}.ui.fluid.dropdown>.dropdown.icon{float:right}.ui.floating.dropdown .menu{left:0;right:auto;box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)!important;border-radius:.28571429rem!important}.ui.floating.dropdown>.menu{margin-top:.5em!important;border-radius:.28571429rem!important}.ui.pointing.dropdown>.menu{top:100%;margin-top:.78571429rem;border-radius:.28571429rem}.ui.pointing.dropdown>.menu:after{display:block;position:absolute;pointer-events:none;content:'';visibility:visible;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:.5em;height:.5em;box-shadow:-1px -1px 0 1px rgba(34,36,38,.15);background:#FFF;z-index:2;top:-.25em;left:50%;margin:0 0 0 -.25em}.ui.top.left.pointing.dropdown>.menu{top:100%;bottom:auto;left:0;right:auto;margin:1em 0 0}.ui.top.left.pointing.dropdown>.menu:after{top:-.25em;left:1em;right:auto;margin:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ui.top.right.pointing.dropdown>.menu{top:100%;bottom:auto;right:0;left:auto;margin:1em 0 0}.ui.top.right.pointing.dropdown>.menu:after{top:-.25em;left:auto;right:1em;margin:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ui.left.pointing.dropdown>.menu{top:0;left:100%;right:auto;margin:0 0 0 1em}.ui.left.pointing.dropdown>.menu:after{top:1em;left:-.25em;margin:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.ui.right.pointing.dropdown>.menu{top:0;left:auto;right:100%;margin:0 1em 0 0}.ui.right.pointing.dropdown>.menu:after{top:1em;left:auto;right:-.25em;margin:0;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ui.bottom.pointing.dropdown>.menu{top:auto;bottom:100%;left:0;right:auto;margin:0 0 1em}.ui.bottom.pointing.dropdown>.menu:after{top:auto;bottom:-.25em;right:auto;margin:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.ui.bottom.pointing.dropdown>.menu .menu{top:auto!important;bottom:0!important}.ui.bottom.left.pointing.dropdown>.menu{left:0;right:auto}.ui.bottom.left.pointing.dropdown>.menu:after{left:1em;right:auto}.ui.bottom.right.pointing.dropdown>.menu{right:0;left:auto}.ui.bottom.right.pointing.dropdown>.menu:after{left:auto;right:1em}.ui.upward.pointing.dropdown>.menu,.ui.upward.top.pointing.dropdown>.menu{top:auto;bottom:100%;margin:0 0 .78571429rem;border-radius:.28571429rem}.ui.upward.pointing.dropdown>.menu:after,.ui.upward.top.pointing.dropdown>.menu:after{top:100%;bottom:auto;box-shadow:1px 1px 0 1px rgba(34,36,38,.15);margin:-.25em 0 0}@font-face{font-family:Dropdown;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfuIIAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zjo82LgAAAFwAAABVGhlYWQAQ88bAAACxAAAADZoaGVhAwcB6QAAAvwAAAAkaG10eAS4ABIAAAMgAAAAIGxvY2EBNgDeAAADQAAAABJtYXhwAAoAFgAAA1QAAAAgbmFtZVcZpu4AAAN0AAABRXBvc3QAAwAAAAAEvAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDX//3//wAB/+MPLQADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAIABJQElABMAABM0NzY3BTYXFhUUDwEGJwYvASY1AAUGBwEACAUGBoAFCAcGgAUBEgcGBQEBAQcECQYHfwYBAQZ/BwYAAQAAAG4BJQESABMAADc0PwE2MzIfARYVFAcGIyEiJyY1AAWABgcIBYAGBgUI/wAHBgWABwaABQWABgcHBgUFBgcAAAABABIASQC3AW4AEwAANzQ/ATYXNhcWHQEUBwYnBi8BJjUSBoAFCAcFBgYFBwgFgAbbBwZ/BwEBBwQJ/wgEBwEBB38GBgAAAAABAAAASQClAW4AEwAANxE0NzYzMh8BFhUUDwEGIyInJjUABQYHCAWABgaABQgHBgVbAQAIBQYGgAUIBwWABgYFBwAAAAEAAAABAADZuaKOXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAAAAACgAUAB4AQgBkAIgAqgAAAAEAAAAIABQAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgA0AGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgA0AGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVwAAoAAAAABSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAdkAAAHZLDXE/09TLzIAAALQAAAAYAAAAGAIIweQY21hcAAAAzAAAABMAAAATA9+4ghnYXNwAAADfAAAAAgAAAAIAAAAEGhlYWQAAAOEAAAANgAAADYAQ88baGhlYQAAA7wAAAAkAAAAJAMHAelobXR4AAAD4AAAACAAAAAgBLgAEm1heHAAAAQAAAAABgAAAAYACFAAbmFtZQAABAgAAAFFAAABRVcZpu5wb3N0AAAFUAAAACAAAAAgAAMAAAEABAQAAQEBCGljb21vb24AAQIAAQA6+BwC+BsD+BgEHgoAGVP/i4seCgAZU/+LiwwHi2v4lPh0BR0AAACIDx0AAACNER0AAAAJHQAAAdASAAkBAQgPERMWGyAlKmljb21vb25pY29tb29udTB1MXUyMHVGMEQ3dUYwRDh1RjBEOXVGMERBAAACAYkABgAIAgABAAQABwAKAA0AVgCfAOgBL/yUDvyUDvyUDvuUDvtvi/emFYuQjZCOjo+Pj42Qiwj3lIsFkIuQiY6Hj4iNhouGi4aJh4eHCPsU+xQFiIiGiYaLhouHjYeOCPsU9xQFiI+Jj4uQCA77b4v3FBWLkI2Pjo8I9xT3FAWPjo+NkIuQi5CJjogI9xT7FAWPh42Hi4aLhomHh4eIiIaJhosI+5SLBYaLh42HjoiPiY+LkAgO+92d928Vi5CNkI+OCPcU9xQFjo+QjZCLkIuPiY6Hj4iNhouGCIv7lAWLhomHh4iIh4eJhouGi4aNiI8I+xT3FAWHjomPi5AIDvvdi+YVi/eUBYuQjZCOjo+Pj42Qi5CLkImOhwj3FPsUBY+IjYaLhouGiYeHiAj7FPsUBYiHhomGi4aLh42Hj4iOiY+LkAgO+JQU+JQViwwKAAAAAAMCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8NoB4P/g/+AB4AAgAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDw2v/9//8AAAAAACDw1//9//8AAf/jDy0AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAA5emozXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAUAAACAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoANABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoANABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');font-weight:400;font-style:normal}.ui.dropdown>.dropdown.icon{font-family:Dropdown;line-height:1;height:1em;-webkit-backface-visibility:hidden;backface-visibility:hidden;font-weight:400;font-style:normal;text-align:center;width:auto}.ui.dropdown>.dropdown.icon:before{content:'\\F0D7'}.ui.dropdown .menu .item .dropdown.icon:before{content:'\\F0DA'}.ui.dropdown .item .left.dropdown.icon:before,.ui.dropdown .left.menu .item .dropdown.icon:before{content:\"\\F0D9\"}.ui.vertical.menu .dropdown.item>.dropdown.icon:before{content:\"\\F0DA\"}.ui.embed{position:relative;max-width:100%;height:0;overflow:hidden;background:#DCDDDE;padding-bottom:56.25%}.ui.embed embed,.ui.embed iframe,.ui.embed object{position:absolute;border:none;width:100%;height:100%;top:0;left:0;margin:0;padding:0}.ui.embed>.embed{display:none}.ui.embed>.placeholder{position:absolute;cursor:pointer;top:0;left:0;display:block;width:100%;height:100%;background-color:radial-gradient(transparent 45%,rgba(0,0,0,.3))}.ui.embed>.icon{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;z-index:2}.ui.embed>.icon:after{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;content:'';background:-webkit-radial-gradient(transparent 45%,rgba(0,0,0,.3));background:radial-gradient(transparent 45%,rgba(0,0,0,.3));opacity:.5;-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.ui.embed>.icon:before{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);color:#FFF;font-size:6rem;text-shadow:0 2px 10px rgba(34,36,38,.2);-webkit-transition:opacity .5s ease,color .5s ease;transition:opacity .5s ease,color .5s ease;z-index:10}.ui.embed .icon:hover:after{background:-webkit-radial-gradient(transparent 45%,rgba(0,0,0,.3));background:radial-gradient(transparent 45%,rgba(0,0,0,.3));opacity:1}.ui.embed .icon:hover:before{color:#FFF}.ui.active.embed>.icon,.ui.active.embed>.placeholder{display:none}.ui.active.embed>.embed{display:block}.ui.square.embed{padding-bottom:100%}.ui[class*=\"4:3\"].embed{padding-bottom:75%}.ui[class*=\"16:9\"].embed{padding-bottom:56.25%}.ui[class*=\"21:9\"].embed{padding-bottom:42.85714286%}.ui.modal{display:none;position:fixed;z-index:1001;top:50%;left:50%;text-align:left;background:#FFF;border:none;box-shadow:1px 3px 3px 0 rgba(0,0,0,.2),1px 3px 15px 2px rgba(0,0,0,.2);-webkit-transform-origin:50% 25%;transform-origin:50% 25%;border-radius:.28571429rem;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;will-change:top,left,margin,transform,opacity}.ui.modal>.icon:first-child+*,.ui.modal>:first-child:not(.icon){border-top-left-radius:.28571429rem;border-top-right-radius:.28571429rem}.ui.modal>:last-child{border-bottom-left-radius:.28571429rem;border-bottom-right-radius:.28571429rem}.ui.modal>.close{cursor:pointer;position:absolute;top:-2.5rem;right:-2.5rem;z-index:1;opacity:.8;font-size:1.25em;color:#FFF;width:2.25rem;height:2.25rem;padding:.625rem 0 0}.ui.modal>.close:hover{opacity:1}.ui.modal>.header{display:block;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;background:#FFF;margin:0;padding:1.25rem 1.5rem;box-shadow:none;color:rgba(0,0,0,.85);border-bottom:1px solid rgba(34,36,38,.15)}.ui.modal>.header:not(.ui){font-size:1.42857143rem;line-height:1.2857em;font-weight:700}.ui.modal>.content{display:block;width:100%;font-size:1em;line-height:1.4;padding:1.5rem;background:#FFF}.ui.modal>.image.content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ui.modal>.content>.image{display:block;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;width:'';-ms-flex-item-align:top;-ms-grid-row-align:top;align-self:top}.ui.modal>[class*=\"top aligned\"]{-ms-flex-item-align:top;-ms-grid-row-align:top;align-self:top}.ui.modal>[class*=\"middle aligned\"]{-ms-flex-item-align:middle;-ms-grid-row-align:middle;align-self:middle}.ui.modal>[class*=stretched]{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.ui.modal>.content>.description{display:block;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-width:0;-ms-flex-item-align:top;-ms-grid-row-align:top;align-self:top}.ui.modal>.content>.icon+.description,.ui.modal>.content>.image+.description{-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;min-width:'';width:auto;padding-left:2em}.ui.modal>.content>.image>i.icon{margin:0;opacity:1;width:auto;line-height:1;font-size:8rem}.ui.modal>.actions{background:#F9FAFB;padding:1rem;border-top:1px solid rgba(34,36,38,.15);text-align:right}.ui.modal .actions>.button{margin-left:.75em}@media only screen and (max-width:767px){.ui.modal{width:95%;margin:0 0 0 -47.5%}}@media only screen and (min-width:768px){.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{max-height:15.42857143rem}.ui.modal{width:88%;margin:0 0 0 -44%}}@media only screen and (min-width:992px){.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{max-height:20.57142857rem}.ui.modal{width:850px;margin:0 0 0 -425px}}@media only screen and (min-width:1200px){.ui.modal{width:900px;margin:0 0 0 -450px}}@media only screen and (min-width:1920px){.ui.dropdown .scrolling.menu,.ui.scrolling.dropdown .menu{max-height:20.57142857rem}.ui.modal{width:950px;margin:0 0 0 -475px}}@media only screen and (max-width:991px){.ui.modal>.header{padding-right:2.25rem}.ui.modal>.close{top:1.0535rem;right:1rem;color:rgba(0,0,0,.87)}}@media only screen and (max-width:767px){.ui.modal>.header{padding:.75rem 2.25rem .75rem 1rem!important}.ui.modal>.content{display:block;padding:1rem!important}.ui.modal>.close{top:.5rem!important;right:.5rem!important}.ui.modal .image.content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ui.modal .content>.image{display:block;max-width:100%;margin:0 auto!important;text-align:center;padding:0 0 1rem!important}.ui.modal>.content>.image>i.icon{font-size:5rem;text-align:center}.ui.modal .content>.description{display:block;width:100%!important;margin:0!important;padding:1rem 0!important;box-shadow:none}.ui.modal>.actions{padding:1rem 1rem 0!important}.ui.modal .actions>.button,.ui.modal .actions>.buttons{margin-bottom:1rem}}.ui.inverted.dimmer>.ui.modal{box-shadow:1px 3px 10px 2px rgba(0,0,0,.2)}.ui.basic.modal{background-color:transparent;border:none;border-radius:0;box-shadow:none!important;color:#FFF}.ui.basic.modal>.actions,.ui.basic.modal>.content,.ui.basic.modal>.header{background-color:transparent}.ui.basic.modal>.header{color:#FFF}.ui.basic.modal>.close{top:1rem;right:1.5rem}.ui.inverted.dimmer>.basic.modal{color:rgba(0,0,0,.87)}.ui.inverted.dimmer>.ui.basic.modal>.header{color:rgba(0,0,0,.85)}.ui.active.modal{display:block}.scrolling.dimmable.dimmed{overflow:hidden}.scrolling.dimmable.dimmed>.dimmer{overflow:auto;-webkit-overflow-scrolling:touch}.scrolling.dimmable>.dimmer{position:fixed}.modals.dimmer .ui.scrolling.modal{position:static!important;margin:3.5rem auto!important}.scrolling.undetached.dimmable.dimmed{overflow:auto;-webkit-overflow-scrolling:touch}.scrolling.undetached.dimmable.dimmed>.dimmer{overflow:hidden}.scrolling.undetached.dimmable .ui.scrolling.modal{position:absolute;left:50%;margin-top:3.5rem!important}.undetached.dimmable.dimmed>.pusher{z-index:auto}@media only screen and (max-width:991px){.ui.basic.modal>.close{color:#FFF}.modals.dimmer .ui.scrolling.modal{margin-top:1rem!important;margin-bottom:1rem!important}}.ui.fullscreen.modal{width:95%!important;left:2.5%!important;margin:1em auto}.ui.fullscreen.scrolling.modal{left:0!important}.ui.fullscreen.modal>.header{padding-right:2.25rem}.ui.fullscreen.modal>.close{top:1.0535rem;right:1rem;color:rgba(0,0,0,.87)}.ui.modal{font-size:1rem}.ui.small.modal>.header:not(.ui){font-size:1.3em}@media only screen and (max-width:767px){.ui.small.modal{width:95%;margin:0 0 0 -47.5%}}@media only screen and (min-width:768px){.ui.small.modal{width:70.4%;margin:0 0 0 -35.2%}}@media only screen and (min-width:992px){.ui.small.modal{width:680px;margin:0 0 0 -340px}}@media only screen and (min-width:1200px){.ui.small.modal{width:720px;margin:0 0 0 -360px}}@media only screen and (min-width:1920px){.ui.small.modal{width:760px;margin:0 0 0 -380px}}.ui.large.modal>.header{font-size:1.6em}@media only screen and (max-width:767px){.ui.large.modal{width:95%;margin:0 0 0 -47.5%}}@media only screen and (min-width:768px){.ui.large.modal{width:88%;margin:0 0 0 -44%}}@media only screen and (min-width:992px){.ui.large.modal{width:1020px;margin:0 0 0 -510px}}@media only screen and (min-width:1200px){.ui.large.modal{width:1080px;margin:0 0 0 -540px}}@media only screen and (min-width:1920px){.ui.large.modal{width:1140px;margin:0 0 0 -570px}}.ui.nag{display:none;opacity:.95;position:relative;top:0;left:0;z-index:999;min-height:0;width:100%;margin:0;padding:.75em 1em;background:#555;box-shadow:0 1px 2px 0 rgba(0,0,0,.2);font-size:1rem;text-align:center;color:rgba(0,0,0,.87);border-radius:0 0 .28571429rem .28571429rem;-webkit-transition:.2s background ease;transition:.2s background ease}a.ui.nag{cursor:pointer}.ui.nag>.title{display:inline-block;margin:0 .5em;color:#FFF}.ui.nag>.close.icon{cursor:pointer;opacity:.4;position:absolute;top:50%;right:1em;font-size:1em;margin:-.5em 0 0;color:#FFF;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.ui.nag:hover{background:#555;opacity:1}.ui.nag .close:hover{opacity:1}.ui.overlay.nag{position:absolute;display:block}.ui.fixed.nag{position:fixed}.ui.bottom.nag,.ui.bottom.nags{border-radius:.28571429rem .28571429rem 0 0;top:auto;bottom:0}.ui.inverted.nag,.ui.inverted.nags .nag{background-color:#F3F4F5;color:rgba(0,0,0,.85)}.ui.inverted.nag .close,.ui.inverted.nag .title,.ui.inverted.nags .nag .close,.ui.inverted.nags .nag .title{color:rgba(0,0,0,.4)}.ui.nags .nag{border-radius:0!important}.ui.nags .nag:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui.bottom.nags .nag:last-child{border-radius:.28571429rem .28571429rem 0 0}.ui.popup{display:none;position:absolute;top:0;right:0;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content;z-index:1900;border:1px solid #D4D4D5;line-height:1.4285em;max-width:250px;background:#FFF;padding:.833em 1em;font-weight:400;font-style:normal;color:rgba(0,0,0,.87);border-radius:.28571429rem;box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)}.ui.popup>.header{padding:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1.14285714em;line-height:1.2;font-weight:700}.ui.popup>.header+.content{padding-top:.5em}.ui.popup:before{position:absolute;content:'';width:.71428571em;height:.71428571em;background:#FFF;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:2;box-shadow:1px 1px 0 0 #bababc}[data-tooltip]{position:relative}[data-tooltip]:not([data-position]):before{top:auto;right:auto;bottom:100%;left:50%;background:#FFF;margin-left:-.07142857rem;margin-bottom:.14285714rem}[data-tooltip]:not([data-position]):after{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:100%;margin-bottom:.5em}[data-tooltip]:after,[data-tooltip]:before{pointer-events:none;visibility:hidden}[data-tooltip]:before{position:absolute;content:'';font-size:1rem;width:.71428571em;height:.71428571em;background:#FFF;z-index:2;box-shadow:1px 1px 0 0 #bababc;opacity:0;-webkit-transform:rotate(45deg) scale(0)!important;transform:rotate(45deg) scale(0)!important;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transition:all .1s ease;transition:all .1s ease}[data-tooltip]:after{content:attr(data-tooltip);position:absolute;text-transform:none;text-align:left;white-space:nowrap;font-size:1rem;border:1px solid #D4D4D5;line-height:1.4285em;max-width:none;background:#FFF;padding:.833em 1em;font-weight:400;font-style:normal;color:rgba(0,0,0,.87);border-radius:.28571429rem;box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);z-index:1;opacity:1;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-transition:all .1s ease;transition:all .1s ease}[data-tooltip]:hover:after,[data-tooltip]:hover:before{visibility:visible;pointer-events:auto}[data-tooltip]:hover:before{-webkit-transform:rotate(45deg) scale(1)!important;transform:rotate(45deg) scale(1)!important;opacity:1}[data-tooltip]:after,[data-tooltip][data-position=\"top center\"]:after,[data-tooltip][data-position=\"bottom center\"]:after{-webkit-transform:translateX(-50%) scale(0)!important;transform:translateX(-50%) scale(0)!important}[data-tooltip]:hover:after,[data-tooltip][data-position=\"bottom center\"]:hover:after{-webkit-transform:translateX(-50%) scale(1)!important;transform:translateX(-50%) scale(1)!important}[data-tooltip][data-position=\"left center\"]:after,[data-tooltip][data-position=\"right center\"]:after{-webkit-transform:translateY(-50%) scale(0)!important;transform:translateY(-50%) scale(0)!important}[data-tooltip][data-position=\"left center\"]:hover:after,[data-tooltip][data-position=\"right center\"]:hover:after{-webkit-transform:translateY(-50%) scale(1)!important;transform:translateY(-50%) scale(1)!important}[data-tooltip][data-position=\"top left\"]:after,[data-tooltip][data-position=\"top right\"]:after,[data-tooltip][data-position=\"bottom left\"]:after,[data-tooltip][data-position=\"bottom right\"]:after{-webkit-transform:scale(0)!important;transform:scale(0)!important}[data-tooltip][data-position=\"top left\"]:hover:after,[data-tooltip][data-position=\"top right\"]:hover:after,[data-tooltip][data-position=\"bottom left\"]:hover:after,[data-tooltip][data-position=\"bottom right\"]:hover:after{-webkit-transform:scale(1)!important;transform:scale(1)!important}[data-tooltip][data-inverted]:before{box-shadow:none!important;background:#1B1C1D}[data-tooltip][data-inverted]:after{background:#1B1C1D;color:#FFF;border:none;box-shadow:none}[data-tooltip][data-inverted]:after .header{background-color:none;color:#FFF}[data-position=\"top center\"][data-tooltip]:after{top:auto;right:auto;left:50%;bottom:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-bottom:.5em}[data-position=\"top center\"][data-tooltip]:before{top:auto;right:auto;bottom:100%;left:50%;background:#FFF;margin-left:-.07142857rem;margin-bottom:.14285714rem}[data-position=\"top left\"][data-tooltip]:after{top:auto;right:auto;left:0;bottom:100%;margin-bottom:.5em}[data-position=\"top left\"][data-tooltip]:before{top:auto;right:auto;bottom:100%;left:1em;margin-left:-.07142857rem;margin-bottom:.14285714rem}[data-position=\"top right\"][data-tooltip]:after{top:auto;left:auto;right:0;bottom:100%;margin-bottom:.5em}[data-position=\"top right\"][data-tooltip]:before{top:auto;left:auto;bottom:100%;right:1em;margin-left:-.07142857rem;margin-bottom:.14285714rem}[data-position=\"bottom center\"][data-tooltip]:after{bottom:auto;right:auto;left:50%;top:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-top:.5em}[data-position=\"bottom center\"][data-tooltip]:before{bottom:auto;right:auto;top:100%;left:50%;margin-left:-.07142857rem;margin-top:.14285714rem}[data-position=\"bottom left\"][data-tooltip]:after{left:0;top:100%;margin-top:.5em}[data-position=\"bottom left\"][data-tooltip]:before{bottom:auto;right:auto;top:100%;left:1em;margin-left:-.07142857rem;margin-top:.14285714rem}[data-position=\"bottom right\"][data-tooltip]:after{right:0;top:100%;margin-top:.5em}[data-position=\"bottom right\"][data-tooltip]:before{bottom:auto;left:auto;top:100%;right:1em;margin-left:-.14285714rem;margin-top:.07142857rem}[data-position=\"left center\"][data-tooltip]:after{right:100%;top:50%;margin-right:.5em;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-position=\"right center\"][data-tooltip]:after{left:100%;top:50%;margin-left:.5em;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-position~=bottom][data-tooltip]:before{background:#FFF;box-shadow:-1px -1px 0 0 #bababc;-webkit-transform-origin:center bottom;transform-origin:center bottom}[data-position=\"left center\"][data-tooltip]:before{right:100%;top:50%;margin-top:-.14285714rem;margin-right:-.07142857rem;background:#FFF;box-shadow:1px -1px 0 0 #bababc}[data-position=\"right center\"][data-tooltip]:before{left:100%;top:50%;margin-top:-.07142857rem;margin-left:.14285714rem;background:#FFF;box-shadow:-1px 1px 0 0 #bababc}[data-position~=top][data-tooltip]:before{background:#FFF}[data-inverted][data-position~=bottom][data-tooltip]:before{background:#1B1C1D;box-shadow:-1px -1px 0 0 #bababc}[data-inverted][data-position=\"left center\"][data-tooltip]:before{background:#1B1C1D;box-shadow:1px -1px 0 0 #bababc}[data-inverted][data-position=\"right center\"][data-tooltip]:before{background:#1B1C1D;box-shadow:-1px 1px 0 0 #bababc}[data-inverted][data-position~=top][data-tooltip]:before{background:#1B1C1D}[data-position~=bottom][data-tooltip]:after{-webkit-transform-origin:center top;transform-origin:center top}[data-position=\"left center\"][data-tooltip]:before{-webkit-transform-origin:top center;transform-origin:top center}[data-position=\"left center\"][data-tooltip]:after,[data-position=\"right center\"][data-tooltip]:before{-webkit-transform-origin:right center;transform-origin:right center}[data-position=\"right center\"][data-tooltip]:after{-webkit-transform-origin:left center;transform-origin:left center}.ui.popup{margin:0}.ui.top.popup{margin:0 0 .71428571em}.ui.top.left.popup{-webkit-transform-origin:left bottom;transform-origin:left bottom}.ui.top.center.popup{-webkit-transform-origin:center bottom;transform-origin:center bottom}.ui.top.right.popup{-webkit-transform-origin:right bottom;transform-origin:right bottom}.ui.left.center.popup{margin:0 .71428571em 0 0;-webkit-transform-origin:right 50%;transform-origin:right 50%}.ui.right.center.popup{margin:0 0 0 .71428571em;-webkit-transform-origin:left 50%;transform-origin:left 50%}.ui.bottom.popup{margin:.71428571em 0 0}.ui.bottom.left.popup{-webkit-transform-origin:left top;transform-origin:left top}.ui.bottom.center.popup{-webkit-transform-origin:center top;transform-origin:center top}.ui.bottom.right.popup{-webkit-transform-origin:right top;transform-origin:right top;margin-right:0}.ui.bottom.center.popup:before{margin-left:-.30714286em;top:-.30714286em;left:50%;right:auto;bottom:auto;box-shadow:-1px -1px 0 0 #bababc}.ui.bottom.left.popup{margin-left:0}.ui.bottom.left.popup:before{top:-.30714286em;left:1em;right:auto;bottom:auto;margin-left:0;box-shadow:-1px -1px 0 0 #bababc}.ui.bottom.right.popup:before{top:-.30714286em;right:1em;bottom:auto;left:auto;margin-left:0;box-shadow:-1px -1px 0 0 #bababc}.ui.top.center.popup:before{top:auto;right:auto;bottom:-.30714286em;left:50%;margin-left:-.30714286em}.ui.top.left.popup{margin-left:0}.ui.top.left.popup:before{bottom:-.30714286em;left:1em;top:auto;right:auto;margin-left:0}.ui.top.right.popup{margin-right:0}.ui.top.right.popup:before{bottom:-.30714286em;right:1em;top:auto;left:auto;margin-left:0}.ui.left.center.popup:before{top:50%;right:-.30714286em;bottom:auto;left:auto;margin-top:-.30714286em;box-shadow:1px -1px 0 0 #bababc}.ui.right.center.popup:before{top:50%;left:-.30714286em;bottom:auto;right:auto;margin-top:-.30714286em;box-shadow:-1px 1px 0 0 #bababc}.ui.bottom.popup:before,.ui.left.center.popup:before,.ui.right.center.popup:before,.ui.top.popup:before{background:#FFF}.ui.inverted.bottom.popup:before,.ui.inverted.left.center.popup:before,.ui.inverted.right.center.popup:before,.ui.inverted.top.popup:before{background:#1B1C1D}.ui.popup>.ui.grid:not(.padded){width:calc(100% + 1.75rem);margin:-.7rem -.875rem}.ui.loading.popup{display:block;visibility:hidden;z-index:-1}.ui.animating.popup,.ui.visible.popup{display:block}.ui.visible.popup{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.ui.basic.popup:before{display:none}.ui.wide.popup{max-width:350px}.ui[class*=\"very wide\"].popup{max-width:550px}@media only screen and (max-width:767px){.ui.wide.popup,.ui[class*=\"very wide\"].popup{max-width:250px}}.ui.fluid.popup{width:100%;max-width:none}.ui.inverted.popup{background:#1B1C1D;color:#FFF;border:none;box-shadow:none}.ui.inverted.popup .header{background-color:none;color:#FFF}.ui.inverted.popup:before{background-color:#1B1C1D;box-shadow:none!important}.ui.flowing.popup{max-width:none}.ui.mini.popup{font-size:.78571429rem}.ui.tiny.popup{font-size:.85714286rem}.ui.small.popup{font-size:.92857143rem}.ui.popup{font-size:1rem}.ui.large.popup{font-size:1.14285714rem}.ui.huge.popup{font-size:1.42857143rem}.ui.progress{position:relative;display:block;max-width:100%;border:none;margin:1em 0 2.5em;box-shadow:none;background:rgba(0,0,0,.1);padding:0;border-radius:.28571429rem}.ui.progress:first-child{margin:0 0 2.5em}.ui.progress:last-child{margin:0 0 1.5em}.ui.progress .bar{display:block;line-height:1;position:relative;width:0;min-width:2em;background:#888;border-radius:.28571429rem;-webkit-transition:width .1s ease,background-color .1s ease;transition:width .1s ease,background-color .1s ease}.ui.progress .bar>.progress{white-space:nowrap;position:absolute;width:auto;font-size:.92857143em;top:50%;right:.5em;left:auto;bottom:auto;color:rgba(255,255,255,.7);text-shadow:none;margin-top:-.5em;font-weight:700;text-align:left}.ui.progress>.label{position:absolute;width:100%;font-size:1em;top:100%;right:auto;left:0;bottom:auto;color:rgba(0,0,0,.87);font-weight:700;text-shadow:none;margin-top:.2em;text-align:center;-webkit-transition:color .4s ease;transition:color .4s ease}.ui.indicating.progress[data-percent^=\"1\"] .bar,.ui.indicating.progress[data-percent^=\"2\"] .bar{background-color:#D95C5C}.ui.indicating.progress[data-percent^=\"3\"] .bar{background-color:#EFBC72}.ui.indicating.progress[data-percent^=\"4\"] .bar,.ui.indicating.progress[data-percent^=\"5\"] .bar{background-color:#E6BB48}.ui.indicating.progress[data-percent^=\"6\"] .bar{background-color:#DDC928}.ui.indicating.progress[data-percent^=\"7\"] .bar,.ui.indicating.progress[data-percent^=\"8\"] .bar{background-color:#B4D95C}.ui.indicating.progress[data-percent^=\"9\"] .bar,.ui.indicating.progress[data-percent^=\"100\"] .bar{background-color:#66DA81}.ui.indicating.progress[data-percent^=\"1\"] .label,.ui.indicating.progress[data-percent^=\"2\"] .label,.ui.indicating.progress[data-percent^=\"3\"] .label,.ui.indicating.progress[data-percent^=\"4\"] .label,.ui.indicating.progress[data-percent^=\"5\"] .label,.ui.indicating.progress[data-percent^=\"6\"] .label,.ui.indicating.progress[data-percent^=\"7\"] .label,.ui.indicating.progress[data-percent^=\"8\"] .label,.ui.indicating.progress[data-percent^=\"9\"] .label,.ui.indicating.progress[data-percent^=\"100\"] .label{color:rgba(0,0,0,.87)}.ui.indicating.progress[data-percent=\"1\"] .bar,.ui.indicating.progress[data-percent=\"2\"] .bar,.ui.indicating.progress[data-percent=\"3\"] .bar,.ui.indicating.progress[data-percent=\"4\"] .bar,.ui.indicating.progress[data-percent=\"5\"] .bar,.ui.indicating.progress[data-percent=\"6\"] .bar,.ui.indicating.progress[data-percent=\"7\"] .bar,.ui.indicating.progress[data-percent=\"8\"] .bar,.ui.indicating.progress[data-percent=\"9\"] .bar{background-color:#D95C5C}.ui.indicating.progress[data-percent=\"1\"] .label,.ui.indicating.progress[data-percent=\"2\"] .label,.ui.indicating.progress[data-percent=\"3\"] .label,.ui.indicating.progress[data-percent=\"4\"] .label,.ui.indicating.progress[data-percent=\"5\"] .label,.ui.indicating.progress[data-percent=\"6\"] .label,.ui.indicating.progress[data-percent=\"7\"] .label,.ui.indicating.progress[data-percent=\"8\"] .label,.ui.indicating.progress[data-percent=\"9\"] .label{color:rgba(0,0,0,.87)}.ui.indicating.progress.success .label{color:#1A531B}.ui.progress.success .bar{background-color:#21BA45!important}.ui.progress.success .bar,.ui.progress.success .bar::after{-webkit-animation:none!important;animation:none!important}.ui.progress.success>.label{color:#1A531B}.ui.progress.warning .bar{background-color:#F2C037!important}.ui.progress.warning .bar,.ui.progress.warning .bar::after{-webkit-animation:none!important;animation:none!important}.ui.progress.warning>.label{color:#794B02}.ui.progress.error .bar{background-color:#DB2828!important}.ui.progress.error .bar,.ui.progress.error .bar::after{-webkit-animation:none!important;animation:none!important}.ui.progress.error>.label{color:#912D2B}.ui.active.progress .bar{position:relative;min-width:2em}.ui.active.progress .bar::after{content:'';opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;background:#FFF;border-radius:.28571429rem;-webkit-animation:progress-active 2s ease infinite;animation:progress-active 2s ease infinite}@-webkit-keyframes progress-active{0%{opacity:.3;width:0}100%{opacity:0;width:100%}}@keyframes progress-active{0%{opacity:.3;width:0}100%{opacity:0;width:100%}}.ui.disabled.progress{opacity:.35}.ui.disabled.progress .bar,.ui.disabled.progress .bar::after{-webkit-animation:none!important;animation:none!important}.ui.inverted.progress{background:rgba(255,255,255,.08);border:none}.ui.inverted.progress .bar{background:#888}.ui.inverted.progress .bar>.progress{color:#F9FAFB}.ui.inverted.progress>.label{color:#FFF}.ui.inverted.progress.success>.label{color:#21BA45}.ui.inverted.progress.warning>.label{color:#F2C037}.ui.inverted.progress.error>.label{color:#DB2828}.ui.progress.attached{background:0 0;position:relative;border:none;margin:0}.ui.progress.attached,.ui.progress.attached .bar{display:block;height:.2rem;padding:0;overflow:hidden;border-radius:0 0 .28571429rem .28571429rem}.ui.progress.attached .bar{border-radius:0}.ui.progress.top.attached,.ui.progress.top.attached .bar{top:0;border-radius:.28571429rem .28571429rem 0 0}.ui.progress.top.attached .bar{border-radius:0}.ui.card>.ui.attached.progress,.ui.segment>.ui.attached.progress{position:absolute;top:auto;left:0;bottom:100%;width:100%}.ui.card>.ui.bottom.attached.progress,.ui.segment>.ui.bottom.attached.progress{top:100%;bottom:auto}.ui.red.progress .bar{background-color:#DB2828}.ui.red.inverted.progress .bar{background-color:#FF695E}.ui.orange.progress .bar{background-color:#F2711C}.ui.orange.inverted.progress .bar{background-color:#FF851B}.ui.yellow.progress .bar{background-color:#FBBD08}.ui.yellow.inverted.progress .bar{background-color:#FFE21F}.ui.olive.progress .bar{background-color:#B5CC18}.ui.olive.inverted.progress .bar{background-color:#D9E778}.ui.green.progress .bar{background-color:#21BA45}.ui.green.inverted.progress .bar{background-color:#2ECC40}.ui.teal.progress .bar{background-color:#00B5AD}.ui.teal.inverted.progress .bar{background-color:#6DFFFF}.ui.blue.progress .bar{background-color:#2185D0}.ui.blue.inverted.progress .bar{background-color:#54C8FF}.ui.violet.progress .bar{background-color:#6435C9}.ui.violet.inverted.progress .bar{background-color:#A291FB}.ui.purple.progress .bar{background-color:#A333C8}.ui.purple.inverted.progress .bar{background-color:#DC73FF}.ui.pink.progress .bar{background-color:#E03997}.ui.pink.inverted.progress .bar{background-color:#FF8EDF}.ui.brown.progress .bar{background-color:#A5673F}.ui.brown.inverted.progress .bar{background-color:#D67C1C}.ui.grey.progress .bar{background-color:#767676}.ui.grey.inverted.progress .bar{background-color:#DCDDDE}.ui.black.progress .bar{background-color:#1B1C1D}.ui.black.inverted.progress .bar{background-color:#545454}.ui.tiny.progress{font-size:.85714286rem}.ui.tiny.progress .bar{height:.5em}.ui.small.progress{font-size:.92857143rem}.ui.small.progress .bar{height:1em}.ui.progress{font-size:1rem}.ui.progress .bar{height:1.75em}.ui.large.progress{font-size:1.14285714rem}.ui.large.progress .bar{height:2.5em}.ui.big.progress{font-size:1.28571429rem}.ui.big.progress .bar{height:3.5em}.ui.rating:last-child{margin-right:0}.ui.rating .icon{padding:0;margin:0;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;cursor:pointer;width:1.25em;height:auto;-webkit-transition:opacity .1s ease,background .1s ease,text-shadow .1s ease,color .1s ease;transition:opacity .1s ease,background .1s ease,text-shadow .1s ease,color .1s ease;background:0 0;color:rgba(0,0,0,.15);font-family:Rating;line-height:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;font-weight:400;font-style:normal;text-align:center}.ui.rating .active.icon{background:0 0;color:rgba(0,0,0,.85)}.ui.rating .icon.selected,.ui.rating .icon.selected.active{background:0 0;color:rgba(0,0,0,.87)}.ui.star.rating .icon{width:1.25em;height:auto;background:0 0;color:rgba(0,0,0,.15);text-shadow:none}.ui.star.rating .active.icon{background:0 0!important;color:#FFE623!important;text-shadow:0 -1px 0 #DDC507,-1px 0 0 #DDC507,0 1px 0 #DDC507,1px 0 0 #DDC507!important}.ui.star.rating .icon.selected,.ui.star.rating .icon.selected.active{background:0 0!important;color:#FC0!important;text-shadow:0 -1px 0 #E6A200,-1px 0 0 #E6A200,0 1px 0 #E6A200,1px 0 0 #E6A200!important}.ui.heart.rating .icon{width:1.4em;height:auto;background:0 0;color:rgba(0,0,0,.15);text-shadow:none!important}.ui.heart.rating .active.icon{background:0 0!important;color:#FF6D75!important;text-shadow:0 -1px 0 #CD0707,-1px 0 0 #CD0707,0 1px 0 #CD0707,1px 0 0 #CD0707!important}.ui.heart.rating .icon.selected,.ui.heart.rating .icon.selected.active{background:0 0!important;color:#FF3000!important;text-shadow:0 -1px 0 #AA0101,-1px 0 0 #AA0101,0 1px 0 #AA0101,1px 0 0 #AA0101!important}.ui.disabled.rating .icon{cursor:default}.ui.rating .icon.selected,.ui.rating.selected .active.icon,.ui.rating.selected .icon.selected{opacity:1}.ui.mini.rating{font-size:.78571429rem}.ui.tiny.rating{font-size:.85714286rem}.ui.small.rating{font-size:.92857143rem}.ui.rating{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;white-space:nowrap;vertical-align:baseline;font-size:1rem}.ui.large.rating{font-size:1.14285714rem}.ui.huge.rating{font-size:1.42857143rem}.ui.massive.rating{font-size:2rem}@font-face{font-family:Rating;src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjCBsAAAC8AAAAYGNtYXCj2pm8AAABHAAAAKRnYXNwAAAAEAAAAcAAAAAIZ2x5ZlJbXMYAAAHIAAARnGhlYWQBGAe5AAATZAAAADZoaGVhA+IB/QAAE5wAAAAkaG10eCzgAEMAABPAAAAAcGxvY2EwXCxOAAAUMAAAADptYXhwACIAnAAAFGwAAAAgbmFtZfC1n04AABSMAAABPHBvc3QAAwAAAAAVyAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADxZQHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEAJAAAAAgACAABAAAAAEAIOYF8AbwDfAj8C7wbvBw8Irwl/Cc8SPxZf/9//8AAAAAACDmAPAE8AzwI/Au8G7wcPCH8JfwnPEj8WT//f//AAH/4xoEEAYQAQ/sD+IPow+iD4wPgA98DvYOtgADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP/tAgAB0wAKABUAAAEvAQ8BFwc3Fyc3BQc3Jz8BHwEHFycCALFPT7GAHp6eHoD/AHAWW304OH1bFnABGRqgoBp8sFNTsHyyOnxYEnFxElh8OgAAAAACAAD/7QIAAdMACgASAAABLwEPARcHNxcnNwUxER8BBxcnAgCxT0+xgB6enh6A/wA4fVsWcAEZGqCgGnywU1OwfLIBHXESWHw6AAAAAQAA/+0CAAHTAAoAAAEvAQ8BFwc3Fyc3AgCxT0+xgB6enh6AARkaoKAafLBTU7B8AAAAAAEAAAAAAgABwAArAAABFA4CBzEHDgMjIi4CLwEuAzU0PgIzMh4CFz4DMzIeAhUCAAcMEgugBgwMDAYGDAwMBqALEgwHFyg2HhAfGxkKChkbHxAeNigXAS0QHxsZCqAGCwkGBQkLBqAKGRsfEB42KBcHDBILCxIMBxcoNh4AAAAAAgAAAAACAAHAACsAWAAAATQuAiMiDgIHLgMjIg4CFRQeAhcxFx4DMzI+Aj8BPgM1DwEiFCIGMTAmIjQjJy4DNTQ+AjMyHgIfATc+AzMyHgIVFA4CBwIAFyg2HhAfGxkKChkbHxAeNigXBwwSC6AGDAwMBgYMDAwGoAsSDAdbogEBAQEBAaIGCgcEDRceEQkREA4GLy8GDhARCREeFw0EBwoGAS0eNigXBwwSCwsSDAcXKDYeEB8bGQqgBgsJBgUJCwagChkbHxA+ogEBAQGiBg4QEQkRHhcNBAcKBjQ0BgoHBA0XHhEJERAOBgABAAAAAAIAAcAAMQAAARQOAgcxBw4DIyIuAi8BLgM1ND4CMzIeAhcHFwc3Jzc+AzMyHgIVAgAHDBILoAYMDAwGBgwMDAagCxIMBxcoNh4KFRMSCC9wQLBwJwUJCgkFHjYoFwEtEB8bGQqgBgsJBgUJCwagChkbHxAeNigXAwUIBUtAoMBAOwECAQEXKDYeAAABAAAAAAIAAbcAKgAAEzQ3NjMyFxYXFhcWFzY3Njc2NzYzMhcWFRQPAQYjIi8BJicmJyYnJicmNQAkJUARExIQEAsMCgoMCxAQEhMRQCUkQbIGBwcGsgMFBQsKCQkGBwExPyMkBgYLCgkKCgoKCQoLBgYkIz8/QawFBawCBgUNDg4OFRQTAAAAAQAAAA0B2wHSACYAABM0PwI2FzYfAhYVFA8BFxQVFAcGByYvAQcGByYnJjU0PwEnJjUAEI9BBQkIBkCPEAdoGQMDBgUGgIEGBQYDAwEYaAcBIwsCFoEMAQEMgRYCCwYIZJABBQUFAwEBAkVFAgEBAwUFAwOQZAkFAAAAAAIAAAANAdsB0gAkAC4AABM0PwI2FzYfAhYVFA8BFxQVFAcmLwEHBgcmJyY1ND8BJyY1HwEHNxcnNy8BBwAQj0EFCQgGQI8QB2gZDAUGgIEGBQYDAwEYaAc/WBVsaxRXeDY2ASMLAhaBDAEBDIEWAgsGCGSQAQUNAQECRUUCAQEDBQUDA5BkCQURVXg4OHhVEW5uAAABACMAKQHdAXwAGgAANzQ/ATYXNh8BNzYXNh8BFhUUDwEGByYvASY1IwgmCAwLCFS8CAsMCCYICPUIDAsIjgjSCwkmCQEBCVS7CQEBCSYJCg0H9gcBAQePBwwAAAEAHwAfAXMBcwAsAAA3ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFRQPAQYjIi8BBwYjIi8BJjUfCFRUCAgnCAwLCFRUCAwLCCcICFRUCAgnCAsMCFRUCAsMCCcIYgsIVFQIDAsIJwgIVFQICCcICwwIVFQICwwIJwgIVFQICCcIDAAAAAACAAAAJQFJAbcAHwArAAA3NTQ3NjsBNTQ3NjMyFxYdATMyFxYdARQHBiMhIicmNTczNTQnJiMiBwYdAQAICAsKJSY1NCYmCQsICAgIC/7tCwgIW5MWFR4fFRZApQsICDc0JiYmJjQ3CAgLpQsICAgIC8A3HhYVFRYeNwAAAQAAAAcBbgG3ACEAADcRNDc2NzYzITIXFhcWFREUBwYHBiMiLwEHBiMiJyYnJjUABgUKBgYBLAYGCgUGBgUKBQcOCn5+Cg4GBgoFBicBcAoICAMDAwMICAr+kAoICAQCCXl5CQIECAgKAAAAAwAAACUCAAFuABgAMQBKAAA3NDc2NzYzMhcWFxYVFAcGBwYjIicmJyY1MxYXFjMyNzY3JicWFRQHBiMiJyY1NDcGBzcUFxYzMjc2NTQ3NjMyNzY1NCcmIyIHBhUABihDREtLREMoBgYoQ0RLS0RDKAYlJjk5Q0M5OSYrQREmJTU1JSYRQSuEBAQGBgQEEREZBgQEBAQGJBkayQoKQSgoKChBCgoKCkEoJycoQQoKOiMjIyM6RCEeIjUmJSUmNSIeIUQlBgQEBAQGGBIRBAQGBgQEGhojAAAABQAAAAkCAAGJACwAOABRAGgAcAAANzQ3Njc2MzIXNzYzMhcWFxYXFhcWFxYVFDEGBwYPAQYjIicmNTQ3JicmJyY1MxYXNyYnJjU0NwYHNxQXFjMyNzY1NDc2MzI3NjU0JyYjIgcGFRc3Njc2NyYnNxYXFhcWFRQHBgcGBwYjPwEWFRQHBgcABitBQU0ZGhADBQEEBAUFBAUEBQEEHjw8Hg4DBQQiBQ0pIyIZBiUvSxYZDg4RQSuEBAQGBgQEEREZBgQEBAQGJBkaVxU9MzQiIDASGxkZEAYGCxQrODk/LlACFxYlyQsJQycnBRwEAgEDAwIDAwIBAwUCNmxsNhkFFAMFBBUTHh8nCQtKISgSHBsfIh4hRCUGBAQEBAYYEhEEBAYGBAQaGiPJJQUiIjYzISASGhkbCgoKChIXMRsbUZANCyghIA8AAAMAAAAAAbcB2wA5AEoAlAAANzU0NzY7ATY3Njc2NzY3Njc2MzIXFhcWFRQHMzIXFhUUBxYVFAcUFRQHFgcGKwEiJyYnJisBIicmNTcUFxYzMjc2NTQnJiMiBwYVFzMyFxYXFhcWFxYXFhcWOwEyNTQnNjc2NTQnNjU0JyYnNjc2NTQnJisBNDc2NTQnJiMGBwYHBgcGBwYHBgcGBwYHBgcGBwYrARUACwoQTgodEQ4GBAMFBgwLDxgTEwoKDjMdFhYOAgoRARkZKCUbGxsjIQZSEAoLJQUFCAcGBQUGBwgFBUkJBAUFBAQHBwMDBwcCPCUjNwIJBQUFDwMDBAkGBgsLDmUODgoJGwgDAwYFDAYQAQUGAwQGBgYFBgUGBgQJSbcPCwsGJhUPCBERExMMCgkJFBQhGxwWFR4ZFQoKFhMGBh0WKBcXBgcMDAoLDxIHBQYGBQcIBQYGBQgSAQEBAQICAQEDAgEULwgIBQoLCgsJDhQHCQkEAQ0NCg8LCxAdHREcDQ4IEBETEw0GFAEHBwUECAgFBQUFAgO3AAADAAD/2wG3AbcAPABNAJkAADc1NDc2OwEyNzY3NjsBMhcWBxUWFRQVFhUUBxYVFAcGKwEWFRQHBgcGIyInJicmJyYnJicmJyYnIyInJjU3FBcWMzI3NjU0JyYjIgcGFRczMhcWFxYXFhcWFxYXFhcWFxYXFhcWFzI3NjU0JyY1MzI3NjU0JyYjNjc2NTQnNjU0JyYnNjU0JyYrASIHIgcGBwYHBgcGIwYrARUACwoQUgYhJRsbHiAoGRkBEQoCDhYWHTMOCgoTExgPCwoFBgIBBAMFDhEdCk4QCgslBQUIBwYFBQYHCAUFSQkEBgYFBgUGBgYEAwYFARAGDAUGAwMIGwkKDg5lDgsLBgYJBAMDDwUFBQkCDg4ZJSU8AgcHAwMHBwQEBQUECbe3DwsKDAwHBhcWJwIWHQYGExYKChUZHhYVHRoiExQJCgsJDg4MDAwNBg4WJQcLCw+kBwUGBgUHCAUGBgUIpAMCBQYFBQcIBAUHBwITBwwTExERBw0OHBEdHRALCw8KDQ0FCQkHFA4JCwoLCgUICBgMCxUDAgEBAgMBAQG3AAAAAQAAAA0A7gHSABQAABM0PwI2FxEHBgcmJyY1ND8BJyY1ABCPQQUJgQYFBgMDARhoBwEjCwIWgQwB/oNFAgEBAwUFAwOQZAkFAAAAAAIAAAAAAgABtwAqAFkAABM0NzYzMhcWFxYXFhc2NzY3Njc2MzIXFhUUDwEGIyIvASYnJicmJyYnJjUzFB8BNzY1NCcmJyYnJicmIyIHBgcGBwYHBiMiJyYnJicmJyYjIgcGBwYHBgcGFQAkJUARExIQEAsMCgoMCxAQEhMRQCUkQbIGBwcGsgMFBQsKCQkGByU1pqY1BgYJCg4NDg0PDhIRDg8KCgcFCQkFBwoKDw4REg4PDQ4NDgoJBgYBMT8jJAYGCwoJCgoKCgkKCwYGJCM/P0GsBQWsAgYFDQ4ODhUUEzA1oJ82MBcSEgoLBgcCAgcHCwsKCQgHBwgJCgsLBwcCAgcGCwoSEhcAAAACAAAABwFuAbcAIQAoAAA3ETQ3Njc2MyEyFxYXFhURFAcGBwYjIi8BBwYjIicmJyY1PwEfAREhEQAGBQoGBgEsBgYKBQYGBQoFBw4Kfn4KDgYGCgUGJZIZef7cJwFwCggIAwMDAwgICv6QCggIBAIJeXkJAgQICAoIjRl0AWP+nQAAAAABAAAAJQHbAbcAMgAANzU0NzY7ATU0NzYzMhcWHQEUBwYrASInJj0BNCcmIyIHBh0BMzIXFh0BFAcGIyEiJyY1AAgIC8AmJjQ1JiUFBQgSCAUFFhUfHhUWHAsICAgIC/7tCwgIQKULCAg3NSUmJiU1SQgFBgYFCEkeFhUVFh43CAgLpQsICAgICwAAAAIAAQANAdsB0gAiAC0AABM2PwI2MzIfAhYXFg8BFxYHBiMiLwEHBiMiJyY/AScmNx8CLwE/AS8CEwEDDJBABggJBUGODgIDCmcYAgQCCAMIf4IFBgYEAgEZaQgC7hBbEgINSnkILgEBJggCFYILC4IVAggICWWPCgUFA0REAwUFCo9lCQipCTBmEw1HEhFc/u0AAAADAAAAAAHJAbcAFAAlAHkAADc1NDc2OwEyFxYdARQHBisBIicmNTcUFxYzMjc2NTQnJiMiBwYVFzU0NzYzNjc2NzY3Njc2NzY3Njc2NzY3NjMyFxYXFhcWFxYXFhUUFRQHBgcGBxQHBgcGBzMyFxYVFAcWFRYHFgcGBxYHBgcjIicmJyYnJiciJyY1AAUGB1MHBQYGBQdTBwYFJQUFCAcGBQUGBwgFBWQFBQgGDw8OFAkFBAQBAQMCAQIEBAYFBw4KCgcHBQQCAwEBAgMDAgYCAgIBAU8XEBAQBQEOBQUECwMREiYlExYXDAwWJAoHBQY3twcGBQUGB7cIBQUFBQgkBwYFBQYHCAUGBgUIJLcHBQYBEBATGQkFCQgGBQwLBgcICQUGAwMFBAcHBgYICQQEBwsLCwYGCgIDBAMCBBEQFhkSDAoVEhAREAsgFBUBBAUEBAcMAQUFCAAAAAADAAD/2wHJAZIAFAAlAHkAADcUFxYXNxY3Nj0BNCcmBycGBwYdATc0NzY3FhcWFRQHBicGJyY1FzU0NzY3Fjc2NzY3NjcXNhcWBxYXFgcWBxQHFhUUBwYHJxYXFhcWFRYXFhcWFRQVFAcGBwYHBgcGBwYnBicmJyYnJicmJyYnJicmJyYnJiciJyY1AAUGB1MHBQYGBQdTBwYFJQUFCAcGBQUGBwgFBWQGBQcKJBYMDBcWEyUmEhEDCwQFBQ4BBRAQEBdPAQECAgIGAgMDAgEBAwIEBQcHCgoOBwUGBAQCAQIDAQEEBAUJFA4PDwYIBQWlBwYFAQEBBwQJtQkEBwEBAQUGB7eTBwYEAQEEBgcJBAYBAQYECZS4BwYEAgENBwUCBgMBAQEXEyEJEhAREBcIDhAaFhEPAQEFAgQCBQELBQcKDAkIBAUHCgUGBwgDBgIEAQEHBQkIBwUMCwcECgcGCRoREQ8CBgQIAAAAAQAAAAEAAJth57dfDzz1AAsCAAAAAADP/GODAAAAAM/8Y4MAAP/bAgAB2wAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAACAAABAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAdwAAAHcAAACAAAjAZMAHwFJAAABbgAAAgAAAAIAAAACAAAAAgAAAAEAAAACAAAAAW4AAAHcAAAB3AABAdwAAAHcAAAAAAAAAAoAFAAeAEoAcACKAMoBQAGIAcwCCgJUAoICxgMEAzoDpgRKBRgF7AYSBpgG2gcgB2oIGAjOAAAAAQAAABwAmgAFAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAwAAAABAAAAAAACAA4AQAABAAAAAAADAAwAIgABAAAAAAAEAAwATgABAAAAAAAFABYADAABAAAAAAAGAAYALgABAAAAAAAKADQAWgADAAEECQABAAwAAAADAAEECQACAA4AQAADAAEECQADAAwAIgADAAEECQAEAAwATgADAAEECQAFABYADAADAAEECQAGAAwANAADAAEECQAKADQAWgByAGEAdABpAG4AZwBWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBhAHQAaQBuAGdyYXRpbmcAcgBhAHQAaQBuAGcAUgBlAGcAdQBsAGEAcgByAGEAdABpAG4AZwBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AABcUAAoAAAAAFswAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAEuEAABLho6TvIE9TLzIAABPYAAAAYAAAAGAIIwgbY21hcAAAFDgAAACkAAAApKPambxnYXNwAAAU3AAAAAgAAAAIAAAAEGhlYWQAABTkAAAANgAAADYBGAe5aGhlYQAAFRwAAAAkAAAAJAPiAf1obXR4AAAVQAAAAHAAAABwLOAAQ21heHAAABWwAAAABgAAAAYAHFAAbmFtZQAAFbgAAAE8AAABPPC1n05wb3N0AAAW9AAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLZviU+HQFHQAAAP0PHQAAAQIRHQAAAAkdAAAS2BIAHQEBBw0PERQZHiMoLTI3PEFGS1BVWl9kaW5zeH2Ch4xyYXRpbmdyYXRpbmd1MHUxdTIwdUU2MDB1RTYwMXVFNjAydUU2MDN1RTYwNHVFNjA1dUYwMDR1RjAwNXVGMDA2dUYwMEN1RjAwRHVGMDIzdUYwMkV1RjA2RXVGMDcwdUYwODd1RjA4OHVGMDg5dUYwOEF1RjA5N3VGMDlDdUYxMjN1RjE2NHVGMTY1AAACAYkAGgAcAgABAAQABwAKAA0AVgCWAL0BAgGMAeQCbwLwA4cD5QR0BQMFdgZgB8MJkQtxC7oM2Q1jDggOmRAYEZr8lA78lA78lA77lA74lPetFftFpTz3NDz7NPtFcfcU+xBt+0T3Mt73Mjht90T3FPcQBfuU+0YV+wRRofcQMOP3EZ3D9wXD+wX3EXkwM6H7EPsExQUO+JT3rRX7RaU89zQ8+zT7RXH3FPsQbftE9zLe9zI4bfdE9xT3EAX7lPtGFYuLi/exw/sF9xF5MDOh+xD7BMUFDviU960V+0WlPPc0PPs0+0Vx9xT7EG37RPcy3vcyOG33RPcU9xAFDviU98EVi2B4ZG5wCIuL+zT7NAV7e3t7e4t7i3ube5sI+zT3NAVupniyi7aL3M3N3Iu2i7J4pm6mqLKetovci81JizoIDviU98EVi9xJzTqLYItkeHBucKhknmCLOotJSYs6i2CeZKhwCIuL9zT7NAWbe5t7m4ubi5ubm5sI9zT3NAWopp6yi7YIME0V+zb7NgWKioqKiouKi4qMiowI+zb3NgV6m4Ghi6OLubCwuYuji6GBm3oIule6vwWbnKGVo4u5i7Bmi12Lc4F1ensIDviU98EVi2B4ZG5wCIuL+zT7NAV7e3t7e4t7i3ube5sI+zT3NAVupniyi7aL3M3N3Iuni6WDoX4IXED3BEtL+zT3RPdU+wTLssYFl46YjZiL3IvNSYs6CA6L98UVi7WXrKOio6Otl7aLlouXiZiHl4eWhZaEloSUhZKFk4SShZKEkpKSkZOSkpGUkZaSCJaSlpGXj5iPl42Wi7aLrX+jc6N0l2qLYYthdWBgYAj7RvtABYeIh4mGi4aLh42Hjgj7RvdABYmNiY2Hj4iOhpGDlISUhZWFlIWVhpaHmYaYiZiLmAgOZ4v3txWLkpCPlo0I9yOgzPcWBY6SkI+Ri5CLkIePhAjL+xb3I3YFlomQh4uEi4aJh4aGCCMmpPsjBYuKi4mLiIuHioiJiImIiIqHi4iLh4yHjQj7FM/7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwgOZ4v3txWLkpCPlo0I9yOgzPcWBY6SkI+Ri5CLkIePhAjL+xb3I3YFlomQh4uEi4aJh4aGCCMmpPsjBYuKi4mLiIuCh4aDi4iLh4yHjQj7FM/7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwjKeRXjN3b7DfcAxPZSd/cN4t/7DJ1V9wFV+wEFDq73ZhWLk42RkZEIsbIFkZCRjpOLkouSiJCGCN8291D3UAWQkJKOkouTi5GIkYYIsWQFkYaNhIuEi4OJhYWFCPuJ+4kFhYWFiYOLhIuEjYaRCPsi9yIFhZCJkouSCA77AartFYuSjpKQkAjf3zffBYaQiJKLk4uSjpKQkAiysgWRkJGOk4uSi5KIkIYI3zff3wWQkJKOk4uSi5KIkIYIsmQFkIaOhIuEi4OIhIaGCDc33zcFkIaOhIuEi4OIhYaFCGRkBYaGhIiEi4OLhI6GkAg33zc3BYaGhIiEi4OLhY6FkAhksgWGkYiRi5MIDvtLi8sVi/c5BYuSjpKQkJCQko6SiwiVi4vCBYuul6mkpKSkqpiui66LqX6kcqRymG2LaAiLVJSLBZKLkoiQhpCGjoSLhAiL+zkFi4OIhYaGhoWEiYSLCPuniwWEi4SNhpGGkIiRi5MI5vdUFfcni4vCBYufhJx8mn2ZepJ3i3aLeoR9fX18g3qLdwiLVAUO+yaLshWL+AQFi5GNkY+RjpCQj5KNj42PjI+LCPfAiwWPi4+Kj4mRiZCHj4aPhY2Fi4UIi/wEBYuEiYWHhoeGhoeFiIiKhoqHi4GLhI6EkQj7EvcN+xL7DQWEhYOIgouHi4eLh42EjoaPiJCHkImRi5IIDov3XRWLko2Rj5Kltq+vuKW4pbuZvYu9i7t9uHG4ca9npWCPhI2Fi4SLhYmEh4RxYGdoXnAIXnFbflmLWYtbmF6lXqZnrnG2h5KJkouRCLCLFaRkq2yxdLF0tH+4i7iLtJexorGiq6qksm64Z61goZZ3kXaLdItnfm1ycnJybX9oiwhoi22XcqRypH6pi6+LopGglp9gdWdpbl4I9xiwFYuHjIiOiI6IjoqPi4+LjoyOjo2OjY6Lj4ubkJmXl5eWmZGbi4+LjoyOjo2OjY6LjwiLj4mOiY6IjYiNh4tzi3eCenp6eoJ3i3MIDov3XRWLko2Sj5GouK+utqW3pbqYvouci5yJnIgIm6cFjY6NjI+LjIuNi42JjYqOio+JjomOiY6KjomOiY6JjoqNioyKjomMiYuHi4qLiouLCHdnbVVjQ2NDbVV3Zwh9cgWJiIiJiIuJi36SdJiIjYmOi46LjY+UlJlvl3KcdJ90oHeie6WHkYmSi5IIsIsVqlq0Z711CKGzBXqXfpqCnoKdhp6LoIuikaCWn2B1Z2luXgj3GLAVi4eMiI6IjoiOio+Lj4uOjI6OjY6NjouPi5uQmZeXl5aZkZuLj4uOjI6OjY6NjouPCIuPiY6JjoiNiI2Hi3OLd4J6enp6gneLcwji+10VoLAFtI+wmK2hrqKnqKKvdq1wp2uhCJ2rBZ1/nHycepx6mHqWeY+EjYWLhIuEiYWHhIR/gH1+fG9qaXJmeWV5Y4Jhiwi53BXb9yQFjIKMg4uEi3CDc3x1fHV3fHOBCA6L1BWL90sFi5WPlJKSkpKTj5aLCNmLBZKPmJqepJaZlZeVlY+Qj5ONl42WjpeOmI+YkZWTk5OSk46Vi5uLmYiYhZiFlIGSfgiSfo55i3WLeYd5gXgIvosFn4uchJl8mn2Seot3i3qGfIJ9jYSLhYuEi3yIfoR+i4eLh4uHi3eGen99i3CDdnt8CHt8dYNwiwhmiwV5i3mNeY95kHeRc5N1k36Ph4sIOYsFgIuDjoSShJKHlIuVCLCdFYuGjIePiI+Hj4mQi5CLj42Pj46OjY+LkIuQiZCIjoePh42Gi4aLh4mHh4eIioaLhgjUeRWUiwWNi46Lj4qOi4+KjYqOi4+Kj4mQio6KjYqNio+Kj4mQio6KjIqzfquEpIsIrosFr4uemouri5CKkYqQkY6QkI6SjpKNkouSi5KJkoiRlZWQlouYi5CKkImRiZGJj4iOCJGMkI+PlI+UjZKLkouViJODk4SSgo+CiwgmiwWLlpCalJ6UnpCbi5aLnoiYhJSFlH+QeYuGhoeDiYCJf4h/h3+IfoWBg4KHh4SCgH4Ii4qIiYiGh4aIh4mIiIiIh4eGh4aHh4eHiIiHiIeHiIiHiIeKh4mIioiLCIKLi/tLBQ6L90sVi/dLBYuVj5OSk5KSk46WiwjdiwWPi5iPoZOkk6CRnZCdj56Nn4sIq4sFpougg5x8m3yTd4txCIuJBZd8kHuLd4uHi4eLh5J+jn6LfIuEi4SJhZR9kHyLeot3hHp8fH19eoR3iwhYiwWVeI95i3mLdIh6hH6EfoKBfoV+hX2He4uBi4OPg5KFkYaTh5SHlYiTipOKk4qTiJMIiZSIkYiPgZSBl4CaeKR+moSPCD2LBYCLg4+EkoSSh5SLlQiw9zgVi4aMh4+Ij4ePiZCLkIuPjY+Pjo6Nj4uQi5CJkIiOh4+HjYaLhouHiYeHh4iKhouGCNT7OBWUiwWOi46Kj4mPio+IjoiPh4+IjoePiI+Hj4aPho6HjoiNiI6Hj4aOho6Ii4qWfpKDj4YIk4ORgY5+j36OgI1/jYCPg5CGnYuXj5GUkpSOmYuei5aGmoKfgp6GmouWCPCLBZSLlI+SkpOTjpOLlYuSiZKHlIeUho+Fi46PjY+NkY2RjJCLkIuYhpaBlY6RjZKLkgiLkomSiJKIkoaQhY6MkIyRi5CLm4aXgpOBkn6Pe4sIZosFcotrhGN9iouIioaJh4qHiomKiYqIioaKh4mHioiKiYuHioiLh4qIi4mLCIKLi/tLBQ77lIv3txWLkpCPlo0I9yOgzPcWBY6SkI+RiwiL/BL7FUcFh4mHioiLh4uIjImOiY6KjouPi4yLjYyOCKP3IyPwBYaQiZCLjwgOi/fFFYu1l6yjoqOjrZe2i5aLl4mYh5eHloWWhJaElIWShZOEkoWShJKSkpGTkpKRlJGWkgiWkpaRl4+Yj5eNlou2i61/o3OjdJdqi2GLYXVgYGAI+0b7QAWHiIeJhouGi4eNh44I+0b3QAWJjYmNh4+IjoaRg5SElIWVhZSFlYaWh5mGmImYi5gIsIsVi2ucaa9oCPc6+zT3OvczBa+vnK2Lq4ubiZiHl4eXhpSFkoSSg5GCj4KQgo2CjYONgYuBi4KLgIl/hoCGgIWChAiBg4OFhISEhYaFhoaIhoaJhYuFi4aNiJCGkIaRhJGEkoORgZOCkoCRgJB/kICNgosIgYuBi4OJgomCiYKGgoeDhYSEhYSGgod/h3+Jfot7CA77JouyFYv4BAWLkY2Rj5GOkJCPko2PjY+Mj4sI98CLBY+Lj4qPiZGJkIePho+FjYWLhQiL/AQFi4SJhYeGh4aGh4WIiIqGioeLgYuEjoSRCPsS9w37EvsNBYSFg4iCi4eLh4uHjYSOho+IkIeQiZGLkgiwkxX3JvchpHL3DfsIi/f3+7iLi/v3BQ5ni8sVi/c5BYuSjpKQkJCQko6Siwj3VIuLwgWLrpippKSkpKmYrouvi6l+pHKkcpdti2gIi0IFi4aKhoeIh4eHiYaLCHmLBYaLh42Hj4eOipCLkAiL1AWLn4OcfZp9mXqSdot3i3qEfX18fIR6i3cIi1SniwWSi5KIkIaQho6Ei4QIi/s5BYuDiIWGhoaFhImEiwj7p4sFhIuEjYaRhpCIkYuTCA5njPe6FYyQkI6UjQj3I6DM9xYFj5KPj5GLkIuQh4+ECMv7FvcjdgWUiZCIjYaNhoiFhYUIIyak+yMFjIWKhomHiYiIiYaLiIuHjIeNCPsUz/sVRwWHiYeKiIuHi4eNiY6Jj4uQjJEIo/cjI/AFhZGJkY2QCPeB+z0VnILlW3rxiJ6ZmNTS+wydgpxe54v7pwUOZ4vCFYv3SwWLkI2Pjo+Pjo+NkIsI3osFkIuPiY6Ij4eNh4uGCIv7SwWLhomHh4eIh4eKhosIOIsFhouHjIePiI+Jj4uQCLCvFYuGjIePh46IkImQi5CLj42Pjo6PjY+LkIuQiZCIjoePh42Gi4aLhomIh4eIioaLhgjvZxWL90sFi5CNj46Oj4+PjZCLj4ySkJWWlZaVl5SXmJuVl5GRjo6OkI6RjZCNkIyPjI6MkY2TCIySjJGMj4yPjZCOkY6RjpCPjo6Pj42Qi5SLk4qSiZKJkYiPiJCIjoiPho6GjYeMhwiNh4yGjIaMhYuHi4iLiIuHi4eLg4uEiYSJhImFiYeJh4mFh4WLioqJiomJiIqJiokIi4qKiIqJCNqLBZqLmIWWgJaAkH+LfIt6hn2Af46DjYSLhIt9h36Cf4+Bi3+HgImAhYKEhI12hnmAfgh/fXiDcosIZosFfot+jHyOfI5/joOOg41/j32Qc5N8j4SMhouHjYiOh4+Jj4uQCA5ni/c5FYuGjYaOiI+Hj4mQiwjeiwWQi4+Njo+Pjo2Qi5AIi/dKBYuQiZCHjoiPh42Giwg4iwWGi4eJh4eIiImGi4YIi/tKBbD3JhWLkIyPj4+OjpCNkIuQi4+Jj4iOh42Hi4aLhomHiIeHh4eKhouGi4aMiI+Hj4qPi5AI7/snFYv3SwWLkI2Qj46Oj4+NkIuSi5qPo5OZkJePk46TjZeOmo6ajpiMmIsIsIsFpIueg5d9ln6Qeol1koSRgo2Aj4CLgIeAlH+Pfot9i4WJhIiCloCQfIt7i3yFfoGACICAfoZ8iwg8iwWMiIyJi4mMiYyJjYmMiIyKi4mPhI2GjYeNh42GjYOMhIyEi4SLhouHi4iLiYuGioYIioWKhomHioeJh4iGh4eIh4aIh4iFiISJhImDioKLhouHjYiPh4+Ij4iRiJGJkIqPCIqPipGKkomTipGKj4qOiZCJkYiQiJCIjoWSgZZ+nIKXgZaBloGWhJGHi4aLh42HjwiIjomQi48IDviUFPiUFYsMCgAAAAADAgABkAAFAAABTAFmAAAARwFMAWYAAAD1ABkAhAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAPFlAeD/4P/gAeAAIAAAAAEAAAAAAAAAAAAAACAAAAAAAAIAAAADAAAAFAADAAEAAAAUAAQAkAAAACAAIAAEAAAAAQAg5gXwBvAN8CPwLvBu8HDwivCX8JzxI/Fl//3//wAAAAAAIOYA8ATwDPAj8C7wbvBw8Ifwl/Cc8SPxZP/9//8AAf/jGgQQBhABD+wP4g+jD6IPjA+AD3wO9g62AAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAAJrVlLJfDzz1AAsCAAAAAADP/GODAAAAAM/8Y4MAAP/bAgAB2wAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAACAAABAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAEAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAdwAAAHcAAACAAAjAZMAHwFJAAABbgAAAgAAAAIAAAACAAAAAgAAAAEAAAACAAAAAW4AAAHcAAAB3AABAdwAAAHcAAAAAFAAABwAAAAAAA4ArgABAAAAAAABAAwAAAABAAAAAAACAA4AQAABAAAAAAADAAwAIgABAAAAAAAEAAwATgABAAAAAAAFABYADAABAAAAAAAGAAYALgABAAAAAAAKADQAWgADAAEECQABAAwAAAADAAEECQACAA4AQAADAAEECQADAAwAIgADAAEECQAEAAwATgADAAEECQAFABYADAADAAEECQAGAAwANAADAAEECQAKADQAWgByAGEAdABpAG4AZwBWAGUAcgBzAGkAbwBuACAAMQAuADAAcgBhAHQAaQBuAGdyYXRpbmcAcgBhAHQAaQBuAGcAUgBlAGcAdQBsAGEAcgByAGEAdABpAG4AZwBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');font-weight:400;font-style:normal}.ui.rating .active.icon:before,.ui.rating .icon:before,.ui.star.rating .active.icon:before,.ui.star.rating .icon:before{content:'\\F005'}.ui.star.rating .partial.icon:before{content:'\\F006'}.ui.star.rating .partial.icon{content:'\\F005'}.ui.heart.rating .active.icon:before,.ui.heart.rating .icon:before{content:'\\F004'}.ui.search{position:relative}.ui.search>.prompt{margin:0;outline:0;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(255,255,255,0);text-shadow:none;font-style:normal;font-weight:400;line-height:1.2142em;padding:.67861429em 1em;font-size:1em;background:#FFF;border:1px solid rgba(34,36,38,.15);color:rgba(0,0,0,.87);box-shadow:0 0 0 0 transparent inset;-webkit-transition:background-color .1s ease,color .1s ease,box-shadow .1s ease,border-color .1s ease;transition:background-color .1s ease,color .1s ease,box-shadow .1s ease,border-color .1s ease}.ui.search .prompt{border-radius:500rem}.ui.search .prompt~.search.icon{cursor:pointer}.ui.search>.results{display:none;position:absolute;top:100%;left:0;-webkit-transform-origin:center top;transform-origin:center top;white-space:normal;background:#FFF;margin-top:.5em;width:18em;border-radius:.28571429rem;box-shadow:0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15);border:1px solid #D4D4D5;z-index:998}.ui.search>.results>:first-child{border-radius:.28571429rem .28571429rem 0 0}.ui.search>.results>:last-child{border-radius:0 0 .28571429rem .28571429rem}.ui.search>.results .result{cursor:pointer;display:block;overflow:hidden;font-size:1em;padding:.85714286em 1.14285714em;color:rgba(0,0,0,.87);line-height:1.33;border-bottom:1px solid rgba(34,36,38,.1)}.ui.search>.results .result:last-child{border-bottom:none!important}.ui.search>.results .result .image{float:right;overflow:hidden;background:0 0;width:5em;height:3em;border-radius:.25em}.ui.search>.results .result .image img{display:block;width:auto;height:100%}.ui.search>.results .result .image+.content{margin:0 6em 0 0}.ui.search>.results .result .title{margin:-.14285em 0 0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-weight:700;font-size:1em;color:rgba(0,0,0,.85)}.ui.search>.results .result .description{margin-top:0;font-size:.92857143em;color:rgba(0,0,0,.4)}.ui.search>.results .result .price{float:right;color:#21BA45}.ui.search>.results>.message{padding:1em}.ui.search>.results>.message .header{font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1rem;font-weight:700;color:rgba(0,0,0,.87)}.ui.search>.results>.message .description{margin-top:.25rem;font-size:1em;color:rgba(0,0,0,.87)}.ui.search>.results>.action{display:block;border-top:none;background:#F3F4F5;padding:.92857143em 1em;color:rgba(0,0,0,.87);font-weight:700;text-align:center}.ui.search>.prompt:focus{border-color:rgba(34,36,38,.35);background:#FFF;color:rgba(0,0,0,.95)}.ui.loading.search .input>i.icon:before{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.loading.search .input>i.icon:after{position:absolute;content:'';top:50%;left:50%;margin:-.64285714em 0 0 -.64285714em;width:1.28571429em;height:1.28571429em;-webkit-animation:button-spin .6s linear;animation:button-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}.ui.category.search>.results .category .result:hover,.ui.search>.results .result:hover{background:#F9FAFB}.ui.search .action:hover{background:#E0E0E0}.ui.category.search>.results .category.active{background:#F3F4F5}.ui.category.search>.results .category.active>.name{color:rgba(0,0,0,.87)}.ui.category.search>.results .category .result.active,.ui.search>.results .result.active{position:relative;border-left-color:rgba(34,36,38,.1);background:#F3F4F5;box-shadow:none}.ui.search>.results .result.active .description,.ui.search>.results .result.active .title{color:rgba(0,0,0,.85)}.ui.search.selection .prompt{border-radius:.28571429rem}.ui.search.selection>.icon.input>.remove.icon{pointer-events:none;position:absolute;left:auto;opacity:0;color:'';top:0;right:0;-webkit-transition:color .1s ease,opacity .1s ease;transition:color .1s ease,opacity .1s ease}.ui.search.selection>.icon.input>.active.remove.icon{cursor:pointer;opacity:.8;pointer-events:auto}.ui.search.selection>.icon.input:not([class*=\"left icon\"])>.icon~.remove.icon{right:1.85714em}.ui.search.selection>.icon.input>.remove.icon:hover{opacity:1;color:#DB2828}.ui.category.search .results{width:28em}.ui.category.search>.results .category{background:#F3F4F5;box-shadow:none;border-bottom:1px solid rgba(34,36,38,.1);-webkit-transition:background .1s ease,border-color .1s ease;transition:background .1s ease,border-color .1s ease}.ui.category.search>.results .category:last-child{border-bottom:none}.ui.category.search>.results .category:first-child .name+.result{border-radius:0 .28571429rem 0 0}.ui.category.search>.results .category .result{background:#FFF;margin-left:100px;border-left:1px solid rgba(34,36,38,.15);border-bottom:1px solid rgba(34,36,38,.1);-webkit-transition:background .1s ease,border-color .1s ease;transition:background .1s ease,border-color .1s ease;padding:.85714286em 1.14285714em}.ui.category.search>.results .category:last-child .result:last-child{border-radius:0 0 .28571429rem;border-bottom:none}.ui.category.search>.results .category>.name{width:100px;background:0 0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;font-size:1em;float:1em;float:left;padding:.4em 1em;font-weight:700;color:rgba(0,0,0,.4)}.ui[class*=\"left aligned\"].search>.results{right:auto;left:0}.ui[class*=\"right aligned\"].search>.results{right:0;left:auto}.ui.fluid.search .results{width:100%}.ui.mini.search{font-size:.78571429em}.ui.small.search{font-size:.92857143em}.ui.search{font-size:1em}.ui.large.search{font-size:1.14285714em}.ui.big.search{font-size:1.28571429em}.ui.huge.search{font-size:1.42857143em}.ui.massive.search{font-size:1.71428571em}.ui.shape{position:relative;vertical-align:top;display:inline-block;-webkit-perspective:2000px;perspective:2000px;-webkit-transition:left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out;transition:left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out,left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out;transition:transform .6s ease-in-out,left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out}.ui.shape .sides{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.ui.shape .side{opacity:1;width:100%;margin:0!important;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:none}.ui.shape .side *{-webkit-backface-visibility:visible!important;backface-visibility:visible!important}.ui.cube.shape .side{min-width:15em;height:15em;padding:2em;background-color:#E6E6E6;color:rgba(0,0,0,.87);box-shadow:0 0 2px rgba(0,0,0,.3)}.ui.cube.shape .side>.content{width:100%;height:100%;display:table;text-align:center;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ui.cube.shape .side>.content>div{display:table-cell;vertical-align:middle;font-size:2em}.ui.text.shape.animating .sides{position:static}.ui.text.shape .side{white-space:nowrap}.ui.text.shape .side>*{white-space:normal}.ui.loading.shape{position:absolute;top:-9999px;left:-9999px}.ui.shape .animating.side{position:absolute;top:0;left:0;display:block;z-index:100}.ui.shape .hidden.side{opacity:.6}.ui.shape.animating .sides{position:absolute;-webkit-transition:left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out;transition:left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out,left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out;transition:transform .6s ease-in-out,left .6s ease-in-out,width .6s ease-in-out,height .6s ease-in-out,-webkit-transform .6s ease-in-out}.ui.shape.animating .side{-webkit-transition:opacity .6s ease-in-out;transition:opacity .6s ease-in-out}.ui.shape .active.side{display:block}.ui.sidebar{position:fixed;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:none;transition:none;will-change:transform;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:hidden;-webkit-overflow-scrolling:touch;height:100%!important;max-height:100%;border-radius:0!important;margin:0!important;overflow-y:auto!important;z-index:102}.ui.sidebar>*{-webkit-backface-visibility:hidden;backface-visibility:hidden}.ui.left.sidebar{right:auto;left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ui.right.sidebar{right:0!important;left:auto!important;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ui.bottom.sidebar,.ui.top.sidebar{width:100%!important;height:auto!important}.ui.top.sidebar{top:0!important;bottom:auto!important;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.ui.bottom.sidebar{top:auto!important;bottom:0!important;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.pushable{height:100%;overflow-x:hidden;padding:0!important}body.pushable{background:#545454!important}.pushable:not(body){-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.pushable:not(body)>.fixed,.pushable:not(body)>.pusher:after,.pushable:not(body)>.ui.sidebar{position:absolute}.pushable>.fixed{position:fixed;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;will-change:transform;z-index:101}body.pushable>.pusher{background:#FFF}.pushable>.pusher{position:relative;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;min-height:100%;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;z-index:2;background:inherit}.pushable>.pusher:after{position:fixed;top:0;right:0;content:'';background-color:rgba(0,0,0,.4);overflow:hidden;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s;will-change:opacity;z-index:1000}.ui.sidebar.menu .item{border-radius:0!important}.pushable>.pusher.dimmed:after{width:100%!important;height:100%!important;opacity:1!important}.ui.animating.sidebar{visibility:visible}.ui.visible.sidebar{visibility:visible;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.bottom.visible.sidebar,.ui.left.visible.sidebar,.ui.right.visible.sidebar,.ui.top.visible.sidebar{box-shadow:0 0 20px rgba(34,36,38,.15)}.ui.visible.left.sidebar~.fixed,.ui.visible.left.sidebar~.pusher{-webkit-transform:translate3d(260px,0,0);transform:translate3d(260px,0,0)}.ui.visible.right.sidebar~.fixed,.ui.visible.right.sidebar~.pusher{-webkit-transform:translate3d(-260px,0,0);transform:translate3d(-260px,0,0)}.ui.visible.top.sidebar~.fixed,.ui.visible.top.sidebar~.pusher{-webkit-transform:translate3d(0,36px,0);transform:translate3d(0,36px,0)}.ui.visible.bottom.sidebar~.fixed,.ui.visible.bottom.sidebar~.pusher{-webkit-transform:translate3d(0,-36px,0);transform:translate3d(0,-36px,0)}.ui.visible.left.sidebar~.ui.visible.right.sidebar~.fixed,.ui.visible.left.sidebar~.ui.visible.right.sidebar~.pusher,.ui.visible.right.sidebar~.ui.visible.left.sidebar~.fixed,.ui.visible.right.sidebar~.ui.visible.left.sidebar~.pusher{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}html.ios{overflow-x:hidden;-webkit-overflow-scrolling:touch}html.ios,html.ios body{height:initial!important}.ui.thin.left.sidebar,.ui.thin.right.sidebar{width:150px}.ui[class*=\"very thin\"].left.sidebar,.ui[class*=\"very thin\"].right.sidebar{width:60px}.ui.left.sidebar,.ui.right.sidebar{width:260px}.ui.wide.left.sidebar,.ui.wide.right.sidebar{width:350px}.ui[class*=\"very wide\"].left.sidebar,.ui[class*=\"very wide\"].right.sidebar{width:475px}.ui.visible.thin.left.sidebar~.fixed,.ui.visible.thin.left.sidebar~.pusher{-webkit-transform:translate3d(150px,0,0);transform:translate3d(150px,0,0)}.ui.visible[class*=\"very thin\"].left.sidebar~.fixed,.ui.visible[class*=\"very thin\"].left.sidebar~.pusher{-webkit-transform:translate3d(60px,0,0);transform:translate3d(60px,0,0)}.ui.visible.wide.left.sidebar~.fixed,.ui.visible.wide.left.sidebar~.pusher{-webkit-transform:translate3d(350px,0,0);transform:translate3d(350px,0,0)}.ui.visible[class*=\"very wide\"].left.sidebar~.fixed,.ui.visible[class*=\"very wide\"].left.sidebar~.pusher{-webkit-transform:translate3d(475px,0,0);transform:translate3d(475px,0,0)}.ui.visible.thin.right.sidebar~.fixed,.ui.visible.thin.right.sidebar~.pusher{-webkit-transform:translate3d(-150px,0,0);transform:translate3d(-150px,0,0)}.ui.visible[class*=\"very thin\"].right.sidebar~.fixed,.ui.visible[class*=\"very thin\"].right.sidebar~.pusher{-webkit-transform:translate3d(-60px,0,0);transform:translate3d(-60px,0,0)}.ui.visible.wide.right.sidebar~.fixed,.ui.visible.wide.right.sidebar~.pusher{-webkit-transform:translate3d(-350px,0,0);transform:translate3d(-350px,0,0)}.ui.visible[class*=\"very wide\"].right.sidebar~.fixed,.ui.visible[class*=\"very wide\"].right.sidebar~.pusher{-webkit-transform:translate3d(-475px,0,0);transform:translate3d(-475px,0,0)}.ui.overlay.sidebar{z-index:102}.ui.left.overlay.sidebar{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ui.right.overlay.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ui.top.overlay.sidebar{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.ui.bottom.overlay.sidebar{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.animating.ui.overlay.sidebar,.ui.visible.overlay.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.ui.visible.bottom.overlay.sidebar,.ui.visible.left.overlay.sidebar,.ui.visible.right.overlay.sidebar,.ui.visible.top.overlay.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.visible.overlay.sidebar~.fixed,.ui.visible.overlay.sidebar~.pusher{-webkit-transform:none!important;transform:none!important}.ui.push.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;z-index:102}.ui.left.push.sidebar{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ui.right.push.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ui.top.push.sidebar{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.ui.bottom.push.sidebar{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.ui.visible.push.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.uncover.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:1}.ui.visible.uncover.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.ui.slide.along.sidebar{z-index:1}.ui.left.slide.along.sidebar{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.ui.right.slide.along.sidebar{-webkit-transform:translate3d(50%,0,0);transform:translate3d(50%,0,0)}.ui.top.slide.along.sidebar{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.ui.bottom.slide.along.sidebar{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}.ui.animating.slide.along.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.ui.visible.slide.along.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.slide.out.sidebar{z-index:1}.ui.left.slide.out.sidebar{-webkit-transform:translate3d(50%,0,0);transform:translate3d(50%,0,0)}.ui.right.slide.out.sidebar{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.ui.top.slide.out.sidebar{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0)}.ui.bottom.slide.out.sidebar{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.ui.animating.slide.out.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.ui.visible.slide.out.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.scale.down.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease;z-index:102}.ui.left.scale.down.sidebar{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.ui.right.scale.down.sidebar{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.ui.top.scale.down.sidebar{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.ui.bottom.scale.down.sidebar{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.ui.scale.down.left.sidebar~.pusher{-webkit-transform-origin:75% 50%;transform-origin:75% 50%}.ui.scale.down.right.sidebar~.pusher{-webkit-transform-origin:25% 50%;transform-origin:25% 50%}.ui.scale.down.top.sidebar~.pusher{-webkit-transform-origin:50% 75%;transform-origin:50% 75%}.ui.scale.down.bottom.sidebar~.pusher{-webkit-transform-origin:50% 25%;transform-origin:50% 25%}.ui.animating.scale.down>.visible.ui.sidebar{-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease,-webkit-transform .5s ease}.ui.animating.scale.down.sidebar~.pusher,.ui.visible.scale.down.sidebar~.pusher{display:block!important;width:100%;height:100%;overflow:hidden!important}.ui.visible.scale.down.sidebar{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.ui.visible.scale.down.sidebar~.pusher{-webkit-transform:scale(.75);transform:scale(.75)}.ui.sticky{position:static;-webkit-transition:none;transition:none;z-index:800}.ui.sticky.bound{position:absolute;left:auto;right:auto}.ui.sticky.fixed{position:fixed;left:auto;right:auto}.ui.sticky.bound.top,.ui.sticky.fixed.top{top:0;bottom:auto}.ui.sticky.bound.bottom,.ui.sticky.fixed.bottom{top:auto;bottom:0}.ui.native.sticky{position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;position:sticky}.ui.tab{display:none}.ui.tab.active,.ui.tab.open{display:block}.ui.tab.loading{position:relative;overflow:hidden;display:block;min-height:250px}.ui.tab.loading *{position:relative!important;left:-10000px!important}.ui.tab.loading.segment:before,.ui.tab.loading:before{position:absolute;content:'';top:100px;left:50%;margin:-1.25em 0 0 -1.25em;width:2.5em;height:2.5em;border-radius:500rem;border:.2em solid rgba(0,0,0,.1)}.ui.tab.loading.segment:after,.ui.tab.loading:after{position:absolute;content:'';top:100px;left:50%;margin:-1.25em 0 0 -1.25em;width:2.5em;height:2.5em;-webkit-animation:button-spin .6s linear;animation:button-spin .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-radius:500rem;border-color:#767676 transparent transparent;border-style:solid;border-width:.2em;box-shadow:0 0 0 1px transparent}.transition{-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animating.transition{-webkit-backface-visibility:hidden;backface-visibility:hidden;visibility:visible!important}.loading.transition{position:absolute;top:-99999px;left:-99999px}.hidden.transition{display:none;visibility:hidden}.visible.transition{display:block!important;visibility:visible!important}.disabled.transition{-webkit-animation-play-state:paused;animation-play-state:paused}.looping.transition{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.transition.browse{-webkit-animation-duration:.5s;animation-duration:.5s}.transition.browse.in{-webkit-animation-name:browseIn;animation-name:browseIn}.transition.browse.left.out,.transition.browse.out{-webkit-animation-name:browseOutLeft;animation-name:browseOutLeft}.transition.browse.right.out{-webkit-animation-name:browseOutRight;animation-name:browseOutRight}@-webkit-keyframes browseIn{0%{-webkit-transform:scale(.8) translateZ(0);transform:scale(.8) translateZ(0);z-index:-1}10%{-webkit-transform:scale(.8) translateZ(0);transform:scale(.8) translateZ(0);z-index:-1;opacity:.7}80%{-webkit-transform:scale(1.05) translateZ(0);transform:scale(1.05) translateZ(0);opacity:1;z-index:999}100%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0);z-index:999}}@keyframes browseIn{0%{-webkit-transform:scale(.8) translateZ(0);transform:scale(.8) translateZ(0);z-index:-1}10%{-webkit-transform:scale(.8) translateZ(0);transform:scale(.8) translateZ(0);z-index:-1;opacity:.7}80%{-webkit-transform:scale(1.05) translateZ(0);transform:scale(1.05) translateZ(0);opacity:1;z-index:999}100%{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0);z-index:999}}@-webkit-keyframes browseOutLeft{0%{z-index:999;-webkit-transform:translateX(0) rotateY(0) rotateX(0);transform:translateX(0) rotateY(0) rotateX(0)}50%{z-index:-1;-webkit-transform:translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);transform:translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)}80%{opacity:1}100%{z-index:-1;-webkit-transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);opacity:0}}@keyframes browseOutLeft{0%{z-index:999;-webkit-transform:translateX(0) rotateY(0) rotateX(0);transform:translateX(0) rotateY(0) rotateX(0)}50%{z-index:-1;-webkit-transform:translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);transform:translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)}80%{opacity:1}100%{z-index:-1;-webkit-transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);opacity:0}}@-webkit-keyframes browseOutRight{0%{z-index:999;-webkit-transform:translateX(0) rotateY(0) rotateX(0);transform:translateX(0) rotateY(0) rotateX(0)}50%{z-index:1;-webkit-transform:translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);transform:translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)}80%{opacity:1}100%{z-index:1;-webkit-transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);opacity:0}}@keyframes browseOutRight{0%{z-index:999;-webkit-transform:translateX(0) rotateY(0) rotateX(0);transform:translateX(0) rotateY(0) rotateX(0)}50%{z-index:1;-webkit-transform:translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);transform:translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)}80%{opacity:1}100%{z-index:1;-webkit-transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);transform:translateX(0) rotateY(0) rotateX(0) translateZ(-10px);opacity:0}}.drop.transition{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:cubic-bezier(.34,1.61,.7,1);animation-timing-function:cubic-bezier(.34,1.61,.7,1)}.drop.transition.in{-webkit-animation-name:dropIn;animation-name:dropIn}.drop.transition.out{-webkit-animation-name:dropOut;animation-name:dropOut}@-webkit-keyframes dropIn{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes dropIn{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes dropOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes dropOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.transition.fade.in{-webkit-animation-name:fadeIn;animation-name:fadeIn}.transition[class*=\"fade up\"].in{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.transition[class*=\"fade down\"].in{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}.transition[class*=\"fade left\"].in{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}.transition[class*=\"fade right\"].in{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}.transition.fade.out{-webkit-animation-name:fadeOut;animation-name:fadeOut}.transition[class*=\"fade up\"].out{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}.transition[class*=\"fade down\"].out{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}.transition[class*=\"fade left\"].out{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}.transition[class*=\"fade right\"].out{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translateY(10%);transform:translateY(10%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translateY(-10%);transform:translateY(-10%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translateX(10%);transform:translateX(10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translateX(10%);transform:translateX(10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(-10%);transform:translateX(-10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translateX(-10%);transform:translateX(-10%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes fadeOutUp{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(5%);transform:translateY(5%)}}@keyframes fadeOutUp{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(5%);transform:translateY(5%)}}@-webkit-keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-5%);transform:translateY(-5%)}}@keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-5%);transform:translateY(-5%)}}@-webkit-keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(5%);transform:translateX(5%)}}@keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(5%);transform:translateX(5%)}}@-webkit-keyframes fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-5%);transform:translateX(-5%)}}@keyframes fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}100%{opacity:0;-webkit-transform:translateX(-5%);transform:translateX(-5%)}}.flip.transition.in,.flip.transition.out{-webkit-animation-duration:.6s;animation-duration:.6s}.horizontal.flip.transition.in{-webkit-animation-name:horizontalFlipIn;animation-name:horizontalFlipIn}.horizontal.flip.transition.out{-webkit-animation-name:horizontalFlipOut;animation-name:horizontalFlipOut}.vertical.flip.transition.in{-webkit-animation-name:verticalFlipIn;animation-name:verticalFlipIn}.vertical.flip.transition.out{-webkit-animation-name:verticalFlipOut;animation-name:verticalFlipOut}@-webkit-keyframes horizontalFlipIn{0%{-webkit-transform:perspective(2000px) rotateY(-90deg);transform:perspective(2000px) rotateY(-90deg);opacity:0}100%{-webkit-transform:perspective(2000px) rotateY(0);transform:perspective(2000px) rotateY(0);opacity:1}}@keyframes horizontalFlipIn{0%{-webkit-transform:perspective(2000px) rotateY(-90deg);transform:perspective(2000px) rotateY(-90deg);opacity:0}100%{-webkit-transform:perspective(2000px) rotateY(0);transform:perspective(2000px) rotateY(0);opacity:1}}@-webkit-keyframes verticalFlipIn{0%{-webkit-transform:perspective(2000px) rotateX(-90deg);transform:perspective(2000px) rotateX(-90deg);opacity:0}100%{-webkit-transform:perspective(2000px) rotateX(0);transform:perspective(2000px) rotateX(0);opacity:1}}@keyframes verticalFlipIn{0%{-webkit-transform:perspective(2000px) rotateX(-90deg);transform:perspective(2000px) rotateX(-90deg);opacity:0}100%{-webkit-transform:perspective(2000px) rotateX(0);transform:perspective(2000px) rotateX(0);opacity:1}}@-webkit-keyframes horizontalFlipOut{0%{-webkit-transform:perspective(2000px) rotateY(0);transform:perspective(2000px) rotateY(0);opacity:1}100%{-webkit-transform:perspective(2000px) rotateY(90deg);transform:perspective(2000px) rotateY(90deg);opacity:0}}@keyframes horizontalFlipOut{0%{-webkit-transform:perspective(2000px) rotateY(0);transform:perspective(2000px) rotateY(0);opacity:1}100%{-webkit-transform:perspective(2000px) rotateY(90deg);transform:perspective(2000px) rotateY(90deg);opacity:0}}@-webkit-keyframes verticalFlipOut{0%{-webkit-transform:perspective(2000px) rotateX(0);transform:perspective(2000px) rotateX(0);opacity:1}100%{-webkit-transform:perspective(2000px) rotateX(-90deg);transform:perspective(2000px) rotateX(-90deg);opacity:0}}@keyframes verticalFlipOut{0%{-webkit-transform:perspective(2000px) rotateX(0);transform:perspective(2000px) rotateX(0);opacity:1}100%{-webkit-transform:perspective(2000px) rotateX(-90deg);transform:perspective(2000px) rotateX(-90deg);opacity:0}}.scale.transition.in{-webkit-animation-name:scaleIn;animation-name:scaleIn}.scale.transition.out{-webkit-animation-name:scaleOut;animation-name:scaleOut}@-webkit-keyframes scaleIn{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scaleIn{0%{opacity:0;-webkit-transform:scale(.8);transform:scale(.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scaleOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}}@keyframes scaleOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}}.transition.fly{-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}.transition.fly.in{-webkit-animation-name:flyIn;animation-name:flyIn}.transition[class*=\"fly up\"].in{-webkit-animation-name:flyInUp;animation-name:flyInUp}.transition[class*=\"fly down\"].in{-webkit-animation-name:flyInDown;animation-name:flyInDown}.transition[class*=\"fly left\"].in{-webkit-animation-name:flyInLeft;animation-name:flyInLeft}.transition[class*=\"fly right\"].in{-webkit-animation-name:flyInRight;animation-name:flyInRight}.transition.fly.out{-webkit-animation-name:flyOut;animation-name:flyOut}.transition[class*=\"fly up\"].out{-webkit-animation-name:flyOutUp;animation-name:flyOutUp}.transition[class*=\"fly down\"].out{-webkit-animation-name:flyOutDown;animation-name:flyOutDown}.transition[class*=\"fly left\"].out{-webkit-animation-name:flyOutLeft;animation-name:flyOutLeft}.transition[class*=\"fly right\"].out{-webkit-animation-name:flyOutRight;animation-name:flyOutRight}@-webkit-keyframes flyIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes flyIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}100%{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes flyInUp{0%{opacity:0;-webkit-transform:translate3d(0,1500px,0);transform:translate3d(0,1500px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes flyInUp{0%{opacity:0;-webkit-transform:translate3d(0,1500px,0);transform:translate3d(0,1500px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes flyInDown{0%{opacity:0;-webkit-transform:translate3d(0,-1500px,0);transform:translate3d(0,-1500px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}@keyframes flyInDown{0%{opacity:0;-webkit-transform:translate3d(0,-1500px,0);transform:translate3d(0,-1500px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}@-webkit-keyframes flyInLeft{0%{opacity:0;-webkit-transform:translate3d(1500px,0,0);transform:translate3d(1500px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes flyInLeft{0%{opacity:0;-webkit-transform:translate3d(1500px,0,0);transform:translate3d(1500px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}100%{-webkit-transform:none;transform:none}}@-webkit-keyframes flyInRight{0%{opacity:0;-webkit-transform:translate3d(-1500px,0,0);transform:translate3d(-1500px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}@keyframes flyInRight{0%{opacity:0;-webkit-transform:translate3d(-1500px,0,0);transform:translate3d(-1500px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}100%{-webkit-transform:none;transform:none}}@-webkit-keyframes flyOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes flyOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}100%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@-webkit-keyframes flyOutUp{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes flyOutUp{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@-webkit-keyframes flyOutDown{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes flyOutDown{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}100%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@-webkit-keyframes flyOutRight{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes flyOutRight{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@-webkit-keyframes flyOutLeft{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes flyOutLeft{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}100%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.transition.slide.in,.transition[class*=\"slide down\"].in{-webkit-animation-name:slideInY;animation-name:slideInY;-webkit-transform-origin:top center;transform-origin:top center}.transition[class*=\"slide up\"].in{-webkit-animation-name:slideInY;animation-name:slideInY;-webkit-transform-origin:bottom center;transform-origin:bottom center}.transition[class*=\"slide left\"].in{-webkit-animation-name:slideInX;animation-name:slideInX;-webkit-transform-origin:center right;transform-origin:center right}.transition[class*=\"slide right\"].in{-webkit-animation-name:slideInX;animation-name:slideInX;-webkit-transform-origin:center left;transform-origin:center left}.transition.slide.out,.transition[class*=\"slide down\"].out{-webkit-animation-name:slideOutY;animation-name:slideOutY;-webkit-transform-origin:top center;transform-origin:top center}.transition[class*=\"slide up\"].out{-webkit-animation-name:slideOutY;animation-name:slideOutY;-webkit-transform-origin:bottom center;transform-origin:bottom center}.transition[class*=\"slide left\"].out{-webkit-animation-name:slideOutX;animation-name:slideOutX;-webkit-transform-origin:center right;transform-origin:center right}.transition[class*=\"slide right\"].out{-webkit-animation-name:slideOutX;animation-name:slideOutX;-webkit-transform-origin:center left;transform-origin:center left}@-webkit-keyframes slideInY{0%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}100%{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes slideInY{0%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}100%{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes slideInX{0%{opacity:0;-webkit-transform:scaleX(0);transform:scaleX(0)}100%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes slideInX{0%{opacity:0;-webkit-transform:scaleX(0);transform:scaleX(0)}100%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes slideOutY{0%{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}100%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes slideOutY{0%{opacity:1;-webkit-transform:scaleY(1);transform:scaleY(1)}100%{opacity:0;-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes slideOutX{0%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}100%{opacity:0;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes slideOutX{0%{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}100%{opacity:0;-webkit-transform:scaleX(0);transform:scaleX(0)}}.transition.swing{-webkit-animation-duration:.8s;animation-duration:.8s}.transition[class*=\"swing down\"].in{-webkit-animation-name:swingInX;animation-name:swingInX;-webkit-transform-origin:top center;transform-origin:top center}.transition[class*=\"swing up\"].in{-webkit-animation-name:swingInX;animation-name:swingInX;-webkit-transform-origin:bottom center;transform-origin:bottom center}.transition[class*=\"swing left\"].in{-webkit-animation-name:swingInY;animation-name:swingInY;-webkit-transform-origin:center right;transform-origin:center right}.transition[class*=\"swing right\"].in{-webkit-animation-name:swingInY;animation-name:swingInY;-webkit-transform-origin:center left;transform-origin:center left}.transition.swing.out,.transition[class*=\"swing down\"].out{-webkit-animation-name:swingOutX;animation-name:swingOutX;-webkit-transform-origin:top center;transform-origin:top center}.transition[class*=\"swing up\"].out{-webkit-animation-name:swingOutX;animation-name:swingOutX;-webkit-transform-origin:bottom center;transform-origin:bottom center}.transition[class*=\"swing left\"].out{-webkit-animation-name:swingOutY;animation-name:swingOutY;-webkit-transform-origin:center right;transform-origin:center right}.transition[class*=\"swing right\"].out{-webkit-animation-name:swingOutY;animation-name:swingOutY;-webkit-transform-origin:center left;transform-origin:center left}@-webkit-keyframes swingInX{0%{-webkit-transform:perspective(1000px) rotateX(90deg);transform:perspective(1000px) rotateX(90deg);opacity:0}40%{-webkit-transform:perspective(1000px) rotateX(-30deg);transform:perspective(1000px) rotateX(-30deg);opacity:1}60%{-webkit-transform:perspective(1000px) rotateX(15deg);transform:perspective(1000px) rotateX(15deg)}80%{-webkit-transform:perspective(1000px) rotateX(-7.5deg);transform:perspective(1000px) rotateX(-7.5deg)}100%{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}}@keyframes swingInX{0%{-webkit-transform:perspective(1000px) rotateX(90deg);transform:perspective(1000px) rotateX(90deg);opacity:0}40%{-webkit-transform:perspective(1000px) rotateX(-30deg);transform:perspective(1000px) rotateX(-30deg);opacity:1}60%{-webkit-transform:perspective(1000px) rotateX(15deg);transform:perspective(1000px) rotateX(15deg)}80%{-webkit-transform:perspective(1000px) rotateX(-7.5deg);transform:perspective(1000px) rotateX(-7.5deg)}100%{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}}@-webkit-keyframes swingInY{0%{-webkit-transform:perspective(1000px) rotateY(-90deg);transform:perspective(1000px) rotateY(-90deg);opacity:0}40%{-webkit-transform:perspective(1000px) rotateY(30deg);transform:perspective(1000px) rotateY(30deg);opacity:1}60%{-webkit-transform:perspective(1000px) rotateY(-17.5deg);transform:perspective(1000px) rotateY(-17.5deg)}80%{-webkit-transform:perspective(1000px) rotateY(7.5deg);transform:perspective(1000px) rotateY(7.5deg)}100%{-webkit-transform:perspective(1000px) rotateY(0);transform:perspective(1000px) rotateY(0)}}@keyframes swingInY{0%{-webkit-transform:perspective(1000px) rotateY(-90deg);transform:perspective(1000px) rotateY(-90deg);opacity:0}40%{-webkit-transform:perspective(1000px) rotateY(30deg);transform:perspective(1000px) rotateY(30deg);opacity:1}60%{-webkit-transform:perspective(1000px) rotateY(-17.5deg);transform:perspective(1000px) rotateY(-17.5deg)}80%{-webkit-transform:perspective(1000px) rotateY(7.5deg);transform:perspective(1000px) rotateY(7.5deg)}100%{-webkit-transform:perspective(1000px) rotateY(0);transform:perspective(1000px) rotateY(0)}}@-webkit-keyframes swingOutX{0%{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}40%{-webkit-transform:perspective(1000px) rotateX(-7.5deg);transform:perspective(1000px) rotateX(-7.5deg)}60%{-webkit-transform:perspective(1000px) rotateX(17.5deg);transform:perspective(1000px) rotateX(17.5deg)}80%{-webkit-transform:perspective(1000px) rotateX(-30deg);transform:perspective(1000px) rotateX(-30deg);opacity:1}100%{-webkit-transform:perspective(1000px) rotateX(90deg);transform:perspective(1000px) rotateX(90deg);opacity:0}}@keyframes swingOutX{0%{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}40%{-webkit-transform:perspective(1000px) rotateX(-7.5deg);transform:perspective(1000px) rotateX(-7.5deg)}60%{-webkit-transform:perspective(1000px) rotateX(17.5deg);transform:perspective(1000px) rotateX(17.5deg)}80%{-webkit-transform:perspective(1000px) rotateX(-30deg);transform:perspective(1000px) rotateX(-30deg);opacity:1}100%{-webkit-transform:perspective(1000px) rotateX(90deg);transform:perspective(1000px) rotateX(90deg);opacity:0}}@-webkit-keyframes swingOutY{0%{-webkit-transform:perspective(1000px) rotateY(0);transform:perspective(1000px) rotateY(0)}40%{-webkit-transform:perspective(1000px) rotateY(7.5deg);transform:perspective(1000px) rotateY(7.5deg)}60%{-webkit-transform:perspective(1000px) rotateY(-10deg);transform:perspective(1000px) rotateY(-10deg)}80%{-webkit-transform:perspective(1000px) rotateY(30deg);transform:perspective(1000px) rotateY(30deg);opacity:1}100%{-webkit-transform:perspective(1000px) rotateY(-90deg);transform:perspective(1000px) rotateY(-90deg);opacity:0}}@keyframes swingOutY{0%{-webkit-transform:perspective(1000px) rotateY(0);transform:perspective(1000px) rotateY(0)}40%{-webkit-transform:perspective(1000px) rotateY(7.5deg);transform:perspective(1000px) rotateY(7.5deg)}60%{-webkit-transform:perspective(1000px) rotateY(-10deg);transform:perspective(1000px) rotateY(-10deg)}80%{-webkit-transform:perspective(1000px) rotateY(30deg);transform:perspective(1000px) rotateY(30deg);opacity:1}100%{-webkit-transform:perspective(1000px) rotateY(-90deg);transform:perspective(1000px) rotateY(-90deg);opacity:0}}.flash.transition{-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-name:flash;animation-name:flash}.shake.transition{-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-name:shake;animation-name:shake}.bounce.transition{-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-name:bounce;animation-name:bounce}.tada.transition{-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-name:tada;animation-name:tada}.pulse.transition{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-name:pulse;animation-name:pulse}.jiggle.transition{-webkit-animation-duration:750ms;animation-duration:750ms;-webkit-animation-name:jiggle;animation-name:jiggle}@-webkit-keyframes flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@-webkit-keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@keyframes shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%,90%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%,80%{-webkit-transform:translateX(10px);transform:translateX(10px)}}@-webkit-keyframes bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}}@keyframes bounce{0%,100%,20%,50%,80%{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}60%{-webkit-transform:translateY(-15px);transform:translateY(-15px)}}@-webkit-keyframes tada{0%{-webkit-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(.9) rotate(-3deg);transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}@keyframes tada{0%{-webkit-transform:scale(1);transform:scale(1)}10%,20%{-webkit-transform:scale(.9) rotate(-3deg);transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg);transform:scale(1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg);transform:scale(1.1) rotate(-3deg)}100%{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}50%{-webkit-transform:scale(.9);transform:scale(.9);opacity:.7}}@-webkit-keyframes jiggle{0%,100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}}@keyframes jiggle{0%,100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}}", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9c74e172f87984c48ddf5c8108cabe67.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "25a32416abee198dd821b0b17a198a8f.eot";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e6cf7c6ec7c2d6f670ae9d762604cb0b.woff2";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c8ddf1e5e5bf3682bc7bebf30f394148.woff";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1dc35d25e61d819a9c357074014867ab.ttf";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJkN2M2MzkwODRmNjg0ZDY2YTFiYzY2ODU1ZDE5M2VkOC5zdmciOw=="

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./accordion.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./accordion.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/*!\n * # Semantic UI 2.2.7 - Accordion\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n\n/*******************************\n            Accordion\n*******************************/\n\n.ui.accordion,\n.ui.accordion .accordion {\n  max-width: 100%;\n}\n.ui.accordion .accordion {\n  margin: 1em 0em 0em;\n  padding: 0em;\n}\n\n/* Title */\n.ui.accordion .title,\n.ui.accordion .accordion .title {\n  cursor: pointer;\n}\n\n/* Default Styling */\n.ui.accordion .title:not(.ui) {\n  padding: 0.5em 0em;\n  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n/* Content */\n.ui.accordion .title ~ .content,\n.ui.accordion .accordion .title ~ .content {\n  display: none;\n}\n\n/* Default Styling */\n.ui.accordion:not(.styled) .title ~ .content:not(.ui),\n.ui.accordion:not(.styled) .accordion .title ~ .content:not(.ui) {\n  margin: '';\n  padding: 0.5em 0em 1em;\n}\n.ui.accordion:not(.styled) .title ~ .content:not(.ui):last-child {\n  padding-bottom: 0em;\n}\n\n/* Arrow */\n.ui.accordion .title .dropdown.icon,\n.ui.accordion .accordion .title .dropdown.icon {\n  display: inline-block;\n  float: none;\n  opacity: 1;\n  width: 1.25em;\n  height: 1em;\n  margin: 0em 0.25rem 0em 0rem;\n  padding: 0em;\n  font-size: 1em;\n  -webkit-transition: opacity 0.1s ease, -webkit-transform 0.1s ease;\n  transition: opacity 0.1s ease, -webkit-transform 0.1s ease;\n  transition: transform 0.1s ease, opacity 0.1s ease;\n  transition: transform 0.1s ease, opacity 0.1s ease, -webkit-transform 0.1s ease;\n  vertical-align: baseline;\n  -webkit-transform: none;\n          transform: none;\n}\n\n/*--------------\n    Coupling\n---------------*/\n\n\n/* Menu */\n.ui.accordion.menu .item .title {\n  display: block;\n  padding: 0em;\n}\n.ui.accordion.menu .item .title > .dropdown.icon {\n  float: right;\n  margin: 0.21425em 0em 0em 1em;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n/* Header */\n.ui.accordion .ui.header .dropdown.icon {\n  font-size: 1em;\n  margin: 0em 0.25rem 0em 0rem;\n}\n\n\n/*******************************\n            States\n*******************************/\n\n.ui.accordion .active.title .dropdown.icon,\n.ui.accordion .accordion .active.title .dropdown.icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.ui.accordion.menu .item .active.title > .dropdown.icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n\n/*******************************\n            Types\n*******************************/\n\n\n/*--------------\n     Styled\n---------------*/\n\n.ui.styled.accordion {\n  width: 600px;\n}\n.ui.styled.accordion,\n.ui.styled.accordion .accordion {\n  border-radius: 0.28571429rem;\n  background: #FFFFFF;\n  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15), 0px 0px 0px 1px rgba(34, 36, 38, 0.15);\n}\n.ui.styled.accordion .title,\n.ui.styled.accordion .accordion .title {\n  margin: 0em;\n  padding: 0.75em 1em;\n  color: rgba(0, 0, 0, 0.4);\n  font-weight: bold;\n  border-top: 1px solid rgba(34, 36, 38, 0.15);\n  -webkit-transition: background 0.1s ease, color 0.1s ease;\n  transition: background 0.1s ease, color 0.1s ease;\n}\n.ui.styled.accordion > .title:first-child,\n.ui.styled.accordion .accordion .title:first-child {\n  border-top: none;\n}\n\n/* Content */\n.ui.styled.accordion .content,\n.ui.styled.accordion .accordion .content {\n  margin: 0em;\n  padding: 0.5em 1em 1.5em;\n}\n.ui.styled.accordion .accordion .content {\n  padding: 0em;\n  padding: 0.5em 1em 1.5em;\n}\n\n/* Hover */\n.ui.styled.accordion .title:hover,\n.ui.styled.accordion .active.title,\n.ui.styled.accordion .accordion .title:hover,\n.ui.styled.accordion .accordion .active.title {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.ui.styled.accordion .accordion .title:hover,\n.ui.styled.accordion .accordion .active.title {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n/* Active */\n.ui.styled.accordion .active.title {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.95);\n}\n.ui.styled.accordion .accordion .active.title {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.95);\n}\n\n\n/*******************************\n            States\n*******************************/\n\n\n/*--------------\n     Active\n---------------*/\n\n.ui.accordion .active.content,\n.ui.accordion .accordion .active.content {\n  display: block;\n}\n\n\n/*******************************\n           Variations\n*******************************/\n\n\n/*--------------\n     Fluid\n---------------*/\n\n.ui.fluid.accordion,\n.ui.fluid.accordion .accordion {\n  width: 100%;\n}\n\n/*--------------\n     Inverted\n---------------*/\n\n.ui.inverted.accordion .title:not(.ui) {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n\n/*******************************\n         Theme Overrides\n*******************************/\n\n@font-face {\n  font-family: 'Accordion';\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfOIKAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zryj6HgAAAFwAAAAyGhlYWT/0IhHAAACOAAAADZoaGVhApkB5wAAAnAAAAAkaG10eAJuABIAAAKUAAAAGGxvY2EAjABWAAACrAAAAA5tYXhwAAgAFgAAArwAAAAgbmFtZfC1n04AAALcAAABPHBvc3QAAwAAAAAEGAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQASAEkAtwFuABMAADc0PwE2FzYXFh0BFAcGJwYvASY1EgaABQgHBQYGBQcIBYAG2wcGfwcBAQcECf8IBAcBAQd/BgYAAAAAAQAAAEkApQFuABMAADcRNDc2MzIfARYVFA8BBiMiJyY1AAUGBwgFgAYGgAUIBwYFWwEACAUGBoAFCAcFgAYGBQcAAAABAAAAAQAAqWYls18PPPUACwIAAAAAAM/9o+4AAAAAz/2j7gAAAAAAtwFuAAAACAACAAAAAAAAAAEAAAHg/+AAAAIAAAAAAAC3AAEAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAQAAAAC3ABIAtwAAAAAAAAAKABQAHgBCAGQAAAABAAAABgAUAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype'), url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAASwAAoAAAAABGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAS0AAAEtFpovuE9TLzIAAAIkAAAAYAAAAGAIIweQY21hcAAAAoQAAABMAAAATA984gpnYXNwAAAC0AAAAAgAAAAIAAAAEGhlYWQAAALYAAAANgAAADb/0IhHaGhlYQAAAxAAAAAkAAAAJAKZAedobXR4AAADNAAAABgAAAAYAm4AEm1heHAAAANMAAAABgAAAAYABlAAbmFtZQAAA1QAAAE8AAABPPC1n05wb3N0AAAEkAAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLa/iU+HQFHQAAAHkPHQAAAH4RHQAAAAkdAAABJBIABwEBBw0PERQZHnJhdGluZ3JhdGluZ3UwdTF1MjB1RjBEOXVGMERBAAACAYkABAAGAQEEBwoNVp38lA78lA78lA77lA773Z33bxWLkI2Qj44I9xT3FAWOj5CNkIuQi4+JjoePiI2Gi4YIi/uUBYuGiYeHiIiHh4mGi4aLho2Ijwj7FPcUBYeOiY+LkAgO+92L5hWL95QFi5CNkI6Oj4+PjZCLkIuQiY6HCPcU+xQFj4iNhouGi4aJh4eICPsU+xQFiIeGiYaLhouHjYePiI6Jj4uQCA74lBT4lBWLDAoAAAAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAADfYOJZfDzz1AAsCAAAAAADP/aPuAAAAAM/9o+4AAAAAALcBbgAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAAAtwABAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAEAAAAAtwASALcAAAAAUAAABgAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Dropdown Icon */\n.ui.accordion .title .dropdown.icon,\n.ui.accordion .accordion .title .dropdown.icon {\n  font-family: Accordion;\n  line-height: 1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  font-weight: normal;\n  font-style: normal;\n  text-align: center;\n}\n.ui.accordion .title .dropdown.icon:before,\n.ui.accordion .accordion .title .dropdown.icon:before {\n  content: '\\F0DA' ;\n}\n\n\n/*******************************\n        User Overrides\n*******************************/\n\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./popup.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./popup.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/*!\n * # Semantic UI 2.2.7 - Popup\n * http://github.com/semantic-org/semantic-ui/\n *\n *\n * Released under the MIT license\n * http://opensource.org/licenses/MIT\n *\n */\n\n\n/*******************************\n            Popup\n*******************************/\n\n.ui.popup {\n  display: none;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  \n/* Fixes content being squished when inline (moz only) */\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n  z-index: 1900;\n  border: 1px solid #D4D4D5;\n  line-height: 1.4285em;\n  max-width: 250px;\n  background: #FFFFFF;\n  padding: 0.833em 1em;\n  font-weight: normal;\n  font-style: normal;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.28571429rem;\n  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15);\n}\n.ui.popup > .header {\n  padding: 0em;\n  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-size: 1.14285714em;\n  line-height: 1.2;\n  font-weight: bold;\n}\n.ui.popup > .header + .content {\n  padding-top: 0.5em;\n}\n.ui.popup:before {\n  position: absolute;\n  content: '';\n  width: 0.71428571em;\n  height: 0.71428571em;\n  background: #FFFFFF;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 2;\n  box-shadow: 1px 1px 0px 0px #bababc;\n}\n\n\n/*******************************\n            Types\n*******************************/\n\n\n/*--------------\n    Tooltip\n---------------*/\n\n\n/* Content */\n[data-tooltip] {\n  position: relative;\n}\n\n/* Arrow */\n[data-tooltip]:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  font-size: 1rem;\n  width: 0.71428571em;\n  height: 0.71428571em;\n  background: #FFFFFF;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  z-index: 2;\n  box-shadow: 1px 1px 0px 0px #bababc;\n}\n\n/* Popup */\n[data-tooltip]:after {\n  pointer-events: none;\n  content: attr(data-tooltip);\n  position: absolute;\n  text-transform: none;\n  text-align: left;\n  white-space: nowrap;\n  font-size: 1rem;\n  border: 1px solid #D4D4D5;\n  line-height: 1.4285em;\n  max-width: none;\n  background: #FFFFFF;\n  padding: 0.833em 1em;\n  font-weight: normal;\n  font-style: normal;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.28571429rem;\n  box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.15);\n  z-index: 1;\n}\n\n/* Default Position (Top Center) */\n[data-tooltip]:not([data-position]):before {\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 50%;\n  background: #FFFFFF;\n  margin-left: -0.07142857rem;\n  margin-bottom: 0.14285714rem;\n}\n[data-tooltip]:not([data-position]):after {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: 100%;\n  margin-bottom: 0.5em;\n}\n\n/* Animation */\n[data-tooltip]:before,\n[data-tooltip]:after {\n  pointer-events: none;\n  visibility: hidden;\n}\n[data-tooltip]:before {\n  opacity: 0;\n  -webkit-transform: rotate(45deg) scale(0) !important;\n          transform: rotate(45deg) scale(0) !important;\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n[data-tooltip]:after {\n  opacity: 1;\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n  -webkit-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n[data-tooltip]:hover:before,\n[data-tooltip]:hover:after {\n  visibility: visible;\n  pointer-events: auto;\n}\n[data-tooltip]:hover:before {\n  -webkit-transform: rotate(45deg) scale(1) !important;\n          transform: rotate(45deg) scale(1) !important;\n  opacity: 1;\n}\n\n/* Animation Position */\n[data-tooltip]:after,\n[data-tooltip][data-position=\"top center\"]:after,\n[data-tooltip][data-position=\"bottom center\"]:after {\n  -webkit-transform: translateX(-50%) scale(0) !important;\n          transform: translateX(-50%) scale(0) !important;\n}\n[data-tooltip]:hover:after,\n[data-tooltip][data-position=\"bottom center\"]:hover:after {\n  -webkit-transform: translateX(-50%) scale(1) !important;\n          transform: translateX(-50%) scale(1) !important;\n}\n[data-tooltip][data-position=\"left center\"]:after,\n[data-tooltip][data-position=\"right center\"]:after {\n  -webkit-transform: translateY(-50%) scale(0) !important;\n          transform: translateY(-50%) scale(0) !important;\n}\n[data-tooltip][data-position=\"left center\"]:hover:after,\n[data-tooltip][data-position=\"right center\"]:hover:after {\n  -webkit-transform: translateY(-50%) scale(1) !important;\n          transform: translateY(-50%) scale(1) !important;\n}\n[data-tooltip][data-position=\"top left\"]:after,\n[data-tooltip][data-position=\"top right\"]:after,\n[data-tooltip][data-position=\"bottom left\"]:after,\n[data-tooltip][data-position=\"bottom right\"]:after {\n  -webkit-transform: scale(0) !important;\n          transform: scale(0) !important;\n}\n[data-tooltip][data-position=\"top left\"]:hover:after,\n[data-tooltip][data-position=\"top right\"]:hover:after,\n[data-tooltip][data-position=\"bottom left\"]:hover:after,\n[data-tooltip][data-position=\"bottom right\"]:hover:after {\n  -webkit-transform: scale(1) !important;\n          transform: scale(1) !important;\n}\n\n/*--------------\n    Inverted\n---------------*/\n\n\n/* Arrow */\n[data-tooltip][data-inverted]:before {\n  box-shadow: none !important;\n}\n\n/* Arrow Position */\n[data-tooltip][data-inverted]:before {\n  background: #1B1C1D;\n}\n\n/* Popup  */\n[data-tooltip][data-inverted]:after {\n  background: #1B1C1D;\n  color: #FFFFFF;\n  border: none;\n  box-shadow: none;\n}\n[data-tooltip][data-inverted]:after .header {\n  background-color: none;\n  color: #FFFFFF;\n}\n\n/*--------------\n    Position\n---------------*/\n\n\n/* Top Center */\n[data-position=\"top center\"][data-tooltip]:after {\n  top: auto;\n  right: auto;\n  left: 50%;\n  bottom: 100%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin-bottom: 0.5em;\n}\n[data-position=\"top center\"][data-tooltip]:before {\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 50%;\n  background: #FFFFFF;\n  margin-left: -0.07142857rem;\n  margin-bottom: 0.14285714rem;\n}\n\n/* Top Left */\n[data-position=\"top left\"][data-tooltip]:after {\n  top: auto;\n  right: auto;\n  left: 0;\n  bottom: 100%;\n  margin-bottom: 0.5em;\n}\n[data-position=\"top left\"][data-tooltip]:before {\n  top: auto;\n  right: auto;\n  bottom: 100%;\n  left: 1em;\n  margin-left: -0.07142857rem;\n  margin-bottom: 0.14285714rem;\n}\n\n/* Top Right */\n[data-position=\"top right\"][data-tooltip]:after {\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 100%;\n  margin-bottom: 0.5em;\n}\n[data-position=\"top right\"][data-tooltip]:before {\n  top: auto;\n  left: auto;\n  bottom: 100%;\n  right: 1em;\n  margin-left: -0.07142857rem;\n  margin-bottom: 0.14285714rem;\n}\n\n/* Bottom Center */\n[data-position=\"bottom center\"][data-tooltip]:after {\n  bottom: auto;\n  right: auto;\n  left: 50%;\n  top: 100%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin-top: 0.5em;\n}\n[data-position=\"bottom center\"][data-tooltip]:before {\n  bottom: auto;\n  right: auto;\n  top: 100%;\n  left: 50%;\n  margin-left: -0.07142857rem;\n  margin-top: 0.14285714rem;\n}\n\n/* Bottom Left */\n[data-position=\"bottom left\"][data-tooltip]:after {\n  left: 0;\n  top: 100%;\n  margin-top: 0.5em;\n}\n[data-position=\"bottom left\"][data-tooltip]:before {\n  bottom: auto;\n  right: auto;\n  top: 100%;\n  left: 1em;\n  margin-left: -0.07142857rem;\n  margin-top: 0.14285714rem;\n}\n\n/* Bottom Right */\n[data-position=\"bottom right\"][data-tooltip]:after {\n  right: 0;\n  top: 100%;\n  margin-top: 0.5em;\n}\n[data-position=\"bottom right\"][data-tooltip]:before {\n  bottom: auto;\n  left: auto;\n  top: 100%;\n  right: 1em;\n  margin-left: -0.14285714rem;\n  margin-top: 0.07142857rem;\n}\n\n/* Left Center */\n[data-position=\"left center\"][data-tooltip]:after {\n  right: 100%;\n  top: 50%;\n  margin-right: 0.5em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n[data-position=\"left center\"][data-tooltip]:before {\n  right: 100%;\n  top: 50%;\n  margin-top: -0.14285714rem;\n  margin-right: -0.07142857rem;\n}\n\n/* Right Center */\n[data-position=\"right center\"][data-tooltip]:after {\n  left: 100%;\n  top: 50%;\n  margin-left: 0.5em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n[data-position=\"right center\"][data-tooltip]:before {\n  left: 100%;\n  top: 50%;\n  margin-top: -0.07142857rem;\n  margin-left: 0.14285714rem;\n}\n\n/* Arrow */\n[data-position~=\"bottom\"][data-tooltip]:before {\n  background: #FFFFFF;\n  box-shadow: -1px -1px 0px 0px #bababc;\n}\n[data-position=\"left center\"][data-tooltip]:before {\n  background: #FFFFFF;\n  box-shadow: 1px -1px 0px 0px #bababc;\n}\n[data-position=\"right center\"][data-tooltip]:before {\n  background: #FFFFFF;\n  box-shadow: -1px 1px 0px 0px #bababc;\n}\n[data-position~=\"top\"][data-tooltip]:before {\n  background: #FFFFFF;\n}\n\n/* Inverted Arrow Color */\n[data-inverted][data-position~=\"bottom\"][data-tooltip]:before {\n  background: #1B1C1D;\n  box-shadow: -1px -1px 0px 0px #bababc;\n}\n[data-inverted][data-position=\"left center\"][data-tooltip]:before {\n  background: #1B1C1D;\n  box-shadow: 1px -1px 0px 0px #bababc;\n}\n[data-inverted][data-position=\"right center\"][data-tooltip]:before {\n  background: #1B1C1D;\n  box-shadow: -1px 1px 0px 0px #bababc;\n}\n[data-inverted][data-position~=\"top\"][data-tooltip]:before {\n  background: #1B1C1D;\n}\n[data-position~=\"bottom\"][data-tooltip]:before {\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n}\n[data-position~=\"bottom\"][data-tooltip]:after {\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n}\n[data-position=\"left center\"][data-tooltip]:before {\n  -webkit-transform-origin: top center;\n          transform-origin: top center;\n}\n[data-position=\"left center\"][data-tooltip]:after {\n  -webkit-transform-origin: right center;\n          transform-origin: right center;\n}\n[data-position=\"right center\"][data-tooltip]:before {\n  -webkit-transform-origin: right center;\n          transform-origin: right center;\n}\n[data-position=\"right center\"][data-tooltip]:after {\n  -webkit-transform-origin: left center;\n          transform-origin: left center;\n}\n\n/*--------------\n     Spacing\n---------------*/\n\n.ui.popup {\n  margin: 0em;\n}\n\n/* Extending from Top */\n.ui.top.popup {\n  margin: 0em 0em 0.71428571em;\n}\n.ui.top.left.popup {\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n}\n.ui.top.center.popup {\n  -webkit-transform-origin: center bottom;\n          transform-origin: center bottom;\n}\n.ui.top.right.popup {\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n}\n\n/* Extending from Vertical Center */\n.ui.left.center.popup {\n  margin: 0em 0.71428571em 0em 0em;\n  -webkit-transform-origin: right 50%;\n          transform-origin: right 50%;\n}\n.ui.right.center.popup {\n  margin: 0em 0em 0em 0.71428571em;\n  -webkit-transform-origin: left 50%;\n          transform-origin: left 50%;\n}\n\n/* Extending from Bottom */\n.ui.bottom.popup {\n  margin: 0.71428571em 0em 0em;\n}\n.ui.bottom.left.popup {\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n.ui.bottom.center.popup {\n  -webkit-transform-origin: center top;\n          transform-origin: center top;\n}\n.ui.bottom.right.popup {\n  -webkit-transform-origin: right top;\n          transform-origin: right top;\n}\n\n/*--------------\n     Pointer\n---------------*/\n\n\n/*--- Below ---*/\n\n.ui.bottom.center.popup:before {\n  margin-left: -0.30714286em;\n  top: -0.30714286em;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  box-shadow: -1px -1px 0px 0px #bababc;\n}\n.ui.bottom.left.popup {\n  margin-left: 0em;\n}\n/*rtl:rename*/\n.ui.bottom.left.popup:before {\n  top: -0.30714286em;\n  left: 1em;\n  right: auto;\n  bottom: auto;\n  margin-left: 0em;\n  box-shadow: -1px -1px 0px 0px #bababc;\n}\n.ui.bottom.right.popup {\n  margin-right: 0em;\n}\n/*rtl:rename*/\n.ui.bottom.right.popup:before {\n  top: -0.30714286em;\n  right: 1em;\n  bottom: auto;\n  left: auto;\n  margin-left: 0em;\n  box-shadow: -1px -1px 0px 0px #bababc;\n}\n\n/*--- Above ---*/\n\n.ui.top.center.popup:before {\n  top: auto;\n  right: auto;\n  bottom: -0.30714286em;\n  left: 50%;\n  margin-left: -0.30714286em;\n}\n.ui.top.left.popup {\n  margin-left: 0em;\n}\n/*rtl:rename*/\n.ui.top.left.popup:before {\n  bottom: -0.30714286em;\n  left: 1em;\n  top: auto;\n  right: auto;\n  margin-left: 0em;\n}\n.ui.top.right.popup {\n  margin-right: 0em;\n}\n/*rtl:rename*/\n.ui.top.right.popup:before {\n  bottom: -0.30714286em;\n  right: 1em;\n  top: auto;\n  left: auto;\n  margin-left: 0em;\n}\n\n/*--- Left Center ---*/\n\n/*rtl:rename*/\n.ui.left.center.popup:before {\n  top: 50%;\n  right: -0.30714286em;\n  bottom: auto;\n  left: auto;\n  margin-top: -0.30714286em;\n  box-shadow: 1px -1px 0px 0px #bababc;\n}\n\n/*--- Right Center  ---*/\n\n/*rtl:rename*/\n.ui.right.center.popup:before {\n  top: 50%;\n  left: -0.30714286em;\n  bottom: auto;\n  right: auto;\n  margin-top: -0.30714286em;\n  box-shadow: -1px 1px 0px 0px #bababc;\n}\n\n/* Arrow Color By Location */\n.ui.bottom.popup:before {\n  background: #FFFFFF;\n}\n.ui.right.center.popup:before,\n.ui.left.center.popup:before {\n  background: #FFFFFF;\n}\n.ui.top.popup:before {\n  background: #FFFFFF;\n}\n\n/* Inverted Arrow Color */\n.ui.inverted.bottom.popup:before {\n  background: #1B1C1D;\n}\n.ui.inverted.right.center.popup:before,\n.ui.inverted.left.center.popup:before {\n  background: #1B1C1D;\n}\n.ui.inverted.top.popup:before {\n  background: #1B1C1D;\n}\n\n\n/*******************************\n            Coupling\n*******************************/\n\n\n/* Immediate Nested Grid */\n.ui.popup > .ui.grid:not(.padded) {\n  width: calc(100% + 1.75rem);\n  margin: -0.7rem -0.875rem;\n}\n\n\n/*******************************\n            States\n*******************************/\n\n.ui.loading.popup {\n  display: block;\n  visibility: hidden;\n  z-index: -1;\n}\n.ui.animating.popup,\n.ui.visible.popup {\n  display: block;\n}\n.ui.visible.popup {\n  -webkit-transform: translateZ(0px);\n          transform: translateZ(0px);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n\n/*******************************\n            Variations\n*******************************/\n\n\n/*--------------\n     Basic\n---------------*/\n\n.ui.basic.popup:before {\n  display: none;\n}\n\n/*--------------\n     Wide\n---------------*/\n\n.ui.wide.popup {\n  max-width: 350px;\n}\n.ui[class*=\"very wide\"].popup {\n  max-width: 550px;\n}\n@media only screen and (max-width: 767px) {\n  .ui.wide.popup,\n  .ui[class*=\"very wide\"].popup {\n    max-width: 250px;\n  }\n}\n\n/*--------------\n     Fluid\n---------------*/\n\n.ui.fluid.popup {\n  width: 100%;\n  max-width: none;\n}\n\n/*--------------\n     Colors\n---------------*/\n\n\n/* Inverted colors  */\n.ui.inverted.popup {\n  background: #1B1C1D;\n  color: #FFFFFF;\n  border: none;\n  box-shadow: none;\n}\n.ui.inverted.popup .header {\n  background-color: none;\n  color: #FFFFFF;\n}\n.ui.inverted.popup:before {\n  background-color: #1B1C1D;\n  box-shadow: none !important;\n}\n\n/*--------------\n     Flowing\n---------------*/\n\n.ui.flowing.popup {\n  max-width: none;\n}\n\n/*--------------\n     Sizes\n---------------*/\n\n.ui.mini.popup {\n  font-size: 0.78571429rem;\n}\n.ui.tiny.popup {\n  font-size: 0.85714286rem;\n}\n.ui.small.popup {\n  font-size: 0.92857143rem;\n}\n.ui.popup {\n  font-size: 1rem;\n}\n.ui.large.popup {\n  font-size: 1.14285714rem;\n}\n.ui.huge.popup {\n  font-size: 1.42857143rem;\n}\n\n\n/*******************************\n         Theme Overrides\n*******************************/\n\n\n\n/*******************************\n        User Overrides\n*******************************/\n\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./login.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n#login-box input, #reg-window input {\n  margin-bottom: 10px; }\n\n.signup {\n  text-align: center;\n  margin: 0px;\n  padding: 2px; }\n  .signup:hover {\n    font-weight: bold;\n    color: white; }\n  .signup:active {\n    color: grey; }\n\n#lock-icon::before {\n  vertical-align: top;\n  margin-bottom: 10px; }\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./home.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "#navbar {\n  width: 100%;\n  height: 40px;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  padding-left: 20px;\n  padding-right: 10px;\n  background-color: teal; }\n  #navbar .item:hover {\n    color: white; }\n  #navbar .item:active {\n    color: grey; }\n\n#logo {\n  font-family: 'Gloria Hallelujah', cursive;\n  padding-left: 0px;\n  font-size: 26px; }\n\n#sidebar {\n  position: fixed;\n  width: 20%;\n  top: 40px;\n  padding-left: 10px;\n  overflow-y: visible !important; }\n  #sidebar a:hover {\n    color: teal; }\n\n#folder {\n  padding-top: 0px;\n  width: 100%; }\n\n#add {\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  font-size: 14px;\n  align-items: center;\n  position: fixed;\n  left: 0px;\n  bottom: 45px;\n  height: 45px;\n  width: 20vw; }\n\n#addpopup {\n  position: relative;\n  top: -80px;\n  left: -40px;\n  z-index: 100; }\n\n#mainlist {\n  position: absolute;\n  top: 40px;\n  left: 20%;\n  width: 80%;\n  overflow: scroll;\n  white-space: nowrap; }\n\n#mainlist > .item {\n  height: 40px;\n  width: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1rem; }\n  #mainlist > .item i:before {\n    width: 40px; }\n  #mainlist > .item:hover {\n    font-size: 20px;\n    padding-top: 5px;\n    font-weight: bold;\n    background-color: rgba(0, 128, 128, 0.16); }\n  #mainlist > .item:active {\n    background-color: lightgrey; }\n\n#feed-title {\n  padding-left: 50px; }\n  #feed-title #feed-date {\n    position: fixed;\n    right: 200px; }\n", ""]);

	// exports


/***/ }
/******/ ]);