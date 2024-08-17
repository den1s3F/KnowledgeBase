"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7747],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(g,o(o({ref:r},c),{},{components:t})):n.createElement(g,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5354:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(7462),a=(t(7294),t(4137));const i={title:"Comment installer AdGuard sur macOS High Sierra et sup\xe9rieur",sidebar_position:3},o=void 0,l={unversionedId:"adguard-for-mac/solving-problems/high-sierra-compatibility",id:"adguard-for-mac/solving-problems/high-sierra-compatibility",title:"Comment installer AdGuard sur macOS High Sierra et sup\xe9rieur",description:"Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, t\xe9l\xe9chargez l'application AdGuard",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/high-sierra-compatibility.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/high-sierra-compatibility",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/high-sierra-compatibility",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/high-sierra-compatibility.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Comment installer AdGuard sur macOS High Sierra et sup\xe9rieur",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"La protection ne peut pas \xeatre activ\xe9e",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/protection-cannot-be-enabled"},next:{title:"Probl\xe8mes de compatibilit\xe9 avec diff\xe9rentes versions de macOS",permalink:"/KnowledgeBase/fr/adguard-for-mac/solving-problems/big-sur-issues"}},s={},u=[],c={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cet article parle de AdGuard pour Mac, un bloqueur d'annonces multifonctionnel qui prot\xe8ge votre appareil au niveau du syst\xe8me. Pour voir comment cela fonctionne, ",(0,a.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"t\xe9l\xe9chargez l'application AdGuard"))),(0,a.kt)("p",null,"Pendant l'installation d'AdGuard sur macOS High Sierra (ou versions ult\xe9rieures), vous pouvez voir un message : \"Extension du syst\xe8me bloqu\xe9e\". C'est un nouveau m\xe9canisme de s\xe9curit\xe9 apparu dans High Sierra, il n\xe9cessite une autorisation explicite de votre part pour installer une extension syst\xe8me tierce. Pour terminer l'installation d'AdGuard, vous devez autoriser manuellement le chargement de l'extension dans ",(0,a.kt)("em",{parentName:"p"},"Pr\xe9f\xe9rences Syst\xe8me")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"S\xe9curit\xe9 & Confidentialit\xe9")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"G\xe9n\xe9ral"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/PicturesEN/highsierra.png",alt:"Autoriser l'installation de l'extension dans les param\xe8tres"})),(0,a.kt)("p",null,'Cliquez sur le bouton "Autoriser", puis vous pourrez proc\xe9der \xe0 l\'installation normalement.'))}p.isMDXComponent=!0}}]);