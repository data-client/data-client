"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[36506],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(67294),o=n(86010);const a="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(87462),o=n(67294),a=n(86010),r=n(72389),l=n(67392),i=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:p,groupId:h,className:f}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??b.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[N,x]=(0,o.useState)(v),U=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,n=U.indexOf(t),s=k[n].value;s!==N&&(E(t),x(s),null!=h&&y(h,String(s)))},R=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=U.indexOf(e.currentTarget)+1;n=U[t]??U[0];break}case"ArrowLeft":{const t=U.indexOf(e.currentTarget)-1;n=U[t]??U[U.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},f)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>U.push(e),onKeyDown:R,onFocus:T,onClick:T},r,{className:(0,a.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,r.Z)();return o.createElement(m,(0,s.Z)({key:String(t)},e))}},96497:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(65488),o=n(85162),a=n(67294),r=n(38436);function l(e){let{pkgs:t,dev:n=!1}=e;return a.createElement(s.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},a.createElement(o.Z,{value:"yarn"},a.createElement(r.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),a.createElement(o.Z,{value:"npm"},a.createElement(r.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},56922:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(67294),o=n(46253);const a={React:s,...s,...o}},73487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(87462),o=(n(67294),n(3905)),a=n(96497);const r={title:"Usage with class components"},l=void 0,i={unversionedId:"guides/class-components",id:"version-6.3/guides/class-components",title:"Usage with class components",description:"Hooks are great, but many of us are working with existing codebases or libraries",source:"@site/versioned_docs/version-6.3/guides/class-components.md",sourceDirName:"guides",slug:"/guides/class-components",permalink:"/docs/6.3/guides/class-components",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/class-components.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"Usage with class components"},sidebar:"docs",previous:{title:"Redux integration",permalink:"/docs/6.3/guides/redux"},next:{title:"Legacy browser support",permalink:"/docs/6.3/guides/legacy-browser"}},u={},c=[{value:"Install hook-hoc",id:"install-hook-hoc",level:2},{value:"Use with class",id:"use-with-class",level:2},{value:"Extracting the function",id:"extracting-the-function",level:2},{value:"Filters, debounce and more",id:"filters-debounce-and-more",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hooks are great, but many of us are working with existing codebases or libraries\nwith class based components. Some might be easy to migrate but others might be\nmore diffcult. Should this block you from adopting rest-hooks? Of course not!"),(0,o.kt)("p",null,"Using the simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")," interop library\nwe can create Higher Order Components from hooks quite easily. This enables us\nto easily replace any existing HOC with ease."),(0,o.kt)("h2",{id:"install-hook-hoc"},"Install ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ntucker/hook-hoc"},"hook-hoc")),(0,o.kt)(a.Z,{pkgs:"hook-hoc",mdxType:"PkgTabs"}),(0,o.kt)("h2",{id:"use-with-class"},"Use with class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(({ id }: { id: number }) => {\n  const [user, friends] = useSuspense(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n})(Profile);\n")),(0,o.kt)("p",null,"Here you can see the return value of the function you pass in gets injected into the props\nof the component you wrap."),(0,o.kt)("h2",{id:"extracting-the-function"},"Extracting the function"),(0,o.kt)("p",null,"You might notice the function we pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"withHook()")," is a function that calls\nhooks. That makes it a hook by definition. To make this detectable by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"rules of hooks"),"\nand also potentially reusable, let's move it out to a named function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import withHook from 'hook-hoc';\nimport { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const [user, friends] = useSuspense(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  return { user, friends };\n}\n\nclass Profile extends React.PureComponent<{\n  id: number;\n  user: UserResource;\n  friends: UserResource[];\n}> {\n  //...\n}\n\nexport default withHook(useProfile)(Profile);\n")),(0,o.kt)("h2",{id:"filters-debounce-and-more"},"Filters, debounce and more"),(0,o.kt)("p",null,"Often times you'll be doing a bit more than just retrieving the data. We can\ndo all of that extra work in the hook we just created. Here we'll add some\nclient-side filtering as well as ",(0,o.kt)("a",{parentName:"p",href:"https://usehooks.com/useDebounce/"},"debouncing")," the requests themselves."),(0,o.kt)("p",null,"You can combine any hooks here - the sky's the limit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSuspense } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nfunction useProfile({ id }: { id: number }) {\n  const debouncedId = useDebounce(id, 150);\n\n  const [user, friends] = useSuspense(\n    [UserResource.detail(), { id }],\n    [UserResource.list(), { friendid: id }],\n  );\n  const realFriends = friends.filter(friend => friend.isReal);\n\n  return { user, friends: realFriends };\n}\n\n// rest of file...\n")))}m.isMDXComponent=!0}}]);