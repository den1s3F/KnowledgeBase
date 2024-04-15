"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[479],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={title:"Local.adguard.org domain",sidebar_position:3},i=void 0,l={unversionedId:"general/https-filtering/local-adguard-com-domain",id:"general/https-filtering/local-adguard-com-domain",title:"Local.adguard.org domain",description:"Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the local.adguard.org domain.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/general/https-filtering/local-adguard-com-domain.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/local-adguard-com-domain",permalink:"/KnowledgeBase/de/general/https-filtering/local-adguard-com-domain",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/local-adguard-com-domain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Local.adguard.org domain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Known issues",permalink:"/KnowledgeBase/de/general/https-filtering/known-issues"},next:{title:"Browsing security",permalink:"/KnowledgeBase/de/general/browsing-security"}},s={},d=[{value:"Technical explanation",id:"technical-explanation",level:3},{value:"Verification",id:"verification",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the ",(0,a.kt)("inlineCode",{parentName:"p"},"local.adguard.org")," domain."),(0,a.kt)("p",null,"First of all, don't worry, this is not a real domain, and there is actually no real server with that name. This domain is used to apply cosmetic filtering to web pages, but everything is done locally right on your device without connecting to any server."),(0,a.kt)("h3",{id:"technical-explanation"},"Technical explanation"),(0,a.kt)("p",null,"But what's going on and why is it done? Please read the technical explanation below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"AdGuard is a network-level content blocker so it cannot simply add custom JavaScript and CSS to webpages like what browser extensions do. However, doing this is crucial for quality content blocking."),(0,a.kt)("li",{parentName:"ol"},'In order to do it AdGuard injects a "content script" that looks like this: ',(0,a.kt)("inlineCode",{parentName:"li"},'<script src="https://local.adguard.org/.../content-script.js">'),'. This "content script" takes care of cosmetic filtering, hides or removes ad content from the web pages.'),(0,a.kt)("li",{parentName:"ol"},"Connections to the IP address of the ",(0,a.kt)("inlineCode",{parentName:"li"},"local.adguard.org")," domain are intercepted by AdGuard on the network level and ",(0,a.kt)("strong",{parentName:"li"},"processed locally"),'. This is why that domain has a "static" IP address that does not change for years.')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why do we need to use a real IP address for that?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We cannot use ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the browsers won't accept it."),(0,a.kt)("li",{parentName:"ul"},"Using some IP address from the private subnets is possible, but this solution has two downsides.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First, there is a slight chance of intersecting with an existing intranet service and breaking access to it."),(0,a.kt)("li",{parentName:"ul"},"Second, some DNS servers may consider this a DNS rebinding attack and refuse to respond to ",(0,a.kt)("inlineCode",{parentName:"li"},"local.adguard.org"),".")))),(0,a.kt)("h3",{id:"verification"},"Verification"),(0,a.kt)("p",null,"This is easy to verify. If you disable AdGuard, you'll see that it is simply impossible to establish connection to ",(0,a.kt)("inlineCode",{parentName:"p"},"local.adguard.org")," since there is no server with that address. Just try opening it in your browser when AdGuard is disabled."))}u.isMDXComponent=!0}}]);