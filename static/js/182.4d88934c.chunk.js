"use strict";(self.webpackChunke_commerce4_frontend=self.webpackChunke_commerce4_frontend||[]).push([[182],{8182:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(2791),n=s(5066),c=s(4420),r=s(184);const l=()=>{var e;const t=(0,c.v9)((e=>e.cart.token)),[s,l]=(0,a.useState)(1),{data:d,isLoading:o}=(0,n.Z)("users?page=".concat(s,"&limit=10"),"GET",null,t);return(0,r.jsxs)("div",{className:"dashboardUsers",children:[(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"Client Name"}),(0,r.jsx)("th",{scope:"col",children:"Email"}),(0,r.jsx)("th",{scope:"col",children:"Avatar"}),(0,r.jsx)("th",{scope:"col",children:"Role"}),(0,r.jsx)("th",{scope:"col",children:"options"})]})}),(0,r.jsx)("tbody",{children:o?"Loading":null===d||void 0===d||null===(e=d.data)||void 0===e?void 0:e.users.map((e=>(0,r.jsxs)("tr",{className:"dash-product",children:[(0,r.jsx)("td",{children:"".concat(null===e||void 0===e?void 0:e.firstName," ").concat(null===e||void 0===e?void 0:e.lastName)}),(0,r.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,r.jsx)("td",{children:(0,r.jsx)("img",{src:null===e||void 0===e?void 0:e.avatar,alt:""})}),(0,r.jsx)("td",{className:"".concat("ADMIN"===e.role?"text-danger":"text-primary"," bold"),children:null===e||void 0===e?void 0:e.role}),(0,r.jsxs)("td",{children:["USER"===e.role&&(0,r.jsx)("button",{className:"btn btn-danger me-3",children:"Delete"}),"USER"===e.role&&(0,r.jsx)("button",{className:"btn btn-primary me-3",children:"update Role"})]})]},null===e||void 0===e?void 0:e._id)))})]}),(0,r.jsxs)("div",{className:"dash-buttons d-flex justify-content-center align-items-center mb-4",children:[(0,r.jsx)("button",{type:"button",disabled:1===s,className:"btn btn-danger me-2",onClick:()=>l(s-1),children:"Prievius"}),(0,r.jsx)("button",{type:"button",disabled:2===s,className:"btn btn-primary",onClick:()=>l(s+1),children:"Next"})]})]})}},5066:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(5294),n=s(2791);const c=(e,t,s,c,r,l,d,o)=>{const[i,h]=(0,n.useState)([]),[u,m]=(0,n.useState)(!1),[b,x]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{(async()=>{m(!0);try{const n=await a.Z.request({url:"https://e-commerce-hh3m.onrender.com/api/".concat(e),method:t,headers:{Authorization:c&&"bearer ".concat(c)},params:{category:d,kind:o,priceFilter:r,order:l},body:s});h(n.data),m(!1)}catch(n){x(!0)}})()}),[e,r,l,d,o]),{data:i,isLoading:u,error:b}}}}]);
//# sourceMappingURL=182.4d88934c.chunk.js.map