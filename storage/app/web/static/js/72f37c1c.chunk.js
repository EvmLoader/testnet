"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["pages.marketplace"],{21893:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.al0)({appName:"marketplace",pageName:"marketplace_invoice.my",resourceName:"marketplace_invoice",loginRequired:!0,defaultTab:"invoice"})},59364:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.al0)({appName:"marketplace",resourceName:"marketplace",pageName:"marketplace.browse",categoryName:"marketplace_category",paramCreator:e=>{var a,t;let r=null===(a=e.tab)||void 0===a?void 0:a.replace(/-/g,"_");return"all"===r&&(r="alive"),{tab:null===(t=e.tab)||void 0===t?void 0:t.replace(/-/g,"_"),view:r}}})},95136:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.zs4)({appName:"marketplace",resourceName:"marketplace",pageName:"marketplace.edit"})},17385:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.oks)({appName:"marketplace",pageName:"marketplace.home",resourceName:"marketplace"})},15953:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.oks)({appName:"marketplace",pageName:"marketplace.my",resourceName:"marketplace",defaultTab:"my",loginRequired:!0})},4785:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.nd)({appName:"marketplace",resourceName:"marketplace",pageName:"marketplace.search",categoryName:"marketplace_category"})},19770:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.oFY)({appName:"marketplace",resourceName:"marketplace_invoice",pageName:"marketplace_invoice.view",loginRequired:!0})},63312:function(e,a,t){t.r(a);var r=t(85597);a.default=(0,r.oFY)({appName:"marketplace",resourceName:"marketplace",pageName:"marketplace.view"})},66621:function(e,a,t){t.r(a);var r=t(85597),l=t(92114),c=t(30120),p=t(81719),i=t(67294);function m(){return(m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let n="ListingViewDialog",o=(0,p.ZP)(l.cZ,{name:n,slot:"root"})(({theme:e})=>({padding:0,paddingTop:"0 !important",overflowY:"visible",display:"flex"})),u=(0,p.ZP)(l.cZ,{name:n,slot:"ContentWrapper"})(({theme:e})=>({width:"1020px",maxWidth:"100%"}));a.default=(0,r.SuR)(function({item:e,identity:a}){let{useDialog:t,jsxBackend:p,i18n:n,useIsMobile:s}=(0,r.OgA)(),{dialogProps:d}=t(),k=p.get("listing.block.listingView"),f=s();return e?i.createElement(l.Vq,m({},d,{maxWidth:"xl",scroll:"body","data-testid":"popupViewListing"}),i.createElement(l.$N,{enableBack:f,disableClose:f},i.createElement(c.Z,{display:"flex",alignItems:"center"},n.formatMessage({id:"listing"}))),i.createElement(o,null,i.createElement(u,null,i.createElement(k,{item:e,identity:a,isModalView:!0})))):null})}}]);