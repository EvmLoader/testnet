(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-form-elements-BlockStylePreset-BlockStylePresetField"],{47546:function(e,r,t){"use strict";var a=t(63366),l=t(87462),o=t(67294),n=t(86010),s=t(94780),i=t(56594),d=t(59711),c=t(36622),u=t(78884),m=t(81719),f=t(65410),p=t(85893);let v=["children","className","color","component","disabled","error","filled","focused","required"],Z=e=>{let{classes:r,color:t,focused:a,disabled:l,error:o,filled:n,required:i}=e,d={root:["root",`color${(0,c.Z)(t)}`,l&&"disabled",o&&"error",n&&"filled",a&&"focused",i&&"required"],asterisk:["asterisk",o&&"error"]};return(0,s.Z)(d,f.M,r)},x=(0,m.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>{return(0,l.Z)({},r.root,"secondary"===e.color&&r.colorSecondary,e.filled&&r.filled)}})(({theme:e,ownerState:r})=>(0,l.Z)({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${f.Z.focused}`]:{color:(e.vars||e).palette[r.color].main},[`&.${f.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${f.Z.error}`]:{color:(e.vars||e).palette.error.main}})),h=(0,m.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${f.Z.error}`]:{color:(e.vars||e).palette.error.main}})),k=o.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiFormLabel"}),{children:o,className:s,component:c="label"}=t,m=(0,a.Z)(t,v),f=(0,d.Z)(),k=(0,i.Z)({props:t,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),b=(0,l.Z)({},t,{color:k.color||"primary",component:c,disabled:k.disabled,error:k.error,filled:k.filled,focused:k.focused,required:k.required}),y=Z(b);return(0,p.jsxs)(x,(0,l.Z)({as:c,ownerState:b,className:(0,n.default)(y.root,s),ref:r},m,{children:[o,k.required&&(0,p.jsxs)(h,{ownerState:b,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}))});r.Z=k},65410:function(e,r,t){"use strict";t.d(r,{M:function(){return o}});var a=t(1588),l=t(34867);function o(e){return(0,l.Z)("MuiFormLabel",e)}let n=(0,a.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);r.Z=n},84917:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var a=t(63366),l=t(87462),o=t(67294),n=t(94780),s=t(86010),i=t(56594),d=t(59711),c=t(47546),u=t(65410),m=t(78884),f=t(81719),p=t(1588),v=t(34867);function Z(e){return(0,v.Z)("MuiInputLabel",e)}(0,p.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var x=t(85893);let h=["disableAnimation","margin","shrink","variant","className"],k=e=>{let{classes:r,formControl:t,size:a,shrink:o,disableAnimation:s,variant:i,required:d}=e,c=(0,n.Z)({root:["root",t&&"formControl",!s&&"animated",o&&"shrink","small"===a&&"sizeSmall",i],asterisk:[d&&"asterisk"]},Z,r);return(0,l.Z)({},r,c)},b=(0,f.ZP)(c.Z,{shouldForwardProp:e=>(0,f.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[{[`& .${u.Z.asterisk}`]:r.asterisk},r.root,t.formControl&&r.formControl,"small"===t.size&&r.sizeSmall,t.shrink&&r.shrink,!t.disableAnimation&&r.animated,r[t.variant]]}})(({theme:e,ownerState:r})=>(0,l.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===r.size&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===r.variant&&(0,l.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&(0,l.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===r.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===r.variant&&(0,l.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),y=o.forwardRef(function(e,r){let t=(0,m.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:o=!1,shrink:n,className:c}=t,u=(0,a.Z)(t,h),f=(0,d.Z)(),p=n;void 0===p&&f&&(p=f.filled||f.focused||f.adornedStart);let v=(0,i.Z)({props:t,muiFormControl:f,states:["size","variant","required"]}),Z=(0,l.Z)({},t,{disableAnimation:o,formControl:f,shrink:p,size:v.size,variant:v.variant,required:v.required}),y=k(Z);return(0,x.jsx)(b,(0,l.Z)({"data-shrink":p,ownerState:Z,ref:r,className:(0,s.default)(y.root,c)},u,{classes:y}))});var S=y},35161:function(e,r,t){var a=t(29932),l=t(67206),o=t(69199),n=t(1469);e.exports=function(e,r){return(n(e)?a:o)(e,l(r,3))}},96876:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var a=t(85597),l=t(16473),o=t(21822),n=t(17888),s=t(84917),i=t(74825),d=t(12501),c=t(86010),u=t(18948),m=t(35161),f=t.n(m),p=t(67294),v=t(22410),Z=t(73327),x=(0,v.Z)(e=>(0,Z.Z)({root:{},previewSlot:{display:"none"},previewSlotOpen:{padding:e.spacing(2),height:360,display:"block",backgroundColor:e.palette.action.disabled}}),{name:"BlockStylePresetField"});function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function k({config:e,name:r}){let{label:t}=e,[m]=(0,u.U$)(r),{layoutBackend:v,jsxBackend:Z,dialogBackend:k}=(0,a.OgA)(),[b,y]=p.useState(!1),[S,w]=p.useState(v.getBlockPresets()),g=x(),E=()=>{let e=window.prompt("Style Name");if(e){if(S[r]){k.alert({message:"Duplicated Style Name"});return}S[r]={},w({...S})}},z=()=>y(e=>!e),P=Z.get("layout.block.StylePreviewBlock");return p.createElement("div",null,p.createElement("div",{className:(0,c.default)(g.previewSlot,b&&g.previewSlotOpen)},p.createElement(P,h({},S[m.value]))),p.createElement("div",{style:{display:"flex",alignItems:"center"}},p.createElement("div",{style:{flex:1,marginRight:16}},p.createElement(n.Z,{fullWidth:!0,margin:"normal"},p.createElement(s.Z,null,t),p.createElement(d.Z,h({},m,{placeholder:"No Preset"}),p.createElement(i.Z,{value:"none"},"No Style"),f()(S,(e,r)=>p.createElement(i.Z,{key:r,value:r},r))))),p.createElement(l.ui,null,p.createElement(o.Z,{variant:"text",size:"medium",onClick:z,disableRipple:!0},"Preview"),p.createElement(o.Z,{variant:"text",size:"medium",onClick:E,disableRipple:!0},"Add New"))))}}}]);