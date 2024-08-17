"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[859],{4137:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||t;return r?n.createElement(f,i(i({ref:a},c),{},{components:r})):n.createElement(f,i({ref:a},c))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<t;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7219:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(4137));const t={title:"Posibles fugas de DNS",sidebar_position:9},i=void 0,s={unversionedId:"adguard-for-windows/solving-problems/dns-leaks",id:"adguard-for-windows/solving-problems/dns-leaks",title:"Posibles fugas de DNS",description:"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, descarga la aplicaci\xf3n AdGuard",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-for-windows/solving-problems/dns-leaks.md",sourceDirName:"adguard-for-windows/solving-problems",slug:"/adguard-for-windows/solving-problems/dns-leaks",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dns-leaks",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-windows/solving-problems/dns-leaks.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Posibles fugas de DNS",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"C\xf3mo crear un archivo dump",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/dump-file"},next:{title:"Problemas conocidos de AdGuard para Windows",permalink:"/KnowledgeBase/es/adguard-for-windows/solving-problems/known-issues"}},l={},d=[{value:"Direcci\xf3n DNS Bootstrap",id:"direcci\xf3n-dns-bootstrap",level:2},{value:"Servidor DNS fallback",id:"servidor-dns-fallback",level:2}],c={toc:d};function u(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Este art\xedculo trata sobre AdGuard para Windows, un bloqueador de anuncios multifuncional que protege tu dispositivo a nivel de sistema. Para ver c\xf3mo funciona, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"descarga la aplicaci\xf3n AdGuard"))),(0,o.kt)("p",null,"AdGuard para Windows permite a los usuarios especificar una direcci\xf3n de servidor DNS para resolver consultas en lugar del servidor DNS del sistema, que proporciona tu ISP si no se anula en la configuraci\xf3n del sistema. El uso de un servidor DNS no predeterminado puede proteger tu tr\xe1fico DNS de la interceptaci\xf3n del ISP. Adem\xe1s, al elegir un servidor DNS cifrado y/o filtrado, obtienes otra capa de protecci\xf3n contra malos actores y anuncios molestos."),(0,o.kt)("p",null,"Muchos usuarios de AdGuard para Windows aprecian la funci\xf3n de protecci\xf3n DNS. Pero algunos de ellos se encuentran con el siguiente problema: una comprobaci\xf3n en un sitio web como ",(0,o.kt)("a",{parentName:"p",href:"https://ipleak.net/"},"https://ipleak.net/")," muestra que las solicitudes son gestionadas por el servidor DNS predeterminado en lugar del seleccionado. En este art\xedculo, te contamos por qu\xe9 ocurre esto y c\xf3mo evitarlo."),(0,o.kt)("h2",{id:"direcci\xf3n-dns-bootstrap"},"Direcci\xf3n DNS Bootstrap"),(0,o.kt)("p",null,"Las direcciones del servidor DNS pueden escribirse como IP o como nombres de dominio. En el caso de las direcciones IP no hay dificultades: AdGuard reenv\xeda la solicitud DNS directamente al servidor especificado en el m\xf3dulo de protecci\xf3n DNS. Sin embargo, las direcciones de servidor DNS cifradas, como DoT o DoH, suelen escribirse como nombres de dominio. En este caso, para resolver primero la direcci\xf3n del servidor DNS cifrado, AdGuard env\xeda una consulta DNS a la direcci\xf3n de arranque, que es de forma predeterminada un servidor DNS del sistema. Esta conexi\xf3n es lo que los servicios de control perciben como una fuga."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Para eliminar esta fuga:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ve a ",(0,o.kt)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,o.kt)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Lista de direcciones de arranque personalizadas")),(0,o.kt)("li",{parentName:"ul"},"ingresa la direcci\xf3n de arranque personalizada en formato de direcci\xf3n IP (puedes usar ",(0,o.kt)("a",{parentName:"li",href:"https://adguard-dns.io/kb/general/dns-providers/"},"la lista de proveedores de DNS conocidos"),")"),(0,o.kt)("li",{parentName:"ul"},"haz clic en ",(0,o.kt)("em",{parentName:"li"},"Guardar"))),(0,o.kt)("h2",{id:"servidor-dns-fallback"},"Servidor DNS fallback"),(0,o.kt)("p",null,"Puede ocurrir que AdGuard no pueda llegar al servidor especificado debido a una conexi\xf3n a Internet d\xe9bil, a que haya expirado el tiempo de espera establecido por defecto o a alg\xfan problema relacionado con el servidor. En este caso, se conectar\xe1 al servidor fallback, que de forma predeterminada es un servidor DNS del sistema. Esta conexi\xf3n tambi\xe9n ser\xe1 considerada por el servicio de control como una fuga."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Para eliminar esta fuga:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ve a ",(0,o.kt)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,o.kt)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Servidores fallback")),(0,o.kt)("li",{parentName:"ul"},"marca la opci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Usar servidores personalizados")),(0,o.kt)("li",{parentName:"ul"},"luego busca la secci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Lista de servidores fallback personalizados")," e ingresa los servidores fallback personalizados, uno por l\xednea")),(0,o.kt)("p",null,"o"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ve a ",(0,o.kt)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,o.kt)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Servidores fallback")),(0,o.kt)("li",{parentName:"ul"},"marca la opci\xf3n ",(0,o.kt)("em",{parentName:"li"},"No usar servidores alternativos"))),(0,o.kt)("p",null,"o"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ve a ",(0,o.kt)("em",{parentName:"li"},"Configuraci\xf3n avanzada")),(0,o.kt)("li",{parentName:"ul"},"despl\xe1zate hacia abajo hasta la secci\xf3n ",(0,o.kt)("em",{parentName:"li"},"Per\xedodo de tiempo de espera del servidor DNS")),(0,o.kt)("li",{parentName:"ul"},"introduce un n\xfamero grande arbitrario")))}u.isMDXComponent=!0}}]);