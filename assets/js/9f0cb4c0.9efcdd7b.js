"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[91615],{17377:(e,t,r)=>{r.d(t,{Z:()=>w});var s=r(67294),i=r(86010),a=r(76828),n=r(39130),c=r(35096),l=r(33084);const o={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var g=r(99603),d=r(21702);function p({href:e,children:t}){return s.createElement(n.default,{href:e,className:(0,i.default)("card padding--lg",o.cardContainer)},t)}function u({href:e,icon:t,title:r,description:a}){return s.createElement(p,{href:e},s.createElement("h2",{className:(0,i.default)("text--truncate",o.cardTitle),title:r},t,r),a&&s.createElement("p",{className:o.cardDescription,title:a},a))}function m({item:e}){var t,r;const i=(0,a.Wl)(e);return i?s.createElement(u,{href:i,icon:s.createElement(g.G,{icon:d.cC_,className:o.docCardIcon}),title:e.label,description:null!=(r=null==(t=e.customProps)?void 0:t.description)?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y({item:e}){var t,r;const i=(0,c.Z)(e.href)?s.createElement(g.G,{icon:d.FL8,className:o.docCardIcon}):s.createElement(g.G,{icon:d.wlW,className:o.docCardIcon}),n=(0,a.xz)(null!=(t=e.docId)?t:void 0);return s.createElement(u,{href:e.href,icon:i,title:e.label,description:null!=(r=e.description)?r:null==n?void 0:n.description})}function v({item:e}){switch(e.type){case"link":return s.createElement(y,{item:e});case"category":return s.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,f=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))E.call(t,r)&&x(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&x(e,r,t[r]);return e};function k({className:e}){const t=(0,a.jA)();return s.createElement(w,{items:t.items,className:e})}function w(e){const{items:t,className:r}=e;if(!t)return s.createElement(k,T({},e));const n=(0,a.MN)(t);return s.createElement("section",{className:(0,i.default)("row",r)},n.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(v,{item:e})))))}},3228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>b,default:()=>k,frontMatter:()=>v,metadata:()=>f,toc:()=>h});var s=r(3905),i=r(17377),a=r(76828),n=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>c(e,l(t)),y=(e,t)=>{var r={};for(var s in e)g.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&o)for(var s of o(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r};const v={id:"early-access-event-triggers",title:"Early Access Event Triggers",pagination_label:"Early Access Event Triggers",sidebar_label:"Early Access Event Triggers",sidebar_class_name:"earlyAccessEventTriggers",keywords:["event","trigger","early access"],description:"Event triggers that require a support ticket to enable.",sidebar_position:8,slug:"/extensibility/event-triggers/early-access",tags:["Event Triggers","Early Access Event Triggers"]},b=void 0,f={unversionedId:"extensibility/event-triggers/early-access/early-access-event-triggers",id:"extensibility/event-triggers/early-access/early-access-event-triggers",title:"Early Access Event Triggers",description:"Event triggers that require a support ticket to enable.",source:"@site/docs/extensibility/event-triggers/early-access/index.mdx",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/early-access",permalink:"/docs/extensibility/event-triggers/early-access",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/index.mdx",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:8,frontMatter:{id:"early-access-event-triggers",title:"Early Access Event Triggers",pagination_label:"Early Access Event Triggers",sidebar_label:"Early Access Event Triggers",sidebar_class_name:"earlyAccessEventTriggers",keywords:["event","trigger","early access"],description:"Event triggers that require a support ticket to enable.",sidebar_position:8,slug:"/extensibility/event-triggers/early-access",tags:["Event Triggers","Early Access Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"VA Cluster Status Change",permalink:"/docs/extensibility/event-triggers/triggers/va-cluster-status-change"},next:{title:"Identity Deleted",permalink:"/docs/extensibility/event-triggers/triggers/identity-deleted"}},E={},h=[],x={toc:h},T="wrapper";function k(e){var t=e,{components:r}=t,n=y(t,["components"]);return(0,s.kt)(T,m(u(u({},x),n),{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"New event triggers undergoing active development may appear in the early access event trigger list. You can use these triggers by submitting a support ticket to have them enabled in your tenant. Because these triggers are early access, they are subject to change at any time."),(0,s.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);