(self.webpackChunk=self.webpackChunk||[]).push([[78120],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),s=n(5730),l=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:s,values:p,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[E,x]=(0,a.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==E&&g.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==E&&(w(t),x(r),null!=m&&v(m,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:Z},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},88705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(30433),a=n(65559),o=n(67294);function s(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),a=n(87462),o=n(99401),s=n(6832),l=n(86010),i=n(49544),c=n(45045);function u(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),h=n(80086),f=n(45440);function g(e){let{children:t,transformCode:n,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:h,includeEndpoints:g,...b}=e;const{liveCodeBlock:{playgroundPosition:k}}=(0,s.Z)().siteConfig.themeConfig,v=(0,o.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,l.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:v},b),r.createElement(y,{reverse:"top"===k,row:p,fixtures:h,includeEndpoints:g,groupId:c,defaultOpen:u},t))),r.createElement(d,null))}function y(e){let{reverse:t,children:n,row:a,fixtures:o,includeEndpoints:s,groupId:l,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:f}=(0,m.h)(n),g=p.join("\n");return r.createElement(v,{reverse:t},r.createElement(m.L,{fixtures:o,row:a,codeTabs:f,handleCodeChange:d,codes:p}),r.createElement(c.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(h.Z,{key:"preview",includeEndpoints:s,groupId:l,defaultOpen:u,row:a,fixtures:o}))},r.createElement(k,{code:g,includeEndpoints:s,groupId:l,defaultOpen:u,row:a,fixtures:o})))}g.defaultProps={row:!1,hidden:!1};const b="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),k=(0,r.lazy)((()=>b?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function v(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}v.defaultProps={reverse:!1};const E=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o,row:s=!1,fixtures:l}=e;return r.createElement(g,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:s,hidden:a,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};E.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(E)},52393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(13743),a=n(30433),o=n(65559),s=n(67294);function l(e){let{pkgs:t,dev:n=!1}=e;return s.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(a.Z,{value:"yarn"},s.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),s.createElement(a.Z,{value:"npm"},s.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),a=n(67294);function o(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),o=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,n,s?o.Z.clickable:null),onClick:s},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>N,h:()=>w});var r=n(87462),a=n(11614),o=n(86010),s=n(67294),l=n(69762),i=n(13743),c=n(45440);function u(e){let{fixtures:t}=e;return s.createElement("div",{className:c.Z.fixtureBlock},t.map((e=>s.createElement("div",{key:e.endpoint.key(...e.args),className:c.Z.fixtureItem},s.createElement("div",{className:c.Z.fixtureHeader},e.endpoint.key(...e.args)),s.createElement(p,{fixture:e})))))}var d=(0,s.memo)(u);function p(e){let{fixture:t}=e;return"function"==typeof t.response?"function":s.createElement(i.Z,{language:"json",className:c.Z.fixtureJson},JSON.stringify(t.response))}var m=n(62974),h=n(49544);const f=(0,s.memo)(h.uz);var g=n(76226),y=n(30573);let b;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!b){const r=y.Z.init();r.then((e=>{e&&(b=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[o,s,l,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${s} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${l} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${s} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const k=(0,s.memo)(g.ZP);const v={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},E={...v,fontSize:14,lineHeight:20};var x=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:o=!1,...l}=e;const i=o?E:v;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,u]=(0,s.useState)("100%"),d=(0,s.useCallback)((e=>{a&&e.focus();const t=Object.keys(l).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=i.lineHeight,r=e.getDomNode(),o=r.getElementsByClassName("view-lines")[0];let s=0;const c=e.getModel().getLineCount()*n+10;r.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=o.childElementCount*n+10;s=o.childElementCount,r.style.height=t+"px",u(c),e.layout()}),0)}))}),[]);return s.createElement(k,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:d,height:c,loading:s.createElement(h.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return s.createElement(f,{onChange:t,code:n})};function N(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:l,codes:i,large:u=!1}=e;const d=(0,s.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[p,m]=(0,s.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return s.createElement("div",null,s.createElement(_,{fixtures:!n&&t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?s.createElement(S,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:p,onClick:e=>m((t=>t.map(((t,n)=>n!==e))))}):null,a.map(((e,t)=>{let{title:a,path:h,code:f,collapsed:g,...y}=e;return s.createElement(s.Fragment,{key:t},!n&&a?s.createElement(C,{onClick:()=>m((e=>{const n=[...e];return n[t]=!n[t],n})),closed:p[t],title:a}):null,s.createElement("div",{key:t,className:(0,o.Z)(c.Z.playgroundEditor,{[c.Z.hidden]:p[t]})},s.createElement(x,(0,r.Z)({key:t,onChange:l[t],code:i[t],path:"/"+d+"/"+(h||a||"default.tsx")},y,{large:u}))))})))}function w(e){const t=(0,s.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...o}}))),[e]),[n,r]=(0,s.useReducer)(Z,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,s.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function Z(e,t){const n=[...e];return n[t.i]=t.code,n}function C(e){let{onClick:t,closed:n,title:r}=e;return s.createElement(m.Z,{className:c.Z.small,onClick:t},s.createElement("span",{className:(0,o.Z)(c.Z.arrow,n?c.Z.right:c.Z.down)},"\u25b6"),r)}function S(e){let{titles:t,closedList:n,onClick:r}=e;const{values:a}=(0,s.useContext)(l.Z),i=a.length>0;return s.createElement(m.Z,{className:(0,o.Z)({[c.Z.small]:i,[c.Z.subtabs]:i},c.Z.noupper,c.Z.tabControls)},s.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>s.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,o.Z)(c.Z.tab,{[c.Z.selected]:!n[t]})},e)))))}function L(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,s.useContext)(l.Z);return s.createElement("div",{className:c.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return s.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,o.Z)(c.Z.tab,{[c.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function D(e){let{children:t}=e;return s.createElement(m.Z,{className:c.Z.tabControls},s.createElement("div",{className:c.Z.title},t),s.createElement(L,null))}function _(e){let{title:t,fixtures:n}=e;const{values:r}=(0,s.useContext)(l.Z),a=r.length>0;return s.createElement(s.Fragment,null,n.length?s.createElement(s.Fragment,null,s.createElement(m.Z,{className:c.Z.small},"Fixtures"),s.createElement(d,{fixtures:n})):null,a?s.createElement(D,null,t):null)}_.defaultProps={title:s.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var r=n(67294),a=n(11614),o=n(76602),s=n(63735),l=n(39714),i=n(86010),c=n(92785),u=n(92954),d=n(48256),p=n(3604),m=n(45045),h=n(29451),f=n(287),g=n(70524);function y(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:b,data:t,valueRenderer:v,theme:o,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const k="undefined"!=typeof Intl;function v(e,t){const n=arguments.length<=2?void 0:arguments[2];return k&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var E=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,o=a?E.Z.right:E.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:E.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,i.Z)(E.Z.arrow,o,E.Z.vertical)},"\u25b6")),a?r.createElement(Z,null):null)}var N=(0,r.memo)(x);function w(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(y,{value:t})}const Z=(0,r.memo)(w);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,o.U)(),[y,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:k}=(0,s.o5)();if(null!=t){const e=f[t];null!=e&&e!==y&&b(e)}const v=(0,r.useCallback)((e=>{k(e.currentTarget),b((e=>"y"===e?"n":"y")),g(t,"y"===y?"n":"y")}),[k,t,y,g]),x=(0,r.useMemo)((()=>[new c.Z,new u.Z(d.Z)]),[]),w=!("n"===y||!a);return r.createElement(p.Z,{managers:x},r.createElement(l.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,i.Z)(E.Z.playgroundPreview,{[E.Z.hidden]:w})},r.createElement(m.Z,{fallback:r.createElement(L,null)},r.createElement(D,null))),r.createElement(N,{selectedValue:y,toggle:v})))}var S=(0,r.memo)(C);function L(){return r.createElement("div",null,"Loading...")}const D=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var _=n(62974);function T(e){let{groupId:t,defaultOpen:n,row:o,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(_.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:E.Z.playgroundResult},r.createElement(S,{groupId:t,defaultOpen:n,row:o,fixtures:s})))}var P=(0,r.memo)(T)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const o={React:r,...r,...a};t.Z=o},68634:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(27378),n(3905)),o=n(28423),s=n(41191),l=(n(52393),n(88705)),i=n(83323);const c={title:"useDLE() - [D]ata [L]oading [E]rror",sidebar_label:"useDLE()"},u=void 0,d={unversionedId:"api/useDLE",id:"api/useDLE",title:"useDLE() - [D]ata [L]oading [E]rror",description:"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching",source:"@site/../docs/core/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/api/useDLE",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1671755790,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{title:"useDLE() - [D]ata [L]oading [E]rror",sidebar_label:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/api/useFetch"},next:{title:"useError()",permalink:"/docs/api/useError"}},p={},m=[{value:"Hook usage",id:"hook-usage",level:2}],h={toc:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching")),(0,a.kt)(l.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): {\n  data: Denormalize<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): {\n  data: DenormalizeNullable<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n"))),(0,a.kt)("p",null,"In case you cannot use ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/data-dependency#async-fallbacks"},"suspense"),", useDLE() is just like ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Expiry Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Fetch"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Loading"),(0,a.kt)("th",{parentName:"tr",align:null},"Error"),(0,a.kt)("th",{parentName:"tr",align:null},"Conditions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid"),(0,a.kt)("td",{parentName:"tr",align:null},"yes",(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"not in store, ",(0,a.kt)("a",{parentName:"td",href:"/rest/api/createResource#delete"},"deletion"),", ",(0,a.kt)("a",{parentName:"td",href:"/docs/api/Controller#invalidate"},"invalidation"),", ",(0,a.kt)("a",{parentName:"td",href:"/docs/concepts/expiry-policy#endpointinvalidifstale"},"invalidIfStale"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stale"),(0,a.kt)("td",{parentName:"tr",align:null},"yes",(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{parentName:"tr",align:null},"denormalized"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"(first-render, arg change) & ",(0,a.kt)("a",{parentName:"td",href:"/docs/concepts/expiry-policy"},"expiry ","<"," now"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Valid"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"denormalized"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"maybe",(0,a.kt)("sup",null,"2")),(0,a.kt)("td",{parentName:"tr",align:null},"fetch completion")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"null")," used as second argument")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Identical fetches are automatically deduplicated"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/expiry-policy#error-policy"},"Hard errors")," to be ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/data-dependency#async-fallbacks"},"caught")," by ",(0,a.kt)("a",{parentName:"li",href:"/docs/api/AsyncBoundary"},"Error Boundaries")))),(0,a.kt)(i.ZP,{hook:"useDLE",mdxType:"ConditionalDependencies"}),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)(o.Z,{fixtures:[{endpoint:new s.Z({path:"/profiles"}),args:[],response:[{id:"1",fullName:"Einstein",bio:"Smart physicist"},{id:"2",fullName:"Elon Musk",bio:"CEO of Tesla, SpaceX and owner of Twitter"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Profile.ts" collapsed',title:'"api/Profile.ts"',collapsed:!0},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Profile extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ProfileResource = createResource({\n  path: '/profiles/:id',\n  schema: Profile,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useDLE } from '@rest-hooks/react';\nimport { ProfileResource } from './api/Profile';\n\nfunction ProfileList(): JSX.Element {\n  const { data, loading, error } = useDLE(ProfileResource.getList);\n  if (error) return <div>Error {error.status}</div>;\n  if (loading || !data) return <>loading...</>;\n  return (\n    <div>\n      {data.map(profile => (\n        <div key={profile.pk()}>\n          <h4>{profile.fullName}</h4>\n          <p>{profile.bio}</p>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<ProfileList />);\n"))))}f.isMDXComponent=!0},83323:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l});var r=n(87462),a=(n(27378),n(3905)),o=n(13743);const s={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(TodoResource.get, id ? { id } : null);`)))}l.isMDXComponent=!0},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a},41191:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(70760),a=n(11857);function o(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let s=!1;try{Function()}catch(N){s=!0}class l extends Function{constructor(e,t){let n;return s?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),o(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=this.fetch,o=this.key;return this.extend({fetch(){return a.apply(null!=e?e:this,n)},key(){return o.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return o(n,{...this.options,...e}),n}}class i extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function c(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const u=e=>{let[t,,n]=e;return void 0!==t&&!n};const d=(e,t,n)=>{if(c(t))return function(e,t,n){let r=!0,a=!1;return[Object.keys(e).reduce(((t,o)=>{const s=`${o}`,[l,i,c]=n(t.get(s),e[s]);return i||(r=!1),c&&(a=!0),t.has(s)?t.set(s,l):t}),t),r,a]}(e,t,n);const r={...t};let a=!0,o=!1;return Object.keys(e).forEach((t=>{const[s,l,i]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=s),i&&(o=!0),l||(a=!1)})),[r,a,o]};function p(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,a,o){const s=this.inferSchema(e,t,n);if(!s)return e;const l=r(e,t,n,s,a,o);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(c(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:c(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,a,o){const s=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return s.map(((e,s)=>this.normalizeValue(e,t,n,r,a,o))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(u).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n,r){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,a,o,s)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],i=a(t[n],t,n,r,o,s);null==i?delete l[n]:l[n]=i})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return d(this.schema,...t)}infer(e,t,n,r){return function(e,t,n,r,a){const o={};for(const s of Object.keys(e))o[s]=r(e[s],t,n,a);return o}(this.schema,e,t,n,r)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=p(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function m(e,t){const n=p(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return{[e.key(...t(...o))]:e=>{const t=h(e,n),a=new Set(t),o=h(r,n).filter((e=>!a.has(e))),s=[...t,...o];return f(r,n,s)}}}}const h=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},f=(e,t,n)=>{if(0===t.length)return n;const r={...e};let a=r;for(let o=0;o<t.length-1;o++){const e=t[o];a=a[e]={...a[e]}}return a[t[t.length-1]]=n,r};var g=n(92586);const y={};const b={};const k=Object.prototype,v=Object.getPrototypeOf;var E=(0,a.Z)("hasBody");class x extends l{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const a=(0,r.Z)(this,E)[E]&&t.length<2?{}:t[0]||{},o=(0,r.Z)(this,E)[E]?t[t.length-1]:void 0;return this.fetchResponse(this.url(a),this.getRequestInit(o)).then((e=>this.parseResponse(e))).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,E,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,r.Z)(this,E)[E]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,r.Z)(this,E)[E]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(y,n)||(y[n]=(0,g.MY)(n,{encode:encodeURIComponent,validate:!1})),y[n])(e);var n;const r=function(e){return Object.hasOwn(b,e)||(b[e]=new Set((0,g.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),b[e]}(this.path),a={};return Object.keys(e).forEach((t=>{r.has(t)||(a[t]=e[t])})),Object.keys(a).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(a)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&v(n)===k;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new i(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=500),e}))}parseResponse(e){var t;return 204===e.status?Promise.resolve(null):null!=(t=e.headers.get("content-type"))&&t.includes("json")?e.json().catch((e=>{throw e.status=400,e})):e.text().then((t=>{if(["string","undefined"].includes(typeof this.schema)||null===this.schema)return t;const n=new i(e);throw n.status=404,n.message=`Unexpected text response for schema ${this.schema}`,n}))}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:m(this,e)})}}}}]);