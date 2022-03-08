"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[47840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"useResultCache()",id:"useResultCache",original_id:"useResultCache"},o=void 0,s={unversionedId:"api/useResultCache",id:"version-4.3/api/useResultCache",title:"useResultCache()",description:"### Rest Hooks 3.0 - Deprecation",source:"@site/versioned_docs/version-4.3/api/useResultCache.md",sourceDirName:"api",slug:"/api/useResultCache",permalink:"/docs/4.3/api/useResultCache",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResultCache.md",tags:[],version:"4.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"useResultCache()",id:"useResultCache",original_id:"useResultCache"}},i={},u=[{value:"Example",id:"example",level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResultCache(\n  fetchShape: ReadShape,\n  params: object | null,\n  defaults?: object,\n): typeof defaults;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResultCache<Params extends Readonly<object>, D extends object>(\n  { getFetchKey, fetch }: ReadShape<any, Params, any>,\n  params: Params | null,\n  defaults?: D,\n): D extends undefined\n  ? Resolved<ReturnType<typeof fetch>> | null\n  : Readonly<D>;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30---deprecation"},"Rest Hooks 3.0 - Deprecation"),(0,r.kt)("p",{parentName:"blockquote"},"This hook is being deprecated in favor of ",(0,r.kt)("a",{parentName:"p",href:"./useCacheNew"},"useCacheNew()")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"3.0 ",(0,r.kt)("inlineCode",{parentName:"li"},"useCacheNew()")," will be renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"useCache()")),(0,r.kt)("li",{parentName:"ul"},"3.1 will remove ",(0,r.kt)("inlineCode",{parentName:"li"},"useResultCache()")))),(0,r.kt)("p",null,"Excellent to use with ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/guides/pagination"},"pagination")," or any other extra (non-entity) data in results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," if provided"),(0,r.kt)("li",{parentName:"ul"},"null otherwise"))),(0,r.kt)("li",{parentName:"ul"},"While loading:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns previously cached if exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaults")," if provided"),(0,r.kt)("li",{parentName:"ul"},"null otherwise")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"By sending defaults we can destructure the values even if the results don't exist."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostList() {\n  const { prevPage, nextPage } = useResultCache(\n    PaginatedResource.listShape(),\n    {},\n    { prevPage: '', nextPage: '' },\n  );\n  // ...render stuff here\n}\n")),(0,r.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"listShape()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.3/api/FetchShape"},"FetchShape")," as well."))}c.isMDXComponent=!0}}]);