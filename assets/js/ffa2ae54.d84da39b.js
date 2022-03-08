"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[3213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),c=i,h=m["".concat(u,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Custom endpoints"},s=void 0,o={unversionedId:"guides/extending-endpoints",id:"version-4.1/guides/extending-endpoints",title:"Custom endpoints",description:"Previously we saw how we could use",source:"@site/versioned_docs/version-4.1/guides/extending-endpoints.md",sourceDirName:"guides",slug:"/guides/extending-endpoints",permalink:"/docs/4.1/guides/extending-endpoints",editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/extending-endpoints.md",tags:[],version:"4.1",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"9/6/2021",frontMatter:{title:"Custom endpoints"}},u={},l=[{value:"Overriding endpoints",id:"overriding-endpoints",level:2},{value:"Default schema",id:"default-schema",level:3},{value:"Example schema",id:"example-schema",level:3},{value:"Resource definition",id:"resource-definition",level:3},{value:"Additional endpoints",id:"additional-endpoints",level:2},{value:"RPC",id:"rpc",level:3},{value:"Custom GET",id:"custom-get",level:3},{value:"Usage",id:"usage",level:4},{value:"Custom List Endpoints",id:"custom-list-endpoints",level:3},{value:"Usage",id:"usage-1",level:4}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../getting-started/usage#use-resource-docs-api-useresource"},"Previously we saw how we could use"),"\nthe ",(0,i.kt)("a",{parentName:"p",href:"../api/useresource"},"useResource()")," and ",(0,i.kt)("a",{parentName:"p",href:"../api/useFetcher"},"useFetcher()")," hooks to read and mutate\ndata. The first argument of these hooks is known as a ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),".\nEndpoints are the minimal definition of instructions needed to tell Rest Hooks how to handle\nthose types of requests."),(0,i.kt)("p",null,"Resource comes with a ",(0,i.kt)("a",{parentName:"p",href:"../api/resource#static-network-methods-and-properties"},"small handleful Endpoints"),"\nfor each of the typical ",(0,i.kt)("a",{parentName:"p",href:"https://restfulapi.net/http-methods/"},"CRUD operations"),". This is often not enough."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A note about TypeScript: When using ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," to override an endpoint, be sure to include the schema.\nTypeScript will not infer ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," calls correctly in this case.")),(0,i.kt)("h2",{id:"overriding-endpoints"},"Overriding endpoints"),(0,i.kt)("p",null,"By default the list() assumes an array of entities returned while detail() assumes\njust the entity returned."),(0,i.kt)("h3",{id:"default-schema"},"Default schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "postId": 1,\n  "id": 1,\n  "name": "id labore ex et quam laborum",\n  "email": "Eliseo@gardner.biz",\n  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  },\n  {\n    "postId": 1,\n    "id": 2,\n    "name": "quo vero reiciendis velit similique earum",\n    "email": "Jayne_Kuhic@sydney.com",\n    "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n  },\n  {\n    "postId": 1,\n    "id": 3,\n    "name": "odio adipisci rerum aut animi",\n    "email": "Nikita@garfield.biz",\n    "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n  }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments")),(0,i.kt)("h3",{id:"example-schema"},"Example schema"),(0,i.kt)("p",null,"However, often the data is not returned quite so simply. For instance, maybe it can be found in a 'data'\nkey of an object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "postId": 1,\n    "id": 1,\n    "name": "id labore ex et quam laborum",\n    "email": "Eliseo@gardner.biz",\n    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments/1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "postId": 1,\n      "id": 1,\n      "name": "id labore ex et quam laborum",\n      "email": "Eliseo@gardner.biz",\n      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora quo necessitatibus\\ndolor quam autem quasi\\nreiciendis et nam sapiente accusantium"\n    },\n    {\n      "postId": 1,\n      "id": 2,\n      "name": "quo vero reiciendis velit similique earum",\n      "email": "Jayne_Kuhic@sydney.com",\n      "body": "est natus enim nihil est dolore omnis voluptatem numquam\\net omnis occaecati quod ullam at\\nvoluptatem error expedita pariatur\\nnihil sint nostrum voluptatem reiciendis et"\n    },\n    {\n      "postId": 1,\n      "id": 3,\n      "name": "odio adipisci rerum aut animi",\n      "email": "Nikita@garfield.biz",\n      "body": "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /comments")),(0,i.kt)("h3",{id:"resource-definition"},"Resource definition"),(0,i.kt)("p",null,"In this case, you'll need to override your detail() and list() definitions to reflect\nthe structure of your data. This is known as a 'schema' definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class CommentResource extends Resource {\n  static detail<T extends typeof Resource>(this: T) {\n    return super.detail().extend({\n      schema: { data: this },\n    });\n  }\n  static list<T extends typeof Resource>(this: T) {\n    return super.list().extend({\n      schema: { data: [this] },\n    });\n  }\n}\n")),(0,i.kt)("p",null,"Here we only overrode the 'schema' part of the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," - taking advantage\nof ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"},"super")," to keep\nthe other pieces the same. See ",(0,i.kt)("a",{parentName:"p",href:"./pagination"},"pagination"),", ",(0,i.kt)("a",{parentName:"p",href:"./nested-response"},"nested resources"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"./rpc"},"mutation side-effects")," guide for more examples of custom schemas and overriding\nendpoints."),(0,i.kt)("h2",{id:"additional-endpoints"},"Additional endpoints"),(0,i.kt)("p",null,"In many cases there are more means of interacting with a given resource than the basic CRUD\noperations. Often this means a custom RPC call, or even a custom retrieval endpoint. We'll demonstrate\na few examples here, but be sure to learn more about ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint"),"s to\ndefine exactly what your endpoint needs."),(0,i.kt)("h3",{id:"rpc"},"RPC"),(0,i.kt)("p",null,"In this example, we have an RPC endpoint located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/users/[id]/make_manager"),". This endpoint\ndoesn't expect any body, but is a POST request. Because it is so similar to a ",(0,i.kt)("a",{parentName:"p",href:"../api/resource#create-endpoint"},"create()"),"\nwe'll be extended that schema definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  static makeManager<T extends typeof Resource>(this: T) {\n    const endpoint = this.create();\n    return endpoint.extend({\n      url({ id }: { id: number }) { return `/users/${id}/make_manager` },\n      fetch({ id }: { id: number }) {\n        return endpoint.fetch.call(this, { id });\n      }\n    });\n  }\n}\n")),(0,i.kt)("p",null,"We customized the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Params of { id: number }"),(0,i.kt)("li",{parentName:"ul"},"No Body"))),(0,i.kt)("li",{parentName:"ul"},"Custom url")),(0,i.kt)("h3",{id:"custom-get"},"Custom GET"),(0,i.kt)("p",null,"Normally we can look up user resources like any other - with their 'id'. However,\nhow do we get the currently logged in user? One way is to define a special url\njust for retrieving the current user. In this case - ",(0,i.kt)("inlineCode",{parentName:"p"},"/current_user/"),". Since there\nis only one - we won't need to send any params."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from '@rest-hooks/rest';\n\nexport default class UserResource extends Resource {\n  /** Retrieves current logged in user */\n  static current<T extends typeof Resource>(this: T) {\n    const endpoint = this.detail();\n    return endpoint.extend({\n      fetch() { return endpoint(this); }\n      url() { return '/current_user/' },\n    })\n  }\n}\n")),(0,i.kt)("p",null,"We customized the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No params"))),(0,i.kt)("li",{parentName:"ul"},"Custom url")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport UserResource from 'resources/user';\n\nexport default function CurrentUserProfilePage() {\n  const loggedInUser = useResource(UserResource.current(), {});\n\n  return <ProfileDetail user={loggedInUser} />;\n}\n")),(0,i.kt)("h3",{id:"custom-list-endpoints"},"Custom List Endpoints"),(0,i.kt)("p",null,"Sometimes we have endpoints that select particular results. We set the url\nin our custom ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint"},"Endpoint")," function,\nand ensure the data is normalized and typed\ncorrectly via the ",(0,i.kt)("a",{parentName:"p",href:"../api/Endpoint#schema-schema"},"schema")," definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class BirthdayResource extends BaseResource {\n  readonly id: string | undefined = undefined;\n  readonly name: string = '';\n  readonly image: string = '';\n  readonly source: string = '';\n  readonly date: Date = new Date();\n\n  pk() {\n    return this.id;\n  }\n\n  static urlRoot = '/api/birthdays/';\n\n  /** Lists all upcoming birthdays */\n  static upcoming<T extends typeof Resource>(this: T) {\n    const endpoint = this.list();\n    return this.list().extend({\n      fetch() { return endpoint.fetch.call(this); }\n      url() { return '/current_user/' },\n      schema: {\n        withinSevenDays: [this],\n        withinThirtyDays: [this],\n      },\n    });\n  }\n}\n")),(0,i.kt)("h4",{id:"usage-1"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\n\nimport BirthdayResource from 'resources/user';\n\nexport default function UpcomingBirthdays() {\n  const { withinSevenDays, withinThirtyDays } = useResource(\n    BirthdayResource.upcoming(),\n    {},\n  );\n\n  return (\n    <div>\n      <h2>Next Seven</h2>\n      <div>\n        {withinSevenDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n      <h2>Next Thirty</h2>\n      <div>\n        {withinThirtyDays.map(birthday => (\n          <Birthday key={birthday.pk()} birthday={birthday} />\n        ))}\n      </div>\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);