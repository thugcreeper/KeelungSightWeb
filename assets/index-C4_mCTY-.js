(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))u(b);new MutationObserver(b=>{for(const _ of b)if(_.type==="childList")for(const C of _.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&u(C)}).observe(document,{childList:!0,subtree:!0});function f(b){const _={};return b.integrity&&(_.integrity=b.integrity),b.referrerPolicy&&(_.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?_.credentials="include":b.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function u(b){if(b.ep)return;b.ep=!0;const _=f(b);fetch(b.href,_)}})();function x0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function tv(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var s=o.default;if(typeof s=="function"){var f=function u(){var b=!1;try{b=this instanceof u}catch{}return b?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};f.prototype=s.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(o).forEach(function(u){var b=Object.getOwnPropertyDescriptor(o,u);Object.defineProperty(f,u,b.get?b:{enumerable:!0,get:function(){return o[u]}})}),f}var ku={exports:{}},ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function ev(){if(Gd)return ql;Gd=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(u,b,_){var C=null;if(_!==void 0&&(C=""+_),b.key!==void 0&&(C=""+b.key),"key"in b){_={};for(var y in b)y!=="key"&&(_[y]=b[y])}else _=b;return b=_.ref,{$$typeof:o,type:u,key:C,ref:b!==void 0?b:null,props:_}}return ql.Fragment=s,ql.jsx=f,ql.jsxs=f,ql}var Ld;function av(){return Ld||(Ld=1,ku.exports=ev()),ku.exports}var vn=av(),Hu={exports:{}},ln={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function lv(){if(Qd)return ln;Qd=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),C=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),D=Symbol.iterator;function w(h){return h===null||typeof h!="object"?null:(h=D&&h[D]||h["@@iterator"],typeof h=="function"?h:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,z={};function L(h,N,G){this.props=h,this.context=N,this.refs=z,this.updater=G||H}L.prototype.isReactComponent={},L.prototype.setState=function(h,N){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,N,"setState")},L.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function tn(){}tn.prototype=L.prototype;function cn(h,N,G){this.props=h,this.context=N,this.refs=z,this.updater=G||H}var an=cn.prototype=new tn;an.constructor=cn,R(an,L.prototype),an.isPureReactComponent=!0;var xn=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},mn=Object.prototype.hasOwnProperty;function Dn(h,N,G,j,J,hn){return G=hn.ref,{$$typeof:o,type:h,key:N,ref:G!==void 0?G:null,props:hn}}function Rn(h,N){return Dn(h.type,N,void 0,void 0,void 0,h.props)}function gn(h){return typeof h=="object"&&h!==null&&h.$$typeof===o}function et(h){var N={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(G){return N[G]})}var F=/\/+/g;function Q(h,N){return typeof h=="object"&&h!==null&&h.key!=null?et(""+h.key):N.toString(36)}function rn(){}function X(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(rn,rn):(h.status="pending",h.then(function(N){h.status==="pending"&&(h.status="fulfilled",h.value=N)},function(N){h.status==="pending"&&(h.status="rejected",h.reason=N)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Y(h,N,G,j,J){var hn=typeof h;(hn==="undefined"||hn==="boolean")&&(h=null);var en=!1;if(h===null)en=!0;else switch(hn){case"bigint":case"string":case"number":en=!0;break;case"object":switch(h.$$typeof){case o:case s:en=!0;break;case x:return en=h._init,Y(en(h._payload),N,G,j,J)}}if(en)return J=J(h),en=j===""?"."+Q(h,0):j,xn(J)?(G="",en!=null&&(G=en.replace(F,"$&/")+"/"),Y(J,N,G,"",function(le){return le})):J!=null&&(gn(J)&&(J=Rn(J,G+(J.key==null||h&&h.key===J.key?"":(""+J.key).replace(F,"$&/")+"/")+en)),N.push(J)),1;en=0;var nt=j===""?".":j+":";if(xn(h))for(var Nn=0;Nn<h.length;Nn++)j=h[Nn],hn=nt+Q(j,Nn),en+=Y(j,N,G,hn,J);else if(Nn=w(h),typeof Nn=="function")for(h=Nn.call(h),Nn=0;!(j=h.next()).done;)j=j.value,hn=nt+Q(j,Nn++),en+=Y(j,N,G,hn,J);else if(hn==="object"){if(typeof h.then=="function")return Y(X(h),N,G,j,J);throw N=String(h),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return en}function T(h,N,G){if(h==null)return h;var j=[],J=0;return Y(h,j,"","",function(hn){return N.call(G,hn,J++)}),j}function m(h){if(h._status===-1){var N=h._result;N=N(),N.then(function(G){(h._status===0||h._status===-1)&&(h._status=1,h._result=G)},function(G){(h._status===0||h._status===-1)&&(h._status=2,h._result=G)}),h._status===-1&&(h._status=0,h._result=N)}if(h._status===1)return h._result.default;throw h._result}var B=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function P(){}return ln.Children={map:T,forEach:function(h,N,G){T(h,function(){N.apply(this,arguments)},G)},count:function(h){var N=0;return T(h,function(){N++}),N},toArray:function(h){return T(h,function(N){return N})||[]},only:function(h){if(!gn(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},ln.Component=L,ln.Fragment=f,ln.Profiler=b,ln.PureComponent=cn,ln.StrictMode=u,ln.Suspense=M,ln.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ln.__COMPILER_RUNTIME={__proto__:null,c:function(h){return I.H.useMemoCache(h)}},ln.cache=function(h){return function(){return h.apply(null,arguments)}},ln.cloneElement=function(h,N,G){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var j=R({},h.props),J=h.key,hn=void 0;if(N!=null)for(en in N.ref!==void 0&&(hn=void 0),N.key!==void 0&&(J=""+N.key),N)!mn.call(N,en)||en==="key"||en==="__self"||en==="__source"||en==="ref"&&N.ref===void 0||(j[en]=N[en]);var en=arguments.length-2;if(en===1)j.children=G;else if(1<en){for(var nt=Array(en),Nn=0;Nn<en;Nn++)nt[Nn]=arguments[Nn+2];j.children=nt}return Dn(h.type,J,void 0,void 0,hn,j)},ln.createContext=function(h){return h={$$typeof:C,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:_,_context:h},h},ln.createElement=function(h,N,G){var j,J={},hn=null;if(N!=null)for(j in N.key!==void 0&&(hn=""+N.key),N)mn.call(N,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(J[j]=N[j]);var en=arguments.length-2;if(en===1)J.children=G;else if(1<en){for(var nt=Array(en),Nn=0;Nn<en;Nn++)nt[Nn]=arguments[Nn+2];J.children=nt}if(h&&h.defaultProps)for(j in en=h.defaultProps,en)J[j]===void 0&&(J[j]=en[j]);return Dn(h,hn,void 0,void 0,null,J)},ln.createRef=function(){return{current:null}},ln.forwardRef=function(h){return{$$typeof:y,render:h}},ln.isValidElement=gn,ln.lazy=function(h){return{$$typeof:x,_payload:{_status:-1,_result:h},_init:m}},ln.memo=function(h,N){return{$$typeof:p,type:h,compare:N===void 0?null:N}},ln.startTransition=function(h){var N=I.T,G={};I.T=G;try{var j=h(),J=I.S;J!==null&&J(G,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(P,B)}catch(hn){B(hn)}finally{I.T=N}},ln.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ln.use=function(h){return I.H.use(h)},ln.useActionState=function(h,N,G){return I.H.useActionState(h,N,G)},ln.useCallback=function(h,N){return I.H.useCallback(h,N)},ln.useContext=function(h){return I.H.useContext(h)},ln.useDebugValue=function(){},ln.useDeferredValue=function(h,N){return I.H.useDeferredValue(h,N)},ln.useEffect=function(h,N,G){var j=I.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return j.useEffect(h,N)},ln.useId=function(){return I.H.useId()},ln.useImperativeHandle=function(h,N,G){return I.H.useImperativeHandle(h,N,G)},ln.useInsertionEffect=function(h,N){return I.H.useInsertionEffect(h,N)},ln.useLayoutEffect=function(h,N){return I.H.useLayoutEffect(h,N)},ln.useMemo=function(h,N){return I.H.useMemo(h,N)},ln.useOptimistic=function(h,N){return I.H.useOptimistic(h,N)},ln.useReducer=function(h,N,G){return I.H.useReducer(h,N,G)},ln.useRef=function(h){return I.H.useRef(h)},ln.useState=function(h){return I.H.useState(h)},ln.useSyncExternalStore=function(h,N,G){return I.H.useSyncExternalStore(h,N,G)},ln.useTransition=function(){return I.H.useTransition()},ln.version="19.1.0",ln}var Zd;function jl(){return Zd||(Zd=1,Hu.exports=lv()),Hu.exports}var Yl=jl();const An=x0(Yl);var wu={exports:{}},kl={},Bu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function iv(){return Vd||(Vd=1,function(o){function s(T,m){var B=T.length;T.push(m);n:for(;0<B;){var P=B-1>>>1,h=T[P];if(0<b(h,m))T[P]=m,T[B]=h,B=P;else break n}}function f(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var m=T[0],B=T.pop();if(B!==m){T[0]=B;n:for(var P=0,h=T.length,N=h>>>1;P<N;){var G=2*(P+1)-1,j=T[G],J=G+1,hn=T[J];if(0>b(j,B))J<h&&0>b(hn,j)?(T[P]=hn,T[J]=B,P=J):(T[P]=j,T[G]=B,P=G);else if(J<h&&0>b(hn,B))T[P]=hn,T[J]=B,P=J;else break n}}return m}function b(T,m){var B=T.sortIndex-m.sortIndex;return B!==0?B:T.id-m.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;o.unstable_now=function(){return _.now()}}else{var C=Date,y=C.now();o.unstable_now=function(){return C.now()-y}}var M=[],p=[],x=1,D=null,w=3,H=!1,R=!1,z=!1,L=!1,tn=typeof setTimeout=="function"?setTimeout:null,cn=typeof clearTimeout=="function"?clearTimeout:null,an=typeof setImmediate<"u"?setImmediate:null;function xn(T){for(var m=f(p);m!==null;){if(m.callback===null)u(p);else if(m.startTime<=T)u(p),m.sortIndex=m.expirationTime,s(M,m);else break;m=f(p)}}function I(T){if(z=!1,xn(T),!R)if(f(M)!==null)R=!0,mn||(mn=!0,Q());else{var m=f(p);m!==null&&Y(I,m.startTime-T)}}var mn=!1,Dn=-1,Rn=5,gn=-1;function et(){return L?!0:!(o.unstable_now()-gn<Rn)}function F(){if(L=!1,mn){var T=o.unstable_now();gn=T;var m=!0;try{n:{R=!1,z&&(z=!1,cn(Dn),Dn=-1),H=!0;var B=w;try{t:{for(xn(T),D=f(M);D!==null&&!(D.expirationTime>T&&et());){var P=D.callback;if(typeof P=="function"){D.callback=null,w=D.priorityLevel;var h=P(D.expirationTime<=T);if(T=o.unstable_now(),typeof h=="function"){D.callback=h,xn(T),m=!0;break t}D===f(M)&&u(M),xn(T)}else u(M);D=f(M)}if(D!==null)m=!0;else{var N=f(p);N!==null&&Y(I,N.startTime-T),m=!1}}break n}finally{D=null,w=B,H=!1}m=void 0}}finally{m?Q():mn=!1}}}var Q;if(typeof an=="function")Q=function(){an(F)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,X=rn.port2;rn.port1.onmessage=F,Q=function(){X.postMessage(null)}}else Q=function(){tn(F,0)};function Y(T,m){Dn=tn(function(){T(o.unstable_now())},m)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rn=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return w},o.unstable_next=function(T){switch(w){case 1:case 2:case 3:var m=3;break;default:m=w}var B=w;w=m;try{return T()}finally{w=B}},o.unstable_requestPaint=function(){L=!0},o.unstable_runWithPriority=function(T,m){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=w;w=T;try{return m()}finally{w=B}},o.unstable_scheduleCallback=function(T,m,B){var P=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?P+B:P):B=P,T){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=B+h,T={id:x++,callback:m,priorityLevel:T,startTime:B,expirationTime:h,sortIndex:-1},B>P?(T.sortIndex=B,s(p,T),f(M)===null&&T===f(p)&&(z?(cn(Dn),Dn=-1):z=!0,Y(I,B-P))):(T.sortIndex=h,s(M,T),R||H||(R=!0,mn||(mn=!0,Q()))),T},o.unstable_shouldYield=et,o.unstable_wrapCallback=function(T){var m=w;return function(){var B=w;w=m;try{return T.apply(this,arguments)}finally{w=B}}}}(Yu)),Yu}var Kd;function ov(){return Kd||(Kd=1,Bu.exports=iv()),Bu.exports}var ju={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function rv(){if(Jd)return In;Jd=1;var o=jl();function s(M){var p="https://react.dev/errors/"+M;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+M+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},b=Symbol.for("react.portal");function _(M,p,x){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:D==null?null:""+D,children:M,containerInfo:p,implementation:x}}var C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(M,p){if(M==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,In.createPortal=function(M,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return _(M,p,null,x)},In.flushSync=function(M){var p=C.T,x=u.p;try{if(C.T=null,u.p=2,M)return M()}finally{C.T=p,u.p=x,u.d.f()}},In.preconnect=function(M,p){typeof M=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(M,p))},In.prefetchDNS=function(M){typeof M=="string"&&u.d.D(M)},In.preinit=function(M,p){if(typeof M=="string"&&p&&typeof p.as=="string"){var x=p.as,D=y(x,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,H=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?u.d.S(M,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:D,integrity:w,fetchPriority:H}):x==="script"&&u.d.X(M,{crossOrigin:D,integrity:w,fetchPriority:H,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},In.preinitModule=function(M,p){if(typeof M=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=y(p.as,p.crossOrigin);u.d.M(M,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(M)},In.preload=function(M,p){if(typeof M=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,D=y(x,p.crossOrigin);u.d.L(M,x,{crossOrigin:D,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},In.preloadModule=function(M,p){if(typeof M=="string")if(p){var x=y(p.as,p.crossOrigin);u.d.m(M,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(M)},In.requestFormReset=function(M){u.d.r(M)},In.unstable_batchedUpdates=function(M,p){return M(p)},In.useFormState=function(M,p,x){return C.H.useFormState(M,p,x)},In.useFormStatus=function(){return C.H.useHostTransitionStatus()},In.version="19.1.0",In}var Pd;function S0(){if(Pd)return ju.exports;Pd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),ju.exports=rv(),ju.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function uv(){if(Wd)return kl;Wd=1;var o=ov(),s=jl(),f=S0();function u(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _(n){var t=n,e=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;while(n)}return t.tag===3?e:null}function C(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function y(n){if(_(n)!==n)throw Error(u(188))}function M(n){var t=n.alternate;if(!t){if(t=_(n),t===null)throw Error(u(188));return t!==n?null:n}for(var e=n,a=t;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){e=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return y(l),n;if(i===a)return y(l),t;i=i.sibling}throw Error(u(188))}if(e.return!==a.return)e=l,a=i;else{for(var r=!1,c=l.child;c;){if(c===e){r=!0,e=l,a=i;break}if(c===a){r=!0,a=l,e=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===e){r=!0,e=i,a=l;break}if(c===a){r=!0,a=i,e=l;break}c=c.sibling}if(!r)throw Error(u(189))}}if(e.alternate!==a)throw Error(u(190))}if(e.tag!==3)throw Error(u(188));return e.stateNode.current===e?n:t}function p(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=p(n),t!==null)return t;n=n.sibling}return null}var x=Object.assign,D=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),tn=Symbol.for("react.provider"),cn=Symbol.for("react.consumer"),an=Symbol.for("react.context"),xn=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),mn=Symbol.for("react.suspense_list"),Dn=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),gn=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var rn=Symbol.for("react.client.reference");function X(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===rn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case L:return"Profiler";case z:return"StrictMode";case I:return"Suspense";case mn:return"SuspenseList";case gn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case H:return"Portal";case an:return(n.displayName||"Context")+".Provider";case cn:return(n._context.displayName||"Context")+".Consumer";case xn:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dn:return t=n.displayName||null,t!==null?t:X(n.type)||"Memo";case Rn:t=n._payload,n=n._init;try{return X(n(t))}catch{}}return null}var Y=Array.isArray,T=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,m=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},P=[],h=-1;function N(n){return{current:n}}function G(n){0>h||(n.current=P[h],P[h]=null,h--)}function j(n,t){h++,P[h]=n.current,n.current=t}var J=N(null),hn=N(null),en=N(null),nt=N(null);function Nn(n,t){switch(j(en,t),j(hn,n),j(J,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?bd(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=bd(t),n=md(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}G(J),j(J,n)}function le(){G(J),G(hn),G(en)}function xo(n){n.memoizedState!==null&&j(nt,n);var t=J.current,e=md(t,n.type);t!==e&&(j(hn,n),j(J,e))}function Zl(n){hn.current===n&&(G(J),G(hn)),nt.current===n&&(G(nt),zl._currentValue=B)}var So=Object.prototype.hasOwnProperty,Oo=o.unstable_scheduleCallback,_o=o.unstable_cancelCallback,C0=o.unstable_shouldYield,q0=o.unstable_requestPaint,qt=o.unstable_now,k0=o.unstable_getCurrentPriorityLevel,Pu=o.unstable_ImmediatePriority,Wu=o.unstable_UserBlockingPriority,Vl=o.unstable_NormalPriority,H0=o.unstable_LowPriority,Fu=o.unstable_IdlePriority,w0=o.log,B0=o.unstable_setDisableYieldValue,wa=null,ut=null;function ie(n){if(typeof w0=="function"&&B0(n),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(wa,n)}catch{}}var ct=Math.clz32?Math.clz32:X0,Y0=Math.log,j0=Math.LN2;function X0(n){return n>>>=0,n===0?32:31-(Y0(n)/j0|0)|0}var Kl=256,Jl=4194304;function Ne(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Pl(n,t,e){var a=n.pendingLanes;if(a===0)return 0;var l=0,i=n.suspendedLanes,r=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?l=Ne(a):(r&=c,r!==0?l=Ne(r):e||(e=c&~n,e!==0&&(l=Ne(e))))):(c=a&~i,c!==0?l=Ne(c):r!==0?l=Ne(r):e||(e=a&~n,e!==0&&(l=Ne(e)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:l}function Ba(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function G0(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(){var n=Kl;return Kl<<=1,(Kl&4194048)===0&&(Kl=256),n}function Iu(){var n=Jl;return Jl<<=1,(Jl&62914560)===0&&(Jl=4194304),n}function To(n){for(var t=[],e=0;31>e;e++)t.push(n);return t}function Ya(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function L0(n,t,e,a,l,i){var r=n.pendingLanes;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=e,n.entangledLanes&=e,n.errorRecoveryDisabledLanes&=e,n.shellSuspendCounter=0;var c=n.entanglements,d=n.expirationTimes,O=n.hiddenUpdates;for(e=r&~e;0<e;){var U=31-ct(e),k=1<<U;c[U]=0,d[U]=-1;var E=O[U];if(E!==null)for(O[U]=null,U=0;U<E.length;U++){var A=E[U];A!==null&&(A.lane&=-536870913)}e&=~k}a!==0&&nc(n,a,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(r&~t))}function nc(n,t,e){n.pendingLanes|=t,n.suspendedLanes&=~t;var a=31-ct(t);n.entangledLanes|=t,n.entanglements[a]=n.entanglements[a]|1073741824|e&4194090}function tc(n,t){var e=n.entangledLanes|=t;for(n=n.entanglements;e;){var a=31-ct(e),l=1<<a;l&t|n[a]&t&&(n[a]|=t),e&=~l}}function Eo(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ao(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ec(){var n=m.p;return n!==0?n:(n=window.event,n===void 0?32:Hd(n.type))}function Q0(n,t){var e=m.p;try{return m.p=n,t()}finally{m.p=e}}var oe=Math.random().toString(36).slice(2),Fn="__reactFiber$"+oe,at="__reactProps$"+oe,We="__reactContainer$"+oe,Mo="__reactEvents$"+oe,Z0="__reactListeners$"+oe,V0="__reactHandles$"+oe,ac="__reactResources$"+oe,ja="__reactMarker$"+oe;function Do(n){delete n[Fn],delete n[at],delete n[Mo],delete n[Z0],delete n[V0]}function Fe(n){var t=n[Fn];if(t)return t;for(var e=n.parentNode;e;){if(t=e[We]||e[Fn]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(n=Sd(n);n!==null;){if(e=n[Fn])return e;n=Sd(n)}return t}n=e,e=n.parentNode}return null}function $e(n){if(n=n[Fn]||n[We]){var t=n.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return n}return null}function Xa(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(u(33))}function Ie(n){var t=n[ac];return t||(t=n[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qn(n){n[ja]=!0}var lc=new Set,ic={};function Ue(n,t){na(n,t),na(n+"Capture",t)}function na(n,t){for(ic[n]=t,n=0;n<t.length;n++)lc.add(t[n])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},rc={};function J0(n){return So.call(rc,n)?!0:So.call(oc,n)?!1:K0.test(n)?rc[n]=!0:(oc[n]=!0,!1)}function Wl(n,t,e){if(J0(t))if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,""+e)}}function Fl(n,t,e){if(e===null)n.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,""+e)}}function Xt(n,t,e,a){if(a===null)n.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttributeNS(t,e,""+a)}}var zo,uc;function ta(n){if(zo===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||"",uc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zo+n+uc}var Ro=!1;function No(n,t){if(!n||Ro)return"";Ro=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(A){var E=A}Reflect.construct(n,[],k)}else{try{k.call()}catch(A){E=A}n.call(k.prototype)}}else{try{throw Error()}catch(A){E=A}(k=n())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(A){if(A&&E&&typeof A.stack=="string")return[A.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var d=r.split(`
`),O=c.split(`
`);for(l=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;if(a===d.length||l===O.length)for(a=d.length-1,l=O.length-1;1<=a&&0<=l&&d[a]!==O[l];)l--;for(;1<=a&&0<=l;a--,l--)if(d[a]!==O[l]){if(a!==1||l!==1)do if(a--,l--,0>l||d[a]!==O[l]){var U=`
`+d[a].replace(" at new "," at ");return n.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",n.displayName)),U}while(1<=a&&0<=l);break}}}finally{Ro=!1,Error.prepareStackTrace=e}return(e=n?n.displayName||n.name:"")?ta(e):""}function P0(n){switch(n.tag){case 26:case 27:case 5:return ta(n.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return No(n.type,!1);case 11:return No(n.type.render,!1);case 1:return No(n.type,!0);case 31:return ta("Activity");default:return""}}function cc(n){try{var t="";do t+=P0(n),n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function gt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sc(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W0(n){var t=sc(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),a=""+n[t];if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){a=""+r,i.call(this,r)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function $l(n){n._valueTracker||(n._valueTracker=W0(n))}function fc(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return n&&(a=sc(n)?n.checked?"true":"false":n.value),n=a,n!==e?(t.setValue(n),!0):!1}function Il(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var F0=/[\n"\\]/g;function yt(n){return n.replace(F0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Uo(n,t,e,a,l,i,r,c){n.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?n.type=r:n.removeAttribute("type"),t!=null?r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+gt(t)):n.value!==""+gt(t)&&(n.value=""+gt(t)):r!=="submit"&&r!=="reset"||n.removeAttribute("value"),t!=null?Co(n,r,gt(t)):e!=null?Co(n,r,gt(e)):a!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+gt(c):n.removeAttribute("name")}function dc(n,t,e,a,l,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;e=e!=null?""+gt(e):"",t=t!=null?""+gt(t):e,c||t===n.value||(n.value=t),n.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(n.name=r)}function Co(n,t,e){t==="number"&&Il(n.ownerDocument)===n||n.defaultValue===""+e||(n.defaultValue=""+e)}function ea(n,t,e,a){if(n=n.options,t){t={};for(var l=0;l<e.length;l++)t["$"+e[l]]=!0;for(e=0;e<n.length;e++)l=t.hasOwnProperty("$"+n[e].value),n[e].selected!==l&&(n[e].selected=l),l&&a&&(n[e].defaultSelected=!0)}else{for(e=""+gt(e),t=null,l=0;l<n.length;l++){if(n[l].value===e){n[l].selected=!0,a&&(n[l].defaultSelected=!0);return}t!==null||n[l].disabled||(t=n[l])}t!==null&&(t.selected=!0)}}function hc(n,t,e){if(t!=null&&(t=""+gt(t),t!==n.value&&(n.value=t),e==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=e!=null?""+gt(e):""}function pc(n,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(u(92));if(Y(a)){if(1<a.length)throw Error(u(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=gt(t),n.defaultValue=e,a=n.textContent,a===e&&a!==""&&a!==null&&(n.value=a)}function aa(n,t){if(t){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=t;return}}n.textContent=t}var $0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(n,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":a?n.setProperty(t,e):typeof e!="number"||e===0||$0.has(t)?t==="float"?n.cssFloat=e:n[t]=(""+e).trim():n[t]=e+"px"}function bc(n,t,e){if(t!=null&&typeof t!="object")throw Error(u(62));if(n=n.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&e[l]!==a&&vc(n,l,a)}else for(var i in t)t.hasOwnProperty(i)&&vc(n,i,t[i])}function qo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var I0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ni(n){return nh.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ko=null;function Ho(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var la=null,ia=null;function mc(n){var t=$e(n);if(t&&(n=t.stateNode)){var e=n[at]||null;n:switch(n=t.stateNode,t.type){case"input":if(Uo(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==n&&a.form===n.form){var l=a[at]||null;if(!l)throw Error(u(90));Uo(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===n.form&&fc(a)}break n;case"textarea":hc(n,e.value,e.defaultValue);break n;case"select":t=e.value,t!=null&&ea(n,!!e.multiple,t,!1)}}}var wo=!1;function gc(n,t,e){if(wo)return n(t,e);wo=!0;try{var a=n(t);return a}finally{if(wo=!1,(la!==null||ia!==null)&&(Yi(),la&&(t=la,n=ia,ia=la=null,mc(t),n)))for(t=0;t<n.length;t++)mc(n[t])}}function Ga(n,t){var e=n.stateNode;if(e===null)return null;var a=e[at]||null;if(a===null)return null;e=a[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(u(231,t,typeof e));return e}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bo=!1;if(Gt)try{var La={};Object.defineProperty(La,"passive",{get:function(){Bo=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{Bo=!1}var re=null,Yo=null,ti=null;function yc(){if(ti)return ti;var n,t=Yo,e=t.length,a,l="value"in re?re.value:re.textContent,i=l.length;for(n=0;n<e&&t[n]===l[n];n++);var r=e-n;for(a=1;a<=r&&t[e-a]===l[i-a];a++);return ti=l.slice(n,1<a?1-a:void 0)}function ei(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function ai(){return!0}function xc(){return!1}function lt(n){function t(e,a,l,i,r){this._reactName=e,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(e=n[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:xc,this.isPropagationStopped=xc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Ce={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=lt(Ce),Qa=x({},Ce,{view:0,detail:0}),th=lt(Qa),jo,Xo,Za,ii=x({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Za&&(Za&&n.type==="mousemove"?(jo=n.screenX-Za.screenX,Xo=n.screenY-Za.screenY):Xo=jo=0,Za=n),jo)},movementY:function(n){return"movementY"in n?n.movementY:Xo}}),Sc=lt(ii),eh=x({},ii,{dataTransfer:0}),ah=lt(eh),lh=x({},Qa,{relatedTarget:0}),Go=lt(lh),ih=x({},Ce,{animationName:0,elapsedTime:0,pseudoElement:0}),oh=lt(ih),rh=x({},Ce,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uh=lt(rh),ch=x({},Ce,{data:0}),Oc=lt(ch),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=dh[n])?!!t[n]:!1}function Lo(){return hh}var ph=x({},Qa,{key:function(n){if(n.key){var t=sh[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=ei(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fh[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(n){return n.type==="keypress"?ei(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ei(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vh=lt(ph),bh=x({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=lt(bh),mh=x({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),gh=lt(mh),yh=x({},Ce,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=lt(yh),Sh=x({},ii,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=lt(Sh),_h=x({},Ce,{newState:0,oldState:0}),Th=lt(_h),Eh=[9,13,27,32],Qo=Gt&&"CompositionEvent"in window,Va=null;Gt&&"documentMode"in document&&(Va=document.documentMode);var Ah=Gt&&"TextEvent"in window&&!Va,Tc=Gt&&(!Qo||Va&&8<Va&&11>=Va),Ec=" ",Ac=!1;function Mc(n,t){switch(n){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oa=!1;function Mh(n,t){switch(n){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Ac=!0,Ec);case"textInput":return n=t.data,n===Ec&&Ac?null:n;default:return null}}function Dh(n,t){if(oa)return n==="compositionend"||!Qo&&Mc(n,t)?(n=yc(),ti=Yo=re=null,oa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tc&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!zh[n.type]:t==="textarea"}function Rc(n,t,e,a){la?ia?ia.push(a):ia=[a]:la=a,t=Zi(t,"onChange"),0<t.length&&(e=new li("onChange","change",null,e,a),n.push({event:e,listeners:t}))}var Ka=null,Ja=null;function Rh(n){fd(n,0)}function oi(n){var t=Xa(n);if(fc(t))return n}function Nc(n,t){if(n==="change")return t}var Uc=!1;if(Gt){var Zo;if(Gt){var Vo="oninput"in document;if(!Vo){var Cc=document.createElement("div");Cc.setAttribute("oninput","return;"),Vo=typeof Cc.oninput=="function"}Zo=Vo}else Zo=!1;Uc=Zo&&(!document.documentMode||9<document.documentMode)}function qc(){Ka&&(Ka.detachEvent("onpropertychange",kc),Ja=Ka=null)}function kc(n){if(n.propertyName==="value"&&oi(Ja)){var t=[];Rc(t,Ja,n,Ho(n)),gc(Rh,t)}}function Nh(n,t,e){n==="focusin"?(qc(),Ka=t,Ja=e,Ka.attachEvent("onpropertychange",kc)):n==="focusout"&&qc()}function Uh(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return oi(Ja)}function Ch(n,t){if(n==="click")return oi(t)}function qh(n,t){if(n==="input"||n==="change")return oi(t)}function kh(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var st=typeof Object.is=="function"?Object.is:kh;function Pa(n,t){if(st(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var e=Object.keys(n),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var l=e[a];if(!So.call(t,l)||!st(n[l],t[l]))return!1}return!0}function Hc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wc(n,t){var e=Hc(n);n=0;for(var a;e;){if(e.nodeType===3){if(a=n+e.textContent.length,n<=t&&a>=t)return{node:e,offset:t-n};n=a}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Hc(e)}}function Bc(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Bc(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Yc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=Il(n.document);t instanceof n.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)n=t.contentWindow;else break;t=Il(n.document)}return t}function Ko(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var Hh=Gt&&"documentMode"in document&&11>=document.documentMode,ra=null,Jo=null,Wa=null,Po=!1;function jc(n,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Po||ra==null||ra!==Il(a)||(a=ra,"selectionStart"in a&&Ko(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wa&&Pa(Wa,a)||(Wa=a,a=Zi(Jo,"onSelect"),0<a.length&&(t=new li("onSelect","select",null,t,e),n.push({event:t,listeners:a}),t.target=ra)))}function qe(n,t){var e={};return e[n.toLowerCase()]=t.toLowerCase(),e["Webkit"+n]="webkit"+t,e["Moz"+n]="moz"+t,e}var ua={animationend:qe("Animation","AnimationEnd"),animationiteration:qe("Animation","AnimationIteration"),animationstart:qe("Animation","AnimationStart"),transitionrun:qe("Transition","TransitionRun"),transitionstart:qe("Transition","TransitionStart"),transitioncancel:qe("Transition","TransitionCancel"),transitionend:qe("Transition","TransitionEnd")},Wo={},Xc={};Gt&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function ke(n){if(Wo[n])return Wo[n];if(!ua[n])return n;var t=ua[n],e;for(e in t)if(t.hasOwnProperty(e)&&e in Xc)return Wo[n]=t[e];return n}var Gc=ke("animationend"),Lc=ke("animationiteration"),Qc=ke("animationstart"),wh=ke("transitionrun"),Bh=ke("transitionstart"),Yh=ke("transitioncancel"),Zc=ke("transitionend"),Vc=new Map,Fo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fo.push("scrollEnd");function Dt(n,t){Vc.set(n,t),Ue(t,[n])}var Kc=new WeakMap;function xt(n,t){if(typeof n=="object"&&n!==null){var e=Kc.get(n);return e!==void 0?e:(t={value:n,source:t,stack:cc(t)},Kc.set(n,t),t)}return{value:n,source:t,stack:cc(t)}}var St=[],ca=0,$o=0;function ri(){for(var n=ca,t=$o=ca=0;t<n;){var e=St[t];St[t++]=null;var a=St[t];St[t++]=null;var l=St[t];St[t++]=null;var i=St[t];if(St[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}i!==0&&Jc(e,l,i)}}function ui(n,t,e,a){St[ca++]=n,St[ca++]=t,St[ca++]=e,St[ca++]=a,$o|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Io(n,t,e,a){return ui(n,t,e,a),ci(n)}function sa(n,t){return ui(n,null,null,t),ci(n)}function Jc(n,t,e){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e);for(var l=!1,i=n.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&t!==null&&(l=31-ct(e),n=i.hiddenUpdates,a=n[l],a===null?n[l]=[t]:a.push(t),t.lane=e|536870912),i):null}function ci(n){if(50<Sl)throw Sl=0,iu=null,Error(u(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var fa={};function jh(n,t,e,a){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(n,t,e,a){return new jh(n,t,e,a)}function nr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lt(n,t){var e=n.alternate;return e===null?(e=ft(n.tag,t,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=t,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&65011712,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e.refCleanup=n.refCleanup,e}function Pc(n,t){n.flags&=65011714;var e=n.alternate;return e===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.type=e.type,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function si(n,t,e,a,l,i){var r=0;if(a=n,typeof n=="function")nr(n)&&(r=1);else if(typeof n=="string")r=Gp(n,e,J.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case gn:return n=ft(31,e,t,l),n.elementType=gn,n.lanes=i,n;case R:return He(e.children,l,i,t);case z:r=8,l|=24;break;case L:return n=ft(12,e,t,l|2),n.elementType=L,n.lanes=i,n;case I:return n=ft(13,e,t,l),n.elementType=I,n.lanes=i,n;case mn:return n=ft(19,e,t,l),n.elementType=mn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case tn:case an:r=10;break n;case cn:r=9;break n;case xn:r=11;break n;case Dn:r=14;break n;case Rn:r=16,a=null;break n}r=29,e=Error(u(130,n===null?"null":typeof n,"")),a=null}return t=ft(r,e,t,l),t.elementType=n,t.type=a,t.lanes=i,t}function He(n,t,e,a){return n=ft(7,n,a,t),n.lanes=e,n}function tr(n,t,e){return n=ft(6,n,null,t),n.lanes=e,n}function er(n,t,e){return t=ft(4,n.children!==null?n.children:[],n.key,t),t.lanes=e,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var da=[],ha=0,fi=null,di=0,Ot=[],_t=0,we=null,Qt=1,Zt="";function Be(n,t){da[ha++]=di,da[ha++]=fi,fi=n,di=t}function Wc(n,t,e){Ot[_t++]=Qt,Ot[_t++]=Zt,Ot[_t++]=we,we=n;var a=Qt;n=Zt;var l=32-ct(a)-1;a&=~(1<<l),e+=1;var i=32-ct(t)+l;if(30<i){var r=l-l%5;i=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Qt=1<<32-ct(t)+l|e<<l|a,Zt=i+n}else Qt=1<<i|e<<l|a,Zt=n}function ar(n){n.return!==null&&(Be(n,1),Wc(n,1,0))}function lr(n){for(;n===fi;)fi=da[--ha],da[ha]=null,di=da[--ha],da[ha]=null;for(;n===we;)we=Ot[--_t],Ot[_t]=null,Zt=Ot[--_t],Ot[_t]=null,Qt=Ot[--_t],Ot[_t]=null}var tt=null,kn=null,yn=!1,Ye=null,kt=!1,ir=Error(u(519));function je(n){var t=Error(u(418,""));throw Ia(xt(t,n)),ir}function Fc(n){var t=n.stateNode,e=n.type,a=n.memoizedProps;switch(t[Fn]=n,t[at]=a,e){case"dialog":fn("cancel",t),fn("close",t);break;case"iframe":case"object":case"embed":fn("load",t);break;case"video":case"audio":for(e=0;e<_l.length;e++)fn(_l[e],t);break;case"source":fn("error",t);break;case"img":case"image":case"link":fn("error",t),fn("load",t);break;case"details":fn("toggle",t);break;case"input":fn("invalid",t),dc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),$l(t);break;case"select":fn("invalid",t);break;case"textarea":fn("invalid",t),pc(t,a.value,a.defaultValue,a.children),$l(t)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||vd(t.textContent,e)?(a.popover!=null&&(fn("beforetoggle",t),fn("toggle",t)),a.onScroll!=null&&fn("scroll",t),a.onScrollEnd!=null&&fn("scrollend",t),a.onClick!=null&&(t.onclick=Vi),t=!0):t=!1,t||je(n)}function $c(n){for(tt=n.return;tt;)switch(tt.tag){case 5:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:tt=tt.return}}function Fa(n){if(n!==tt)return!1;if(!yn)return $c(n),yn=!0,!1;var t=n.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=n.type,e=!(e!=="form"&&e!=="button")||Su(n.type,n.memoizedProps)),e=!e),e&&kn&&je(n),$c(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8)if(e=n.data,e==="/$"){if(t===0){kn=Rt(n.nextSibling);break n}t--}else e!=="$"&&e!=="$!"&&e!=="$?"||t++;n=n.nextSibling}kn=null}}else t===27?(t=kn,_e(n.type)?(n=Eu,Eu=null,kn=n):kn=t):kn=tt?Rt(n.stateNode.nextSibling):null;return!0}function $a(){kn=tt=null,yn=!1}function Ic(){var n=Ye;return n!==null&&(rt===null?rt=n:rt.push.apply(rt,n),Ye=null),n}function Ia(n){Ye===null?Ye=[n]:Ye.push(n)}var or=N(null),Xe=null,Vt=null;function ue(n,t,e){j(or,t._currentValue),t._currentValue=e}function Kt(n){n._currentValue=or.current,G(or)}function rr(n,t,e){for(;n!==null;){var a=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),n===e)break;n=n.return}}function ur(n,t,e,a){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;n:for(;i!==null;){var c=i;i=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),rr(i.return,e,n),a||(r=null);break n}i=c.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(u(341));r.lanes|=e,i=r.alternate,i!==null&&(i.lanes|=e),rr(r,e,n),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===n){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function nl(n,t,e,a){n=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(u(387));if(r=r.memoizedProps,r!==null){var c=l.type;st(l.pendingProps.value,r.value)||(n!==null?n.push(c):n=[c])}}else if(l===nt.current){if(r=l.alternate,r===null)throw Error(u(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(zl):n=[zl])}l=l.return}n!==null&&ur(t,n,e,a),t.flags|=262144}function hi(n){for(n=n.firstContext;n!==null;){if(!st(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ge(n){Xe=n,Vt=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $n(n){return ns(Xe,n)}function pi(n,t){return Xe===null&&Ge(n),ns(n,t)}function ns(n,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Vt===null){if(n===null)throw Error(u(308));Vt=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else Vt=Vt.next=t;return e}var Xh=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(e,a){n.push(a)}};this.abort=function(){t.aborted=!0,n.forEach(function(e){return e()})}},Gh=o.unstable_scheduleCallback,Lh=o.unstable_NormalPriority,Xn={$$typeof:an,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cr(){return{controller:new Xh,data:new Map,refCount:0}}function tl(n){n.refCount--,n.refCount===0&&Gh(Lh,function(){n.controller.abort()})}var el=null,sr=0,pa=0,va=null;function Qh(n,t){if(el===null){var e=el=[];sr=0,pa=du(),va={status:"pending",value:void 0,then:function(a){e.push(a)}}}return sr++,t.then(ts,ts),t}function ts(){if(--sr===0&&el!==null){va!==null&&(va.status="fulfilled");var n=el;el=null,pa=0,va=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Zh(n,t){var e=[],a={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return n.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<e.length;l++)(0,e[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),a}var es=T.S;T.S=function(n,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qh(n,t),es!==null&&es(n,t)};var Le=N(null);function fr(){var n=Le.current;return n!==null?n:zn.pooledCache}function vi(n,t){t===null?j(Le,Le.current):j(Le,t.pool)}function as(){var n=fr();return n===null?null:{parent:Xn._currentValue,pool:n}}var al=Error(u(460)),ls=Error(u(474)),bi=Error(u(542)),dr={then:function(){}};function is(n){return n=n.status,n==="fulfilled"||n==="rejected"}function mi(){}function os(n,t,e){switch(e=n[e],e===void 0?n.push(t):e!==t&&(t.then(mi,mi),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,us(n),n;default:if(typeof t.status=="string")t.then(mi,mi);else{if(n=zn,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=t,n.status="pending",n.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,us(n),n}throw ll=t,al}}var ll=null;function rs(){if(ll===null)throw Error(u(459));var n=ll;return ll=null,n}function us(n){if(n===al||n===bi)throw Error(u(483))}var ce=!1;function hr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pr(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function se(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function fe(n,t,e){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Sn&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=ci(n),Jc(n,null,e),t}return ui(n,a,t,e),ci(n)}function il(n,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=n.pendingLanes,e|=a,t.lanes=e,tc(n,e)}}function vr(n,t){var e=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var r={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,e=e.next}while(e!==null);i===null?l=i=t:i=i.next=t}else l=i=t;e={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=t:n.next=t,e.lastBaseUpdate=t}var br=!1;function ol(){if(br){var n=va;if(n!==null)throw n}}function rl(n,t,e,a){br=!1;var l=n.updateQueue;ce=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,O=d.next;d.next=null,r===null?i=O:r.next=O,r=d;var U=n.alternate;U!==null&&(U=U.updateQueue,c=U.lastBaseUpdate,c!==r&&(c===null?U.firstBaseUpdate=O:c.next=O,U.lastBaseUpdate=d))}if(i!==null){var k=l.baseState;r=0,U=O=d=null,c=i;do{var E=c.lane&-536870913,A=E!==c.lane;if(A?(pn&E)===E:(a&E)===E){E!==0&&E===pa&&(br=!0),U!==null&&(U=U.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var nn=n,W=c;E=t;var En=e;switch(W.tag){case 1:if(nn=W.payload,typeof nn=="function"){k=nn.call(En,k,E);break n}k=nn;break n;case 3:nn.flags=nn.flags&-65537|128;case 0:if(nn=W.payload,E=typeof nn=="function"?nn.call(En,k,E):nn,E==null)break n;k=x({},k,E);break n;case 2:ce=!0}}E=c.callback,E!==null&&(n.flags|=64,A&&(n.flags|=8192),A=l.callbacks,A===null?l.callbacks=[E]:A.push(E))}else A={lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},U===null?(O=U=A,d=k):U=U.next=A,r|=E;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;A=c,c=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);U===null&&(d=k),l.baseState=d,l.firstBaseUpdate=O,l.lastBaseUpdate=U,i===null&&(l.shared.lanes=0),ye|=r,n.lanes=r,n.memoizedState=k}}function cs(n,t){if(typeof n!="function")throw Error(u(191,n));n.call(t)}function ss(n,t){var e=n.callbacks;if(e!==null)for(n.callbacks=null,n=0;n<e.length;n++)cs(e[n],t)}var ba=N(null),gi=N(0);function fs(n,t){n=ne,j(gi,n),j(ba,t),ne=n|t.baseLanes}function mr(){j(gi,ne),j(ba,ba.current)}function gr(){ne=gi.current,G(ba),G(gi)}var de=0,on=null,_n=null,Yn=null,yi=!1,ma=!1,Qe=!1,xi=0,ul=0,ga=null,Vh=0;function wn(){throw Error(u(321))}function yr(n,t){if(t===null)return!1;for(var e=0;e<t.length&&e<n.length;e++)if(!st(n[e],t[e]))return!1;return!0}function xr(n,t,e,a,l,i){return de=i,on=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=n===null||n.memoizedState===null?Js:Ps,Qe=!1,i=e(a,l),Qe=!1,ma&&(i=hs(t,e,a,l)),ds(n),i}function ds(n){T.H=Ai;var t=_n!==null&&_n.next!==null;if(de=0,Yn=_n=on=null,yi=!1,ul=0,ga=null,t)throw Error(u(300));n===null||Zn||(n=n.dependencies,n!==null&&hi(n)&&(Zn=!0))}function hs(n,t,e,a){on=n;var l=0;do{if(ma&&(ga=null),ul=0,ma=!1,25<=l)throw Error(u(301));if(l+=1,Yn=_n=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Ih,i=t(e,a)}while(ma);return i}function Kh(){var n=T.H,t=n.useState()[0];return t=typeof t.then=="function"?cl(t):t,n=n.useState()[0],(_n!==null?_n.memoizedState:null)!==n&&(on.flags|=1024),t}function Sr(){var n=xi!==0;return xi=0,n}function Or(n,t,e){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~e}function _r(n){if(yi){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}yi=!1}de=0,Yn=_n=on=null,ma=!1,ul=xi=0,ga=null}function it(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yn===null?on.memoizedState=Yn=n:Yn=Yn.next=n,Yn}function jn(){if(_n===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=_n.next;var t=Yn===null?on.memoizedState:Yn.next;if(t!==null)Yn=t,_n=n;else{if(n===null)throw on.alternate===null?Error(u(467)):Error(u(310));_n=n,n={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},Yn===null?on.memoizedState=Yn=n:Yn=Yn.next=n}return Yn}function Tr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(n){var t=ul;return ul+=1,ga===null&&(ga=[]),n=os(ga,n,t),t=on,(Yn===null?t.memoizedState:Yn.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Js:Ps),n}function Si(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return cl(n);if(n.$$typeof===an)return $n(n)}throw Error(u(438,String(n)))}function Er(n){var t=null,e=on.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=on.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=Tr(),on.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(n),a=0;a<n;a++)e[a]=et;return t.index++,e}function Jt(n,t){return typeof t=="function"?t(n):t}function Oi(n){var t=jn();return Ar(t,_n,n)}function Ar(n,t,e){var a=n.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=n.baseQueue,i=a.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,a.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{t=l.next;var c=r=null,d=null,O=t,U=!1;do{var k=O.lane&-536870913;if(k!==O.lane?(pn&k)===k:(de&k)===k){var E=O.revertLane;if(E===0)d!==null&&(d=d.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),k===pa&&(U=!0);else if((de&E)===E){O=O.next,E===pa&&(U=!0);continue}else k={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},d===null?(c=d=k,r=i):d=d.next=k,on.lanes|=E,ye|=E;k=O.action,Qe&&e(i,k),i=O.hasEagerState?O.eagerState:e(i,k)}else E={lane:k,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},d===null?(c=d=E,r=i):d=d.next=E,on.lanes|=k,ye|=k;O=O.next}while(O!==null&&O!==t);if(d===null?r=i:d.next=c,!st(i,n.memoizedState)&&(Zn=!0,U&&(e=va,e!==null)))throw e;n.memoizedState=i,n.baseState=r,n.baseQueue=d,a.lastRenderedState=i}return l===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Mr(n){var t=jn(),e=t.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=n;var a=e.dispatch,l=e.pending,i=t.memoizedState;if(l!==null){e.pending=null;var r=l=l.next;do i=n(i,r.action),r=r.next;while(r!==l);st(i,t.memoizedState)||(Zn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,a]}function ps(n,t,e){var a=on,l=jn(),i=yn;if(i){if(e===void 0)throw Error(u(407));e=e()}else e=t();var r=!st((_n||l).memoizedState,e);r&&(l.memoizedState=e,Zn=!0),l=l.queue;var c=ms.bind(null,a,l,n);if(sl(2048,8,c,[n]),l.getSnapshot!==t||r||Yn!==null&&Yn.memoizedState.tag&1){if(a.flags|=2048,ya(9,_i(),bs.bind(null,a,l,e,t),null),zn===null)throw Error(u(349));i||(de&124)!==0||vs(a,t,e)}return e}function vs(n,t,e){n.flags|=16384,n={getSnapshot:t,value:e},t=on.updateQueue,t===null?(t=Tr(),on.updateQueue=t,t.stores=[n]):(e=t.stores,e===null?t.stores=[n]:e.push(n))}function bs(n,t,e,a){t.value=e,t.getSnapshot=a,gs(t)&&ys(n)}function ms(n,t,e){return e(function(){gs(t)&&ys(n)})}function gs(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!st(n,e)}catch{return!0}}function ys(n){var t=sa(n,2);t!==null&&bt(t,n,2)}function Dr(n){var t=it();if(typeof n=="function"){var e=n;if(n=e(),Qe){ie(!0);try{e()}finally{ie(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:n},t}function xs(n,t,e,a){return n.baseState=e,Ar(n,_n,typeof a=="function"?a:Jt)}function Jh(n,t,e,a,l){if(Ei(n))throw Error(u(485));if(n=t.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};T.T!==null?e(!0):i.isTransition=!1,a(i),e=t.pending,e===null?(i.next=t.pending=i,Ss(t,i)):(i.next=e.next,t.pending=e.next=i)}}function Ss(n,t){var e=t.action,a=t.payload,l=n.state;if(t.isTransition){var i=T.T,r={};T.T=r;try{var c=e(l,a),d=T.S;d!==null&&d(r,c),Os(n,t,c)}catch(O){zr(n,t,O)}finally{T.T=i}}else try{i=e(l,a),Os(n,t,i)}catch(O){zr(n,t,O)}}function Os(n,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){_s(n,t,a)},function(a){return zr(n,t,a)}):_s(n,t,e)}function _s(n,t,e){t.status="fulfilled",t.value=e,Ts(t),n.state=e,t=n.pending,t!==null&&(e=t.next,e===t?n.pending=null:(e=e.next,t.next=e,Ss(n,e)))}function zr(n,t,e){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Ts(t),t=t.next;while(t!==a)}n.action=null}function Ts(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function Es(n,t){return t}function As(n,t){if(yn){var e=zn.formState;if(e!==null){n:{var a=on;if(yn){if(kn){t:{for(var l=kn,i=kt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Rt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){kn=Rt(l.nextSibling),a=l.data==="F!";break n}}je(a)}a=!1}a&&(t=e[0])}}return e=it(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=a,e=Zs.bind(null,on,a),a.dispatch=e,a=Dr(!1),i=qr.bind(null,on,!1,a.queue),a=it(),l={state:t,dispatch:null,action:n,pending:null},a.queue=l,e=Jh.bind(null,on,l,i,e),l.dispatch=e,a.memoizedState=n,[t,e,!1]}function Ms(n){var t=jn();return Ds(t,_n,n)}function Ds(n,t,e){if(t=Ar(n,t,Es)[0],n=Oi(Jt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=cl(t)}catch(r){throw r===al?bi:r}else a=t;t=jn();var l=t.queue,i=l.dispatch;return e!==t.memoizedState&&(on.flags|=2048,ya(9,_i(),Ph.bind(null,l,e),null)),[a,i,n]}function Ph(n,t){n.action=t}function zs(n){var t=jn(),e=_n;if(e!==null)return Ds(t,e,n);jn(),t=t.memoizedState,e=jn();var a=e.queue.dispatch;return e.memoizedState=n,[t,a,!1]}function ya(n,t,e,a){return n={tag:n,create:e,deps:a,inst:t,next:null},t=on.updateQueue,t===null&&(t=Tr(),on.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=n.next=n:(a=e.next,e.next=n,n.next=a,t.lastEffect=n),n}function _i(){return{destroy:void 0,resource:void 0}}function Rs(){return jn().memoizedState}function Ti(n,t,e,a){var l=it();a=a===void 0?null:a,on.flags|=n,l.memoizedState=ya(1|t,_i(),e,a)}function sl(n,t,e,a){var l=jn();a=a===void 0?null:a;var i=l.memoizedState.inst;_n!==null&&a!==null&&yr(a,_n.memoizedState.deps)?l.memoizedState=ya(t,i,e,a):(on.flags|=n,l.memoizedState=ya(1|t,i,e,a))}function Ns(n,t){Ti(8390656,8,n,t)}function Us(n,t){sl(2048,8,n,t)}function Cs(n,t){return sl(4,2,n,t)}function qs(n,t){return sl(4,4,n,t)}function ks(n,t){if(typeof t=="function"){n=n();var e=t(n);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Hs(n,t,e){e=e!=null?e.concat([n]):null,sl(4,4,ks.bind(null,t,n),e)}function Rr(){}function ws(n,t){var e=jn();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&yr(t,a[1])?a[0]:(e.memoizedState=[n,t],n)}function Bs(n,t){var e=jn();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&yr(t,a[1]))return a[0];if(a=n(),Qe){ie(!0);try{n()}finally{ie(!1)}}return e.memoizedState=[a,t],a}function Nr(n,t,e){return e===void 0||(de&1073741824)!==0?n.memoizedState=t:(n.memoizedState=e,n=Gf(),on.lanes|=n,ye|=n,e)}function Ys(n,t,e,a){return st(e,t)?e:ba.current!==null?(n=Nr(n,e,a),st(n,t)||(Zn=!0),n):(de&42)===0?(Zn=!0,n.memoizedState=e):(n=Gf(),on.lanes|=n,ye|=n,t)}function js(n,t,e,a,l){var i=m.p;m.p=i!==0&&8>i?i:8;var r=T.T,c={};T.T=c,qr(n,!1,t,e);try{var d=l(),O=T.S;if(O!==null&&O(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var U=Zh(d,a);fl(n,t,U,vt(n))}else fl(n,t,a,vt(n))}catch(k){fl(n,t,{then:function(){},status:"rejected",reason:k},vt())}finally{m.p=i,T.T=r}}function Wh(){}function Ur(n,t,e,a){if(n.tag!==5)throw Error(u(476));var l=Xs(n).queue;js(n,l,t,B,e===null?Wh:function(){return Gs(n),e(a)})}function Xs(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:B},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jt,lastRenderedState:e},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Gs(n){var t=Xs(n).next.queue;fl(n,t,{},vt())}function Cr(){return $n(zl)}function Ls(){return jn().memoizedState}function Qs(){return jn().memoizedState}function Fh(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var e=vt();n=se(e);var a=fe(t,n,e);a!==null&&(bt(a,t,e),il(a,t,e)),t={cache:cr()},n.payload=t;return}t=t.return}}function $h(n,t,e){var a=vt();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},Ei(n)?Vs(t,e):(e=Io(n,t,e,a),e!==null&&(bt(e,n,a),Ks(e,t,a)))}function Zs(n,t,e){var a=vt();fl(n,t,e,a)}function fl(n,t,e,a){var l={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ei(n))Vs(t,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,e);if(l.hasEagerState=!0,l.eagerState=c,st(c,r))return ui(n,t,l,0),zn===null&&ri(),!1}catch{}finally{}if(e=Io(n,t,l,a),e!==null)return bt(e,n,a),Ks(e,t,a),!0}return!1}function qr(n,t,e,a){if(a={lane:2,revertLane:du(),action:a,hasEagerState:!1,eagerState:null,next:null},Ei(n)){if(t)throw Error(u(479))}else t=Io(n,e,a,2),t!==null&&bt(t,n,2)}function Ei(n){var t=n.alternate;return n===on||t!==null&&t===on}function Vs(n,t){ma=yi=!0;var e=n.pending;e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t}function Ks(n,t,e){if((e&4194048)!==0){var a=t.lanes;a&=n.pendingLanes,e|=a,t.lanes=e,tc(n,e)}}var Ai={readContext:$n,use:Si,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useLayoutEffect:wn,useInsertionEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useSyncExternalStore:wn,useId:wn,useHostTransitionStatus:wn,useFormState:wn,useActionState:wn,useOptimistic:wn,useMemoCache:wn,useCacheRefresh:wn},Js={readContext:$n,use:Si,useCallback:function(n,t){return it().memoizedState=[n,t===void 0?null:t],n},useContext:$n,useEffect:Ns,useImperativeHandle:function(n,t,e){e=e!=null?e.concat([n]):null,Ti(4194308,4,ks.bind(null,t,n),e)},useLayoutEffect:function(n,t){return Ti(4194308,4,n,t)},useInsertionEffect:function(n,t){Ti(4,2,n,t)},useMemo:function(n,t){var e=it();t=t===void 0?null:t;var a=n();if(Qe){ie(!0);try{n()}finally{ie(!1)}}return e.memoizedState=[a,t],a},useReducer:function(n,t,e){var a=it();if(e!==void 0){var l=e(t);if(Qe){ie(!0);try{e(t)}finally{ie(!1)}}}else l=t;return a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},a.queue=n,n=n.dispatch=$h.bind(null,on,n),[a.memoizedState,n]},useRef:function(n){var t=it();return n={current:n},t.memoizedState=n},useState:function(n){n=Dr(n);var t=n.queue,e=Zs.bind(null,on,t);return t.dispatch=e,[n.memoizedState,e]},useDebugValue:Rr,useDeferredValue:function(n,t){var e=it();return Nr(e,n,t)},useTransition:function(){var n=Dr(!1);return n=js.bind(null,on,n.queue,!0,!1),it().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,e){var a=on,l=it();if(yn){if(e===void 0)throw Error(u(407));e=e()}else{if(e=t(),zn===null)throw Error(u(349));(pn&124)!==0||vs(a,t,e)}l.memoizedState=e;var i={value:e,getSnapshot:t};return l.queue=i,Ns(ms.bind(null,a,i,n),[n]),a.flags|=2048,ya(9,_i(),bs.bind(null,a,i,e,t),null),e},useId:function(){var n=it(),t=zn.identifierPrefix;if(yn){var e=Zt,a=Qt;e=(a&~(1<<32-ct(a)-1)).toString(32)+e,t="«"+t+"R"+e,e=xi++,0<e&&(t+="H"+e.toString(32)),t+="»"}else e=Vh++,t="«"+t+"r"+e.toString(32)+"»";return n.memoizedState=t},useHostTransitionStatus:Cr,useFormState:As,useActionState:As,useOptimistic:function(n){var t=it();t.memoizedState=t.baseState=n;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=qr.bind(null,on,!0,e),e.dispatch=t,[n,t]},useMemoCache:Er,useCacheRefresh:function(){return it().memoizedState=Fh.bind(null,on)}},Ps={readContext:$n,use:Si,useCallback:ws,useContext:$n,useEffect:Us,useImperativeHandle:Hs,useInsertionEffect:Cs,useLayoutEffect:qs,useMemo:Bs,useReducer:Oi,useRef:Rs,useState:function(){return Oi(Jt)},useDebugValue:Rr,useDeferredValue:function(n,t){var e=jn();return Ys(e,_n.memoizedState,n,t)},useTransition:function(){var n=Oi(Jt)[0],t=jn().memoizedState;return[typeof n=="boolean"?n:cl(n),t]},useSyncExternalStore:ps,useId:Ls,useHostTransitionStatus:Cr,useFormState:Ms,useActionState:Ms,useOptimistic:function(n,t){var e=jn();return xs(e,_n,n,t)},useMemoCache:Er,useCacheRefresh:Qs},Ih={readContext:$n,use:Si,useCallback:ws,useContext:$n,useEffect:Us,useImperativeHandle:Hs,useInsertionEffect:Cs,useLayoutEffect:qs,useMemo:Bs,useReducer:Mr,useRef:Rs,useState:function(){return Mr(Jt)},useDebugValue:Rr,useDeferredValue:function(n,t){var e=jn();return _n===null?Nr(e,n,t):Ys(e,_n.memoizedState,n,t)},useTransition:function(){var n=Mr(Jt)[0],t=jn().memoizedState;return[typeof n=="boolean"?n:cl(n),t]},useSyncExternalStore:ps,useId:Ls,useHostTransitionStatus:Cr,useFormState:zs,useActionState:zs,useOptimistic:function(n,t){var e=jn();return _n!==null?xs(e,_n,n,t):(e.baseState=n,[n,e.queue.dispatch])},useMemoCache:Er,useCacheRefresh:Qs},xa=null,dl=0;function Mi(n){var t=dl;return dl+=1,xa===null&&(xa=[]),os(xa,n,t)}function hl(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function Di(n,t){throw t.$$typeof===D?Error(u(525)):(n=Object.prototype.toString.call(t),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Ws(n){var t=n._init;return t(n._payload)}function Fs(n){function t(g,v){if(n){var S=g.deletions;S===null?(g.deletions=[v],g.flags|=16):S.push(v)}}function e(g,v){if(!n)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function a(g){for(var v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function l(g,v){return g=Lt(g,v),g.index=0,g.sibling=null,g}function i(g,v,S){return g.index=S,n?(S=g.alternate,S!==null?(S=S.index,S<v?(g.flags|=67108866,v):S):(g.flags|=67108866,v)):(g.flags|=1048576,v)}function r(g){return n&&g.alternate===null&&(g.flags|=67108866),g}function c(g,v,S,q){return v===null||v.tag!==6?(v=tr(S,g.mode,q),v.return=g,v):(v=l(v,S),v.return=g,v)}function d(g,v,S,q){var Z=S.type;return Z===R?U(g,v,S.props.children,q,S.key):v!==null&&(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Rn&&Ws(Z)===v.type)?(v=l(v,S.props),hl(v,S),v.return=g,v):(v=si(S.type,S.key,S.props,null,g.mode,q),hl(v,S),v.return=g,v)}function O(g,v,S,q){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=er(S,g.mode,q),v.return=g,v):(v=l(v,S.children||[]),v.return=g,v)}function U(g,v,S,q,Z){return v===null||v.tag!==7?(v=He(S,g.mode,q,Z),v.return=g,v):(v=l(v,S),v.return=g,v)}function k(g,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=tr(""+v,g.mode,S),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case w:return S=si(v.type,v.key,v.props,null,g.mode,S),hl(S,v),S.return=g,S;case H:return v=er(v,g.mode,S),v.return=g,v;case Rn:var q=v._init;return v=q(v._payload),k(g,v,S)}if(Y(v)||Q(v))return v=He(v,g.mode,S,null),v.return=g,v;if(typeof v.then=="function")return k(g,Mi(v),S);if(v.$$typeof===an)return k(g,pi(g,v),S);Di(g,v)}return null}function E(g,v,S,q){var Z=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:c(g,v,""+S,q);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case w:return S.key===Z?d(g,v,S,q):null;case H:return S.key===Z?O(g,v,S,q):null;case Rn:return Z=S._init,S=Z(S._payload),E(g,v,S,q)}if(Y(S)||Q(S))return Z!==null?null:U(g,v,S,q,null);if(typeof S.then=="function")return E(g,v,Mi(S),q);if(S.$$typeof===an)return E(g,v,pi(g,S),q);Di(g,S)}return null}function A(g,v,S,q,Z){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return g=g.get(S)||null,c(v,g,""+q,Z);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return g=g.get(q.key===null?S:q.key)||null,d(v,g,q,Z);case H:return g=g.get(q.key===null?S:q.key)||null,O(v,g,q,Z);case Rn:var un=q._init;return q=un(q._payload),A(g,v,S,q,Z)}if(Y(q)||Q(q))return g=g.get(S)||null,U(v,g,q,Z,null);if(typeof q.then=="function")return A(g,v,S,Mi(q),Z);if(q.$$typeof===an)return A(g,v,S,pi(v,q),Z);Di(v,q)}return null}function nn(g,v,S,q){for(var Z=null,un=null,K=v,$=v=0,Kn=null;K!==null&&$<S.length;$++){K.index>$?(Kn=K,K=null):Kn=K.sibling;var bn=E(g,K,S[$],q);if(bn===null){K===null&&(K=Kn);break}n&&K&&bn.alternate===null&&t(g,K),v=i(bn,v,$),un===null?Z=bn:un.sibling=bn,un=bn,K=Kn}if($===S.length)return e(g,K),yn&&Be(g,$),Z;if(K===null){for(;$<S.length;$++)K=k(g,S[$],q),K!==null&&(v=i(K,v,$),un===null?Z=K:un.sibling=K,un=K);return yn&&Be(g,$),Z}for(K=a(K);$<S.length;$++)Kn=A(K,g,$,S[$],q),Kn!==null&&(n&&Kn.alternate!==null&&K.delete(Kn.key===null?$:Kn.key),v=i(Kn,v,$),un===null?Z=Kn:un.sibling=Kn,un=Kn);return n&&K.forEach(function(De){return t(g,De)}),yn&&Be(g,$),Z}function W(g,v,S,q){if(S==null)throw Error(u(151));for(var Z=null,un=null,K=v,$=v=0,Kn=null,bn=S.next();K!==null&&!bn.done;$++,bn=S.next()){K.index>$?(Kn=K,K=null):Kn=K.sibling;var De=E(g,K,bn.value,q);if(De===null){K===null&&(K=Kn);break}n&&K&&De.alternate===null&&t(g,K),v=i(De,v,$),un===null?Z=De:un.sibling=De,un=De,K=Kn}if(bn.done)return e(g,K),yn&&Be(g,$),Z;if(K===null){for(;!bn.done;$++,bn=S.next())bn=k(g,bn.value,q),bn!==null&&(v=i(bn,v,$),un===null?Z=bn:un.sibling=bn,un=bn);return yn&&Be(g,$),Z}for(K=a(K);!bn.done;$++,bn=S.next())bn=A(K,g,$,bn.value,q),bn!==null&&(n&&bn.alternate!==null&&K.delete(bn.key===null?$:bn.key),v=i(bn,v,$),un===null?Z=bn:un.sibling=bn,un=bn);return n&&K.forEach(function(nv){return t(g,nv)}),yn&&Be(g,$),Z}function En(g,v,S,q){if(typeof S=="object"&&S!==null&&S.type===R&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case w:n:{for(var Z=S.key;v!==null;){if(v.key===Z){if(Z=S.type,Z===R){if(v.tag===7){e(g,v.sibling),q=l(v,S.props.children),q.return=g,g=q;break n}}else if(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Rn&&Ws(Z)===v.type){e(g,v.sibling),q=l(v,S.props),hl(q,S),q.return=g,g=q;break n}e(g,v);break}else t(g,v);v=v.sibling}S.type===R?(q=He(S.props.children,g.mode,q,S.key),q.return=g,g=q):(q=si(S.type,S.key,S.props,null,g.mode,q),hl(q,S),q.return=g,g=q)}return r(g);case H:n:{for(Z=S.key;v!==null;){if(v.key===Z)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){e(g,v.sibling),q=l(v,S.children||[]),q.return=g,g=q;break n}else{e(g,v);break}else t(g,v);v=v.sibling}q=er(S,g.mode,q),q.return=g,g=q}return r(g);case Rn:return Z=S._init,S=Z(S._payload),En(g,v,S,q)}if(Y(S))return nn(g,v,S,q);if(Q(S)){if(Z=Q(S),typeof Z!="function")throw Error(u(150));return S=Z.call(S),W(g,v,S,q)}if(typeof S.then=="function")return En(g,v,Mi(S),q);if(S.$$typeof===an)return En(g,v,pi(g,S),q);Di(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(e(g,v.sibling),q=l(v,S),q.return=g,g=q):(e(g,v),q=tr(S,g.mode,q),q.return=g,g=q),r(g)):e(g,v)}return function(g,v,S,q){try{dl=0;var Z=En(g,v,S,q);return xa=null,Z}catch(K){if(K===al||K===bi)throw K;var un=ft(29,K,null,g.mode);return un.lanes=q,un.return=g,un}finally{}}}var Sa=Fs(!0),$s=Fs(!1),Tt=N(null),Ht=null;function he(n){var t=n.alternate;j(Gn,Gn.current&1),j(Tt,n),Ht===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(Ht=n)}function Is(n){if(n.tag===22){if(j(Gn,Gn.current),j(Tt,n),Ht===null){var t=n.alternate;t!==null&&t.memoizedState!==null&&(Ht=n)}}else pe()}function pe(){j(Gn,Gn.current),j(Tt,Tt.current)}function Pt(n){G(Tt),Ht===n&&(Ht=null),G(Gn)}var Gn=N(0);function zi(n){for(var t=n;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||Tu(e)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function kr(n,t,e,a){t=n.memoizedState,e=e(a,t),e=e==null?t:x({},t,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var Hr={enqueueSetState:function(n,t,e){n=n._reactInternals;var a=vt(),l=se(a);l.payload=t,e!=null&&(l.callback=e),t=fe(n,l,a),t!==null&&(bt(t,n,a),il(t,n,a))},enqueueReplaceState:function(n,t,e){n=n._reactInternals;var a=vt(),l=se(a);l.tag=1,l.payload=t,e!=null&&(l.callback=e),t=fe(n,l,a),t!==null&&(bt(t,n,a),il(t,n,a))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var e=vt(),a=se(e);a.tag=2,t!=null&&(a.callback=t),t=fe(n,a,e),t!==null&&(bt(t,n,e),il(t,n,e))}};function nf(n,t,e,a,l,i,r){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!Pa(e,a)||!Pa(l,i):!0}function tf(n,t,e,a){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==n&&Hr.enqueueReplaceState(t,t.state,null)}function Ze(n,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(n=n.defaultProps){e===t&&(e=x({},e));for(var l in n)e[l]===void 0&&(e[l]=n[l])}return e}var Ri=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ef(n){Ri(n)}function af(n){console.error(n)}function lf(n){Ri(n)}function Ni(n,t){try{var e=n.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function of(n,t,e){try{var a=n.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wr(n,t,e){return e=se(e),e.tag=3,e.payload={element:null},e.callback=function(){Ni(n,t)},e}function rf(n){return n=se(n),n.tag=3,n}function uf(n,t,e,a){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;n.payload=function(){return l(i)},n.callback=function(){of(t,e,a)}}var r=e.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){of(t,e,a),typeof l!="function"&&(xe===null?xe=new Set([this]):xe.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function np(n,t,e,a,l){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&nl(t,e,l,!0),e=Tt.current,e!==null){switch(e.tag){case 13:return Ht===null?ru():e.alternate===null&&Hn===0&&(Hn=3),e.flags&=-257,e.flags|=65536,e.lanes=l,a===dr?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),cu(n,a,l)),!1;case 22:return e.flags|=65536,a===dr?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),cu(n,a,l)),!1}throw Error(u(435,e.tag))}return cu(n,a,l),ru(),!1}if(yn)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==ir&&(n=Error(u(422),{cause:a}),Ia(xt(n,e)))):(a!==ir&&(t=Error(u(423),{cause:a}),Ia(xt(t,e))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,a=xt(a,e),l=wr(n.stateNode,a,l),vr(n,l),Hn!==4&&(Hn=2)),!1;var i=Error(u(520),{cause:a});if(i=xt(i,e),xl===null?xl=[i]:xl.push(i),Hn!==4&&(Hn=2),t===null)return!0;a=xt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,n=l&-l,e.lanes|=n,n=wr(e.stateNode,a,n),vr(e,n),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(xe===null||!xe.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=rf(l),uf(l,n,e,a),vr(e,l),!1}e=e.return}while(e!==null);return!1}var cf=Error(u(461)),Zn=!1;function Jn(n,t,e,a){t.child=n===null?$s(t,null,e,a):Sa(t,n.child,e,a)}function sf(n,t,e,a,l){e=e.render;var i=t.ref;if("ref"in a){var r={};for(var c in a)c!=="ref"&&(r[c]=a[c])}else r=a;return Ge(t),a=xr(n,t,e,r,i,l),c=Sr(),n!==null&&!Zn?(Or(n,t,l),Wt(n,t,l)):(yn&&c&&ar(t),t.flags|=1,Jn(n,t,a,l),t.child)}function ff(n,t,e,a,l){if(n===null){var i=e.type;return typeof i=="function"&&!nr(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,df(n,t,i,a,l)):(n=si(e.type,null,a,t,t.mode,l),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!Zr(n,l)){var r=i.memoizedProps;if(e=e.compare,e=e!==null?e:Pa,e(r,a)&&n.ref===t.ref)return Wt(n,t,l)}return t.flags|=1,n=Lt(i,a),n.ref=t.ref,n.return=t,t.child=n}function df(n,t,e,a,l){if(n!==null){var i=n.memoizedProps;if(Pa(i,a)&&n.ref===t.ref)if(Zn=!1,t.pendingProps=a=i,Zr(n,l))(n.flags&131072)!==0&&(Zn=!0);else return t.lanes=n.lanes,Wt(n,t,l)}return Br(n,t,e,a,l)}function hf(n,t,e){var a=t.pendingProps,l=a.children,i=n!==null?n.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|e:e,n!==null){for(l=t.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return pf(n,t,a,e)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&vi(t,i!==null?i.cachePool:null),i!==null?fs(t,i):mr(),Is(t);else return t.lanes=t.childLanes=536870912,pf(n,t,i!==null?i.baseLanes|e:e,e)}else i!==null?(vi(t,i.cachePool),fs(t,i),pe(),t.memoizedState=null):(n!==null&&vi(t,null),mr(),pe());return Jn(n,t,l,e),t.child}function pf(n,t,e,a){var l=fr();return l=l===null?null:{parent:Xn._currentValue,pool:l},t.memoizedState={baseLanes:e,cachePool:l},n!==null&&vi(t,null),mr(),Is(t),n!==null&&nl(n,t,a,!0),null}function Ui(n,t){var e=t.ref;if(e===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(u(284));(n===null||n.ref!==e)&&(t.flags|=4194816)}}function Br(n,t,e,a,l){return Ge(t),e=xr(n,t,e,a,void 0,l),a=Sr(),n!==null&&!Zn?(Or(n,t,l),Wt(n,t,l)):(yn&&a&&ar(t),t.flags|=1,Jn(n,t,e,l),t.child)}function vf(n,t,e,a,l,i){return Ge(t),t.updateQueue=null,e=hs(t,a,e,l),ds(n),a=Sr(),n!==null&&!Zn?(Or(n,t,i),Wt(n,t,i)):(yn&&a&&ar(t),t.flags|=1,Jn(n,t,e,i),t.child)}function bf(n,t,e,a,l){if(Ge(t),t.stateNode===null){var i=fa,r=e.contextType;typeof r=="object"&&r!==null&&(i=$n(r)),i=new e(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},hr(t),r=e.contextType,i.context=typeof r=="object"&&r!==null?$n(r):fa,i.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(kr(t,e,r,a),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Hr.enqueueReplaceState(i,i.state,null),rl(t,a,i,l),ol(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(n===null){i=t.stateNode;var c=t.memoizedProps,d=Ze(e,c);i.props=d;var O=i.context,U=e.contextType;r=fa,typeof U=="object"&&U!==null&&(r=$n(U));var k=e.getDerivedStateFromProps;U=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||O!==r)&&tf(t,i,a,r),ce=!1;var E=t.memoizedState;i.state=E,rl(t,a,i,l),ol(),O=t.memoizedState,c||E!==O||ce?(typeof k=="function"&&(kr(t,e,k,a),O=t.memoizedState),(d=ce||nf(t,e,d,a,E,O,r))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=O),i.props=a,i.state=O,i.context=r,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,pr(n,t),r=t.memoizedProps,U=Ze(e,r),i.props=U,k=t.pendingProps,E=i.context,O=e.contextType,d=fa,typeof O=="object"&&O!==null&&(d=$n(O)),c=e.getDerivedStateFromProps,(O=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==k||E!==d)&&tf(t,i,a,d),ce=!1,E=t.memoizedState,i.state=E,rl(t,a,i,l),ol();var A=t.memoizedState;r!==k||E!==A||ce||n!==null&&n.dependencies!==null&&hi(n.dependencies)?(typeof c=="function"&&(kr(t,e,c,a),A=t.memoizedState),(U=ce||nf(t,e,U,a,E,A,d)||n!==null&&n.dependencies!==null&&hi(n.dependencies))?(O||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,A,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,A,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===n.memoizedProps&&E===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&E===n.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=d,a=U):(typeof i.componentDidUpdate!="function"||r===n.memoizedProps&&E===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===n.memoizedProps&&E===n.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ui(n,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&a?(t.child=Sa(t,n.child,null,l),t.child=Sa(t,null,e,l)):Jn(n,t,e,l),t.memoizedState=i.state,n=t.child):n=Wt(n,t,l),n}function mf(n,t,e,a){return $a(),t.flags|=256,Jn(n,t,e,a),t.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jr(n){return{baseLanes:n,cachePool:as()}}function Xr(n,t,e){return n=n!==null?n.childLanes&~e:0,t&&(n|=Et),n}function gf(n,t,e){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=n!==null&&n.memoizedState===null?!1:(Gn.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,n===null){if(yn){if(l?he(t):pe(),yn){var c=kn,d;if(d=c){n:{for(d=c,c=kt;d.nodeType!==8;){if(!c){c=null;break n}if(d=Rt(d.nextSibling),d===null){c=null;break n}}c=d}c!==null?(t.memoizedState={dehydrated:c,treeContext:we!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},d=ft(18,null,null,0),d.stateNode=c,d.return=t,t.child=d,tt=t,kn=null,d=!0):d=!1}d||je(t)}if(c=t.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return Tu(c)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return c=a.children,a=a.fallback,l?(pe(),l=t.mode,c=Ci({mode:"hidden",children:c},l),a=He(a,l,e,null),c.return=t,a.return=t,c.sibling=a,t.child=c,l=t.child,l.memoizedState=jr(e),l.childLanes=Xr(n,r,e),t.memoizedState=Yr,a):(he(t),Gr(t,c))}if(d=n.memoizedState,d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(he(t),t.flags&=-257,t=Lr(n,t,e)):t.memoizedState!==null?(pe(),t.child=n.child,t.flags|=128,t=null):(pe(),l=a.fallback,c=t.mode,a=Ci({mode:"visible",children:a.children},c),l=He(l,c,e,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,Sa(t,n.child,null,e),a=t.child,a.memoizedState=jr(e),a.childLanes=Xr(n,r,e),t.memoizedState=Yr,t=l);else if(he(t),Tu(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var O=r.dgst;r=O,a=Error(u(419)),a.stack="",a.digest=r,Ia({value:a,source:null,stack:null}),t=Lr(n,t,e)}else if(Zn||nl(n,t,e,!1),r=(e&n.childLanes)!==0,Zn||r){if(r=zn,r!==null&&(a=e&-e,a=(a&42)!==0?1:Eo(a),a=(a&(r.suspendedLanes|e))!==0?0:a,a!==0&&a!==d.retryLane))throw d.retryLane=a,sa(n,a),bt(r,n,a),cf;c.data==="$?"||ru(),t=Lr(n,t,e)}else c.data==="$?"?(t.flags|=192,t.child=n.child,t=null):(n=d.treeContext,kn=Rt(c.nextSibling),tt=t,yn=!0,Ye=null,kt=!1,n!==null&&(Ot[_t++]=Qt,Ot[_t++]=Zt,Ot[_t++]=we,Qt=n.id,Zt=n.overflow,we=t),t=Gr(t,a.children),t.flags|=4096);return t}return l?(pe(),l=a.fallback,c=t.mode,d=n.child,O=d.sibling,a=Lt(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,O!==null?l=Lt(O,l):(l=He(l,c,e,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,c=n.child.memoizedState,c===null?c=jr(e):(d=c.cachePool,d!==null?(O=Xn._currentValue,d=d.parent!==O?{parent:O,pool:O}:d):d=as(),c={baseLanes:c.baseLanes|e,cachePool:d}),l.memoizedState=c,l.childLanes=Xr(n,r,e),t.memoizedState=Yr,a):(he(t),e=n.child,n=e.sibling,e=Lt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,n!==null&&(r=t.deletions,r===null?(t.deletions=[n],t.flags|=16):r.push(n)),t.child=e,t.memoizedState=null,e)}function Gr(n,t){return t=Ci({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function Ci(n,t){return n=ft(22,n,null,t),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Lr(n,t,e){return Sa(t,n.child,null,e),n=Gr(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function yf(n,t,e){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t),rr(n.return,t,e)}function Qr(n,t,e,a,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=l)}function xf(n,t,e){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(Jn(n,t,a.children,e),a=Gn.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yf(n,e,t);else if(n.tag===19)yf(n,e,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}switch(j(Gn,a),l){case"forwards":for(e=t.child,l=null;e!==null;)n=e.alternate,n!==null&&zi(n)===null&&(l=e),e=e.sibling;e=l,e===null?(l=t.child,t.child=null):(l=e.sibling,e.sibling=null),Qr(t,!1,l,e,i);break;case"backwards":for(e=null,l=t.child,t.child=null;l!==null;){if(n=l.alternate,n!==null&&zi(n)===null){t.child=l;break}n=l.sibling,l.sibling=e,e=l,l=n}Qr(t,!0,e,null,i);break;case"together":Qr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(n,t,e){if(n!==null&&(t.dependencies=n.dependencies),ye|=t.lanes,(e&t.childLanes)===0)if(n!==null){if(nl(n,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(u(153));if(t.child!==null){for(n=t.child,e=Lt(n,n.pendingProps),t.child=e,e.return=t;n.sibling!==null;)n=n.sibling,e=e.sibling=Lt(n,n.pendingProps),e.return=t;e.sibling=null}return t.child}function Zr(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&hi(n)))}function tp(n,t,e){switch(t.tag){case 3:Nn(t,t.stateNode.containerInfo),ue(t,Xn,n.memoizedState.cache),$a();break;case 27:case 5:xo(t);break;case 4:Nn(t,t.stateNode.containerInfo);break;case 10:ue(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(he(t),t.flags|=128,null):(e&t.child.childLanes)!==0?gf(n,t,e):(he(t),n=Wt(n,t,e),n!==null?n.sibling:null);he(t);break;case 19:var l=(n.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(nl(n,t,e,!1),a=(e&t.childLanes)!==0),l){if(a)return xf(n,t,e);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(Gn,Gn.current),a)break;return null;case 22:case 23:return t.lanes=0,hf(n,t,e);case 24:ue(t,Xn,n.memoizedState.cache)}return Wt(n,t,e)}function Sf(n,t,e){if(n!==null)if(n.memoizedProps!==t.pendingProps)Zn=!0;else{if(!Zr(n,e)&&(t.flags&128)===0)return Zn=!1,tp(n,t,e);Zn=(n.flags&131072)!==0}else Zn=!1,yn&&(t.flags&1048576)!==0&&Wc(t,di,t.index);switch(t.lanes=0,t.tag){case 16:n:{n=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")nr(a)?(n=Ze(a,n),t.tag=1,t=bf(null,t,a,n,e)):(t.tag=0,t=Br(null,t,a,n,e));else{if(a!=null){if(l=a.$$typeof,l===xn){t.tag=11,t=sf(null,t,a,n,e);break n}else if(l===Dn){t.tag=14,t=ff(null,t,a,n,e);break n}}throw t=X(a)||a,Error(u(306,t,""))}}return t;case 0:return Br(n,t,t.type,t.pendingProps,e);case 1:return a=t.type,l=Ze(a,t.pendingProps),bf(n,t,a,l,e);case 3:n:{if(Nn(t,t.stateNode.containerInfo),n===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,pr(n,t),rl(t,a,null,e);var r=t.memoizedState;if(a=r.cache,ue(t,Xn,a),a!==i.cache&&ur(t,[Xn],e,!0),ol(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=mf(n,t,a,e);break n}else if(a!==l){l=xt(Error(u(424)),t),Ia(l),t=mf(n,t,a,e);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(kn=Rt(n.firstChild),tt=t,yn=!0,Ye=null,kt=!0,e=$s(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if($a(),a===l){t=Wt(n,t,e);break n}Jn(n,t,a,e)}t=t.child}return t;case 26:return Ui(n,t),n===null?(e=Ed(t.type,null,t.pendingProps,null))?t.memoizedState=e:yn||(e=t.type,n=t.pendingProps,a=Ki(en.current).createElement(e),a[Fn]=t,a[at]=n,Wn(a,e,n),Qn(a),t.stateNode=a):t.memoizedState=Ed(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return xo(t),n===null&&yn&&(a=t.stateNode=Od(t.type,t.pendingProps,en.current),tt=t,kt=!0,l=kn,_e(t.type)?(Eu=l,kn=Rt(a.firstChild)):kn=l),Jn(n,t,t.pendingProps.children,e),Ui(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&yn&&((l=a=kn)&&(a=zp(a,t.type,t.pendingProps,kt),a!==null?(t.stateNode=a,tt=t,kn=Rt(a.firstChild),kt=!1,l=!0):l=!1),l||je(t)),xo(t),l=t.type,i=t.pendingProps,r=n!==null?n.memoizedProps:null,a=i.children,Su(l,i)?a=null:r!==null&&Su(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=xr(n,t,Kh,null,null,e),zl._currentValue=l),Ui(n,t),Jn(n,t,a,e),t.child;case 6:return n===null&&yn&&((n=e=kn)&&(e=Rp(e,t.pendingProps,kt),e!==null?(t.stateNode=e,tt=t,kn=null,n=!0):n=!1),n||je(t)),null;case 13:return gf(n,t,e);case 4:return Nn(t,t.stateNode.containerInfo),a=t.pendingProps,n===null?t.child=Sa(t,null,a,e):Jn(n,t,a,e),t.child;case 11:return sf(n,t,t.type,t.pendingProps,e);case 7:return Jn(n,t,t.pendingProps,e),t.child;case 8:return Jn(n,t,t.pendingProps.children,e),t.child;case 12:return Jn(n,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ue(t,t.type,a.value),Jn(n,t,a.children,e),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Ge(t),l=$n(l),a=a(l),t.flags|=1,Jn(n,t,a,e),t.child;case 14:return ff(n,t,t.type,t.pendingProps,e);case 15:return df(n,t,t.type,t.pendingProps,e);case 19:return xf(n,t,e);case 31:return a=t.pendingProps,e=t.mode,a={mode:a.mode,children:a.children},n===null?(e=Ci(a,e),e.ref=t.ref,t.child=e,e.return=t,t=e):(e=Lt(n.child,a),e.ref=t.ref,t.child=e,e.return=t,t=e),t;case 22:return hf(n,t,e);case 24:return Ge(t),a=$n(Xn),n===null?(l=fr(),l===null&&(l=zn,i=cr(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),t.memoizedState={parent:a,cache:l},hr(t),ue(t,Xn,l)):((n.lanes&e)!==0&&(pr(n,t),rl(t,null,null,e),ol()),l=n.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ue(t,Xn,a)):(a=i.cache,ue(t,Xn,a),a!==l.cache&&ur(t,[Xn],e,!0))),Jn(n,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Ft(n){n.flags|=4}function Of(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Rd(t)){if(t=Tt.current,t!==null&&((pn&4194048)===pn?Ht!==null:(pn&62914560)!==pn&&(pn&536870912)===0||t!==Ht))throw ll=dr,ls;n.flags|=8192}}function qi(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Iu():536870912,n.lanes|=t,Ea|=t)}function pl(n,t){if(!yn)switch(n.tailMode){case"hidden":t=n.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function qn(n){var t=n.alternate!==null&&n.alternate.child===n.child,e=0,a=0;if(t)for(var l=n.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=a,n.childLanes=e,t}function ep(n,t,e){var a=t.pendingProps;switch(lr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qn(t),null;case 1:return qn(t),null;case 3:return e=t.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(Xn),le(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(n===null||n.child===null)&&(Fa(t)?Ft(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ic())),qn(t),null;case 26:return e=t.memoizedState,n===null?(Ft(t),e!==null?(qn(t),Of(t,e)):(qn(t),t.flags&=-16777217)):e?e!==n.memoizedState?(Ft(t),qn(t),Of(t,e)):(qn(t),t.flags&=-16777217):(n.memoizedProps!==a&&Ft(t),qn(t),t.flags&=-16777217),null;case 27:Zl(t),e=en.current;var l=t.type;if(n!==null&&t.stateNode!=null)n.memoizedProps!==a&&Ft(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return qn(t),null}n=J.current,Fa(t)?Fc(t):(n=Od(l,a,e),t.stateNode=n,Ft(t))}return qn(t),null;case 5:if(Zl(t),e=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==a&&Ft(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return qn(t),null}if(n=J.current,Fa(t))Fc(t);else{switch(l=Ki(en.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?l.createElement(e,{is:a.is}):l.createElement(e)}}n[Fn]=t,n[at]=a;n:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break n;for(;l.sibling===null;){if(l.return===null||l.return===t)break n;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=n;n:switch(Wn(n,e,a),e){case"button":case"input":case"select":case"textarea":n=!!a.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Ft(t)}}return qn(t),t.flags&=-16777217,null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==a&&Ft(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(n=en.current,Fa(t)){if(n=t.stateNode,e=t.memoizedProps,a=null,l=tt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}n[Fn]=t,n=!!(n.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||vd(n.nodeValue,e)),n||je(t)}else n=Ki(n).createTextNode(a),n[Fn]=t,t.stateNode=n}return qn(t),null;case 13:if(a=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=Fa(t),a!==null&&a.dehydrated!==null){if(n===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Fn]=t}else $a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qn(t),l=!1}else l=Ic(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=e,t;if(e=a!==null,n=n!==null&&n.memoizedState!==null,e){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return e!==n&&e&&(t.child.flags|=8192),qi(t,t.updateQueue),qn(t),null;case 4:return le(),n===null&&bu(t.stateNode.containerInfo),qn(t),null;case 10:return Kt(t.type),qn(t),null;case 19:if(G(Gn),l=t.memoizedState,l===null)return qn(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)pl(l,!1);else{if(Hn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=zi(n),i!==null){for(t.flags|=128,pl(l,!1),n=i.updateQueue,t.updateQueue=n,qi(t,n),t.subtreeFlags=0,n=e,e=t.child;e!==null;)Pc(e,n),e=e.sibling;return j(Gn,Gn.current&1|2),t.child}n=n.sibling}l.tail!==null&&qt()>wi&&(t.flags|=128,a=!0,pl(l,!1),t.lanes=4194304)}else{if(!a)if(n=zi(i),n!==null){if(t.flags|=128,a=!0,n=n.updateQueue,t.updateQueue=n,qi(t,n),pl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!yn)return qn(t),null}else 2*qt()-l.renderingStartTime>wi&&e!==536870912&&(t.flags|=128,a=!0,pl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=qt(),t.sibling=null,n=Gn.current,j(Gn,a?n&1|2:n&1),t):(qn(t),null);case 22:case 23:return Pt(t),gr(),a=t.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(qn(t),t.subtreeFlags&6&&(t.flags|=8192)):qn(t),e=t.updateQueue,e!==null&&qi(t,e.retryQueue),e=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),n!==null&&G(Le),null;case 24:return e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Kt(Xn),qn(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ap(n,t){switch(lr(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Kt(Xn),le(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return Zl(t),null;case 13:if(Pt(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(u(340));$a()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return G(Gn),null;case 4:return le(),null;case 10:return Kt(t.type),null;case 22:case 23:return Pt(t),gr(),n!==null&&G(Le),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return Kt(Xn),null;case 25:return null;default:return null}}function _f(n,t){switch(lr(t),t.tag){case 3:Kt(Xn),le();break;case 26:case 27:case 5:Zl(t);break;case 4:le();break;case 13:Pt(t);break;case 19:G(Gn);break;case 10:Kt(t.type);break;case 22:case 23:Pt(t),gr(),n!==null&&G(Le);break;case 24:Kt(Xn)}}function vl(n,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var l=a.next;e=l;do{if((e.tag&n)===n){a=void 0;var i=e.create,r=e.inst;a=i(),r.destroy=a}e=e.next}while(e!==l)}}catch(c){Mn(t,t.return,c)}}function ve(n,t,e){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&n)===n){var r=a.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,l=t;var d=e,O=c;try{O()}catch(U){Mn(l,d,U)}}}a=a.next}while(a!==i)}}catch(U){Mn(t,t.return,U)}}function Tf(n){var t=n.updateQueue;if(t!==null){var e=n.stateNode;try{ss(t,e)}catch(a){Mn(n,n.return,a)}}}function Ef(n,t,e){e.props=Ze(n.type,n.memoizedProps),e.state=n.memoizedState;try{e.componentWillUnmount()}catch(a){Mn(n,t,a)}}function bl(n,t){try{var e=n.ref;if(e!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof e=="function"?n.refCleanup=e(a):e.current=a}}catch(l){Mn(n,t,l)}}function wt(n,t){var e=n.ref,a=n.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(l){Mn(n,t,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){Mn(n,t,l)}else e.current=null}function Af(n){var t=n.type,e=n.memoizedProps,a=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break n;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(l){Mn(n,n.return,l)}}function Vr(n,t,e){try{var a=n.stateNode;Tp(a,n.type,e,t),a[at]=t}catch(l){Mn(n,n.return,l)}}function Mf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&_e(n.type)||n.tag===4}function Kr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Mf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&_e(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jr(n,t,e){var a=n.tag;if(a===5||a===6)n=n.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(n,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(n),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Vi));else if(a!==4&&(a===27&&_e(n.type)&&(e=n.stateNode,t=null),n=n.child,n!==null))for(Jr(n,t,e),n=n.sibling;n!==null;)Jr(n,t,e),n=n.sibling}function ki(n,t,e){var a=n.tag;if(a===5||a===6)n=n.stateNode,t?e.insertBefore(n,t):e.appendChild(n);else if(a!==4&&(a===27&&_e(n.type)&&(e=n.stateNode),n=n.child,n!==null))for(ki(n,t,e),n=n.sibling;n!==null;)ki(n,t,e),n=n.sibling}function Df(n){var t=n.stateNode,e=n.memoizedProps;try{for(var a=n.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Wn(t,a,e),t[Fn]=n,t[at]=e}catch(i){Mn(n,n.return,i)}}var $t=!1,Bn=!1,Pr=!1,zf=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function lp(n,t){if(n=n.containerInfo,yu=Ii,n=Yc(n),Ko(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break n}var r=0,c=-1,d=-1,O=0,U=0,k=n,E=null;t:for(;;){for(var A;k!==e||l!==0&&k.nodeType!==3||(c=r+l),k!==i||a!==0&&k.nodeType!==3||(d=r+a),k.nodeType===3&&(r+=k.nodeValue.length),(A=k.firstChild)!==null;)E=k,k=A;for(;;){if(k===n)break t;if(E===e&&++O===l&&(c=r),E===i&&++U===a&&(d=r),(A=k.nextSibling)!==null)break;k=E,E=k.parentNode}k=A}e=c===-1||d===-1?null:{start:c,end:d}}else e=null}e=e||{start:0,end:0}}else e=null;for(xu={focusedElem:n,selectionRange:e},Ii=!1,Vn=t;Vn!==null;)if(t=Vn,n=t.child,(t.subtreeFlags&1024)!==0&&n!==null)n.return=t,Vn=n;else for(;Vn!==null;){switch(t=Vn,i=t.alternate,n=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,e=t,l=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var nn=Ze(e.type,l,e.elementType===e.type);n=a.getSnapshotBeforeUpdate(nn,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(W){Mn(e,e.return,W)}}break;case 3:if((n&1024)!==0){if(n=t.stateNode.containerInfo,e=n.nodeType,e===9)_u(n);else if(e===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":_u(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=t.sibling,n!==null){n.return=t.return,Vn=n;break}Vn=t.return}}function Rf(n,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:be(n,e),a&4&&vl(5,e);break;case 1:if(be(n,e),a&4)if(n=e.stateNode,t===null)try{n.componentDidMount()}catch(r){Mn(e,e.return,r)}else{var l=Ze(e.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(l,t,n.__reactInternalSnapshotBeforeUpdate)}catch(r){Mn(e,e.return,r)}}a&64&&Tf(e),a&512&&bl(e,e.return);break;case 3:if(be(n,e),a&64&&(n=e.updateQueue,n!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{ss(n,t)}catch(r){Mn(e,e.return,r)}}break;case 27:t===null&&a&4&&Df(e);case 26:case 5:be(n,e),t===null&&a&4&&Af(e),a&512&&bl(e,e.return);break;case 12:be(n,e);break;case 13:be(n,e),a&4&&Cf(n,e),a&64&&(n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(e=hp.bind(null,e),Np(n,e))));break;case 22:if(a=e.memoizedState!==null||$t,!a){t=t!==null&&t.memoizedState!==null||Bn,l=$t;var i=Bn;$t=a,(Bn=t)&&!i?me(n,e,(e.subtreeFlags&8772)!==0):be(n,e),$t=l,Bn=i}break;case 30:break;default:be(n,e)}}function Nf(n){var t=n.alternate;t!==null&&(n.alternate=null,Nf(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&Do(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Un=null,ot=!1;function It(n,t,e){for(e=e.child;e!==null;)Uf(n,t,e),e=e.sibling}function Uf(n,t,e){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(wa,e)}catch{}switch(e.tag){case 26:Bn||wt(e,t),It(n,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Bn||wt(e,t);var a=Un,l=ot;_e(e.type)&&(Un=e.stateNode,ot=!1),It(n,t,e),El(e.stateNode),Un=a,ot=l;break;case 5:Bn||wt(e,t);case 6:if(a=Un,l=ot,Un=null,It(n,t,e),Un=a,ot=l,Un!==null)if(ot)try{(Un.nodeType===9?Un.body:Un.nodeName==="HTML"?Un.ownerDocument.body:Un).removeChild(e.stateNode)}catch(i){Mn(e,t,i)}else try{Un.removeChild(e.stateNode)}catch(i){Mn(e,t,i)}break;case 18:Un!==null&&(ot?(n=Un,xd(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.stateNode),Cl(n)):xd(Un,e.stateNode));break;case 4:a=Un,l=ot,Un=e.stateNode.containerInfo,ot=!0,It(n,t,e),Un=a,ot=l;break;case 0:case 11:case 14:case 15:Bn||ve(2,e,t),Bn||ve(4,e,t),It(n,t,e);break;case 1:Bn||(wt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Ef(e,t,a)),It(n,t,e);break;case 21:It(n,t,e);break;case 22:Bn=(a=Bn)||e.memoizedState!==null,It(n,t,e),Bn=a;break;default:It(n,t,e)}}function Cf(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Cl(n)}catch(e){Mn(t,t.return,e)}}function ip(n){switch(n.tag){case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new zf),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new zf),t;default:throw Error(u(435,n.tag))}}function Wr(n,t){var e=ip(n);t.forEach(function(a){var l=pp.bind(null,n,a);e.has(a)||(e.add(a),a.then(l,l))})}function dt(n,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a],i=n,r=t,c=r;n:for(;c!==null;){switch(c.tag){case 27:if(_e(c.type)){Un=c.stateNode,ot=!1;break n}break;case 5:Un=c.stateNode,ot=!1;break n;case 3:case 4:Un=c.stateNode.containerInfo,ot=!0;break n}c=c.return}if(Un===null)throw Error(u(160));Uf(i,r,l),Un=null,ot=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)qf(t,n),t=t.sibling}var zt=null;function qf(n,t){var e=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:dt(t,n),ht(n),a&4&&(ve(3,n,n.return),vl(3,n),ve(5,n,n.return));break;case 1:dt(t,n),ht(n),a&512&&(Bn||e===null||wt(e,e.return)),a&64&&$t&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(e=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var l=zt;if(dt(t,n),ht(n),a&512&&(Bn||e===null||wt(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=n.memoizedState,e===null)if(a===null)if(n.stateNode===null){n:{a=n.type,e=n.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[ja]||i[Fn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Wn(i,a,e),i[Fn]=n,Qn(i),a=i;break n;case"link":var r=Dd("link","href",l).get(a+(e.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){r.splice(c,1);break t}}i=l.createElement(a),Wn(i,a,e),l.head.appendChild(i);break;case"meta":if(r=Dd("meta","content",l).get(a+(e.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){r.splice(c,1);break t}}i=l.createElement(a),Wn(i,a,e),l.head.appendChild(i);break;default:throw Error(u(468,a))}i[Fn]=n,Qn(i),a=i}n.stateNode=a}else zd(l,n.type,n.stateNode);else n.stateNode=Md(l,a,n.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?zd(l,n.type,n.stateNode):Md(l,a,n.memoizedProps)):a===null&&n.stateNode!==null&&Vr(n,n.memoizedProps,e.memoizedProps)}break;case 27:dt(t,n),ht(n),a&512&&(Bn||e===null||wt(e,e.return)),e!==null&&a&4&&Vr(n,n.memoizedProps,e.memoizedProps);break;case 5:if(dt(t,n),ht(n),a&512&&(Bn||e===null||wt(e,e.return)),n.flags&32){l=n.stateNode;try{aa(l,"")}catch(A){Mn(n,n.return,A)}}a&4&&n.stateNode!=null&&(l=n.memoizedProps,Vr(n,l,e!==null?e.memoizedProps:l)),a&1024&&(Pr=!0);break;case 6:if(dt(t,n),ht(n),a&4){if(n.stateNode===null)throw Error(u(162));a=n.memoizedProps,e=n.stateNode;try{e.nodeValue=a}catch(A){Mn(n,n.return,A)}}break;case 3:if(Wi=null,l=zt,zt=Ji(t.containerInfo),dt(t,n),zt=l,ht(n),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(A){Mn(n,n.return,A)}Pr&&(Pr=!1,kf(n));break;case 4:a=zt,zt=Ji(n.stateNode.containerInfo),dt(t,n),ht(n),zt=a;break;case 12:dt(t,n),ht(n);break;case 13:dt(t,n),ht(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(eu=qt()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Wr(n,a)));break;case 22:l=n.memoizedState!==null;var d=e!==null&&e.memoizedState!==null,O=$t,U=Bn;if($t=O||l,Bn=U||d,dt(t,n),Bn=U,$t=O,ht(n),a&8192)n:for(t=n.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(e===null||d||$t||Bn||Ve(n)),e=null,t=n;;){if(t.tag===5||t.tag===26){if(e===null){d=e=t;try{if(i=d.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=d.stateNode;var k=d.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null;c.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(A){Mn(d,d.return,A)}}}else if(t.tag===6){if(e===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(A){Mn(d,d.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===n)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break n;for(;t.sibling===null;){if(t.return===null||t.return===n)break n;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=n.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,Wr(n,e))));break;case 19:dt(t,n),ht(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Wr(n,a)));break;case 30:break;case 21:break;default:dt(t,n),ht(n)}}function ht(n){var t=n.flags;if(t&2){try{for(var e,a=n.return;a!==null;){if(Mf(a)){e=a;break}a=a.return}if(e==null)throw Error(u(160));switch(e.tag){case 27:var l=e.stateNode,i=Kr(n);ki(n,i,l);break;case 5:var r=e.stateNode;e.flags&32&&(aa(r,""),e.flags&=-33);var c=Kr(n);ki(n,c,r);break;case 3:case 4:var d=e.stateNode.containerInfo,O=Kr(n);Jr(n,O,d);break;default:throw Error(u(161))}}catch(U){Mn(n,n.return,U)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function kf(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;kf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),n=n.sibling}}function be(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Rf(n,t.alternate,t),t=t.sibling}function Ve(n){for(n=n.child;n!==null;){var t=n;switch(t.tag){case 0:case 11:case 14:case 15:ve(4,t,t.return),Ve(t);break;case 1:wt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Ef(t,t.return,e),Ve(t);break;case 27:El(t.stateNode);case 26:case 5:wt(t,t.return),Ve(t);break;case 22:t.memoizedState===null&&Ve(t);break;case 30:Ve(t);break;default:Ve(t)}n=n.sibling}}function me(n,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=n,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:me(l,i,e),vl(4,i);break;case 1:if(me(l,i,e),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(O){Mn(a,a.return,O)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)cs(d[l],c)}catch(O){Mn(a,a.return,O)}}e&&r&64&&Tf(i),bl(i,i.return);break;case 27:Df(i);case 26:case 5:me(l,i,e),e&&a===null&&r&4&&Af(i),bl(i,i.return);break;case 12:me(l,i,e);break;case 13:me(l,i,e),e&&r&4&&Cf(l,i);break;case 22:i.memoizedState===null&&me(l,i,e),bl(i,i.return);break;case 30:break;default:me(l,i,e)}t=t.sibling}}function Fr(n,t){var e=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(n!=null&&n.refCount++,e!=null&&tl(e))}function $r(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&tl(n))}function Bt(n,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hf(n,t,e,a),t=t.sibling}function Hf(n,t,e,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(n,t,e,a),l&2048&&vl(9,t);break;case 1:Bt(n,t,e,a);break;case 3:Bt(n,t,e,a),l&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&tl(n)));break;case 12:if(l&2048){Bt(n,t,e,a),n=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(d){Mn(t,t.return,d)}}else Bt(n,t,e,a);break;case 13:Bt(n,t,e,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Bt(n,t,e,a):ml(n,t):i._visibility&2?Bt(n,t,e,a):(i._visibility|=2,Oa(n,t,e,a,(t.subtreeFlags&10256)!==0)),l&2048&&Fr(r,t);break;case 24:Bt(n,t,e,a),l&2048&&$r(t.alternate,t);break;default:Bt(n,t,e,a)}}function Oa(n,t,e,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=n,r=t,c=e,d=a,O=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(i,r,c,d,l),vl(8,r);break;case 23:break;case 22:var U=r.stateNode;r.memoizedState!==null?U._visibility&2?Oa(i,r,c,d,l):ml(i,r):(U._visibility|=2,Oa(i,r,c,d,l)),l&&O&2048&&Fr(r.alternate,r);break;case 24:Oa(i,r,c,d,l),l&&O&2048&&$r(r.alternate,r);break;default:Oa(i,r,c,d,l)}t=t.sibling}}function ml(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=n,a=t,l=a.flags;switch(a.tag){case 22:ml(e,a),l&2048&&Fr(a.alternate,a);break;case 24:ml(e,a),l&2048&&$r(a.alternate,a);break;default:ml(e,a)}t=t.sibling}}var gl=8192;function _a(n){if(n.subtreeFlags&gl)for(n=n.child;n!==null;)wf(n),n=n.sibling}function wf(n){switch(n.tag){case 26:_a(n),n.flags&gl&&n.memoizedState!==null&&Qp(zt,n.memoizedState,n.memoizedProps);break;case 5:_a(n);break;case 3:case 4:var t=zt;zt=Ji(n.stateNode.containerInfo),_a(n),zt=t;break;case 22:n.memoizedState===null&&(t=n.alternate,t!==null&&t.memoizedState!==null?(t=gl,gl=16777216,_a(n),gl=t):_a(n));break;default:_a(n)}}function Bf(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function yl(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Vn=a,jf(a,n)}Bf(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yf(n),n=n.sibling}function Yf(n){switch(n.tag){case 0:case 11:case 15:yl(n),n.flags&2048&&ve(9,n,n.return);break;case 3:yl(n);break;case 12:yl(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,Hi(n)):yl(n);break;default:yl(n)}}function Hi(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Vn=a,jf(a,n)}Bf(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:ve(8,t,t.return),Hi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,Hi(t));break;default:Hi(t)}n=n.sibling}}function jf(n,t){for(;Vn!==null;){var e=Vn;switch(e.tag){case 0:case 11:case 15:ve(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:tl(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Vn=a;else n:for(e=n;Vn!==null;){a=Vn;var l=a.sibling,i=a.return;if(Nf(a),a===e){Vn=null;break n}if(l!==null){l.return=i,Vn=l;break n}Vn=i}}}var op={getCacheForType:function(n){var t=$n(Xn),e=t.data.get(n);return e===void 0&&(e=n(),t.data.set(n,e)),e}},rp=typeof WeakMap=="function"?WeakMap:Map,Sn=0,zn=null,sn=null,pn=0,On=0,pt=null,ge=!1,Ta=!1,Ir=!1,ne=0,Hn=0,ye=0,Ke=0,nu=0,Et=0,Ea=0,xl=null,rt=null,tu=!1,eu=0,wi=1/0,Bi=null,xe=null,Pn=0,Se=null,Aa=null,Ma=0,au=0,lu=null,Xf=null,Sl=0,iu=null;function vt(){if((Sn&2)!==0&&pn!==0)return pn&-pn;if(T.T!==null){var n=pa;return n!==0?n:du()}return ec()}function Gf(){Et===0&&(Et=(pn&536870912)===0||yn?$u():536870912);var n=Tt.current;return n!==null&&(n.flags|=32),Et}function bt(n,t,e){(n===zn&&(On===2||On===9)||n.cancelPendingCommit!==null)&&(Da(n,0),Oe(n,pn,Et,!1)),Ya(n,e),((Sn&2)===0||n!==zn)&&(n===zn&&((Sn&2)===0&&(Ke|=e),Hn===4&&Oe(n,pn,Et,!1)),Yt(n))}function Lf(n,t,e){if((Sn&6)!==0)throw Error(u(327));var a=!e&&(t&124)===0&&(t&n.expiredLanes)===0||Ba(n,t),l=a?sp(n,t):uu(n,t,!0),i=a;do{if(l===0){Ta&&!a&&Oe(n,t,0,!1);break}else{if(e=n.current.alternate,i&&!up(e)){l=uu(n,t,!1),i=!1;continue}if(l===2){if(i=t,n.errorRecoveryDisabledLanes&i)var r=0;else r=n.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;n:{var c=n;l=xl;var d=c.current.memoizedState.isDehydrated;if(d&&(Da(c,r).flags|=256),r=uu(c,r,!1),r!==2){if(Ir&&!d){c.errorRecoveryDisabledLanes|=i,Ke|=i,l=4;break n}i=rt,rt=l,i!==null&&(rt===null?rt=i:rt.push.apply(rt,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){Da(n,0),Oe(n,t,0,!0);break}n:{switch(a=n,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Oe(a,t,Et,!ge);break n;case 2:rt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=eu+300-qt(),10<l)){if(Oe(a,t,Et,!ge),Pl(a,0,!0)!==0)break n;a.timeoutHandle=gd(Qf.bind(null,a,e,rt,Bi,tu,t,Et,Ke,Ea,ge,i,2,-0,0),l);break n}Qf(a,e,rt,Bi,tu,t,Et,Ke,Ea,ge,i,0,-0,0)}}break}while(!0);Yt(n)}function Qf(n,t,e,a,l,i,r,c,d,O,U,k,E,A){if(n.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(Dl={stylesheets:null,count:0,unsuspend:Lp},wf(t),k=Zp(),k!==null)){n.cancelPendingCommit=k(Ff.bind(null,n,t,i,e,a,l,r,c,d,U,1,E,A)),Oe(n,i,r,!O);return}Ff(n,t,i,e,a,l,r,c,d)}function up(n){for(var t=n;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var l=e[a],i=l.getSnapshot;l=l.value;try{if(!st(i(),l))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oe(n,t,e,a){t&=~nu,t&=~Ke,n.suspendedLanes|=t,n.pingedLanes&=~t,a&&(n.warmLanes|=t),a=n.expirationTimes;for(var l=t;0<l;){var i=31-ct(l),r=1<<i;a[i]=-1,l&=~r}e!==0&&nc(n,e,t)}function Yi(){return(Sn&6)===0?(Ol(0),!1):!0}function ou(){if(sn!==null){if(On===0)var n=sn.return;else n=sn,Vt=Xe=null,_r(n),xa=null,dl=0,n=sn;for(;n!==null;)_f(n.alternate,n),n=n.return;sn=null}}function Da(n,t){var e=n.timeoutHandle;e!==-1&&(n.timeoutHandle=-1,Ap(e)),e=n.cancelPendingCommit,e!==null&&(n.cancelPendingCommit=null,e()),ou(),zn=n,sn=e=Lt(n.current,null),pn=t,On=0,pt=null,ge=!1,Ta=Ba(n,t),Ir=!1,Ea=Et=nu=Ke=ye=Hn=0,rt=xl=null,tu=!1,(t&8)!==0&&(t|=t&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=t;0<a;){var l=31-ct(a),i=1<<l;t|=n[l],a&=~i}return ne=t,ri(),e}function Zf(n,t){on=null,T.H=Ai,t===al||t===bi?(t=rs(),On=3):t===ls?(t=rs(),On=4):On=t===cf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,sn===null&&(Hn=1,Ni(n,xt(t,n.current)))}function Vf(){var n=T.H;return T.H=Ai,n===null?Ai:n}function Kf(){var n=T.A;return T.A=op,n}function ru(){Hn=4,ge||(pn&4194048)!==pn&&Tt.current!==null||(Ta=!0),(ye&134217727)===0&&(Ke&134217727)===0||zn===null||Oe(zn,pn,Et,!1)}function uu(n,t,e){var a=Sn;Sn|=2;var l=Vf(),i=Kf();(zn!==n||pn!==t)&&(Bi=null,Da(n,t)),t=!1;var r=Hn;n:do try{if(On!==0&&sn!==null){var c=sn,d=pt;switch(On){case 8:ou(),r=6;break n;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var O=On;if(On=0,pt=null,za(n,c,d,O),e&&Ta){r=0;break n}break;default:O=On,On=0,pt=null,za(n,c,d,O)}}cp(),r=Hn;break}catch(U){Zf(n,U)}while(!0);return t&&n.shellSuspendCounter++,Vt=Xe=null,Sn=a,T.H=l,T.A=i,sn===null&&(zn=null,pn=0,ri()),r}function cp(){for(;sn!==null;)Jf(sn)}function sp(n,t){var e=Sn;Sn|=2;var a=Vf(),l=Kf();zn!==n||pn!==t?(Bi=null,wi=qt()+500,Da(n,t)):Ta=Ba(n,t);n:do try{if(On!==0&&sn!==null){t=sn;var i=pt;t:switch(On){case 1:On=0,pt=null,za(n,t,i,1);break;case 2:case 9:if(is(i)){On=0,pt=null,Pf(t);break}t=function(){On!==2&&On!==9||zn!==n||(On=7),Yt(n)},i.then(t,t);break n;case 3:On=7;break n;case 4:On=5;break n;case 7:is(i)?(On=0,pt=null,Pf(t)):(On=0,pt=null,za(n,t,i,7));break;case 5:var r=null;switch(sn.tag){case 26:r=sn.memoizedState;case 5:case 27:var c=sn;if(!r||Rd(r)){On=0,pt=null;var d=c.sibling;if(d!==null)sn=d;else{var O=c.return;O!==null?(sn=O,ji(O)):sn=null}break t}}On=0,pt=null,za(n,t,i,5);break;case 6:On=0,pt=null,za(n,t,i,6);break;case 8:ou(),Hn=6;break n;default:throw Error(u(462))}}fp();break}catch(U){Zf(n,U)}while(!0);return Vt=Xe=null,T.H=a,T.A=l,Sn=e,sn!==null?0:(zn=null,pn=0,ri(),Hn)}function fp(){for(;sn!==null&&!C0();)Jf(sn)}function Jf(n){var t=Sf(n.alternate,n,ne);n.memoizedProps=n.pendingProps,t===null?ji(n):sn=t}function Pf(n){var t=n,e=t.alternate;switch(t.tag){case 15:case 0:t=vf(e,t,t.pendingProps,t.type,void 0,pn);break;case 11:t=vf(e,t,t.pendingProps,t.type.render,t.ref,pn);break;case 5:_r(t);default:_f(e,t),t=sn=Pc(t,ne),t=Sf(e,t,ne)}n.memoizedProps=n.pendingProps,t===null?ji(n):sn=t}function za(n,t,e,a){Vt=Xe=null,_r(t),xa=null,dl=0;var l=t.return;try{if(np(n,l,t,e,pn)){Hn=1,Ni(n,xt(e,n.current)),sn=null;return}}catch(i){if(l!==null)throw sn=l,i;Hn=1,Ni(n,xt(e,n.current)),sn=null;return}t.flags&32768?(yn||a===1?n=!0:Ta||(pn&536870912)!==0?n=!1:(ge=n=!0,(a===2||a===9||a===3||a===6)&&(a=Tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Wf(t,n)):ji(t)}function ji(n){var t=n;do{if((t.flags&32768)!==0){Wf(t,ge);return}n=t.return;var e=ep(t.alternate,t,ne);if(e!==null){sn=e;return}if(t=t.sibling,t!==null){sn=t;return}sn=t=n}while(t!==null);Hn===0&&(Hn=5)}function Wf(n,t){do{var e=ap(n.alternate,n);if(e!==null){e.flags&=32767,sn=e;return}if(e=n.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(n=n.sibling,n!==null)){sn=n;return}sn=n=e}while(n!==null);Hn=6,sn=null}function Ff(n,t,e,a,l,i,r,c,d){n.cancelPendingCommit=null;do Xi();while(Pn!==0);if((Sn&6)!==0)throw Error(u(327));if(t!==null){if(t===n.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=$o,L0(n,e,i,r,c,d),n===zn&&(sn=zn=null,pn=0),Aa=t,Se=n,Ma=e,au=i,lu=l,Xf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,vp(Vl,function(){return ed(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,l=m.p,m.p=2,r=Sn,Sn|=4;try{lp(n,t,e)}finally{Sn=r,m.p=l,T.T=a}}Pn=1,$f(),If(),nd()}}function $f(){if(Pn===1){Pn=0;var n=Se,t=Aa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=T.T,T.T=null;var a=m.p;m.p=2;var l=Sn;Sn|=4;try{qf(t,n);var i=xu,r=Yc(n.containerInfo),c=i.focusedElem,d=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&Bc(c.ownerDocument.documentElement,c)){if(d!==null&&Ko(c)){var O=d.start,U=d.end;if(U===void 0&&(U=O),"selectionStart"in c)c.selectionStart=O,c.selectionEnd=Math.min(U,c.value.length);else{var k=c.ownerDocument||document,E=k&&k.defaultView||window;if(E.getSelection){var A=E.getSelection(),nn=c.textContent.length,W=Math.min(d.start,nn),En=d.end===void 0?W:Math.min(d.end,nn);!A.extend&&W>En&&(r=En,En=W,W=r);var g=wc(c,W),v=wc(c,En);if(g&&v&&(A.rangeCount!==1||A.anchorNode!==g.node||A.anchorOffset!==g.offset||A.focusNode!==v.node||A.focusOffset!==v.offset)){var S=k.createRange();S.setStart(g.node,g.offset),A.removeAllRanges(),W>En?(A.addRange(S),A.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),A.addRange(S))}}}}for(k=[],A=c;A=A.parentNode;)A.nodeType===1&&k.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<k.length;c++){var q=k[c];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Ii=!!yu,xu=yu=null}finally{Sn=l,m.p=a,T.T=e}}n.current=t,Pn=2}}function If(){if(Pn===2){Pn=0;var n=Se,t=Aa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=T.T,T.T=null;var a=m.p;m.p=2;var l=Sn;Sn|=4;try{Rf(n,t.alternate,t)}finally{Sn=l,m.p=a,T.T=e}}Pn=3}}function nd(){if(Pn===4||Pn===3){Pn=0,q0();var n=Se,t=Aa,e=Ma,a=Xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pn=5:(Pn=0,Aa=Se=null,td(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(xe=null),Ao(e),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(wa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,l=m.p,m.p=2,T.T=null;try{for(var i=n.onRecoverableError,r=0;r<a.length;r++){var c=a[r];i(c.value,{componentStack:c.stack})}}finally{T.T=t,m.p=l}}(Ma&3)!==0&&Xi(),Yt(n),l=n.pendingLanes,(e&4194090)!==0&&(l&42)!==0?n===iu?Sl++:(Sl=0,iu=n):Sl=0,Ol(0)}}function td(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,tl(t)))}function Xi(n){return $f(),If(),nd(),ed()}function ed(){if(Pn!==5)return!1;var n=Se,t=au;au=0;var e=Ao(Ma),a=T.T,l=m.p;try{m.p=32>e?32:e,T.T=null,e=lu,lu=null;var i=Se,r=Ma;if(Pn=0,Aa=Se=null,Ma=0,(Sn&6)!==0)throw Error(u(331));var c=Sn;if(Sn|=4,Yf(i.current),Hf(i,i.current,r,e),Sn=c,Ol(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(wa,i)}catch{}return!0}finally{m.p=l,T.T=a,td(n,t)}}function ad(n,t,e){t=xt(e,t),t=wr(n.stateNode,t,2),n=fe(n,t,2),n!==null&&(Ya(n,2),Yt(n))}function Mn(n,t,e){if(n.tag===3)ad(n,n,e);else for(;t!==null;){if(t.tag===3){ad(t,n,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xe===null||!xe.has(a))){n=xt(e,n),e=rf(2),a=fe(t,e,2),a!==null&&(uf(e,a,t,n),Ya(a,2),Yt(a));break}}t=t.return}}function cu(n,t,e){var a=n.pingCache;if(a===null){a=n.pingCache=new rp;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(e)||(Ir=!0,l.add(e),n=dp.bind(null,n,t,e),t.then(n,n))}function dp(n,t,e){var a=n.pingCache;a!==null&&a.delete(t),n.pingedLanes|=n.suspendedLanes&e,n.warmLanes&=~e,zn===n&&(pn&e)===e&&(Hn===4||Hn===3&&(pn&62914560)===pn&&300>qt()-eu?(Sn&2)===0&&Da(n,0):nu|=e,Ea===pn&&(Ea=0)),Yt(n)}function ld(n,t){t===0&&(t=Iu()),n=sa(n,t),n!==null&&(Ya(n,t),Yt(n))}function hp(n){var t=n.memoizedState,e=0;t!==null&&(e=t.retryLane),ld(n,e)}function pp(n,t){var e=0;switch(n.tag){case 13:var a=n.stateNode,l=n.memoizedState;l!==null&&(e=l.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),ld(n,e)}function vp(n,t){return Oo(n,t)}var Gi=null,Ra=null,su=!1,Li=!1,fu=!1,Je=0;function Yt(n){n!==Ra&&n.next===null&&(Ra===null?Gi=Ra=n:Ra=Ra.next=n),Li=!0,su||(su=!0,mp())}function Ol(n,t){if(!fu&&Li){fu=!0;do for(var e=!1,a=Gi;a!==null;){if(n!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var r=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ct(42|n)+1)-1,i&=l&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,ud(a,i))}else i=pn,i=Pl(a,a===zn?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ba(a,i)||(e=!0,ud(a,i));a=a.next}while(e);fu=!1}}function bp(){id()}function id(){Li=su=!1;var n=0;Je!==0&&(Ep()&&(n=Je),Je=0);for(var t=qt(),e=null,a=Gi;a!==null;){var l=a.next,i=od(a,t);i===0?(a.next=null,e===null?Gi=l:e.next=l,l===null&&(Ra=e)):(e=a,(n!==0||(i&3)!==0)&&(Li=!0)),a=l}Ol(n)}function od(n,t){for(var e=n.suspendedLanes,a=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var r=31-ct(i),c=1<<r,d=l[r];d===-1?((c&e)===0||(c&a)!==0)&&(l[r]=G0(c,t)):d<=t&&(n.expiredLanes|=c),i&=~c}if(t=zn,e=pn,e=Pl(n,n===t?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,e===0||n===t&&(On===2||On===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&_o(a),n.callbackNode=null,n.callbackPriority=0;if((e&3)===0||Ba(n,e)){if(t=e&-e,t===n.callbackPriority)return t;switch(a!==null&&_o(a),Ao(e)){case 2:case 8:e=Wu;break;case 32:e=Vl;break;case 268435456:e=Fu;break;default:e=Vl}return a=rd.bind(null,n),e=Oo(e,a),n.callbackPriority=t,n.callbackNode=e,t}return a!==null&&a!==null&&_o(a),n.callbackPriority=2,n.callbackNode=null,2}function rd(n,t){if(Pn!==0&&Pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var e=n.callbackNode;if(Xi()&&n.callbackNode!==e)return null;var a=pn;return a=Pl(n,n===zn?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Lf(n,a,t),od(n,qt()),n.callbackNode!=null&&n.callbackNode===e?rd.bind(null,n):null)}function ud(n,t){if(Xi())return null;Lf(n,t,!0)}function mp(){Mp(function(){(Sn&6)!==0?Oo(Pu,bp):id()})}function du(){return Je===0&&(Je=$u()),Je}function cd(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ni(""+n)}function sd(n,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,n.id&&e.setAttribute("form",n.id),t.parentNode.insertBefore(e,t),n=new FormData(n),e.parentNode.removeChild(e),n}function gp(n,t,e,a,l){if(t==="submit"&&e&&e.stateNode===l){var i=cd((l[at]||null).action),r=a.submitter;r&&(t=(t=r[at]||null)?cd(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new li("action","action",null,a,l);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Je!==0){var d=r?sd(l,r):new FormData(l);Ur(e,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=r?sd(l,r):new FormData(l),Ur(e,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var hu=0;hu<Fo.length;hu++){var pu=Fo[hu],yp=pu.toLowerCase(),xp=pu[0].toUpperCase()+pu.slice(1);Dt(yp,"on"+xp)}Dt(Gc,"onAnimationEnd"),Dt(Lc,"onAnimationIteration"),Dt(Qc,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(wh,"onTransitionRun"),Dt(Bh,"onTransitionStart"),Dt(Yh,"onTransitionCancel"),Dt(Zc,"onTransitionEnd"),na("onMouseEnter",["mouseout","mouseover"]),na("onMouseLeave",["mouseout","mouseover"]),na("onPointerEnter",["pointerout","pointerover"]),na("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function fd(n,t){t=(t&4)!==0;for(var e=0;e<n.length;e++){var a=n[e],l=a.event;a=a.listeners;n:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var c=a[r],d=c.instance,O=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break n;i=c,l.currentTarget=O;try{i(l)}catch(U){Ri(U)}l.currentTarget=null,i=d}else for(r=0;r<a.length;r++){if(c=a[r],d=c.instance,O=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break n;i=c,l.currentTarget=O;try{i(l)}catch(U){Ri(U)}l.currentTarget=null,i=d}}}}function fn(n,t){var e=t[Mo];e===void 0&&(e=t[Mo]=new Set);var a=n+"__bubble";e.has(a)||(dd(t,n,2,!1),e.add(a))}function vu(n,t,e){var a=0;t&&(a|=4),dd(e,n,a,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function bu(n){if(!n[Qi]){n[Qi]=!0,lc.forEach(function(e){e!=="selectionchange"&&(Sp.has(e)||vu(e,!1,n),vu(e,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,vu("selectionchange",!1,t))}}function dd(n,t,e,a){switch(Hd(t)){case 2:var l=Jp;break;case 8:l=Pp;break;default:l=Ru}e=l.bind(null,t,e,n),l=void 0,!Bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?n.addEventListener(t,e,{capture:!0,passive:l}):n.addEventListener(t,e,!0):l!==void 0?n.addEventListener(t,e,{passive:l}):n.addEventListener(t,e,!1)}function mu(n,t,e,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)n:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var c=a.stateNode.containerInfo;if(c===l)break;if(r===4)for(r=a.return;r!==null;){var d=r.tag;if((d===3||d===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;c!==null;){if(r=Fe(c),r===null)return;if(d=r.tag,d===5||d===6||d===26||d===27){a=i=r;continue n}c=c.parentNode}}a=a.return}gc(function(){var O=i,U=Ho(e),k=[];n:{var E=Vc.get(n);if(E!==void 0){var A=li,nn=n;switch(n){case"keypress":if(ei(e)===0)break n;case"keydown":case"keyup":A=vh;break;case"focusin":nn="focus",A=Go;break;case"focusout":nn="blur",A=Go;break;case"beforeblur":case"afterblur":A=Go;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=gh;break;case Gc:case Lc:case Qc:A=oh;break;case Zc:A=xh;break;case"scroll":case"scrollend":A=th;break;case"wheel":A=Oh;break;case"copy":case"cut":case"paste":A=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=_c;break;case"toggle":case"beforetoggle":A=Th}var W=(t&4)!==0,En=!W&&(n==="scroll"||n==="scrollend"),g=W?E!==null?E+"Capture":null:E;W=[];for(var v=O,S;v!==null;){var q=v;if(S=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||S===null||g===null||(q=Ga(v,g),q!=null&&W.push(Tl(v,q,S))),En)break;v=v.return}0<W.length&&(E=new A(E,nn,null,e,U),k.push({event:E,listeners:W}))}}if((t&7)===0){n:{if(E=n==="mouseover"||n==="pointerover",A=n==="mouseout"||n==="pointerout",E&&e!==ko&&(nn=e.relatedTarget||e.fromElement)&&(Fe(nn)||nn[We]))break n;if((A||E)&&(E=U.window===U?U:(E=U.ownerDocument)?E.defaultView||E.parentWindow:window,A?(nn=e.relatedTarget||e.toElement,A=O,nn=nn?Fe(nn):null,nn!==null&&(En=_(nn),W=nn.tag,nn!==En||W!==5&&W!==27&&W!==6)&&(nn=null)):(A=null,nn=O),A!==nn)){if(W=Sc,q="onMouseLeave",g="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(W=_c,q="onPointerLeave",g="onPointerEnter",v="pointer"),En=A==null?E:Xa(A),S=nn==null?E:Xa(nn),E=new W(q,v+"leave",A,e,U),E.target=En,E.relatedTarget=S,q=null,Fe(U)===O&&(W=new W(g,v+"enter",nn,e,U),W.target=S,W.relatedTarget=En,q=W),En=q,A&&nn)t:{for(W=A,g=nn,v=0,S=W;S;S=Na(S))v++;for(S=0,q=g;q;q=Na(q))S++;for(;0<v-S;)W=Na(W),v--;for(;0<S-v;)g=Na(g),S--;for(;v--;){if(W===g||g!==null&&W===g.alternate)break t;W=Na(W),g=Na(g)}W=null}else W=null;A!==null&&hd(k,E,A,W,!1),nn!==null&&En!==null&&hd(k,En,nn,W,!0)}}n:{if(E=O?Xa(O):window,A=E.nodeName&&E.nodeName.toLowerCase(),A==="select"||A==="input"&&E.type==="file")var Z=Nc;else if(zc(E))if(Uc)Z=qh;else{Z=Uh;var un=Nh}else A=E.nodeName,!A||A.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?O&&qo(O.elementType)&&(Z=Nc):Z=Ch;if(Z&&(Z=Z(n,O))){Rc(k,Z,e,U);break n}un&&un(n,E,O),n==="focusout"&&O&&E.type==="number"&&O.memoizedProps.value!=null&&Co(E,"number",E.value)}switch(un=O?Xa(O):window,n){case"focusin":(zc(un)||un.contentEditable==="true")&&(ra=un,Jo=O,Wa=null);break;case"focusout":Wa=Jo=ra=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,jc(k,e,U);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":jc(k,e,U)}var K;if(Qo)n:{switch(n){case"compositionstart":var $="onCompositionStart";break n;case"compositionend":$="onCompositionEnd";break n;case"compositionupdate":$="onCompositionUpdate";break n}$=void 0}else oa?Mc(n,e)&&($="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&($="onCompositionStart");$&&(Tc&&e.locale!=="ko"&&(oa||$!=="onCompositionStart"?$==="onCompositionEnd"&&oa&&(K=yc()):(re=U,Yo="value"in re?re.value:re.textContent,oa=!0)),un=Zi(O,$),0<un.length&&($=new Oc($,n,null,e,U),k.push({event:$,listeners:un}),K?$.data=K:(K=Dc(e),K!==null&&($.data=K)))),(K=Ah?Mh(n,e):Dh(n,e))&&($=Zi(O,"onBeforeInput"),0<$.length&&(un=new Oc("onBeforeInput","beforeinput",null,e,U),k.push({event:un,listeners:$}),un.data=K)),gp(k,n,O,e,U)}fd(k,t)})}function Tl(n,t,e){return{instance:n,listener:t,currentTarget:e}}function Zi(n,t){for(var e=t+"Capture",a=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Ga(n,e),l!=null&&a.unshift(Tl(n,l,i)),l=Ga(n,t),l!=null&&a.push(Tl(n,l,i))),n.tag===3)return a;n=n.return}return[]}function Na(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function hd(n,t,e,a,l){for(var i=t._reactName,r=[];e!==null&&e!==a;){var c=e,d=c.alternate,O=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||O===null||(d=O,l?(O=Ga(e,i),O!=null&&r.unshift(Tl(e,O,d))):l||(O=Ga(e,i),O!=null&&r.push(Tl(e,O,d)))),e=e.return}r.length!==0&&n.push({event:t,listeners:r})}var Op=/\r\n?/g,_p=/\u0000|\uFFFD/g;function pd(n){return(typeof n=="string"?n:""+n).replace(Op,`
`).replace(_p,"")}function vd(n,t){return t=pd(t),pd(n)===t}function Vi(){}function Tn(n,t,e,a,l,i){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||aa(n,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&aa(n,""+a);break;case"className":Fl(n,"class",a);break;case"tabIndex":Fl(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(n,e,a);break;case"style":bc(n,a,i);break;case"data":if(t!=="object"){Fl(n,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){n.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(e);break}a=ni(""+a),n.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&Tn(n,t,"name",l.name,l,null),Tn(n,t,"formEncType",l.formEncType,l,null),Tn(n,t,"formMethod",l.formMethod,l,null),Tn(n,t,"formTarget",l.formTarget,l,null)):(Tn(n,t,"encType",l.encType,l,null),Tn(n,t,"method",l.method,l,null),Tn(n,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(e);break}a=ni(""+a),n.setAttribute(e,a);break;case"onClick":a!=null&&(n.onclick=Vi);break;case"onScroll":a!=null&&fn("scroll",n);break;case"onScrollEnd":a!=null&&fn("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(u(60));n.innerHTML=e}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}e=ni(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(e,""+a):n.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(e,""):n.removeAttribute(e);break;case"capture":case"download":a===!0?n.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(e,a):n.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(e,a):n.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(e):n.setAttribute(e,a);break;case"popover":fn("beforetoggle",n),fn("toggle",n),Wl(n,"popover",a);break;case"xlinkActuate":Xt(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wl(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=I0.get(e)||e,Wl(n,e,a))}}function gu(n,t,e,a,l,i){switch(e){case"style":bc(n,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(u(60));n.innerHTML=e}}break;case"children":typeof a=="string"?aa(n,a):(typeof a=="number"||typeof a=="bigint")&&aa(n,""+a);break;case"onScroll":a!=null&&fn("scroll",n);break;case"onScrollEnd":a!=null&&fn("scrollend",n);break;case"onClick":a!=null&&(n.onclick=Vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(e))n:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),t=e.slice(2,l?e.length-7:void 0),i=n[at]||null,i=i!=null?i[e]:null,typeof i=="function"&&n.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(e in n?n[e]=null:n.hasAttribute(e)&&n.removeAttribute(e)),n.addEventListener(t,a,l);break n}e in n?n[e]=a:a===!0?n.setAttribute(e,""):Wl(n,e,a)}}}function Wn(n,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fn("error",n),fn("load",n);var a=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var r=e[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Tn(n,t,i,r,e,null)}}l&&Tn(n,t,"srcSet",e.srcSet,e,null),a&&Tn(n,t,"src",e.src,e,null);return;case"input":fn("invalid",n);var c=i=r=l=null,d=null,O=null;for(a in e)if(e.hasOwnProperty(a)){var U=e[a];if(U!=null)switch(a){case"name":l=U;break;case"type":r=U;break;case"checked":d=U;break;case"defaultChecked":O=U;break;case"value":i=U;break;case"defaultValue":c=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:Tn(n,t,a,U,e,null)}}dc(n,i,c,d,O,r,l,!1),$l(n);return;case"select":fn("invalid",n),a=r=i=null;for(l in e)if(e.hasOwnProperty(l)&&(c=e[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":a=c;default:Tn(n,t,l,c,e,null)}t=i,e=r,n.multiple=!!a,t!=null?ea(n,!!a,t,!1):e!=null&&ea(n,!!a,e,!0);return;case"textarea":fn("invalid",n),i=l=a=null;for(r in e)if(e.hasOwnProperty(r)&&(c=e[r],c!=null))switch(r){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Tn(n,t,r,c,e,null)}pc(n,a,l,i),$l(n);return;case"option":for(d in e)if(e.hasOwnProperty(d)&&(a=e[d],a!=null))switch(d){case"selected":n.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Tn(n,t,d,a,e,null)}return;case"dialog":fn("beforetoggle",n),fn("toggle",n),fn("cancel",n),fn("close",n);break;case"iframe":case"object":fn("load",n);break;case"video":case"audio":for(a=0;a<_l.length;a++)fn(_l[a],n);break;case"image":fn("error",n),fn("load",n);break;case"details":fn("toggle",n);break;case"embed":case"source":case"link":fn("error",n),fn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in e)if(e.hasOwnProperty(O)&&(a=e[O],a!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Tn(n,t,O,a,e,null)}return;default:if(qo(t)){for(U in e)e.hasOwnProperty(U)&&(a=e[U],a!==void 0&&gu(n,t,U,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&Tn(n,t,c,a,e,null))}function Tp(n,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,c=null,d=null,O=null,U=null;for(A in e){var k=e[A];if(e.hasOwnProperty(A)&&k!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":d=k;default:a.hasOwnProperty(A)||Tn(n,t,A,null,a,k)}}for(var E in a){var A=a[E];if(k=e[E],a.hasOwnProperty(E)&&(A!=null||k!=null))switch(E){case"type":i=A;break;case"name":l=A;break;case"checked":O=A;break;case"defaultChecked":U=A;break;case"value":r=A;break;case"defaultValue":c=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(u(137,t));break;default:A!==k&&Tn(n,t,E,A,a,k)}}Uo(n,r,c,d,O,U,i,l);return;case"select":A=r=c=E=null;for(i in e)if(d=e[i],e.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":A=d;default:a.hasOwnProperty(i)||Tn(n,t,i,null,a,d)}for(l in a)if(i=a[l],d=e[l],a.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":E=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==d&&Tn(n,t,l,i,a,d)}t=c,e=r,a=A,E!=null?ea(n,!!e,E,!1):!!a!=!!e&&(t!=null?ea(n,!!e,t,!0):ea(n,!!e,e?[]:"",!1));return;case"textarea":A=E=null;for(c in e)if(l=e[c],e.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Tn(n,t,c,null,a,l)}for(r in a)if(l=a[r],i=e[r],a.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":E=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&Tn(n,t,r,l,a,i)}hc(n,E,A);return;case"option":for(var nn in e)if(E=e[nn],e.hasOwnProperty(nn)&&E!=null&&!a.hasOwnProperty(nn))switch(nn){case"selected":n.selected=!1;break;default:Tn(n,t,nn,null,a,E)}for(d in a)if(E=a[d],A=e[d],a.hasOwnProperty(d)&&E!==A&&(E!=null||A!=null))switch(d){case"selected":n.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:Tn(n,t,d,E,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in e)E=e[W],e.hasOwnProperty(W)&&E!=null&&!a.hasOwnProperty(W)&&Tn(n,t,W,null,a,E);for(O in a)if(E=a[O],A=e[O],a.hasOwnProperty(O)&&E!==A&&(E!=null||A!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:Tn(n,t,O,E,a,A)}return;default:if(qo(t)){for(var En in e)E=e[En],e.hasOwnProperty(En)&&E!==void 0&&!a.hasOwnProperty(En)&&gu(n,t,En,void 0,a,E);for(U in a)E=a[U],A=e[U],!a.hasOwnProperty(U)||E===A||E===void 0&&A===void 0||gu(n,t,U,E,a,A);return}}for(var g in e)E=e[g],e.hasOwnProperty(g)&&E!=null&&!a.hasOwnProperty(g)&&Tn(n,t,g,null,a,E);for(k in a)E=a[k],A=e[k],!a.hasOwnProperty(k)||E===A||E==null&&A==null||Tn(n,t,k,E,a,A)}var yu=null,xu=null;function Ki(n){return n.nodeType===9?n:n.ownerDocument}function bd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function md(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function Su(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ou=null;function Ep(){var n=window.event;return n&&n.type==="popstate"?n===Ou?!1:(Ou=n,!0):(Ou=null,!1)}var gd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,yd=typeof Promise=="function"?Promise:void 0,Mp=typeof queueMicrotask=="function"?queueMicrotask:typeof yd<"u"?function(n){return yd.resolve(null).then(n).catch(Dp)}:gd;function Dp(n){setTimeout(function(){throw n})}function _e(n){return n==="head"}function xd(n,t){var e=t,a=0,l=0;do{var i=e.nextSibling;if(n.removeChild(e),i&&i.nodeType===8)if(e=i.data,e==="/$"){if(0<a&&8>a){e=a;var r=n.ownerDocument;if(e&1&&El(r.documentElement),e&2&&El(r.body),e&4)for(e=r.head,El(e),r=e.firstChild;r;){var c=r.nextSibling,d=r.nodeName;r[ja]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||e.removeChild(r),r=c}}if(l===0){n.removeChild(i),Cl(t);return}l--}else e==="$"||e==="$?"||e==="$!"?l++:a=e.charCodeAt(0)-48;else a=0;e=i}while(e);Cl(t)}function _u(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":_u(e),Do(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}n.removeChild(e)}}function zp(n,t,e,a){for(;n.nodeType===1;){var l=e;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[ja])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=Rt(n.nextSibling),n===null)break}return null}function Rp(n,t,e){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Rt(n.nextSibling),n===null))return null;return n}function Tu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Np(n,t){var e=n.ownerDocument;if(n.data!=="$?"||e.readyState==="complete")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function Rt(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return n}var Eu=null;function Sd(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(t===0)return n;t--}else e==="/$"&&t++}n=n.previousSibling}return null}function Od(n,t,e){switch(t=Ki(e),n){case"html":if(n=t.documentElement,!n)throw Error(u(452));return n;case"head":if(n=t.head,!n)throw Error(u(453));return n;case"body":if(n=t.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function El(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Do(n)}var At=new Map,_d=new Set;function Ji(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var te=m.d;m.d={f:Up,r:Cp,D:qp,C:kp,L:Hp,m:wp,X:Yp,S:Bp,M:jp};function Up(){var n=te.f(),t=Yi();return n||t}function Cp(n){var t=$e(n);t!==null&&t.tag===5&&t.type==="form"?Gs(t):te.r(n)}var Ua=typeof document>"u"?null:document;function Td(n,t,e){var a=Ua;if(a&&typeof t=="string"&&t){var l=yt(t);l='link[rel="'+n+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),_d.has(l)||(_d.add(l),n={rel:n,crossOrigin:e,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Wn(t,"link",n),Qn(t),a.head.appendChild(t)))}}function qp(n){te.D(n),Td("dns-prefetch",n,null)}function kp(n,t){te.C(n,t),Td("preconnect",n,t)}function Hp(n,t,e){te.L(n,t,e);var a=Ua;if(a&&n&&t){var l='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+yt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+yt(e.imageSizes)+'"]')):l+='[href="'+yt(n)+'"]';var i=l;switch(t){case"style":i=Ca(n);break;case"script":i=qa(n)}At.has(i)||(n=x({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:n,as:t},e),At.set(i,n),a.querySelector(l)!==null||t==="style"&&a.querySelector(Al(i))||t==="script"&&a.querySelector(Ml(i))||(t=a.createElement("link"),Wn(t,"link",n),Qn(t),a.head.appendChild(t)))}}function wp(n,t){te.m(n,t);var e=Ua;if(e&&n){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+yt(a)+'"][href="'+yt(n)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=qa(n)}if(!At.has(i)&&(n=x({rel:"modulepreload",href:n},t),At.set(i,n),e.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Ml(i)))return}a=e.createElement("link"),Wn(a,"link",n),Qn(a),e.head.appendChild(a)}}}function Bp(n,t,e){te.S(n,t,e);var a=Ua;if(a&&n){var l=Ie(a).hoistableStyles,i=Ca(n);t=t||"default";var r=l.get(i);if(!r){var c={loading:0,preload:null};if(r=a.querySelector(Al(i)))c.loading=5;else{n=x({rel:"stylesheet",href:n,"data-precedence":t},e),(e=At.get(i))&&Au(n,e);var d=r=a.createElement("link");Qn(d),Wn(d,"link",n),d._p=new Promise(function(O,U){d.onload=O,d.onerror=U}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Pi(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:c},l.set(i,r)}}}function Yp(n,t){te.X(n,t);var e=Ua;if(e&&n){var a=Ie(e).hoistableScripts,l=qa(n),i=a.get(l);i||(i=e.querySelector(Ml(l)),i||(n=x({src:n,async:!0},t),(t=At.get(l))&&Mu(n,t),i=e.createElement("script"),Qn(i),Wn(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function jp(n,t){te.M(n,t);var e=Ua;if(e&&n){var a=Ie(e).hoistableScripts,l=qa(n),i=a.get(l);i||(i=e.querySelector(Ml(l)),i||(n=x({src:n,async:!0,type:"module"},t),(t=At.get(l))&&Mu(n,t),i=e.createElement("script"),Qn(i),Wn(i,"link",n),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Ed(n,t,e,a){var l=(l=en.current)?Ji(l):null;if(!l)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ca(e.href),e=Ie(l).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){n=Ca(e.href);var i=Ie(l).hoistableStyles,r=i.get(n);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,r),(i=l.querySelector(Al(n)))&&!i._p&&(r.instance=i,r.state.loading=5),At.has(n)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},At.set(n,e),i||Xp(l,n,e,r.state))),t&&a===null)throw Error(u(528,""));return r}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qa(e),e=Ie(l).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function Ca(n){return'href="'+yt(n)+'"'}function Al(n){return'link[rel="stylesheet"]['+n+"]"}function Ad(n){return x({},n,{"data-precedence":n.precedence,precedence:null})}function Xp(n,t,e,a){n.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=n.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Wn(t,"link",e),Qn(t),n.head.appendChild(t))}function qa(n){return'[src="'+yt(n)+'"]'}function Ml(n){return"script[async]"+n}function Md(n,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=n.querySelector('style[data-href~="'+yt(e.href)+'"]');if(a)return t.instance=a,Qn(a),a;var l=x({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Qn(a),Wn(a,"style",l),Pi(a,e.precedence,n),t.instance=a;case"stylesheet":l=Ca(e.href);var i=n.querySelector(Al(l));if(i)return t.state.loading|=4,t.instance=i,Qn(i),i;a=Ad(e),(l=At.get(l))&&Au(a,l),i=(n.ownerDocument||n).createElement("link"),Qn(i);var r=i;return r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Wn(i,"link",a),t.state.loading|=4,Pi(i,e.precedence,n),t.instance=i;case"script":return i=qa(e.src),(l=n.querySelector(Ml(i)))?(t.instance=l,Qn(l),l):(a=e,(l=At.get(i))&&(a=x({},e),Mu(a,l)),n=n.ownerDocument||n,l=n.createElement("script"),Qn(l),Wn(l,"link",a),n.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Pi(a,e.precedence,n));return t.instance}function Pi(n,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,r=0;r<a.length;r++){var c=a[r];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(n,t.firstChild))}function Au(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function Mu(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Wi=null;function Dd(n,t,e){if(Wi===null){var a=new Map,l=Wi=new Map;l.set(e,a)}else l=Wi,a=l.get(e),a||(a=new Map,l.set(e,a));if(a.has(n))return a;for(a.set(n,null),e=e.getElementsByTagName(n),l=0;l<e.length;l++){var i=e[l];if(!(i[ja]||i[Fn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=n+r;var c=a.get(r);c?c.push(i):a.set(r,[i])}}return a}function zd(n,t,e){n=n.ownerDocument||n,n.head.insertBefore(e,t==="title"?n.querySelector("head > title"):null)}function Gp(n,t,e){if(e===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Dl=null;function Lp(){}function Qp(n,t,e){if(Dl===null)throw Error(u(475));var a=Dl;if(t.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Ca(e.href),i=n.querySelector(Al(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(a.count++,a=Fi.bind(a),n.then(a,a)),t.state.loading|=4,t.instance=i,Qn(i);return}i=n.ownerDocument||n,e=Ad(e),(l=At.get(l))&&Au(e,l),i=i.createElement("link"),Qn(i);var r=i;r._p=new Promise(function(c,d){r.onload=c,r.onerror=d}),Wn(i,"link",e),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Fi.bind(a),n.addEventListener("load",t),n.addEventListener("error",t))}}function Zp(){if(Dl===null)throw Error(u(475));var n=Dl;return n.stylesheets&&n.count===0&&Du(n,n.stylesheets),0<n.count?function(t){var e=setTimeout(function(){if(n.stylesheets&&Du(n,n.stylesheets),n.unsuspend){var a=n.unsuspend;n.unsuspend=null,a()}},6e4);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(e)}}:null}function Fi(){if(this.count--,this.count===0){if(this.stylesheets)Du(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $i=null;function Du(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$i=new Map,t.forEach(Vp,n),$i=null,Fi.call(n))}function Vp(n,t){if(!(t.state.loading&4)){var e=$i.get(n);if(e)var a=e.get(null);else{e=new Map,$i.set(n,e);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(e.set(r.dataset.precedence,r),a=r)}a&&e.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),i=e.get(r)||a,i===a&&e.set(null,l),e.set(r,l),this.count++,a=Fi.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),t.state.loading|=4}}var zl={$$typeof:an,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Kp(n,t,e,a,l,i,r,c){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Nd(n,t,e,a,l,i,r,c,d,O,U,k){return n=new Kp(n,t,e,r,c,d,O,k),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),n.current=i,i.stateNode=n,t=cr(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:t},hr(i),n}function Ud(n){return n?(n=fa,n):fa}function Cd(n,t,e,a,l,i){l=Ud(l),a.context===null?a.context=l:a.pendingContext=l,a=se(t),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=fe(n,a,t),e!==null&&(bt(e,n,t),il(e,n,t))}function qd(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<t?e:t}}function zu(n,t){qd(n,t),(n=n.alternate)&&qd(n,t)}function kd(n){if(n.tag===13){var t=sa(n,67108864);t!==null&&bt(t,n,67108864),zu(n,67108864)}}var Ii=!0;function Jp(n,t,e,a){var l=T.T;T.T=null;var i=m.p;try{m.p=2,Ru(n,t,e,a)}finally{m.p=i,T.T=l}}function Pp(n,t,e,a){var l=T.T;T.T=null;var i=m.p;try{m.p=8,Ru(n,t,e,a)}finally{m.p=i,T.T=l}}function Ru(n,t,e,a){if(Ii){var l=Nu(a);if(l===null)mu(n,t,a,no,e),wd(n,a);else if(Fp(l,n,t,e,a))a.stopPropagation();else if(wd(n,a),t&4&&-1<Wp.indexOf(n)){for(;l!==null;){var i=$e(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Ne(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var d=1<<31-ct(r);c.entanglements[1]|=d,r&=~d}Yt(i),(Sn&6)===0&&(wi=qt()+500,Ol(0))}}break;case 13:c=sa(i,2),c!==null&&bt(c,i,2),Yi(),zu(i,2)}if(i=Nu(a),i===null&&mu(n,t,a,no,e),i===l)break;l=i}l!==null&&a.stopPropagation()}else mu(n,t,a,null,e)}}function Nu(n){return n=Ho(n),Uu(n)}var no=null;function Uu(n){if(no=null,n=Fe(n),n!==null){var t=_(n);if(t===null)n=null;else{var e=t.tag;if(e===13){if(n=C(t),n!==null)return n;n=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return no=n,null}function Hd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case Pu:return 2;case Wu:return 8;case Vl:case H0:return 32;case Fu:return 268435456;default:return 32}default:return 32}}var Cu=!1,Te=null,Ee=null,Ae=null,Rl=new Map,Nl=new Map,Me=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wd(n,t){switch(n){case"focusin":case"focusout":Te=null;break;case"dragenter":case"dragleave":Ee=null;break;case"mouseover":case"mouseout":Ae=null;break;case"pointerover":case"pointerout":Rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(t.pointerId)}}function Ul(n,t,e,a,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=$e(t),t!==null&&kd(t)),n):(n.eventSystemFlags|=a,t=n.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),n)}function Fp(n,t,e,a,l){switch(t){case"focusin":return Te=Ul(Te,n,t,e,a,l),!0;case"dragenter":return Ee=Ul(Ee,n,t,e,a,l),!0;case"mouseover":return Ae=Ul(Ae,n,t,e,a,l),!0;case"pointerover":var i=l.pointerId;return Rl.set(i,Ul(Rl.get(i)||null,n,t,e,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Nl.set(i,Ul(Nl.get(i)||null,n,t,e,a,l)),!0}return!1}function Bd(n){var t=Fe(n.target);if(t!==null){var e=_(t);if(e!==null){if(t=e.tag,t===13){if(t=C(e),t!==null){n.blockedOn=t,Q0(n.priority,function(){if(e.tag===13){var a=vt();a=Eo(a);var l=sa(e,a);l!==null&&bt(l,e,a),zu(e,a)}});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function to(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var e=Nu(n.nativeEvent);if(e===null){e=n.nativeEvent;var a=new e.constructor(e.type,e);ko=a,e.target.dispatchEvent(a),ko=null}else return t=$e(e),t!==null&&kd(t),n.blockedOn=e,!1;t.shift()}return!0}function Yd(n,t,e){to(n)&&e.delete(t)}function $p(){Cu=!1,Te!==null&&to(Te)&&(Te=null),Ee!==null&&to(Ee)&&(Ee=null),Ae!==null&&to(Ae)&&(Ae=null),Rl.forEach(Yd),Nl.forEach(Yd)}function eo(n,t){n.blockedOn===t&&(n.blockedOn=null,Cu||(Cu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$p)))}var ao=null;function jd(n){ao!==n&&(ao=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ao===n&&(ao=null);for(var t=0;t<n.length;t+=3){var e=n[t],a=n[t+1],l=n[t+2];if(typeof a!="function"){if(Uu(a||e)===null)continue;break}var i=$e(e);i!==null&&(n.splice(t,3),t-=3,Ur(i,{pending:!0,data:l,method:e.method,action:a},a,l))}}))}function Cl(n){function t(d){return eo(d,n)}Te!==null&&eo(Te,n),Ee!==null&&eo(Ee,n),Ae!==null&&eo(Ae,n),Rl.forEach(t),Nl.forEach(t);for(var e=0;e<Me.length;e++){var a=Me[e];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Me.length&&(e=Me[0],e.blockedOn===null);)Bd(e),e.blockedOn===null&&Me.shift();if(e=(n.ownerDocument||n).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var l=e[a],i=e[a+1],r=l[at]||null;if(typeof i=="function")r||jd(e);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[at]||null)c=r.formAction;else if(Uu(l)!==null)continue}else c=r.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),jd(e)}}}function qu(n){this._internalRoot=n}lo.prototype.render=qu.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(u(409));var e=t.current,a=vt();Cd(e,a,n,t,null,null)},lo.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Cd(n.current,2,null,n,null,null),Yi(),t[We]=null}};function lo(n){this._internalRoot=n}lo.prototype.unstable_scheduleHydration=function(n){if(n){var t=ec();n={blockedOn:null,target:n,priority:t};for(var e=0;e<Me.length&&t!==0&&t<Me[e].priority;e++);Me.splice(e,0,n),e===0&&Bd(n)}};var Xd=s.version;if(Xd!=="19.1.0")throw Error(u(527,Xd,"19.1.0"));m.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=M(t),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var Ip={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{wa=io.inject(Ip),ut=io}catch{}}return kl.createRoot=function(n,t){if(!b(n))throw Error(u(299));var e=!1,a="",l=ef,i=af,r=lf,c=null;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(c=t.unstable_transitionCallbacks)),t=Nd(n,1,!1,null,null,e,a,l,i,r,c,null),n[We]=t.current,bu(n),new qu(t)},kl.hydrateRoot=function(n,t,e){if(!b(n))throw Error(u(299));var a=!1,l="",i=ef,r=af,c=lf,d=null,O=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks),e.formState!==void 0&&(O=e.formState)),t=Nd(n,1,!0,t,e??null,a,l,i,r,c,d,O),t.context=Ud(null),e=t.current,a=vt(),a=Eo(a),l=se(a),l.callback=null,fe(e,l,a),e=a,t.current.lanes=e,Ya(t,e),Yt(t),n[We]=t.current,bu(n),new lo(t)},kl.version="19.1.0",kl}var Fd;function cv(){if(Fd)return wu.exports;Fd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),wu.exports=uv(),wu.exports}var sv=cv();function fv(o){let s=document.getElementById("searchingHint");return s&&(s.style.display="block"),fetch(`https://keelungsightweb.onrender.com/SightAPI?zone=${o}`,{method:"GET"}).then(f=>{if(!f.ok)throw new Error("Network response was not ok");return s&&(s.style.display="none"),f.json()}).catch(f=>{window.alert("Error fetching data: "+f.message),s.innerHTML="搜尋失敗!"})}var oo={exports:{}},ze={},Xu={exports:{}},Gu,$d;function dv(){if($d)return Gu;$d=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Gu=o,Gu}var Lu,Id;function hv(){if(Id)return Lu;Id=1;var o=dv();function s(){}function f(){}return f.resetWarningCache=s,Lu=function(){function u(C,y,M,p,x,D){if(D!==o){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}u.isRequired=u;function b(){return u}var _={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:b,element:u,elementType:u,instanceOf:b,node:u,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:s};return _.PropTypes=_,_},Lu}var n0;function O0(){return n0||(n0=1,Xu.exports=hv()()),Xu.exports}var ro={exports:{}},Mt={},uo={exports:{}},t0;function _0(){return t0||(t0=1,function(o,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=x;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var f="none",u="contents",b=/^(input|select|textarea|button|object|iframe)$/;function _(D,w){return w.getPropertyValue("overflow")!=="visible"||D.scrollWidth<=0&&D.scrollHeight<=0}function C(D){var w=D.offsetWidth<=0&&D.offsetHeight<=0;if(w&&!D.innerHTML)return!0;try{var H=window.getComputedStyle(D),R=H.getPropertyValue("display");return w?R!==u&&_(D,H):R===f}catch{return console.warn("Failed to inspect element style"),!1}}function y(D){for(var w=D,H=D.getRootNode&&D.getRootNode();w&&w!==document.body;){if(H&&w===H&&(w=H.host.parentNode),C(w))return!1;w=w.parentNode}return!0}function M(D,w){var H=D.nodeName.toLowerCase(),R=b.test(H)&&!D.disabled||H==="a"&&D.href||w;return R&&y(D)}function p(D){var w=D.getAttribute("tabindex");w===null&&(w=void 0);var H=isNaN(w);return(H||w>=0)&&M(D,!H)}function x(D){var w=[].slice.call(D.querySelectorAll("*"),0).reduce(function(H,R){return H.concat(R.shadowRoot?x(R.shadowRoot):[R])},[]);return w.filter(p)}o.exports=s.default}(uo,uo.exports)),uo.exports}var e0;function pv(){if(e0)return Mt;e0=1,Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.resetState=C,Mt.log=y,Mt.handleBlur=M,Mt.handleFocus=p,Mt.markForFocusLater=x,Mt.returnFocus=D,Mt.popWithoutFocus=w,Mt.setupScopedFocus=H,Mt.teardownScopedFocus=R;var o=_0(),s=f(o);function f(z){return z&&z.__esModule?z:{default:z}}var u=[],b=null,_=!1;function C(){u=[]}function y(){}function M(){_=!0}function p(){if(_){if(_=!1,!b)return;setTimeout(function(){if(!b.contains(document.activeElement)){var z=(0,s.default)(b)[0]||b;z.focus()}},0)}}function x(){u.push(document.activeElement)}function D(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,L=null;try{u.length!==0&&(L=u.pop(),L.focus({preventScroll:z}));return}catch{console.warn(["You tried to return focus to",L,"but it is not in the DOM anymore"].join(" "))}}function w(){u.length>0&&u.pop()}function H(z){b=z,window.addEventListener?(window.addEventListener("blur",M,!1),document.addEventListener("focus",p,!0)):(window.attachEvent("onBlur",M),document.attachEvent("onFocus",p))}function R(){b=null,window.addEventListener?(window.removeEventListener("blur",M),document.removeEventListener("focus",p)):(window.detachEvent("onBlur",M),document.detachEvent("onFocus",p))}return Mt}var co={exports:{}},a0;function vv(){return a0||(a0=1,function(o,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=C;var f=_0(),u=b(f);function b(y){return y&&y.__esModule?y:{default:y}}function _(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return y.activeElement.shadowRoot?_(y.activeElement.shadowRoot):y.activeElement}function C(y,M){var p=(0,u.default)(y);if(!p.length){M.preventDefault();return}var x=void 0,D=M.shiftKey,w=p[0],H=p[p.length-1],R=_();if(y===R){if(!D)return;x=H}if(H===R&&!D&&(x=w),w===R&&D&&(x=H),x){M.preventDefault(),x.focus();return}var z=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=z!=null&&z[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var tn=p.indexOf(R);if(tn>-1&&(tn+=D?-1:1),x=p[tn],typeof x>"u"){M.preventDefault(),x=D?H:w,x.focus();return}M.preventDefault(),x.focus()}}o.exports=s.default}(co,co.exports)),co.exports}var Nt={},Qu,l0;function bv(){if(l0)return Qu;l0=1;var o=function(){};return Qu=o,Qu}var jt={},Zu={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/var i0;function mv(){return i0||(i0=1,function(o){(function(){var s=!!(typeof window<"u"&&window.document&&window.document.createElement),f={canUseDOM:s,canUseWorkers:typeof Worker<"u",canUseEventListeners:s&&!!(window.addEventListener||window.attachEvent),canUseViewport:s&&!!window.screen};o.exports?o.exports=f:window.ExecutionEnvironment=f})()}(Zu)),Zu.exports}var o0;function Ju(){if(o0)return jt;o0=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.canUseDOM=jt.SafeNodeList=jt.SafeHTMLCollection=void 0;var o=mv(),s=f(o);function f(_){return _&&_.__esModule?_:{default:_}}var u=s.default,b=u.canUseDOM?window.HTMLElement:{};return jt.SafeHTMLCollection=u.canUseDOM?window.HTMLCollection:{},jt.SafeNodeList=u.canUseDOM?window.NodeList:{},jt.canUseDOM=u.canUseDOM,jt.default=b,jt}var r0;function T0(){if(r0)return Nt;r0=1,Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.resetState=_,Nt.log=C,Nt.assertNodeList=y,Nt.setElement=M,Nt.validateElement=p,Nt.hide=x,Nt.show=D,Nt.documentNotReadyOrSSRTesting=w;var o=bv(),s=u(o),f=Ju();function u(H){return H&&H.__esModule?H:{default:H}}var b=null;function _(){b&&(b.removeAttribute?b.removeAttribute("aria-hidden"):b.length!=null?b.forEach(function(H){return H.removeAttribute("aria-hidden")}):document.querySelectorAll(b).forEach(function(H){return H.removeAttribute("aria-hidden")})),b=null}function C(){}function y(H,R){if(!H||!H.length)throw new Error("react-modal: No elements were found for selector "+R+".")}function M(H){var R=H;if(typeof R=="string"&&f.canUseDOM){var z=document.querySelectorAll(R);y(z,R),R=z}return b=R||b,b}function p(H){var R=H||b;return R?Array.isArray(R)||R instanceof HTMLCollection||R instanceof NodeList?R:[R]:((0,s.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function x(H){var R=!0,z=!1,L=void 0;try{for(var tn=p(H)[Symbol.iterator](),cn;!(R=(cn=tn.next()).done);R=!0){var an=cn.value;an.setAttribute("aria-hidden","true")}}catch(xn){z=!0,L=xn}finally{try{!R&&tn.return&&tn.return()}finally{if(z)throw L}}}function D(H){var R=!0,z=!1,L=void 0;try{for(var tn=p(H)[Symbol.iterator](),cn;!(R=(cn=tn.next()).done);R=!0){var an=cn.value;an.removeAttribute("aria-hidden")}}catch(xn){z=!0,L=xn}finally{try{!R&&tn.return&&tn.return()}finally{if(z)throw L}}}function w(){b=null}return Nt}var Pe={},u0;function gv(){if(u0)return Pe;u0=1,Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.resetState=u,Pe.log=b;var o={},s={};function f(p,x){p.classList.remove(x)}function u(){var p=document.getElementsByTagName("html")[0];for(var x in o)f(p,o[x]);var D=document.body;for(var w in s)f(D,s[w]);o={},s={}}function b(){}var _=function(x,D){return x[D]||(x[D]=0),x[D]+=1,D},C=function(x,D){return x[D]&&(x[D]-=1),D},y=function(x,D,w){w.forEach(function(H){_(D,H),x.add(H)})},M=function(x,D,w){w.forEach(function(H){C(D,H),D[H]===0&&x.remove(H)})};return Pe.add=function(x,D){return y(x.classList,x.nodeName.toLowerCase()=="html"?o:s,D.split(" "))},Pe.remove=function(x,D){return M(x.classList,x.nodeName.toLowerCase()=="html"?o:s,D.split(" "))},Pe}var ka={},c0;function E0(){if(c0)return ka;c0=1,Object.defineProperty(ka,"__esModule",{value:!0}),ka.log=u,ka.resetState=b;function o(_,C){if(!(_ instanceof C))throw new TypeError("Cannot call a class as a function")}var s=function _(){var C=this;o(this,_),this.register=function(y){C.openInstances.indexOf(y)===-1&&(C.openInstances.push(y),C.emit("register"))},this.deregister=function(y){var M=C.openInstances.indexOf(y);M!==-1&&(C.openInstances.splice(M,1),C.emit("deregister"))},this.subscribe=function(y){C.subscribers.push(y)},this.emit=function(y){C.subscribers.forEach(function(M){return M(y,C.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},f=new s;function u(){console.log("portalOpenInstances ----------"),console.log(f.openInstances.length),f.openInstances.forEach(function(_){return console.log(_)}),console.log("end portalOpenInstances ----------")}function b(){f=new s}return ka.default=f,ka}var Hl={},s0;function yv(){if(s0)return Hl;s0=1,Object.defineProperty(Hl,"__esModule",{value:!0}),Hl.resetState=C,Hl.log=y;var o=E0(),s=f(o);function f(x){return x&&x.__esModule?x:{default:x}}var u=void 0,b=void 0,_=[];function C(){for(var x=[u,b],D=0;D<x.length;D++){var w=x[D];w&&w.parentNode&&w.parentNode.removeChild(w)}u=b=null,_=[]}function y(){console.log("bodyTrap ----------"),console.log(_.length);for(var x=[u,b],D=0;D<x.length;D++){var w=x[D],H=w||{};console.log(H.nodeName,H.className,H.id)}console.log("edn bodyTrap ----------")}function M(){_.length!==0&&_[_.length-1].focusContent()}function p(x,D){!u&&!b&&(u=document.createElement("div"),u.setAttribute("data-react-modal-body-trap",""),u.style.position="absolute",u.style.opacity="0",u.setAttribute("tabindex","0"),u.addEventListener("focus",M),b=u.cloneNode(),b.addEventListener("focus",M)),_=D,_.length>0?(document.body.firstChild!==u&&document.body.insertBefore(u,document.body.firstChild),document.body.lastChild!==b&&document.body.appendChild(b)):(u.parentElement&&u.parentElement.removeChild(u),b.parentElement&&b.parentElement.removeChild(b))}return s.default.subscribe(p),Hl}var f0;function xv(){return f0||(f0=1,function(o,s){Object.defineProperty(s,"__esModule",{value:!0});var f=Object.assign||function(X){for(var Y=1;Y<arguments.length;Y++){var T=arguments[Y];for(var m in T)Object.prototype.hasOwnProperty.call(T,m)&&(X[m]=T[m])}return X},u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(X){return typeof X}:function(X){return X&&typeof Symbol=="function"&&X.constructor===Symbol&&X!==Symbol.prototype?"symbol":typeof X},b=function(){function X(Y,T){for(var m=0;m<T.length;m++){var B=T[m];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(Y,B.key,B)}}return function(Y,T,m){return T&&X(Y.prototype,T),m&&X(Y,m),Y}}(),_=jl(),C=O0(),y=I(C),M=pv(),p=xn(M),x=vv(),D=I(x),w=T0(),H=xn(w),R=gv(),z=xn(R),L=Ju(),tn=I(L),cn=E0(),an=I(cn);yv();function xn(X){if(X&&X.__esModule)return X;var Y={};if(X!=null)for(var T in X)Object.prototype.hasOwnProperty.call(X,T)&&(Y[T]=X[T]);return Y.default=X,Y}function I(X){return X&&X.__esModule?X:{default:X}}function mn(X,Y){if(!(X instanceof Y))throw new TypeError("Cannot call a class as a function")}function Dn(X,Y){if(!X)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Y&&(typeof Y=="object"||typeof Y=="function")?Y:X}function Rn(X,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Y);X.prototype=Object.create(Y&&Y.prototype,{constructor:{value:X,enumerable:!1,writable:!0,configurable:!0}}),Y&&(Object.setPrototypeOf?Object.setPrototypeOf(X,Y):X.__proto__=Y)}var gn={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},et=function(Y){return Y.code==="Tab"||Y.keyCode===9},F=function(Y){return Y.code==="Escape"||Y.keyCode===27},Q=0,rn=function(X){Rn(Y,X);function Y(T){mn(this,Y);var m=Dn(this,(Y.__proto__||Object.getPrototypeOf(Y)).call(this,T));return m.setOverlayRef=function(B){m.overlay=B,m.props.overlayRef&&m.props.overlayRef(B)},m.setContentRef=function(B){m.content=B,m.props.contentRef&&m.props.contentRef(B)},m.afterClose=function(){var B=m.props,P=B.appElement,h=B.ariaHideApp,N=B.htmlOpenClassName,G=B.bodyOpenClassName,j=B.parentSelector,J=j&&j().ownerDocument||document;G&&z.remove(J.body,G),N&&z.remove(J.getElementsByTagName("html")[0],N),h&&Q>0&&(Q-=1,Q===0&&H.show(P)),m.props.shouldFocusAfterRender&&(m.props.shouldReturnFocusAfterClose?(p.returnFocus(m.props.preventScroll),p.teardownScopedFocus()):p.popWithoutFocus()),m.props.onAfterClose&&m.props.onAfterClose(),an.default.deregister(m)},m.open=function(){m.beforeOpen(),m.state.afterOpen&&m.state.beforeClose?(clearTimeout(m.closeTimer),m.setState({beforeClose:!1})):(m.props.shouldFocusAfterRender&&(p.setupScopedFocus(m.node),p.markForFocusLater()),m.setState({isOpen:!0},function(){m.openAnimationFrame=requestAnimationFrame(function(){m.setState({afterOpen:!0}),m.props.isOpen&&m.props.onAfterOpen&&m.props.onAfterOpen({overlayEl:m.overlay,contentEl:m.content})})}))},m.close=function(){m.props.closeTimeoutMS>0?m.closeWithTimeout():m.closeWithoutTimeout()},m.focusContent=function(){return m.content&&!m.contentHasFocus()&&m.content.focus({preventScroll:!0})},m.closeWithTimeout=function(){var B=Date.now()+m.props.closeTimeoutMS;m.setState({beforeClose:!0,closesAt:B},function(){m.closeTimer=setTimeout(m.closeWithoutTimeout,m.state.closesAt-Date.now())})},m.closeWithoutTimeout=function(){m.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},m.afterClose)},m.handleKeyDown=function(B){et(B)&&(0,D.default)(m.content,B),m.props.shouldCloseOnEsc&&F(B)&&(B.stopPropagation(),m.requestClose(B))},m.handleOverlayOnClick=function(B){m.shouldClose===null&&(m.shouldClose=!0),m.shouldClose&&m.props.shouldCloseOnOverlayClick&&(m.ownerHandlesClose()?m.requestClose(B):m.focusContent()),m.shouldClose=null},m.handleContentOnMouseUp=function(){m.shouldClose=!1},m.handleOverlayOnMouseDown=function(B){!m.props.shouldCloseOnOverlayClick&&B.target==m.overlay&&B.preventDefault()},m.handleContentOnClick=function(){m.shouldClose=!1},m.handleContentOnMouseDown=function(){m.shouldClose=!1},m.requestClose=function(B){return m.ownerHandlesClose()&&m.props.onRequestClose(B)},m.ownerHandlesClose=function(){return m.props.onRequestClose},m.shouldBeClosed=function(){return!m.state.isOpen&&!m.state.beforeClose},m.contentHasFocus=function(){return document.activeElement===m.content||m.content.contains(document.activeElement)},m.buildClassName=function(B,P){var h=(typeof P>"u"?"undefined":u(P))==="object"?P:{base:gn[B],afterOpen:gn[B]+"--after-open",beforeClose:gn[B]+"--before-close"},N=h.base;return m.state.afterOpen&&(N=N+" "+h.afterOpen),m.state.beforeClose&&(N=N+" "+h.beforeClose),typeof P=="string"&&P?N+" "+P:N},m.attributesFromObject=function(B,P){return Object.keys(P).reduce(function(h,N){return h[B+"-"+N]=P[N],h},{})},m.state={afterOpen:!1,beforeClose:!1},m.shouldClose=null,m.moveFromContentToOverlay=null,m}return b(Y,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(m,B){this.props.isOpen&&!m.isOpen?this.open():!this.props.isOpen&&m.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!B.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var m=this.props,B=m.appElement,P=m.ariaHideApp,h=m.htmlOpenClassName,N=m.bodyOpenClassName,G=m.parentSelector,j=G&&G().ownerDocument||document;N&&z.add(j.body,N),h&&z.add(j.getElementsByTagName("html")[0],h),P&&(Q+=1,H.hide(B)),an.default.register(this)}},{key:"render",value:function(){var m=this.props,B=m.id,P=m.className,h=m.overlayClassName,N=m.defaultStyles,G=m.children,j=P?{}:N.content,J=h?{}:N.overlay;if(this.shouldBeClosed())return null;var hn={ref:this.setOverlayRef,className:this.buildClassName("overlay",h),style:f({},J,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},en=f({id:B,ref:this.setContentRef,style:f({},j,this.props.style.content),className:this.buildClassName("content",P),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",f({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),nt=this.props.contentElement(en,G);return this.props.overlayElement(hn,nt)}}]),Y}(_.Component);rn.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},rn.propTypes={isOpen:y.default.bool.isRequired,defaultStyles:y.default.shape({content:y.default.object,overlay:y.default.object}),style:y.default.shape({content:y.default.object,overlay:y.default.object}),className:y.default.oneOfType([y.default.string,y.default.object]),overlayClassName:y.default.oneOfType([y.default.string,y.default.object]),parentSelector:y.default.func,bodyOpenClassName:y.default.string,htmlOpenClassName:y.default.string,ariaHideApp:y.default.bool,appElement:y.default.oneOfType([y.default.instanceOf(tn.default),y.default.instanceOf(L.SafeHTMLCollection),y.default.instanceOf(L.SafeNodeList),y.default.arrayOf(y.default.instanceOf(tn.default))]),onAfterOpen:y.default.func,onAfterClose:y.default.func,onRequestClose:y.default.func,closeTimeoutMS:y.default.number,shouldFocusAfterRender:y.default.bool,shouldCloseOnOverlayClick:y.default.bool,shouldReturnFocusAfterClose:y.default.bool,preventScroll:y.default.bool,role:y.default.string,contentLabel:y.default.string,aria:y.default.object,data:y.default.object,children:y.default.node,shouldCloseOnEsc:y.default.bool,overlayRef:y.default.func,contentRef:y.default.func,id:y.default.string,overlayElement:y.default.func,contentElement:y.default.func,testId:y.default.string},s.default=rn,o.exports=s.default}(ro,ro.exports)),ro.exports}function A0(){var o=this.constructor.getDerivedStateFromProps(this.props,this.state);o!=null&&this.setState(o)}function M0(o){function s(f){var u=this.constructor.getDerivedStateFromProps(o,f);return u??null}this.setState(s.bind(this))}function D0(o,s){try{var f=this.props,u=this.state;this.props=o,this.state=s,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(f,u)}finally{this.props=f,this.state=u}}A0.__suppressDeprecationWarning=!0;M0.__suppressDeprecationWarning=!0;D0.__suppressDeprecationWarning=!0;function Sv(o){var s=o.prototype;if(!s||!s.isReactComponent)throw new Error("Can only polyfill class components");if(typeof o.getDerivedStateFromProps!="function"&&typeof s.getSnapshotBeforeUpdate!="function")return o;var f=null,u=null,b=null;if(typeof s.componentWillMount=="function"?f="componentWillMount":typeof s.UNSAFE_componentWillMount=="function"&&(f="UNSAFE_componentWillMount"),typeof s.componentWillReceiveProps=="function"?u="componentWillReceiveProps":typeof s.UNSAFE_componentWillReceiveProps=="function"&&(u="UNSAFE_componentWillReceiveProps"),typeof s.componentWillUpdate=="function"?b="componentWillUpdate":typeof s.UNSAFE_componentWillUpdate=="function"&&(b="UNSAFE_componentWillUpdate"),f!==null||u!==null||b!==null){var _=o.displayName||o.name,C=typeof o.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+_+" uses "+C+" but also contains the following legacy lifecycles:"+(f!==null?`
  `+f:"")+(u!==null?`
  `+u:"")+(b!==null?`
  `+b:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof o.getDerivedStateFromProps=="function"&&(s.componentWillMount=A0,s.componentWillReceiveProps=M0),typeof s.getSnapshotBeforeUpdate=="function"){if(typeof s.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");s.componentWillUpdate=D0;var y=s.componentDidUpdate;s.componentDidUpdate=function(p,x,D){var w=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:D;y.call(this,p,x,w)}}return o}const Ov=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Sv},Symbol.toStringTag,{value:"Module"})),_v=tv(Ov);var d0;function Tv(){if(d0)return ze;d0=1,Object.defineProperty(ze,"__esModule",{value:!0}),ze.bodyOpenClassName=ze.portalClassName=void 0;var o=Object.assign||function(F){for(var Q=1;Q<arguments.length;Q++){var rn=arguments[Q];for(var X in rn)Object.prototype.hasOwnProperty.call(rn,X)&&(F[X]=rn[X])}return F},s=function(){function F(Q,rn){for(var X=0;X<rn.length;X++){var Y=rn[X];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(Q,Y.key,Y)}}return function(Q,rn,X){return rn&&F(Q.prototype,rn),X&&F(Q,X),Q}}(),f=jl(),u=L(f),b=S0(),_=L(b),C=O0(),y=L(C),M=xv(),p=L(M),x=T0(),D=z(x),w=Ju(),H=L(w),R=_v;function z(F){if(F&&F.__esModule)return F;var Q={};if(F!=null)for(var rn in F)Object.prototype.hasOwnProperty.call(F,rn)&&(Q[rn]=F[rn]);return Q.default=F,Q}function L(F){return F&&F.__esModule?F:{default:F}}function tn(F,Q){if(!(F instanceof Q))throw new TypeError("Cannot call a class as a function")}function cn(F,Q){if(!F)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q&&(typeof Q=="object"||typeof Q=="function")?Q:F}function an(F,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof Q);F.prototype=Object.create(Q&&Q.prototype,{constructor:{value:F,enumerable:!1,writable:!0,configurable:!0}}),Q&&(Object.setPrototypeOf?Object.setPrototypeOf(F,Q):F.__proto__=Q)}var xn=ze.portalClassName="ReactModalPortal",I=ze.bodyOpenClassName="ReactModal__Body--open",mn=w.canUseDOM&&_.default.createPortal!==void 0,Dn=function(Q){return document.createElement(Q)},Rn=function(){return mn?_.default.createPortal:_.default.unstable_renderSubtreeIntoContainer};function gn(F){return F()}var et=function(F){an(Q,F);function Q(){var rn,X,Y,T;tn(this,Q);for(var m=arguments.length,B=Array(m),P=0;P<m;P++)B[P]=arguments[P];return T=(X=(Y=cn(this,(rn=Q.__proto__||Object.getPrototypeOf(Q)).call.apply(rn,[this].concat(B))),Y),Y.removePortal=function(){!mn&&_.default.unmountComponentAtNode(Y.node);var h=gn(Y.props.parentSelector);h&&h.contains(Y.node)?h.removeChild(Y.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},Y.portalRef=function(h){Y.portal=h},Y.renderPortal=function(h){var N=Rn(),G=N(Y,u.default.createElement(p.default,o({defaultStyles:Q.defaultStyles},h)),Y.node);Y.portalRef(G)},X),cn(Y,T)}return s(Q,[{key:"componentDidMount",value:function(){if(w.canUseDOM){mn||(this.node=Dn("div")),this.node.className=this.props.portalClassName;var X=gn(this.props.parentSelector);X.appendChild(this.node),!mn&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(X){var Y=gn(X.parentSelector),T=gn(this.props.parentSelector);return{prevParent:Y,nextParent:T}}},{key:"componentDidUpdate",value:function(X,Y,T){if(w.canUseDOM){var m=this.props,B=m.isOpen,P=m.portalClassName;X.portalClassName!==P&&(this.node.className=P);var h=T.prevParent,N=T.nextParent;N!==h&&(h.removeChild(this.node),N.appendChild(this.node)),!(!X.isOpen&&!B)&&!mn&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!w.canUseDOM||!this.node||!this.portal)){var X=this.portal.state,Y=Date.now(),T=X.isOpen&&this.props.closeTimeoutMS&&(X.closesAt||Y+this.props.closeTimeoutMS);T?(X.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,T-Y)):this.removePortal()}}},{key:"render",value:function(){if(!w.canUseDOM||!mn)return null;!this.node&&mn&&(this.node=Dn("div"));var X=Rn();return X(u.default.createElement(p.default,o({ref:this.portalRef,defaultStyles:Q.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(X){D.setElement(X)}}]),Q}(f.Component);return et.propTypes={isOpen:y.default.bool.isRequired,style:y.default.shape({content:y.default.object,overlay:y.default.object}),portalClassName:y.default.string,bodyOpenClassName:y.default.string,htmlOpenClassName:y.default.string,className:y.default.oneOfType([y.default.string,y.default.shape({base:y.default.string.isRequired,afterOpen:y.default.string.isRequired,beforeClose:y.default.string.isRequired})]),overlayClassName:y.default.oneOfType([y.default.string,y.default.shape({base:y.default.string.isRequired,afterOpen:y.default.string.isRequired,beforeClose:y.default.string.isRequired})]),appElement:y.default.oneOfType([y.default.instanceOf(H.default),y.default.instanceOf(w.SafeHTMLCollection),y.default.instanceOf(w.SafeNodeList),y.default.arrayOf(y.default.instanceOf(H.default))]),onAfterOpen:y.default.func,onRequestClose:y.default.func,closeTimeoutMS:y.default.number,ariaHideApp:y.default.bool,shouldFocusAfterRender:y.default.bool,shouldCloseOnOverlayClick:y.default.bool,shouldReturnFocusAfterClose:y.default.bool,preventScroll:y.default.bool,parentSelector:y.default.func,aria:y.default.object,data:y.default.object,role:y.default.string,contentLabel:y.default.string,shouldCloseOnEsc:y.default.bool,overlayRef:y.default.func,contentRef:y.default.func,id:y.default.string,overlayElement:y.default.func,contentElement:y.default.func},et.defaultProps={isOpen:!1,portalClassName:xn,bodyOpenClassName:I,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(Q,rn){return u.default.createElement("div",Q,rn)},contentElement:function(Q,rn){return u.default.createElement("div",Q,rn)}},et.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,R.polyfill)(et),ze.default=et,ze}var h0;function Ev(){return h0||(h0=1,function(o,s){Object.defineProperty(s,"__esModule",{value:!0});var f=Tv(),u=b(f);function b(_){return _&&_.__esModule?_:{default:_}}s.default=u.default,o.exports=s.default}(oo,oo.exports)),oo.exports}var Av=Ev();const z0=x0(Av);function Ln(o,s){s===void 0&&(s={});var f=s.insertAt;if(o&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",f==="top"&&u.firstChild?u.insertBefore(b,u.firstChild):u.appendChild(b),b.styleSheet?b.styleSheet.cssText=o:b.appendChild(document.createTextNode(o))}}Ln(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var dn=function(){return dn=Object.assign||function(o){for(var s,f=1,u=arguments.length;f<u;f++)for(var b in s=arguments[f])Object.prototype.hasOwnProperty.call(s,b)&&(o[b]=s[b]);return o},dn.apply(this,arguments)};function go(o){return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},go(o)}var Mv=/^\s+/,Dv=/\s+$/;function V(o,s){if(s=s||{},(o=o||"")instanceof V)return o;if(!(this instanceof V))return new V(o,s);var f=function(u){var b={r:0,g:0,b:0},_=1,C=null,y=null,M=null,p=!1,x=!1;typeof u=="string"&&(u=function(R){R=R.replace(Mv,"").replace(Dv,"").toLowerCase();var z,L=!1;if(Ku[R])R=Ku[R],L=!0;else if(R=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(z=Ut.rgb.exec(R))?{r:z[1],g:z[2],b:z[3]}:(z=Ut.rgba.exec(R))?{r:z[1],g:z[2],b:z[3],a:z[4]}:(z=Ut.hsl.exec(R))?{h:z[1],s:z[2],l:z[3]}:(z=Ut.hsla.exec(R))?{h:z[1],s:z[2],l:z[3],a:z[4]}:(z=Ut.hsv.exec(R))?{h:z[1],s:z[2],v:z[3]}:(z=Ut.hsva.exec(R))?{h:z[1],s:z[2],v:z[3],a:z[4]}:(z=Ut.hex8.exec(R))?{r:mt(z[1]),g:mt(z[2]),b:mt(z[3]),a:y0(z[4]),format:L?"name":"hex8"}:(z=Ut.hex6.exec(R))?{r:mt(z[1]),g:mt(z[2]),b:mt(z[3]),format:L?"name":"hex"}:(z=Ut.hex4.exec(R))?{r:mt(z[1]+""+z[1]),g:mt(z[2]+""+z[2]),b:mt(z[3]+""+z[3]),a:y0(z[4]+""+z[4]),format:L?"name":"hex8"}:(z=Ut.hex3.exec(R))?{r:mt(z[1]+""+z[1]),g:mt(z[2]+""+z[2]),b:mt(z[3]+""+z[3]),format:L?"name":"hex"}:!1}(u)),go(u)=="object"&&(ee(u.r)&&ee(u.g)&&ee(u.b)?(D=u.r,w=u.g,H=u.b,b={r:255*Cn(D,255),g:255*Cn(w,255),b:255*Cn(H,255)},p=!0,x=String(u.r).substr(-1)==="%"?"prgb":"rgb"):ee(u.h)&&ee(u.s)&&ee(u.v)?(C=Bl(u.s),y=Bl(u.v),b=function(R,z,L){R=6*Cn(R,360),z=Cn(z,100),L=Cn(L,100);var tn=Math.floor(R),cn=R-tn,an=L*(1-z),xn=L*(1-cn*z),I=L*(1-(1-cn)*z),mn=tn%6,Dn=[L,xn,an,an,I,L][mn],Rn=[I,L,L,xn,an,an][mn],gn=[an,an,I,L,L,xn][mn];return{r:255*Dn,g:255*Rn,b:255*gn}}(u.h,C,y),p=!0,x="hsv"):ee(u.h)&&ee(u.s)&&ee(u.l)&&(C=Bl(u.s),M=Bl(u.l),b=function(R,z,L){var tn,cn,an;function xn(Dn,Rn,gn){return gn<0&&(gn+=1),gn>1&&(gn-=1),gn<1/6?Dn+6*(Rn-Dn)*gn:gn<.5?Rn:gn<2/3?Dn+(Rn-Dn)*(2/3-gn)*6:Dn}if(R=Cn(R,360),z=Cn(z,100),L=Cn(L,100),z===0)tn=cn=an=L;else{var I=L<.5?L*(1+z):L+z-L*z,mn=2*L-I;tn=xn(mn,I,R+1/3),cn=xn(mn,I,R),an=xn(mn,I,R-1/3)}return{r:255*tn,g:255*cn,b:255*an}}(u.h,C,M),p=!0,x="hsl"),u.hasOwnProperty("a")&&(_=u.a));var D,w,H;return _=R0(_),{ok:p,format:u.format||x,r:Math.min(255,Math.max(b.r,0)),g:Math.min(255,Math.max(b.g,0)),b:Math.min(255,Math.max(b.b,0)),a:_}}(o);this._originalInput=o,this._r=f.r,this._g=f.g,this._b=f.b,this._a=f.a,this._roundA=Math.round(100*this._a)/100,this._format=s.format||f.format,this._gradientType=s.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=f.ok}function p0(o,s,f){o=Cn(o,255),s=Cn(s,255),f=Cn(f,255);var u,b,_=Math.max(o,s,f),C=Math.min(o,s,f),y=(_+C)/2;if(_==C)u=b=0;else{var M=_-C;switch(b=y>.5?M/(2-_-C):M/(_+C),_){case o:u=(s-f)/M+(s<f?6:0);break;case s:u=(f-o)/M+2;break;case f:u=(o-s)/M+4}u/=6}return{h:u,s:b,l:y}}function v0(o,s,f){o=Cn(o,255),s=Cn(s,255),f=Cn(f,255);var u,b,_=Math.max(o,s,f),C=Math.min(o,s,f),y=_,M=_-C;if(b=_===0?0:M/_,_==C)u=0;else{switch(_){case o:u=(s-f)/M+(s<f?6:0);break;case s:u=(f-o)/M+2;break;case f:u=(o-s)/M+4}u/=6}return{h:u,s:b,v:y}}function b0(o,s,f,u){var b=[Ct(Math.round(o).toString(16)),Ct(Math.round(s).toString(16)),Ct(Math.round(f).toString(16))];return u&&b[0].charAt(0)==b[0].charAt(1)&&b[1].charAt(0)==b[1].charAt(1)&&b[2].charAt(0)==b[2].charAt(1)?b[0].charAt(0)+b[1].charAt(0)+b[2].charAt(0):b.join("")}function m0(o,s,f,u){return[Ct(N0(u)),Ct(Math.round(o).toString(16)),Ct(Math.round(s).toString(16)),Ct(Math.round(f).toString(16))].join("")}function zv(o,s){s=s===0?0:s||10;var f=V(o).toHsl();return f.s-=s/100,f.s=yo(f.s),V(f)}function Rv(o,s){s=s===0?0:s||10;var f=V(o).toHsl();return f.s+=s/100,f.s=yo(f.s),V(f)}function Nv(o){return V(o).desaturate(100)}function Uv(o,s){s=s===0?0:s||10;var f=V(o).toHsl();return f.l+=s/100,f.l=yo(f.l),V(f)}function Cv(o,s){s=s===0?0:s||10;var f=V(o).toRgb();return f.r=Math.max(0,Math.min(255,f.r-Math.round(-s/100*255))),f.g=Math.max(0,Math.min(255,f.g-Math.round(-s/100*255))),f.b=Math.max(0,Math.min(255,f.b-Math.round(-s/100*255))),V(f)}function qv(o,s){s=s===0?0:s||10;var f=V(o).toHsl();return f.l-=s/100,f.l=yo(f.l),V(f)}function kv(o,s){var f=V(o).toHsl(),u=(f.h+s)%360;return f.h=u<0?360+u:u,V(f)}function Hv(o){var s=V(o).toHsl();return s.h=(s.h+180)%360,V(s)}function g0(o,s){if(isNaN(s)||s<=0)throw new Error("Argument to polyad must be a positive number");for(var f=V(o).toHsl(),u=[V(o)],b=360/s,_=1;_<s;_++)u.push(V({h:(f.h+_*b)%360,s:f.s,l:f.l}));return u}function wv(o){var s=V(o).toHsl(),f=s.h;return[V(o),V({h:(f+72)%360,s:s.s,l:s.l}),V({h:(f+216)%360,s:s.s,l:s.l})]}function Bv(o,s,f){s=s||6,f=f||30;var u=V(o).toHsl(),b=360/f,_=[V(o)];for(u.h=(u.h-(b*s>>1)+720)%360;--s;)u.h=(u.h+b)%360,_.push(V(u));return _}function Yv(o,s){s=s||6;for(var f=V(o).toHsv(),u=f.h,b=f.s,_=f.v,C=[],y=1/s;s--;)C.push(V({h:u,s:b,v:_})),_=(_+y)%1;return C}V.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var o=this.toRgb();return(299*o.r+587*o.g+114*o.b)/1e3},getLuminance:function(){var o,s,f,u=this.toRgb();return o=u.r/255,s=u.g/255,f=u.b/255,.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},setAlpha:function(o){return this._a=R0(o),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var o=v0(this._r,this._g,this._b);return{h:360*o.h,s:o.s,v:o.v,a:this._a}},toHsvString:function(){var o=v0(this._r,this._g,this._b),s=Math.round(360*o.h),f=Math.round(100*o.s),u=Math.round(100*o.v);return this._a==1?"hsv("+s+", "+f+"%, "+u+"%)":"hsva("+s+", "+f+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var o=p0(this._r,this._g,this._b);return{h:360*o.h,s:o.s,l:o.l,a:this._a}},toHslString:function(){var o=p0(this._r,this._g,this._b),s=Math.round(360*o.h),f=Math.round(100*o.s),u=Math.round(100*o.l);return this._a==1?"hsl("+s+", "+f+"%, "+u+"%)":"hsla("+s+", "+f+"%, "+u+"%, "+this._roundA+")"},toHex:function(o){return b0(this._r,this._g,this._b,o)},toHexString:function(o){return"#"+this.toHex(o)},toHex8:function(o){return function(s,f,u,b,_){var C=[Ct(Math.round(s).toString(16)),Ct(Math.round(f).toString(16)),Ct(Math.round(u).toString(16)),Ct(N0(b))];return _&&C[0].charAt(0)==C[0].charAt(1)&&C[1].charAt(0)==C[1].charAt(1)&&C[2].charAt(0)==C[2].charAt(1)&&C[3].charAt(0)==C[3].charAt(1)?C[0].charAt(0)+C[1].charAt(0)+C[2].charAt(0)+C[3].charAt(0):C.join("")}(this._r,this._g,this._b,this._a,o)},toHex8String:function(o){return"#"+this.toHex8(o)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Cn(this._r,255))+"%",g:Math.round(100*Cn(this._g,255))+"%",b:Math.round(100*Cn(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Cn(this._r,255))+"%, "+Math.round(100*Cn(this._g,255))+"%, "+Math.round(100*Cn(this._b,255))+"%)":"rgba("+Math.round(100*Cn(this._r,255))+"%, "+Math.round(100*Cn(this._g,255))+"%, "+Math.round(100*Cn(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(jv[b0(this._r,this._g,this._b,!0)]||!1)},toFilter:function(o){var s="#"+m0(this._r,this._g,this._b,this._a),f=s,u=this._gradientType?"GradientType = 1, ":"";if(o){var b=V(o);f="#"+m0(b._r,b._g,b._b,b._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+s+",endColorstr="+f+")"},toString:function(o){var s=!!o;o=o||this._format;var f=!1,u=this._a<1&&this._a>=0;return s||!u||o!=="hex"&&o!=="hex6"&&o!=="hex3"&&o!=="hex4"&&o!=="hex8"&&o!=="name"?(o==="rgb"&&(f=this.toRgbString()),o==="prgb"&&(f=this.toPercentageRgbString()),o!=="hex"&&o!=="hex6"||(f=this.toHexString()),o==="hex3"&&(f=this.toHexString(!0)),o==="hex4"&&(f=this.toHex8String(!0)),o==="hex8"&&(f=this.toHex8String()),o==="name"&&(f=this.toName()),o==="hsl"&&(f=this.toHslString()),o==="hsv"&&(f=this.toHsvString()),f||this.toHexString()):o==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return V(this.toString())},_applyModification:function(o,s){var f=o.apply(null,[this].concat([].slice.call(s)));return this._r=f._r,this._g=f._g,this._b=f._b,this.setAlpha(f._a),this},lighten:function(){return this._applyModification(Uv,arguments)},brighten:function(){return this._applyModification(Cv,arguments)},darken:function(){return this._applyModification(qv,arguments)},desaturate:function(){return this._applyModification(zv,arguments)},saturate:function(){return this._applyModification(Rv,arguments)},greyscale:function(){return this._applyModification(Nv,arguments)},spin:function(){return this._applyModification(kv,arguments)},_applyCombination:function(o,s){return o.apply(null,[this].concat([].slice.call(s)))},analogous:function(){return this._applyCombination(Bv,arguments)},complement:function(){return this._applyCombination(Hv,arguments)},monochromatic:function(){return this._applyCombination(Yv,arguments)},splitcomplement:function(){return this._applyCombination(wv,arguments)},triad:function(){return this._applyCombination(g0,[3])},tetrad:function(){return this._applyCombination(g0,[4])}},V.fromRatio=function(o,s){if(go(o)=="object"){var f={};for(var u in o)o.hasOwnProperty(u)&&(f[u]=u==="a"?o[u]:Bl(o[u]));o=f}return V(o,s)},V.equals=function(o,s){return!(!o||!s)&&V(o).toRgbString()==V(s).toRgbString()},V.random=function(){return V.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},V.mix=function(o,s,f){f=f===0?0:f||50;var u=V(o).toRgb(),b=V(s).toRgb(),_=f/100;return V({r:(b.r-u.r)*_+u.r,g:(b.g-u.g)*_+u.g,b:(b.b-u.b)*_+u.b,a:(b.a-u.a)*_+u.a})},V.readability=function(o,s){var f=V(o),u=V(s);return(Math.max(f.getLuminance(),u.getLuminance())+.05)/(Math.min(f.getLuminance(),u.getLuminance())+.05)},V.isReadable=function(o,s,f){var u,b,_=V.readability(o,s);switch(b=!1,(u=function(C){var y,M;return y=((C=C||{level:"AA",size:"small"}).level||"AA").toUpperCase(),M=(C.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),M!=="small"&&M!=="large"&&(M="small"),{level:y,size:M}}(f)).level+u.size){case"AAsmall":case"AAAlarge":b=_>=4.5;break;case"AAlarge":b=_>=3;break;case"AAAsmall":b=_>=7}return b},V.mostReadable=function(o,s,f){var u,b,_,C,y=null,M=0;b=(f=f||{}).includeFallbackColors,_=f.level,C=f.size;for(var p=0;p<s.length;p++)(u=V.readability(o,s[p]))>M&&(M=u,y=V(s[p]));return V.isReadable(o,y,{level:_,size:C})||!b?y:(f.includeFallbackColors=!1,V.mostReadable(o,["#fff","#000"],f))};var Ku=V.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},jv=V.hexNames=function(o){var s={};for(var f in o)o.hasOwnProperty(f)&&(s[o[f]]=f);return s}(Ku);function R0(o){return o=parseFloat(o),(isNaN(o)||o<0||o>1)&&(o=1),o}function Cn(o,s){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(o)&&(o="100%");var f=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(o);return o=Math.min(s,Math.max(0,parseFloat(o))),f&&(o=parseInt(o*s,10)/100),Math.abs(o-s)<1e-6?1:o%s/parseFloat(s)}function yo(o){return Math.min(1,Math.max(0,o))}function mt(o){return parseInt(o,16)}function Ct(o){return o.length==1?"0"+o:""+o}function Bl(o){return o<=1&&(o=100*o+"%"),o}function N0(o){return Math.round(255*parseFloat(o)).toString(16)}function y0(o){return mt(o)/255}var Re,so,fo,Ut=(so="[\\s|\\(]+("+(Re="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Re+")[,|\\s]+("+Re+")\\s*\\)?",fo="[\\s|\\(]+("+Re+")[,|\\s]+("+Re+")[,|\\s]+("+Re+")[,|\\s]+("+Re+")\\s*\\)?",{CSS_UNIT:new RegExp(Re),rgb:new RegExp("rgb"+so),rgba:new RegExp("rgba"+fo),hsl:new RegExp("hsl"+so),hsla:new RegExp("hsla"+fo),hsv:new RegExp("hsv"+so),hsva:new RegExp("hsva"+fo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ee(o){return!!Ut.CSS_UNIT.exec(o)}var Xl=function(o,s){var f=(typeof o=="string"?parseInt(o):o)||0;if(f>=-5&&f<=5){var u=f,b=parseFloat(s),_=b+u*(b/5)*-1;return(_==0||_<=Number.EPSILON)&&(_=.1),{animationPeriod:_+"s"}}return{animationPeriod:s}},Gl=function(o,s){var f=o||{},u="";switch(s){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var b={};if(f.fontSize){var _=f.fontSize;b=function(C,y){var M={};for(var p in C)Object.prototype.hasOwnProperty.call(C,p)&&y.indexOf(p)<0&&(M[p]=C[p]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function"){var x=0;for(p=Object.getOwnPropertySymbols(C);x<p.length;x++)y.indexOf(p[x])<0&&Object.prototype.propertyIsEnumerable.call(C,p[x])&&(M[p[x]]=C[p[x]])}return M}(f,["fontSize"]),u=_}return{fontSize:u,styles:b}},Xv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ll=function(o){var s=o.className,f=o.text,u=o.textColor,b=o.staticText,_=o.style;return f?An.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(s||"").trim(),style:dn(dn(dn({},b&&Xv),u&&{color:u,mixBlendMode:"unset"}),_&&_)},typeof f=="string"&&f.length?f:"loading"):null},ae="rgb(50, 205, 50)";function Ql(o,s){if(s===void 0&&(s=0),o.length===0)throw new Error("Input array cannot be empty!");var f=[];return function u(b,_){return _===void 0&&(_=0),f.push.apply(f,b),f.length<_&&u(f,_),f.slice(0,_)}(o,s)}Ln(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);V(ae).toRgb();Array.from({length:4},function(o,s){return"--atom-phase".concat(s+1,"-rgb")});Ln(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--commet-phase".concat(s+1,"-color")});Ln(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var ho=Array.from({length:4},function(o,s){return"--OP-annulus-phase".concat(s+1,"-color")}),Gv=function(o){var s,f=Gl(o?.style,o?.size),u=f.styles,b=f.fontSize,_=o?.easing,C=Xl(o?.speedPlus,"1.5s").animationPeriod,y=function(p){var x={},D=ho.length;if(p instanceof Array){for(var w=Ql(p,D),H=0;H<w.length&&!(H>=4);H++)x[ho[H]]=w[H];return x}try{if(typeof p!="string")throw new Error("Color String expected");for(var R=0;R<D;R++)x[ho[R]]=p}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),R=0;R<D;R++)x[ho[R]]=ae}return x}((s=o?.color)!==null&&s!==void 0?s:""),M=o?.dense?4.3:2.9;return An.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:dn(dn(dn(dn(dn({},b&&{fontSize:b}),C&&{"--rli-animation-duration":C}),_&&{"--rli-animation-function":_}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},An.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},An.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:M,strokeMiterlimit:"10"})),An.createElement(Ll,{className:"OP-annulus-text",text:o?.text,textColor:o?.textColor})))};function Vu(o){return o&&o.Math===Math&&o}Ln(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Ha=Vu(typeof window=="object"&&window)||Vu(typeof self=="object"&&self)||Vu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function U0(){var o,s;return!((o=Ha?.crypto)===null||o===void 0)&&o.randomUUID?Ha.crypto.randomUUID():!((s=Ha?.btoa)===null||s===void 0)&&s.name?Ha.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var po=Array.from({length:4},function(o,s){return"--OP-dotted-phase".concat(s+1,"-color")}),Lv=function(o){var s,f=Gl(o?.style,o?.size),u=f.styles,b=f.fontSize,_=o?.easing,C=Xl(o?.speedPlus,"1.2s").animationPeriod,y=function(p){var x={},D=po.length;if(p instanceof Array){for(var w=Ql(p,D),H=0;H<w.length&&!(H>=4);H++)x[po[H]]=w[H];return x}try{if(typeof p!="string")throw new Error("Color String expected");for(var R=0;R<D;R++)x[po[R]]=p}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),R=0;R<D;R++)x[po[R]]=ae}return x}((s=o?.color)!==null&&s!==void 0?s:""),M=o?.dense?16:12;return An.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:dn(dn(dn(dn(dn({},b&&{fontSize:b}),C&&{"--rli-animation-duration":C}),_&&{"--rli-animation-function":_}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:M}).map(function(p,x){var D=function(R,z,L){if(z===16){var tn=360*R/z,cn=z-R,an=Number.parseFloat(L)/z*cn*-1;return{transform:"rotate(".concat(tn,"deg)"),animationDelay:"".concat(an,"s")}}return{transform:"",animationDelay:""}}(x,M,C),w=D.animationDelay,H=D.transform;return An.createElement("span",{key:U0(),className:"rli-d-i-b dot-shape-holder",style:H?{transform:H}:void 0},An.createElement("span",{className:"dot",style:w?{animationDelay:w}:void 0}))}),An.createElement(Ll,{className:"OP-dotted-text",text:o?.text,textColor:o?.textColor})))};Ln(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var vo=Array.from({length:4},function(o,s){return"--OP-spokes-phase".concat(s+1,"-color")}),Qv=function(o){var s,f=Gl(o?.style,o?.size),u=f.styles,b=f.fontSize,_=o?.easing,C=Xl(o?.speedPlus,"1.2s").animationPeriod,y=function(p){var x={},D=vo.length;if(p instanceof Array){for(var w=Ql(p,D),H=0;H<w.length&&!(H>=4);H++)x[vo[H]]=w[H];return x}try{if(typeof p!="string")throw new Error("Color String expected");for(var R=0;R<D;R++)x[vo[R]]=p}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),R=0;R<D;R++)x[vo[R]]=ae}return x}((s=o?.color)!==null&&s!==void 0?s:""),M=o?.dense?16:12;return An.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:dn(dn(dn(dn(dn({},b&&{fontSize:b}),C&&{"--rli-animation-duration":C}),_&&{"--rli-animation-function":_}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:M},function(p,x){return An.createElement("span",{key:U0(),className:"rli-d-i-b spoke",style:Zv(x,M,C)})})),An.createElement(Ll,{text:o?.text,textColor:o?.textColor}))};function Zv(o,s,f){if(s===16){var u=s-o,b=Number.parseFloat(f)/s;return{transform:"rotate(".concat(360*o/s,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((u-1)*b*-1,"s")}}}Ln(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var bo=Array.from({length:4},function(o,s){return"--OP-annulus-dual-sectors-phase".concat(s+1,"-color")}),Vv=function(o){var s,f=Gl(o?.style,o?.size),u=f.styles,b=f.fontSize,_=o?.easing,C=Xl(o?.speedPlus,"1.2s").animationPeriod,y=function(p){var x={},D=bo.length;if(p instanceof Array){for(var w=Ql(p,D),H=0;H<w.length&&!(H>=4);H++)x[bo[H]]=w[H];return x}try{if(typeof p!="string")throw new Error("Color String expected");for(var R=0;R<D;R++)x[bo[R]]=p}catch(z){for(z instanceof Error?console.warn("[".concat(z.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),R=0;R<D;R++)x[bo[R]]=ae}return x}((s=o?.color)!==null&&s!==void 0?s:""),M=o.dense?"0.45em":"";return An.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:dn(dn(dn(dn(dn({},b&&{fontSize:b}),C&&{"--rli-animation-duration":C}),_&&{"--rli-animation-function":_}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},An.createElement("span",{className:"rli-d-i-b annulus-sectors",style:dn({},M&&{borderWidth:M})}),An.createElement(Ll,{className:"OP-annulus-dual-sectors-text",text:o?.text,textColor:o?.textColor})))};Ln(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var wl=Array.from({length:4},function(o,s){return["--OP-annulus-track-phase".concat(s+1,"-color"),"--OP-annulus-sector-phase".concat(s+1,"-color")]}),mo=function(o){return o===void 0&&(o=1),.25*o},Kv=function(o){var s,f=Gl(o?.style,o?.size),u=f.styles,b=f.fontSize,_=o?.easing,C=Xl(o?.speedPlus,"1s").animationPeriod,y=function(p){var x={},D=wl.length;if(p instanceof Array){for(var w=Ql(p,D),H=0;H<w.length&&!(H>=4);H++){var R=wl[H];try{if(!(tn=V(w[H])).isValid())throw new Error("Invalid Color: ".concat(tn.getOriginalInput()));var z=tn.setAlpha(mo(tn.getAlpha())).toRgbString(),L=w[H];x[R[0]]=z,x[R[1]]=L}catch{L=ae,z=(tn=V(ae)).setAlpha(mo(tn.getAlpha())).toRgbString(),x[R[0]]=z,x[R[1]]=L}}return x}try{var tn=V(p);if(typeof p!="string")throw new Error("Color String expected");if(!tn.isValid())throw new Error("Invalid Color: ".concat(tn.getOriginalInput()));L=p,z=tn.setAlpha(mo(tn.getAlpha())).toRgbString();for(var cn=0;cn<D;cn++)x[(R=wl[cn])[0]]=z,x[R[1]]=L}catch(an){for(an instanceof Error?console.warn("[".concat(an.message,']: Received "').concat(typeof p,'" with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),L=ae,z=(tn=V(ae)).setAlpha(mo(tn.getAlpha())).toRgbString(),cn=0;cn<wl.length;cn++)x[(R=wl[cn])[0]]=z,x[R[1]]=L}return x}((s=o?.color)!==null&&s!==void 0?s:""),M=o.dense?"0.45em":"";return An.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:dn(dn(dn(dn(dn({},b&&{fontSize:b}),C&&{"--rli-animation-duration":C}),_&&{"--rli-animation-function":_}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},An.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:dn({},M&&{borderWidth:M})}),An.createElement(Ll,{className:"OP-annulus-sector-text",text:o?.text,textColor:o?.textColor})))},Jv=function(o){var s=Object(o).variant,f=s===void 0?"disc":s;return f==="dotted"?An.createElement(Lv,dn({},o)):f==="spokes"?An.createElement(Qv,dn({},o)):f==="disc"?An.createElement(Gv,dn({},o)):f==="split-disc"?An.createElement(Vv,dn({},o)):f==="track-disc"?An.createElement(Kv,dn({},o)):null};Ln(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--four-square-phase".concat(s+1,"-color")});Ln(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--mosaic-phase".concat(s+1,"-color")});Ln(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--riple-phase".concat(s+1,"-color")});Ln(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--TD-pulsate-phase".concat(s+1,"-color")});Ln(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--TD-brick-stack-phase".concat(s+1,"-color")});Ln(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--TD-bob-phase".concat(s+1,"-color")});Ln(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--TD-bounce-phase".concat(s+1,"-color")});Ln(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--shape-phase".concat(s+1,"-color")});Ln(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--trophySpin-phase".concat(s+1,"-color")});Ln(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--slab-phase".concat(s+1,"-color")});Ln(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(o,s){return"--life-line-phase".concat(s+1,"-color")});z0.setAppElement("#root");function Pv(){const[o,s]=Yl.useState([]),[f,u]=Yl.useState(!1),b=p=>{y(p),u(!0)},_=()=>{u(!1),y(null)},[C,y]=Yl.useState(null),M=async p=>{const x=await fv(p);x?(s(x),console.log("Data fetched successfully:",x),JSON.parse(JSON.stringify(x)).map(D=>D.sightName),JSON.parse(JSON.stringify(x)).map(D=>D.zone),JSON.parse(JSON.stringify(x)).map(D=>D.category),JSON.parse(JSON.stringify(x)).map(D=>D.photoURL),JSON.parse(JSON.stringify(x)).map(D=>D.address),JSON.parse(JSON.stringify(x)).map(D=>D.description)):console.error("Failed to fetch data")};return vn.jsxs("div",{className:"w-full min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 px-4 py-6",children:[vn.jsx("a",{href:"https://www.travelking.com.tw/tourguide/taiwan/keelungcity/",target:"_blank",rel:"noopener noreferrer",children:vn.jsx("h1",{className:"max-sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-500 my-5 mb-20 font-serif ",children:"基隆市景點瀏覽器"})}),vn.jsxs("div",{className:"flex flex-wrap gap-x-4 gap-y-2 justify-center",children:[vn.jsx("button",{onClick:()=>M("中山"),children:"中山區"}),vn.jsx("button",{onClick:()=>M("信義"),children:"信義區"}),vn.jsx("button",{onClick:()=>M("仁愛"),children:"仁愛區"}),vn.jsx("button",{onClick:()=>M("中正"),children:"中正區"}),vn.jsx("button",{onClick:()=>M("安樂"),children:"安樂區"}),vn.jsx("button",{onClick:()=>M("七堵"),children:"七堵區"}),vn.jsx("button",{onClick:()=>M("暖暖"),children:"暖暖區"})]}),vn.jsxs("div",{id:"searchingHint",className:"hidden text-center text-2xl font-bold text-blue-800 mt-10",children:[vn.jsx(Jv,{variant:"track-disc",color:"#3cd0e7ff",size:"medium",text:"",textColor:""}),vn.jsx("br",{}),"搜尋中..."]}),vn.jsx("div",{id:"showSights",children:o.map((p,x)=>vn.jsx("div",{className:`card w-full bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300
              ${o.length===1?"col-span-1 sm:col-span-2 md:col-span-3":""}`,children:vn.jsxs("div",{className:"p-4",children:[vn.jsx("h2",{className:"max-sm:text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800",children:p.sightName}),vn.jsxs("p",{className:"max-sm:text-lg sm:text-xl md:text-2xl font-semibold text-indigo-700",children:["區域: ",p.zone]}),vn.jsxs("p",{className:"max-sm:text-lg sm:text-xl md:text-2xl font-semibold text-teal-700",children:["分類: ",p.category]}),vn.jsxs("p",{className:"max-sm:text-lg sm:text-xl md:text-2xl font-semibold text-pink-700",children:[vn.jsx("button",{id:"addrButton",onClick:()=>window.open(`${p.mapURL}`,"_blank"),children:"地址"}),vn.jsx("p",{children:p.address}),vn.jsx("button",{onClick:()=>b(p),id:"moreInfobtn",children:"詳細資訊"})]})]})},x))}),vn.jsx(z0,{isOpen:f,onRequestClose:_,contentLabel:"景點詳細資訊",overlayClassName:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300",className:"bg-white rounded-2xl shadow-lg p-6 max-w-lg w-auto max-h-[100vh] h-auto mx-4 transform transition-all duration-300 flex flex-col",children:C&&vn.jsxs("div",{className:"flex flex-col h-full",children:[vn.jsx("h2",{className:"text-xl font-bold mb-4 text-blue-800",children:C.sightName}),vn.jsx("div",{className:"flex-shrink-0 mb-4",children:vn.jsx("img",{src:C.photoURL,alt:C.sightName,className:"w-full max-h-60  rounded-xl border-blue-400 border-2"})}),vn.jsx("div",{className:"flex-1 overflow-y-auto",children:vn.jsxs("p",{className:"text-base font-semibold text-black mt-2 ",children:["介紹: ",C.description]})})]})})]})}sv.createRoot(document.getElementById("root")).render(vn.jsx(Yl.StrictMode,{children:vn.jsx(Pv,{})}));
