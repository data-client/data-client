"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[18078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={id:"useresource",title:"useResource()",original_id:"useresource"},o=void 0,l={unversionedId:"api/useresource",id:"version-2.2/api/useresource",title:"useResource()",description:"### Rest Hooks 3.0 - Deprecation",source:"@site/versioned_docs/version-2.2/api/useResource.md",sourceDirName:"api",slug:"/api/useresource",permalink:"/docs/2.2/api/useresource",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useResource.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"useresource",title:"useResource()",original_id:"useresource"},sidebar:"version-2.2/docs",previous:{title:"FetchShape",permalink:"/docs/2.2/api/FetchShape"},next:{title:"useResourceNew()",permalink:"/docs/2.2/api/useresourcenew"}},i={},u=[{value:"Single",id:"single",level:2},{value:"List",id:"list",level:2},{value:"Parallel",id:"parallel",level:2},{value:"Sequential",id:"sequential",level:2},{value:"Useful <code>FetchShape</code>s to send",id:"useful-fetchshapes-to-send",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource(fetchShape: ReadShape, params: object | null):\n  SchemaOf<typeof fetchShape.schema>;\n\nfunction useResource(...[fetchShape: ReadShape, params: object | null]):\n  SchemaOf<typeof fetchShape.schema>[];\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"function useResource<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params, Body>, params: Params | null): SchemaOf<S>;\n\nfunction useResource<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(...[fetchShape: ReadShape<S, Params, Body>, params: Params | null]): SchemaOf<S>[];\n")),(0,n.kt)("blockquote",null,(0,n.kt)("h3",{parentName:"blockquote",id:"rest-hooks-30---deprecation"},"Rest Hooks 3.0 - Deprecation"),(0,n.kt)("p",{parentName:"blockquote"},"This hook is being deprecated in favor of ",(0,n.kt)("a",{parentName:"p",href:"./useResourceNew"},"useResourceNew()")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"3.0 this will be renamed to ",(0,n.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")),(0,n.kt)("li",{parentName:"ul"},"3.1 will remove ",(0,n.kt)("inlineCode",{parentName:"li"},"useResourceLegacy()")))),(0,n.kt)("p",null,"Excellent for retrieving the data you need."),(0,n.kt)("p",null,"Cache policy is ",(0,n.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5861"},"Stale-While-Revalidate")," by default but also ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/guides/resource-lifetime"},"configurable"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On first-render and when parameters change"),(0,n.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,n.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,n.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Throws error to be ",(0,n.kt)("a",{parentName:"li",href:"/docs/2.2/guides/network-errors"},"caught")," by ",(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/error-boundaries.html"},"Error Boundaries")))),(0,n.kt)("li",{parentName:"ul"},"While Loading:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Returns previously cached if exists (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.2/guides/loading-state"},"Suspend rendering")," otherwise")))),(0,n.kt)("h2",{id:"single"},"Single"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Post({ id }: { id: number }) {\n  const post = useResource(PostResource.detailShape(), { id });\n  // post as PostResource\n}\n")),(0,n.kt)("h2",{id:"list"},"List"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const posts = useResource(PostResource.listShape(), {});\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"parallel"},"Parallel"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function Posts() {\n  const [user, posts] = useResource(\n    [UserResource.detailShape(), { id: userId }],\n    [PostResource.listShape(), { userId }],\n  );\n  // user as UserResource\n  // posts as PostResource[]\n}\n")),(0,n.kt)("h2",{id:"sequential"},"Sequential"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostWithAuthor() {\n  const post = useResource(PostResource.detailShape(), { id });\n  // post as PostResource\n  const author = useResource(UserResource.detailShape(), {\n    id: post.userId,\n  });\n  // author as UserResource\n}\n")),(0,n.kt)("h2",{id:"useful-fetchshapes-to-send"},"Useful ",(0,n.kt)("inlineCode",{parentName:"h2"},"FetchShape"),"s to send"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"detailShape()"),(0,n.kt)("li",{parentName:"ul"},"listShape()")),(0,n.kt)("p",null,"Feel free to add your own ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.2/api/FetchShape"},"FetchShape")," as well."))}p.isMDXComponent=!0}}]);