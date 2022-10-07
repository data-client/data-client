"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Pagination",id:"pagination",original_id:"pagination"},s=void 0,i={unversionedId:"guides/pagination",id:"version-4.2/guides/pagination",title:"Pagination",description:"Tokens in Body",source:"@site/versioned_docs/version-4.2/guides/pagination.md",sourceDirName:"guides",slug:"/guides/pagination",permalink:"/docs/4.2/guides/pagination",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/pagination.md",tags:[],version:"4.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Pagination",id:"pagination",original_id:"pagination"},sidebar:"version-4.2/docs",previous:{title:"Custom endpoints",permalink:"/docs/4.2/guides/endpoints"},next:{title:"Authentication",permalink:"/docs/4.2/guides/auth"}},l={},c=[{value:"Tokens in Body",id:"tokens-in-body",level:2},{value:"Tokens in HTTP Headers",id:"tokens-in-http-headers",level:2},{value:"Code organization",id:"code-organization",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tokens-in-body"},"Tokens in Body"),(0,a.kt)("p",null,"A common way APIs deal with pagination is the list view will return an object with both pagination information\nand the Array of results as another member."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET http://test.com/article/?page=abcd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nextPage": null,\n  "prevPage": "http://test.com/article/?page=aedcba",\n  "results": [\n    {\n      "id": 5,\n      "content": "have a merry christmas",\n      "author": 2,\n      "contributors": []\n    },\n    {\n      "id": 532,\n      "content": "never again",\n      "author": 23,\n      "contributors": [5]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"To deal with our specific shape, we'll need to customize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.2/api/FetchShape"},"FetchShape")," of lists to\nunderstand how to normalize the results (via schema). Be sure to provide defaults in your schema for any members\nthat aren't entities."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resources/ArticleResource.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Resource,\n  SchemaList,\n  ReadShape,\n  AbstractInstanceType,\n} from 'rest-hooks';\nimport { UserResource } from 'resources';\n\nexport default class ArticleResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly content: string = '';\n  readonly author: number | null = null;\n  readonly contributors: number[] = [];\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = 'http://test.com/article/';\n\n  static listShape<T extends typeof Resource>(this: T) {\n    return {\n      ...super.listShape(),\n      schema: { results: [this.asSchema()], nextPage: '', prevPage: '' },\n    };\n  }\n}\n")),(0,a.kt)("p",null,"Now we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"listShape()")," to get not only the articles, but also our ",(0,a.kt)("inlineCode",{parentName:"p"},"nextPage"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"prevPage")," values. We can use those tokens to define our pagination buttons."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ArticleList.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useResource } from 'rest-hooks';\nimport ArticleResource from 'resources/ArticleResource';\n\nexport default function ArticleList() {\n  const { results: articles, nextPage, prevPage } = useResource(\n    ArticleResource.listShape(),\n    {},\n  );\n  return (\n    <>\n      <div>\n        {articles.map(article => (\n          <Article key={article.pk()} article={article} />\n        ))}\n      </div>\n      {prevPage && <Link to={prevPage}>\u2039 Prev</Link>}\n      {nextPage && <Link to={nextPage}>Next \u203a</Link>}\n    </>\n  );\n}\n")),(0,a.kt)("h2",{id:"tokens-in-http-headers"},"Tokens in HTTP Headers"),(0,a.kt)("p",null,"In some cases the pagination tokens will be embeded in HTTP headers, rather than part of the payload. In this\ncase you'll need to customize the ",(0,a.kt)("a",{parentName:"p",href:"../api/FetchShape#fetchurl-string-body-payload-promise-any"},"fetch()")," function\nfor ",(0,a.kt)("a",{parentName:"p",href:"../api/resource#listshape-readshape"},"listShape()")," so the pagination headers are included fetch object."),(0,a.kt)("p",null,"We show the custom listShape() below. All other parts of the above example remain the same."),(0,a.kt)("p",null,"Pagination token is stored in the header ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," for this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Resource } from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Shape to get a list of entities */\n  static listShape<T extends typeof Resource>(this: T) {\n    const fetch = async (params: Readonly<Record<string, string | number>>) => {\n      const response = await this.fetchResponse('get', this.listUrl(params));\n      return {\n        link: response.headers.get('link'),\n        results: await response.json().catch((error: any) => {\n          error.status = 400;\n          throw error;\n        }),\n      };\n    };\n    return {\n      ...super.listShape(),\n      fetch,\n      schema: { results: [this.asSchema()], link: '' },\n    };\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import request from 'superagent';\nimport {\n  Resource,\n  ReadShape,\n  SchemaList,\n  AbstractInstanceType,\n} from 'rest-hooks';\n\nexport default class ArticleResource extends Resource {\n  // same as above....\n\n  /** Shape to get a list of entities */\n  static listShape<T extends typeof Resource>(this: T) {\n    const fetch = async (\n      params: Readonly<object>,\n      body?: Readonly<object | string>,\n    ) => {\n      const url = this.listUrl(params);\n      let req = request['get'](url).on('error', () => {});\n      if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n      if (body) req = req.send(body);\n      const res = await req;\n      let jsonResponse = res.body;\n      // include both the body and the link header\n      jsonResponse = {\n        link: res.headers.link,\n        results: jsonResponse,\n      };\n      return jsonResponse;\n    };\n\n    return {\n      ...super.listShape(),\n      fetch,\n      schema: { results: [this.asSchema()], link: '' },\n    };\n  }\n}\n")),(0,a.kt)("h2",{id:"code-organization"},"Code organization"),(0,a.kt)("p",null,"If much of your ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," share a similar pagination, you might\ntry extending from a base class that defines such common customizations."))}u.isMDXComponent=!0}}]);