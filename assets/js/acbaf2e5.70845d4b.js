"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),s=n(85162);const i={title:"Resource Authentication",sidebar_label:"Authentication"},l=void 0,u={unversionedId:"guides/auth",id:"version-5.2/guides/auth",title:"Resource Authentication",description:"All network requests are run through the static getFetchInit optionally",source:"@site/rest_versioned_docs/version-5.2/guides/auth.md",sourceDirName:"guides",slug:"/guides/auth",permalink:"/rest/5.2/guides/auth",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/auth.md",tags:[],version:"5.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Resource Authentication",sidebar_label:"Authentication"},sidebar:"docs",previous:{title:"Pagination",permalink:"/rest/5.2/guides/pagination"},next:{title:"Transforming data on fetch",permalink:"/rest/5.2/guides/network-transform"}},c={},p=[{value:"Cookie Auth",id:"cookie-auth",level:2},{value:"Access Tokens",id:"access-tokens",level:2},{value:"Auth Headers from React Context",id:"auth-headers-from-react-context",level:2},{value:"Code organization",id:"code-organization",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All network requests are run through the ",(0,r.kt)("inlineCode",{parentName:"p"},"static getFetchInit")," optionally\ndefined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"."),(0,r.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,r.kt)("p",null,"Here's an example using simple cookie auth:"),(0,r.kt)(o.Z,{defaultValue:"fetch",values:[{label:"fetch",value:"fetch"},{label:"superagent",value:"superagent"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"fetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    credentials: 'same-origin',\n  });\n}\n"))),(0,r.kt)(s.Z,{value:"superagent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nabstract class AuthdResource extends Resource {\n  static fetchPlugin = (request: SuperAgentRequest) =>\n    request.withCredentials();\n}\n")),(0,r.kt)("p",null,"If you used the ",(0,r.kt)("a",{parentName:"p",href:"../guides/custom-networking#superagent"},"custom superagent fetch")))),(0,r.kt)("p",null,"You can also do more complex flows (like adding arbitrary headers) to\nthe request. Every ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#getFetchInit"},"getFetchInit()")," takes in the existing ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"init options")," of fetch, and returns new init options to be used."),(0,r.kt)("h2",{id:"access-tokens"},"Access Tokens"),(0,r.kt)(o.Z,{defaultValue:"static",values:[{label:"static member",value:"static"},{label:"function singleton",value:"function"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"static",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="resources/AuthdResource.ts"',title:'"resources/AuthdResource.ts"'},"import { getAuthToken } from 'authorization-singleton';\nimport { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  // highlight-next-line\n  declare static accessToken?: string;\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    headers: {\n      ...init.headers,\n      // highlight-next-line\n      'Access-Token': this.accessToken,\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Upon login we set the token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Auth.tsx"',title:'"Auth.tsx"'},"import AuthdResource from 'resources/AuthdResource';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      AuthdResource.accessToken = accessToken;\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n"))),(0,r.kt)(s.Z,{value:"function",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getAuthToken } from 'authorization-singleton';\nimport { Resource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends Resource {\n  static getFetchInit = (init: RequestInit): RequestInit => ({\n    ...init,\n    headers: {\n      ...init.headers,\n      // highlight-next-line\n      'Access-Token': getAuthToken(),\n    },\n  });\n}\n")),(0,r.kt)("p",null,"Upon login we set the token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Auth.tsx"',title:'"Auth.tsx"'},"import { setAuthToken } from 'authorization-singleton';\nimport AuthdResource from 'resources/AuthdResource';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      setAuthToken(accessToken);\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n")))),(0,r.kt)("h2",{id:"auth-headers-from-react-context"},"Auth Headers from React Context"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Using React Context for state that is not displayed (like auth tokens) is not recommended.")),(0,r.kt)("p",null,"Here we use a context variable to set headers. Note - this means any endpoint functions can only be\ncalled from a React Component. (However, this should be fine since the context will only exist in React anyway.)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/HookableResource"},"HookableResource")," gives us endpoint methods that are hooks so we can access\nReact context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HookableResource } from '@rest-hooks/rest';\n\nabstract class AuthdResource extends HookableResource {\n  static useFetchInit = (init: RequestInit) => {\n    const accessToken = useAuthContext();\n    return {\n      ...init,\n      headers: {\n        ...init.headers,\n        'Access-Token': accessToken,\n      },\n    };\n  };\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Using this means all endpoint calls must only occur during a function render."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const { fetch } = useController();\n  // PostResource.useCreate() calls useFetchInit()\n  //highlight-next-line\n  const createPost = PostResource.useCreate();\n\n  return (\n    <form\n      onSubmit={e => fetch(createPost, {}, new FormData(e.target))}\n    >\n      {/* ... */}\n    </form>\n  );\n}\n"))),(0,r.kt)("h2",{id:"code-organization"},"Code organization"),(0,r.kt)("p",null,"If much of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar auth mechanism, you might\ntry extending from a base class that defines such common customizations."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),u=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:h,values:m,groupId:g,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===h?h:null!=(t=null!=h?h:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:T}=(0,l.U)(),[A,R]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=g){const e=x[g];null!=e&&e!==A&&b.some((t=>t.value===e))&&R(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==A&&(N(t),R(a),null!=g&&T(g,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:I,onClick:I},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function h(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);