import{P as c}from"./PointCloudWindow.84f0dccf.js";import{f as _,r as o,o as n,a as s,b as a,w as p,F as m,g as d}from"./index.8d639f99.js";const v={style:{"text-align":"center"}},x={__name:"Tab2_2_2",setup(b){const l=_("leftPoint"),r=[{value:"leftPoint",label:"\u5DE6\u4FA7\u70B9\u4E91"},{value:"basicPoint",label:"\u4E0A\u65B9\u70B9\u4E91"},{value:"rightPoint",label:"\u53F3\u4FA7\u70B9\u4E91"}];return(f,t)=>{const u=o("el-option"),i=o("el-select");return n(),s("div",v,[a(c,{name:l.value},null,8,["name"]),a(i,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),placeholder:"\u8BF7\u9009\u62E9",style:{margin:"10px"}},{default:p(()=>[(n(),s(m,null,d(r,e=>a(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])}}};export{x as default};
