"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-chat-components-AllMessage-Block"],{24296:function(e,o,t){t.r(o),t.d(o,{default:function(){return u}});var l=t(85597),a=t(30120),n=t(81719),r=t(67294);let s="AllMessage",i=(0,n.ZP)(a.Z,{name:s,slot:"Root"})(({theme:e})=>({backgroundColor:e.palette.background.paper,display:"flex",width:"100%",height:"100%"})),c=(0,n.ZP)(a.Z,{name:s,slot:"buddy-wrap",shouldForwardProp:e=>"isMobile"!==e&&"isNoShow"!==e})(({theme:e,isMobile:o,isNoShow:t})=>({width:"360px",...o&&{width:"100%"},...t&&{display:"none"}})),d=(0,n.ZP)(a.Z,{name:s,slot:"room-wrap",shouldForwardProp:e=>"isMobile"!==e&&"isNoShow"!==e})(({theme:e,isMobile:o,isNoShow:t})=>({...!o&&{flex:1,minWidth:0},...o&&{width:"100%"},...t&&{display:"none"}})),h=(0,l.j4Z)({name:"ChatAllMessageBlock",extendBlock:function(e){let{jsxBackend:o,useIsMobile:t,usePageParams:a}=(0,l.OgA)(),n=o.get("chat.block.buddy"),s=o.get("chat.block.chatroom"),h=t(),u=a(),{rid:m}=u;return r.createElement(i,null,r.createElement(c,{isNoShow:Boolean(h&&m),isMobile:h},r.createElement(n,null)),r.createElement(d,{isNoShow:Boolean(h&&!m),isMobile:h},r.createElement(s,null)))}});var u=h}}]);