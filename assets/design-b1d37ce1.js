import{_ as e}from"./Uploader-81a6f654.js";import{_ as l,d as t,r as o,o as n,c as a,b as i,w as u,F as s,a as d}from"./index-e40139dd.js";const c=l({components:{Uploader:e,Header:t},data:()=>({input:""}),mounted(){},methods:{confirm(){this.$confirm({message:"确定要删除吗？",confirmText:"确定",cancelText:"取消",beforeClose:(e,l,t)=>{"confirm"===e?(console.log("confirm"),t()):t()}}).then((()=>{console.log("confirm")})).catch((()=>{console.log("cancel")}))}}},[["render",function(l,c,r,m,f,p){const x=t,b=o("v-layout"),_=o("v-container"),h=o("v-btn"),g=o("v-btn-link"),v=o("v-btn-text"),C=o("v-text-field"),k=e,w=o("v-select"),y=o("v-sheet");return n(),a(s,null,[i(_,null,{default:u((()=>[i(b,null,{default:u((()=>[i(x,{logo:"Ctos"})])),_:1})])),_:1}),i(_,{class:"mt-10"},{default:u((()=>[i(h,{color:"blue-lighten-1",text:"Primary"}),i(h,{color:"green-darken-1",text:"Success"}),i(g,{text:"Link Btn"}),i(v,{text:"Text Btn"})])),_:1}),i(_,null,{default:u((()=>[i(C,{"hide-details":"",label:"Input Label",modelValue:f.input,"onUpdate:modelValue":c[0]||(c[0]=e=>f.input=e)},null,8,["modelValue"])])),_:1}),i(_,null,{default:u((()=>[i(k,{upload_url:"http://test/upload",multiple:"",limit:1})])),_:1}),i(_,null,{default:u((()=>[i(w,{items:[1,2,3,4],label:"选择",width:"100px"}),i(w,{density:"compact",variant:"outlined",items:[1,2,3,4],label:"选择",width:"100px"})])),_:1}),i(_,null,{default:u((()=>[i(y,{id:"loading"},{default:u((()=>[d("1234")])),_:1})])),_:1}),i(_,null,{default:u((()=>[i(h,{text:"Confirm beforeClose",color:"blue-lighten-1",onClick:p.confirm},null,8,["onClick"])])),_:1})],64)}]]);export{c as default};
