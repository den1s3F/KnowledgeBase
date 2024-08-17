"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6099],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={title:"Advanced protection",sidebar_position:3},i=void 0,d={unversionedId:"adguard-for-ios/features/advanced-protection",id:"adguard-for-ios/features/advanced-protection",title:"Advanced protection",description:"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. \u5b9f\u969b\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001AdGuard \u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/adguard-for-ios/features/advanced-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/advanced-protection",permalink:"/KnowledgeBase/ja/adguard-for-ios/features/advanced-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/advanced-protection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Advanced protection",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DNS protection",permalink:"/KnowledgeBase/ja/adguard-for-ios/features/dns-protection"},next:{title:"Activity and statistics",permalink:"/KnowledgeBase/ja/adguard-for-ios/features/activity"}},c={},s=[{value:"How to enable",id:"how-to-enable",level:3}],p={toc:s};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This article is about AdGuard for iOS, a multifunctional ad blocker that protects your device at the system level. \u5b9f\u969b\u3069\u306e\u3088\u3046\u306b\u6a5f\u80fd\u3059\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"AdGuard \u30a2\u30d7\u30ea"),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"In iOS 15 Apple has added the support for Safari Web Extensions, and we in turn added a new ",(0,a.kt)("em",{parentName:"p"},"Advanced protection")," module to AdGuard for iOS. It allows AdGuard to apply advanced filtering rules, such as CSS rules, CSS selectors, and scriptlets, and therefore to deal even with the complex ads, such as YouTube ads."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_15_en.jpeg",alt:"Advanced protection screen *mobile_border"})),(0,a.kt)("h3",{id:"how-to-enable"},"How to enable"),(0,a.kt)("p",null,"To enable ",(0,a.kt)("em",{parentName:"p"},"Advanced protection"),", open the ",(0,a.kt)("em",{parentName:"p"},"Protection")," tab by tapping the second left icon at the bottom of the screen, select the ",(0,a.kt)("em",{parentName:"p"},"Advanced protection")," module, activate the feature by toggling the switch slider, and follow the on-screen instructions."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("em",{parentName:"p"},"Advanced protection")," only works on iOS 15 and later versions. If you are using earlier versions of iOS, you will see the ",(0,a.kt)("em",{parentName:"p"},"YouTube ad blocking")," module in the app instead of the ",(0,a.kt)("em",{parentName:"p"},"Advanced protection"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/protection_screen_14_en.jpeg",alt:"Protection screen on iOS 14 and earlier *mobile_border"})))}l.isMDXComponent=!0}}]);