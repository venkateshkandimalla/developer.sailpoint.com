"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69194],{17377:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(67294),a=n(86010),r=n(76828),i=n(39130),c=n(35096),l=n(33084);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=n(99603),d=n(21702);function u({href:e,children:t}){return o.createElement(i.default,{href:e,className:(0,a.default)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:n,description:r}){return o.createElement(u,{href:e},o.createElement("h2",{className:(0,a.default)("text--truncate",s.cardTitle),title:n},t,n),r&&o.createElement("p",{className:s.cardDescription,title:r},r))}function y({item:e}){var t,n;const a=(0,r.Wl)(e);return a?o.createElement(p,{href:a,icon:o.createElement(m.G,{icon:d.cC_,className:s.docCardIcon}),title:e.label,description:null!=(n=null==(t=e.customProps)?void 0:t.description)?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,n;const a=(0,c.Z)(e.href)?o.createElement(m.G,{icon:d.FL8,className:s.docCardIcon}):o.createElement(m.G,{icon:d.wlW,className:s.docCardIcon}),i=(0,r.xz)(null!=(t=e.docId)?t:void 0);return o.createElement(p,{href:e.href,icon:a,title:e.label,description:null!=(n=e.description)?n:null==i?void 0:i.description})}function h({item:e}){switch(e.type){case"link":return o.createElement(f,{item:e});case"category":return o.createElement(y,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&N(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&N(e,n,t[n]);return e};function w({className:e}){const t=(0,r.jA)();return o.createElement(C,{items:t.items,className:e})}function C(e){const{items:t,className:n}=e;if(!t)return o.createElement(w,E({},e));const i=(0,r.MN)(t);return o.createElement("section",{className:(0,a.default)("row",n)},i.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(h,{item:e})))))}},57811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>w,frontMatter:()=>h,metadata:()=>b,toc:()=>k});var o=n(3905),a=n(17377),r=n(76828),i=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&u(e,n,t[n]);return e},y=(e,t)=>c(e,l(t)),f=(e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n};const h={id:"non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",custom_edit_url:null},g=void 0,b={unversionedId:"api/v3/non-employee-lifecycle-management",id:"api/v3/non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",source:"@site/docs/api/v3/non-employee-lifecycle-management.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/non-employee-lifecycle-management",permalink:"/docs/api/v3/non-employee-lifecycle-management",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"non-employee-lifecycle-management",title:"Non-Employee Lifecycle Management",description:"Non-Employee Lifecycle Management",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create and send user token",permalink:"/docs/api/v3/create-send-token"},next:{title:"Create Non-Employee Record",permalink:"/docs/api/v3/create-non-employee-record"}},v={},k=[],N={toc:k},E="wrapper";function w(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,o.kt)(E,y(p(p({},N),i),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to implement non-employee lifecycle management functionality.\nWith this functionality in place, administrators can create non-employee records and configure them for use in their organizations.\nThis allows organizations to provide secure access to non-employees and control that access. "),(0,o.kt)("p",null,"The 'non-employee' term refers to any consultant, contractor, intern, or other user in an organization who is not a full-time permanent employee.\nOrganizations can track non-employees' access and activity in Identity Security Cloud by creating and maintaining non-employee sources.\nOrganizations can have a maximum of 50 non-employee sources. "),(0,o.kt)("p",null,"By using SailPoint's Non-Employee Lifecycle Management functionality, you agree to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SailPoint is not responsible for storing sensitive data.\nYou may only add account attributes to non-employee identities that are necessary for business operations and are consistent with your contractual limitations on data that may be sent or stored in Identity Security Cloud.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You are responsible for regularly downloading your list of non-employee accounts for all the sources you create and storing this list of accounts in a managed location to maintain an authoritative system of record and backup data for these accounts."))),(0,o.kt)("p",null,"To manage non-employees in Identity Security Cloud, administrators must create a non-employee source and add accounts to the source. "),(0,o.kt)("p",null,"To create a non-employee source in Identity Security Cloud, administrators must use the Admin panel to go to Connections > Sources.\nThey must then specify 'Non-Employee' in the 'Source Type' field.\nRefer to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#creating-a-non-employee-source"}),"Creating a Non-Employee Source")," for more details about how to create non-employee sources."),(0,o.kt)("p",null,"To add accounts to a non-employee source in Identity Security Cloud, administrators can select the non-employee source and add the accounts.\nThey can also use the 'Manage Non-Employees' widget on their user dashboards to reach the list of sources and then select the non-employee source they want to add the accounts to. "),(0,o.kt)("p",null,"Administrators can either add accounts individually or in bulk. Each non-employee source can have a maximum of 20,000 accounts.\nTo add accounts in bulk, they must select the 'Bulk Upload' option and upload a CSV file.\nRefer to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html#adding-accounts"}),"Adding Accounts")," for more details about how to add accounts to non-employee sources."),(0,o.kt)("p",null,"Once administrators have created the non-employee source and added accounts to it, they can create identity profiles to generate identities for the non-employee accounts and manage the non-employee identities the same way they would any other identities. "),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",p({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/common/non-employee-mgmt.html"}),"Managing Non-Employee Sources and Accounts")," for more information about non-employee lifecycle management."),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}w.isMDXComponent=!0}}]);