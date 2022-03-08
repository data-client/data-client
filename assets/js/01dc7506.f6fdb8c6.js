"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[88744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"README",id:"version-4.2/README",title:"README",description:"\ud83c\udfc1 Getting Started",source:"@site/versioned_docs/version-4.2/README.md",sourceDirName:".",slug:"/",permalink:"/docs/4.2/",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/README.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{}},p={},s=[{value:"\ud83c\udfc1 Getting Started",id:"-getting-started",level:2},{value:"\ud83d\udcac API",id:"-api",level:2},{value:"\ud83c\udf8e Patterns &amp; Examples",id:"-patterns--examples",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-getting-started"},"\ud83c\udfc1 Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/"},"Installation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/getting-started/usage"},"Usage"))),(0,n.kt)("h2",{id:"-api"},"\ud83d\udcac API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/resource"},"Resource"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/Endpoint"},"Endpoint")))),(0,n.kt)("li",{parentName:"ul"},"Hooks:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"api/useresource"},"useResource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/useFetcher"},"useFetcher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/useCache"},"useCache")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/useSubscription"},"useSubscription")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/useRetrieve"},"useRetrieve")))),(0,n.kt)("li",{parentName:"ul"},"Components:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/CacheProvider"},"CacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/ExternalCacheProvider"},"ExternalCacheProvider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/NetworkErrorBoundary"},"NetworkErrorBoundary")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/Manager"},"Manager"),"s",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/NetworkManager"},"NetworkManager")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/SubscriptionManager"},"SubscriptionManager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/api/PollingSubscription"},"PollingSubscription"))))))),(0,n.kt)("h2",{id:"-patterns--examples"},"\ud83c\udf8e Patterns & Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd30 Basics",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"getting-started/data-dependency#async-fallbacks-loadingerror"},"Handling loading state")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"getting-started/data-dependency#async-fallbacks-loadingerror"},"Dealing with network errors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/fetch-multiple"},"Fetching multiple resources at once")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/pagination"},"Pagination")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/immutability"},"Understanding Immutability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/mocking-unfinished"},"Mocking unfinished endpoints")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/redux"},"Redux integration")))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udda7 Defining your network interface",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/resource-types"},"Defining your Resource types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/computed-properties"},"Computed properties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/multi-pk"},"Multicolumn primary keys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/network-transform"},"Transforming data on network load")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/auth"},"Authentication")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/jsonp"},"Cross-orgin requests with JSONP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/custom-networking"},"Custom networking library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/resource-lifetime"},"Custom cache lifetime")))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca8 Performance Optimizations (optional)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/nested-response"},"Nesting related resources (server-side join)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/4.2/guides/rpc"},"Cross-resource multi-update RPC (dealing with side-effects)"))))))}c.isMDXComponent=!0}}]);