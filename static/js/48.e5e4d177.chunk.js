"use strict";(self.webpackChunke_commerce4_frontend=self.webpackChunke_commerce4_frontend||[]).push([[48,550],{5550:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var a=t(2791),l=t(7689),r=t(5066),c=t(9085),i=t(3258),n=t(8919),d=t(184);const o=e=>{var s,t,a;let{subCategory:l,category:o,searchKey:m,priceFilter:u,priceOrder:h}=e;console.log(u,"priceFilter");const{data:x,isLoading:p,err:j}=(0,r.Z)(m?"products/search/".concat(m):"products","GET",null,null,u,h,l||null,o||null),g=null===x||void 0===x||null===(s=x.data)||void 0===s?void 0:s.products.length;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"col-9 mt-4",children:[o&&(0,d.jsx)("h2",{className:"p-4 text-center",children:o}),(0,d.jsxs)("div",{className:"trending-clothes-content  row  d-flex justify-content-around ",children:[j&&"somthing went wrong",p?(0,d.jsx)(n.Z,{}):null===x||void 0===x||null===(t=x.data)||void 0===t||null===(a=t.products)||void 0===a?void 0:a.map((e=>(0,d.jsx)(i.Z,{onClick:()=>c.Am.success("adding Item Successfully"),class:"col-6 col-md-4 col-lg-3 col-xl-2 pt-2 ",item:e},e._id))),0===g&&(0,d.jsx)("p",{className:"message length",children:"There is no items with these filterations"})]})]}),(0,d.jsx)(c.Ix,{position:"top-left",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})},m=e=>{var s;const[t,c]=(0,a.useState)(""),[i,n]=(0,a.useState)(null),[m,u]=(0,a.useState)(null),h=(0,l.UO)(),{data:x,isLoading:p,err:j}=(0,r.Z)("categories","GET"),g=e.Key,v=e=>{u(e.target.value)};return(0,d.jsxs)("div",{className:"Products row p-0 m-0 pb-5  ",children:[(0,d.jsxs)("div",{className:"ProductsSettings col-3   text-start",children:[(0,d.jsxs)("div",{className:"filterItem",children:[(0,d.jsx)("h4",{className:"pb-2",children:"Products Category"}),j&&"somthing went wrong",p?"Loading":null===x||void 0===x||null===(s=x.data)||void 0===s?void 0:s.categories.map((e=>(0,d.jsxs)("div",{className:"mb-2 sub-cat",children:[(0,d.jsx)("input",{name:"cat",id:e._id,type:"radio",value:e.name,onClick:()=>c(e.name),className:"me-2"}),(0,d.jsx)("label",{htmlFor:e._id,children:e.name})]},e._id)))]}),(0,d.jsxs)("div",{className:"filterItem",children:[(0,d.jsx)("h4",{className:"pt-5 pb-2",children:"Filter by  price"}),(0,d.jsx)("span",{children:"0"}),(0,d.jsx)("input",{type:"range",min:"0",max:"1000",step:"10",onChange:e=>{n(e.target.value)}}),(0,d.jsx)("span",{children:i})]}),(0,d.jsxs)("div",{className:"filterItem pt-4",children:[(0,d.jsx)("h4",{className:"pb-2",children:"Sort by"}),(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)("input",{className:"me-2",type:"radio",name:"ass",id:"asc",value:"asc",onClick:v}),(0,d.jsx)("label",{className:"w-auto",htmlFor:"asc",children:"Price (Lowest first)"})]}),(0,d.jsxs)("div",{className:"mt-2 d-flex",children:[(0,d.jsx)("input",{className:"me-2",type:"radio",name:"ass",id:"desc",value:"desc",onClick:v}),(0,d.jsx)("label",{className:"w-auto",htmlFor:"desc",children:"Price (Highest first)"})]})]})]}),(0,d.jsx)(o,{searchKey:g||"",subCategory:t,category:h.category,priceFilter:i,priceOrder:m})]})}},3258:(e,s,t)=>{t.d(s,{Z:()=>n});t(2791);var a=t(8820),l=t(1087),r=t(4420),c=t(8067),i=t(184);const n=e=>{var s,t;const n=(0,r.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"card ".concat(e.class," d-flex justify-content-start align-items-center position-relative overflow-hidden"),children:[(0,i.jsx)("img",{loading:"lazy",src:null===e||void 0===e||null===(s=e.item)||void 0===s||null===(t=s.images[0])||void 0===t?void 0:t.url,alt:"card_image"}),(0,i.jsx)("p",{className:"pb-0 mb-1 pt-2 fw-bold text-danger",children:e.item.name}),(0,i.jsxs)("div",{className:"icons  d-flex flex-column justify-content-around align-items-center position-absolute ",children:[(0,i.jsx)(l.rU,{className:" rounded-circle mb-3  text-white ",onClick:()=>{n((0,c.mm)({...e.item,amount:1,quantaty:1}))},children:(0,i.jsx)(a.nxQ,{className:"fs-3   ",onClick:e.onClick})}),(0,i.jsx)(l.rU,{className:" rounded-circle  text-white ",to:"/productDetails/".concat(e.item._id),children:(0,i.jsx)(a.zPD,{className:"fs-3     "})})]}),(0,i.jsxs)("span",{children:[e.item.price,"$"]})]})})}},5066:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(5294),l=t(2791);const r=(e,s,t,r,c,i,n,d)=>{const[o,m]=(0,l.useState)([]),[u,h]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{(async()=>{h(!0);try{const l=await a.Z.request({url:"https://e-commerce-hh3m.onrender.com/api/".concat(e),method:s,headers:{Authorization:r&&"bearer ".concat(r)},params:{category:n,kind:d,priceFilter:c,order:i},body:t});m(l.data),h(!1)}catch(l){p(!0)}})()}),[e,c,i,n,d]),{data:o,isLoading:u,error:x}}},48:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});t(2791);var a=t(5550),l=t(7689),r=t(1087),c=t(184);const i=()=>{const e=(0,l.UO)().search;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"catNav",children:(0,c.jsxs)("ul",{className:"storeCategories",children:[(0,c.jsx)(r.rU,{to:"/products/Men",children:(0,c.jsx)("li",{children:"Men"})}),(0,c.jsx)(r.rU,{to:"/products/Women",children:(0,c.jsx)("li",{children:"Women"})}),(0,c.jsx)(r.rU,{to:"/products/Kids",children:(0,c.jsx)("li",{children:"Kids"})})]})}),(0,c.jsx)(a.default,{Key:e})]})}}}]);
//# sourceMappingURL=48.e5e4d177.chunk.js.map