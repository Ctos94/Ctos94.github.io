import{_ as n,r as c,x as u,o as d,e as p,w as f,B as m,Q as _,y as h,b as g}from"./index-3676d8ee.js";const y={props:{limit:{type:Number},multiple:{type:Boolean,default:!1},param_name:{type:String,default:"file"},btn_text:{type:String,default:"点击上传"},upload_url:{type:String},show_file_list:{type:Boolean,default:!1},list_type:{type:String,default:"text"},accept:{type:String},data:{type:Object,default:function(){return{}}}},data(){return{fullscreenLoading:!1}},computed:{headers(){let e={},t=sessionStorage.getItem("AccessToken");return t&&(e.Authorization=`Bearer ${t}`),e}},methods:{success(e,t,s){e.success==!1?this.$message.error(e.msg):this.$emit("on-success",e.data,t,s),this.fullscreenLoading=!1},error(e){if(JSON.parse(JSON.stringify(e)).status===403){this.$router.push("/login");return}this.fullscreenLoading=!1},exceed(){this.$message.error("最多只能上传"+this.limit+"个文件")},clearFiles(){this.$refs.uploader.clearFiles()},remove(){this.$emit("on-success")},progress(e,t,s){this.$emit("on-progress",e,t,s)}}};function x(e,t,s,b,l,r){const a=c("v-btn"),o=_,i=h;return u((d(),p(o,{disabled:"",ref:"uploader",data:s.data,name:this.param_name,limit:this.limit,action:this.upload_url,multiple:s.multiple,headers:r.headers,"show-file-list":this.show_file_list,"list-type":this.list_type,"on-success":r.success,"on-error":r.error,"on-exceed":r.exceed,"on-remove":r.remove,"on-progress":r.progress,accept:this.accept,"before-upload":()=>{this.fullscreenLoading=!0}},{default:f(()=>[m(e.$slots,"default",{},()=>[g(a,{disabled:"",color:"blue-lighten-1",text:s.btn_text},null,8,["text"])])]),_:3},8,["data","name","limit","action","multiple","headers","show-file-list","list-type","on-success","on-error","on-exceed","on-remove","on-progress","accept","before-upload"])),[[i,l.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}const S=n(y,[["render",x]]);export{S as _};
