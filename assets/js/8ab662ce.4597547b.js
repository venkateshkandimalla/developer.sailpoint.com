"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65412],{17377:(e,t,o)=>{o.d(t,{Z:()=>O});var r=o(67294),n=o(86010),i=o(76828),a=o(39130),s=o(35096),c=o(33084);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=o(99603),u=o(21702);function d({href:e,children:t}){return r.createElement(a.default,{href:e,className:(0,n.default)("card padding--lg",l.cardContainer)},t)}function f({href:e,icon:t,title:o,description:i}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:o},t,o),i&&r.createElement("p",{className:l.cardDescription,title:i},i))}function p({item:e}){var t,o;const n=(0,i.Wl)(e);return n?r.createElement(f,{href:n,icon:r.createElement(m.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:null!=(o=null==(t=e.customProps)?void 0:t.description)?o:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h({item:e}){var t,o;const n=(0,s.Z)(e.href)?r.createElement(m.G,{icon:u.FL8,className:l.docCardIcon}):r.createElement(m.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(f,{href:e.href,icon:n,title:e.label,description:null!=(o=e.description)?o:null==a?void 0:a.description})}function b({item:e}){switch(e.type){case"link":return r.createElement(h,{item:e});case"category":return r.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,w=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,o)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&k(e,o,t[o]);if(w)for(var o of w(t))v.call(t,o)&&k(e,o,t[o]);return e};function E({className:e}){const t=(0,i.jA)();return r.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:o}=e;if(!t)return r.createElement(E,C({},e));const a=(0,i.MN)(t);return r.createElement("section",{className:(0,n.default)("row",o)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},87867:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>E,frontMatter:()=>b,metadata:()=>w,toc:()=>v});var r=o(3905),n=o(17377),i=o(76828),a=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))m.call(t,o)&&d(e,o,t[o]);if(l)for(var o of l(t))u.call(t,o)&&d(e,o,t[o]);return e},p=(e,t)=>s(e,c(t)),h=(e,t)=>{var o={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(o[r]=e[r]);return o};const b={id:"custom-forms",title:"Custom Forms",description:"Custom Forms",custom_edit_url:null},g=void 0,w={unversionedId:"api/beta/custom-forms",id:"api/beta/custom-forms",title:"Custom Forms",description:"Custom Forms",source:"@site/docs/api/beta/custom-forms.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/custom-forms",permalink:"/docs/api/beta/custom-forms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"custom-forms",title:"Custom Forms",description:"Custom Forms",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Gets connector list",permalink:"/docs/api/beta/get-connector-list"},next:{title:"Export form definitions by tenant.",permalink:"/docs/api/beta/search-form-definitions-by-tenant"}},y={},v=[],k={toc:v},C="wrapper";function E(e){var t=e,{components:o}=t,a=h(t,["components"]);return(0,r.kt)(C,p(f(f({},k),a),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to build and manage custom forms.\nWith this functionality in place, administrators can create and view form definitions and form instances."),(0,r.kt)("p",null,"Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form."),(0,r.kt)("p",null,"Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",f({parentName:"p"},{href:"https://documentation.sailpoint.com/saas/help/forms/index.html"}),"Forms")," for more information about using forms in Identity Security Cloud."),(0,r.kt)(n.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}E.isMDXComponent=!0}}]);