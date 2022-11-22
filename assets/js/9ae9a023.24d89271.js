"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89711],{30433:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(5730),s=r(20636),i=r(76602),p=r(63735),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:v,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,s.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[w,N]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=v){const e=k[v];null!=e&&e!==w&&b.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,r=T.indexOf(t),a=b[r].value;a!==w&&(E(t),N(a),null!=v&&x(v,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:P,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},80896:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(76602),n=r(13743),o=r(67294);function l(e){let{pkgs:t,dev:r=!1}=e;const{tabGroupChoices:l}=(0,a.U)();return"yarn"===l["node-packages-program"]?o.createElement(n.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t):o.createElement(n.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)}},52393:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(13743),n=r(30433),o=r(65559),l=r(67294);function s(e){let{pkgs:t,dev:r=!1}=e;return l.createElement(o.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(n.Z,{value:"yarn"},l.createElement(a.Z,{className:"language-bash"},"yarn add ",r?"--dev ":"",t)),l.createElement(n.Z,{value:"npm"},l.createElement(a.Z,{className:"language-bash"},"npm install --save",r?"Dev ":""," ",t)))}},57489:(e,t,r)=>{var a=r(67294),n=r(64820);const o={React:a,...a,...n};t.Z=o},9293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(65559),l=r(30433),s=r(52393),i=r(80896);const p={id:"installation",title:"Installation"},c=void 0,u={unversionedId:"getting-started/installation",id:"version-7.0/getting-started/installation",title:"Installation",description:"TypeScript is optional, but requires at least version 3.7 for full type enforcement.",source:"@site/versioned_docs/version-7.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/7.0/getting-started/installation",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/getting-started/installation.md",tags:[],version:"7.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1669081963,formattedLastUpdatedAt:"Nov 22, 2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/7.0/"},next:{title:"Endpoint",permalink:"/docs/7.0/getting-started/endpoint"}},d={},m=[{value:"Add provider at top-level component",id:"add-provider-at-top-level-component",level:2}],v={toc:m};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,{pkgs:"@rest-hooks/react @rest-hooks/test @rest-hooks/hooks @rest-hooks/rest",mdxType:"PkgTabs"}),(0,n.kt)("p",null,"TypeScript is optional, but requires at least version ",(0,n.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#more-recursive-type-aliases"},"3.7")," for full type enforcement."),(0,n.kt)("h2",{id:"add-provider-at-top-level-component"},"Add provider at top-level component"),(0,n.kt)(o.Z,{defaultValue:"18-web",groupId:"platform",values:[{label:"React Web 16+",value:"web"},{label:"React Web 18+",value:"18-web"},{label:"React Native",value:"native"},{label:"NextJS",value:"nextjs"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n  document.body,\n);\n"))),(0,n.kt)(l.Z,{value:"18-web",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from '@rest-hooks/react';\nimport ReactDOM from 'react-dom';\n\nReactDOM.createRoot(document.body).render(\n  <CacheProvider>\n    <App />\n  </CacheProvider>,\n);\n"))),(0,n.kt)(l.Z,{value:"native",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/index.tsx"',title:'"/index.tsx"'},"import { CacheProvider } from '@rest-hooks/react';\nimport { AppRegistry } from 'react-native';\n\nconst Root = () => (\n  <CacheProvider>\n    <App />\n  </CacheProvider>\n);\nAppRegistry.registerComponent('MyApp', () => Root);\n"))),(0,n.kt)(l.Z,{value:"nextjs",mdxType:"TabItem"},(0,n.kt)(i.Z,{pkgs:"@rest-hooks/ssr @rest-hooks/redux redux",mdxType:"PkgInstall"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_document.tsx"',title:'"pages/_document.tsx"'},"import { RestHooksDocument } from '@rest-hooks/ssr/nextjs';\n\nexport default RestHooksDocument;\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},"import { AppCacheProvider } from '@rest-hooks/ssr/nextjs';\nimport type { AppProps } from 'next/app';\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return (\n    <AppCacheProvider>\n      <Component {...pageProps} />\n    </AppCacheProvider>\n  );\n}\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/guides/ssr#nextjs"},"Full NextJS Guide")))),(0,n.kt)("p",null,"Alternatively ",(0,n.kt)("a",{parentName:"p",href:"/docs/7.0/guides/redux"},"integrate state with redux")),(0,n.kt)("details",null,(0,n.kt)("summary",null,(0,n.kt)("b",null,"Legacy (IE) browser support")),(0,n.kt)("p",null,"If you see ",(0,n.kt)("inlineCode",{parentName:"p"},"Uncaught TypeError: Class constructor Resource cannot be invoked without 'new'"),",\nfollow the instructions to ",(0,n.kt)("a",{parentName:"p",href:"../guides/legacy-browser"},"add legacy browser support to packages"))))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(v,l(l({ref:t},c),{},{components:r})):a.createElement(v,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);