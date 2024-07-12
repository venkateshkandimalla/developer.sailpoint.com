"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83934],{85407:(e,a)=>{function t(e,a){var t,s,l,m,n;return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type?null!=(s=null==(t=e.xml)?void 0:t.name)?s:e.type:"array"===e.type?null!=(m=null==(l=e.xml)?void 0:l.name)?m:e.type:null!=(n=e.title)?n:e.type}a.A4=a.uc=void 0,a.uc=function(e,a){var s;return e.items?t(e.items)+"[]":null!=(s=t(e))?s:""},a.A4=function e(a){if(!a)return;if(a.items&&void 0===a.minItems&&void 0===a.maxItems)return e(a.items);let t=[];if(a.items&&a.items.enum&&a.items.enum&&t.push(`[${a.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minLength||a.maxLength){let e,s,l="";a.minLength&&a.minLength>1&&(e=`\`>= ${a.minLength} characters\``),a.minLength&&1===a.minLength&&(e="`non-empty`"),a.maxLength&&(s=`\`<= ${a.maxLength} characters\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}if(a.minimum||a.maximum||"number"==typeof a.exclusiveMinimum||"number"==typeof a.exclusiveMaximum){let e,s,l="";"number"==typeof a.exclusiveMinimum?e=`\`> ${a.exclusiveMinimum}\``:a.minimum&&!a.exclusiveMinimum?e=`\`>= ${a.minimum}\``:a.minimum&&!0===a.exclusiveMinimum&&(e=`\`> ${a.minimum}\``),"number"==typeof a.exclusiveMaximum?s=`\`< ${a.exclusiveMaximum}\``:a.maximum&&!a.exclusiveMaximum?s=`\`<= ${a.maximum}\``:a.maximum&&!0===a.exclusiveMaximum&&(s=`\`< ${a.maximum}\``),e&&!s&&(l+=e),s&&!e&&(l+=s),e&&s&&(l+=`${e} and ${s}`),t.push(l)}a.pattern&&t.push(`Value must match regular expression \`${a.pattern}\``);const s=a;if(s.mapping){const e=Object.keys(s.mapping);t.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return a.enum&&t.push(`[${a.enum.map((e=>`\`${e}\``)).join(", ")}]`),a.minItems&&t.push(`\`>= ${a.minItems}\``),a.maxItems&&t.push(`\`<= ${a.maxItems}\``),0!==t.length?"**Possible values:** "+t.join(", "):void 0}},34168:(e,a,t)=>{t.d(a,{Z:()=>y});var s=t(67294),l=t(58750),m=t(82479),n=t(62574),r=t(94693),i=t(85407),o=t(52347),p=t(25365),c=t(88453),d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;const y=function({param:{description:e,example:a,examples:t,name:y,required:g,schema:f}}){f&&(null==f?void 0:f.type)||(f={type:"any"});const k=(0,o.lo)(f,(e=>s.createElement("span",{className:"openapi-schema__type"}," ",(0,i.uc)(e)))),b=(0,o.lo)(g,(()=>s.createElement("span",{className:"openapi-schema__required"},"required"))),x=(0,o.lo)((0,i.A4)(f),(e=>s.createElement("div",null,s.createElement(p.D,{children:(0,r.T)(e),rehypePlugins:[c.Z]})))),v=(0,o.lo)(e,(e=>s.createElement("div",null,s.createElement(p.D,{children:(0,r.T)(e),components:{pre:"div",code(e){var a=e,{node:t,inline:m,className:n,children:r}=a;((e,a)=>{var t={};for(var s in e)u.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&d)for(var s of d(e))a.indexOf(s)<0&&h.call(e,s)&&(t[s]=e[s])})(a,["node","inline","className","children"]);const i=/language-(\w+)/.exec(n||"");return m?s.createElement("code",null,r):!m&&i?s.createElement(l.Z,{className:n},r):s.createElement(l.Z,null,r)}},rehypePlugins:[c.Z]})))),T=(0,o.lo)(f&&f.items?f.items.default:f?f.default:void 0,(e=>s.createElement("div",null,s.createElement(p.D,{children:`**Default value:** \`${e}\``})))),N=(0,o.lo)((0,o.toString)(a),(e=>s.createElement("div",null,s.createElement("strong",null,"Example: "),e))),S=(0,o.lo)(t,(e=>{const a=Object.entries(e);return s.createElement(s.Fragment,null,s.createElement("strong",null,"Examples:"),s.createElement(m.default,null,a.map((([e,a])=>s.createElement(n.default,{value:e,label:e},a.summary&&s.createElement("p",null,a.summary),a.description&&s.createElement("p",null,s.createElement("strong",null,"Description: "),s.createElement("span",null,a.description)),s.createElement("p",null,s.createElement("strong",null,"Example: "),s.createElement("code",null,a.value)))))))}));return s.createElement("div",{className:"openapi-params__list-item"},s.createElement("span",{className:"openapi-schema__container"},s.createElement("strong",{className:"openapi-schema__property"},y),k,g&&s.createElement("span",{className:"openapi-schema__divider"}),b),x,T,v,N,S)}},16922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>S,default:()=>q,frontMatter:()=>N,metadata:()=>_,toc:()=>E});var s=t(3905),l=t(68562),m=t(67001),n=t.n(m),r=t(98439),i=t(34168),o=t(3655),p=t(13503),c=t(82479),d=t(62574),u=Object.defineProperty,h=Object.defineProperties,y=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,a,t)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,x=(e,a)=>{for(var t in a||(a={}))f.call(a,t)&&b(e,t,a[t]);if(g)for(var t of g(a))k.call(a,t)&&b(e,t,a[t]);return e},v=(e,a)=>h(e,y(a)),T=(e,a)=>{var t={};for(var s in e)f.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&g)for(var s of g(e))a.indexOf(s)<0&&k.call(e,s)&&(t[s]=e[s]);return t};const N={id:"patch-role",sidebar_label:"Update an existing role",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1vGzcM/isCP23AOc6Lu3YH7EPaZZiHNS2SdF9SI6BPtE/tnXTVS+KDcf99oHR+ie16CwYsH+KTRIrkw4eklmAasuiV0WMJOTToi/LGVAQZSHKFVQ2fQQ6fGomeBGpBC+W80nNhk5zHuYP8HnjpYJKBpW+BnH9rZAv5Mi6VJQm5t4EyKIz2pD0fYdNUqojmh18c21mCK0qqkb982xDkYKZfqPCQQWPZWa/IxWvZ+j9KpdO1lPNW6TlkQDrU7PQ1NdbMVEV90NeERUHOxeVkF4S7kgTfJMxsFT0tsG7Yk52rugw01odtr1VuG6OdsW4PbTbE6mzIlySCI5ssdhmgLUr1yICu754aUxHqvXtuyQtvBAPPv71mJmZYubgTdL+37ReLdxnMrQnNFoqA1mK7Z4PDFb1sBspT7Y5HjfIhij9EgLquy8ArH4/4rsEF78XtBi3W5MkywZY9oKAk29GJruWeP+NfV6glTnCYlrxVxJGHyONMGCskVeQ58F2G7lFwHcTM2Bo95BBC9GIT1Nn56Cf5ZnoxwOL858Ho9OzV4M3Zq9FAEo5GFyN8fTFD6LpYHo7Tnvh5fnrKP88juFo0VHiSYiUacycesVK8F6sL/udCUvLf4GEJ5QddtWsOhcN6tdJ/kp77EvKL8wxqXGwvn9+yjbLrC+bBvrzGjjH6v7N2zdnRoYy+RSluUuLEgItuWsWkFoZv93TyknQaTR9msSB2U7ZyaKwjV/5g1S77vtxfLBXNXFkbMZqkIF4dCmKsPVmNlbgl+0hWRB0x4OIKVpMURougS9SyIiloUVDUdC8K7jgLiU3ue3YpanIO5yTS/pTHE3eAJP+MDsbaVjhTky9Z6om0F0/W6HmfwS4DPjPrcchOcJ/JYRhH3HCpZAcZuIhC6kzBVpBD6X3j8uFw6Umj9tdYU3eijaa6qUxLdFKYeoiNggwe0SomQSLdWjyFNsNQcVFhUVNh9odDFE/zAZ1Tc8aeyRScNzVZDmTC/hXBKt9GB6eEluxl4DjuJ9vHtwx98mNbaJ0JDgr6nhhHTRSCrP/4bdUB7sxX0sLz/19aE2z6BMaTs3yzeRRcrZKx13t2p3Hf8LfG5Gb2pdawquj7nfqcsF2lZ4Zv5zQl6M5OTk9Otwrg+urmvbj8OD44gFeHokAtpnEIR5zTC0GglqI2Us1awdk0wXG/NsEW5ITSIoJA+lFZo2vSnsugUgVpF0PuY3s/vosYNcb5GvXWyfdfXM9cXW5q69gjLQHsaeGHTYWK+0Ji7bJn9+oBl0GuJD99SuM8by+XU3T0yVZdx9vfAlnm1GRD4sgwqRx/S8jj4+KIlz/c9PP2R/HyWX0wkFU3120srSrwCjL4Sm16L3STLoOSUJKNzqaDd8mlwR2rbxT3GhS30KRxWXBTOyo72eofHy/v3v3OpdI/hWsjWcniE89KfIIcPsNn9tSkVhlrgveXUKGeB5yzfLqY//4GnFIGUA==",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update an existing role' (patch-role)"},S=void 0,_={unversionedId:"api/nerm/v1/patch-role",id:"api/nerm/v1/patch-role",title:"patch-role",description:"Update an existing role",source:"@site/docs/api/nerm/v1/patch-role.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-role",permalink:"/docs/api/nerm/v1/patch-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update an existing role' (patch-role)",tags:[],version:"current",frontMatter:{id:"patch-role",sidebar_label:"Update an existing role",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1vGzcM/isCP23AOc6Lu3YH7EPaZZiHNS2SdF9SI6BPtE/tnXTVS+KDcf99oHR+ie16CwYsH+KTRIrkw4eklmAasuiV0WMJOTToi/LGVAQZSHKFVQ2fQQ6fGomeBGpBC+W80nNhk5zHuYP8HnjpYJKBpW+BnH9rZAv5Mi6VJQm5t4EyKIz2pD0fYdNUqojmh18c21mCK0qqkb982xDkYKZfqPCQQWPZWa/IxWvZ+j9KpdO1lPNW6TlkQDrU7PQ1NdbMVEV90NeERUHOxeVkF4S7kgTfJMxsFT0tsG7Yk52rugw01odtr1VuG6OdsW4PbTbE6mzIlySCI5ssdhmgLUr1yICu754aUxHqvXtuyQtvBAPPv71mJmZYubgTdL+37ReLdxnMrQnNFoqA1mK7Z4PDFb1sBspT7Y5HjfIhij9EgLquy8ArH4/4rsEF78XtBi3W5MkywZY9oKAk29GJruWeP+NfV6glTnCYlrxVxJGHyONMGCskVeQ58F2G7lFwHcTM2Bo95BBC9GIT1Nn56Cf5ZnoxwOL858Ho9OzV4M3Zq9FAEo5GFyN8fTFD6LpYHo7Tnvh5fnrKP88juFo0VHiSYiUacycesVK8F6sL/udCUvLf4GEJ5QddtWsOhcN6tdJ/kp77EvKL8wxqXGwvn9+yjbLrC+bBvrzGjjH6v7N2zdnRoYy+RSluUuLEgItuWsWkFoZv93TyknQaTR9msSB2U7ZyaKwjV/5g1S77vtxfLBXNXFkbMZqkIF4dCmKsPVmNlbgl+0hWRB0x4OIKVpMURougS9SyIiloUVDUdC8K7jgLiU3ue3YpanIO5yTS/pTHE3eAJP+MDsbaVjhTky9Z6om0F0/W6HmfwS4DPjPrcchOcJ/JYRhH3HCpZAcZuIhC6kzBVpBD6X3j8uFw6Umj9tdYU3eijaa6qUxLdFKYeoiNggwe0SomQSLdWjyFNsNQcVFhUVNh9odDFE/zAZ1Tc8aeyRScNzVZDmTC/hXBKt9GB6eEluxl4DjuJ9vHtwx98mNbaJ0JDgr6nhhHTRSCrP/4bdUB7sxX0sLz/19aE2z6BMaTs3yzeRRcrZKx13t2p3Hf8LfG5Gb2pdawquj7nfqcsF2lZ4Zv5zQl6M5OTk9Otwrg+urmvbj8OD44gFeHokAtpnEIR5zTC0GglqI2Us1awdk0wXG/NsEW5ITSIoJA+lFZo2vSnsugUgVpF0PuY3s/vosYNcb5GvXWyfdfXM9cXW5q69gjLQHsaeGHTYWK+0Ji7bJn9+oBl0GuJD99SuM8by+XU3T0yVZdx9vfAlnm1GRD4sgwqRx/S8jj4+KIlz/c9PP2R/HyWX0wkFU3120srSrwCjL4Sm16L3STLoOSUJKNzqaDd8mlwR2rbxT3GhS30KRxWXBTOyo72eofHy/v3v3OpdI/hWsjWcniE89KfIIcPsNn9tSkVhlrgveXUKGeB5yzfLqY//4GnFIGUA==",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update an existing role' (patch-role)"},sidebar:"openApiSidebar",previous:{title:"Find role by id",permalink:"/docs/api/nerm/v1/get-role"},next:{title:"Create a permission",permalink:"/docs/api/nerm/v1/create-permission"}},I={},E=[{value:"Request",id:"request",level:2}],j={toc:E},Z="wrapper";function q(e){var a=e,{components:t}=a,m=T(a,["components"]);return(0,s.kt)(Z,v(x(x({},j),m),{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Update an existing role"),(0,s.kt)(n(),{method:"patch",path:"/roles/{id}",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Update an existing role"),(0,s.kt)("h2",x({},{id:"request"}),"Request"),(0,s.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(i.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.kt)("strong",{className:"openapi-schema__required"},"required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileRole`, `NeaccessRole`]",schema:{type:"string",enum:["NeprofileRole","NeaccessRole"],description:"The type of role",example:"NeprofileRole"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sponsors",description:"The name of the user role"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Set to true to archive, false to unarchive",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",description:"Role groups",items:{type:"string",example:"ad_group_name"}},mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("span",{className:"openapi-schema__container"},(0,s.kt)("strong",{className:"openapi-schema__property"},"role"),(0,s.kt)("span",{className:"openapi-schema__name"}," object"))),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0,example:"sponsors_role"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sponsors"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"groups",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",example:"ad_group_name"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "role": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "sponsors_role",\n    "name": "Sponsors",\n    "groups": [\n      "ad_group_name"\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(c.default,{mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,s.kt)(d.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.default,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,s.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}q.isMDXComponent=!0}}]);