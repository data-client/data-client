"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33624],{30433:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65559:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(5730),s=n(20636),i=n(76602),u=n(63735),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:f,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,i.U)(),[D,N]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==D&&g.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=w.indexOf(t),r=g[n].value;r!==D&&(O(t),N(r),null!=f&&E(f,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":D===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},88705:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(65559),a=n(30433),o=n(67294);function l(e){let{children:t}=e;return o.createElement(r.Z,{defaultValue:"simple",groupId:"with-generics",values:[{label:"Type",value:"simple"},{label:"With Generics",value:"generics"}]},o.createElement(a.Z,{value:"simple"},t[0]),o.createElement(a.Z,{value:"generics"},t[1]))}},52393:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65559),a=n(30433),o=n(67294),l=n(13743);function s(e){let{pkgs:t,dev:n=!1}=e;return o.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},o.createElement(a.Z,{value:"yarn"},o.createElement(l.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),o.createElement(a.Z,{value:"npm"},o.createElement(l.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},57489:(e,t,n)=>{var r=n(67294),a=n(72887);const o={React:r,...r,...a};t.Z=o},92136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=(n(52393),n(88705)),l=n(54429);const s={title:"useDLE()"},i=void 0,u={unversionedId:"api/useDLE",id:"version-6.3/api/useDLE",title:"useDLE()",description:"In case you cannot use suspense, useDLE() is just like useSuspense() but returns [D]ata [L]oading [E]rror values.",source:"@site/versioned_docs/version-6.3/api/useDLE.md",sourceDirName:"api",slug:"/api/useDLE",permalink:"/docs/6.3/api/useDLE",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/api/useDLE.md",tags:[],version:"6.3",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1663622540,formattedLastUpdatedAt:"Sep 19, 2022",frontMatter:{title:"useDLE()"},sidebar:"docs",previous:{title:"useFetch()",permalink:"/docs/6.3/api/useFetch"},next:{title:"useMeta()",permalink:"/docs/6.3/api/useMeta"}},c={},p=[{value:"Hook usage",id:"hook-usage",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"GenericsTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE(\n  endpoint: ReadEndpoint,\n  ...args: Parameters<typeof endpoint> | [null]\n): {\n  data: Denormalize<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function useDLE<\n  E extends EndpointInterface<FetchFunction, Schema | undefined, undefined>,\n  Args extends readonly [...Parameters<E>] | readonly [null],\n>(\n  endpoint: E,\n  ...args: Args\n): {\n  data: DenormalizeNullable<typeof endpoint.schema>;\n  loading: boolean;\n  error: Error | undefined;\n};\n"))),(0,a.kt)("p",null,"In case you cannot use suspense, useDLE() is just like ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.3/api/useSuspense"},"useSuspense()")," but returns ","[D]","ata ","[L]","oading ","[E]","rror values."),(0,a.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="resources/ProfileResource.ts"',title:'"resources/ProfileResource.ts"'},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ProfileList.tsx"',title:'"ProfileList.tsx"'},"import { useDLE } from 'rest-hooks';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useDLE(ProfileResource.list());\n  if (error) return <div>Error {error.status}</div>;\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      {data.map(profile => (\n        <Meta\n          key={profile.pk()}\n          avatar={<Avatar src={profile.img} />}\n          title={profile.fullName}\n          description={profile.bio}\n        />\n      ))}\n    </Card>\n  );\n}\n")),(0,a.kt)(l.ZP,{hook:"useDLE",mdxType:"ConditionalDependencies"}))}m.isMDXComponent=!0},54429:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(87462),a=(n(67294),n(3905)),o=n(13743);const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Conditional Dependencies",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),' as the second argument on any rest hooks to indicate "do nothing."'),(0,a.kt)(o.Z,{language:"typescript",mdxType:"CodeBlock"},`// todo could be undefined if id is undefined\nconst todo = ${n.hook??"useSuspense"}(todoDetail, id ? { id } : null);`)))}s.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);