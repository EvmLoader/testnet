"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-core-components-Error403Block"],{2265:function(e,t,n){n.r(t);var o=n(85597),a=n(30120),r=n(91647),i=n(81719),l=n(67294);let s=(0,i.ZP)(a.Z,{name:"Error403",slot:"Root"})(({theme:e})=>({display:"flex",alignItems:"center",flexDirection:"column",padding:e.spacing(9,2),[e.breakpoints.down("xs")]:{padding:e.spacing(5,2)},"& + .error403Block":{display:"none"}})),m=(0,i.ZP)("img",{name:"Error403",slot:"Image"})(({theme:e})=>({maxWidth:"100%"})),c=(0,i.ZP)(r.Z,{name:"Error403",slot:"Title"})(({theme:e})=>({maxWidth:"100%",marginBottom:e.spacing(3.5),fontWeight:"bold",textAlign:"center",color:e.palette.text.primary,[e.breakpoints.down("sm")]:{fontSize:e.mixins.pxToRem(40)},[e.breakpoints.down("xs")]:{fontSize:e.mixins.pxToRem(20)}})),p=(0,i.ZP)(r.Z,{name:"Error403",slot:"Content"})(({theme:e})=>({marginBottom:e.spacing(5),color:e.palette.text.hint,fontSize:e.mixins.pxToRem(18),textAlign:"center",[e.breakpoints.down("xs")]:{fontSize:e.mixins.pxToRem(13)}})),x=({title:e="content_is_not_available",content:t="content_not_available_content"})=>{let{usePageParams:n,i18n:a,assetUrl:r}=(0,o.OgA)(),i=n(),x=r("layout.image_error_403");return l.createElement(s,{className:"error403Block","data-testid":"Error403"},l.createElement(c,{component:"h1",variant:"h1"},(null==i?void 0:i.title)||a.formatMessage({id:e})),l.createElement(p,{component:"div",variant:"subtitle2"},a.formatMessage({id:t})),l.createElement(m,{src:x,alt:e}))};t.default=x}}]);