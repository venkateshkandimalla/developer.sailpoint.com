"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[42116],{17377:(e,t,r)=>{r.d(t,{Z:()=>P});var i=r(67294),a=r(86010),n=r(76828),o=r(39130),c=r(35096),s=r(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=r(99603),u=r(21702);function d({href:e,children:t}){return i.createElement(o.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},t)}function m({href:e,icon:t,title:r,description:n}){return i.createElement(d,{href:e},i.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},t,r),n&&i.createElement("p",{className:l.cardDescription,title:n},n))}function f({item:e}){var t,r;const a=(0,n.Wl)(e);return a?i.createElement(m,{href:a,icon:i.createElement(p.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g({item:e}){var t,r;const a=(0,c.Z)(e.href)?i.createElement(p.G,{icon:u.FL8,className:l.docCardIcon}):i.createElement(p.G,{icon:u.wlW,className:l.docCardIcon}),o=(0,n.xz)(null!=(t=e.docId)?t:void 0);return i.createElement(m,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==o?void 0:o.description})}function b({item:e}){switch(e.type){case"link":return i.createElement(g,{item:e});case"category":return i.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&E(e,r,t[r]);if(v)for(var r of v(t))I.call(t,r)&&E(e,r,t[r]);return e};function w({className:e}){const t=(0,n.jA)();return i.createElement(P,{items:t.items,className:e})}function P(e){const{items:t,className:r}=e;if(!t)return i.createElement(w,O({},e));const o=(0,n.MN)(t);return i.createElement("section",{className:(0,a.default)("row",r)},o.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}},22:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>I});var i=r(3905),a=r(17377),n=r(76828),o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&d(e,r,t[r]);return e},f=(e,t)=>c(e,s(t)),g=(e,t)=>{var r={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&u.call(e,i)&&(r[i]=e[i]);return r};const b={id:"iai-peer-group-strategies",title:"IAI Peer Group Strategies",description:"IAI Peer Group Strategies",custom_edit_url:null},y=void 0,v={unversionedId:"api/beta/iai-peer-group-strategies",id:"api/beta/iai-peer-group-strategies",title:"IAI Peer Group Strategies",description:"IAI Peer Group Strategies",source:"@site/docs/api/beta/iai-peer-group-strategies.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/iai-peer-group-strategies",permalink:"/docs/api/beta/iai-peer-group-strategies",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"iai-peer-group-strategies",title:"IAI Peer Group Strategies",description:"IAI Peer Group Strategies",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get identity outlier contibuting feature summary",permalink:"/docs/api/beta/get-outlier-contributing-feature-summary"},next:{title:"Identity Outliers List",permalink:"/docs/api/beta/get-peer-group-outliers"}},h={},I=[],E={toc:I},O="wrapper";function w(e){var t=e,{components:r}=t,o=g(t,["components"]);return(0,i.kt)(O,f(m(m({},E),o),{components:r,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);