"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46318],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(67294),r=a(86010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var s=a(87462),r=a(67294),n=a(86010),o=a(72389),l=a(67392),i=a(7094),p=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:h,values:k,groupId:m,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:f.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),v=(0,l.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===h?h:null!=(t=null!=h?h:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[E,x]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:R}=(0,p.o5)();if(null!=m){const e=b[m];null!=e&&e!==E&&N.some((t=>t.value===e))&&x(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),s=N[a].value;s!==E&&(R(t),x(s),null!=m&&w(m,String(s)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var s;const t=T.indexOf(e.currentTarget)+1;a=null!=(s=T[t])?s:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},g)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:Z,onFocus:S,onClick:S},o,{className:(0,n.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function h(e){const t=(0,o.Z)();return r.createElement(c,(0,s.Z)({key:String(t)},e))}},32248:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(65488),r=a(85162),n=a(67294);function o(e){let{children:t}=e;return n.createElement(s.Z,{defaultValue:"before",groupId:"before-after",values:[{label:"before",value:"before"},{label:"after",value:"after"}]},n.createElement(r.Z,{value:"before"},t[0]),n.createElement(r.Z,{value:"after"},t[1]))}},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(65488),r=a(85162),n=a(67294),o=a(75690);function l(e){let{pkgs:t,dev:a=!1}=e;return n.createElement(s.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},n.createElement(r.Z,{value:"yarn"},n.createElement(o.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),n.createElement(r.Z,{value:"npm"},n.createElement(o.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294),r=a(72887);const n={React:s,...s,...r}},64133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var s=a(87462),r=(a(67294),a(3905)),n=a(32248),o=a(96497);const l={title:"Upgrading from 5 to 6"},i=void 0,p={unversionedId:"upgrade/upgrading-to-6",id:"version-6.3/upgrade/upgrading-to-6",title:"Upgrading from 5 to 6",description:"Highlights",source:"@site/versioned_docs/version-6.3/upgrade/upgrading-to-6.md",sourceDirName:"upgrade",slug:"/upgrade/upgrading-to-6",permalink:"/docs/6.3/upgrade/upgrading-to-6",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/upgrade/upgrading-to-6.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Upgrading from 5 to 6"},sidebar:"docs",previous:{title:"useResetter()",permalink:"/docs/6.3/api/useResetter"},next:{title:"Upgrading from 4 to 5",permalink:"/docs/6.3/upgrade/upgrading-to-5"}},u={},d=[{value:"Highlights",id:"highlights",level:2},{value:"Package compatibility",id:"package-compatibility",level:3},{value:"Exports moved to @rest-hooks/legacy.",id:"exports-moved-to-rest-hookslegacy",level:3},{value:"Importing directly from hidden files is no longer supported",id:"importing-directly-from-hidden-files-is-no-longer-supported",level:3},{value:"Store state internals",id:"store-state-internals",level:3},{value:"@rest-hooks/endpoint changes",id:"rest-hooksendpoint-changes",level:3},{value:"@rest-hooks/rest changes from 2 -&gt; 3",id:"rest-hooksrest-changes-from-2---3",level:3},{value:"Full list of changes",id:"full-list-of-changes",level:2},{value:"Node &gt;=12",id:"node-12",level:3},{value:"@rest-hooks/endpoint",id:"rest-hooksendpoint",level:3},{value:"Entity",id:"entity",level:4},{value:"@rest-hooks/rest",id:"rest-hooksrest",level:3},{value:"@rest-hooks/core",id:"rest-hookscore",level:3},{value:"rest-hooks",id:"rest-hooks",level:3},{value:"@rest-hooks/legacy",id:"rest-hookslegacy",level:3}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{pkgs:"rest-hooks@6 @rest-hooks/rest@3",upgrade:!0,mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"highlights"},"Highlights"),(0,r.kt)("h3",{id:"package-compatibility"},"Package compatibility"),(0,r.kt)("p",null,"Be sure to upgrade these packages prior to upgrading Rest Hooks itself. They maintain compatibility\nwith rest hooks 5."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/test"},"@rest-hooks/test")," >= 6.2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy")," >= 2.3.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/hooks"},"@rest-hooks/hooks")," >= 1.4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rest-hooks/img"},"@rest-hooks/img")," >= 0.4.0")),(0,r.kt)("p",null,"Upgrade at the same time:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")," 3.0 drops compatibility with\nolder versions, so this will have to be upgraded in unison. All breaking changes ",(0,r.kt)("a",{parentName:"p",href:"#rest-hooksrest-changes-from-2---3"},"are listed below")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Due to a bug in npm 7, it might install multiple peerDeps (@rest-hooks/normalizr). If\nthis happens, you can fix by completely uninstalling rest hooks packages and then reininstalling:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall rest-hooks @rest-hooks/rest\nnpm install --save rest-hooks@6 @rest-hooks/rest@3\n"))),(0,r.kt)("h3",{id:"exports-moved-to-rest-hookslegacy"},"Exports moved to ",(0,r.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"."),(0,r.kt)("p",null,"FlatEntity, SimpleRecord, NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,r.kt)("p",null,"These are still supported! They are simply moved to ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),". This allows smooth incremental migrations."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @rest-hooks/legacy@2.2.0")),(0,r.kt)("p",{parentName:"li"},"has all of these, and is compatible with both ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," 5 and 6.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," to 6 & ",(0,r.kt)("inlineCode",{parentName:"p"},"@rest-hooks/legacy")," to 3.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"Gradually migrate")," to ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")))),(0,r.kt)("h3",{id:"importing-directly-from-hidden-files-is-no-longer-supported"},"Importing directly from hidden files is no longer supported"),(0,r.kt)("p",null,"All packages now use ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/package-exports/"},"package exports"),", which if\nsupported disallow importing directly from any sub path like ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks/lib/react-integration/hooks/useSuspense")),(0,r.kt)("p",null,"Doing this was never supported as file locations would change without announcement. However, now\nwith tooling that supports package exports, it will not work at all."),(0,r.kt)("h3",{id:"store-state-internals"},"Store state internals"),(0,r.kt)("p",null,"Entities no longer normalize to their class. Class construction is now done during denormalization step.\nThis means the internal state of Rest Hooks is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plain_old_Java_object"},"POJO"),". This\nimproves serialization. However, it does mean relying on the internal state in a ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Manager"},"Manager"),"\nto be a class will break. Additionally the expected serialization of Rest Hooks store will be slightly different, which\ncould affect snapshot tests or persistance efforts like using IndexedDB."),(0,r.kt)("h3",{id:"rest-hooksendpoint-changes"},"@rest-hooks/endpoint changes"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SimpleRecord -> Object"),(0,r.kt)("p",null,"SimpleRecord was removed (though available in ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),")"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/api/Object"},"Object")," can be used instead"),(0,r.kt)(n.Z,{mdxType:"BeforeAfterTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class Address extends SimpleRecord {\n  readonly street: string = '';\n  readonly suite: string = '';\n  readonly city: string = '';\n  readonly zipcode: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const Address = {\n  street: '',\n  suite: '',\n  city: '',\n  zipcode: '',\n  date: Date,\n};\n")))),(0,r.kt)("h3",{id:"rest-hooksrest-changes-from-2---3"},"@rest-hooks/rest changes from 2 -> 3"),(0,r.kt)("p",null,"These add on to the ",(0,r.kt)("a",{parentName:"p",href:"https://resthooks.io/docs/upgrade/upgrading-to-5#rest-hooksrest"},"existing changes")," of @rest-hooks/rest from @rest-hooks/legacy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource.fromJS()")," was used to customize normalization process, use ",(0,r.kt)("inlineCode",{parentName:"p"},"process()")," instead."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"}," class MyResource extends Resource {\n   static process(input: any, parent: any, key: string | undefined): any {\n     return {\n       ...input,\n       extraThing: 5,\n     };\n   }\n }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New default ",(0,r.kt)("a",{parentName:"p",href:"#rest-hookscore"},"error behavior")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="To keep existing"',title:'"To',keep:!0,'existing"':!0},"class MyResource extends Resource {\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error => 'soft' as const,\n    };\n  }\n}\n")))),(0,r.kt)("h2",{id:"full-list-of-changes"},"Full list of changes"),(0,r.kt)("h3",{id:"node-12"},"Node >=12"),(0,r.kt)("p",null,"Node 12 is now the minimum version required. This only applies if Rest Hooks\nis actually used within node. (SSR or testing are likely cases.)"),(0,r.kt)("h3",{id:"rest-hooksendpoint"},"@rest-hooks/endpoint"),(0,r.kt)("h4",{id:"entity"},"Entity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fromJS() -> process() to customize init"),(0,r.kt)("li",{parentName:"ul"},"normalize results in POJO rather than instances",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is only meaningful for those inspecting the rest hooks state directly"))),(0,r.kt)("li",{parentName:"ul"},"FlatEntity, SimpleRecord removed (use @rest-hooks/legacy)")),(0,r.kt)("h3",{id:"rest-hooksrest"},"@rest-hooks/rest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,r.kt)("h3",{id:"rest-hookscore"},"@rest-hooks/core"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"buildInferredResult -> inferResults")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Error behavior"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useError() will no longer create synthetic errors for missing entities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("details",null,(0,r.kt)("summary",null,"useError() errorPolicy"),(0,r.kt)("h4",{parentName:"li",id:"endpointextraoptions"},"EndpointExtraOptions"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EndpointExtraOptions {\n  //...rest\n  errorPolicy?: (error: any) => 'soft' | undefined;\n}\n")),(0,r.kt)("h4",{parentName:"li",id:"soft-vs-undefined"},"'soft' vs ",(0,r.kt)("inlineCode",{parentName:"h4"},"undefined")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'soft' avoids errors if existing results are still available (even if stale)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," (hard error) means any error always falls")),(0,r.kt)("h4",{parentName:"li",id:"rest-hooksrest-1"},"@rest-hooks/rest"),(0,r.kt)("p",{parentName:"li"},"New default policy: 5xx are soft, else hard."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")," is where errors have 'status' members. This concept does not exist in base Endpoints."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return;\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")),(0,r.kt)("h4",{parentName:"li",id:"pollingsubscription"},"PollingSubscription"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"          // never break when data already exists\n          errorPolicy: () => 'soft' as const,\n")),(0,r.kt)("h4",{parentName:"li",id:"rest-hookslegacy---resource"},"@rest-hooks/legacy - Resource"),(0,r.kt)("p",{parentName:"li"},"Existing policy was to always be 'soft' no matter what. This maintains that behavior."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  /** @deprecated */\n  /** Get the request options for this SimpleResource  */\n  static getFetchOptions(): FetchOptions | undefined {\n    return {\n      errorPolicy: () => 'soft' as const,\n    };\n  }\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/pull/971"},"https://github.com/coinbase/rest-hooks/pull/971")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"polled fetch errors are always 'soft'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@rest-hooks/rest")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"5xx: 'soft'"),(0,r.kt)("li",{parentName:"ul"},"4xx, 3xx, etc: 'hard'"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"peerDep @rest-hooks/endpoint > 2"))),(0,r.kt)("h3",{id:"rest-hooks"},"rest-hooks"),(0,r.kt)("p",null,"Removed exports from 'rest-hooks': NestedEntity, schemas, isEntity, Entity, Resource, SimpleResource, SchemaDetail, SchemaList, Method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use @rest-hooks/legacy, or @rest-hooks/rest instead")),(0,r.kt)("h3",{id:"rest-hookslegacy"},"@rest-hooks/legacy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"peerDep @rest-hooks/endpoint > 2")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/releases/tag/rest-hooks%406.0.0"},"Full Release notes")))}h.isMDXComponent=!0}}]);