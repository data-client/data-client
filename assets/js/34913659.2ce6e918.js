"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79409],{30433:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),s=n(5730),l=n(20636),o=n(76602),p=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:n,block:s,defaultValue:c,values:m,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[R,w]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==R&&y.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=y[n].value;a!==R&&(E(t),w(a),null!=h&&N(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},k)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:I},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":R===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},47885:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65559),r=n(30433),i=n(67294);function s(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}},98658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(47885);const s={id:"resource",title:"Resource"},l=void 0,o={unversionedId:"api/resource",id:"version-5.0/api/resource",title:"Resource",description:"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.",source:"@site/versioned_docs/version-5.0/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/docs/5.0/api/resource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Resource.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{id:"resource",title:"Resource"},sidebar:"version-5.0/docs",previous:{title:"Endpoint",permalink:"/docs/5.0/api/Endpoint"},next:{title:"Index",permalink:"/docs/5.0/api/"}},p={},u=[{value:"Static",id:"static",level:3},{value:"Instance",id:"instance",level:3},{value:"Factory method",id:"factory-method",level:2},{value:"static fromJS&lt;T extends typeof Resource&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet",level:3},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",level:2},{value:"pk: (parent?: any, key?: string) =&gt; string",id:"pk-parent-any-key-string--string",level:3},{value:"Multi-column primary key:",id:"multi-column-primary-key",level:4},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Resources",id:"singleton-resources",level:4},{value:"static urlRoot: string",id:"static-urlroot-string",level:3},{value:"static get key(): string",id:"static-get-key-string",level:3},{value:"Static network methods and properties",id:"static-network-methods-and-properties",level:2},{value:"static url&lt;T extends typeof Resource&gt;(urlParams: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;) =&gt; string",id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string",level:3},{value:"static listUrl(searchParams: Readonly&lt;Record&lt;string, string&gt;&gt;) =&gt; string",id:"static-listurlsearchparams-readonlyrecordstring-string--string",level:3},{value:"static fetch(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;any&gt;",id:"static-fetchinput-requestinfo-init-requestinit--promiseany",level:3},{value:"static fetchResponse(input: RequestInfo, init: RequestInit) =&gt; Promise&lt;Response&gt;",id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse",level:3},{value:"static useFetchInit(init: RequestInit): RequestInit",id:"static-usefetchinitinit-requestinit-requestinit",level:3},{value:"static getFetchInit(init: RequestInit): RequestInit",id:"static-getfetchinitinit-requestinit-requestinit",level:3},{value:"static getEndpointExtra() =&gt; EndpointExtraOptions | undefined",id:"static-getendpointextra--endpointextraoptions--undefined",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"detail(): Endpoint",id:"detail-endpoint",level:3},{value:"Implementation:",id:"implementation",level:4},{value:"list(): Endpoint",id:"list-endpoint",level:3},{value:"Implementation:",id:"implementation-1",level:4},{value:"create(): Endpoint",id:"create-endpoint",level:3},{value:"Implementation:",id:"implementation-2",level:4},{value:"update(): Endpoint",id:"update-endpoint",level:3},{value:"Implementation:",id:"implementation-3",level:4},{value:"partialUpdate(): Endpoint",id:"partialupdate-endpoint",level:3},{value:"Implementation:",id:"implementation-4",level:4},{value:"delete(): Endpoint",id:"delete-endpoint",level:3},{value:"Implementation:",id:"implementation-5",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is an ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity")," with multiple ",(0,r.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse."),(0,r.kt)("p",null,"For other patterns, feel free to use ",(0,r.kt)("a",{parentName:"p",href:"./Endpoint"},"Endpoint"),"s on their own or in any other way you see fit."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity")),(0,r.kt)("p",null,"Package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,r.kt)("p",null,"There are two sides to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," definition - the static and instance side."),(0,r.kt)("h3",{id:"static"},"Static"),(0,r.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint"),"s, which\ntell the ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/useresource"},"hooks")," how to process requests. Endpoints are provided for the\ncommon ",(0,r.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,r.kt)("p",null,"Resource extends from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"),", which includes many static methods defining how to process\nnetwork data to ensure performance and consistency. ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"Deserilization"),"\nfor instance can be done using the ",(0,r.kt)("a",{parentName:"p",href:"./Entity#static-schema--k-keyof-this-schema-"},"static schema"),"."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as all the data members\nare immutable (this library enforces that)!"),(0,r.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,r.kt)("p",null,"A final note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof Resource",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,r.kt)("p",null,"This is used to create new entities when normalizing data. These are stored in the entities cache."),(0,r.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,r.kt)("h3",{id:"pk-parent-any-key-string--string"},"pk: (parent?: any, key?: string) => string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk(parent?: any, key?: string) {\n  return [this.firstCol, this.secondCol, this.thirdCol].join(',');\n}\n")),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"./api/resource#static-fromjst-extends-typeof-resourcethis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Resource.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => <TheThing key={result.pk()} thing={result} />)}\n  </div>\n)\n")),(0,r.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,r.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"static-urlroot-string"},"static urlRoot: string"),(0,r.kt)("p",null,"Used to build url patterns in ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,r.kt)("a",{parentName:"p",href:"#static-get-key-string"},"key")," so typically you'll want this to be globally unique per Resource."),(0,r.kt)("h3",{id:"static-get-key-string"},"static get key(): string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"./Entity"},"Entity"))),(0,r.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic get key(): string {\n  return this.urlRoot;\n}\n")),(0,r.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,r.kt)("p",null,"These are the basic building blocks used to compile the ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint"},"Endpoint")," below."),(0,r.kt)("h3",{id:"static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"static url\\<T extends typeof Resource",">","(urlParams: Partial\\<AbstractInstanceType\\<T",">",">",") => string"),(0,r.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,r.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),", ",(0,r.kt)("a",{parentName:"p",href:"#update-endpoint"},"update()"),",\n",(0,r.kt)("a",{parentName:"p",href:"#partialupdate-endpoint"},"partialUpdate()"),", and ",(0,r.kt)("a",{parentName:"p",href:"#delete-endpoint"},"delete()")),(0,r.kt)("h3",{id:"static-listurlsearchparams-readonlyrecordstring-string--string"},"static listUrl(searchParams: Readonly\\<Record\\<string, string>>) => string"),(0,r.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()")," and ",(0,r.kt)("a",{parentName:"p",href:"#create-endpoint"},"create()")),(0,r.kt)("h3",{id:"static-fetchinput-requestinfo-init-requestinit--promiseany"},"static fetch(input: RequestInfo, init: RequestInit) => Promise\\<any",">"),(0,r.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,r.kt)("h3",{id:"static-fetchresponseinput-requestinfo-init-requestinit--promiseresponse"},"static fetchResponse(input: RequestInfo, init: RequestInit) => Promise\\<Response",">"),(0,r.kt)("p",null,"Used in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,r.kt)("h3",{id:"static-usefetchinitinit-requestinit-requestinit"},"static useFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called in endpoint methods (",(0,r.kt)("a",{parentName:"p",href:"#list-endpoint"},"list()"),", ",(0,r.kt)("a",{parentName:"p",href:"#detail-endpoint"},"detail()"),"), which allows for hooks that\nuse React context."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h3",{id:"static-getfetchinitinit-requestinit-requestinit"},"static getFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called during the fetch callback. Don't use hooks here."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h3",{id:"static-getendpointextra--endpointextraoptions--undefined"},"static getEndpointExtra() => EndpointExtraOptions | undefined"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/Endpoint#dataexpirylength-number"},"Returns")," the default request options for this resource. By default this returns undefined"),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"These provide the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,r.kt)("a",{parentName:"p",href:"../api/Endpoint"},"endpoints"),"s common in ",(0,r.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,r.kt)("h3",{id:"detail-endpoint"},"detail(): Endpoint"),(0,r.kt)("p",null,"A GET request using standard ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static detail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"list-endpoint"},"list(): Endpoint"),(0,r.kt)("p",null,"A GET request using ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static list<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"create-endpoint"},"create(): Endpoint"),(0,r.kt)("p",null,"A POST request sending a payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-listurlsearchparams-readonlyrecordstring-string--string"},"listUrl()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static create<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"update-endpoint"},"update(): Endpoint"),(0,r.kt)("p",null,"A PUT request sending a payload to a ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static update<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"partialupdate-endpoint"},"partialUpdate(): Endpoint"),(0,r.kt)("p",null,"A PATCH request sending a partial payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static partialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"delete-endpoint"},"delete(): Endpoint"),(0,r.kt)("p",null,"A DELETE request sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/api/useFetcher"},"useFetcher")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#static-urlt-extends-typeof-resourceurlparams-partialabstractinstancetypet--string"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../api/useresource"},"useResource()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.0/api/useRetrieve"},"useRetrieve()"))),(0,r.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static delete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);