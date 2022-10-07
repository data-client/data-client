/*! For license information please see 33d3b921.da487801.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[40612],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var E=v.prototype=new b;E.constructor=v,y(E,g.prototype),E.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return s=s(l=e),e=""===a?"."+N(l,0):a,k(s)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),P(s,t,o,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+e)),t.push(s)),1;if(l=0,a=""===a?".":a+":",k(e))for(var c=0;c<e.length;c++){var u=a+N(i=e[c],c);l+=P(i,t,o,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=P(i=i.value,t,o,u=a+N(i,c++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function A(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function U(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var Z={current:null},j={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71316:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(27378),n(3905)),a=n(54514);const s={title:"Entities with nested structure",sidebar_label:"Nesting related data"},i=void 0,l={unversionedId:"guides/nested-response",id:"guides/nested-response",title:"Entities with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/../docs/rest/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/rest/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/rest/guides/nested-response.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665186231,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Entities with nested structure",sidebar_label:"Nesting related data"},sidebar:"docs",previous:{title:"Aborting Fetch",permalink:"/rest/guides/abort"},next:{title:"Capturing Mutation Side-Effects",permalink:"/rest/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entity")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(a.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Post.ts"',title:'"api/Post.ts"'},"class User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nclass Post extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly author: User = User.fromJS({});\n  readonly contributors: User[] = [];\n\n  static schema = {\n    author: User,\n    contributors: [User],\n  };\n  pk() {\n    return this.id;\n  }\n}\nconst getPost = new RestEndpoint({\n  urlPrefix: 'http://fakeapi.com',\n  path: '/article/:id',\n  schema: Post,\n  fetch({ id }) {\n    return Promise.resolve({\n      id,\n      author: { id: '123', name: 'Jim' },\n      content: 'Happy day',\n      contributors: [{ id: '100', name: 'Eliza' }],\n    });\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostPage.tsx" collapsed',title:'"PostPage.tsx"',collapsed:!0},"function PostPage() {\n  const post = useSuspense(getPost, { id: '5' });\n  return (\n    <div>\n      <p>\n        {post.content} - <cite>{post.author.name}</cite>\n      </p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity"},"Entities")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport { User } from './User';\n\nexport class Article extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: User = User.fromJS({});\n  readonly contributors: User[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n\n  static schema: { [k: string]: Schema } = {\n    author: User,\n    contributors: [User],\n  };\n}\n\n// we set the schema here since we can correctly reference Article\nUser.schema = {\n  posts: [Article],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/User.ts"',title:'"api/User.ts"'},"import { Entity } from '@rest-hooks/rest';\nimport type { Article } from './Article';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport class User extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: Article[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n")))}p.isMDXComponent=!0},84195:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]})},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Le});var r=n(67294),o=n(4391),a=n(12171),s=n(56265),i=n(78357),l=n(56855),c=n(99494),u=n(70794),d=n(86429),p=n(67288);class m extends s.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class f extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class y extends d.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const h=function(e){let{path:t,schema:n,Endpoint:r=d.Z}=e;const o=(0,p.Z)({path:t,schema:n,Endpoint:r}),a=o.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await o.partialUpdate.call(this,...t),id:t[0].id}}});return{...o,partialUpdate:a,create:o.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await o.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:f,Endpoint:y}),g={...h,partialUpdate:h.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(h.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:h.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[h.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:h.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var b=n(87462),v=n(49544),E=n(86010),k=n(95999),w=n(52263),x=n(72389),S=n(66412),O=n(55423),_=n(84195);const C="playgroundContainer_sLUA",N="row_YGZs",P="hidden_Hh8i",A="playgroundHeader_Zx4K",U="small_xksL",Z="clickable_YHiX",j="noupper_WDCF",T="subtabs_XtJb",I="playgroundEditor_lYwu",R="arrow_tivA",F="vertical_OMeC",D="right_vs_C",M="left_iDcB",$="down_oRky",L="playgroundPreview_rk9R",q="playgroundError_sRnA",z="playgroundResult_tefG",B="debugToggle_zlro",V="tabControls_trxh",J="title_poUY",X="tabs_m54V",G="tab_bTGw",H="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(W,{fixture:e})))))}const K=(0,r.memo)(Y);function W(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function Q(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,E.Z)(A,n,o?Z:null),onClick:o},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),oe=n(39714),ae=n(7094),se=n(12466),ie=n(91262),le=n(32041),ce=n(97723),ue=n(92949);function de(e){let{value:t}=e;const n="dark"===(0,ue.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:fe,theme:a,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function fe(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function ye(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?D:M;return r.createElement(r.Fragment,null,r.createElement("div",{className:B,onClick:t},"Store",r.createElement("span",{className:(0,E.Z)(R,a,F)},"\u25b6")),o?r.createElement(be,null):null)}const he=(0,r.memo)(ye);function ge(){const e=(0,r.useContext)(le.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(de,{value:t})}const be=(0,r.memo)(ge);function ve(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;const{tabGroupChoices:s,setTabGroupChoices:i}=(0,ae.U)(),[l,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:u}=(0,se.o5)();if(null!=t){const e=s[t];null!=e&&e!==l&&c(e)}const d=(0,r.useCallback)((e=>{u(e.currentTarget),c((e=>"y"===e?"n":"y")),i(t,"y"===l?"n":"y")}),[u,t,l,i]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===l||!o);return r.createElement(ne.nq,{managers:p},r.createElement(oe.Z,{fixtures:a,silenceMissing:!0},r.createElement("div",{className:(0,E.Z)(L,{[P]:m})},r.createElement(ie.Z,{fallback:r.createElement(ke,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(ke,null)},r.createElement(v.i5,null),r.createElement(v.IF,{className:q}))))),r.createElement(he,{selectedValue:l,toggle:d})))}const Ee=(0,r.memo)(ve);function ke(){return r.createElement("div",null,"Loading...")}function we(e){let{groupId:t,defaultOpen:n,row:o,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(Q,null,r.createElement(k.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:z},r.createElement(Ee,{groupId:t,defaultOpen:n,row:o,fixtures:a})))}const xe=(0,r.memo)(we);function Se(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(_.Z);return r.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,E.Z)(G,{[H]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function Oe(e){let{children:t}=e;return r.createElement(Q,{className:V},r.createElement("div",{className:J},t),r.createElement(Se,null))}function _e(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(_.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(Q,{className:U},"Fixtures"),r.createElement(K,{fixtures:n})):null,a?r.createElement(Oe,null,t):null)}function Ce(e){let{children:t,transformCode:n,groupId:o,defaultOpen:a,row:s,hidden:i,fixtures:l,...c}=e;const{liveCodeBlock:{playgroundPosition:u}}=(0,w.Z)().siteConfig.themeConfig,d=(0,S.p)(),p=(0,x.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,O.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText}(`${e};`))),[n]),f=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[y,h]=(0,r.useReducer)(Pe,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),g=(0,r.useMemo)((()=>f.map(((e,t)=>e=>h({i:t,code:e})))),[f.length]),[k,_]=(0,r.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,E.Z)(C,{[N]:s,[P]:i})},r.createElement(v.nu,(0,b.Z)({theme:d},c),r.createElement(Ne,{reverse:"top"===u},r.createElement("div",null,r.createElement(_e,{fixtures:l}),s&&f.length>1?r.createElement(Ze,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>_((t=>t.map(((t,n)=>n!==e))))}):null,f.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,null,!s&&n?r.createElement(Ue,{onClick:()=>_((e=>{const n=[...e];return n[t]=!n[t],n})),closed:k[t],title:n}):null,k[t]?null:r.createElement(Ae,{key:`${p}-${t}`,className:I,onChange:g[t],code:y[t]}))}))),r.createElement(v.nu,(0,b.Z)({code:y.join("\n"),transformCode:m},c),r.createElement(xe,{groupId:o,defaultOpen:a,row:s,fixtures:l})))))}function Ne(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Pe(e,t){const n=[...e];return n[t.i]=t.code,n}_e.defaultProps={title:r.createElement(k.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Ce.defaultProps={row:!1,hidden:!1},Ne.defaultProps={reverse:!1};const Ae=(0,r.memo)(v.uz);function Ue(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(Q,{className:U,onClick:t},r.createElement("span",{className:(0,E.Z)(R,n?D:$)},"\u25b6"),o)}function Ze(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(_.Z),s=a.length>0;return r.createElement(Q,{className:(0,E.Z)({[U]:s,[T]:s},j,V)},r.createElement("div",{className:X,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,E.Z)(G,{[H]:!n[t]})},e)))))}var je=n(64146),Te=n(82026);class Ie extends s.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}Ie.schema={updatedAt:Date};const Re=new o.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:Ie});const Fe={...g,getList:g.getList.extend({process:e=>e.slice(0,7)})},De={...a,...i,...c,...l,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:u.Z,lastUpdated:Re,TimedEntity:Ie,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,o]=r.useState(0),{resetEntireStore:a}=(0,je.Z)();return r.createElement(Te.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:q},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{a(),o((e=>e+1))}},"Clear Error"))}},t)}},Me={...De,Todo:f,TodoResource:Fe,TodoEndpoint:y},$e=e=>{let{children:t,endpointCode:n,groupId:o,hidden:a=!1,defaultOpen:s,row:i=!1,fixtures:l}=e;return r.createElement(Ce,{scope:n||Array.isArray(t)?De:Me,noInline:!0,groupId:o,defaultOpen:s,row:i,hidden:a,fixtures:l},"string"==typeof t?(n?n+"\n\n":"")+t:Array.isArray(t)?t:t.props.children)};$e.defaultProps={defaultOpen:"n",fixtures:[]};const Le=(0,r.memo)($e)},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);