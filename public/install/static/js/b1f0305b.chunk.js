(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["install"],{27036:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var a=r(e(64938)),i=e(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");n.Z=o},89572:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var a=r(e(64938)),i=e(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");n.Z=o},74721:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var a=r(e(64938)),i=e(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");n.Z=o},62177:function(t,n,e){"use strict";var r=e(64836);n.Z=void 0;var a=r(e(64938)),i=e(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");n.Z=o},64938:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(81064)},63516:function(t,n,e){"use strict";e.d(n,{Z:function(){return P}});var r=e(63366),a=e(87462),i=e(67294),o=e(36622),l=e(49669),s=e(94780),u=e(81719),c=e(78884),d=e(21822),f=e(35705),m=e(34867),p=e(1588);function g(t){return(0,m.Z)("MuiLoadingButton",t)}let h=(0,p.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var v=e(85893);let Z=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],x=t=>{let{loading:n,loadingPosition:e,classes:r}=t,i={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,o.Z)(e)}`],endIcon:[n&&`endIconLoading${(0,o.Z)(e)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,o.Z)(e)}`]},l=(0,s.Z)(i,g,r);return(0,a.Z)({},r,l)},y=t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t,b=(0,u.ZP)(d.Z,{shouldForwardProp:t=>y(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>{return[n.root,n.startIconLoadingStart&&{[`& .${h.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${h.endIconLoadingEnd}`]:n.endIconLoadingEnd}]}})(({ownerState:t,theme:n})=>(0,a.Z)({[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${h.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${h.startIconLoadingStart}, & .${h.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}})),E=(0,u.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{let{ownerState:e}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,o.Z)(e.loadingPosition)}`]]}})(({theme:t,ownerState:n})=>(0,a.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:"small"===n.size?10:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:"small"===n.size?10:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})),I=i.forwardRef(function(t,n){let e=(0,c.Z)({props:t,name:"MuiLoadingButton"}),{children:i,disabled:o=!1,id:s,loading:u=!1,loadingIndicator:d,loadingPosition:m="center",variant:p="text"}=e,g=(0,r.Z)(e,Z),h=(0,l.Z)(s),y=null!=d?d:(0,v.jsx)(f.Z,{"aria-labelledby":h,color:"inherit",size:16}),I=(0,a.Z)({},e,{disabled:o,loading:u,loadingIndicator:y,loadingPosition:m,variant:p}),P=x(I),S=u?(0,v.jsx)(E,{className:P.loadingIndicator,ownerState:I,children:y}):null;return(0,v.jsxs)(b,(0,a.Z)({disabled:o||u,id:h,ref:n},g,{variant:p,classes:P,ownerState:I,children:["end"===I.loadingPosition?i:S,"end"===I.loadingPosition?S:i]}))});var P=I},46207:function(t,n,e){"use strict";var r=e(49064);n.Z=r.Z},81064:function(t,n,e){"use strict";e.r(n),e.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return i.Z},createSvgIcon:function(){return o.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return g.Z},unsupportedProp:function(){return h},useControlled:function(){return v.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return y.Z}});var r=e(37078),a=e(36622),i=e(46207),o=e(54235),l=e(75400),s=e(67421).Z,u=e(70061),c=e(47505),d=e(57577),f=e(18986).Z,m=e(7960).Z,p=e(63289),g=e(49669),h=e(40444).Z,v=e(42293),Z=e(26432),x=e(84771),y=e(40011);let b={configure:t=>{console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),r.Z.configure(t)}}},30998:function(t,n,e){var r=e(41848),a=e(67206),i=e(40554),o=Math.max;t.exports=function(t,n,e){var l=null==t?0:t.length;if(!l)return -1;var s=null==e?0:i(e);return s<0&&(s=o(l+s,0)),r(t,a(n,3),s)}},79817:function(t,n,e){"use strict";e.d(n,{Qb:function(){return b},h0:function(){return w},lJ:function(){return x},s_:function(){return o},N:function(){return s},KG:function(){return j},jH:function(){return u},V9:function(){return f},cW:function(){return O}});var r=e(67294),a=e(81719);let i=(0,a.ZP)("div",{name:"InstallPanel"})(({theme:t})=>({width:700,backgroundColor:t.palette.background.paper,margin:t.spacing(6,0),border:t.mixins.border("secondary"),borderRadius:8,position:"relative",boxShadow:t.shadows[2]}));function o({children:t}){return r.createElement(i,null,t)}var l=e(30120);function s({children:t,hasMenu:n}){return r.createElement(l.Z,{sx:n?{display:"flex",minHeight:"400px",flexDirection:"row"}:{minHeight:"400px"}},t)}function u({children:t}){return t?r.createElement(l.Z,{sx:{py:2,px:2,textAlign:"right",borderTop:t=>t.mixins.border("secondary")}},t):null}var c=e(91647),d=e(5829);function f(){let{platformVersion:t}=(0,d.y)();return r.createElement(l.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",py:2,px:3,borderBottom:t=>t.mixins.border("secondary")}},r.createElement("img",{alt:"MetaFox",src:"https://metafox-assets.s3.eu-north-1.amazonaws.com/logo.png",height:40}),r.createElement(c.Z,null,t))}var m=e(85597);function p(){return(p=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}let g=(0,a.ZP)("ul",{name:"StepMenu",slot:"Root"})(()=>({listStyle:"none none outside",margin:0,padding:"16px 0 16px 0"})),h=(0,a.ZP)("li",{name:"StepMenu",slot:"Item"})(()=>({lineHeight:"40px",paddingLeft:"24px"})),v={active:{lineHeight:"32px",color:"text.primary",fontWeight:"bold"},default:{lineHeight:"32px",color:"text.primary"}};function Z({title:t,clickable:n,active:e,id:a}){return n?r.createElement(h,null,r.createElement(m.QVN,{to:`?step=${a}`},r.createElement(c.Z,{sx:e?v.active:v.default},t))):r.createElement(h,null,r.createElement(c.Z,{sx:e?v.active:v.default},t))}function x(){let{steps:t,disabledStep:n,currentStep:e}=(0,d.y)();return r.createElement(l.Z,{sx:{width:"160px",pt:.5}},r.createElement(g,null,t.map((t,a)=>r.createElement(Z,p({},t,{active:a===e,key:t.title,clickable:a<=e&&!n})))))}var y=e(18377);function b(){let{helpBlock:t}=(0,d.y)();return r.createElement(r.Fragment,null,r.createElement(y.Z,{sx:{flex:1}}),r.createElement(c.Z,{sx:{py:2,pr:2},paragraph:!0,"data-testid":"helpBlock"},r.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))}var E=e(2279),I=e(26440),P=e(63516);let S=({formSchema:t})=>{let{formRefs:n,dispatch:e}=(0,m.OgA)(),[a,i]=r.useState(!1),o=(0,E.y)(),l=t=>{e({type:"@install/update",payload:t}),e({type:"@install/next",payload:{}})},s=r.useCallback(()=>{i(!1)},[]),u=()=>{i(!0)},c=()=>{n.get(t.name).submitForm()};return r.createElement(E.s_,null,r.createElement(E.V9,null),r.createElement(E.N,{hasMenu:!0},r.createElement(E.lJ,null),r.createElement(E.KG,null,r.createElement(I.dq,{initialValues:o,onSuccess:l,onFailure:s,onSubmitting:u,formSchema:t}),r.createElement(E.Qb,null))),r.createElement(E.jH,null,r.createElement(P.Z,{variant:"contained",color:"primary",loading:a,loadingPosition:"center","data-testid":"buttonContinue",onClick:c},"Continue")))};var w=S;function L(){return(L=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function j({children:t,...n}){return r.createElement(l.Z,L({component:"div",sx:{px:2,py:2,flex:1,position:"relative",display:"flex",flexDirection:"column"}},n),t)}var C=e(27036),M=e(89572),_=e(62177),$=e(74721);function k(){return(k=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}let z={success:{sx:{color:"#28a745"}},info:{sx:{color:"#28a745"}},warning:{sx:{color:"#ffc107"}},error:{icon:"ico-close",sx:{color:"#dc3545"}}},N=({variant:t="success"})=>{switch(t){case"success":return r.createElement(C.Z,k({"data-testid":"iconSuccess"},z.success));case"error":return r.createElement(M.Z,k({"data-testid":"iconError"},z.error));case"warning":return r.createElement(_.Z,k({"data-testid":"iconWarning"},z.warning));default:return r.createElement($.Z,k({"data-testid":"iconInfo"},z.info))}};var O=N},5829:function(t,n,e){"use strict";e.d(n,{y:function(){return a}});var r=e(86706);function a(){return(0,r.v9)(t=>t.installation)}},2279:function(t,n,e){"use strict";e.d(n,{KG:function(){return a.KG},N:function(){return a.N},Qb:function(){return a.Qb},V9:function(){return a.V9},cW:function(){return a.cW},jH:function(){return a.jH},lJ:function(){return a.lJ},s_:function(){return a.s_},y:function(){return r.y}});var r=e(5829),a=e(79817)},77352:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return u}});var r=e(85597),a=e(21241),i=e(67294),o=e(30998),l=e.n(o),s=e(2279);function u(t){let{createPageParams:n,dispatch:e,navigate:o}=(0,r.OgA)(),{steps:u,succeed:c,failed:d,forceStep:f,currentStep:m,verifiedStep:p}=(0,s.y)(),g=n(t,({step:t})=>{return{module_name:"install",item_type:"install",step:null!=t?t:"requirements"}});if(f)return i.createElement(a.T3,{pageName:`install.${f}`,pageParams:g});if(c)return i.createElement(a.T3,{pageName:"install.installed",pageParams:g});if(d)return i.createElement(a.T3,{pageName:"install.failed",pageParams:g});let{step:h}=g,v=l()(u,t=>t.id===h);return v<0&&(v=0),v>p&&(v=p),h!==u[v].id&&o({pathname:"/install",search:`step=${u[v].id}`}),v!==m&&e({type:"@install/update",payload:{currentStep:v}}),i.createElement(a.T3,{pageName:`install.${h}`,pageParams:g})}}}]);