"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-user-blocks-MultiFactorAuth-Block"],{74582:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(85597),l=n(86706),i=n(21241),r=n(58314),c=n(30120),o=n(71682),m=n(81719),d=n(67294),u=n(77029),s=n(21822),f=n(91647);let p=(0,m.ZP)(c.Z,{name:"ButtonAction"})(({theme:e})=>({display:"inline-flex",marginLeft:e.spacing(1)})),g=(0,m.ZP)(u.zb,{name:"LineIconStyled"})(({theme:e})=>({fontSize:44,color:e.palette.grey["600"],padding:e.spacing(4),display:"flex",justifyContent:"center",alignItems:"center"})),E=(0,m.ZP)(c.Z)(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}));function y({data:e}){let{i18n:t,dispatch:n}=(0,a.OgA)();if(!e)return;let{title:l,is_active:i,icon:o,description:m,service:u}=e,y=()=>{if(i){n({type:r.FC,payload:{service:u}});return}n({type:r.$c,payload:{service:u}})};return d.createElement(c.Z,{"data-testid":`edit${l}`,className:"item"},d.createElement(f.Z,{variant:"body1",fontWeight:600},l),d.createElement(E,null,d.createElement(c.Z,{sx:{display:"flex",alignItems:"center",minWidth:0}},d.createElement(g,{icon:o}),d.createElement(f.Z,{variant:"body1"},m)),d.createElement(p,null,d.createElement(s.Z,{"data-testid":"buttonEdit",size:"medium",variant:i?"outlined":"contained",color:"primary",onClick:y},t.formatMessage({id:i?"remove":"enable"})))))}let Z=(0,m.ZP)(c.Z)(({theme:e})=>({display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:e.spacing(.5),marginTop:e.spacing(.5)})),h=(0,m.ZP)(c.Z)(({theme:e})=>({display:"flex",flexDirection:"row",width:"80%"})),x=(0,m.ZP)(c.Z)(({theme:e})=>({display:"flex",justifyContent:"center",flexDirection:"column",width:"100%"})),w=(0,m.ZP)(c.Z)(({theme:e})=>({"& .item":{padding:e.spacing(2.75,0),borderBottom:e.mixins.border("secondary"),"&:first-of-type":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}})),b=(0,l.$j)(e=>e.user.multiFactorAuthSettings)(function({title:e,data:t,loaded:n}){let{dispatch:l}=(0,a.OgA)();return(d.useEffect(()=>{l({type:r.kw})},[]),n)?d.createElement(i.gO,null,d.createElement(i.ti,{title:e}),(null==t?void 0:t.length)?d.createElement(i.sU,null,d.createElement(w,null,t.map(e=>{return d.createElement(y,{key:`p${null==e?void 0:e.service}`,data:e})}))):null):d.createElement(i.gO,null,d.createElement(i.ti,{title:e}),d.createElement(i.sU,null,d.createElement(c.Z,null,d.createElement(o.Z,{variant:"text",width:150}),d.createElement(Z,null,d.createElement(h,null,d.createElement(o.Z,{variant:"rectangular",height:90,width:125,sx:{mr:1}}),d.createElement(x,null,d.createElement(o.Z,{variant:"text",width:"100%"}),d.createElement(o.Z,{variant:"text",width:"100%"}))),d.createElement(o.Z,{variant:"text",height:50,width:60})))))});var v=(0,a.j4Z)({extendBlock:b,defaults:{title:"authentication",blockLayout:"Account Setting"}})}}]);