import{r as i,u as o,j as a,S as d,a as s,H as m,F as g,d as h,A as u,h as p,G as j,f as b,t as f}from"./index-fd6f6648.js";const N="/my-portfolio/images/fallback.png",S=()=>{const[n,l]=i.useState(""),{data:c,isLoading:r}=o({method:"GET",url:f},function(e){var t;return(t=e.data)!=null&&t.subtitle&&l(e.data.subtitle),e.data.projects});return a(d,{className:"ftco-project",id:"projects-section",noPb:!1,children:s("div",{className:"container",children:[a("div",{className:"row justify-content-center pb-5",children:a(m,{className:"col-md-12",title:"Projects",subtitle:n,bgTitle:"Projects"})}),r&&!c?a(g,{children:a(h,{})}):a("div",{className:"row",children:c.map((e,t)=>a("div",{className:`col-md-${t%2==0?4:8}`,children:a(u,{className:"project img d-flex justify-content-center align-items-center",style:{backgroundImage:`url(${e.images.length?p(j,e.images[0].name):N})`,backgroundPosition:`${!e.images.length&&"center"}`},children:s(b,{target:"_blank",className:"w-100",to:e.src,children:[a("div",{className:"overlay"}),s("div",{className:"text text-center p-4",children:[a("h3",{children:e.name}),a("span",{children:e.type})]})]})})},e._id))})]})})};export{S as default};
