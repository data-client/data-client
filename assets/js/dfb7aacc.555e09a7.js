/*! For license information please see dfb7aacc.555e09a7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48226],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=k.prototype=new v;g.constructor=k,m(g,h.prototype),g.isPureReactComponent=!0;var S=Array.isArray,w=Object.prototype.hasOwnProperty,O={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var o,i={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:c,props:i,_owner:O.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,i,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+M(s,0):i,S(a)?(o="",null!=e&&(o=e.replace(P,"$&/")+"/"),C(a,t,o,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",S(e))for(var u=0;u<e.length;u++){var l=i+M(c=e[u],u);s+=C(c,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)s+=C(c=c.value,t,o,l=i+M(c,u++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function q(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},T={transition:null}},27378:(e,t,n)=>{n(41535)},32754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(27378),n(3905));const i={title:"SubscriptionManager",sidebar_label:"SubscriptionManager"},a=void 0,c={unversionedId:"api/SubscriptionManager",id:"api/SubscriptionManager",title:"SubscriptionManager",description:"Orchestrates all subscriptions; ensuring fresh data without overfetching.",source:"@site/../docs/core/api/SubscriptionManager.md",sourceDirName:"api",slug:"/api/SubscriptionManager",permalink:"/docs/api/SubscriptionManager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/SubscriptionManager.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1670358439,formattedLastUpdatedAt:"Dec 6, 2022",frontMatter:{title:"SubscriptionManager",sidebar_label:"SubscriptionManager"},sidebar:"docs",previous:{title:"NetworkManager",permalink:"/docs/api/NetworkManager"},next:{title:"PollingSubscription",permalink:"/docs/api/PollingSubscription"}},s={},u=[{value:"constructor(Subscription: S)",id:"constructorsubscription-s",level:2},{value:"Consumed Actions",id:"consumed-actions",level:2},{value:"Subscription",id:"subscription",level:2},{value:"add(frequency?: number): void",id:"addfrequency-number-void",level:3},{value:"remove(frequency?: number): boolean",id:"removefrequency-number-boolean",level:3},{value:"cleanup(): void",id:"cleanup-void",level:3},{value:"Included implementation",id:"included-implementation",level:3}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class SubscriptionManager<S extends SubscriptionConstructable> implements Manager\n")),(0,o.kt)("p",null,"Orchestrates all subscriptions; ensuring fresh data without overfetching."),(0,o.kt)("admonition",{title:"implements",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionManager")," implements ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/Manager"},"Manager"))),(0,o.kt)("h2",{id:"constructorsubscription-s"},"constructor(Subscription: S)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#subscription"},"Subscription")," is the class that will be used to handle subscriptions to each endpoint.\nEach instance represents one subscription to a specific unique endpoint."),(0,o.kt)("h2",{id:"consumed-actions"},"Consumed Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/subscribe'"),(0,o.kt)("li",{parentName:"ul"},"'rest-hooks/unsubscribe'")),(0,o.kt)("h2",{id:"subscription"},"Subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," is a class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionConstructable"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," instances\nhandle the actual subscriptions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Properties sent to Subscription constructor */\nexport interface SubscriptionInit {\n  schema: Schema;\n  fetch: () => Promise<any>;\n  url: string;\n  frequency?: number;\n}\n\n/** Interface handling a single resource subscription */\ninterface Subscription {\n  add(frequency?: number): void;\n  remove(frequency?: number): boolean;\n  cleanup(): void;\n}\n\n/** The static class that constructs Subscription */\ninterface SubscriptionConstructable {\n  new (init: SubscriptionInit, dispatch: React.Dispatch<any>): Subscription;\n}\n")),(0,o.kt)("h3",{id:"addfrequency-number-void"},"add(frequency?: number): void"),(0,o.kt)("p",null,"Adds a new subscription at the provided frequency for the resource."),(0,o.kt)("h3",{id:"removefrequency-number-boolean"},"remove(frequency?: number): boolean"),(0,o.kt)("p",null,"Removes a subscription for the given frequency. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if there are no\nmore subscriptions after. This is used to clean up unused ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription"),"s."),(0,o.kt)("h3",{id:"cleanup-void"},"cleanup(): void"),(0,o.kt)("p",null,"Provides any cleanup of dangling resources after Subscription is no longer in use."),(0,o.kt)("h3",{id:"included-implementation"},"Included implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./PollingSubscription"},"PollingSubscription"))),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"note"},"Note"),(0,o.kt)("p",{parentName:"blockquote"},"Implementing your own ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," to handle websockets can be done by\ndispatching ",(0,o.kt)("inlineCode",{parentName:"p"},"rest-hooks/receive")," actions with the data it gets to update.\nBe sure to handle connection opening in the constructor and close the connection\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup()"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);