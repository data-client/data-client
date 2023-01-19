/*! For license information please see 6a84809e.9fc96d85.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[29387],{41535:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=k.prototype=new b;v.constructor=k,h(v,y.prototype),v.isPureReactComponent=!0;var E=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,a)&&!N.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var Z=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return l=l(i=e),e=""===o?"."+_(i,0):o,E(l)?(a="",null!=e&&(a=e.replace(Z,"$&/")+"/"),T(l,t,a,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Z,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",E(e))for(var c=0;c<e.length;c++){var u=o+_(s=e[c],c);i+=T(s,t,a,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=T(s=s.value,t,a,u=o+_(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function A(e,t,r){if(null==e)return e;var n=[],a=0;return T(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},j={transition:null}},27378:(e,t,r)=>{"use strict";r(41535)},44153:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var n=r(87462),a=(r(27378),r(3905)),o=r(47885),l=r(65559),s=r(30433),i=r(52393),c=r(62162);const u={id:"README",title:"REST Usage",sidebar_label:"Usage"},d=void 0,p={unversionedId:"README",id:"README",title:"REST Usage",description:"Using REST APIs with Rest Hooks",source:"@site/../docs/rest/README.md",sourceDirName:".",slug:"/",permalink:"/rest/",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/README.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1674142018,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{id:"README",title:"REST Usage",sidebar_label:"Usage"},sidebar:"docs",next:{title:"Pagination",permalink:"/rest/guides/pagination"}},m={},f=[{value:"Define the API",id:"define-the-api",level:2},{value:"Bind the data with Suspense",id:"bind-the-data-with-suspense",level:2},{value:"Mutate the data",id:"mutate-the-data",level:2}],h={toc:f};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Using REST APIs with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/rest",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-the-api"},"Define the API"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," are the ",(0,a.kt)("em",{parentName:"p"},"methods")," of your data. ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schemas")," define the data model. ",(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"Resources")," are\na collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoints")," around one ",(0,a.kt)("inlineCode",{parentName:"p"},"schema"),"."),(0,a.kt)(o.Z,{mdxType:"LanguageTabs"},(0,a.kt)(c.Z,{mdxType:"TypeScriptEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/User.ts" collapsed',title:'"api/User.ts"',collapsed:!0},"import { Entity } from '@rest-hooks/rest';\n\nexport class User extends Entity {\n  id: number | undefined = undefined;\n  username = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\nimport { User } from './User';\n\nexport class Article extends Entity {\n  id: number | undefined = undefined;\n  title = '';\n  content = '';\n  author = User.fromJS({});\n  tags: string[] = [];\n  createdAt = new Date(0);\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema = {\n    author: User,\n    createdAt: Date,\n  }\n}\n\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="api/Article.js"',title:'"api/Article.js"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Article extends Entity {\n  id = undefined;\n  title = '';\n  content = '';\n  author = User.fromJS({});\n  tags = [];\n  createdAt = new Date(0);\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema = {\n    author: User,\n    createdAt: Date,\n  }\n}\nexport const ArticleResource = createResource({\n  urlPrefix: 'http://test.com',\n  path: '/article/:id',\n  schema: Article,\n});\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," is a kind of schema that ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/normalization"},"has a primary key (pk)"),". This is what allows us\nto ",(0,a.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/choosing-the-state-structure#principles-for-structuring-state"},"avoid state duplication"),", which\nis one of the core design choices that enable such high safety and performance characteristics."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"static schema")," lets us specify declarative transformations like auto ",(0,a.kt)("a",{parentName:"p",href:"/rest/guides/network-transform#deserializing-fields"},"field deserialization")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"createdAt")," and ",(0,a.kt)("a",{parentName:"p",href:"/rest/guides/nested-response"},"nesting the author field"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#url"},"Urls are constructed")," by combining the urlPrefix with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/path-to-regexp"},"path templating"),".\nTypeScript enforces the arguments specified with a prefixed colon like ",(0,a.kt)("inlineCode",{parentName:"p"},":id")," in this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// GET http://test.com/article/5\nTodoResource.get({ id: 5 })\n")),(0,a.kt)("h2",{id:"bind-the-data-with-suspense"},"Bind the data with Suspense"),(0,a.kt)(l.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from '@rest-hooks/react';\nimport { ArticleResource } from 'api/article';\n\nexport default function ArticleDetail({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(s.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from '@rest-hooks/react';\nimport { ArticleResource } from 'api/article';\nimport ArticleSummary from './ArticleSummary';\n\nexport default function ArticleList() {\n  const articles = useSuspense(ArticleResource.getList);\n  return (\n    <section>\n      {articles.map(article => (\n        <ArticleSummary key={article.pk()} article={article} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," acts like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"await"),", ensuring the data is available before returning. ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency"},"Learn how to be declare your data dependencies")),(0,a.kt)("h2",{id:"mutate-the-data"},"Mutate the data"),(0,a.kt)(l.Z,{defaultValue:"Create",values:[{label:"Create",value:"Create"},{label:"Update",value:"Update"},{label:"Delete",value:"Delete"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Create",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'@rest-hooks/react\';\nimport { ArticleResource } from \'api/article\';\n\nexport default function NewArticleForm() {\n  const ctrl = useController();\n  return (\n    <Form\n      onSubmit={e =>\n        ctrl.fetch(ArticleResource.create, new FormData(e.target))\n      }\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#create"},"create")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(s.Z,{value:"Update",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},'import { useController } from \'@rest-hooks/react\';\nimport { ArticleResource } from \'api/article\';\n\nexport default function UpdateArticleForm({ id }: { id: number }) {\n  const article = useSuspense(ArticleResource.get, { id });\n  const ctrl = useController();\n  return (\n    <Form\n      onSubmit={e =>\n        ctrl.fetch(ArticleResource.update, { id }, new FormData(e.target))\n      }\n      initialValues={article}\n    >\n      <FormField name="title" />\n      <FormField name="content" type="textarea" />\n      <FormField name="tags" type="tag" />\n    </Form>\n  );\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rest/api/createResource#update"},"update")," then takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nthen takes any ",(0,a.kt)("inlineCode",{parentName:"p"},"keyable")," body to send as the payload and then returns a promise that\nresolves to the new Resource created by the API. It will automatically be added in the cache for any consumers to display.")),(0,a.kt)(s.Z,{value:"Delete",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="article.tsx"',title:'"article.tsx"'},"import { useController } from '@rest-hooks/react';\nimport { Article, ArticleResource } from 'api/article';\n\nexport default function ArticleWithDelete({ article }: { article: Article }) {\n  const ctrl = useController();\n  return (\n    <article>\n      <h2>{article.title}</h2>\n      <div>{article.content}</div>\n      <button\n        onClick={() =>\n          ctrl.fetch(ArticleResource.delete, { id: article.id })\n        }\n      >\n        Delete\n      </button>\n    </article>\n  );\n}\n")))),(0,a.kt)("p",null,"We use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," in\nthe example since it doesn't require any opinionated form state management solution.\nFeel free to use whichever one you prefer."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/mutations"},"Mutations")," automatically updates ",(0,a.kt)("em",{parentName:"p"},"all")," usages without the need for\nadditional requests."))}g.isMDXComponent=!0},30433:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),c=r(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:r,defaultValue:l,values:p,groupId:m,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[E,x]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,r=w.indexOf(t),n=g[r].value;n!==E&&(N(t),x(n),null!=m&&v(m,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:S,onClick:C},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":E===t})}),r??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},47885:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(30433),a=r(65559),o=r(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(n.Z,{value:"ts"},t[0]),o.createElement(n.Z,{value:"js"},t[1]))}},52393:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(13743),a=r(30433),o=r(65559),l=r(67294);function s(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(a.Z,{value:"yarn"},l.createElement(n.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(a.Z,{value:"npm"},l.createElement(n.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o=r(45440);function l(e){let{children:t,className:r,onClick:l}=e;return n.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,r,l?o.Z.clickable:null),onClick:l},t)}},24338:(e,t,r)=>{"use strict";r.d(t,{L:()=>C,h:()=>S});var n=r(87462),a=r(11614),o=r(86010),l=r(67294),s=r(13743),i=r(45440);function c(e){let{fixtures:t}=e;return l.createElement("div",{className:i.Z.fixtureBlock},t.map((e=>l.createElement("div",{key:e.endpoint.key(...e.args),className:i.Z.fixtureItem},l.createElement("div",{className:i.Z.fixtureHeader},e.endpoint.key(...e.args)),l.createElement(d,{fixture:e})))))}var u=(0,l.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":l.createElement(s.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}var p=r(62974),m=r(49544);const f=(0,l.memo)(m.uz);var h=r(76226),g=r(87594),y=r.n(g),b=r(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const n=b.Z.init();n.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const a=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const r=/\/\d+\//g.exec(t)?.[0]??"",n=t.substring(r.length-1);return{label:n,insertText:n.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const a=r.value,[o,l,s,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,r)=>{const n=e[r];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(n)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const v=(0,l.memo)(h.ZP);const E={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},x={...E,fontSize:14,lineHeight:20};var w=r(3495).Z?function(e){let{onChange:t,code:r,path:n,autoFocus:a=!1,large:o=!1,...s}=e;const i=o?x:E;n.endsWith(".tsx")||n.endsWith(".ts")||(n+=".tsx");const[c,u]=(0,l.useState)("100%"),d=(0,l.useCallback)((e=>{a&&e.focus();const t=Object.keys(s).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(y());if(t.length){let r=t[0][0],n=r;const a=[];t[0].forEach((e=>{e===n?n++:(a.push({selectionStartLineNumber:r,selectionStartColumn:0,positionLineNumber:n,positionColumn:0}),r=e,n=e+1)})),a.push({selectionStartLineNumber:r,selectionStartColumn:0,positionLineNumber:n,positionColumn:0}),e.setSelections(a)}const r=i.lineHeight,n=e.getDomNode(),o=n.getElementsByClassName("view-lines")[0];let l=0;const c=e.getModel().getLineCount()*r+10;n.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=e.getModel().getLineCount()*r+10;l=o.childElementCount,n.style.height=t+"px",u(t),e.layout()}),0)}))}),[]);return l.createElement(v,{path:n,defaultLanguage:"typescript",onChange:t,defaultValue:r,options:i,theme:"prism",onMount:d,height:c,loading:l.createElement(m.uz,{language:"tsx",code:r,disabled:!0})})}:function(e){let{onChange:t,code:r}=e;return l.createElement(f,{onChange:t,code:r})},N=r(69762);function C(e){let{fixtures:t,row:r,codeTabs:a,handleCodeChange:s,codes:c,large:u=!1,isPlayground:d=!0}=e;const p=(0,l.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,f]=(0,l.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return l.createElement("div",null,l.createElement(D,{fixtures:!r&&t,title:r&&1===a.length?a[0].title:void 0}),r&&a.length>1?l.createElement(T,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>f((t=>t.map(((t,r)=>r!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:h,path:g,code:y,collapsed:b,...k}=e;return l.createElement(l.Fragment,{key:d},!r&&h?l.createElement(_,{onClick:()=>f((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:h,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&u}):null,l.createElement("div",{key:d,className:(0,o.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},l.createElement(w,(0,n.Z)({key:d,onChange:s[d],code:c[d],path:"/"+p+"/"+(g||h||"default.tsx")},k,{large:u}))))})))}function S(e){const t=(0,l.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:a,...o}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:a,...o}}))),[e]),[r,n]=(0,l.useReducer)(Z,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,l.useMemo)((()=>t.map(((e,t)=>e=>{n({i:t,code:e})}))),[t.length]),codes:r,codeTabs:t}}function Z(e,t){const r=[...e];return r[t.i]=t.code,r}function _(e){let{onClick:t,closed:r,title:n,collapsible:a=!1,lastChild:s=!1}=e;return a?l.createElement(p.Z,{className:(0,o.Z)(i.Z.small,{[i.Z.lastChild]:s&&r}),onClick:t},l.createElement("span",{className:(0,o.Z)(i.Z.arrow,r?i.Z.right:i.Z.down)},"\u25b6"),n):l.createElement("div",{className:i.Z.codeHeader},n)}function T(e){let{titles:t,closedList:r,onClick:n,isPlayground:a=!0}=e;const{values:s}=(0,l.useContext)(N.Z),c=s.length>0;return l.createElement(p.Z,{className:(0,o.Z)({[i.Z.small]:c||!a,[i.Z.subtabs]:c},i.Z.noupper,i.Z.tabControls)},l.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>l.createElement("div",{role:"tab",key:t,onClick:()=>n(t),className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:!r[t]})},e)))))}function A(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,l.useContext)(N.Z);return l.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:n,label:a}=r;return l.createElement("div",{role:"tab",tabIndex:e===n?0:-1,"aria-selected":e===n,key:n,className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:e===n}),onFocus:t,onClick:t,value:n},a)})))}function R(e){let{children:t}=e;return l.createElement(p.Z,{className:i.Z.tabControls},l.createElement("div",{className:i.Z.title},t),l.createElement(A,null))}function D(e){let{title:t,fixtures:r}=e;const{values:n}=(0,l.useContext)(N.Z),a=n.length>0;return l.createElement(l.Fragment,null,r.length?l.createElement(l.Fragment,null,l.createElement(p.Z,{className:i.Z.small},"Fixtures"),l.createElement(u,{fixtures:r})):null,a?l.createElement(R,null,t):null)}D.defaultProps={title:l.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},3495:(e,t)=>{"use strict";const r="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=r},62162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(86010),a=r(67294),o=r(24338),l=r(45440);function s(e){let{children:t,row:r}=e;const{handleCodeChange:s,codes:i,codeTabs:c}=(0,o.h)(t);return a.createElement("div",{className:(0,n.Z)(l.Z.playgroundContainer,l.Z.standaloneEditor)},a.createElement(o.L,{fixtures:[],row:void 0===r?c.length>1:r,codeTabs:c,handleCodeChange:s,codes:i,large:!1,isPlayground:!1}))}},57489:(e,t,r)=>{"use strict";var n=r(67294),a=r(64820);const o={React:n,...n,...a};t.Z=o},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((()=>r.t(a,23)))}a.keys=()=>Object.keys(n),a.id=73795,e.exports=a}}]);