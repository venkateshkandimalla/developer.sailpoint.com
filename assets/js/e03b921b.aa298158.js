"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11417],{40976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>v,frontMatter:()=>h,metadata:()=>k,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>i(e,s(t)),f=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/extensibility/transforms/operations/split",tags:["Transforms","Transform Operations"]},c=void 0,k={unversionedId:"extensibility/transforms/operations/split",id:"extensibility/transforms/operations/split",title:"Split",description:"Return the Nth element of a split array.",source:"@site/docs/extensibility/transforms/operations/split.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/split",permalink:"/docs/extensibility/transforms/operations/split",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/split.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/extensibility/transforms/operations/split",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Rule",permalink:"/docs/extensibility/transforms/operations/rule"},next:{title:"Static",permalink:"/docs/extensibility/transforms/operations/static"}},b={},y=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],g={toc:y},N="wrapper";function v(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,d(m(m({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",m({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Use the split transform to use a specific character or regex string as a delimiter and convert a single incoming string into an array of values. This transform then returns the Nth element of that array. This transform is often useful when you want to split combined names into their constituent parts or when you want to simplify an ordered list of values into a single attribute."),(0,n.kt)("h2",m({},{id:"transform-structure"}),"Transform Structure"),(0,n.kt)("p",null,"In addition to the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes, the split transform requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"delimiter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"index")," attributes. These parameters, respectively, tell the transform what to use as the pattern to split the string with and which entry in the resulting array of values you want it to return."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "delimiter": ",",\n    "index": 5\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')),(0,n.kt)("h2",m({},{id:"attributes"}),"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"split"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"delimiter")," - This can be either a single character or a regex expression. Transforms use it identify the break point between two substrings in the incoming data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"index")," - This is the integer value for the desired array element after the incoming data has been split into a list. The array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"throws")," - This boolean (true/false) value indicates whether an exception is thrown and returned as an output when an index is out of bounds with the resulting array (i.e., the provided ",(0,n.kt)("inlineCode",{parentName:"li"},"index")," value is larger than the size of the array).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'true - The transform returns "IndexOutOfBoundsException".'),(0,n.kt)("li",{parentName:"ul"},"false - The transform returns null."),(0,n.kt)("li",{parentName:"ul"},'If no throws value is provided, the transform defaults to true and returns an "IndexOutOfBoundsException".')))))),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"This transform takes the incoming attribute configured in the Identity Profile attribute UI, splits it based on the colon ",(0,n.kt)("inlineCode",{parentName:"p"},":")," character, and returns the second array element (array index 1)."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'Input: "abc:123"\nOutput: "123"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "delimiter": ":",\n    "index": 1\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform takes the explicit string provided, splits it based on the space (" ") character, and returns the fourth word (array index 3).'),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'Input: "The quick brown fox jumped over 10 lazy dogs"\nOutput: "fox"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "attributes": {\n    "input": "The quick brown fox jumped over 10 lazy dogs",\n    "delimiter": " ",\n    "index": 3,\n    "throws": true\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n')))}v.isMDXComponent=!0}}]);