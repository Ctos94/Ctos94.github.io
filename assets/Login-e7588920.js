import{_ as c,A as w,r as s,o as _,e as h,w as a,b as t,f as y,g}from"./index-d815b49d.js";import{S as d}from"./sm-e59efa34.js";const b={data(){return{showPassword:!1,loading:!1,formData:{username:"ctos",password:"ctos"}}},methods:{async submit(){const{valid:r}=await this.$refs.form.validate();r&&(this.loading=!0,this.$request.post({url:w.user.login,data:{username:d(this.formData.username),password:d(this.formData.password)}}).then(e=>{sessionStorage.setItem("AccessToken",e),this.$router.push("/")}).finally(()=>{this.loading=!1}))}}};function x(r,e,k,D,o,l){const i=s("v-text-field"),u=s("v-btn"),m=s("v-form"),f=s("v-sheet"),p=s("v-main"),v=s("v-layout");return _(),h(v,null,{default:a(()=>[t(p,{class:"d-flex align-center justify-center",style:{height:"calc(100vh - 30px)"}},{default:a(()=>[t(f,{width:"300"},{default:a(()=>[t(m,{ref:"form",onSubmit:e[4]||(e[4]=y(()=>{},["prevent"]))},{default:a(()=>[t(i,{readonly:"",rules:[r.$validator.required],variant:"underlined",modelValue:o.formData.username,"onUpdate:modelValue":e[0]||(e[0]=n=>o.formData.username=n),label:"用户名"},null,8,["rules","modelValue"]),t(i,{readonly:"",modelValue:o.formData.password,"onUpdate:modelValue":e[1]||(e[1]=n=>o.formData.password=n),"append-icon":o.showPassword?"mdi-eye":"mdi-eye-off",rules:[r.$validator.required],type:o.showPassword?"text":"password",variant:"underlined",label:"密码",onKeyup:e[2]||(e[2]=g(n=>l.submit(),["enter"])),"onClick:append":e[3]||(e[3]=n=>o.showPassword=!o.showPassword)},null,8,["modelValue","append-icon","rules","type"]),t(u,{color:"blue-lighten-1",disabled:o.loading,loading:o.loading,block:"",onClick:l.submit,text:"登录"},null,8,["disabled","loading","onClick"])]),_:1},512)]),_:1})]),_:1})]),_:1})}const P=c(b,[["render",x]]);export{P as default};
