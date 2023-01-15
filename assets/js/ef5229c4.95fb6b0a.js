/*! For license information please see ef5229c4.95fb6b0a.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[52052],{41535:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=k.prototype=new b;v.constructor=k,h(v,y.prototype),v.isPureReactComponent=!0;var E=Array.isArray,x=Object.prototype.hasOwnProperty,N={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,a)&&!C.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:N.current}}function Z(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return l=l(i=e),e=""===o?"."+S(i,0):o,E(l)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),_(l,t,a,"",(function(e){return e}))):null!=l&&(Z(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(R,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",E(e))for(var c=0;c<e.length;c++){var u=o+S(s=e[c],c);i+=_(s,t,a,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=_(s=s.value,t,a,u=o+S(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function T(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null}},27378:(e,t,r)=>{"use strict";r(41535)},75681:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(27378),r(3905));r(47885),r(28423);const o={title:"hookifyResource"},l=void 0,s={unversionedId:"api/hookifyResource",id:"api/hookifyResource",title:"hookifyResource",description:"hookifyResource() - Collection of CRUD hook Endpoints",source:"@site/../docs/rest/api/hookifyResource.md",sourceDirName:"api",slug:"/api/hookifyResource",permalink:"/rest/api/hookifyResource",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/api/hookifyResource.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1673804773,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{title:"hookifyResource"},sidebar:"docs",previous:{title:"createResource",permalink:"/rest/api/createResource"},next:{title:"Query",permalink:"/rest/api/Query"}},i={},c=[{value:"Members",id:"members",level:2},{value:"useGet()",id:"useget",level:3},{value:"useGetList()",id:"usegetlist",level:3},{value:"useCreate()",id:"usecreate",level:3},{value:"useUpdate()",id:"useupdate",level:3},{value:"usePartialUpdate()",id:"usepartialupdate",level:3},{value:"useDelete()",id:"usedelete",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"hookifyResource() - Collection of CRUD hook Endpoints"),(0,a.kt)("meta",{name:"docsearch:pagerank",content:"20"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hookifyResource()")," Turns any ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resource")," (collection of ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),") into a collection\nof hooks that return ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"TypeScript >=4.3 is required for generative types to work correctly.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="api/ArticleResource.ts"',title:'"api/ArticleResource.ts"'},"import React from 'react';\nimport { createResource, hookifyResource, Entity } from '@rest-hooks/rest';\n\nclass Article extends Entity {\n  id = '';\n  title = '';\n  content = '';\n\n  pk() {\n    return this.id;\n  }\n}\nconst AuthContext = React.createContext('');\n\nconst ArticleResourceBase = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\nexport const ArticleResource = hookifyResource(\n  ArticleResourceBase,\n  function useInit() {\n    const accessToken = React.useContext(AuthContext);\n    return {\n      headers: {\n        'Access-Token': accessToken,\n      },\n    };\n  },\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx"',title:'"ArticleDetail.tsx"'},"import { ArticleResource } from './api/ArticleResource';\n\nfunction ArticleDetail({ id }) {\n  const article = useSuspense(ArticleResource.useGet(), { id });\n  const updateArticle = ArticleResource.useUpdate();\n  const controller = useController();\n  const onSubmit = () => controller.fetch(updateArticle, { id }, body);\n\n  return <Form onSubmit={onSubmit} initialValues={article} />;\n}\nrender(<ArticleDetail id=\"1\" />);\n")),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("p",null,"Assuming you use the unchanged result of ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource()"),", these will be your methods"),(0,a.kt)("h3",{id:"useget"},"useGet()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("a",{parentName:"li",href:"/rest/api/Entity"},"schema"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// GET //test.com/api/abc/xyz\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).useGet()({\n  group: 'abc',\n  id: 'xyz',\n});\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,a.kt)("h3",{id:"usegetlist"},"useGetList()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'GET'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"hookifyResource(createResource({ path: '/:first/:second' })).useGetList()\n  .path === '/:first';\nhookifyResource(createResource({ path: '/:first' })).useGetList().path ===\n  '/';\n"))))),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("a",{parentName:"li",href:"/rest/api/Array"},"[","schema","]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// GET //test.com/api/abc?isExtra=xyz\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).useGetList()({\n  group: 'abc',\n  isExtra: 'xyz',\n});\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#invalidate"},"Controller.invalidate")),(0,a.kt)("h3",{id:"usecreate"},"useCreate()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'POST'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"shortenPath(path)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removes the last argument:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"hookifyResource(createResource({ path: '/:first/:second' })).useCreate()\n  .path === '/:first';\nhookifyResource(createResource({ path: '/:first' })).useCreate().path ===\n  '/';\n"))))),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("inlineCode",{parentName:"li"},"schema"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// POST //test.com/api/abc\n// BODY { \"title\": \"winning\" }\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).useCreate()({ group: 'abc' }, { title: 'winning' });\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,a.kt)("h3",{id:"useupdate"},"useUpdate()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'PUT'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("inlineCode",{parentName:"li"},"schema"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// PUT //test.com/api/abc/xyz\n// BODY { \"title\": \"winning\" }\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).useUpdate()({ group: 'abc', id: 'xyz' }, { title: 'winning' });\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,a.kt)("h3",{id:"usepartialupdate"},"usePartialUpdate()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'PATCH'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("inlineCode",{parentName:"li"},"schema"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// PATCH //test.com/api/abc/xyz\n// BODY { \"title\": \"winning\" }\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).usePartialUpdate()({ group: 'abc', id: 'xyz' }, { title: 'winning' });\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")),(0,a.kt)("h3",{id:"usedelete"},"useDelete()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: 'DELETE'"),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},"schema: ",(0,a.kt)("a",{parentName:"li",href:"/rest/api/Delete"},"new schema.Delete(schema)")),(0,a.kt)("li",{parentName:"ul"},"process:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(value, params) {\n  return value && Object.keys(value).length ? value : params;\n},\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// DELETE //test.com/api/abc/xyz\nhookifyResource(\n  createResource({ urlPrefix: '//test.com', path: '/api/:group/:id' }),\n).useDelete()({\n  group: 'abc',\n  id: 'xyz',\n});\n")),(0,a.kt)("p",null,"Commonly used with ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/Controller#fetch"},"Controller.fetch")))}p.isMDXComponent=!0},30433:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),c=r(63735),u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[E,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&g.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,r=N.indexOf(t),n=g[r].value;n!==E&&(C(t),x(n),null!=m&&v(m,String(n)))},Z=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:Z,onClick:w},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":E===t})}),r??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},28423:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(67294),a=r(87462),o=r(99401),l=r(6832),s=r(86010),i=r(49544),c=r(45045);function u(){return n.createElement(n.Fragment,null,n.createElement("script",{dangerouslySetInnerHTML:{__html:d},type:"application/javascript"}))}var p=(0,n.memo)(u);const d=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=r(24338),f=r(80086),h=r(45440);function g(e){let{children:t,transformCode:r,groupId:c,defaultOpen:u,row:d,hidden:m,fixtures:f,includeEndpoints:g,...b}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,l.Z)().siteConfig.themeConfig,v=(0,o.p)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,s.Z)(h.Z.playgroundContainer,{[h.Z.row]:d,[h.Z.hidden]:m})},n.createElement(i.nu,(0,a.Z)({theme:v},b),n.createElement(y,{reverse:"top"===k,row:d,fixtures:f,includeEndpoints:g,groupId:c,defaultOpen:u},t))),n.createElement(p,null))}function y(e){let{reverse:t,children:r,row:a,fixtures:o,includeEndpoints:l,groupId:s,defaultOpen:u}=e;const{handleCodeChange:p,codes:d,codeTabs:h}=(0,m.h)(r),g=d.join("\n");return n.createElement(v,{reverse:t},n.createElement(m.L,{fixtures:o,row:a,codeTabs:h,handleCodeChange:p,codes:d}),n.createElement(c.Z,{fallback:n.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(f.Z,{key:"preview",includeEndpoints:l,groupId:s,defaultOpen:u,row:a,fixtures:o}))},n.createElement(k,{code:g,includeEndpoints:l,groupId:s,defaultOpen:u,row:a,fixtures:o})))}g.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),k=(0,n.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,41380))));function v(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}v.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:r,hidden:a=!1,defaultOpen:o,row:l=!1,fixtures:s}=e;return n.createElement(g,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:o,row:l,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,n.memo)(E)},47885:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(30433),a=r(65559),o=r(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(n.Z,{value:"ts"},t[0]),o.createElement(n.Z,{value:"js"},t[1]))}},45045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(19666),a=r(67294);function o(e){let{fallback:t,children:r}=e;return a.createElement(n.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},r)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o=r(45440);function l(e){let{children:t,className:r,onClick:l}=e;return n.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,r,l?o.Z.clickable:null),onClick:l},t)}},24338:(e,t,r)=>{"use strict";r.d(t,{L:()=>N,h:()=>C});var n=r(87462),a=r(11614),o=r(86010),l=r(67294),s=r(69762),i=r(13743),c=r(45440);function u(e){let{fixtures:t}=e;return l.createElement("div",{className:c.Z.fixtureBlock},t.map((e=>l.createElement("div",{key:e.endpoint.key(...e.args),className:c.Z.fixtureItem},l.createElement("div",{className:c.Z.fixtureHeader},e.endpoint.key(...e.args)),l.createElement(d,{fixture:e})))))}var p=(0,l.memo)(u);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":l.createElement(i.Z,{language:"json",className:c.Z.fixtureJson},JSON.stringify(t.response))}var m=r(62974),f=r(49544);const h=(0,l.memo)(f.uz);var g=r(76226),y=r(30573);let b;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!b){const n=y.Z.init();n.then((e=>{e&&(b=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const a=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const r=/\/\d+\//g.exec(t)?.[0]??"",n=t.substring(r.length-1);return{label:n,insertText:n.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const a=r.value,[o,l,s,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,r)=>{const n=e[r];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(n)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const k=(0,l.memo)(g.ZP);const v={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},E={...v,fontSize:14,lineHeight:20};var x=r(3495).Z?function(e){let{onChange:t,code:r,path:n,autoFocus:a=!1,large:o=!1,...s}=e;const i=o?E:v;n.endsWith(".tsx")||n.endsWith(".ts")||(n+=".tsx");const[c,u]=(0,l.useState)("100%"),p=(0,l.useCallback)((e=>{a&&e.focus();const t=Object.keys(s).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const r=i.lineHeight,n=e.getDomNode(),o=n.getElementsByClassName("view-lines")[0];let l=0;const c=e.getModel().getLineCount()*r+10;n.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=o.childElementCount*r+10;l=o.childElementCount,n.style.height=t+"px",u(c),e.layout()}),0)}))}),[]);return l.createElement(k,{path:n,defaultLanguage:"typescript",onChange:t,defaultValue:r,options:i,theme:"prism",onMount:p,height:c,loading:l.createElement(f.uz,{language:"tsx",code:r,disabled:!0})})}:function(e){let{onChange:t,code:r}=e;return l.createElement(h,{onChange:t,code:r})};function N(e){let{fixtures:t,row:r,codeTabs:a,handleCodeChange:s,codes:i,large:u=!1}=e;const p=(0,l.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[d,m]=(0,l.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return l.createElement("div",null,l.createElement(T,{fixtures:!r&&t,title:r&&1===a.length?a[0].title:void 0}),r&&a.length>1?l.createElement(R,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:d,onClick:e=>m((t=>t.map(((t,r)=>r!==e))))}):null,a.map(((e,t)=>{let{title:a,path:f,code:h,collapsed:g,...y}=e;return l.createElement(l.Fragment,{key:t},!r&&a?l.createElement(Z,{onClick:()=>m((e=>{const r=[...e];return r[t]=!r[t],r})),closed:d[t],title:a}):null,l.createElement("div",{key:t,className:(0,o.Z)(c.Z.playgroundEditor,{[c.Z.hidden]:d[t]})},l.createElement(x,(0,n.Z)({key:t,onChange:s[t],code:i[t],path:"/"+p+"/"+(f||a||"default.tsx")},y,{large:u}))))})))}function C(e){const t=(0,l.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:a,...o}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:a,...o}}))),[e]),[r,n]=(0,l.useReducer)(w,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,l.useMemo)((()=>t.map(((e,t)=>e=>{n({i:t,code:e})}))),[t.length]),codes:r,codeTabs:t}}function w(e,t){const r=[...e];return r[t.i]=t.code,r}function Z(e){let{onClick:t,closed:r,title:n}=e;return l.createElement(m.Z,{className:c.Z.small,onClick:t},l.createElement("span",{className:(0,o.Z)(c.Z.arrow,r?c.Z.right:c.Z.down)},"\u25b6"),n)}function R(e){let{titles:t,closedList:r,onClick:n}=e;const{values:a}=(0,l.useContext)(s.Z),i=a.length>0;return l.createElement(m.Z,{className:(0,o.Z)({[c.Z.small]:i,[c.Z.subtabs]:i},c.Z.noupper,c.Z.tabControls)},l.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>l.createElement("div",{role:"tab",key:t,onClick:()=>n(t),className:(0,o.Z)(c.Z.tab,{[c.Z.selected]:!r[t]})},e)))))}function S(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,l.useContext)(s.Z);return l.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:n,label:a}=r;return l.createElement("div",{role:"tab",tabIndex:e===n?0:-1,"aria-selected":e===n,key:n,className:(0,o.Z)(c.Z.tab,{[c.Z.selected]:e===n}),onFocus:t,onClick:t,value:n},a)})))}function _(e){let{children:t}=e;return l.createElement(m.Z,{className:c.Z.tabControls},l.createElement("div",{className:c.Z.title},t),l.createElement(S,null))}function T(e){let{title:t,fixtures:r}=e;const{values:n}=(0,l.useContext)(s.Z),a=n.length>0;return l.createElement(l.Fragment,null,r.length?l.createElement(l.Fragment,null,l.createElement(m.Z,{className:c.Z.small},"Fixtures"),l.createElement(p,{fixtures:r})):null,a?l.createElement(_,null,t):null)}T.defaultProps={title:l.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(67294),a=r(11614),o=r(76602),l=r(63735),s=r(39714),i=r(86010),c=r(92785),u=r(92954),p=r(48256),d=r(3604),m=r(45045),f=r(29451),h=r(287),g=r(70524);function y(e){let{value:t}=e;const r="dark"===(0,g.I)().colorMode,a=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[r,a]);return n.createElement(h.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:o,hideRoot:!0})}function b(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const r=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=r(45440);function x(e){let{toggle:t,selectedValue:r}=e;const a="y"===r,o=a?E.Z.right:E.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,i.Z)(E.Z.arrow,o,E.Z.vertical)},"\u25b6")),a?n.createElement(w,null):null)}var N=(0,n.memo)(x);function C(){const e=(0,n.useContext)(f.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(y,{value:t})}const w=(0,n.memo)(C);function Z(e){let{groupId:t,defaultOpen:r,row:a,fixtures:f}=e;const{tabGroupChoices:h,setTabGroupChoices:g}=(0,o.U)(),[y,b]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:k}=(0,l.o5)();if(null!=t){const e=h[t];null!=e&&e!==y&&b(e)}const v=(0,n.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),x=(0,n.useMemo)((()=>[new c.Z,new u.Z(p.Z)]),[]),C=!("n"===y||!a);return n.createElement(d.Z,{managers:x},n.createElement(s.Z,{fixtures:f,silenceMissing:!0},n.createElement("div",{className:(0,i.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:C})},n.createElement(m.Z,{fallback:n.createElement(S,null)},n.createElement(_,null))),n.createElement(N,{selectedValue:y,toggle:v})))}var R=(0,n.memo)(Z);function S(){return n.createElement("div",null,"Loading...")}const _=(0,n.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,15929))));var T=r(62974);function j(e){let{groupId:t,defaultOpen:r,row:o,fixtures:l}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(T.Z,null,n.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:E.Z.playgroundResult},n.createElement(R,{groupId:t,defaultOpen:r,row:o,fixtures:l})))}var O=(0,n.memo)(j)},3495:(e,t)=>{"use strict";const r="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=r},57489:(e,t,r)=>{"use strict";var n=r(67294),a=r(64820);const o={React:n,...n,...a};t.Z=o},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((()=>r.t(a,23)))}a.keys=()=>Object.keys(n),a.id=73795,e.exports=a}}]);