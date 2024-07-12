"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[18199],{4817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>c,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&m(e,r,t[r]);return e},f=(e,t)=>s(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const c={id:"reference",title:"Reference",pagination_label:"Reference",sidebar_label:"Reference",sidebar_class_name:"reference",keywords:["transforms","operations","reference"],description:"Reuse a transform that has already been written.",slug:"/extensibility/transforms/operations/reference",tags:["Transforms","Transform Operations"]},h=void 0,k={unversionedId:"extensibility/transforms/operations/reference",id:"extensibility/transforms/operations/reference",title:"Reference",description:"Reuse a transform that has already been written.",source:"@site/docs/extensibility/transforms/operations/reference.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/reference",permalink:"/docs/extensibility/transforms/operations/reference",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/reference.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"reference",title:"Reference",pagination_label:"Reference",sidebar_label:"Reference",sidebar_class_name:"reference",keywords:["transforms","operations","reference"],description:"Reuse a transform that has already been written.",slug:"/extensibility/transforms/operations/reference",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Random Numeric",permalink:"/docs/extensibility/transforms/operations/random-numeric"},next:{title:"Replace All",permalink:"/docs/extensibility/transforms/operations/replace-all"}},b={},y=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],g={toc:y},v="wrapper";function w(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,f(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",u({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the reference transform to reuse a transform that has already been written within another transform. This transform is often useful when you want to repeat the same logic multiple times within other transforms. This transform allows you to maintain only one transform and have it propagate through to other implementations of that logic."),(0,n.kt)("h2",u({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"In addition to the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes, the structure of a reference transform requires the name of the transform you want to reference specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"attributes.id")," key:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "id": "Build Display Name"\n  },\n  "type": "reference",\n  "name": "Reference Transform"\n}\n')),(0,n.kt)("h2",u({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"reference"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"attributes.id")," - This specifies the name of the pre-existing transform you want to use within your current transform."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,'If you had a "Get Worker Type" transform that evaluated multiple pieces of data to determine whether a user is an employee or a contractor, this transform would output the result of that transform just as if the logic were contained directly within this transform.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "id": "Get Worker Type"\n  },\n  "type": "reference",\n  "name": "Reference Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform builds the user\'s display name, adds a hyphen to the end, and then adds the evaluated worker type from the earlier transform to build a string that would look something like "John Smith - Employee".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "id": "Get Display Name"\n        },\n        "type": "reference"\n      },\n      " - ",\n      {\n        "attributes": {\n          "id": "Get Worker Type"\n        },\n        "type": "reference"\n      }\n    ]\n  },\n  "type": "concat",\n  "name": "Reference Transform"\n}\n')))}w.isMDXComponent=!0}}]);