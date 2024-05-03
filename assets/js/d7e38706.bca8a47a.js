"use strict";(self.webpackChunkbedwars_docs=self.webpackChunkbedwars_docs||[]).push([[853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Create Your Bot",l={unversionedId:"notesync/create-your-bot",id:"notesync/create-your-bot",title:"Create Your Bot",description:"This section is very important",source:"@site/docs/notesync/create-your-bot.md",sourceDirName:"notesync",slug:"/notesync/create-your-bot",permalink:"/docs/notesync/create-your-bot",draft:!1,editUrl:"https://github.com/IUNGO-INFO/BedWars1058-Discord/docs/notesync/create-your-bot.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"NoteSync",permalink:"/docs/category/notesync"},next:{title:"Setup Plugin",permalink:"/docs/notesync/plugin-setup"}},p={},s=[{value:"Step 1: Create a Discord Bot",id:"step-1-create-a-discord-bot",level:2},{value:"Step 2: Enable Privileged Gateway Intents",id:"step-2-enable-privileged-gateway-intents",level:2},{value:"Step 3: Add the Bot to Your Discord Server",id:"step-3-add-the-bot-to-your-discord-server",level:2},{value:"Step 4: Retrieve the Bot Token",id:"step-4-retrieve-the-bot-token",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-your-bot"},"Create Your Bot"),(0,o.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This section is very important")),(0,o.kt)("h2",{id:"step-1-create-a-discord-bot"},"Step 1: Create a Discord Bot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and log in with your Discord account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "New Application" button and give your application a name. This name will be your bot\'s name, so choose something related to Music, like ',(0,o.kt)("strong",{parentName:"p"},"Music Bot"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.iungo.tech/u/c28d4981-206b-4430-8bd0-4102d01489dc.png",alt:"New Application"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Bot")," section on the left-hand side menu.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.iungo.tech/u/771260ca-24d9-4085-9c8e-dea358be7251.png",alt:"Bot Section"})),(0,o.kt)("h2",{id:"step-2-enable-privileged-gateway-intents"},"Step 2: Enable Privileged Gateway Intents"),(0,o.kt)("p",null,"In order for your bot to work effectively with NoteSync, you need to enable the following Privileged Gateway Intents: ",(0,o.kt)("strong",{parentName:"p"},"PRESENCE INTENT"),", ",(0,o.kt)("strong",{parentName:"p"},"SERVER MEMBERS INTENT"),", and ",(0,o.kt)("strong",{parentName:"p"},"MESSAGE CONTENT INTENT"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable ",(0,o.kt)("strong",{parentName:"p"},"PRESENCE INTENT"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Bot")," section in the Discord Developer Portal."),(0,o.kt)("li",{parentName:"ul"},"Toggle ON the ",(0,o.kt)("strong",{parentName:"li"},"Presence Intent")," option."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable ",(0,o.kt)("strong",{parentName:"p"},"SERVER MEMBERS INTENT"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the same section, toggle ON the ",(0,o.kt)("strong",{parentName:"li"},"Server Members Intent")," option."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable ",(0,o.kt)("strong",{parentName:"p"},"MESSAGE CONTENT INTENT"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the same section, toggle ON the ",(0,o.kt)("strong",{parentName:"li"},"Message Content Intent")," option.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.iungo.tech/u/1f3b635b-c9a9-47d6-b543-43d22f5f4c16.png",alt:"Privileged Gateway Intents"})))),(0,o.kt)("h2",{id:"step-3-add-the-bot-to-your-discord-server"},"Step 3: Add the Bot to Your Discord Server"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go back to the ",(0,o.kt)("strong",{parentName:"p"},"General Information")," tab in the Discord Developer Portal and copy your bot's Application ID. You'll need this to generate the invite link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate an Invite Link:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"YOUR_CLIENT_ID")," in the following URL with your bot's Client ID: ",(0,o.kt)("a",{parentName:"li",href:"https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=2146958847"},"https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=2146958847"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open this link in your web browser, choose your desired server, and grant the necessary permissions.")),(0,o.kt)("h2",{id:"step-4-retrieve-the-bot-token"},"Step 4: Retrieve the Bot Token"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"While still on the ",(0,o.kt)("strong",{parentName:"li"},"Bot")," section of the Discord Developer Portal, under the ",(0,o.kt)("strong",{parentName:"li"},"Token")," subsection, click on the ",(0,o.kt)("strong",{parentName:"li"},"Copy")," or ",(0,o.kt)("strong",{parentName:"li"},"Reset")," button to copy your bot's token. Keep this token safe and never share it publicly!")),(0,o.kt)("p",null,"Congratulations! \ud83c\udf89 You've now created a Discord bot and enabled the necessary Privileged Gateway Intents for NoteSync. In the next steps of your guide, you can proceed to integrate the bot with your Minecraft server. \ud83d\ude04"))}d.isMDXComponent=!0}}]);