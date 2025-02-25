"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-layout-LayoutSlot-SlotWithEditingPage"],{30986:function(t,e,o){o.d(e,{Z:function(){return $}});var r=o(63366),i=o(87462),n=o(67294),a=o(86010),l=o(94780),d=o(41796),u=o(36622),s=o(81719),c=o(78884),p=o(1588),g=o(34867);function m(t){return(0,g.Z)("MuiButtonGroup",t)}let h=(0,p.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var f=o(58907),v=o(85893);let b=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],x=(t,e)=>{let{ownerState:o}=t;return[{[`& .${h.grouped}`]:e.grouped},{[`& .${h.grouped}`]:e[`grouped${(0,u.Z)(o.orientation)}`]},{[`& .${h.grouped}`]:e[`grouped${(0,u.Z)(o.variant)}`]},{[`& .${h.grouped}`]:e[`grouped${(0,u.Z)(o.variant)}${(0,u.Z)(o.orientation)}`]},{[`& .${h.grouped}`]:e[`grouped${(0,u.Z)(o.variant)}${(0,u.Z)(o.color)}`]},e.root,e[o.variant],!0===o.disableElevation&&e.disableElevation,o.fullWidth&&e.fullWidth,"vertical"===o.orientation&&e.vertical]},y=t=>{let{classes:e,color:o,disabled:r,disableElevation:i,fullWidth:n,orientation:a,variant:d}=t,s={root:["root",d,"vertical"===a&&"vertical",n&&"fullWidth",i&&"disableElevation"],grouped:["grouped",`grouped${(0,u.Z)(a)}`,`grouped${(0,u.Z)(d)}`,`grouped${(0,u.Z)(d)}${(0,u.Z)(a)}`,`grouped${(0,u.Z)(d)}${(0,u.Z)(o)}`,r&&"disabled"]};return(0,l.Z)(s,m,e)},Z=(0,s.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:x})(({theme:t,ownerState:e})=>(0,i.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"contained"===e.variant&&{boxShadow:(t.vars||t).shadows[2]},e.disableElevation&&{boxShadow:"none"},e.fullWidth&&{width:"100%"},"vertical"===e.orientation&&{flexDirection:"column"},{[`& .${h.grouped}`]:(0,i.Z)({minWidth:40,"&:not(:first-of-type)":(0,i.Z)({},"horizontal"===e.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===e.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===e.variant&&"horizontal"===e.orientation&&{marginLeft:-1},"outlined"===e.variant&&"vertical"===e.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,i.Z)({},"horizontal"===e.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===e.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===e.variant&&"horizontal"===e.orientation&&{borderRight:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"vertical"===e.orientation&&{borderBottom:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===e.variant&&"inherit"!==e.color&&{borderColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:(0,d.Fq)(t.palette[e.color].main,.5)},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"transparent"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"transparent"},"contained"===e.variant&&"horizontal"===e.orientation&&{borderRight:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${h.disabled}`]:{borderRight:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"vertical"===e.orientation&&{borderBottom:`1px solid ${(t.vars||t).palette.grey[400]}`,[`&.${h.disabled}`]:{borderBottom:`1px solid ${(t.vars||t).palette.action.disabled}`}},"contained"===e.variant&&"inherit"!==e.color&&{borderColor:(t.vars||t).palette[e.color].dark},{"&:hover":(0,i.Z)({},"outlined"===e.variant&&"horizontal"===e.orientation&&{borderRightColor:"currentColor"},"outlined"===e.variant&&"vertical"===e.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,i.Z)({},"contained"===e.variant&&{boxShadow:"none"})},"contained"===e.variant&&{boxShadow:"none"})})),S=n.forwardRef(function(t,e){let o=(0,c.Z)({props:t,name:"MuiButtonGroup"}),{children:l,className:d,color:u="primary",component:s="div",disabled:p=!1,disableElevation:g=!1,disableFocusRipple:m=!1,disableRipple:h=!1,fullWidth:x=!1,orientation:S="horizontal",size:$="medium",variant:C="outlined"}=o,R=(0,r.Z)(o,b),k=(0,i.Z)({},o,{color:u,component:s,disabled:p,disableElevation:g,disableFocusRipple:m,disableRipple:h,fullWidth:x,orientation:S,size:$,variant:C}),W=y(k),B=n.useMemo(()=>({className:W.grouped,color:u,disabled:p,disableElevation:g,disableFocusRipple:m,disableRipple:h,fullWidth:x,size:$,variant:C}),[u,p,g,m,h,x,$,C,W.grouped]);return(0,v.jsx)(Z,(0,i.Z)({as:s,role:"group",className:(0,a.default)(W.root,d),ref:e,ownerState:k},R,{children:(0,v.jsx)(f.Z.Provider,{value:B,children:l})}))});var $=S},88256:function(t,e,o){o.d(e,{Z:function(){return a}});var r=o(30120),i=o(91647),n=o(67294);function a({slotName:t,children:e}){return n.createElement(r.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}},n.createElement(i.Z,{component:"span",variant:"body1"},t),e)}},96253:function(t,e,o){o.r(e),o.d(e,{default:function(){return S}});var r=o(85597),i=o(16473),n=o(30120),a=o(30986),l=o(50130),d=o(81719),u=o(38790),s=o(68929),c=o.n(s),p=o(67294),g=o(60994),m=o(66320),h=o(14293),f=o(88256),v=o(49341);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}let x=(0,d.ZP)("div")({textAlign:"right",padding:8,"&:hover":{opacity:1}}),y=t=>{let{slotName:e,pageName:o,elementPath:n,pageSize:d,templateName:s}=t,{dispatch:c,i18n:g}=(0,r.OgA)(),m=()=>c({type:"@layout/createBlock",payload:{templateName:s,pageName:o,pageSize:d,elementPath:n,slotName:e}});return p.createElement(x,null,p.createElement(a.Z,{size:"small",color:"primary"},p.createElement(u.Z,{title:g.formatMessage({id:"create_layout_block"})},p.createElement("span",null,p.createElement(l.Z,{onClick:m},p.createElement(i.zb,{icon:"ico-plus"}))))))};function Z(t,e,o){if(!e)return 0;let r=o?t.height/o:-1;return Math.floor((e.y-t.y)/r)}function S(t){let{elementPath:e,templateName:o,slotName:i,flexWeight:a,xs:l,rootStyle:d,stageStyle:u}=t,s=p.useRef(),{pageSize:x,pageName:S,blocks:$}=(0,h.Z)(),{jsxBackend:C,layoutBackend:R}=(0,r.OgA)(),k=p.useRef(0),W=p.useCallback(()=>{return $.filter(t=>t.slotName===i).map(t=>{return t.props.slotName=i,t})},[$,i]),[B,E]=p.useState(W()),P=B.length,[,w]=(0,g.L)({accept:m.C,collect:t=>({isOver:t.isOver(),canDrop:t.canDrop()}),canDrop:()=>!0,drop:(t,e)=>{if(e.didDrop())return;let r=Z(s.current.getBoundingClientRect(),e.getClientOffset(),P),n={blockId:t.blockId,order:r,slotName:i,templateName:o,pageSize:x,pageName:S};return R.updateBlockPosition(n),n},hover(t,e){let o=Z(s.current.getBoundingClientRect(),e.getClientOffset(),P);if(o!==k.current&&-1<=o){k.current=o;let r=B.map((t,e)=>{return t});E([...r])}}});p.useEffect(()=>{E(W())},[$,W]);let z="0"<a||!l;return p.createElement(v.g7,b({item:!0,xs:z?void 0:l,ref:w,flexWeight:a,useFlex:z,"data-testid":c()(`LayoutSlot_${i}`)},d),p.createElement(v.IL,b({controller:!0},u),p.createElement(f.Z,{slotName:i},p.createElement(y,{elementPath:e,pageName:S,templateName:o,slotName:i,pageSize:x})),p.createElement(n.Z,{sx:{minHeight:60},ref:s},C.render(B))))}},49341:function(t,e,o){o.d(e,{$8:function(){return c},IL:function(){return l},M5:function(){return s},UC:function(){return u},g7:function(){return a},x_:function(){return d}});var r=o(30120),i=o(30030),n=o(81719);let a=(0,n.ZP)(i.ZP,{name:"StyledSlot",slot:"root",shouldForwardProp:t=>"maxWidth"!==t&&"minWidth"!==t&&"minHeight"!==t&&"flexWeight"!==t&&"useFlex"!==t})(({theme:t,maxWidth:e,minWidth:o,minHeight:r,flexWeight:i,useFlex:n})=>({display:"block",flexBasis:"100%",position:"relative",..."screen"===r&&{minHeight:"100vh"},[t.breakpoints.down("xl")]:{...e&&{maxWidth:`${t.layoutSlot.points[e]}px !important`}},...o&&{minWidth:`${t.layoutSlot.points[o]}px !important`},...n&&{flex:null!=i?i:1,minWidth:0}})),l=(0,n.ZP)(r.Z,{name:"StyledSlot",slot:"stage",shouldForwardProp:t=>"maxWidth"!==t&&"minWidth"!==t&&"minHeight"!==t&&"controller"!==t&&"sticky"!==t&&"liveEdit"!==t})(({theme:t,minHeight:e,fixed:o,maxWidth:r,minWidth:i,liveEdit:n,controller:a,sticky:l})=>({display:"block",flexBasis:"100%",...o&&{position:"fixed"},..."screen"===e&&{minHeight:"100vh"},...r&&{maxWidth:t.layoutSlot.points[r]},...i&&{maxWidth:t.layoutSlot.points[i]},...n&&{position:"relative",minHeight:t.spacing(6)},...a&&{position:"relative",marginBottom:t.spacing(1),padding:t.spacing(1),minHeight:t.spacing(8),borderColor:t.palette.text.primary,borderStyle:"dotted",borderWidth:1},..."sideStickyStatic"===l&&{position:"sticky",top:0},..."sideSticky"===l&&{position:"sticky"}}));(0,n.ZP)(r.Z,{name:"StyledSlot",slot:"preview",shouldForwardProp:t=>"name"!==t})(({name:t,theme:e})=>({fontSize:"0.8125rem",fontWeight:e.typography.fontWeightMedium,height:80,textTransform:"lowercase",alignItems:"center",justifyContent:"center",display:"flex"}));let d=(0,n.ZP)(r.Z,{name:"StyledSlot",slot:"content",shouldForwardProp:t=>"maxWidth"!==t&&"minWidth"!==t&&"minHeight"!==t&&"fixed"!==t})(({theme:t,minHeight:e,maxWidth:o,minWidth:r})=>({display:"block",flexBasis:"100%",marginLeft:"auto",marginRight:"auto",..."screen"===e&&{minHeight:"100vh"},...o&&{maxWidth:t.layoutSlot.points[o]},...r&&{maxWidth:t.layoutSlot.points[r]}})),u=(0,n.ZP)("div",{name:"StyledSlot",slot:"stickyRoot"})({display:"flex",height:"100%",flexDirection:"column"}),s=(0,n.ZP)("div",{name:"StyledSlot",slot:"stickyHeader"})({}),c=(0,n.ZP)("div",{name:"StyledSlot",slot:"stickyContent"})({flex:1,minHeight:0})}}]);