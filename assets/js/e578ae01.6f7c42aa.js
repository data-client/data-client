/*! For license information please see e578ae01.6f7c42aa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65520],{41535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}function m(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var k=v.prototype=new m;k.constructor=v,g(k,h.prototype),k.isPureReactComponent=!0;var O=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!_.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:s,ref:i,props:a,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===a?"."+E(u,0):a,O(s)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),N(s,t,o,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(u=0,a=""===a?".":a+":",O(e))for(var l=0;l<e.length;l++){var c=a+E(i=e[l],l);u+=N(i,t,o,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(i=e.next()).done;)u+=N(i=i.value,t,o,c=a+E(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return N(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function U(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},R={transition:null}},27378:(e,t,r)=>{r(41535)},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(27378),r(3905));const a={title:"Upgrading @rest-hooks/test to 6"},s=void 0,i={unversionedId:"upgrade/upgrading-test-to-six",id:"upgrade/upgrading-test-to-six",title:"Upgrading @rest-hooks/test to 6",description:"@rest-hooks/test uses react-hooks-testing-library internally. Version 7",source:"@site/../docs/core/upgrade/upgrading-test-to-six.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-test-to-six",permalink:"/docs/upgrade/upgrading-test-to-six",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-test-to-six.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1654835498,formattedLastUpdatedAt:"Jun 10, 2022",frontMatter:{title:"Upgrading @rest-hooks/test to 6"},sidebar:"docs",previous:{title:"Upgrading @rest-hooks/test to 7",permalink:"/docs/upgrade/upgrading-test-to-seven"},next:{title:"Upgrading @rest-hooks/test to 4",permalink:"/docs/upgrade/upgrading-test-to-four"}},u={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hooks-testing-library")," internally. Version 7\nhas a major version upgrade for this library, so the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library/releases/tag/v7.0.0"},"breaking changes"),"\nalso apply to ",(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@6")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'suppressErrorOutput will now work when explicitly called, even if the\nRHTL_DISABLE_ERROR_FILTERING env variable has been set' (from\nreact-hooks-testing-library)"),(0,o.kt)("li",{parentName:"ul"},"requires node 12 or above")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test@6")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/%40rest-hooks%2Ftest%406.0.0"},"Release notes")))}p.isMDXComponent=!0}}]);