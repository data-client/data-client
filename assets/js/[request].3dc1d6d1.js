(self.webpackChunk=self.webpackChunk||[]).push([[26750],{15929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(67294),a=n(49544),i=n(45440);function s(){return r.createElement(r.Fragment,null,r.createElement(a.i5,null),r.createElement(a.IF,{className:i.Z.playgroundError}))}},41380:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(87462),a=n(49544),i=n(67294),s=n(4391),o=n(12171),d=n(56265),c=n(78357),l=n(56855),u=n(62451),p=n(70794),m=n(86429),h=n(67288);class f extends d.Z{constructor(){super(...arguments),this.id=0}pk(){return`${this.id}`}}class E extends f{constructor(){super(...arguments),this.userId=0,this.title="",this.completed=!1,this.updatedAt=0}static useIncoming(e,t,n,r){return void 0===n.updatedAt||n.updatedAt<=r.updatedAt}}class g extends m.Z{getRequestInit(e){return e&&(e={...e,updatedAt:Date.now()}),super.getRequestInit.call(this,e)}}const v=function(e){let{path:t,schema:n,Endpoint:r=m.Z}=e;const a=(0,h.Z)({path:t,schema:n,Endpoint:r}),i=a.partialUpdate.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.partialUpdate.call(this,...t),id:t[0].id}}});return{...a,partialUpdate:i,create:a.create.extend({fetch:async function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...await a.create.call(this,...t),id:t[t.length-1].id}}})}}({path:"https\\://jsonplaceholder.typicode.com/todos/:id",schema:E,Endpoint:g}),w={...v,partialUpdate:v.partialUpdate.extend({getOptimisticResponse:(e,t,n)=>({id:t.id,...e.getResponse(v.get,{id:t.id}).data,...n,updatedAt:e.fetchedAt})}),create:v.create.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt}),update:e=>({[v.getList.key()]:function(t){return void 0===t&&(t=[]),[...t,e]}})}),delete:v.delete.extend({getOptimisticResponse:(e,t)=>({...t,updatedAt:e.fetchedAt})})};var x=n(64146),y=n(82026),A=n(45440);var k=n(80086),Z=n(55423);n(3495);var I=function(e){return(0,Z.transpileModule)(e.replaceAll(/^(import.+$|export )/gm,""),{compilerOptions:{module:Z.ModuleKind.ESNext,target:Z.ScriptTarget.ES2017,jsx:Z.JsxEmit.React,skipLibCheck:!0}}).outputText};class T extends d.Z{constructor(){super(...arguments),this.id=""}pk(){return this.id}}T.schema={updatedAt:Date};const R=new s.Z((e=>{let{id:t}=e;return new Promise((e=>{setTimeout((()=>e({id:t,updatedAt:(new Date).toISOString()})),150)}))}),{schema:T});const S={...w,getList:w.getList.extend({process:e=>e.slice(0,7)})},b={...o,...c,...u,...l,randomFloatInRange:function(e,t,n){const r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},mockFetch:function(e,t,n){void 0===n&&(n=150);const r=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return new Promise((t=>setTimeout((()=>t(e(...r))),n)))};return t&&Object.defineProperty(r,"name",{value:t,writable:!1}),r},BigNumber:p.Z,CurrentTime:function(){const[e,t]=(0,i.useState)((()=>new Date));return(0,i.useEffect)((()=>{const e=setInterval((()=>t(new Date)));return()=>clearInterval(e)}),[]),i.createElement("time",null,Intl.DateTimeFormat("en-US",{timeStyle:"long"}).format(e))},ResetableErrorBoundary:function(e){let{children:t}=e;const[n,r]=i.useState(0),{resetEntireStore:a}=(0,x.Z)();return i.createElement(y.Z,{key:n,fallbackComponent:e=>{let{error:t}=e;return i.createElement(i.Fragment,null,i.createElement("div",{className:A.Z.playgroundError},t.message," ",i.createElement("i",null,t.status)),i.createElement("button",{onClick:()=>{a(),r((e=>e+1))}},"Clear Error"))}},t)}},C={...b,lastUpdated:R,TimedEntity:T,Todo:E,TodoResource:S,TodoEndpoint:g};function F(e){let{code:t,includeEndpoints:n,...s}=e;return i.createElement(a.nu,{key:"preview",code:t,transformCode:I,noInline:!0,scope:n?C:b},i.createElement(k.Z,(0,r.Z)({key:"preview"},s)))}},13411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=13411,e.exports=t},62715:()=>{},13611:()=>{},43454:()=>{}}]);