import{_ as C,A as g,r as a,o as s,c as b,b as o,w as i,f as y,S as M,T as K,x as F,U as B,C as E,e as p,l as P,g as T,F as D,a as V,t as q,n as L,z as A,p as z,i as O,h as R,D as N}from"./index-3676d8ee.js";import{a as U}from"./common-1a584e15.js";const $={inject:["currentProjectId"],emits:["selected","create","setting"],props:{projects:{type:Array,default:function(){return[]}}},data(){return{visible:!1,formData:{},open:!0,lockDialog:!1}},methods:{handleSetting(e,t){this.$emit("setting",e.id,t)},handleCellClick(e,t){this.$emit("selected",e.id,t)},create(){this.formData.name&&(this.lockDialog=!0,this.$request.post({url:g.plan.project.create,data:this.formData,loading:{target:"#project_title"}}).then(e=>{this.$emit("create",e),this.visible=!1}).finally(()=>{this.lockDialog=!1}))}},watch:{visible(e){e||(this.formData={})},open(e){e&&this.$nextTick(()=>{const t=document.getElementById(`project-${this.currentProjectId}`);t&&t.scrollIntoView()})}}};function H(e,t,c,x,n,l){const d=a("v-btn"),m=a("v-list-item"),h=a("v-list"),_=a("v-badge"),v=a("v-sheet"),r=a("v-virtual-scroll"),k=a("v-text-field"),I=a("v-card-text"),w=a("v-card"),S=a("v-dialog");return s(),b(D,null,[o(h,{class:"pa-0"},{default:i(()=>[o(m,{ripple:!1,title:"项目",onClick:t[2]||(t[2]=u=>n.open=!n.open)},{append:i(()=>[o(d,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:t[0]||(t[0]=y(u=>n.visible=!n.visible,["stop"])),icon:"mdi-plus"}),o(d,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:t[1]||(t[1]=y(u=>n.open=!n.open,["stop"])),class:M({rotate:n.open,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])]),_:1})]),_:1}),o(r,{style:{overflowX:"hidden"},"max-height":280,items:c.projects},{default:i(({item:u,index:f})=>[o(K,{name:"slide-x-reverse-transition"},{default:i(()=>[o(v,{title:u.name},{default:i(()=>[F(o(m,{title:u.name,id:`project-${u.id}`,onMouseenter:j=>u.showActions=!0,onMouseleave:j=>u.showActions=!1,class:M({item:!0,selected:l.currentProjectId==u.id}),value:u,color:"primary",onClick:j=>l.handleCellClick(u,f)},E({append:i(()=>[u.showActions?(s(),p(d,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:y(j=>l.handleSetting(u,f),["stop"]),icon:"mdi-cog"},null,8,["onClick"])):P("",!0)]),_:2},[u.ingCount?{name:"prepend",fn:i(()=>[o(_,{class:"mr-1",content:u.ingCount,inline:""},null,8,["content"])]),key:"0"}:void 0]),1032,["title","id","onMouseenter","onMouseleave","class","value","onClick"]),[[B,n.open||l.currentProjectId==u.id]])]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["items"]),o(S,{persistent:n.lockDialog,class:"dialog",modelValue:n.visible,"onUpdate:modelValue":t[4]||(t[4]=u=>n.visible=u),width:"600px"},{default:i(()=>[o(w,{id:"project_title"},{default:i(()=>[o(I,{class:"pa-3"},{default:i(()=>[o(k,{"hide-details":"",modelValue:n.formData.name,"onUpdate:modelValue":t[3]||(t[3]=u=>n.formData.name=u),density:"compact",variant:"outlined",onKeydown:T(l.create,["enter"]),label:"项目名"},null,8,["modelValue","onKeydown"])]),_:1})]),_:1})]),_:1},8,["persistent","modelValue"])],64)}const X=C($,[["render",H],["__scopeId","data-v-13e4d8d1"]]);const Y={inject:["currentProjectId"],data(){return{name:"",focus:!1}},methods:{create(){this.$refs.input.error||this.$request.post({url:g.plan.plan.create,data:{name:this.name,projectId:this.currentProjectId},json:!0,loading:{target:"#newPlan"}}).then(e=>{this.$emit("create",e),this.name="",this.$refs.input.blur()})}}};function G(e,t,c,x,n,l){const d=a("v-icon"),m=a("v-text-field"),h=a("v-validation"),_=a("v-sheet");return s(),p(_,{id:"newPlan",class:"d-flex justify-center"},{default:i(()=>[o(h,{rules:[e.$validator.required],modelValue:n.name,"onUpdate:modelValue":t[2]||(t[2]=v=>n.name=v)},{default:i(({isValid:v})=>[o(m,{error:n.focus?!v.value:!1,"onUpdate:focused":t[0]||(t[0]=r=>n.focus=!n.focus),ref:"input","hide-details":"",modelValue:n.name,"onUpdate:modelValue":t[1]||(t[1]=r=>n.name=r),density:"compact",variant:"outlined",onKeydown:T(l.create,["enter"]),placeholder:"将任务添加到列表顶部"},E({_:2},[n.name?{name:"append-inner",fn:i(()=>[o(d,{onClick:y(l.create,["stop"]),icon:"mdi-plus"},null,8,["onClick"])]),key:"0"}:void 0]),1032,["error","modelValue","onKeydown"])]),_:1},8,["rules","modelValue"])]),_:1})}const J=C(Y,[["render",G],["__scopeId","data-v-ecbdfbce"]]);const Q={inject:["handleProjectIngCount"],props:{data:{type:Object},index:{type:Number}},data(){return{actions:!1,edit:!1,propsData:this.data}},computed:{deadline(){return this.data?U(new Date(this.data.deadline),"MM-dd"):""}},methods:{update(){!this.edit||this.$refs.name.error||this.$request.put({url:g.plan.plan.update,data:this.propsData,json:!0,loading:{target:`#plan-${this.data.id}`}}).then(()=>{this.$emit("update",this.propsData,this.index),this.edit=!1})},handleClick(e){switch(e){case"edit":this.edit=!0,this.actions=!1;break}},finish(){this.$request.post({url:g.plan.plan.finished,data:{id:this.data.id},loading:{target:`#plan-${this.data.id}`}}).then(()=>{this.$emit("update",{...this.data,finished:!0},this.index),this.handleProjectIngCount(-1)})},again(){this.$request.post({url:g.plan.plan.again,data:{id:this.data.id},loading:{target:`#plan-${this.data.id}`}}).then(()=>{this.$emit("update",{...this.data,finished:!1},this.index),this.handleProjectIngCount(1)})}},watch:{data(e){this.propsData=e}}};function W(e,t,c,x,n,l){const d=a("v-btn"),m=a("v-sheet"),h=a("v-list-item"),_=a("v-text-field"),v=a("v-validation");return c.data.finished?(s(),p(m,{key:1},{default:i(()=>[o(h,{ripple:!1,class:"plan-item py-0 my-2 rounded pointer"},{append:i(()=>[o(d,{title:"重新开始计划",class:"action-icon",onClick:y(l.again,["stop"]),color:"blue-grey-lighten-2",icon:"mdi-arrow-u-left-top",variant:"text"},null,8,["onClick"])]),default:i(()=>[V(q(c.data.name)+" ",1)]),_:1})]),_:1})):(s(),p(m,{key:0},{default:i(()=>[n.edit?(s(),p(h,{key:1,class:"pa-0 my-2","min-height":"40"},{default:i(()=>[o(v,{modelValue:n.propsData.name,"onUpdate:modelValue":t[6]||(t[6]=r=>n.propsData.name=r),rules:[e.$validator.required]},{default:i(({isValid:r})=>[o(_,{ref:"name",error:!r.value,modelValue:n.propsData.name,"onUpdate:modelValue":t[5]||(t[5]=k=>n.propsData.name=k),"hide-details":"",autofocus:"",onKeyup:T(l.update,["enter"]),onBlur:l.update,density:"compact",variant:"outlined"},null,8,["error","modelValue","onKeyup","onBlur"])]),_:1},8,["modelValue","rules"])]),_:1})):(s(),p(h,{key:0,onMouseenter:t[1]||(t[1]=r=>n.actions=!0),onMouseleave:t[2]||(t[2]=r=>n.actions=!1),onClick:t[3]||(t[3]=r=>l.handleClick("edit")),onContextmenu:t[4]||(t[4]=y(r=>{e.$emit("right-click",c.index,r)},["prevent"])),ripple:!1,class:M({"plan-item py-0 my-2 rounded pointer":!0,"warning-deadline":c.data.deadline&&new Date(c.data.deadline)<new Date})},{append:i(()=>[n.actions?(s(),p(d,{key:0,title:"完成计划",class:"action-icon",onClick:y(l.finish,["stop"]),color:"blue-grey-lighten-2",icon:"mdi-check",variant:"text"},null,8,["onClick"])):P("",!0),c.data.deadline?(s(),p(m,{key:1,class:"d-flex justify-center",onClick:t[0]||(t[0]=y(()=>{e.$emit("handle-deadline",c.index)},["stop"]))},{default:i(()=>[o(d,{class:"action-icon",color:"blue-grey-lighten-2",icon:"mdi-alarm",variant:"text"}),o(m,{class:"deadline-text",style:{position:"absolute","font-size":"10px",bottom:"2px"}},{default:i(()=>[V(q(l.deadline),1)]),_:1})]),_:1})):P("",!0)]),default:i(()=>[V(q(c.data.name)+" ",1)]),_:1},8,["class"]))]),_:1}))}const Z=C(Q,[["render",W],["__scopeId","data-v-6b284e74"]]);const ee={props:{data:{type:Object},index:{type:Number}},data(){return{deadline:this.data&&this.data.deadline?new Date(this.data.deadline):null}},computed:{min(){return U(new Date(new Date().getTime()+60*60*24*1e3),"yyyy-MM-dd")}},methods:{confirm(){this.deadline&&this.update({...this.data,deadline:U(this.deadline,"yyyy-MM-dd")})},clear(){this.update({...this.data,deadline:null})},update(e){this.$request.put({url:g.plan.plan.update,data:e,json:!0}).then(()=>{this.$emit("update",e,this.index),this.cancel()})},cancel(){this.$emit("cancel")}}};function te(e,t,c,x,n,l){const d=a("v-date-picker"),m=a("v-card-text"),h=a("v-icon"),_=a("v-btn"),v=a("v-card-actions"),r=a("v-card");return s(),p(r,{class:"date-picker"},{default:i(()=>[o(m,{class:"pa-0"},{default:i(()=>[o(d,{style:{width:"100%"},"show-adjacent-months":"",min:l.min,modelValue:n.deadline,"onUpdate:modelValue":t[0]||(t[0]=k=>n.deadline=k)},null,8,["min","modelValue"])]),_:1}),o(v,null,{default:i(()=>[o(_,{title:"取消",onClick:l.cancel},{default:i(()=>[o(h,{icon:"mdi-close"})]),_:1},8,["onClick"]),this.data&&this.data.deadline?(s(),p(_,{key:0,title:"取消提醒",color:"primary",onClick:l.clear},{default:i(()=>[o(h,{icon:"mdi-alarm-off"})]),_:1},8,["onClick"])):P("",!0),o(_,{title:"设置提醒",color:"primary",onClick:l.confirm},{default:i(()=>[o(h,{icon:"mdi-alarm"})]),_:1},8,["onClick"])]),_:1})]),_:1})}const ne=C(ee,[["render",te],["__scopeId","data-v-0dff5d8f"]]);const oe={components:{NewPlan:J,DatePicker:ne,Plan:Z},inject:["currentProjectId","handleProjectIngCount"],data(){return{plans:[],showContextMenu:!1,contextMenuTop:0,contextMenuLeft:0,showDatePicker:!1,settingPlanIndex:-1,openFinished:!1}},computed:{hasTodoPlan(){return this.plans.filter(e=>!e.finished).length>0},hasFinishedPlan(){return this.finishedPlanCount>0},finishedPlanCount(){return this.plans.filter(e=>e.finished).length}},mounted(){document.addEventListener("click",this.handleContextMenu),document.addEventListener("keydown",this.handleContextMenu),this.requestPlans()},unmounted(){document.removeEventListener("click",this.handleContextMenu),document.removeEventListener("keydown",this.handleContextMenu)},methods:{requestPlans(){this.currentProjectId&&this.$request.get({url:g.plan.plan.list,params:{projectId:this.currentProjectId},loading:{target:"#plans"}}).then(e=>{this.plans=e})},inTopThree(e){return this.plans.filter(t=>t.finished).map(t=>t.id).splice(0,3).indexOf(e)>=0},addPlan(e){this.plans.splice(0,0,e),this.handleProjectIngCount(1)},handlePlanRightClick(e,t){this.showContextMenu||(this.showContextMenu=!0,this.contextMenuTop=t.clientY,this.contextMenuLeft=t.clientX,this.settingPlanIndex=e)},handleContextMenu(e){(e.key&&e.key==="Escape"&&this.showContextMenu||!e.key&&this.showContextMenu)&&(this.showContextMenu=!1)},handleContextMenuClick(e){switch(e.id){case"deadline":this.showDatePicker=!0;break;case"delete":let t=this.plans[this.settingPlanIndex].id;this.$confirm({message:"是否要删除该计划？"}).then(()=>{this.$request.delete({url:g.plan.plan.delete,data:{id:t},loading:{target:`#plan-${t}`}}).then(()=>{this.plans.splice(this.settingPlanIndex,1),this.handleProjectIngCount(-1)})}).catch(()=>{});break}this.showContextMenu=!1},updatePlan(e,t){this.plans.splice(t,1,e)},handleDeadline(e){this.settingPlanIndex=e,this.showDatePicker=!0}}},ie=e=>(z("data-v-80116706"),e=e(),O(),e),ae=ie(()=>R("p",null,"目前没有计划任务",-1));function le(e,t,c,x,n,l){const d=a("v-sheet"),m=a("NewPlan"),h=a("Plan"),_=a("v-list"),v=a("v-btn"),r=a("v-list-item"),k=a("v-card"),I=a("v-expand-transition"),w=a("DatePicker"),S=a("v-dialog"),u=a("v-container");return s(),p(u,{id:"plans",style:{width:"70%"}},{default:i(()=>[l.currentProjectId?(s(),p(d,{key:1},{default:i(()=>[o(m,{onCreate:l.addPlan},null,8,["onCreate"]),o(d,{class:"d-flex justify-center text-h5 mt-10"},{default:i(()=>[V(" 进行中的计划 ")]),_:1}),l.hasTodoPlan?P("",!0):(s(),p(d,{key:0,class:"d-flex justify-center mt-2 mb-8"},{default:i(()=>[V(" 目前还没有进行中的计划 ")]),_:1})),o(_,null,{default:i(()=>[(s(!0),b(D,null,L(n.plans,(f,j)=>(s(),b(D,{key:j},[f.finished?P("",!0):(s(),p(d,{key:0,id:`plan-${f.id}`},{default:i(()=>[o(h,{data:f,index:j,onHandleDeadline:he=>l.handleDeadline(j),onRightClick:l.handlePlanRightClick,onUpdate:l.updatePlan},null,8,["data","index","onHandleDeadline","onRightClick","onUpdate"])]),_:2},1032,["id"]))],64))),128))]),_:1}),l.hasFinishedPlan?(s(),p(d,{key:1},{default:i(()=>[o(d,{class:"d-flex justify-center text-h5 mt-10"},{default:i(()=>[V(" 完成的计划 ")]),_:1}),o(_,null,{default:i(()=>[(s(!0),b(D,null,L(n.plans,(f,j)=>(s(),b(D,{key:j},[f.finished&&l.inTopThree(f.id)||f.finished&&n.openFinished?(s(),p(d,{key:0,id:`plan-${f.id}`},{default:i(()=>[o(h,{data:f,index:j,onUpdate:l.updatePlan},null,8,["data","index","onUpdate"])]),_:2},1032,["id"])):P("",!0)],64))),128)),l.finishedPlanCount>3?(s(),p(r,{key:0,style:{marginTop:"-10px"},class:"d-flex justify-center"},{default:i(()=>[o(v,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:t[0]||(t[0]=y(f=>n.openFinished=!n.openFinished,["stop"])),class:M({rotate:n.openFinished,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])]),_:1})):P("",!0)]),_:1})]),_:1})):P("",!0)]),_:1})):(s(),p(d,{key:0,class:"d-flex justify-center"},{default:i(()=>[ae]),_:1})),o(I,null,{default:i(()=>[F(o(k,{style:A({top:`${n.contextMenuTop}px`,left:`${n.contextMenuLeft}px`}),class:"contextmenu"},{default:i(()=>[o(_,{width:"150",class:"pa-0","onClick:select":l.handleContextMenuClick},{default:i(()=>[o(r,{elevation:"0",variant:"elevated",value:"deadline",ripple:!1,"prepend-icon":"mdi-alarm",title:"提醒"}),o(r,{elevation:"0",variant:"elevated",value:"delete",ripple:!1,"prepend-icon":"mdi-trash-can-outline",title:"删除"})]),_:1},8,["onClick:select"])]),_:1},8,["style"]),[[B,n.showContextMenu]])]),_:1}),o(S,{modelValue:n.showDatePicker,"onUpdate:modelValue":t[2]||(t[2]=f=>n.showDatePicker=f),width:"400"},{default:i(()=>[o(w,{data:n.plans[n.settingPlanIndex],index:n.settingPlanIndex,onCancel:t[1]||(t[1]=f=>n.showDatePicker=!1),onUpdate:l.updatePlan},null,8,["data","index","onUpdate"])]),_:1},8,["modelValue"])]),_:1})}const se=C(oe,[["render",le],["__scopeId","data-v-80116706"]]);const re={props:{ddd:{type:Object,default:{}}},inject:["currentProjectId","reload","currentProjectIndex","updateProject"],emits:["update"],data(){return{project:{},delLoading:!1}},mounted(){this.requestDetail()},methods:{requestDetail(){this.$request.get({url:g.plan.project.detail,params:{id:this.currentProjectId},loading:{target:"#setting"}}).then(e=>{this.project=this.ddd})},del(){this.$confirm({message:"删除后数据无法找回，确定要删除吗？",beforeClose:(e,t,c)=>{e==="confirm"?(t.confirmButtonLoading=!0,this.$request.delete({url:g.plan.project.delete,data:{id:this.currentProjectId}}).then(()=>{c()})):c()}}).then(()=>{this.reload()}).catch(()=>{})},save(e){e&&this.$request.put({url:g.plan.project.update,data:{id:this.currentProjectId,name:e},loading:{target:".update_btn"},json:!0}).then(()=>{this.project.name=e,this.updateProject(this.project,this.currentProjectIndex,["name"])})}}};function de(e,t,c,x,n,l){const d=a("v-btn"),m=a("v-text-field"),h=a("v-confirm-edit"),_=a("v-sheet"),v=a("v-container");return s(),p(v,null,{default:i(()=>[o(_,{id:"setting"},{default:i(()=>[o(_,{class:"confirm-edit"},{default:i(()=>[o(h,{modelValue:n.project.name,"onUpdate:modelValue":t[1]||(t[1]=r=>n.project.name=r),ref:"edit"},{default:i(({model:r,actions:k,isPristine:I})=>[o(m,{rules:[e.$validator.required],"hide-details":"",density:"compact",variant:"outlined",label:"项目名称",modelValue:r.value,"onUpdate:modelValue":w=>r.value=w},{append:i(()=>[o(d,{class:"update_btn",color:"blue-lighten-1",onClick:()=>{I||l.save(r.value)},text:"重命名"},null,8,["onClick"]),I?P("",!0):(s(),p(d,{key:0,class:"ml-2 update_btn",color:"grey-lighten-3",onClick:t[0]||(t[0]=w=>e.$refs.edit.cancel()),text:"取消"}))]),_:2},1032,["rules","modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue"])]),_:1}),o(d,{loading:n.delLoading,ripple:!1,"prepend-icon":"mdi-alert",class:"mt-4","max-width":"300",color:"red-lighten-2",text:"删除项目",variant:"outlined",onClick:l.del},null,8,["loading","onClick"])]),_:1})]),_:1})}const ce=C(re,[["render",de],["__scopeId","data-v-fb1e539c"]]),ue={components:{Projects:X,ProjectContent:se,ProjectSetting:ce},data(){return{projects:[],currentProjectIndex:-1,currentProjectId:void 0,showSetting:!1,ddd:{}}},provide(){return{currentProjectId:N(()=>this.currentProjectId),reload:this.reload,handleProjectIngCount:this.handleProjectIngCount,currentProjectIndex:N(()=>this.currentProjectIndex),updateProject:this.updateProject}},beforeMount(){this.$store.commit("update_header_active","/plan")},mounted(){this.requestProjects()},methods:{requestProjects(){this.$request.get({url:g.plan.project.list,loading:!0}).then(e=>{this.projects=e,this.projects.length>0?(this.currentProjectId=this.projects[0].id,this.currentProjectIndex=0):(this.currentProjectIndex=-1,this.currentProjectId=void 0)})},selectedProject(e,t){this.currentProjectId=e,this.currentProjectIndex=t,this.showSetting=!1},addProject(e){this.projects.splice(0,0,e),this.currentProjectId=e.id,this.currentProjectIndex=0},updateProject(e,t,c){c&&c.length>0?c.forEach(x=>{this.projects[t][x]=e[x]}):this.projects.splice(t,1,e)},settingProject(e,t){this.currentProjectId=e,this.currentProjectIndex=t,this.ddd=this.projects[t],this.$nextTick(()=>{this.showSetting=!0})},reload(){this.showSetting=!1,this.$nextTick(()=>{this.requestProjects()})},handleProjectIngCount(e){this.projects[this.currentProjectIndex].ingCount===void 0&&(this.projects[this.currentProjectIndex].ingCount=0),!(e<0&&this.projects[this.currentProjectIndex].ingCount<=0)&&(this.projects[this.currentProjectIndex].ingCount+=e)}}};function pe(e,t,c,x,n,l){const d=a("Projects"),m=a("v-navigation-drawer"),h=a("ProjectContent"),_=a("ProjectSetting"),v=a("v-container"),r=a("v-main");return s(),b(D,null,[o(m,{width:"300"},{default:i(()=>[o(d,{projects:n.projects,onSelected:l.selectedProject,onCreate:l.addProject,onSetting:l.settingProject},null,8,["projects","onSelected","onCreate","onSetting"])]),_:1}),o(r,null,{default:i(()=>[o(v,null,{default:i(()=>[n.showSetting?(s(),p(_,{ddd:n.ddd,key:n.currentProjectId},null,8,["ddd"])):(s(),p(h,{key:n.currentProjectId}))]),_:1})]),_:1})],64)}const fe=C(ue,[["render",pe]]);export{fe as default};
