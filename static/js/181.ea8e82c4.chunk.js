(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[181],{1888:function(e,c,t){"use strict";t.r(c);var a=t(15),r=t(0),n=(t(485),t(486),t(510),t(1086)),s=t(1053),j=t(1118),d=t(1519),l=t(1520),i=t(471),o=t(473),b=t(474),h=t(472),x=t(484),O=t(469),m=t(470),u=t(481),p=t(982),f=t(955),g=t(983),y=t(806),N=t(984),C=t(463),v=t(490),z=t(967),k=t(1288),E=t(971),w=t(981),D=t(499),A=t(503),S=t(498),T=t(508),J=t(6),F=[{id:0,name:"red",code:"#ff0000"},{id:1,name:"purple",code:"#800080"}];c.default=function(){var e=Object(r.useState)(null),c=Object(a.a)(e,2),t=c[0],R=c[1],q=Object(r.useState)(null),B=Object(a.a)(q,2),G=B[0],H=B[1],I=function(e){R(t!==e?e:null)},K=function(e){H(G!==e?e:null)};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(i.a,{children:[Object(J.jsx)(o.a,{children:Object(J.jsx)(b.a,{tag:"h4",children:"Add New Colors"})}),Object(J.jsx)(h.a,{children:Object(J.jsx)(x.a,{children:Object(J.jsxs)(O.a,{children:[Object(J.jsxs)(m.a,{sm:"12",md:"6",children:[Object(J.jsx)(u.a,{for:"color",children:"Color Name"}),Object(J.jsxs)(p.a,{className:"input-group-merge",tag:f.a,children:[Object(J.jsx)(g.a,{addonType:"prepend",children:Object(J.jsx)(y.a,{children:Object(J.jsx)(d.a,{size:15})})}),Object(J.jsx)(N.a,{type:"text",name:"name",id:"color",placeholder:"Enter your color name"})]})]}),Object(J.jsxs)(m.a,{sm:"12",md:"6",children:[Object(J.jsx)(u.a,{for:"code",children:"Color Code"}),Object(J.jsxs)(p.a,{className:"input-group-merge",tag:f.a,children:[Object(J.jsx)(g.a,{addonType:"prepend",children:Object(J.jsx)(y.a,{children:Object(J.jsx)(l.a,{size:15})})}),Object(J.jsx)(N.a,{type:"text",name:"name",id:"code",placeholder:"Enter your color code"})]})]}),Object(J.jsx)(m.a,{sm:"12",className:"",children:Object(J.jsx)(f.a,{className:"d-flex mb-0",children:Object(J.jsx)(C.a.Ripple,{className:"mr-1",color:"primary",type:"submit",onClick:function(e){return e.preventDefault()},children:"Submit"})})})]})})})]}),Object(J.jsx)(i.a,{children:Object(J.jsxs)(h.a,{children:[Object(J.jsx)(b.a,{children:"All Colors"}),Object(J.jsxs)(v.a,{responsive:!0,children:[Object(J.jsx)("thead",{children:Object(J.jsxs)("tr",{children:[Object(J.jsx)("th",{children:"Color Name"}),Object(J.jsx)("th",{children:"Color Code"}),Object(J.jsx)("th",{children:"Actions"})]})}),Object(J.jsx)("tbody",{children:F.map((function(e,c){return Object(J.jsxs)("tr",{children:[Object(J.jsx)("td",{children:e.name}),Object(J.jsx)("td",{children:e.code}),Object(J.jsxs)("td",{children:[Object(J.jsxs)(z.a,{children:[Object(J.jsx)(k.a,{className:"icon-btn hide-arrow",color:"transparent",size:"sm",caret:!0,children:Object(J.jsx)(n.a,{size:15})}),Object(J.jsxs)(E.a,{right:!0,children:[Object(J.jsxs)(w.a,{href:"/",onClick:function(c){c.preventDefault(),K(e.id)},children:[Object(J.jsx)(s.a,{className:"mr-50",size:15}),"  ",Object(J.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(J.jsxs)(w.a,{href:"/",onClick:function(c){c.preventDefault(),I(e.id)},children:[Object(J.jsx)(j.a,{className:"mr-50",size:15})," ",Object(J.jsx)("span",{className:"align-middle",children:"Delete"})]})]})]}),Object(J.jsxs)(D.a,{isOpen:G===e.id,toggle:function(){return K(e.id)},className:"modal-dialog-centered",modalClassName:"modal-primary",children:[Object(J.jsx)(A.a,{toggle:function(){return K(e.id)},children:"Edit"}),Object(J.jsx)(S.a,{children:Object(J.jsx)(x.a,{children:Object(J.jsxs)(O.a,{children:[Object(J.jsxs)(m.a,{sm:"12",md:"6",children:[Object(J.jsx)(u.a,{for:"color",children:"Color Name"}),Object(J.jsxs)(p.a,{className:"input-group-merge",tag:f.a,children:[Object(J.jsx)(g.a,{addonType:"prepend",children:Object(J.jsx)(y.a,{children:Object(J.jsx)(d.a,{size:15})})}),Object(J.jsx)(N.a,{type:"text",name:"name",id:"color",placeholder:"Enter your color name"})]})]}),Object(J.jsxs)(m.a,{sm:"12",md:"6",children:[Object(J.jsx)(u.a,{for:"code",children:"Color Code"}),Object(J.jsxs)(p.a,{className:"input-group-merge",tag:f.a,children:[Object(J.jsx)(g.a,{addonType:"prepend",children:Object(J.jsx)(y.a,{children:Object(J.jsx)(l.a,{size:15})})}),Object(J.jsx)(N.a,{type:"text",name:"name",id:"code",placeholder:"Enter your color code"})]})]})]})})}),Object(J.jsx)(T.a,{children:Object(J.jsx)(C.a,{color:"primary",onClick:function(){return K(e.id)},children:"Submit"})})]},e.id),Object(J.jsxs)(D.a,{isOpen:t===e.id,toggle:function(){return I(e.id)},className:"modal-dialog-centered",modalClassName:"modal-danger",children:[Object(J.jsx)(A.a,{toggle:function(){return I(e.id)},children:"Delete"}),Object(J.jsx)(S.a,{children:"Are you sure you want to delete this?"}),Object(J.jsx)(T.a,{children:Object(J.jsx)(C.a,{color:"danger",onClick:function(){return I(e.id)},children:"delete"})})]},e.id)]})]},c)}))})]})]})})]})}},485:function(e,c,t){},486:function(e,c,t){}}]);
//# sourceMappingURL=181.ea8e82c4.chunk.js.map