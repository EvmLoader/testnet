"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-core-components-MenuItem-DarkMode-DarkMode"],{29894:function(e,t,a){var r=a(63366),n=a(87462),o=a(67294),i=a(86010),l=a(94780),s=a(81719),c=a(78884),m=a(8164),d=a(57742),u=a(85893);let p=["className"],Z=e=>{let{alignItems:t,classes:a}=e;return(0,l.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},m.f,a)},y=(0,s.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>(0,n.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8})),f=o.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiListItemIcon"}),{className:l}=a,s=(0,r.Z)(a,p),m=o.useContext(d.Z),f=(0,n.Z)({},a,{alignItems:m.alignItems}),g=Z(f);return(0,u.jsx)(y,(0,n.Z)({className:(0,i.default)(g.root,l),ownerState:f,ref:t},s))});t.Z=f},39193:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(63366),n=a(87462),o=a(67294),i=a(86010),l=a(94780),s=a(81719),c=a(78884),m=a(57742),d=a(1588),u=a(34867);function p(e){return(0,u.Z)("MuiListItemSecondaryAction",e)}(0,d.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var Z=a(85893);let y=["className"],f=e=>{let{disableGutters:t,classes:a}=e;return(0,l.Z)({root:["root",t&&"disableGutters"]},p,a)},g=(0,s.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,n.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),x=o.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=a,s=(0,r.Z)(a,y),d=o.useContext(m.Z),u=(0,n.Z)({},a,{disableGutters:d.disableGutters}),p=f(u);return(0,Z.jsx)(g,(0,n.Z)({className:(0,i.default)(p.root,l),ownerState:u,ref:t},s))});x.muiName="ListItemSecondaryAction";var b=x},61702:function(e,t,a){var r=a(63366),n=a(87462),o=a(67294),i=a(86010),l=a(94780),s=a(91647),c=a(57742),m=a(78884),d=a(81719),u=a(97484),p=a(85893);let Z=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],y=e=>{let{classes:t,inset:a,primary:r,secondary:n,dense:o}=e;return(0,l.Z)({root:["root",a&&"inset",o&&"dense",r&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},u.L,t)},f=(0,d.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{[`& .${u.Z.primary}`]:t.primary},{[`& .${u.Z.secondary}`]:t.secondary},t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})(({ownerState:e})=>(0,n.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),g=o.forwardRef(function(e,t){let a=(0,m.Z)({props:e,name:"MuiListItemText"}),{children:l,className:d,disableTypography:u=!1,inset:g=!1,primary:x,primaryTypographyProps:b,secondary:h,secondaryTypographyProps:v}=a,I=(0,r.Z)(a,Z),{dense:k}=o.useContext(c.Z),M=null!=x?x:l,E=h,R=(0,n.Z)({},a,{disableTypography:u,inset:g,primary:!!M,secondary:!!E,dense:k}),S=y(R);return null==M||M.type===s.Z||u||(M=(0,p.jsx)(s.Z,(0,n.Z)({variant:k?"body2":"body1",className:S.primary,component:null!=b&&b.variant?void 0:"span",display:"block"},b,{children:M}))),null==E||E.type===s.Z||u||(E=(0,p.jsx)(s.Z,(0,n.Z)({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},v,{children:E}))),(0,p.jsxs)(f,(0,n.Z)({className:(0,i.default)(S.root,d),ownerState:R,ref:t},I,{children:[M,E]}))});t.Z=g},50367:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var r=a(85597),n=a(77029),o=a(20399),i=a(29894),l=a(39193),s=a(61702),c=a(74825),m=a(67294),d=a(22410),u=a(73327);let p=(0,d.Z)(e=>(0,u.Z)({root:{width:"100%",display:"flex",justifyContent:"space-between"},iconStyle:{paddingRight:e.spacing(1)},toggle:{}}),{name:"MenuItem"});function Z({item:e,handleAction:t,onClick:a,iconClassName:d,closePopover:u}){let Z=p(),{usePreference:y,preferenceBackend:f,i18n:g}=(0,r.OgA)(),{themeType:x}=y(),b=e=>{f.setThemeType(e)},[h,v]=m.useState(!1),I=()=>v(e=>!e);return m.createElement(m.Fragment,null,m.createElement(c.Z,{className:Z[e.className],disableRipple:!0,onClick:I,variant:"contained","data-testid":e.testid||e.label||e.icon},e.icon?m.createElement(i.Z,null,m.createElement(n.zb,{icon:e.icon})):null,m.createElement(s.Z,{primary:e.label}),m.createElement(l.Z,null,m.createElement(n.zb,{icon:h?"ico-angle-up":"ico-angle-down"}))),h?m.createElement(m.Fragment,null,m.createElement(c.Z,{disableRipple:!0,sx:{padding:"0 0 0 40px"},onClick:()=>b("dark")},m.createElement(o.Z,{size:"small",checked:"dark"===x}),g.formatMessage({id:"on"})),m.createElement(c.Z,{disableRipple:!0,onClick:()=>b("light"),sx:{padding:"0 0 0 40px"}},m.createElement(o.Z,{size:"small",checked:"light"===x}),g.formatMessage({id:"off"})),m.createElement(c.Z,{disableRipple:!0,sx:{padding:"0 0 0 40px"},onClick:()=>b("auto")},m.createElement(o.Z,{size:"small",checked:"auto"===x}),g.formatMessage({id:"auto"}))):null)}}}]);