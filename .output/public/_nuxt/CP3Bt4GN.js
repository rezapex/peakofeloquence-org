import{_ as w,a as x}from"./BjGxhHZk.js";import S from"./Dk0IUfUE.js";import{_ as B,a as P}from"./3XWI70Vj.js";import{d as U,aA as R,aB as _,aC as A,aD as D,c as E,u as t,R as i,Z as p,af as H,$ as c,ad as r,W as l,S as T,aE as m,aF as b,ax as J,aG as f,aH as M}from"./BFOempIy.js";import"./BG8Ts2Xz.js";const N={key:1},j=U({__name:"[...slug]",async setup(V){let a,o;const s=R(),{data:e}=([a,o]=_(()=>m(s.path,()=>f(s.path).findOne(),"$8JKhlg7hJ9")),a=await a,o(),a);if(!e.value)throw A({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=_(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(M(s.path)),{default:()=>[]})),a=await a,o(),a);D({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=E(()=>b(e.value));return(q,F)=>{const g=w,k=S,y=B,C=x,v=P,$=J;return t(e)?(i(),p($,{key:0},H({default:c(()=>[r(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),r(C,{prose:""},{default:c(()=>{var n;return[t(e).body?(i(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(i(),T("hr",N)):l("",!0),r(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,d;return[r(v,{links:(d=(n=t(e).body)==null?void 0:n.toc)==null?void 0:d.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{j as default};
