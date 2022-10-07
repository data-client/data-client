"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17678],{85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),s=r(72389),i=r(67392),l=r(7094),d=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,r;const{lazy:s,block:p,defaultValue:m,values:h,groupId:g,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=h?h:k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,i.l)(w,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:null!=(t=null!=m?m:null==(r=k.find((e=>e.props.default)))?void 0:r.props.value)?t:k[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:y}=(0,l.U)(),[M,N]=(0,n.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=g){const e=x[g];null!=e&&e!==M&&w.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,r=P.indexOf(t),a=w[r].value;a!==M&&(C(t),N(a),null!=g&&y(g,String(a)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=P.indexOf(e.currentTarget)+1;r=null!=(a=P[t])?a:P[0];break}case"ArrowLeft":{var n;const t=P.indexOf(e.currentTarget)-1;r=null!=(n=P[t])?n:P[P.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},w.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:e=>P.push(e),onKeyDown:T,onFocus:E,onClick:E},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":M===t})}),null!=r?r:t)}))),s?(0,n.cloneElement)(k.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==M})))))}function m(e){const t=(0,s.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},96497:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(65488),n=r(85162),o=r(67294),s=r(75690);function i(e){let{pkgs:t,dev:r=!1}=e;return o.createElement(a.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(n.Z,{value:"yarn"},o.createElement(s.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),o.createElement(n.Z,{value:"npm"},o.createElement(s.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},56922:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(72887);const o={React:a,...a,...n}},19172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(96497),s=r(65488),i=r(85162);const l={id:"redux",title:"Redux integration"},d=void 0,u={unversionedId:"guides/redux",id:"version-6.0/guides/redux",title:"Redux integration",description:"Using redux is completely optional. However, for many it means easy integration or migration",source:"@site/versioned_docs/version-6.0/guides/redux.md",sourceDirName:"guides",slug:"/guides/redux",permalink:"/docs/6.0/guides/redux",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/redux.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631647374,formattedLastUpdatedAt:"Sep 14, 2021",frontMatter:{id:"redux",title:"Redux integration"},sidebar:"version-6.0/docs",previous:{title:"Aborting Fetch",permalink:"/docs/6.0/guides/abort"},next:{title:"Usage with class components",permalink:"/docs/6.0/guides/class-components"}},c={},p=[{value:"<code>index.tsx</code>",id:"indextsx",level:4},{value:"<code>index.tsx</code>",id:"indextsx-1",level:4},{value:"Redux devtools",id:"redux-devtools",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=m("ExternalCacheProvider"),g=m("CacheProvider"),v={toc:p};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using ",(0,n.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"redux")," is completely optional. However, for many it means easy integration or migration\nwith existing projects, or just a nice centralized state management abstraction."),(0,n.kt)("p",null,"Integration is fairly straightforward as rest-hooks already uses the same paradigms as redux under\nthe hood. However, care should be taken to integrate the reducer and ",(0,n.kt)("a",{parentName:"p",href:"/docs/6.0/api/Manager"},"middlewares")," properly\nor it won't work as expected."),(0,n.kt)("p",null,"First make sure you have redux installed:"),(0,n.kt)(o.Z,{pkgs:"redux",mdxType:"PkgTabs"}),(0,n.kt)("p",null,"Note: react-redux is ",(0,n.kt)("em",{parentName:"p"},"not")," needed for this integration (though you will need it if you want to use redux directly as well)."),(0,n.kt)("p",null,"Then you'll want to use the ",(0,n.kt)("a",{parentName:"p",href:"/docs/6.0/api/ExternalCacheProvider"},"\\",(0,n.kt)(h,{mdxType:"ExternalCacheProvider"}))," instead of\n",(0,n.kt)("a",{parentName:"p",href:"/docs/6.0/api/CacheProvider"},"\\",(0,n.kt)(g,{mdxType:"CacheProvider"}))," and pass in the store and a selector function to grab\nthe rest-hooks specific part of the state."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: You should only use ONE provider; nested another provider will override the previous.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: Rest Hooks manager middlewares return promises, which is different from how redux middlewares work.\nBecause of this, if you want to integrate both, you'll need to place all redux middlewares\nafter the ",(0,n.kt)("inlineCode",{parentName:"p"},"PromiseifyMiddleware")," adapter, and place all Rest Hooks manager middlewares before.")),(0,n.kt)(s.Z,{defaultValue:"rest-hooks",values:[{label:"just Rest Hooks",value:"rest-hooks"},{label:"with React-Redux",value:"react-redux"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"rest-hooks",mdxType:"TabItem"},(0,n.kt)("h4",{id:"indextsx"},(0,n.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport ReactDOM from 'react-dom';\n\nconst networkManager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\n// managers optionally provide initialization subroutine\nfor (const manager of [networkManager, subscriptionManager]) {\n  managers[i].init?.(selector(store.getState()));\n}\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <App />\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,n.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,n.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n"))),(0,n.kt)(i.Z,{value:"react-redux",mdxType:"TabItem"},(0,n.kt)("h4",{id:"indextsx-1"},(0,n.kt)("inlineCode",{parentName:"h4"},"index.tsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  SubscriptionManager,\n  PollingSubscription,\n  ExternalCacheProvider,\n  PromiseifyMiddleware,\n} from 'rest-hooks';\nimport { initialState, reducer, NetworkManager } from '@rest-hooks/core';\nimport { createStore, applyMiddleware } from 'redux';\nimport { Provider } from 'react-redux';\nimport ReactDOM from 'react-dom';\n\nconst manager = new NetworkManager();\nconst subscriptionManager = new SubscriptionManager(PollingSubscription);\n\nconst store = createStore(\n  reducer,\n  initialState,\n  applyMiddleware(\n    networkManager.getMiddleware(),\n    subscriptionManager.getMiddleware(),\n    // place Rest Hooks built middlewares before PromiseifyMiddleware\n    PromiseifyMiddleware,\n    // place redux middlewares after PromiseifyMiddleware\n  ),\n);\nconst selector = state => state;\n\nReactDOM.render(\n  <ExternalCacheProvider store={store} selector={selector}>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </ExternalCacheProvider>,\n  document.body,\n);\n")),(0,n.kt)("p",null,"Above we have the simplest case where the entire redux store is used for rest-hooks.\nHowever, more commonly you will be integrating with other state. In this case, you\nwill need to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"selector")," prop of ",(0,n.kt)("inlineCode",{parentName:"p"},"<ExternalCacheProvider />")," to specify\nwhere in the state tree the rest-hooks information is."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nconst selector = state => state.restHooks;\n\nconst store = createStore(\n  // Now we have other reducers\n  combineReducers({\n    restHooks: restReducer,\n    myOtherState: otherReducer,\n  }),\n  applyMiddleware(\n    ...mapMiddleware(selector)(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n    ),\n    PromiseifyMiddleware,\n  ),\n);\n// ...\n")))),(0,n.kt)("p",null,"Here we store rest-hooks state information in the 'restHooks' part of the tree."),(0,n.kt)("h2",{id:"redux-devtools"},"Redux devtools"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"Redux DevTools")," allows easy inspection of current\nstate and transitions in the Rest Hooks store."),(0,n.kt)("p",null,"Simply wrap the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"applyMiddleware()")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"composeWithDevTools()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { composeWithDevTools } from 'redux-devtools-extension';\n\nconst store = createStore(\n  reducer,\n  initialState,\n  // The next three lines are added\n  composeWithDevTools({\n    trace: true,\n  })(\n    applyMiddleware(\n      manager.getMiddleware(),\n      subscriptionManager.getMiddleware(),\n      // place Rest Hooks built middlewares before PromiseifyMiddleware\n      PromiseifyMiddleware,\n      // place redux middlewares after PromiseifyMiddleware\n    ),\n  ),\n);\n")))}k.isMDXComponent=!0}}]);