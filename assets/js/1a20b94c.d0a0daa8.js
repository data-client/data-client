/*! For license information please see 1a20b94c.d0a0daa8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71913],{41535:(e,t)=>{var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var g=k.prototype=new v;g.constructor=k,h(g,b.prototype),g.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,P={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,a){var r,o={},s=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=a;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:n,type:e,key:s,ref:l,props:o,_owner:P.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var x=/\/+/g;function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case a:i=!0}}if(i)return s=s(i=e),e=""===o?"."+F(i,0):o,w(s)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),O(s,t,r,"",(function(e){return e}))):null!=s&&(j(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+F(l=e[u],u);i+=O(l,t,r,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)i+=O(l=l.value,t,r,c=o+F(l,u++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function R(e,t,n){if(null==e)return e;var a=[],r=0;return O(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},_={transition:null}},27378:(e,t,n)=>{n(41535)},30433:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),s=n(5730),l=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:f,className:h}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[S,P]=(0,r.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==S&&b.some((t=>t.value===e))&&P(e)}const j=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==S&&(E(t),P(a),null!=f&&w(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:j},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(65559),r=n(30433),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},84183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(27378),n(3905)),o=n(88705);const s={title:"useFetcher()"},l=void 0,i={unversionedId:"api/useFetcher",id:"api/useFetcher",title:"useFetcher()",description:"Use Controller.fetch() instead",source:"@site/../docs/core/api/useFetcher.md",sourceDirName:"api",slug:"/api/useFetcher",permalink:"/docs/api/useFetcher",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useFetcher.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666629145,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{title:"useFetcher()"},sidebar:"docs",previous:{title:"DevToolsManager",permalink:"/docs/api/DevToolsManager"},next:{title:"useInvalidator()",permalink:"/docs/api/useInvalidator"}},u={},c=[{value:"throttle?: boolean = false",id:"throttle-boolean--false",level:2},{value:"Example",id:"example",level:2},{value:"updateParams: destEndpoint, destParams, updateFunction",id:"updateparams-destendpoint-destparams-updatefunction",level:2},{value:"updateFunction: (sourceResults, destResults) =&gt; destResults",id:"updatefunction-sourceresults-destresults--destresults",level:3},{value:"Example",id:"example-1",level:3},{value:"Useful <code>Endpoint</code>s to send",id:"useful-endpoints-to-send",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"docsearch:pagerank",content:"-40"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch()")," instead")),(0,r.kt)(o.Z,{mdxType:"GenericsTabs"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher(\n  endpoint: Endpoint,\n  throttle?: boolean = false,\n): FetchFunction;\n\ntype FetchFunction = (\n  params: object,\n  body: object | void,\n  updateParams?: OptimisticUpdateParams[]\n) => Promise<any>;\n\ntype OptimisticUpdateParams = [\n  destShape: Endpoint,\n  destParams: object,\n  updateFunction: (sourceResults: object, destResults: object) => object,\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useFetcher<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(\n  endpoint: Endpoint<(p: Params, b: Body) => Promise<any>, S>,\n  throttle?: boolean = false,\n): <\n  UpdateParams extends OptimisticUpdateParams<\n    SchemaFromShape<Shape>,\n    FetchShape<any, any, any>\n  >[]\n>(\n  params: ParamsFromShape<Shape>,\n  body: BodyFromShape<Shape>,\n  updateParams?: UpdateParams | undefined,\n) => Promise<any>;\n\ntype OptimisticUpdateParams<\n  SourceSchema extends Schema,\n  DestShape extends FetchShape<any, any, any>\n> = [\n  DestShape,\n  ParamsFromShape<DestShape>,\n  UpdateFunction<SourceSchema, SchemaFromShape<DestShape>>,\n];\n\ntype UpdateFunction<SourceSchema extends Schema, DestSchema extends Schema> = (\n  sourceResults: Normalize<SourceSchema>,\n  destResults: Normalize<DestSchema> | undefined,\n) => Normalize<DestSchema>;\n"))),(0,r.kt)("p",null,"Mostly useful for imperatively triggering mutation effects."),(0,r.kt)("p",null,"However, this hook is actually used by the retrieval hooks (useFetch(), useCache(), useSuspense()). Using\nit with a side-effect free ",(0,r.kt)("inlineCode",{parentName:"p"},"Endpoint")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"detail()")," can be done to force a refresh imperatively."),(0,r.kt)("h2",{id:"throttle-boolean--false"},"throttle?: boolean = false"),(0,r.kt)("p",null,"By default all calls force the fetch, however by calling with throttle=true identical\nin-flight requests will be deduped."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function CreatePost() {\n  const create = useFetcher(PostResource.create());\n  // create as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => create({}, new FormData(e.target))}>{/* ... */}</form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function UpdatePost({ id }: { id: string }) {\n  const update = useFetcher(PostResource.update());\n  // update as (body: Readonly<Partial<PostResource>>, params?: Readonly<object>) => Promise<any>\n\n  return (\n    <form onSubmit={e => update({ id }, new FormData(e.target))}>\n      {/* ... */}\n    </form>\n  );\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function PostListItem({ post }: { post: PostResource }) {\n  const del = useFetcher(PostResource.delete());\n  // del as (body: any, params: Readonly<object>) => Promise<any>\n\n  return (\n    <div>\n      <h3>{post.title}</h3>\n      <button onClick={() => del({ id: post.id })}>X</button>\n    </div>\n  );\n}\n")),(0,r.kt)("h2",{id:"updateparams-destendpoint-destparams-updatefunction"},"updateParams: ","[destEndpoint, destParams, updateFunction][]"),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint#update"},"Endpoint.update")," instead")),(0,r.kt)("p",null,"The optional third argument to the fetch function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher()")," is a\nlist of tuples that tell Rest Hooks additional updates that should take place."),(0,r.kt)("p",null,"The result cache will be updated based on the destEndpoint with destParams applied.\n(e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"destEndpoint.key(destParams)")," would find the location in the cache.)"),(0,r.kt)("p",null,"The third argument is a function to run on that result cache."),(0,r.kt)("h3",{id:"updatefunction-sourceresults-destresults--destresults"},"updateFunction: (sourceResults, destResults) => destResults"),(0,r.kt)("p",null,"This function takes two arguments\nand returns the new result state to be placed in the destination. (Result state resembles\nthe shape of the actual response, except all entities are replaced with their primary keys.)\nThe first argument to the update function is the result of the resolved value of the given fetch call.\nThe second argument is the existing result state of the destination."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This will insert the newly created article id onto the end of the list endpoint with ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticleResource.list(),\n    {},\n    (newArticleID: string, articleIDs: string[] | undefined) => [\n      ...(articleIDs || []),\n      newArticleID,\n    ],\n  ],\n]);\n")),(0,r.kt)("p",null,"This shows the same concept, but for a custom list endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ArticlePaginatedResource extends Resource {\n  static list<T extends Resource>() {\n    return super.list().extend({\n      schema: { results: this[], nextPage: '' },\n    });\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const createArticle = useFetcher(ArticleResource.create());\n\ncreateArticle({}, { id: 1 }, [\n  [\n    ArticlePaginatedResource.list(),\n    {},\n    (newArticleID: string, articleIDs: { results: string[] } | undefined) => ({\n      ...articleIDs,\n      results: [...articleIDs?.results, newArticleID],\n    }),\n  ],\n]);\n")),(0,r.kt)("h2",{id:"useful-endpoints-to-send"},"Useful ",(0,r.kt)("inlineCode",{parentName:"h2"},"Endpoint"),"s to send"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/rest/5.2/api/resource#provided-and-overridable-methods"},"Resource")," provides these built-in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create()"),(0,r.kt)("li",{parentName:"ul"},"update()"),(0,r.kt)("li",{parentName:"ul"},"partialUpdate()"),(0,r.kt)("li",{parentName:"ul"},"delete()")),(0,r.kt)("p",null,"Feel free to add your own ",(0,r.kt)("a",{parentName:"p",href:"/rest/api/Endpoint"},"Endpoint")," as well."),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"notes"},"Notes"),(0,r.kt)("p",{parentName:"blockquote"},"As this is the most basic hook to dispatch network requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," it will run through all normal fetch processing like updating\nthe normalized cache, etc.")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);