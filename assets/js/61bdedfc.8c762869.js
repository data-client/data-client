(self.webpackChunk=self.webpackChunk||[]).push([[46408],{69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),i=n(87462),l=n(99401),a=n(6832),o=n(86010),s=n(49544),c=n(45045);function d(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var u=(0,r.memo)(d);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),f=n(45440);function h(e){let{children:t,transformCode:n,groupId:c,defaultOpen:d,row:p,hidden:m,fixtures:g,includeEndpoints:h,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,a.Z)().siteConfig.themeConfig,k=(0,l.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(s.nu,(0,i.Z)({theme:k},b),r.createElement(y,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:c,defaultOpen:d},t))),r.createElement(u,null))}function y(e){let{reverse:t,children:n,row:i,fixtures:l,includeEndpoints:a,groupId:o,defaultOpen:d}=e;const{handleCodeChange:u,codes:p,codeTabs:f}=(0,m.h)(n),h=p.join("\n");return r.createElement(k,{reverse:t},r.createElement(m.L,{fixtures:l,row:i,codeTabs:f,handleCodeChange:u,codes:p}),r.createElement(c.Z,{fallback:r.createElement(s.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:a,groupId:o,defaultOpen:d,row:i,fixtures:l}))},r.createElement(v,{code:h,includeEndpoints:a,groupId:o,defaultOpen:d,row:i,fixtures:l})))}h.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function k(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}k.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:l,row:a=!1,fixtures:o}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:a,hidden:i,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(19666),i=n(67294);function l(e){let{fallback:t,children:n}=e;return i.createElement(r.Z,{fallback:t},(()=>i.createElement(i.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),i=n(86010),l=n(45440);function a(e){let{children:t,className:n,onClick:a}=e;return r.createElement("div",{className:(0,i.Z)(l.Z.playgroundHeader,n,a?l.Z.clickable:null),onClick:a},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>w,h:()=>Z});var r=n(87462),i=n(11614),l=n(86010),a=n(67294),o=n(69762),s=n(13743),c=n(45440);function d(e){let{fixtures:t}=e;return a.createElement("div",{className:c.Z.fixtureBlock},t.map((e=>a.createElement("div",{key:e.endpoint.key(...e.args),className:c.Z.fixtureItem},a.createElement("div",{className:c.Z.fixtureHeader},e.endpoint.key(...e.args)),a.createElement(p,{fixture:e})))))}var u=(0,a.memo)(d);function p(e){let{fixture:t}=e;return"function"==typeof t.response?"function":a.createElement(s.Z,{language:"json",className:c.Z.fixtureJson},JSON.stringify(t.response))}var m=n(62974),g=n(49544);const f=(0,a.memo)(g.uz);var h=n(76226),y=n(30573);let b;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!b){const r=y.Z.init();r.then((e=>{e&&(b=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const i=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(i)){if(i.endsWith(".")||i.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const i=n.value,[l,a,o,s,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return i.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),i.languages.typescript.typescriptDefaults.addExtraLib(l,"es2022"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${a} }`,"file:///node_modules/@types/react/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${o} }`,"file:///node_modules/bignumber.js/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${s} }`,"file:///node_modules/rest-hooks/index.d.ts"),i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${a} }`),c.forEach(((t,n)=>{const r=e[n];i.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&i.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),i.languages.typescript.typescriptDefaults.setEagerModelSync(!0),i}))}}const v=(0,a.memo)(h.ZP);const k={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},E={...k,fontSize:14,lineHeight:20};var x=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:i=!1,large:l=!1,...o}=e;const s=l?E:k;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,d]=(0,a.useState)("100%"),u=(0,a.useCallback)((e=>{i&&e.focus();const t=Object.keys(o).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=s.lineHeight,r=e.getDomNode(),l=r.getElementsByClassName("view-lines")[0];let a=0;const c=e.getModel().getLineCount()*n+10;r.style.height=c+"px",d(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=l.childElementCount*n+10;a=l.childElementCount,r.style.height=t+"px",d(c),e.layout()}),0)}))}),[]);return a.createElement(v,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:s,theme:"prism",onMount:u,height:c,loading:a.createElement(g.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return a.createElement(f,{onChange:t,code:n})};function w(e){let{fixtures:t,row:n,codeTabs:i,handleCodeChange:o,codes:s,large:d=!1}=e;const u=(0,a.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[p,m]=(0,a.useState)((()=>i.map((e=>{let{collapsed:t}=e;return t}))));return a.createElement("div",null,a.createElement(j,{fixtures:!n&&t,title:n&&1===i.length?i[0].title:void 0}),n&&i.length>1?a.createElement(N,{titles:i.map((e=>{let{title:t}=e;return t})),closedList:p,onClick:e=>m((t=>t.map(((t,n)=>n!==e))))}):null,i.map(((e,t)=>{let{title:i,path:g,code:f,collapsed:h,...y}=e;return a.createElement(a.Fragment,{key:t},!n&&i?a.createElement(A,{onClick:()=>m((e=>{const n=[...e];return n[t]=!n[t],n})),closed:p[t],title:i}):null,a.createElement("div",{key:t,className:(0,l.Z)(c.Z.playgroundEditor,{[c.Z.hidden]:p[t]})},a.createElement(x,(0,r.Z)({key:t,onChange:o[t],code:s[t],path:"/"+u+"/"+(g||i||"default.tsx")},y,{large:d}))))})))}function Z(e){const t=(0,a.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:i,...l}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:i,...l}}))),[e]),[n,r]=(0,a.useReducer)(C,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,a.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function C(e,t){const n=[...e];return n[t.i]=t.code,n}function A(e){let{onClick:t,closed:n,title:r}=e;return a.createElement(m.Z,{className:c.Z.small,onClick:t},a.createElement("span",{className:(0,l.Z)(c.Z.arrow,n?c.Z.right:c.Z.down)},"\u25b6"),r)}function N(e){let{titles:t,closedList:n,onClick:r}=e;const{values:i}=(0,a.useContext)(o.Z),s=i.length>0;return a.createElement(m.Z,{className:(0,l.Z)({[c.Z.small]:s,[c.Z.subtabs]:s},c.Z.noupper,c.Z.tabControls)},a.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>a.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,l.Z)(c.Z.tab,{[c.Z.selected]:!n[t]})},e)))))}function O(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,a.useContext)(o.Z);return a.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:i}=n;return a.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,l.Z)(c.Z.tab,{[c.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},i)})))}function P(e){let{children:t}=e;return a.createElement(m.Z,{className:c.Z.tabControls},a.createElement("div",{className:c.Z.title},t),a.createElement(O,null))}function j(e){let{title:t,fixtures:n}=e;const{values:r}=(0,a.useContext)(o.Z),i=r.length>0;return a.createElement(a.Fragment,null,n.length?a.createElement(a.Fragment,null,a.createElement(m.Z,{className:c.Z.small},"Fixtures"),a.createElement(u,{fixtures:n})):null,i?a.createElement(P,null,t):null)}j.defaultProps={title:a.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(67294),i=n(11614),l=n(76602),a=n(63735),o=n(39714),s=n(86010),c=n(92785),d=n(92954),u=n(48256),p=n(3604),m=n(45045),g=n(29451),f=n(287),h=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,h.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:l,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,l=i?E.Z.right:E.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,s.Z)(E.Z.arrow,l,E.Z.vertical)},"\u25b6")),i?r.createElement(C,null):null)}var w=(0,r.memo)(x);function Z(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const C=(0,r.memo)(Z);function A(e){let{groupId:t,defaultOpen:n,row:i,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,l.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,a.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),h(t,"y"===y?"n":"y")}),[v,t,y,h]),x=(0,r.useMemo)((()=>[new c.Z,new d.Z(u.Z)]),[]),Z=!("n"===y||!i);return r.createElement(p.Z,{managers:x},r.createElement(o.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,s.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:Z})},r.createElement(m.Z,{fallback:r.createElement(O,null)},r.createElement(P,null))),r.createElement(w,{selectedValue:y,toggle:k})))}var N=(0,r.memo)(A);function O(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var j=n(62974);function S(e){let{groupId:t,defaultOpen:n,row:l,fixtures:a}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(j.Z,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:E.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:l,fixtures:a})))}var T=(0,r.memo)(S)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),i=n(64820);const l={React:r,...r,...i};t.Z=l},53974:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),l=n(28423),a=n(86429);const o={title:"Entity Validation",sidebar_label:"Validation"},s=void 0,c={unversionedId:"getting-started/validation",id:"version-6.6/getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/versioned_docs/version-6.6/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/6.6/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"6.6",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1668575123,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/6.6/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/6.6/guides/debugging"}},d={},u=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},"import { getArticle } from './api/Article';\n\nfunction ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id=\"2\" />);\n"))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(l.Z,{fixtures:[{endpoint:new a.Z({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new a.Z({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"export class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nexport const getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nexport class ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nexport const getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"import { getArticle, getArticleList } from './api/Article';\n\nfunction ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState('');\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute('')} />;\n}\n\nrender(<ArticleList />);\n"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((()=>n.t(i,23)))}i.keys=()=>Object.keys(r),i.id=73795,e.exports=i}}]);