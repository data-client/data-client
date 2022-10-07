"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={title:"Using a custom networking library",sidebar_label:"Custom networking library"},i=void 0,a={unversionedId:"guides/custom-networking",id:"version-6.0/guides/custom-networking",title:"Using a custom networking library",description:"Resource.fetch() wraps the standard fetch.",source:"@site/versioned_docs/version-6.0/guides/custom-networking.md",sourceDirName:"guides",slug:"/guides/custom-networking",permalink:"/docs/6.0/guides/custom-networking",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/custom-networking.md",tags:[],version:"6.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1664586789,formattedLastUpdatedAt:"Oct 1, 2022",frontMatter:{title:"Using a custom networking library",sidebar_label:"Custom networking library"},sidebar:"version-6.0/docs",previous:{title:"Capturing Mutation Side-Effects",permalink:"/docs/6.0/guides/rpc"},next:{title:"Custom cache lifetime",permalink:"/docs/6.0/guides/resource-lifetime"}},u={},p=[{value:"Fetch (default)",id:"fetch-default",level:2},{value:"Superagent",id:"superagent",level:2},{value:"Axios",id:"axios",level:2}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Resource.fetch()")," wraps the standard ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch"),".\nOne key customization is ensuring every network related error thrown has a\nstatus member. This is useful in distinguishing code errors from networking errors,\nand is used in the ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkManager"},"NetworkManager"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SimpleResource")," can be used as an abstract class to implement custom fetch methods\nwithout including the default."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you plan on using ",(0,o.kt)("a",{parentName:"p",href:"../api/NetworkErrorBoundary"},"NetworkErrorBoundary")," make sure\nto add a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member to errors, as it catches only errors with a ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," member.")),(0,o.kt)("h2",{id:"fetch-default"},"Fetch (default)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/fetch#installation"},"whatwg-fetch")," polyfill will be\nuseful in environments that don't support it, like node and older browsers\n(Internet Explorer). Be sure to include it in any bundles that need it."),(0,o.kt)("p",null,"This implementation is provided as a useful reference for building your own.\nFor the most up-to-date implementation, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coinbase/rest-hooks/blob/master/packages/rest-hooks/src/resource/Resource.ts"},"source on master")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import SimpleResource from './SimpleResource.js';\n\nclass NetworkError extends Error {\n  declare status: number;\n  declare response: Response;\n  name = 'NetworkError';\n\n  constructor(response: Response) {\n    super(\n      response.statusText ||\n        /* istanbul ignore next */ `Network response not 'ok': ${response.status}`,\n    );\n    this.status = response.status;\n    this.response = response;\n  }\n}\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n * @see https://resthooks.io/docs/api/resource\n */\nexport default abstract class Resource extends SimpleResource {\n  /** Perform network request and resolve with HTTP Response */\n  static fetchResponse(input: RequestInfo, init: RequestInit) {\n    let options: RequestInit = init;\n    if (!options.body || typeof options.body === 'string') {\n      options = {\n        ...options,\n        headers: {\n          'Content-Type': 'application/json',\n          ...options.headers,\n        },\n      };\n    }\n    return fetch(input, options)\n      .then(response => {\n        if (!response.ok) {\n          throw new NetworkError(response);\n        }\n        return response;\n      })\n      .catch(error => {\n        // ensure CORS, network down, and parse errors are still caught by NetworkErrorBoundary\n        if (error instanceof TypeError) {\n          (error as any).status = 400;\n        }\n        throw error;\n      });\n  }\n\n  /** Perform network request and resolve with json body */\n  static fetch(input: RequestInfo, init: RequestInit) {\n    return this.fetchResponse(input, init).then((response: Response) => {\n      if (\n        !response.headers.get('content-type')?.includes('json') ||\n        response.status === 204\n      )\n        return response.text();\n      return response.json().catch(error => {\n        error.status = 400;\n        throw error;\n      });\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"superagent"},"Superagent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://visionmedia.github.io/superagent/"},"Superagent")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport type { SuperAgentRequest } from 'superagent';\n\nconst ResourceError = `JSON expected but not returned from API`;\n\n/**\n * Represents an entity to be retrieved from a server.\n * Typically 1:1 with a url endpoint.\n */\nexport default abstract class Resource extends SimpleResource {\n  /** A function to mutate all requests for fetch */\n  static fetchPlugin?: (request: SuperAgentRequest) => SuperAgentRequest;\n\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    let req = request[init.method](input).on('error', () => {});\n    if (this.fetchPlugin) req = req.use(this.fetchPlugin);\n    if (init.body) req = req.send(init.body);\n    return req.then(res => {\n      if (isInvalidResponse(res)) {\n        throw new Error(ResourceError);\n      }\n      return res.body;\n    });\n  }\n}\n\nexport const isInvalidResponse = (res: request.Response): boolean => {\n  // Empty is only valid when no response is expect (204)\n  const resEmptyIsExpected = res.text === '' && res.status === 204;\n  const resBodyEmpty = Object.keys(res.body).length === 0;\n  return !(res.type.includes('json') || resEmptyIsExpected) && resBodyEmpty;\n};\n")),(0,o.kt)("h2",{id:"axios"},"Axios"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SimpleResource, Method } from '@rest-hooks/rest';\nimport axios from 'axios';\n\nexport default abstract class AxiosResource extends SimpleResource {\n  /** Perform network request and resolve with json body */\n  static async fetch(\n    input: RequestInfo, init: RequestInit\n  ) {\n    return await axios[init.method](input, init.body);\n  }\n}\n")))}l.isMDXComponent=!0}}]);