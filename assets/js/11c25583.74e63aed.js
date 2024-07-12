"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36674],{64090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var i=n(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(r)for(var n of r(t))p.call(t,n)&&d(e,n,t[n]);return e},g=(e,t)=>a(e,o(t)),c=(e,t)=>{var n={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n};const m={id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/iiq/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},h="UI Elements",f={unversionedId:"iiq/plugin-developer-guide/chapter-5/plugin-ui-elements",id:"iiq/plugin-developer-guide/chapter-5/plugin-ui-elements",title:"UI Elements",description:"IdentityIQ Plugin UI Elements",source:"@site/docs/iiq/plugin-developer-guide/chapter-5/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-5",slug:"/iiq/plugin-developer-guide/ui-elements",permalink:"/docs/iiq/plugin-developer-guide/ui-elements",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-5/index.md",tags:[{label:"plugin",permalink:"/docs/tags/plugin"},{label:"guide",permalink:"/docs/tags/guide"},{label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:5,frontMatter:{id:"plugin-ui-elements",title:"UI Elements",pagination_label:"UI Elements",sidebar_label:"UI Elements",sidebar_position:5,sidebar_class_name:"plugin_developer_guide_ui_elements",keywords:["plugin"],description:"IdentityIQ Plugin UI Elements",slug:"/iiq/plugin-developer-guide/ui-elements",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Database Scripts",permalink:"/docs/iiq/plugin-developer-guide/database-scripts"},next:{title:"XML Artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts"}},k={},v=[],b={toc:v},y="wrapper";function w(e){var t=e,{components:n}=t,l=c(t,["components"]);return(0,i.kt)(y,g(u(u({},b),l),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",u({},{id:"ui-elements"}),"UI Elements"),(0,i.kt)("p",null,"Most plugins will have some additional UI component that will display in IdentityIQ. You can use images, CSS files, HTML templates, and JavaScript to provide the interactions and views required by the plugin. Plugins using a ",(0,i.kt)("inlineCode",{parentName:"p"},"fullPage")," element will look for a file called 'page.xhtml' in the build."),(0,i.kt)("p",null,":::Note"),(0,i.kt)("p",null,"Any css installed with the plugin will apply to all elements in IdentityIQ. For this reason it is recommended that developers keep their css classes specific to their plugin."),(0,i.kt)("p",null,":::"),(0,i.kt)("p",null,"The 'page.xhtml' in the 'Todo' example is configured to allow for the input of a new Todo and display all current Todos in the system. The Angular controller used in 'page.xhtml' and all the functions available to the controller are defined in 'TodoModule.js' (located in the '/ui/js' folder)."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"/**\n * Create the module.\n */\nvar todoModule = angular.module('TodoList', ['ui.bootstrap']);\n/**\n * Controller for the todo list.\n */\ntodoModule.controller('TodoController', function(todoService, pageConfigService, $q, $uibModal) {\n    var me = this,\n        promises;\n    /**\n     * @property Array The todos for a user.\n     */\n    me.todos = [];\n/***\n* Lines omitted for clarity\n***/\n/**\n * Shows the flagged users modal dialog.\n */\nme.viewFlaggedUsers = function() {\n    $uibModal.open({\n        animation: false,\n        controller: 'FlaggedUsersCtrl as ctrl',\n        templateUrl: PluginHelper.getPluginFileUrl('TodoPlugin', 'ui/html/flagged-template.html')\n    });\n};\n")),(0,i.kt)("p",null,"The 'TodoController' controller (and available methods) can then be referenced in ",(0,i.kt)("inlineCode",{parentName:"p"},"page.xhtml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<ui:composition>\n  <div\n    class="container"\n    ng-app="TodoList"\n    ng-controller="TodoController as ctrl">\n    <div class="row m-t" ng-if="ctrl.pageConfig.showFlagged">\n      <button\n        class="btn btn-danger pull-right"\n        ng-click="ctrl.viewFlaggedUsers()">\n        Flagged Users\n      </button>\n    </div>\n    <div class="row m-t"></div></div\n></ui:composition>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line 2")," - shows the angular controller ",(0,i.kt)("inlineCode",{parentName:"li"},"ng-controller")," defined as 'TodoController' from ",(0,i.kt)("strong",{parentName:"li"},"line 8")," of 'TodoModule.js'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line 4")," - example of accessing controller method ",(0,i.kt)("inlineCode",{parentName:"li"},"viewFlaggedUsers")," from ",(0,i.kt)("strong",{parentName:"li"},"line 21")," of 'TodoModule.js'.")),(0,i.kt)("p",null,"This example demonstrates how to use the Angular concept of the modal within a plugin. In the 'Todo' plugin, if the user clicks the 'Flagged Users' button as defined on the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullPage"),", it will switch context to the page defined by the ui/",(0,i.kt)("inlineCode",{parentName:"p"},"html/flagged-template.html"),", and swap the AngularJS controller to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlaggedUserCtrl"),". The behavior of this modal dialogue is essentially the same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"fullPage")," 'page.xhtml' - it accesses information by the controller, which may rely on backend Java classes to produce data. Notice that to reference the .html template for the flagged users, the example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginHelper")," classes' method ",(0,i.kt)("inlineCode",{parentName:"p"},"getPluginFileUrl")," - this allows for fetching the plugin resource by a relative path as it would display in the installed .zip archive."),(0,i.kt)("p",null,"One last aspect to remember for the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.xhtml")," is the necessity to include references to the JavaScript packages the plugin will use. Use this path to reference the packages: ",(0,i.kt)("inlineCode",{parentName:"p"},"#{plugins.requestContextPath}/plugin/<Plugin Name>/path/to/js/files.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-html"}),'<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/angular.min.js"><\/script>\n<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/ui-bootstrap.min.js"><\/script>\n<script src="#{plugins.requestContextPath}/plugin/TodoPlugin/ui/js/TodoModule.js"><\/script>\n')),(0,i.kt)("p",null,"The path to the page would be the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"{serverpath}/plugins/pluginPage.jsf?pn={PluginName}"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginName")," is the name of your plugin, as specified in the manifest, and ",(0,i.kt)("inlineCode",{parentName:"p"},"serverpath")," is the path to your server."))}w.isMDXComponent=!0}}]);