"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-admincp-blocks-AdminAppBar-Block"],{93421:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(63366),r=o(87462),n=o(67294),i=o(86010),l=o(94780),p=o(81719),s=o(78884),c=o(36622),d=o(25722),u=o(1588),m=o(34867);function g(e){return(0,m.Z)("MuiAppBar",e)}(0,u.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var f=o(85893);let x=["className","color","enableColorOnDark","position"],b=e=>{let{color:t,position:o,classes:a}=e,r={root:["root",`color${(0,c.Z)(t)}`,`position${(0,c.Z)(o)}`]};return(0,l.Z)(r,g,a)},h=(e,t)=>`${null==e?void 0:e.replace(")","")}, ${t})`,v=(0,p.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[`position${(0,c.Z)(o.position)}`],t[`color${(0,c.Z)(o.color)}`]]}})(({theme:e,ownerState:t})=>{let o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,r.Z)({},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,r.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,r.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:h(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:h(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:h(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:h(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),k=n.forwardRef(function(e,t){let o=(0,s.Z)({props:e,name:"MuiAppBar"}),{className:n,color:l="primary",enableColorOnDark:p=!1,position:c="fixed"}=o,d=(0,a.Z)(o,x),u=(0,r.Z)({},o,{color:l,position:c,enableColorOnDark:p}),m=b(u);return(0,f.jsx)(v,(0,r.Z)({square:!0,component:"header",ownerState:u,elevation:4,className:(0,i.default)(m.root,n,"fixed"===c&&"mui-fixed"),ref:t},d))});var Z=k},54384:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(63366),r=o(87462),n=o(67294),i=o(86010),l=o(94780),p=o(78884),s=o(81719),c=o(1588),d=o(34867);function u(e){return(0,d.Z)("MuiToolbar",e)}(0,c.Z)("MuiToolbar",["root","gutters","regular","dense"]);var m=o(85893);let g=["className","component","disableGutters","variant"],f=e=>{let{classes:t,disableGutters:o,variant:a}=e;return(0,l.Z)({root:["root",!o&&"gutters",a]},u,t)},x=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})(({theme:e,ownerState:t})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48}),({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar),b=n.forwardRef(function(e,t){let o=(0,p.Z)({props:e,name:"MuiToolbar"}),{className:n,component:l="div",disableGutters:s=!1,variant:c="regular"}=o,d=(0,a.Z)(o,g),u=(0,r.Z)({},o,{component:l,disableGutters:s,variant:c}),b=f(u);return(0,m.jsx)(x,(0,r.Z)({as:l,className:(0,i.default)(b.root,n),ref:t,ownerState:u},d))});var h=b},21973:function(e,t,o){o.r(t),o.d(t,{default:function(){return M}});var a=o(85597),r=o(16473),n=o(27274),i=o(93421),l=o(50130),p=o(54384),s=o(38790),c=o(62097),d=o(81719),u=o(67294),m=o(39348),g=o(30120),f=o(22949),x=o(23279),b=o.n(x),h=o(1469),v=o.n(h);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}let Z=(0,d.ZP)("div",{name:"AdminSearchForm",slot:"Root"})(({theme:e})=>({float:"right",position:"relative",width:"160px",[e.breakpoints.up("sm")]:{width:"320px"}})),y=(e,t)=>{return u.createElement("li",k({},e),u.createElement(g.Z,{sx:{overflow:"hidden"}},u.createElement(r.Ys,{lines:1},t.label),u.createElement(g.Z,null,u.createElement(r.Ys,{lines:1,color:"text.secondary",variant:"body2",fontSize:12,component:"span"},t.caption))))};function A(){let{apiClient:e,i18n:t,navigate:o}=(0,a.OgA)(),[r,n]=u.useState(""),[i,l]=u.useState([]),p=u.useRef({}),s=t=>{p.current[t]?l(p.current[t]):e.get(`admincp/core/search?q=${t}`).then(e=>{let o=v()(null==e?void 0:e.data.data)?e.data.data:[];p.current[t]=o,l(o)})},c=(e,t)=>{(null==t?void 0:t.url)&&o(t.url)},d=u.useCallback(b()(s,500),[]),g=u.useCallback((e,t)=>{(null==e?void 0:e.type)==="change"&&(n(t),d(t))},[]);return u.createElement(Z,{"data-testid":"searchForm"},u.createElement(m.Z,{size:"small",id:"admin_search_box",filterOptions:e=>e,disableClearable:!0,noOptionsText:t.formatMessage({id:"no_results"}),onChange:c,options:i,autoSelect:!0,inputValue:r,onInputChange:(e,t)=>g(e,t),sx:{width:"100%"},renderOption:y,renderInput:e=>{return u.createElement(f.Z,k({},e,{size:"small",type:"text",placeholder:"Search","data-testid":"searchBox"}))}}))}var B={items:[{icon:"ico-language",value:"@core/codeGenerate/addTranslation",label:"Code Generator",as:"link",name:"code",showWhen:["eq","setting.app.env","local"]},{name:"rebuild",icon:"ico-refresh-o",to:"/admincp/layout/build/wizard",label:"Rebuild Site",title:"Rebuild Site",as:"link"},{name:"cache",icon:"ico-noun-broom",value:"@admin/showCacheDialog",label:"Clear Cache",title:"Clear Cache",as:"link"},{icon:"ico-code",value:"@core/codeGenerate/show",label:"Code Generator",as:"link",name:"code",showWhen:["eq","setting.app.env","local"]},{icon:"ico-bell-o",to:"/notification",label:"Notifications",as:"popover",name:"new_notification",content:{component:"notification.ui.notificationPopper"}},{as:"divider"},{icon:"",as:"adminUser",name:"adminUser",target:"_blank"},{icon:"ico-shutdown",as:"link",name:"logout",to:"/admincp/logout",title:"Logout",label:"Logout"},{as:"divider",name:"divider"},{icon:"ico-external-link",value:"viewSite",as:"viewSite",label:"View Site",name:"viewSite"}]},w=o(22410),C=o(73327);let S=(0,w.Z)(e=>(0,C.Z)({menuButton:{display:"flex",alignItems:"center",padding:"0 4px"},divider:{position:"relative","&:before":{content:'""',position:"absolute",left:"0",top:"10px",bottom:"10px",width:"1px",backgroundColor:"#eaeaea"}},popper:{boxShadow:e.shadows[20],zIndex:e.zIndex.snackbar,width:"300px",backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,maxHeight:"70vh",overflow:"hidden"},menuItemViewSite:{display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.main,border:"none",position:"relative",width:"auto",padding:"15px 8px",fontSize:e.mixins.pxToRem(15),"& i":{fontSize:e.mixins.pxToRem(22),paddingLeft:e.spacing(1.5)}},userAvatarButton:{display:"flex",padding:"12px 8px"},userAvatarInfo:{paddingLeft:e.spacing(1.5),display:"flex",flexDirection:"column",justifyContent:"center"},userAvatar:{width:32,height:32},userAvatarName:{color:e.palette.text.primary,fontSize:e.mixins.pxToRem(12)},userAvatarRole:{color:e.palette.text.secondary,fontSize:e.mixins.pxToRem(12)},smallMenuButton:{cursor:"pointer",margin:0,padding:0,color:e.palette.text.secondary,display:"inline-flex",alignItems:"center",justifyContent:"center",height:"32px",width:"32px",fontSize:e.mixins.pxToRem(22),"&:hover $smallMenuIcon":{color:e.palette.primary.main},"& .MuiBadge-badge":{marginTop:0}}}),{name:"AdminAppBar"}),R=(0,d.ZP)(l.Z,{name:"ToggleNavButton",slot:"Root"})({width:"48px",height:"48px",display:"inline-flex",WebkitBoxAlign:"center",msFlexAlign:"center",alignItems:"center",WebkitBoxPack:"center",msFlexPack:"center",justifyContent:"center",color:"#555",fontSize:"16px",fontWeight:"bold",cursor:"pointer"}),I=(0,d.ZP)("div",{name:"AdminAppBarLogo",slot:"Root"})(({theme:e})=>({whiteSpace:"nowrap",overflow:"hidden",width:"220px",height:"60px",padding:"13px 8px",[e.breakpoints.down("sm")]:{display:"none"}})),z=(0,d.ZP)("i",{name:"AdminAppBarLogo",slot:"Image"})({backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center left",display:"block",height:"32px"}),E=(0,d.ZP)("div",{name:"AdminAppBar",slot:"SubMenu"})({display:"inline-flex",justifyContent:"flex-end",flex:1,position:"relative"}),T=(0,d.ZP)("div",{name:"AdminAppBar",slot:"FixSpace"})({height:58});var M=function({toggleDrawer:e,drawerVisible:t}){let o=S(),{assetUrl:l,i18n:d,setting:m,acl:g,useLoggedIn:f}=(0,a.OgA)(),x=(0,c.Z)(),b=l("dark"===x.palette.mode?"layout.image_logo_dark":"layout.image_logo"),h=()=>{e&&e()},v=()=>{},k=(0,n.W$)(B.items,{setting:m,acl:g}),Z=f();return Z?u.createElement(u.Fragment,null,u.createElement(i.Z,{color:"inherit",position:"fixed","data-testid":"layoutSlotHeader"},u.createElement(p.Z,{sx:{p:"0 !important"}},u.createElement(s.Z,{title:d.formatMessage({id:t?"collapse_menu":"expand_menu"})},u.createElement(R,{onClick:h,"data-testid":"toggleMenu"},u.createElement(r.zb,{icon:"ico-navbar"}))),u.createElement(I,null,u.createElement(a.QVN,{to:"/admincp","data-testid":"imgLogo"},u.createElement(z,{style:{backgroundImage:`url(${b})`}}))),u.createElement(A,null),u.createElement(E,{"data-testid":"menuAppBar"},u.createElement(r.sd,{prefixName:"appbar.item.",fallbackName:"link",items:k,handleAction:v,classes:o,pathname:"/admincp"})))),u.createElement(T,null)):null}}}]);