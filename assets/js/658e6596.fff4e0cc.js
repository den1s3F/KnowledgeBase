"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2466],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||n;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(4137));const n={title:"How to report bugs",sidebar_position:4},s=void 0,i={unversionedId:"guides/report-bugs",id:"guides/report-bugs",title:"How to report bugs",description:"If you notice a bug while using AdGuard products, please help us address it. Here\u2019s how to report bugs most effectively.",source:"@site/docs/guides/report-bugs.md",sourceDirName:"guides",slug:"/guides/report-bugs",permalink:"/KnowledgeBase/guides/report-bugs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/report-bugs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to report bugs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to report websites and apps",permalink:"/KnowledgeBase/guides/report-website"},next:{title:"How to take a screenshot",permalink:"/KnowledgeBase/guides/take-screenshot"}},u={},p=[{value:"Before you start",id:"before-you-start",level:2},{value:"When to report bugs",id:"when-to-report-bugs",level:3},{value:"How to describe a problem",id:"how-to-describe-a-problem",level:3},{value:"How to record logs",id:"how-to-record-logs",level:3},{value:"How to vote for bug reports or feature requests",id:"how-to-vote-for-bug-reports-or-feature-requests",level:2},{value:"Instructions for all platforms",id:"instructions-for-all-platforms",level:2},{value:"AdGuard for Windows",id:"adguard-for-windows",level:3},{value:"AdGuard for Mac",id:"adguard-for-mac",level:3},{value:"AdGuard for Android",id:"adguard-for-android",level:3},{value:"AdGuard for iOS",id:"adguard-for-ios",level:3},{value:"AdGuard Browser Extension",id:"adguard-browser-extension",level:3},{value:"AdGuard for Safari",id:"adguard-for-safari",level:3}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you notice a bug while using AdGuard products, please help us address it. Here\u2019s how to report bugs most effectively."),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("h3",{id:"when-to-report-bugs"},"When to report bugs"),(0,o.kt)("p",null,"Check that you have the most up-to-date version, and if not, upgrade: the bug might have already been resolved in the new version."),(0,o.kt)("p",null,"Check if the bug hasn\u2019t been reported before. We advise paying attention to both open and closed issues."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/closed_issues.png",alt:"Closed issues"})),(0,o.kt)("h3",{id:"how-to-describe-a-problem"},"How to describe a problem"),(0,o.kt)("p",null,"Try to provide as many details as possible \u2014 that'll make it easier for us to reproduce the bug and figure out how to fix it. Here\u2019s what we expect a bug report to include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your app version"),(0,o.kt)("li",{parentName:"ul"},"Your OS version"),(0,o.kt)("li",{parentName:"ul"},"When you noticed the problem"),(0,o.kt)("li",{parentName:"ul"},"What you were doing or what happened to the app before you noticed the problem. Steps to reproduce it"),(0,o.kt)("li",{parentName:"ul"},"Whether it recurred and with what frequency"),(0,o.kt)("li",{parentName:"ul"},"Whether you have a VPN or an antivirus software")),(0,o.kt)("h3",{id:"how-to-record-logs"},"How to record logs"),(0,o.kt)("p",null,"Read about recording logs in dedicated articles for each platform."),(0,o.kt)("h2",{id:"how-to-vote-for-bug-reports-or-feature-requests"},"How to vote for bug reports or feature requests"),(0,o.kt)("p",null,"If you want to support the implementation of a new feature or bugfix, you can vote for it on GitHub. To vote, just react with some emoji."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/github_reaction.png",alt:"GitHub issue with reactions"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/github_reaction2.png",alt:"GitHub issue without reactions"})),(0,o.kt)("p",null,"You can find reactions in the upper right corner or at the bottom of an issue."),(0,o.kt)("h2",{id:"instructions-for-all-platforms"},"Instructions for all platforms"),(0,o.kt)("h3",{id:"adguard-for-windows"},"AdGuard for Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardforWindows/issues"},"Windows repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForWindows/issues/new/choose"},"page for creating new issues")," and select ",(0,o.kt)("em",{parentName:"p"},"Bug report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/general/windows_gh.png",alt:"Reporting a bug via GitHub *mobile_border"})),(0,o.kt)("h3",{id:"adguard-for-mac"},"AdGuard for Mac"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardforMac/issues"},"Mac repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForMac/issues/new"},"page for creating new issues"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))),(0,o.kt)("h3",{id:"adguard-for-android"},"AdGuard for Android"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardforAndroid/issues"},"Android repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForAndroid/issues/new/choose"},"page for creating new issues")," and select ",(0,o.kt)("em",{parentName:"p"},"Bug report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))),(0,o.kt)("h3",{id:"adguard-for-ios"},"AdGuard for iOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardforiOS/issues"},"iOS repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardForiOS/issues/new/choose"},"page for creating new issues"),", select ",(0,o.kt)("em",{parentName:"p"},"Bug report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))),(0,o.kt)("h3",{id:"adguard-browser-extension"},"AdGuard Browser Extension"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardBrowserExtension/issues/"},"Browser Extension repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdguardBrowserExtension/issues/new/choose"},"page for creating new issues")," and select ",(0,o.kt)("em",{parentName:"p"},"Bug report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))),(0,o.kt)("h3",{id:"adguard-for-safari"},"AdGuard for Safari"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues"},"Safari repo")," to make sure the issue hasn\u2019t been reported yet.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardForSafari/issues/new/choose"},"page for creating new issues")," and select ",(0,o.kt)("em",{parentName:"p"},"Bug report"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the form. If possible, attach screenshots or a screen recording."))))}d.isMDXComponent=!0}}]);