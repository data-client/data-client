"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Entity"},s=void 0,l={unversionedId:"api/Entity",id:"version-2.2/api/Entity",title:"Entity",description:"Entity extends SimpleRecord",source:"@site/versioned_docs/version-2.2/api/Entity.md",sourceDirName:"api",slug:"/api/Entity",permalink:"/docs/2.2/api/Entity",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Entity.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Entity"}},o={},c=[{value:"Methods",id:"methods",level:2},{value:"static fromJS&lt;T extends typeof SimpleRecord&gt;(this: T, props: Partial&lt;AbstractInstanceType&lt;T&gt;&gt;): AbstractInstanceType&lt;T&gt;",id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet",level:3},{value:"abstract pk: (parent?: any, key?: string): string | number | undefined",id:"abstract-pk-parent-any-key-string-string--number--undefined",level:3},{value:"undefined value",id:"undefined-value",level:4},{value:"Other uses",id:"other-uses",level:4},{value:"Singleton Entities",id:"singleton-entities",level:4},{value:"static get key(): string",id:"static-get-key-string",level:3},{value:"static merge(existing, incoming): mergedValue",id:"static-mergeexisting-incoming-mergedvalue",level:3},{value:"Example",id:"example",level:4},{value:"static indexes?: (keyof this)[]",id:"static-indexes-keyof-this",level:3},{value:"useResource()",id:"useresource",level:4},{value:"useCache()",id:"usecache",level:4},{value:"static schema: { k: keyof this: Schema }",id:"static-schema--k-keyof-this-schema-",level:3},{value:"Optional members",id:"optional-members",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly tags: string[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Entity } from 'rest-hooks';\n\nexport default class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = null;\n  tags = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static get key() {\n    return 'Article';\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," extends ",(0,a.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is an abstract base class used to define data with some form of primary key (or ",(0,a.kt)("inlineCode",{parentName:"p"},"pk")," for short).\nWhen representing data from a relational database, this makes an Entity roughly map 1:1 with a table, where\neach row represents an instance of the Entity."),(0,a.kt)("p",null,"By defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," member, Rest Hooks will normalize entities, ensuring consistency and improve performance\nby increasing cache hit rates."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For common REST patterns, inheriting from ",(0,a.kt)("a",{parentName:"p",href:"./resource"},"Resource")," is recommended. However, for other cases\n",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," is a great place to start.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"static fromJS\\<T extends typeof SimpleRecord",">","(this: T, props: Partial\\<AbstractInstanceType\\<T",">",">","): AbstractInstanceType\\<T",">"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,a.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,a.kt)("p",null,"This is used to create new entities when normalizing data. These are stored in the entities cache."),(0,a.kt)("h3",{id:"abstract-pk-parent-any-key-string-string--number--undefined"},"abstract pk: (parent?: any, key?: string): string | number | undefined"),(0,a.kt)("p",null,"PK stands for ",(0,a.kt)("em",{parentName:"p"},"primary key")," and is intended to provide a standard means of retrieving\na key identifier for any ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),". In many cases there will simply be an 'id' field\nmember to return. In case of multicolumn you can simply join them together."),(0,a.kt)("h4",{id:"undefined-value"},"undefined value"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," can be used as a default to indicate the entity has not been created yet.\nThis is useful when initializing a creation form using ",(0,a.kt)("a",{parentName:"p",href:"#static-fromjst-extends-typeof-simplerecordthis-t-props-partialabstractinstancetypet-abstractinstancetypet"},"Entity.fromJS()"),"\ndirectly. If ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," resolves to null it is considered not persisted to the server,\nand thus will not be kept in the cache."),(0,a.kt)("h4",{id:"other-uses"},"Other uses"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"pk()")," definition is key (pun intended) for making the normalized cache work;\nit also becomes quite convenient for sending to a react element when iterating on\nlist results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//....\nreturn (\n  <div>\n    {results.map(result => (\n      <TheThing key={result.pk()} thing={result} />\n    ))}\n  </div>\n);\n")),(0,a.kt)("h4",{id:"singleton-entities"},"Singleton Entities"),(0,a.kt)("p",null,"What if there is only ever once instance of a Entity for your entire application? You\ndon't really need to distinguish between each instance, so likely there was no ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," or\nsimilar field defined in the API. In these cases you can just return a literal like\n'the_only_one'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"pk() {\n  return 'the_only_one';\n}\n")),(0,a.kt)("h3",{id:"static-get-key-string"},"static get key(): string"),(0,a.kt)("p",null,"This defines the key for the Entity itself, rather than an instance. This needs to be a globally\nunique value."),(0,a.kt)("h3",{id:"static-mergeexisting-incoming-mergedvalue"},"static merge(existing, incoming): mergedValue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static merge<T extends typeof SimpleRecord>(existing: InstanceType<T>, incoming: InstanceType<T>) => InstanceType<T>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inherited from ",(0,a.kt)("a",{parentName:"p",href:"./SimpleRecord"},"SimpleRecord"))),(0,a.kt)("p",null,"Merge is used to resolve the same entity. This can be because it was previously put in the cache,\nor it was found in multiple places nested in one response. By default it is the SimpleRecord merge, which\nprefers values from the newer item but only if they are actually set."),(0,a.kt)("p",null,"Override this to change the algorithm - for instance if having the absolutely correct latest value is important,\nadding a timestamp to the entity and then using it to select the return value will solve any race conditions."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPriceEntity extends Entity {\n  readonly id: string = '';\n  readonly timestamp: string = '';\n  readonly price: string = '0.0';\n  readonly symbol: string = '';\n\n  static merge<T extends typeof SimpleRecord>(\n    existing: InstanceType<T>,\n    incoming: InstanceType<T>,\n  ) {\n    if (existing.timestamp > incoming.timestamp) return existing;\n    return incoming;\n  }\n}\n")),(0,a.kt)("h3",{id:"static-indexes-keyof-this"},"static indexes?: (keyof this)[]"),(0,a.kt)("p",null,"Indexes enable increased performance when doing lookups based on those parameters. Add\nfieldnames (like ",(0,a.kt)("inlineCode",{parentName:"p"},"slug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),") to the list that you want to send as params to lookup\nlater."),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"Don't add your primary key like ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," to the indexes list, as that will already be optimized.")),(0,a.kt)("h4",{id:"useresource"},"useResource()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useResource"},"useResource()")," this will eagerly infer the results from entities table if possible,\nrendering without needing to complete the fetch. This is typically helpful when the entities\ncache has already been populated by another request like a list request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly isAdmin: boolean = false;\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static urlRoot = 'http://test.com/user/';\n\n  // right here\n  static indexes = ['username' as const];\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const user = useResource(UserResource.detail(), { username: 'bob' });\n")),(0,a.kt)("h4",{id:"usecache"},"useCache()"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"./useCache"},"useCache()"),", this enables accessing results retrieved inside other requests - even\nif there is no endpoint it can be fetched from."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class LatestPrice extends Entity {\n  readonly id: string = '';\n  readonly symbol: string = '';\n  readonly price: string = '0.0';\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class AssetResource extends Resource {\n  readonly id: string = '';\n  readonly price: string = '';\n\n  static schema = {\n    price: LatestPrice,\n  };\n}\n")),(0,a.kt)("p",null,"Some top level component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const assets = useResource(AssetResource.list(), {});\n")),(0,a.kt)("p",null,"Nested below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const price = useCache(LatestPrice, { symbol: 'BTC' });\n")),(0,a.kt)("h3",{id:"static-schema--k-keyof-this-schema-"},"static schema: { ","[k: keyof this]",": Schema }"),(0,a.kt)("p",null,"Set this to ",(0,a.kt)("a",{parentName:"p",href:"../guides/nested-response"},"define entities nested")," inside this one."),(0,a.kt)("p",null,"Additionally can be used to ",(0,a.kt)("a",{parentName:"p",href:"../guides/network-transform#deserializing-fields"},"declare field deserialization")),(0,a.kt)("h4",{id:"optional-members"},"Optional members"),(0,a.kt)("p",null,"Entities references here whose default values in the Record definition itself are\nconsidered 'optional'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class User extends Entity {\n  readonly friend: User | null = null; // this field is optional\n  readonly lastUpdated: Date = new Date(0);\n\n  static schema = {\n    friend: User,\n    lastUpdated: Date,\n  }\n}\n")))}d.isMDXComponent=!0}}]);