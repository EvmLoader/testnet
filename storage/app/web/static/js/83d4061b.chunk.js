"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-SmartDataGrid-HeaderCheckbox"],{30094:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),l=n(30120),a=n(81719),i=n(10999),o=n(85597),c=n(26933),u=n(17563),d=n(77029);let s=(0,a.ZP)("div",{name:"DataGrid",slot:"Cell",shouldForwardProp(e){return!/width|height|flex|align|minWidth|sortable/i.test(e)}})(({sortable:e,align:t,width:n,height:r,minWidth:l,flex:a})=>({display:"flex",alignItems:"center",padding:"10px 4px",overflow:"hidden",justifyContent:null!=t?t:"start",minWidth:l,flex:a,width:n,height:r,textAlign:null!=t?t:"left",fontWeight:"bold",cursor:e?"pointer":"unset"})),f=e=>{return"asc"===e?"ico-arrow-up":"desc"===e?"ico-arrow-down":void 0};function m({colDef:e,children:t}){let{location:n}=(0,o.OgA)(),{handleColumnAction:a}=(0,i.Z)(),{headerAlign:m,align:h,minWidth:x,width:p,flex:C,headerHeight:g,action:k,sortable:b,description:v,sortableField:w}=e,{search:Z}=n,{order:E,order_by:y}=u.parse(Z);return r.createElement(s,{align:null!=m?m:h,minWidth:x,width:p,flex:C,sortable:b,height:g,onClick:()=>b&&a("column/sortable",{action:k,sortableField:w,type:"desc"===y?"asc":"desc"})},t,b&&y&&E===w&&r.createElement(c.Z,{icon:f(y)}),r.createElement(l.Z,{sx:{pl:.5}},r.createElement(d.kW,null,v)))}},19297:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(49960),l=n(67294),a=n(30094),i=n(10999);let o=(0,l.createContext)(void 0);var c=function({colDef:e}){let{apiRef:t}=(0,i.Z)(),{indeterminate:n,checked:c}=l.useContext(o),u=l.useCallback(()=>t.current.toggleSelectAll(),[]);return l.createElement(a.Z,{colDef:e},l.createElement(r.Z,{size:"medium",disabled:!1,onClick:u,checked:c,indeterminate:n,color:"primary"}))}},10999:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);let l=(0,r.createContext)(void 0);function a(){return(0,r.useContext)(l)}}}]);