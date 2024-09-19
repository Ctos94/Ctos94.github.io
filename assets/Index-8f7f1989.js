import{_ as e,Y as a,k as l,B as t,q as n,r as i,o as d,a as o,d as u,w as r,Z as s,f as c,a0 as p,C as v,u as m,H as f,e as g,p as h,a1 as _,g as y,F as x,l as k,A as j,z as b,b as w,t as C,h as V,s as I,n as P,G as U,y as O,$ as T,i as N,j as A,a2 as M}from"./index-70eb1b2b.js";import{a as S}from"./common-5afeacdf.js";import{u as $}from"./store-21f1ab8c.js";const D=e({__name:"Projects",props:{projects:{type:Array,default:function(){return[]}}},emits:["showViewer","add"],setup(e,{emit:b}){const w=a("currentProjectId"),C=b,V=l(!1),I=l({}),P=l(!1),U=l(!1),O=()=>{I.value.name&&(U.value=!0,k.post({url:j.plan.project.create,data:I.value,loading:{target:"#project_title"}}).then((e=>{C("add",e),V.value=!1})).finally((()=>{U.value=!1})))};return t(V,(e=>{e||(I.value={})})),t(P,(e=>{e&&n((()=>{const e=document.getElementById(`project-${w.value}`);e&&e.scrollIntoView()}))})),(a,l)=>{const t=i("v-btn"),n=i("v-list-item"),k=i("v-list"),j=i("v-badge"),b=i("v-sheet"),T=i("v-virtual-scroll"),N=i("v-text-field"),A=i("v-card-text"),M=i("v-card"),S=i("v-dialog");return d(),o(x,null,[u(k,{class:"pa-0",density:"compact"},{default:r((()=>[u(n,{class:"pl-0 pr-2",ripple:!1,title:"项目",onClick:l[1]||(l[1]=e=>P.value=!P.value)},{prepend:r((()=>[u(t,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,class:s({rotate:P.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),append:r((()=>[u(t,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:l[0]||(l[0]=c((e=>V.value=!V.value),["stop"])),icon:"mdi-plus"})])),_:1})])),_:1}),u(T,{items:e.projects},{default:r((({item:e,index:a})=>[u(p,{name:"slide-x-reverse-transition"},{default:r((()=>[u(b,{title:e.name},{default:r((()=>[v(u(n,{ripple:!1,title:e.name,id:`project-${e.id}`,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,class:s({item:!0,selected:m(w)==e.id}),value:e,color:"primary",onClick:l=>C("showViewer",e.id,a,"projectContent")},f({append:r((()=>[e.showActions?(d(),g(t,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:c((l=>C("showViewer",e.id,a,"projectSetting")),["stop"]),icon:"mdi-cog"},null,8,["onClick"])):h("",!0)])),_:2},[e.ingCount?{name:"prepend",fn:r((()=>[u(j,{class:"mr-1",content:e.ingCount,inline:""},null,8,["content"])])),key:"0"}:void 0]),1032,["title","id","onMouseenter","onMouseleave","class","value","onClick"]),[[_,P.value||m(w)==e.id]])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"]),u(S,{persistent:U.value,class:"dialog",modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value=e),width:"600px"},{default:r((()=>[u(M,{id:"project_title"},{default:r((()=>[u(A,{class:"pa-3"},{default:r((()=>[u(N,{"hide-details":"",modelValue:I.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>I.value.name=e),density:"compact",variant:"outlined",onKeydown:y(O,["enter"]),label:"项目名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])],64)}}},[["__scopeId","data-v-29342109"]]),E=e({__name:"NewPlan",emits:["create"],setup(e,{emit:t}){const n=a("currentProjectId"),o=l(""),s=l(!1),p=l("inputRef"),v=t,m=()=>{p.value.error||k.post({url:j.plan.plan.create,data:{name:o.value,projectId:n.value},json:!0,loading:{target:"#newPlan"}}).then((e=>{v("create",e),o.value="",p.value.blur()}))};return(e,a)=>{const l=i("v-icon"),t=i("v-text-field"),n=i("v-validation"),v=i("v-sheet");return d(),g(v,{id:"newPlan",class:"d-flex justify-center"},{default:r((()=>[u(n,{rules:[e.$validator.required],modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e)},{default:r((({isValid:e})=>[u(t,{error:!!s.value&&!e.value,"onUpdate:focused":a[0]||(a[0]=e=>s.value=!s.value),ref_key:"inputRef",ref:p,"hide-details":"",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),density:"compact",variant:"outlined",onKeydown:y(m,["enter"]),placeholder:"将任务添加到列表顶部"},f({_:2},[o.value?{name:"append-inner",fn:r((()=>[u(l,{onClick:c(m,["stop"]),icon:"mdi-plus"})])),key:"0"}:void 0]),1032,["error","modelValue"])])),_:1},8,["rules","modelValue"])])),_:1})}}},[["__scopeId","data-v-5149f10b"]]),H={key:0,class:"xx"},F=e({__name:"PlanActions",props:{plan:{type:Object,required:!0},show:{type:Boolean,default:!1}},emits:["handleAction"],setup(e,{emit:a}){const l=e,t=a,n=b((()=>l.plan?S(new Date(l.plan.deadline.date),"MM-dd"):"")),s=e=>{t("handleAction",e)};return(a,l)=>{const t=i("v-divider"),p=i("v-btn"),v=i("v-icon"),m=i("v-sheet");return d(),g(m,{class:"d-flex actions-sheet"},{default:r((()=>[e.show?(d(),o("div",H,[u(t,{class:"border-opacity-30 mx-1",inset:"",vertical:""}),e.plan.finished?(d(),o(x,{key:1},[u(p,{ripple:!1,onClick:l[2]||(l[2]=c((e=>s("archived")),["stop"])),title:"归档",class:"action-icon mx-1",color:"blue-grey-lighten-2",icon:"mdi-folder-file-outline",variant:"text"}),u(p,{ripple:!1,onClick:l[3]||(l[3]=c((e=>s("again")),["stop"])),title:"重新开始计划",class:"action-icon",color:"blue-grey-lighten-2",icon:"mdi-arrow-u-left-top",variant:"text"})],64)):(d(),o(x,{key:0},[u(p,{ripple:!1,onClick:l[0]||(l[0]=c((e=>s("complete")),["stop"])),title:"标记为完成",class:"action-icon mx-1",icon:"mdi-check",variant:"text"}),u(p,{ripple:!1,onClick:l[1]||(l[1]=c((e=>s("setting")),["stop"])),title:"显示其他信息",class:"action-icon mr-1",icon:"mdi-dots-vertical",variant:"text"})],64))])):h("",!0),!e.plan.finished&&e.plan.deadline?(d(),g(m,{key:1,class:"d-flex justify-center align-center"},{default:r((()=>[u(p,{ripple:!1,onClick:l[4]||(l[4]=c((e=>s("deadline")),["stop"])),class:"action-icon deadline-btn",icon:"",title:"编辑提醒",variant:"text"},{default:r((()=>[u(v,{icon:"mdi-alarm"}),u(m,{class:"deadline-text"},{default:r((()=>[w(C(n.value),1)])),_:1})])),_:1})])),_:1})):h("",!0)])),_:1})}}},[["__scopeId","data-v-029c534c"]]),J={__name:"Tag",props:{icon:{type:String,default:"mdi-circle"},text:{type:String,default:""}},setup:e=>(a,l)=>{const t=i("v-icon"),n=i("v-sheet");return d(),g(n,{class:"d-flex align-center mr-2"},{default:r((()=>[u(t,{color:"primary",icon:e.icon,style:{fontSize:"15px",marginTop:"2px",marginRight:"2px"}},null,8,["icon"]),V("div",null,C(e.text),1)])),_:1})}},B={key:0,class:"d-flex flex-wrap"},R={__name:"PlanTags",props:{planTags:{type:Array,default:()=>[]}},setup(e){const a=$(),l=e,t=b((()=>0===l.planTags.length));return(l,n)=>t.value?h("",!0):(d(),o("div",B,[(d(!0),o(x,null,I(e.planTags,(e=>{return d(),g(J,{key:e,text:(l=e,a.tags.filter((e=>e.id===l))[0].name)},null,8,["text"]);var l})),128))]))}},q=[{color:"#F44336",text:"高优先级",value:"HIGH"},{color:"#FFA726",text:"中优先级",value:"MIDDLE"},{color:"#42A5F5",text:"低优先级",value:"LOW"},{color:"",text:"无优先级",value:"NONE"}],L=e=>e?q.filter((a=>a.value===e))[0]:{color:"",text:"无优先级",value:"NONE"},K={style:{"line-height":"31px"}},z=e({__name:"Plan",props:{data:{type:Object},index:{type:Number}},emits:["update","right-click","handle-deadline","handle-tags","delete"],setup(e,{emit:n}){a("currentProjectId");const o=a("currentProjectIndex"),p=$(),v=e,f=n,_=l(!1),x=l(!1),w=l(JSON.parse(JSON.stringify(v.data))),I=l(null),P=b((()=>{if(!v.data.tags)return[];let e=p.tags.map((e=>e.id));return v.data.tags.filter((a=>e.indexOf(a)>=0))})),U=()=>{x.value&&!I.value.error&&k.put({url:j.plan.plan.update,data:w.value,json:!0,loading:{target:`#plan-${v.data.id}`}}).then((()=>{f("update",w.value,v.index),x.value=!1}))},O=()=>{v.data.finished||(x.value=!0,_.value=!1)},T=e=>{switch(e){case"complete":N();break;case"again":A();break;case"deadline":f("handle-deadline",v.index);break;case"setting":f("right-click",v.index);break;case"archived":M()}},N=()=>{k.post({url:j.plan.plan.finished,data:{id:v.data.id},loading:{target:`#plan-${v.data.id}`}}).then((()=>{f("update",{...v.data,finished:!0},v.index),p.handleProjectIngCount(o.value,-1)}))},A=()=>{k.post({url:j.plan.plan.again,data:{id:v.data.id},loading:{target:`#plan-${v.data.id}`}}).then((()=>{f("update",{...v.data,finished:!1,deadline:null},v.index),p.handleProjectIngCount(o.value,1)}))},M=()=>{k.post({url:j.plan.plan.archived,data:{id:v.data.id},loading:{target:`#plan-${v.data.id}`}}).then((()=>{f("delete",v.index)}))},S=()=>{x.value=!1,w.value=JSON.parse(JSON.stringify(v.data))};return t((()=>v.data),(e=>{w.value=JSON.parse(JSON.stringify(e))}),{deep:!0}),(a,l)=>{const t=i("v-icon"),n=i("v-list-item"),o=i("v-text-field"),p=i("v-validation"),v=i("v-sheet");return d(),g(v,{class:"d-flex align-center"},{default:r((()=>[e.data.flag&&"NONE"!=e.data.flag?(d(),g(t,{key:0,class:"pointer",title:m(L)(e.data.flag).text,color:m(L)(e.data.flag).color,style:{position:"absolute",left:"-34px"},icon:"mdi-flag-outline"},null,8,["title","color"])):h("",!0),x.value?(d(),g(n,{key:2,width:"100%",class:"pa-0 my-2","min-height":"40"},{default:r((()=>[u(p,{modelValue:w.value.name,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value.name=e),rules:[a.$validator.required]},{default:r((({isValid:e})=>[u(o,{ref_key:"nameRef",ref:I,error:!e.value,modelValue:w.value.name,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value.name=e),"hide-details":"",autofocus:"",onKeyup:[y(U,["enter"]),y(S,["esc"])],onBlur:U,density:"compact",variant:"outlined"},null,8,["error","modelValue"])])),_:1},8,["modelValue","rules"])])),_:1})):(d(),g(n,{key:1,width:"100%",class:s(["pr-2",{"plan-item py-0 my-2 rounded pointer":!0,"warning-deadline":!e.data.finished&&e.data.deadline&&e.data.deadline.expired}]),onMouseenter:l[1]||(l[1]=e=>_.value=!0),onMouseleave:l[2]||(l[2]=e=>_.value=!1),onClick:O,ripple:!1},{title:r((()=>[V("span",K,C(e.data.name),1)])),subtitle:r((()=>[u(R,{onClick:l[0]||(l[0]=c((e=>f("handle-tags")),["stop"])),planTags:P.value},null,8,["planTags"])])),append:r((()=>[u(F,{onHandleAction:T,plan:e.data,show:_.value},null,8,["plan","show"])])),_:1},8,["class"]))])),_:1})}}},[["__scopeId","data-v-3e3da892"]]),G=e({__name:"DatePicker",props:{data:{type:Object},index:{type:Number}},emits:["update","cancel"],setup(e,{emit:a}){const t=e,n=a,s=l(!1),c=l(null),p=l(!1);P((()=>{y(),s.value=t.data.deadline.remind,t.data.deadline&&(c.value=new Date(t.data.deadline.date))}));const v=b((()=>S(new Date((new Date).getTime()),"yyyy-MM-dd"))),m=()=>{if(!c)return;let e={date:S(c.value,"yyyy-MM-dd"),remind:s.value};k.post({url:j.plan.plan.setDeadline,data:{planId:t.data.id,...e},json:!0}).then((()=>{_({...t.data,deadline:e})}))},f=()=>{k.delete({url:j.plan.plan.removeDeadline,data:{planId:t.data.id}}).then((()=>{_({...t.data,deadline:null})}))},_=e=>{n("update",e,t.index),n("cancel")},y=()=>{k.get({url:j.user.attribute.get,params:{name:"pushdeer_key"}}).then((e=>{p.value=!!e}))};return(a,l)=>{const t=i("v-date-picker"),_=i("v-checkbox"),y=i("v-icon"),k=i("router-link"),j=i("v-sheet"),b=i("v-menu"),C=i("v-card-text"),I=i("v-btn"),P=i("v-card-actions"),T=i("v-card");return d(),g(T,{class:"date-picker"},{default:r((()=>[u(C,{class:"py-0"},{default:r((()=>[u(t,{style:{width:"100%"},"show-adjacent-months":"",min:v.value,modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e)},null,8,["min","modelValue"]),V("div",{class:"d-flex align-center",style:U({cursor:p.value?"":"not-allowed"})},[u(_,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value=e),ripple:!1,class:"checkbox-clean",disabled:!p.value,"hide-details":"",label:"任务截至当天提醒我"},null,8,["modelValue","disabled"]),u(b,{offset:"10",location:"top center","open-on-hover":"",transition:"scale-transition"},{activator:r((({props:e})=>[u(y,O({class:"ml-3 pointer"},e,{color:p.value?"":"red-darken-1",icon:"mdi-information",size:"x-small"}),null,16,["color"])])),default:r((()=>[u(j,{elevation:"0",class:"popover-content"},{default:r((()=>[p.value?(d(),o(x,{key:0},[w("任务截至当天将会通过pushdeer提醒")],64)):(d(),o(x,{key:1},[l[4]||(l[4]=w("未设置")),u(k,{class:"pushdeer-link",to:"/user/pushdeer"},{default:r((()=>l[3]||(l[3]=[w("pushdeer")]))),_:1}),l[5]||(l[5]=w("，无法使用该功能"))],64))])),_:1})])),_:1})],4)])),_:1}),u(P,null,{default:r((()=>[u(I,{title:"取消",onClick:l[2]||(l[2]=e=>n("cancel"))},{default:r((()=>[u(y,{icon:"mdi-close"})])),_:1}),e.data&&e.data.deadline?(d(),g(I,{key:0,title:"取消期限",color:"primary",onClick:f},{default:r((()=>[u(y,{icon:"mdi-alarm-off"})])),_:1})):h("",!0),u(I,{title:"设置期限",color:"primary",onClick:m},{default:r((()=>[u(y,{icon:"mdi-alarm"})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-82b5e88a"]]),W={__name:"TagSelect",props:{data:{type:Object}},emits:["cancel"],setup(e,{emit:a}){const t=$(),n=e,o=a,s=l(null),p=l(null),v=b((()=>{if(!n.data.tags)return[];let e=t.tags.map((e=>e.id));return n.data.tags.filter((a=>e.indexOf(a)>=0))})),h=()=>{p.value.blur(),k.post({url:j.plan.tag.create,data:{name:s.value},loading:{target:"#tag_autocomplete"}}).then((e=>{t.addTag(e),_(e)}))},_=e=>{p.value.blur(),k.post({url:j.plan.plan.addTag,data:{id:n.data.id,tagId:e.id},loading:{target:"#tag_autocomplete"}}).then((()=>{n.data.tags.push(e.id)}))};return(e,a)=>{const l=i("v-icon"),y=i("v-chip"),x=i("v-list-item"),b=i("v-autocomplete"),V=i("v-card-text"),I=i("v-btn"),P=i("v-card-actions"),U=i("v-card");return d(),g(U,{title:"编辑标签"},{default:r((()=>[u(V,{id:"tag_autocomplete"},{default:r((()=>[u(b,{density:"compact","hide-selected":"","hide-details":"",search:s.value,ref_key:"tagRef",ref:p,modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),"onUpdate:search":a[1]||(a[1]=e=>s.value=e),multiple:"",chips:"","item-title":"name","item-value":"id",items:m(t).tags},f({chip:r((({item:e})=>[u(y,null,{default:r((()=>[w(C(e.title)+" ",1),u(l,{style:{margin:"2px 0 0 2px"},icon:"mdi-close-circle",onClick:c((a=>{return l=e,p.value.blur(),void k.delete({url:j.plan.plan.deleteTag,data:{id:n.data.id,tagId:l.value},loading:{target:"#tag_autocomplete"}}).then((()=>{n.data.tags=n.data.tags.filter((e=>e!==l.value))}));var l}),["stop"])},null,8,["onClick"])])),_:2},1024)])),item:r((({item:e})=>[u(x,{onClick:c((a=>_(e.raw)),["stop"]),title:e.title},null,8,["onClick","title"])])),_:2},[s.value?{name:"no-data",fn:r((()=>[u(x,{onClick:c(h,["stop"]),title:`创建标签 '${s.value}'`},null,8,["title"])])),key:"0"}:void 0]),1032,["search","modelValue","items"])])),_:1}),u(P,null,{default:r((()=>[u(I,{onClick:a[2]||(a[2]=e=>o("cancel"))},{default:r((()=>[u(l,{icon:"mdi-close"})])),_:1})])),_:1})])),_:1})}}},X=e({__name:"PlanFlag",props:{plan:Object},emits:["selected"],setup(e,{emit:a}){const l=e,t=a,n=b((()=>L(l.plan.flag).color));return(e,a)=>{const l=i("v-btn-text"),s=i("v-icon"),p=i("v-list-item"),v=i("v-list"),f=i("v-menu");return d(),g(f,{class:"flag-menu"},{activator:r((({props:e})=>[u(l,O({title:"优先级",color:n.value,icon:"mdi-flag-outline"},e),null,16,["color"])])),default:r((()=>[u(v,{class:"pa-0"},{default:r((()=>[(d(!0),o(x,null,I(m(q),((e,a)=>(d(),g(p,{key:a,title:e.text,ripple:!1,onClick:c((a=>t("selected",e.value)),["stop"])},{prepend:r((()=>[u(s,{icon:"mdi-flag-outline",color:e.color},null,8,["color"])])),_:2},1032,["title","onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-89524109"]]),Y={__name:"PlanDrawer",props:{plan:Object},emits:["handleEvent"],setup(e,{emit:a}){const l=a,t=(e,a)=>{l("handleEvent",e,a)};return(a,l)=>{const n=i("v-list-item"),o=i("v-list"),s=i("v-card-text"),p=i("v-card");return d(),g(p,{width:"280"},{default:r((()=>[u(s,{class:"pa-0"},{default:r((()=>[u(o,{class:"pa-0"},{default:r((()=>[u(n,{onClick:l[1]||(l[1]=c((e=>t("deadline")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-alarm",title:e.plan.deadline&&e.plan.deadline.date||"设置期限"},{append:r((()=>[u(X,{onSelected:l[0]||(l[0]=e=>{t("flag",{value:e})}),plan:e.plan},null,8,["plan"])])),_:1},8,["title"]),u(n,{onClick:l[2]||(l[2]=c((e=>t("tag")),["stop"])),elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-tag-multiple-outline",title:"编辑标签"}),u(n,{onClick:l[3]||(l[3]=c((e=>t("delete")),["stop"])),style:{color:"#F44336"},elevation:"0",variant:"elevated",ripple:!1,"prepend-icon":"mdi-trash-can-outline",title:"删除"})])),_:1})])),_:1})])),_:1})}}},Z=["id"],Q=e({__name:"ProjectContent",setup(e){const t=a("currentProjectId"),n=a("currentProjectIndex"),p=$(),v=l([]),f=l(!1),_=l(!1),y=l(-1),C=l(!1),U=l(!1),O=b((()=>v.value.filter((e=>!e.finished)).length>0)),N=b((()=>v.value.filter((e=>e.finished)).length>0)),A=b((()=>v.value.filter((e=>e.finished)).length));P((()=>{M()}));const M=()=>{t.value&&k.get({url:j.plan.plan.list,params:{projectId:t.value},loading:!0}).then((e=>{v.value=e}))},S=e=>{v.value.splice(0,0,e),p.handleProjectIngCount(n.value,1)},D=e=>{f.value||(f.value=!0,y.value=e)},H=(e,a={})=>{switch(e){case"deadline":_.value=!0;break;case"tag":U.value=!0;break;case"delete":let e=v.value[y.value].id;T({message:"是否要删除该计划？"}).then((()=>{k.delete({url:j.plan.plan.delete,data:{id:e},loading:{target:`#plan-${e}`}}).then((()=>{v.value.splice(y.value,1),p.handleProjectIngCount(n.value,-1)}))})).catch((()=>{}));break;case"flag":k.put({url:j.plan.plan.setFlag,data:{id:v.value[y.value].id,flag:a.value}}).then((()=>{v.value[y.value].flag=a.value}))}f.value=!1},F=(e,a)=>{v.value.splice(a,1,e)},J=e=>{v.value.splice(e,1)};return(e,a)=>{const l=i("v-sheet"),n=i("v-list"),p=i("v-btn"),k=i("v-list-item"),j=i("v-dialog"),b=i("v-container");return d(),g(b,{id:"plans",style:{width:"70%"}},{default:r((()=>[m(t)?(d(),g(l,{key:1},{default:r((()=>[u(E,{onCreate:S}),u(l,{class:"d-flex justify-center text-h5 mt-10"},{default:r((()=>a[7]||(a[7]=[w(" 进行中的计划 ")]))),_:1}),O.value?h("",!0):(d(),g(l,{key:0,class:"d-flex justify-center mt-2 mb-8"},{default:r((()=>a[8]||(a[8]=[w(" 目前还没有进行中的计划 ")]))),_:1})),u(n,{style:{overflow:"visible"}},{default:r((()=>[(d(!0),o(x,null,I(v.value,((e,a)=>(d(),o(x,{key:a},[e.finished?h("",!0):(d(),o("div",{key:0,id:`plan-${e.id}`},[u(z,{data:e,index:a,onHandleTags:e=>(e=>{y.value=e,U.value=!0})(a),onHandleDeadline:e=>(e=>{y.value=e,_.value=!0})(a),onRightClick:D,onUpdate:F},null,8,["data","index","onHandleTags","onHandleDeadline"])],8,Z))],64)))),128))])),_:1}),N.value?(d(),g(l,{key:1},{default:r((()=>[u(l,{class:"d-flex justify-center text-h5 mt-10"},{default:r((()=>a[9]||(a[9]=[w(" 完成的计划 ")]))),_:1}),u(n,null,{default:r((()=>[(d(!0),o(x,null,I(v.value,((e,a)=>{return d(),o(x,{key:a},[e.finished&&(t=e.id,v.value.filter((e=>e.finished)).map((e=>e.id)).splice(0,3).indexOf(t)>=0)||e.finished&&C.value?(d(),g(l,{key:0,id:`plan-${e.id}`},{default:r((()=>[u(z,{class:"text-disabled",data:e,index:a,onDelete:J,onUpdate:F},null,8,["data","index"])])),_:2},1032,["id"])):h("",!0)],64);var t})),128)),A.value>3?(d(),g(k,{key:0,style:{marginTop:"-10px"},class:"d-flex justify-center"},{default:r((()=>[u(p,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,onClick:a[0]||(a[0]=c((e=>C.value=!C.value),["stop"])),class:s({rotate:C.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),_:1})):h("",!0)])),_:1})])),_:1})):h("",!0)])),_:1})):(d(),g(l,{key:0,class:"d-flex justify-center"},{default:r((()=>a[6]||(a[6]=[V("p",null,"没有计划任务",-1)]))),_:1})),u(j,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),width:"400"},{default:r((()=>[u(G,{data:v.value[y.value],index:y.value,onCancel:a[1]||(a[1]=e=>_.value=!1),onUpdate:F},null,8,["data","index"])])),_:1},8,["modelValue"]),u(j,{modelValue:U.value,"onUpdate:modelValue":a[4]||(a[4]=e=>U.value=e),width:"600"},{default:r((()=>[u(W,{data:v.value[y.value],onCancel:a[3]||(a[3]=e=>U.value=!1)},null,8,["data"])])),_:1},8,["modelValue"]),u(j,{fullscreen:"",modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=e=>f.value=e),width:"auto",class:"rigth-drawer",transition:"slide-x-reverse-transition"},{default:r((()=>[u(Y,{onHandleEvent:H,plan:v.value[y.value]},null,8,["plan"])])),_:1},8,["modelValue"])])),_:1})}}},[["__scopeId","data-v-ec7ac339"]]),ee=e({__name:"ProjectSetting",setup(e){const t=$(),n=a("currentProjectId"),o=a("currentProjectIndex"),s=a("reload"),c=l({}),p=l(!1);P((()=>{v()}));const v=()=>{k.get({url:j.plan.project.detail,params:{id:n.value},loading:!0}).then((e=>{c.value=e}))},m=()=>{T({message:"删除后数据无法找回，确定要删除吗？",beforeClose:(e,a,l)=>{"confirm"===e?(a.confirmButtonLoading=!0,k.delete({url:j.plan.project.delete,data:{id:n.value}}).then((()=>{l()}))):l()}}).then((()=>{s()})).catch((()=>{}))};return(e,a)=>{const l=i("v-btn"),s=i("v-text-field"),v=i("v-confirm-edit"),f=i("v-sheet"),_=i("v-container");return d(),g(_,null,{default:r((()=>[u(f,{id:"setting"},{default:r((()=>[u(f,{class:"confirm-edit"},{default:r((()=>[u(v,{modelValue:c.value.name,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value.name=e),ref:"edit"},{default:r((({model:i,actions:p,isPristine:v})=>[u(s,{rules:[e.$validator.required],"hide-details":"",density:"compact",variant:"outlined",label:"项目名称",modelValue:i.value,"onUpdate:modelValue":e=>i.value=e},{append:r((()=>[u(l,{class:"update_btn",color:"blue-lighten-1",onClick:()=>{var e;v||(e=i.value)&&k.put({url:j.plan.project.update,data:{id:n.value,name:e},loading:{target:".update_btn"},json:!0}).then((()=>{c.value.name=e,t.updateProject(c.value,o.value,"name")}))},text:"重命名"},null,8,["onClick"]),v?h("",!0):(d(),g(l,{key:0,class:"ml-2 update_btn",color:"grey-lighten-3",onClick:a[0]||(a[0]=a=>e.$refs.edit.cancel()),text:"取消"}))])),_:2},1032,["rules","modelValue","onUpdate:modelValue"])])),_:1},8,["modelValue"])])),_:1}),u(l,{loading:p.value,ripple:!1,"prepend-icon":"mdi-alert",class:"mt-4","max-width":"300",color:"red-lighten-2",text:"删除项目",variant:"outlined",onClick:m},null,8,["loading"])])),_:1})])),_:1})}}},[["__scopeId","data-v-9f5fe603"]]),ae=e({__name:"Tags",props:{tags:{type:Array,default:function(){return[]}}},setup(e){const a=$(),n=l(!1),v=l({}),m=l(!1),f=l(!1),_=l(-1),b=()=>{v.value.name&&(f.value=!0,v.value.id?k.put({url:j.plan.tag.update,data:v.value,loading:{target:"#tag_dialog"}}).then((()=>{a.updateTag(v.value,_.value,["name"]),n.value=!1})).finally((()=>{f.value=!1})):k.post({url:j.plan.tag.create,data:v.value,loading:{target:"#tag_dialog"}}).then((e=>{a.addTag(e),n.value=!1})).finally((()=>{f.value=!1})))};return t(n,(e=>{e||(v.value={},_.value=-1)})),(l,t)=>{const w=i("v-btn"),C=i("v-list-item"),V=i("v-list"),I=i("v-icon"),P=i("v-sheet"),U=i("v-virtual-scroll"),O=i("v-text-field"),N=i("v-card-text"),A=i("v-card"),M=i("v-dialog");return d(),o(x,null,[u(V,{class:"pa-0"},{default:r((()=>[u(C,{class:"pl-0 pr-2",density:"compact",ripple:!1,title:"标签",onClick:t[1]||(t[1]=e=>m.value=!m.value)},{prepend:r((()=>[u(w,{color:"blue-grey-lighten-2",variant:"text",ripple:!1,class:s({rotate:m.value,"rotate-t":!0,"action-icon":!0}),icon:"mdi-chevron-down"},null,8,["class"])])),append:r((()=>[u(w,{color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,onClick:t[0]||(t[0]=c((e=>n.value=!n.value),["stop"])),icon:"mdi-plus"})])),_:1})])),_:1}),m.value?(d(),g(U,{key:0,items:e.tags},{default:r((({item:e,index:l})=>[u(p,{name:"slide-x-reverse-transition"},{default:r((()=>[u(P,{title:e.name},{default:r((()=>[u(C,{class:"pr-2 pl-3",ripple:!1,title:e.name,onMouseenter:a=>e.showActions=!0,onMouseleave:a=>e.showActions=!1,value:e,onClick:a=>((e,a)=>{_.value=a,v.value=JSON.parse(JSON.stringify(e)),n.value=!0})(e,l)},{prepend:r((()=>[u(I,{class:"pr-2",icon:"mdi-tag-outline"})])),append:r((()=>[e.showActions?(d(),g(w,{key:0,color:"blue-grey-lighten-2",class:"action-icon",variant:"text",ripple:!1,icon:"mdi-close",onClick:c((t=>((e,l)=>{T({width:450,message:`删除后，所有任务中的标签“${e.name}”都将被移除。`,beforeClose:(a,l,t)=>{"confirm"===a?(l.confirmButtonLoading=!0,k.delete({url:j.plan.tag.delete,data:{id:e.id}}).then((()=>{t()}))):t()}}).then((()=>{a.deleteTag(l)})).catch((()=>{}))})(e,l)),["stop"])},null,8,["onClick"])):h("",!0)])),_:2},1032,["title","onMouseenter","onMouseleave","value","onClick"])])),_:2},1032,["title"])])),_:2},1024)])),_:1},8,["items"])):h("",!0),u(M,{persistent:f.value,class:"dialog",modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),width:"600px"},{default:r((()=>[u(A,{id:"tag_dialog"},{default:r((()=>[u(N,{class:"pa-3"},{default:r((()=>[u(O,{"hide-details":"",modelValue:v.value.name,"onUpdate:modelValue":t[2]||(t[2]=e=>v.value.name=e),density:"compact",variant:"outlined",onKeydown:y(b,["enter"]),label:"标签名"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["persistent","modelValue"])],64)}}},[["__scopeId","data-v-0af467ae"]]),le={__name:"Index",setup(e){const a=N(),t=$(),n=l("projectContent"),s=l(void 0),c=l(-1);A((()=>{a.commit("update_header_active","PLAN_INDEX")})),P((()=>{p(),v()}));const p=()=>{k.get({url:j.plan.project.list,loading:!0}).then((e=>{t.projects=e,e.length>0?(s.value=e[0].id,c.value=0):(c.value=-1,s.value=void 0),n.value="projectContent"}))},v=()=>{k.get({url:j.plan.tag.list,loading:!0}).then((e=>{t.tags=e}))},f=e=>{t.addProject(e),s.value=e.id,c.value=0},_=(e,a,l)=>{s.value=e,c.value=a,n.value=l};return M("currentProjectId",s),M("currentProjectIndex",c),M("reload",(()=>{p()})),(e,a)=>{const l=i("v-divider"),c=i("v-navigation-drawer"),p=i("v-container"),v=i("v-main");return d(),o(x,null,[u(c,{width:"300"},{default:r((()=>[u(D,{projects:m(t).projects,onAdd:f,onShowViewer:_},null,8,["projects"]),u(l,{class:"my-2",style:{width:"80%","margin-left":"10%"}}),u(ae,{tags:m(t).tags},null,8,["tags"])])),_:1}),u(v,null,{default:r((()=>[u(p,null,{default:r((()=>["projectContent"==n.value?(d(),g(Q,{key:s.value})):h("",!0),"projectSetting"==n.value?(d(),g(ee,{key:s.value})):h("",!0)])),_:1})])),_:1})],64)}}};export{le as default};
