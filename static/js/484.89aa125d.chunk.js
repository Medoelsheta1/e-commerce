"use strict";(self.webpackChunke_commerce4_frontend=self.webpackChunke_commerce4_frontend||[]).push([[484],{5484:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var c=t(2791),a=t(5066),d=t(8820),o=t(5294),n=t(9085),r=t(1087),i=t(7689),l=t(4420),h=t(184);const u=()=>{var e;const[s,t]=(0,c.useState)(1);let{data:u,isLoading:m}=(0,a.Z)("products?page=".concat(s,"&limit=10"),"GET");const p=(0,i.s0)(),x=(0,l.v9)((e=>e.cart.token));return(0,h.jsxs)("div",{className:"dash-products",children:[(0,h.jsxs)("table",{className:"table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"Name"}),(0,h.jsx)("th",{scope:"col",children:"Image"}),(0,h.jsx)("th",{scope:"col",children:"Price"}),(0,h.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,h.jsx)("tbody",{children:m?"Loading":null===u||void 0===u||null===(e=u.data)||void 0===e?void 0:e.products.map((e=>{var s;return(0,h.jsxs)("tr",{className:"dash-product",children:[(0,h.jsx)("td",{children:null===e||void 0===e?void 0:e.name}),(0,h.jsx)("td",{children:(0,h.jsx)("img",{src:null===e||void 0===e||null===(s=e.images[0])||void 0===s?void 0:s.url,alt:"as"})}),(0,h.jsxs)("td",{children:["$",null===e||void 0===e?void 0:e.price]}),(0,h.jsxs)("td",{children:[(0,h.jsx)(r.rU,{to:"".concat(null===e||void 0===e?void 0:e._id),children:(0,h.jsx)(d.dEB,{className:"me-1 text-primary h5"})})," ",(0,h.jsx)(d.YK6,{onClick:()=>{o.Z.delete("https://e-commerce-hh3m.onrender.com/api/products/".concat(null===e||void 0===e?void 0:e._id),{headers:{Authorization:"bearer ".concat(x)}}),n.Am.success("deleted Item Successfully"),p("/admin/home")},className:"h5 text-danger"})]})]},null===e||void 0===e?void 0:e._id)}))})]}),(0,h.jsxs)("div",{className:"dash-buttons d-flex justify-content-center align-items-center mb-4",children:[(0,h.jsx)("button",{type:"button",disabled:1===s,className:"btn btn-danger me-2",onClick:()=>t(s-1),children:"Prievius"}),(0,h.jsx)("button",{type:"button",disabled:5===s,className:"btn btn-primary",onClick:()=>t(s+1),children:"Next"})]}),(0,h.jsx)("div",{className:"dash-customization"}),(0,h.jsx)(n.Ix,{position:"top-left",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})}},5066:(e,s,t)=>{t.d(s,{Z:()=>d});var c=t(5294),a=t(2791);const d=(e,s,t,d,o,n,r,i)=>{const[l,h]=(0,a.useState)([]),[u,m]=(0,a.useState)(!1),[p,x]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{(async()=>{m(!0);try{const a=await c.Z.request({url:"https://e-commerce-hh3m.onrender.com/api/".concat(e),method:s,headers:{Authorization:d&&"bearer ".concat(d)},params:{category:r,kind:i,priceFilter:o,order:n},body:t});h(a.data),m(!1)}catch(a){x(!0)}})()}),[e,o,n,r,i]),{data:l,isLoading:u,error:p}}}}]);
//# sourceMappingURL=484.89aa125d.chunk.js.map