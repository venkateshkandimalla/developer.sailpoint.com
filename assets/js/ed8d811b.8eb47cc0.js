"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21959],{65143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>v,frontMatter:()=>k,metadata:()=>h,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const k={id:"connector-executed-rules",title:"Connector Executed Rules",pagination_label:"Connector Executed Rules",sidebar_label:"Connector Executed Rules",sidebar_position:3,sidebar_class_name:"cloudExecutedRules",keywords:["connector","rules"],description:"Overview of connector-executed rules.",slug:"/extensibility/rules/connector-rules",tags:["Rules"]},f=void 0,h={unversionedId:"extensibility/rules/connector-rules/connector-executed-rules",id:"extensibility/rules/connector-rules/connector-executed-rules",title:"Connector Executed Rules",description:"Overview of connector-executed rules.",source:"@site/docs/extensibility/rules/connector-rules/index.md",sourceDirName:"extensibility/rules/connector-rules",slug:"/extensibility/rules/connector-rules",permalink:"/docs/extensibility/rules/connector-rules",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/index.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:3,frontMatter:{id:"connector-executed-rules",title:"Connector Executed Rules",pagination_label:"Connector Executed Rules",sidebar_label:"Connector Executed Rules",sidebar_position:3,sidebar_class_name:"cloudExecutedRules",keywords:["connector","rules"],description:"Overview of connector-executed rules.",slug:"/extensibility/rules/connector-rules",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Manager Correlation Rule",permalink:"/docs/extensibility/rules/cloud-rules/manager-correlation-rule"},next:{title:"Before and After Operations",permalink:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}},N={},b=[{value:"Supported Connector Rules",id:"supported-connector-rules",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Connector Rule Object Model",id:"connector-rule-object-model",level:2},{value:"Attaching Connector-Related Rules to Sources",id:"attaching-connector-related-rules-to-sources",level:2},{value:"Example API calls by Rule Type",id:"example-api-calls-by-rule-type",level:2},{value:"BeforeProvisioning Rule",id:"beforeprovisioning-rule",level:3},{value:"AfterCreate, AfterModify, AfterDelete, BeforeCreate, BeforeModify, BeforeDelete Rules",id:"aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules",level:3},{value:"Correlation Rule",id:"correlation-rule",level:3},{value:"ManagerCorrelation Rule",id:"managercorrelation-rule",level:3},{value:"BuildMap Rule",id:"buildmap-rule",level:3},{value:"JDBCBuildMap Rule",id:"jdbcbuildmap-rule",level:3},{value:"JDBCProvision Rule",id:"jdbcprovision-rule",level:3},{value:"SAP HR Provisioning Modify Rule",id:"sap-hr-provisioning-modify-rule",level:3},{value:"WebServiceBeforeOperation Rule",id:"webservicebeforeoperation-rule",level:3},{value:"WebServiceAfterOperation Rule",id:"webserviceafteroperation-rule",level:3}],g={toc:b},y="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(y,d(c(c({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connector-Executed Rules")," or ",(0,r.kt)("strong",{parentName:"p"},"Connector Rules")," are rules that are executed in the Identity Security Cloud virtual appliance, and they are usually extensions of the connector itself. The rules are commonly used to perform complex connector-related functions, so they are specific to only certain connectors. Because these rules execute in the virtual appliance, they do not have access to query the Identity Security Cloud data model or fetch information from Identity Security Cloud. They rely instead on contextual information sent from Identity Security Cloud. Connector-executed rules may also have managed connections provided in their contexts to support querying end systems or sources. Though these managed connections may be used, making additional connections or call-outs is not allowed."),(0,r.kt)("p",null,"Unlike cloud rules, connector rules do not have a rule review process and are directly editable with the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/connector-rule-management"}),"Connector Rule REST APIs"),". For more details, see ",(0,r.kt)("a",c({parentName:"p"},{href:"#configuration-process"}),"Configuration Process"),"."),(0,r.kt)("h2",c({},{id:"supported-connector-rules"}),"Supported Connector Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Rule Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Source Type(s)"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"Before Creation Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorBeforeCreate")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component before a source account is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"Before Modify Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorBeforeModify")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component before a source account is modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"Before Delete Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorBeforeDelete")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component before a source account is deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"After Creation Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorAfterCreate")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component after a source account is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"After Modify Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorAfterModify")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component after a source account is modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"After Delete Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"}),"ConnectorAfterDelete")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Active Directory, Azure Active Directory"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes PowerShell commands on the IQService component after a source account is deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Build Map Rule"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"BuildMap"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Delimited File"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Calculates and transforms data from a parsed file during the aggregation process. ",(0,r.kt)("em",{parentName:"td"},"Note: This is only available for the Delimited File source type, not Generic source types."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule"}),"JDBC Build Map Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule"}),"JDBCBuildMap")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"JDBC"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Calculates and transforms data from a database query result during the aggregation process. It can also perform additional calls back to the database. ",(0,r.kt)("em",{parentName:"td"},"Note: This rule is available for the JDBC Generic source, as well as other sources that derive from the JDBC connector (e.g., Oracle EBS, PeopleSoft, etc.)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule"}),"JDBC Provision Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule"}),"JDBCProvision")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"JDBC"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes database queries to perform provisioning of account and access for all account operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/sap-buildmap-rule"}),"SAP Build Map Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/sap-buildmap-rule"}),"SAPBuildMap")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SAP HR, SAP"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Calculates and transforms data from SAP during the aggregation process. It can also perform additional calls back to the SAP system using SAP BAPI calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule"}),"SAP HR Provisioning Modify Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/sap-provisioning-modify-rule"}),"SapHrOperationProvisioning")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"SAP HR"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Performs SAP HR modification operations during provisioning. Often used for attribute sync to custom SAP HR attributes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule"}),"Web Services Before Operation Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/webservices-before-provisioning-rule"}),"WebServiceBeforeOperationRule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Web Services"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes before the next web-services HTTP(S) operation. Often used to calculate values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule"}),"Web Services After Operation Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/extensibility/rules/connector-rules/webservices-after-provisioning-rule"}),"WebServiceAfterOperationRule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Web Services"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Executes after a web-services HTTP(S) operation. Often used to parse complex data.")))),(0,r.kt)("h2",c({},{id:"configuration-process"}),"Configuration Process"),(0,r.kt)("p",null,"Connector Rules are directly editable with the ",(0,r.kt)("a",c({parentName:"p"},{href:"https://developer.sailpoint.com/docs/api/beta/connector-rule-management"}),"Connector Rule REST APIs"),", which provide ability to interact with rules directly."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Path"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/get-connector-rule-list"}),"List Connector Rules")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/connector-rules/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/get-connector-rule"}),"Get Connector Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"GET /beta/connector-rules/{id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/create-connector-rule"}),"Create Connector Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"POST /beta/connector-rules/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/update-connector-rule"}),"Update Connector Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"PUT /beta/connector-rules/{id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/delete-connector-rule"}),"Delete Connector Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"DELETE /beta/connector-rules/{id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("a",c({parentName:"td"},{href:"/docs/api/beta/validate-connector-rule"}),"Validate Connector Rule")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"POST /beta/connector-rules/validate"))))),(0,r.kt)("p",null,"SailPoint architectural optimizations have added resiliency and protections against malformed or long-running rules. These APIs also offer built-in protection and checking against potentially harmful code. For more information, see ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/extensibility/rules#rule-code-restrictions"}),"Rule Code Restrictions"),"."),(0,r.kt)("h2",c({},{id:"connector-rule-object-model"}),"Connector Rule Object Model"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n    "id": "2c91808674a2816a0174af21a6450009",\n    "name": "Example WebServices Rule",\n    "description": "This is just an example",\n    "created": "2020-09-21T05:27:32.170Z",\n    "modified": null,\n    "type": "WebServiceBeforeOperationRule",\n    "signature": {\n        "input": [],\n        "output": null\n    },\n    "attributes": {\n        "sourceVersion": "2020-09-21 05:27:31"\n    },\n    "sourceCode": {\n        "version": "2020-09-21 05:27:31",\n        "script": "\\n      import java.util.HashMap;\\n      import org.json.JSONArray;\\n      import org.json.JSONException;\\n      import org.json.JSONObject;\\n\\n      import org.apache.http.HttpEntity;\\n      import org.apache.http.HttpResponse;\\n      import org.apache.http.client.HttpClient;\\n      import org.apache.http.client.methods.HttpPost;\\n      import ...\nrequestEndPoint.getBody().put(\\"jsonBody\\",requestXML); \\n              }\\n        }\\n    }\\n    log.info(\\"Done Ultipro Onboarding before operation rule...\\");\\n    return requestEndPoint;\\n"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," - Unique UUID that the REST APIs refers to this rule by. This is generated on creation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - Name the user interface and references may use to refer to this rule."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," - Description of the rule\u2019s purpose or usage."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created")," - Timestamp when the rule was created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modified")," - Timestamp when the rule was last modified. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - Type of connector rule. For a list of supported rule types, see ",(0,r.kt)("a",c({parentName:"li"},{href:"#supported-connector-rules"}),"Supported Connector Rules"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attributes")," - List of attributes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sourceVersion")," - String indicating the rule's version. Typically, this is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"version"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sourceCode")," - Object housing the actual source code that makes the rule work.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version")," - String indicating the rule's version. Typically, this is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"sourceVersion"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"script")," - Rule\u2019s code the connector runs. This must be an escaped string. For help with formatting, use an escaping tool like ",(0,r.kt)("a",c({parentName:"li"},{href:"https://www.freeformatter.com/java-dotnet-escape.html#before-output"}),"Free Formatter."))))),(0,r.kt)("h2",c({},{id:"attaching-connector-related-rules-to-sources"}),"Attaching Connector-Related Rules to Sources"),(0,r.kt)("p",null,"Once a connector-related rule has been imported to your tenant, you must configure any sources that need to reference that rule during the desired operation. You can accomplish this configuration through the execution of an API call on the source. The following examples all use a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," operation for a partial source update, but ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," operations work too, as long as the entire source object model is provided."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," operations, you must provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"op")," key. For new configurations, this key is typically set to ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," as the example shows, but they can be any of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add")," - Add a new value to the configuration. Use this operation if this is the first time you are setting the value, i.e. it has never been configured before."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," - Use this operation to change the existing value. Use this operation if you are updating the value, i.e. you want to change the configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove")," - Removes a value from the configuration. Use this operation if you want to unset a value. ",(0,r.kt)("strong",{parentName:"li"},"Caution: Removals can be destructive if the path is improperly configured. This can negatively alter your source config."))),(0,r.kt)("h2",c({},{id:"example-api-calls-by-rule-type"}),"Example API calls by Rule Type"),(0,r.kt)("h3",c({},{id:"beforeprovisioning-rule"}),"BeforeProvisioning Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/beforeProvisioningRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c918085708c274401708c2a8a760001",\n      "name": "Example Rule"\n    }\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"aftercreate-aftermodify-afterdelete-beforecreate-beforemodify-beforedelete-rules"}),"AfterCreate, AfterModify, AfterDelete, BeforeCreate, BeforeModify, BeforeDelete Rules"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("admonition",c({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"The value key is a list. All available AfterCreate, AfterModify, BeforeCreate, and BeforeModify rules will need to be set in the same list.")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/nativeRules",\n    "value": ["Example Rule 1", "Example Rule 2"]\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"correlation-rule"}),"Correlation Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/accountCorrelationRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c9180896fc824e5016fc827ea880005",\n      "name": "Example Rule"\n    }\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"managercorrelation-rule"}),"ManagerCorrelation Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/managerCorrelationRule",\n    "value": {\n      "type": "RULE",\n      "id": "2c9180836fb03f35016fb05dae3b0001",\n      "name": "Example Rule"\n    }\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"buildmap-rule"}),"BuildMap Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/buildMapRule",\n    "value": "Example Rule"\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"jdbcbuildmap-rule"}),"JDBCBuildMap Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/buildMapRule",\n    "value": "Example Rule"\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"jdbcprovision-rule"}),"JDBCProvision Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/jdbcProvisionRule",\n    "value": "Example Rule"\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"sap-hr-provisioning-modify-rule"}),"SAP HR Provisioning Modify Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "add",\n    "path": "/connectorAttributes/saphrModifyProvisioningRule",\n    "value": "Example Rule"\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"webservicebeforeoperation-rule"}),"WebServiceBeforeOperation Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id}"),(0,r.kt)("p",null,"Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Replace `"),(0,r.kt)("inlineCode",{parentName:"p"},"with the index location of operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a"),"GET",(0,r.kt)("inlineCode",{parentName:"p"},"call on the source first to verify the index location prior to executing the"),"PATCH` call to attach the rule.","*"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/connectorAttributes/connectionParameters/[*]/beforeRule",\n    "value": "Example Rule"\n  }\n]\n')),(0,r.kt)("h3",c({},{id:"webserviceafteroperation-rule"}),"WebServiceAfterOperation Rule"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," /v3/sources/{id} Content-Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json-patch+json")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Replace ","[","*","]"," with the index location of the operation the way it is configured on the source. For example, 0, 1, 2, etc. You can use a ",(0,r.kt)("inlineCode",{parentName:"em"},"GET")," call on the source first to verify the index location prior to executing the ",(0,r.kt)("inlineCode",{parentName:"em"},"PATCH")," call to attach the rule.")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "op": "replace",\n    "path": "/connectorAttributes/connectionParameters/[*]/afterRule",\n    "value": "Example Rule"\n  }\n]\n')))}v.isMDXComponent=!0}}]);