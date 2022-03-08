"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[96503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(87462),a=r(67294),l=r(72389),i=r(45860),o=r(86010);const s="tabItem_LplD";function u(e){var t,r;const{lazy:l,block:u,defaultValue:c,values:p,groupId:d,className:m}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,i.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=v[0])?void 0:r.props.value);if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,i.UB)(),[g,N]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=d){const e=y[d];null!=e&&e!==g&&f.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,r=E.indexOf(t),n=f[r].value;n!==g&&(w(t),N(n),null!=d&&k(d,n))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]||E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]||E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},m)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":g===t})}),r??t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function c(e){const t=(0,l.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},11048:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9877),a=r(58215),l=r(67294);function i(e){let{children:t}=e;return l.createElement(n.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},l.createElement(a.Z,{value:"simple"},t[0]),l.createElement(a.Z,{value:"generics"},t[1]))}},86801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(11048);const i={title:"useRetrieve()"},o=void 0,s={unversionedId:"api/useRetrieve",id:"version-6.0/api/useRetrieve",title:"useRetrieve()",description:"Great for retrieving resources optimistically before they are needed.",source:"@site/versioned_docs/version-6.0/api/useRetrieve.md",sourceDirName:"api",slug:"/api/useRetrieve",permalink:"/docs/6.0/api/useRetrieve",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useRetrieve.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"useRetrieve()"},sidebar:"version-6.0/docs",previous:{title:"useSubscription()",permalink:"/docs/6.0/api/useSubscription"},next:{title:"useInvalidator()",permalink:"/docs/6.0/api/useInvalidator"}},u={},c=[{value:"Example",id:"example",level:2},{value:"Simple",id:"simple",level:3},{value:"Conditional",id:"conditional",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve(\n  endpoint: ReadEndpoint,\n  params: object | null,\n): Promise<any> | undefined;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useRetrieve<\n  Params extends Readonly<object>,\n  S extends Schema\n>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>,\n  params: Params | null,\n): Promise<any> | undefined;\n"))),(0,a.kt)("p",null,"Great for retrieving resources optimistically before they are needed."),(0,a.kt)("p",null,"This can be useful for ensuring resources early in a render tree before they are needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Triggers fetch:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On first-render",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"or parameters change"),(0,a.kt)("li",{parentName:"ul"},"or required entity is deleted"),(0,a.kt)("li",{parentName:"ul"},"or imperative ",(0,a.kt)("a",{parentName:"li",href:"./useInvalidator"},"invalidation")," triggered"))),(0,a.kt)("li",{parentName:"ul"},"and When not in cache or result is considered stale"),(0,a.kt)("li",{parentName:"ul"},"and When no identical requests are in flight"),(0,a.kt)("li",{parentName:"ul"},"and when params are not null"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.restapitutorial.com/httpstatuscodes.html"},"On Error (404, 500, etc)"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Returned promise will reject"))),(0,a.kt)("li",{parentName:"ul"},"On fetch returns a promise else undefined.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id }: { id: number }) {\n  useRetrieve(PostResource.detail(), { id });\n  // ...\n}\n")),(0,a.kt)("h3",{id:"conditional"},"Conditional"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function MasterPost({ id, doNotFetch }: { id: number, doNotFetch: boolean }) {\n  useRetrieve(PostResource.detail(), doNotFetch ? null : { id });\n  // ...\n}\n")),(0,a.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,a.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"detail()"),(0,a.kt)("li",{parentName:"ul"},"list()")),(0,a.kt)("p",null,"Feel free to add your own ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint")," as well."))}d.isMDXComponent=!0}}]);