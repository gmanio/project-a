"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{6604:function(e,t,n){n.r(t);var o=n(9268),a=n(976),i=n(9640),r=n(9493),s=n(1771),l=n(5828),p=n(2460),c=n(2447),x=n(4087),d=n(884),b=n(5598);let u=Object.entries(a.as).flatMap((e,t)=>{let[n,a]=e;return{icon:(0,o.jsx)(r.Z,{}),name:a&&a.place[0].korean||"",data:a.place[0]}});t.default=e=>{let{isOpen:t,handleClose:n,handleOpen:a}=e,r=(0,b.UL)(),[m]=(0,d.KO)(i.KD),f=e=>()=>{let t=new r.LatLng(e.lat,e.lng);m&&(m.setCenter(t),m.setZoom(14)),n()};return(0,o.jsxs)(s.Z,{sx:{display:"flex",position:"absolute",width:100,height:330,bottom:"30px",right:"10px",zIndex:1e3},children:[(0,o.jsx)(l.Z,{ariaLabel:"SpeedDial",sx:{position:"absolute",bottom:16,right:16,zIndex:1e3},icon:(0,o.jsx)(p.Z,{sx:{background:"#111"}}),FabProps:{sx:{background:"#111 !important"},size:"medium"},onClose:n,onOpen:a,open:t,children:u.map(e=>(0,o.jsx)(c.Z,{icon:e.icon,tooltipTitle:(0,o.jsx)(s.Z,{sx:{fontSize:14,flexWrap:"nowrap",minWidth:70,backdropFilter:"blur(2px)",background:"transparent !important"},children:e.name}),tooltipOpen:!0,onClick:f(e.data),FabProps:{sx:{background:"#777 !important",backdropFilter:"blur(2px)",color:"#fff"},size:"medium"},sx:{fontSize:11}},e.name))}),(0,o.jsx)(x.Z,{open:t})]})}}}]);