"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8287],{87982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>y,metadata:()=>f,toc:()=>b});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const y={id:"cli-template-report",title:"Report Template",pagination_label:"CLI Templates Report",sidebar_label:"Report",sidebar_position:10,sidebar_class_name:"cli-template-report",keywords:["cli","template","report"],description:"Learn about the commands you can use to run report templates from the CLI.",slug:"/tools/cli/templates/report",tags:["CLI"]},h=void 0,f={unversionedId:"tools/cli/Templates/cli-template-report",id:"tools/cli/Templates/cli-template-report",title:"Report Template",description:"Learn about the commands you can use to run report templates from the CLI.",source:"@site/docs/tools/cli/Templates/report.md",sourceDirName:"tools/cli/Templates",slug:"/tools/cli/templates/report",permalink:"/docs/tools/cli/templates/report",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/Templates/report.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:10,frontMatter:{id:"cli-template-report",title:"Report Template",pagination_label:"CLI Templates Report",sidebar_label:"Report",sidebar_position:10,sidebar_class_name:"cli-template-report",keywords:["cli","template","report"],description:"Learn about the commands you can use to run report templates from the CLI.",slug:"/tools/cli/templates/report",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI Workflows",permalink:"/docs/tools/cli/workflow"},next:{title:"CLI Templates Search",permalink:"/docs/tools/cli/templates/search"}},g={},b=[],k={toc:b},v="wrapper";function w(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(v,d(c(c({},k),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use report templates to run sets of simple, predefined search queries from the CLI. Reports are most useful when you don't care about the search results returned from a query and you only want to know the count of results."),(0,n.kt)("p",null,"This is an example of a report template:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "name": "provisioning-and-security",\n    "description": "All account unlocks in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "queries": [\n      {\n        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",\n        "queryTitle": "Provisioning Events for the last {{days}} days"\n      },\n      {\n        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",\n        "queryTitle": "User Unlocks for the last {{days}} days"\n      }\n    ]\n  }\n]\n')),(0,n.kt)("p",null,"This is the report template anatomy:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "name": "provisioning-and-security",\n')),(0,n.kt)("p",null,"This is the report template's name."),(0,n.kt)("p",null,"It displays in the template list when you run ",(0,n.kt)("inlineCode",{parentName:"p"},"sail report"),"."),(0,n.kt)("p",null,"You can also provide the name as an argument: ",(0,n.kt)("inlineCode",{parentName:"p"},"sail report provisioning-and-security")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'    "description": "All account unlocks in the tenant for a given time range",\n')),(0,n.kt)("p",null,"This is the report template's description."),(0,n.kt)("p",null,"It displays following the template name in the ",(0,n.kt)("inlineCode",{parentName:"p"},"sail report")," list."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'    "variables": [{"name": "days", "prompt": "Days before today"}],\n')),(0,n.kt)("p",null,"Use variables to dynamically populate values in the following content during command run time."),(0,n.kt)("p",null,"For example, the variable in this template is configured so you can choose how many days back you want to search for provisioning-and-security events. When you run ",(0,n.kt)("inlineCode",{parentName:"p"},"sail report provisioning-and-security"),", a prompt displays, ",(0,n.kt)("inlineCode",{parentName:"p"},"Input Days before today:")," The number you enter will then populate anywhere the variable is used in the following object, and then the query runs."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'    "queries": [\n      {\n        "queryString": "(type:provisioning AND created:[now-{{days}}d TO now])",\n        "queryTitle": "Provisioning Events for the last {{days}} days"\n      },\n      {\n        "queryString": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])",\n        "queryTitle": "User Unlocks for the last {{days}} days"\n      }\n    ]\n\n  }\n]\n')),(0,n.kt)("p",null,"This is a list of the queries that will run. Currently, the variables for days populate."))}w.isMDXComponent=!0}}]);