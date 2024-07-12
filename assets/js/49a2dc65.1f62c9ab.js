"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28367],{71336:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(67294),i=t(57273),n=t(25026);const s={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function o({children:e,diagram:a}){i.Z.contentLoaded();const[t,o]=r.useState(0),[c,d]=r.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[u,l]=r.useState({x:0,y:0}),[m,g]=r.useState(!1);function h(e){e.screenX?(d({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:u.x,offsetY:u.y}),l({x:u.x,y:u.y})):(d({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:u.x,offsetY:u.y}),l({x:u.x,y:u.y}))}function p(e){d({cursor:"grab",clickX:0,clickY:0})}function f(e){"grabbing"===c.cursor&&(e.screenX?l({x:c.clickX-e.screenX+c.offsetX,y:c.clickY-e.screenY+c.offsetY}):l({x:c.clickX-e.changedTouches[0].screenX+c.offsetX,y:c.clickY-e.changedTouches[0].screenY+c.offsetY}))}let S,E;return r.useEffect((()=>{let e=!1;return setTimeout((()=>{e||g(!0)}),100),()=>{e=!0}})),!0===m?(E=r.createElement("div",null),S=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)):(E=r.createElement("div",null,"Diagram Loading ..."),S=r.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+t+"px)",maxHeight:"1000px"}},a)),r.createElement("div",null,r.createElement("img",{className:s.zoomIn,onClick:e=>{o(t+300)},src:(0,n.Z)("/icons/magnifying-glass-plus-regular.svg")}),r.createElement("img",{className:s.zoomIn,onClick:e=>function(e){o(0),d({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),l({x:0,y:0})}(e),src:(0,n.Z)("/icons/house-regular.svg")}),r.createElement("img",{className:s.zoomIn,onClick:e=>{o(t-300)},src:(0,n.Z)("/icons/magnifying-glass-minus-regular.svg")}),r.createElement("div",{style:{cursor:c.cursor},className:s.mermaidContainer,onMouseMove:e=>f(e),onTouchMove:e=>f(e),onMouseDown:e=>h(e),onTouchStart:e=>h(e),onMouseUp:e=>p(),onTouchEnd:e=>p(),onMouseLeave:e=>p()},E,S))}},62015:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>E,contentTitle:()=>f,default:()=>v,frontMatter:()=>p,metadata:()=>S,toc:()=>D});var r=t(3905),i=t(71336),n=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,a,t)=>a in e?n(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))d.call(a,t)&&l(e,t,a[t]);if(c)for(var t of c(a))u.call(a,t)&&l(e,t,a[t]);return e},g=(e,a)=>s(e,o(a)),h=(e,a)=>{var t={};for(var r in e)d.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))a.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const p={id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},f="Secure Data Share Audit ER Diagram",S={unversionedId:"reporting/secure-data-share/secure-data-share-audit-er-diagram",id:"reporting/secure-data-share/secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",description:"Secure Data Share Audit ER Diagram",source:"@site/docs/reporting/secure-data-share/audit-er-diagram.md",sourceDirName:"reporting/secure-data-share",slug:"/reporting/sds-audit-er-diagram",permalink:"/docs/reporting/sds-audit-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/secure-data-share/audit-er-diagram.md",tags:[{label:"SecureDataShare",permalink:"/docs/tags/secure-data-share"},{label:"SDS",permalink:"/docs/tags/sds"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:2,frontMatter:{id:"secure-data-share-audit-er-diagram",title:"Secure Data Share Audit ER Diagram",pagination_label:"Secure Data Share Audit ER Diagram",sidebar_label:"Audit Entity Relationship Diagram",sidebar_position:2,sidebar_class_name:"secureDataShare",keywords:["data listing","data share","secure data sharing"],description:"Secure Data Share Audit ER Diagram",slug:"/reporting/sds-audit-er-diagram",tags:["SecureDataShare","SDS"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Secure Data Share ER Diagram",permalink:"/docs/reporting/sds-er-diagram"},next:{title:"Guides",permalink:"/docs/guides"}},E={},D=[],A={toc:D},b="wrapper";function v(e){var a=e,{components:t}=a,n=h(a,["components"]);return(0,r.kt)(b,g(m(m({},A),n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"secure-data-share-audit-er-diagram"}),"Secure Data Share Audit ER Diagram"),(0,r.kt)(i.Z,{diagram:'erDiagram\n    AUDIT_EVENTS {\n        text TENANT_ID "Unique Id for an Organization tenant"\n        text ID PK "Unique Id of the event"\n        timestamp_ntz CREATED "Date When the event happened"\n        text ACTION "action taken related to the Audit Event"\n        text TYPE "type of Audit Event,Ex: Auth, SSO, ROLE, ACCESS_REQUEST, PROVISIONING, USER_MANAGEMENT, etc."\n        text ACTOR_NAME "Who/what performed the action, this can be an Identity or a Service name"\n        text TARGET_NAME "Who/what the action was performed on, this can be an Identity or a Service name"\n        text STACK "Which internal service was associated with the Audit Event"\n        text SOURCE_NAME "Name of the Source associated with the Audit Event"\n        text ACCOUNT_NAME "Name of Account associated with the Audit Event"\n        text INFO "Any additional info that might be available"\n        text SOURCE_ID "ID of the source associated with the Audit Event"\n        text OPERATION "Operation happened examples include EMAIL, FORWARD, UPDATE, REQUEST, etc."\n        text STATUS "What was the status of the Audit Event, examples include PASSED, FAILED, TERMINATED, etc."\n        timestamp_ntz SYNC_DATE "Date Audit Event Synced"\n    }',mdxType:"MermaidViewer"}))}v.isMDXComponent=!0}}]);