"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57646],{85407:(e,a)=>{function t(e,a){var t,s,l,i,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(i=null==(l=e.xml)?void 0:l.name)?i:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,l="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,l="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>h});var s=t(67294),l=t(58750),i=t(82479),n=t(62574),r=t(94693),m=t(85407),o=t(52347),c=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;const h=function({param:{description:e,example:a,examples:t,name:h,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,o.lo)(f,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,m.uc)(e)))),b=(0,o.lo)(g,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),v=(0,o.lo)((0,m.A4)(f),(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,r.T)(e),rehypePlugins:[p.Z]})))),x=(0,o.lo)(e,(e=>s.createElement("div",null,s.createElement(c.D,{children:(0,r.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:i,className:n,children:r}=a;((e,a)=>{var t={};for(var s in e)u.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&d)for(var s of d(e))a.indexOf(s)<0&&y.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const m=/language-(\w+)/.exec(n||"");return i?s.createElement("code",null,r):!i&&m?s.createElement(l.Z,{className:n},r):s.createElement(l.Z,null,r)}},rehypePlugins:[p.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>s.createElement("div",null,s.createElement(c.D,{children:`**Default value:** \`${e}\``})))),E=(0,o.lo)((0,o.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),S=(0,o.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(i.default,null,a.map((([e,a])=>s.createElement(n.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},h),k,g&&s.createElement("span",{className:"openapi-schema__divider"}),b),v,T,x,E,S)}},13686:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>S,default:()=>L,frontMatter:()=>E,metadata:()=>I,toc:()=>w});var s=t(3905),l=t(68562),i=t(67001),n=t.n(i),r=t(98439),m=t(34168),o=t(3655),c=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,y=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&b(e,t,a[t]);if(g)for(var t of g(a))k.call(a,t)&&b(e,t,a[t]);return e},x=(e,a)=>y(e,h(a)),T=(e,a)=>{var t={};for(var s in e)f.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&g)for(var s of g(e))a.indexOf(s)<0&&k.call(e,s)&&(t[s]=e[s]);return t};const E={id:"delete-password-sync-group",sidebar_label:"Delete Password Sync Group by ID",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Password Sync Group by ID' (delete-password-sync-group)"},S=void 0,I={unversionedId:"api/beta/delete-password-sync-group",id:"api/beta/delete-password-sync-group",title:"delete-password-sync-group",description:"Delete Password Sync Group by ID",source:"@site/docs/api/beta/delete-password-sync-group.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/delete-password-sync-group",permalink:"/docs/api/beta/delete-password-sync-group",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Password Sync Group by ID' (delete-password-sync-group)",tags:[],version:"current",frontMatter:{id:"delete-password-sync-group",sidebar_label:"Delete Password Sync Group by ID",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"delete api-method",info_path:"docs/api/beta/identity-security-cloud-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete Password Sync Group by ID' (delete-password-sync-group)"},sidebar:"openApiSidebar",previous:{title:"Update Password Sync Group by ID",permalink:"/docs/api/beta/update-password-sync-group"},next:{title:"Personal Access Tokens",permalink:"/docs/api/beta/personal-access-tokens"}},N={},w=[{value:"Request",id:"request",level:2}],R={toc:w},A="wrapper";function L(e){var a=e,{components:t}=a,i=T(a,["components"]);return(0,s.kt)(A,x(v(v({},R),i),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Delete Password Sync Group by ID"),(0,s.kt)(n(),{method:"delete",path:"/password-sync-groups/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"This API deletes the specified password sync group. A token with ORG_ADMIN authority is required to call this API."),(0,s.kt)("h2",v({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(m.Z,{className:"paramsItem",param:{in:"path",name:"id",schema:{type:"string"},required:!0,description:"The ID of password sync group to delete.",example:"6881f631-3bd5-4213-9c75-8e05cc3e35dd"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"204",value:"204",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No content - indicates the request was successful but there is no content to be returned in the response.")),(0,s.kt)("div",null)),(0,s.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Client Error - Returned if the request body is invalid.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unauthorized - Returned if there is no authorization header, or if the JWT token is expired.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"JWT validation failed: JWT is expired"},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "JWT validation failed: JWT is expired"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Forbidden - Returned if the user you are running as, doesn't have access to this end-point.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 403 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "403 Forbidden",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The server understood the request but refuses to authorize it."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"429",value:"429",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:" Rate Limit Exceeded "},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "message": " Rate Limit Exceeded "\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"detailCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"trackingId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"messages"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,s.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"locale",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US",nullable:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"localeOrigin",required:!1,schemaName:"LocaleOrigin",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`, `null`]",schema:{type:"string",enum:["DEFAULT","REQUEST",null],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT",nullable:!0,title:"LocaleOrigin"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 500 response object"),(0,s.kt)(o.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}L.isMDXComponent=!0}}]);