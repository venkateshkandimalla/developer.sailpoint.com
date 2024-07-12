"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[71856],{39836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>y,metadata:()=>m,toc:()=>b});var s=r(3905),o=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(a)for(var r of a(t))l.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>i(e,n(t)),k=(e,t)=>{var r={};for(var s in e)p.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&l.call(e,s)&&(r[s]=e[s]);return r};const y={id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},g=void 0,m={unversionedId:"tools/sdk/typescript/typescript-sdk-delete",id:"tools/sdk/typescript/typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",description:"Learn how to use the TypeScript SDK to delete resources.",source:"@site/docs/tools/sdk/typescript/deleting-resources.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/delete",permalink:"/docs/tools/sdk/typescript/delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/deleting-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:4,frontMatter:{id:"typescript-sdk-delete",title:"Deleting resources with The TypeScript SDK",pagination_label:"Delete a resource",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","delete"],description:"Learn how to use the TypeScript SDK to delete resources.",slug:"/tools/sdk/typescript/delete",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Update a resource",permalink:"/docs/tools/sdk/typescript/update"},next:{title:"Paginate Results",permalink:"/docs/tools/sdk/typescript/paginate"}},f={},b=[],h={toc:b},w="wrapper";function v(e){var t=e,{components:r}=t,o=k(t,["components"]);return(0,s.kt)(w,u(c(c({},h),o),{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can use the SDK to delete resources."),(0,s.kt)("p",null,"Here is an example script that searches for the Workgroup created in ",(0,s.kt)("a",c({parentName:"p"},{href:"/docs/tools/sdk/typescript/create"}),"Create a resource")," by name and calls the delete method to remove it from your environment."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-typescript"}),"import {\n  Configuration,\n  GovernanceGroupsBetaApi,\n  GovernanceGroupsBetaApiCreateWorkgroupRequest,\n  GovernanceGroupsBetaApiPatchWorkgroupRequest,\n  PublicIdentitiesApi,\n} from 'sailpoint-api-client';\n\nconst deleteWorkgroup = async () => {\n  let apiConfig = new Configuration();\n  let api = new GovernanceGroupsBetaApi(apiConfig);\n\n  let workgroup = (\n    await api.listWorkgroups({filters: 'name eq \"DB Access Governance Group\"'})\n  ).data[0];\n\n  if (workgroup.id !== undefined) {\n    let deletionStatus = (await api.deleteWorkgroup({id: workgroup.id})).status;\n    console.log(deletionStatus);\n  } else {\n    console.log('Workgroup was not found, id is missing for delete request.');\n  }\n};\n\ndeleteWorkgroup();\n")),(0,s.kt)("p",null,"Run this command to compile and run the code:"),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tsc src/index.ts && node src/index.js\n")),(0,s.kt)("p",null,"The deletionStatus is returned by the SDK with a value of 204."))}v.isMDXComponent=!0}}]);