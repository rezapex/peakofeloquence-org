import{_ as w,a as U}from"./BjGxhHZk.js";import x from"./Dk0IUfUE.js";import{_ as S,a as B}from"./3XWI70Vj.js";import{d as P,aA as R,aB as _,aC as A,aD as D,c as E,u as t,R as i,Z as p,af as H,$ as c,ad as r,W as l,S as M,aE as m,aF as T,ax as b,aG as f,aH as N}from"./BFOempIy.js";import"./BG8Ts2Xz.js";const O={key:1},z=P({__name:"[...slug]",async setup(V){let a,o;const s=R(),{data:e}=([a,o]=_(()=>m(s.path,()=>f(s.path).findOne(),"$UMOUItaw9R")),a=await a,o(),a);if(!e.value)throw A({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=_(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(N(s.path)),{default:()=>[]})),a=await a,o(),a);D({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=E(()=>T(e.value));return(q,F)=>{const g=w,k=x,y=S,C=U,v=B,$=b;return t(e)?(i(),p($,{key:0},H({default:c(()=>[r(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),r(C,{prose:""},{default:c(()=>{var n;return[t(e).body?(i(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(i(),M("hr",O)):l("",!0),r(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,d;return[r(v,{links:(d=(n=t(e).body)==null?void 0:n.toc)==null?void 0:d.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{z as default};
