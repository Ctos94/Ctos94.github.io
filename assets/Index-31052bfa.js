import{_ as r}from"./Uploader-a1f3e008.js";import{_ as a}from"./Sider-97e6ad7f.js";import{_ as d,A as v,r as t,o as s,c as f,b as e,w as o,F as h,e as b,l as x}from"./index-d815b49d.js";const g={components:{Sider:a,Uploader:r},data(){return{menus:[{title:"看板",path:"/bill/dashboard"},{title:"列表",path:"/bill/list"},{title:"分析",path:"/bill/statistics"}],importUrl:v.bill.import,isRouterAlive:!0}},beforeMount(){this.$store.commit("update_header_active","/bill/dashboard")},methods:{importSuccess(){this.$refs.uploader.clearFiles(),this.isRouterAlive=!1,this.$nextTick(()=>{this.isRouterAlive=!0})}}};function w(A,S,k,R,n,l){const i=a,c=r,_=t("v-navigation-drawer"),u=t("router-view"),p=t("v-container"),m=t("v-main");return s(),f(h,null,[e(_,null,{default:o(()=>[e(i,{class:"sider",menus:n.menus},null,8,["menus"]),e(c,{class:"uploader",ref:"uploader",upload_url:this.importUrl,btn_text:"导入账单",accept:".csv",onOnSuccess:l.importSuccess},null,8,["upload_url","onOnSuccess"])]),_:1}),e(m,null,{default:o(()=>[e(p,null,{default:o(()=>[n.isRouterAlive?(s(),b(u,{key:0})):x("",!0)]),_:1})]),_:1})],64)}const B=d(g,[["render",w],["__scopeId","data-v-1e647a75"]]);export{B as default};
