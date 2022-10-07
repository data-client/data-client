(self.webpackChunk=self.webpackChunk||[]).push([[93571],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60597:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),l=(n(70523),n(54514));const o={title:"schema.Union"},i=void 0,s={unversionedId:"api/Union",id:"version-5.1/api/Union",title:"schema.Union",description:"schema.Union - Representing a Union of possible types | Rest Hooks",source:"@site/rest_versioned_docs/version-5.1/api/Union.md",sourceDirName:"api",slug:"/api/Union",permalink:"/rest/5.1/api/Union",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Union.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"schema.Union"},sidebar:"docs",previous:{title:"schema.Array",permalink:"/rest/5.1/api/Array"},next:{title:"schema.Values",permalink:"/rest/5.1/api/Values"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Union - Representing a Union of possible types | Rest Hooks")),(0,a.kt)("p",null,"Describe a schema which is a union of multiple schemas. This is useful if you need the polymorphic behavior provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.Values")," but for non-collection fields."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," An object mapping the definition of the nested entities found within the input array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,a.kt)(l.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve([\n    { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    { id: 10, type: 'post', content: 'good day!' },\n  ]);\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\n\nconst feed = new Endpoint(sampleData, {\n  schema: [\n    new schema.Union(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ],\n});\n\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {feedItems.map(item =>\n        item.type === 'link' ? (\n          <LinkItem link={item} key={item.pk()} />\n        ) : (\n          <PostItem post={item} key={item.pk()} />\n        ),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),c=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:f,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:w}=(0,s.U)(),[x,N]=(0,a.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=h){const e=E[h];null!=e&&e!==x&&y.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),r=y[n].value;r!==x&&(Z(t),N(r),null!=h&&w(h,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=C.indexOf(e.currentTarget)+1;n=null!=(r=C[t])?r:C[0];break}case"ArrowLeft":{var a;const t=C.indexOf(e.currentTarget)-1;n=null!=(a=C[t])?a:C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:T,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ve});var r=n(67294),a=n(4391),l=n(12171),o=n(56265),i=n(78357),s=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends o.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const a=(0,p.Z)({path:t,schema:n,Endpoint:r}),l=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:l,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),v={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var y=n(87462),b=n(49544),k=n(86010),E=n(95999),w=n(52263),x=n(72389),N=n(66412),C=n(55423),Z=n(84195);const O="playgroundContainer_sLUA",T="row_YGZs",I="hidden_Hh8i",A="playgroundHeader_Zx4K",U="small_xksL",_="clickable_YHiX",P="noupper_WDCF",S="subtabs_XtJb",j="playgroundEditor_lYwu",D="arrow_tivA",F="vertical_OMeC",R="right_vs_C",L="left_iDcB",M="down_oRky",V="playgroundPreview_rk9R",$="playgroundError_sRnA",z="playgroundResult_tefG",q="debugToggle_zlro",B="tabControls_trxh",G="title_poUY",H="tabs_m54V",X="tab_bTGw",J="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(W,{fixture:e})))))}const K=(0,r.memo)(Y);function W(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,k.Z)(A,n,a?_:null),onClick:a},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ae=n(39714),le=n(7094),oe=n(12466),ie=n(91262),se=n(32041),ce=n(97723),ue=n(92949);function de(e){let{value:t}=e;const n="dark"===(0,ue.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:l,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?R:L;return r.createElement(r.Fragment,null,r.createElement("div",{className:q,onClick:t},"Store",r.createElement("span",{className:(0,k.Z)(D,l,F)},"\u25b6")),a?r.createElement(ye,null):null)}const ge=(0,r.memo)(he);function ve(){const e=(0,r.useContext)(se.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(de,{value:t})}const ye=(0,r.memo)(ve);function be(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;const{tabGroupChoices:o,setTabGroupChoices:i}=(0,le.U)(),[s,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,oe.o5)();if(null!=t){const e=o[t];null!=e&&e!==s&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),i(t,"y"===s?"n":"y")}),[u,t,s,i]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===s||!a);return r.createElement(ne.nq,{managers:p},r.createElement(ae.Z,{fixtures:l,silenceMissing:!0},r.createElement("div",{className:(0,k.Z)(V,{[I]:m})},r.createElement(ie.Z,{fallback:r.createElement(Ee,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(Ee,null)},r.createElement(b.i5,null),r.createElement(b.IF,{className:$}))))),r.createElement(ge,{selectedValue:s,toggle:d})))}const ke=(0,r.memo)(be);function Ee(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(E.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:z},r.createElement(ke,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}const xe=(0,r.memo)(we);function Ne(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(Z.Z);return r.createElement("div",{className:H,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,k.Z)(X,{[J]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function Ce(e){let{children:t}=e;return r.createElement(Q,{className:B},r.createElement("div",{className:G},t),r.createElement(Ne,null))}function Ze(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(Z.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:U},"Fixtures"),r.createElement(K,{fixtures:n})):null,l?r.createElement(Ce,null,t):null)}function Oe(e){let{children:t,transformCode:n,groupId:a,defaultOpen:l,row:o,hidden:i,fixtures:s,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,w.Z)().siteConfig.themeConfig,d=(0,N.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,C.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:C.ModuleKind.ESNext,target:C.ScriptTarget.ES2017,jsx:C.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,g]=(0,r.useReducer)(Ie,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),v=(0,r.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[E,Z]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,k.Z)(O,{[T]:o,[I]:i})},r.createElement(b.nu,(0,y.Z)({theme:d},c),r.createElement(Te,{reverse:"top"===u},r.createElement("div",null,r.createElement(Ze,{fixtures:s}),o&&f.length>1?r.createElement(_e,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:E,onClick:e=>Z((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!o&&n?r.createElement(Ue,{onClick:()=>Z((e=>{const n=[...e];return n[t]=!n[t],n})),closed:E[t],title:n}):null,E[t]?null:r.createElement(Ae,{key:`${p}-${t}`,className:j,onChange:v[t],code:h[t]}))}))),r.createElement(b.nu,(0,y.Z)({code:h.join("\n"),transformCode:m},c),r.createElement(xe,{groupId:a,defaultOpen:l,row:o,fixtures:s})))))}function Te(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ie(e,t){const n=[...e];return n[t.i]=t.code,n}Ze.defaultProps={title:r.createElement(E.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Oe.defaultProps={row:!1,hidden:!1},Te.defaultProps={reverse:!1};const Ae=(0,r.memo)(b.uz);function Ue(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(Q,{className:U,onClick:t},r.createElement("span",{className:(0,k.Z)(D,n?R:M)},"\u25b6"),a)}function _e(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(Z.Z),o=l.length>0;return r.createElement(Q,{className:(0,k.Z)({[U]:o,[S]:o},P,B)},r.createElement("div",{className:H,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,k.Z)(X,{[J]:!n[t]})},e)))))}var Pe=n(64146),Se=n(82026);class je extends o.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}je.schema={updatedAt:Date};const De=new a.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:je});const Fe={...v,getList:v.getList.extend({process:e=>e.slice(0,7)})},Re={...l,...i,...c,...s,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:De,TimedEntity:je,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,a]=r.useState(0),{resetEntireStore:l}=(0,Pe.Z)();return r.createElement(Se.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:$},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{l(),a((e=>e+1))}},"Clear Error"))}},t)}},Le={...Re,Todo:f,TodoResource:Fe,TodoEndpoint:h},Me=e=>{let{children:t,endpointCode:n,groupId:a,hidden:l=!1,defaultOpen:o,row:i=!1,fixtures:s}=e;return r.createElement(Oe,{scope:n||Array.isArray(t)?Re:Le,noInline:!0,groupId:a,defaultOpen:o,row:i,hidden:l,fixtures:s},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};Me.defaultProps={defaultOpen:"n",fixtures:[]};const Ve=(0,r.memo)(Me)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294);function o(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);