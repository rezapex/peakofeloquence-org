import{d as r,c as n,b1 as c,bw as h,b5 as o,aJ as u,R as d,S as l,u as f}from"./BFOempIy.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return u(s,t.src)}return t.src});return(a,s)=>(d(),l("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
