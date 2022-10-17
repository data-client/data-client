"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65444],{85162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),s=n(72389),o=n(67392),i=n(7094),u=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:m,groupId:g,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,i.U)(),[Z,w]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=g){const e=k[g];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==Z&&(N(t),w(r),null!=g&&E(g,String(r)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>x.push(e),onKeyDown:q,onFocus:C,onClick:C},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":Z===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},84195:(e,t,n)=>{const r=(0,n(67294).createContext)({selectedValue:"",setSelectedValue:e=>{throw new Error("No Tab provider")},values:[]});t.Z=r},107:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),a=n(87462),l=n(49544),s=n(86010),o=n(95999),i=n(52263),u=n(66412),c=n(84195),d=n(45440);function p(e){let{fixtures:t}=e;return r.createElement("div",{style:{backgroundColor:"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(191, 199, 213)",padding:"10px"}},t.map((e=>r.createElement("div",{key:e.endpoint.key(...e.args)},r.createElement("span",{style:{color:"rgb(195, 232, 141)"}},e.endpoint.key(...e.args)),": ",r.createElement(g,{fixture:e})))))}var m=(0,r.memo)(p);function g(e){let{fixture:t}=e;return r.createElement("span",null,"function"==typeof t.response?"function":JSON.stringify(t.response,void 0,2))}var h=n(60975),f=n(51523),v=n(1556);function y(){const{selectedValue:e,setSelectedValue:t,values:n}=(0,r.useContext)(c.Z);return r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},n.map((n=>{let{value:a,label:l}=n;return r.createElement("div",{role:"tab",tabIndex:e===a?0:-1,"aria-selected":e===a,key:a,className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:e===a}),onFocus:t,onClick:t,value:a},l)})))}function b(e){let{children:t}=e;return r.createElement(h.Z,{className:d.Z.tabControls},r.createElement("div",{className:d.Z.title},t),r.createElement(y,null))}function k(e){let{title:t,fixtures:n}=e;const{values:a}=(0,r.useContext)(c.Z),l=a.length>0;return r.createElement(r.Fragment,null,n.length?r.createElement(r.Fragment,null,r.createElement(h.Z,{className:d.Z.small},"Fixtures"),r.createElement(m,{fixtures:n})):null,l?r.createElement(b,null,t):null)}function E(e){let{children:t,transformCode:n,groupId:o,defaultOpen:c,row:p,hidden:m,fixtures:g,includeEndpoints:h,...f}=e;const{liveCodeBlock:{playgroundPosition:v}}=(0,i.Z)().siteConfig.themeConfig,y=(0,u.p)();return r.createElement("div",{className:(0,s.Z)(d.Z.playgroundContainer,{[d.Z.row]:p,[d.Z.hidden]:m})},r.createElement(l.nu,(0,a.Z)({theme:y},f),r.createElement(Z,{reverse:"top"===v,row:p,fixtures:g,includeEndpoints:h,groupId:o,defaultOpen:c},t)))}function Z(e){let{reverse:t,children:n,row:a,fixtures:s,includeEndpoints:o,groupId:i,defaultOpen:u}=e;const c=(0,r.useMemo)((()=>"string"==typeof n?[{code:n.replace(/\n$/,""),collapsed:!1}]:(Array.isArray(n)?n:[n]).filter((e=>e.props.children)).map((e=>"string"==typeof e.props.children?e.props:e.props.children.props)).map((e=>{let{children:t,title:n="",collapsed:r=!1}=e;return{code:t.replace(/\n$/,""),title:n.replaceAll('"',""),collapsed:r}}))),[n]),[d,p]=(0,r.useReducer)(N,void 0,(()=>c.map((e=>{let{code:t}=e;return t})))),m=(0,r.useMemo)((()=>c.map(((e,t)=>e=>p({i:t,code:e})))),[c.length]),[g,h]=(0,r.useState)((()=>c.map((e=>{let{collapsed:t}=e;return t})))),y=d.join("\n");return r.createElement(x,{reverse:t},r.createElement("div",null,r.createElement(k,{fixtures:!a&&s}),a&&c.length>1?r.createElement(U,{titles:c.map((e=>{let{title:t}=e;return t})),closedList:g,onClick:e=>h((t=>t.map(((t,n)=>n!==e))))}):null,c.map(((e,t)=>{let{title:n}=e;return r.createElement(r.Fragment,{key:t},!a&&n?r.createElement(L,{onClick:()=>h((e=>{const n=[...e];return n[t]=!n[t],n})),closed:g[t],title:n}):null,g[t]?null:r.createElement(q,{key:t,onChange:m[t],code:d[t]}))}))),r.createElement(v.Z,{fallback:r.createElement(l.nu,{key:"preview",code:'render(() => "Loading...");',noInline:!0},r.createElement(f.Z,{key:"preview",includeEndpoints:o,groupId:i,defaultOpen:u,row:a,fixtures:s}))},r.createElement(w,{code:y,includeEndpoints:o,groupId:i,defaultOpen:u,row:a,fixtures:s})))}k.defaultProps={title:r.createElement(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Editor"),fixtures:[]},E.defaultProps={row:!1,hidden:!1};const w=(0,r.lazy)((()=>Promise.resolve({default:e=>null})));function x(e){let{children:t,reverse:n}=e;const r=[...t];return r.reverse(),n?r:t}function N(e,t){const n=[...e];return n[t.i]=t.code,n}x.defaultProps={reverse:!1};const C=(0,r.memo)(l.uz);function q(e){let{onChange:t,code:n}=e;return r.createElement(C,{className:d.Z.playgroundEditor,onChange:t,code:n})}function L(e){let{onClick:t,closed:n,title:a}=e;return r.createElement(h.Z,{className:d.Z.small,onClick:t},r.createElement("span",{className:(0,s.Z)(d.Z.arrow,n?d.Z.right:d.Z.down)},"\u25b6"),a)}function U(e){let{titles:t,closedList:n,onClick:a}=e;const{values:l}=(0,r.useContext)(c.Z),o=l.length>0;return r.createElement(h.Z,{className:(0,s.Z)({[d.Z.small]:o,[d.Z.subtabs]:o},d.Z.noupper,d.Z.tabControls)},r.createElement("div",{className:d.Z.tabs,role:"tablist","aria-orientation":"horizontal"},t.map(((e,t)=>r.createElement("div",{role:"tab",key:t,onClick:()=>a(t),className:(0,s.Z)(d.Z.tab,{[d.Z.selected]:!n[t]})},e)))))}const S=e=>{let{children:t,groupId:n,hidden:a=!1,defaultOpen:l,row:s=!1,fixtures:o}=e;return r.createElement(E,{includeEndpoints:!Array.isArray(t),noInline:!0,groupId:n,defaultOpen:l,row:s,hidden:a,fixtures:o},"string"==typeof t||Array.isArray(t)?t:t.props.children)};S.defaultProps={defaultOpen:"n",fixtures:[]};var T=(0,r.memo)(S)},70523:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(65488),a=n(85162),l=n(67294);function s(e){let{children:t}=e;return l.createElement(r.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},l.createElement(a.Z,{value:"ts"},t[0]),l.createElement(a.Z,{value:"js"},t[1]))}},96497:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(65488),a=n(85162),l=n(67294),s=n(75690);function o(e){let{pkgs:t,dev:n=!1}=e;return l.createElement(r.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},l.createElement(a.Z,{value:"yarn"},l.createElement(s.Z,{className:"language-bash"},"yarn add ",n?"--dev ":"",t)),l.createElement(a.Z,{value:"npm"},l.createElement(s.Z,{className:"language-bash"},"npm install --save",n?"Dev ":""," ",t)))}},1556:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(91262),a=n(67294);function l(e){let{fallback:t,children:n}=e;return a.createElement(r.Z,{fallback:t},(()=>a.createElement(a.Suspense,{fallback:t},n)))}},60975:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(86010),l=n(45440);function s(e){let{children:t,className:n,onClick:s}=e;return r.createElement("div",{className:(0,a.Z)(l.Z.playgroundHeader,n,s?l.Z.clickable:null),onClick:s},t)}},51523:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(67294),a=n(95999),l=n(27093),s=n(26127),o=n(82038),i=n(83611),u=n(39714),c=n(86010),d=n(7094),p=n(12466),m=n(45440),g=n(32041),h=n(97723),f=n(92949);function v(e){let{value:t}=e;const n="dark"===(0,f.I)().colorMode,a=(0,r.useMemo)((()=>({String:"rgb(195, 232, 141)",Date:"rgb(247, 140, 108)",Number:"rgb(247, 140, 108)",Boolean:"rgb(247, 140, 108)",Null:"rgb(255, 88, 116)",Undefined:"rgb(255, 88, 116)",Function:"rgb(247, 140, 108)",Symbol:"rgb(247, 140, 108)"})),[]),l=(0,r.useMemo)((()=>({tree:{overflow:"auto",flex:"4 1 70%",margin:0,padding:"0 0.5rem 0 0.8rem",backgroundColor:n?"var(--ifm-pre-background)":"rgb(41, 45, 62)",font:"var(--ifm-code-font-size) / var(--ifm-pre-line-height) var(--ifm-font-family-monospace) !important",color:"rgb(227, 227, 227)"},arrowContainer:(e,t)=>{let{style:n}=e;return{style:{...n,fontFamily:"arial",padding:"7px 7px 7px 0",margin:"-7px calc(0.5em - 7px) -7px 0"}}},arrowSign:{color:"rgb(130, 170, 255)"},label:{color:"rgb(130, 170, 255)"},itemRange:{color:"rgb(105, 112, 152)"},valueText:(e,t)=>{let{style:n}=e;return{style:{...n,color:a[t]}}},base0B:"rgb(191, 199, 213)"})),[n,a]);return r.createElement(h.L,{shouldExpandNode:y,data:t,valueRenderer:k,theme:l,hideRoot:!0})}function y(e,t,n){return 0===n||(!(1!==n||!["entities","results"].includes(e[0]))||(2===n&&"entities"===e[1]||(2===n&&"results"===e[1]||(3===n&&"entities"===e[2]||3===n&&"results"===e[2]))))}const b="undefined"!=typeof Intl;function k(e,t){const n=arguments.length<=2?void 0:arguments[2];return b&&"number"==typeof t&&"string"==typeof n&&isFinite(t)&&("date"===n||n.endsWith("At"))?Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",second:"numeric",fractionalSecondDigits:3}).format(t):e}function E(e){let{toggle:t,selectedValue:n}=e;const a="y"===n,l=a?m.Z.right:m.Z.left;return r.createElement(r.Fragment,null,r.createElement("div",{className:m.Z.debugToggle,onClick:t},"Store",r.createElement("span",{className:(0,c.Z)(m.Z.arrow,l,m.Z.vertical)},"\u25b6")),a?r.createElement(x,null):null)}var Z=(0,r.memo)(E);function w(){const e=(0,r.useContext)(g.sA),t=(0,r.useMemo)((()=>{const t={...e};return delete t.optimistic,t}),[e]);return r.createElement(v,{value:t})}const x=(0,r.memo)(w);var N=n(1556);function C(e){let{groupId:t,defaultOpen:n,row:a,fixtures:g}=e;const{tabGroupChoices:h,setTabGroupChoices:f}=(0,d.U)(),[v,y]=(0,r.useState)(n),{blockElementScrollPositionUntilNextRender:b}=(0,p.o5)();if(null!=t){const e=h[t];null!=e&&e!==v&&y(e)}const k=(0,r.useCallback)((e=>{b(e.currentTarget),y((e=>"y"===e?"n":"y")),f(t,"y"===v?"n":"y")}),[b,t,v,f]),E=(0,r.useMemo)((()=>[new i.Z,new l.Z(s.Z)]),[]),w=!("n"===v||!a);return r.createElement(o.nq,{managers:E},r.createElement(u.Z,{fixtures:g,silenceMissing:!0},r.createElement("div",{className:(0,c.Z)(m.Z.playgroundPreview,{[m.Z.hidden]:w})},r.createElement(N.Z,{fallback:r.createElement(L,null)},r.createElement(U,null))),r.createElement(Z,{selectedValue:v,toggle:k})))}var q=(0,r.memo)(C);function L(){return r.createElement("div",null,"Loading...")}const U=(0,r.lazy)((()=>Promise.all([n.e(72887),n.e(87876),n.e(97277),n.e(26750)]).then(n.bind(n,64511))));var S=n(60975);function T(e){let{groupId:t,defaultOpen:n,row:l,fixtures:s}=e;return r.createElement("div",{style:{overflow:"hidden",display:"flex",flexDirection:"column"}},r.createElement(S.Z,null,r.createElement(a.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live Preview")),r.createElement("div",{className:m.Z.playgroundResult},r.createElement(q,{groupId:t,defaultOpen:n,row:l,fixtures:s})))}var I=(0,r.memo)(T)},56922:(e,t,n)=>{var r=n(67294),a=n(72887);const l={React:r,...r,...a};t.Z=l},3879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});var r=n(87462),a=(n(67294),n(3905)),l=n(70523),s=n(65488),o=n(85162),i=n(96497),u=n(107);const c={id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},d=void 0,p={unversionedId:"graphql/usage",id:"version-6.2/graphql/usage",title:"GraphQL Usage",description:"GraphQL Usage with Rest Hooks",source:"@site/versioned_docs/version-6.2/graphql/usage.md",sourceDirName:"graphql",slug:"/graphql/usage",permalink:"/docs/6.2/graphql/usage",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/usage.md",tags:[],version:"6.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1650951703,formattedLastUpdatedAt:"Apr 26, 2022",frontMatter:{id:"usage",title:"GraphQL Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Custom networking library",permalink:"/docs/6.2/guides/custom-networking"},next:{title:"Authentication",permalink:"/docs/6.2/graphql/auth"}},m={},g=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],h={toc:g};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"GraphQL Usage with Rest Hooks")),(0,a.kt)(i.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,a.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,a.kt)(l.Z,{mdxType:"LanguageTabs"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity"),"s are immutable. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using GQLEntities is not required, but is important to achieve data consistency.")),(0,a.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,a.kt)(s.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Single",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useSuspense(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,a.kt)(o.Z,{value:"List",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useSuspense } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useSuspense(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/useSuspense"},"useSuspense()")," guarantees access to data with sufficient ",(0,a.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,a.kt)("a",{parentName:"p",href:"/docs/6.2/getting-started/data-dependency#boundaries"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,a.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,a.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"SWAPI Demo")),(0,a.kt)(u.Z,{mdxType:"HooksPlayground"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\nclass Person extends GQLEntity {\n  readonly id: string = '';\n  readonly name: string = '';\n  readonly height: string = '';\n}\nconst PageInfo = {\n  hasNextPage: false,\n  startCursor: '',\n  endCursor: '',\n}\nconst allPeople = gql.query(\n  (v: { first?: number; after?: string }) => `\nquery People($first: Int, $after:String) {\n  allPeople(first: $first, after:$after) {\n    people{\n      id,name,height\n    },\n    pageInfo {\n      hasNextPage,\n      startCursor,\n      endCursor\n    }\n  }\n}\n`,\n{ allPeople: { people: [Person], pageInfo: PageInfo } },\n);\nfunction StarPeople() {\n  const { people, pageInfo } = useSuspense(allPeople, { first: 5 }).allPeople;\n  return (\n    <div>\n      {people.map(person => (\n        <div key={person.id}>\n          name: {person.name} height: {person.height}\n        </div>\n      ))}\n    </div>\n  );\n}\nrender(<StarPeople/>);\n")))),(0,a.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,a.kt)("p",null,"We're using ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useController } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint(\n  'https://swapi-graphql.netlify.app/.netlify/functions/index',\n);\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const { fetch } = useController();\n  return (\n    <Form onSubmit={e => fetch(createReview, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,a.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,a.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}f.isMDXComponent=!0},45440:(e,t)=>{t.Z={playgroundContainer:"playgroundContainer_sLUA",row:"row_YGZs",hidden:"hidden_Hh8i",playgroundHeader:"playgroundHeader_Zx4K",small:"small_xksL",clickable:"clickable_YHiX",noupper:"noupper_WDCF",subtabs:"subtabs_XtJb",playgroundEditor:"playgroundEditor_lYwu",closed:"closed_QJMa",arrow:"arrow_tivA",vertical:"vertical_OMeC",right:"right_vs_C",left:"left_iDcB",up:"up_H4F7",down:"down_oRky",playgroundPreview:"playgroundPreview_rk9R",playgroundError:"playgroundError_sRnA",playgroundResult:"playgroundResult_tefG",debugToggle:"debugToggle_zlro",tabControls:"tabControls_trxh",title:"title_poUY",tabs:"tabs_m54V",tab:"tab_bTGw",selected:"selected_QXZk"}}}]);