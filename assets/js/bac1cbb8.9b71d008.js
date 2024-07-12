"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57037],{88991:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var o=e(3905),i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(t,n,e)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,d=(t,n)=>{for(var e in n||(n={}))r.call(n,e)&&u(t,e,n[e]);if(a)for(var e of a(n))l.call(n,e)&&u(t,e,n[e]);return t},g=(t,n)=>c(t,s(n)),p=(t,n)=>{var e={};for(var o in t)r.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&a)for(var o of a(t))n.indexOf(o)<0&&l.call(t,o)&&(e[o]=t[o]);return e};const m={id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},y="Testing and debugging",v={unversionedId:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-testing",id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-testing",title:"Testing and Debugging",description:"Test and debug connectors with customizers.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/testing.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/testing",permalink:"/docs/connectivity/saas-connectivity/customizers/testing",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/testing.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:6,frontMatter:{id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Linking to a Source",permalink:"/docs/connectivity/saas-connectivity/customizers/linking"},next:{title:"Config Object",permalink:"/docs/connectivity/saas-connectivity/customizers/config"}},b={},f=[{value:"Debug locally",id:"debug-locally",level:3},{value:"Test alongside a custom connector",id:"test-alongside-a-custom-connector",level:3}],h={toc:f},C="wrapper";function k(t){var n=t,{components:e}=n,i=p(n,["components"]);return(0,o.kt)(C,g(d(d({},h),i),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",d({},{id:"testing-and-debugging"}),"Testing and debugging"),(0,o.kt)("h3",d({},{id:"debug-locally"}),"Debug locally"),(0,o.kt)("p",null,"Debugging your code locally follows the same process that debugging a ",(0,o.kt)("a",d({parentName:"p"},{href:"../in-depth/debugging"}),"connector locally")," does. The recommended approach is to start a ",(0,o.kt)("a",d({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/debugging"}),"Visual Studio Code debug window")," and run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npm run debug\n")),(0,o.kt)("p",null,"You can then set breakpoints in your code step through processes in your IDE (integrated development environment)."),(0,o.kt)("h3",d({},{id:"test-alongside-a-custom-connector"}),"Test alongside a custom connector"),(0,o.kt)("p",null,"If you want to test alongside a SaaS custom connector, the easiest way to do so is to copy the customizer code into the connector code."),(0,o.kt)("p",null,"For example, you want to test this connector:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info("Running test connection")\n            res.send(await myClient.testConnection())\n        })\n}\n')),(0,o.kt)("p",null,"You can test a customizer by simply appending the customizer code to the end of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"// existing custom connector code\nexport const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info(\"Running test connection\")\n            res.send(await myClient.testConnection())\n        })\n}\n\n// appended customizer code that will also get run\nexport const connectorCustomizer = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    return createConnectorCustomizer()\n        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n            logger.info('Running after test connection')\n            return output\n        })\n}\n\n")),(0,o.kt)("p",null,"Now, when you run the test-connection command, the customizer after the test-connection command will also run."))}k.isMDXComponent=!0}}]);