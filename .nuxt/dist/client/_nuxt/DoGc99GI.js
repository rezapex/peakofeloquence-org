import{_ as l}from"./BIW_z9m5.js";import{d as i,aD as r,R as m,S as c,ad as a,$ as d,X as e,b7 as u,a3 as s}from"./BFOempIy.js";const _={class:"flex flex-col items-center justify-center p-4"},p=e("p",null,[e("label",null,[s("Email: "),e("input",{type:"email",name:"email"})])],-1),f=e("p",null,[e("label",null,[s("Password: "),e("input",{type:"password",name:"password"})])],-1),b=e("p",null,[e("button",{type:"submit"},"Log In")],-1),h=[p,f,b],k=i({__name:"login",setup(w){r({title:"Login"});function n(t){t.preventDefault(),console.log("Netlify form submission handled")}return(t,g)=>{const o=l;return m(),c("div",_,[a(o,{class:"max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur mb-8"}),a(o,{class:"max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"},{default:d(()=>[e("form",{name:"login-form",method:"POST","data-netlify":"true",onSubmit:u(n,["prevent"])},h,32)]),_:1})])}}});export{k as default};
