"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33318],{85162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),r=t(86010);const s="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(87462),r=t(67294),s=t(86010),o=t(72389),l=t(67392),i=t(7094),u=t(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var a,t;const{lazy:o,block:p,defaultValue:m,values:g,groupId:v,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=g?g:h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),b=(0,l.l)(k,((e,a)=>e.value===a.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:null!=(a=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[E,S]=(0,r.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==E&&k.some((a=>a.value===e))&&S(e)}const Z=e=>{const a=e.currentTarget,t=P.indexOf(a),n=k[t].value;n!==E&&(x(a),S(n),null!=v&&w(v,String(n)))},R=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=P.indexOf(e.currentTarget)+1;t=null!=(n=P[a])?n:P[0];break}case"ArrowLeft":{var r;const a=P.indexOf(e.currentTarget)-1;t=null!=(r=P[a])?r:P[P.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},k.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:e=>P.push(e),onKeyDown:R,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===a})}),null!=t?t:a)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function m(e){const a=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},96497:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(65488),r=t(85162),s=t(67294),o=t(75690);function l(e){let{pkgs:a,dev:t=!1}=e;return s.createElement(n.Z,{defaultValue:"npm",groupId:"node-packages-program",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}]},s.createElement(r.Z,{value:"yarn"},s.createElement(o.Z,{className:"language-bash"},"yarn add ",t?"--dev ":"",a)),s.createElement(r.Z,{value:"npm"},s.createElement(o.Z,{className:"language-bash"},"npm install --save",t?"Dev ":""," ",a)))}},56922:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),r=t(72887);const s={React:n,...n,...r}},32459:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(87462),r=(t(67294),t(3905)),s=t(96497);const o={title:"Usage without Suspense"},l=void 0,i={unversionedId:"guides/no-suspense",id:"version-5.0/guides/no-suspense",title:"Usage without Suspense",description:"Some libraries you work with may take a loading or error state.",source:"@site/versioned_docs/version-5.0/guides/no-suspense.md",sourceDirName:"guides",slug:"/guides/no-suspense",permalink:"/docs/5.0/guides/no-suspense",draft:!1,editUrl:"https://github.com/coinbase/rest-hooks/edit/master/docs/guides/no-suspense.md",tags:[],version:"5.0",lastUpdatedBy:"Nathaniel Tucker",lastUpdatedAt:1630954311,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{title:"Usage without Suspense"},sidebar:"version-5.0/docs",previous:{title:"Usage with class components",permalink:"/docs/5.0/guides/class-components"},next:{title:"Legacy browser support",permalink:"/docs/5.0/guides/legacy-browser"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Hook usage",id:"hook-usage",level:2},{value:"<code>resources/ProfileResource.ts</code>",id:"resourcesprofileresourcets",level:4},{value:"<code>ProfileList.tsx</code>",id:"profilelisttsx",level:4},{value:"API",id:"api",level:2}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some libraries you work with may take a ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/card/#components-card-demo-loading"},"loading")," or error state.\nIn these cases you might want a boolean ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," instead of yielding to Suspense."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStatefulResource()")," hook has been published under ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rest-hooks/legacy"},"@rest-hooks/legacy"),"\nfor this purpose."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(s.Z,{pkgs:"@rest-hooks/legacy",mdxType:"PkgTabs"}),(0,r.kt)("h2",{id:"hook-usage"},"Hook usage"),(0,r.kt)("h4",{id:"resourcesprofileresourcets"},(0,r.kt)("inlineCode",{parentName:"h4"},"resources/ProfileResource.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class ProfileResource extends Resource {\n  readonly id: number | undefined = undefined;\n  readonly img: string = '';\n  readonly fullName: string = '';\n  readonly bio: string = '';\n\n  pk() {\n    return this.id?.toString();\n  }\n  static urlRoot = '/profiles';\n}\n")),(0,r.kt)("h4",{id:"profilelisttsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"ProfileList.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStatefulResource } from '@rest-hooks/legacy';\nimport { Skeleton, Card, Avatar } from 'antd';\nimport ProfileResource from 'resources/ProfileResource';\n\nconst { Meta } = Card;\n\nfunction ProfileList() {\n  const { data, loading, error } = useStatefulResource(\n    ProfileResource.detail(),\n    {},\n  );\n  if (error) return <div>Error {error.status}</div>\n  return (\n    <Card style={{ width: 300, marginTop: 16 }} loading={loading}>\n      <Meta\n        avatar={\n          <Avatar src={data.img} />\n        }\n        title={data.fullName}\n        description={data.bio}\n      />\n    </Card>\n  );\n}\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function useStatefulResource<Params extends Readonly<object>, S extends Schema>(\n  endpoint: ReadEndpoint<(p:Params) => Promise<any>, S>, params: Params | null\n  ): {\n    data: DenormalizeNullable<S>;\n    loading: boolean;\n    error: (Params extends null ? undefined : Error) | undefined;\n};\n")))}p.isMDXComponent=!0}}]);