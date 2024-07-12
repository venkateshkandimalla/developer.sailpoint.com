"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69668],{73137:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),o=a(86010),l=a(8757),s=a(73276),i=a(54939);const r={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var p=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))g.call(t,a)&&h(e,a,t[a]);return e},v=(e,t)=>u(e,c(t));function b({className:e,block:t,selectedValue:a,selectValue:s,tabValues:i}){const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),o=i[n].value;o!==a&&(u(t),s(o))},d=e=>{var t,a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=null!=(t=p[a])?t:p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=null!=(a=p[t])?a:p[p.length-1];break}}null==n||n.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>n.createElement("li",v(k({role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,key:e,ref:e=>p.push(e),onKeyDown:d,onClick:c},l),{className:(0,o.default)("tabs__item",r.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===e})}),null!=t?t:e))))}function f({lazy:e,children:t,selectedValue:a}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=(0,s.Y)(e);return n.createElement("div",{className:(0,o.default)("tabs-container",r.tabList)},n.createElement(b,k(k({},e),t)),n.createElement(f,k(k({},e),t)))}function w(e){const t=(0,i.default)();return n.createElement(y,k({key:String(t)},e))}},17695:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>x,frontMatter:()=>k,metadata:()=>b,toc:()=>y});var n=a(3905),o=a(73137),l=a(62574),s=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&d(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&d(e,a,t[a]);return e},g=(e,t)=>i(e,r(t)),h=(e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const k={id:"udk-explore",title:"Getting Started",pagination_label:"UDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/getting-started",tags:["UI"]},v=void 0,b={unversionedId:"tools/ui-development-kit/udk-explore",id:"tools/ui-development-kit/udk-explore",title:"Getting Started",description:"Develop custom user interfaces.",source:"@site/docs/tools/ui-development-kit/getting-started.mdx",sourceDirName:"tools/ui-development-kit",slug:"/tools/ui-development-kit/getting-started",permalink:"/docs/tools/ui-development-kit/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/getting-started.mdx",tags:[{label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:1,frontMatter:{id:"udk-explore",title:"Getting Started",pagination_label:"UDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/getting-started",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit"},next:{title:"UDK",permalink:"/docs/tools/ui-development-kit/accounts-list"}},f={},y=[{value:"Change your custom UI name",id:"change-your-custom-ui-name",level:2},{value:"Update the sidebar",id:"update-the-sidebar",level:2},{value:"Add route and new page",id:"add-route-and-new-page",level:2},{value:"Discuss",id:"discuss",level:2}],w={toc:y},N="wrapper";function x(e){var t=e,{components:a}=t,s=h(t,["components"]);return(0,n.kt)(N,g(m(m({},w),s),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Read this guide to learn about the UI Development Kit and how to use it. Once you have read this guide, you will be able to do the following: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#change-your-custom-ui-name"}),"Change your custom user interface (UI) name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#update-the-sidebar"}),"Update your sidebar to include new items")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#add-new-routes-and-pages"}),"Add new routes and pages"))),(0,n.kt)("h2",m({},{id:"change-your-custom-ui-name"}),"Change your custom UI name"),(0,n.kt)("p",null,"By default, the name of this project is 'UI Development Kit'. To update the name of your custom UI, you must update the code in two different places."),(0,n.kt)("p",null,"Update the Electron application window name. To do so, update the text in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/app.html")," on line 7:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-html"}),"<title>UI Development Kit</title>\n")),(0,n.kt)("p",null,"Update the home page. To do so, change the text in ",(0,n.kt)("inlineCode",{parentName:"p"},"src/routes/+layout.svelte")," on line 124:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-html"}),'<p class="text-xl lg:!block hidden">UI Development Kit</p>\n')),(0,n.kt)("h2",m({},{id:"update-the-sidebar"}),"Update the sidebar"),(0,n.kt)("p",null,"The sidebar is located at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/lib/sidebar/navigation.ts"),"."),(0,n.kt)("p",null,"To add a new sidebar item, add this code snippet to the file under the ",(0,n.kt)("inlineCode",{parentName:"p"},"content")," array:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-typescript"}),"import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';\nimport ReportsSvg from '$lib/Components/SVGs/ReportsSVG.svelte';\n\nexport const navigation = [\n  {\n    name: 'Main',\n    content: [\n      ...\n      {\n        url: '/home/account-list',\n        name: 'Account List',\n        description:\n          'an example showcasing how to list accounts',\n        icon: ReportsSvg,\n      },\n    ],\n  },\n];\n")),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"You can add a custom SVG icon for each sidebar item. Save and import your icon svg under ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/Components/SVGs/*"),".")),(0,n.kt)("p",null,"You now have a new sidebar link, but it points to a route that doesn't exist yet. If you click the link, you will encounter a 404 error."),(0,n.kt)("p",null,"To learn how to add a route and page for the new sidebar item, refer to ",(0,n.kt)("a",m({parentName:"p"},{href:"#add-route-and-new-page"}),"Add route and new page"),"."),(0,n.kt)("h2",m({},{id:"add-route-and-new-page"}),"Add route and new page"),(0,n.kt)("p",null,"To create new routes, you can create new folders and pages for those routes under ",(0,n.kt)("inlineCode",{parentName:"p"},"src/routes"),". "),(0,n.kt)("p",null,"Here is an example of how to create a new route:"),(0,n.kt)("p",null,"The route ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/example-pages")," takes you to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/routes/home/example-pages/+page.svelte"),"."),(0,n.kt)("p",null,"The route ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/example-pages/list-of-identities")," takes you to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/routes/home/example-pages/list-of-identities/+page.svelte"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),".\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n")),(0,n.kt)("p",null,"With this information, you can create a new route for an accounts landing page and a page that lists accounts."),(0,n.kt)("p",null,"The new project structure would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251c\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n\u2502\xa0\xa0     \u251c\u2500\u2500 accounts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 +page.svelte # Root accounts page at route `accounts`\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 account-list\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251c\u2500\u2500 +page.server.ts # Server side code for the account list page\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 +page.svelte # Account list page at route `accounts/account-list`\n")),(0,n.kt)("p",null,"You can now update those files with this content so that they display correctly:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.default,{value:"accounts_page",label:"+page.svelte",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-html"}),'<div class="flex justify-center flex-col align-middle gap-2">\n    <div class="card p-4">\n        <p class="text-2xl text-center">Accounts Homepage</p>\n    </div>\n</div>\n\n'))),(0,n.kt)(l.default,{value:"accounts_list_server",label:"accounts-list/+page.server.ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-html"}),'<div class="flex justify-center flex-col align-middle gap-2">\n    <div class="card p-4">\n        <p class="text-2xl text-center">List of all Accounts</p>\n    </div>\n</div>\n')))),(0,n.kt)("p",null,"To see the new sidebar item, as well as its new route and page, restart the project. "),(0,n.kt)("p",null,"To restart the project, run this command: "),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),(0,n.kt)("p",null,"Once you have run the command, the new sidebar item, as well as its new route and page, will display. "),(0,n.kt)("p",null,"Now that you have the new sidebar item, its new route, and its new page, you can implement the page. To continue following this example and learn how to implement an accounts list page, refer to ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/tools/ui-development-kit/accounts-list"}),"Accounts List"),"."),(0,n.kt)("h2",m({},{id:"discuss"}),"Discuss"),(0,n.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,n.kt)("p",null,"To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6"}),"SailPoint Developer Community Forum"),"."))}x.isMDXComponent=!0}}]);