"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Manager"},o=void 0,s={unversionedId:"api/Manager",id:"version-6.2/api/Manager",title:"Manager",description:"Managers are singletons that orchestrate the complex asynchronous behavior of rest-hooks.",source:"@site/versioned_docs/version-6.2/api/Manager.md",sourceDirName:"api",slug:"/api/Manager",permalink:"/docs/6.2/api/Manager",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/Manager.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{title:"Manager"},sidebar:"docs",previous:{title:"<NetworkErrorBoundary />",permalink:"/docs/6.2/api/NetworkErrorBoundary"},next:{title:"NetworkManager",permalink:"/docs/6.2/api/NetworkManager"}},l={},d=[{value:"getMiddleware()",id:"getmiddleware",level:2},{value:"cleanup()",id:"cleanup",level:2},{value:"init()",id:"init",level:2},{value:"Provided managers:",id:"provided-managers",level:2},{value:"Control flow",id:"control-flow",level:2},{value:"Middleware logging",id:"middleware-logging",level:3},{value:"Middleware data stream",id:"middleware-data-stream",level:3}],c=(p="CacheProvider",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const u={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Managers are singletons that orchestrate the complex asynchronous behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks"),".\nSeveral managers are provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-hooks")," and used by default; however there is nothing\nstopping other compatible managers to be built that expand the functionality. We encourage\nPRs or complimentary libraries!"),(0,r.kt)("p",null,"While managers often have complex internal state and methods - the exposed interface is quite simple.\nBecause of this, it is encouraged to keep any supporting state or methods marked at protected by\ntypescript. Managers have three exposed pieces - the constructor to build initial state and\ntake any parameters; a simple cleanup() method to tear down any dangling pieces like setIntervals()\nor unresolved Promises; and finally getMiddleware() - providing the mechanism to hook into\nthe flux data flow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Dispatch<R extends React.Reducer<any, any>> = (action: React.ReducerAction<R>) => Promise<void>;\n\ntype Middleware = <R extends React.Reducer<any, A>, A extends Actions>({\n  dispatch,\n  getState,\n  controller,\n}: MiddlewareAPI<R>) => (\n  next: Dispatch<R>,\n) => Dispatch<R>;\n\ninterface Manager {\n  getMiddleware<T extends Manager>(this: T): Middleware;\n  cleanup(): void;\n  init?: (state: State<any>) => void;\n}\n")),(0,r.kt)("h2",{id:"getmiddleware"},"getMiddleware()"),(0,r.kt)("p",null,"getMiddleware() returns a function that very similar to a ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux middleware"),".\nThe only differences is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"next()")," function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),". This promise resolves when the reducer update is\n",(0,r.kt)("a",{parentName:"p",href:"https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/#general-algorithm"},"committed"),"\nwhen using ",(0,r.kt)(c,{mdxType:"CacheProvider"}),". This is necessary since the commit phase is asynchronously scheduled. This enables building\nmanagers that perform work after the DOM is updated and also with the newly computed state."),(0,r.kt)("p",null,"Since redux is fully synchronous, an adapter must be placed in front of Rest Hooks style middleware to\nensure they can consume a promise. Conversely, redux middleware must be changed to pass through promises."),(0,r.kt)("p",null,"Middlewares will intercept actions that are dispatched and then potentially dispatch their own actions as well.\nTo read more about middlewares, see the ",(0,r.kt)("a",{parentName:"p",href:"https://redux.js.org/advanced/middleware"},"redux documentation"),"."),(0,r.kt)("h2",{id:"cleanup"},"cleanup()"),(0,r.kt)("p",null,"Provides any cleanup of dangling resources after manager is no longer in use."),(0,r.kt)("h2",{id:"init"},"init()"),(0,r.kt)("p",null,"Called with initial state after provider is mounted. Can be useful to run setup at start that\nrelies on state actually existing."),(0,r.kt)("h2",{id:"provided-managers"},"Provided managers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/NetworkManager"},"NetworkManager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/6.2/api/SubscriptionManager"},"SubscriptionManager"))),(0,r.kt)("h2",{id:"control-flow"},"Control flow"),(0,r.kt)("p",null,"Managers live in the CacheProvider centralized store. They orchestrate complex control flows by interfacing\nvia intercepting and dispatching actions, as well as reading the internal state."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manager flux flow",src:n(3214).Z,width:"1600",height:"686"})),(0,r.kt)("h3",{id:"middleware-logging"},"Middleware logging"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.middleware = ({ getState }) => (next) => async (action) => {\n  console.log('before', action, getState());\n  await next(action);\n  console.log('after', action, getState())\n}\n")),(0,r.kt)("h3",{id:"middleware-data-stream"},"Middleware data stream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { Manager, Middleware } from '@rest-hooks/core';\nimport type { EndpointInterface } from '@rest-hooks/endpoint';\n\nexport default class StreamManager implements Manager\n{\n  protected declare middleware: Middleware;\n  protected declare websocket: Websocket;\n  protected declare endpoints: Record<string, EndpointInterface>;\n\n  constructor(url: string, endpoints: Record<string, EndpointInterface>) {\n    this.websocket = new Websocket(url);\n    this.endpoints = endpoints;\n\n    // highlight-start\n    this.middleware = ({ controller, getState }) => {\n      this.websocket.onmessage = (event) => {\n        controller.receive(this.endpoints[event.type], ...event.args, event.data);\n      }\n      return (next) => async (action) => next(action);\n    }\n    // highlight-end\n  }\n\n  cleanup() {\n    this.websocket.close();\n  }\n\n  getMiddleware<T extends StreamManager>(this: T) {\n    return this.middleware;\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/6.2/api/Controller#receive"},"Controller.receive()")," updates the Rest Hooks store\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"event.data"),"."))}m.isMDXComponent=!0},3214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/managers-12ec42d958a182bcb3eb9a337a73cb90.png"}}]);