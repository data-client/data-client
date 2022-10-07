"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),y=s,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const i={title:"Defining your Resource types",sidebar_label:"Resource types",id:"resource-types",original_id:"resource-types"},a=void 0,o={unversionedId:"guides/resource-types",id:"version-3.0/guides/resource-types",title:"Defining your Resource types",description:"Typing your data can be very useful and is highly recommended when using this library.",source:"@site/versioned_docs/version-3.0/guides/resource-types.md",sourceDirName:"guides",slug:"/guides/resource-types",permalink:"/docs/3.0/guides/resource-types",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/resource-types.md",tags:[],version:"3.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Defining your Resource types",sidebar_label:"Resource types",id:"resource-types",original_id:"resource-types"},sidebar:"version-3.0/docs",previous:{title:"Fetching multiple resources at once",permalink:"/docs/3.0/guides/fetch-multiple"},next:{title:"URL Patterns",permalink:"/docs/3.0/guides/url"}},l={},u=[{value:"Guidelines:",id:"guidelines",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Typing your data can be very useful and is highly recommended when using this library.\nOne of the main benefits is to enforce immutability, as this brings certain assurances\nto the correctness of your application as well as enables certain performance enhancements\nwith React."),(0,s.kt)("p",null,"Here we have an example ",(0,s.kt)("a",{parentName:"p",href:"/docs/3.0/api/resource"},"Resource")," for a User typed in typescript."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Address {\n  readonly street: string;\n  readonly suite: string;\n  readonly city: string;\n  readonly zipcode: string;\n  readonly geo: {\n    readonly lat: string;\n    readonly lng: string;\n  };\n}\n\nexport type Status = 'pending' | 'rejected' | 'accepted';\n\nexport class UserResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly name: string = '';\n  readonly username: string = '';\n  readonly email: string = '';\n  readonly phone: string = '';\n  readonly website: string = '';\n  readonly address: Address | null = null;\n  readonly status: Status = 'pending';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"export class UserResource extends Resource {\n  id = undefined;\n  name = '';\n  username = '';\n  email = '';\n  phone = '';\n  website = '';\n  address = null;\n  status = 'pending';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = 'https://example.com/users/';\n}\n")),(0,s.kt)("h3",{id:"guidelines"},"Guidelines:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Define all properties you expect to see"),(0,s.kt)("li",{parentName:"ul"},"Mark them as readonly to enforce immutability"),(0,s.kt)("li",{parentName:"ul"},"Give each property as specific and descriptive a type as possible"),(0,s.kt)("li",{parentName:"ul"},"Initialize the property with a sensible default",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"This will simplify handling so we don't have to deal with ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined"),"s")))))}p.isMDXComponent=!0}}]);