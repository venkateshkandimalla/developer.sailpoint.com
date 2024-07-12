"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77602],{85407:(e,t)=>{function s(e,t){var s,a,i,r,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(a=null==(s=e.xml)?void 0:s.name)?a:e.type:"array"===e.type?null!=(r=null==(i=e.xml)?void 0:i.name)?r:e.type:null!=(n=e.title)?n:e.type}t.A4=t.uc=void 0,t.uc=function(e,t){var a;return e.items?s(e.items)+"[]":null!=(a=s(e))?a:""},t.A4=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let s=[];if(t.items&&t.items.enum&&t.items.enum&&s.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,a,i="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(a=`\`<= ${t.maxLength} characters\``),e&&!a&&(i+=e),a&&!e&&(i+=a),e&&a&&(i+=`${e} and ${a}`),s.push(i)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,a,i="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?a=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?a=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(a=`\`< ${t.maximum}\``),e&&!a&&(i+=e),a&&!e&&(i+=a),e&&a&&(i+=`${e} and ${a}`),s.push(i)}t.pattern&&s.push(`Value must match regular expression \`${t.pattern}\``);const a=t;if(a.mapping){const e=Object.keys(a.mapping);s.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&s.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&s.push(`\`>= ${t.minItems}\``),t.maxItems&&s.push(`\`<= ${t.maxItems}\``),0!==s.length?"**Possible values:** "+s.join(", "):void 0}},34168:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(67294),i=s(58750),r=s(82479),n=s(62574),m=s(94693),l=s(85407),o=s(52347),p=s(25365),c=s(88453),u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:t,examples:s,name:y,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const v=(0,o.lo)(f,(e=>a.createElement("span",{className:"openapi-schema__type"}," ",(0,l.uc)(e)))),x=(0,o.lo)(g,(()=>a.createElement("span",{className:"openapi-schema__required"},"required"))),b=(0,o.lo)((0,l.A4)(f),(e=>a.createElement("div",null,a.createElement(p.D,{children:(0,m.T)(e),rehypePlugins:[c.Z]})))),T=(0,o.lo)(e,(e=>a.createElement("div",null,a.createElement(p.D,{children:(0,m.T)(e),components:{pre:"div",code(e){var t=e,{node:s,inline:r,className:n,children:m}=t;((e,t)=>{var s={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&h.call(e,a)&&(s[a]=e[a])})(t,["node","inline","className","children"]);const l=/language-(\w+)/.exec(n||"");return r?a.createElement("code",null,m):!r&&l?a.createElement(i.Z,{className:n},m):a.createElement(i.Z,null,m)}},rehypePlugins:[c.Z]})))),k=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>a.createElement("div",null,a.createElement(p.D,{children:`**Default value:** \`${e}\``})))),q=(0,o.lo)((0,o.toString)(t),(e=>a.createElement("div",null,a.createElement("strong",null,"Example: "),e))),R=(0,o.lo)(s,(e=>{const t=Object.entries(e);return a.createElement(a.Fragment,null,a.createElement("strong",null,"Examples:"),a.createElement(r.default,null,t.map((([e,t])=>a.createElement(n.default,{value:e,label:e},t.summary&&a.createElement("p",null,t.summary),t.description&&a.createElement("p",null,a.createElement("strong",null,"Description: "),a.createElement("span",null,t.description)),a.createElement("p",null,a.createElement("strong",null,"Example: "),a.createElement("code",null,t.value)))))))}));return a.createElement("div",{className:"openapi-params__list-item"},a.createElement("span",{className:"openapi-schema__container"},a.createElement("strong",{className:"openapi-schema__property"},y),v,g&&a.createElement("span",{className:"openapi-schema__divider"}),x),b,k,T,q,R)}},16246:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>E,contentTitle:()=>R,default:()=>H,frontMatter:()=>q,metadata:()=>M,toc:()=>I});var a=s(3905),i=s(68562),r=s(67001),n=s.n(r),m=s(98439),l=s(34168),o=s(3655),p=s(13503),c=s(82479),u=s(62574),d=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,s)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))f.call(t,s)&&x(e,s,t[s]);if(g)for(var s of g(t))v.call(t,s)&&x(e,s,t[s]);return e},T=(e,t)=>h(e,y(t)),k=(e,t)=>{var s={};for(var a in e)f.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&v.call(e,a)&&(s[a]=e[a]);return s};const q={id:"get-resource-type-by-id",sidebar_label:"Returns a ResourceType resource based on ID.",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVk1v2zgQ/SvEXLwFBMvNXgLd3HWwK6Atso59Sn1gpLHFViIVcuSNYei/L4aybH04ybbH9cG2JOrxzZtHPh7BlGglKaPjFCLYIS3RmcomuDqU+OkQpxAAyZ2D6BG6jxxsAkjRJVaV/DpEsMpQdIeIfxRlgjIUhaQkU3on4oVQTlikympMp4Jfae7xsPXyqzBb//fhj/iLsCewZlxiisJosVWYp05sjRUok6w/I2qyByEtignqtDRK0yQQE5Xyt5YF8m+HNV+6JMNCToTUaXtx90KonTLaTaYQQCmtLJDQsgpHYByIwHYm9jIpFqGUlEEADQ5ER6BDyaMdWaV3UA9Fixdccq+Ic9kQgMXnSllMISJbYb3hO6402qFj8JvZjH/6kEsvrxNSOKV3OV5HF0/SYSqM9nrHC54tMZpQE0PKssxV4p0RfneMexwXZZ6+Y0KskGUfkWpYqXRMqqmTBhbhSfsCBYAvsihzvrV2aFmxRvAh4ldZ4K9jtvYY4w5tPHHir9XqXsg0teicfMrZZ83bwmIuSe1RkPFEPknHPv78NolwflHXjTwxJLS4XP1avWKeJKbSNOWpLk0cl11aVUh7CNkaohko1sv452etrI4U0jbyS8dFLlFF1AC6yEmVe/Wij9NZ1DZkuPLGDOciV46YzHoZu2ukJq5ljWecDlFprTzwQiUsPP6Z8OPF3G9zP+NGqAltaZXD6KYtY7Reg/+Ke0WT8eKv6wAKpCvN+4IkU0nynU69sl5z01jxuinapz/vgoyojMKQAfLMOIpuZ7ezUKnnkGsP9zdhL1HC1grdnfU6p148CHqXSXceqOuz3a64jOFPJuKMGVbc251f89Voz78Y7W0bJMY2duoR3tTNx3c/M6eg9sFEGW8nfRmP/WSqOY7Q7tv4qmz+em9S1KTocGkRjALrNCT+u+lCA+3ThOn4GPV/yIj5fTwFDi2HSWUVHTyBJ+lUMq+Y+uOm+/SBVWgs2RlzlpMpt9HK134MsCxKb82VyLkwXd49rMRdu2nHvHS3MkGxMElVoKbG4NxvrumbhgBYrwbndvo791qRt9Kwfg89v4+5zaVxVEi/jk6HhEsWvxPCTQAPcuCcx//fs9Wpt4QvFJa5VJp19BY9nuw9PHcGEA2OXpsA2MI89HhkRdc2r2u+/VyhZdNtAthLqzi7vQVT5XM8hWgrc4dvCP/b8rQJfxDvHNWuVtLuEJr3h73MK76CAH7gYXyErDd1ABnKFK1n2QyaJwmW1Hl9dDTjNXTeGf68W0Fd/wtkeh54",sidebar_class_name:"get api-method",info_path:"docs/api/iiq/identityiq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)"},R=void 0,M={unversionedId:"api/iiq/get-resource-type-by-id",id:"api/iiq/get-resource-type-by-id",title:"get-resource-type-by-id",description:"Returns a ResourceType resource based on ID.",source:"@site/docs/api/iiq/get-resource-type-by-id.api.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/get-resource-type-by-id",permalink:"/docs/api/iiq/get-resource-type-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)",tags:[],version:"current",frontMatter:{id:"get-resource-type-by-id",sidebar_label:"Returns a ResourceType resource based on ID.",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVk1v2zgQ/SvEXLwFBMvNXgLd3HWwK6Atso59Sn1gpLHFViIVcuSNYei/L4aybH04ybbH9cG2JOrxzZtHPh7BlGglKaPjFCLYIS3RmcomuDqU+OkQpxAAyZ2D6BG6jxxsAkjRJVaV/DpEsMpQdIeIfxRlgjIUhaQkU3on4oVQTlikympMp4Jfae7xsPXyqzBb//fhj/iLsCewZlxiisJosVWYp05sjRUok6w/I2qyByEtignqtDRK0yQQE5Xyt5YF8m+HNV+6JMNCToTUaXtx90KonTLaTaYQQCmtLJDQsgpHYByIwHYm9jIpFqGUlEEADQ5ER6BDyaMdWaV3UA9Fixdccq+Ic9kQgMXnSllMISJbYb3hO6402qFj8JvZjH/6kEsvrxNSOKV3OV5HF0/SYSqM9nrHC54tMZpQE0PKssxV4p0RfneMexwXZZ6+Y0KskGUfkWpYqXRMqqmTBhbhSfsCBYAvsihzvrV2aFmxRvAh4ldZ4K9jtvYY4w5tPHHir9XqXsg0teicfMrZZ83bwmIuSe1RkPFEPknHPv78NolwflHXjTwxJLS4XP1avWKeJKbSNOWpLk0cl11aVUh7CNkaohko1sv452etrI4U0jbyS8dFLlFF1AC6yEmVe/Wij9NZ1DZkuPLGDOciV46YzHoZu2ukJq5ljWecDlFprTzwQiUsPP6Z8OPF3G9zP+NGqAltaZXD6KYtY7Reg/+Ke0WT8eKv6wAKpCvN+4IkU0nynU69sl5z01jxuinapz/vgoyojMKQAfLMOIpuZ7ezUKnnkGsP9zdhL1HC1grdnfU6p148CHqXSXceqOuz3a64jOFPJuKMGVbc251f89Voz78Y7W0bJMY2duoR3tTNx3c/M6eg9sFEGW8nfRmP/WSqOY7Q7tv4qmz+em9S1KTocGkRjALrNCT+u+lCA+3ThOn4GPV/yIj5fTwFDi2HSWUVHTyBJ+lUMq+Y+uOm+/SBVWgs2RlzlpMpt9HK134MsCxKb82VyLkwXd49rMRdu2nHvHS3MkGxMElVoKbG4NxvrumbhgBYrwbndvo791qRt9Kwfg89v4+5zaVxVEi/jk6HhEsWvxPCTQAPcuCcx//fs9Wpt4QvFJa5VJp19BY9nuw9PHcGEA2OXpsA2MI89HhkRdc2r2u+/VyhZdNtAthLqzi7vQVT5XM8hWgrc4dvCP/b8rQJfxDvHNWuVtLuEJr3h73MK76CAH7gYXyErDd1ABnKFK1n2QyaJwmW1Hl9dDTjNXTeGf68W0Fd/wtkeh54",sidebar_class_name:"get api-method",info_path:"docs/api/iiq/identityiq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a ResourceType resource based on ID.' (get-resource-type-by-id)"},sidebar:"iiqSideBar",previous:{title:"Returns all ResourceType resources.",permalink:"/docs/api/iiq/get-resource-types"},next:{title:"Roles",permalink:"/docs/api/iiq/roles"}},E={},I=[{value:"Request",id:"request",level:2}],N={toc:I},j="wrapper";function H(e){var t=e,{components:s}=t,r=k(t,["components"]);return(0,a.kt)(j,T(b(b({},N),r),{components:s,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Returns a ResourceType resource based on ID."),(0,a.kt)(n(),{method:"get",path:"/ResourceTypes/{resourceTypeId}",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"The ResourceType with the matching ID is returned. The ID is the URN of the SCIM resource. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'."),(0,a.kt)("h2",b({},{id:"request"}),"Request"),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"resourceTypeId",in:"path",schema:{type:"string"},description:"ID of ResourceType resource.",required:!0},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Returns a single ResourceType resource based on the ID.")),(0,a.kt)("div",null,(0,a.kt)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ID of the ResourceType.",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the ResourceType.",type:"string",example:"User"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"endpoint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",type:"string",example:"/Applications"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Description of the ResourceType.",type:"string",example:"User Account."},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"schema",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The primary/base schema URI of the ResourceType.",type:"string",example:"urn:ietf:params:scim:schemas:sailpoint:1.0:User"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"schemaExtensions",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{description:"A list of URIs of the ResourceType's schema extensions.",type:"array",items:{example:[{schema:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",required:!0},{schema:"urn:ietf:params:scim:schemas:sailpoint:1.0:User",required:!0}]}},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("span",{className:"openapi-schema__container"},(0,a.kt)("strong",{className:"openapi-schema__property"},"meta"),(0,a.kt)("span",{className:"openapi-schema__name"}," object"))),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Metadata of the ResourceType.")),(0,a.kt)(p.Z,{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The location of the ResourceType.",type:"string",example:"http://localhost:8080/iiq/scim/v2/ResourceTypes/User"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"resourceType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"The SCIM resource type.",type:"string",example:"ResourceType"},mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{collapsible:!1,name:"schemas",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"The schema for the ResourceType resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]},mdxType:"SchemaItem"})))),(0,a.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "id": "User",\n  "name": "User",\n  "endpoint": "/Applications",\n  "description": "User Account.",\n  "schema": "urn:ietf:params:scim:schemas:sailpoint:1.0:User",\n  "schemaExtensions": [\n    [\n      {\n        "schema": "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",\n        "required": true\n      },\n      {\n        "schema": "urn:ietf:params:scim:schemas:sailpoint:1.0:User",\n        "required": true\n      }\n    ]\n  ],\n  "meta": {\n    "location": "http://localhost:8080/iiq/scim/v2/ResourceTypes/User",\n    "resourceType": "ResourceType"\n  },\n  "schemas": [\n    "urn:ietf:params:scim:schemas:core:2.0:ResourceType"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}H.isMDXComponent=!0}}]);