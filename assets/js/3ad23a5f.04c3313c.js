"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),l=(n(67294),n(3905)),a=(n(70523),n(107));const o={title:"schema.Object"},i=void 0,s={unversionedId:"api/Object",id:"version-0.2/api/Object",title:"schema.Object",description:"schema.Values - Representing Objects with known keys | Rest Hooks",source:"@site/graphql_versioned_docs/version-0.2/api/Object.md",sourceDirName:"api",slug:"/api/Object",permalink:"/graphql/0.2/api/Object",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/api/Object.md",tags:[],version:"0.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"schema.Object"},sidebar:"docs",previous:{title:"Entity",permalink:"/graphql/0.2/api/Entity"},next:{title:"schema.Array",permalink:"/graphql/0.2/api/Array"}},c={},u=[{value:"Instance Methods",id:"instance-methods",level:4},{value:"Usage",id:"usage",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("title",null,"schema.Values - Representing Objects with known keys | Rest Hooks")),(0,l.kt)("p",null,"Define a plain object mapping that has values needing to be normalized into Entities. ",(0,l.kt)("em",{parentName:"p"},"Note: The same behavior can be defined with shorthand syntax: ",(0,l.kt)("inlineCode",{parentName:"em"},"{ ... }"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"definition"),": ",(0,l.kt)("strong",{parentName:"li"},"required")," A definition of the nested entities found within this object. Defaults to empty object.\nYou ",(0,l.kt)("em",{parentName:"li"},"do not")," need to define any keys in your object other than those that hold other entities. All other values will be copied to the normalized output.")),(0,l.kt)("h4",{id:"instance-methods"},"Instance Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"define(definition)"),": When used, the ",(0,l.kt)("inlineCode",{parentName:"li"},"definition")," passed in will be merged with the original definition passed to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")," constructor. This method tends to be useful for creating circular references in schema.")),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)(a.Z,{groupId:"schema",defaultOpen:"y",mdxType:"HooksPlayground"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const sampleData = () =>\n  Promise.resolve({ users: [{ id: '123', name: 'Beth' }] });\n\nclass User extends Entity {\n  readonly name: string = '';\n  pk() {\n    return this.id;\n  }\n}\nconst userList = new Endpoint(sampleData, {\n  schema:\n    new schema.Object({ users: new schema.Array(User) }),\n  ,\n});\nfunction UsersPage() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <div>\n      {users.map(user => <div key={user.pk()}>{user.name}</div>)}\n    </div>\n  );\n}\nrender(<UsersPage />);\n"))))}p.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),l=n(67294),a=n(86010),o=n(72389),i=n(67392),s=n(7094),c=n(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:f,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,s.U)(),[Z,w]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=f){const e=E[f];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==Z&&(O(t),w(r),null!=f&&k(f,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:C,onClick:C},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":Z===t})}),n??t)}))),n?(0,l.cloneElement)(b.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),l=n(87462),a=n(49544),o=n(86010),i=n(95999),s=n(52263),c=n(66412),u=n(84195),d=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(f,{fixture:e})))))}var m=(0,r.memo)(p);function f(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var g,b=n(60975),v=n(51523),h=n(1556);function y(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(u.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:l,label:a}=n;return r.createElement("div",{role:"tab",tabIndex:e===l?0:-1,"aria-selected":e===l,key:l,className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:e===l}),onFocus:t,onClick:t,value:l},a)})))}function E(e){let{children:t}=e;return r.createElement(b.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(y,null))}function k(e){let{title:t,fixtures:n}=e;const{values:l}=(0,r.useContext)(u.Z),a=l.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(b.Z,{className:d.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,a?r.createElement(E,null,t):null)}function Z(e){let{children:t,transformCode:n,groupId:i,defaultOpen:u,row:p,hidden:m,fixtures:f,includeEndpoints:g,...b}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,h=(0,c.p)();return r.createElement("div",{className:(0,o.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(a.nu,(0,l.Z)({theme:h},b),r.createElement(w,{reverse:"top"===v,row:p,fixtures:f,includeEndpoints:g,groupId:i,defaultOpen:u},t)))}function w(e){let{reverse:t,children:n,row:l,fixtures:o,includeEndpoints:i,groupId:s,defaultOpen:c}=e;const u=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,p]=(0,r.useReducer)(N,void 0,(()=>u.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>u.map(((e,t)=>e=>p({i:t,code:e})))),[u.length]),[f,g]=(0,r.useState)((()=>u.map((e=>{let{collapsed:t}=e;return t})))),b=d.join("\n");return r.createElement(C,{reverse:t},r.createElement("div",null,r.createElement(k,{fixtures:!l&&o}),l&&u.length>1?r.createElement(P,{titles:u.map((e=>{let{title:t}=e;return t})),closedList:f,onClick:e=>g((t=>t.map(((t,n)=>n!==e))))}):null,u.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!l&&n?r.createElement(_,{onClick:()=>g((e=>{const n=[...e];return n[t]=!n[t],n})),closed:f[t],title:n}):null,f[t]?null:r.createElement(T,{key:t,onChange:m[t],code:d[t]}))}))),r.createElement(h.Z,{fallback:r.createElement(a.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(v.Z,{key:"preview",includeEndpoints:i,groupId:s,defaultOpen:c,row:l,fixtures:o}))},r.createElement(O,{code:b,includeEndpoints:i,groupId:s,defaultOpen:c,row:l,fixtures:o})))}k.defaultProps={title:r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},Z.defaultProps={row:!1,hidden:!1};const x="object"==typeof navigator&&/bot|googlebot|crawler|spider|robot|crawling/i.test(null==(g=navigator)?void 0:g.userAgent),O=(0,r.lazy)((()=>x?Promise.resolve({default:e=>null}):Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,47550))));function C(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}C.defaultProps={reverse:!1};const j=(0,r.memo)(a.uz);function T(e){let{onChange:t,code:n}=e;return r.createElement(j,{className:d.Z.playgroundEditor,onChange:t,code:n})}function _(e){let{onClick:t,closed:n,title:l}=e;return r.createElement(b.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,o.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),l)}function P(e){let{titles:t,closedList:n,onClick:l}=e;const{values:a}=(0,r.useContext)(u.Z),i=a.length>0;return r.createElement(b.Z,{className:(0,o.Z)({[d.Z.small]:i,[d.Z.subtabs]:i},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>l(t),className:(0,o.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const I=e=>{let{children:t,groupId:n,hidden:l=!1,defaultOpen:a,row:o=!1,fixtures:i}=e;return r.createElement(Z,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:a,row:o,hidden:l,fixtures:i},"string"==typeof t||Array.isArray(t)?t:t.props.children)};I.defaultProps={defaultOpen:"n",fixtures:[]};var A=(0,r.memo)(I)},70523:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),l=n(85162),a=n(67294);function o(e){let{children:t}=e;return a.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},a.createElement(l.Z,{value:"ts"},t[0]),a.createElement(l.Z,{value:"js"},t[1]))}},1556:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(91262),l=n(67294);function a(e){let{fallback:t,children:n}=e;return l.createElement(r.Z,{fallback:t},(()=>l.createElement(l.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),l=n(86010),a=n(45440);function o(e){let{children:t,className:n,onClick:o}=e;return r.createElement("div",{className:(0,l.Z)(a.Z.playgroundHeader,n,o?a.Z.clickable:null),onClick:o},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(67294),l=n(95999),a=n(27093),o=n(26127),i=n(82038),s=n(83611),c=n(39714),u=n(86010),d=n(7094),p=n(12466),m=n(45440),f=n(32041),g=n(97723),b=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,b.I)().colorMode,l=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),a=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:l[t]}}},base0B:"rgb(191, 199, 213)"})),[n,l]);return r.createElement(g.L,{shouldExpandNode:h,data:t,valueRenderer:E,theme:a,hideRoot:!0})}function h(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const y="undefined"!=typeof Intl;function E(e,t){const n=arguments.length<=2?void 0:arguments[2];return y&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function k(e){let{toggle:t,selectedValue:n}=e;const l="y"===n,a=l?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,u.Z)(m.Z.arrow,a,m.Z.vertical)},"\u25b6")),l?r.createElement(x,null):null)}var Z=(0,r.memo)(k);function w(){const e=(0,r.useContext)(f.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const x=(0,r.memo)(w);var O=n(1556);function C(e){let{groupId:t,defaultOpen:n,row:l,fixtures:f}=e;const{tabGroupChoices:g,setTabGroupChoices:b}=(0,d.U)(),[v,h]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:y}=(0,p.o5)();if(null!=t){const e=g[t];null!=e&&e!==v&&h(e)}const E=(0,r.useCallback)((e=>{y(e.currentTarget),h((e=>"y"===e?"n":"y")),b(t,"y"===v?"n":"y")}),[y,t,v,b]),k=(0,r.useMemo)((()=>[new s.Z,new a.Z(o.Z)]),[]),w=!("n"===v||!l);return r.createElement(i.nq,{managers:k},r.createElement(c.Z,{fixtures:f,silenceMissing:!0},r.createElement("div",{className:(0,u.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(O.Z,{fallback:r.createElement(j,null)},r.createElement(T,null))),r.createElement(Z,{selectedValue:v,toggle:E})))}var N=(0,r.memo)(C);function j(){return r.createElement("div",null,"Loading...")}const T=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var _=n(60975);function P(e){let{groupId:t,defaultOpen:n,row:a,fixtures:o}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(_.Z,null,r.createElement(l.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:a,fixtures:o})))}var I=(0,r.memo)(P)},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);