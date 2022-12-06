(self.webpackChunk=self.webpackChunk||[]).push([[45665],{69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},90008:(e,t,r)=>{"use strict";r.d(t,{Z:()=>$});var n=r(67294),o=r(87462),a=r(99401),l=r(11614),s=r(6832),i=r(86010),c=r(49544),d=r(69762),u=r(45045),p=r(13743),m=r(45440);function g(e){let{fixtures:t}=e;return n.createElement("div",{className:m.Z.fixtureBlock},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args),className:m.Z.fixtureItem},n.createElement("div",{className:m.Z.fixtureHeader},e.endpoint.key(...e.args)),n.createElement(h,{fixture:e})))))}var f=(0,n.memo)(g);function h(e){let{fixture:t}=e;return"function"==typeof t.response?"function":n.createElement(p.Z,{language:"json",className:m.Z.fixtureJson},JSON.stringify(t.response))}var b=r(62974);function y(){return n.createElement(n.Fragment,null,n.createElement("script",{dangerouslySetInnerHTML:{__html:v},type:"application/javascript"}))}var k=(0,n.memo)(y);const v=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var E=r(76226),x=r(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const n=x.Z.init();n.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const o=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const r=/\/\d+\//g.exec(t)?.[0]??"",n=t.substring(r.length-1);return{label:n,insertText:n.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const o=r.value,[a,l,s,i,...c]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,r)=>{const n=e[r];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(n)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const Z=(0,n.memo)(E.ZP);const T={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const C=(0,n.memo)(c.uz);var N=r(3495).Z?function(e){let{onChange:t,code:r,path:o,autoFocus:a=!1,...l}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx"),function(e,t){const r=function(e){const t=(0,E.Ik)(),r=(0,n.useRef)();return(0,n.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{r.current=e}))}),[t]),r}();(0,n.useCallback)((function(){r.current&&e(r.current)}),t)}((e=>{e.getEmitOutput(`file:///${o}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,o]);const[s,i]=(0,n.useState)("100%"),d=(0,n.useCallback)((e=>{a&&e.focus();const t=Object.keys(l).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const r=e.getDomNode(),n=r.getElementsByClassName("view-lines")[0];let o=0;const s=19*e.getModel().getLineCount()+10;r.style.height=s+"px",i(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*n.childElementCount+10;o=n.childElementCount,r.style.height=t+"px",i(s),e.layout()}),0)}))}),[]);return n.createElement(Z,{path:o,defaultLanguage:"typescript",onChange:t,defaultValue:r,options:T,theme:"prism",onMount:d,height:s,loading:n.createElement(c.uz,{language:"tsx",code:r,disabled:!0})})}:function(e){let{onChange:t,code:r}=e;return n.createElement(C,{onChange:t,code:r})},R=r(80086);function S(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(d.Z);return n.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:o,label:a}=r;return n.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function O(e){let{children:t}=e;return n.createElement(b.Z,{className:m.Z.tabControls},n.createElement("div",{className:m.Z.title},t),n.createElement(S,null))}function P(e){let{title:t,fixtures:r}=e;const{values:o}=(0,n.useContext)(d.Z),a=o.length>0;return n.createElement(n.Fragment,null,r.length?n.createElement(n.Fragment,null,n.createElement(b.Z,{className:m.Z.small},"Fixtures"),n.createElement(f,{fixtures:r})):null,a?n.createElement(O,null,t):null)}function j(e){let{children:t,transformCode:r,groupId:l,defaultOpen:d,row:u,hidden:p,fixtures:g,includeEndpoints:f,...h}=e;const{liveCodeBlock:{playgroundPosition:b}}=(0,s.Z)().siteConfig.themeConfig,y=(0,a.p)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,i.Z)(m.Z.playgroundContainer,{[m.Z.row]:u,[m.Z.hidden]:p})},n.createElement(c.nu,(0,o.Z)({theme:y},h),n.createElement(M,{reverse:"top"===b,row:u,fixtures:g,includeEndpoints:f,groupId:l,defaultOpen:d},t))),n.createElement(k,null))}function M(e){let{reverse:t,children:r,row:a,fixtures:l,includeEndpoints:s,groupId:d,defaultOpen:p}=e;const g=(0,n.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),f=(0,n.useMemo)((()=>"string"==typeof r?[{code:r.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(r)?r:[r]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:o,...a}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:o,...a}}))),[r]),[h,b]=(0,n.useReducer)(L,void 0,(()=>f.map((e=>{let{code:t}=e;return t})))),y=(0,n.useMemo)((()=>f.map(((e,t)=>e=>{b({i:t,code:e})}))),[f.length]),[k,v]=(0,n.useState)((()=>f.map((e=>{let{collapsed:t}=e;return t})))),E=h.join("\n");return n.createElement(I,{reverse:t},n.createElement("div",null,n.createElement(P,{fixtures:!a&&l}),a&&f.length>1?n.createElement(F,{titles:f.map((e=>{let{title:t}=e;return t})),closedList:k,onClick:e=>v((t=>t.map(((t,r)=>r!==e))))}):null,f.map(((e,t)=>{let{title:r,path:l,code:s,collapsed:c,...d}=e;return n.createElement(n.Fragment,{key:t},!a&&r?n.createElement(A,{onClick:()=>v((e=>{const r=[...e];return r[t]=!r[t],r})),closed:k[t],title:r}):null,n.createElement("div",{key:t,className:(0,i.Z)(m.Z.playgroundEditor,{[m.Z.hidden]:k[t]})},n.createElement(N,(0,o.Z)({key:t,onChange:y[t],code:h[t],path:"/"+g+"/"+(l||r||"default.tsx")},d))))}))),n.createElement(u.Z,{fallback:n.createElement(c.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(R.Z,{key:"preview",includeEndpoints:s,groupId:d,defaultOpen:p,row:a,fixtures:l}))},n.createElement(_,{code:E,includeEndpoints:s,groupId:d,defaultOpen:p,row:a,fixtures:l})))}P.defaultProps={title:n.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},j.defaultProps={row:!1,hidden:!1};const D="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),_=(0,n.lazy)((()=>D?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,41380))));function I(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}function L(e,t){const r=[...e];return r[t.i]=t.code,r}function A(e){let{onClick:t,closed:r,title:o}=e;return n.createElement(b.Z,{className:m.Z.small,onClick:t},n.createElement("span",{className:(0,i.Z)(m.Z.arrow,r?m.Z.right:m.Z.down)},"\u25b6"),o)}function F(e){let{titles:t,closedList:r,onClick:o}=e;const{values:a}=(0,n.useContext)(d.Z),l=a.length>0;return n.createElement(b.Z,{className:(0,i.Z)({[m.Z.small]:l,[m.Z.subtabs]:l},m.Z.noupper,m.Z.tabControls)},n.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>n.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:!r[t]})},e)))))}I.defaultProps={reverse:!1};const H=e=>{let{children:t,groupId:r,hidden:o=!1,defaultOpen:a,row:l=!1,fixtures:s}=e;return n.createElement(j,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:a,row:l,hidden:o,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};H.defaultProps={defaultOpen:"n",fixtures:[]};var $=(0,n.memo)(H)},45045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(19666),o=r(67294);function a(e){let{fallback:t,children:r}=e;return o.createElement(n.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},r)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),o=r(86010),a=r(45440);function l(e){let{children:t,className:r,onClick:l}=e;return n.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,r,l?a.Z.clickable:null),onClick:l},t)}},80086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(67294),o=r(11614),a=r(92785),l=r(92954),s=r(48256),i=r(3604),c=r(39714),d=r(86010),u=r(76602),p=r(63735),m=r(45440),g=r(29451),f=r(50634),h=r(70524);function b(e){let{value:t}=e;const r="dark"===(0,h.I)().colorMode,o=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[r,o]);return n.createElement(f.L,{shouldExpandNode:y,data:t,valueRenderer:v,theme:a,hideRoot:!0})}function y(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const r=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:r}=e;const o="y"===r,a=o?m.Z.right:m.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,d.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?n.createElement(Z,null):null)}var x=(0,n.memo)(E);function w(){const e=(0,n.useContext)(g.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(b,{value:t})}const Z=(0,n.memo)(w);var T=r(45045);function C(e){let{groupId:t,defaultOpen:r,row:o,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,u.U)(),[b,y]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:k}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==b&&y(e)}const v=(0,n.useCallback)((e=>{k(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===b?"n":"y")}),[k,t,b,h]),E=(0,n.useMemo)((()=>[new a.Z,new l.Z(s.Z)]),[]),w=!("n"===b||!o);return n.createElement(i.Z,{managers:E},n.createElement(c.Z,{fixtures:g,silenceMissing:!0},n.createElement("div",{className:(0,d.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},n.createElement(T.Z,{fallback:n.createElement(R,null)},n.createElement(S,null))),n.createElement(x,{selectedValue:b,toggle:v})))}var N=(0,n.memo)(C);function R(){return n.createElement("div",null,"Loading...")}const S=(0,n.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(73287),r.e(26750)]).then(r.bind(r,15929))));var O=r(62974);function P(e){let{groupId:t,defaultOpen:r,row:a,fixtures:l}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(O.Z,null,n.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:m.Z.playgroundResult},n.createElement(N,{groupId:t,defaultOpen:r,row:a,fixtures:l})))}var j=(0,n.memo)(P)},3495:(e,t)=>{"use strict";const r="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=r},57489:(e,t,r)=>{"use strict";var n=r(67294),o=r(64820);const a={React:n,...n,...o};t.Z=a},11355:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(90008);const l={title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},s=void 0,i={permalink:"/blog/2022/10/23/Announcing-Rest-6",source:"@site/blog/2022-10-23-Announcing-Rest-6.md",title:"Rest v6 - TypeScript HTTP endpoints from url path templates",description:"Today we're releasing @rest-hooks/rest version 6. While this is a pretty",date:"2022-10-23T00:00:00.000Z",formattedDate:"October 23, 2022",tags:[{label:"releases",permalink:"/blog/tags/releases"},{label:"rest-hooks",permalink:"/blog/tags/rest-hooks"},{label:"packages",permalink:"/blog/tags/packages"},{label:"rest",permalink:"/blog/tags/rest"},{label:"http",permalink:"/blog/tags/http"},{label:"path-to-regex",permalink:"/blog/tags/path-to-regex"},{label:"resource",permalink:"/blog/tags/resource"},{label:"endpoint",permalink:"/blog/tags/endpoint"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:5.445,hasTruncateMarker:!0,authors:[{name:"Nathaniel Tucker",title:"Creator of Rest Hooks",url:"https://github.com/ntucker",imageURL:"https://github.com/ntucker.png",key:"ntucker"}],frontMatter:{title:"Rest v6 - TypeScript HTTP endpoints from url path templates",authors:["ntucker"],tags:["releases","rest-hooks","packages","rest","http","path-to-regex","resource","endpoint","typescript"]},prevItem:{title:"Lifecycle controlflow diagrams using Mermaid",permalink:"/blog/2022/11/07/Lifecycle-controlflow-diagrams-mermaid"},nextItem:{title:"Adding validation helpers for required field checks",permalink:"/blog/2022/08/03/Adding-validation-helpers-for-required-fields"}},c={authorsImageUrls:[void 0]},d=[{value:"RestEndpoint",id:"restendpoint",level:2},{value:"createResource",id:"createresource",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today we're releasing ",(0,o.kt)("a",{parentName:"p",href:"/rest"},"@rest-hooks/rest")," version 6. While this is a pretty\nradical departure from previous versions, there is no need to upgrade if previous versions are\nworking as they will continue to work with the current 6.4 release of Rest Hooks as well as many\nfuture versions."),(0,o.kt)("p",null,"First, we have completely decoupled the ",(0,o.kt)("em",{parentName:"p"},"networking lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint"),"\nfrom the ",(0,o.kt)("em",{parentName:"p"},"data lifecycle")," ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/schema"},"Schema"),". Collections of Endpoints that operate on the same\ndata can be consgtructed by calling ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"."),(0,o.kt)("h2",{id:"restendpoint"},"RestEndpoint"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/getTodo.ts"',title:'"api/getTodo.ts"'},"import { RestEndpoint } from '@rest-hooks/rest';\n\nexport const getTodo = new RestEndpoint({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { getTodo } from './api/getTodo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(getTodo, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoint")," optimizes configuration based around HTTP\nnetworking. Urls are constructed based on simple named parameters, which are ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint#typing"},"enforced with\nstrict TypeScript automatically"),"."),(0,o.kt)("h2",{id:"createresource"},"createResource"),(0,o.kt)(a.Z,{row:!0,mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Todo.ts"',title:'"api/Todo.ts"'},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Todo extends Entity {\n  id = 0;\n  userId = 0;\n  title = '';\n  completed = false;\n  pk() {\n    return `${this.id}`;\n  }\n}\nexport const TodoResource = createResource({\n  urlPrefix: 'https://jsonplaceholder.typicode.com',\n  path: '/todos/:id',\n  schema: Todo,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="TodoDetail.tsx" collapsed=true',title:'"TodoDetail.tsx"',collapsed:"true"},"import { useSuspense } from 'rest-hooks';\nimport { TodoResource } from './api/Todo';\n\nfunction TodoDetail({ id }: { id: number }) {\n  const todo = useSuspense(TodoResource.get, { id });\n  return <div>{todo.title}</div>;\n}\nrender(<TodoDetail id={1} />);\n"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource")," creates a simple collection of ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/RestEndpoint"},"RestEndpoints"),".\nThese can be easily overidden, removed as appropriate - or not used altogether. ",(0,o.kt)("a",{parentName:"p",href:"/rest/api/createResource"},"createResource"),"\nis intended as a quick start point and as a guide to best practices for API interface ergonomics. It is expected\nto extend or replace createResource based on the common patterns for your own API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const todo = useSuspense(TodoResource.get, { id: '5' });\nconst todos = useSuspense(TodoResource.getList);\ncontroller.fetch(TodoResource.create, { content: 'ntucker' });\ncontroller.fetch(TodoResource.update, { id: '5' }, { content: 'ntucker' });\ncontroller.fetch(\n  TodoResource.partialUpdate,\n  { id: '5' },\n  { content: 'ntucker' },\n);\ncontroller.fetch(TodoResource.delete, { id: '5' });\n")))}p.isMDXComponent=!0},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return r.e(t[1]).then((()=>r.t(o,23)))}o.keys=()=>Object.keys(n),o.id=73795,e.exports=o}}]);