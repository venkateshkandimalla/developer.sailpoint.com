"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[75469],{23702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>N,frontMatter:()=>f,metadata:()=>h,toc:()=>v});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>o(e,i(t)),k=(e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={id:"lookup",title:"Lookup",pagination_label:"Lookup",sidebar_label:"Lookup",sidebar_class_name:"lookup",keywords:["transforms","operations","lookup"],description:"Look up and return a key's matching value.",slug:"/extensibility/transforms/operations/lookup",tags:["Transforms","Transform Operations"]},c=void 0,h={unversionedId:"extensibility/transforms/operations/lookup",id:"extensibility/transforms/operations/lookup",title:"Lookup",description:"Look up and return a key's matching value.",source:"@site/docs/extensibility/transforms/operations/lookup.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/lookup",permalink:"/docs/extensibility/transforms/operations/lookup",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/lookup.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"lookup",title:"Lookup",pagination_label:"Lookup",sidebar_label:"Lookup",sidebar_class_name:"lookup",keywords:["transforms","operations","lookup"],description:"Look up and return a key's matching value.",slug:"/extensibility/transforms/operations/lookup",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Left Pad",permalink:"/docs/extensibility/transforms/operations/left-pad"},next:{title:"Lower",permalink:"/docs/extensibility/transforms/operations/lower"}},b={},v=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],y={toc:v},g="wrapper";function N(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(g,d(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",m({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the lookup transform to take in an incoming string value and compare it to a list of key-value pairs to determine which output to return. If the incoming data matches a key, the transform returns the corresponding value. If the incoming key does not match a key, the transform returns the table's optional default value."),(0,n.kt)("admonition",m({},{title:"Other Considerations",type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If the input does not match any key value within the table and no default value is provided, the transform will return an error."))),(0,n.kt)("h2",m({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"In addition to the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes, the structure of a lookup transform involves a ",(0,n.kt)("inlineCode",{parentName:"p"},"table")," entry of key-value pairs:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "table": {\n      "USA": "Americas",\n      "FRA": "EMEA",\n      "AUS": "APAC",\n      "default": "Unknown Region"\n    }\n  },\n  "type": "lookup",\n  "name": "Lookup Transform"\n}\n')),(0,n.kt)("h2",m({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"lookup"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"table")," - This is a JSON object of key-value pairs. The key is the string the transform tries to match to the input, and the value is the output string the transform returns if it matches the key."),(0,n.kt)("p",{parentName:"li"},":::tip A default key must be specified. Otherwise, an error will be returned if there are no matching values in your table. :::")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,'This transform tries to map a telephone area code to a city in Texas. If there is no area code in the four provided values, the transform will return the default value of "Unknown Area."'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "table": {\n      "512": "Austin",\n      "281": "Houston",\n      "214": "Dallas",\n      "210": "San Antonio",\n      "default": "Unknown Area"\n    }\n  },\n  "type": "lookup",\n  "name": "Lookup Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This transform extends the previous one to show how multiple key values can be mapped to the same output value. However, duplicate key values are not allowed, so this will throw an error."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "table": {\n      "512": "Austin",\n      "281": "Houston",\n      "713": "Houston",\n      "832": "Houston",\n      "214": "Dallas",\n      "210": "San Antonio"\n    }\n  },\n  "type": "lookup",\n  "name": "Test Lookup Transform"\n}\n')))}N.isMDXComponent=!0}}]);