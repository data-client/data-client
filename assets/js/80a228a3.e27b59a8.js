"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84195:(e,t,r)=>{const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},107:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),o=r(87462),a=r(49544),l=r(86010),s=r(95999),i=r(52263),c=r(66412),u=r(84195),d=r(45440);function p(e){let{fixtures:t}=e;return n.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args)},n.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",n.createElement(f,{fixture:e})))))}var m=(0,n.memo)(p);function f(e){let{fixture:t}=e;return n.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g,h=r(60975),y=r(51523),b=r(1556);function v(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(u.Z);return n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:a}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function k(e){let{children:t}=e;return n.createElement(h.Z,{className:d.Z.tabControls},n.createElement("div",{className:d.Z.title},t),n.createElement(v,null))}function E(e){let{title:t,fixtures:r}=e;const{values:o}=(0,n.useContext)(u.Z),a=o.length>0;return n.createElement(n.Fragment,null,r.length?n.createElement(n.Fragment,null,n.createElement(h.Z,{className:d.Z.small},"Fixtures"),n.createElement(m,{fixtures:r})):null,a?n.createElement(k,null,t):null)}function Z(e){let{children:t,transformCode:r,groupId:s,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:g,...h}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,i.Z)().siteConfig.themeConfig,b=(0,c.p)();return n.createElement("div",{className:(0,l.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},n.createElement(a.nu,(0,o.Z)({theme:b},h),n.createElement(w,{reverse:"top"===y,row:p,fixtures:f,includeEndpoints:g,groupId:s,defaultOpen:u},t)))}function w(e){let{reverse:t,children:r,row:o,fixtures:l,includeEndpoints:s,groupId:i,defaultOpen:c}=e;const u=(0,n.useMemo)((()=>"string"==typeof r?[{code:r.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(r)?r:[r]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n}}))),[r]),[d,p]=(0,n.useReducer)(N,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),m=(0,n.useMemo)((()=>u.map(((e,t)=>e=>p({i:t,code:e})))),[u.length]),[f,g]=(0,n.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),h=d.join("\n");return n.createElement(C,{reverse:t},n.createElement("div",null,n.createElement(E,{fixtures:!o&&l}),o&&u.length>1?n.createElement(T,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,r)=>r!==e))))}):null,u.map(((e,t)=>{let{title:r}=e;return n.createElement(n.Fragment,{key:t},!o&&r?n.createElement(_,{onClick:()=>g((e=>{const r=[...e];return r[t]=!r[t],r})),closed:f[t],title:r}):null,f[t]?null:n.createElement(P,{key:t,onChange:m[t],code:d[t]}))}))),n.createElement(b.Z,{fallback:n.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(y.Z,{key:"preview",includeEndpoints:s,groupId:i,defaultOpen:c,row:o,fixtures:l}))},n.createElement(R,{code:h,includeEndpoints:s,groupId:i,defaultOpen:c,row:o,fixtures:l})))}E.defaultProps={title:n.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},Z.defaultProps={row:!1,hidden:!1};const x="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(g=navigator)?void 0:g.userAgent),R=(0,n.lazy)((()=>x?Promise.resolve({default:e=>null}):Promise.all([r.e(72887),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,47550))));function C(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}function N(e,t){const r=[...e];return r[t.i]=t.code,r}C.defaultProps={reverse:!1};const O=(0,n.memo)(a.uz);function P(e){let{onChange:t,code:r}=e;return n.createElement(O,{className:d.Z.playgroundEditor,onChange:t,code:r})}function _(e){let{onClick:t,closed:r,title:o}=e;return n.createElement(h.Z,{className:d.Z.small,onClick:t},n.createElement("span",{className:(0,l.Z)(d.Z.arrow,r?d.Z.right:d.Z.down)},"\u25b6"),o)}function T(e){let{titles:t,closedList:r,onClick:o}=e;const{values:a}=(0,n.useContext)(u.Z),s=a.length>0;return n.createElement(h.Z,{className:(0,l.Z)({[d.Z.small]:s,[d.Z.subtabs]:s},d.Z.noupper,d.Z.tabControls)},n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>n.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:!r[t]})},e)))))}const A=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:a,row:l=!1,fixtures:s}=e;return n.createElement(Z,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:a,row:l,hidden:o,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};A.defaultProps={defaultOpen:"n",fixtures:[]};var S=(0,n.memo)(A)},1556:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(91262),o=r(67294);function a(e){let{fallback:t,children:r}=e;return o.createElement(n.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},r)))}},60975:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(86010),a=r(45440);function l(e){let{children:t,className:r,onClick:l}=e;return n.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,r,l?a.Z.clickable:null),onClick:l},t)}},51523:(e,t,r)=>{r.d(t,{Z:()=>A});var n=r(67294),o=r(95999),a=r(27093),l=r(26127),s=r(82038),i=r(83611),c=r(39714),u=r(86010),d=r(7094),p=r(12466),m=r(45440),f=r(32041),g=r(97723),h=r(92949);function y(e){let{value:t}=e;const r="dark"===(0,h.I)().colorMode,o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[r,o]);return n.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:a,hideRoot:!0})}function b(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const r=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:r}=e;const o="y"===r,a=o?m.Z.right:m.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?n.createElement(x,null):null)}var Z=(0,n.memo)(E);function w(){const e=(0,n.useContext)(f.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(y,{value:t})}const x=(0,n.memo)(w);var R=r(1556);function C(e){let{groupId:t,defaultOpen:r,row:o,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:h}=(0,d.U)(),[y,b]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,n.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),E=(0,n.useMemo)((()=>[new i.Z,new a.Z(l.Z)]),[]),w=!("n"===y||!o);return n.createElement(s.nq,{managers:E},n.createElement(c.Z,{fixtures:f,silenceMissing:!0},n.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},n.createElement(R.Z,{fallback:n.createElement(O,null)},n.createElement(P,null))),n.createElement(Z,{selectedValue:y,toggle:k})))}var N=(0,n.memo)(C);function O(){return n.createElement("div",null,"Loading...")}const P=(0,n.lazy)((()=>Promise.all([r.e(72887),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,64511))));var _=r(60975);function T(e){let{groupId:t,defaultOpen:r,row:a,fixtures:l}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(_.Z,null,n.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:m.Z.playgroundResult},n.createElement(N,{groupId:t,defaultOpen:r,row:a,fixtures:l})))}var A=(0,n.memo)(T)},67002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(107);const l={title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},s=void 0,i={unversionedId:"guides/nested-response",id:"version-6.2/guides/nested-response",title:"Resources with nested structure",description:"Say you have a foreignkey author, and an array of foreign keys to contributors.",source:"@site/versioned_docs/version-6.2/guides/nested-response.md",sourceDirName:"guides",slug:"/guides/nested-response",permalink:"/docs/6.2/guides/nested-response",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/nested-response.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Resources with nested structure",sidebar_label:"Nesting related resources (server-side join)"},sidebar:"docs",previous:{title:"Multi-column primary key",permalink:"/docs/6.2/guides/multi-pk"},next:{title:"Capturing Mutation Side-Effects",permalink:"/docs/6.2/guides/rpc"}},c={},u=[{value:"static schema",id:"static-schema",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Say you have a foreignkey author, and an array of foreign keys to contributors."),(0,o.kt)("p",null,"First we need to model what this will look like by adding members to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resource")," definition.\nThese should be the primary keys of the entities we care about."),(0,o.kt)("p",null,"Next we'll provide a definition of nested members in the ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," member."),(0,o.kt)("h2",{id:"static-schema"},"static schema"),(0,o.kt)(a.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class UserResource extends Resource {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/user/';\n}\nclass PostResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'http://fakeapi.com/article/';\n\n  // this override is purely to fake a response\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      fetch({ id }) {\n        return Promise.resolve({\n          id,\n          author: { id: '123', name: 'Jim' },\n          content: 'Happy day',\n          contributors: [{ id: '100', name: 'Eliza' }],\n        });\n      },\n      schema: this,\n    });\n  }\n}\n\nfunction PostPage() {\n  const post = useSuspense(PostResource.detail(), { id: '5' });\n  return (\n    <div>\n      <p>{post.content} - <cite>{post.author.name}</cite></p>\n      <div>Contributors: {post.contributors.map(user => user.name)}</div>\n    </div>\n  );\n}\nrender(<PostPage />);\n"))),(0,o.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,o.kt)("p",null,"If both ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resources")," are in distinct files, this must be handled with care."),(0,o.kt)("p",null,"If two or more ",(0,o.kt)("a",{parentName:"p",href:"/docs/6.2/api/resource"},"Resources")," include each other in their schema, you can dynamically override\none of their ",(0,o.kt)("a",{parentName:"p",href:"../api/Entity#schema"},"schema")," to avoid circular imports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ArticleResource.ts"',title:'"resources/ArticleResource.ts"'},"import { Resource, AbstractInstanceType } from '@rest-hooks/rest';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: UserResource = UserResource.fromJS({});\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static schema = {\n    author: UserResource,\n    contributors: [UserResource],\n  };\n}\n\n// we set the schema here since we can correctly reference ArticleResource\nUserResource.schema = {\n  posts: [ArticleResource],\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/UserResource.ts"',title:'"resources/UserResource.ts"'},"import { Resource } from '@rest-hooks/rest';\nimport type { ArticleResource } from 'resources';\n// we can only import the type else we break javascript imports\n// thus we change the schema of UserResource above\n\nexport default class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly posts: ArticleResource[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/user/';\n}\n")))}p.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);