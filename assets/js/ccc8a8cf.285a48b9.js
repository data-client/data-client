(self.webpackChunk=self.webpackChunk||[]).push([[68884],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>H});var r=n(67294),i=n(87462),s=n(99401),a=n(11614),o=n(6832),l=n(86010),c=n(49544),d=n(69762),u=n(45045),p=n(13743),m=n(45440);function h(e){let{fixtures:t}=e;return r.createElement("div",{className:m.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:m.Z.fixtureItem},r.createElement("div",{className:m.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(f,{fixture:e})))))}var g=(0,r.memo)(h);function f(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:m.Z.fixtureJson},JSON.stringify(t.response))}var y=n(62974);function b(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:k},type:"application/javascript"}))}var v=(0,r.memo)(b);const k=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var E=n(76226),x=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=x.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i)){if(i.endsWith(".")||i.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[s,a,o,l,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),i.languages.typescript.typescriptDefaults.addExtraLib(s,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${l} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.typescriptDefaults.setEagerModelSync(!0),i}))}}const Z=(0,r.memo)(E.ZP);const A={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const C=(0,r.memo)(c.uz);var S=n(3495).Z?function(e){let{onChange:t,code:n,path:i,autoFocus:s=!1,...a}=e;i.endsWith(".tsx")||i.endsWith(".ts")||(i+=".tsx"),function(e,t){const n=function(e){const t=(0,E.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${i}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,i]);const[o,l]=(0,r.useState)("100%"),d=(0,r.useCallback)((e=>{s&&e.focus();const t=Object.keys(a).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let i=0;const o=19*e.getModel().getLineCount()+10;n.style.height=o+"px",l(o),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;i=r.childElementCount,n.style.height=t+"px",l(o),e.layout()}),0)}))}),[]);return r.createElement(Z,{path:i,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:A,theme:"prism",onMount:d,height:o,loading:r.createElement(c.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(C,{onChange:t,code:n})},N=n(80086);function O(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(d.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,l.Z)(m.Z.tab,{[m.Z.selected]:e===i}),onFocus:t,onClick:t,value:i},s)})))}function j(e){let{children:t}=e;return r.createElement(y.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(O,null))}function P(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(d.Z),s=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(y.Z,{className:m.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,s?r.createElement(j,null,t):null)}function _(e){let{children:t,transformCode:n,groupId:a,defaultOpen:d,row:u,hidden:p,fixtures:h,includeEndpoints:g,...f}=e;const{liveCodeBlock:{playgroundPosition:y}}=(0,o.Z)().siteConfig.themeConfig,b=(0,s.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.Z)(m.Z.playgroundContainer,{[m.Z.row]:u,[m.Z.hidden]:p})},r.createElement(c.nu,(0,i.Z)({theme:b},f),r.createElement(R,{reverse:"top"===y,row:u,fixtures:h,includeEndpoints:g,groupId:a,defaultOpen:d},t))),r.createElement(v,null))}function R(e){let{reverse:t,children:n,row:s,fixtures:a,includeEndpoints:o,groupId:d,defaultOpen:p}=e;const h=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i,...s}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i,...s}}))),[n]),[f,y]=(0,r.useReducer)(D,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),b=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{y({i:t,code:e})}))),[g.length]),[v,k]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),E=f.join("\n");return r.createElement(M,{reverse:t},r.createElement("div",null,r.createElement(P,{fixtures:!s&&a}),s&&g.length>1?r.createElement(F,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>k((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:a,code:o,collapsed:c,...d}=e;return r.createElement(r.Fragment,{key:t},!s&&n?r.createElement(I,{onClick:()=>k((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,l.Z)(m.Z.playgroundEditor,{[m.Z.hidden]:v[t]})},r.createElement(S,(0,i.Z)({key:t,onChange:b[t],code:f[t],path:"/"+h+"/"+(a||n||"default.tsx")},d))))}))),r.createElement(u.Z,{fallback:r.createElement(c.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(N.Z,{key:"preview",includeEndpoints:o,groupId:d,defaultOpen:p,row:s,fixtures:a}))},r.createElement(T,{code:E,includeEndpoints:o,groupId:d,defaultOpen:p,row:s,fixtures:a})))}P.defaultProps={title:r.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},_.defaultProps={row:!1,hidden:!1};const L="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),T=(0,r.lazy)((()=>L?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function M(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function D(e,t){const n=[...e];return n[t.i]=t.code,n}function I(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(y.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),i)}function F(e){let{titles:t,closedList:n,onClick:i}=e;const{values:s}=(0,r.useContext)(d.Z),a=s.length>0;return r.createElement(y.Z,{className:(0,l.Z)({[m.Z.small]:a,[m.Z.subtabs]:a},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,l.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}M.defaultProps={reverse:!1};const $=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:s,row:a=!1,fixtures:o}=e;return r.createElement(_,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:s,row:a,hidden:i,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};$.defaultProps={defaultOpen:"n",fixtures:[]};var H=(0,r.memo)($)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(19666),i=n(67294);function s(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),i=n(86010),s=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,i.Z)(s.Z.playgroundHeader,n,a?s.Z.clickable:null),onClick:a},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(67294),i=n(11614),s=n(92785),a=n(92954),o=n(48256),l=n(3604),c=n(39714),d=n(86010),u=n(76602),p=n(63735),m=n(45440),h=n(29451),g=n(50634),f=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:s,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,s=i?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,d.Z)(m.Z.arrow,s,m.Z.vertical)},"\u25b6")),i?r.createElement(Z,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);var A=n(45045);function C(e){let{groupId:t,defaultOpen:n,row:i,fixtures:h}=e;const{tabGroupChoices:g,setTabGroupChoices:f}=(0,u.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==y&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),f(t,"y"===y?"n":"y")}),[v,t,y,f]),E=(0,r.useMemo)((()=>[new s.Z,new a.Z(o.Z)]),[]),w=!("n"===y||!i);return r.createElement(l.Z,{managers:E},r.createElement(c.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(A.Z,{fallback:r.createElement(N,null)},r.createElement(O,null))),r.createElement(x,{selectedValue:y,toggle:k})))}var S=(0,r.memo)(C);function N(){return r.createElement("div",null,"Loading...")}const O=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var j=n(62974);function P(e){let{groupId:t,defaultOpen:n,row:s,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(j.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:s,fixtures:a})))}var _=(0,r.memo)(P)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(64820);const s={React:r,...r,...i};t.Z=s},25209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(27378),n(3905)),s=n(90008),a=n(41191);const o={title:"Entity Validation",sidebar_label:"Validation"},l=void 0,c={unversionedId:"getting-started/validation",id:"getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/core/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1666925835,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},d={},u=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new a.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nexport const getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nexport class ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"import { getArticle, getArticleList } from './api/Article';\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState('');\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute('')} />;\n}\n\nrender(<ArticleList />);\n"))))}m.isMDXComponent=!0},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),i=n(11857);function s(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let a=!1;try{Function()}catch(w){a=!0}class o extends Function{constructor(e,t){let n;return a?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),s(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=this.fetch,s=this.key;return this.extend({fetch(){return i.apply(null!=e?e:this,n)},key(){return s.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return s(n,{...this.options,...e}),n}}class l extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function c(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const d=e=>{let[t,,n]=e;return void 0!==t&&!n};const u=(e,t,n)=>{if(c(t))return function(e,t,n){let r=!0,i=!1;return[Object.keys(e).reduce(((t,s)=>{const a=`${s}`,[o,l,c]=n(t.get(a),e[a]);return l||(r=!1),c&&(i=!0),t.has(a)?t.set(a,o):t}),t),r,i]}(e,t,n);const r={...t};let i=!0,s=!1;return Object.keys(e).forEach((t=>{const[a,o,l]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),l&&(s=!0),o||(i=!1)})),[r,i,s]};function p(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,i,s){const a=this.inferSchema(e,t,n);if(!a)return e;const o=r(e,t,n,a,i,s);return this.isSingleSchema||null==o?o:{id:o,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(c(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:c(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,i,s){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,i,s))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(d).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,i,s,a)=>{const o={...t};return Object.keys(e).forEach((n=>{const r=e[n],l=i(t[n],t,n,r,s,a);null==l?delete o[n]:o[n]=l})),o})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,i){const s={};for(const a of Object.keys(e))s[a]=r(e[a],t,n,i);return s}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=p(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function m(e,t){const n=p(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return{[e.key(...t(...s))]:e=>{const t=h(e,n),i=new Set(t),s=h(r,n).filter((e=>!i.has(e))),a=[...t,...s];return g(e,n,a)}}}}const h=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},g=(e,t,n)=>{if(0===t.length)return n;const r={...e};let i=r;for(let s=0;s<t.length-1;s++){const e=t[s];i=i[e]={...i[e]}}return i[t[t.length-1]]=n,r};var f=n(92586);const y={};const b={};const v=Object.prototype,k=Object.getPrototypeOf;var E=(0,i.Z)("hasBody");class x extends o{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},s=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(i),this.getRequestInit(s)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,f.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(b,e)||(b[e]=new Set((0,f.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),b[e]}(this.path),i={};return Object.keys(e).forEach((t=>{r.has(t)||(i[t]=e[t])})),Object.keys(i).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(i)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&k(n)===v;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new l(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new l(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:m(this,e)})}}}}]);