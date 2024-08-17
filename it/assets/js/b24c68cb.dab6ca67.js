"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[7925],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const o={title:"How to collect Windows system logs",sidebar_position:5},i=void 0,l={unversionedId:"adguard-for-windows/solving-problems/system-logs",id:"adguard-for-windows/solving-problems/system-logs",title:"How to collect Windows system logs",description:"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, scarica l'app di AdGuard",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/system-logs.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/system-logs",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/system-logs",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/system-logs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to collect Windows system logs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to collect AdGuard installation logs",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/installation-logs"},next:{title:"Errore d'installazione comuni",permalink:"/KnowledgeBase/it/adguard-for-windows/solving-problems/common-installer-errors"}},p={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Questo articolo riguarda AdGuard per Windows, un blocco annunci multifunzionale che protegge il tuo dispositivo a livello di sistema. Per vedere come funziona, ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"scarica l'app di AdGuard"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I dati e/o i file forniti negli registri di sistema sono trattati in conformit\xe0 con ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/en/privacy.html"},"l'Informativa sulla privacy di AdGuard"),".")),(0,r.kt)("p",null,"To analyze and diagnose different problems that may potentially arise, the AdGuard support service might need Windows system log files. Windows event logs contain records about all errors that occurr with the installed software, including AdGuard. Below is the brief instruction describing the way to get the log files and to send them to our support service if necessary."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("em",{parentName:"p"},"Win + R"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the window that appears type in ",(0,r.kt)("inlineCode",{parentName:"p"},"eventvwr")," and click ",(0,r.kt)("em",{parentName:"p"},"OK"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_1.png",alt:"Run window *mobile"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Event Viewer window appears as shown in the picture."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/newscreenshots/En/eng_event_logs_2.png",alt:"Event viewer *border"})),(0,r.kt)("p",{parentName:"li"},"To save files that we need, do the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("em",{parentName:"p"},"Application"),": ",(0,r.kt)("em",{parentName:"p"},"Event Viewer (Local)")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Windows Logs")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Application"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Right-click ",(0,r.kt)("em",{parentName:"p"},"Application")," and in the drop-down menu select ",(0,r.kt)("em",{parentName:"p"},"Save All Events As..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select a name and where to save, click ",(0,r.kt)("em",{parentName:"p"},"Save"),". Select ",(0,r.kt)("em",{parentName:"p"},"Display information for the following languages"),". You need to check the checkbox next to ",(0,r.kt)("em",{parentName:"p"},"English"),". Click ",(0,r.kt)("em",{parentName:"p"},"OK"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("em",{parentName:"p"},"System"),": ",(0,r.kt)("em",{parentName:"p"},"Event Viewer (Local)")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Windows Logs")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"System"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Right-click ",(0,r.kt)("em",{parentName:"p"},"System")," and in the drop-down menu select ",(0,r.kt)("em",{parentName:"p"},"Save All Events As..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Choose a destination folder, enter the name, click ",(0,r.kt)("em",{parentName:"p"},"Save"),". Select ",(0,r.kt)("em",{parentName:"p"},"Display information for the following languages"),". You need to tick the box next to ",(0,r.kt)("em",{parentName:"p"},"English"),". Click ",(0,r.kt)("em",{parentName:"p"},"OK"),"."))))),(0,r.kt)("p",null,"Please send the two files that you've recently saved to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:support@adguard.com"},"support@adguard.com")),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"AdGuard si impegna a proteggere la tua privacy. Rispettiamo rigorosamente la nostra ",(0,r.kt)("a",{parentName:"p",href:"https://adguard.com/privacy/windows.html"},"Informativa sulla privacy")," e non raccogliamo alcuna informazione privata sugli utenti. Prima di inviare i registri al team di supporto, esamina il file poich\xe9 potrebbe contenere informazioni aggiuntive che non desideri condividere. Se contiene tali informazioni personali, ti consigliamo di eliminarle prima.")))}d.isMDXComponent=!0}}]);