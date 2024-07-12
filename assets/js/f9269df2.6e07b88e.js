"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[90540],{45034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var o=n(3905),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&l(e,n,t[n]);return e},p=(e,t)=>r(e,s(t)),m=(e,t)=>{var n={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&c)for(var o of c(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n};const h={id:"connector-timeouts",title:"Connector Timeouts",pagination_label:"Connector Timeouts",sidebar_label:"Connector Timeouts",sidebar_position:1.2,sidebar_class_name:"connectorTimeouts",keywords:["connectivity","connectors","timeout"],description:"Identity Security Cloud will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",slug:"/connectivity/saas-connectivity/in-depth/connector-timeouts",tags:["Connectivity"]},y=void 0,g={unversionedId:"connectivity/saas-connectivity/in-depth/connector-timeouts",id:"connectivity/saas-connectivity/in-depth/connector-timeouts",title:"Connector Timeouts",description:"Identity Security Cloud will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",source:"@site/docs/connectivity/saas-connectivity/in-depth/connector-timeouts.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/connector-timeouts",permalink:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/connector-timeouts.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:1.2,frontMatter:{id:"connector-timeouts",title:"Connector Timeouts",pagination_label:"Connector Timeouts",sidebar_label:"Connector Timeouts",sidebar_position:1.2,sidebar_class_name:"connectorTimeouts",keywords:["connectivity","connectors","timeout"],description:"Identity Security Cloud will throw an error if your connector does not send a response in 3 minutes. For connector commands that might take longer than 3 minutes, make sure to send data at regular intervals to prevent a timeout.",slug:"/connectivity/saas-connectivity/in-depth/connector-timeouts",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"CLI - Advanced",permalink:"/docs/connectivity/saas-connectivity/in-depth/cli-advanced"},next:{title:"Debugging",permalink:"/docs/connectivity/saas-connectivity/in-depth/debugging"}},v={},f=[],b={toc:f},k="wrapper";function w(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,o.kt)(k,p(u(u({},b),i),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An Identity Security Cloud SaaS Connectivity connector will send a timeout error if it doesn't send a response within 3 minutes. If the connector is sending thousands of records, the record fetching process will likely exceed this timeout limit. If you are storing all those records in memory before sending them to ISC, you can run into memory utilization issues. To prevent these issues, you should paginate through your source data and send the data back in regular intervals."),(0,o.kt)("p",null,"In the case of a long running API call to the source system, you can also optionally send ",(0,o.kt)("inlineCode",{parentName:"p"},"res.keepAlive()")," to keep the connection to Identity Security Cloud open without having to send any data to Identity Security Cloud. If ",(0,o.kt)("inlineCode",{parentName:"p"},"res.keepAlive()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"res.send()")," is not called within 3 minutes, a connector timeout will occur."),(0,o.kt)("p",null,"This is an example of how to set up this pagination:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"async getAccounts(res: Response<StdAccountListOutput>): Promise<boolean> {\n    return this.airtableBase('Users').select(\n        // in this case, each page will only be ten records, but this could be increased depending on your needs and the limits of the source connector\n        {pageSize: 10}\n    // each page will be called recursively until there are no more records to fetch, at which case the promise is fulfilled\n    ).eachPage((records, fetchNextPage) => {\n        for (let record of records) {\n            // this is the part that sends the data to Identity Security Cloud. Since eachPage is called with just 10 records,\n            // if there are 100 records total, we would send data back to ISC in 10 sets of 10 records.\n            res.send({\n                identity: record.id,\n                attributes: {\n                    id: <string>record.get('id'),\n                    email: <string>record.get('email'),\n                    fullname: <string>record.get('fullname'),\n                    entitlements: <string[]>(record.get('entitlements') ? record.get('entitlements') : [])\n                }\n            })\n        }\n        fetchNextPage()\n\n    }).then(()=>{\n        return true\n    }).catch((err) => {\n        throw new ConnectorError('error while fetching accounts')\n    })\n}\n\n")))}w.isMDXComponent=!0}}]);