/*! For license information please see 8692f7fb.fe4e52e4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[13405],{41535:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||f}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||f}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var E=v.prototype=new y;E.constructor=v,g(E,h.prototype),E.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,o={},l=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,a)&&!Z.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:l,ref:s,props:o,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,a,o,l){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return l=l(i=e),e=""===o?"."+N(i,0):o,k(l)?(a="",null!=e&&(a=e.replace(O,"$&/")+"/"),j(l,t,a,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,a+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(O,"$&/")+"/")+e)),t.push(l)),1;if(i=0,o=""===o?".":o+":",k(e))for(var u=0;u<e.length;u++){var c=o+N(s=e[u],u);i+=j(s,t,a,c,l)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)i+=j(s=s.value,t,a,c=o+N(s,u++),l);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function S(e,t,r){if(null==e)return e;var n=[],a=0;return j(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},D={transition:null}},27378:(e,t,r)=>{"use strict";r(41535)},85617:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(27378),r(3905)),o=(r(47885),r(39141));const l={title:"schema.Object"},s=void 0,i={unversionedId:"api/Object",id:"api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/../docs/graphql/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/graphql/api/Object",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/api/Object.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1662248478,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"schema.Object"},sidebar:"docs",previous:{title:"Entity",permalink:"/graphql/api/Entity"},next:{title:"schema.Array",permalink:"/graphql/api/Array"}},u={},c=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,a.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,a.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,a.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,a.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,a.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,a.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,a.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}p.isMDXComponent=!0},30433:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),u=r(63735),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:l,defaultValue:p,values:m,groupId:f,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[w,x]=(0,a.useState)(v),Z=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=f){const e=E[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&x(e)}const _=e=>{const t=e.currentTarget,r=Z.indexOf(t),n=h[r].value;n!==w&&(C(t),x(n),null!=f&&k(f,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;r=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;r=Z[t]??Z[Z.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>Z.push(e),onKeyDown:O,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},69762:(e,t,r)=>{"use strict";const n=(0,r(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=n},39141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>$});var n=r(67294),a=r(87462),o=r(49544),l=r(86010),s=r(11614),i=r(6832),u=r(99401),c=r(69762),d=r(45440),p=r(13743);function m(e){let{fixtures:t}=e;return n.createElement("div",{className:d.Z.fixtureBlock},t.map((e=>n.createElement("div",{key:e.endpoint.key(...e.args),className:d.Z.fixtureItem},n.createElement("div",{className:d.Z.fixtureHeader},e.endpoint.key(...e.args)),n.createElement(g,{fixture:e})))))}var f=(0,n.memo)(m);function g(e){let{fixture:t}=e;return"function"==typeof t.response?"function":n.createElement(p.Z,{language:"json",className:d.Z.fixtureJson},JSON.stringify(t.response))}var b=r(62974),h=r(80086),y=r(45045),v=r(76226),E=r(30573);let k;if("undefined"!=typeof window&&!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){const e=["rest","core","endpoint","normalizr","graphql","hooks"],t=["react","rest-hooks","@rest-hooks/rest","@rest-hooks/graphql","@rest-hooks/hooks","bignumber.js"];if(!k){const n=E.Z.init();n.then((e=>{e&&(k=e,e.languages.typescript.typescriptDefaults.setCompilerOptions({allowNonTsExtensions:!0,target:e.languages.typescript.ScriptTarget.ES2017,jsx:e.languages.typescript.JsxEmit.ReactJSX,strict:!0,lib:["dom","esnext"],noEmit:!0,module:e.languages.typescript.ModuleKind.ES2015,moduleResolution:e.languages.typescript.ModuleResolutionKind.NodeJs,typeRoots:["node_modules/@types"],allowSyntheticDefaultImports:!0,skipLibCheck:!0,noImplicitAny:!1}),e.editor.defineTheme("prism",{base:"vs-dark",inherit:!0,rules:[{token:"number",foreground:"f78c6c"},{token:"string",foreground:"b6d986"},{token:"keyword",fontStyle:"italic",foreground:"7da4f6"},{token:"type",foreground:"ffcb6b"},{token:"delimiter",foreground:"C792EA"},{token:"tag",foreground:"FF5590"}],colors:{"editor.foreground":"#bfc7d5"}}),e.languages.registerCompletionItemProvider("typescript",{triggerCharacters:["'",'"',".","/"],provideCompletionItems:(r,n)=>{const a=r.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:n.lineNumber,endColumn:n.column});if(/(([\s|\n]+from\s+)|(\brequire\b\s*\())["|'][^'^"]*$/.test(a))return a.endsWith(".")||a.endsWith("/")?void 0:{suggestions:t.map((t=>({label:t,kind:e.languages.CompletionItemKind.Module,insertText:t})))}}}))})),Promise.allSettled([n,r.e(37956).then(r.t.bind(r,70637,23)),r.e(49033).then(r.t.bind(r,7712,23)),r.e(42713).then(r.t.bind(r,93716,23)),r.e(78789).then(r.t.bind(r,52031,23)),...e.map((e=>r(73795)(`./${e}.d.ts`)))]).then((t=>{let[r,...n]=t;if("fulfilled"!==r.status||!r.value)return;const a=r.value,[o,l,s,i,...u]=n.map((e=>"fulfilled"===e.status?e.value.default:""));return a.languages.typescript.typescriptDefaults.addExtraLib("declare module \"react/jsx-runtime\" {\n        import './';\n      }","file:///node_modules/@types/react/jsx-runtime.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("import * as React from 'react'\n\n    declare global {\n      namespace JSX {\n        interface IntrinsicElements {\n          strike: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;\n        }\n      }\n    }","file:///node_modules/@types/react/more.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib("declare function render(component:JSX.Element):void;\n        declare function CurrentTime(props: {}):JSX.Element;\n        declare function ResetableErrorBoundary(props: { children: JSX.ReactChild }):JSX.Element;\n        declare function randomFloatInRange(min: number, max: number, decimals?: number): number;"),a.languages.typescript.typescriptDefaults.addExtraLib(o,"es2022"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "react" { ${l} }`,"file:///node_modules/@types/react/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "bignumber.js" { ${s} }`,"file:///node_modules/bignumber.js/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "rest-hooks" { ${i} }`,"file:///node_modules/rest-hooks/index.d.ts"),a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${i} }`),u.forEach(((t,r)=>{const n=e[r];a.languages.typescript.typescriptDefaults.addExtraLib(`declare module "@rest-hooks/${n}" { ${t} }`,`file:///node_modules/@rest-hooks/${t}/index.d.ts`),"rest"===n&&a.languages.typescript.typescriptDefaults.addExtraLib(`declare globals { ${t} }`)})),a.languages.typescript.javascriptDefaults.setEagerModelSync(!0),a}))}}const w=(0,n.memo)(v.ZP);const x={scrollbar:{alwaysConsumeMouseWheel:!1},minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,wrappingIndent:"indent",lineNumbers:"off",folding:!1},Z=(0,n.memo)(o.uz);var C,_="undefined"==typeof window||/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)?function(e){let{onChange:t,code:r,path:a}=e;return n.createElement(Z,{onChange:t,code:r})}:function(e){let{onChange:t,code:r,path:a}=e;a.endsWith(".tsx")||a.endsWith(".ts")||(a+=".tsx");const[o,l]=(0,n.useState)(50),s=(0,n.useCallback)((e=>{const t=e.getDomNode(),r=t.getElementsByClassName("view-lines")[0];let n=0;const a=19*e.getModel().getLineCount()+10;t.style.height=a+"px",l(a),e.layout(),e.onDidChangeModelDecorations((()=>{setTimeout((()=>{const o=19*r.childElementCount+10;n=r.childElementCount,t.style.height=o+"px",l(a),e.layout()}),0)}))}),[]);return n.createElement(w,{path:a,defaultLanguage:"typescript",onChange:t,value:r,options:x,theme:"prism",onMount:s,height:o})};function O(){const{selectedValue:e,setSelectedValue:t,values:r}=(0,n.useContext)(c.Z);return n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},r.map((r=>{let{value:a,label:o}=r;return n.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},o)})))}function N(e){let{children:t}=e;return n.createElement(b.Z,{className:d.Z.tabControls},n.createElement("div",{className:d.Z.title},t),n.createElement(O,null))}function j(e){let{title:t,fixtures:r}=e;const{values:a}=(0,n.useContext)(c.Z),o=a.length>0;return n.createElement(n.Fragment,null,r.length?n.createElement(n.Fragment,null,n.createElement(b.Z,{className:d.Z.small},"Fixtures"),n.createElement(f,{fixtures:r})):null,o?n.createElement(N,null,t):null)}function S(e){let{children:t,transformCode:r,groupId:s,defaultOpen:c,row:p,hidden:m,fixtures:f,includeEndpoints:g,...b}=e;const{liveCodeBlock:{playgroundPosition:h}}=(0,i.Z)().siteConfig.themeConfig,y=(0,u.p)();return n.createElement("div",{className:(0,l.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},n.createElement(o.nu,(0,a.Z)({theme:y},b),n.createElement(T,{reverse:"top"===h,row:p,fixtures:f,includeEndpoints:g,groupId:s,defaultOpen:c},t)))}function T(e){let{reverse:t,children:r,row:a,fixtures:s,includeEndpoints:i,groupId:u,defaultOpen:c}=e;const p=(0,n.useMemo)((()=>(1e4*Math.random()).toPrecision(4).toString()),[]),m=(0,n.useMemo)((()=>"string"==typeof r?[{code:r.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(r)?r:[r]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:r="",collapsed:n=!1,path:a}=e;return{code:t.replace(/\n$/,""),title:r.replaceAll('"',""),collapsed:n,path:a}}))),[r]),[f,g]=(0,n.useReducer)(L,void 0,(()=>m.map((e=>{let{code:t}=e;return t})))),b=(0,n.useMemo)((()=>m.map(((e,t)=>e=>g({i:t,code:e})))),[m.length]),[v,E]=(0,n.useState)((()=>m.map((e=>{let{collapsed:t}=e;return t})))),k=f.join("\n");return n.createElement(I,{reverse:t},n.createElement("div",null,n.createElement(j,{fixtures:!a&&s}),a&&m.length>1?n.createElement(M,{titles:m.map((e=>{let{title:t}=e;return t})),closedList:v,onClick:e=>E((t=>t.map(((t,r)=>r!==e))))}):null,m.map(((e,t)=>{let{title:r,path:o}=e;return n.createElement(n.Fragment,{key:t},!a&&r?n.createElement(R,{onClick:()=>E((e=>{const r=[...e];return r[t]=!r[t],r})),closed:v[t],title:r}):null,n.createElement("div",{key:t,className:(0,l.Z)(d.Z.playgroundEditor,{[d.Z.hidden]:v[t]})},n.createElement(_,{key:t,onChange:b[t],code:f[t],path:"/"+p+"/"+(o||r||"default.tsx")})))}))),n.createElement(y.Z,{fallback:n.createElement(o.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},n.createElement(h.Z,{key:"preview",includeEndpoints:i,groupId:u,defaultOpen:c,row:a,fixtures:s}))},n.createElement(D,{code:k,includeEndpoints:i,groupId:u,defaultOpen:c,row:a,fixtures:s})))}j.defaultProps={title:n.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},S.defaultProps={row:!1,hidden:!1};const P="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(C=navigator)?void 0:C.userAgent),D=(0,n.lazy)((()=>P?Promise.resolve({default:e=>null}):Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,37097))));function I(e){let{children:t,reverse:r}=e;const n=[...t];return n.reverse(),r?n:t}function L(e,t){const r=[...e];return r[t.i]=t.code,r}function R(e){let{onClick:t,closed:r,title:a}=e;return n.createElement(b.Z,{className:d.Z.small,onClick:t},n.createElement("span",{className:(0,l.Z)(d.Z.arrow,r?d.Z.right:d.Z.down)},"\u25b6"),a)}function M(e){let{titles:t,closedList:r,onClick:a}=e;const{values:o}=(0,n.useContext)(c.Z),s=o.length>0;return n.createElement(b.Z,{className:(0,l.Z)({[d.Z.small]:s,[d.Z.subtabs]:s},d.Z.noupper,d.Z.tabControls)},n.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>n.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,l.Z)(d.Z.tab,{[d.Z.selected]:!r[t]})},e)))))}I.defaultProps={reverse:!1};const A=e=>{let{children:t,groupId:r,hidden:a=!1,defaultOpen:o,row:l=!1,fixtures:s}=e;return n.createElement(S,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:r,defaultOpen:o,row:l,hidden:a,fixtures:s},"string"==typeof t||Array.isArray(t)?t:t.props.children)};A.defaultProps={defaultOpen:"n",fixtures:[]};var $=(0,n.memo)(A)},47885:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(65559),a=r(30433),o=r(67294);function l(e){let{children:t}=e;return o.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},o.createElement(a.Z,{value:"ts"},t[0]),o.createElement(a.Z,{value:"js"},t[1]))}},45045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(19666),a=r(67294);function o(e){let{fallback:t,children:r}=e;return a.createElement(n.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},r)))}},62974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(86010),o=r(45440);function l(e){let{children:t,className:r,onClick:l}=e;return n.createElement("div",{className:(0,a.Z)(o.Z.playgroundHeader,r,l?o.Z.clickable:null),onClick:l},t)}},80086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(67294),a=r(11614),o=r(27093),l=r(26127),s=r(82038),i=r(83611),u=r(39714),c=r(86010),d=r(76602),p=r(63735),m=r(45440),f=r(32041),g=r(97723),b=r(70524);function h(e){let{value:t}=e;const r="dark"===(0,b.I)().colorMode,a=(0,n.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),o=(0,n.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:r?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:r}=e;return{style:{...r,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:r}=e;return{style:{...r,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[r,a]);return n.createElement(g.L,{shouldExpandNode:y,data:t,valueRenderer:E,theme:o,hideRoot:!0})}function y(e,t,r){return 0===r||(!(1!==r||!["entities","results"].includes(e[0]))||(2===r&&"entities"===e[1]||(2===r&&"results"===e[1]||(3===r&&"entities"===e[2]||3===r&&"results"===e[2]))))}const v="undefined"!=typeof Intl;function E(e,t){const r=arguments.length<=2?void 0:arguments[2];return v&&"number"==typeof t&&"string"==typeof r&&isFinite(t)&&("date"===r||r.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function k(e){let{toggle:t,selectedValue:r}=e;const a="y"===r,o=a?m.Z.right:m.Z.left;return n.createElement(n.Fragment,null,n.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",n.createElement("span",{className:(0,c.Z)(m.Z.arrow,o,m.Z.vertical)},"\u25b6")),a?n.createElement(Z,null):null)}var w=(0,n.memo)(k);function x(){const e=(0,n.useContext)(f.sA),t=(0,n.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return n.createElement(h,{value:t})}const Z=(0,n.memo)(x);var C=r(45045);function _(e){let{groupId:t,defaultOpen:r,row:a,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:b}=(0,d.U)(),[h,y]=(0,n.useState)(r),{blockElementScrollPositionUntilNextRender:v}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==h&&y(e)}const E=(0,n.useCallback)((e=>{v(e.currentTarget),y((e=>"y"===e?"n":"y")),b(t,"y"===h?"n":"y")}),[v,t,h,b]),k=(0,n.useMemo)((()=>[new i.Z,new o.Z(l.Z)]),[]),x=!("n"===h||!a);return n.createElement(s.nq,{managers:k},n.createElement(u.Z,{fixtures:f,silenceMissing:!0},n.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},n.createElement(C.Z,{fallback:n.createElement(N,null)},n.createElement(j,null))),n.createElement(w,{selectedValue:h,toggle:E})))}var O=(0,n.memo)(_);function N(){return n.createElement("div",null,"Loading...")}const j=(0,n.lazy)((()=>Promise.all([r.e(86429),r.e(87876),r.e(97277),r.e(26750)]).then(r.bind(r,15929))));var S=r(62974);function T(e){let{groupId:t,defaultOpen:r,row:o,fixtures:l}=e;return n.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},n.createElement(S.Z,null,n.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),n.createElement("div",{className:m.Z.playgroundResult},n.createElement(O,{groupId:t,defaultOpen:r,row:o,fixtures:l})))}var P=(0,n.memo)(T)},57489:(e,t,r)=>{"use strict";var n=r(67294),a=r(72887);const o={React:n,...n,...a};t.Z=o},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45440:(e,t)=>{"use strict";t.Z={playgroundContainer:"playgroundContainer_sLUA",playgroundHeader:"playgroundHeader_Zx4K",tabControls:"tabControls_trxh",row:"row_YGZs",hidden:"hidden_Hh8i",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk",fixtureBlock:"fixtureBlock_mpRK",fixtureItem:"fixtureItem_Jd6V",fixtureHeader:"fixtureHeader_KYel",fixtureJson:"fixtureJson_HnbR"}},73795:(e,t,r)=>{var n={"./core.d.ts":[90734,30007],"./endpoint.d.ts":[73118,72901],"./graphql.d.ts":[60467,99076],"./hooks.d.ts":[56890,22595],"./normalizr.d.ts":[14991,12192],"./rest.d.ts":[42714,46324]};function a(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((()=>r.t(a,23)))}a.keys=()=>Object.keys(n),a.id=73795,e.exports=a}}]);