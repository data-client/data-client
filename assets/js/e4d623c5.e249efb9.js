"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[53198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"API Reference",id:"README",original_id:"README"},o=void 0,l={unversionedId:"api/README",id:"version-4.5/api/README",title:"API Reference",description:"Interface Definitions",source:"@site/versioned_docs/version-4.5/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/4.5/api/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/README.md",tags:[],version:"4.5",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"API Reference",id:"README",original_id:"README"},sidebar:"version-4.5/docs",previous:{title:"Usage without Suspense",permalink:"/docs/4.5/guides/no-suspense"},next:{title:"Resource",permalink:"/docs/4.5/api/resource"}},p={},s=[{value:"Interface Definitions",id:"interface-definitions",level:2},{value:"Hierarchy",id:"hierarchy",level:3},{value:"Hooks",id:"hooks",level:2},{value:"Components",id:"components",level:2},{value:"Managers",id:"managers",level:2},{value:"Testing",id:"testing",level:2}],c=(u="MockProvider",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"interface-definitions"},"Interface Definitions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/resource"},"Resource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/Entity"},"Entity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/SimpleRecord"},"SimpleRecord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/FetchShape"},"FetchShape"))),(0,n.kt)("h3",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," SimpleRecord\n      |\n   Entity\n      |\nSimpleResource\n      |\n   Resource\n")),(0,n.kt)("h2",{id:"hooks"},"Hooks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useresource"},"useResource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useFetcher"},"useFetcher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useCache"},"useCache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useSubscription"},"useSubscription")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useRetrieve"},"useRetrieve")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useInvalidator"},"useInvalidator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/useResetter"},"useResetter"))),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/CacheProvider"},"CacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/ExternalCacheProvider"},"ExternalCacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/NetworkErrorBoundary"},"NetworkErrorBoundary"))),(0,n.kt)("h2",{id:"managers"},(0,n.kt)("a",{parentName:"h2",href:"/docs/4.5/api/Manager"},"Manager"),"s"),(0,n.kt)("p",null,"Extended the networking/state layer works through ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.5/api/Manager"},"managers"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/NetworkManager"},"NetworkManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/SubscriptionManager"},"SubscriptionManager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.5/api/PollingSubscription"},"PollingSubscription"))))),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"Testing utilities are imported from ",(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/test"),". These are useful\nhelpers to ensure your code works as intended and are not meant to be shipped\nto production themselves."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"MockProvider"},"\\",(0,n.kt)(c,{mdxType:"MockProvider"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeRenderRestHook"},"makeRenderRestHook()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeCacheProvider"},"makeCacheProvider()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"makeExternalCacheProvider"},"makeExternalCacheProvider()"))))}m.isMDXComponent=!0}}]);