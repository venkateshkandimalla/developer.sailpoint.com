"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78062],{85407:(e,a)=>{function t(e,a){var t,l,s,n,i;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(l=null==(t=e.xml)?void 0:t.name)?l:e.type:"array"===e.type?null!=(n=null==(s=e.xml)?void 0:s.name)?n:e.type:null!=(i=e.title)?i:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var l;return e.items?t(e.items)+"[]":null!=(l=t(e))?l:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,l,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(l=`\`<= ${a.maxLength} characters\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,l,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?l=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?l=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(l=`\`< ${a.maximum}\``),e&&!l&&(s+=e),l&&!e&&(s+=l),e&&l&&(s+=`${e} and ${l}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const l=a;if(l.mapping){const e=Object.keys(l.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>h});var l=t(67294),s=t(58750),n=t(82479),i=t(62574),m=t(94693),o=t(85407),r=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;const h=function({param:{description:e,example:a,examples:t,name:h,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,r.lo)(f,(e=>l.createElement("span",{className:"openapi-schema__type"}," ",(0,o.uc)(e)))),b=(0,r.lo)(g,(()=>l.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,r.lo)((0,o.A4)(f),(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),rehypePlugins:[p.Z]})))),T=(0,r.lo)(e,(e=>l.createElement("div",null,l.createElement(c.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:n,className:i,children:m}=a;((e,a)=>{var t={};for(var l in e)u.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&d)for(var l of d(e))a.indexOf(l)<0&&y.call(e,l)&&(t[l]=e[l])})(a,["node","inline","className","children"]);const o=/language-(\w+)/.exec(i||"");return n?l.createElement("code",null,m):!n&&o?l.createElement(s.Z,{className:i},m):l.createElement(s.Z,null,m)}},rehypePlugins:[p.Z]})))),v=(0,r.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>l.createElement("div",null,l.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,r.lo)((0,r.toString)(a),(e=>l.createElement("div",null,l.createElement("strong",null,"Example: "),e))),S=(0,r.lo)(t,(e=>{const a=Object.entries(e);return l.createElement(l.Fragment,null,l.createElement("strong",null,"Examples:"),l.createElement(n.default,null,a.map((([e,a])=>l.createElement(i.default,{value:e,label:e},a.summary&&l.createElement("p",null,a.summary),a.description&&l.createElement("p",null,l.createElement("strong",null,"Description: "),l.createElement("span",null,a.description)),l.createElement("p",null,l.createElement("strong",null,"Example: "),l.createElement("code",null,a.value)))))))}));return l.createElement("div",{className:"openapi-params__list-item"},l.createElement("span",{className:"openapi-schema__container"},l.createElement("strong",{className:"openapi-schema__property"},h),k,g&&l.createElement("span",{className:"openapi-schema__divider"}),b),x,v,T,E,S)}},60265:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>S,default:()=>O,frontMatter:()=>E,metadata:()=>N,toc:()=>L});var l=t(3905),s=t(68562),n=t(67001),i=t.n(n),m=t(98439),o=t(34168),r=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,y=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&b(e,t,a[t]);if(g)for(var t of g(a))k.call(a,t)&&b(e,t,a[t]);return e},T=(e,a)=>y(e,h(a)),v=(e,a)=>{var t={};for(var l in e)f.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&g)for(var l of g(e))a.indexOf(l)<0&&k.call(e,l)&&(t[l]=e[l]);return t};const E={id:"get-non-employee-bulk-upload-status",sidebar_label:"Bulk upload status on source",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Bulk upload status on source' (get-non-employee-bulk-upload-status)"},S=void 0,N={unversionedId:"api/beta/get-non-employee-bulk-upload-status",id:"api/beta/get-non-employee-bulk-upload-status",title:"get-non-employee-bulk-upload-status",description:"Bulk upload status on source",source:"@site/docs/api/beta/get-non-employee-bulk-upload-status.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-non-employee-bulk-upload-status",permalink:"/docs/api/beta/get-non-employee-bulk-upload-status",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Bulk upload status on source' (get-non-employee-bulk-upload-status)",tags:[],version:"current",frontMatter:{id:"get-non-employee-bulk-upload-status",sidebar_label:"Bulk upload status on source",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Bulk upload status on source' (get-non-employee-bulk-upload-status)"},sidebar:"openApiSidebar",previous:{title:"Imports, or Updates, Non-Employee Records",permalink:"/docs/api/beta/import-non-employee-records-in-bulk"},next:{title:"Exports Source Schema Template",permalink:"/docs/api/beta/export-non-employee-source-schema-template"}},I={},L=[{value:"Request",id:"request",level:2}],q={toc:L},w="wrapper";function O(e){var a=e,{components:t}=a,n=v(a,["components"]);return(0,l.kt)(w,T(x(x({},q),n),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Bulk upload status on source"),(0,l.kt)(i(),{method:"get",path:"/non-employee-sources/{id}/non-employee-bulk-upload/status",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"The nonEmployeeBulkUploadStatus API returns the status of the newest bulk upload job for the specified source."),(0,l.kt)("h2",x({},{id:"request"}),"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(o.Z,{className:"paramsItem",param:{in:"path",example:"2c918085842e69ae018432d22ccb212f",name:"id",description:"Source ID (UUID)",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Status of the newest bulk-upload job, if any.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PENDING`, `IN_PROGRESS`, `COMPLETED`, `ERROR`]",schema:{type:"string",enum:["PENDING","IN_PROGRESS","COMPLETED","ERROR"],description:'Returns the following values indicating the progress or result of the bulk upload job.\n"PENDING" means the job is queued and waiting to be processed.\n"IN_PROGRESS" means the job is currently being processed.\n"COMPLETED" means the job has been completed without any errors.\n"ERROR" means the job failed to process with errors.\nnull means job has been submitted to the source.\n',example:"PENDING"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "status": "PENDING"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 403 response object"),(0,l.kt)(r.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,l.kt)("div",null,(0,l.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Generic localized reason for error")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,l.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,l.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("p",null," An example of a 500 response object"),(0,l.kt)(r.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}O.isMDXComponent=!0}}]);