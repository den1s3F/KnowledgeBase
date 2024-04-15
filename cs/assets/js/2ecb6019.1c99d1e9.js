"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[6031],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),k=o,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||n;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(4137));const n={title:"Ochrana Safari",sidebar_position:1},i=void 0,l={unversionedId:"adguard-for-ios/features/safari-protection",id:"adguard-for-ios/features/safari-protection",title:"Ochrana Safari",description:"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, st\xe1hn\u011bte si AdGuard pro Android",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/adguard-for-ios/features/safari-protection.md",sourceDirName:"adguard-for-ios/features",slug:"/adguard-for-ios/features/safari-protection",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/safari-protection",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-ios/features/safari-protection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ochrana Safari",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Jak pou\u017e\xedvat Samsung Pay s AdGuardem v Ji\u017en\xed Korei",permalink:"/KnowledgeBase/cs/adguard-for-android/solving-problems/samsungpay-with-adguard-in-south-korea"},next:{title:"DNS ochrana",permalink:"/KnowledgeBase/cs/adguard-for-ios/features/dns-protection"}},s={},p=[{value:"Blok\xe1tory obsahu",id:"content-blockers",level:3},{value:"Filtry",id:"filters",level:3},{value:"U\u017eivatelsk\xe1 pravidla",id:"user-rules",level:3},{value:"Seznam povolen\xfdch",id:"allowlist",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Tento \u010dl\xe1nek popisuje AdGuard pro iOS, multifunk\u010dn\xed blok\xe1tor reklam, kter\xfd chr\xe1n\xed va\u0161e za\u0159\xedzen\xed na \xfarovni syst\xe9mu. Chcete-li se pod\xedvat, jak to funguje, ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"st\xe1hn\u011bte si AdGuard pro Android"))),(0,o.kt)("h3",{id:"content-blockers"},"Blok\xe1tory obsahu"),(0,o.kt)("p",null,'Blok\xe1tory obsahu slou\u017e\xed jako "kontejnery" pro pravidla filtrov\xe1n\xed, kter\xe1 skute\u010dn\u011b blokuj\xed reklamy a sledov\xe1n\xed. AdGuard pro iOS obsahuje \u0161est blok\xe1tor\u016f obsahu: Obecn\xfd, Soukrom\xed, Soci\xe1ln\xed, Bezpe\u010dnostn\xed, Vlastn\xed a Ostatn\xed. D\u0159\xedve spole\u010dnost Apple umo\u017e\u0148ovala, aby ka\u017ed\xfd blok\xe1tor obsahu obsahoval maxim\xe1ln\u011b 50 tis\xedc pravidel filtrov\xe1n\xed, ale po vyd\xe1n\xed syst\xe9mu iOS 15 se horn\xed hranice posunula na 150 tis\xedc pravidel.'),(0,o.kt)("p",null,"V\u0161echny blok\xe1tory obsahu a jejich stavy, kter\xe9 tematick\xe9 filtry aktu\xe1ln\u011b obsahuj\xed a celkov\xfd po\u010det pou\u017eit\xfdch pravidel filtrov\xe1n\xed najdete na p\u0159\xedslu\u0161n\xe9 obrazovce v ",(0,o.kt)("em",{parentName:"p"},"Pokro\u010dil\xfdch nastaven\xed")," (klepn\u011bte na ikonu ozuben\xe9ho kola vpravo dole \u2192 ",(0,o.kt)("em",{parentName:"p"},"Obecn\xe9")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Pokro\u010dil\xe1 nastaven\xed")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Blok\xe1tory obsahu"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/content_blockers_en.jpeg",alt:"Content blockers *mobile_border"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Pro nejlep\u0161\xed kvalitu filtrov\xe1n\xed ponechte v\u0161echny blok\xe1tory obsahu zapnut\xe9.")),(0,o.kt)("h3",{id:"filters"},"Filtry"),(0,o.kt)("p",null,"\u010cinnost blok\xe1tor\u016f obsahu je zalo\u017eena na filtrech, n\u011bkdy tak\xe9 ozna\u010dovan\xfdch jako seznamy filtr\u016f. Ka\u017ed\xfd filtr je seznam pravidel filtrov\xe1n\xed. Pokud m\xe1te p\u0159i proch\xe1zen\xed webu zapnut\xfd blok\xe1tor reklam, neust\xe1le kontroluje nav\u0161t\xedven\xe9 str\xe1nky a prvky na nich podle t\u011bchto pravidel filtrov\xe1n\xed a blokuje v\u0161e, co jim odpov\xedd\xe1. Jsou vytvo\u0159ena pravidla pro blokov\xe1n\xed reklam, sl\xeddi\u010d\u016f a dal\u0161\xedch."),(0,o.kt)("p",null,"V\u0161echny filtry jsou seskupeny do tematick\xfdch kategori\xed. Chcete-li zobrazit \xfapln\xfd seznam t\u011bchto kategori\xed (nepl\xe9st si s blok\xe1tory obsahu), otev\u0159ete sekci ",(0,o.kt)("em",{parentName:"p"},"Ochrana")," klepnut\xedm na ikonu \u0161t\xedtu a pot\xe9 p\u0159ejd\u011bte na ",(0,o.kt)("em",{parentName:"p"},"Ochrana Safari")," \u2192 ",(0,o.kt)("em",{parentName:"p"},"Filtry"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/filters_group_en.jpeg",alt:"Filter groups *mobile_border"})),(0,o.kt)("p",null,"Je jich osm a ka\u017ed\xe1 kategorie sdru\u017euje n\u011bkolik filtr\u016f, kter\xe9 maj\xed spole\u010dn\xfd \xfa\u010del, tj. blokov\xe1n\xed reklam, blokov\xe1n\xed widget\u016f soci\xe1ln\xedch s\xedt\xed, upozorn\u011bn\xed na soubory cookies, ochranu u\u017eivatele p\u0159ed podvody online. Chcete-li se rozhodnout, kter\xe9 filtry vyhovuj\xed va\u0161im pot\u0159eb\xe1m, p\u0159e\u010dt\u011bte si jejich popis a projd\u011bte \u0161t\xedtky (",(0,o.kt)("inlineCode",{parentName:"p"},"reklamy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"soukrom\xed"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"doporu\u010deno")," atd.)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"V\xedce povolen\xfdch filtr\u016f nezaru\u010duje, \u017ee bude m\xe9n\u011b reklam. Velk\xfd po\u010det sou\u010dasn\u011b aktivovan\xfdch r\u016fzn\xfdch filtr\u016f sni\u017euje kvalitu blokov\xe1n\xed reklam.")),(0,o.kt)("p",null,"Kategorie Vlastn\xed filtry je ve v\xfdchoz\xedm nastaven\xed pr\xe1zdn\xe1, aby do n\xed u\u017eivatel\xe9 mohli p\u0159id\xe1vat sv\xe9 filtry podle adresy URL. Filtry m\u016f\u017eete naj\xedt na internetu nebo si je dokonce zkusit ",(0,o.kt)("a",{parentName:"p",href:"/general/ad-filtering/create-own-filters"},"vytvo\u0159it sami"),"."),(0,o.kt)("h3",{id:"user-rules"},"U\u017eivatelsk\xe1 pravidla"),(0,o.kt)("p",null,"Zde m\u016f\u017eete p\u0159id\xe1vat nov\xe1 pravidla \u2014 bu\u010f je zad\xe1te ru\u010dn\u011b, nebo pou\u017eijete ",(0,o.kt)("a",{parentName:"p",href:"#assistant"},"n\xe1stroj pro ru\u010dn\xed blokov\xe1n\xed AdGuard v Safari"),". Pomoc\xed tohoto n\xe1stroje m\u016f\u017eete p\u0159izp\u016fsobit filtrov\xe1n\xed Safari, ani\u017e byste museli p\u0159id\xe1vat cel\xfd seznam filtr\u016f."),(0,o.kt)("p",null,"Nau\u010dte se vytv\xe1\u0159et vlastn\xed filtry reklam](/general/ad-filtering/create-own-filters). Upozor\u0148ujeme v\u0161ak, \u017ee mnoh\xe9 z nich nebudou v Safari v iOS fungovat."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/iOS/features/user_rules_en.jpeg",alt:"User rules screen *mobile_border"})),(0,o.kt)("h3",{id:"allowlist"},"Seznam povolen\xfdch"),(0,o.kt)("p",null,"T\u0159et\xed \u010d\xe1st obrazovky ",(0,o.kt)("em",{parentName:"p"},"Ochrana Safari"),". Pokud chcete vypnout blokov\xe1n\xed reklam na ur\u010dit\xe9 webov\xe9 str\xe1nce, pom\u016f\u017ee v\xe1m seznam povolen\xfdch. Umo\u017e\u0148uje p\u0159id\xe1vat dom\xe9ny a subdom\xe9ny do v\xfdjimek. AdGuard pro iOS m\xe1 funkci Import/Export, tak\u017ee seznam povolen\xfdch z jednoho za\u0159\xedzen\xed lze snadno p\u0159en\xe9st do jin\xe9ho."))}d.isMDXComponent=!0}}]);