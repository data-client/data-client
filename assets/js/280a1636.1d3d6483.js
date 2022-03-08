"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[10755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(87462),n=r(67294),o=r(72389),s=r(45860),l=r(86010);const i="tabItem_LplD";function p(e){var t,r;const{lazy:o,block:p,defaultValue:u,values:c,groupId:d,className:m}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,s.lx)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??(null==(r=h[0])?void 0:r.props.value);if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.UB)(),[N,b]=(0,n.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=d){const e=y[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&b(e)}const x=e=>{const t=e.currentTarget,r=w.indexOf(t),a=k[r].value;a!==N&&(E(t),b(a),null!=d&&v(d,a))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]||w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]||w[w.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},m)},k.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),o?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,o.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},32248:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(9877),n=r(58215),o=r(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},o.createElement(n.Z,{value:"before"},t[0]),o.createElement(n.Z,{value:"after"},t[1]))}},94377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(32248);const s={title:"Upgrading from 5 to 6"},l="Highlights",i={unversionedId:"upgrade/upgrading-to-6",id:"version-5.0/upgrade/upgrading-to-6",title:"Upgrading from 5 to 6",description:"Deprecated networking definitions were removed from rest-hooks exports, and moved to @rest-hooks/legacy.",source:"@site/versioned_docs/version-5.0/upgrade/upgrading-to-6.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-6",permalink:"/docs/5.0/upgrade/upgrading-to-6",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-6.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Upgrading from 5 to 6"}},p={},u=[{value:"Deprecated networking definitions were removed from <code>rest-hooks</code> exports, and moved to @rest-hooks/legacy.",id:"deprecated-networking-definitions-were-removed-from-rest-hooks-exports-and-moved-to-rest-hookslegacy",level:2},{value:"@rest-hooks/endpoint changes",id:"rest-hooksendpoint-changes",level:2},{value:"@rest-hooks/rest changes from 2 -&gt; 3",id:"rest-hooksrest-changes-from-2---3",level:2},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:2},{value:"Entity",id:"entity",level:3},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:2},{value:"@rest-hooks/core",id:"rest-hookscore",level:2},{value:"rest-hooks",id:"rest-hooks",level:2},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"highlights"},"Highlights"),(0,n.kt)("h2",{id:"deprecated-networking-definitions-were-removed-from-rest-hooks-exports-and-moved-to-rest-hookslegacy"},"Deprecated networking definitions were removed from ",(0,n.kt)("inlineCode",{parentName:"h2"},"rest-hooks")," exports, and moved to ",(0,n.kt)("a",{parentName:"h2",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"."),(0,n.kt)("p",null,"FlatEntity, SimpleRecord, NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("p",null,"These are still supported! They are simply moved to ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),". This allows smooth incremental migrations."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"yarn add @rest-hooks/legacy@2.2.0"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"has all of these, and is compatible with both ",(0,n.kt)("inlineCode",{parentName:"li"},"rest-hooks")," 5 and 6.")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Upgrade ",(0,n.kt)("inlineCode",{parentName:"li"},"rest-hooks")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"@rest-hooks/legacy")," to 6."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"Gradually migrate")," to ",(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest"))),(0,n.kt)("h2",{id:"rest-hooksendpoint-changes"},"@rest-hooks/endpoint changes"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"SimpleRecord -> [Object](https://resthooks.io/docs/api/Object)"),(0,n.kt)("p",null,"SimpleRecord was removed (though available in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),")"),(0,n.kt)(o.Z,{mdxType:"BeforeAfterTabs"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export class Address extends SimpleRecord {\n  readonly street: string = '';\n  readonly suite: string = '';\n  readonly city: string = '';\n  readonly zipcode: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export const Address = {\n  street: '',\n  suite: '',\n  city: '',\n  zipcode: '',\n  date: Date,\n};\n")))),(0,n.kt)("h2",{id:"rest-hooksrest-changes-from-2---3"},"@rest-hooks/rest changes from 2 -> 3"),(0,n.kt)("p",null,"These add on to the ",(0,n.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"existing changes")," of @rest-hooks/rest from @rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource.fromJS()")," was used to customize normalization process, use ",(0,n.kt)("inlineCode",{parentName:"p"},"process()")," instead."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class MyResource extends Resource {\n  static process(input: any, parent: any, key: string | undefined): any {\n    return {\n      ...input,\n      extraThing: 5,\n    };\n  }\n}\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"New default ",(0,n.kt)("a",{parentName:"p",href:"#rest-hookscore"},"error behavior")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To keep existing:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"class MyResource extends Resource {\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error => 'soft' as const,\n    };\n  }\n}\n")))))),(0,n.kt)("h1",{id:"full-list-of-changes"},"Full list of changes"),(0,n.kt)("h2",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,n.kt)("h3",{id:"entity"},"Entity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fromJS() -> process() to customize init"),(0,n.kt)("li",{parentName:"ul"},"normalize results in POJO rather than instances",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is only meaningful for those inspecting the rest hooks state directly"))),(0,n.kt)("li",{parentName:"ul"},"FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)")),(0,n.kt)("h2",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("h2",{id:"rest-hookscore"},"@rest-hooks/core"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"buildInferredResult -> inferResults")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Error behavior"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"useError() will no longer create synthetic errors for missing entities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("details",null,(0,n.kt)("summary",null,"useError() errorPolicy"),(0,n.kt)("h4",{parentName:"li",id:"endpointextraoptions"},"EndpointExtraOptions"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"interface EndpointExtraOptions {\n  //...rest\n  errorPolicy?: (error: any) => 'soft' | undefined;\n}\n")),(0,n.kt)("h4",{parentName:"li",id:"soft-vs-undefined"},"'soft' vs ",(0,n.kt)("inlineCode",{parentName:"h4"},"undefined")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"'soft' avoids errors if existing results are still available (even if stale)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"undefined")," (hard error) means any error always falls")),(0,n.kt)("h4",{parentName:"li",id:"rest-hooksrest-1"},"@rest-hooks/rest"),(0,n.kt)("p",{parentName:"li"},"New default policy: 5xx are soft, else hard."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," is where errors have 'status' members. This concept does not exist in base Endpoints."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return;\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")),(0,n.kt)("h4",{parentName:"li",id:"pollingsubscription"},"PollingSubscription"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"          // never break when data already exists\n          errorPolicy: () => 'soft' as const,\n")),(0,n.kt)("h4",{parentName:"li",id:"rest-hookslegacy---resource"},"@rest-hooks/legacy - Resource"),(0,n.kt)("p",{parentName:"li"},"Existing policy was to always be 'soft' no matter what. This maintains that behavior."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"  /** @deprecated */\n  /** Get the request options for this SimpleResource  */\n  static getFetchOptions(): FetchOptions | undefined {\n    return {\n      errorPolicy: () => 'soft' as const,\n    };\n  }\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/971"},"https://github.com/coinbase/rest-hooks/pull/971")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"polled fetch errors are always 'soft'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5xx: 'soft'"),(0,n.kt)("li",{parentName:"ul"},"4xx, 3xx, etc: 'hard'"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"peerDep @rest-hooks/endpoint > 2"))),(0,n.kt)("h2",{id:"rest-hooks"},"rest-hooks"),(0,n.kt)("p",null,"Removed exports from 'rest-hooks': NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"use @rest-hooks/legacy, or @rest-hooks/rest instead")),(0,n.kt)("h2",{id:"rest-hookslegacy"},"@rest-hooks/legacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%406.0.0"},"Full Release notes")))}d.isMDXComponent=!0}}]);