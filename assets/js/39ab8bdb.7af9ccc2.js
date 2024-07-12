"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[79721],{37762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>C,frontMatter:()=>y,metadata:()=>h,toc:()=>m});var i=n(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))r.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,c(t)),v=(e,t)=>{var n={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&r.call(e,i)&&(n[i]=e[i]);return n};const y={id:"connector-spec-initial-value",title:"Initial Value",pagination_label:"Initial Value",sidebar_label:"Initial Value",keywords:["connectivity","connectors","connector-spec","sourceConfigInitialValues"],description:"How to use the sourceConfigInitialValues field",slug:"/connectivity/saas-connectivity/connector-spec/initial-value",tags:["Connectivity","Connector Spec"]},f=void 0,h={unversionedId:"connectivity/saas-connectivity/connector-spec/connector-spec-initial-value",id:"connectivity/saas-connectivity/connector-spec/connector-spec-initial-value",title:"Initial Value",description:"How to use the sourceConfigInitialValues field",source:"@site/docs/connectivity/saas-connectivity/connector-spec/initialValue.md",sourceDirName:"connectivity/saas-connectivity/connector-spec",slug:"/connectivity/saas-connectivity/connector-spec/initial-value",permalink:"/docs/connectivity/saas-connectivity/connector-spec/initial-value",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-spec/initialValue.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Spec",permalink:"/docs/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{id:"connector-spec-initial-value",title:"Initial Value",pagination_label:"Initial Value",sidebar_label:"Initial Value",keywords:["connectivity","connectors","connector-spec","sourceConfigInitialValues"],description:"How to use the sourceConfigInitialValues field",slug:"/connectivity/saas-connectivity/connector-spec/initial-value",tags:["Connectivity","Connector Spec"]},sidebar:"openApiSidebar",previous:{title:"Card",permalink:"/docs/connectivity/saas-connectivity/connector-spec/card"},next:{title:"Key Value",permalink:"/docs/connectivity/saas-connectivity/connector-spec/key-value"}},b={},m=[{value:"How to use the sourceConfigInitialValues in the connector spec",id:"how-to-use-the-sourceconfiginitialvalues-in-the-connector-spec",level:2}],g={toc:m},k="wrapper";function C(e){var t=e,{components:n}=t,o=v(t,["components"]);return(0,i.kt)(k,d(p(p({},g),o),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",p({},{id:"how-to-use-the-sourceconfiginitialvalues-in-the-connector-spec"}),"How to use the sourceConfigInitialValues in the connector spec"),(0,i.kt)("p",null,"If you want to prepopulate a field in the connector spec configuration with an initial value, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceConfigInitialValues")," field in the connector spec to specify the prepopulated value. This can be used across all items. All you need to provide is the item's key and its corresponding default value. This is a simple example using a textbox:"),(0,i.kt)("pre",null,(0,i.kt)("code",p({parentName:"pre"},{className:"language-json"}),'"sourceConfigInitialValues": {\n    // Note that the key `airtableURL` is also the key of the item the initial value is provided for\n    "airtableURL": "https://api.airtable.com/v0"\n},\n"sourceConfig": [\n    {\n        "type": "menu",\n        "label": "Configuration",\n        "items": [\n            {\n\n                "type": "section",\n                "sectionTitle": "Authentication",\n                "sectionHelpMessage": "Provide the parameters to connect with the airtable worksheet.",\n                "items": [\n                    {\n                        // The key is what you use to assign initial values to the spec\n                        "key": "airtableURL",\n                        "label": "airtable url",\n                        "required": true,\n                        "type": "text"\n                    }\n                ]\n            }\n        ]\n    }\n]\n')))}C.isMDXComponent=!0}}]);