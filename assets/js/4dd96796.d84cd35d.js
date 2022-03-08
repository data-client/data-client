(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[96586],{84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},70720:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he});var a=n(67294),r=n(24861),i=n(88300),l=n(71481),s=n(42910),o=n(99876),u=n(63312),c=n(33186),d=n(52803),m=n(44431),p=n.n(m),h=n(49909),k=n(53775);class f extends k.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}static partialUpdate(){const e=super.partialUpdate();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:t.id})})}static create(){const e=super.create();return e.extend({fetch:async(t,n)=>({...await e(t,n),id:n.id})})}}class g extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t){return e.updatedAt<=t.updatedAt}static endpointMutate(){const e=super.endpointMutate();return e.extend({getFetchInit(t){return t&&(t={...t,updatedAt:Date.now()}),e.getFetchInit.call(this,t)}})}static partialUpdate(){return super.partialUpdate().extend({schema:this,optimisticUpdater:y})}static create(){const e=this.list().key({});return super.create().extend({schema:this,optimisticUpdater:b,update:t=>({[e]:function(e){return void 0===e&&(e=[]),[...e,t]}})})}static delete(){return super.delete().extend({schema:new h.Z(this),optimisticUpdater:v})}}g.urlRoot="/api/todos";const y=(e,t,n)=>({id:t.id,...e.getResponse(g.detail(),{id:t.id}).data,...n,updatedAt:e.fetchedAt}),b=(e,t,n)=>({...n,updatedAt:e.fetchedAt}),v=(e,t)=>({...t,updatedAt:e.fetchedAt});var E=n(87462),w=n(10407),N=n(86010),I=n(95999),x=n(52263),C=n(72389),T=n(45860),Z=n(55423),P=n(84195),A=n(58699),V=n(28808),L=n(16909),S=n(28224),U=n(91262);const D="playgroundContainer_sLUA",F="row_YGZs",O="hidden_Hh8i",j="playgroundHeader_Zx4K",M="playgroundEditor_lYwu",R="playgroundPreview_rk9R",_="playgroundResult_tefG",H="debugToggle_zlro",$="tabControls_trxh",B="tabs_m54V",z="tab_bTGw",G="selected_QXZk";var q=n(60522),J=n(83552);function X(e){let{value:t}=e;const{isDarkTheme:n}=(0,T.If)(),r=(0,a.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]);return a.createElement(J.L,{shouldExpandNode:K,data:t,theme:{tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:r[t]}}},base0B:"rgb(191, 199, 213)"}})}function K(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}function Y(e){let{toggle:t,selectedValue:n}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:H,onClick:t},"Store"),"y"===n?a.createElement(ee,null):null)}const Q=(0,a.memo)(Y);function W(){const e=(0,a.useContext)(q.sA),t=(0,a.useMemo)((()=>{const t={...e};return delete t.optimistic,delete t.lastReset,t}),[e]);return a.createElement(X,{value:t})}const ee=(0,a.memo)(W);function te(e){let{groupId:t,defaultOpen:n,row:r}=e;const{tabGroupChoices:i,setTabGroupChoices:l}=(0,T.UB)(),[s,o]=(0,a.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,T.o5)();if(null!=t){const e=i[t];null!=e&&e!==s&&o(e)}const c=(0,a.useCallback)((e=>{u(e.currentTarget),o((e=>"y"===e?"n":"y")),l(t,"y"===s?"n":"y")}),[u,t,s,l]),d=(0,a.useMemo)((()=>[new S.Z,new A.Z(V.Z)]),[]),m=!("n"===s||!r);return a.createElement(L.nq,{managers:d},a.createElement("div",{className:(0,N.Z)(R,{[O]:m})},a.createElement(U.Z,{fallback:a.createElement(ae,null)},(()=>a.createElement(a.Suspense,{fallback:a.createElement(ae,null)},a.createElement(w.i5,null),a.createElement(w.IF,null))))),a.createElement(Q,{selectedValue:s,toggle:c}))}const ne=(0,a.memo)(te);function ae(){return a.createElement("div",null,"Loading...")}function re(e){let{children:t,className:n}=e;return a.createElement("div",{className:(0,N.Z)(j,n)},t)}function ie(e){let{groupId:t,defaultOpen:n,row:r}=e;return a.createElement("div",null,a.createElement(re,null,a.createElement(I.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:_},a.createElement(ne,{groupId:t,defaultOpen:n,row:r})))}function le(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(P.Z);return a.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:i}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,N.Z)(z,{[G]:e===r}),onFocus:t,onClick:t,value:r},i)})))}function se(e){let{children:t}=e;return a.createElement(re,{className:$},a.createElement("div",null,t),a.createElement(le,null))}function oe(e){let{title:t}=e;const{values:n}=(0,a.useContext)(P.Z),r=n.length>0,i=(0,C.Z)();return a.createElement("div",null,r?a.createElement(se,null,t):a.createElement(re,null,t),a.createElement(w.uz,{key:i,className:M}))}function ue(e){let{children:t,transformCode:n,groupId:r,defaultOpen:i,row:l,hidden:s=!1,...o}=e;const{siteConfig:{themeConfig:{liveCodeBlock:{playgroundPosition:u}}}}=(0,x.Z)(),c=(0,T.pJ)();o.scope;return a.createElement("div",{className:(0,N.Z)(D,{[F]:l,[O]:s})},a.createElement(w.nu,(0,E.Z)({code:t.replace(/\n$/,""),transformCode:n||(e=>(e=>Z.transpileModule(e,{compilerOptions:{module:Z.ModuleKind.ESNext,target:Z.ScriptTarget.ES5,jsx:"react"}}).outputText)(`${e};`)),transpileOptions:{target:{chrome:71},transforms:{classes:!1,letConst:!1,getterSetter:!1,generator:!1,asyncAwait:!1,moduleImport:!1,moduleExport:!1}},theme:c},o),"top"===u?a.createElement(a.Fragment,null,a.createElement(ie,{groupId:r,defaultOpen:i,row:l}),a.createElement(oe,null)):a.createElement(a.Fragment,null,a.createElement(oe,null),a.createElement(ie,{groupId:r,defaultOpen:i,row:l}))))}oe.defaultProps={title:a.createElement(I.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")},ue.defaultProps={row:!1};class ce extends u.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}ce.schema={updatedAt:Date};const de=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:ce});const me={...r,...o,...d,...c,mockFetch:function(e,t,n){void 0===n&&(n=150);const a=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return new Promise((t=>setTimeout((()=>t(e(...a))),n)))};return t&&Object.defineProperty(a,"name",{value:t,writable:!1}),a},BigNumber:p(),lastUpdated:de,TimedEntity:ce,CurrentTime:function(){const[e,t]=(0,a.useState)((()=>new Date));return(0,a.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),a.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=a.useState(0),{resetEntireStore:i}=l.Z();return a.createElement(s.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",null,t.message," ",a.createElement("i",null,t.status)),a.createElement("button",{onClick:()=>{i(),r((e=>e+1))}},"Clear Error"))}},t)},TodoResource:class extends g{static list(){const e=super.list();return e.extend({async fetch(){return(await e(...arguments)).slice(0,5)}})}}},pe=e=>{let{children:t,groupId:n,hidden:r=!1,defaultOpen:i="n",row:l=!1}=e;return a.createElement(ue,{scope:me,noInline:!0,groupId:n,defaultOpen:i,row:l,hidden:r},"string"==typeof t?t:t.props.children.props.children)},he=(0,a.memo)(pe)},70523:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(9877),r=n(58215),i=n(67294);function l(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},84750:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(27378),n(3905)),i=(n(70523),n(70720));const l={title:"schema.Values"},s=void 0,o={unversionedId:"api/Values",id:"api/Values",title:"schema.Values",description:"schema.Values - Representing Objects with arbitrary keys | Rest Hooks",source:"@site/../docs/api/Values.md",sourceDirName:"api",slug:"/api/Values",permalink:"/docs/next/api/Values",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Values.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1635114033,formattedLastUpdatedAt:"10/24/2021",frontMatter:{title:"schema.Values"},sidebar:"docs",previous:{title:"schema.Union",permalink:"/docs/next/api/Union"},next:{title:"schema.Delete",permalink:"/docs/next/api/Delete"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:2},{value:"Usage",id:"usage",level:2},{value:"Dynamic entity types",id:"dynamic-entity-types",level:3},{value:"string schemaAttribute",id:"string-schemaattribute",level:4},{value:"function schemaAttribute",id:"function-schemaattribute",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"schema.Values - Representing Objects with arbitrary keys | Rest Hooks")),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"./Array"},"Array"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Values")," are unbounded in size. The definition here describes the types of values to expect,\nwith keys being any string."),(0,r.kt)("p",null,"Describes a map whose values follow the given schema."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,r.kt)("strong",{parentName:"li"},"required")," A singular schema that this array contains ",(0,r.kt)("em",{parentName:"li"},"or")," a mapping of schema to attribute values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schemaAttribute"),": ",(0,r.kt)("em",{parentName:"li"},"optional")," (required if ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," is not a singular schema) The attribute on each entity found that defines what schema, per the definition mapping, to use when normalizing.\nCan be a string or a function. If given a function, accepts the following arguments:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The input value of the entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent"),": The parent object of the input array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": The key at which the input array appears on the parent object.")))),(0,r.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,r.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Values")," constructor. This method tends to be useful for creating circular references in schema.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ firstThing: { id: 1 }, secondThing: { id: 2 } });\n\nclass Item extends Entity {\n  readonly id: number = 0;\n  pk() {\n    return `${this.id}`;\n  }\n}\nconst itemValues = new Endpoint(sampleData, {\n  schema: new schema.Values(Item),\n});\nfunction ItemPage() {\n  const items = useSuspense(itemValues, {});\n  return <pre>{JSON.stringify(items, undefined, 2)}</pre>;\n}\nrender(<ItemPage />);\n"))),(0,r.kt)("h3",{id:"dynamic-entity-types"},"Dynamic entity types"),(0,r.kt)("p",null,"If your input data is an object that has values of more than one type of entity, but their schema is not easily defined by the key, you can use a mapping of schema, much like ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Union")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.Array"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If your data returns an object that you did not provide a mapping for, the original object will be returned in the result and an entity will not be created.")),(0,r.kt)("h4",{id:"string-schemaattribute"},"string schemaAttribute"),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        link: Link,\n        post: Post,\n      },\n      'type',\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))),(0,r.kt)("h4",{id:"function-schemaattribute"},"function schemaAttribute"),(0,r.kt)("p",null,"The return values should match a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"definition"),". Here we'll show the same behavior as the 'string'\ncase, except we'll append an 's'."),(0,r.kt)(i.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({\n    firstLink: { id: 1, type: 'link', url: 'https://ntucker.true.io', title: 'Nate site' },\n    greatPost: { id: 10, type: 'post', content: 'good day!' },\n  });\n\nabstract class FeedItem extends Entity {\n  readonly id: number = 0;\n  declare readonly type: 'link' | 'post';\n  pk() {\n    return `${this.id}`;\n  }\n}\nclass Link extends FeedItem {\n  readonly type = 'link' as const;\n  readonly url: string = '';\n  readonly title: string = '';\n}\nclass Post extends FeedItem {\n  readonly type = 'post' as const;\n  readonly content: string = '';\n}\nconst feed = new Endpoint(sampleData, {\n  schema:\n    new schema.Values(\n      {\n        links: Link,\n        posts: Post,\n      },\n(input: any, parent: unknown, key: string) => `${input.type}s`,\n    ),\n  ,\n});\nfunction FeedList() {\n  const feedItems = useSuspense(feed, {});\n  return (\n    <div>\n      {Object.entries(feedItems).map(([key, item]) =>\n        (<div key={item.pk()}>{key}: {item.type === 'link' ? (\n           <LinkItem link={item} />\n        ) : (\n          <PostItem post={item} />\n        )}</div>),\n      )}\n    </div>\n  );\n}\nfunction LinkItem({ link }: { link: Link }) {\n  return <a href={link.url}>{link.title}</a>;\n}\nfunction PostItem({ post }: { post: Post }) {\n  return <div>{post.content}</div>;\n}\nrender(<FeedList />);\n"))))}m.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);