import{_ as C,u as L,r as g,o as j,n as R,a as w,c as y,d as s,g as o,h as r,R as i,j as k,k as U,l as H,F as B,b as e,p as I,e as E}from"./index-BsYwPD8T.js";const F=""+new URL("coffee-yHFPFEUa.jpg",import.meta.url).href,S=""+new URL("牛肉麵-8mWWhfn0.jpg",import.meta.url).href,W=""+new URL("日式-DwUTQfjq.jpg",import.meta.url).href,D=""+new URL("客家小炒-DCl0HpTz.jpg",import.meta.url).href,V=""+new URL("臭豆腐-B-fFJtFI.jpg",import.meta.url).href,N=""+new URL("鐵板燒-BQUOg8Is.jpg",import.meta.url).href,Q=""+new URL("早餐-CQQU8xIK.jpg",import.meta.url).href,P=""+new URL("拉麵-DyEJq8K5.jpg",import.meta.url).href,T=""+new URL("台菜-DypS0Ah1.jpg",import.meta.url).href,q=""+new URL("火鍋-Drzu6Qij.jpg",import.meta.url).href,z=""+new URL("酒吧-BX4Tj41P.jpg",import.meta.url).href,c=u=>(I("data-v-85d070c9"),u=u(),E(),u),A=c(()=>e("img",{src:F},null,-1)),J=[A],K=c(()=>e("div",{"data-type":"牛肉麵",class:"wrapper"},[e("img",{src:S})],-1)),M=c(()=>e("div",{"data-type":"日式",class:"wrapper"},[e("img",{src:W})],-1)),O=c(()=>e("div",{"data-type":"客家",class:"wrapper"},[e("img",{src:D})],-1)),b=c(()=>e("div",{"data-type":"臭豆腐",class:"wrapper"},[e("img",{src:V})],-1)),X=c(()=>e("div",{"data-type":"鐵板燒",class:"wrapper"},[e("img",{src:N})],-1)),G=c(()=>e("div",{"data-type":"早餐",class:"wrapper"},[e("img",{src:Q})],-1)),Y=c(()=>e("div",{"data-type":"拉麵",class:"wrapper"},[e("img",{src:P})],-1)),Z=c(()=>e("div",{"data-type":"台菜",class:"wrapper"},[e("img",{src:T})],-1)),$=c(()=>e("div",{"data-type":"火鍋",class:"wrapper"},[e("img",{src:q})],-1)),ee=c(()=>e("div",{"data-type":"酒吧",class:"wrapper"},[e("img",{src:z})],-1)),te={__name:"HomeView",setup(u){let f=L();const h=g(),n=g([]),m=g();j(()=>{R(()=>{n.value=document.getElementsByClassName("wrapper"),x().then(()=>{v()})}),f.isLogin=!0});function x(){const p=n.value,l=[];for(let t=0;t<p.length;t++){const d=p[t].querySelector("img");d.complete||l.push(new Promise(_=>{d.onload=()=>_()}))}return Promise.all(l)}window.addEventListener("resize",v);function v(){m.value=document.getElementsByClassName("wrapper")[0];let p=parseInt(h.value.offsetWidth/m.value.offsetWidth);const l=[];for(let t=0;t<n.value.length;t++)if(t<p)n.value[t].style.top=0,n.value[t].style.left=(m.value.offsetWidth+(h.value.offsetWidth-m.value.offsetWidth*p)/4)*t+"px",l.push(n.value[t].offsetHeight);else{let d=Math.min(...l),_=l.indexOf(d);n.value[t].style.top=d+8+"px",n.value[t].style.left=n.value[_].offsetLeft+"px",l[_]=l[_]+n.value[t].offsetHeight}}function a(){f.showHome=!1}return(p,l)=>(w(),y(B,null,[s(f).showHome?(w(),y("div",{key:0,class:"imgContainer",ref_key:"imgContainer",ref:h},[o(s(i),{to:"/search?text=咖啡",onClick:a},{default:r(()=>[e("div",{ref_key:"wrapper",ref:m,"data-type":"咖啡",class:"wrapper"},J,512)]),_:1}),o(s(i),{to:"/search?text=牛肉麵",onClick:a},{default:r(()=>[K]),_:1}),o(s(i),{to:"/search?text=日式",onClick:a},{default:r(()=>[M]),_:1}),o(s(i),{to:"/search?text=客家",onClick:a},{default:r(()=>[O]),_:1}),o(s(i),{to:"/search?text=臭豆腐",onClick:a},{default:r(()=>[b]),_:1}),o(s(i),{to:"/search?text=鐵板燒",onClick:a},{default:r(()=>[X]),_:1}),o(s(i),{to:"/search?text=早餐",onClick:a},{default:r(()=>[G]),_:1}),o(s(i),{to:"/search?text=拉麵",onClick:a},{default:r(()=>[Y]),_:1}),o(s(i),{to:"/search?text=台菜",onClick:a},{default:r(()=>[Z]),_:1}),o(s(i),{to:"/search?text=火鍋",onClick:a},{default:r(()=>[$]),_:1}),o(s(i),{to:"/search?text=酒吧",onClick:a},{default:r(()=>[ee]),_:1})],512)):k("",!0),s(f).showHome?k("",!0):(w(),U(s(H),{key:1}))],64))}},ae=C(te,[["__scopeId","data-v-85d070c9"]]);export{ae as default};