"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57912],{85407:(e,a)=>{function t(e,a){var t,i,s,n,m;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(i=null==(t=e.xml)?void 0:t.name)?i:e.type:"array"===e.type?null!=(n=null==(s=e.xml)?void 0:s.name)?n:e.type:null!=(m=e.title)?m:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var i;return e.items?t(e.items)+"[]":null!=(i=t(e))?i:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,i,s="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(i=`\`<= ${a.maxLength} characters\``),e&&!i&&(s+=e),i&&!e&&(s+=i),e&&i&&(s+=`${e} and ${i}`),t.push(s)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,i,s="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?i=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?i=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(i=`\`< ${a.maximum}\``),e&&!i&&(s+=e),i&&!e&&(s+=i),e&&i&&(s+=`${e} and ${i}`),t.push(s)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const i=a;if(i.mapping){const e=Object.keys(i.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var i=t(67294),s=t(58750),n=t(82479),m=t(62574),c=t(94693),r=t(85407),l=t(52347),o=t(25365),p=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:b,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const g=(0,l.lo)(f,(e=>i.createElement("span",{className:"openapi-schema__type"}," ",(0,r.uc)(e)))),k=(0,l.lo)(b,(()=>i.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,l.lo)((0,r.A4)(f),(e=>i.createElement("div",null,i.createElement(o.D,{children:(0,c.T)(e),rehypePlugins:[p.Z]})))),v=(0,l.lo)(e,(e=>i.createElement("div",null,i.createElement(o.D,{children:(0,c.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:n,className:m,children:c}=a;((e,a)=>{var t={};for(var i in e)u.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&d)for(var i of d(e))a.indexOf(i)<0&&h.call(e,i)&&(t[i]=e[i])})(a,["node","inline","className","children"]);const r=/language-(\w+)/.exec(m||"");return n?i.createElement("code",null,c):!n&&r?i.createElement(s.Z,{className:m},c):i.createElement(s.Z,null,c)}},rehypePlugins:[p.Z]})))),T=(0,l.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>i.createElement("div",null,i.createElement(o.D,{children:`**Default value:** \`${e}\``})))),N=(0,l.lo)((0,l.toString)(a),(e=>i.createElement("div",null,i.createElement("strong",null,"Example: "),e))),I=(0,l.lo)(t,(e=>{const a=Object.entries(e);return i.createElement(i.Fragment,null,i.createElement("strong",null,"Examples:"),i.createElement(n.default,null,a.map((([e,a])=>i.createElement(m.default,{value:e,label:e},a.summary&&i.createElement("p",null,a.summary),a.description&&i.createElement("p",null,i.createElement("strong",null,"Description: "),i.createElement("span",null,a.description)),i.createElement("p",null,i.createElement("strong",null,"Example: "),i.createElement("code",null,a.value)))))))}));return i.createElement("div",{className:"openapi-params__list-item"},i.createElement("span",{className:"openapi-schema__container"},i.createElement("strong",{className:"openapi-schema__property"},y),g,b&&i.createElement("span",{className:"openapi-schema__divider"}),k),x,T,v,N,I)}},60458:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>q,contentTitle:()=>I,default:()=>E,frontMatter:()=>N,metadata:()=>A,toc:()=>Z});var i=t(3905),s=t(68562),n=t(67001),m=t.n(n),c=t(98439),r=t(34168),l=t(3655),o=t(13503),p=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&k(e,t,a[t]);if(b)for(var t of b(a))g.call(a,t)&&k(e,t,a[t]);return e},v=(e,a)=>h(e,y(a)),T=(e,a)=>{var t={};for(var i in e)f.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&b)for(var i of b(e))a.indexOf(i)<0&&g.call(e,i)&&(t[i]=e[i]);return t};const N={id:"get-account-by-id",sidebar_label:"Returns an Account resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/iiq/identityiq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Account resource based on id.' (get-account-by-id)"},I=void 0,A={unversionedId:"api/iiq/get-account-by-id",id:"api/iiq/get-account-by-id",title:"get-account-by-id",description:"Returns an Account resource based on id.",source:"@site/docs/api/iiq/get-account-by-id.api.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/get-account-by-id",permalink:"/docs/api/iiq/get-account-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Account resource based on id.' (get-account-by-id)",tags:[],version:"current",frontMatter:{id:"get-account-by-id",sidebar_label:"Returns an Account resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"get api-method",info_path:"docs/api/iiq/identityiq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns an Account resource based on id.' (get-account-by-id)"},sidebar:"iiqSideBar",previous:{title:"Creates an Account.",permalink:"/docs/api/iiq/create-account"},next:{title:"Updates an existing Account.",permalink:"/docs/api/iiq/update-account"}},q={},Z=[{value:"Request",id:"request",level:2}],S={toc:Z},M="wrapper";function E(e){var a=e,{components:t}=a,n=T(a,["components"]);return(0,i.kt)(M,v(x(x({},S),n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Returns an Account resource based on id."),(0,i.kt)(m(),{method:"get",path:"/Accounts/{accountId}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"The Account resource with matching id is returned."),(0,i.kt)("h2",x({},{id:"request"}),"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"accountId",in:"path",schema:{type:"string",example:"c7c7777c7ef77e77777ee77e7a1f0444"},description:"The id of the Account.",required:!0},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"attributes",schema:{type:"string",example:"displayName,active"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{in:"query",name:"excludedAttributes",schema:{type:"string",example:"displayName,active"},description:"A comma-separated list of attributes to exclude from the response. *Some attributes cannot be excluded.*"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns a single Account resource based on the id.")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ id of the Account.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"identity"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The corresponding User object of the Account.")),(0,i.kt)(o.Z,{collapsible:!1,name:"userName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The identity name of the Account User.",type:"string",example:"Barbara.Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The displayable name of the Account User.",type:"string",example:"Barbara Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ identifier for the Account User.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"ref",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The URI of the SCIM resource representing the Account User.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"application"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The corresponding Application object of the Account.")),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The displayable name of the Account Application.",type:"string",example:"Mock Application1"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ identifier for the Account Application.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"ref",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The URI of the SCIM resource representing the Account Application.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"nativeIdentity",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The Account unique identifier associated with the native application. This field is immutable.",type:"string",example:"a1b2c3"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the Account, suitable for display to end-users.",type:"string",example:"Barbara Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"instance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The instance identifier of the Account. This field is immutable.",type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The UUID of the Account.",type:"string",example:"{f99999ff-f000-444b-b6ae-4443dd6cd6ed}"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:",(0,i.kt)("strong",{parentName:"p"},"My Application1"),':account: { "department": "IT"}')),(0,i.kt)(o.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{description:'Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.<br/><br/>Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:**My Application1**:account: { "department": "IT"}',type:"object",additionalProperties:!0},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"active",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account is enabled or disabled.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"locked",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account is locked. An account may be unlocked by setting this attribute to false, but can not be locked by setting a false value to true.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"manuallyCorrelated",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account has been manually correlated in the UI.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"hasEntitlements",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account has one or more entitlement attributes.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastRefresh",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime representation of the last refresh for this Account.",type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastTargetAggregation",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime representation of last targeted aggregation for the Account.",type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"meta"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Metadata of the SCIM resource.")),(0,i.kt)(o.Z,{collapsible:!1,name:"created",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime this resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Accounts/c0b4568a4fe7458c434ee77d1fbt156b"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastModified",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The version of the SCIM resource.",type:"string",example:'W"1644561244074"'},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"resourceType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The resource type.",type:"string",example:"Account"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"schemas",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:Account","urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Mock Application:account"]},mdxType:"SchemaItem"})))),(0,i.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "c0b4568a4fe7458c434ee77d1fbt156b",\n  "identity": {\n    "userName": "Barbara.Jensen",\n    "displayName": "Barbara Jensen",\n    "value": "c0a7778b7ef71e79817ee74e6a1f0444",\n    "ref": "http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"\n  },\n  "application": {\n    "displayName": "Mock Application1",\n    "value": "c0a7778b7ef71e79817ee74e6a1f0444",\n    "ref": "http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444"\n  },\n  "nativeIdentity": "a1b2c3",\n  "displayName": "Barbara Jensen",\n  "instance": null,\n  "uuid": "{f99999ff-f000-444b-b6ae-4443dd6cd6ed}",\n  "urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account": {},\n  "active": true,\n  "locked": true,\n  "manuallyCorrelated": true,\n  "hasEntitlements": true,\n  "lastRefresh": "2024-07-12T19:31:21.845Z",\n  "lastTargetAggregation": "2024-07-12T19:31:21.845Z",\n  "meta": {\n    "created": "2022-02-11T01:34:04.074-05:00",\n    "location": "http://localhost:8080/iiq/scim/v2/Accounts/c0b4568a4fe7458c434ee77d1fbt156b",\n    "lastModified": "2022-02-11T01:08:45.866-05:00",\n    "version": "W\\"1644561244074\\"",\n    "resourceType": "Account"\n  },\n  "schemas": [\n    "urn:ietf:params:scim:schemas:sailpoint:1.0:Account",\n    "urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Mock Application:account"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(d.default,{label:"application/scim+json",value:"application/scim+json",mdxType:"TabItem"},(0,i.kt)(p.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ id of the Account.",type:"string",example:"c0b4568a4fe7458c434ee77d1fbt156b"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"identity"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The corresponding User object of the Account.")),(0,i.kt)(o.Z,{collapsible:!1,name:"userName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The identity name of the Account User.",type:"string",example:"Barbara.Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The displayable name of the Account User.",type:"string",example:"Barbara Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ identifier for the Account User.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"ref",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The URI of the SCIM resource representing the Account User.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"application"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"The corresponding Application object of the Account.")),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The displayable name of the Account Application.",type:"string",example:"Mock Application1"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"IdentityIQ identifier for the Account Application.",type:"string",example:"c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"ref",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The URI of the SCIM resource representing the Account Application.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"nativeIdentity",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The Account unique identifier associated with the native application. This field is immutable.",type:"string",example:"a1b2c3"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"displayName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The name of the Account, suitable for display to end-users.",type:"string",example:"Barbara Jensen"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"instance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The instance identifier of the Account. This field is immutable.",type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The UUID of the Account.",type:"string",example:"{f99999ff-f000-444b-b6ae-4443dd6cd6ed}"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:",(0,i.kt)("strong",{parentName:"p"},"My Application1"),':account: { "department": "IT"}')),(0,i.kt)(o.Z,{name:"property name*",required:!1,schemaName:"any",qualifierMessage:void 0,schema:{description:'Provide the name of Application that corresponds to this Account in APPLICATION NAME. This field contains an object structure dependent on the Application that the Account applies to.<br/><br/>Example:  urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:**My Application1**:account: { "department": "IT"}',type:"object",additionalProperties:!0},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"active",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account is enabled or disabled.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"locked",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account is locked. An account may be unlocked by setting this attribute to false, but can not be locked by setting a false value to true.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"manuallyCorrelated",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account has been manually correlated in the UI.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"hasEntitlements",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Flag to indicate this account has one or more entitlement attributes.",type:"boolean",example:!0},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastRefresh",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime representation of the last refresh for this Account.",type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastTargetAggregation",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime representation of last targeted aggregation for the Account.",type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"meta"),(0,i.kt)("span",{className:"openapi-schema__name"}," "))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Metadata of the SCIM resource.")),(0,i.kt)(o.Z,{collapsible:!1,name:"created",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime this resource was created.",type:"string",format:"date-time",example:"2022-02-11T01:34:04.074-05:00"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The location of the resource.",type:"string",example:"http://localhost:8080/iiq/scim/v2/Accounts/c0b4568a4fe7458c434ee77d1fbt156b"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"lastModified",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{description:"Datetime the resource was last modified.",type:"string",format:"date-time",example:"2022-02-11T01:08:45.866-05:00"},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The version of the SCIM resource.",type:"string",example:'W"1644561244074"'},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"resourceType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The resource type.",type:"string",example:"Account"},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"schemas",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The schemas involved in the SCIM resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:sailpoint:1.0:Account","urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Mock Application:account"]},mdxType:"SchemaItem"})))),(0,i.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "c0b4568a4fe7458c434ee77d1fbt156b",\n  "identity": {\n    "userName": "Barbara.Jensen",\n    "displayName": "Barbara Jensen",\n    "value": "c0a7778b7ef71e79817ee74e6a1f0444",\n    "ref": "http://localhost:8080/iiq/scim/v2/Users/c0a7778b7ef71e79817ee74e6a1f0444"\n  },\n  "application": {\n    "displayName": "Mock Application1",\n    "value": "c0a7778b7ef71e79817ee74e6a1f0444",\n    "ref": "http://localhost:8080/iiq/scim/v2/Applications/c0a7778b7ef71e79817ee74e6a1f0444"\n  },\n  "nativeIdentity": "a1b2c3",\n  "displayName": "Barbara Jensen",\n  "instance": null,\n  "uuid": "{f99999ff-f000-444b-b6ae-4443dd6cd6ed}",\n  "urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:APPLICATION NAME:account": {},\n  "active": true,\n  "locked": true,\n  "manuallyCorrelated": true,\n  "hasEntitlements": true,\n  "lastRefresh": "2024-07-12T19:31:21.846Z",\n  "lastTargetAggregation": "2024-07-12T19:31:21.846Z",\n  "meta": {\n    "created": "2022-02-11T01:34:04.074-05:00",\n    "location": "http://localhost:8080/iiq/scim/v2/Accounts/c0b4568a4fe7458c434ee77d1fbt156b",\n    "lastModified": "2022-02-11T01:08:45.866-05:00",\n    "version": "W\\"1644561244074\\"",\n    "resourceType": "Account"\n  },\n  "schemas": [\n    "urn:ietf:params:scim:schemas:sailpoint:1.0:Account",\n    "urn:ietf:params:scim:schemas:sailpoint:1.0:Application:Schema:Mock Application:account"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}E.isMDXComponent=!0}}]);