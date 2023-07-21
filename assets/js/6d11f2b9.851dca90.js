"use strict";(self.webpackChunkbedwars_docs=self.webpackChunkbedwars_docs||[]).push([[956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="Commands & Permissions",s={unversionedId:"bedwars1058-discord/commands-and-permissions",id:"bedwars1058-discord/commands-and-permissions",title:"Commands & Permissions",description:"Discord Commands",source:"@site/docs/bedwars1058-discord/commands-and-permissions.md",sourceDirName:"bedwars1058-discord",slug:"/bedwars1058-discord/commands-and-permissions",permalink:"/docs/bedwars1058-discord/commands-and-permissions",draft:!1,editUrl:"https://github.com/IUNGO-INFO/BedWars1058-Discord/docs/bedwars1058-discord/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Commands",permalink:"/docs/bedwars1058-discord/custom-commands"}},d={},l=[{value:"Discord Commands",id:"discord-commands",level:2},{value:"<code>/help</code>",id:"help",level:3},{value:"<code>/leaderboard [option]</code>",id:"leaderboard-option",level:3},{value:"<code>/link</code>",id:"link",level:3},{value:"<code>/party</code>",id:"party",level:3},{value:"<code>/ping</code>",id:"ping",level:3},{value:"<code>/player</code>",id:"player",level:3},{value:"<code>/update_slashes</code>",id:"update_slashes",level:3},{value:"Minecraft Permissions",id:"minecraft-permissions",level:2},{value:"<code>bedwars1058-discord.admin</code>",id:"bedwars1058-discordadmin",level:3}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commands--permissions"},"Commands & Permissions"),(0,a.kt)("h2",{id:"discord-commands"},"Discord Commands"),(0,a.kt)("h3",{id:"help"},(0,a.kt)("inlineCode",{parentName:"h3"},"/help")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Shows all the current Discord commands available.")),(0,a.kt)("h3",{id:"leaderboard-option"},(0,a.kt)("inlineCode",{parentName:"h3"},"/leaderboard [option]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Shows the leaderboard for the list of valid leaderboards. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"/leaderboard wins")," will display the wins leaderboard.")),(0,a.kt)("h3",{id:"link"},(0,a.kt)("inlineCode",{parentName:"h3"},"/link")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Allows the Discord user to link their Minecraft account. Linking the Minecraft account is necessary for custom commands with placeholders, party commands, and using the ",(0,a.kt)("inlineCode",{parentName:"li"},"/player")," command without the need to specify a username.")),(0,a.kt)("h3",{id:"party"},(0,a.kt)("inlineCode",{parentName:"h3"},"/party")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Allows you to manage parties. You can view, invite, create, and kick players from a party.")),(0,a.kt)("h3",{id:"ping"},(0,a.kt)("inlineCode",{parentName:"h3"},"/ping")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Shows the Discord and bot's ping to measure responsiveness.")),(0,a.kt)("h3",{id:"player"},(0,a.kt)("inlineCode",{parentName:"h3"},"/player")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Displays information about a specific Minecraft player. If the Discord user has already linked their Minecraft account using the ",(0,a.kt)("inlineCode",{parentName:"li"},"/link")," command, they can use ",(0,a.kt)("inlineCode",{parentName:"li"},"/player")," without specifying a username to view their own information.")),(0,a.kt)("h3",{id:"update_slashes"},(0,a.kt)("inlineCode",{parentName:"h3"},"/update_slashes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," Updates the registered Discord commands. This command is often used by developers to update the bot's available commands after making changes. (OWNER ONLY) ",(0,a.kt)("em",{parentName:"li"},"See ",(0,a.kt)("inlineCode",{parentName:"em"},"config.yml")))),(0,a.kt)("h2",{id:"minecraft-permissions"},"Minecraft Permissions"),(0,a.kt)("h3",{id:"bedwars1058-discordadmin"},(0,a.kt)("inlineCode",{parentName:"h3"},"bedwars1058-discord.admin")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description:")," To show an update check message to server operators and users with this permission.")))}m.isMDXComponent=!0}}]);