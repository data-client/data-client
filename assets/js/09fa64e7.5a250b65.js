"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[44426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),i=n(85162);const o={title:"Endpoint"},l=void 0,p={unversionedId:"api/Endpoint",id:"version-5.1/api/Endpoint",title:"Endpoint",description:"Endpoint defines a standard interface that describes the nature of an networking endpoint.",source:"@site/rest_versioned_docs/version-5.1/api/Endpoint.md",sourceDirName:"api",slug:"/api/Endpoint",permalink:"/rest/5.1/api/Endpoint",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/Endpoint.md",tags:[],version:"5.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Endpoint"},sidebar:"docs",previous:{title:"HookableResource",permalink:"/rest/5.1/api/HookableResource"},next:{title:"Index",permalink:"/rest/5.1/api/Index"}},d={},u=[{value:"Endpoint Members",id:"endpoint-members",level:2},{value:"key: (params) =&gt; string",id:"key",level:3},{value:"sideEffect: true | undefined",id:"sideeffect",level:3},{value:"schema: Schema",id:"schema",level:3},{value:"extend(EndpointOptions): Endpoint",id:"extend",level:3},{value:"EndpointExtraOptions",id:"endpointextraoptions",level:3},{value:"dataExpiryLength?: number",id:"dataexpirylength",level:4},{value:"errorExpiryLength?: number",id:"errorexpirylength",level:4},{value:"errorPolicy?: (error: any) =&gt; &#39;soft&#39; | undefined",id:"errorpolicy",level:4},{value:"invalidIfStale: boolean",id:"invalidifstale",level:4},{value:"pollFrequency: number",id:"pollfrequency",level:4},{value:"getOptimisticResponse: (snap, ...args) =&gt; fakePayload",id:"getoptimisticresponse",level:4},{value:"optimisticUpdate: (...args) =&gt; fakePayload",id:"optimisticupdate",level:4},{value:"update(normalizedResponseOfThis, ...args) =&gt; ({ endpointKey: (normalizedResponseOfEndpointToUpdate) =&gt; updatedNormalizedResponse) })",id:"update",level:4},{value:"Examples",id:"examples",level:2},{value:"Additional",id:"additional",level:3},{value:"Motivation",id:"motivation",level:2},{value:"What&#39;s in an Endpoint",id:"whats-in-an-endpoint",level:3},{value:"See also",id:"see-also",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Endpoint defines a standard interface that describes the nature of an networking endpoint.\nIt is both strongly typed, and encapsulates runtime-relevant information."),(0,r.kt)(s.Z,{defaultValue:"Interface",values:[{label:"Interface",value:"Interface"},{label:"Class",value:"Class"},{label:"EndpointExtraOptions",value:"EndpointExtraOptions"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Interface",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointInterface<\n  F extends FetchFunction = FetchFunction,\n  S extends Schema | undefined = Schema | undefined,\n  M extends true | undefined = true | undefined,\n> extends EndpointExtraOptions<F> {\n  (...args: Parameters<F>): InferReturn<F, S>;\n  key(...args: Parameters<F>): string;\n  readonly sideEffect?: M;\n  readonly schema?: S;\n}\n"))),(0,r.kt)(i.Z,{value:"Class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Endpoint<F extends (...args: any) => Promise<any>>\n  implements EndpointInterface\n{\n  constructor(fetchFunction: F, options: EndpointOptions);\n\n  key(...args: Parameters<F>): string;\n\n  readonly sideEffect?: true;\n\n  readonly schema?: Schema;\n\n  fetch: F;\n\n  extend(options: EndpointOptions): Endpoint;\n}\n\nexport interface EndpointOptions extends EndpointExtraOptions {\n  key?: (params: any) => string;\n  sideEffect?: true | undefined;\n  schema?: Schema;\n}\n"))),(0,r.kt)(i.Z,{value:"EndpointExtraOptions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface EndpointExtraOptions<F extends FetchFunction = FetchFunction> {\n  /** Default data expiry length, will fall back to NetworkManager default if not defined */\n  readonly dataExpiryLength?: number;\n  /** Default error expiry length, will fall back to NetworkManager default if not defined */\n  readonly errorExpiryLength?: number;\n  /** Poll with at least this frequency in miliseconds */\n  readonly pollFrequency?: number;\n  /** Marks cached resources as invalid if they are stale */\n  readonly invalidIfStale?: boolean;\n  /** Enables optimistic updates for this request - uses return value as assumed network response */\n  readonly getOptimisticResponse?: (\n    snap: SnapshotInterface,\n    ...args: Parameters<F>\n  ) => ResolveType<F>;\n  /** Determines whether to throw or fallback to */\n  readonly errorPolicy?: (error: any) => 'soft' | undefined;\n  /** User-land extra data to send */\n  readonly extra?: any;\n  /** Enables optimistic updates for this request - uses return value as assumed network response\n   * @deprecated use https://resthooks.io./Endpoint.md#getoptimisticresponse instead\n   */\n  readonly optimisticUpdate?: (...args: Parameters<F>) => ResolveType<F>;\n}\n")))),(0,r.kt)("p",null,"Package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/endpoint"},"@rest-hooks/endpoint")),(0,r.kt)("h2",{id:"endpoint-members"},"Endpoint Members"),(0,r.kt)("p",null,"Members double as options (second constructor arg). While none are required, the first few\nhave defaults."),(0,r.kt)("h3",{id:"key"},"key: (params) => string"),(0,r.kt)("p",null,"Serializes the parameters. This is used to build a lookup key in global stores."),(0,r.kt)("p",null,"Default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"`${this.fetch.name} ${JSON.stringify(params)}`;\n")),(0,r.kt)("h3",{id:"sideeffect"},"sideEffect: true | undefined"),(0,r.kt)("p",null,"Used to indicate endpoint might have side-effects (non-idempotent). This restricts it\nfrom being used with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useFetch"},"useFetch()")," as those can hit the\nendpoint an unpredictable number of times."),(0,r.kt)("h3",{id:"schema"},"schema: Schema"),(0,r.kt)("p",null,"Declarative definition of how to ",(0,r.kt)("a",{parentName:"p",href:"./schema"},"process responses")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./schema"},"where")," to expect ",(0,r.kt)("a",{parentName:"li",href:"/rest/5.1/api/Entity"},"Entities")),(0,r.kt)("li",{parentName:"ul"},"Classes to ",(0,r.kt)("a",{parentName:"li",href:"/rest/guides/network-transform#deserializing-fields"},"deserialize fields"))),(0,r.kt)("p",null,"Not providing this option means no entities will be extracted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Entity } from '@rest-hooks/normalizr';\nimport { Endpoint } from '@rest-hooks/endpoint';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id;}\n}\n\nconst UserDetail = new Endpoint(\n    ({ id }) \u21d2 fetch(`/users/${id}`),\n    { schema: User }\n);\n")),(0,r.kt)("h3",{id:"extend"},"extend(EndpointOptions): Endpoint"),(0,r.kt)("p",null,"Can be used to further customize the endpoint definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const UserDetail = new Endpoint(({ id }) \u21d2 fetch(`/users/${id}`));\n\n\nconst UserDetailNormalized = UserDetail.extend({ schema: User });\n")),(0,r.kt)("p",null,"In addition to the members, ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," can be sent to override the fetch function."),(0,r.kt)("h3",{id:"endpointextraoptions"},"EndpointExtraOptions"),(0,r.kt)("h4",{id:"dataexpirylength"},"dataExpiryLength?: number"),(0,r.kt)("p",null,"Custom data cache lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#expiry-time"},"Learn more about expiry time")),(0,r.kt)("h4",{id:"errorexpirylength"},"errorExpiryLength?: number"),(0,r.kt)("p",null,"Custom data error lifetime for the fetched resource. Will override the value set in NetworkManager."),(0,r.kt)("h4",{id:"errorpolicy"},"errorPolicy?: (error: any) => 'soft' | undefined"),(0,r.kt)("p",null,"'soft' will use stale data (if exists) in case of error; undefined or not providing option will result\nin error."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/expiry-policy#error-policy"},"Learn more about errorPolicy")),(0,r.kt)("h4",{id:"invalidifstale"},"invalidIfStale: boolean"),(0,r.kt)("p",null,"Indicates stale data should be considered unusable and thus not be returned from the cache. This means\nthat useSuspense() will suspend when data is stale even if it already exists in cache."),(0,r.kt)("h4",{id:"pollfrequency"},"pollFrequency: number"),(0,r.kt)("p",null,"Frequency in millisecond to poll at. Requires using ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," to have\nan effect."),(0,r.kt)("h4",{id:"getoptimisticresponse"},"getOptimisticResponse: (snap, ...args) => fakePayload"),(0,r.kt)("p",null,"When provided, any fetches with this endpoint will behave as though the ",(0,r.kt)("inlineCode",{parentName:"p"},"fakePayload")," return value\nfrom this function was a succesful network response. When the actual fetch completes (regardless\nof failure or success), the optimistic update will be replaced with the actual network response."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/guides/optimistic-updates"},"Optimistic update guide")),(0,r.kt)("h4",{id:"optimisticupdate"},"optimisticUpdate: (...args) => fakePayload"),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"#getOptimisticResponse"},"endpoint.getOptimisticResponse")," instead.")),(0,r.kt)("h4",{id:"update"},"update(normalizedResponseOfThis, ...args) => ({ ","[endpointKey]",": (normalizedResponseOfEndpointToUpdate) => updatedNormalizedResponse) })"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="UpdateType.ts"',title:'"UpdateType.ts"'},"type UpdateFunction<\n  Source extends EndpointInterface,\n  Updaters extends Record<string, any> = Record<string, any>,\n> = (\n  source: ResultEntry<Source>,\n  ...args: Parameters<Source>\n) => { [K in keyof Updaters]: (result: Updaters[K]) => Updaters[K] };\n")),(0,r.kt)("p",null,"Simplest case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId: string) => ({\n    [userList.key()]: (users = []) => [newUserId, ...users],\n  }),\n});\n")),(0,r.kt)("p",null,"More updates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Component.tsx"',title:'"Component.tsx"'},"const allusers = useSuspense(userList);\nconst adminUsers = useSuspense(userList, { admin: true });\n")),(0,r.kt)("p",null,"The endpoint below ensures the new user shows up immediately in the usages above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="userEndpoint.ts"',title:'"userEndpoint.ts"'},"const createUser = new Endpoint(postToUserFunction, {\n  schema: User,\n  update: (newUserId, newUser)  => {\n    const updates = {\n      [userList.key()]: (users = []) => [newUserId, ...users],\n    ];\n    if (newUser.isAdmin) {\n      updates[userList.key({ admin: true })] = (users = []) => [newUserId, ...users];\n    }\n    return updates;\n  },\n});\n")),(0,r.kt)("p",null,"This is usage with a ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/resource"},"Resource")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="TodoResource.ts"',title:'"TodoResource.ts"'},"import { Resource } from '@rest-hooks/rest';\n\nexport default class TodoResource extends Resource {\n  readonly id: number = 0;\n  readonly userId: number = 0;\n  readonly title: string = '';\n  readonly completed: boolean = false;\n\n  pk() {\n    return `${this.id}`;\n  }\n\n  static urlRoot = 'https://jsonplaceholder.typicode.com/todos';\n\n  static create<T extends typeof Resource>(this: T) {\n    const todoList = this.list();\n    return super.create().extend({\n      schema: this,\n      // highlight-start\n      update: (newResourceId: string) => ({\n        [todoList.key({})]: (resourceIds: string[] = []) => [\n          ...resourceIds,\n          newResourceId,\n        ],\n      }),\n      // highlight-end\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(s.Z,{defaultValue:"Basic",values:[{label:"Basic",value:"Basic"},{label:"With Schema",value:"With Schema"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Basic",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json())\n);\n"))),(0,r.kt)(i.Z,{value:"With Schema",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserDetail = new Endpoint(\n  ({ id }) \u21d2 fetch(`/users/${id}`).then(res => res.json()),\n  { schema: User }\n);\n"))),(0,r.kt)(i.Z,{value:"List",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Endpoint } from '@rest-hooks/endpoint';\nimport { Entity } from 'rest-hooks';\n\nclass User extends Entity {\n  readonly id: string = '';\n  readonly username: string = '';\n\n  pk() { return this.id; }\n}\n\nconst UserList = new Endpoint(\n  () \u21d2 fetch(`/users/`).then(res => res.json()),\n  { schema: [User] }\n);\n")))),(0,r.kt)(s.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"JS/Node Schema",value:"JS/Node"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UserProfile() {\n  const user = useSuspense(UserDetail, { id });\n  const { fetch } = useController();\n\n  return <UserForm user={user} onSubmit={() => fetch(UserDetail)} />;\n}\n"))),(0,r.kt)(i.Z,{value:"JS/Node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await UserDetail({ id: '5' });\nconsole.log(user);\n")))),(0,r.kt)("h3",{id:"additional"},"Additional"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/guides/extending-endpoints"},"Custom endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/guides/pagination"},"Pagination")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/guides/mocking-unfinished"},"Mocking unfinished endpoints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/optimistic-updates"},"Optimistic updates"))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"There is a distinction between"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are networking API is",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How to make a request, expected response fields, etc."))),(0,r.kt)("li",{parentName:"ul"},"How it is used",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Binding data, polling, triggering imperative fetch, etc.")))),(0,r.kt)("p",null,"Thus, there are many benefits to creating a distinct seperation of concerns between\nthese two concepts."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript Standard Endpoints"),", we define a standard for declaring in\nTypeScript the definition of a networking API."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows API authors to publish npm packages containing their API interfaces"),(0,r.kt)("li",{parentName:"ul"},"Definitions can be consumed by any supporting library, allowing easy consumption across libraries like Vue, React, Angular"),(0,r.kt)("li",{parentName:"ul"},"Writing codegen pipelines becomes much easier as the output is minimal"),(0,r.kt)("li",{parentName:"ul"},"Product developers can use the definitions in a multitude of contexts where behaviors vary"),(0,r.kt)("li",{parentName:"ul"},"Product developers can easily share code across platforms with distinct behaviors needs like React Native and React Web")),(0,r.kt)("h3",{id:"whats-in-an-endpoint"},"What's in an Endpoint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A function that resolves the results"),(0,r.kt)("li",{parentName:"ul"},"A function to uniquely store those results"),(0,r.kt)("li",{parentName:"ul"},"Optional: information about how to store the data in a normalized cache"),(0,r.kt)("li",{parentName:"ul"},"Optional: whether the request could have side effects - to prevent repeat calls")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/rest/5.1/api/Index"},"Index"))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),i=n(72389),o=n(67392),l=n(7094),p=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:h,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,l.U)(),[N,x]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==N&&(T(t),x(a),null!=h&&E(h,String(a)))},U=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:U,onFocus:O,onClick:O},i,{className:(0,s.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);