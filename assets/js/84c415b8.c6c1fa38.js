"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37420],{30433:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),l=n(5730),o=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[P,N]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==P&&y.some((t=>t.value===e))&&N(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==P&&(S(t),N(a),null!=h&&w(h,String(a)))},F=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>E.push(e),onKeyDown:F,onClick:x},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":P===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(65559),r=n(30433),s=n(67294);function l(e){let{children:t}=e;return s.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},s.createElement(r.Z,{value:"simple"},t[0]),s.createElement(r.Z,{value:"generics"},t[1]))}},11257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(88705);const l={title:"useFetcher()"},o=void 0,i={unversionedId:"api/useFetcher",id:"version-6.0/api/useFetcher",title:"useFetcher()",description:"Mostly useful for imperatively triggering mutation effects.",source:"@site/versioned_docs/version-6.0/api/useFetcher.md",sourceDirName:"api",slug:"/api/useFetcher",permalink:"/docs/6.0/api/useFetcher",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetcher.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{title:"useFetcher()"},sidebar:"version-6.0/docs",previous:{title:"useResource()",permalink:"/docs/6.0/api/useresource"},next:{title:"useCache()",permalink:"/docs/6.0/api/useCache"}},u={},c=[{value:"throttle?: boolean = false",id:"throttle-boolean--false",level:2},{value:"Example",id:"example",level:2},{value:"updateParams: destEndpoint, destParams, updateFunction",id:"updateparams-destendpoint-destparams-updatefunction",level:2},{value:"updateFunction: (sourceResults, destResults) =&gt; destResults",id:"updatefunction-sourceresults-destresults--destresults",level:3},{value:"Example",id:"example-1",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher(\n  endpoint: Endpoint,\n  throttle?: boolean = false,\n): FetchFunction;\n\ntype FetchFunction = (\n  params: object,\n  body: object | void,\n  updateParams?: OptimisticUpdateParams[]\n) => Promise<any>;\n\ntype OptimisticUpdateParams = [\n  destShape: Endpoint,\n  destParams: object,\n  updateFunction: (sourceResults: object, destResults: object) => object,\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  endpoint: Endpoint<(p: Params, b: Body) => Promise<any>, S>,\n  throttle?: boolean = false,\n): <\n  UpdateParams extends OptimisticUpdateParams<\n    SchemaFromShape<Shape>,\n    FetchShape<any, any, any>\n  >[]\n>(\n  params: ParamsFromShape<Shape>,\n  body: BodyFromShape<Shape>,\n  updateParams?: UpdateParams | undefined,\n) => Promise<any>;\n\ntype OptimisticUpdateParams<\n  SourceSchema extends Schema,\n  DestShape extends FetchShape<any, any, any>\n> = [\n  DestShape,\n  ParamsFromShape<DestShape>,\n  UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>,\n];\n\ntype UpdateFunction<SourceSchema extends Schema, DestSchema extends Schema> = (\n  sourceResults: Normalize<SourceSchema>,\n  destResults: Normalize<DestSchema> | undefined,\n) => Normalize<DestSchema>;\n"))),(0,r.kt)("p",null,"Mostly useful for imperatively triggering mutation effects."),(0,r.kt)("p",null,"However, this hook is actually used by the retrieval hooks (useRetrieve(), useCache(), useResource()). Using\nit with a side-effect free ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"detail()")," can be done to force a refresh imperatively."),(0,r.kt)("h2",{id:"throttle-boolean--false"},"throttle?: boolean = false"),(0,r.kt)("p",null,"By default all calls force the fetch, however by calling with throttle=true identical\nin-flight requests will be deduped."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const create = useFetcher(PostResource.create());\n  // create as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => create({}, new FormData(e.target))}>{/* ... */}</form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const update = useFetcher(PostResource.update());\n  // update as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => update({ id }, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const del = useFetcher(PostResource.delete());\n  // del as (body: any, params: Readonly<object>) => Promise<any>\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={() => del({ id: post.id })}>X</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"updateparams-destendpoint-destparams-updatefunction"},"updateParams: ","[destEndpoint, destParams, updateFunction][]"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deprecated - use ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint#update"},"Endpoint.update")," instead")),(0,r.kt)("p",null,"The optional third argument to the fetch function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher()")," is a\nlist of tuples that tell Rest Hooks additional updates that should take place."),(0,r.kt)("p",null,"The result cache will be updated based on the destEndpoint with destParams applied.\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"destEndpoint.key(destParams)")," would find the location in the cache.)"),(0,r.kt)("p",null,"The third argument is a function to run on that result cache."),(0,r.kt)("h3",{id:"updatefunction-sourceresults-destresults--destresults"},"updateFunction: (sourceResults, destResults) => destResults"),(0,r.kt)("p",null,"This function takes two arguments\nand returns the new result state to be placed in the destination. (Result state resembles\nthe shape of the actual response, except all entities are replaced with their primary keys.)\nThe first argument to the update function is the result of the resolved value of the given fetch call.\nThe second argument is the existing result state of the destination."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This will insert the newly created article id onto the end of the list endpoint with ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticleResource.list(),\n    {},\n    (newArticleID: string, articleIDs: string[] | undefined) => [\n      ...(articleIDs || []),\n      newArticleID,\n    ],\n  ],\n]);\n")),(0,r.kt)("p",null,"This shows the same concept, but for a custom list endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ArticlePaginatedResource extends Resource {\n  static list<T extends Resource>() {\n    return super.list().extend({\n      schema: { results: this[], nextPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticlePaginatedResource.list(),\n    {},\n    (newArticleID: string, articleIDs: { results: string[] } | undefined) => ({\n      ...articleIDs,\n      results: [...articleIDs?.results, newArticleID],\n    }),\n  ],\n]);\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create()"),(0,r.kt)("li",{parentName:"ul"},"update()"),(0,r.kt)("li",{parentName:"ul"},"partialUpdate()"),(0,r.kt)("li",{parentName:"ul"},"delete()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/6.0/api/Endpoint"},"Endpoint")," as well."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"notes"},"Notes"),(0,r.kt)("p",{parentName:"blockquote"},"As this is the most basic hook to dispatch network requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," it will run through all normal fetch processing like updating\nthe normalized cache, etc.")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);