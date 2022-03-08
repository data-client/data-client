"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[38061],{96497:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9877),a=r(58215),o=r(67294),i=r(87799);function s(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(i.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(i.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(15814);const o={React:n,...n,...a}},44602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>w,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(96497),i=r(9877),s=r(58215);const d={id:"redux",title:"Redux integration"},l=void 0,c={unversionedId:"guides/redux",id:"version-5.0/guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-5.0/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/5.0/guides/redux",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"version-5.0/docs",previous:{title:"Aborting Fetch",permalink:"/docs/5.0/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/5.0/guides/class-components"}},p={},u=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},h=m("ExternalCacheProvider"),g=m("CacheProvider"),k={toc:u};function w(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,a.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,a.kt)("p",null,"First make sure you have redux installed:"),(0,a.kt)(o.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,a.kt)("p",null,"Note: react-redux is ",(0,a.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,a.kt)("p",null,"Then you'll want to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/ExternalCacheProvider"},"\\",(0,a.kt)(h,{mdxType:"ExternalCacheProvider"}))," instead of\n",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/api/CacheProvider"},"\\",(0,a.kt)(g,{mdxType:"CacheProvider"}))," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,a.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,a.kt)(i.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,a.kt)("h4",{id:"indextsx"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,a.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,a.kt)(s.Z,{value:"react-redux",mdxType:"TabItem"},(0,a.kt)("h4",{id:"indextsx-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,a.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,a.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,a.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,a.kt)("p",null,"Simply wrap the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  reducer,\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}w.isMDXComponent=!0}}]);