"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(70523);const s={id:"resource",title:"Resource"},l=void 0,o={unversionedId:"api/resource",id:"version-5.0/api/resource",title:"Resource",description:"Resource is an Entity with multiple Endpoints that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse.",source:"@site/rest_versioned_docs/version-5.0/api/Resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/rest/5.0/api/resource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Resource.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662253116,formattedLastUpdatedAt:"Sep 4, 2022",frontMatter:{id:"resource",title:"Resource"},sidebar:"docs",previous:{title:"Custom networking library",permalink:"/rest/5.0/guides/custom-networking"},next:{title:"BaseResource",permalink:"/rest/5.0/api/BaseResource"}},p={},u=[{value:"Static",id:"static",level:3},{value:"Instance",id:"instance",level:3},{value:"Factory method",id:"factory-method",level:2},{value:"fromJS(props): Resource",id:"fromJS",level:3},{value:"Be sure to always provide:",id:"be-sure-to-always-provide",level:2},{value:"pk: (parent, key) =&gt; string",id:"pk",level:3},{value:"Multi-column primary key:",id:"multi-column-primary-key",level:4},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Resources",id:"singleton-resources",level:4},{value:"static urlRoot: string",id:"urlRoot",level:3},{value:"static get key(): string",id:"key",level:3},{value:"Static network methods and properties",id:"static-network-methods-and-properties",level:2},{value:"static url(urlParams) =&gt; string",id:"url",level:3},{value:"static listUrl(searchParams) =&gt; string",id:"listUrl",level:3},{value:"static fetch(requestInfo, requestInit) =&gt; Promise",id:"fetch",level:3},{value:"static fetchResponse(requestInfo, requestInit) =&gt; Promise",id:"fetchResponse",level:3},{value:"static getFetchInit(init: RequestInit): RequestInit",id:"getFetchInit",level:3},{value:"static getEndpointExtra() =&gt; EndpointExtraOptions | undefined",id:"getEndpointExtra",level:3},{value:"Endpoints",id:"endpoints",level:2},{value:"detail(): Endpoint",id:"detail",level:3},{value:"Implementation:",id:"implementation",level:4},{value:"list(): Endpoint",id:"list",level:3},{value:"Implementation:",id:"implementation-1",level:4},{value:"create(): Endpoint",id:"create",level:3},{value:"Implementation:",id:"implementation-2",level:4},{value:"update(): Endpoint",id:"update",level:3},{value:"Implementation:",id:"implementation-3",level:4},{value:"partialUpdate(): Endpoint",id:"partialUpdate",level:3},{value:"Implementation:",id:"implementation-4",level:4},{value:"delete(): Endpoint",id:"delete",level:3},{value:"Implementation:",id:"implementation-5",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," is an ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity"},"Entity")," with multiple ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint"),"s that operate on the data. All additional members are provided to make CRUD or other REST-like API definitions easy and terse."),(0,r.kt)("p",null,"For other patterns, feel free to use ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint"),"s on their own or in any other way you see fit."),(0,r.kt)(i.Z,{mdxType:"LanguageTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class ArticleResource extends Resource {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = 'http://test.com/article/';\n}\n"))),(0,r.kt)("admonition",{title:"extends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," extends ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("p",null,"Package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,r.kt)("p",null,"There are two sides to ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," definition - the static and instance side."),(0,r.kt)("h3",{id:"static"},"Static"),(0,r.kt)("p",null,"Is used to define how you retrieve and mutate data across the network. There are several\nstatic methods that do this, but their ultimate purpose is to build ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint"),"s, which\ntell the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"hooks")," how to process requests. Endpoints are provided for the\ncommon ",(0,r.kt)("inlineCode",{parentName:"p"},"REST")," request types. However, it is encouraged to build your own or override the\nprovided ones to fit the needs of your API."),(0,r.kt)("p",null,"Resource extends from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource")," which extends from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity"},"Entity"),", which includes many static methods defining how to process\nnetwork data to ensure performance and consistency. ",(0,r.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"Deserilization"),"\nfor instance can be done using the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity#schema"},"static schema"),"."),(0,r.kt)("h3",{id:"instance"},"Instance"),(0,r.kt)("p",null,"Instances are mostly for you to define how you want to interact with your data. This means\nyou should start off by defining the fields you expect to see, and provide defaults in case\nthey are not sent for some reason. ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," also requires that you define a method to\nget an entity's (entity is an instance of a Resource) unique identifier. (This is used for\nbook-keeping the normalized cache.) Make sure to mark all members as readonly as all the data members\nare immutable (this library enforces that)!"),(0,r.kt)("p",null,"You are encouraged to add your own member methods. Often times it is useful to provide\nmethods for computed values that are commonly used in your React components."),(0,r.kt)("p",null,"A final note: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource")," provides a factory method called ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJS()")," that will be used\nto construct instances. This is the only supported way of created ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),"s so please\ndon't use constructors."),(0,r.kt)("h2",{id:"factory-method"},"Factory method"),(0,r.kt)("h3",{id:"fromJS"},"fromJS(props): Resource"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity"},"Entity"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"static fromJS<T extends typeof SimpleRecord>(this: T, props: Partial<AbstractInstanceType<T>>): AbstractInstanceType<T>\n")),(0,r.kt)("p",null,"Factory method called during denormalization. Use this instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"new MyEntity()")),(0,r.kt)("h2",{id:"be-sure-to-always-provide"},"Be sure to always provide:"),(0,r.kt)("h3",{id:"pk"},"pk: (parent, key) => string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity#pk"},"Entity"))),(0,r.kt)("p",null,"PK stands for ",(0,r.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Resource"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,r.kt)("h4",{id:"multi-column-primary-key"},"Multi-column primary key:"),(0,r.kt)("p",null,"Sometimes you have a resource that doesn't have its own primary key. This is typically found in ",(0,r.kt)("inlineCode",{parentName:"p"},"join tables")," that express ",(0,r.kt)("inlineCode",{parentName:"p"},"many-to-many")," relationships."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class VoteResource extends Resource {\n  readonly userId: number | undefined = undefined;\n  readonly postId: number | undefined = undefined;\n  readonly createdAt: string = '1900-01-01T01:01:01Z';\n\n  pk() {\n    return [this.userId, this.postId].join(',');\n  }\n  static urlRoot = 'https://example.com/votes/';\n}\n")),(0,r.kt)("h4",{id:"undefined-value"},"undefined value"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the resource has not been created yet.\nThis is useful when initializing a creation form using ",(0,r.kt)("a",{parentName:"p",href:"#fromJS"},"Resource.fromJS()"),"\ndirectly. If ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,r.kt)("h4",{id:"other-uses"},"Other uses"),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,r.kt)("h4",{id:"singleton-resources"},"Singleton Resources"),(0,r.kt)("p",null,"What if there is only ever once instance of a Resource for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,r.kt)("h3",{id:"urlRoot"},"static urlRoot: string"),(0,r.kt)("p",null,"Used to build url patterns in ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()"),". Used as the default in\n",(0,r.kt)("a",{parentName:"p",href:"#key"},"key")," so typically you'll want this to be globally unique per Resource."),(0,r.kt)("h3",{id:"key"},"static get key(): string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Entity#key"},"Entity"))),(0,r.kt)("p",null,"This defines the key for the Resource itself, rather than an instance. As seen below, by default it\nsimply returns the urlRoot since this is typically globally unique. However if you want to share\nurlRoot across different Resources, be sure to override this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/** Returns the globally unique identifier for this Resource */\nstatic get key(): string {\n  return this.urlRoot;\n}\n")),(0,r.kt)("h2",{id:"static-network-methods-and-properties"},"Static network methods and properties"),(0,r.kt)("p",null,"These are the basic building blocks used to compile the ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"Endpoint")," below."),(0,r.kt)("h3",{id:"url"},"static url(urlParams) => string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"static url<T extends typeof Resource>(urlParams: Partial<AbstractInstanceType<T>>) => string\n")),(0,r.kt)("p",null,"Computes the url based on the parameters. Default implementation follows ",(0,r.kt)("inlineCode",{parentName:"p"},"/urlRoot/[pk]")," pattern."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#detail"},"detail()"),", ",(0,r.kt)("a",{parentName:"p",href:"#update"},"update()"),",\n",(0,r.kt)("a",{parentName:"p",href:"#partialUpdate"},"partialUpdate()"),", and ",(0,r.kt)("a",{parentName:"p",href:"#delete"},"delete()")),(0,r.kt)("h3",{id:"listUrl"},"static listUrl(searchParams) => string"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"static listUrl(searchParams: Readonly<Record<string, string>>) => string\n")),(0,r.kt)("p",null,"Computes url for retrieving list items. Defaults to urlRoot with ",(0,r.kt)("inlineCode",{parentName:"p"},"searchParams")," being sent as GET\nparameters."),(0,r.kt)("p",null,"Used in ",(0,r.kt)("a",{parentName:"p",href:"#list"},"list()")," and ",(0,r.kt)("a",{parentName:"p",href:"#create"},"create()")),(0,r.kt)("h3",{id:"fetch"},"static fetch(requestInfo, requestInit) => Promise"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"static fetch(info: RequestInfo, init: RequestInit) => Promise<any>\n")),(0,r.kt)("p",null,"Performs the actual network fetch returning a promise that resolves to the network response or rejects\non network error. This can be useful to override to really customize your transport."),(0,r.kt)("h3",{id:"fetchResponse"},"static fetchResponse(requestInfo, requestInit) => Promise"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"static fetchResponse(info: RequestInfo, init: RequestInit) => Promise<any>\n")),(0,r.kt)("p",null,"Used in ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()"),". Resolves the HTTP ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"),"."),(0,r.kt)("h3",{id:"getFetchInit"},"static getFetchInit(init: RequestInit): RequestInit"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("p",null,"Allows simple overrides to extend ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},"RequestInit")," sent to fetch.\nThis is called during the fetch callback. Don't use hooks here."),(0,r.kt)("p",null,"This is often useful for ",(0,r.kt)("a",{parentName:"p",href:"../guides/auth"},"authentication")),(0,r.kt)("h3",{id:"getEndpointExtra"},"static getEndpointExtra() => EndpointExtraOptions | undefined"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/BaseResource"},"BaseResource"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint#dataexpirylength"},"Returns")," the default request options for this resource. By default this returns undefined"),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)("p",null,"These provide the standard ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD"),"\n",(0,r.kt)("a",{parentName:"p",href:"/rest/5.0/api/Endpoint"},"endpoints"),"s common in ",(0,r.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/"},"REST")," APIs. Feel free to customize or add\nnew endpoints based to match your API."),(0,r.kt)("h3",{id:"detail"},"detail(): Endpoint"),(0,r.kt)("p",null,"A GET request using standard ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," that receives a detail body.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#url"},"url()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static detail<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#detail', () =>\n    this.endpoint().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"list"},"list(): Endpoint"),(0,r.kt)("p",null,"A GET request using ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," that receives a list of entities.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uses ",(0,r.kt)("a",{parentName:"li",href:"#listUrl"},"listUrl()")),(0,r.kt)("li",{parentName:"ul"},"Compatible with all hooks")),(0,r.kt)("h4",{id:"implementation-1"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static list<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#list', () =>\n    this.endpoint().extend({\n      schema: [this] as SchemaList<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"create"},"create(): Endpoint"),(0,r.kt)("p",null,"A POST request sending a payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"listUrl()")," with empty params, and expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#listUrl"},"listUrl()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-2"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static create<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#create', () =>\n    this.endpointMutate().extend({\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n      url: this.listUrl.bind(this),\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"update"},"update(): Endpoint"),(0,r.kt)("p",null,"A PUT request sending a payload to a ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-3"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static update<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#update', () =>\n    this.endpointMutate().extend({\n      method: 'PUT',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"partialUpdate"},"partialUpdate(): Endpoint"),(0,r.kt)("p",null,"A PATCH request sending a partial payload to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()")," expecting a detail body response.\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-4"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static partialUpdate<T extends typeof SimpleResource>(this: T) {\n  return this.memo('#partialUpdate', () =>\n    this.endpointMutate().extend({\n      method: 'PATCH',\n      schema: this as SchemaDetail<Readonly<AbstractInstanceType<T>>>,\n    }),\n  );\n}\n")),(0,r.kt)("h3",{id:"delete"},"delete(): Endpoint"),(0,r.kt)("p",null,"A DELETE request sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"url()"),"\nMostly useful with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,r.kt)("p",null,"Uses ",(0,r.kt)("a",{parentName:"p",href:"#url"},"url()")),(0,r.kt)("p",null,"Not compatible with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useSuspense"},"useSuspense()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/useFetch"},"useFetch()"))),(0,r.kt)("h4",{id:"implementation-5"},"Implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static delete<T extends typeof SimpleResource>(this: T) {\n  const endpoint = this.endpointMutate();\n  return this.memo('#delete', () =>\n    endpoint.extend({\n      fetch(params: Readonly<object>) {\n        return endpoint.fetch.call(this, params).then(() => params);\n      },\n      method: 'DELETE',\n      schema: new schema.Delete(this),\n    }),\n  );\n}\n")))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),s=n(72389),l=n(67392),o=n(7094),p=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:s,block:c,defaultValue:m,values:h,groupId:k,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:R}=(0,o.U)(),[w,E]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=b[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==w&&(I(t),E(a),null!=k&&R(k,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:S,onClick:S},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65488),r=n(85162),i=n(67294);function s(e){let{children:t}=e;return i.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},i.createElement(r.Z,{value:"ts"},t[0]),i.createElement(r.Z,{value:"js"},t[1]))}}}]);