import{d as S,an as w,c as s,a7 as C,a8 as p,a$ as l,R as n,Z as c,$ as m,u as e,W as i,U as u,X as f,V as U,S as $,a1 as A,aS as I,K as B}from"./BFOempIy.js";import{_ as D}from"./BIW_z9m5.js";import{r as L}from"./C6IkD1Fs.js";import"./Dnd51l0P.js";const E=f("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),R=S({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const y=w(),x=s(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:y.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=o,{ui:r,attrs:h}=C("content.card",p(t,"ui"),x,p(t,"class"),!0),k=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["500"])||l[t.color]||t.color}),b=s(()=>{var a;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((a=l[t.color])==null?void 0:a["400"])||l[t.color]||t.color}),d=s(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(a,N)=>{const v=I,g=B,_=D;return n(),c(_,A({class:[e(r).wrapper,o.to&&e(r).to]},e(h),{ui:e(r),style:{"--color-light":e(k),"--color-dark":e(b)}}),{default:m(()=>[o.to?(n(),c(v,{key:0,to:o.to,target:e(d),class:"focus:outline-none",tabindex:"-1"},{default:m(()=>[E]),_:1},8,["to","target"])):i("",!0),o.icon?(n(),c(g,{key:1,name:o.icon,class:u(e(r).icon.base)},null,8,["name","class"])):i("",!0),o.to&&e(d)==="_blank"?(n(),c(g,{key:2,name:e(r).externalIcon.name,class:u(e(r).externalIcon.base)},null,8,["name","class"])):i("",!0),f("p",{class:u(e(r).title)},U(o.title),3),a.$slots.default?(n(),$("p",{key:3,class:u(e(r).description)},[L(a.$slots,"default",{unwrap:"p"})],2)):i("",!0)]),_:3},16,["class","ui","style"])}}});export{R as default};
