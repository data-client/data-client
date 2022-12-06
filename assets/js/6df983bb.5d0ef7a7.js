/*! For license information please see 6df983bb.5d0ef7a7.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[54336],{41535:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function h(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=v.prototype=new b;k.constructor=v,g(k,h.prototype),k.isPureReactComponent=!0;var E=Array.isArray,x=Object.prototype.hasOwnProperty,w={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,a={},l=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,o)&&!Z.hasOwnProperty(o)&&(a[o]=t[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:n,type:e,key:l,ref:s,props:a,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,o,a,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return l=l(i=e),e=""===a?"."+_(i,0):a,E(l)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),j(l,t,o,"",(function(e){return e}))):null!=l&&(S(l)&&(l=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(i=0,a=""===a?".":a+":",E(e))for(var c=0;c<e.length;c++){var u=a+_(s=e[c],c);i+=j(s,t,o,u,l)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)i+=j(s=s.value,t,o,u=a+_(s,c++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function L(e,t,n){if(null==e)return e;var r=[],o=0;return j(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null}},27378:(e,t,n)=>{"use strict";n(41535)},30433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),o=n(86010),a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},65559:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),l=n(5730),s=n(20636),i=n(76602),c=n(63735),u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:m,className:f}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=p??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,i.U)(),[E,x]=(0,o.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==E&&y.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==E&&(Z(t),x(r),null!=m&&k(m,String(r)))},S=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>w.push(e),onKeyDown:S,onClick:C},l,{className:(0,a.Z)("tabs__item",d,l?.className,{"tabs__item--active":E===t})}),n??t)}))),t?(0,o.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},69762:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},88705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(30433),o=n(65559),a=n(67294);function l(e){let{children:t}=e;return a.createElement(o.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},a.createElement(r.Z,{value:"simple"},t[0]),a.createElement(r.Z,{value:"generics"},t[1]))}},90008:(e,t,n)=>{"use strict";n.d(t,{Z:()=>U});var r=n(67294),o=n(87462),a=n(99401),l=n(11614),s=n(6832),i=n(86010),c=n(49544),u=n(69762),d=n(45045),p=n(13743),m=n(45440);function f(e){let{fixtures:t}=e;return r.createElement("div",{className:m.Z.fixtureBlock},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args),className:m.Z.fixtureItem},r.createElement("div",{className:m.Z.fixtureHeader},e.endpoint.key(...e.args)),r.createElement(y,{fixture:e})))))}var g=(0,r.memo)(f);function y(e){let{fixture:t}=e;return"function"==typeof t.response?"function":r.createElement(p.Z,{language:"json",className:m.Z.fixtureJson},JSON.stringify(t.response))}var h=n(62974);function b(){return r.createElement(r.Fragment,null,r.createElement("script",{dangerouslySetInnerHTML:{__html:k},type:"application/javascript"}))}var v=(0,r.memo)(b);const k=`\nif (!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(\n  navigator.userAgent,\n) && !window.monacoPreloaded) {\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.nls.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/basic-languages/typescript/typescript.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsMode.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "preload";\nlink.as = href.endsWith('.js') ? 'script' : 'style';\ndocument.head.appendChild(link);\n});\n[${["https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/base/worker/workerMain.js","https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/language/typescript/tsWorker.js"].map((e=>`'${e}'`)).join(",")}].forEach(href => {\nwindow.monacoPreloaded = true;\nvar link = document.createElement("link");\nlink.href = href;\nlink.rel = "prefetch";\nlink.as = 'script';\ndocument.head.appendChild(link);\n});\n}\n`;var E=n(76226),x=n(30573);let w;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","react","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/react","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!w){const r=x.Z.init();r.then((e=>{e&&(w=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.React,strict:!0,strictNullChecks:!0,exactOptionalPropertyTypes:!0,lib:["dom","esnext"],module:e.languages.typescript.ModuleKind.ESNext,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5","editor.inactiveSelectionBackground":"#484d5b"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(n,r)=>{const o=n.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:r.lineNumber,endColumn:r.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(o)){if(o.endsWith(".")||o.endsWith("/")){const t=e.editor.getModels().map((e=>e.uri.path)).map((t=>{const n=/\/\d+\//g.exec(t)?.[0]??"",r=t.substring(n.length-1);return{label:r,insertText:r.replace(/\.tsx?$/,""),kind:e.languages.CompletionItemKind.Module}}));if(!t.length)return;return{suggestions:t}}return{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}}))})),Promise.allSettled([r,n.e(37956).then(n.t.bind(n,70637,23)),n.e(49033).then(n.t.bind(n,7712,23)),n.e(42713).then(n.t.bind(n,93716,23)),n.e(78789).then(n.t.bind(n,52031,23)),...e.map((e=>n(73795)(`./${e}.d.ts`)))]).then((t=>{let[n,...r]=t;if("fulfilled"!==n.status||!n.value)return;const o=n.value,[a,l,s,i,...c]=r.map((e=>"fulfilled"===e.status?e.value.default:""));return o.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),o.languages.typescript.typescriptDefaults.addExtraLib(a,"es2022"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${l} }`),c.forEach(((t,n)=>{const r=e[n];o.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${r}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),["rest","react"].includes(r)&&o.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),o.languages.typescript.typescriptDefaults.setEagerModelSync(!0),o}))}}const Z=(0,r.memo)(E.ZP);const C={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1,fontLigatures:!0,fontFamily:'"Roboto Mono",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',fontSize:"13px",lineHeight:19};const S=(0,r.memo)(c.uz);var N=n(3495).Z?function(e){let{onChange:t,code:n,path:o,autoFocus:a=!1,...l}=e;o.endsWith(".tsx")||o.endsWith(".ts")||(o+=".tsx"),function(e,t){const n=function(e){const t=(0,E.Ik)(),n=(0,r.useRef)();return(0,r.useEffect)((()=>{t&&t.languages.typescript.getTypeScriptWorker().then((e=>e())).then((e=>{n.current=e}))}),[t]),n}();(0,r.useCallback)((function(){n.current&&e(n.current)}),t)}((e=>{e.getEmitOutput(`file:///${o}`).then((e=>{t(e.outputFiles[0].text)}))}),[t,o]);const[s,i]=(0,r.useState)("100%"),u=(0,r.useCallback)((e=>{a&&e.focus();const t=Object.keys(l).map((e=>/\{(\d+)\}/.exec(e)?.[1])).filter(Boolean);t.length&&e.setSelections(t.map((e=>{const t=Number.parseInt(e,10);return{selectionStartLineNumber:t,selectionStartColumn:0,positionLineNumber:t+1,positionColumn:0}})));const n=e.getDomNode(),r=n.getElementsByClassName("view-lines")[0];let o=0;const s=19*e.getModel().getLineCount()+10;n.style.height=s+"px",i(s),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const t=19*r.childElementCount+10;o=r.childElementCount,n.style.height=t+"px",i(s),e.layout()}),0)}))}),[]);return r.createElement(Z,{path:o,defaultLanguage:"typescript",onChange:t,defaultValue:n,options:C,theme:"prism",onMount:u,height:s,loading:r.createElement(c.uz,{language:"tsx",code:n,disabled:!0})})}:function(e){let{onChange:t,code:n}=e;return r.createElement(S,{onChange:t,code:n})},_=n(80086);function j(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:o,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===o?0:-1,"aria-selected":e===o,key:o,className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:e===o}),onFocus:t,onClick:t,value:o},a)})))}function L(e){let{children:t}=e;return r.createElement(h.Z,{className:m.Z.tabControls},r.createElement("div",{className:m.Z.title},t),r.createElement(j,null))}function P(e){let{title:t,fixtures:n}=e;const{values:o}=(0,r.useContext)(u.Z),a=o.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:m.Z.small},"Fixtures"),r.createElement(g,{fixtures:n})):null,a?r.createElement(L,null,t):null)}function O(e){let{children:t,transformCode:n,groupId:l,defaultOpen:u,row:d,hidden:p,fixtures:f,includeEndpoints:g,...y}=e;const{liveCodeBlock:{playgroundPosition:h}}=(0,s.Z)().siteConfig.themeConfig,b=(0,a.p)();return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.Z)(m.Z.playgroundContainer,{[m.Z.row]:d,[m.Z.hidden]:p})},r.createElement(c.nu,(0,o.Z)({theme:b},y),r.createElement(T,{reverse:"top"===h,row:d,fixtures:f,includeEndpoints:g,groupId:l,defaultOpen:u},t))),r.createElement(v,null))}function T(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:s,groupId:u,defaultOpen:p}=e;const f=(0,r.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),g=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1,path:o,...a}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r,path:o,...a}}))),[n]),[y,h]=(0,r.useReducer)(M,void 0,(()=>g.map((e=>{let{code:t}=e;return t})))),b=(0,r.useMemo)((()=>g.map(((e,t)=>e=>{h({i:t,code:e})}))),[g.length]),[v,k]=(0,r.useState)((()=>g.map((e=>{let{collapsed:t}=e;return t})))),E=y.join("\n");return r.createElement(I,{reverse:t},r.createElement("div",null,r.createElement(P,{fixtures:!a&&l}),a&&g.length>1?r.createElement($,{titles:g.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>k((t=>t.map(((t,n)=>n!==e))))}):null,g.map(((e,t)=>{let{title:n,path:l,code:s,collapsed:c,...u}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(A,{onClick:()=>k((e=>{const n=[...e];return n[t]=!n[t],n})),closed:v[t],title:n}):null,r.createElement("div",{key:t,className:(0,i.Z)(m.Z.playgroundEditor,{[m.Z.hidden]:v[t]})},r.createElement(N,(0,o.Z)({key:t,onChange:b[t],code:y[t],path:"/"+f+"/"+(l||n||"default.tsx")},u))))}))),r.createElement(d.Z,{fallback:r.createElement(c.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(_.Z,{key:"preview",includeEndpoints:s,groupId:u,defaultOpen:p,row:a,fixtures:l}))},r.createElement(D,{code:E,includeEndpoints:s,groupId:u,defaultOpen:p,row:a,fixtures:l})))}P.defaultProps={title:r.createElement(l.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},O.defaultProps={row:!1,hidden:!1};const R="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator?.userAgent),D=(0,r.lazy)((()=>R?Promise.resolve({default:e=>null}):Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,41380))));function I(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function M(e,t){const n=[...e];return n[t.i]=t.code,n}function A(e){let{onClick:t,closed:n,title:o}=e;return r.createElement(h.Z,{className:m.Z.small,onClick:t},r.createElement("span",{className:(0,i.Z)(m.Z.arrow,n?m.Z.right:m.Z.down)},"\u25b6"),o)}function $(e){let{titles:t,closedList:n,onClick:o}=e;const{values:a}=(0,r.useContext)(u.Z),l=a.length>0;return r.createElement(h.Z,{className:(0,i.Z)({[m.Z.small]:l,[m.Z.subtabs]:l},m.Z.noupper,m.Z.tabControls)},r.createElement("div",{className:m.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>o(t),className:(0,i.Z)(m.Z.tab,{[m.Z.selected]:!n[t]})},e)))))}I.defaultProps={reverse:!1};const F=e=>{let{children:t,groupId:n,hidden:o=!1,defaultOpen:a,row:l=!1,fixtures:s}=e;return r.createElement(O,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:l,hidden:o,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};F.defaultProps={defaultOpen:"n",fixtures:[]};var U=(0,r.memo)(F)},45045:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(19666),o=n(67294);function a(e){let{fallback:t,children:n}=e;return o.createElement(r.Z,{fallback:t},(()=>o.createElement(o.Suspense,{fallback:t},n)))}},62974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294),o=n(86010),a=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,o.Z)(a.Z.playgroundHeader,n,l?a.Z.clickable:null),onClick:l},t)}},80086:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(67294),o=n(11614),a=n(92785),l=n(92954),s=n(48256),i=n(3604),c=n(39714),u=n(86010),d=n(76602),p=n(63735),m=n(45440),f=n(29451),g=n(50634),y=n(70524);function h(e){let{value:t}=e;const n="dark"===(0,y.I)().colorMode,o=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:o[t]}}},base0B:"rgb(191, 199, 213)"})),[n,o]);return r.createElement(g.L,{shouldExpandNode:b,data:t,valueRenderer:k,theme:a,hideRoot:!0})}function b(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const o="y"===n,a=o?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),o?r.createElement(Z,null):null)}var x=(0,r.memo)(E);function w(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(h,{value:t})}const Z=(0,r.memo)(w);var C=n(45045);function S(e){let{groupId:t,defaultOpen:n,row:o,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:y}=(0,d.U)(),[h,b]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==h&&b(e)}const k=(0,r.useCallback)((e=>{v(e.currentTarget),b((e=>"y"===e?"n":"y")),y(t,"y"===h?"n":"y")}),[v,t,h,y]),E=(0,r.useMemo)((()=>[new a.Z,new l.Z(s.Z)]),[]),w=!("n"===h||!o);return r.createElement(i.Z,{managers:E},r.createElement(c.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(C.Z,{fallback:r.createElement(_,null)},r.createElement(j,null))),r.createElement(x,{selectedValue:h,toggle:k})))}var N=(0,r.memo)(S);function _(){return r.createElement("div",null,"Loading...")}const j=(0,r.lazy)((()=>Promise.all([n.e(86429),n.e(87876),n.e(73287),n.e(26750)]).then(n.bind(n,15929))));var L=n(62974);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(L.Z,null,r.createElement(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:a,fixtures:l})))}var O=(0,r.memo)(P)},3495:(e,t)=>{"use strict";const n="undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling|Mobile|Android|BlackBerry/i.test(navigator.userAgent);t.Z=n},57489:(e,t,n)=>{"use strict";var r=n(67294),o=n(64820);const a={React:r,...r,...o};t.Z=a},18786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(27378),n(3905)),a=n(88705),l=n(83323),s=n(90008);const i={title:"useLive()"},c=void 0,u={unversionedId:"api/useLive",id:"api/useLive",title:"useLive()",description:"useLive() - Use data that is always fresh",source:"@site/../docs/core/api/useLive.md",sourceDirName:"api",slug:"/api/useLive",permalink:"/docs/api/useLive",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useLive.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1670185149,formattedLastUpdatedAt:"Dec 4, 2022",frontMatter:{title:"useLive()"},sidebar:"docs",previous:{title:"useSubscription()",permalink:"/docs/api/useSubscription"},next:{title:"useFetch()",permalink:"/docs/api/useFetch"}},d={},p=[{value:"Example",id:"example",level:2}],m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"useLive() - Use data that is always fresh"),(0,o.kt)("meta",{name:"docsearch:pagerank",content:"10"})),(0,o.kt)(a.Z,{mdxType:"GenericsTabs"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useLive(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): Denormalize<typeof endpoint.schema>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function useLive<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): E['schema'] extends Exclude<Schema, null>\n  ? Denormalize<E['schema']>\n  : ReturnType<E>;\n"))),(0,o.kt)("p",null,"Fetch and use data, while keeping it updated with remote changes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/useSuspense"},"useSuspense()")," + ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/useSubscription"},"useSubscription()")," in one hook."),(0,o.kt)(l.ZP,{hook:"useLive",mdxType:"ConditionalDependencies"}),(0,o.kt)("admonition",{title:"React Native",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When using React Navigation, useLive() will trigger fetches on focus if the data is considered\nstale. useLive() will also sub/unsub with focus/unfocus respectively.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(s.Z,{mdxType:"HooksPlayground"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/ExchangeRates.ts" collapsed',title:'"api/ExchangeRates.ts"',collapsed:!0},"import { Entity, RestEndpoint } from '@rest-hooks/rest';\n\nexport class ExchangeRates extends Entity {\n  readonly currency: string = 'USD';\n  readonly rates: Record<string, string> = {};\n\n  pk(): string {\n    return this.currency;\n  }\n}\n\nexport const getExchangeRates = new RestEndpoint({\n  urlPrefix: 'https://www.coinbase.com/api/v2',\n  path: '/exchange-rates\\\\?currency=:currency',\n  schema: { data: ExchangeRates },\n  pollFrequency: 15000,\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useLive } from '@rest-hooks/react';\nimport { getExchangeRates } from './api/ExchangeRates';\n\nfunction AssetPrice({ symbol }: Props) {\n  const { data: price } = useLive(getExchangeRates, {\n    currency: 'USD',\n  });\n  const displayPrice = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n  }).format(1 / Number.parseFloat(price.rates[symbol]));\n  return (\n    <span>\n      {symbol} {displayPrice}\n    </span>\n  );\n}\ninterface Props {\n  symbol: string;\n}\nrender(<AssetPrice symbol=\"BTC\" />);\n"))))}f.isMDXComponent=!0},83323:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>s});var r=n(87462),o=(n(27378),n(3905)),a=n(13743);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,o.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(getTodo, id ? { id } : null);`)))}s.isMDXComponent=!0},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,n)=>{var r={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./react.d.ts":[61019,97359],"./rest.d.ts":[42714,46324]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((()=>n.t(o,23)))}o.keys=()=>Object.keys(r),o.id=73795,e.exports=o}}]);