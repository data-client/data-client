"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Capturing Mutation Side-Effects",id:"rpc",original_id:"rpc"},i=void 0,s={unversionedId:"guides/rpc",id:"version-4.1/guides/rpc",title:"Capturing Mutation Side-Effects",description:"How to deal with side-effects",source:"@site/versioned_docs/version-4.1/guides/rpc.md",sourceDirName:"guides",slug:"/guides/rpc",permalink:"/docs/4.1/guides/rpc",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/rpc.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Capturing Mutation Side-Effects",id:"rpc",original_id:"rpc"},sidebar:"version-4.1/docs",previous:{title:"Nesting related resources (server-side join)",permalink:"/docs/4.1/guides/nested-response"},next:{title:"Custom networking library",permalink:"/docs/4.1/guides/custom-networking"}},c={},p=[{value:"How to deal with side-effects",id:"how-to-deal-with-side-effects",level:2},{value:"Example:",id:"example",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-deal-with-side-effects"},"How to deal with side-effects"),(0,a.kt)("p",null,"If you have an endpoint that updates many resources on your server,\nthere is a straightforward mechanism to get all those updates\nto your client in one request."),(0,a.kt)("p",null,"By defining a custom ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape"},"FetchShape")," method on your resource,\nyou'll be able to use custom response shapes that still\nupdated ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks"),"' normalized cache."),(0,a.kt)("h3",{id:"example"},"Example:"),(0,a.kt)("p",null,"You're running a crypto trading platform called ",(0,a.kt)("inlineCode",{parentName:"p"},"dogebase"),". Every time\na user creates a trade, you need to update some balance information\nin their accounts object. So upon ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),"ing to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/trade/")," endpoint,\nyou nest both the updated accounts object along with the trade you just\ncreated."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /trade/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trade": {\n    "id": 2893232,\n    "user": 1,\n    "amount": "50.2335324",\n    "coin": "doge",\n    "created_at": ""\n  },\n  "account": {\n    "id": 899,\n    "user": 1,\n    "balance": "1337.00",\n    "coin_value": "3.50"\n  }\n}\n')),(0,a.kt)("p",null,"To handle this, we just need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," to include the custom\nshape."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TradeResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nclass TradeResource extends Resource {\n  // ...\n  static createShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.createShape(),\n      schema: {\n        trade: this.asSchema(),\n        account: AccountResource.asSchema(),\n      },\n    };\n  }\n}\n")),(0,a.kt)("p",null,"Now if when we use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/api/resource#createshape"},"createShape()")," FetchShape generator method,\nwe will be happy knowing both the trade and account information will\nbe updated in the cache after the ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request is complete."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CreateTrade.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function CreateTrade() {\n  const create = useFetcher(TradeResource.createShape());\n  //...\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"note"},"Note:"),(0,a.kt)("p",{parentName:"blockquote"},"Feel free to create completely new ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.1/api/FetchShape"},"FetchShape")," methods for any custom\nendpoints you have. This shape tells ",(0,a.kt)("inlineCode",{parentName:"p"},"rest-hooks")," how to process any\nrequest.")))}u.isMDXComponent=!0}}]);