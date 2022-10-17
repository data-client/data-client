/*! For license information please see 5ff8bf5b.eac88771.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99831],{41535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=b.prototype=new v;k.constructor=b,h(k,g.prototype),k.isPureReactComponent=!0;var E=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var d=Array(s),c=0;c<s;c++)d[c]=arguments[c+2];o.children=d}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:x.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function Z(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+C(s,0):o,E(i)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),Z(i,t,a,"",(function(e){return e}))):null!=i&&(T(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",E(e))for(var d=0;d<e.length;d++){var c=o+C(l=e[d],d);s+=Z(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),d=0;!(l=e.next()).done;)s+=Z(l=l.value,t,a,c=o+C(l,d++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,n){if(null==e)return e;var r=[],a=0;return Z(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},A={transition:null}},27378:(e,t,n)=>{n(41535)},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),a=n(87462),o=n(49544),i=n(86010),l=n(95999),s=n(52263),d=n(66412),c=n(84195),u=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(p);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var h,y=n(60975),g=n(51523),v=n(1556);function b(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,i.Z)(u.Z.tab,{[u.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function k(e){let{children:t}=e;return r.createElement(y.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(b,null))}function E(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(c.Z),o=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:u.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,o?r.createElement(k,null,t):null)}function w(e){let{children:t,transformCode:n,groupId:l,defaultOpen:c,row:p,hidden:m,fixtures:f,includeEndpoints:h,...y}=e;const{liveCodeBlock:{playgroundPosition:g}}=(0,s.Z)().siteConfig.themeConfig,v=(0,d.p)();return r.createElement("div",{className:(0,i.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(o.nu,(0,a.Z)({theme:v},y),r.createElement(x,{reverse:"top"===g,row:p,fixtures:f,includeEndpoints:h,groupId:l,defaultOpen:c},t)))}function x(e){let{reverse:t,children:n,row:a,fixtures:i,includeEndpoints:l,groupId:s,defaultOpen:d}=e;const c=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[u,p]=(0,r.useReducer)(R,void 0,(()=>c.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>c.map(((e,t)=>e=>p({i:t,code:e})))),[c.length]),[f,h]=(0,r.useState)((()=>c.map((e=>{let{collapsed:t}=e;return t})))),y=u.join("\n");return r.createElement(T,{reverse:t},r.createElement("div",null,r.createElement(E,{fixtures:!a&&i}),a&&c.length>1?r.createElement(P,{titles:c.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>h((t=>t.map(((t,n)=>n!==e))))}):null,c.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(O,{onClick:()=>h((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(Z,{key:t,onChange:m[t],code:u[t]}))}))),r.createElement(v.Z,{fallback:r.createElement(o.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:l,groupId:s,defaultOpen:d,row:a,fixtures:i}))},r.createElement(N,{code:y,includeEndpoints:l,groupId:s,defaultOpen:d,row:a,fixtures:i})))}E.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},w.defaultProps={row:!1,hidden:!1};const S="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(h=navigator)?void 0:h.userAgent),N=(0,r.lazy)((()=>S?Promise.resolve({default:e=>null}):Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(71563)]).then(n.bind(n,47550))));function T(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function R(e,t){const n=[...e];return n[t.i]=t.code,n}T.defaultProps={reverse:!1};const C=(0,r.memo)(o.uz);function Z(e){let{onChange:t,code:n}=e;return r.createElement(C,{className:u.Z.playgroundEditor,onChange:t,code:n})}function O(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(y.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),a)}function P(e){let{titles:t,closedList:n,onClick:a}=e;const{values:o}=(0,r.useContext)(c.Z),l=o.length>0;return r.createElement(y.Z,{className:(0,i.Z)({[u.Z.small]:l,[u.Z.subtabs]:l},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,i.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}const _=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o,row:i=!1,fixtures:l}=e;return r.createElement(w,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:i,hidden:a,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};_.defaultProps={defaultOpen:"n",fixtures:[]};var A=(0,r.memo)(_)},1556:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(91262),a=n(67294);function o(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010),o=n(45440);function i(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,n,i?o.Z.clickable:null),onClick:i},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(67294),a=n(95999),o=n(27093),i=n(26127),l=n(82038),s=n(83611),d=n(39714),c=n(86010),u=n(7094),p=n(12466),m=n(45440),f=n(32041),h=n(97723),y=n(92949);function g(e){let{value:t}=e;const n="dark"===(0,y.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(h.L,{shouldExpandNode:v,data:t,valueRenderer:k,theme:o,hideRoot:!0})}function v(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,o=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,o,m.Z.vertical)},"\u25b6")),a?r.createElement(S,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(g,{value:t})}const S=(0,r.memo)(x);var N=n(1556);function T(e){let{groupId:t,defaultOpen:n,row:a,fixtures:f}=e;const{tabGroupChoices:h,setTabGroupChoices:y}=(0,u.U)(),[g,v]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=h[t];null!=e&&e!==g&&v(e)}const k=(0,r.useCallback)((e=>{b(e.currentTarget),v((e=>"y"===e?"n":"y")),y(t,"y"===g?"n":"y")}),[b,t,g,y]),E=(0,r.useMemo)((()=>[new s.Z,new o.Z(i.Z)]),[]),x=!("n"===g||!a);return r.createElement(l.nq,{managers:E},r.createElement(d.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(N.Z,{fallback:r.createElement(C,null)},r.createElement(Z,null))),r.createElement(w,{selectedValue:g,toggle:k})))}var R=(0,r.memo)(T);function C(){return r.createElement("div",null,"Loading...")}const Z=(0,r.lazy)((()=>n.e(64511).then(n.bind(n,64511))));var O=n(60975);function P(e){let{groupId:t,defaultOpen:n,row:o,fixtures:i}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(O.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(R,{groupId:t,defaultOpen:n,row:o,fixtures:i})))}var _=(0,r.memo)(P)},58680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(27378),n(3905)),o=n(107);const i={title:"Expiry Policy",sidebar_label:"Expiry Policy"},l=void 0,s={unversionedId:"getting-started/expiry-policy",id:"getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/../docs/core/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665168155,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"docs",previous:{title:"Entity",permalink:"/docs/getting-started/entity"},next:{title:"Validation",permalink:"/docs/getting-started/validation"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Endpoint.dataExpiryLength",id:"endpointdataexpirylength",level:3},{value:"Examples",id:"examples",level:2},{value:"Long cache lifetime",id:"long-cache-lifetime",level:3},{value:"Never retry on error",id:"never-retry-on-error",level:3},{value:"Endpoint.invalidIfStale",id:"endpointinvalidifstale",level:3},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3},{value:"Error policy",id:"error-policy",level:2},{value:"Soft",id:"soft",level:3},{value:"Hard",id:"hard",level:3},{value:"Policy for RestEndpoint",id:"policy-for-restendpoint",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"class TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\nconst fetchLastUpdated = ({ id }) =>\n  fetch(`/api/currentTime/${id}`).then(res => res.json());\nconst lastUpdated = new Endpoint(mockLastUpdated, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("h3",{id:"endpointdataexpirylength"},"Endpoint.dataExpiryLength"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TimePage.tsx"',title:'"TimePage.tsx"'},"lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"@rest-hooks/rest")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To apply to all of a ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource's endpoints"),", use ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#getEndpointExtra"},"getEndpointExtra")),(0,a.kt)("h3",{id:"long-cache-lifetime"},"Long cache lifetime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="LongLivingResource.ts"',title:'"LongLivingResource.ts"'},"import { RestEndpoint, RestGenerics, createResource } from '@rest-hooks/rest';\n\n// We can now use LongLivingEndpoint to create endpoints that will be cached for one hour\nclass LongLivingEndpoint<O extends RestGenerics> extends RestEndpoint<O> {\n  dataExpiryLength = 60 * 60 * 1000; // one hour\n}\n\nconst LongLivingResource = createResource({\n  path: '/:id',\n  Endpoint: LongLivingEndpoint,\n});\n")),(0,a.kt)("h3",{id:"never-retry-on-error"},"Never retry on error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="NoRetryResource.ts"',title:'"NoRetryResource.ts"'},"import { RestEndpoint, RestGenerics, createResource } from '@rest-hooks/rest';\n\n// We can now use NoRetryEndpoint to create endpoints that will be cached for one hour\nclass NoRetryEndpoint<O extends RestGenerics> extends RestEndpoint<O> {\n  errorExpiryLength = Infinity;\n}\n\nconst NoRetryResource = createResource({\n  path: '/:id',\n  Endpoint: NoRetryEndpoint,\n});\n"))),(0,a.kt)("h3",{id:"endpointinvalidifstale"},"Endpoint.invalidIfStale"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#invalidifstale"},"Endpoint.invalidIfStale")," eliminates the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale")," status, making data\nthat expires immediately be considered 'invalid'."),(0,a.kt)("p",null,"This is demonstrated by the component suspending once its data goes stale. If the data is still\nwithin the expiry time it just continues to display it."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TimePage.tsx"',title:'"TimePage.tsx"'},"lastUpdated = lastUpdated.extend({\n  invalidIfStale: true,\n  dataExpiryLength: 5000,\n});\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useSuspense(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(lastUpdated, { id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"function ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { invalidate } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidate(lastUpdated, { id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(deleteLastUpdated, { id: '1' })}>\n        Delete\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"error-policy"},"Error policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#errorpolicy"},"Endpoint.errorPolicy")," controls cache behavior upon a fetch rejection.\nIt uses the rejection error to determine whether it should be treated as 'soft' or 'hard' error."),(0,a.kt)("h3",{id:"soft"},"Soft"),(0,a.kt)("p",null,"Soft errors will not invalidate a response if it is already available. However, if there is currently\nno data available, it will mark that endpoint as rejected, causing ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," to throw an\nerror. This can be caught with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("h3",{id:"hard"},"Hard"),(0,a.kt)("p",null,"Hard errors always invalidate a response with the rejection - even when data has previously made available."),(0,a.kt)(o.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ShowTime.tsx"',title:'"ShowTime.tsx"'},"let FAKE_ERROR = undefined;\nconst superFetch = lastUpdated;\nmockFetch = (arg, error) =>\n  FAKE_ERROR !== undefined ? Promise.reject(FAKE_ERROR) : superFetch(arg);\n\nlastUpdated = lastUpdated.extend({\n  fetch: mockFetch,\n  errorPolicy: error =>\n    error.status >= 500 ? ('hard' as const) : ('soft' as const),\n});\nfunction createError(status) {\n  const error = new Error('fake error');\n  error.status = status;\n  return error;\n}\n\nfunction ShowTime() {\n  const { updatedAt } = useSuspense(lastUpdated, { id: '1' });\n  const { fetch, invalidate } = useController();\n  React.useEffect(\n    () => () => {\n      FAKE_ERROR = undefined;\n    },\n    [updatedAt],\n  );\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <div>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Hard\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Hard\n        </button>\n      </div>\n    </div>\n  );\n}\n\nrender(\n  <ResetableErrorBoundary>\n    <ShowTime />\n  </ResetableErrorBoundary>,\n);\n"))),(0,a.kt)("h3",{id:"policy-for-restendpoint"},"Policy for RestEndpoint"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),"s indicate a failure of the server, we want to use stale data\nif it exists. On the other hand, something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," indicates 'user error', which\nmeans the error indicates something about application flow - like if a record is deleted, resulting\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),". Keeping the record around would be inaccurate."),(0,a.kt)("p",null,"Since this is the typical behavior for REST APIs, this is the default policy in ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"errorPolicy(error) {\n  return error.status >= 500 ? 'soft' : undefined;\n}\n")))}p.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);