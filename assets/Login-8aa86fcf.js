import{_ as e,A as a,r as s,o,e as t,w as l,b as n,f as r,g as d}from"./index-e40139dd.js";import{E as i}from"./index.esm-61a64686.js";function u(e){return i.encrypt(e,"044DBF0FBE2CFED973EF98F17733F682F9A37D52D2B3C26CA5101982539AF909903D7AADEBB77FFBF1FE646524081996526B21F1F8D9A5729131F38F1BC8F7D202",{inputEncoding:"utf8",outputEncoding:"base64"})}const m=e({data:()=>({showPassword:!1,loading:!1,formData:{username:"admin",password:"admin"}}),methods:{async submit(){const{valid:e}=await this.$refs.form.validate();e&&(this.loading=!0,this.$request.post({url:a.user.login,data:{username:u(this.formData.username),password:u(this.formData.password)}}).then((e=>{sessionStorage.setItem("AccessToken",e),this.$router.push("/")})).finally((()=>{this.loading=!1})))}}},[["render",function(e,a,i,u,m,p){const f=s("v-text-field"),c=s("v-btn"),h=s("v-form"),w=s("v-sheet"),F=s("v-main"),g=s("v-layout");return o(),t(g,null,{default:l((()=>[n(F,{class:"d-flex align-center justify-center",style:{height:"calc(100vh - 30px)"}},{default:l((()=>[n(w,{width:"300"},{default:l((()=>[n(h,{ref:"form",onSubmit:a[4]||(a[4]=r((()=>{}),["prevent"]))},{default:l((()=>[n(f,{placeholder:"admin",rules:[e.$validator.required],variant:"underlined",modelValue:m.formData.username,"onUpdate:modelValue":a[0]||(a[0]=e=>m.formData.username=e),label:"用户名"},null,8,["rules","modelValue"]),n(f,{placeholder:"admin",modelValue:m.formData.password,"onUpdate:modelValue":a[1]||(a[1]=e=>m.formData.password=e),"append-icon":m.showPassword?"mdi-eye":"mdi-eye-off",rules:[e.$validator.required],type:m.showPassword?"text":"password",variant:"underlined",label:"密码",onKeyup:a[2]||(a[2]=d((e=>p.submit()),["enter"])),"onClick:append":a[3]||(a[3]=e=>m.showPassword=!m.showPassword)},null,8,["modelValue","append-icon","rules","type"]),n(c,{color:"blue-lighten-1",disabled:m.loading,loading:m.loading,block:"",onClick:p.submit,text:"登录"},null,8,["disabled","loading","onClick"])])),_:1},512)])),_:1})])),_:1})])),_:1})}]]);export{m as default};
