"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28199],{17377:(e,t,r)=>{r.d(t,{Z:()=>k});var s=r(67294),i=r(86010),n=r(76828),a=r(39130),o=r(35096),l=r(33084);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=r(99603),u=r(21702);function m({href:e,children:t}){return s.createElement(a.default,{href:e,className:(0,i.default)("card padding--lg",c.cardContainer)},t)}function f({href:e,icon:t,title:r,description:n}){return s.createElement(m,{href:e},s.createElement("h2",{className:(0,i.default)("text--truncate",c.cardTitle),title:r},t,r),n&&s.createElement("p",{className:c.cardDescription,title:n},n))}function p({item:e}){var t,r;const i=(0,n.Wl)(e);return i?s.createElement(f,{href:i,icon:s.createElement(d.G,{icon:u.cC_,className:c.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function b({item:e}){var t,r;const i=(0,o.Z)(e.href)?s.createElement(d.G,{icon:u.FL8,className:c.docCardIcon}):s.createElement(d.G,{icon:u.wlW,className:c.docCardIcon}),a=(0,n.xz)(null!=(t=e.docId)?t:void 0);return s.createElement(f,{href:e.href,icon:i,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function g({item:e}){switch(e.type){case"link":return s.createElement(b,{item:e});case"category":return s.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,h=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&x(e,r,t[r]);if(h)for(var r of h(t))w.call(t,r)&&x(e,r,t[r]);return e};function G({className:e}){const t=(0,n.jA)();return s.createElement(k,{items:t.items,className:e})}function k(e){const{items:t,className:r}=e;if(!t)return s.createElement(G,E({},e));const a=(0,n.MN)(t);return s.createElement("section",{className:(0,i.default)("row",r)},a.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(g,{item:e})))))}},1336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>G,frontMatter:()=>g,metadata:()=>h,toc:()=>w});var s=r(3905),i=r(17377),n=r(76828),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&m(e,r,t[r]);return e},p=(e,t)=>o(e,l(t)),b=(e,t)=>{var r={};for(var s in e)d.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&c)for(var s of c(e))t.indexOf(s)<0&&u.call(e,s)&&(r[s]=e[s]);return r};const g={id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_class_name:"transforms",keywords:["transforms","guides"],description:"Transform Guides",slug:"/extensibility/transforms/guides",tags:["Transforms","Guides"]},y="Transform Guides",h={unversionedId:"extensibility/transforms/guides/guides",id:"extensibility/transforms/guides/guides",title:"Guides",description:"Transform Guides",source:"@site/docs/extensibility/transforms/guides/index.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides",permalink:"/docs/extensibility/transforms/guides",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/index.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Guides",permalink:"/docs/tags/guides"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"guides",title:"Guides",pagination_label:"Guides",sidebar_label:"Guides",sidebar_class_name:"transforms",keywords:["transforms","guides"],description:"Transform Guides",slug:"/extensibility/transforms/guides",tags:["Transforms","Guides"]},sidebar:"openApiSidebar",previous:{title:"Transforms",permalink:"/docs/extensibility/transforms"},next:{title:"Your First Transform",permalink:"/docs/extensibility/transforms/guides/your-first-transform"}},v={},w=[],x={toc:w},E="wrapper";function G(e){var t=e,{components:r}=t,a=b(t,["components"]);return(0,s.kt)(E,p(f(f({},x),a),{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",f({},{id:"transform-guides"}),"Transform Guides"),(0,s.kt)("p",null,"Not sure how to use transforms yet? Read these guides to see how you can use transforms and learn how to get started!"),(0,s.kt)(i.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}G.isMDXComponent=!0}}]);