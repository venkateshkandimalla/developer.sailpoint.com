"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[40130],{9776:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>h,contentTitle:()=>b,default:()=>T,frontMatter:()=>c,metadata:()=>k,toc:()=>g});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))l.call(e,r)&&m(t,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&m(t,r,e[r]);return t},d=(t,e)=>a(t,s(e)),f=(t,e)=>{var r={};for(var n in t)l.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&p.call(t,n)&&(r[n]=t[n]);return r};const c={id:"trim",title:"Trim",pagination_label:"Trim",sidebar_label:"Trim",sidebar_class_name:"trim",keywords:["transforms","operations","trim"],description:"Trim whitespaces from both the beginning and ending of input strings.",slug:"/extensibility/transforms/operations/trim",tags:["Transforms","Transform Operations"]},b=void 0,k={unversionedId:"extensibility/transforms/operations/trim",id:"extensibility/transforms/operations/trim",title:"Trim",description:"Trim whitespaces from both the beginning and ending of input strings.",source:"@site/docs/extensibility/transforms/operations/trim.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/trim",permalink:"/docs/extensibility/transforms/operations/trim",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/trim.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"trim",title:"Trim",pagination_label:"Trim",sidebar_label:"Trim",sidebar_class_name:"trim",keywords:["transforms","operations","trim"],description:"Trim whitespaces from both the beginning and ending of input strings.",slug:"/extensibility/transforms/operations/trim",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Substring",permalink:"/docs/extensibility/transforms/operations/substring"},next:{title:"Upper",permalink:"/docs/extensibility/transforms/operations/upper"}},h={},g=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],v={toc:g},y="wrapper";function T(t){var e=t,{components:r}=e,i=f(e,["components"]);return(0,n.kt)(y,d(u(u({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the trim transform to trim whitespaces from both the beginning and ending of input strings."),(0,n.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"The trim transform only requires the transform's ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')),(0,n.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"trim"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,'This transform removes the whitespace before the " Vice President" input.'),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: " Vice President"\nOutput: "Vice President"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": " Vice President"\n      },\n      "type": "static"\n    }\n  },\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform removes the whitespace after the "Austin, Texas" input.'),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "Austin, Texas "\nOutput: "Austin, Texas"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "Austin, Texas "\n      },\n      "type": "static"\n    }\n  },\n  "type": "trim",\n  "name": "Trim Transform"\n}\n')))}T.isMDXComponent=!0}}]);