(self.webpackChunk=self.webpackChunk||[]).push([[8640],{30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(5730),s=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:m,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:E}=(0,i.U)(),[k,x]=(0,a.useState)(y),Z=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==k&&h.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=Z.indexOf(t),r=h[n].value;r!==k&&(w(t),x(r),null!=m&&E(m,String(r)))},N=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=Z.indexOf(e.currentTarget)+1;t=Z[n]??Z[0];break}case"ArrowLeft":{const n=Z.indexOf(e.currentTarget)-1;t=Z[n]??Z[Z.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},g)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>Z.push(e),onKeyDown:N,onClick:C},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":k===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},88705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(30433),a=n(65559),o=n(67294);function l(e){let{children:t}=e;return o.createElement(a.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(r.Z,{value:"simple"},t[0]),o.createElement(r.Z,{value:"generics"},t[1]))}},28423:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(67294),a=n(87462),o=n(99401),l=n(6832),s=n(86010),i=n(49544),c=n(45045);function u(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:p},type:"application/javascript"}))}var d=(0,r.memo)(u);const p=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var m=n(24338),g=n(80086),f=n(45440);function h(e){let{children:t,transformCode:n,groupId:c,defaultOpen:u,row:p,hidden:m,fixtures:g,includeEndpoints:h,...y}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,l.Z)().siteConfig.themeConfig,E=(0,o.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,s.Z)(f.Z.playgroundContainer,{[f.Z.row]:p,[f.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:E},y),r.createElement(b,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:c,defaultOpen:u},t))),r.createElement(d,null))}function b(e){let{reverse:t,children:n,row:a,fixtures:o,includeEndpoints:l,groupId:s,defaultOpen:u}=e;const{handleCodeChange:d,codes:p,codeTabs:f}=(0,m.h)(n),h=p.join("\n");return r.createElement(E,{reverse:t},r.createElement(m.L,{fixtures:o,row:a,codeTabs:f,handleCodeChange:d,codes:p}),r.createElement(c.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:l,groupId:s,defaultOpen:u,row:a,fixtures:o}))},r.createElement(v,{code:h,includeEndpoints:l,groupId:s,defaultOpen:u,row:a,fixtures:o})))}h.defaultProps={row:!1,hidden:!1};const y="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),v=(0,r.lazy)((()=>y?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function E(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}E.defaultProps={reverse:!1};const k=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:o,row:l=!1,fixtures:s}=e;return r.createElement(h,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:o,row:l,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};k.defaultProps={defaultOpen:"n",fixtures:[]};var x=(0,r.memo)(k)},52393:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(13743),a=n(30433),o=n(65559),l=n(67294);function s(e){let{pkgs:t,dev:n=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(a.Z,{value:"yarn"},l.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),l.createElement(a.Z,{value:"npm"},l.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(19666),a=n(67294);function o(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,n,l?o.Z.clickable:null),onClick:l},t)}},24338:(e,t,n)=>{"use strict";n.d(t,{L:()=>C,h:()=>N});var r=n(87462),a=n(11614),o=n(86010),l=n(67294),s=n(13743),i=n(45440);function c(e){let{fixtures:t}=e;return l.createElement("div",{className:i.Z.fixtureBlock},t.map((e=>l.createElement("div",{key:e.endpoint.key(...e.args),className:i.Z.fixtureItem},l.createElement("div",{className:i.Z.fixtureHeader},e.endpoint.key(...e.args)),l.createElement(d,{fixture:e})))))}var u=(0,l.memo)(c);function d(e){let{fixture:t}=e;return"function"==typeof t.response?"function":l.createElement(s.Z,{language:"json",className:i.Z.fixtureJson},JSON.stringify(t.response))}var p=n(62974),m=n(49544);const g=(0,l.memo)(m.uz);var f=n(76226),h=n(87594),b=n.n(h),y=n(30573);let v;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!v){const r=y.Z.init();r.then((e=>{e&&(v=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const a=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a)){if(a.endsWith(".")||a.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const a=n.value,[o,l,s,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.typescriptDefaults.setEagerModelSync(!0),a}))}}const E=(0,l.memo)(f.ZP);const k={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:13,lineHeight:19},x={...k,fontSize:14,lineHeight:20};var Z=n(3495).Z?function(e){let{onChange:t,code:n,path:r,autoFocus:a=!1,large:o=!1,...s}=e;const i=o?x:k;r.endsWith(".tsx")||r.endsWith(".ts")||(r+=".tsx");const[c,u]=(0,l.useState)("100%"),d=(0,l.useCallback)((e=>{a&&e.focus();const t=Object.keys(s).map((e=>/\{([\d\-,.]+)\}/.exec(e)?.[1])).filter(Boolean).map(b());if(t.length){let n=t[0][0],r=n;const a=[];t[0].forEach((e=>{e===r?r++:(a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),n=e,r=e+1)})),a.push({selectionStartLineNumber:n,selectionStartColumn:0,positionLineNumber:r,positionColumn:0}),e.setSelections(a)}const n=i.lineHeight,r=e.getDomNode(),o=r.getElementsByClassName("view-lines")[0];let l=0;const c=e.getModel().getLineCount()*n+10;r.style.height=c+"px",u(c),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=e.getModel().getLineCount()*n+10;l=o.childElementCount,r.style.height=t+"px",u(t),e.layout()}),0)}))}),[]);return l.createElement(E,{path:r,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:i,theme:"prism",onMount:d,height:c,loading:l.createElement(m.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return l.createElement(g,{onChange:t,code:n})},w=n(69762);function C(e){let{fixtures:t,row:n,codeTabs:a,handleCodeChange:s,codes:c,large:u=!1,isPlayground:d=!0}=e;const p=(0,l.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),[m,g]=(0,l.useState)((()=>a.map((e=>{let{collapsed:t}=e;return t}))));return l.createElement("div",null,l.createElement(_,{fixtures:!n&&t,title:n&&1===a.length?a[0].title:void 0}),n&&a.length>1?l.createElement(P,{titles:a.map((e=>{let{title:t}=e;return t})),closedList:m,onClick:e=>g((t=>t.map(((t,n)=>n!==e)))),isPlayground:d}):null,a.map(((e,d)=>{let{title:f,path:h,code:b,collapsed:y,...v}=e;return l.createElement(l.Fragment,{key:d},!n&&f?l.createElement(D,{onClick:()=>g((e=>{const t=[...e];return t[d]=!t[d],t})),closed:m[d],title:f,collapsible:a.length>1||t?.length,lastChild:d===a.length-1&&u}):null,l.createElement("div",{key:d,className:(0,o.Z)(i.Z.playgroundEditor,{[i.Z.hidden]:m[d]})},l.createElement(Z,(0,r.Z)({key:d,onChange:s[d],code:c[d],path:"/"+p+"/"+(h||f||"default.tsx")},v,{large:u}))))})))}function N(e){const t=(0,l.useMemo)((()=>"string"==typeof e?[{code:e.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(e)?e:[e]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:a,...o}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:a,...o}}))),[e]),[n,r]=(0,l.useReducer)(L,void 0,(()=>t.map((e=>{let{code:t}=e;return t}))));return{handleCodeChange:(0,l.useMemo)((()=>t.map(((e,t)=>e=>{r({i:t,code:e})}))),[t.length]),codes:n,codeTabs:t}}function L(e,t){const n=[...e];return n[t.i]=t.code,n}function D(e){let{onClick:t,closed:n,title:r,collapsible:a=!1,lastChild:s=!1}=e;return a?l.createElement(p.Z,{className:(0,o.Z)(i.Z.small,{[i.Z.lastChild]:s&&n}),onClick:t},l.createElement("span",{className:(0,o.Z)(i.Z.arrow,n?i.Z.right:i.Z.down)},"\u25b6"),r):l.createElement("div",{className:i.Z.codeHeader},r)}function P(e){let{titles:t,closedList:n,onClick:r,isPlayground:a=!0}=e;const{values:s}=(0,l.useContext)(w.Z),c=s.length>0;return l.createElement(p.Z,{className:(0,o.Z)({[i.Z.small]:c||!a,[i.Z.subtabs]:c},i.Z.noupper,i.Z.tabControls)},l.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>l.createElement("div",{role:"tab",key:t,onClick:()=>r(t),className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:!n[t]})},e)))))}function T(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,l.useContext)(w.Z);return l.createElement("div",{className:i.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:r,label:a}=n;return l.createElement("div",{role:"tab",tabIndex:e===r?0:-1,"aria-selected":e===r,key:r,className:(0,o.Z)(i.Z.tab,{[i.Z.selected]:e===r}),onFocus:t,onClick:t,value:r},a)})))}function S(e){let{children:t}=e;return l.createElement(p.Z,{className:i.Z.tabControls},l.createElement("div",{className:i.Z.title},t),l.createElement(T,null))}function _(e){let{title:t,fixtures:n}=e;const{values:r}=(0,l.useContext)(w.Z),a=r.length>0;return l.createElement(l.Fragment,null,n.length?l.createElement(l.Fragment,null,l.createElement(p.Z,{className:i.Z.small},"Fixtures"),l.createElement(u,{fixtures:n})):null,a?l.createElement(S,null,t):null)}_.defaultProps={title:l.createElement(a.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var r=n(67294),a=n(11614),o=n(76602),l=n(63735),s=n(39714),i=n(86010),c=n(92785),u=n(92954),d=n(48256),p=n(3604),m=n(45045),g=n(29451),f=n(70524),h=n(287);function b(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]),l=(0,r.useMemo)(y,[]);return r.createElement(h.L,{shouldExpandNodeInitially:l,data:t,valueRenderer:E,theme:o,hideRoot:!0})}const y=()=>{let e=0;return(t,n,r)=>0===r||(!(1!==r||!["entities","results"].includes(t[0]))||(2===r&&"entities"===t[1]||(2===r&&"results"===t[1]||(3===r&&"entities"===t[2]?e++<4:3===r&&"results"===t[2]))))},v="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}var k=n(45440);function x(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,o=a?k.Z.right:k.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:k.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,i.Z)(k.Z.arrow,o,k.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var Z=(0,r.memo)(x);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(b,{value:t})}const C=(0,r.memo)(w);function N(e){let{groupId:t,defaultOpen:n,row:a,fixtures:g}=e;const{tabGroupChoices:f,setTabGroupChoices:h}=(0,o.U)(),[b,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,l.o5)();if(null!=t){const e=f[t];null!=e&&e!==b&&y(e)}const E=(0,r.useCallback)((e=>{v(e.currentTarget),y((e=>"y"===e?"n":"y")),h(t,"y"===b?"n":"y")}),[v,t,b,h]),x=(0,r.useMemo)((()=>[new c.Z,new u.Z(d.Z)]),[]),w=!("n"===b||!a);return r.createElement(p.Z,{managers:x},r.createElement(s.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,i.Z)(k.Z.playgroundPreview,{[k.Z.hidden]:w})},r.createElement(m.Z,{fallback:r.createElement(D,null)},r.createElement(P,null))),r.createElement(Z,{selectedValue:b,toggle:E})))}var L=(0,r.memo)(N);function D(){return r.createElement("div",null,"Loading...")}const P=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var T=n(62974);function S(e){let{groupId:t,defaultOpen:n,row:o,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(T.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:k.Z.playgroundResult},r.createElement(L,{groupId:t,defaultOpen:n,row:o,fixtures:l})))}var _=(0,r.memo)(S)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),a=n(64820);const o={React:r,...r,...a};t.Z=o},5272:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(28423),l=n(86429),s=(n(52393),n(88705)),i=n(8845);const c={title:"useDLE()"},u=void 0,d={unversionedId:"api/useDLE",id:"version-7.0/api/useDLE",title:"useDLE()",description:"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching",source:"@site/versioned_docs/version-7.0/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/7.0/api/useDLE",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{title:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/7.0/api/useFetch"},next:{title:"useError()",permalink:"/docs/7.0/api/useError"}},p={},m=[{value:"Hook usage",id:"hook-usage",level:2}],g={toc:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"useDLE() - [D]ata [L]oading [E]rror: Stateful Data Fetching")),(0,a.kt)(s.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): {\n  data: Denormalize<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): {\n  data: DenormalizeNullable<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n"))),(0,a.kt)("p",null,"In case you cannot use ",(0,a.kt)("a",{parentName:"p",href:"/docs/7.0/getting-started/data-dependency#async-fallbacks"},"suspense"),", useDLE() is just like ",(0,a.kt)("a",{parentName:"p",href:"/docs/7.0/api/useSuspense"},"useSuspense()")," but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)(o.Z,{fixtures:[{endpoint:new l.Z({path:"/profiles"}),args:[],response:[{id:"1",fullName:"Einstein",bio:"Smart physicist"},{id:"2",fullName:"Elon Musk",bio:"CEO of Tesla, SpaceX and owner of Twitter"}],delay:150}],mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Profile.ts" collapsed',title:'"api/Profile.ts"',collapsed:!0},"import { Entity, createResource } from '@rest-hooks/rest';\n\nexport class Profile extends Entity {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n}\n\nexport const ProfileResource = createResource({\n  path: '/profiles/:id',\n  schema: Profile,\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useDLE } from '@rest-hooks/react';\nimport { ProfileResource } from './api/Profile';\n\nfunction ProfileList(): JSX.Element {\n  const { data, loading, error } = useDLE(ProfileResource.getList);\n  if (error) return <div>Error {error.status}</div>;\n  if (loading || !data) return <>loading...</>;\n  return (\n    <div>\n      {data.map(profile => (\n        <div key={profile.pk()}>\n          <h4>{profile.fullName}</h4>\n          <p>{profile.bio}</p>\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<ProfileList />);\n"))),(0,a.kt)(i.ZP,{hook:"useDLE",mdxType:"ConditionalDependencies"}))}f.isMDXComponent=!0},8845:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905)),o=n(13743);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}s.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",standaloneEditor:"standaloneEditor_OHub",row:"row_YGZs",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",lastChild:"lastChild_htAV",codeHeader:"codeHeader_mKW4",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((()=>n.t(a,23)))}a.keys=()=>Object.keys(r),a.id=73795,e.exports=a}}]);