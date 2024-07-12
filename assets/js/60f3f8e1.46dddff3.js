"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32989],{12760:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))l.call(e,a)&&d(t,a,e[a]);if(o)for(var a of o(e))p.call(e,a)&&d(t,a,e[a]);return t},m=(t,e)=>i(t,s(e)),h=(t,e)=>{var a={};for(var r in t)l.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&p.call(t,r)&&(a[r]=t[r]);return a};const g={id:"right-pad",title:"Right Pad",pagination_label:"Right Pad",sidebar_label:"Right Pad",sidebar_class_name:"rightPad",keywords:["transforms","operations","right pad"],description:"Add padding to the right of an incoming string.",slug:"/extensibility/transforms/operations/right-pad",tags:["Transforms","Transform Operations"]},c=void 0,f={unversionedId:"extensibility/transforms/operations/right-pad",id:"extensibility/transforms/operations/right-pad",title:"Right Pad",description:"Add padding to the right of an incoming string.",source:"@site/docs/extensibility/transforms/operations/right-pad.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/right-pad",permalink:"/docs/extensibility/transforms/operations/right-pad",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/right-pad.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"right-pad",title:"Right Pad",pagination_label:"Right Pad",sidebar_label:"Right Pad",sidebar_class_name:"rightPad",keywords:["transforms","operations","right pad"],description:"Add padding to the right of an incoming string.",slug:"/extensibility/transforms/operations/right-pad",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"RFC5646",permalink:"/docs/extensibility/transforms/operations/rfc-5646"},next:{title:"Rule",permalink:"/docs/extensibility/transforms/operations/rule"}},k={},b=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],y={toc:b},N="wrapper";function v(t){var e=t,{components:a}=e,n=h(e,["components"]);return(0,r.kt)(N,m(u(u({},y),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Use the right pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems."),(0,r.kt)("admonition",u({},{title:"Other Considerations",type:"note"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If the input to the right pad transform is null, the transform returns a null value."))),(0,r.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,r.kt)("p",null,"In addition to the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes, the right pad transform requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," attribute, which tells the transform how many characters to pad the incoming string to."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "0",\n    "length": "5"\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n')),(0,r.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"rightPad"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"length")," - This is an integer value for the final output string's desired length."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"padding")," - This string value represents the character the transform will pad the incoming data to to get to the desired length.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If no padding value is provided, the transform defaults to a single space (" ") character for padding.')))))),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,'This transform takes the incoming attribute configured in the Identity Profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the right.'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "1234"\nOutput: "12340000"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "0",\n    "length": "8"\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,'This example takes the user\'s employeeID attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the right.'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'Input: "1234"\nOutput: "1234xxx"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "padding": "x",\n    "length": "7",\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "employeeID"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n')))}v.isMDXComponent=!0}}]);