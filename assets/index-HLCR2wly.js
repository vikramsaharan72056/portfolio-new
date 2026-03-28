(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function Mm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lu={exports:{}},wo={},cu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function Iv(){if(fp)return ft;fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(I,ie,Ne){this.props=I,this.context=ie,this.refs=A,this.updater=Ne||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(I,ie,Ne){this.props=I,this.context=ie,this.refs=A,this.updater=Ne||S}var L=N.prototype=new g;L.constructor=N,E(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,B={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function W(I,ie,Ne){var Z,ue={},Ee=null,xe=null;if(ie!=null)for(Z in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)$.call(ie,Z)&&!U.hasOwnProperty(Z)&&(ue[Z]=ie[Z]);var Ae=arguments.length-2;if(Ae===1)ue.children=Ne;else if(1<Ae){for(var Ie=Array(Ae),Ze=0;Ze<Ae;Ze++)Ie[Ze]=arguments[Ze+2];ue.children=Ie}if(I&&I.defaultProps)for(Z in Ae=I.defaultProps,Ae)ue[Z]===void 0&&(ue[Z]=Ae[Z]);return{$$typeof:s,type:I,key:Ee,ref:xe,props:ue,_owner:B.current}}function P(I,ie){return{$$typeof:s,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function F(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ne){return ie[Ne]})}var oe=/\/+/g;function ne(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?F(""+I.key):ie.toString(36)}function de(I,ie,Ne,Z,ue){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,ue=ue(xe),I=Z===""?"."+ne(xe,0):Z,R(ue)?(Ne="",I!=null&&(Ne=I.replace(oe,"$&/")+"/"),de(ue,ie,Ne,"",function(Ze){return Ze})):ue!=null&&(C(ue)&&(ue=P(ue,Ne+(!ue.key||xe&&xe.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+I)),ie.push(ue)),1;if(xe=0,Z=Z===""?".":Z+":",R(I))for(var Ae=0;Ae<I.length;Ae++){Ee=I[Ae];var Ie=Z+ne(Ee,Ae);xe+=de(Ee,ie,Ne,Ie,ue)}else if(Ie=x(I),typeof Ie=="function")for(I=Ie.call(I),Ae=0;!(Ee=I.next()).done;)Ee=Ee.value,Ie=Z+ne(Ee,Ae++),xe+=de(Ee,ie,Ne,Ie,ue);else if(Ee==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function pe(I,ie,Ne){if(I==null)return I;var Z=[],ue=0;return de(I,Z,"","",function(Ee){return ie.call(Ne,Ee,ue++)}),Z}function ae(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ne)},function(Ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ne)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},z={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:pe,forEach:function(I,ie,Ne){pe(I,function(){ie.apply(this,arguments)},Ne)},count:function(I){var ie=0;return pe(I,function(){ie++}),ie},toArray:function(I){return pe(I,function(ie){return ie})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=N,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(I,ie,Ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=E({},I.props),ue=I.key,Ee=I.ref,xe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,xe=B.current),ie.key!==void 0&&(ue=""+ie.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ie in ie)$.call(ie,Ie)&&!U.hasOwnProperty(Ie)&&(Z[Ie]=ie[Ie]===void 0&&Ae!==void 0?Ae[Ie]:ie[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Ne;else if(1<Ie){Ae=Array(Ie);for(var Ze=0;Ze<Ie;Ze++)Ae[Ze]=arguments[Ze+2];Z.children=Ae}return{$$typeof:s,type:I.type,key:ue,ref:Ee,props:Z,_owner:xe}},ft.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},ft.createElement=W,ft.createFactory=function(I){var ie=W.bind(null,I);return ie.type=I,ie},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=C,ft.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ae}},ft.memo=function(I,ie){return{$$typeof:m,type:I,compare:ie===void 0?null:ie}},ft.startTransition=function(I){var ie=z.transition;z.transition={};try{I()}finally{z.transition=ie}},ft.unstable_act=se,ft.useCallback=function(I,ie){return ce.current.useCallback(I,ie)},ft.useContext=function(I){return ce.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ft.useEffect=function(I,ie){return ce.current.useEffect(I,ie)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(I,ie,Ne){return ce.current.useImperativeHandle(I,ie,Ne)},ft.useInsertionEffect=function(I,ie){return ce.current.useInsertionEffect(I,ie)},ft.useLayoutEffect=function(I,ie){return ce.current.useLayoutEffect(I,ie)},ft.useMemo=function(I,ie){return ce.current.useMemo(I,ie)},ft.useReducer=function(I,ie,Ne){return ce.current.useReducer(I,ie,Ne)},ft.useRef=function(I){return ce.current.useRef(I)},ft.useState=function(I){return ce.current.useState(I)},ft.useSyncExternalStore=function(I,ie,Ne){return ce.current.useSyncExternalStore(I,ie,Ne)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var dp;function Df(){return dp||(dp=1,cu.exports=Iv()),cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Uv(){if(hp)return wo;hp=1;var s=Df(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,_={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:S,props:_,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var pp;function Fv(){return pp||(pp=1,lu.exports=Uv()),lu.exports}var k=Fv(),Wt=Df();const Ov=Mm(Wt);var Xa={},uu={exports:{}},wn={},fu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function kv(){return mp||(mp=1,(function(s){function e(z,le){var se=z.length;z.push(le);e:for(;0<se;){var I=se-1>>>1,ie=z[I];if(0<a(ie,le))z[I]=le,z[se]=ie,se=I;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var le=z[0],se=z.pop();if(se!==le){z[0]=se;e:for(var I=0,ie=z.length,Ne=ie>>>1;I<Ne;){var Z=2*(I+1)-1,ue=z[Z],Ee=Z+1,xe=z[Ee];if(0>a(ue,se))Ee<ie&&0>a(xe,ue)?(z[I]=xe,z[Ee]=se,I=Ee):(z[I]=ue,z[Z]=se,I=Z);else if(Ee<ie&&0>a(xe,se))z[I]=xe,z[Ee]=se,I=Ee;else break e}}return le}function a(z,le){var se=z.sortIndex-le.sortIndex;return se!==0?se:z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,_=null,x=3,S=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=z)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function R(z){if(A=!1,L(z),!E)if(n(p)!==null)E=!0,ae($);else{var le=n(m);le!==null&&ce(R,le.startTime-z)}}function $(z,le){E=!1,A&&(A=!1,g(W),W=-1),S=!0;var se=x;try{for(L(le),_=n(p);_!==null&&(!(_.expirationTime>le)||z&&!F());){var I=_.callback;if(typeof I=="function"){_.callback=null,x=_.priorityLevel;var ie=I(_.expirationTime<=le);le=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(p)&&r(p),L(le)}else r(p);_=n(p)}if(_!==null)var Ne=!0;else{var Z=n(m);Z!==null&&ce(R,Z.startTime-le),Ne=!1}return Ne}finally{_=null,x=se,S=!1}}var B=!1,U=null,W=-1,P=5,C=-1;function F(){return!(s.unstable_now()-C<P)}function oe(){if(U!==null){var z=s.unstable_now();C=z;var le=!0;try{le=U(!0,z)}finally{le?ne():(B=!1,U=null)}}else B=!1}var ne;if(typeof N=="function")ne=function(){N(oe)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=oe,ne=function(){pe.postMessage(null)}}else ne=function(){y(oe,0)};function ae(z){U=z,B||(B=!0,ne())}function ce(z,le){W=y(function(){z(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae($))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return z()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,le){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=x;x=z;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(z,le,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,z={id:v++,callback:le,priorityLevel:z,startTime:se,expirationTime:ie,sortIndex:-1},se>I?(z.sortIndex=se,e(m,z),n(p)===null&&z===n(m)&&(A?(g(W),W=-1):A=!0,ce(R,se-I))):(z.sortIndex=ie,e(p,z),E||S||(E=!0,ae($))),z},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(z){var le=x;return function(){var se=x;x=le;try{return z.apply(this,arguments)}finally{x=se}}}})(du)),du}var gp;function Bv(){return gp||(gp=1,fu.exports=kv()),fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function zv(){if(vp)return wn;vp=1;var s=Df(),e=Bv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),F=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function ie(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ne=!1;function Z(t,i){if(!t||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var u=J.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,D=h.length-1;1<=M&&0<=D&&u[M]!==h[D];)D--;for(;1<=M&&0<=D;M--,D--)if(u[M]!==h[D]){if(M!==1||D!==1)do if(M--,D--,0>D||u[M]!==h[D]){var O=`
`+u[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=D);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ie(t):""}function ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case B:return"Portal";case P:return"Profiler";case W:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ie(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function At(t){t._valueTracker||(t._valueTracker=Ze(t))}function ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function bt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function j(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function dn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){dt(t,i);var o=Ae(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||bt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ye=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ye(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function me(t,i){var o=Ae(i.value),l=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Qe(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Qe(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(ke[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Et=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,re=null,he=null;function Le(t){if(t=co(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),Re(t.stateNode,t.type,i))}}function be(t){re?he?he.push(t):he=[t]:re=t}function rt(){if(re){var t=re,i=he;if(he=re=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Dt(t,i){return t(i)}function Xt(){}var gt=!1;function _n(t,i,o){if(gt)return t(i,o);gt=!0;try{return Dt(t,i,o)}finally{gt=!1,(re!==null||he!==null)&&(Xt(),rt())}}function hn(t,i){var o=t.stateNode;if(o===null)return null;var l=oa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Kr=!1;if(d)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Kr=!1}function Si(t,i,o,l,u,h,M,D,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(_e){this.onError(_e)}}var Mi=!1,Mr=null,Er=!1,Xi=null,zo={onError:function(t){Mi=!0,Mr=t}};function Zr(t,i,o,l,u,h,M,D,O){Mi=!1,Mr=null,Si.apply(zo,arguments)}function Ho(t,i,o,l,u,h,M,D,O){if(Zr.apply(this,arguments),Mi){if(Mi){var J=Mr;Mi=!1,Mr=null}else throw Error(n(198));Er||(Er=!0,Xi=J)}}function hi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Go(t){if(hi(t)!==t)throw Error(n(188))}function bl(t){var i=t.alternate;if(!i){if(i=hi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Go(u),t;if(h===l)return Go(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var M=!1,D=u.child;D;){if(D===o){M=!0,o=u,l=h;break}if(D===l){M=!0,l=u,o=h;break}D=D.sibling}if(!M){for(D=h.child;D;){if(D===o){M=!0,o=h,l=u;break}if(D===l){M=!0,l=h,o=u;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function w(t){return t=bl(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var ee=e.unstable_scheduleCallback,te=e.unstable_cancelCallback,X=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,et=e.unstable_UserBlockingPriority,nt=e.unstable_NormalPriority,We=e.unstable_LowPriority,mt=e.unstable_IdlePriority,Mt=null,pt=null;function rn(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Mt,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:yt,je=Math.log,Zn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(je(t)/Zn|0)|0}var sn=64,Qn=4194304;function jt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pi(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~u;D!==0?l=jt(D):(h&=M,h!==0&&(l=jt(h)))}else M=o&~u,M!==0?l=jt(M):h!==0&&(l=jt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),u=1<<o,l|=t[o],i&=~u;return l}function Rt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-st(h),D=1<<M,O=u[M];O===-1?((D&o)===0||(D&l)!==0)&&(u[M]=Rt(D,i)):O<=i&&(t.expiredLanes|=D),h&=~D}}function Ei(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pn(){var t=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),t}function Hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function xn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function Wo(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-st(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function Ll(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var wt=0;function Gf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wf,Dl,Xf,jf,Yf,Nl=!1,Xo=[],ji=null,Yi=null,qi=null,Ys=new Map,qs=new Map,$i=[],ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(t,i){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=co(i),i!==null&&Dl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function ig(t,i,o,l,u){switch(i){case"focusin":return ji=$s(ji,t,i,o,l,u),!0;case"dragenter":return Yi=$s(Yi,t,i,o,l,u),!0;case"mouseover":return qi=$s(qi,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,o,l,u)),!0}return!1}function $f(t){var i=Tr(t.target);if(i!==null){var o=hi(i);if(o!==null){if(i=o.tag,i===13){if(i=Vo(o),i!==null){t.blockedOn=i,Yf(t.priority,function(){Xf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ul(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Et=l,o.target.dispatchEvent(l),Et=null}else return i=co(o),i!==null&&Dl(i),t.blockedOn=o,!1;i.shift()}return!0}function Kf(t,i,o){jo(t)&&o.delete(i)}function rg(){Nl=!1,ji!==null&&jo(ji)&&(ji=null),Yi!==null&&jo(Yi)&&(Yi=null),qi!==null&&jo(qi)&&(qi=null),Ys.forEach(Kf),qs.forEach(Kf)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Nl||(Nl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rg)))}function Zs(t){function i(u){return Ks(u,t)}if(0<Xo.length){Ks(Xo[0],t);for(var o=1;o<Xo.length;o++){var l=Xo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(ji!==null&&Ks(ji,t),Yi!==null&&Ks(Yi,t),qi!==null&&Ks(qi,t),Ys.forEach(i),qs.forEach(i),o=0;o<$i.length;o++)l=$i[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)$f(o),o.blockedOn===null&&$i.shift()}var Qr=R.ReactCurrentBatchConfig,Yo=!0;function sg(t,i,o,l){var u=wt,h=Qr.transition;Qr.transition=null;try{wt=1,Il(t,i,o,l)}finally{wt=u,Qr.transition=h}}function og(t,i,o,l){var u=wt,h=Qr.transition;Qr.transition=null;try{wt=4,Il(t,i,o,l)}finally{wt=u,Qr.transition=h}}function Il(t,i,o,l){if(Yo){var u=Ul(t,i,o,l);if(u===null)Ql(t,i,l,qo,o),qf(t,l);else if(ig(u,t,i,o,l))l.stopPropagation();else if(qf(t,l),i&4&&-1<ng.indexOf(t)){for(;u!==null;){var h=co(u);if(h!==null&&Wf(h),h=Ul(t,i,o,l),h===null&&Ql(t,i,l,qo,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else Ql(t,i,l,null,o)}}var qo=null;function Ul(t,i,o,l){if(qo=null,t=V(l),t=Tr(t),t!==null)if(i=hi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Vo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return qo=t,null}function Zf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case ze:return 1;case et:return 4;case nt:case We:return 16;case mt:return 536870912;default:return 16}default:return 16}}var Ki=null,Fl=null,$o=null;function Qf(){if($o)return $o;var t,i=Fl,o=i.length,l,u="value"in Ki?Ki.value:Ki.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===u[h-l];l++);return $o=u.slice(t,1<l?1-l:void 0)}function Ko(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Jf(){return!1}function Ln(t){function i(o,l,u,h,M){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:Jf,this.isPropagationStopped=Jf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Ln(Jr),Qs=se({},Jr,{view:0,detail:0}),ag=Ln(Qs),kl,Bl,Js,Qo=se({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(kl=t.screenX-Js.screenX,Bl=t.screenY-Js.screenY):Bl=kl=0,Js=t),kl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),ed=Ln(Qo),lg=se({},Qo,{dataTransfer:0}),cg=Ln(lg),ug=se({},Qs,{relatedTarget:0}),zl=Ln(ug),fg=se({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),dg=Ln(fg),hg=se({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pg=Ln(hg),mg=se({},Jr,{data:0}),td=Ln(mg),gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_g[t])?!!i[t]:!1}function Hl(){return xg}var yg=se({},Qs,{key:function(t){if(t.key){var i=gg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hl,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sg=Ln(yg),Mg=se({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=Ln(Mg),Eg=se({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hl}),Tg=Ln(Eg),wg=se({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ag=Ln(wg),Cg=se({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=Ln(Cg),Pg=[9,13,27,32],Vl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var bg=d&&"TextEvent"in window&&!eo,id=d&&(!Vl||eo&&8<eo&&11>=eo),rd=" ",sd=!1;function od(t,i){switch(t){case"keyup":return Pg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Lg(t,i){switch(t){case"compositionend":return ad(i);case"keypress":return i.which!==32?null:(sd=!0,rd);case"textInput":return t=i.data,t===rd&&sd?null:t;default:return null}}function Dg(t,i){if(es)return t==="compositionend"||!Vl&&od(t,i)?(t=Qf(),$o=Fl=Ki=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return id&&i.locale!=="ko"?null:i.data;default:return null}}var Ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ng[t.type]:i==="textarea"}function cd(t,i,o,l){be(l),i=ia(i,"onChange"),0<i.length&&(o=new Ol("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Ig(t){Cd(t,0)}function Jo(t){var i=ss(t);if(ht(i))return t}function Ug(t,i){if(t==="change")return i}var ud=!1;if(d){var Gl;if(d){var Wl="oninput"in document;if(!Wl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Wl=typeof fd.oninput=="function"}Gl=Wl}else Gl=!1;ud=Gl&&(!document.documentMode||9<document.documentMode)}function dd(){to&&(to.detachEvent("onpropertychange",hd),no=to=null)}function hd(t){if(t.propertyName==="value"&&Jo(no)){var i=[];cd(i,no,t,V(t)),_n(Ig,i)}}function Fg(t,i,o){t==="focusin"?(dd(),to=i,no=o,to.attachEvent("onpropertychange",hd)):t==="focusout"&&dd()}function Og(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(no)}function kg(t,i){if(t==="click")return Jo(i)}function Bg(t,i){if(t==="input"||t==="change")return Jo(i)}function zg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:zg;function io(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!Jn(t[u],i[u]))return!1}return!0}function pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function md(t,i){var o=pd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=pd(o)}}function gd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?gd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vd(){for(var t=window,i=bt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=bt(t.document)}return i}function Xl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Hg(t){var i=vd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&gd(o.ownerDocument.documentElement,o)){if(l!==null&&Xl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=md(o,h);var M=md(o,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vg=d&&"documentMode"in document&&11>=document.documentMode,ts=null,jl=null,ro=null,Yl=!1;function _d(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yl||ts==null||ts!==bt(l)||(l=ts,"selectionStart"in l&&Xl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ia(jl,"onSelect"),0<l.length&&(i=new Ol("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ts)))}function ea(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ns={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ql={},xd={};d&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function ta(t){if(ql[t])return ql[t];if(!ns[t])return t;var i=ns[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in xd)return ql[t]=i[o];return t}var yd=ta("animationend"),Sd=ta("animationiteration"),Md=ta("animationstart"),Ed=ta("transitionend"),Td=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,i){Td.set(t,i),c(i,[t])}for(var $l=0;$l<wd.length;$l++){var Kl=wd[$l],Gg=Kl.toLowerCase(),Wg=Kl[0].toUpperCase()+Kl.slice(1);Zi(Gg,"on"+Wg)}Zi(yd,"onAnimationEnd"),Zi(Sd,"onAnimationIteration"),Zi(Md,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Ed,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Ad(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Ho(l,i,void 0,t),t.currentTarget=null}function Cd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],O=D.instance,J=D.currentTarget;if(D=D.listener,O!==h&&u.isPropagationStopped())break e;Ad(u,D,J),h=O}else for(M=0;M<l.length;M++){if(D=l[M],O=D.instance,J=D.currentTarget,D=D.listener,O!==h&&u.isPropagationStopped())break e;Ad(u,D,J),h=O}}}if(Er)throw t=Xi,Er=!1,Xi=null,t}function Nt(t,i){var o=i[rc];o===void 0&&(o=i[rc]=new Set);var l=t+"__bubble";o.has(l)||(Rd(i,t,2,!1),o.add(l))}function Zl(t,i,o){var l=0;i&&(l|=4),Rd(o,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[na]){t[na]=!0,r.forEach(function(o){o!=="selectionchange"&&(Xg.has(o)||Zl(o,!1,t),Zl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,Zl("selectionchange",!1,i))}}function Rd(t,i,o,l){switch(Zf(i)){case 1:var u=sg;break;case 4:u=og;break;default:u=Il}o=u.bind(null,i,o,t),u=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function Ql(t,i,o,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;M=M.return}for(;D!==null;){if(M=Tr(D),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}D=D.parentNode}}l=l.return}_n(function(){var J=h,_e=V(o),ye=[];e:{var ge=Td.get(t);if(ge!==void 0){var De=Ol,Be=t;switch(t){case"keypress":if(Ko(o)===0)break e;case"keydown":case"keyup":De=Sg;break;case"focusin":Be="focus",De=zl;break;case"focusout":Be="blur",De=zl;break;case"beforeblur":case"afterblur":De=zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=Tg;break;case yd:case Sd:case Md:De=dg;break;case Ed:De=Ag;break;case"scroll":De=ag;break;case"wheel":De=Rg;break;case"copy":case"cut":case"paste":De=pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=nd}var He=(i&4)!==0,Bt=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var H=J,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,Y!==null&&(Te=hn(H,Y),Te!=null&&He.push(ao(H,Te,q)))),Bt)break;H=H.return}0<He.length&&(ge=new De(ge,Be,null,o,_e),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&o!==Et&&(Be=o.relatedTarget||o.fromElement)&&(Tr(Be)||Be[Ti]))break e;if((De||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(Be=o.relatedTarget||o.toElement,De=J,Be=Be?Tr(Be):null,Be!==null&&(Bt=hi(Be),Be!==Bt||Be.tag!==5&&Be.tag!==6)&&(Be=null)):(De=null,Be=J),De!==Be)){if(He=ed,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(He=nd,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Bt=De==null?ge:ss(De),q=Be==null?ge:ss(Be),ge=new He(Te,H+"leave",De,o,_e),ge.target=Bt,ge.relatedTarget=q,Te=null,Tr(_e)===J&&(He=new He(Y,H+"enter",Be,o,_e),He.target=q,He.relatedTarget=Bt,Te=He),Bt=Te,De&&Be)t:{for(He=De,Y=Be,H=0,q=He;q;q=is(q))H++;for(q=0,Te=Y;Te;Te=is(Te))q++;for(;0<H-q;)He=is(He),H--;for(;0<q-H;)Y=is(Y),q--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=is(He),Y=is(Y)}He=null}else He=null;De!==null&&Pd(ye,ge,De,He,!1),Be!==null&&Bt!==null&&Pd(ye,Bt,Be,He,!0)}}e:{if(ge=J?ss(J):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var Xe=Ug;else if(ld(ge))if(ud)Xe=Bg;else{Xe=Og;var $e=Fg}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=kg);if(Xe&&(Xe=Xe(t,J))){cd(ye,Xe,o,_e);break e}$e&&$e(t,ge,J),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&Tt(ge,"number",ge.value)}switch($e=J?ss(J):window,t){case"focusin":(ld($e)||$e.contentEditable==="true")&&(ts=$e,jl=J,ro=null);break;case"focusout":ro=jl=ts=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,_d(ye,o,_e);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":_d(ye,o,_e)}var Ke;if(Vl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else es?od(t,o)&&(tt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(tt="onCompositionStart");tt&&(id&&o.locale!=="ko"&&(es||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&es&&(Ke=Qf()):(Ki=_e,Fl="value"in Ki?Ki.value:Ki.textContent,es=!0)),$e=ia(J,tt),0<$e.length&&(tt=new td(tt,t,null,o,_e),ye.push({event:tt,listeners:$e}),Ke?tt.data=Ke:(Ke=ad(o),Ke!==null&&(tt.data=Ke)))),(Ke=bg?Lg(t,o):Dg(t,o))&&(J=ia(J,"onBeforeInput"),0<J.length&&(_e=new td("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:J}),_e.data=Ke))}Cd(ye,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ia(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=hn(t,o),h!=null&&l.unshift(ao(t,h,u)),h=hn(t,i),h!=null&&l.push(ao(t,h,u))),t=t.return}return l}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pd(t,i,o,l,u){for(var h=i._reactName,M=[];o!==null&&o!==l;){var D=o,O=D.alternate,J=D.stateNode;if(O!==null&&O===l)break;D.tag===5&&J!==null&&(D=J,u?(O=hn(o,h),O!=null&&M.unshift(ao(o,O,D))):u||(O=hn(o,h),O!=null&&M.push(ao(o,O,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var jg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(jg,`
`).replace(Yg,"")}function ra(t,i,o){if(i=bd(i),bd(t)!==i&&o)throw Error(n(425))}function sa(){}var Jl=null,ec=null;function tc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nc=typeof setTimeout=="function"?setTimeout:void 0,qg=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,$g=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(Kg)}:nc;function Kg(t){setTimeout(function(){throw t})}function ic(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Zs(i)}function Qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Dd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),mi="__reactFiber$"+rs,lo="__reactProps$"+rs,Ti="__reactContainer$"+rs,rc="__reactEvents$"+rs,Zg="__reactListeners$"+rs,Qg="__reactHandles$"+rs;function Tr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Dd(t);t!==null;){if(o=t[mi])return o;t=Dd(t)}return i}t=o,o=t.parentNode}return null}function co(t){return t=t[mi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[lo]||null}var sc=[],os=-1;function Ji(t){return{current:t}}function It(t){0>os||(t.current=sc[os],sc[os]=null,os--)}function Lt(t,i){os++,sc[os]=t.current,t.current=i}var er={},on=Ji(er),yn=Ji(!1),wr=er;function as(t,i){var o=t.type.contextTypes;if(!o)return er;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Sn(t){return t=t.childContextTypes,t!=null}function aa(){It(yn),It(on)}function Nd(t,i,o){if(on.current!==er)throw Error(n(168));Lt(on,i),Lt(yn,o)}function Id(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},o,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,wr=on.current,Lt(on,t),Lt(yn,yn.current),!0}function Ud(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Id(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,It(yn),It(on),Lt(on,t)):It(yn),Lt(yn,o)}var wi=null,ca=!1,oc=!1;function Fd(t){wi===null?wi=[t]:wi.push(t)}function Jg(t){ca=!0,Fd(t)}function tr(){if(!oc&&wi!==null){oc=!0;var t=0,i=wt;try{var o=wi;for(wt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}wi=null,ca=!1}catch(u){throw wi!==null&&(wi=wi.slice(t+1)),ee(ze,tr),u}finally{wt=i,oc=!1}}return null}var ls=[],cs=0,ua=null,fa=0,Vn=[],Gn=0,Ar=null,Ai=1,Ci="";function Cr(t,i){ls[cs++]=fa,ls[cs++]=ua,ua=t,fa=i}function Od(t,i,o){Vn[Gn++]=Ai,Vn[Gn++]=Ci,Vn[Gn++]=Ar,Ar=t;var l=Ai;t=Ci;var u=32-st(l)-1;l&=~(1<<u),o+=1;var h=32-st(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Ai=1<<32-st(i)+u|o<<u|l,Ci=h+t}else Ai=1<<h|o<<u|l,Ci=t}function ac(t){t.return!==null&&(Cr(t,1),Od(t,1,0))}function lc(t){for(;t===ua;)ua=ls[--cs],ls[cs]=null,fa=ls[--cs],ls[cs]=null;for(;t===Ar;)Ar=Vn[--Gn],Vn[Gn]=null,Ci=Vn[--Gn],Vn[Gn]=null,Ai=Vn[--Gn],Vn[Gn]=null}var Dn=null,Nn=null,Ut=!1,ei=null;function kd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Bd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Nn=Qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ar!==null?{id:Ai,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Dn=t,Nn=null,!0):!1;default:return!1}}function cc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uc(t){if(Ut){var i=Nn;if(i){var o=i;if(!Bd(t,i)){if(cc(t))throw Error(n(418));i=Qi(o.nextSibling);var l=Dn;i&&Bd(t,i)?kd(l,o):(t.flags=t.flags&-4097|2,Ut=!1,Dn=t)}}else{if(cc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ut=!1,Dn=t}}}function zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function da(t){if(t!==Dn)return!1;if(!Ut)return zd(t),Ut=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!tc(t.type,t.memoizedProps)),i&&(i=Nn)){if(cc(t))throw Hd(),Error(n(418));for(;i;)kd(t,i),i=Qi(i.nextSibling)}if(zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nn=Qi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nn=null}}else Nn=Dn?Qi(t.stateNode.nextSibling):null;return!0}function Hd(){for(var t=Nn;t;)t=Qi(t.nextSibling)}function us(){Nn=Dn=null,Ut=!1}function fc(t){ei===null?ei=[t]:ei.push(t)}var ev=R.ReactCurrentBatchConfig;function uo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var D=u.refs;M===null?delete D[h]:D[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Vd(t){var i=t._init;return i(t._payload)}function Gd(t){function i(Y,H){if(t){var q=Y.deletions;q===null?(Y.deletions=[H],Y.flags|=16):q.push(H)}}function o(Y,H){if(!t)return null;for(;H!==null;)i(Y,H),H=H.sibling;return null}function l(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function u(Y,H){return Y=cr(Y,H),Y.index=0,Y.sibling=null,Y}function h(Y,H,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<H?(Y.flags|=2,H):q):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,H,q,Te){return H===null||H.tag!==6?(H=nu(q,Y.mode,Te),H.return=Y,H):(H=u(H,q),H.return=Y,H)}function O(Y,H,q,Te){var Xe=q.type;return Xe===U?_e(Y,H,q.props.children,Te,q.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Vd(Xe)===H.type)?(Te=u(H,q.props),Te.ref=uo(Y,H,q),Te.return=Y,Te):(Te=Oa(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=uo(Y,H,q),Te.return=Y,Te)}function J(Y,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=iu(q,Y.mode,Te),H.return=Y,H):(H=u(H,q.children||[]),H.return=Y,H)}function _e(Y,H,q,Te,Xe){return H===null||H.tag!==7?(H=Ur(q,Y.mode,Te,Xe),H.return=Y,H):(H=u(H,q),H.return=Y,H)}function ye(Y,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=nu(""+H,Y.mode,q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case $:return q=Oa(H.type,H.key,H.props,null,Y.mode,q),q.ref=uo(Y,null,H),q.return=Y,q;case B:return H=iu(H,Y.mode,q),H.return=Y,H;case ae:var Te=H._init;return ye(Y,Te(H._payload),q)}if(Ye(H)||le(H))return H=Ur(H,Y.mode,q,null),H.return=Y,H;ha(Y,H)}return null}function ge(Y,H,q,Te){var Xe=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Xe!==null?null:D(Y,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case $:return q.key===Xe?O(Y,H,q,Te):null;case B:return q.key===Xe?J(Y,H,q,Te):null;case ae:return Xe=q._init,ge(Y,H,Xe(q._payload),Te)}if(Ye(q)||le(q))return Xe!==null?null:_e(Y,H,q,Te,null);ha(Y,q)}return null}function De(Y,H,q,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(q)||null,D(H,Y,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case $:return Y=Y.get(Te.key===null?q:Te.key)||null,O(H,Y,Te,Xe);case B:return Y=Y.get(Te.key===null?q:Te.key)||null,J(H,Y,Te,Xe);case ae:var $e=Te._init;return De(Y,H,q,$e(Te._payload),Xe)}if(Ye(Te)||le(Te))return Y=Y.get(q)||null,_e(H,Y,Te,Xe,null);ha(H,Te)}return null}function Be(Y,H,q,Te){for(var Xe=null,$e=null,Ke=H,tt=H=0,Jt=null;Ke!==null&&tt<q.length;tt++){Ke.index>tt?(Jt=Ke,Ke=null):Jt=Ke.sibling;var St=ge(Y,Ke,q[tt],Te);if(St===null){Ke===null&&(Ke=Jt);break}t&&Ke&&St.alternate===null&&i(Y,Ke),H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St,Ke=Jt}if(tt===q.length)return o(Y,Ke),Ut&&Cr(Y,tt),Xe;if(Ke===null){for(;tt<q.length;tt++)Ke=ye(Y,q[tt],Te),Ke!==null&&(H=h(Ke,H,tt),$e===null?Xe=Ke:$e.sibling=Ke,$e=Ke);return Ut&&Cr(Y,tt),Xe}for(Ke=l(Y,Ke);tt<q.length;tt++)Jt=De(Ke,Y,tt,q[tt],Te),Jt!==null&&(t&&Jt.alternate!==null&&Ke.delete(Jt.key===null?tt:Jt.key),H=h(Jt,H,tt),$e===null?Xe=Jt:$e.sibling=Jt,$e=Jt);return t&&Ke.forEach(function(ur){return i(Y,ur)}),Ut&&Cr(Y,tt),Xe}function He(Y,H,q,Te){var Xe=le(q);if(typeof Xe!="function")throw Error(n(150));if(q=Xe.call(q),q==null)throw Error(n(151));for(var $e=Xe=null,Ke=H,tt=H=0,Jt=null,St=q.next();Ke!==null&&!St.done;tt++,St=q.next()){Ke.index>tt?(Jt=Ke,Ke=null):Jt=Ke.sibling;var ur=ge(Y,Ke,St.value,Te);if(ur===null){Ke===null&&(Ke=Jt);break}t&&Ke&&ur.alternate===null&&i(Y,Ke),H=h(ur,H,tt),$e===null?Xe=ur:$e.sibling=ur,$e=ur,Ke=Jt}if(St.done)return o(Y,Ke),Ut&&Cr(Y,tt),Xe;if(Ke===null){for(;!St.done;tt++,St=q.next())St=ye(Y,St.value,Te),St!==null&&(H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return Ut&&Cr(Y,tt),Xe}for(Ke=l(Y,Ke);!St.done;tt++,St=q.next())St=De(Ke,Y,tt,St.value,Te),St!==null&&(t&&St.alternate!==null&&Ke.delete(St.key===null?tt:St.key),H=h(St,H,tt),$e===null?Xe=St:$e.sibling=St,$e=St);return t&&Ke.forEach(function(Nv){return i(Y,Nv)}),Ut&&Cr(Y,tt),Xe}function Bt(Y,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===U&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case $:e:{for(var Xe=q.key,$e=H;$e!==null;){if($e.key===Xe){if(Xe=q.type,Xe===U){if($e.tag===7){o(Y,$e.sibling),H=u($e,q.props.children),H.return=Y,Y=H;break e}}else if($e.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Vd(Xe)===$e.type){o(Y,$e.sibling),H=u($e,q.props),H.ref=uo(Y,$e,q),H.return=Y,Y=H;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}q.type===U?(H=Ur(q.props.children,Y.mode,Te,q.key),H.return=Y,Y=H):(Te=Oa(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=uo(Y,H,q),Te.return=Y,Y=Te)}return M(Y);case B:e:{for($e=q.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){o(Y,H.sibling),H=u(H,q.children||[]),H.return=Y,Y=H;break e}else{o(Y,H);break}else i(Y,H);H=H.sibling}H=iu(q,Y.mode,Te),H.return=Y,Y=H}return M(Y);case ae:return $e=q._init,Bt(Y,H,$e(q._payload),Te)}if(Ye(q))return Be(Y,H,q,Te);if(le(q))return He(Y,H,q,Te);ha(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(o(Y,H.sibling),H=u(H,q),H.return=Y,Y=H):(o(Y,H),H=nu(q,Y.mode,Te),H.return=Y,Y=H),M(Y)):o(Y,H)}return Bt}var fs=Gd(!0),Wd=Gd(!1),pa=Ji(null),ma=null,ds=null,dc=null;function hc(){dc=ds=ma=null}function pc(t){var i=pa.current;It(pa),t._currentValue=i}function mc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function hs(t,i){ma=t,dc=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Mn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(dc!==t)if(t={context:t,memoizedValue:i,next:null},ds===null){if(ma===null)throw Error(n(308));ds=t,ma.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return i}var Rr=null;function gc(t){Rr===null?Rr=[t]:Rr.push(t)}function Xd(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,gc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ri(t,l)}function Ri(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var nr=!1;function vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ir(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(vt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ri(t,o)}return u=l.interleaved,u===null?(i.next=i,gc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ri(t,o)}function ga(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ll(t,o)}}function Yd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function va(t,i,o,l){var u=t.updateQueue;nr=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var O=D,J=O.next;O.next=null,M===null?h=J:M.next=J,M=O;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==M&&(D===null?_e.firstBaseUpdate=J:D.next=J,_e.lastBaseUpdate=O))}if(h!==null){var ye=u.baseState;M=0,_e=J=O=null,D=h;do{var ge=D.lane,De=D.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Be=t,He=D;switch(ge=i,De=o,He.tag){case 1:if(Be=He.payload,typeof Be=="function"){ye=Be.call(De,ye,ge);break e}ye=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=He.payload,ge=typeof Be=="function"?Be.call(De,ye,ge):Be,ge==null)break e;ye=se({},ye,ge);break e;case 2:nr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(J=_e=De,O=ye):_e=_e.next=De,M|=ge;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(_e===null&&(O=ye),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=ye}}function qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var fo={},gi=Ji(fo),ho=Ji(fo),po=Ji(fo);function Pr(t){if(t===fo)throw Error(n(174));return t}function _c(t,i){switch(Lt(po,i),Lt(ho,t),Lt(gi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(gi),Lt(gi,i)}function ps(){It(gi),It(ho),It(po)}function $d(t){Pr(po.current);var i=Pr(gi.current),o=Ve(i,t.type);i!==o&&(Lt(ho,t),Lt(gi,o))}function xc(t){ho.current===t&&(It(gi),It(ho))}var Ft=Ji(0);function _a(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yc=[];function Sc(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var xa=R.ReactCurrentDispatcher,Mc=R.ReactCurrentBatchConfig,br=0,Ot=null,Yt=null,Zt=null,ya=!1,mo=!1,go=0,tv=0;function an(){throw Error(n(321))}function Ec(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Tc(t,i,o,l,u,h){if(br=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?sv:ov,t=o(l,u),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Zt=Yt=null,i.updateQueue=null,xa.current=av,t=o(l,u)}while(mo)}if(xa.current=Ea,i=Yt!==null&&Yt.next!==null,br=0,Zt=Yt=Ot=null,ya=!1,i)throw Error(n(300));return t}function wc(){var t=go!==0;return go=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Xn(){if(Yt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Yt=t;else{if(t===null)throw Error(n(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function vo(t,i){return typeof i=="function"?i(t):i}function Ac(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Yt,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var D=M=null,O=null,J=h;do{var _e=J.lane;if((br&_e)===_e)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var ye={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(D=O=ye,M=l):O=O.next=ye,Ot.lanes|=_e,Lr|=_e}J=J.next}while(J!==null&&J!==h);O===null?M=l:O.next=D,Jn(l,i.memoizedState)||(Mn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,Ot.lanes|=h,Lr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cc(t){var i=Xn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);Jn(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Kd(){}function Zd(t,i){var o=Ot,l=Xn(),u=i(),h=!Jn(l.memoizedState,u);if(h&&(l.memoizedState=u,Mn=!0),l=l.queue,Rc(eh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(o.flags|=2048,_o(9,Jd.bind(null,o,l,u,i),void 0,null),Qt===null)throw Error(n(349));(br&30)!==0||Qd(o,i,u)}return u}function Qd(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Jd(t,i,o,l){i.value=o,i.getSnapshot=l,th(i)&&nh(t)}function eh(t,i,o){return o(function(){th(i)&&nh(t)})}function th(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function nh(t){var i=Ri(t,1);i!==null&&ri(i,t,1,-1)}function ih(t){var i=vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=rv.bind(null,Ot,t),[i.memoizedState,t]}function _o(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function rh(){return Xn().memoizedState}function Sa(t,i,o,l){var u=vi();Ot.flags|=t,u.memoizedState=_o(1|i,o,void 0,l===void 0?null:l)}function Ma(t,i,o,l){var u=Xn();l=l===void 0?null:l;var h=void 0;if(Yt!==null){var M=Yt.memoizedState;if(h=M.destroy,l!==null&&Ec(l,M.deps)){u.memoizedState=_o(i,o,h,l);return}}Ot.flags|=t,u.memoizedState=_o(1|i,o,h,l)}function sh(t,i){return Sa(8390656,8,t,i)}function Rc(t,i){return Ma(2048,8,t,i)}function oh(t,i){return Ma(4,2,t,i)}function ah(t,i){return Ma(4,4,t,i)}function lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ch(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4,4,lh.bind(null,i,t),o)}function Pc(){}function uh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ec(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function fh(t,i){var o=Xn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Ec(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function dh(t,i,o){return(br&21)===0?(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=o):(Jn(o,i)||(o=pn(),Ot.lanes|=o,Lr|=o,t.baseState=!0),i)}function nv(t,i){var o=wt;wt=o!==0&&4>o?o:4,t(!0);var l=Mc.transition;Mc.transition={};try{t(!1),i()}finally{wt=o,Mc.transition=l}}function hh(){return Xn().memoizedState}function iv(t,i,o){var l=ar(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},ph(t))mh(i,o);else if(o=Xd(t,i,o,l),o!==null){var u=gn();ri(o,t,l,u),gh(o,i,l)}}function rv(t,i,o){var l=ar(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(ph(t))mh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,D=h(M,o);if(u.hasEagerState=!0,u.eagerState=D,Jn(D,M)){var O=i.interleaved;O===null?(u.next=u,gc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}o=Xd(t,i,u,l),o!==null&&(u=gn(),ri(o,t,l,u),gh(o,i,l))}}function ph(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function mh(t,i){mo=ya=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function gh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ll(t,o)}}var Ea={readContext:Wn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},sv={readContext:Wn,useCallback:function(t,i){return vi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:sh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Sa(4194308,4,lh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Sa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Sa(4,2,t,i)},useMemo:function(t,i){var o=vi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=vi();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=iv.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=vi();return t={current:t},i.memoizedState=t},useState:ih,useDebugValue:Pc,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=ih(!1),i=t[0];return t=nv.bind(null,t[1]),vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ot,u=vi();if(Ut){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Qt===null)throw Error(n(349));(br&30)!==0||Qd(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,sh(eh.bind(null,l,h,t),[t]),l.flags|=2048,_o(9,Jd.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=vi(),i=Qt.identifierPrefix;if(Ut){var o=Ci,l=Ai;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=tv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ov={readContext:Wn,useCallback:uh,useContext:Wn,useEffect:Rc,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:Ac,useRef:rh,useState:function(){return Ac(vo)},useDebugValue:Pc,useDeferredValue:function(t){var i=Xn();return dh(i,Yt.memoizedState,t)},useTransition:function(){var t=Ac(vo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Kd,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1},av={readContext:Wn,useCallback:uh,useContext:Wn,useEffect:Rc,useImperativeHandle:ch,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:Cc,useRef:rh,useState:function(){return Cc(vo)},useDebugValue:Pc,useDeferredValue:function(t){var i=Xn();return Yt===null?i.memoizedState=t:dh(i,Yt.memoizedState,t)},useTransition:function(){var t=Cc(vo)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:Kd,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function bc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ta={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=gn(),u=ar(t),h=Pi(l,u);h.payload=i,o!=null&&(h.callback=o),i=ir(t,h,u),i!==null&&(ri(i,t,u,l),ga(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=gn(),u=ar(t),h=Pi(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ir(t,h,u),i!==null&&(ri(i,t,u,l),ga(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=gn(),l=ar(t),u=Pi(o,l);u.tag=2,i!=null&&(u.callback=i),i=ir(t,u,l),i!==null&&(ri(i,t,l,o),ga(i,t,l))}};function vh(t,i,o,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(u,h):!0}function _h(t,i,o){var l=!1,u=er,h=i.contextType;return typeof h=="object"&&h!==null?h=Wn(h):(u=Sn(i)?wr:on.current,l=i.contextTypes,h=(l=l!=null)?as(t,u):er),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function xh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function Lc(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},vc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Wn(h):(h=Sn(i)?wr:on.current,u.context=as(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(bc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Ta.enqueueReplaceState(u,u.state,null),va(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,i){try{var o="",l=i;do o+=ue(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Dc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Nc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var lv=typeof WeakMap=="function"?WeakMap:Map;function yh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){La||(La=!0,qc=l),Nc(t,i)},o}function Sh(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Nc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Nc(t,i),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Mh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new lv;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=Mv.bind(null,t,i,o),i.then(t,t))}function Eh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Th(t,i,o,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,ir(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var cv=R.ReactCurrentOwner,Mn=!1;function mn(t,i,o,l){i.child=t===null?Wd(i,null,o,l):fs(i,t.child,o,l)}function wh(t,i,o,l,u){o=o.render;var h=i.ref;return hs(i,u),l=Tc(t,i,o,l,h,u),o=wc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,bi(t,i,u)):(Ut&&o&&ac(i),i.flags|=1,mn(t,i,l,u),i.child)}function Ah(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!tu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Ch(t,i,h,l,u)):(t=Oa(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(M,l)&&t.ref===i.ref)return bi(t,i,u)}return i.flags|=1,t=cr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ch(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,bi(t,i,u)}return Ic(t,i,o,l,u)}function Rh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(vs,In),In|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(vs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Lt(vs,In),In|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Lt(vs,In),In|=l;return mn(t,i,u,o),i.child}function Ph(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ic(t,i,o,l,u){var h=Sn(o)?wr:on.current;return h=as(i,h),hs(i,u),o=Tc(t,i,o,l,h,u),l=wc(),t!==null&&!Mn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,bi(t,i,u)):(Ut&&l&&ac(i),i.flags|=1,mn(t,i,o,u),i.child)}function bh(t,i,o,l,u){if(Sn(o)){var h=!0;la(i)}else h=!1;if(hs(i,u),i.stateNode===null)Aa(t,i),_h(i,o,l),Lc(i,o,l,u),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var O=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Wn(J):(J=Sn(o)?wr:on.current,J=as(i,J));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||O!==J)&&xh(i,M,l,J),nr=!1;var ge=i.memoizedState;M.state=ge,va(i,l,M,u),O=i.memoizedState,D!==l||ge!==O||yn.current||nr?(typeof _e=="function"&&(bc(i,o,_e,l),O=i.memoizedState),(D=nr||vh(i,o,D,l,ge,O,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=J,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,jd(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:ti(i.type,D),M.props=J,ye=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Wn(O):(O=Sn(o)?wr:on.current,O=as(i,O));var De=o.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==O)&&xh(i,M,l,O),nr=!1,ge=i.memoizedState,M.state=ge,va(i,l,M,u);var Be=i.memoizedState;D!==ye||ge!==Be||yn.current||nr?(typeof De=="function"&&(bc(i,o,De,l),Be=i.memoizedState),(J=nr||vh(i,o,J,l,ge,Be,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Be,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Be,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Be),M.props=l,M.state=Be,M.context=O,l=J):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Uc(t,i,o,l,h,u)}function Uc(t,i,o,l,u,h){Ph(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Ud(i,o,!1),bi(t,i,h);l=i.stateNode,cv.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=fs(i,t.child,null,h),i.child=fs(i,null,D,h)):mn(t,i,D,h),i.memoizedState=l.state,u&&Ud(i,o,!0),i.child}function Lh(t){var i=t.stateNode;i.pendingContext?Nd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Nd(t,i.context,!1),_c(t,i.containerInfo)}function Dh(t,i,o,l,u){return us(),fc(u),i.flags|=256,mn(t,i,o,l),i.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nh(t,i,o){var l=i.pendingProps,u=Ft.current,h=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Lt(Ft,u&1),t===null)return uc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Ur(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Oc(o),i.memoizedState=Fc,t):kc(i,M));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return uv(t,i,M,l,D,u,o);if(h){h=l.fallback,M=i.mode,u=t.child,D=u.sibling;var O={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=cr(u,O),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?h=cr(D,h):(h=Ur(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Oc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Fc,l}return h=t.child,t=h.sibling,l=cr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function kc(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,o,l){return l!==null&&fc(l),fs(i,t.child,null,o),t=kc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function uv(t,i,o,l,u,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Dc(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=ka({mode:"visible",children:l.children},u,0,null),h=Ur(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&fs(i,t.child,null,M),i.child.memoizedState=Oc(M),i.memoizedState=Fc,h);if((i.mode&1)===0)return wa(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Dc(h,l,void 0),wa(t,i,M,l)}if(D=(M&t.childLanes)!==0,Mn||D){if(l=Qt,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|M))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Ri(t,u),ri(l,t,u,-1))}return eu(),l=Dc(Error(n(421))),wa(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=Ev.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,Nn=Qi(u.nextSibling),Dn=i,Ut=!0,ei=null,t!==null&&(Vn[Gn++]=Ai,Vn[Gn++]=Ci,Vn[Gn++]=Ar,Ai=t.id,Ci=t.overflow,Ar=i),i=kc(i,l.children),i.flags|=4096,i)}function Ih(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),mc(t.return,i,o)}function Bc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Uh(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(mn(t,i,l.children,o),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,o,i);else if(t.tag===19)Ih(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Lt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&_a(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Bc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&_a(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Bc(i,!0,o,null,h);break;case"together":Bc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function fv(t,i,o){switch(i.tag){case 3:Lh(i),us();break;case 5:$d(i);break;case 1:Sn(i.type)&&la(i);break;case 4:_c(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Lt(pa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Lt(Ft,Ft.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Nh(t,i,o):(Lt(Ft,Ft.current&1),t=bi(t,i,o),t!==null?t.sibling:null);Lt(Ft,Ft.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Uh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Rh(t,i,o)}return bi(t,i,o)}var Fh,zc,Oh,kh;Fh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zc=function(){},Oh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Pr(gi.current);var h=null;switch(o){case"input":u=j(t,u),l=j(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=T(t,u),l=T(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}ut(o,l);var M;o=null;for(J in u)if(!l.hasOwnProperty(J)&&u.hasOwnProperty(J)&&u[J]!=null)if(J==="style"){var D=u[J];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var O=l[J];if(D=u!=null?u[J]:void 0,l.hasOwnProperty(J)&&O!==D&&(O!=null||D!=null))if(J==="style")if(D){for(M in D)!D.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&D[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(h=h||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Nt("scroll",t),h||D===O||(h=[])):(h=h||[]).push(J,O))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},kh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function dv(t,i,o){var l=i.pendingProps;switch(lc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return Sn(i.type)&&aa(),ln(i),null;case 3:return l=i.stateNode,ps(),It(yn),It(on),Sc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(Zc(ei),ei=null))),zc(t,i),ln(i),null;case 5:xc(i);var u=Pr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)Oh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Pr(gi.current),da(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[mi]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",l),Nt("close",l);break;case"iframe":case"object":case"embed":Nt("load",l);break;case"video":case"audio":for(u=0;u<so.length;u++)Nt(so[u],l);break;case"source":Nt("error",l);break;case"img":case"image":case"link":Nt("error",l),Nt("load",l);break;case"details":Nt("toggle",l);break;case"input":dn(l,h),Nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Nt("invalid",l);break;case"textarea":K(l,h),Nt("invalid",l)}ut(o,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var D=h[M];M==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,D,t),u=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Nt("scroll",l)}switch(o){case"input":At(l),qe(l,h,!0);break;case"textarea":At(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=sa)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[lo]=l,Fh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Nt("cancel",t),Nt("close",t),u=l;break;case"iframe":case"object":case"embed":Nt("load",t),u=l;break;case"video":case"audio":for(u=0;u<so.length;u++)Nt(so[u],t);u=l;break;case"source":Nt("error",t),u=l;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),u=l;break;case"details":Nt("toggle",t),u=l;break;case"input":dn(t,l),u=j(t,l),Nt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Nt("invalid",t);break;case"textarea":K(t,l),u=T(t,l),Nt("invalid",t);break;default:u=l}ut(o,u),D=u;for(h in D)if(D.hasOwnProperty(h)){var O=D[h];h==="style"?Je(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ue(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(t,O):typeof O=="number"&&lt(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Nt("scroll",t):O!=null&&L(t,h,O,M))}switch(o){case"input":At(t),qe(t,l,!1);break;case"textarea":At(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=sa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)kh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Pr(po.current),Pr(gi.current),da(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(h=l.nodeValue!==o)&&(t=Dn,t!==null))switch(t.tag){case 3:ra(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return ln(i),null;case 13:if(It(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hd(),us(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[mi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else ei!==null&&(Zc(ei),ei=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?qt===0&&(qt=3):eu())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ps(),zc(t,i),t===null&&oo(i.stateNode.containerInfo),ln(i),null;case 10:return pc(i.type._context),ln(i),null;case 17:return Sn(i.type)&&aa(),ln(i),null;case 19:if(It(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=_a(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Me()>_s&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=_a(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ut)return ln(i),null}else 2*Me()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Me(),i.sibling=null,o=Ft.current,Lt(Ft,l?o&1|2:o&1),i):(ln(i),null);case 22:case 23:return Jc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function hv(t,i){switch(lc(i),i.tag){case 1:return Sn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ps(),It(yn),It(on),Sc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return xc(i),null;case 13:if(It(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ft),null;case 4:return ps(),null;case 10:return pc(i.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Ca=!1,cn=!1,pv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){kt(t,i,l)}else o.current=null}function Hc(t,i,o){try{o()}catch(l){kt(t,i,l)}}var Bh=!1;function mv(t,i){if(Jl=Yo,t=vd(),Xl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,D=-1,O=-1,J=0,_e=0,ye=t,ge=null;t:for(;;){for(var De;ye!==o||u!==0&&ye.nodeType!==3||(D=M+u),ye!==h||l!==0&&ye.nodeType!==3||(O=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===o&&++J===u&&(D=M),ge===h&&++_e===l&&(O=M),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}o=D===-1||O===-1?null:{start:D,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(ec={focusedElem:t,selectionRange:o},Yo=!1,Fe=i;Fe!==null;)if(i=Fe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Fe=t;else for(;Fe!==null;){i=Fe;try{var Be=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Be!==null){var He=Be.memoizedProps,Bt=Be.memoizedState,Y=i.stateNode,H=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:ti(i.type,He),Bt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){kt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Fe=t;break}Fe=i.return}return Be=Bh,Bh=!1,Be}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Hc(i,o,h)}u=u.next}while(u!==l)}}function Ra(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Vc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function zh(t){var i=t.alternate;i!==null&&(t.alternate=null,zh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[lo],delete i[rc],delete i[Zg],delete i[Qg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Gc(t,i,o),t=t.sibling;t!==null;)Gc(t,i,o),t=t.sibling}function Wc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Wc(t,i,o),t=t.sibling;t!==null;)Wc(t,i,o),t=t.sibling}var tn=null,ni=!1;function rr(t,i,o){for(o=o.child;o!==null;)Gh(t,i,o),o=o.sibling}function Gh(t,i,o){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Mt,o)}catch{}switch(o.tag){case 5:cn||gs(o,i);case 6:var l=tn,u=ni;tn=null,rr(t,i,o),tn=l,ni=u,tn!==null&&(ni?(t=tn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tn.removeChild(o.stateNode));break;case 18:tn!==null&&(ni?(t=tn,o=o.stateNode,t.nodeType===8?ic(t.parentNode,o):t.nodeType===1&&ic(t,o),Zs(t)):ic(tn,o.stateNode));break;case 4:l=tn,u=ni,tn=o.stateNode.containerInfo,ni=!0,rr(t,i,o),tn=l,ni=u;break;case 0:case 11:case 14:case 15:if(!cn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Hc(o,i,M),u=u.next}while(u!==l)}rr(t,i,o);break;case 1:if(!cn&&(gs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){kt(o,i,D)}rr(t,i,o);break;case 21:rr(t,i,o);break;case 22:o.mode&1?(cn=(l=cn)||o.memoizedState!==null,rr(t,i,o),cn=l):rr(t,i,o);break;default:rr(t,i,o)}}function Wh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new pv),i.forEach(function(l){var u=Tv.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:tn=D.stateNode,ni=!1;break e;case 3:tn=D.stateNode.containerInfo,ni=!0;break e;case 4:tn=D.stateNode.containerInfo,ni=!0;break e}D=D.return}if(tn===null)throw Error(n(160));Gh(h,M,u),tn=null,ni=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(J){kt(u,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xh(i,t),i=i.sibling}function Xh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),_i(t),l&4){try{yo(3,t,t.return),Ra(3,t)}catch(He){kt(t,t.return,He)}try{yo(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:ii(i,t),_i(t),l&512&&o!==null&&gs(o,o.return);break;case 5:if(ii(i,t),_i(t),l&512&&o!==null&&gs(o,o.return),t.flags&32){var u=t.stateNode;try{lt(u,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&dt(u,h),it(D,M);var J=it(D,h);for(M=0;M<O.length;M+=2){var _e=O[M],ye=O[M+1];_e==="style"?Je(u,ye):_e==="dangerouslySetInnerHTML"?Ue(u,ye):_e==="children"?lt(u,ye):L(u,_e,ye,J)}switch(D){case"input":ct(u,h);break;case"textarea":me(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(u,!!h.multiple,De,!1):ge!==!!h.multiple&&(h.defaultValue!=null?b(u,!!h.multiple,h.defaultValue,!0):b(u,!!h.multiple,h.multiple?[]:"",!1))}u[lo]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(ii(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(ii(i,t),_i(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:ii(i,t),_i(t);break;case 13:ii(i,t),_i(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Yc=Me())),l&4&&Wh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(cn=(J=cn)||_e,ii(i,t),cn=J):ii(i,t),_i(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&(t.mode&1)!==0)for(Fe=t,_e=t.child;_e!==null;){for(ye=Fe=_e;Fe!==null;){switch(ge=Fe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:yo(4,ge,ge.return);break;case 1:gs(ge,ge.return);var Be=ge.stateNode;if(typeof Be.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,Be.props=i.memoizedProps,Be.state=i.memoizedState,Be.componentWillUnmount()}catch(He){kt(l,o,He)}}break;case 5:gs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){qh(ye);continue}}De!==null?(De.return=ge,Fe=De):qh(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{u=ye.stateNode,J?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,O=ye.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Qe("display",M))}catch(He){kt(t,t.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(He){kt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ii(i,t),_i(t),l&4&&Wh(t);break;case 21:break;default:ii(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Hh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(lt(u,""),l.flags&=-33);var h=Vh(t);Wc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Vh(t);Gc(t,D,M);break;default:throw Error(n(161))}}catch(O){kt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function gv(t,i,o){Fe=t,jh(t)}function jh(t,i,o){for(var l=(t.mode&1)!==0;Fe!==null;){var u=Fe,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||Ca;if(!M){var D=u.alternate,O=D!==null&&D.memoizedState!==null||cn;D=Ca;var J=cn;if(Ca=M,(cn=O)&&!J)for(Fe=u;Fe!==null;)M=Fe,O=M.child,M.tag===22&&M.memoizedState!==null?$h(u):O!==null?(O.return=M,Fe=O):$h(u);for(;h!==null;)Fe=h,jh(h),h=h.sibling;Fe=u,Ca=D,cn=J}Yh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Fe=h):Yh(t)}}function Yh(t){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:cn||Ra(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!cn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&qd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}qd(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}cn||i.flags&512&&Vc(i)}catch(ge){kt(i,i.return,ge)}}if(i===t){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function qh(t){for(;Fe!==null;){var i=Fe;if(i===t){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function $h(t){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ra(4,i)}catch(O){kt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){kt(i,u,O)}}var h=i.return;try{Vc(i)}catch(O){kt(i,h,O)}break;case 5:var M=i.return;try{Vc(i)}catch(O){kt(i,M,O)}}}catch(O){kt(i,i.return,O)}if(i===t){Fe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Fe=D;break}Fe=i.return}}var vv=Math.ceil,Pa=R.ReactCurrentDispatcher,Xc=R.ReactCurrentOwner,jn=R.ReactCurrentBatchConfig,vt=0,Qt=null,Vt=null,nn=0,In=0,vs=Ji(0),qt=0,So=null,Lr=0,ba=0,jc=0,Mo=null,En=null,Yc=0,_s=1/0,Li=null,La=!1,qc=null,sr=null,Da=!1,or=null,Na=0,Eo=0,$c=null,Ia=-1,Ua=0;function gn(){return(vt&6)!==0?Me():Ia!==-1?Ia:Ia=Me()}function ar(t){return(t.mode&1)===0?1:(vt&2)!==0&&nn!==0?nn&-nn:ev.transition!==null?(Ua===0&&(Ua=pn()),Ua):(t=wt,t!==0||(t=window.event,t=t===void 0?16:Zf(t.type)),t)}function ri(t,i,o,l){if(50<Eo)throw Eo=0,$c=null,Error(n(185));xn(t,o,l),((vt&2)===0||t!==Qt)&&(t===Qt&&((vt&2)===0&&(ba|=o),qt===4&&lr(t,nn)),Tn(t,l),o===1&&vt===0&&(i.mode&1)===0&&(_s=Me()+500,ca&&tr()))}function Tn(t,i){var o=t.callbackNode;zn(t,i);var l=pi(t,t===Qt?nn:0);if(l===0)o!==null&&te(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&te(o),i===1)t.tag===0?Jg(Zh.bind(null,t)):Fd(Zh.bind(null,t)),$g(function(){(vt&6)===0&&tr()}),o=null;else{switch(Gf(l)){case 1:o=ze;break;case 4:o=et;break;case 16:o=nt;break;case 536870912:o=mt;break;default:o=nt}o=sp(o,Kh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Kh(t,i){if(Ia=-1,Ua=0,(vt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(xs()&&t.callbackNode!==o)return null;var l=pi(t,t===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var u=vt;vt|=2;var h=Jh();(Qt!==t||nn!==i)&&(Li=null,_s=Me()+500,Nr(t,i));do try{yv();break}catch(D){Qh(t,D)}while(!0);hc(),Pa.current=h,vt=u,Vt!==null?i=0:(Qt=null,nn=0,i=qt)}if(i!==0){if(i===2&&(u=Ei(t),u!==0&&(l=u,i=Kc(t,u))),i===1)throw o=So,Nr(t,0),lr(t,l),Tn(t,Me()),o;if(i===6)lr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!_v(u)&&(i=Fa(t,l),i===2&&(h=Ei(t),h!==0&&(l=h,i=Kc(t,h))),i===1))throw o=So,Nr(t,0),lr(t,l),Tn(t,Me()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ir(t,En,Li);break;case 3:if(lr(t,l),(l&130023424)===l&&(i=Yc+500-Me(),10<i)){if(pi(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){gn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=nc(Ir.bind(null,t,En,Li),i);break}Ir(t,En,Li);break;case 4:if(lr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-st(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*vv(l/1960))-l,10<l){t.timeoutHandle=nc(Ir.bind(null,t,En,Li),l);break}Ir(t,En,Li);break;case 5:Ir(t,En,Li);break;default:throw Error(n(329))}}}return Tn(t,Me()),t.callbackNode===o?Kh.bind(null,t):null}function Kc(t,i){var o=Mo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=En,En=o,i!==null&&Zc(i)),t}function Zc(t){En===null?En=t:En.push.apply(En,t)}function _v(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!Jn(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(t,i){for(i&=~jc,i&=~ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function Zh(t){if((vt&6)!==0)throw Error(n(327));xs();var i=pi(t,0);if((i&1)===0)return Tn(t,Me()),null;var o=Fa(t,i);if(t.tag!==0&&o===2){var l=Ei(t);l!==0&&(i=l,o=Kc(t,l))}if(o===1)throw o=So,Nr(t,0),lr(t,i),Tn(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ir(t,En,Li),Tn(t,Me()),null}function Qc(t,i){var o=vt;vt|=1;try{return t(i)}finally{vt=o,vt===0&&(_s=Me()+500,ca&&tr())}}function Dr(t){or!==null&&or.tag===0&&(vt&6)===0&&xs();var i=vt;vt|=1;var o=jn.transition,l=wt;try{if(jn.transition=null,wt=1,t)return t()}finally{wt=l,jn.transition=o,vt=i,(vt&6)===0&&tr()}}function Jc(){In=vs.current,It(vs)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,qg(o)),Vt!==null)for(o=Vt.return;o!==null;){var l=o;switch(lc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:ps(),It(yn),It(on),Sc();break;case 5:xc(l);break;case 4:ps();break;case 13:It(Ft);break;case 19:It(Ft);break;case 10:pc(l.type._context);break;case 22:case 23:Jc()}o=o.return}if(Qt=t,Vt=t=cr(t.current,null),nn=In=i,qt=0,So=null,jc=ba=Lr=0,En=Mo=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}o.pending=l}Rr=null}return t}function Qh(t,i){do{var o=Vt;try{if(hc(),xa.current=Ea,ya){for(var l=Ot.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}ya=!1}if(br=0,Zt=Yt=Ot=null,mo=!1,go=0,Xc.current=null,o===null||o.return===null){qt=1,So=i,Vt=null;break}e:{var h=t,M=o.return,D=o,O=i;if(i=nn,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,_e=D,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Eh(M);if(De!==null){De.flags&=-257,Th(De,M,D,h,i),De.mode&1&&Mh(h,J,i),i=De,O=J;var Be=i.updateQueue;if(Be===null){var He=new Set;He.add(O),i.updateQueue=He}else Be.add(O);break e}else{if((i&1)===0){Mh(h,J,i),eu();break e}O=Error(n(426))}}else if(Ut&&D.mode&1){var Bt=Eh(M);if(Bt!==null){(Bt.flags&65536)===0&&(Bt.flags|=256),Th(Bt,M,D,h,i),fc(ms(O,D));break e}}h=O=ms(O,D),qt!==4&&(qt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=yh(h,O,i);Yd(h,Y);break e;case 1:D=O;var H=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(sr===null||!sr.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Sh(h,D,i);Yd(h,Te);break e}}h=h.return}while(h!==null)}tp(o)}catch(Xe){i=Xe,Vt===o&&o!==null&&(Vt=o=o.return);continue}break}while(!0)}function Jh(){var t=Pa.current;return Pa.current=Ea,t===null?Ea:t}function eu(){(qt===0||qt===3||qt===2)&&(qt=4),Qt===null||(Lr&268435455)===0&&(ba&268435455)===0||lr(Qt,nn)}function Fa(t,i){var o=vt;vt|=2;var l=Jh();(Qt!==t||nn!==i)&&(Li=null,Nr(t,i));do try{xv();break}catch(u){Qh(t,u)}while(!0);if(hc(),vt=o,Pa.current=l,Vt!==null)throw Error(n(261));return Qt=null,nn=0,qt}function xv(){for(;Vt!==null;)ep(Vt)}function yv(){for(;Vt!==null&&!X();)ep(Vt)}function ep(t){var i=rp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?tp(t):Vt=i,Xc.current=null}function tp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=dv(o,i,In),o!==null){Vt=o;return}}else{if(o=hv(o,i),o!==null){o.flags&=32767,Vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,Vt=null;return}}if(i=i.sibling,i!==null){Vt=i;return}Vt=i=t}while(i!==null);qt===0&&(qt=5)}function Ir(t,i,o){var l=wt,u=jn.transition;try{jn.transition=null,wt=1,Sv(t,i,o,l)}finally{jn.transition=u,wt=l}return null}function Sv(t,i,o,l){do xs();while(or!==null);if((vt&6)!==0)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Wo(t,h),t===Qt&&(Vt=Qt=null,nn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Da||(Da=!0,sp(nt,function(){return xs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=jn.transition,jn.transition=null;var M=wt;wt=1;var D=vt;vt|=4,Xc.current=null,mv(t,o),Xh(o,t),Hg(ec),Yo=!!Jl,ec=Jl=null,t.current=o,gv(o),we(),vt=D,wt=M,jn.transition=h}else t.current=o;if(Da&&(Da=!1,or=t,Na=u),h=t.pendingLanes,h===0&&(sr=null),rn(o.stateNode),Tn(t,Me()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(La)throw La=!1,t=qc,qc=null,t;return(Na&1)!==0&&t.tag!==0&&xs(),h=t.pendingLanes,(h&1)!==0?t===$c?Eo++:(Eo=0,$c=t):Eo=0,tr(),null}function xs(){if(or!==null){var t=Gf(Na),i=jn.transition,o=wt;try{if(jn.transition=null,wt=16>t?16:t,or===null)var l=!1;else{if(t=or,or=null,Na=0,(vt&6)!==0)throw Error(n(331));var u=vt;for(vt|=4,Fe=t.current;Fe!==null;){var h=Fe,M=h.child;if((Fe.flags&16)!==0){var D=h.deletions;if(D!==null){for(var O=0;O<D.length;O++){var J=D[O];for(Fe=J;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:yo(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,Fe=ye;else for(;Fe!==null;){_e=Fe;var ge=_e.sibling,De=_e.return;if(zh(_e),_e===J){Fe=null;break}if(ge!==null){ge.return=De,Fe=ge;break}Fe=De}}}var Be=h.alternate;if(Be!==null){var He=Be.child;if(He!==null){Be.child=null;do{var Bt=He.sibling;He.sibling=null,He=Bt}while(He!==null)}}Fe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Fe=M;else e:for(;Fe!==null;){if(h=Fe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Fe=Y;break e}Fe=h.return}}var H=t.current;for(Fe=H;Fe!==null;){M=Fe;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Fe=q;else e:for(M=H;Fe!==null;){if(D=Fe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ra(9,D)}}catch(Xe){kt(D,D.return,Xe)}if(D===M){Fe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Fe=Te;break e}Fe=D.return}}if(vt=u,tr(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Mt,t)}catch{}l=!0}return l}finally{wt=o,jn.transition=i}}return!1}function np(t,i,o){i=ms(o,i),i=yh(t,i,1),t=ir(t,i,1),i=gn(),t!==null&&(xn(t,1,i),Tn(t,i))}function kt(t,i,o){if(t.tag===3)np(t,t,o);else for(;i!==null;){if(i.tag===3){np(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(sr===null||!sr.has(l))){t=ms(o,t),t=Sh(i,t,1),i=ir(i,t,1),t=gn(),i!==null&&(xn(i,1,t),Tn(i,t));break}}i=i.return}}function Mv(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=gn(),t.pingedLanes|=t.suspendedLanes&o,Qt===t&&(nn&o)===o&&(qt===4||qt===3&&(nn&130023424)===nn&&500>Me()-Yc?Nr(t,0):jc|=o),Tn(t,i)}function ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=Qn,Qn<<=1,(Qn&130023424)===0&&(Qn=4194304)));var o=gn();t=Ri(t,i),t!==null&&(xn(t,i,o),Tn(t,o))}function Ev(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ip(t,o)}function Tv(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ip(t,o)}var rp;rp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||yn.current)Mn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Mn=!1,fv(t,i,o);Mn=(t.flags&131072)!==0}else Mn=!1,Ut&&(i.flags&1048576)!==0&&Od(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var u=as(i,on.current);hs(i,o),u=Tc(null,i,l,t,u,o);var h=wc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,la(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,vc(i),u.updater=Ta,i.stateNode=u,u._reactInternals=i,Lc(i,l,t,o),i=Uc(null,i,l,!0,h,o)):(i.tag=0,Ut&&h&&ac(i),mn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=Av(l),t=ti(l,t),u){case 0:i=Ic(null,i,l,t,o);break e;case 1:i=bh(null,i,l,t,o);break e;case 11:i=wh(null,i,l,t,o);break e;case 14:i=Ah(null,i,l,ti(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ti(l,u),Ic(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ti(l,u),bh(t,i,l,u,o);case 3:e:{if(Lh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,jd(t,i),va(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=ms(Error(n(423)),i),i=Dh(t,i,l,o,u);break e}else if(l!==u){u=ms(Error(n(424)),i),i=Dh(t,i,l,o,u);break e}else for(Nn=Qi(i.stateNode.containerInfo.firstChild),Dn=i,Ut=!0,ei=null,o=Wd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===u){i=bi(t,i,o);break e}mn(t,i,l,o)}i=i.child}return i;case 5:return $d(i),t===null&&uc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,tc(l,u)?M=null:h!==null&&tc(l,h)&&(i.flags|=32),Ph(t,i),mn(t,i,M,o),i.child;case 6:return t===null&&uc(i),null;case 13:return Nh(t,i,o);case 4:return _c(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=fs(i,null,l,o):mn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ti(l,u),wh(t,i,l,u,o);case 7:return mn(t,i,i.pendingProps,o),i.child;case 8:return mn(t,i,i.pendingProps.children,o),i.child;case 12:return mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Lt(pa,l._currentValue),l._currentValue=M,h!==null)if(Jn(h.value,M)){if(h.children===u.children&&!yn.current){i=bi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){M=h.child;for(var O=D.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=Pi(-1,o&-o),O.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),J.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),mc(h.return,o,i),D.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),mc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}mn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,hs(i,o),u=Wn(u),l=l(u),i.flags|=1,mn(t,i,l,o),i.child;case 14:return l=i.type,u=ti(l,i.pendingProps),u=ti(l.type,u),Ah(t,i,l,u,o);case 15:return Ch(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ti(l,u),Aa(t,i),i.tag=1,Sn(l)?(t=!0,la(i)):t=!1,hs(i,o),_h(i,l,u),Lc(i,l,u,o),Uc(null,i,l,!0,t,o);case 19:return Uh(t,i,o);case 22:return Rh(t,i,o)}throw Error(n(156,i.tag))};function sp(t,i){return ee(t,i)}function wv(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new wv(t,i,o,l)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Av(t){if(typeof t=="function")return tu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Oa(t,i,o,l,u,h){var M=2;if(l=t,typeof t=="function")tu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Ur(o.children,u,h,i);case W:M=8,u|=8;break;case P:return t=Yn(12,o,i,u|2),t.elementType=P,t.lanes=h,t;case ne:return t=Yn(13,o,i,u),t.elementType=ne,t.lanes=h,t;case de:return t=Yn(19,o,i,u),t.elementType=de,t.lanes=h,t;case ce:return ka(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:M=10;break e;case F:M=9;break e;case oe:M=11;break e;case pe:M=14;break e;case ae:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function ka(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function nu(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function iu(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Cv(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ru(t,i,o,l,u,h,M,D,O){return t=new Cv(t,i,o,D,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(h),t}function Rv(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function op(t){if(!t)return er;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Sn(o))return Id(t,o,i)}return i}function ap(t,i,o,l,u,h,M,D,O){return t=ru(o,l,!0,t,u,h,M,D,O),t.context=op(null),o=t.current,l=gn(),u=ar(o),h=Pi(l,u),h.callback=i??null,ir(o,h,u),t.current.lanes=u,xn(t,u,l),Tn(t,l),t}function Ba(t,i,o,l){var u=i.current,h=gn(),M=ar(u);return o=op(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ir(u,i,M),t!==null&&(ri(t,u,M,h),ga(t,u,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function su(t,i){lp(t,i),(t=t.alternate)&&lp(t,i)}function Pv(){return null}var cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ou(t){this._internalRoot=t}Ha.prototype.render=ou.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Ba(null,t,null,null)}),i[Ti]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=jf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&$f(t)}};function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function bv(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var J=za(M);h.call(J)}}var M=ap(i,l,t,0,null,!1,!1,"",up);return t._reactRootContainer=M,t[Ti]=M.current,oo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var J=za(O);D.call(J)}}var O=ru(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=O,t[Ti]=O.current,oo(t.nodeType===8?t.parentNode:t),Dr(function(){Ba(i,O,o,l)}),O}function Ga(t,i,o,l,u){var h=o._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var D=u;u=function(){var O=za(M);D.call(O)}}Ba(i,M,t,u)}else M=bv(o,i,t,u,l);return za(M)}Wf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);o!==0&&(Ll(i,o|1),Tn(i,Me()),(vt&6)===0&&(_s=Me()+500,tr()))}break;case 13:Dr(function(){var l=Ri(t,1);if(l!==null){var u=gn();ri(l,t,1,u)}}),su(t,1)}},Dl=function(t){if(t.tag===13){var i=Ri(t,134217728);if(i!==null){var o=gn();ri(i,t,134217728,o)}su(t,134217728)}},Xf=function(t){if(t.tag===13){var i=ar(t),o=Ri(t,i);if(o!==null){var l=gn();ri(o,t,i,l)}su(t,i)}},jf=function(){return wt},Yf=function(t,i){var o=wt;try{return wt=t,i()}finally{wt=o}},Re=function(t,i,o){switch(i){case"input":if(ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=oa(l);if(!u)throw Error(n(90));ht(l),ct(l,u)}}}break;case"textarea":me(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Dt=Qc,Xt=Dr;var Lv={usingClientEntryPoint:!1,Events:[co,ss,oa,be,rt,Qc]},To={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Mt=Wa.inject(Dv),pt=Wa}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv,wn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(i))throw Error(n(200));return Rv(t,i,null,o)},wn.createRoot=function(t,i){if(!au(t))throw Error(n(299));var o=!1,l="",u=cp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=ru(t,1,!1,null,null,o,!1,l,u),t[Ti]=i.current,oo(t.nodeType===8?t.parentNode:t),new ou(i)},wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=w(i),t=t===null?null:t.stateNode,t},wn.flushSync=function(t){return Dr(t)},wn.hydrate=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,o)},wn.hydrateRoot=function(t,i,o){if(!au(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",M=cp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=ap(i,null,t,1,o??null,u,!1,h,M),t[Ti]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Ha(i)},wn.render=function(t,i,o){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,o)},wn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},wn.unstable_batchedUpdates=Qc,wn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Va(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,o,!1,l)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var _p;function Hv(){if(_p)return uu.exports;_p=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uu.exports=zv(),uu.exports}var xp;function Vv(){if(xp)return Xa;xp=1;var s=Hv();return Xa.createRoot=s.createRoot,Xa.hydrateRoot=s.hydrateRoot,Xa}var Gv=Vv();const Wv=Mm(Gv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="170",Xv=0,yp=1,jv=2,Em=1,Yv=2,Oi=3,yr=0,Rn=1,ki=2,_r=0,Us=1,Sp=2,Mp=3,Ep=4,qv=5,Wr=100,$v=101,Kv=102,Zv=103,Qv=104,Jv=200,e_=201,t_=202,n_=203,Gu=204,Wu=205,i_=206,r_=207,s_=208,o_=209,a_=210,l_=211,c_=212,u_=213,f_=214,Xu=0,ju=1,Yu=2,ks=3,qu=4,$u=5,Ku=6,Zu=7,Tm=0,d_=1,h_=2,xr=0,p_=1,m_=2,g_=3,v_=4,__=5,x_=6,y_=7,wm=300,Bs=301,zs=302,Qu=303,Ju=304,wl=306,ef=1e3,jr=1001,tf=1002,fi=1003,S_=1004,ja=1005,yi=1006,hu=1007,Yr=1008,Vi=1009,Am=1010,Cm=1011,No=1012,If=1013,qr=1014,Bi=1015,Io=1016,Uf=1017,Ff=1018,Hs=1020,Rm=35902,Pm=1021,bm=1022,ci=1023,Lm=1024,Dm=1025,Fs=1026,Vs=1027,Nm=1028,Of=1029,Im=1030,kf=1031,Bf=1033,gl=33776,vl=33777,_l=33778,xl=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,vf=37815,_f=37816,xf=37817,yf=37818,Sf=37819,Mf=37820,Ef=37821,yl=36492,Tf=36494,wf=36495,Um=36283,Af=36284,Cf=36285,Rf=36286,M_=3200,E_=3201,T_=0,w_=1,vr="",$n="srgb",Ws="srgb-linear",Al="linear",Ct="srgb",ys=7680,Tp=519,A_=512,C_=513,R_=514,Fm=515,P_=516,b_=517,L_=518,D_=519,wp=35044,Ap="300 es",zi=2e3,Ml=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pu=Math.PI/180,Pf=180/Math.PI;function Uo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[s&255]+un[s>>8&255]+un[s>>16&255]+un[s>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function Cn(s,e,n){return Math.max(e,Math.min(n,s))}function N_(s,e){return(s%e+e)%e}function mu(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(e=0,n=0){Pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,c,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m)}set(e,n,r,a,c,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],S=r[5],E=r[8],A=a[0],y=a[3],g=a[6],N=a[1],L=a[4],R=a[7],$=a[2],B=a[5],U=a[8];return c[0]=f*A+d*N+p*$,c[3]=f*y+d*L+p*B,c[6]=f*g+d*R+p*U,c[1]=m*A+v*N+_*$,c[4]=m*y+v*L+_*B,c[7]=m*g+v*R+_*U,c[2]=x*A+S*N+E*$,c[5]=x*y+S*L+E*B,c[8]=x*g+S*R+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*c*v+r*d*p+a*c*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*f-d*m,x=d*p-v*c,S=m*c-f*p,E=n*_+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(a*m-v*r)*A,e[2]=(d*r-a*f)*A,e[3]=x*A,e[4]=(v*n-a*p)*A,e[5]=(a*c-d*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new ot;function Om(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function El(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function I_(){const s=El("canvas");return s.style.display="block",s}const Cp={};function Lo(s){s in Cp||(Cp[s]=!0,console.warn(s))}function U_(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function F_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ct&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ct&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vr?Al:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rp=[.64,.33,.3,.6,.15,.06],Pp=[.2126,.7152,.0722],bp=[.3127,.329],Lp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[Ws]:{primaries:Rp,whitePoint:bp,transfer:Al,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:Pp,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:Rp,whitePoint:bp,transfer:Ct,toXYZ:Lp,fromXYZ:Dp,luminanceCoefficients:Pp,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}});let Ss;class k_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=El("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=Hi(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B_=0;class km{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?c.push(vu(a[f].image)):c.push(vu(a[f]))}else c=vu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function vu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?k_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z_=0;class Pn extends Xs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=jr,a=jr,c=yi,f=Yr,d=ci,p=Vi,m=Pn.DEFAULT_ANISOTROPY,v=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Uo(),this.name="",this.source=new km(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=wm;Pn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],S=p[5],E=p[9],A=p[2],y=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(S+1)/2,$=(g+1)/2,B=(v+x)/4,U=(_+A)/4,W=(E+y)/4;return L>R&&L>$?L<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(L),a=B/r,c=U/r):R>$?R<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(R),r=B/a,c=W/a):$<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt($),r=U/c,a=W/c),this.set(r,a,c,n),this}let N=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-A)/N,this.z=(x-v)/N,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H_ extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new km(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends H_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bm extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends Pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=fi,this.minFilter=fi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=A;return}if(_!==A||p!==x||m!==S||v!==E){let y=1-d;const g=p*x+m*S+v*E+_*A,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const $=Math.sqrt(L),B=Math.atan2($,g*N);y=Math.sin(y*B)/$,d=Math.sin(d*B)/$}const R=d*N;if(p=p*y+x*R,m=m*y+S*R,v=v*y+E*R,_=_*y+A*R,y===1-d){const $=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=$,m*=$,v*=$,_*=$}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],_=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return e[n]=d*E+v*_+p*S-m*x,e[n+1]=p*E+v*x+m*_-d*S,e[n+2]=m*E+v*S+d*x-p*_,e[n+3]=v*E-d*_-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),_=d(c/2),x=p(r/2),S=p(a/2),E=p(c/2);switch(f){case"XYZ":this._x=x*v*_+m*S*E,this._y=m*S*_-x*v*E,this._z=m*v*E+x*S*_,this._w=m*v*_-x*S*E;break;case"YXZ":this._x=x*v*_+m*S*E,this._y=m*S*_-x*v*E,this._z=m*v*E-x*S*_,this._w=m*v*_+x*S*E;break;case"ZXY":this._x=x*v*_-m*S*E,this._y=m*S*_+x*v*E,this._z=m*v*E+x*S*_,this._w=m*v*_-x*S*E;break;case"ZYX":this._x=x*v*_-m*S*E,this._y=m*S*_+x*v*E,this._z=m*v*E-x*S*_,this._w=m*v*_+x*S*E;break;case"YZX":this._x=x*v*_+m*S*E,this._y=m*S*_+x*v*E,this._z=m*v*E-x*S*_,this._w=m*v*_-x*S*E;break;case"XZY":this._x=x*v*_-m*S*E,this._y=m*S*_-x*v*E,this._z=m*v*E+x*S*_,this._w=m*v*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(f-a)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(v-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-a)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-c*p,this._y=a*v+f*p+c*d-r*m,this._z=c*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),_=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-c*a),_=2*(c*r-f*n);return this.x=n+p*m+f*_-d*v,this.y=r+p*v+d*m-c*_,this.z=a+p*_+c*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-c*d,this.y=c*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new Q,Np=new Fo;class Oo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(c,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ya.copy(r.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),qa.subVectors(this.max,Co),Ms.subVectors(e.a,Co),Es.subVectors(e.b,Co),Ts.subVectors(e.c,Co),fr.subVectors(Es,Ms),dr.subVectors(Ts,Es),Fr.subVectors(Ms,Ts);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Fr.y,Fr.x,0];return!xu(n,Ms,Es,Ts,qa)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,Ms,Es,Ts,qa))?!1:($a.crossVectors(fr,dr),n=[$a.x,$a.y,$a.z],xu(n,Ms,Es,Ts,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],si=new Q,Ya=new Oo,Ms=new Q,Es=new Q,Ts=new Q,fr=new Q,dr=new Q,Fr=new Q,Co=new Q,qa=new Q,$a=new Q,Or=new Q;function xu(s,e,n,r,a){for(let c=0,f=s.length-3;c<=f;c+=3){Or.fromArray(s,c);const d=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),p=e.dot(Or),m=n.dot(Or),v=r.dot(Or);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const G_=new Oo,Ro=new Q,yu=new Q;class Cl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):G_.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(yu)),this.expandByPoint(Ro.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new Q,Su=new Q,Ka=new Q,hr=new Q,Mu=new Q,Za=new Q,Eu=new Q;class zm{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Su.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Su);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Ka),d=hr.dot(this.direction),p=-hr.dot(Ka),m=hr.lengthSq(),v=Math.abs(1-f*f);let _,x,S,E;if(v>0)if(_=f*p-d,x=f*d-p,E=c*v,_>=0)if(x>=-E)if(x<=E){const A=1/v;_*=A,x*=A,S=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),S=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Su).addScaledVector(Ka,x),S}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),_>=0?(d=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,c){Mu.subVectors(n,e),Za.subVectors(r,e),Eu.crossVectors(Mu,Za);let f=this.direction.dot(Eu),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;hr.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(hr,Za));if(p<0)return null;const m=d*this.direction.dot(Mu.cross(hr));if(m<0||p+m>f)return null;const v=-d*hr.dot(Eu);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,r,a,c,f,d,p,m,v,_,x,S,E,A,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,d,p,m,v,_,x,S,E,A,y)}set(e,n,r,a,c,f,d,p,m,v,_,x,S,E,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=S,g[7]=E,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*v,S=f*_,E=d*v,A=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=S+E*m,n[5]=x-A*m,n[9]=-d*p,n[2]=A-x*m,n[6]=E+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,S=p*_,E=m*v,A=m*_;n[0]=x+A*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*_,n[5]=f*v,n[9]=-d,n[2]=S*d-E,n[6]=A+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,S=p*_,E=m*v,A=m*_;n[0]=x-A*d,n[4]=-f*_,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*v,n[9]=A-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,S=f*_,E=d*v,A=d*_;n[0]=p*v,n[4]=E*m-S,n[8]=x*m+A,n[1]=p*_,n[5]=A*m+x,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,E=d*p,A=d*m;n[0]=p*v,n[4]=A-x*_,n[8]=E*_+S,n[1]=_,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=S*_+E,n[10]=x-A*_}else if(e.order==="XZY"){const x=f*p,S=f*m,E=d*p,A=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+A,n[5]=f*v,n[9]=S*_-E,n[2]=E*_-S,n[6]=d*v,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W_,e,X_)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),pr.crossVectors(r,Un),pr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),pr.crossVectors(r,Un)),pr.normalize(),Qa.crossVectors(Un,pr),a[0]=pr.x,a[4]=Qa.x,a[8]=Un.x,a[1]=pr.y,a[5]=Qa.y,a[9]=Un.y,a[2]=pr.z,a[6]=Qa.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],S=r[13],E=r[2],A=r[6],y=r[10],g=r[14],N=r[3],L=r[7],R=r[11],$=r[15],B=a[0],U=a[4],W=a[8],P=a[12],C=a[1],F=a[5],oe=a[9],ne=a[13],de=a[2],pe=a[6],ae=a[10],ce=a[14],z=a[3],le=a[7],se=a[11],I=a[15];return c[0]=f*B+d*C+p*de+m*z,c[4]=f*U+d*F+p*pe+m*le,c[8]=f*W+d*oe+p*ae+m*se,c[12]=f*P+d*ne+p*ce+m*I,c[1]=v*B+_*C+x*de+S*z,c[5]=v*U+_*F+x*pe+S*le,c[9]=v*W+_*oe+x*ae+S*se,c[13]=v*P+_*ne+x*ce+S*I,c[2]=E*B+A*C+y*de+g*z,c[6]=E*U+A*F+y*pe+g*le,c[10]=E*W+A*oe+y*ae+g*se,c[14]=E*P+A*ne+y*ce+g*I,c[3]=N*B+L*C+R*de+$*z,c[7]=N*U+L*F+R*pe+$*le,c[11]=N*W+L*oe+R*ae+$*se,c[15]=N*P+L*ne+R*ce+$*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],S=e[14],E=e[3],A=e[7],y=e[11],g=e[15];return E*(+c*p*_-a*m*_-c*d*x+r*m*x+a*d*S-r*p*S)+A*(+n*p*S-n*m*x+c*f*x-a*f*S+a*m*v-c*p*v)+y*(+n*m*_-n*d*S-c*f*_+r*f*S+c*d*v-r*m*v)+g*(-a*d*v-n*p*_+n*d*x+a*f*_-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],S=e[11],E=e[12],A=e[13],y=e[14],g=e[15],N=_*y*m-A*x*m+A*p*S-d*y*S-_*p*g+d*x*g,L=E*x*m-v*y*m-E*p*S+f*y*S+v*p*g-f*x*g,R=v*A*m-E*_*m+E*d*S-f*A*S-v*d*g+f*_*g,$=E*_*p-v*A*p-E*d*x+f*A*x+v*d*y-f*_*y,B=n*N+r*L+a*R+c*$;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return e[0]=N*U,e[1]=(A*x*c-_*y*c-A*a*S+r*y*S+_*a*g-r*x*g)*U,e[2]=(d*y*c-A*p*c+A*a*m-r*y*m-d*a*g+r*p*g)*U,e[3]=(_*p*c-d*x*c-_*a*m+r*x*m+d*a*S-r*p*S)*U,e[4]=L*U,e[5]=(v*y*c-E*x*c+E*a*S-n*y*S-v*a*g+n*x*g)*U,e[6]=(E*p*c-f*y*c-E*a*m+n*y*m+f*a*g-n*p*g)*U,e[7]=(f*x*c-v*p*c+v*a*m-n*x*m-f*a*S+n*p*S)*U,e[8]=R*U,e[9]=(E*_*c-v*A*c-E*r*S+n*A*S+v*r*g-n*_*g)*U,e[10]=(f*A*c-E*d*c+E*r*m-n*A*m-f*r*g+n*d*g)*U,e[11]=(v*d*c-f*_*c-v*r*m+n*_*m+f*r*S-n*d*S)*U,e[12]=$*U,e[13]=(v*A*a-E*_*a+E*r*x-n*A*x-v*r*y+n*_*y)*U,e[14]=(E*d*a-f*A*a-E*r*p+n*A*p+f*r*y-n*d*y)*U,e[15]=(f*_*a-v*d*a+v*r*p-n*_*p-f*r*x+n*d*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,d=e.y,p=e.z,m=c*f,v=c*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,v=f+f,_=d+d,x=c*m,S=c*v,E=c*_,A=f*v,y=f*_,g=d*_,N=p*m,L=p*v,R=p*_,$=r.x,B=r.y,U=r.z;return a[0]=(1-(A+g))*$,a[1]=(S+R)*$,a[2]=(E-L)*$,a[3]=0,a[4]=(S-R)*B,a[5]=(1-(x+g))*B,a[6]=(y+N)*B,a[7]=0,a[8]=(E+L)*U,a[9]=(y-N)*U,a[10]=(1-(x+A))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=ws.set(a[0],a[1],a[2]).length();const f=ws.set(a[4],a[5],a[6]).length(),d=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/c,v=1/f,_=1/d;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=v,oi.elements[5]*=v,oi.elements[6]*=v,oi.elements[8]*=_,oi.elements[9]*=_,oi.elements[10]*=_,n.setFromRotationMatrix(oi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,a,c,f,d=zi){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(d===zi)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Ml)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,f,d=zi){const p=this.elements,m=1/(n-e),v=1/(r-a),_=1/(f-c),x=(n+e)*m,S=(r+a)*v;let E,A;if(d===zi)E=(f+c)*_,A=-2*_;else if(d===Ml)E=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ws=new Q,oi=new Ht,W_=new Q(0,0,0),X_=new Q(1,1,1),pr=new Q,Qa=new Q,Un=new Q,Ip=new Ht,Up=new Fo;class Gi{constructor(e=0,n=0,r=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],_=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Cn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Up.setFromEuler(this),this.setFromQuaternion(Up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Fp=new Q,As=new Fo,Ii=new Ht,Ja=new Q,Po=new Q,Y_=new Q,q_=new Fo,Op=new Q(1,0,0),kp=new Q(0,1,0),Bp=new Q(0,0,1),zp={type:"added"},$_={type:"removed"},Cs={type:"childadded",child:null},Tu={type:"childremoved",child:null};class bn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Q,n=new Gi,r=new Fo,a=new Q(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Po,Ja,this.up):Ii.lookAt(Ja,Po,this.up),this.quaternion.setFromRotationMatrix(Ii),a&&(Ii.extractRotation(a.matrixWorld),As.setFromRotationMatrix(Ii),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($_),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zp),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));a.material=d}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),_=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}bn.DEFAULT_UP=new Q(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new Q,Ui=new Q,wu=new Q,Fi=new Q,Rs=new Q,Ps=new Q,Hp=new Q,Au=new Q,Cu=new Q,Ru=new Q,Pu=new zt,bu=new zt,Lu=new zt;class li{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ai.subVectors(a,n),Ui.subVectors(r,n),wu.subVectors(e,n);const f=ai.dot(ai),d=ai.dot(Ui),p=ai.dot(wu),m=Ui.dot(Ui),v=Ui.dot(wu),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*p-d*v)*x,E=(f*v-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,c,f,d,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Fi.x),p.addScaledVector(f,Fi.y),p.addScaledVector(d,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,c,f){return Pu.setScalar(0),bu.setScalar(0),Lu.setScalar(0),Pu.fromBufferAttribute(e,n),bu.fromBufferAttribute(e,r),Lu.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Pu,c.x),f.addScaledVector(bu,c.y),f.addScaledVector(Lu,c.z),f}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Ui.subVectors(e,n),ai.cross(Ui).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ai.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,d;Rs.subVectors(a,r),Ps.subVectors(c,r),Au.subVectors(e,r);const p=Rs.dot(Au),m=Ps.dot(Au);if(p<=0&&m<=0)return n.copy(r);Cu.subVectors(e,a);const v=Rs.dot(Cu),_=Ps.dot(Cu);if(v>=0&&_<=v)return n.copy(a);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Rs,f);Ru.subVectors(e,c);const S=Rs.dot(Ru),E=Ps.dot(Ru);if(E>=0&&S<=E)return n.copy(c);const A=S*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(Ps,d);const y=v*E-S*_;if(y<=0&&_-v>=0&&S-E>=0)return Hp.subVectors(c,a),d=(_-v)/(_-v+(S-E)),n.copy(a).addScaledVector(Hp,d);const g=1/(y+A+x);return f=A*g,d=x*g,n.copy(r).addScaledVector(Rs,f).addScaledVector(Ps,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Du(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=_t.workingColorSpace){return this.r=e,this.g=n,this.b=r,_t.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=_t.workingColorSpace){if(e=N_(e,1),n=Cn(n,0,1),r=Cn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Du(f,c,e+1/3),this.g=Du(f,c,e),this.b=Du(f,c,e-1/3)}return _t.toWorkingColorSpace(this,a),this}setStyle(e,n=$n){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const r=Vm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return _t.fromWorkingColorSpace(fn.copy(this),e),Math.round(Cn(fn.r*255,0,255))*65536+Math.round(Cn(fn.g*255,0,255))*256+Math.round(Cn(fn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,c=fn.b,f=Math.max(r,a,c),d=Math.min(r,a,c);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=v<=.5?_/(f+d):_/(2-f-d),f){case r:p=(a-c)/_+(a<c?6:0);break;case a:p=(c-r)/_+2;break;case c:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=_t.workingColorSpace){return _t.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=$n){_t.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(el);const r=mu(mr.h,el.h,n),a=mu(mr.s,el.s,n),c=mu(mr.l,el.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new xt;xt.NAMES=Vm;let K_=0;class ko extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Uo(),this.name="",this.blending=Us,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gu&&(r.blendSrc=this.blendSrc),this.blendDst!==Wu&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tl extends ko{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new Q,tl=new Pt;class kn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=wp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),r=An(r,this.array),a=An(a,this.array),c=An(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}}class Gm extends kn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Wm extends kn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bn extends kn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Z_=0;const qn=new Ht,Nu=new bn,bs=new Q,Fn=new Oo,bo=new Oo,en=new Q;class di extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?Wm:Gm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ot().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,r){return qn.makeTranslation(e,n,r),this.applyMatrix4(qn),this}scale(e,n,r){return qn.makeScale(e,n,r),this.applyMatrix4(qn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Bn(r,3))}else{for(let r=0,a=n.count;r<a;r++){const c=e[r];n.setXYZ(r,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Fn.setFromBufferAttribute(c),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,bo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,bo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(bo.min),Fn.expandByPoint(bo.max))}Fn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)en.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(en));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)en.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),en.add(bs)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new Q,p[W]=new Q;const m=new Q,v=new Q,_=new Q,x=new Pt,S=new Pt,E=new Pt,A=new Q,y=new Q;function g(W,P,C){m.fromBufferAttribute(r,W),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,C),x.fromBufferAttribute(c,W),S.fromBufferAttribute(c,P),E.fromBufferAttribute(c,C),v.sub(m),_.sub(m),S.sub(x),E.sub(x);const F=1/(S.x*E.y-E.x*S.y);isFinite(F)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(F),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(F),d[W].add(A),d[P].add(A),d[C].add(A),p[W].add(y),p[P].add(y),p[C].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,P=N.length;W<P;++W){const C=N[W],F=C.start,oe=C.count;for(let ne=F,de=F+oe;ne<de;ne+=3)g(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const L=new Q,R=new Q,$=new Q,B=new Q;function U(W){$.fromBufferAttribute(a,W),B.copy($);const P=d[W];L.copy(P),L.sub($.multiplyScalar($.dot(P))).normalize(),R.crossVectors(B,P);const F=R.dot(p[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,F)}for(let W=0,P=N.length;W<P;++W){const C=N[W],F=C.start,oe=C.count;for(let ne=F,de=F+oe;ne<de;ne+=3)U(e.getX(ne+0)),U(e.getX(ne+1)),U(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Q,c=new Q,f=new Q,d=new Q,p=new Q,m=new Q,v=new Q,_=new Q;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),v.subVectors(f,c),_.subVectors(a,c),v.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(v),p.add(v),m.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,c),_.subVectors(a,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,x=new m.constructor(p.length*v);let S=0,E=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let g=0;g<v;g++)x[E++]=m[S++]}return new kn(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,_=m.length;v<_;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,S=_.length;x<S;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new Ht,kr=new zm,nl=new Cl,Gp=new Q,il=new Q,rl=new Q,sl=new Q,Iu=new Q,ol=new Q,Wp=new Q,al=new Q;class ui extends bn{constructor(e=new di,n=new Tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(c&&d){ol.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],_=c[p];v!==0&&(Iu.fromBufferAttribute(_,e),f?ol.addScaledVector(Iu,v):ol.addScaledVector(Iu.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(c),kr.copy(e.ray).recast(e.near),!(nl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(nl,Gp)===null||kr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Vp.copy(c).invert(),kr.copy(e.ray).applyMatrix4(Vp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,$=L;R<$;R+=3){const B=d.getX(R),U=d.getX(R+1),W=d.getX(R+2);a=ll(this,g,e,r,m,v,_,B,U,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const N=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);a=ll(this,f,e,r,m,v,_,N,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const y=x[E],g=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,$=L;R<$;R+=3){const B=R,U=R+1,W=R+2;a=ll(this,g,e,r,m,v,_,B,U,W),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=E,g=A;y<g;y+=3){const N=y,L=y+1,R=y+2;a=ll(this,f,e,r,m,v,_,N,L,R),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function Q_(s,e,n,r,a,c,f,d){let p;if(e.side===Rn?p=r.intersectTriangle(f,c,a,!0,d):p=r.intersectTriangle(a,c,f,e.side===yr,d),p===null)return null;al.copy(d),al.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:s}}function ll(s,e,n,r,a,c,f,d,p,m){s.getVertexPosition(d,il),s.getVertexPosition(p,rl),s.getVertexPosition(m,sl);const v=Q_(s,e,n,r,il,rl,sl,Wp);if(v){const _=new Q;li.getBarycoord(Wp,il,rl,sl,_),a&&(v.uv=li.getInterpolatedAttribute(a,d,p,m,_,new Pt)),c&&(v.uv1=li.getInterpolatedAttribute(c,d,p,m,_,new Pt)),f&&(v.normal=li.getInterpolatedAttribute(f,d,p,m,_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Q,materialIndex:0};li.getNormal(il,rl,sl,x.normal),v.face=x,v.barycoord=_}return v}class Bo extends di{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const d=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,c,0),E("z","y","x",1,-1,r,n,-e,f,c,1),E("x","z","y",1,1,e,r,n,a,f,2),E("x","z","y",1,-1,e,r,-n,a,f,3),E("x","y","z",1,-1,e,n,r,a,c,4),E("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(_,2));function E(A,y,g,N,L,R,$,B,U,W,P){const C=R/U,F=$/W,oe=R/2,ne=$/2,de=B/2,pe=U+1,ae=W+1;let ce=0,z=0;const le=new Q;for(let se=0;se<ae;se++){const I=se*F-ne;for(let ie=0;ie<pe;ie++){const Ne=ie*C-oe;le[A]=Ne*N,le[y]=I*L,le[g]=de,m.push(le.x,le.y,le.z),le[A]=0,le[y]=0,le[g]=B>0?1:-1,v.push(le.x,le.y,le.z),_.push(ie/U),_.push(1-se/W),ce+=1}}for(let se=0;se<W;se++)for(let I=0;I<U;I++){const ie=x+I+pe*se,Ne=x+I+pe*(se+1),Z=x+(I+1)+pe*(se+1),ue=x+(I+1)+pe*se;p.push(ie,Ne,ue),p.push(Ne,Z,ue),z+=6}d.addGroup(S,z,P),S+=z,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=Gs(s[n]);for(const a in r)e[a]=r[a]}return e}function J_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Xm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const e0={clone:Gs,merge:vn};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends ko{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class jm extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new Q,Xp=new Pt,jp=new Pt;class Kn extends jm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,jp),n.subVectors(jp,Xp)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(pu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ls=-90,Ds=1;class i0 extends bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const c=new Kn(Ls,Ds,e,n);c.layers=this.layers,this.add(c);const f=new Kn(Ls,Ds,e,n);f.layers=this.layers,this.add(f);const d=new Kn(Ls,Ds,e,n);d.layers=this.layers,this.add(d);const p=new Kn(Ls,Ds,e,n);p.layers=this.layers,this.add(p);const m=new Kn(Ls,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ml)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ym extends Pn{constructor(e,n,r,a,c,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,c,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Ym(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Bo(5,5,5),c=new Sr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:_r});c.uniforms.tEquirect.value=n;const f=new ui(a,c),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=yi),new i0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const Uu=new Q,s0=new Q,o0=new ot;class Vr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Uu.subVectors(r,n).cross(s0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Uu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||o0.getNormalMatrix(e),a=this.coplanarPoint(Uu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Cl,cl=new Q;class qm{constructor(e=new Vr,n=new Vr,r=new Vr,a=new Vr,c=new Vr,f=new Vr){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],_=a[6],x=a[7],S=a[8],E=a[9],A=a[10],y=a[11],g=a[12],N=a[13],L=a[14],R=a[15];if(r[0].setComponents(p-c,x-m,y-S,R-g).normalize(),r[1].setComponents(p+c,x+m,y+S,R+g).normalize(),r[2].setComponents(p+f,x+v,y+E,R+N).normalize(),r[3].setComponents(p-f,x-v,y-E,R-N).normalize(),r[4].setComponents(p-d,x-_,y-A,R-L).normalize(),n===zi)r[5].setComponents(p+d,x+_,y+A,R+L).normalize();else if(n===Ml)r[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(cl.x=a.normal.x>0?e.max.x:e.min.x,cl.y=a.normal.y>0?e.max.y:e.min.y,cl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $m(){let s=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function a0(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],A=_[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,_[x]=A)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const A=_[S];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:c,update:f}}class Rl extends di{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,_=e/d,x=n/p,S=[],E=[],A=[],y=[];for(let g=0;g<v;g++){const N=g*x-f;for(let L=0;L<m;L++){const R=L*_-c;E.push(R,-N,0),A.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<d;N++){const L=N+m*g,R=N+m*(g+1),$=N+1+m*(g+1),B=N+1+m*g;S.push(L,R,B),S.push(R,$,B)}this.setIndex(S),this.setAttribute("position",new Bn(E,3)),this.setAttribute("normal",new Bn(A,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ox=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ey=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ny=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,py=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,my=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ay=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ry=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,By=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:u0,alphamap_pars_fragment:f0,alphatest_fragment:d0,alphatest_pars_fragment:h0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:v0,begin_vertex:_0,beginnormal_vertex:x0,bsdfs:y0,iridescence_fragment:S0,bumpmap_pars_fragment:M0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:A0,color_fragment:C0,color_pars_fragment:R0,color_pars_vertex:P0,color_vertex:b0,common:L0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:N0,displacementmap_pars_vertex:I0,displacementmap_vertex:U0,emissivemap_fragment:F0,emissivemap_pars_fragment:O0,colorspace_fragment:k0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:ex,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:j0,fog_fragment:Y0,fog_pars_fragment:q0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:K0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:Q0,lights_pars_begin:J0,lights_toon_fragment:tx,lights_toon_pars_fragment:nx,lights_phong_fragment:ix,lights_phong_pars_fragment:rx,lights_physical_fragment:sx,lights_physical_pars_fragment:ox,lights_fragment_begin:ax,lights_fragment_maps:lx,lights_fragment_end:cx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:hx,map_fragment:px,map_pars_fragment:mx,map_particle_fragment:gx,map_particle_pars_fragment:vx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:xx,morphinstance_vertex:yx,morphcolor_vertex:Sx,morphnormal_vertex:Mx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Tx,normal_fragment_begin:wx,normal_fragment_maps:Ax,normal_pars_fragment:Cx,normal_pars_vertex:Rx,normal_vertex:Px,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Lx,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ix,opaque_fragment:Ux,packing:Fx,premultiplied_alpha_fragment:Ox,project_vertex:kx,dithering_fragment:Bx,dithering_pars_fragment:zx,roughnessmap_fragment:Hx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Wx,shadowmap_vertex:Xx,shadowmask_pars_fragment:jx,skinbase_vertex:Yx,skinning_pars_vertex:qx,skinning_vertex:$x,skinnormal_vertex:Kx,specularmap_fragment:Zx,specularmap_pars_fragment:Qx,tonemapping_fragment:Jx,tonemapping_pars_fragment:ey,transmission_fragment:ty,transmission_pars_fragment:ny,uv_pars_fragment:iy,uv_pars_vertex:ry,uv_vertex:sy,worldpos_vertex:oy,background_vert:ay,background_frag:ly,backgroundCube_vert:cy,backgroundCube_frag:uy,cube_vert:fy,cube_frag:dy,depth_vert:hy,depth_frag:py,distanceRGBA_vert:my,distanceRGBA_frag:gy,equirect_vert:vy,equirect_frag:_y,linedashed_vert:xy,linedashed_frag:yy,meshbasic_vert:Sy,meshbasic_frag:My,meshlambert_vert:Ey,meshlambert_frag:Ty,meshmatcap_vert:wy,meshmatcap_frag:Ay,meshnormal_vert:Cy,meshnormal_frag:Ry,meshphong_vert:Py,meshphong_frag:by,meshphysical_vert:Ly,meshphysical_frag:Dy,meshtoon_vert:Ny,meshtoon_frag:Iy,points_vert:Uy,points_frag:Fy,shadow_vert:Oy,shadow_frag:ky,sprite_vert:By,sprite_frag:zy},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};xi.physical={uniforms:vn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ul={r:0,b:0,g:0},zr=new Gi,Hy=new Ht;function Vy(s,e,n,r,a,c,f){const d=new xt(0);let p=c===!0?0:1,m,v,_=null,x=0,S=null;function E(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:e).get(L)),L}function A(N){let L=!1;const R=E(N);R===null?g(d,p):R&&R.isColor&&(g(R,1),L=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,f):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,L){const R=E(L);R&&(R.isCubeTexture||R.mapping===wl)?(v===void 0&&(v=new ui(new Bo(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Gs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function($,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),zr.copy(L.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.material.uniforms.envMap.value=R,v.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(zr)),v.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,(_!==R||x!==R.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,_=R,x=R.version,S=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ui(new Rl(2,2),new Sr({name:"BackgroundMaterial",uniforms:Gs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,x=R.version,S=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,L){N.getRGB(ul,Xm(s)),r.buffers.color.setClear(ul.r,ul.g,ul.b,L,f)}return{getClearColor:function(){return d},setClearColor:function(N,L=1){d.set(N),p=L,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(d,p)},render:A,addToRenderList:y}}function Gy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,f=!1;function d(C,F,oe,ne,de){let pe=!1;const ae=_(ne,oe,F);c!==ae&&(c=ae,m(c.object)),pe=S(C,ne,oe,de),pe&&E(C,ne,oe,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,R(C,F,oe,ne),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,F,oe){const ne=oe.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let pe=de[F.id];pe===void 0&&(pe={},de[F.id]=pe);let ae=pe[ne];return ae===void 0&&(ae=x(p()),pe[ne]=ae),ae}function x(C){const F=[],oe=[],ne=[];for(let de=0;de<n;de++)F[de]=0,oe[de]=0,ne[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:oe,attributeDivisors:ne,object:C,attributes:{},index:null}}function S(C,F,oe,ne){const de=c.attributes,pe=F.attributes;let ae=0;const ce=oe.getAttributes();for(const z in ce)if(ce[z].location>=0){const se=de[z];let I=pe[z];if(I===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;ae++}return c.attributesNum!==ae||c.index!==ne}function E(C,F,oe,ne){const de={},pe=F.attributes;let ae=0;const ce=oe.getAttributes();for(const z in ce)if(ce[z].location>=0){let se=pe[z];se===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),de[z]=I,ae++}c.attributes=de,c.attributesNum=ae,c.index=ne}function A(){const C=c.newAttributes;for(let F=0,oe=C.length;F<oe;F++)C[F]=0}function y(C){g(C,0)}function g(C,F){const oe=c.newAttributes,ne=c.enabledAttributes,de=c.attributeDivisors;oe[C]=1,ne[C]===0&&(s.enableVertexAttribArray(C),ne[C]=1),de[C]!==F&&(s.vertexAttribDivisor(C,F),de[C]=F)}function N(){const C=c.newAttributes,F=c.enabledAttributes;for(let oe=0,ne=F.length;oe<ne;oe++)F[oe]!==C[oe]&&(s.disableVertexAttribArray(oe),F[oe]=0)}function L(C,F,oe,ne,de,pe,ae){ae===!0?s.vertexAttribIPointer(C,F,oe,de,pe):s.vertexAttribPointer(C,F,oe,ne,de,pe)}function R(C,F,oe,ne){A();const de=ne.attributes,pe=oe.getAttributes(),ae=F.defaultAttributeValues;for(const ce in pe){const z=pe[ce];if(z.location>=0){let le=de[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ne=ie.buffer,Z=ie.type,ue=ie.bytesPerElement,Ee=Z===s.INT||Z===s.UNSIGNED_INT||le.gpuType===If;if(le.isInterleavedBufferAttribute){const xe=le.data,Ae=xe.stride,Ie=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<z.locationSize;Ze++)g(z.location+Ze,xe.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<z.locationSize;Ze++)y(z.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ze=0;Ze<z.locationSize;Ze++)L(z.location+Ze,I/z.locationSize,Z,se,Ae*ue,(Ie+I/z.locationSize*Ze)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<z.locationSize;xe++)g(z.location+xe,le.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<z.locationSize;xe++)y(z.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let xe=0;xe<z.locationSize;xe++)L(z.location+xe,I/z.locationSize,Z,se,I*ue,I/z.locationSize*xe*ue,Ee)}}else if(ae!==void 0){const se=ae[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(z.location,se);break;case 3:s.vertexAttrib3fv(z.location,se);break;case 4:s.vertexAttrib4fv(z.location,se);break;default:s.vertexAttrib1fv(z.location,se)}}}}N()}function $(){W();for(const C in r){const F=r[C];for(const oe in F){const ne=F[oe];for(const de in ne)v(ne[de].object),delete ne[de];delete F[oe]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const oe in F){const ne=F[oe];for(const de in ne)v(ne[de].object),delete ne[de];delete F[oe]}delete r[C.id]}function U(C){for(const F in r){const oe=r[F];if(oe[C.id]===void 0)continue;const ne=oe[C.id];for(const de in ne)v(ne[de].object),delete ne[de];delete oe[C.id]}}function W(){P(),f=!0,c!==a&&(c=a,m(c.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:W,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:y,disableUnusedAttributes:N}}function Wy(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function d(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let S=0;for(let E=0;E<_;E++)S+=v[E];n.update(S,r,1)}function p(m,v,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],v[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A]*x[A];n.update(E,r,1)}}this.setMode=a,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Xy(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const W=U===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!W)}function p(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:$,maxSamples:B}}function jy(s){const e=this;let n=null,r=0,a=!1,c=!1;const f=new Vr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!a||E===null||E.length===0||c&&!y)c?v(null):m();else{const N=c?0:r,L=N*4;let R=g.clippingState||null;p.value=R,R=v(E,x,L,S);for(let $=0;$!==L;++$)R[$]=n[$];g.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,S,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,E!==!0||y===null){const g=S+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,R=S;L!==A;++L,R+=4)f.copy(_[L]).applyMatrix4(N,d),f.normal.toArray(y,R),y[R+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function Yy(s){let e=new WeakMap;function n(f,d){return d===Qu?f.mapping=Bs:d===Ju&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qu||d===Ju)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new r0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class qy extends jm{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Yp=[.125,.215,.35,.446,.526,.582],Xr=20,Fu=new qy,qp=new xt;let Ou=null,ku=0,Bu=0,zu=!1;const Gr=(1+Math.sqrt(5))/2,Ns=1/Gr,$p=[new Q(-Gr,Ns,0),new Q(Gr,Ns,0),new Q(-Ns,0,Gr),new Q(Ns,0,Gr),new Q(0,Gr,-Ns),new Q(0,Gr,Ns),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,ku,Bu),this._renderer.xr.enabled=zu,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Io,format:ci,colorSpace:Ws,depthBuffer:!1},a=Zp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$y(c)),this._blurMaterial=Ky(c,e,n)}return a}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,r,a){const d=new Kn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(qp),v.toneMapping=xr,v.autoClear=!1;const S=new Tl({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),E=new ui(new Bo,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(qp),A=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):N===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;fl(a,N*L,g>2?L:0,L,L),v.setRenderTarget(a),A&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new ui(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Fu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=$p[(a-c-1)%$p.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new ui(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),A=c/E,y=isFinite(c)?1+Math.floor(v*A):Xr;y>Xr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const g=[];let N=0;for(let U=0;U<Xr;++U){const W=U/A,P=Math.exp(-W*W/2);g.push(P),U===0?N+=P:U<y&&(N+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const R=this._sizeLods[a],$=3*R*(a>L-Is?a-L+Is:0),B=4*(this._cubeSize-R);fl(n,$,B,3*R,2*R),p.setRenderTarget(n),p.render(_,Fu)}}function $y(s){const e=[],n=[],r=[];let a=s;const c=s-Is+1+Yp.length;for(let f=0;f<c;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Is?p=Yp[f-s+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,E=6,A=3,y=2,g=1,N=new Float32Array(A*E*S),L=new Float32Array(y*E*S),R=new Float32Array(g*E*S);for(let B=0;B<S;B++){const U=B%3*2/3-1,W=B>2?0:-1,P=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];N.set(P,A*E*B),L.set(x,y*E*B);const C=[B,B,B,B,B,B];R.set(C,g*E*B)}const $=new di;$.setAttribute("position",new kn(N,A)),$.setAttribute("uv",new kn(L,y)),$.setAttribute("faceIndex",new kn(R,g)),e.push($),a>Is&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Zp(s,e,n){const r=new $r(s,e,n);return r.texture.mapping=wl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Ky(s,e,n){const r=new Float32Array(Xr),a=new Q(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Qp(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Jp(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function zf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zy(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Qu||p===Ju,v=p===Bs||p===zs;if(m||v){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Kp(s)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new Kp(s)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Qy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Lo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Jy(s,e,n,r){const a={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const A=x.morphAttributes[E];for(let y=0,g=A.length;y<g;y++)e.remove(A[y])}x.removeEventListener("dispose",f),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const A=S[E];for(let y=0,g=A.length;y<g;y++)e.update(A[y],s.ARRAY_BUFFER)}}function m(_){const x=[],S=_.index,E=_.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let L=0,R=N.length;L<R;L+=3){const $=N[L+0],B=N[L+1],U=N[L+2];x.push($,B,B,U,U,$)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,R=N.length/3-1;L<R;L+=3){const $=L+0,B=L+1,U=L+2;x.push($,B,B,U,U,$)}}else return;const y=new(Om(x)?Wm:Gm)(x,1);y.version=A;const g=c.get(_);g&&e.remove(g),c.set(_,y)}function v(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function eS(s,e,n){let r;function a(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*f),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,x*f,E),n.update(S,r,E))}function v(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];n.update(y,r,1)}function _(x,S,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,A,0,E);let g=0;for(let N=0;N<E;N++)g+=S[N]*A[N];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function tS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function nS(s,e,n){const r=new WeakMap,a=new zt;function c(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let $=d.attributes.position.count*R,B=1;$>e.maxTextureSize&&(B=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const U=new Float32Array($*B*4*_),W=new Bm(U,$,B,_);W.type=Bi,W.needsUpdate=!0;const P=R*4;for(let F=0;F<_;F++){const oe=g[F],ne=N[F],de=L[F],pe=$*B*4*F;for(let ae=0;ae<oe.count;ae++){const ce=ae*P;E===!0&&(a.fromBufferAttribute(oe,ae),U[pe+ce+0]=a.x,U[pe+ce+1]=a.y,U[pe+ce+2]=a.z,U[pe+ce+3]=0),A===!0&&(a.fromBufferAttribute(ne,ae),U[pe+ce+4]=a.x,U[pe+ce+5]=a.y,U[pe+ce+6]=a.z,U[pe+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,ae),U[pe+ce+8]=a.x,U[pe+ce+9]=a.y,U[pe+ce+10]=a.z,U[pe+ce+11]=de.itemSize===4?a.w:1)}}x={count:_,texture:W,size:new Pt($,B)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function iS(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class Km extends Pn{constructor(e,n,r,a,c,f,d,p,m,v=Fs){if(v!==Fs&&v!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Fs&&(r=qr),r===void 0&&v===Vs&&(r=Hs),super(null,a,c,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:fi,this.minFilter=p!==void 0?p:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Zm=new Pn,em=new Km(1,1),Qm=new Bm,Jm=new V_,eg=new Ym,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=tm[a];if(c===void 0&&(c=new Float32Array(a),tm[a]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(c,d)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Pl(s,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function rS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function sS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function oS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function aS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function lS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;sm.set(r),s.uniformMatrix2fv(this.addr,!1,sm),Kt(n,r)}}function cS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;rm.set(r),s.uniformMatrix3fv(this.addr,!1,rm),Kt(n,r)}}function uS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;im.set(r),s.uniformMatrix4fv(this.addr,!1,im),Kt(n,r)}}function fS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function dS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function pS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function mS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function xS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(em.compareFunction=Fm,c=em):c=Zm,n.setTexture2D(e||c,a)}function yS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Jm,a)}function SS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||eg,a)}function MS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Qm,a)}function ES(s){switch(s){case 5126:return rS;case 35664:return sS;case 35665:return oS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return uS;case 5124:case 35670:return fS;case 35667:case 35671:return dS;case 35668:case 35672:return hS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return vS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return MS}}function TS(s,e){s.uniform1fv(this.addr,e)}function wS(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function AS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function CS(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function RS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function PS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function bS(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function LS(s,e){s.uniform1iv(this.addr,e)}function DS(s,e){s.uniform2iv(this.addr,e)}function NS(s,e){s.uniform3iv(this.addr,e)}function IS(s,e){s.uniform4iv(this.addr,e)}function US(s,e){s.uniform1uiv(this.addr,e)}function FS(s,e){s.uniform2uiv(this.addr,e)}function OS(s,e){s.uniform3uiv(this.addr,e)}function kS(s,e){s.uniform4uiv(this.addr,e)}function BS(s,e,n){const r=this.cache,a=e.length,c=Pl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Zm,c[f])}function zS(s,e,n){const r=this.cache,a=e.length,c=Pl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Jm,c[f])}function HS(s,e,n){const r=this.cache,a=e.length,c=Pl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||eg,c[f])}function VS(s,e,n){const r=this.cache,a=e.length,c=Pl(n,a);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Qm,c[f])}function GS(s){switch(s){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return PS;case 35676:return bS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return NS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return VS}}class WS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ES(n.type)}}class XS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GS(n.type)}}class jS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const d=a[c];d.setValue(e,n[d.id],r)}}}const Hu=/(\w+)(\])?(\[|\.)?/g;function om(s,e){s.seq.push(e),s.map[e.id]=e}function YS(s,e,n){const r=s.name,a=r.length;for(Hu.lastIndex=0;;){const c=Hu.exec(r),f=Hu.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){om(n,m===void 0?new WS(d,s,e):new XS(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new jS(d),om(n,_)),n=_}}}class Sl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);YS(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function am(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const qS=37297;let $S=0;function KS(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const lm=new ot;function ZS(s){_t._getMatrix(lm,_t.workingColorSpace,s);const e=`mat3( ${lm.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(s)){case Al:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+KS(s.getShaderSource(e),f)}else return a}function QS(s,e){const n=ZS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function JS(s,e){let n;switch(e){case p_:n="Linear";break;case m_:n="Reinhard";break;case g_:n="Cineon";break;case v_:n="ACESFilmic";break;case x_:n="AgX";break;case y_:n="Neutral";break;case __:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new Q;function eM(){_t.getLuminanceCoefficients(dl);const s=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function nM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function iM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Do(s){return s!==""}function um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(s){return s.replace(rM,oM)}const sM=new Map;function oM(s,e){let n=at[e];if(n===void 0){const r=sM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(s){return s.replace(aM,lM)}function lM(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function hm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function uM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tm:e="ENVMAP_BLENDING_MULTIPLY";break;case d_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function hM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function pM(s,e,n,r){const a=s.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=cM(n),m=uM(n),v=fM(n),_=dM(n),x=hM(n),S=tM(n),E=nM(c),A=a.createProgram();let y,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Do).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(y=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?at.tonemapping_pars_fragment:"",n.toneMapping!==xr?JS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,QS("linearToOutputTexel",n.outputColorSpace),eM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=bf(f),f=um(f,n),f=fm(f,n),d=bf(d),d=um(d,n),d=fm(d,n),f=dm(f),d=dm(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+y+f,R=N+g+d,$=am(a,a.VERTEX_SHADER,L),B=am(a,a.FRAGMENT_SHADER,R);a.attachShader(A,$),a.attachShader(A,B),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function U(F){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(A).trim(),ne=a.getShaderInfoLog($).trim(),de=a.getShaderInfoLog(B).trim();let pe=!0,ae=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,$,B);else{const ce=cm(a,$,"vertex"),z=cm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+oe+`
`+ce+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ne===""||de==="")&&(ae=!1);ae&&(F.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:ne,prefix:y},fragmentShader:{log:de,prefix:g}})}a.deleteShader($),a.deleteShader(B),W=new Sl(a,A),P=iM(a,A)}let W;this.getUniforms=function(){return W===void 0&&U(this),W};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(A,qS)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$S++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=$,this.fragmentShader=B,this}let mM=0;class gM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new vM(e),n.set(e,r)),r}}class vM{constructor(e){this.id=mM++,this.code=e,this.usedTimes=0}}function _M(s,e,n,r,a,c,f){const d=new Hm,p=new gM,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,F,oe,ne){const de=oe.fog,pe=ne.geometry,ae=P.isMeshStandardMaterial?oe.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),z=ce&&ce.mapping===wl?ce.image.height:null,le=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=se!==void 0?se.length:0;let ie=0;pe.morphAttributes.position!==void 0&&(ie=1),pe.morphAttributes.normal!==void 0&&(ie=2),pe.morphAttributes.color!==void 0&&(ie=3);let Ne,Z,ue,Ee;if(le){const gt=xi[le];Ne=gt.vertexShader,Z=gt.fragmentShader}else Ne=P.vertexShader,Z=P.fragmentShader,p.update(P),ue=p.getVertexShaderID(P),Ee=p.getFragmentShaderID(P);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ie=ne.isInstancedMesh===!0,Ze=ne.isBatchedMesh===!0,At=!!P.map,ht=!!P.matcap,bt=!!ce,j=!!P.aoMap,dn=!!P.lightMap,dt=!!P.bumpMap,ct=!!P.normalMap,qe=!!P.displacementMap,Tt=!!P.emissiveMap,Ye=!!P.metalnessMap,b=!!P.roughnessMap,T=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,fe=P.sheen>0,Ve=P.transmission>0,Ce=T&&!!P.anisotropyMap,Ue=K&&!!P.clearcoatMap,lt=K&&!!P.clearcoatNormalMap,Se=K&&!!P.clearcoatRoughnessMap,Oe=ve&&!!P.iridescenceMap,Qe=ve&&!!P.iridescenceThicknessMap,Je=fe&&!!P.sheenColorMap,ke=fe&&!!P.sheenRoughnessMap,ut=!!P.specularMap,it=!!P.specularColorMap,Et=!!P.specularIntensityMap,V=Ve&&!!P.transmissionMap,Re=Ve&&!!P.thicknessMap,re=!!P.gradientMap,he=!!P.alphaMap,Le=P.alphaTest>0,be=!!P.alphaHash,rt=!!P.extensions;let Dt=xr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Xt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Z,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&ne._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ne.instanceColor!==null,instancingMorph:Ie&&ne.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ws,alphaToCoverage:!!P.alphaToCoverage,map:At,matcap:ht,envMap:bt,envMapMode:bt&&ce.mapping,envMapCubeUVHeight:z,aoMap:j,lightMap:dn,bumpMap:dt,normalMap:ct,displacementMap:x&&qe,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===w_,normalMapTangentSpace:ct&&P.normalMapType===T_,metalnessMap:Ye,roughnessMap:b,anisotropy:T,anisotropyMap:Ce,clearcoat:K,clearcoatMap:Ue,clearcoatNormalMap:lt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:ve,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:Je,sheenRoughnessMap:ke,specularMap:ut,specularColorMap:it,specularIntensityMap:Et,transmission:Ve,transmissionMap:V,thicknessMap:Re,gradientMap:re,opaque:P.transparent===!1&&P.blending===Us&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:be,combine:P.combine,mapUv:At&&A(P.map.channel),aoMapUv:j&&A(P.aoMap.channel),lightMapUv:dn&&A(P.lightMap.channel),bumpMapUv:dt&&A(P.bumpMap.channel),normalMapUv:ct&&A(P.normalMap.channel),displacementMapUv:qe&&A(P.displacementMap.channel),emissiveMapUv:Tt&&A(P.emissiveMap.channel),metalnessMapUv:Ye&&A(P.metalnessMap.channel),roughnessMapUv:b&&A(P.roughnessMap.channel),anisotropyMapUv:Ce&&A(P.anisotropyMap.channel),clearcoatMapUv:Ue&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:lt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(P.sheenRoughnessMap.channel),specularMapUv:ut&&A(P.specularMap.channel),specularColorMapUv:it&&A(P.specularColorMap.channel),specularIntensityMapUv:Et&&A(P.specularIntensityMap.channel),transmissionMapUv:V&&A(P.transmissionMap.channel),thicknessMapUv:Re&&A(P.thicknessMap.channel),alphaMapUv:he&&A(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!pe.attributes.uv&&(At||he),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:ne.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:At&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ki,flipSided:P.side===Rn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Xt.vertexUv1s=m.has(1),Xt.vertexUv2s=m.has(2),Xt.vertexUv3s=m.has(3),m.clear(),Xt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const F in P.defines)C.push(F),C.push(P.defines[F]);return P.isRawShaderMaterial===!1&&(N(C,P),L(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function N(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=E[P.type];let F;if(C){const oe=xi[C];F=e0.clone(oe.uniforms)}else F=P.uniforms;return F}function $(P,C){let F;for(let oe=0,ne=v.length;oe<ne;oe++){const de=v[oe];if(de.cacheKey===C){F=de,++F.usedTimes;break}}return F===void 0&&(F=new pM(s,C,P,c),v.push(F)),F}function B(P){if(--P.usedTimes===0){const C=v.indexOf(P);v[C]=v[v.length-1],v.pop(),P.destroy()}}function U(P){p.remove(P)}function W(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:$,releaseProgram:B,releaseShaderCache:U,programs:v,dispose:W}}function xM(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function yM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(_,x,S,E,A,y){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:A,group:y},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=A,g.group=y),e++,g}function d(_,x,S,E,A,y){const g=f(_,x,S,E,A,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(_,x,S,E,A,y){const g=f(_,x,S,E,A,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||yM),r.length>1&&r.sort(x||pm),a.length>1&&a.sort(x||pm)}function v(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:d,unshift:p,finish:v,sort:m}}function SM(){let s=new WeakMap;function e(r,a){const c=s.get(r);let f;return c===void 0?(f=new mm,s.set(r,[f])):a>=c.length?(f=new mm,c.push(f)):f=c[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function MM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new xt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function EM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let TM=0;function wM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function AM(s){const e=new MM,n=EM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,c=new Ht,f=new Ht;function d(m){let v=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,A=0,y=0,g=0,N=0,L=0,R=0,$=0,B=0,U=0;m.sort(wM);for(let P=0,C=m.length;P<C;P++){const F=m[P],oe=F.color,ne=F.intensity,de=F.distance,pe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=oe.r*ne,_+=oe.g*ne,x+=oe.b*ne;else if(F.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(F.sh.coefficients[ae],ne);U++}else if(F.isDirectionalLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ce=F.shadow,z=n.get(F);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=F.shadow.matrix,N++}r.directional[S]=ae,S++}else if(F.isSpotLight){const ae=e.get(F);ae.position.setFromMatrixPosition(F.matrixWorld),ae.color.copy(oe).multiplyScalar(ne),ae.distance=de,ae.coneCos=Math.cos(F.angle),ae.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ae.decay=F.decay,r.spot[A]=ae;const ce=F.shadow;if(F.map&&(r.spotLightMap[$]=F.map,$++,ce.updateMatrices(F),F.castShadow&&B++),r.spotLightMatrix[A]=ce.matrix,F.castShadow){const z=n.get(F);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[A]=z,r.spotShadowMap[A]=pe,R++}A++}else if(F.isRectAreaLight){const ae=e.get(F);ae.color.copy(oe).multiplyScalar(ne),ae.halfWidth.set(F.width*.5,0,0),ae.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=ae,y++}else if(F.isPointLight){const ae=e.get(F);if(ae.color.copy(F.color).multiplyScalar(F.intensity),ae.distance=F.distance,ae.decay=F.decay,F.castShadow){const ce=F.shadow,z=n.get(F);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=F.shadow.matrix,L++}r.point[E]=ae,E++}else if(F.isHemisphereLight){const ae=e.get(F);ae.skyColor.copy(F.color).multiplyScalar(ne),ae.groundColor.copy(F.groundColor).multiplyScalar(ne),r.hemi[g]=ae,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==R||W.numSpotMaps!==$||W.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+$-B,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=U,W.directionalLength=S,W.pointLength=E,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=R,W.numSpotMaps=$,W.numLightProbes=U,r.version=TM++)}function p(m,v){let _=0,x=0,S=0,E=0,A=0;const y=v.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const L=m[g];if(L.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),_++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),f.identity(),c.copy(L.matrixWorld),c.premultiply(y),f.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:r}}function gm(s){const e=new AM(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function CM(s){let e=new WeakMap;function n(a,c=0){const f=e.get(a);let d;return f===void 0?(d=new gm(s),e.set(a,[d])):c>=f.length?(d=new gm(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class RM extends ko{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends ko{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DM(s,e,n){let r=new qm;const a=new Pt,c=new Pt,f=new zt,d=new RM({depthPacking:E_}),p=new PM,m={},v=n.maxTextureSize,_={[yr]:Rn,[Rn]:yr,[ki]:ki},x=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:bM,fragmentShader:LM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Em;let g=this.type;this.render=function(B,U,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(_r),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ne=g!==Oi&&this.type===Oi,de=g===Oi&&this.type!==Oi;for(let pe=0,ae=B.length;pe<ae;pe++){const ce=B[pe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const le=z.getFrameExtents();if(a.multiply(le),c.copy(z.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/le.x),a.x=c.x*le.x,z.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/le.y),a.y=c.y*le.y,z.mapSize.y=c.y)),z.map===null||ne===!0||de===!0){const I=this.type!==Oi?{minFilter:fi,magFilter:fi}:{};z.map!==null&&z.map.dispose(),z.map=new $r(a.x,a.y,I),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const se=z.getViewportCount();for(let I=0;I<se;I++){const ie=z.getViewport(I);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),oe.viewport(f),z.updateMatrices(ce,I),r=z.getFrustum(),R(U,W,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&N(z,W),z.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,F)};function N(B,U){const W=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $r(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(U,null,W,x,A,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(U,null,W,S,A,null)}function L(B,U,W,P){let C=null;const F=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)C=F;else if(C=W.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=C.uuid,ne=U.uuid;let de=m[oe];de===void 0&&(de={},m[oe]=de);let pe=de[ne];pe===void 0&&(pe=C.clone(),de[ne]=pe,U.addEventListener("dispose",$)),C=pe}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Oi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:_[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=s.properties.get(C);oe.light=W}return C}function R(B,U,W,P,C){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Oi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const ne=e.update(B),de=B.material;if(Array.isArray(de)){const pe=ne.groups;for(let ae=0,ce=pe.length;ae<ce;ae++){const z=pe[ae],le=de[z.materialIndex];if(le&&le.visible){const se=L(B,le,P,C);B.onBeforeShadow(s,B,U,W,ne,se,z),s.renderBufferDirect(W,null,ne,se,B,z),B.onAfterShadow(s,B,U,W,ne,se,z)}}}else if(de.visible){const pe=L(B,de,P,C);B.onBeforeShadow(s,B,U,W,ne,pe,null),s.renderBufferDirect(W,null,ne,pe,B,null),B.onAfterShadow(s,B,U,W,ne,pe,null)}}const oe=B.children;for(let ne=0,de=oe.length;ne<de;ne++)R(oe[ne],U,W,P,C)}function $(B){B.target.removeEventListener("dispose",$);for(const W in m){const P=m[W],C=B.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const NM={[Xu]:ju,[Yu]:Ku,[qu]:Zu,[ks]:$u,[ju]:Xu,[Ku]:Yu,[Zu]:qu,[$u]:ks};function IM(s,e){function n(){let V=!1;const Re=new zt;let re=null;const he=new zt(0,0,0,0);return{setMask:function(Le){re!==Le&&!V&&(s.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){V=Le},setClear:function(Le,be,rt,Dt,Xt){Xt===!0&&(Le*=Dt,be*=Dt,rt*=Dt),Re.set(Le,be,rt,Dt),he.equals(Re)===!1&&(s.clearColor(Le,be,rt,Dt),he.copy(Re))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function r(){let V=!1,Re=!1,re=null,he=null,Le=null;return{setReversed:function(be){if(Re!==be){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Le;Le=null,this.setClear(Dt)}Re=be},getReversed:function(){return Re},setTest:function(be){be?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(be){re!==be&&!V&&(s.depthMask(be),re=be)},setFunc:function(be){if(Re&&(be=NM[be]),he!==be){switch(be){case Xu:s.depthFunc(s.NEVER);break;case ju:s.depthFunc(s.ALWAYS);break;case Yu:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case qu:s.depthFunc(s.EQUAL);break;case $u:s.depthFunc(s.GEQUAL);break;case Ku:s.depthFunc(s.GREATER);break;case Zu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=be}},setLocked:function(be){V=be},setClear:function(be){Le!==be&&(Re&&(be=1-be),s.clearDepth(be),Le=be)},reset:function(){V=!1,re=null,he=null,Le=null,Re=!1}}}function a(){let V=!1,Re=null,re=null,he=null,Le=null,be=null,rt=null,Dt=null,Xt=null;return{setTest:function(gt){V||(gt?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!V&&(s.stencilMask(gt),Re=gt)},setFunc:function(gt,_n,hn){(re!==gt||he!==_n||Le!==hn)&&(s.stencilFunc(gt,_n,hn),re=gt,he=_n,Le=hn)},setOp:function(gt,_n,hn){(be!==gt||rt!==_n||Dt!==hn)&&(s.stencilOp(gt,_n,hn),be=gt,rt=_n,Dt=hn)},setLocked:function(gt){V=gt},setClear:function(gt){Xt!==gt&&(s.clearStencil(gt),Xt=gt)},reset:function(){V=!1,Re=null,re=null,he=null,Le=null,be=null,rt=null,Dt=null,Xt=null}}}const c=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,N=null,L=null,R=null,$=null,B=null,U=new xt(0,0,0),W=0,P=!1,C=null,F=null,oe=null,ne=null,de=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=ce>=2);let le=null,se={};const I=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ne=new zt().fromArray(I),Z=new zt().fromArray(ie);function ue(V,Re,re,he){const Le=new Uint8Array(4),be=s.createTexture();s.bindTexture(V,be),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<re;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return be}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),f.setFunc(ks),dt(!1),ct(yp),xe(s.CULL_FACE),j(_r);function xe(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Ae(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Ie(V,Re){return _[V]!==Re?(s.bindFramebuffer(V,Re),_[V]=Re,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(V,Re){let re=S,he=!1;if(V){re=x.get(Re),re===void 0&&(re=[],x.set(Re,re));const Le=V.textures;if(re.length!==Le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let be=0,rt=Le.length;be<rt;be++)re[be]=s.COLOR_ATTACHMENT0+be;re.length=Le.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function At(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const ht={[Wr]:s.FUNC_ADD,[$v]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};ht[Zv]=s.MIN,ht[Qv]=s.MAX;const bt={[Jv]:s.ZERO,[e_]:s.ONE,[t_]:s.SRC_COLOR,[Gu]:s.SRC_ALPHA,[a_]:s.SRC_ALPHA_SATURATE,[s_]:s.DST_COLOR,[i_]:s.DST_ALPHA,[n_]:s.ONE_MINUS_SRC_COLOR,[Wu]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[r_]:s.ONE_MINUS_DST_ALPHA,[l_]:s.CONSTANT_COLOR,[c_]:s.ONE_MINUS_CONSTANT_COLOR,[u_]:s.CONSTANT_ALPHA,[f_]:s.ONE_MINUS_CONSTANT_ALPHA};function j(V,Re,re,he,Le,be,rt,Dt,Xt,gt){if(V===_r){A===!0&&(Ae(s.BLEND),A=!1);return}if(A===!1&&(xe(s.BLEND),A=!0),V!==qv){if(V!==y||gt!==P){if((g!==Wr||R!==Wr)&&(s.blendEquation(s.FUNC_ADD),g=Wr,R=Wr),gt)switch(V){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sp:s.blendFunc(s.ONE,s.ONE);break;case Mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ep:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ep:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,$=null,B=null,U.set(0,0,0),W=0,y=V,P=gt}return}Le=Le||Re,be=be||re,rt=rt||he,(Re!==g||Le!==R)&&(s.blendEquationSeparate(ht[Re],ht[Le]),g=Re,R=Le),(re!==N||he!==L||be!==$||rt!==B)&&(s.blendFuncSeparate(bt[re],bt[he],bt[be],bt[rt]),N=re,L=he,$=be,B=rt),(Dt.equals(U)===!1||Xt!==W)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Xt),U.copy(Dt),W=Xt),y=V,P=!1}function dn(V,Re){V.side===ki?Ae(s.CULL_FACE):xe(s.CULL_FACE);let re=V.side===Rn;Re&&(re=!re),dt(re),V.blending===Us&&V.transparent===!1?j(_r):j(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),c.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){C!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),C=V)}function ct(V){V!==Xv?(xe(s.CULL_FACE),V!==F&&(V===yp?s.cullFace(s.BACK):V===jv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),F=V}function qe(V){V!==oe&&(ae&&s.lineWidth(V),oe=V)}function Tt(V,Re,re){V?(xe(s.POLYGON_OFFSET_FILL),(ne!==Re||de!==re)&&(s.polygonOffset(Re,re),ne=Re,de=re)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(V){V?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+pe-1),le!==V&&(s.activeTexture(V),le=V)}function T(V,Re,re){re===void 0&&(le===null?re=s.TEXTURE0+pe-1:re=le);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==V||he.texture!==Re)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(V,Re||Ee[V]),he.type=V,he.texture=Re)}function K(){const V=se[le];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ne.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ne.copy(V))}function ke(V){Z.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function ut(V,Re){let re=m.get(Re);re===void 0&&(re=new WeakMap,m.set(Re,re));let he=re.get(V);he===void 0&&(he=s.getUniformBlockIndex(Re,V.name),re.set(V,he))}function it(V,Re){const he=m.get(Re).get(V);p.get(Re)!==he&&(s.uniformBlockBinding(Re,he,V.__bindingPointIndex),p.set(Re,he))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},_={},x=new WeakMap,S=[],E=null,A=!1,y=null,g=null,N=null,L=null,R=null,$=null,B=null,U=new xt(0,0,0),W=0,P=!1,C=null,F=null,oe=null,ne=null,de=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:xe,disable:Ae,bindFramebuffer:Ie,drawBuffers:Ze,useProgram:At,setBlending:j,setMaterial:dn,setFlipSided:dt,setCullFace:ct,setLineWidth:qe,setPolygonOffset:Tt,setScissorTest:Ye,activeTexture:b,bindTexture:T,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:ut,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:Ve,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:Je,viewport:ke,reset:Et}}function vm(s,e,n,r){const a=UM(r);switch(n){case Pm:return s*e;case Lm:return s*e;case Dm:return s*e*2;case Nm:return s*e/a.components*a.byteLength;case Of:return s*e/a.components*a.byteLength;case Im:return s*e*2/a.components*a.byteLength;case kf:return s*e*2/a.components*a.byteLength;case bm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case Bf:return s*e*4/a.components*a.byteLength;case gl:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _l:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yl:case Tf:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Um:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Cf:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(s){switch(s){case Vi:case Am:return{byteLength:1,components:1};case No:case Cm:case Io:return{byteLength:2,components:1};case Uf:case Ff:return{byteLength:2,components:4};case qr:case If:case Bi:return{byteLength:4,components:1};case Rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function FM(s,e,n,r,a,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,v=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,T){return S?new OffscreenCanvas(b,T):El("canvas")}function A(b,T,K){let me=1;const ve=Ye(b);if((ve.width>K||ve.height>K)&&(me=K/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const fe=Math.floor(me*ve.width),Ve=Math.floor(me*ve.height);_===void 0&&(_=E(fe,Ve));const Ce=T?E(fe,Ve):_;return Ce.width=fe,Ce.height=Ve,Ce.getContext("2d").drawImage(b,0,0,fe,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+Ve+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function N(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,T,K,me,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe=T;if(T===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),T===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Ve=ve?Al:_t.getTransfer(me);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=Ve===Ct?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(b,T){let K;return b?T===null||T===qr||T===Hs?K=s.DEPTH24_STENCIL8:T===Bi?K=s.DEPTH32F_STENCIL8:T===No&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===Hs?K=s.DEPTH_COMPONENT24:T===Bi?K=s.DEPTH_COMPONENT32F:T===No&&(K=s.DEPTH_COMPONENT16),K}function $(b,T){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==fi&&b.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function B(b){const T=b.target;T.removeEventListener("dispose",B),W(T),T.isVideoTexture&&v.delete(T)}function U(b){const T=b.target;T.removeEventListener("dispose",U),C(T)}function W(b){const T=r.get(b);if(T.__webglInit===void 0)return;const K=b.source,me=x.get(K);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(b),Object.keys(me).length===0&&x.delete(K)}r.remove(b)}function P(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const K=b.source,me=x.get(K);delete me[T.__cacheKey],f.memory.textures--}function C(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=b.textures;for(let me=0,ve=K.length;me<ve;me++){const fe=r.get(K[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(K[me])}r.remove(b)}let F=0;function oe(){F=0}function ne(){const b=F;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),F+=1,b}function de(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function pe(b,T){const K=r.get(b);if(b.isVideoTexture&&qe(b),b.isRenderTargetTexture===!1&&b.version>0&&K.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,b,T);return}}n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function ae(b,T){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function ce(b,T){const K=r.get(b);if(b.version>0&&K.__version!==b.version){Z(K,b,T);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function z(b,T){const K=r.get(b);if(b.version>0&&K.__version!==b.version){ue(K,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const le={[ef]:s.REPEAT,[jr]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},se={[fi]:s.NEAREST,[S_]:s.NEAREST_MIPMAP_NEAREST,[ja]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[hu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},I={[A_]:s.NEVER,[D_]:s.ALWAYS,[C_]:s.LESS,[Fm]:s.LEQUAL,[R_]:s.EQUAL,[L_]:s.GEQUAL,[P_]:s.GREATER,[b_]:s.NOTEQUAL};function ie(b,T){if(T.type===Bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===hu||T.magFilter===ja||T.magFilter===Yr||T.minFilter===yi||T.minFilter===hu||T.minFilter===ja||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,le[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==ja&&T.minFilter!==Yr||T.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(b,T){let K=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",B));const me=T.source;let ve=x.get(me);ve===void 0&&(ve={},x.set(me,ve));const fe=de(T);if(fe!==b.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ve[fe].usedTimes++;const Ve=ve[b.__cacheKey];Ve!==void 0&&(ve[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),b.__cacheKey=fe,b.__webglTexture=ve[fe].texture}return K}function Z(b,T,K){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ne(b,T),fe=T.source;n.bindTexture(me,b.__webglTexture,s.TEXTURE0+K);const Ve=r.get(fe);if(fe.version!==Ve.__version||ve===!0){n.activeTexture(s.TEXTURE0+K);const Ce=_t.getPrimaries(_t.workingColorSpace),Ue=T.colorSpace===vr?null:_t.getPrimaries(T.colorSpace),lt=T.colorSpace===vr||Ce===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=A(T.image,!1,a.maxTextureSize);Se=Tt(T,Se);const Oe=c.convert(T.format,T.colorSpace),Qe=c.convert(T.type);let Je=L(T.internalFormat,Oe,Qe,T.colorSpace,T.isVideoTexture);ie(me,T);let ke;const ut=T.mipmaps,it=T.isVideoTexture!==!0,Et=Ve.__version===void 0||ve===!0,V=fe.dataReady,Re=$(T,Se);if(T.isDepthTexture)Je=R(T.format===Vs,T.type),Et&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,null));else if(T.isDataTexture)if(ut.length>0){it&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)ke=ut[re],it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,re,Je,ke.width,ke.height,0,Oe,Qe,ke.data);T.generateMipmaps=!1}else it?(Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Qe,Se.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Se.width,Se.height,0,Oe,Qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ut[0].width,ut[0].height,Se.depth);for(let re=0,he=ut.length;re<he;re++)if(ke=ut[re],T.format!==ci)if(Oe!==null)if(it){if(V)if(T.layerUpdates.size>0){const Le=vm(ke.width,ke.height,T.format,T.type);for(const be of T.layerUpdates){const rt=ke.data.subarray(be*Le/ke.data.BYTES_PER_ELEMENT,(be+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,be,ke.width,ke.height,1,Oe,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Je,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,ke.width,ke.height,Se.depth,Oe,Qe,ke.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,Je,ke.width,ke.height,Se.depth,0,Oe,Qe,ke.data)}else{it&&Et&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ut[0].width,ut[0].height);for(let re=0,he=ut.length;re<he;re++)ke=ut[re],T.format!==ci?Oe!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(s.TEXTURE_2D,re,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ke.width,ke.height,Oe,Qe,ke.data):n.texImage2D(s.TEXTURE_2D,re,Je,ke.width,ke.height,0,Oe,Qe,ke.data)}else if(T.isDataArrayTexture)if(it){if(Et&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,Se.width,Se.height,Se.depth),V)if(T.layerUpdates.size>0){const re=vm(Se.width,Se.height,T.format,T.type);for(const he of T.layerUpdates){const Le=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Oe,Qe,Le)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(T.isData3DTexture)it?(Et&&n.texStorage3D(s.TEXTURE_3D,Re,Je,Se.width,Se.height,Se.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Qe,Se.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,Oe,Qe,Se.data);else if(T.isFramebufferTexture){if(Et)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let Le=0;Le<Re;Le++)n.texImage2D(s.TEXTURE_2D,Le,Je,re,he,0,Oe,Qe,null),re>>=1,he>>=1}}else if(ut.length>0){if(it&&Et){const re=Ye(ut[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,re.width,re.height)}for(let re=0,he=ut.length;re<he;re++)ke=ut[re],it?V&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,Qe,ke):n.texImage2D(s.TEXTURE_2D,re,Je,Oe,Qe,ke);T.generateMipmaps=!1}else if(it){if(Et){const re=Ye(Se);n.texStorage2D(s.TEXTURE_2D,Re,Je,re.width,re.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Qe,Se)}else n.texImage2D(s.TEXTURE_2D,0,Je,Oe,Qe,Se);y(T)&&g(me),Ve.__version=fe.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ue(b,T,K){if(T.image.length!==6)return;const me=Ne(b,T),ve=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+K);const fe=r.get(ve);if(ve.version!==fe.__version||me===!0){n.activeTexture(s.TEXTURE0+K);const Ve=_t.getPrimaries(_t.workingColorSpace),Ce=T.colorSpace===vr?null:_t.getPrimaries(T.colorSpace),Ue=T.colorSpace===vr||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let he=0;he<6;he++)!lt&&!Se?Oe[he]=A(T.image[he],!0,a.maxCubemapSize):Oe[he]=Se?T.image[he].image:T.image[he],Oe[he]=Tt(T,Oe[he]);const Qe=Oe[0],Je=c.convert(T.format,T.colorSpace),ke=c.convert(T.type),ut=L(T.internalFormat,Je,ke,T.colorSpace),it=T.isVideoTexture!==!0,Et=fe.__version===void 0||me===!0,V=ve.dataReady;let Re=$(T,Qe);ie(s.TEXTURE_CUBE_MAP,T);let re;if(lt){it&&Et&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,Qe.width,Qe.height);for(let he=0;he<6;he++){re=Oe[he].mipmaps;for(let Le=0;Le<re.length;Le++){const be=re[Le];T.format!==ci?Je!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Je,be.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,be.width,be.height,Je,ke,be.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,ut,be.width,be.height,0,Je,ke,be.data)}}}else{if(re=T.mipmaps,it&&Et){re.length>0&&Re++;const he=Ye(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Se){it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe[he].width,Oe[he].height,Je,ke,Oe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Oe[he].width,Oe[he].height,0,Je,ke,Oe[he].data);for(let Le=0;Le<re.length;Le++){const rt=re[Le].image[he].image;it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,rt.width,rt.height,Je,ke,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,rt.width,rt.height,0,Je,ke,rt.data)}}else{it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,ke,Oe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Je,ke,Oe[he]);for(let Le=0;Le<re.length;Le++){const be=re[Le];it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,Je,ke,be.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,ut,Je,ke,be.image[he])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),fe.__version=ve.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Ee(b,T,K,me,ve,fe){const Ve=c.convert(K.format,K.colorSpace),Ce=c.convert(K.type),Ue=L(K.internalFormat,Ve,Ce,K.colorSpace),lt=r.get(T),Se=r.get(K);if(Se.__renderTarget=T,!lt.__hasExternalTextures){const Oe=Math.max(1,T.width>>fe),Qe=Math.max(1,T.height>>fe);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?n.texImage3D(ve,fe,Ue,Oe,Qe,T.depth,0,Ve,Ce,null):n.texImage2D(ve,fe,Ue,Oe,Qe,0,Ve,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Se.__webglTexture,0,dt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Se.__webglTexture,fe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(b,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,fe=R(T.stencilBuffer,ve),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=dt(T);ct(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,T.width,T.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const fe=me[ve],Ve=c.convert(fe.format,fe.colorSpace),Ce=c.convert(fe.type),Ue=L(fe.internalFormat,Ve,Ce,fe.colorSpace),lt=dt(T);K&&ct(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ue,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ve=me.__webglTexture,fe=dt(T);if(T.depthTexture.format===Fs)ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Vs)ct(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const T=r.get(b),K=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,b)}else if(K){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[me],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(b,T,K){const me=r.get(b);T!==void 0&&Ee(me.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ie(b)}function At(b){const T=b.texture,K=r.get(b),me=r.get(T);b.addEventListener("dispose",U);const ve=b.textures,fe=b.isWebGLCubeRenderTarget===!0,Ve=ve.length>1;if(Ve||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,f.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)K.__webglFramebuffer[Ce][Ue]=s.createFramebuffer()}else K.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const lt=r.get(ve[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ct(b)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ue=ve[Ce];K.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const lt=c.convert(Ue.format,Ue.colorSpace),Se=c.convert(Ue.type),Oe=L(Ue.internalFormat,lt,Se,Ue.colorSpace,b.isXRRenderTarget===!0),Qe=dt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){n.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(K.__webglFramebuffer[Ce][Ue],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else Ee(K.__webglFramebuffer[Ce],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ce=0,Ue=ve.length;Ce<Ue;Ce++){const lt=ve[Ce],Se=r.get(lt);n.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ie(s.TEXTURE_2D,lt),Ee(K.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),ie(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)Ee(K.__webglFramebuffer[Ue],b,T,s.COLOR_ATTACHMENT0,Ce,Ue);else Ee(K.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,Ce,0);y(T)&&g(Ce),n.unbindTexture()}b.depthBuffer&&Ie(b)}function ht(b){const T=b.textures;for(let K=0,me=T.length;K<me;K++){const ve=T[K];if(y(ve)){const fe=N(b),Ve=r.get(ve).__webglTexture;n.bindTexture(fe,Ve),g(fe),n.unbindTexture()}}}const bt=[],j=[];function dn(b){if(b.samples>0){if(ct(b)===!1){const T=b.textures,K=b.width,me=b.height;let ve=s.COLOR_BUFFER_BIT;const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),Ce=T.length>1;if(Ce)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,ve,s.NEAREST),p===!0&&(bt.length=0,j.length=0,bt.push(s.COLOR_ATTACHMENT0+Ue),b.depthBuffer&&b.resolveDepthBuffer===!1&&(bt.push(fe),j.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ue]);const lt=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(b){const T=f.render.frame;v.get(b)!==T&&(v.set(b,T),b.update())}function Tt(b,T){const K=b.colorSpace,me=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||K!==Ws&&K!==vr&&(_t.getTransfer(K)===Ct?(me!==ci||ve!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=ne,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function OM(s,e){function n(r,a=vr){let c;const f=_t.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===Uf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Am)return s.BYTE;if(r===Cm)return s.SHORT;if(r===No)return s.UNSIGNED_SHORT;if(r===If)return s.INT;if(r===qr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Io)return s.HALF_FLOAT;if(r===Pm)return s.ALPHA;if(r===bm)return s.RGB;if(r===ci)return s.RGBA;if(r===Lm)return s.LUMINANCE;if(r===Dm)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Vs)return s.DEPTH_STENCIL;if(r===Nm)return s.RED;if(r===Of)return s.RED_INTEGER;if(r===Im)return s.RG;if(r===kf)return s.RG_INTEGER;if(r===Bf)return s.RGBA_INTEGER;if(r===gl||r===vl||r===_l||r===xl)if(f===Ct)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===of)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af||r===lf||r===cf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===af||r===lf)return f===Ct?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uf||r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===vf||r===_f||r===xf||r===yf||r===Sf||r===Mf||r===Ef)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===uf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_f)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return f===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yl||r===Tf||r===wf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yl)return f===Ct?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Um||r===Af||r===Cf||r===Rf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===yl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class kM extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Pn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Sr({vertexShader:zM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new Rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GM extends Xs{constructor(e,n){super();const r=this;let a=null,c=1,f=null,d="local-floor",p=1,m=null,v=null,_=null,x=null,S=null,E=null;const A=new VM,y=n.getContextAttributes();let g=null,N=null;const L=[],R=[],$=new Pt;let B=null;const U=new Kn;U.viewport=new zt;const W=new Kn;W.viewport=new zt;const P=[U,W],C=new kM;let F=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Vu,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Vu,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Vu,L[Z]=ue),ue.getHandSpace()};function ne(Z){const ue=R.indexOf(Z.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,m||f),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const ue=R[Z];ue!==null&&(R[Z]=null,L[Z].disconnect(ue))}F=null,oe=null,A.reset(),e.setRenderTarget(g),S=null,x=null,_=null,a=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",de),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize($),a.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new $r(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?Vs:Fs,Ee=y.stencil?Hs:qr);const Ae={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:c};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new $r(x.textureWidth,x.textureHeight,{format:ci,type:Vi,depthTexture:new Km(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Z){for(let ue=0;ue<Z.removed.length;ue++){const Ee=Z.removed[ue],xe=R.indexOf(Ee);xe>=0&&(R[xe]=null,L[xe].disconnect(Ee))}for(let ue=0;ue<Z.added.length;ue++){const Ee=Z.added[ue];let xe=R.indexOf(Ee);if(xe===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=R.length){R.push(Ee),xe=Ie;break}else if(R[Ie]===null){R[Ie]=Ee,xe=Ie;break}if(xe===-1)break}const Ae=L[xe];Ae&&Ae.connect(Ee)}}const ae=new Q,ce=new Q;function z(Z,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(ce),Ae=ue.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),At=Ae[14]/(Ae[10]+1),ht=(Ae[9]+1)/Ae[5],bt=(Ae[9]-1)/Ae[5],j=(Ae[8]-1)/Ae[0],dn=(Ie[8]+1)/Ie[0],dt=Ze*j,ct=Ze*dn,qe=xe/(-j+dn),Tt=qe*-j;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Ze+qe,b=At+qe,T=dt-Tt,K=ct+(xe-Tt),me=ht*At/b*Ye,ve=bt*At/b*Ye;Z.projectionMatrix.makePerspective(T,K,me,ve,Ye,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ue=Z.near,Ee=Z.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),C.near=W.near=U.near=ue,C.far=W.far=U.far=Ee,(F!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,oe=C.far),U.layers.mask=Z.layers.mask|2,W.layers.mask=Z.layers.mask|4,C.layers.mask=U.layers.mask|W.layers.mask;const xe=Z.parent,Ae=C.cameras;le(C,xe);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],xe);Ae.length===2?z(C,U,W):C.projectionMatrix.copy(U.projectionMatrix),se(Z,C,xe)};function se(Z,ue,Ee){Ee===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let I=null;function ie(Z,ue){if(v=ue.getViewerPose(m||f),E=ue,v!==null){const Ee=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let xe=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Ze=Ee[Ie];let At=null;if(S!==null)At=S.getViewport(Ze);else{const bt=_.getViewSubImage(x,Ze);At=bt.viewport,Ie===0&&(e.setRenderTargetTextures(N,bt.colorTexture,x.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(N))}let ht=P[Ie];ht===void 0&&(ht=new Kn,ht.layers.enable(Ie),ht.viewport=new zt,P[Ie]=ht),ht.matrix.fromArray(Ze.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ze.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(At.x,At.y,At.width,At.height),Ie===0&&(C.matrix.copy(ht.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(ht)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=_.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&A.init(e,Ie,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=R[Ee],Ae=L[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,ue,m||f)}I&&I(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ne=new $m;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Hr=new Gi,WM=new Ht;function XM(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Xm(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,N,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,N,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Rn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Rn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,R=N.envMapRotation;L&&(y.envMap.value=L,Hr.copy(R),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),y.envMapRotation.value.setFromMatrix4(WM.makeRotationFromEuler(Hr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,N,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jM(s,e,n,r){let a={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const R=L.program;r.uniformBlockBinding(N,R)}function m(N,L){let R=a[N.id];R===void 0&&(E(N),R=v(N),a[N.id]=R,N.addEventListener("dispose",y));const $=L.program;r.updateUBOMapping(N,$);const B=e.render.frame;c[N.id]!==B&&(x(N),c[N.id]=B)}function v(N){const L=_();N.__bindingPointIndex=L;const R=s.createBuffer(),$=N.__size,B=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,$,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function _(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=a[N.id],R=N.uniforms,$=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,U=R.length;B<U;B++){const W=Array.isArray(R[B])?R[B]:[R[B]];for(let P=0,C=W.length;P<C;P++){const F=W[P];if(S(F,B,P,$)===!0){const oe=F.__offset,ne=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let pe=0;pe<ne.length;pe++){const ae=ne[pe],ce=A(ae);typeof ae=="number"||typeof ae=="boolean"?(F.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,oe+de,F.__data)):ae.isMatrix3?(F.__data[0]=ae.elements[0],F.__data[1]=ae.elements[1],F.__data[2]=ae.elements[2],F.__data[3]=0,F.__data[4]=ae.elements[3],F.__data[5]=ae.elements[4],F.__data[6]=ae.elements[5],F.__data[7]=0,F.__data[8]=ae.elements[6],F.__data[9]=ae.elements[7],F.__data[10]=ae.elements[8],F.__data[11]=0):(ae.toArray(F.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,L,R,$){const B=N.value,U=L+"_"+R;if($[U]===void 0)return typeof B=="number"||typeof B=="boolean"?$[U]=B:$[U]=B.clone(),!0;{const W=$[U];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return $[U]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function E(N){const L=N.uniforms;let R=0;const $=16;for(let U=0,W=L.length;U<W;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let C=0,F=P.length;C<F;C++){const oe=P[C],ne=Array.isArray(oe.value)?oe.value:[oe.value];for(let de=0,pe=ne.length;de<pe;de++){const ae=ne[de],ce=A(ae),z=R%$,le=z%ce.boundary,se=z+le;R+=le,se!==0&&$-se<ce.storage&&(R+=$-se),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ce.storage}}}const B=R%$;return B>0&&(R+=$-B),N.__size=R,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const R=f.indexOf(L.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete c[L.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);f=[],a={},c={}}return{bind:p,update:m,dispose:g}}class YM{constructor(e={}){const{canvas:n=I_(),context:r=null,depth:a=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=xr,this.toneMappingExposure=1;const R=this;let $=!1,B=0,U=0,W=null,P=-1,C=null;const F=new zt,oe=new zt;let ne=null;const de=new xt(0);let pe=0,ae=n.width,ce=n.height,z=1,le=null,se=null;const I=new zt(0,0,ae,ce),ie=new zt(0,0,ae,ce);let Ne=!1;const Z=new qm;let ue=!1,Ee=!1;const xe=new Ht,Ae=new Ht,Ie=new Q,Ze=new zt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function bt(){return W===null?z:1}let j=r;function dn(w,G){return n.getContext(w,G)}try{const w={alpha:!0,depth:a,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",be,!1),j===null){const G="webgl2";if(j=dn(G,w),j===null)throw dn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let dt,ct,qe,Tt,Ye,b,T,K,me,ve,fe,Ve,Ce,Ue,lt,Se,Oe,Qe,Je,ke,ut,it,Et,V;function Re(){dt=new Qy(j),dt.init(),it=new OM(j,dt),ct=new Xy(j,dt,e,it),qe=new IM(j,dt),ct.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Tt=new tS(j),Ye=new xM,b=new FM(j,dt,qe,Ye,ct,it,Tt),T=new Yy(R),K=new Zy(R),me=new a0(j),Et=new Gy(j,me),ve=new Jy(j,me,Tt,Et),fe=new iS(j,ve,me,Tt),Je=new nS(j,ct,b),Se=new jy(Ye),Ve=new _M(R,T,K,dt,ct,Et,Se),Ce=new XM(R,Ye),Ue=new SM,lt=new CM(dt),Qe=new Vy(R,T,K,qe,fe,S,p),Oe=new DM(R,fe,ct),V=new jM(j,Tt,ct,qe),ke=new Wy(j,dt,Tt),ut=new eS(j,dt,Tt),Tt.programs=Ve.programs,R.capabilities=ct,R.extensions=dt,R.properties=Ye,R.renderLists=Ue,R.shadowMap=Oe,R.state=qe,R.info=Tt}Re();const re=new GM(R,j);this.xr=re,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=dt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=dt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(ae,ce,!1))},this.getSize=function(w){return w.set(ae,ce)},this.setSize=function(w,G,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,ce=G,n.width=Math.floor(w*z),n.height=Math.floor(G*z),ee===!0&&(n.style.width=w+"px",n.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(ae*z,ce*z).floor()},this.setDrawingBufferSize=function(w,G,ee){ae=w,ce=G,z=ee,n.width=Math.floor(w*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,G,ee,te){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,G,ee,te),qe.viewport(F.copy(I).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,G,ee,te){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,G,ee,te),qe.scissor(oe.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){qe.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(w=!0,G=!0,ee=!0){let te=0;if(w){let X=!1;if(W!==null){const we=W.texture.format;X=we===Bf||we===kf||we===Of}if(X){const we=W.texture.type,Me=we===Vi||we===qr||we===No||we===Hs||we===Uf||we===Ff,Ge=Qe.getClearColor(),ze=Qe.getClearAlpha(),et=Ge.r,nt=Ge.g,We=Ge.b;Me?(E[0]=et,E[1]=nt,E[2]=We,E[3]=ze,j.clearBufferuiv(j.COLOR,0,E)):(A[0]=et,A[1]=nt,A[2]=We,A[3]=ze,j.clearBufferiv(j.COLOR,0,A))}else te|=j.COLOR_BUFFER_BIT}G&&(te|=j.DEPTH_BUFFER_BIT),ee&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),lt.dispose(),Ye.dispose(),T.dispose(),K.dispose(),fe.dispose(),Et.dispose(),V.dispose(),Ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Kr),re.removeEventListener("sessionend",Wi),Si.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const w=Tt.autoReset,G=Oe.enabled,ee=Oe.autoUpdate,te=Oe.needsUpdate,X=Oe.type;Re(),Tt.autoReset=w,Oe.enabled=G,Oe.autoUpdate=ee,Oe.needsUpdate=te,Oe.type=X}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const G=w.target;G.removeEventListener("dispose",rt),Dt(G)}function Dt(w){Xt(w),Ye.remove(w)}function Xt(w){const G=Ye.get(w).programs;G!==void 0&&(G.forEach(function(ee){Ve.releaseProgram(ee)}),w.isShaderMaterial&&Ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,ee,te,X,we){G===null&&(G=At);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Vo(w,G,ee,te,X);qe.setMaterial(te,Me);let ze=ee.index,et=1;if(te.wireframe===!0){if(ze=ve.getWireframeAttribute(ee),ze===void 0)return;et=2}const nt=ee.drawRange,We=ee.attributes.position;let mt=nt.start*et,Mt=(nt.start+nt.count)*et;we!==null&&(mt=Math.max(mt,we.start*et),Mt=Math.min(Mt,(we.start+we.count)*et)),ze!==null?(mt=Math.max(mt,0),Mt=Math.min(Mt,ze.count)):We!=null&&(mt=Math.max(mt,0),Mt=Math.min(Mt,We.count));const pt=Mt-mt;if(pt<0||pt===1/0)return;Et.setup(X,te,Ge,ee,ze);let rn,st=ke;if(ze!==null&&(rn=me.get(ze),st=ut,st.setIndex(rn)),X.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*bt()),st.setMode(j.LINES)):st.setMode(j.TRIANGLES);else if(X.isLine){let je=te.linewidth;je===void 0&&(je=1),qe.setLineWidth(je*bt()),X.isLineSegments?st.setMode(j.LINES):X.isLineLoop?st.setMode(j.LINE_LOOP):st.setMode(j.LINE_STRIP)}else X.isPoints?st.setMode(j.POINTS):X.isSprite&&st.setMode(j.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Zn=X._multiDrawCounts,yt=X._multiDrawCount,sn=ze?me.get(ze).bytesPerElement:1,Qn=Ye.get(te).currentProgram.getUniforms();for(let jt=0;jt<yt;jt++)Qn.setValue(j,"_gl_DrawID",jt),st.render(je[jt]/sn,Zn[jt])}else if(X.isInstancedMesh)st.renderInstances(mt,pt,X.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Zn=Math.min(ee.instanceCount,je);st.renderInstances(mt,pt,Zn)}else st.render(mt,pt)};function gt(w,G,ee){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,Zr(w,G,ee),w.side=yr,w.needsUpdate=!0,Zr(w,G,ee),w.side=ki):Zr(w,G,ee)}this.compile=function(w,G,ee=null){ee===null&&(ee=w),g=lt.get(ee),g.init(G),L.push(g),ee.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),w!==ee&&w.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const te=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const Ge=we[Me];gt(Ge,ee,X),te.add(Ge)}else gt(we,ee,X),te.add(we)}),L.pop(),g=null,te},this.compileAsync=function(w,G,ee=null){const te=this.compile(w,G,ee);return new Promise(X=>{function we(){if(te.forEach(function(Me){Ye.get(Me).currentProgram.isReady()&&te.delete(Me)}),te.size===0){X(w);return}setTimeout(we,10)}dt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let _n=null;function hn(w){_n&&_n(w)}function Kr(){Si.stop()}function Wi(){Si.start()}const Si=new $m;Si.setAnimationLoop(hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(w){_n=w,re.setAnimationLoop(w),w===null?Si.stop():Si.start()},re.addEventListener("sessionstart",Kr),re.addEventListener("sessionend",Wi),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,G,W),g=lt.get(w,L.length),g.init(G),L.push(g),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Ee),y=Ue.get(w,N.length),y.init(),N.push(y),re.enabled===!0&&re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Mi(we,G,-1/0,R.sortObjects)}Mi(w,G,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,se),ht=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ht&&Qe.addToRenderList(y,w),this.info.render.frame++,ue===!0&&Se.beginShadows();const ee=g.state.shadowsArray;Oe.render(ee,w,G),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=y.opaque,X=y.transmissive;if(g.setupLights(),G.isArrayCamera){const we=G.cameras;if(X.length>0)for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Er(te,X,w,ze)}ht&&Qe.render(w);for(let Me=0,Ge=we.length;Me<Ge;Me++){const ze=we[Me];Mr(y,w,ze,ze.viewport)}}else X.length>0&&Er(te,X,w,G),ht&&Qe.render(w),Mr(y,w,G);W!==null&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),w.isScene===!0&&w.onAfterRender(R,w,G),Et.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ue===!0&&Se.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Mi(w,G,ee,te){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){te&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const Me=fe.update(w),Ge=w.material;Ge.visible&&y.push(w,Me,Ge,ee,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Me=fe.update(w),Ge=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ze.copy(Me.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ge)){const ze=Me.groups;for(let et=0,nt=ze.length;et<nt;et++){const We=ze[et],mt=Ge[We.materialIndex];mt&&mt.visible&&y.push(w,Me,mt,ee,Ze.z,We)}}else Ge.visible&&y.push(w,Me,Ge,ee,Ze.z,null)}}const we=w.children;for(let Me=0,Ge=we.length;Me<Ge;Me++)Mi(we[Me],G,ee,te)}function Mr(w,G,ee,te){const X=w.opaque,we=w.transmissive,Me=w.transparent;g.setupLightsView(ee),ue===!0&&Se.setGlobalState(R.clippingPlanes,ee),te&&qe.viewport(F.copy(te)),X.length>0&&Xi(X,G,ee),we.length>0&&Xi(we,G,ee),Me.length>0&&Xi(Me,G,ee),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Er(w,G,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new $r(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Io:Vi,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const we=g.state.transmissionRenderTarget[te.id],Me=te.viewport||F;we.setSize(Me.z,Me.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(de),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),ht&&Qe.render(ee);const ze=R.toneMapping;R.toneMapping=xr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),ue===!0&&Se.setGlobalState(R.clippingPlanes,te),Xi(w,ee,te),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,mt=G.length;We<mt;We++){const Mt=G[We],pt=Mt.object,rn=Mt.geometry,st=Mt.material,je=Mt.group;if(st.side===ki&&pt.layers.test(te.layers)){const Zn=st.side;st.side=Rn,st.needsUpdate=!0,zo(pt,ee,te,rn,st,je),st.side=Zn,st.needsUpdate=!0,nt=!0}}nt===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(de,pe),et!==void 0&&(te.viewport=et),R.toneMapping=ze}function Xi(w,G,ee){const te=G.isScene===!0?G.overrideMaterial:null;for(let X=0,we=w.length;X<we;X++){const Me=w[X],Ge=Me.object,ze=Me.geometry,et=te===null?Me.material:te,nt=Me.group;Ge.layers.test(ee.layers)&&zo(Ge,G,ee,ze,et,nt)}}function zo(w,G,ee,te,X,we){w.onBeforeRender(R,G,ee,te,X,we),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,G,ee,te,w,we),X.transparent===!0&&X.side===ki&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,R.renderBufferDirect(ee,G,te,X,w,we),X.side=yr,X.needsUpdate=!0,R.renderBufferDirect(ee,G,te,X,w,we),X.side=ki):R.renderBufferDirect(ee,G,te,X,w,we),w.onAfterRender(R,G,ee,te,X,we)}function Zr(w,G,ee){G.isScene!==!0&&(G=At);const te=Ye.get(w),X=g.state.lights,we=g.state.shadowsArray,Me=X.state.version,Ge=Ve.getParameters(w,X.state,we,G,ee),ze=Ve.getProgramCacheKey(Ge);let et=te.programs;te.environment=w.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(w.isMeshStandardMaterial?K:T).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(ze);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Me)return hi(w,Ge),nt}else Ge.uniforms=Ve.getUniforms(w),w.onBeforeCompile(Ge,R),nt=Ve.acquireProgram(Ge,ze),et.set(ze,nt),te.uniforms=Ge.uniforms;const We=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=Se.uniform),hi(w,Ge),te.needsLights=bl(w),te.lightsStateVersion=Me,te.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Ho(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Sl.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function hi(w,G){const ee=Ye.get(w);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Vo(w,G,ee,te,X){G.isScene!==!0&&(G=At),b.resetTextureUnits();const we=G.fog,Me=te.isMeshStandardMaterial?G.environment:null,Ge=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ws,ze=(te.isMeshStandardMaterial?K:T).get(te.envMap||Me),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,nt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Mt=!!ee.morphAttributes.color;let pt=xr;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(pt=R.toneMapping);const rn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,st=rn!==void 0?rn.length:0,je=Ye.get(te),Zn=g.state.lights;if(ue===!0&&(Ee===!0||w!==C)){const pn=w===C&&te.id===P;Se.setState(te,w,pn)}let yt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zn.state.version||je.outputColorSpace!==Ge||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==ze||te.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==nt||je.morphTargets!==We||je.morphNormals!==mt||je.morphColors!==Mt||je.toneMapping!==pt||je.morphTargetsCount!==st)&&(yt=!0):(yt=!0,je.__version=te.version);let sn=je.currentProgram;yt===!0&&(sn=Zr(te,G,X));let Qn=!1,jt=!1,pi=!1;const Rt=sn.getUniforms(),zn=je.uniforms;if(qe.useProgram(sn.program)&&(Qn=!0,jt=!0,pi=!0),te.id!==P&&(P=te.id,jt=!0),Qn||C!==w){qe.buffers.depth.getReversed()?(xe.copy(w.projectionMatrix),F_(xe),O_(xe),Rt.setValue(j,"projectionMatrix",xe)):Rt.setValue(j,"projectionMatrix",w.projectionMatrix),Rt.setValue(j,"viewMatrix",w.matrixWorldInverse);const Hn=Rt.map.cameraPosition;Hn!==void 0&&Hn.setValue(j,Ie.setFromMatrixPosition(w.matrixWorld)),ct.logarithmicDepthBuffer&&Rt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,jt=!0,pi=!0)}if(X.isSkinnedMesh){Rt.setOptional(j,X,"bindMatrix"),Rt.setOptional(j,X,"bindMatrixInverse");const pn=X.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Rt.setValue(j,"boneTexture",pn.boneTexture,b))}X.isBatchedMesh&&(Rt.setOptional(j,X,"batchingTexture"),Rt.setValue(j,"batchingTexture",X._matricesTexture,b),Rt.setOptional(j,X,"batchingIdTexture"),Rt.setValue(j,"batchingIdTexture",X._indirectTexture,b),Rt.setOptional(j,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(j,"batchingColorTexture",X._colorsTexture,b));const Ei=ee.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Je.update(X,ee,sn),(jt||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Rt.setValue(j,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(zn.envMap.value=ze,zn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(zn.envMapIntensity.value=G.environmentIntensity),jt&&(Rt.setValue(j,"toneMappingExposure",R.toneMappingExposure),je.needsLights&&Go(zn,pi),we&&te.fog===!0&&Ce.refreshFogUniforms(zn,we),Ce.refreshMaterialUniforms(zn,te,z,ce,g.state.transmissionRenderTarget[w.id]),Sl.upload(j,Ho(je),zn,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Sl.upload(j,Ho(je),zn,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(j,"center",X.center),Rt.setValue(j,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(j,"normalMatrix",X.normalMatrix),Rt.setValue(j,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const pn=te.uniformsGroups;for(let Hn=0,xn=pn.length;Hn<xn;Hn++){const Wo=pn[Hn];V.update(Wo,sn),V.bind(Wo,sn)}}return sn}function Go(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function bl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,G,ee){Ye.get(w.texture).__webglTexture=G,Ye.get(w.depthTexture).__webglTexture=ee;const te=Ye.get(w);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,G){const ee=Ye.get(w);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,ee=0){W=w,B=G,U=ee;let te=!0,X=null,we=!1,Me=!1;if(w){const ze=Ye.get(w);if(ze.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(j.FRAMEBUFFER,null),te=!1;else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ze.__hasExternalTextures)b.rebindTextures(w,Ye.get(w.texture).__webglTexture,Ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(ze.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Me=!0);const nt=Ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[G])?X=nt[G][ee]:X=nt[G],we=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?X=Ye.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[ee]:X=nt,F.copy(w.viewport),oe.copy(w.scissor),ne=w.scissorTest}else F.copy(I).multiplyScalar(z).floor(),oe.copy(ie).multiplyScalar(z).floor(),ne=Ne;if(qe.bindFramebuffer(j.FRAMEBUFFER,X)&&te&&qe.drawBuffers(w,X),qe.viewport(F),qe.scissor(oe),qe.setScissorTest(ne),we){const ze=Ye.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,ee)}else if(Me){const ze=Ye.get(w.texture),et=G||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,ze.__webglTexture,ee||0,et)}P=-1},this.readRenderTargetPixels=function(w,G,ee,te,X,we,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){qe.bindFramebuffer(j.FRAMEBUFFER,Ge);try{const ze=w.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-te&&ee>=0&&ee<=w.height-X&&j.readPixels(G,ee,te,X,it.convert(et),it.convert(nt),we)}finally{const ze=W!==null?Ye.get(W).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(w,G,ee,te,X,we,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ge=Ge[Me]),Ge){const ze=w.texture,et=ze.format,nt=ze.type;if(!ct.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=w.width-te&&ee>=0&&ee<=w.height-X){qe.bindFramebuffer(j.FRAMEBUFFER,Ge);const We=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(G,ee,te,X,it.convert(et),it.convert(nt),0);const mt=W!==null?Ye.get(W).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,mt);const Mt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await U_(j,Mt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer(We),j.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,G=null,ee=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1]);const te=Math.pow(2,-ee),X=Math.floor(w.image.width*te),we=Math.floor(w.image.height*te),Me=G!==null?G.x:0,Ge=G!==null?G.y:0;b.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,ee,0,0,Me,Ge,X,we),qe.unbindTexture()},this.copyTextureToTexture=function(w,G,ee=null,te=null,X=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,w=arguments[1],G=arguments[2],X=arguments[3]||0,ee=null);let we,Me,Ge,ze,et,nt,We,mt,Mt;const pt=w.isCompressedTexture?w.mipmaps[X]:w.image;ee!==null?(we=ee.max.x-ee.min.x,Me=ee.max.y-ee.min.y,Ge=ee.isBox3?ee.max.z-ee.min.z:1,ze=ee.min.x,et=ee.min.y,nt=ee.isBox3?ee.min.z:0):(we=pt.width,Me=pt.height,Ge=pt.depth||1,ze=0,et=0,nt=0),te!==null?(We=te.x,mt=te.y,Mt=te.z):(We=0,mt=0,Mt=0);const rn=it.convert(G.format),st=it.convert(G.type);let je;G.isData3DTexture?(b.setTexture3D(G,0),je=j.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),je=j.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),je=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,G.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,G.unpackAlignment);const Zn=j.getParameter(j.UNPACK_ROW_LENGTH),yt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),sn=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),jt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,pt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,et),j.pixelStorei(j.UNPACK_SKIP_IMAGES,nt);const pi=w.isDataArrayTexture||w.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const zn=Ye.get(w),Ei=Ye.get(G),pn=Ye.get(zn.__renderTarget),Hn=Ye.get(Ei.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,pn.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let xn=0;xn<Ge;xn++)pi&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(w).__webglTexture,X,nt+xn),w.isDepthTexture?(Rt&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,X,Mt+xn),j.blitFramebuffer(ze,et,we,Me,We,mt,we,Me,j.DEPTH_BUFFER_BIT,j.NEAREST)):Rt?j.copyTexSubImage3D(je,X,We,mt,Mt+xn,ze,et,we,Me):j.copyTexSubImage2D(je,X,We,mt,Mt+xn,ze,et,we,Me);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Rt?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(je,X,We,mt,Mt,we,Me,Ge,rn,st,pt.data):G.isCompressedArrayTexture?j.compressedTexSubImage3D(je,X,We,mt,Mt,we,Me,Ge,rn,pt.data):j.texSubImage3D(je,X,We,mt,Mt,we,Me,Ge,rn,st,pt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,X,We,mt,we,Me,rn,st,pt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,X,We,mt,pt.width,pt.height,rn,pt.data):j.texSubImage2D(j.TEXTURE_2D,X,We,mt,we,Me,rn,st,pt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Zn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,sn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,jt),X===0&&G.generateMipmaps&&j.generateMipmap(je),qe.unbindTexture()},this.copyTextureToTexture3D=function(w,G,ee=null,te=null,X=0){return w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,w=arguments[2],G=arguments[3],X=arguments[4]||0),Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,ee,te,X)},this.initRenderTarget=function(w){Ye.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),qe.unbindTexture()},this.resetState=function(){B=0,U=0,W=null,qe.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}class qM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class tg extends ko{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new Ht,Lf=new zm,pl=new Cl,ml=new Q;class $M extends bn{constructor(e=new di,n=new tg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(a),pl.radius+=c,e.ray.intersectsSphere(pl)===!1)return;_m.copy(a).invert(),Lf.copy(e.ray).applyMatrix4(_m);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=x,A=S;E<A;E++){const y=m.getX(E);ml.fromBufferAttribute(_,y),xm(ml,y,p,a,e,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(_.count,f.start+f.count);for(let E=x,A=S;E<A;E++)ml.fromBufferAttribute(_,E),xm(ml,E,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const d=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function xm(s,e,n,r,a,c,f){const d=Lf.distanceSqToPoint(s);if(d<n){const p=new Q;Lf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Hf extends di{constructor(e=1,n=.4,r=12,a=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:c},r=Math.floor(r),a=Math.floor(a);const f=[],d=[],p=[],m=[],v=new Q,_=new Q,x=new Q;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const A=E/a*c,y=S/r*Math.PI*2;_.x=(e+n*Math.cos(y))*Math.cos(A),_.y=(e+n*Math.cos(y))*Math.sin(A),_.z=n*Math.sin(y),d.push(_.x,_.y,_.z),v.x=e*Math.cos(A),v.y=e*Math.sin(A),x.subVectors(_,v).normalize(),p.push(x.x,x.y,x.z),m.push(E/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const A=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,g=(a+1)*(S-1)+E,N=(a+1)*S+E;f.push(A,y,N),f.push(y,g,N)}this.setIndex(f),this.setAttribute("position",new Bn(d,3)),this.setAttribute("normal",new Bn(p,3)),this.setAttribute("uv",new Bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vf extends di{constructor(e=1,n=.4,r=64,a=8,c=2,f=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:a,p:c,q:f},r=Math.floor(r),a=Math.floor(a);const d=[],p=[],m=[],v=[],_=new Q,x=new Q,S=new Q,E=new Q,A=new Q,y=new Q,g=new Q;for(let L=0;L<=r;++L){const R=L/r*c*Math.PI*2;N(R,c,f,e,S),N(R+.01,c,f,e,E),y.subVectors(E,S),g.addVectors(E,S),A.crossVectors(y,g),g.crossVectors(A,y),A.normalize(),g.normalize();for(let $=0;$<=a;++$){const B=$/a*Math.PI*2,U=-n*Math.cos(B),W=n*Math.sin(B);_.x=S.x+(U*g.x+W*A.x),_.y=S.y+(U*g.y+W*A.y),_.z=S.z+(U*g.z+W*A.z),p.push(_.x,_.y,_.z),x.subVectors(_,S).normalize(),m.push(x.x,x.y,x.z),v.push(L/r),v.push($/a)}}for(let L=1;L<=r;L++)for(let R=1;R<=a;R++){const $=(a+1)*(L-1)+(R-1),B=(a+1)*L+(R-1),U=(a+1)*L+R,W=(a+1)*(L-1)+R;d.push($,B,W),d.push(B,U,W)}this.setIndex(d),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(m,3)),this.setAttribute("uv",new Bn(v,2));function N(L,R,$,B,U){const W=Math.cos(L),P=Math.sin(L),C=$/R*L,F=Math.cos(C);U.x=B*(2+F)*.5*W,U.y=B*(2+F)*P*.5,U.z=B*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);function KM(){const s=Wt.useRef(null);return Wt.useEffect(()=>{const e=s.current,n=e.clientWidth,r=e.clientHeight,a=new qM,c=new Kn(75,n/r,.1,1e3);c.position.z=3;const f=new YM({antialias:!0,alpha:!0});f.setSize(n,r),f.setPixelRatio(window.devicePixelRatio),f.setClearColor(0,0),e.appendChild(f.domElement);const d=2e3,p=new Float32Array(d*3),m=new Float32Array(d*3),v=new Float32Array(d),_=[new xt("#6c63ff"),new xt("#00d4ff"),new xt("#ffffff"),new xt("#a29bfe")];for(let F=0;F<d;F++){p[F*3]=(Math.random()-.5)*20,p[F*3+1]=(Math.random()-.5)*20,p[F*3+2]=(Math.random()-.5)*20;const oe=_[Math.floor(Math.random()*_.length)];m[F*3]=oe.r,m[F*3+1]=oe.g,m[F*3+2]=oe.b,v[F]=Math.random()*2+.5}const x=new di;x.setAttribute("position",new kn(p,3)),x.setAttribute("color",new kn(m,3)),x.setAttribute("size",new kn(v,1));const S=new tg({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),E=new $M(x,S);a.add(E);const A=new Vf(.6,.18,100,16),y=new Tl({color:7103487,wireframe:!0,transparent:!0,opacity:.12}),g=new ui(A,y);g.position.set(2.5,.5,-2),a.add(g);const N=new Hf(.8,.1,16,60),L=new Tl({color:54527,wireframe:!0,transparent:!0,opacity:.08}),R=new ui(N,L);R.position.set(-2.5,-.5,-2),a.add(R);let $=0,B=0;const U=F=>{$=(F.clientX/window.innerWidth-.5)*.3,B=(F.clientY/window.innerHeight-.5)*.3};window.addEventListener("mousemove",U);let W;const P=()=>{W=requestAnimationFrame(P),E.rotation.x+=2e-4,E.rotation.y+=3e-4,g.rotation.x+=.008,g.rotation.y+=.005,R.rotation.z+=.006,R.rotation.x+=.003,c.position.x+=($-c.position.x)*.05,c.position.y+=(-B-c.position.y)*.05,f.render(a,c)};P();const C=()=>{const F=e.clientWidth,oe=e.clientHeight;c.aspect=F/oe,c.updateProjectionMatrix(),f.setSize(F,oe)};return window.addEventListener("resize",C),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",U),window.removeEventListener("resize",C),e.removeChild(f.domElement),f.dispose()}},[]),k.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})}const ZM=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}];function QM(){const[s,e]=Wt.useState(!1),[n,r]=Wt.useState(!1),[a,c]=Wt.useState("");return Wt.useEffect(()=>{const f=()=>{e(window.scrollY>40)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]),k.jsx("nav",{className:`navbar ${s?"scrolled":""}`,children:k.jsxs("div",{className:"nav-inner",children:[k.jsxs("a",{href:"#",className:"nav-logo",children:[k.jsx("span",{className:"logo-text",children:"VS"}),k.jsx("span",{className:"logo-dot"})]}),k.jsx("ul",{className:`nav-links ${n?"open":""}`,children:ZM.map(f=>k.jsx("li",{children:k.jsx("a",{href:f.href,className:a===f.href?"active":"",onClick:()=>{c(f.href),r(!1)},children:f.label})},f.href))}),k.jsx("a",{href:"mailto:vikramsaharan72056@gmail.com",className:"btn btn-primary nav-cta",children:"Hire Me"}),k.jsxs("button",{className:`menu-toggle ${n?"open":""}`,onClick:()=>r(!n),"aria-label":"Toggle menu",children:[k.jsx("span",{}),k.jsx("span",{}),k.jsx("span",{})]})]})})}const On={subtitle:"AI • Shopify • MERN • React • Node.js",bio:"Passionate Full Stack Developer with expertise in Shopify app development, MERN/MEAN stack, and AI-powered tools. Skilled in building custom eCommerce solutions, intelligent web applications, and integrating cutting-edge APIs — from WhatsApp automation to LLM-based platforms.",email:"vikramsaharan72056@gmail.com",phone:"+91 7988321044",location:"Hisar, Haryana, India",github:"https://github.com/vikramsaharan72056",linkedin:"https://www.linkedin.com/in/vikram-singh-saharan",avatar:"https://avatars.githubusercontent.com/u/66213553?v=4"},ym=[{id:1,role:"Full Stack Developer (AI & Shopify)",company:"Brainerhub Solutions",period:"Jan 2025 – Present",type:"Full-time",color:"#a855f7",bullets:["Building AI-integrated Shopify apps and full-stack web platforms combining LLMs with eCommerce automation.","Developed an AI-powered chatbot for Shopify stores using NLP and custom conversation flows.","Architected scalable backend services with Node.js and NestJS for real-time customer interaction systems.","Integrated OpenAI APIs and vector databases to deliver intelligent product recommendations and support automation."]},{id:2,role:"Junior Software Developer",company:"ASV INFOMEDIA",period:"Nov 2023 – Nov 2024",type:"Full-time",color:"#6c63ff",bullets:["Developed custom Shopify apps including Lim's Kitchen and Kaghati, enhancing UX and automating inventory management.","Integrated third-party APIs for seamless communication between Shopify apps and external services like WhatsApp and email.","Built and maintained Shopify themes using Liquid, JavaScript and CSS."]},{id:3,role:"Freelance Web Developer",company:"Brand Boom Digital Solutions",period:"Dec 2023 – Present",type:"Freelance",color:"#00d4ff",bullets:["Delivered a Doctors Appointment Booking System with an intuitive admin dashboard for schedule management.","Built full-stack web applications with React frontend and Node.js/Express backend.","Managed deployments and CI/CD pipelines on cloud platforms."]},{id:4,role:"Teaching Internship",company:"Deep Thought Growth Management System",period:"May 2023 – Nov 2023",type:"Internship",color:"#00ff88",bullets:["Mentored 150+ students in web development and problem-solving techniques.","Led multiple development projects, ensuring timely completion.","Conducted code reviews and debugging sessions to improve student outcomes."]}],Sm=[{id:1,title:"InterviewAI",description:"AI-powered interview preparation platform with real-time feedback, desktop app & Electron support, and a TypeScript + React frontend.",tech:["TypeScript","React","AI/ML","OpenAI","Electron"],github:"https://github.com/vikramsaharan72056/InterviewAI_frontend",color:"#a855f7",featured:!0,category:"AI"},{id:2,title:"AI Chatbot for Shopify",description:"LLM-powered chatbot for Shopify stores with custom NLP flows, product recommendations, and automated customer support.",tech:["Node.js","OpenAI","Shopify","NestJS","MongoDB"],github:"https://github.com/vikramsaharan72056/chatbot-brainerhub-shopify",color:"#6c63ff",featured:!0,category:"AI"},{id:3,title:"The Pet Project",description:"Custom Shopify app for inventory management and eCommerce integration with real-time stock tracking.",tech:["Shopify","Node.js","React","Liquid"],live:"https://thepetproject.com/",color:"#00d4ff",featured:!0,category:"Shopify"},{id:4,title:"Kaghati Companion",description:"Public Shopify app for real-time inventory updates and automated order management.",tech:["Shopify","Node.js","REST API"],live:"https://apps.shopify.com/kaghati-companion",color:"#00ff88",featured:!0,category:"Shopify"},{id:5,title:"Dental Appointment System",description:"React-based Doctor/Dental Appointment Booking System with user-friendly admin dashboard and schedule management.",tech:["React","Node.js","MongoDB","Express"],live:"https://dental-frontend.onrender.com/",color:"#ff6b6b",featured:!0,category:"MERN"},{id:6,title:"G-Platform",description:"Full-stack TypeScript platform with advanced architecture, real-time features, built with modern tooling.",tech:["TypeScript","React","NestJS","PostgreSQL"],github:"https://github.com/vikramsaharan72056/g-platform",color:"#ffd166",featured:!1,category:"Full Stack"},{id:7,title:"RamRaj Cotton",description:"Shopify custom theme & solutions for enhanced UX and seamless third-party integrations.",tech:["Shopify","Liquid","JavaScript","CSS"],live:"https://ramrajcotton.in/",color:"#a29bfe",featured:!1,category:"Shopify"}],JM=[{category:"AI & ML",color:"#a855f7",items:["OpenAI API","LLM Integration","NLP & Chatbots","Vector Databases","AI Agents","Prompt Engineering"]},{category:"Frontend",color:"#6c63ff",items:["React.js","TypeScript","JavaScript (ES6+)","HTML5","CSS3","Three.js","Framer Motion"]},{category:"Backend",color:"#00d4ff",items:["Node.js","Express.js","NestJS","REST APIs","GraphQL","PHP","Python"]},{category:"Shopify",color:"#00ff88",items:["Shopify CLI","Liquid","Shopify Apps","Polaris","Remix","Theme Dev","Shopify Plus"]},{category:"Database & Cloud",color:"#ff6b6b",items:["MongoDB","PostgreSQL","MySQL","Redis","Docker","Vercel","Render"]}];function eE(){const s=Wt.useRef(null);return Wt.useEffect(()=>{const e=s.current;e&&(e.style.opacity="0",e.style.transform="translateY(30px)",setTimeout(()=>{e.style.transition="all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",e.style.opacity="1",e.style.transform="translateY(0)"},200))},[]),k.jsxs("section",{className:"hero",id:"about",children:[k.jsxs("div",{className:"hero-inner section-wrapper",children:[k.jsxs("div",{className:"hero-badge",children:[k.jsx("span",{className:"glow-dot"}),k.jsx("span",{children:"Available for opportunities"})]}),k.jsxs("div",{ref:s,className:"hero-content",children:[k.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",k.jsx("span",{className:"gradient-text",children:"Vikram Singh"})]}),k.jsx("p",{className:"hero-role",children:On.subtitle}),k.jsx("p",{className:"hero-bio",children:On.bio}),k.jsxs("div",{className:"hero-actions",children:[k.jsxs("a",{href:"#projects",className:"btn btn-primary",children:["View Projects",k.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:k.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]}),k.jsx("a",{href:"#contact",className:"btn btn-outline",children:"Get in Touch"})]}),k.jsxs("div",{className:"hero-stats",children:[k.jsxs("div",{className:"stat",children:[k.jsx("span",{className:"stat-num",children:"2+"}),k.jsx("span",{className:"stat-label",children:"Years Experience"})]}),k.jsx("div",{className:"stat-divider"}),k.jsxs("div",{className:"stat",children:[k.jsx("span",{className:"stat-num",children:"73+"}),k.jsx("span",{className:"stat-label",children:"Repositories"})]}),k.jsx("div",{className:"stat-divider"}),k.jsxs("div",{className:"stat",children:[k.jsx("span",{className:"stat-num",children:"150+"}),k.jsx("span",{className:"stat-label",children:"Students Mentored"})]})]})]}),k.jsxs("div",{className:"hero-visual",children:[k.jsxs("div",{className:"avatar-ring",children:[k.jsx("div",{className:"avatar-ring-inner",children:k.jsx("img",{src:On.avatar,alt:"Vikram Singh",className:"avatar-img"})}),k.jsx("div",{className:"orbit orbit-1",children:k.jsx("div",{className:"orbit-dot",style:{"--color":"#6c63ff"}})}),k.jsx("div",{className:"orbit orbit-2",children:k.jsx("div",{className:"orbit-dot",style:{"--color":"#00d4ff"}})}),k.jsx("div",{className:"orbit orbit-3",children:k.jsx("div",{className:"orbit-dot",style:{"--color":"#00ff88"}})})]}),k.jsx("div",{className:"tech-pills",children:["AI/LLMs","React","Shopify","Node.js","TypeScript"].map((e,n)=>k.jsx("div",{className:"tech-pill",style:{animationDelay:`${n*.15}s`},children:e},e))})]})]}),k.jsxs("div",{className:"scroll-indicator",children:[k.jsx("div",{className:"scroll-mouse",children:k.jsx("div",{className:"scroll-wheel"})}),k.jsx("span",{children:"Scroll to explore"})]}),k.jsx("div",{className:"blob blob-1"}),k.jsx("div",{className:"blob blob-2"})]})}function tE(){const[s,e]=Wt.useState(1),n=Wt.useRef(null);Wt.useEffect(()=>{var f;const a=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&p.target.classList.add("visible")})},{threshold:.1}),c=(f=n.current)==null?void 0:f.querySelectorAll(".animate-on-scroll");return c==null||c.forEach(d=>a.observe(d)),()=>a.disconnect()},[]);const r=ym.find(a=>a.id===s);return k.jsx("section",{className:"experience-section",id:"experience",ref:n,children:k.jsxs("div",{className:"section-wrapper",children:[k.jsx("span",{className:"tag animate-on-scroll",children:"Experience"}),k.jsx("h2",{className:"section-title animate-on-scroll",style:{marginTop:"1rem"},children:"Where I've Worked"}),k.jsx("p",{className:"section-subtitle animate-on-scroll",children:"Building real-world products and mentoring developers across companies."}),k.jsxs("div",{className:"exp-layout animate-on-scroll",children:[k.jsx("div",{className:"exp-tabs",children:ym.map(a=>k.jsxs("button",{className:`exp-tab ${s===a.id?"active":""}`,onClick:()=>e(a.id),style:{"--tab-color":a.color},children:[k.jsx("span",{className:"tab-company",children:a.company}),k.jsx("span",{className:"tab-period",children:a.period})]},a.id))}),r&&k.jsxs("div",{className:"exp-panel",children:[k.jsxs("div",{className:"exp-header",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"exp-role",children:r.role}),k.jsxs("p",{className:"exp-company",children:["@ ",k.jsx("span",{style:{color:r.color},children:r.company})]})]}),k.jsx("span",{className:"exp-type-badge",style:{"--badge-color":r.color},children:r.type})]}),k.jsx("p",{className:"exp-period-text",children:r.period}),k.jsx("ul",{className:"exp-bullets",children:r.bullets.map((a,c)=>k.jsxs("li",{children:[k.jsx("span",{className:"bullet-arrow",style:{color:r.color},children:"▹"}),a]},c))})]},r.id)]})]})})}const nE=["All","AI","Shopify","MERN","Full Stack"];function iE(){const[s,e]=Wt.useState("All"),n=Wt.useRef(null);Wt.useEffect(()=>{var c;const a=new IntersectionObserver(f=>f.forEach(d=>d.isIntersecting&&d.target.classList.add("visible")),{threshold:.1});return(c=n.current)==null||c.querySelectorAll(".animate-on-scroll").forEach(f=>a.observe(f)),()=>a.disconnect()},[]);const r=s==="All"?Sm:Sm.filter(a=>a.category===s);return k.jsx("section",{className:"projects-section",id:"projects",ref:n,children:k.jsxs("div",{className:"section-wrapper",children:[k.jsx("span",{className:"tag animate-on-scroll",children:"Projects"}),k.jsx("h2",{className:"section-title animate-on-scroll",style:{marginTop:"1rem"},children:"Things I've Built"}),k.jsx("p",{className:"section-subtitle animate-on-scroll",children:"A selection of projects ranging from Shopify apps to full-stack platforms and AI tools."}),k.jsx("div",{className:"filter-tabs animate-on-scroll",children:nE.map(a=>k.jsx("button",{className:`filter-btn ${s===a?"active":""}`,onClick:()=>e(a),children:a},a))}),k.jsx("div",{className:"projects-grid animate-on-scroll",style:{transitionDelay:"0.2s"},children:r.map((a,c)=>k.jsxs("div",{className:`project-card ${a.featured?"featured":""}`,style:{"--card-color":a.color,animationDelay:`${c*.08}s`},children:[k.jsx("div",{className:"card-glow"}),k.jsxs("div",{className:"card-header",children:[k.jsx("div",{className:"card-icon",children:k.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[k.jsx("path",{d:"M3 7l9-4 9 4v10l-9 4-9-4V7z"}),k.jsx("path",{d:"M12 3v18M3 7l9 4 9-4"})]})}),k.jsxs("div",{className:"card-links",children:[a.github&&k.jsx("a",{href:a.github,target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:k.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:k.jsx("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})})}),a.live&&k.jsx("a",{href:a.live,target:"_blank",rel:"noopener noreferrer",title:"Live Demo",children:k.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),k.jsx("polyline",{points:"15,3 21,3 21,9"}),k.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})})]})]}),k.jsx("h3",{className:"card-title",children:a.title}),k.jsx("p",{className:"card-desc",children:a.description}),k.jsx("div",{className:"card-tech",children:a.tech.map(f=>k.jsx("span",{className:"tech-tag",children:f},f))})]},a.id))}),k.jsx("div",{className:"more-link animate-on-scroll",children:k.jsxs("a",{href:"https://github.com/vikramsaharan72056",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:[k.jsx("svg",{width:"18",height:"18",fill:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})}),"View All 73+ Repos on GitHub"]})})]})})}function rE(){const s=Wt.useRef(null);return Wt.useEffect(()=>{var n;const e=new IntersectionObserver(r=>r.forEach(a=>a.isIntersecting&&a.target.classList.add("visible")),{threshold:.1});return(n=s.current)==null||n.querySelectorAll(".animate-on-scroll").forEach(r=>e.observe(r)),()=>e.disconnect()},[]),k.jsx("section",{className:"skills-section",id:"skills",ref:s,children:k.jsxs("div",{className:"section-wrapper",children:[k.jsx("span",{className:"tag animate-on-scroll",children:"Skills"}),k.jsx("h2",{className:"section-title animate-on-scroll",style:{marginTop:"1rem"},children:"Tech Stack"}),k.jsx("p",{className:"section-subtitle animate-on-scroll",children:"Technologies I work with to build modern web applications."}),k.jsx("div",{className:"skills-grid",children:JM.map((e,n)=>k.jsxs("div",{className:"skill-category animate-on-scroll",style:{transitionDelay:`${n*.1}s`,"--cat-color":e.color},children:[k.jsxs("div",{className:"cat-header",children:[k.jsx("div",{className:"cat-dot",style:{background:e.color,boxShadow:`0 0 12px ${e.color}`}}),k.jsx("h3",{className:"cat-name",children:e.category})]}),k.jsx("div",{className:"skill-tags",children:e.items.map((r,a)=>k.jsxs("div",{className:"skill-tag",style:{animationDelay:`${n*.1+a*.05}s`},children:[k.jsx("span",{className:"skill-dot",style:{background:e.color}}),r]},r))})]},e.category))})]})})}function sE(){const s=Wt.useRef(null),[e,n]=Wt.useState(!1);Wt.useEffect(()=>{var c;const a=new IntersectionObserver(f=>f.forEach(d=>d.isIntersecting&&d.target.classList.add("visible")),{threshold:.1});return(c=s.current)==null||c.querySelectorAll(".animate-on-scroll").forEach(f=>a.observe(f)),()=>a.disconnect()},[]);const r=()=>{navigator.clipboard.writeText(On.email),n(!0),setTimeout(()=>n(!1),2e3)};return k.jsx("section",{className:"contact-section",id:"contact",ref:s,children:k.jsxs("div",{className:"section-wrapper",children:[k.jsx("span",{className:"tag animate-on-scroll",children:"Contact"}),k.jsx("h2",{className:"section-title animate-on-scroll",style:{marginTop:"1rem"},children:"Let's Work Together"}),k.jsx("p",{className:"section-subtitle animate-on-scroll",children:"I'm open to full-time roles, freelance projects and collaborations. Let's build something great."}),k.jsxs("div",{className:"contact-layout animate-on-scroll",children:[k.jsxs("div",{className:"contact-card",children:[k.jsx("div",{className:"contact-blob"}),k.jsx("h3",{className:"contact-cta-title",children:"Get In Touch"}),k.jsx("p",{className:"contact-cta-text",children:"Whether you have a project in mind, an opportunity to share, or just want to say hello — my inbox is always open."}),k.jsxs("div",{className:"contact-links",children:[k.jsxs("div",{className:"contact-item",children:[k.jsx("div",{className:"contact-icon",children:k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),k.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),k.jsxs("div",{children:[k.jsx("p",{className:"ci-label",children:"Email"}),k.jsx("p",{className:"ci-value",children:On.email})]}),k.jsx("button",{className:"copy-btn",onClick:r,title:"Copy email",children:e?k.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#00ff88",strokeWidth:"2",children:k.jsx("polyline",{points:"20 6 9 17 4 12"})}):k.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),k.jsx("path",{d:"M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"})]})})]}),k.jsxs("div",{className:"contact-item",children:[k.jsx("div",{className:"contact-icon",children:k.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:k.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"})})}),k.jsxs("div",{children:[k.jsx("p",{className:"ci-label",children:"Phone"}),k.jsx("p",{className:"ci-value",children:On.phone})]})]}),k.jsxs("div",{className:"contact-item",children:[k.jsx("div",{className:"contact-icon",children:k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[k.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),k.jsx("circle",{cx:"12",cy:"9",r:"2.5"})]})}),k.jsxs("div",{children:[k.jsx("p",{className:"ci-label",children:"Location"}),k.jsx("p",{className:"ci-value",children:On.location})]})]})]}),k.jsxs("div",{className:"social-links",children:[k.jsxs("a",{href:On.github,target:"_blank",rel:"noopener noreferrer",className:"social-btn",children:[k.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})}),"GitHub"]}),k.jsxs("a",{href:On.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-btn linkedin",children:[k.jsx("svg",{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),"LinkedIn"]})]})]}),k.jsx("div",{className:"contact-email-big",children:k.jsxs("a",{href:`mailto:${On.email}`,className:"btn btn-primary email-btn",children:["Send Me an Email",k.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:k.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})})}function oE(){return k.jsxs("footer",{className:"footer",children:[k.jsxs("div",{className:"footer-inner section-wrapper",children:[k.jsxs("div",{className:"footer-left",children:[k.jsxs("span",{className:"footer-logo",children:["VS",k.jsx("span",{className:"footer-dot",children:"."})]}),k.jsxs("p",{className:"footer-text",children:["Built with React + Three.js + Vite",k.jsx("br",{}),"Designed & developed by Vikram Singh"]})]}),k.jsxs("div",{className:"footer-right",children:[k.jsx("a",{href:On.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),k.jsx("a",{href:On.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),k.jsx("a",{href:`mailto:${On.email}`,children:"Email"})]})]}),k.jsx("div",{className:"footer-bar",children:k.jsx("span",{children:"© 2026 Vikram Singh. All rights reserved."})})]})}function aE(){return k.jsxs(k.Fragment,{children:[k.jsx(KM,{}),k.jsx(QM,{}),k.jsxs("main",{children:[k.jsx(eE,{}),k.jsx(tE,{}),k.jsx(iE,{}),k.jsx(rE,{}),k.jsx(sE,{})]}),k.jsx(oE,{})]})}Wv.createRoot(document.getElementById("root")).render(k.jsx(Ov.StrictMode,{children:k.jsx(aE,{})}));
