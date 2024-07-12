"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69975],{82592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>A,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&l(e,r,t[r]);return e},g=(e,t)=>a(e,c(t)),p=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/extensibility/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},y=void 0,v={unversionedId:"extensibility/event-triggers/early-access/source-account-created",id:"extensibility/event-triggers/early-access/source-account-created",title:"Source Account Created",description:"Fires after a source account is created.",source:"@site/docs/extensibility/event-triggers/early-access/source-account-created.md",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/triggers/source-account-created",permalink:"/docs/extensibility/event-triggers/triggers/source-account-created",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/source-account-created.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"source-account-created",title:"Source Account Created",pagination_label:"Source Account Created",sidebar_label:"Source Account Created",sidebar_class_name:"sourceAccountCreated",keywords:["event","trigger","source","account","created","early access"],description:"Fires after a source account is created.",slug:"/extensibility/event-triggers/triggers/source-account-created",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Identity Deleted",permalink:"/docs/extensibility/event-triggers/triggers/identity-deleted"},next:{title:"Source Account Deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-account-deleted"}},b={},f=[{value:"Event Context",id:"event-context",level:2},{value:"Additional information and links",id:"additional-information-and-links",level:2}],h={toc:f},k="wrapper";function A(e){var t=e,{components:r}=t,i=p(t,["components"]);return(0,n.kt)(k,g(u(u({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",u({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,n.kt)("h2",u({},{id:"event-context"}),"Event Context"),(0,n.kt)("p",null,"Source Account Created events occur after a new account is detected during an account aggregration and refresh from a source. This trigger cannot determine whether account creation happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin."),(0,n.kt)("p",null,"Use this event trigger to watch for new accounts with highly privileged access, such as an account created in Active Directory Domain Admins."),(0,n.kt)("p",null,"This is an example input from this trigger:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n')),(0,n.kt)("h2",u({},{id:"additional-information-and-links"}),"Additional information and links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,n.kt)("a",u({parentName:"li"},{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"}),"FIRE_AND_FORGET"))))}A.isMDXComponent=!0}}]);