(self.webpackChunk=self.webpackChunk||[]).push([[68884],{84195:(e,t,n)=>{"use strict";const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},54514:(e,t,n)=>{"use strict";n.d(t,{Z:()=>$e});var r=n(67294),i=n(4391),s=n(12171),a=n(56265),l=n(78357),o=n(56855),c=n(62451),d=n(70794),u=n(86429),p=n(67288);class m extends a.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class h extends m{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class f extends u.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const g=function(e){let{path:t,schema:n,Endpoint:r=u.Z}=e;const i=(0,p.Z)({path:t,schema:n,Endpoint:r}),s=i.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.partialUpdate.call(this,...t),id:t[0].id}}});return{...i,partialUpdate:s,create:i.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await i.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:h,Endpoint:f}),y={...g,partialUpdate:g.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(g.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:g.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[g.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:g.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var v=n(87462),k=n(49544),E=n(86010),b=n(95999),x=n(52263),A=n(72389),w=n(66412),O=n(55423),S=n(84195),N="playgroundContainer_sLUA",C="row_YGZs",Z="hidden_Hh8i",P="playgroundHeader_Zx4K",_="small_xksL",j="clickable_YHiX",T="noupper_WDCF",R="subtabs_XtJb",D="playgroundEditor_lYwu",I="arrow_tivA",F="vertical_OMeC",U="right_vs_C",L="left_iDcB",M="down_oRky",$="playgroundPreview_rk9R",z="playgroundError_sRnA",V="playgroundResult_tefG",H="debugToggle_zlro",J="tabControls_trxh",q="title_poUY",B="tabs_m54V",G="tab_bTGw",X="selected_QXZk";function Y(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(Q,{fixture:e})))))}var K=(0,r.memo)(Y);function Q(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}function W(e){let{children:t,className:n,onClick:i}=e;return r.createElement("div",{className:(0,E.Z)(P,n,i?j:null),onClick:i},t)}var ee=n(27093),te=n(26127),ne=n(82038),re=n(83611),ie=n(39714),se=n(7094),ae=n(12466),le=n(91262),oe=n(32041),ce=n(97723),de=n(92949);function ue(e){let{value:t}=e;const n="dark"===(0,de.I)().colorMode,i=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),s=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:i[t]}}},base0B:"rgb(191, 199, 213)"})),[n,i]);return r.createElement(ce.L,{shouldExpandNode:pe,data:t,valueRenderer:he,theme:s,hideRoot:!0})}function pe(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const me="undefined"!=typeof Intl;function he(e,t){const n=arguments.length<=2?void 0:arguments[2];return me&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function fe(e){let{toggle:t,selectedValue:n}=e;const i="y"===n,s=i?U:L;return r.createElement(r.Fragment,null,r.createElement("div",{className:H,onClick:t},"Store",r.createElement("span",{className:(0,E.Z)(I,s,F)},"\u25b6")),i?r.createElement(ve,null):null)}var ge=(0,r.memo)(fe);function ye(){const e=(0,r.useContext)(oe.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(ue,{value:t})}const ve=(0,r.memo)(ye);function ke(e){let{groupId:t,defaultOpen:n,row:i,fixtures:s}=e;const{tabGroupChoices:a,setTabGroupChoices:l}=(0,se.U)(),[o,c]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:d}=(0,ae.o5)();if(null!=t){const e=a[t];null!=e&&e!==o&&c(e)}const u=(0,r.useCallback)((e=>{d(e.currentTarget),c((e=>"y"===e?"n":"y")),l(t,"y"===o?"n":"y")}),[d,t,o,l]),p=(0,r.useMemo)((()=>[new re.Z,new ee.Z(te.Z)]),[]),m=!("n"===o||!i);return r.createElement(ne.nq,{managers:p},r.createElement(ie.Z,{fixtures:s,silenceMissing:!0},r.createElement("div",{className:(0,E.Z)($,{[Z]:m})},r.createElement(le.Z,{fallback:r.createElement(be,null)},(()=>r.createElement(r.Suspense,{fallback:r.createElement(be,null)},r.createElement(k.i5,null),r.createElement(k.IF,{className:z}))))),r.createElement(ge,{selectedValue:o,toggle:u})))}var Ee=(0,r.memo)(ke);function be(){return r.createElement("div",null,"Loading...")}function xe(e){let{groupId:t,defaultOpen:n,row:i,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(W,null,r.createElement(b.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:V},r.createElement(Ee,{groupId:t,defaultOpen:n,row:i,fixtures:s})))}var Ae=(0,r.memo)(xe);function we(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(S.Z);return r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:i,label:s}=n;return r.createElement("div",{role:"tab",tabIndex:e===i?0:-1,"aria-selected":e===i,key:i,className:(0,E.Z)(G,{[X]:e===i}),onFocus:t,onClick:t,value:i},s)})))}function Oe(e){let{children:t}=e;return r.createElement(W,{className:J},r.createElement("div",{className:q},t),r.createElement(we,null))}function Se(e){let{title:t,fixtures:n}=e;const{values:i}=(0,r.useContext)(S.Z),s=i.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(W,{className:_},"Fixtures"),r.createElement(K,{fixtures:n})):null,s?r.createElement(Oe,null,t):null)}function Ne(e){let{children:t,transformCode:n,groupId:i,defaultOpen:s,row:a,hidden:l,fixtures:o,...c}=e;const{liveCodeBlock:{playgroundPosition:d}}=(0,x.Z)().siteConfig.themeConfig,u=(0,w.p)(),p=(0,A.Z)(),m=(0,r.useMemo)((()=>n||(e=>function(e){return(0,O.transpileModule)(e.replaceAll(/^import.+$/gm,""),{compilerOptions:{module:O.ModuleKind.ESNext,target:O.ScriptTarget.ES2017,jsx:O.JsxEmit.React}}).outputText}(`${e};`))),[n]),h=(0,r.useMemo)((()=>"string"==typeof t?[{code:t.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(t)?t:[t]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[t]),[f,g]=(0,r.useReducer)(Ze,void 0,(()=>h.map((e=>{let{code:t}=e;return t})))),y=(0,r.useMemo)((()=>h.map(((e,t)=>e=>g({i:t,code:e})))),[h.length]),[b,S]=(0,r.useState)((()=>h.map((e=>{let{collapsed:t}=e;return t}))));return r.createElement("div",{className:(0,E.Z)(N,{[C]:a,[Z]:l})},r.createElement(k.nu,(0,v.Z)({theme:u},c),r.createElement(Ce,{reverse:"top"===d},r.createElement("div",null,r.createElement(Se,{fixtures:!a&&o}),a&&h.length>1?r.createElement(je,{titles:h.map((e=>{let{title:t}=e;return t})),closedList:b,onClick:e=>S((t=>t.map(((t,n)=>n!==e))))}):null,h.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(_e,{onClick:()=>S((e=>{const n=[...e];return n[t]=!n[t],n})),closed:b[t],title:n}):null,b[t]?null:r.createElement(Pe,{key:`${p}-${t}`,className:D,onChange:y[t],code:f[t]}))}))),r.createElement(k.nu,(0,v.Z)({code:f.join("\n"),transformCode:m},c),r.createElement(Ae,{groupId:i,defaultOpen:s,row:a,fixtures:o})))))}function Ce(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function Ze(e,t){const n=[...e];return n[t.i]=t.code,n}Se.defaultProps={title:r.createElement(b.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor"),fixtures:[]},Ne.defaultProps={row:!1,hidden:!1},Ce.defaultProps={reverse:!1};const Pe=(0,r.memo)(k.uz);function _e(e){let{onClick:t,closed:n,title:i}=e;return r.createElement(W,{className:_,onClick:t},r.createElement("span",{className:(0,E.Z)(I,n?U:M)},"\u25b6"),i)}function je(e){let{titles:t,closedList:n,onClick:i}=e;const{values:s}=(0,r.useContext)(S.Z),a=s.length>0;return r.createElement(W,{className:(0,E.Z)({[_]:a,[R]:a},T,J)},r.createElement("div",{className:B,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>i(t),className:(0,E.Z)(G,{[X]:!n[t]})},e)))))}var Te=n(64146),Re=n(82026);class De extends a.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}De.schema={updatedAt:Date};const Ie=new i.Z((e=>{let{id:t}=e;return fetch(`/api/currentTime/${t}`).then((e=>e.json()))}),{schema:De});const Fe={...y,getList:y.getList.extend({process:e=>e.slice(0,7)})},Ue={...s,...l,...c,...o,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:d.Z,lastUpdated:Ie,TimedEntity:De,CurrentTime:function(){const[e,t]=(0,r.useState)((()=>new Date));return(0,r.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),r.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,i]=r.useState(0),{resetEntireStore:s}=(0,Te.Z)();return r.createElement(Re.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:z},t.message," ",r.createElement("i",null,t.status)),r.createElement("button",{onClick:()=>{s(),i((e=>e+1))}},"Clear Error"))}},t)}},Le={...Ue,Todo:h,TodoResource:Fe,TodoEndpoint:f},Me=e=>{let{children:t,groupId:n,hidden:i=!1,defaultOpen:s,row:a=!1,fixtures:l}=e;return r.createElement(Ne,{scope:Array.isArray(t)?Ue:Le,noInline:!0,groupId:n,defaultOpen:s,row:a,hidden:i,fixtures:l},"string"==typeof t||Array.isArray(t)?t:t.props.children)};Me.defaultProps={defaultOpen:"n",fixtures:[]};var $e=(0,r.memo)(Me)},14333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>Z,contentTitle:()=>N,default:()=>j,frontMatter:()=>S,metadata:()=>C,toc:()=>P});var r=n(87462),i=(n(27378),n(3905)),s=n(54514),a=n(70760),l=n(11857);function o(e,t){e.type=e.sideEffect?"mutate":"read",e.options={...t},delete e.options.key,delete e.options.schema,delete e.options.sideEffect,delete e.options.fetch,delete e.options.getFetchKey,delete e.options.options,0===Object.keys(e.options).length&&delete e.options,void 0===e.schema&&(e.schema=null)}let c=!1;try{Function()}catch(T){c=!0}class d extends Function{constructor(e,t){let n;return c?(n=function(){return n.fetch(...arguments)},Object.setPrototypeOf(n,new.target.prototype)):(super("return arguments.callee.fetch.apply(arguments.callee, arguments)"),n=this),n.getFetchKey=e=>n.key(e),e&&(n.fetch=e),t&&"name"in t?(n.__name=t.name,delete t.name):e&&(n.__name=e.name),Object.assign(n,t),Object.defineProperty(n,"name",{get:function(){return this.__name}}),o(n,t),n}key(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return`${this.name} ${JSON.stringify(t)}`}bind(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=this.fetch,s=this.key;return this.extend({fetch(){return i.apply(null!=e?e:this,n)},key(){return s.apply(this,n)}})}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);const n=new t(e.fetch,e);return o(n,{...this.options,...e}),n}}var u=n(92586);const p={};const m={};const h=Object.prototype,f=Object.getPrototypeOf;class g extends Error{constructor(e){super(e.statusText||`Network response not 'ok': ${e.status}`),this.name="NetworkError",this.status=e.status,this.response=e}}function y(e){return!("function"!=typeof e.hasOwnProperty||!(Object.hasOwnProperty.call(e,"__ownerID")||e._map&&Object.hasOwnProperty.call(e._map,"__ownerID")))}const v=e=>{let[t,,n]=e;return void 0!==t&&!n};const k=(e,t,n)=>{if(y(t))return function(e,t,n){let r=!0,i=!1;return[Object.keys(e).reduce(((t,s)=>{const a=`${s}`,[l,o,c]=n(t.get(a),e[a]);return o||(r=!1),c&&(i=!0),t.has(a)?t.set(a,l):t}),t),r,i]}(e,t,n);const r={...t};let i=!0,s=!1;return Object.keys(e).forEach((t=>{const[a,l,o]=n(r[t],e[t]);void 0!==r[t]&&(r[t]=a),o&&(s=!0),l||(i=!1)})),[r,i,s]};function E(e){if("object"!=typeof e)return!1;if(void 0===e||e instanceof class extends class{constructor(e,t){this.schema=void 0,t&&(this._schemaAttribute="string"==typeof t?e=>e[t]:t),this.define(e)}get isSingleSchema(){return!this._schemaAttribute}define(e){this.schema=e}getSchemaAttribute(e,t,n){return!this.isSingleSchema&&this._schemaAttribute(e,t,n)}inferSchema(e,t,n){if(this.isSingleSchema)return this.schema;const r=this.getSchemaAttribute(e,t,n);return this.schema[r]}normalizeValue(e,t,n,r,i,s){const a=this.inferSchema(e,t,n);if(!a)return e;const l=r(e,t,n,a,i,s);return this.isSingleSchema||null==l?l:{id:l,schema:this.getSchemaAttribute(e,t,n)}}denormalizeValue(e,t){const n=!this.isSingleSchema&&(y(e)?e.get("schema"):e.schema);return this.isSingleSchema||n?t((this.isSingleSchema?void 0:y(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[n]):[e,!0,!1]}}{normalize(e,t,n,r,i,s){const a=(e=>Array.isArray(e)?e:Object.keys(e).map((t=>e[t])))(e);return a.map(((e,a)=>this.normalizeValue(e,t,n,r,i,s))).filter((e=>null!=e))}denormalize(e,t){return[e.map?e.map((e=>this.denormalizeValue(e,t))).filter(v).map((e=>{let[t]=e;return t})):e,!0,!1]}infer(e,t,n){}toJSON(){return[this.schema]}}||Array.isArray(e))return[];const t=e instanceof class{constructor(e){this.schema=void 0,this.define(e)}define(e){this.schema=Object.keys(e).reduce(((t,n)=>({...t,[n]:e[n]})),this.schema||{})}normalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return((e,t,n,r,i,s,a)=>{const l={...t};return Object.keys(e).forEach((n=>{const r=e[n],o=i(t[n],t,n,r,s,a);null==o?delete l[n]:l[n]=o})),l})(this.schema,...t)}denormalize(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return k(this.schema,...t)}infer(e,t,n){return function(e,t,n,r){const i={};for(const s of Object.keys(e))i[s]=r(e[s],t,n);return i}(this.schema,e,t,n)}}?e.schema:e;for(const n in t){if(!t[n])continue;const e=E(t[n]);if(!1!==e)return e.unshift(n),e}return!1}function b(e,t){const n=E(e.schema);if(!1===n)throw new Error("schema has no array");return function(r){for(var i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];return{[e.key(...t(...s))]:e=>{const t=x(e,n),i=new Set(t),s=x(r,n).filter((e=>!i.has(e))),a=[...t,...s];return A(e,n,a)}}}}const x=(e,t)=>{let n=e;for(const r of t){if(!n)return[];n=n[r]}return n||[]},A=(e,t,n)=>{if(0===t.length)return n;const r={...e};let i=r;for(let s=0;s<t.length-1;s++){const e=t[s];i=i[e]={...i[e]}}return i[t[t.length-1]]=n,r};var w=(0,l.Z)("hasBody");class O extends d{constructor(e){var t;super(null!=(t=e.fetch)?t:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=(0,a.Z)(this,w)[w]&&t.length<2?{}:t[0]||{},i=(0,a.Z)(this,w)[w]?t[t.length-1]:void 0;return this.fetchResponse(this.url(r),this.getRequestInit(i)).then(this.parseResponse).then((e=>this.process(e,...t)))},e),Object.defineProperty(this,w,{writable:!0,value:void 0}),"sideEffect"in this||(this.sideEffect="GET"!==e.method&&void 0!==e.method||void 0),void 0===this.method&&(this.method=this.sideEffect?"POST":"GET"),void 0===this.urlPrefix&&(this.urlPrefix=""),(0,a.Z)(this,w)[w]=!("body"in this&&void 0===this.body||["GET","DELETE"].includes(this.method))}key(){return`${this.method} ${this.url((0,a.Z)(this,w)[w]&&arguments.length<2?{}:(arguments.length<=0?void 0:arguments[0])||{})}`}url(e){void 0===e&&(e={});const t=(n=this.path,Object.hasOwn(p,n)||(p[n]=(0,u.MY)(n,{encode:encodeURIComponent,validate:!1})),p[n])(e);var n;const r=function(e){return Object.hasOwn(m,e)||(m[e]=new Set((0,u.Qc)(e).map((e=>"string"==typeof e?e:`${e.name}`)))),m[e]}(this.path),i={};return Object.keys(e).forEach((t=>{r.has(t)||(i[t]=e[t])})),Object.keys(i).length?`${this.urlPrefix}${t}?${function(e){const t=new URLSearchParams(e);return t.sort(),t.toString()}(i)}`:`${this.urlPrefix}${t}`}getHeaders(e){return e}getRequestInit(e){const t=null!==(n=e)&&"object"==typeof n&&f(n)===h;var n;t&&(e=JSON.stringify(e));const r={...this.requestInit,method:this.method,signal:this.signal,body:e};return e&&!t||(r.headers={"Content-Type":"application/json",...r.headers}),r.headers=this.getHeaders(r.headers),r}fetchResponse(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new g(e);return e})).catch((e=>{throw e instanceof TypeError&&(e.status=400),e}))}parseResponse(e){var t;return null!=(t=e.headers.get("content-type"))&&t.includes("json")&&204!==e.status?e.json().catch((e=>{throw e.status=400,e})):e.text()}process(e){return e}errorPolicy(e){return e.status>=500?"soft":void 0}extend(e){class t extends this.constructor{}Object.assign(t.prototype,this);return new t(this.name?{name:this.name,fetch:this.fetch,...e}:{fetch:this.fetch,...e})}paginated(e){return this.extend({update:b(this,e)})}}const S={title:"Entity Validation",sidebar_label:"Validation"},N=void 0,C={unversionedId:"getting-started/validation",id:"getting-started/validation",title:"Entity Validation",description:"Entity.validate() is called during normalization and denormalization.",source:"@site/../docs/core/getting-started/validation.md",sourceDirName:"getting-started",slug:"/getting-started/validation",permalink:"/docs/getting-started/validation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/validation.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1665168155,formattedLastUpdatedAt:"Oct 7, 2022",frontMatter:{title:"Entity Validation",sidebar_label:"Validation"},sidebar:"docs",previous:{title:"Expiry Policy",permalink:"/docs/getting-started/expiry-policy"},next:{title:"Debugging",permalink:"/docs/guides/debugging"}},Z={},P=[{value:"Field check",id:"field-check",level:2},{value:"All fields check",id:"all-fields-check",level:3},{value:"Partial results",id:"partial-results",level:2}],_={toc:P};function j(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#validate"},"Entity.validate()")," is called during normalization and denormalization.\n",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," indicates no error, and a string error message if there is an error."),(0,i.kt)("h2",{id:"field-check"},"Field check"),(0,i.kt)("p",null,"Validation happens after ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#process"},"Entity.process()")," but before ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/Entity#fromJS"},"Entity.fromJS()"),",\nthus operates on POJOs rather than an instance of the class."),(0,i.kt)("p",null,"Here we can make sure the title field is included, and of the expected type."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'title')) return 'missing title field';\n    if (typeof processedEntity.title !== 'string') return 'title is wrong type';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},'function ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id="2" />);\n'))),(0,i.kt)("h3",{id:"all-fields-check"},"All fields check"),(0,i.kt)("p",null,"Here's a recipe for checking that every defined field is present."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:3}],response:{id:"3",title:{complex:"second",object:5}},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class Article extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n\n  static validate(processedEntity) {\n    if (\n      !Object.keys(this.defaults).every(key =>\n        Object.hasOwn(processedEntity, key),\n      )\n    )\n      return 'a field is missing';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: Article,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticlePage.tsx" collapsed',title:'"ArticlePage.tsx"',collapsed:!0},'function ArticlePage({ id }: { id: string }) {\n  const article = useSuspense(getArticle, { id });\n  return <div>{article.title}</div>;\n}\n\nrender(<ArticlePage id="2" />);\n'))),(0,i.kt)("h2",{id:"partial-results"},"Partial results"),(0,i.kt)("p",null,"Another great use of validation is mixing endpoints that return incomplete objects. This is often\nuseful when some fields consume lots of bandwidth or are computationally expensive for the backend."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("a",{parentName:"p",href:"/rest/api/validateRequired"},"validateRequired")," to reduce code."),(0,i.kt)(s.Z,{fixtures:[{endpoint:new O({path:"/article"}),args:[],response:[{id:"1",title:"first"},{id:"2",title:"second"}],delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:1}],response:{id:"1",title:"first",content:"long",createdAt:"2011-10-05T14:48:00.000Z"},delay:150},{endpoint:new O({path:"/article/:id"}),args:[{id:2}],response:{id:"2",title:"second",content:"short",createdAt:"2011-10-05T14:48:00.000Z"},delay:150}],mdxType:"HooksPlayground"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/Article.ts"',title:'"api/Article.ts"'},"class ArticlePreview extends Entity {\n  readonly id: string = '';\n  readonly title: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static get key() {\n    return 'Article';\n  }\n}\nconst getArticleList = new RestEndpoint({\n  path: '/article',\n  schema: [ArticlePreview],\n});\n\nclass ArticleFull extends ArticlePreview {\n  readonly content: string = '';\n  readonly createdAt: Date = new Date(0);\n\n  static schema = {\n    createdAt: Date,\n  };\n\n  static validate(processedEntity) {\n    if (!Object.hasOwn(processedEntity, 'content')) return 'Missing content';\n  }\n}\n\nconst getArticle = new RestEndpoint({\n  path: '/article/:id',\n  schema: ArticleFull,\n});\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ArticleDetail.tsx" collapsed',title:'"ArticleDetail.tsx"',collapsed:!0},"function ArticleDetail({ id, onHome }: { id: string; onHome: () => void }) {\n  const article = useSuspense(getArticle, { id });\n  return (\n    <div>\n      <h4>\n        <a onClick={onHome} style={{ cursor: 'pointer' }}>\n          &lt;\n        </a>{' '}\n        {article.title}\n      </h4>\n      <div>\n        <p>{article.content}</p>\n        <div>\n          Created:{' '}\n          <time>\n            {Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(\n              article.createdAt,\n            )}\n          </time>\n        </div>\n      </div>\n    </div>\n  );\n}\nfunction ArticleList() {\n  const [route, setRoute] = React.useState<string>();\n  const articles = useSuspense(getArticleList);\n  if (!route) {\n    return (\n      <div>\n        {articles.map(article => (\n          <div\n            key={article.pk()}\n            onClick={() => setRoute(article.id)}\n            style={{ cursor: 'pointer', textDecoration: 'underline' }}\n          >\n            Click me: {article.title}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <ArticleDetail id={route} onHome={() => setRoute()} />;\n}\n\nrender(<ArticleList />);\n"))))}j.isMDXComponent=!0},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);