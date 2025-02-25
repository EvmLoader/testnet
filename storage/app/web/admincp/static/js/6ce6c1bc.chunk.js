(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-form-elements-SlugField","metafox-form-elements-ErrorTooltip"],{62177:function(e,r,t){"use strict";var n=t(64836);r.Z=void 0;var o=n(t(64938)),a=t(85893),i=(0,o.default)((0,a.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");r.Z=i},64938:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=t(81064)},42853:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n,o=t(63366),a=t(87462),i=t(67294),l=t(86010),s=t(94780),u=t(56594),d=t(59711),c=t(81719),f=t(36622),p=t(1588),m=t(34867);function v(e){return(0,m.Z)("MuiFormHelperText",e)}let Z=(0,p.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var h=t(78884),b=t(85893);let x=["children","className","component","disabled","error","filled","focused","margin","required","variant"],g=e=>{let{classes:r,contained:t,size:n,disabled:o,error:a,filled:i,focused:l,required:u}=e,d={root:["root",o&&"disabled",a&&"error",n&&`size${(0,f.Z)(n)}`,t&&"contained",l&&"focused",i&&"filled",u&&"required"]};return(0,s.Z)(d,v,r)},y=(0,c.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,t.size&&r[`size${(0,f.Z)(t.size)}`],t.contained&&r.contained,t.filled&&r.filled]}})(({theme:e,ownerState:r})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Z.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Z.error}`]:{color:(e.vars||e).palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),E=i.forwardRef(function(e,r){let t=(0,h.Z)({props:e,name:"MuiFormHelperText"}),{children:i,className:s,component:c="p"}=t,f=(0,o.Z)(t,x),p=(0,d.Z)(),m=(0,u.Z)({props:t,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),v=(0,a.Z)({},t,{component:c,contained:"filled"===m.variant||"outlined"===m.variant,variant:m.variant,size:m.size,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required}),Z=g(v);return(0,b.jsx)(y,(0,a.Z)({as:c,ownerState:v,className:(0,l.default)(Z.root,s),ref:r},f,{children:" "===i?n||(n=(0,b.jsx)("span",{className:"notranslate",children:"​"})):i}))});var w=E},47546:function(e,r,t){"use strict";var n=t(63366),o=t(87462),a=t(67294),i=t(86010),l=t(94780),s=t(56594),u=t(59711),d=t(36622),c=t(78884),f=t(81719),p=t(65410),m=t(85893);let v=["children","className","color","component","disabled","error","filled","focused","required"],Z=e=>{let{classes:r,color:t,focused:n,disabled:o,error:a,filled:i,required:s}=e,u={root:["root",`color${(0,d.Z)(t)}`,o&&"disabled",a&&"error",i&&"filled",n&&"focused",s&&"required"],asterisk:["asterisk",a&&"error"]};return(0,l.Z)(u,p.M,r)},h=(0,f.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>{return(0,o.Z)({},r.root,"secondary"===e.color&&r.colorSecondary,e.filled&&r.filled)}})(({theme:e,ownerState:r})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${p.Z.focused}`]:{color:(e.vars||e).palette[r.color].main},[`&.${p.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${p.Z.error}`]:{color:(e.vars||e).palette.error.main}})),b=(0,f.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${p.Z.error}`]:{color:(e.vars||e).palette.error.main}})),x=a.forwardRef(function(e,r){let t=(0,c.Z)({props:e,name:"MuiFormLabel"}),{children:a,className:l,component:d="label"}=t,f=(0,n.Z)(t,v),p=(0,u.Z)(),x=(0,s.Z)({props:t,muiFormControl:p,states:["color","required","focused","disabled","error","filled"]}),g=(0,o.Z)({},t,{color:x.color||"primary",component:d,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required}),y=Z(g);return(0,m.jsxs)(h,(0,o.Z)({as:d,ownerState:g,className:(0,i.default)(y.root,l),ref:r},f,{children:[a,x.required&&(0,m.jsxs)(b,{ownerState:g,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}))});r.Z=x},65410:function(e,r,t){"use strict";t.d(r,{M:function(){return a}});var n=t(1588),o=t(34867);function a(e){return(0,o.Z)("MuiFormLabel",e)}let i=(0,n.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);r.Z=i},19316:function(e,r,t){"use strict";t.d(r,{Z:function(){return z}});var n,o=t(63366),a=t(87462),i=t(67294),l=t(86010),s=t(94780),u=t(36622),d=t(91647),c=t(82586),f=t(59711),p=t(81719),m=t(1588),v=t(34867);function Z(e){return(0,v.Z)("MuiInputAdornment",e)}let h=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var b=t(78884),x=t(85893);let g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(e,r)=>{let{ownerState:t}=e;return[r.root,r[`position${(0,u.Z)(t.position)}`],!0===t.disablePointerEvents&&r.disablePointerEvents,r[t.variant]]},E=e=>{let{classes:r,disablePointerEvents:t,hiddenLabel:n,position:o,size:a,variant:i}=e,l={root:["root",t&&"disablePointerEvents",o&&`position${(0,u.Z)(o)}`,i,n&&"hiddenLabel",a&&`size${(0,u.Z)(a)}`]};return(0,s.Z)(l,Z,r)},w=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:y})(({theme:e,ownerState:r})=>(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===r.variant&&{[`&.${h.positionStart}&:not(.${h.hiddenLabel})`]:{marginTop:16}},"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})),P=i.forwardRef(function(e,r){let t=(0,b.Z)({props:e,name:"MuiInputAdornment"}),{children:s,className:u,component:p="div",disablePointerEvents:m=!1,disableTypography:v=!1,position:Z,variant:h}=t,y=(0,o.Z)(t,g),P=(0,f.Z)()||{},z=h;h&&P.variant,P&&!z&&(z=P.variant);let F=(0,a.Z)({},t,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:m,position:Z,variant:z}),k=E(F);return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(w,(0,a.Z)({as:p,ownerState:F,className:(0,l.default)(k.root,u),ref:r},y,{children:"string"!=typeof s||v?(0,x.jsxs)(i.Fragment,{children:["start"===Z?n||(n=(0,x.jsx)("span",{className:"notranslate",children:"​"})):null,s]}):(0,x.jsx)(d.Z,{color:"text.secondary",children:s})}))})});var z=P},84917:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var n=t(63366),o=t(87462),a=t(67294),i=t(94780),l=t(86010),s=t(56594),u=t(59711),d=t(47546),c=t(65410),f=t(78884),p=t(81719),m=t(1588),v=t(34867);function Z(e){return(0,v.Z)("MuiInputLabel",e)}(0,m.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var h=t(85893);let b=["disableAnimation","margin","shrink","variant","className"],x=e=>{let{classes:r,formControl:t,size:n,shrink:a,disableAnimation:l,variant:s,required:u}=e,d=(0,i.Z)({root:["root",t&&"formControl",!l&&"animated",a&&"shrink","small"===n&&"sizeSmall",s],asterisk:[u&&"asterisk"]},Z,r);return(0,o.Z)({},r,d)},g=(0,p.ZP)(d.Z,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[{[`& .${c.Z.asterisk}`]:r.asterisk},r.root,t.formControl&&r.formControl,"small"===t.size&&r.sizeSmall,t.shrink&&r.shrink,!t.disableAnimation&&r.animated,r[t.variant]]}})(({theme:e,ownerState:r})=>(0,o.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===r.size&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===r.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&(0,o.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===r.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===r.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))),y=a.forwardRef(function(e,r){let t=(0,f.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:a=!1,shrink:i,className:d}=t,c=(0,n.Z)(t,b),p=(0,u.Z)(),m=i;void 0===m&&p&&(m=p.filled||p.focused||p.adornedStart);let v=(0,s.Z)({props:t,muiFormControl:p,states:["size","variant","required"]}),Z=(0,o.Z)({},t,{disableAnimation:a,formControl:p,shrink:m,size:v.size,variant:v.variant,required:v.required}),y=x(Z);return(0,h.jsx)(g,(0,o.Z)({"data-shrink":m,ownerState:Z,ref:r,className:(0,l.default)(y.root,d)},c,{classes:y}))});var E=y},22949:function(e,r,t){"use strict";t.d(r,{Z:function(){return k}});var n=t(87462),o=t(63366),a=t(67294),i=t(86010),l=t(94780),s=t(57579),u=t(81719),d=t(78884),c=t(76866),f=t(99481),p=t(8900),m=t(84917),v=t(17888),Z=t(42853),h=t(12501),b=t(1588),x=t(34867);function g(e){return(0,x.Z)("MuiTextField",e)}(0,b.Z)("MuiTextField",["root"]);var y=t(85893);let E=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],w={standard:c.Z,filled:f.Z,outlined:p.Z},P=e=>{let{classes:r}=e;return(0,l.Z)({root:["root"]},g,r)},z=(0,u.ZP)(v.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,r)=>r.root})({}),F=a.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:l=!1,children:u,className:c,color:f="primary",defaultValue:p,disabled:v=!1,error:b=!1,FormHelperTextProps:x,fullWidth:g=!1,helperText:F,id:k,InputLabelProps:M,inputProps:S,InputProps:R,inputRef:C,label:$,maxRows:j,minRows:I,multiline:q=!1,name:T,onBlur:L,onChange:N,onFocus:A,placeholder:O,required:W=!1,rows:_,select:B=!1,SelectProps:H,type:V,value:D,variant:G="outlined"}=t,U=(0,o.Z)(t,E),K=(0,n.Z)({},t,{autoFocus:l,color:f,disabled:v,error:b,fullWidth:g,multiline:q,required:W,select:B,variant:G}),Y=P(K),J={};"outlined"===G&&(M&&void 0!==M.shrink&&(J.notched=M.shrink),J.label=$),B&&(H&&H.native||(J.id=void 0),J["aria-describedby"]=void 0);let Q=(0,s.Z)(k),X=F&&Q?`${Q}-helper-text`:void 0,ee=$&&Q?`${Q}-label`:void 0,er=w[G],et=(0,y.jsx)(er,(0,n.Z)({"aria-describedby":X,autoComplete:a,autoFocus:l,defaultValue:p,fullWidth:g,multiline:q,name:T,rows:_,maxRows:j,minRows:I,type:V,value:D,id:Q,inputRef:C,onBlur:L,onChange:N,onFocus:A,placeholder:O,inputProps:S},J,R));return(0,y.jsxs)(z,(0,n.Z)({className:(0,i.default)(Y.root,c),disabled:v,error:b,fullWidth:g,ref:r,required:W,color:f,variant:G,ownerState:K},U,{children:[null!=$&&""!==$&&(0,y.jsx)(m.Z,(0,n.Z)({htmlFor:Q,id:ee},M,{children:$})),B?(0,y.jsx)(h.Z,(0,n.Z)({"aria-describedby":X,id:Q,labelId:ee,value:D,input:et},H,{children:u})):et,F&&(0,y.jsx)(Z.Z,(0,n.Z)({id:X},x,{children:F}))]}))});var k=F},81064:function(e,r,t){"use strict";t.r(r),t.d(r,{capitalize:function(){return o.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return i.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return Z},useControlled:function(){return h.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return g.Z}});var n=t(37078),o=t(36622),a=t(46207),i=t(54235),l=t(75400),s=t(67421).Z,u=t(70061),d=t(47505),c=t(57577),f=t(18986).Z,p=t(7960).Z,m=t(63289),v=t(49669),Z=t(40444).Z,h=t(42293),b=t(26432),x=t(84771),g=t(40011);let y={configure:e=>{console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),n.Z.configure(e)}}},80760:function(e,r,t){var n=t(89881);e.exports=function(e,r){var t=[];return n(e,function(e,n,o){r(e,n,o)&&t.push(e)}),t}},10107:function(e){e.exports=function(e,r,t,n,o){return o(e,function(e,o,a){t=n?(n=!1,e):r(t,e,o,a)}),t}},63105:function(e,r,t){var n=t(34963),o=t(80760),a=t(67206),i=t(1469);e.exports=function(e,r){return(i(e)?n:o)(e,a(r,3))}},7654:function(e,r,t){var n=t(81763);e.exports=function(e){return n(e)&&e!=+e}},98611:function(e){var r=Array.prototype.join;e.exports=function(e,t){return null==e?"":r.call(e,t)}},54061:function(e,r,t){var n=t(62663),o=t(89881),a=t(67206),i=t(10107),l=t(1469);e.exports=function(e,r,t){var s=l(e)?n:i,u=arguments.length<3;return s(e,a(r,4),t,u,o)}},25850:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(85597),o=t(42853),a=t(47037),i=t.n(a),l=t(67294),s=t(84116);function u({text:e,sx:r,error:t=!1}){let{i18n:a}=(0,n.OgA)();return e?i()(e)&&e.startsWith("<html>")?l.createElement(o.Z,{sx:r,error:t},a.formatMessage({id:"[placeholder]",defaultMessage:e})):l.createElement(o.Z,{sx:r,error:t},l.createElement(s.ZP,{html:e})):null}},87519:function(e,r,t){"use strict";t.r(r);var n=t(62177),o=t(81719),a=t(38790),i=t(18948),l=t(67294);function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let u=({className:e,children:r,...t})=>l.createElement(a.Z,s({},t,{title:t.title,className:e,disableHoverListener:!0,classes:{tooltip:e}}),r),d=(0,o.ZP)(u)(({theme:e})=>({backgroundColor:e.palette.background.paper,borderColor:"border.secondary",borderStyle:"solid",color:"red","& .MuiTooltip-arrow":{color:"red"}})),c=(0,o.ZP)("div")(({theme:e})=>({display:"flex",alignItems:"center"})),f=({children:e,name:r,showErrorTooltip:t})=>{let[o,a]=(0,l.useState)(!1),[,s]=(0,i.U$)(r);return t?l.createElement(d,{className:{},open:o&&!!(null==s?void 0:s.error),onClose:()=>a(!1),onOpen:()=>a(!0),title:l.createElement(c,null,l.createElement(n.Z,{sx:{marginRight:.5},fontSize:"inherit"})," ",null==s?void 0:s.error)},e):e};r.default=f},31959:function(e,r,t){"use strict";t.r(r);var n=t(17888),o=t(19316),a=t(81719),i=t(22949),l=t(91647),s=t(18948),u=t(68929),d=t.n(u),c=t(16105),f=t.n(c),p=t(13218),m=t.n(p),v=t(47037),Z=t.n(v),h=t(67294),b=t(25850),x=t(87519),g=t(75192),y=t(58454);function E(){return(E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}let w=(0,a.ZP)(i.Z,{shouldForwardProp:e=>"flagDisabled"!==e})(({theme:e,flagDisabled:r})=>({...r&&{"& .MuiOutlinedInput-root":{"& > fieldset":{borderColor:"light"===e.palette.mode?"rgba(0, 0, 0, 0.23) !important":"rgba(255, 255, 255, 0.23) !important"}}}})),P=(0,a.ZP)(l.Z,{name:"Title",shouldForwardProp:e=>"styleGroup"!==e})(({theme:e,styleGroup:r})=>({..."question"===r&&{color:e.palette.text.secondary,fontWeight:e.typography.fontWeightBold},..."normal"===r&&{}})),z=({config:e,disabled:r,required:t,name:a,formik:i})=>{let[l,u,{setValue:c}]=(0,s.U$)(null!=a?a:"TextField"),{label:p,disabled:v,autoComplete:z,placeholder:F,noFeedback:k,variant:M,margin:S,fullWidth:R,type:C="text",rows:$,size:j,required:I,multiline:q,description:T,autoFocus:L,readOnly:N,maxLength:A,hasFormLabel:O=!1,showErrorTooltip:W=!1,sx:_,sxFieldWrapper:B,hasFormOrder:H=!1,order:V,styleGroup:D="normal",preventScrolling:G=!1,startAdornment:U,endAdornment:K,minNumber:Y,maxNumber:J,warning:Q,alwayShowDescription:X=!0,contextualDescription:ee,mappingField:er,separator:et="-"}=e;if(f()(l.value)){var en;l.value=null!==(en=e.defaultValue)&&void 0!==en?en:""}let eo=!!(u.error&&(u.touched||i.submitCount)),ea=e=>{Z()(l.value)&&c(l.value.trim()),l.onBlur(e)};h.useEffect(()=>{if(er&&m()(i.values)&&er in i.values&&Z()(i.values[er])){let e=i.values[er];c((0,g.FV)(e,et))}},[er,i.values[er]]);let ei=!W&&eo&&u.error,el=null;T&&(el=h.createElement(b.Z,{text:T})),ei&&(el=u.error),T&&X&&ei&&(el=h.createElement(h.Fragment,null,h.createElement(b.Z,{text:T}),h.createElement(b.Z,{text:u.error,error:!0}))),k&&(el=null);let es=H&&V?`${V}. `:null;return h.createElement(n.Z,{margin:S,variant:M,fullWidth:R,"data-testid":d()(`field ${a}`),sx:B,id:a},O&&h.createElement(P,{sx:{mb:2},variant:M,styleGroup:D},es,p),ee&&h.createElement(b.Z,{text:`${ee}${l.value}`}),h.createElement(x.default,{name:l.name,showErrorTooltip:W},h.createElement(w,E({},l,{onWheel:e=>{var r;return G&&(null===(r=e.target)||void 0===r?void 0:r.blur())},error:eo,multiline:!!($&&q),flagDisabled:v||r||i.isSubmitting,disabled:v||r||i.isSubmitting,required:I||t,size:j,onBlur:ea,autoFocus:L,InputProps:{autoComplete:z,readOnly:N,startAdornment:U?h.createElement(o.Z,{position:"start"},U):null,endAdornment:K?h.createElement(o.Z,{position:"end"},K):null},inputProps:{..."number"===C?{min:Y,max:J}:{},maxLength:A,"data-testid":d()(`input ${a}`)},label:O?void 0:p,rows:$,placeholder:F,type:C,helperText:el,sx:_}))),h.createElement(y.Z,{warning:Q}))};r.default=z},58454:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(15620),o=t(67294),a=t(84116);function i({warning:e}){return e?o.createElement(n.Z,{color:"warning",variant:"standard",sx:{fontSize:"small",my:1,p:.5,alignItems:"center"}},o.createElement(a.ZP,{html:e||""})):null}},75192:function(e,r,t){"use strict";t.d(r,{FV:function(){return d},eC:function(){return f},ed:function(){return c}}),t(63105);var n=t(1469),o=t.n(n);t(41609),t(23560),t(93754);var a=t(7654),i=t.n(a),l=t(81763),s=t.n(l);t(47037),t(98611),t(54061);let u=e=>{let{type:r,elements:t,name:n,renderer:o,validation:a}=e;if("field"===r&&a)return{[n]:a};let i=reduce(t,(e={},r,t)=>({...e,...u(r)}),{}),l={};return"editable-grid"!==o||isEmpty(i)?!isEmpty(i)&&n?l[n]=[["object",i]]:l={...l,...i}:l[n]=[["array",[["object",i]]]],l};function d(e,r="-"){if(!e)return"";let t={"&":"and"};return e=encodeURIComponent(e=(e=(e=(e=(e=e.replace(/[&]/g,e=>t[e])).toLowerCase().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e").replace(/ì|í|ị|ỉ|ĩ/g,"i").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/đ/g,"d").replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"").replace(/\u02C6|\u0306|\u031B/g,"")).normalize("NFKD").replace(RegExp("\\p{Diacritic}","gu"),"")).replace(/[^a-zA-Z0-9 ]/g,"")).trim().replaceAll(/\s+/g,r))}function c(e,r=[],t="-"){if(!e)return"";let n="[]";r&&o()(r)&&(n=`[${r.join("")}]`);let a=RegExp(n,"g");return e=(e=e.trim().replaceAll(/\s+/g,t)).replaceAll(a,t)}function f({number:e,thousand_separator:r=",",decimal_separator:t=".",precision:n}){(i()(e)||!s()(e))&&(e=0),e=n?e.toFixed(n):e;let o=e.toString().split("."),a=o[0],l=o[1];return a.replace(/\B(?=(\d{3})+(?!\d))/g,r)+(l?`${t}${l}`:"")}}}]);