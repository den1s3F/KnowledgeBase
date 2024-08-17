"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6638],{4137:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},d=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?t.createElement(f,i(i({ref:r},d),{},{components:a})):t.createElement(f,i({ref:r},d))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7750:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(7462),n=(a(7294),a(4137));const o={title:"Configurar el filtrado en Tor Browser",sidebar_position:10},i=void 0,l={unversionedId:"adguard-for-mac/solving-problems/tor-filtering",id:"adguard-for-mac/solving-problems/tor-filtering",title:"Configurar el filtrado en Tor Browser",description:"Este art\xedculo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-mac/solving-problems/tor-filtering.md",sourceDirName:"adguard-for-mac/solving-problems",slug:"/adguard-for-mac/solving-problems/tor-filtering",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/tor-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-mac/solving-problems/tor-filtering.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Configurar el filtrado en Tor Browser",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Gu\xeda de configuraci\xf3n avanzada",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/advanced-settings"},next:{title:"Incompatibilidad con Screen Time",permalink:"/KnowledgeBase/es/adguard-for-mac/solving-problems/screen-time-issues"}},s={},c=[],d={toc:c};function u(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Mac, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel del sistema. Para ver c\xf3mo funciona, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"descarga la aplicaci\xf3n AdGuard"))),(0,n.kt)("p",null,"De forma predeterminada, Tor Browser se agrega a la lista de aplicaciones filtradas de AdGuard. Sin embargo, para filtrarlo, AdGuard necesita cambiar la configuraci\xf3n de seguridad de Tor. Esto har\xe1 que Tor conf\xede en el certificado CA de AdGuard."),(0,n.kt)("p",null,"Si decides filtrar el Tor y lo tienes sleccionado en ",(0,n.kt)("em",{parentName:"p"},"Preferencias")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Red")," \u2192 ",(0,n.kt)("em",{parentName:"p"},"Aplicaciones"),", AdGuard te mostrar\xe1 este cuadro de di\xe1logo:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png",alt:"Cuadro de di\xe1logo de AdGuard"})),(0,n.kt)("p",null,"Al actualizar la configuraci\xf3n de Tor, AdGuard establecer\xe1 lo siguiente:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"security.enterprise_roots.enabled"),": true"),(0,n.kt)("p",null,"Esta configuraci\xf3n har\xe1 que Tor conf\xede en los certificados root. ",(0,n.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox"},"M\xe1s informaci\xf3n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"security.cert_pinning.enforcement_level"),": 1"),(0,n.kt)("p",null,"Public Key Pinning es una medida de seguridad que permite a los sitios web garantizar que la conexi\xf3n entre un sitio web y un usuario es aut\xe9ntica. Esto implica que el sitio web publique una lista de claves p\xfablicas, o pins, en los que conf\xeda. Con el nivel de aplicaci\xf3n establecido en 1, los pins no se aplican para los CA personalizados. ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning"},"M\xe1s informaci\xf3n")),(0,n.kt)("p",null,"Para aplicar los cambios, deber\xe1s reiniciar el Tor Browser."),(0,n.kt)("p",null,"Si cambias manualmente esta configuraci\xf3n, el filtrado de Tor se detendr\xe1."))}u.isMDXComponent=!0}}]);