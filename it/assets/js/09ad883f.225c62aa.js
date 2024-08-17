"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[4733],{4137:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(a),k=n,N=u["".concat(i,".").concat(k)]||u[k]||m[k]||o;return a?r.createElement(N,p(p({ref:e},s),{},{components:a})):r.createElement(N,p({ref:e},s))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:n,p[1]=l;for(var d=2;d<o;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5829:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(4137));const o={title:"How to set up outbound proxy",sidebar_position:8},p=void 0,l={unversionedId:"adguard-for-android/solving-problems/outbound-proxy",id:"adguard-for-android/solving-problems/outbound-proxy",title:"How to set up outbound proxy",description:"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, scarica l'app di AdGuard",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/adguard-for-android/solving-problems/outbound-proxy.md",sourceDirName:"adguard-for-android/solving-problems",slug:"/adguard-for-android/solving-problems/outbound-proxy",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/outbound-proxy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/adguard-for-android/solving-problems/outbound-proxy.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"How to set up outbound proxy",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Come bloccare gli annunci nell'app di YouTube",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/youtube-ads"},next:{title:"How to protect AdGuard from being disabled by the system",permalink:"/KnowledgeBase/it/adguard-for-android/solving-problems/background-work"}},i={},d=[{value:"Proxy configuration examples",id:"proxy-configuration-examples",level:2},{value:"How to use AdGuard with Tor",id:"how-to-use-adguard-with-tor",level:3},{value:"How to use AdGuard with PIA (Private Internet Access)",id:"how-to-use-adguard-with-pia-private-internet-access",level:3},{value:"How to use AdGuard with TorGuard",id:"how-to-use-adguard-with-torguard",level:3},{value:"How to use AdGuard with NordVPN",id:"how-to-use-adguard-with-nordvpn",level:3},{value:"How to use AdGuard with Shadowsocks",id:"how-to-use-adguard-with-shadowsocks",level:3},{value:"How to use AdGuard with Clash",id:"how-to-use-adguard-with-clash",level:3},{value:"Limitations",id:"limitations",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Per vedere come funziona, ",(0,n.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"scarica l'app di AdGuard"))),(0,n.kt)("p",null,"Below you can find a list of the most famous applications that you can configure to work as proxies in AdGuard."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If your app is not listed below, please check on its proxy configurations in the settings or contact its support team.")),(0,n.kt)("p",null,"AdGuard allows you to route your device's traffic through a proxy server. To access proxy settings, open ",(0,n.kt)("strong",{parentName:"p"},"Settings")," and then proceed to ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),"."),(0,n.kt)("h2",{id:"proxy-configuration-examples"},"Proxy configuration examples"),(0,n.kt)("p",null,"In this article we give examples of how to set up some of the most popular proxies to work with AdGuard."),(0,n.kt)("h3",{id:"how-to-use-adguard-with-tor"},"How to use AdGuard with Tor"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy"),". Download \u201cOrbot: Proxy with Tor\u201d directly from ",(0,n.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=org.torproject.android&noprocess"},"Google Play")," or by tapping ",(0,n.kt)("strong",{parentName:"p"},"Integrate with Tor")," and then ",(0,n.kt)("strong",{parentName:"p"},"Install"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Orbot and press the ",(0,n.kt)("strong",{parentName:"p"},"Start")," button on the application's main screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go back to the ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," screen of AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the ",(0,n.kt)("strong",{parentName:"p"},"Integrate with Tor")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All the required fields will be pre-filled:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS4")," or ",(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"9050"))))),(0,n.kt)("p",{parentName:"li"},"Or you can tap ",(0,n.kt)("strong",{parentName:"p"},"Proxy server")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server"),", enter these values manually, and set Orbot as a default proxy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."),(0,n.kt)("p",{parentName:"li"},"Now AdGuard will forward all traffic through Orbot. If you disable Orbot, Internet connection will be unavailable until you disable outbound proxy settings in AdGuard."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-pia-private-internet-access"},"How to use AdGuard with PIA (Private Internet Access)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a PIA VPN client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," button and enter the following data:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy-nl.privateinternetaccess.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You also need to fill out the ",(0,n.kt)("strong",{parentName:"p"},"Username/Password")," fields. To do so, log in to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.privateinternetaccess.com/pages/client-sign-in"},"Client Control Panel")," on the PIA website. Tap the ",(0,n.kt)("strong",{parentName:"p"},"Generate Password")," button under the ",(0,n.kt)("strong",{parentName:"p"},"Generate PPTP/L2TP/SOCKS Password")," section. A username starting with \u201cx\u201d and a random password will be shown. Use them to fill out the ",(0,n.kt)("strong",{parentName:"p"},"Proxy username")," and ",(0,n.kt)("strong",{parentName:"p"},"Proxy password")," fields in AdGuard.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-torguard"},"How to use AdGuard with TorGuard"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a TorGuard client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," button and enter the following data:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"proxy.torguard.org")," or ",(0,n.kt)("em",{parentName:"td"},"proxy.torguard.io"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")," or ",(0,n.kt)("em",{parentName:"td"},"1085")," or ",(0,n.kt)("em",{parentName:"td"},"1090")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password")," fields, enter your proxy username and proxy password you have chosen at TorGuard signup.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-nordvpn"},"How to use AdGuard with NordVPN"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log in to your NordVPN account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Services")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"NordVPN")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Manual setup")," and set up your service credentials manually.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will receive a verification code on the email address you use for NordVPN. Use it on your NordVPN account as requested, then tap ",(0,n.kt)("em",{parentName:"p"},"Apply")," and ",(0,n.kt)("em",{parentName:"p"},"OK")," to save the changes."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/outbound-proxy/nordvpn-manual-setup.png",alt:"Manual setup"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the AdGuard app, go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the following data:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},"Any server from ",(0,n.kt)("a",{parentName:"td",href:"https://support.nordvpn.com/hc/en-us/articles/20195967385745-NordVPN-proxy-setup-for-qBittorrent"},"this list"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter your NordVPN credentials in the ",(0,n.kt)("strong",{parentName:"p"},"Username")," and ",(0,n.kt)("strong",{parentName:"p"},"Password")," fields.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-shadowsocks"},"How to use AdGuard with Shadowsocks"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you have already configured a Shadowsocks server and a client on your device.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You should remove Shadowsocks app from filtering before setting up the process (",(0,n.kt)("strong",{parentName:"p"},"App management")," \u2192\xa0",(0,n.kt)("strong",{parentName:"p"},"Shadowsocks")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),") to avoid infinite loops and drops.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap the ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," and fill in the fields:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"1080")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Save and select"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enable the main Proxy switch and AdGuard protection to route your device's traffic through the proxy."))),(0,n.kt)("h3",{id:"how-to-use-adguard-with-clash"},"How to use AdGuard with Clash"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Here we presume that you are already a Clash client and have it installed on your device.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Clash and go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Route System Traffic")," and toggle the switch. This will set Clash to proxy mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open AdGuard and go to ",(0,n.kt)("strong",{parentName:"p"},"App management"),". Choose ",(0,n.kt)("strong",{parentName:"p"},"Clash For Android")," and disable ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),". This will eliminate traffic looping.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then go to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Filtering")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Network")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy")," \u2192 ",(0,n.kt)("strong",{parentName:"p"},"Proxy server"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tap ",(0,n.kt)("strong",{parentName:"p"},"Add proxy server")," and fill in the fields:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy type"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"SOCKS5"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy host"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"127.0.0.1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Proxy port"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"7891"))))))),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"There is a factor that can prevent certain traffic from being routed through the outgoing proxy even after you configure AdGuard proxy settings. It can happen if you don't set up the app itself to send the traffic through AdGuard. To do it, you need to proceed to ",(0,n.kt)("strong",{parentName:"p"},"App management"),", choose the app, and turn on ",(0,n.kt)("strong",{parentName:"p"},"Route traffic through AdGuard"),"."))}m.isMDXComponent=!0}}]);