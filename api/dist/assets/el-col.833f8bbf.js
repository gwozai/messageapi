import{aB as h,aC as o,aE as u,d,a6 as $,M as c,P as g,ah as f,J as C,o as N,Z as _,w as j,aj as x,n as v,u as p,ak as E,aD as O,X as w,au as S}from"./index.2f7faff1.js";const k=Symbol("rowContextKey"),B=h({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>u({})},sm:{type:o([Number,Object]),default:()=>u({})},md:{type:o([Number,Object]),default:()=>u({})},lg:{type:o([Number,Object]),default:()=>u({})},xl:{type:o([Number,Object]),default:()=>u({})}}),K=d({name:"ElCol"}),P=d({...K,props:B,setup(m){const t=m,{gutter:n}=$(k,{gutter:c(()=>0)}),a=g("col"),b=c(()=>{const e={};return n.value&&(e.paddingLeft=e.paddingRight=`${n.value/2}px`),e}),i=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):C(t[s])&&Object.entries(t[s]).forEach(([l,r])=>{e.push(l!=="span"?a.b(`${s}-${l}-${r}`):a.b(`${s}-${r}`))})}),n.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,y)=>(N(),_(O(e.tag),{class:v(p(i)),style:E(p(b))},{default:j(()=>[x(e.$slots,"default")]),_:3},8,["class","style"]))}});var D=w(P,[["__file","col.vue"]]);const L=S(D);export{L as E,k as r};