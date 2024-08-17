"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[5504],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const i={title:"Certificate installation on devices with Android 11+",sidebar_position:12},o=void 0,l={unversionedId:"adguard-for-android/solving-problems/manual-certificate",id:"adguard-for-android/solving-problems/manual-certificate",title:"Certificate installation on devices with Android 11+",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, scarica l'app di AdGuard",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/manual-certificate.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/manual-certificate",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/manual-certificate",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/manual-certificate.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Certificate installation on devices with Android 11+",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Manual installation of the security certificate into the Firefox browser",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/firefox-certificates"},next:{title:"Certificate installation in a Secure folder",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/secure-folder"}},s={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"scarica l'app di AdGuard"))),(0,n.kt)("p",null,"To be able to ",(0,n.kt)("a",{parentName:"p",href:"/KnowledgeBase/it/general/https-filtering/what-is-https-filtering"},"filter HTTPS traffic")," (which is extremely important as most ads use HTTPS), AdGuard needs to install a certificate into your device's user storage. On older versions of the Android OS this was done automatically, but on Android 11 and later users have to install it manually."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/manual-certificate/g.gif",alt:"Certificate *mobile_border"})),(0,n.kt)("p",null,"Follow these steps to install AdGuard certificate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When you see the ",(0,n.kt)("em",{parentName:"p"},"HTTPS filtering is off")," notification, tap ",(0,n.kt)("em",{parentName:"p"},"Enable"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then you'll be presented with three screens that explain:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Why filter HTTPS traffic"),(0,n.kt)("li",{parentName:"ul"},"The safety of this filtering process"),(0,n.kt)("li",{parentName:"ul"},"The necessity of AdGuard certificate")),(0,n.kt)("p",{parentName:"li"},"Consecutively tap ",(0,n.kt)("em",{parentName:"p"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Next")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Save certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"Save")," at the bottom of the opened ",(0,n.kt)("em",{parentName:"p"},"Download")," folder.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After saving, tap ",(0,n.kt)("em",{parentName:"p"},"Open Settings"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("em",{parentName:"p"},"More security settings")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Encryption & credentials")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Install a certificate")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"CA certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You might see a warning. If so, tap ",(0,n.kt)("em",{parentName:"p"},"Install anyway")," and enter your PIN if necessary.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the AdGuard certificate file. Its name should look like ",(0,n.kt)("em",{parentName:"p"},"adguard_1342_020322.crt"),"."))),(0,n.kt)("p",null,"You're all set! Once the certificate is installed successfully, you've enabled HTTPS filtering."),(0,n.kt)("p",null,"Please note that the steps provided are based on the Google Pixel 7 smartphone. If you're using a different Android device, the exact menu names or options might vary. For easier navigation consider searching for a certificate by entering \u201ccertificate\u201d or \u201ccredentials\u201d in the settings search bar."),(0,n.kt)("p",null,"If you experience issues during the manual certificate installation (for example, you installed the certificate, but the application keeps ignoring it), you can follow one of the solutions below."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Restart AdGuard."),(0,n.kt)("li",{parentName:"ol"},"Try to install the correct certificate (AdGuard Personal CA) one more time.")),(0,n.kt)("p",null,"If you still encounter a problem and can't install the certificate, please contact our support team at ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."))}d.isMDXComponent=!0}}]);