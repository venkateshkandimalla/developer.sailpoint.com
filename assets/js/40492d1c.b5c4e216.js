"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17179],{27909:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>v,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var s=n(3905),o=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(t,e,n)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))l.call(e,n)&&h(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&h(t,n,e[n]);return t},u=(t,e)=>a(t,r(e)),m=(t,e)=>{var n={};for(var s in t)l.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&i)for(var s of i(t))e.indexOf(s)<0&&p.call(t,s)&&(n[s]=t[s]);return n};const f={id:"python-sdk-getting-started",title:"Getting started with the Python SDK",pagination_label:"Python SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"pythonsdk",keywords:["python","sdk","start"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python/getting-started",tags:["SDK"]},c=void 0,y={unversionedId:"tools/sdk/python/python-sdk-getting-started",id:"tools/sdk/python/python-sdk-getting-started",title:"Getting started with the Python SDK",description:"Learn how to use the Python SDK in this guide.",source:"@site/docs/tools/sdk/python/getting-started.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/getting-started",permalink:"/docs/tools/sdk/python/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/getting-started.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1720812556,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:1,frontMatter:{id:"python-sdk-getting-started",title:"Getting started with the Python SDK",pagination_label:"Python SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"pythonsdk",keywords:["python","sdk","start"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python/getting-started",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Python SDK",permalink:"/docs/tools/sdk/python"},next:{title:"Create a resource",permalink:"/docs/tools/sdk/python/create"}},k={},g=[{value:"List Transforms",id:"list-transforms",level:2},{value:"Use query parameters to filter your tenant&#39;s transform list",id:"use-query-parameters-to-filter-your-tenants-transform-list",level:3},{value:"Use methods that return HTTP Info",id:"use-methods-that-return-http-info",level:2}],w={toc:g},b="wrapper";function v(t){var e=t,{components:n}=e,o=m(e,["components"]);return(0,s.kt)(b,u(d(d({},w),o),{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the Python SDK, refer to ",(0,s.kt)("a",d({parentName:"p"},{href:"/docs/tools/sdk/python"}),"Installation and Configuration"),"."),(0,s.kt)("h2",d({},{id:"list-transforms"}),"List Transforms"),(0,s.kt)("p",null,"One of the most useful functionalities of the Python SDK is the ability to easily access all the ",(0,s.kt)("a",d({parentName:"p"},{href:"/idn/api/v3"}),"V3 APIs")," and ",(0,s.kt)("a",d({parentName:"p"},{href:"/idn/api/beta"}),"Beta APIs")," and implement them in your project. "),(0,s.kt)("p",null,"Here is an example of how to use the SDK to get a list of available ",(0,s.kt)("a",d({parentName:"p"},{href:"/idn/docs/transforms"}),"transforms"),". This example leverages the ",(0,s.kt)("a",d({parentName:"p"},{href:"/idn/api/v3/list-transforms"}),"List Transforms endpoint"),". "),(0,s.kt)("p",null,'Create a file in your project called "sdk.py" and copy this content into it:'),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-python"}),'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nimport urllib3\n\nconfiguration = Configuration()\nwith sailpoint.v3.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = sailpoint.v3.TransformsApi(api_client)\n\n    # List transforms\n    try:\n        api_response = api_instance.list_transforms()\n        print("The response of TransformsApi->list_transforms:\\n")\n        print(api_response)\n    except Exception as e:\n        print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n')),(0,s.kt)("p",null,"This example imports the V3 APIs, which allows you to call the List Transforms V3 endpoint in your code. "),(0,s.kt)("p",null,"To run the code, run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-go"}),"python sdk.py\n")),(0,s.kt)("p",null,"The SDK will return a list of available transforms. "),(0,s.kt)("p",null,"You can use this example as a guide for how to access all the V3 and Beta APIs (you would use ",(0,s.kt)("inlineCode",{parentName:"p"},"import sailpoint.beta")," to import the Beta APIs). "),(0,s.kt)("h3",d({},{id:"use-query-parameters-to-filter-your-tenants-transform-list"}),"Use query parameters to filter your tenant's transform list"),(0,s.kt)("p",null,"With the same SDK function, you can use query parameters to limit the results of your transforms list to only the results you want. "),(0,s.kt)("p",null,"Refer to the ",(0,s.kt)("a",d({parentName:"p"},{href:"/idn/api/v3/list-transforms"}),"List Transforms endpoint specification")," to view all its query parameters. "),(0,s.kt)("p",null,'Here is an example that uses query parameters to limit the list to no more than 10 transforms that all start with the name "Test": '),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-python"}),'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nimport urllib3\n\nconfiguration = Configuration()\nwith sailpoint.v3.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = sailpoint.v3.TransformsApi(api_client)\n\n    # List transforms\n    try:\n        api_response = api_instance.list_transforms(filters=\'name sw "Test"\', limit=10)\n        print("The response of TransformsApi->list_transforms:\\n")\n        print(api_response)\n    except Exception as e:\n        print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n')),(0,s.kt)("p",null,"To run the code, run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-go"}),"python sdk.py\n")),(0,s.kt)("p",null,'The SDK will return a list of no more than 10 transforms that all start with the name "Test". '),(0,s.kt)("h2",d({},{id:"use-methods-that-return-http-info"}),"Use methods that return HTTP Info"),(0,s.kt)("p",null,"Each method has two versions - one returns only the response sent back from the endpoint, and the other returns the status and other HTTP info along with the response."),(0,s.kt)("p",null,"An example of the first method version is the ",(0,s.kt)("inlineCode",{parentName:"p"},"list_transforms()")," method from earlier example. This method returns the response from the endpoint but no status or headers."),(0,s.kt)("p",null,"This is what the second method version would be: ",(0,s.kt)("inlineCode",{parentName:"p"},"list_transforms_with_http_info()"),". This method will return the response as well as status, headers and raw data from the endpoint."))}v.isMDXComponent=!0}}]);