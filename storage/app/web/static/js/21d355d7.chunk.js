"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-video-components-StatusComposerControlAttatchedVideos-PreviewVideos"],{25033:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var o=a(85597),i=a(77029),l=a(21822),r=a(50130),n=a(38790),s=a(86010),c=a(27361),m=a.n(c),d=a(67294),u=a(22410),p=a(73327);let f=(0,u.Z)(e=>(0,p.Z)({root:{display:"block",borderRadius:e.shape.borderRadius,position:"relative"},listContainer:{position:"relative",display:"flex",flexWrap:"wrap"},itemInner:{maxWidth:"100%"},itemRoot:{position:"relative",display:"flex",flexBasis:"50%",padding:1},item0:{},item1:{},item2:{},item3:{},item4:{},item:{display:"block",padding:e.spacing(.25)},preset1:{"& $item0":{flexBasis:"100%"}},preset2:{},preset3:{"& $item0":{flexBasis:"100%"}},preset4:{},remainBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.3)","&:hover":{backgroundColor:"rgba(0,0,0,0.1)"}},remainText:{color:"white",position:"absolute",left:"50%",top:"50%",fontSize:"2rem",transform:"translate(-50%,-50%)"},actionBar:{position:"absolute",top:0,right:0,display:"flex",flexDirection:"row-reverse",padding:e.spacing(2)},closeButton:{backgroundColor:"rgba(0,0,0,0.7)","&:hover":{backgroundColor:"rgba(0,0,0,0.8)"},"& span":{color:"white"}}}),{name:"PhotoPreviews"});function v({className:e,title:t,onClick:a}){return d.createElement(n.Z,{title:t},d.createElement(r.Z,{size:"smaller",onClick:a,className:e},d.createElement(i.zb,{icon:"ico-close"})))}function g({composerRef:e}){let t=f(),{i18n:a}=(0,o.OgA)(),r=m()(e.current.state,"attachments.video.value"),[n,c]=d.useState(null!=r?r:[]),u=d.useCallback(()=>{e.current.removeAttachments()},[e]);if(d.useEffect(()=>{r&&(null==r?void 0:r.length)&&c(r)},[r]),d.useEffect(()=>{n.length&&e.current.setAttachments("video","video",{value:n,as:"StatusComposerControlAttatchedVideos"})},[e,n]),!(null==n?void 0:n.length))return null;let p=Math.min(n.length,4)%5,g=n.length-p;return d.createElement("div",{className:(0,s.default)(t.root)},d.createElement("div",{className:(0,s.default)(t.listContainer,t[`preset${p}`])},n.slice(0,p).map((e,a)=>d.createElement("div",{className:(0,s.default)(t.itemRoot,t[`item${a}`]),key:a.toString()},d.createElement("video",{className:t.itemInner,src:e.source}),0<g&&p===a+1?d.createElement("div",{className:t.remainBackdrop},d.createElement("div",{className:t.remainText},`+ ${g}`)):null))),d.createElement("div",{className:t.actionBar},d.createElement(v,{onClick:u,title:a.formatMessage({id:"remove_all"}),className:t.closeButton}),d.createElement(l.Z,{variant:"contained",size:"small"},d.createElement(i.zb,{icon:"ico-pencil"}),d.createElement("span",null,a.formatMessage({id:"edit_all"})))))}}}]);