import{_ as t,B as e,A as a,r as i,o as l,e as s,w as o,c as n,F as d,a as r,t as c,h as u,b as h,s as g,C as m,D as p,G as k,z as y,E as b}from"./index-749c2d1b.js";/* empty css                  *//* empty css                  */import{P as f}from"./PriceFormat-6ccd47a6.js";const v={class:"d-inline-flex align-start header"},w={key:0},T={key:1,class:"text-grey text-caption align-self-center"},C={class:"d-flex justify-end"};const x=t({components:{AutoTagTask:t({components:{Loading:e},data:()=>({task:void 0,interval:null}),computed:{disabled(){return void 0===this.task||this.task&&("RUNNING"===this.task.state||"DISABLED"===this.task.state)}},mounted(){this.state()},methods:{startLoop(){this.interval&&clearInterval(this.interval),this.interval=setInterval((()=>{this.$request.get({url:a.bill.autoTagTask.state}).then((t=>{this.task=t,t&&"RUNNING"!==t.state&&(this.interval&&clearInterval(this.interval),this.$confirm({message:"智能标注任务已完成，是否刷新当前页面?"}).then((()=>{location.reload()})).catch((()=>{this.task=void 0})))}))}),1e4)},state(){this.interval&&clearInterval(this.interval),this.$request.get({url:a.bill.autoTagTask.state}).then((t=>{this.task=t,t&&"RUNNING"===t.state&&this.startLoop()}))},start(){this.$confirm({message:"是否开启智能标注?",beforeClose:(t,e,a)=>{"confirm"===t?(e.confirmButtonLoading=!0,setTimeout((()=>{a()}),500)):a()}}).then((()=>{})).catch((()=>{}))},shutdown(t){this.$confirm({message:"是否终止智能标注任务?",beforeClose:(e,i,l)=>{"confirm"===e?(i.confirmButtonLoading=!0,this.$request.post({url:a.bill.autoTagTask.shutdown,data:{id:t}}).then((()=>{i.confirmButtonLoading=!1,this.task=void 0,l()}))):l()}}).then((()=>{this.state()})).catch((()=>{}))},confirm(t){this.$request.post({url:a.bill.autoTagTask.sync,data:{id:t},loading:{target:"#list"}}).then((()=>{location.reload()}))}}},[["render",function(t,e,a,k,y,b){const f=i("Loading"),v=m,w=i("v-icon"),T=i("v-btn"),C=p;return l(),s(C,{effect:"dark",placement:"bottom"},{content:o((()=>[y.task?(l(),n(d,{key:0},["RUNNING"===y.task.state?(l(),n(d,{key:0},[r(c(y.task.id?`正在执行智能标注任务，开始时间：${y.task.createdDate}`:"智能标注任务未能正确关闭")+" ",1),u("span",{class:"text-red pointer auto-tag-btn",onClick:e[0]||(e[0]=t=>b.shutdown(y.task.id))},"终止 ")],64)):"FAIL"===y.task.state?(l(),n(d,{key:1},[r(" 智能标注任务失败 ")],64)):"CONFIRM"===y.task.state?(l(),n(d,{key:2},[r(" 智能标注任务完成 "),u("span",{class:"text-red pointer auto-tag-btn",onClick:e[1]||(e[1]=t=>b.confirm(y.task.id))},"确认标注")],64)):"DISABLED"===y.task.state?(l(),n(d,{key:3},[r(" 暂无待标注数据 ")],64)):(l(),n(d,{key:4},[r("根据交易方和支出项自动标注标签")],64))],64)):(l(),n(d,{key:1},[r("根据交易方和支出项自动标注标签")],64))])),default:o((()=>[h(T,{class:"ml-2",color:"blue-lighten-1",disabled:b.disabled,onClick:b.start},{default:o((()=>[r("智能标注 "),y.task?(l(),n(d,{key:0},["RUNNING"===y.task.state?(l(),s(v,{key:0,style:{"margin-left":"5px"},class:"is-loading"},{default:o((()=>[h(f)])),_:1})):"FAIL"===y.task.state?(l(),s(w,{key:1,class:"ml-2",icon:"mdi-alert-circle"})):g("",!0)],64)):g("",!0)])),_:1},8,["disabled","onClick"])])),_:1})}],["__scopeId","data-v-797ea3d6"]]),PriceFormat:f},data:()=>({tableMaxHeight:0,query:{date:"",tags:[],isOnlyShowAutoTag:!1,keyword:""},pagination:{currentPage:1,pageSize:50,total:0},bills:[],tags:[],editrows:{},loading:!1}),beforeMount(){this.handleTableMaxHeight(),this.$store.commit("update_sider_active","/bill/list")},mounted(){window.onresize=()=>{this.handleTableMaxHeight()},this.$request.get({url:a.bill.list.tags,loading:{target:"#list"}}).then((t=>{this.tags=t}))},methods:{handleTableMaxHeight(){this.tableMaxHeight=document.documentElement.clientHeight-190},requestData(){this.loading=!0,this.$request.get({url:a.bill.list.page,params:{page:this.pagination.currentPage,pageSize:this.pagination.pageSize,date:this.query.date,isOnlyShowAutoTag:this.query.isOnlyShowAutoTag,tags:this.query.tags.join(","),keyword:this.query.keyword}}).then((t=>{this.pagination.total=t.total,this.bills=t.contents})).finally((()=>{this.loading=!1}))},deleteRow(t){this.$confirm({message:"确定要删除吗？"}).then((()=>{this.loading=!0,this.$request.delete({url:a.bill.list.delete,data:{id:t.id}}).then((()=>{this.requestData()}))})).catch((()=>{}))},updateTag(t,e){let i={id:t.id,tag:e,type:t.autoTag?"autoTag":"tag"};this.loading=!0,this.$request.put({url:a.bill.list.updateTag,data:i}).then((()=>{t.autoTag?t.autoTag=e:t.tag=e})).finally((()=>{this.loading=!1}))},async handleCellClick(t,e,i){switch(t){case"edit":e.edit=!0,this.editrows[e.id]=JSON.parse(JSON.stringify(e)),this.bills.splice(i,1,e),this.$nextTick((()=>{this.$refs[`cell-edit-${e.id}`].focus()}));break;case"save":const{valid:t}=await this.$refs.form.validate();if(!t)return;this.loading=!0,this.$request.put({url:a.bill.list.updateDetail,data:{id:e.id,detail:this.editrows[e.id].detail,price:this.editrows[e.id].price}}).then((()=>{e.edit=!1,e.detail=this.editrows[e.id].detail,e.price=this.editrows[e.id].price,this.bills.splice(i,1,e),delete this.editrows[e.id]})).finally((()=>{this.loading=!1}));break;case"cancel":e.edit=!1,this.bills.splice(i,1,e),delete this.editrows[e.id]}}}},[["render",function(t,e,a,m,p,f){const x=b,q=i("v-select"),V=i("v-text-field"),$=i("v-checkbox"),_=i("v-btn"),N=i("AutoTagTask"),U=i("v-sheet"),I=i("PriceFormat"),S=i("v-icon"),A=i("v-chip"),D=i("v-list-item-title"),M=i("v-list-item"),L=i("v-divider"),P=i("v-list"),O=i("v-menu"),R=i("v-btn-link"),z=i("v-pagination"),F=i("v-data-table"),H=i("v-form");return l(),s(U,{id:"list"},{default:o((()=>[u("div",v,[h(x,{modelValue:p.query.date,"onUpdate:modelValue":e[0]||(e[0]=t=>p.query.date=t),class:"date-picker",type:"month",placeholder:"选择月","value-format":"YYYY-MM"},null,8,["modelValue"]),h(q,{class:"ml-2",width:"250px",variant:"outlined",density:"compact","hide-details":"",modelValue:p.query.tags,"onUpdate:modelValue":e[1]||(e[1]=t=>p.query.tags=t),clearable:"",multiple:"",label:"标签",items:["EMPTY"].concat(this.tags)},{selection:o((({item:t,index:e})=>[e<1?(l(),n("span",w,c(t.title),1)):g("",!0),1===e?(l(),n("span",T," (+"+c(p.query.tags.length-1)+" others) ",1)):g("",!0)])),_:1},8,["modelValue","items"]),h(V,{class:"ml-2",width:"200px",variant:"outlined",density:"compact","hide-details":"",clearable:"",modelValue:p.query.keyword,"onUpdate:modelValue":e[2]||(e[2]=t=>p.query.keyword=t),label:"交易方|支出项"},null,8,["modelValue"]),h($,{class:"ml-2",density:"compact",modelValue:p.query.isOnlyShowAutoTag,"onUpdate:modelValue":e[3]||(e[3]=t=>p.query.isOnlyShowAutoTag=t),label:"仅显示智能标注数据"},null,8,["modelValue"]),h(_,{class:"ml-2",color:"blue-lighten-1",onClick:e[4]||(e[4]=()=>{p.pagination.currentPage=1,f.requestData()}),text:"检索"}),h(N)]),h(H,{ref:"form"},{default:o((()=>[h(F,{"show-current-page":"",page:p.pagination.currentPage,"items-per-page":p.pagination.pageSize,headers:[{title:"日期",key:"date",width:180,sortable:!1},{title:"交易方",key:"payee",width:300,sortable:!1},{title:"支出项",key:"detail",sortable:!1},{title:"金额",key:"price",width:180,sortable:!1},{title:"标签",key:"tag",align:"center",width:120,sortable:!1},{title:"操作",key:"actions",width:80,align:"center",sortable:!1}],height:p.tableMaxHeight,items:p.bills,"onUpdate:options":f.requestData,loading:p.loading,"item-key":"id"},{"item.detail":o((({item:e,index:a})=>[e.edit?(l(),s(U,{key:1,class:"d-flex align-center"},{default:o((()=>[h(V,{class:"mr-2",variant:"outlined",density:"compact","hide-details":"",ref:`cell-edit-${e.id}`,rules:[t.$validator.required],modelValue:p.editrows[e.id].detail,"onUpdate:modelValue":t=>p.editrows[e.id].detail=t},null,8,["rules","modelValue","onUpdate:modelValue"]),h(_,{class:"mr-2",color:"blue-lighten-1",onClick:t=>f.handleCellClick("save",e,a),text:"保存"},null,8,["onClick"]),h(_,{color:"red-darken-1",onClick:t=>f.handleCellClick("cancel",e,a),text:"取消"},null,8,["onClick"])])),_:2},1024)):(l(),s(U,{key:0,class:"pointer",onClick:t=>f.handleCellClick("edit",e,a)},{default:o((()=>[r(c(e.detail),1)])),_:2},1032,["onClick"]))])),"item.price":o((({item:e,index:a})=>[e.edit?(l(),s(U,{key:1,class:"d-flex align-center"},{default:o((()=>[h(V,{ref:`${e.id}_price`,class:"mr-2",variant:"outlined",density:"compact","hide-details":"",rules:[t.$validator.required,t.$validator({rule:"price",params:{max:99999999.99}})],modelValue:p.editrows[e.id].price,"onUpdate:modelValue":t=>p.editrows[e.id].price=t},null,8,["rules","modelValue","onUpdate:modelValue"])])),_:2},1024)):(l(),s(U,{key:0,class:"pointer",onClick:t=>f.handleCellClick("edit",e,a)},{default:o((()=>[h(I,{amount:e.price},null,8,["amount"])])),_:2},1032,["onClick"]))])),"item.tag":o((({item:t})=>[h(O,{density:"compact"},{activator:o((({props:e})=>[h(A,k(e,{color:t.autoTag?"orange-lighten-1":"blue-lighten-1",rounded:"sm"}),{default:o((()=>[t.tag||t.autoTag?(l(),n(d,{key:1},[r(c(t.autoTag?t.autoTag:t.tag),1)],64)):(l(),s(S,{key:0,icon:"mdi-plus"}))])),_:2},1040,["color"])])),default:o((()=>[h(P,{class:"pa-0",density:"compact"},{default:o((()=>[(l(!0),n(d,null,y(p.tags,(e=>(l(),s(M,{onClick:a=>f.updateTag(t,e),key:e,value:e},{default:o((()=>[h(D,null,{default:o((()=>[r(c(e),1)])),_:2},1024)])),_:2},1032,["onClick","value"])))),128)),h(L),t.tag||t.autoTag?(l(),s(M,{key:0,class:"text-center",onClick:e=>f.updateTag(t),title:"清  除",value:""},null,8,["onClick"])):g("",!0)])),_:2},1024)])),_:2},1024)])),"item.actions":o((({item:t})=>[h(R,{text:"删除",onClick:e=>f.deleteRow(t)},null,8,["onClick"])])),bottom:o((()=>[u("div",C,[h(z,{density:"comfortable",modelValue:p.pagination.currentPage,"onUpdate:modelValue":[e[5]||(e[5]=t=>p.pagination.currentPage=t),f.requestData],length:Math.floor(p.pagination.total/p.pagination.pageSize)+1,"total-visible":7},null,8,["modelValue","length","onUpdate:modelValue"])])])),_:1},8,["page","items-per-page","height","items","onUpdate:options","loading"])])),_:1},512)])),_:1})}],["__scopeId","data-v-04bb60f4"]]);export{x as default};
