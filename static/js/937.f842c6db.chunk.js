"use strict";(self.webpackChunke_commerce4_frontend=self.webpackChunke_commerce4_frontend||[]).push([[937],{7937:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var s=n(1087),c=n(5066),a=n(4420),r=n(2791),d=n(184);const i=()=>{var t;const e=(0,a.v9)((t=>t.cart.token)),[n,i]=(0,r.useState)(1),{data:l,isLoading:o}=(0,c.Z)("orders?page=".concat(n,"&limit=10"),"GET",null,e),u=t=>{let e=0;return t.map((t=>e+=t.price)),e};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[(0,d.jsxs)("table",{className:"table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",children:"Client Name"}),(0,d.jsx)("th",{scope:"col",children:"Email"}),(0,d.jsx)("th",{scope:"col",className:"text-center",children:"Status"}),(0,d.jsx)("th",{scope:"col",className:"text-center",children:"Options"}),(0,d.jsx)("th",{scope:"col",children:"Details"}),(0,d.jsx)("th",{scope:"col",children:"Total"})]})}),(0,d.jsx)("tbody",{children:o?"Loading":null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.orders.map((t=>{var e,n;return(0,d.jsxs)("tr",{className:"dash-product",children:[(0,d.jsx)("td",{children:null===t||void 0===t||null===(e=t.information)||void 0===e?void 0:e.name}),(0,d.jsx)("td",{children:null===t||void 0===t||null===(n=t.information)||void 0===n?void 0:n.email}),(0,d.jsx)("td",{className:"text-center bold ".concat("pending"===(null===t||void 0===t?void 0:t.status)&&"text-warning"," ").concat("closed"===(null===t||void 0===t?void 0:t.status)?"text-danger":"text-success"),children:null===t||void 0===t?void 0:t.status}),(0,d.jsxs)("td",{className:"d-flex justify-content-center align-items-center",children:[(0,d.jsx)(s.rU,{to:"products/".concat(t._id),children:(0,d.jsx)("button",{className:"btn btn-primary me-2",children:"show products"})}),(0,d.jsx)(s.rU,{to:"".concat(t._id),children:(0,d.jsx)("button",{className:"btn btn-danger",children:"update status"})})]}),(0,d.jsx)("td",{children:(0,d.jsx)(s.rU,{to:"information/".concat(t._id),children:(0,d.jsx)("button",{className:"btn btn-dark",children:"details"})})}),(0,d.jsxs)("td",{children:["$",u(t.order)]})]},null===t||void 0===t?void 0:t._id)}))})]}),(0,d.jsxs)("div",{className:"dash-buttons d-flex justify-content-center align-items-center mb-4",children:[(0,d.jsx)("button",{type:"button",disabled:1===n,className:"btn btn-danger me-2",onClick:()=>i(n-1),children:"Prievius"}),(0,d.jsx)("button",{type:"button",disabled:1===n,className:"btn btn-primary",onClick:()=>i(n+1),children:"Next"})]})]})})}},5066:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(5294),c=n(2791);const a=(t,e,n,a,r,d,i,l)=>{const[o,u]=(0,c.useState)([]),[h,m]=(0,c.useState)(!1),[x,j]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{(async()=>{m(!0);try{const c=await s.Z.request({url:"https://e-commerce-hh3m.onrender.com/api/".concat(t),method:e,headers:{Authorization:a&&"bearer ".concat(a)},params:{category:i,kind:l,priceFilter:r,order:d},body:n});u(c.data),m(!1)}catch(c){j(!0)}})()}),[t,r,d,i,l]),{data:o,isLoading:h,error:x}}}}]);
//# sourceMappingURL=937.f842c6db.chunk.js.map