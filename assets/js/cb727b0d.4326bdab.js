"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[99196],{70523:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9877),s=a(58215),r=a(67294);function i(e){let{children:t}=e;return r.createElement(n.Z,{defaultValue:"ts",groupId:"language",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}]},r.createElement(s.Z,{value:"ts"},t[0]),r.createElement(s.Z,{value:"js"},t[1]))}},96497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9877),s=a(58215),r=a(67294),i=a(87799);function l(e){let{pkgs:t,dev:a=!1}=e;return r.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},r.createElement(s.Z,{value:"yarn"},r.createElement(i.Z,{className:"language-bash"},"yarn add ",a?"--dev ":"",t)),r.createElement(s.Z,{value:"npm"},r.createElement(i.Z,{className:"language-bash"},"npm install --save",a?"Dev ":""," ",t)))}},56922:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(15814);const r={React:n,...n,...s}},66757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),r=a(70523),i=a(9877),l=a(58215),o=a(96497);const p={id:"usage",title:"Usage"},m=void 0,u={unversionedId:"graphql/usage",id:"version-5.0/graphql/usage",title:"Usage",description:"Define Endpoint and Schema",source:"@site/versioned_docs/version-5.0/graphql/usage.md",sourceDirName:"graphql",slug:"/graphql/usage",permalink:"/docs/5.0/graphql/usage",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/graphql/usage.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1631077272,formattedLastUpdatedAt:"9/8/2021",frontMatter:{id:"usage",title:"Usage"},sidebar:"version-5.0/docs",previous:{title:"Custom cache lifetime",permalink:"/docs/5.0/guides/resource-lifetime"},next:{title:"GraphQL Authentication",permalink:"/docs/5.0/graphql/auth"}},c={},d=[{value:"Define Endpoint and Schema",id:"define-endpoint-and-schema",level:2},{value:"Query the Graph",id:"query-the-graph",level:2},{value:"Mutate the Graph",id:"mutate-the-graph",level:2}],g={toc:d};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{pkgs:"@rest-hooks/graphql",mdxType:"PkgTabs"}),(0,s.kt)("h2",{id:"define-endpoint-and-schema"},"Define Endpoint and Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="schema/endpoint.ts"',title:'"schema/endpoint.ts"'},"export const gql = new GQLEndpoint('https://nosy-baritone.glitch.me');\nexport default gql;\n")),(0,s.kt)(r.Z,{mdxType:"LanguageTabs"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {\n  readonly name: string | null = null;\n  readonly email: string = '';\n  readonly age: number = 0;\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="schema/User.ts"',title:'"schema/User.ts"'},"import { GQLEntity } from '@rest-hooks/graphql';\n\nexport default class User extends GQLEntity {}\n"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/Entity"},"Entity"),"s are immutable. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"readonly")," in typescript to enforce this."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Using GQLEntities is not required, but is important to achieve data consistency."))),(0,s.kt)("h2",{id:"query-the-graph"},"Query the Graph"),(0,s.kt)(i.Z,{defaultValue:"Single",values:[{label:"Single",value:"Single"},{label:"List",value:"List"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Single",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserDetail.tsx"',title:'"pages/UserDetail.tsx"'},"import { useResource } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nexport const userDetail = gql.query(\n  (v: { name: string }) => `query UserDetail($name: String!) {\n    user(name: $name) {\n      id\n      name\n      email\n    }\n  }`,\n  { user: User },\n);\n\nexport default function UserDetail({ name }: { name: string }) {\n  const { user } = useResource(userDetail, { name });\n  return (\n    <article>\n      <h2>{user.name}</h2>\n      <div>{user.email}</div>\n    </article>\n  );\n}\n"))),(0,s.kt)(l.Z,{value:"List",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/UserList.tsx"',title:'"pages/UserList.tsx"'},"import { useResource } from 'rest-hooks';\nimport User from 'schema/User';\nimport gql from 'schema/endpoint';\n\nconst userList = gql.query(\n  `{\n    users {\n      id\n      name\n      email\n      }\n    }`,\n  { users: [User] },\n);\n\nexport default function UserList() {\n  const { users } = useResource(userList, {});\n  return (\n    <section>\n      {users.map(user => (\n        <UserSummary key={user.pk()} user={user} />\n      ))}\n    </section>\n  );\n}\n")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," guarantees access to data with sufficient ",(0,s.kt)("a",{parentName:"p",href:"../api/Endpoint#dataexpirylength-number"},"freshness"),".\nThis means it may issue network calls, and it may ",(0,s.kt)("a",{parentName:"p",href:"../guides/loading-state"},"suspend")," until the fetch completes.\nParam changes will result in accessing the appropriate data, which also sometimes results in new network calls and/or\nsuspends."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Fetches are centrally controlled, and thus automatically deduplicated"),(0,s.kt)("li",{parentName:"ul"},"Data is centralized and normalized guaranteeing consistency across uses, even with different ",(0,s.kt)("a",{parentName:"li",href:"../api/Endpoint"},"endpoints"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"(For example: navigating to a detail page with a single entry from a list view will instantly show the same data as the list without\nrequiring a refetch.)")))),(0,s.kt)("h2",{id:"mutate-the-graph"},"Mutate the Graph"),(0,s.kt)("p",null,"We're using ",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/swapi-graphql"},"SWAPI")," as our example, since it offers mutations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/CreateReview.tsx"',title:'"pages/CreateReview.tsx"'},"import { useFetcher } from 'rest-hooks';\nimport { GQLEndpoint, GQLEntity } from '@rest-hooks/graphql';\n\nconst gql = new GQLEndpoint('https://graphql.org/swapi-graphql');\n\nclass Review extends GQLEntity {\n  readonly stars: number = 0;\n  readonly commentary: string = '';\n}\n\nconst createReview = gql.mutation(\n  (v: {\n    ep: string;\n    review: { stars: number; commentary: string };\n  }) => `mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n    createReview(episode: $ep, review: $review) {\n      stars\n      commentary\n    }\n  }`,\n  { createReview: Review },\n);\n\nexport default function NewReviewForm() {\n  const create = useFetcher(createReview);\n  return (\n    <Form onSubmit={e => create({}, new FormData(e.target))}>\n      <FormField name=\"ep\" />\n      <FormField name=\"review\" type=\"compound\" />\n    </Form>\n  );\n}\n")),(0,s.kt)("p",null,"The first argument to GQLEndpoint.query or GQLEndpoint.mutate is either the query string\n",(0,s.kt)("em",{parentName:"p"},"or")," a function that returns the query string. The main value of using the latter is enforcing\nthe function argument types."))}h.isMDXComponent=!0}}]);