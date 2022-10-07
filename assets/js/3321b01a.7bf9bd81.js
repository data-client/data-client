"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Usage without Suspense",id:"no-suspense",original_id:"no-suspense"},s=void 0,i={unversionedId:"guides/no-suspense",id:"version-2.2/guides/no-suspense",title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-2.2/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/2.2/guides/no-suspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"2.2",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Usage without Suspense",id:"no-suspense",original_id:"no-suspense"},sidebar:"version-2.2/docs",previous:{title:"Usage with class components",permalink:"/docs/2.2/guides/class-components"},next:{title:"API Reference",permalink:"/docs/2.2/api/"}},l={},u=[{value:"Sample Hook",id:"sample-hook",level:2},{value:"<code>useStatefulResource.tsx</code>",id:"usestatefulresourcetsx",level:4},{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>resources/ProfileResource.ts</code>",id:"resourcesprofileresourcets",level:4},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some libraries you work with may take a ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,o.kt)("p",null,"In any case, here's a sample hook you can adapt to use that information in any\nway you please."),(0,o.kt)("h2",{id:"sample-hook"},"Sample Hook"),(0,o.kt)("h4",{id:"usestatefulresourcetsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"useStatefulResource.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useRetrieve, useCache, useError, Schema, ReadShape } from 'rest-hooks';\n\n/** If the invalidIfStale option is set we suspend if resource has expired */\nfunction hasUsableData<\n  S extends Schema,\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void\n>(\n  resource: RequestResource<ReadShape<S, Params, Body>> | null,\n  fetchShape: ReadShape<S, Params, Body>,\n) {\n  return !(\n    (fetchShape.options && fetchShape.options.invalidIfStale) ||\n    !resource\n  );\n}\n\n/** Ensure a resource is available; loading and error returned explicitly. */\nfunction useStatefulResource<\n  Params extends Readonly<object>,\n  Body extends Readonly<object | string> | void,\n  S extends Schema\n>(fetchShape: ReadShape<S, Params, Body>, params: Params | null) {\n  let maybePromise = useRetrieve(fetchShape, params);\n  const resource = useCache(fetchShape, params);\n\n  const loading =\n    !hasUsableData(resource, fetchShape) &&\n    maybePromise &&\n    typeof maybePromise.then === 'function';\n\n  let error = useError(fetchShape, params, resource);\n\n  return {\n    data: resource as NonNullable<typeof resource>,\n    loading,\n    error,\n  };\n}\n")),(0,o.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,o.kt)("h4",{id:"resourcesprofileresourcets"},(0,o.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | null = null;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id;\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,o.kt)("h4",{id:"profilelisttsx"},(0,o.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nimport useStatefulResource from './useStatefulResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detailShape(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")))}p.isMDXComponent=!0}}]);