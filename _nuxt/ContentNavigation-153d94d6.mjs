import{w as L,h,j as I,a as A,b as v,r as p,e as E,f as D,i as m,k as c,l as f,m as V,p as T,d as r,_ as n,t as R,q as y,s as b,v as S,x,y as j}from"./entry-5841f2c0.mjs";import"./Header-912db0a1.mjs";import"./DocumentDrivenEmpty-e308885a.mjs";import"./DocumentDrivenNotFound-a1c25445.mjs";import"./Markdown-236e1098.mjs";import"./ProseCode-af28455b.mjs";const k=e=>{let t=e;typeof(t==null?void 0:t.params)=="function"&&(t=t.params());const o=L(t?`/navigation/${h(t)}`:"/navigation");return $fetch(o,{method:"GET",responseType:"json",params:{_params:I(t||{}),previewToken:A("previewToken").value}})};var C=v({setup(e,{slots:t,emit:o}){const u=p(null),a=E();return D(_=>{if(!a.isHydrating)return o("error",_),u.value=_,!1}),()=>{var _,i;return u.value?(_=t.error)==null?void 0:_.call(t,{error:u}):(i=t.default)==null?void 0:i.call(t)}}}),$=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),N=v({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t}){const o=p(!1);return m(()=>{o.value=!0}),u=>{var l;if(o.value)return(l=t.default)==null?void 0:l.call(t);const a=t.fallback||t.placeholder;if(a)return a();const _=u.fallback||u.placeholder||"",i=u.fallbackTag||u.placeholderTag||"span";return c(i,null,_)}}});function w(e){return v({name:"ClientOnlyWrapper",inheritAttrs:!1,setup(t,{attrs:o,slots:u}){const a=p(!1);return m(()=>{a.value=!0}),()=>a.value?f(e,o,u):f("div",{class:o.class,style:o.style})}})}var z=Object.freeze(Object.defineProperty({__proto__:null,default:N,createClientOnly:w},Symbol.toStringTag,{value:"Module"})),M=v({name:"ServerPlaceholder",render(){return c("div")}}),B=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q=v({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e){const t=U({duration:e.duration,throttle:e.throttle}),o=E();return o.hook("page:start",t.start),o.hook("page:finish",t.finish),V(()=>t.clear),()=>f("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${t.progress.value}%`,height:`${e.height}px`,opacity:t.isLoading.value?1:0,background:e.color,backgroundSize:`${100/t.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function U(e){const t=p(0),o=p(!1),u=T(()=>1e4/e.duration);let a=null,_=null;function i(){d(),t.value=0,o.value=!0,e.throttle?_=setTimeout(s,e.throttle):s()}function l(){t.value=100,P()}function d(){clearInterval(a),clearTimeout(_),a=null,_=null}function O(g){t.value=Math.min(100,t.value+g)}function P(){d(),setTimeout(()=>{o.value=!1,setTimeout(()=>{t.value=0},400)},500)}function s(){a=setInterval(()=>{O(u.value)},100)}return{progress:t,isLoading:o,start:i,finish:l,clear:d}}var W=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));r(()=>n(()=>import("./Footer-623f836c.mjs"),["Footer-623f836c.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./Header-912db0a1.mjs"),["Header-912db0a1.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.W}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.X}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>Promise.resolve().then(function(){return G}),void 0).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.V}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.U}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.T}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./DocumentDrivenEmpty-e308885a.mjs"),["DocumentDrivenEmpty-e308885a.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./DocumentDrivenNotFound-a1c25445.mjs"),["DocumentDrivenNotFound-a1c25445.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./Markdown-236e1098.mjs"),["Markdown-236e1098.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseA-3391b66c.mjs"),["ProseA-3391b66c.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseBlockquote-30494d33.mjs"),["ProseBlockquote-30494d33.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseCode-af28455b.mjs"),["ProseCode-af28455b.mjs","ProseCode.c12da1e5.css","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseCodeInline-5ba77115.mjs"),["ProseCodeInline-5ba77115.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseEm-202cb737.mjs"),["ProseEm-202cb737.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH1-e52bd1f4.mjs"),["ProseH1-e52bd1f4.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH2-3b1299df.mjs"),["ProseH2-3b1299df.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH3-77c4dd5d.mjs"),["ProseH3-77c4dd5d.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH4-dfe1d8e5.mjs"),["ProseH4-dfe1d8e5.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH5-38b4757d.mjs"),["ProseH5-38b4757d.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseH6-516dad7d.mjs"),["ProseH6-516dad7d.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseHr-84fef488.mjs"),["ProseHr-84fef488.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseImg-bbed024e.mjs"),["ProseImg-bbed024e.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseLi-f485fa22.mjs"),["ProseLi-f485fa22.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseOl-71757eff.mjs"),["ProseOl-71757eff.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseP-02c4d2a4.mjs"),["ProseP-02c4d2a4.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseStrong-03d8bf56.mjs"),["ProseStrong-03d8bf56.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseTable-2a6e70fb.mjs"),["ProseTable-2a6e70fb.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseTbody-02a47c9d.mjs"),["ProseTbody-02a47c9d.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseTd-d595be80.mjs"),["ProseTd-d595be80.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseTh-e1236c82.mjs"),["ProseTh-e1236c82.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseThead-2a56a44c.mjs"),["ProseThead-2a56a44c.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseTr-6b1fff4d.mjs"),["ProseTr-6b1fff4d.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./ProseUl-d85c5fca.mjs"),["ProseUl-d85c5fca.mjs","entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>import("./welcome-09a78f9c.mjs"),["welcome-09a78f9c.mjs","entry-5841f2c0.mjs","entry.83e492e1.css","Header-912db0a1.mjs","DocumentDrivenEmpty-e308885a.mjs","DocumentDrivenNotFound-a1c25445.mjs","Markdown-236e1098.mjs","ProseCode-af28455b.mjs","ProseCode.c12da1e5.css"]).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.Y}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>Promise.resolve().then(function(){return $}),void 0).then(e=>e.default||e));r(()=>n(()=>Promise.resolve().then(function(){return z}),void 0).then(e=>e.default||e));r(()=>n(()=>Promise.resolve().then(function(){return B}),void 0).then(e=>e.default||e));r(()=>n(()=>import("./entry-5841f2c0.mjs").then(function(e){return e.S}),["entry-5841f2c0.mjs","entry.83e492e1.css"]).then(e=>e.default||e));r(()=>n(()=>Promise.resolve().then(function(){return W}),void 0).then(e=>e.default||e));const Y=v({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=R(e),o=T(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!o.value&&y("dd-navigation","$pVC8cDxdQ3").value){const{navigation:a}=b();return{navigation:a}}const{data:u}=await S(`content-navigation-${h(o.value)}`,()=>k(o.value),"$DUhYE0cTrs");return{navigation:u}},render(e){const t=x(),{navigation:o}=e,u=i=>f(j,{to:i._path},()=>i.title),a=(i,l)=>f("ul",l?{"data-level":l}:null,i.map(d=>d.children?f("li",null,[u(d),a(d.children,l+1)]):f("li",null,u(d)))),_=i=>a(i,0);return t!=null&&t.default?t.default({navigation:o,...this.$attrs}):_(o)}});var G=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as default};
