"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-form-elements-PaddingSpaceGroupField"],{74121:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(30120),n=a(30030),r=a(74825),m=a(12501),c=a(91647),o=a(62097),u=a(18948),i=a(96026),p=a.n(i),b=a(67294);function f({label:e,name:t,step:a=.125}){let[l,,{setValue:n}]=(0,u.U$)(t),c=(0,o.Z)(),i=p()(0,4/a+1).map(e=>({value:e*a,label:`${c.spacing(e*a)}`}));return b.createElement(m.Z,{value:l.value,onBlur:l.onBlur,onChange:e=>n(Number(e.target.value)),size:"small",variant:"outlined",defaultValue:0,fullWidth:!0,startAdornment:e},i.map(e=>b.createElement(r.Z,{key:e.label,value:e.value},e.label)))}function s({config:e}){let{label:t,prefix:a,description:r}=e;return b.createElement(l.Z,{sx:{pt:2}},t?b.createElement(c.Z,{sx:{fontWeight:"bold",pb:2},variant:"body2",color:"text.secondary"},t):null,r?b.createElement(c.Z,{paragraph:!0,color:"text.secondary",variant:"body2"},r):null,b.createElement(n.ZP,{container:!0,spacing:2},b.createElement(n.ZP,{item:!0},b.createElement(f,{label:"top",name:`${a}.pt`})),b.createElement(n.ZP,{item:!0},b.createElement(f,{label:"right",name:`${a}.pr`})),b.createElement(n.ZP,{item:!0},b.createElement(f,{label:"bottom",name:`${a}.pb`})),b.createElement(n.ZP,{item:!0},b.createElement(f,{label:"left",name:`${a}.pl`}))))}}}]);