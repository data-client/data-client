/*! For license information please see 13d33e2a.c7ee7247.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[59141],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=k.prototype=new b;v.constructor=k,h(v,y.prototype),v.isPureReactComponent=!0;var w=Array.isArray,E=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)E.call(t,i)&&!C.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:x.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+R(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(N,"$&/")+"/"),S(a,t,i,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(N,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var c=0;c<e.length;c++){var u=o+R(s=e[c],c);l+=S(s,t,i,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=S(s=s.value,t,i,u=o+R(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,n){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var _={current:null},Z={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1866:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(27378),n(3905)),o=n(54514);const a={title:"Optimistic Updates"},s=void 0,l={unversionedId:"guides/optimistic-updates",id:"guides/optimistic-updates",title:"Optimistic Updates",description:"Optimistic Updates - High performance mutations",source:"@site/../docs/rest/guides/optimistic-updates.md",sourceDirName:"guides",slug:"/guides/optimistic-updates",permalink:"/rest/guides/optimistic-updates",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/optimistic-updates.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665186231,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Optimistic Updates"},sidebar:"docs",previous:{title:"Authentication",permalink:"/rest/guides/auth"},next:{title:"Transforming data on fetch",permalink:"/rest/guides/network-transform"}},c={},u=[{value:"Partial updates",id:"partial-updates",level:2},{value:"Optimistic create with instant updates",id:"optimistic-create-with-instant-updates",level:2},{value:"Optimistic Deletes",id:"optimistic-deletes",level:2},{value:"Optimistic Transforms",id:"optimistic-transforms",level:2},{value:"Tracking order with updatedAt",id:"tracking-order-with-updatedat",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Optimistic Updates - High performance mutations")),(0,i.kt)("p",null,"Optimistic updates enable highly responsive and fast interfaces by avoiding network wait times.\nAn update is optimistic by assuming the network is successful. In the case of any errors, Rest\nHooks will then roll back any changes in a way that deals with all possible race conditions."),(0,i.kt)("h2",{id:"partial-updates"},"Partial updates"),(0,i.kt)("p",null,"One common use case is for quick toggles. Here we demonstrate a publish button for an\narticle. Note that we need to include the primary key (",(0,i.kt)("inlineCode",{parentName:"p"},"id")," in this case) in the response\nbody to ensure the normalized cache gets updated correctly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  partialUpdate: BaseArticleResource.partialUpdate.extend({\n    // highlight-start\n    getOptimisticResponse(snap, params, body) {\n      return {\n        // we absolutely need the primary key here,\n        // but won't be sent in a partial update\n        id: params.id,\n        ...body,\n      };\n    },\n    // highlight-end\n  }),\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="PublishButton.tsx"',title:'"PublishButton.tsx"'},"import { useController } from 'rest-hooks';\nimport { ArticleResource } from 'api/Article';\n\nexport default function PublishButton({ id }: { id: string }) {\n  const controller = useController();\n\n  return (\n    <button\n      onClick={() =>\n        controller.fetch(\n          ArticleResource.partialUpdate,\n          { id },\n          { published: true },\n        )\n      }\n    >\n      Publish\n    </button>\n  );\n}\n")),(0,i.kt)("h2",{id:"optimistic-create-with-instant-updates"},"Optimistic create with instant updates"),(0,i.kt)("p",null,"Optimistic updates can also be combined with ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/immediate-updates"},"immediate updates"),", enabling updates to\nother endpoints instantly. This is most commonly seen when creating new items\nwhile viewing a list of them."),(0,i.kt)("p",null,"Here we demonstrate what could be used in a list of articles with a modal\nto create a new article. On submission of the form it would instantly\nadd to the list of articles the newly created article - without waiting on a network response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\nimport uuid from 'uuid/v4';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  create: BaseArticleResource.create.extend({\n    getRequestInit(body) {\n      if (body) {\n        return this.constructor.prototype.getRequestInit.call(this, {\n          // highlight-next-line\n          id: uuid(),\n          ...body,\n        });\n      }\n      return this.constructor.prototype.getRequestInit.call(this, body);\n    },\n    getOptimisticResponse(snap, params, body) {\n      return body;\n    },\n    update(newResourcePk: string) {\n      return {\n        [list.key({})]: (resourcePks: string[] = []) => [\n          ...resourcePks,\n          newResourcePk,\n        ],\n      };\n    },\n  }),\n};\n")),(0,i.kt)("p",null,"Since the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," of the article is created on the server, we will need to fill\nin a temporary fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," here, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," can be generated. This is needed\nto properly normalize the article to be looked up in the cache."),(0,i.kt)("p",null,"Once the network responds, it will have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which will replace the existing\ndata. This is often seamless, but care should be taken if the fake ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used in any\nrenders - like to issue subsequent requests. We recommend disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," type features\nthat rely on the ",(0,i.kt)("inlineCode",{parentName:"p"},"primary key")," until the network fetch completes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="CreateArticle.tsx"',title:'"CreateArticle.tsx"'},"import { useController } from 'rest-hooks';\nimport { ArticleResource } from 'api/Article';\n\nexport default function CreateArticle() {\n  const { fetch } = useController();\n  const submitHandler = useCallback(\n    data => fetch(ArticleResource.create, data),\n    [create],\n  );\n\n  return <Form onSubmit={submitHandler}>{/* rest of form */}</Form>;\n}\n")),(0,i.kt)("h2",{id:"optimistic-deletes"},"Optimistic Deletes"),(0,i.kt)("p",null,"Since deletes ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/immediate-updates#delete"},"automatically update the cache correctly")," upon fetch success,\nmaking your delete endpoint do this optimistically is as easy as adding the ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#getoptimisticresponse"},"getOptimisticResponse"),"\nfunction to your options."),(0,i.kt)("p",null,"We return an empty string because that's the response we expect from the server. Although by\ndefault, the server response is ignored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  readonly id: string | undefined = undefined;\n  readonly title: string = '';\n  readonly content: string = '';\n  readonly published: boolean = false;\n\n  pk() {\n    return this.id;\n  }\n}\n\nconst BaseArticleResource = createResource({\n  path: '/articles/:id',\n  schema: Article,\n});\nexport const ArticleResource = {\n  ...BaseArticleResource,\n  delete: BaseArticleResource.delete.extend({\n    // highlight-start\n    getOptimisticResponse(snap, params, body) {\n      return params;\n    },\n    // highlight-end\n  }),\n};\n")),(0,i.kt)("h2",{id:"optimistic-transforms"},"Optimistic Transforms"),(0,i.kt)("p",null,"Sometimes user actions should result in data transformations that are dependent on the previous state of data.\nThe simplest examples of this are toggling a boolean, or incrementing a counter; but the same principal applies to\nmore complicated transforms. To make it more obvious we're using a simple counter here."),(0,i.kt)(o.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Count.ts"',title:'"api/Count.ts"'},"class CountEntity extends Entity {\n  readonly count = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n}\nconst getCount = new RestEndpoint({\n  path: '/api/count',\n  schema: CountEntity,\n  name: 'get',\n}\n);\nconst increment = new RestEndpoint(\n  {\n    path: '/api/count/increment',\n    method: 'POST',\n    name: 'increment',\n    schema: CountEntity,\n    getRequestInit() {\n      return this.constructor.prototype.getRequestInit.call(this, { updatedAt: Date.now() });\n    }\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n      };\n    },\n  },\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CounterPage.tsx"',title:'"CounterPage.tsx"'},"function CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [clickHandler, loading, error] = useLoading(() => fetch(increment));\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the race condition\n      </p>\n      <div>\n        {count} <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))),(0,i.kt)("p",null,"Try removing ",(0,i.kt)("inlineCode",{parentName:"p"},"getOptimisticResponse")," from the increment ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),". Even without optimistic updates, this race condition can be a real problem. While it is less likely with fast endpoints;\nslower or less reliable internet connections means a slow response time no matter how fast the server is."),(0,i.kt)("p",null,"The problem is that the responses come back in a different order than they are computed. If we can determine the\ncorrect 'total order', we would be able to solve this problem."),(0,i.kt)("p",null,"Without optimistic updates, this can be achieved simply by having the server return a timestamp of when it was last updated.\nThe client can then choose to ignore responses that are out of date by their time of resolution."),(0,i.kt)("h3",{id:"tracking-order-with-updatedat"},"Tracking order with updatedAt"),(0,i.kt)("p",null,"To handle potential out of order resolutions, we can track the last update time in ",(0,i.kt)("inlineCode",{parentName:"p"},"updatedAt"),".\nOverriding our ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#useincoming"},"useIncoming"),", we can check which data is newer, and disregard old data\nthat resolves out of order."),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/Snapshot#fetchedat"},"snap.fetchedAt")," in our ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#getoptimisticresponse"},"getOptimisticResponse"),". This respresents the moment the fetch is triggered,\nwhich is when the optimistic update first applies."),(0,i.kt)(o.Z,{mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/Count.ts"',title:'"api/Count.ts"'},"class CountEntity extends Entity {\n  readonly count = 0;\n  readonly updatedAt = 0;\n\n  pk() {\n    return `SINGLETON`;\n  }\n\n  static useIncoming(existingMeta, incomingMeta, existing, incoming) {\n    return existing.updatedAt <= incoming.updatedAt;\n  }\n}\nconst getCount = new RestEndpoint({\n  path: '/api/count',\n  schema: CountEntity,\n  name: 'get',\n}\n);\nconst increment = new RestEndpoint(\n  {\n    path: '/api/count/increment',\n    method: 'POST',\n    name: 'increment',\n    schema: CountEntity,\n    getRequestInit() {\n      return this.constructor.prototype.getRequestInit.call(this, { updatedAt: Date.now() });\n    }\n    getOptimisticResponse(snap) {\n      const { data } = snap.getResponse(getCount);\n      if (!data) throw new AbortOptimistic();\n      return {\n        count: data.count + 1,\n        updatedAt: snap.fetchedAt,\n      };\n    },\n  },\n);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CounterPage.tsx"',title:'"CounterPage.tsx"'},"function CounterPage() {\n  const { fetch } = useController();\n  const { count } = useSuspense(getCount);\n  const [n, setN] = React.useState(count);\n  const [clickHandler, loading, error] = useLoading(() => {\n    setN(n => n + 1);\n    return fetch(increment);\n  });\n  return (\n    <div>\n      <p>\n        Click the button multiple times quickly to trigger the potential race\n        condition. This time our vector clock protects us.\n      </p>\n      <div>\n        Network: {count} Should be: {n}\n        <br />\n        <button onClick={clickHandler}>+</button>\n        {loading ? ' ...loading' : ''}\n      </div>\n    </div>\n  );\n}\nrender(<CounterPage />);\n"))))}d.isMDXComponent=!0},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Be});var r=n(67294),i=n(4391),o=n(12171),a=n(56265),s=n(78357),l=n(56855),c=n(99494),u=n(70794),p=n(86429),d=n(67288);class m extends a.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class h extends p.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=p.Z}=e;const i=(0,d.Z)({path:t,schema:n,Endpoint:r}),o=i.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.partialUpdate.call(this,...t),id:t[0].id}}});return{...i,partialUpdate:o,create:i.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:h}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var b=n(87462),k=n(49544),v=n(86010),w=n(95999),E=n(52263),x=n(72389),C=n(66412),O=n(55423),A=n(84195);const N="playgroundContainer_sLUA",R="row_YGZs",S="hidden_Hh8i",P="playgroundHeader_Zx4K",T="small_xksL",_="clickable_YHiX",Z="noupper_WDCF",j="subtabs_XtJb",I="playgroundEditor_lYwu",U="arrow_tivA",D="vertical_OMeC",F="right_vs_C",M="left_iDcB",q="down_oRky",B="playgroundPreview_rk9R",$="playgroundError_sRnA",L="playgroundResult_tefG",H="debugToggle_zlro",z="tabControls_trxh",G="title_poUY",V="tabs_m54V",W="tab_bTGw",X="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(K,{fixture:e})))))}const J=(0,r.memo)(Y);function K(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,v.Z)(P,n,i?_:null),onClick:i},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ie=n(39714),oe=n(7094),ae=n(12466),se=n(91262),le=n(32041),ce=n(97723),ue=n(92949);function pe(e){let{value:t}=e;const n="dark"===(0,ue.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(ce.L,{shouldExpandNode:de,data:t,valueRenderer:fe,theme:o,hideRoot:!0})}function de(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function he(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,o=i?F:M;return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:t},"Store",r.createElement("span",{className:(0,v.Z)(U,o,D)},"\u25b6")),i?r.createElement(be,null):null)}const ge=(0,r.memo)(he);function ye(){const e=(0,r.useContext)(le.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(pe,{value:t})}const be=(0,r.memo)(ye);function ke(e){let{groupId:t,defaultOpen:n,row:i,fixtures:o}=e;const{tabGroupChoices:a,setTabGroupChoices:s}=(0,oe.U)(),[l,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,ae.o5)();if(null!=t){const e=a[t];null!=e&&e!==l&&c(e)}const p=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),s(t,"y"===l?"n":"y")}),[u,t,l,s]),d=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===l||!i);return r.createElement(ne.nq,{managers:d},r.createElement(ie.Z,{fixtures:o,silenceMissing:!0},r.createElement("div",{className:(0,v.Z)(B,{[S]:m})},r.createElement(se.Z,{fallback:r.createElement(we,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(we,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:$}))))),r.createElement(ge,{selectedValue:l,toggle:p})))}const ve=(0,r.memo)(ke);function we(){return r.createElement("div",null,"Loading...")}function Ee(e){let{groupId:t,defaultOpen:n,row:i,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(w.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:L},r.createElement(ve,{groupId:t,defaultOpen:n,row:i,fixtures:o})))}const xe=(0,r.memo)(Ee);function Ce(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(A.Z);return r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:o}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,v.Z)(W,{[X]:e===i}),onFocus:t,onClick:t,value:i},o)})))}function Oe(e){let{children:t}=e;return r.createElement(Q,{className:z},r.createElement("div",{className:G},t),r.createElement(Ce,null))}function Ae(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(A.Z),o=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:T},"Fixtures"),r.createElement(J,{fixtures:n})):null,o?r.createElement(Oe,null,t):null)}function Ne(e){let{children:t,transformCode:n,groupId:i,defaultOpen:o,row:a,hidden:s,fixtures:l,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,E.Z)().siteConfig.themeConfig,p=(0,C.p)(),d=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,O.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[h,g]=(0,r.useReducer)(Se,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>f.map(((e,t)=>e=>g({i:t,code:e})))),[f.length]),[w,A]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,v.Z)(N,{[R]:a,[S]:s})},r.createElement(k.nu,(0,b.Z)({theme:p},c),r.createElement(Re,{reverse:"top"===u},r.createElement("div",null,r.createElement(Ae,{fixtures:l}),a&&f.length>1?r.createElement(_e,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:w,onClick:e=>A((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!a&&n?r.createElement(Te,{onClick:()=>A((e=>{const n=[...e];return n[t]=!n[t],n})),closed:w[t],title:n}):null,w[t]?null:r.createElement(Pe,{key:`${d}-${t}`,className:I,onChange:y[t],code:h[t]}))}))),r.createElement(k.nu,(0,b.Z)({code:h.join("\n"),transformCode:m},c),r.createElement(xe,{groupId:i,defaultOpen:o,row:a,fixtures:l})))))}function Re(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Se(e,t){const n=[...e];return n[t.i]=t.code,n}Ae.defaultProps={title:r.createElement(w.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Ne.defaultProps={row:!1,hidden:!1},Re.defaultProps={reverse:!1};const Pe=(0,r.memo)(k.uz);function Te(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(Q,{className:T,onClick:t},r.createElement("span",{className:(0,v.Z)(U,n?F:q)},"\u25b6"),i)}function _e(e){let{titles:t,closedList:n,onClick:i}=e;const{values:o}=(0,r.useContext)(A.Z),a=o.length>0;return r.createElement(Q,{className:(0,v.Z)({[T]:a,[j]:a},Z,z)},r.createElement("div",{className:V,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,v.Z)(W,{[X]:!n[t]})},e)))))}var Ze=n(64146),je=n(82026);class Ie extends a.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ie.schema={updatedAt:Date};const Ue=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ie});const De={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Fe={...o,...s,...c,...l,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:Ue,TimedEntity:Ie,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:o}=(0,Ze.Z)();return r.createElement(je.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:$},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{o(),i((e=>e+1))}},"Clear Error"))}},t)}},Me={...Fe,Todo:f,TodoResource:De,TodoEndpoint:h},qe=e=>{let{children:t,endpointCode:n,groupId:i,hidden:o=!1,defaultOpen:a,row:s=!1,fixtures:l}=e;return r.createElement(Ne,{scope:n||Array.isArray(t)?Fe:Me,noInline:!0,groupId:i,defaultOpen:a,row:s,hidden:o,fixtures:l},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};qe.defaultProps={defaultOpen:"n",fixtures:[]};const Be=(0,r.memo)(qe)},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);