"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7521],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),b=o,m=c["".concat(d,".").concat(b)]||c[b]||u[b]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const a={title:"Compatibility with the standalone app",sidebar_position:4},i=void 0,s={unversionedId:"adguard-browser-extension/compatibility",id:"adguard-browser-extension/compatibility",title:"Compatibility with the standalone app",description:"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, download the AdGuard app",source:"@site/docs/adguard-browser-extension/compatibility.md",sourceDirName:"adguard-browser-extension",slug:"/adguard-browser-extension/compatibility",permalink:"/KnowledgeBase/ja/adguard-browser-extension/compatibility",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-browser-extension/compatibility.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Compatibility with the standalone app",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to install",permalink:"/KnowledgeBase/ja/adguard-browser-extension/installation"},next:{title:"Integration mode (legacy)",permalink:"/KnowledgeBase/ja/adguard-browser-extension/integration-mode"}},d={},l=[{value:"AdGuard Browser Assistant",id:"adguard-browser-assistant",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article is about the AdGuard Browser Extension, which safeguards only your browser. To protect your entire device, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"download the AdGuard app"))),(0,o.kt)("p",null,"While AdGuard Browser Extension can block ads in browsers, ",(0,o.kt)("a",{parentName:"p",href:"/adguard-browser-extension/comparison-standalone"},"AdGuard standalone programs")," filter all the traffic on your device, including from browsers and apps."),(0,o.kt)("p",null,"If you decide to install both the extension and the standalone program on your PC, you may encounter some compatibility issues. The problem is that in some cases the application and the extension may interfere with each other. Some websites will no longer be protected by the desktop program and will only be protected by the extension, which has fewer options. Also, filtering may work incorrectly for some websites. Therefore, we don't recommend using the extension together with the application."),(0,o.kt)("p",null,"If you have the desktop version of AdGuard installed on your PC, it is better to use AdGuard Browser Assistant instead of the extension."),(0,o.kt)("h2",{id:"adguard-browser-assistant"},"AdGuard Browser Assistant"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/browser_extension/ad_blocker_browser_extension_assistant.png",alt:"AdGuard Browser Assistant *mobile_border"})),(0,o.kt)("p",null,"AdGuard Browser Assistant is a browser extension that works and feels just like AdGuard Browser Extension, but it's much lighter and doesn't interfere with the desktop apps. You can ",(0,o.kt)("a",{parentName:"p",href:"/adguard-for-windows/browser-assistant"},"read more about Browser Assistant for Windows")," or ",(0,o.kt)("a",{parentName:"p",href:"/adguard-for-mac/features/browser-assistant"},"Mac"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-assistant/overview.html"},"download it from our website"),"."),(0,o.kt)("p",null,"AdGuard Browser Assistant is available in all major browsers."))}u.isMDXComponent=!0}}]);