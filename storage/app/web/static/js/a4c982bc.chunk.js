"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-forum-blocks-ThreadDetail-Block"],{45964:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(85597),l=a(18302),i=a(84116),r=a(21241),o=a(77029),m=a(30120),d=a(81719),s=a(91647),c=a(61225),u=a(62097),p=a(67294),g=a(86706),h=a(43847);let f="ThreadDetailView",v=(0,d.ZP)("div",{name:f,slot:"ContentWrapper"})(({theme:e})=>({backgroundColor:e.mixins.backgroundColor("paper"),borderRadius:e.spacing(1)})),E=(0,d.ZP)("div",{name:f,slot:"threadViewContainer"})(({theme:e})=>({width:"100%",marginLeft:"auto",marginRight:"auto",padding:`${e.spacing(2)} ${e.spacing(2)} 0 ${e.spacing(2)}`,position:"relative",borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius})),y=(0,d.ZP)("div",{name:f,slot:"AvatarWrapper"})(({theme:e})=>({marginRight:e.spacing(1.5)})),x=(0,d.ZP)("div",{name:f,slot:"threadContent"})(({theme:e})=>({fontSize:e.mixins.pxToRem(15),lineHeight:1.33})),b=(0,d.ZP)("div",{name:f,slot:"tagItem"})(({theme:e})=>({fontSize:e.mixins.pxToRem(13),fontWeight:e.typography.fontWeightBold,borderRadius:4,background:"light"===e.palette.mode?e.palette.background.default:e.palette.action.hover,marginRight:e.spacing(1),marginBottom:e.spacing(1),padding:e.spacing(0,1.5),height:e.spacing(3),lineHeight:e.spacing(3),display:"block",color:"light"===e.palette.mode?"#121212":"#fff"})),_=(0,d.ZP)("div",{name:f,slot:"attachmentTitle"})(({theme:e})=>({fontSize:e.mixins.pxToRem(18),marginTop:e.spacing(2),color:e.palette.text.secondary,fontWeight:e.typography.fontWeightBold})),k=(0,d.ZP)("div",{name:f,slot:"attachment"})(({theme:e})=>({width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between"})),w=(0,d.ZP)("div",{name:f,slot:"attachmentItemWrapper"})(({theme:e})=>({marginTop:e.spacing(2),flexGrow:0,flexShrink:0,flexBasis:"calc(50% - 8px)",minWidth:300})),Z=(0,d.ZP)(h.Z,{name:"OwnerStyled"})(({theme:e})=>({fontWeight:e.typography.fontWeightBold,color:e.palette.text.primary,fontSize:e.mixins.pxToRem(15),"&:hover":{textDecoration:"underline"}})),S=(0,d.ZP)("span",{name:"HeadlineSpan"})(({theme:e})=>({paddingRight:e.spacing(.5),color:e.palette.text.secondary}));function R({user:e,identity:t,item:a,state:l,actions:d,handleAction:h}){let{ItemActionMenu:f,ItemDetailInteraction:R,useGetItems:C,useGetItem:P,i18n:W,jsxBackend:M}=(0,n.OgA)(),[T,z]=p.useState(!0),D=C(null==a?void 0:a.attachments),A=P(null==a?void 0:a.item),B=(0,u.Z)(),F=(0,c.Z)(B.breakpoints.down("sm")),V=(0,n.oHF)("forum","forum_thread","viewPosters"),$=(0,g.v9)(e=>{return(0,n.AV9)(e,null==a?void 0:a.owner)}),H=M.get("core.itemView.pendingReviewCard"),I=M.get("poll.embedItem.insideFeedItem"),L=M.get("forum_post.block.detailListingBlock"),U=M.get("forum_post.block.addForm");if(!e||!a)return null;let{tags:N,description:O,item:j}=a,Q=j&&j.startsWith("poll.")?j:null,Y=()=>{z(e=>!e)};return p.createElement(p.Fragment,null,p.createElement(r.gO,{testid:`detailview ${a.resource_name}`},p.createElement(r.sU,null,p.createElement(v,null,H&&(null==a?void 0:a.is_pending)?p.createElement(H,{sxWrapper:{p:2},item:{...a}}):null,p.createElement(E,null,p.createElement(o.tQ,{sx:{position:"absolute",top:8,right:8}},p.createElement(f,{identity:t,icon:"ico-dottedmore-vertical-o",state:l,menuName:"detailActionMenu",handleAction:h,size:"smaller"})),p.createElement(o.XQ,{variant:"h3",component:"div",my:0,showFull:!0},p.createElement(o.K6,{variant:"itemView",value:a.is_featured}),p.createElement(o.k5,{variant:"itemView",value:a.is_sponsor}),p.createElement(s.Z,{component:"h1",variant:"h3",sx:{pr:2.5,display:{sm:"inline",xs:"block"},verticalAlign:"middle"}},null==a?void 0:a.title)),p.createElement(m.Z,{mt:2,display:"flex"},p.createElement(y,null,p.createElement(o.Yt,{user:e,size:48})),p.createElement(m.Z,null,p.createElement(n.rUS,{variant:"body1",color:"text.primary",to:e.link,children:null==e?void 0:e.full_name,hoverCard:`/user/${e.id}`,sx:{fontWeight:"bold",mr:.5}}),(null==$?void 0:$.resource_name)!==(null==e?void 0:e.resource_name)&&p.createElement(S,null,W.formatMessage({id:"to_parent_user"},{icon:()=>p.createElement(o.zb,{icon:"ico-caret-right"}),parent_user:()=>p.createElement(Z,{user:$})})),p.createElement(o.Ee,{sx:{color:"text.secondary",mt:1}},p.createElement(o.r2,{"data-testid":"publishedDate",value:null==a?void 0:a.creation_date,format:"MMMM DD, yyyy"})))),p.createElement(x,null,p.createElement(o.r,null,p.createElement(i.ZP,{html:O||""})),(null==a?void 0:a.modification_date)?p.createElement(o.Ee,{sx:{color:"text.secondary",mt:1,fontStyle:"italic"}},p.createElement(o.r2,{"data-testid":"modifyDate",value:null==a?void 0:a.modification_date,format:"MMMM DD, yyyy",phrase:"last_update_on_time"})):null),I&&Q&&!(null==A?void 0:A.error)?p.createElement(m.Z,{mt:4},p.createElement(I,{identity:Q})):null,(null==N?void 0:N.length)>0?p.createElement(m.Z,{mt:4,display:"flex",flexWrap:"wrap"},N.map(e=>p.createElement(b,{key:e},p.createElement(n.rUS,{to:`/forum/search?q=%23${e}`},e)))):null,(null==D?void 0:D.length)>0&&p.createElement(p.Fragment,null,p.createElement(_,null,W.formatMessage({id:"attachments"})),p.createElement(k,null,D.map(e=>{return p.createElement(w,{key:e.id.toString()},p.createElement(o.M$,{fileName:e.file_name,downloadUrl:e.download_url,isImage:e.is_image,fileSizeText:e.file_size_text,size:F?"mini":"large",image:null==e?void 0:e.image}))}))),p.createElement(R,{identity:t,state:l,handleAction:h,messageCommentStatistic:"total_reply",dataSourceCommentStatistic:V,forceHideCommentList:!0,handleActionCommentStatistic:Y}))))),p.createElement(m.Z,{sx:{borderRadius:1,overflow:"hidden"},className:!T&&"srOnly"},p.createElement(L,null),p.createElement(U,{blockLayout:"Forum Post Form Detail Thread"})))}R.LoadingSkeleton=function({wrapAs:e,wrapProps:t}){return p.createElement(o.Az,{testid:"skeleton",wrapAs:e,wrapProps:t})},R.displayName="ThreadItem_DetailView";let C=(0,n.Uh$)((0,l.Y)(R,l.c,{}));var P=(0,n.j4Z)({extendBlock:C,defaults:{blockProps:{titleComponent:"h2",titleVariant:"subtitle1",titleColor:"textPrimary",noFooter:!0,noHeader:!0,blockStyle:{sx:{mb:2,mt:2}},contentStyle:{sx:{borderRadius:1,bgcolor:"background.paper",pt:0,pb:0}}}}})}}]);