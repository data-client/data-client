"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[42832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(87462),a=n(67294),o=n(72389),l=n(45860),s=n(86010);const i="tabItem_LplD";function c(e){var t,n;const{lazy:o,block:c,defaultValue:u,values:p,groupId:d,className:h}=e,m=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,l.lx)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=m.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=m[0])?void 0:n.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.UB)(),[y,w]=(0,a.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==y&&(O(t),w(r),null!=d&&k(d,r))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]||T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]||T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":y===t})}),n??t)}))),o?(0,a.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},42315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(9877),n(58215);const o={title:"GraphQL Authentication",sidebar_label:"Authentication"},l=void 0,s={unversionedId:"graphql/auth",id:"version-6.1/graphql/auth",title:"GraphQL Authentication",description:"GraphQL Authentication patterns for Rest Hooks",source:"@site/versioned_docs/version-6.1/graphql/auth.md",sourceDirName:"graphql",slug:"/graphql/auth",permalink:"/docs/graphql/auth",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/auth.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"GraphQL Authentication",sidebar_label:"Authentication"},sidebar:"version-6.1/docs",previous:{title:"Usage",permalink:"/docs/graphql/usage"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},i={},c=[{value:"Cookie Auth",id:"cookie-auth",level:2},{value:"Access Tokens",id:"access-tokens",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Authentication patterns for Rest Hooks")),(0,a.kt)("h2",{id:"cookie-auth"},"Cookie Auth"),(0,a.kt)("p",null,"Here's an example using simple cookie auth:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {\n  getFetchInit(init: RequestInit): RequestInit {\n    return {\n      ...init,\n      credentials: 'same-origin',\n    };\n  },\n});\nexport default gql;\n")),(0,a.kt)("h2",{id:"access-tokens"},"Access Tokens"),(0,a.kt)("p",null,"Here we'll use a member variable to track the access token and send it\nin a header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me', {\n  getHeaders(headers: HeadersInit): HeadersInit {\n    return {\n      ...headers,\n      'Access-Token': this.accessToken,\n    };\n  },\n});\nexport default gql;\n")),(0,a.kt)("p",null,"Then be sure to set the access token upon login:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import gql from 'schema/endpoint';\n\nfunction Auth() {\n  const handleLogin = useCallback(\n    async e => {\n      const { accessToken } = await login(new FormData(e.target));\n      // success!\n      // highlight-next-line\n      gql.accessToken = accessToken;\n    },\n    [login],\n  );\n\n  return <AuthForm onSubmit={handleLogin} />;\n}\n")))}p.isMDXComponent=!0}}]);