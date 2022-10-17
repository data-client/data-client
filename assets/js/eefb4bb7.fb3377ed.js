"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(67294),a=n(87462),i=n(49544),l=n(86010),o=n(95999),s=n(52263),d=n(66412),c=n(84195),u=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(h,{fixture:e})))))}var m=(0,r.memo)(p);function h(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var f=n(60975),g=n(51523),v=n(1556);function y(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:i}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,l.Z)(u.Z.tab,{[u.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},i)})))}function b(e){let{children:t}=e;return r.createElement(f.Z,{className:u.Z.tabControls},r.createElement("div",{className:u.Z.title},t),r.createElement(y,null))}function k(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(c.Z),i=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(f.Z,{className:u.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,i?r.createElement(b,null,t):null)}function E(e){let{children:t,transformCode:n,groupId:o,defaultOpen:c,row:p,hidden:m,fixtures:h,includeEndpoints:f,...g}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,s.Z)().siteConfig.themeConfig,y=(0,d.p)();return r.createElement("div",{className:(0,l.Z)(u.Z.playgroundContainer,{[u.Z.row]:p,[u.Z.hidden]:m})},r.createElement(i.nu,(0,a.Z)({theme:y},g),r.createElement(w,{reverse:"top"===v,row:p,fixtures:h,includeEndpoints:f,groupId:o,defaultOpen:c},t)))}function w(e){let{reverse:t,children:n,row:a,fixtures:l,includeEndpoints:o,groupId:s,defaultOpen:d}=e;const c=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[u,p]=(0,r.useReducer)(Z,void 0,(()=>c.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>c.map(((e,t)=>e=>p({i:t,code:e})))),[c.length]),[h,f]=(0,r.useState)((()=>c.map((e=>{let{collapsed:t}=e;return t})))),y=u.join("\n");return r.createElement(C,{reverse:t},r.createElement("div",null,r.createElement(k,{fixtures:!a&&l}),a&&c.length>1?r.createElement(S,{titles:c.map((e=>{let{title:t}=e;return t})),closedList:h,onClick:e=>f((t=>t.map(((t,n)=>n!==e))))}):null,c.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(R,{onClick:()=>f((e=>{const n=[...e];return n[t]=!n[t],n})),closed:h[t],title:n}):null,h[t]?null:r.createElement(N,{key:t,onChange:m[t],code:u[t]}))}))),r.createElement(v.Z,{fallback:r.createElement(i.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(g.Z,{key:"preview",includeEndpoints:o,groupId:s,defaultOpen:d,row:a,fixtures:l}))},r.createElement(x,{code:y,includeEndpoints:o,groupId:s,defaultOpen:d,row:a,fixtures:l})))}k.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},E.defaultProps={row:!1,hidden:!1};const x=(0,r.lazy)((()=>Promise.resolve({default:e=>null})));function C(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Z(e,t){const n=[...e];return n[t.i]=t.code,n}C.defaultProps={reverse:!1};const T=(0,r.memo)(i.uz);function N(e){let{onChange:t,code:n}=e;return r.createElement(T,{className:u.Z.playgroundEditor,onChange:t,code:n})}function R(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(f.Z,{className:u.Z.small,onClick:t},r.createElement("span",{className:(0,l.Z)(u.Z.arrow,n?u.Z.right:u.Z.down)},"\u25b6"),a)}function S(e){let{titles:t,closedList:n,onClick:a}=e;const{values:i}=(0,r.useContext)(c.Z),o=i.length>0;return r.createElement(f.Z,{className:(0,l.Z)({[u.Z.small]:o,[u.Z.subtabs]:o},u.Z.noupper,u.Z.tabControls)},r.createElement("div",{className:u.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,l.Z)(u.Z.tab,{[u.Z.selected]:!n[t]})},e)))))}const P=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:i,row:l=!1,fixtures:o}=e;return r.createElement(E,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:i,row:l,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};P.defaultProps={defaultOpen:"n",fixtures:[]};var O=(0,r.memo)(P)},1556:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(91262),a=n(67294);function i(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),i=n(45440);function l(e){let{children:t,className:n,onClick:l}=e;return r.createElement("div",{className:(0,a.Z)(i.Z.playgroundHeader,n,l?i.Z.clickable:null),onClick:l},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(67294),a=n(95999),i=n(27093),l=n(26127),o=n(82038),s=n(83611),d=n(39714),c=n(86010),u=n(7094),p=n(12466),m=n(45440),h=n(32041),f=n(97723),g=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,g.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),i=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(f.L,{shouldExpandNode:y,data:t,valueRenderer:k,theme:i,hideRoot:!0})}function y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,i=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,i,m.Z.vertical)},"\u25b6")),a?r.createElement(C,null):null)}var w=(0,r.memo)(E);function x(){const e=(0,r.useContext)(h.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const C=(0,r.memo)(x);var Z=n(1556);function T(e){let{groupId:t,defaultOpen:n,row:a,fixtures:h}=e;const{tabGroupChoices:f,setTabGroupChoices:g}=(0,u.U)(),[v,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=f[t];null!=e&&e!==v&&y(e)}const k=(0,r.useCallback)((e=>{b(e.currentTarget),y((e=>"y"===e?"n":"y")),g(t,"y"===v?"n":"y")}),[b,t,v,g]),E=(0,r.useMemo)((()=>[new s.Z,new i.Z(l.Z)]),[]),x=!("n"===v||!a);return r.createElement(o.nq,{managers:E},r.createElement(d.Z,{fixtures:h,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:x})},r.createElement(Z.Z,{fallback:r.createElement(R,null)},r.createElement(S,null))),r.createElement(w,{selectedValue:v,toggle:k})))}var N=(0,r.memo)(T);function R(){return r.createElement("div",null,"Loading...")}const S=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var P=n(60975);function O(e){let{groupId:t,defaultOpen:n,row:i,fixtures:l}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(P.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(N,{groupId:t,defaultOpen:n,row:i,fixtures:l})))}var I=(0,r.memo)(O)},5198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(107);const l={title:"Expiry Policy",sidebar_label:"Expiry Policy"},o=void 0,s={unversionedId:"getting-started/expiry-policy",id:"version-6.1/getting-started/expiry-policy",title:"Expiry Policy",description:"By default, Rest Hooks cache policy can be described as stale-while-revalidate.",source:"@site/versioned_docs/version-6.1/getting-started/expiry-policy.md",sourceDirName:"getting-started",slug:"/getting-started/expiry-policy",permalink:"/docs/6.1/getting-started/expiry-policy",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/expiry-policy.md",tags:[],version:"6.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1644636105,formattedLastUpdatedAt:"Feb 12, 2022",frontMatter:{title:"Expiry Policy",sidebar_label:"Expiry Policy"},sidebar:"version-6.1/docs",previous:{title:"Entity",permalink:"/docs/6.1/getting-started/entity"},next:{title:"Validation",permalink:"/docs/6.1/getting-started/validation"}},d={},c=[{value:"Expiry status",id:"expiry-status",level:2},{value:"Fresh",id:"fresh",level:3},{value:"Stale",id:"stale",level:3},{value:"Invalid",id:"invalid",level:3},{value:"Expiry Time",id:"expiry-time",level:2},{value:"Endpoint.dataExpiryLength",id:"endpointdataexpirylength",level:3},{value:"Endpoint.invalidIfStale",id:"endpointinvalidifstale",level:3},{value:"Force refresh",id:"force-refresh",level:2},{value:"Invalidate (re-suspend)",id:"invalidate-re-suspend",level:2},{value:"A specific endpoint",id:"a-specific-endpoint",level:3},{value:"Any endpoint with an entity",id:"any-endpoint-with-an-entity",level:3},{value:"Error policy",id:"error-policy",level:2},{value:"Soft",id:"soft",level:3},{value:"Hard",id:"hard",level:3},{value:"Policy for Resources",id:"policy-for-resources",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Rest Hooks cache policy can be described as ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/stale-while-revalidate/"},"stale-while-revalidate"),".\nThis means that when data is available it can avoid blocking the application by using the stale data. However, in the background\nit will still refresh the data if old enough."),(0,a.kt)("p",null,"To explain these concepts we'll be faking an endpoint that gives us the current time so it is easy to tell how stale it is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="lastUpdated.ts"',title:'"lastUpdated.ts"'},"class TimedEntity extends Entity {\n  pk() {\n    return this.id;\n  }\n  static schema = {\n    updatedAt: Date,\n  };\n}\nconst fetchLastUpdated = ({ id }) =>\n  fetch(`/api/currentTime/${id}`).then(res => res.json());\nconst lastUpdated = new Endpoint(mockLastUpdated, { schema: TimedEntity });\n")),(0,a.kt)("h2",{id:"expiry-status"},"Expiry status"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"Data in this state is considered new enough that it doesn't need to fetch."),(0,a.kt)("h3",{id:"stale"},"Stale"),(0,a.kt)("p",null,"Data is still allowed to be shown, however Rest Hooks might attempt to revalidate by fetching again."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/useresource"},"useResource()")," considers fetching on mount as well as when its parameters change.\nIn these cases it will fetch if the data is considered stale."),(0,a.kt)("h3",{id:"invalid"},"Invalid"),(0,a.kt)("p",null,"Data should not be shown. Any components needing this data will trigger fetch and suspense. If\nno components care about this data no action will be taken."),(0,a.kt)("h2",{id:"expiry-time"},"Expiry Time"),(0,a.kt)("h3",{id:"endpointdataexpirylength"},"Endpoint.dataExpiryLength"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength"},"Endpoint.dataExpiryLength")," sets how long (in miliseconds) it takes for data\nto transition from 'fresh' to 'stale' status. Try setting it to a very low number like '50'\nto make it becomes stale almost instantly; or a very large number to stay around for a long time."),(0,a.kt)("p",null,"Toggling between 'first' and 'second' changes the parameters. If the data is still considered fresh\nyou will continue to see the old time without any refresh."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({ dataExpiryLength: 10000 });\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useResource(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h3",{id:"endpointinvalidifstale"},"Endpoint.invalidIfStale"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#invalidifstale"},"Endpoint.invalidIfStale")," eliminates the ",(0,a.kt)("inlineCode",{parentName:"p"},"stale")," status, making data\nthat expires immediately be considered 'invalid'."),(0,a.kt)("p",null,"This is demonstrated by the component suspending once its data goes stale. If the data is still\nwithin the expiry time it just continues to display it."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const lastUpdated = lastUpdated.extend({\n  invalidIfStale: true,\n  dataExpiryLength: 5000,\n});\n\nfunction TimePage({ id }) {\n  const { updatedAt } = useResource(lastUpdated, { id });\n  return (\n    <div>\n      API Time:{' '}\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>\n    </div>\n  );\n}\n\nfunction Navigator() {\n  const [id, setId] = React.useState('1');\n  const handleChange = e => setId(e.currentTarget.value);\n  return (\n    <div>\n      <div>\n        <button value=\"1\" onClick={handleChange}>\n          First\n        </button>\n        <button value=\"2\" onClick={handleChange}>\n          Second\n        </button>\n      </div>\n      <TimePage id={id} />\n      <div>\n        Current Time: <CurrentTime />\n      </div>\n    </div>\n  );\n}\nrender(<Navigator />);\n"))),(0,a.kt)("h2",{id:"force-refresh"},"Force refresh"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Controller#fetch"},"Controller.fetch")," can be used to trigger a fetch while still showing\nthe previous data. This can be done even with 'fresh' data."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(lastUpdated, { id: '1' })}>Refresh</button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"invalidate-re-suspend"},"Invalidate (re-suspend)"),(0,a.kt)("p",null,"Both endpoints and entities can be targetted to be invalidated."),(0,a.kt)("h3",{id:"a-specific-endpoint"},"A specific endpoint"),(0,a.kt)("p",null,"In this example we can see invalidating the endpoint shows the loading fallback since the data is not allowed to be displayed."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const { invalidate } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => invalidate(lastUpdated, { id: '1' })}>\n        Invalidate\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h3",{id:"any-endpoint-with-an-entity"},"Any endpoint with an entity"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/Delete"},"Delete")," allows us to invalidate ",(0,a.kt)("em",{parentName:"p"},"any")," endpoint that includes that relies on that entity in their\nresponse. If the endpoint uses the entity in an Array, it will simply be removed from that Array."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const mockDelete = ({ id }) => Promise.resolve({ id });\nconst deleteLastUpdated = new Endpoint(mockDelete, {\n  schema: new schema.Delete(TimedEntity),\n});\n\nfunction ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const { fetch } = useController();\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <button onClick={() => fetch(deleteLastUpdated, { id: '1' })}>\n        Delete\n      </button>\n    </div>\n  );\n}\nrender(<ShowTime />);\n"))),(0,a.kt)("h2",{id:"error-policy"},"Error policy"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#errorpolicy"},"Endpoint.errorPolicy")," controls cache behavior upon a fetch rejection.\nIt uses the rejection error to determine whether it should be treated as 'soft' or 'hard' error."),(0,a.kt)("h3",{id:"soft"},"Soft"),(0,a.kt)("p",null,"Soft errors will not invalidate a response if it is already available. However, if there is currently\nno data available, it will mark that endpoint as rejected, causing ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/useresource"},"useResource()")," to throw an\nerror. This can be caught with ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.1/api/NetworkErrorBoundary"},"NetworkErrorBoundary")),(0,a.kt)("h3",{id:"hard"},"Hard"),(0,a.kt)("p",null,"Hard errors always invalidate a response with the rejection - even when data has previously made available."),(0,a.kt)(i.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"let FAKE_ERROR = undefined;\nconst superFetch = lastUpdated;\nconst mockFetch = (arg, error) =>\n  FAKE_ERROR !== undefined ? Promise.reject(FAKE_ERROR) : superFetch(arg);\n\nconst lastUpdated = lastUpdated.extend({\n  fetch: mockFetch,\n  errorPolicy: error =>\n    error.status >= 500 ? ('hard' as const) : ('soft' as const),\n});\nfunction createError(status) {\n  const error = new Error('fake error');\n  error.status = status;\n  return error;\n}\n\nfunction ShowTime() {\n  const { updatedAt } = useResource(lastUpdated, { id: '1' });\n  const { fetch, invalidate } = useController();\n  React.useEffect(\n    () => () => {\n      FAKE_ERROR = undefined;\n    },\n    [updatedAt],\n  );\n  return (\n    <div>\n      <time>\n        {Intl.DateTimeFormat('en-US', { timeStyle: 'long' }).format(updatedAt)}\n      </time>{' '}\n      <div>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            fetch(lastUpdated, { id: '1' });\n          }}\n        >\n          Fetch Hard\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(400);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Soft\n        </button>\n        <button\n          onClick={() => {\n            FAKE_ERROR = createError(500);\n            invalidate(lastUpdated, { id: '1' });\n          }}\n        >\n          Invalidate Hard\n        </button>\n      </div>\n    </div>\n  );\n}\n\nrender(\n  <ResetableErrorBoundary>\n    <ShowTime />\n  </ResetableErrorBoundary>,\n);\n"))),(0,a.kt)("h3",{id:"policy-for-resources"},"Policy for Resources"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),"s indicate a failure of the server, we want to use stale data\nif it exists. On the other hand, something like a ",(0,a.kt)("inlineCode",{parentName:"p"},"400")," indicates 'user error', which\nmeans the error indicates something about application flow - like if a record is deleted, resulting\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"400"),". Keeping the record around would be inaccurate."),(0,a.kt)("p",null,"Since this is the typical behavior for REST APIs, this is the default policy in ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/rest"},"@rest-hooks/rest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"  /** Get the request options for this SimpleResource */\n  static getEndpointExtra(): EndpointExtraOptions | undefined {\n    return {\n      errorPolicy: error =>\n        error.status >= 500 ? ('soft' as const) : undefined,\n    };\n  }\n")))}p.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);