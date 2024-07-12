"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[49267],{80696:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var n=i(3905),r=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,g=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&c(e,i,t[i]);if(l)for(var i of l(t))d.call(t,i)&&c(e,i,t[i]);return e},p=(e,t)=>a(e,s(t)),y=(e,t)=>{var i={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(i[n]=e[n]);return i};const m={id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/extensibility/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},u=void 0,f={unversionedId:"extensibility/event-triggers/early-access/identity-deleted",id:"extensibility/event-triggers/early-access/identity-deleted",title:"Identity Deleted",description:"Fires after an identity is deleted.",source:"@site/docs/extensibility/event-triggers/early-access/identity-deleted.md",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/triggers/identity-deleted",permalink:"/docs/extensibility/event-triggers/triggers/identity-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/identity-deleted.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"identity-deleted",title:"Identity Deleted",pagination_label:"Identity Deleted",sidebar_label:"Identity Deleted",sidebar_class_name:"identityDeleted",keywords:["event","trigger","identity","deleted","early access"],description:"Fires after an identity is deleted.",slug:"/extensibility/event-triggers/triggers/identity-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Early Access Event Triggers",permalink:"/docs/extensibility/event-triggers/early-access"},next:{title:"Source Account Created",permalink:"/docs/extensibility/event-triggers/triggers/source-account-created"}},v={},h=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],b={toc:h},k="wrapper";function w(e){var t=e,{components:r}=t,a=y(t,["components"]);return(0,n.kt)(k,p(g(g({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",g({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,n.kt)("h2",g({},{id:"event-context"}),"Event Context"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Flow",src:i(25250).Z,width:"1178",height:"229"})),(0,n.kt)("p",null,"Identity deleted event will occur when an identity meets all of the following requirements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No correlated accounts"),(0,n.kt)("li",{parentName:"ul"},"Not an owner of a role, access profile, application, source, or taskResult"),(0,n.kt)("li",{parentName:"ul"},"Not an owner or requester of a workItem"),(0,n.kt)("li",{parentName:"ul"},"Not a protected account or manager"),(0,n.kt)("li",{parentName:"ul"},"No assigned capabilities (ex. not an assigned cert reviewer)"),(0,n.kt)("li",{parentName:"ul"},"Not involved in any active certification as a target (its access is not being certified)")),(0,n.kt)("p",null,"After accounts are aggregated and the identity refresh process finds an identity that meets the above criteria, the associated identity is deleted from Identity Security Cloud. For more information, see ",(0,n.kt)("a",g({parentName:"p"},{href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045"}),"Configuring Correlation"),". The Identity deleted event contains any identity attributes as they are configured in the identity profile. For more information, see ",(0,n.kt)("a",g({parentName:"p"},{href:"https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877"}),"Mapping Identity Profiles"),"."),(0,n.kt)("admonition",g({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Identity Security Cloud will ",(0,n.kt)("strong",{parentName:"p"},"hide")," an identity from the identity list in the UI when the authoritative account is removed. This does not necessarily mean that the identity has been deleted. The identity will only be deleted when the above criteria are met. The deletion task run each night, so there will be a delay from when the criteria are met to when the identity will actually be deleted.")),(0,n.kt)("p",null,"This event trigger provides a flexible way to extend joiner-mover-leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."),(0,n.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow."),(0,n.kt)("li",{parentName:"ul"},"Notify a system to trigger another action (e.g. deactivate an employee\u2019s badge upon termination).")),(0,n.kt)("p",null,"This is an example input from this trigger:"),(0,n.kt)("pre",null,(0,n.kt)("code",g({parentName:"pre"},{className:"language-json"}),'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "attributes": {\n    "firstname": "John"\n  }\n}\n')),(0,n.kt)("h2",g({},{id:"additional-information-and-links"}),"Additional Information and Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,n.kt)("a",g({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}w.isMDXComponent=!0},25250:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-deleted-path-48c9bae187bac0382cda77be26264812.png"}}]);