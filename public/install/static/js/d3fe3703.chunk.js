"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-installation-blocks-ConfigureDatabase"],{27036:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=o},89572:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.Z=o},74721:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.Z=o},62177:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");t.Z=o},64938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(81064)},63516:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(63366),a=n(87462),i=n(67294),o=n(36622),l=n(49669),s=n(94780),u=n(81719),d=n(78884),c=n(21822),m=n(35705),f=n(34867),p=n(1588);function g(e){return(0,f.Z)("MuiLoadingButton",e)}let h=(0,p.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var v=n(85893);let b=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=e=>{let{loading:t,loadingPosition:n,classes:r}=e,i={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,o.Z)(n)}`],endIcon:[t&&`endIconLoading${(0,o.Z)(n)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,o.Z)(n)}`]},l=(0,s.Z)(i,g,r);return(0,a.Z)({},r,l)},Z=e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e,y=(0,u.ZP)(c.Z,{shouldForwardProp:e=>Z(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>{return[t.root,t.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:t.endIconLoadingEnd}]}})(({ownerState:e,theme:t})=>(0,a.Z)({[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}})),E=(0,u.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,o.Z)(n.loadingPosition)}`]]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})),I=i.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiLoadingButton"}),{children:i,disabled:o=!1,id:s,loading:u=!1,loadingIndicator:c,loadingPosition:f="center",variant:p="text"}=n,g=(0,r.Z)(n,b),h=(0,l.Z)(s),Z=null!=c?c:(0,v.jsx)(m.Z,{"aria-labelledby":h,color:"inherit",size:16}),I=(0,a.Z)({},n,{disabled:o,loading:u,loadingIndicator:Z,loadingPosition:f,variant:p}),P=x(I),L=u?(0,v.jsx)(E,{className:P.loadingIndicator,ownerState:I,children:Z}):null;return(0,v.jsxs)(y,(0,a.Z)({disabled:o||u,id:h,ref:t},g,{variant:p,classes:P,ownerState:I,children:["end"===I.loadingPosition?i:L,"end"===I.loadingPosition?L:i]}))});var P=I},46207:function(e,t,n){var r=n(49064);t.Z=r.Z},81064:function(e,t,n){n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return d.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return y},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return g.Z},unsupportedProp:function(){return h},useControlled:function(){return v.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return Z.Z}});var r=n(37078),a=n(36622),i=n(46207),o=n(54235),l=n(75400),s=n(67421).Z,u=n(70061),d=n(47505),c=n(57577),m=n(18986).Z,f=n(7960).Z,p=n(63289),g=n(49669),h=n(40444).Z,v=n(42293),b=n(26432),x=n(84771),Z=n(40011);let y={configure:e=>{console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),r.Z.configure(e)}}},68943:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(67294),a=n(79817),i=n(85597),o=JSON.parse('{"name":"database","component":"Form","title":"Database","testid":"FormDatabaseConfig","action":"install/?step=verify-database","method":"POST","value":{},"validation":{"type":"object","properties":{"database":{"type":"object","properties":{"driver":{"type":"string","errors":{"required":"${path} is a required field."},"required":true,"label":"Database driver"},"host":{"type":"string","errors":{"required":"${path} is a required field."},"required":true,"label":"Host name"},"user":{"type":"string","errors":{"required":"${path} is a required field."},"required":true,"label":"Username"},"password":{"type":"string","errors":{"required":"${path} is a required field."},"required":true,"label":"Password"},"name":{"type":"string","errors":{"required":"${path} is a required field."},"required":true,"label":"Database name"},"port":{"type":"number","label":"Port","nullable":true,"int":true,"positive":true}}}}},"elements":{"basic":{"component":"Container","name":"basic","testid":"field basic","elements":{"driver":{"name":"database.driver","maxLength":255,"fullWidth":true,"variant":"outlined","margin":"normal","size":"medium","component":"Select","required":true,"autoComplete":"off","autoFocus":true,"label":"Database driver","testid":"field database.driver","options":[{"label":"PostgreSQL","value":"pgsql"},{"label":"MySql","value":"mysql"}]},"host":{"name":"database.host","maxLength":255,"fullWidth":true,"required":true,"variant":"outlined","margin":"normal","size":"medium","component":"Text","label":"Host name","autoComplete":"off","testid":"field database.host"},"user":{"name":"database.user","maxLength":255,"fullWidth":true,"required":true,"variant":"outlined","margin":"normal","size":"medium","component":"Text","label":"Username","autoComplete":"off","testid":"field database.user"},"password":{"name":"database.password","maxLength":255,"fullWidth":true,"required":true,"variant":"outlined","margin":"normal","size":"medium","component":"Password","label":"Password","autoComplete":"off","testid":"field database.password"},"name":{"name":"database.name","maxLength":255,"fullWidth":true,"required":true,"variant":"outlined","margin":"normal","size":"medium","component":"Text","label":"Database Name","autoComplete":"off","testid":"field database.name"},"port":{"name":"database.port","maxLength":6,"fullWidth":true,"variant":"outlined","margin":"normal","size":"medium","component":"Text","description":"default 5432 for PostgresSql, 3306 for MySQL","label":"Port","autoComplete":"off","testid":"field database.port"}}}}}');let l=()=>{return r.createElement(a.h0,{formSchema:o})};var s=(0,i.j4Z)({extendBlock:l})},79817:function(e,t,n){n.d(t,{Qb:function(){return y},h0:function(){return w},lJ:function(){return x},s_:function(){return o},N:function(){return s},KG:function(){return C},jH:function(){return u},V9:function(){return m},cW:function(){return _}});var r=n(67294),a=n(81719);let i=(0,a.ZP)("div",{name:"InstallPanel"})(({theme:e})=>({width:700,backgroundColor:e.palette.background.paper,margin:e.spacing(6,0),border:e.mixins.border("secondary"),borderRadius:8,position:"relative",boxShadow:e.shadows[2]}));function o({children:e}){return r.createElement(i,null,e)}var l=n(30120);function s({children:e,hasMenu:t}){return r.createElement(l.Z,{sx:t?{display:"flex",minHeight:"400px",flexDirection:"row"}:{minHeight:"400px"}},e)}function u({children:e}){return e?r.createElement(l.Z,{sx:{py:2,px:2,textAlign:"right",borderTop:e=>e.mixins.border("secondary")}},e):null}var d=n(91647),c=n(5829);function m(){let{platformVersion:e}=(0,c.y)();return r.createElement(l.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",py:2,px:3,borderBottom:e=>e.mixins.border("secondary")}},r.createElement("img",{alt:"MetaFox",src:"https://metafox-assets.s3.eu-north-1.amazonaws.com/logo.png",height:40}),r.createElement(d.Z,null,e))}var f=n(85597);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let g=(0,a.ZP)("ul",{name:"StepMenu",slot:"Root"})(()=>({listStyle:"none none outside",margin:0,padding:"16px 0 16px 0"})),h=(0,a.ZP)("li",{name:"StepMenu",slot:"Item"})(()=>({lineHeight:"40px",paddingLeft:"24px"})),v={active:{lineHeight:"32px",color:"text.primary",fontWeight:"bold"},default:{lineHeight:"32px",color:"text.primary"}};function b({title:e,clickable:t,active:n,id:a}){return t?r.createElement(h,null,r.createElement(f.QVN,{to:`?step=${a}`},r.createElement(d.Z,{sx:n?v.active:v.default},e))):r.createElement(h,null,r.createElement(d.Z,{sx:n?v.active:v.default},e))}function x(){let{steps:e,disabledStep:t,currentStep:n}=(0,c.y)();return r.createElement(l.Z,{sx:{width:"160px",pt:.5}},r.createElement(g,null,e.map((e,a)=>r.createElement(b,p({},e,{active:a===n,key:e.title,clickable:a<=n&&!t})))))}var Z=n(18377);function y(){let{helpBlock:e}=(0,c.y)();return r.createElement(r.Fragment,null,r.createElement(Z.Z,{sx:{flex:1}}),r.createElement(d.Z,{sx:{py:2,pr:2},paragraph:!0,"data-testid":"helpBlock"},r.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))}var E=n(2279),I=n(26440),P=n(63516);let L=({formSchema:e})=>{let{formRefs:t,dispatch:n}=(0,f.OgA)(),[a,i]=r.useState(!1),o=(0,E.y)(),l=e=>{n({type:"@install/update",payload:e}),n({type:"@install/next",payload:{}})},s=r.useCallback(()=>{i(!1)},[]),u=()=>{i(!0)},d=()=>{t.get(e.name).submitForm()};return r.createElement(E.s_,null,r.createElement(E.V9,null),r.createElement(E.N,{hasMenu:!0},r.createElement(E.lJ,null),r.createElement(E.KG,null,r.createElement(I.dq,{initialValues:o,onSuccess:l,onFailure:s,onSubmitting:u,formSchema:e}),r.createElement(E.Qb,null))),r.createElement(E.jH,null,r.createElement(P.Z,{variant:"contained",color:"primary",loading:a,loadingPosition:"center","data-testid":"buttonContinue",onClick:d},"Continue")))};var w=L;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C({children:e,...t}){return r.createElement(l.Z,S({component:"div",sx:{px:2,py:2,flex:1,position:"relative",display:"flex",flexDirection:"column"}},t),e)}var q=n(27036),j=n(89572),z=n(62177),M=n(74721);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let k={success:{sx:{color:"#28a745"}},info:{sx:{color:"#28a745"}},warning:{sx:{color:"#ffc107"}},error:{icon:"ico-close",sx:{color:"#dc3545"}}},W=({variant:e="success"})=>{switch(e){case"success":return r.createElement(q.Z,$({"data-testid":"iconSuccess"},k.success));case"error":return r.createElement(j.Z,$({"data-testid":"iconError"},k.error));case"warning":return r.createElement(z.Z,$({"data-testid":"iconWarning"},k.warning));default:return r.createElement(M.Z,$({"data-testid":"iconInfo"},k.info))}};var _=W},5829:function(e,t,n){n.d(t,{y:function(){return a}});var r=n(86706);function a(){return(0,r.v9)(e=>e.installation)}},2279:function(e,t,n){n.d(t,{KG:function(){return a.KG},N:function(){return a.N},Qb:function(){return a.Qb},V9:function(){return a.V9},cW:function(){return a.cW},jH:function(){return a.jH},lJ:function(){return a.lJ},s_:function(){return a.s_},y:function(){return r.y}});var r=n(5829),a=n(79817)}}]);