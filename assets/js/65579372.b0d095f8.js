"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75787],{47515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>T,frontMatter:()=>b,metadata:()=>v,toc:()=>m});var i=r(3905),s=Object.defineProperty,n=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&l(e,r,t[r]);return e},d=(e,t)=>n(e,o(t)),y=(e,t)=>{var r={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&p.call(e,i)&&(r[i]=e[i]);return r};const b={id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/extensibility/event-triggers/trigger-types",tags:["Event Triggers"]},u=void 0,v={unversionedId:"extensibility/event-triggers/trigger-types",id:"extensibility/event-triggers/trigger-types",title:"Trigger Types",description:"These are the different trigger types you can use.",source:"@site/docs/extensibility/event-triggers/trigger-types.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/trigger-types",permalink:"/docs/extensibility/event-triggers/trigger-types",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/trigger-types.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:1,frontMatter:{id:"trigger-types",title:"Trigger Types",pagination_label:"Trigger Types",sidebar_label:"Trigger Types",sidebar_position:1,sidebar_class_name:"triggerTypes",keywords:["event","trigger","types"],description:"These are the different trigger types you can use.",slug:"/extensibility/event-triggers/trigger-types",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Event Triggers",permalink:"/docs/extensibility/event-triggers"},next:{title:"Preparing a Subscriber Service",permalink:"/docs/extensibility/event-triggers/preparing-subscriber-service"}},h={},m=[{value:"Fire and Forget",id:"fire-and-forget",level:2},{value:"Response Required",id:"response-required",level:2}],f={toc:m},w="wrapper";function T(e){var t=e,{components:r}=t,s=y(t,["components"]);return(0,i.kt)(w,d(c(c({},f),s),{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",c({},{id:"fire-and-forget"}),"Fire and Forget"),(0,i.kt)("p",null,"A fire and forget trigger only supports one-way communication with subscribers. Its only job is to forward each event it receives to each subscribing service. This trigger type doesn't wait for a response from subscribers. It has no way of knowing whether subscribers actually receive the event, and it doesn't have any mechanism for resending events. Think of this trigger type as live television. You can only see what is happening in real-time. You cannot rewind the live feed or interact with the broadcast in any way. This trigger type is the simplest and most common trigger type among SailPoint's event triggers."),(0,i.kt)("admonition",c({},{type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"Fire and forget triggers can have a maximum of 50 subscribers per event.")),(0,i.kt)("h2",c({},{id:"response-required"}),"Response Required"),(0,i.kt)("p",null,"A response required trigger allows two-way communication between the trigger service and the subscriber. This trigger type expects a response from the subscriber with directions about how to proceed with the event. For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request. This trigger type allows subscribers to not only receive events in real-time, but to act on them as well."),(0,i.kt)("admonition",c({},{type:"caution"}),(0,i.kt)("p",{parentName:"admonition"},"Response required triggers can only have one subscriber per event.")))}T.isMDXComponent=!0}}]);