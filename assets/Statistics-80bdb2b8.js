import{_ as t,A as e,r as a,o as l,e as r,w as s,d as i,b as u,i as n,k as o,j as d,n as c,l as m,q as f,B as p,h,t as v,y,p as _}from"./index-70eb1b2b.js";import{P as g}from"./PriceFormat-71d3e43a.js";import{_ as b}from"./Chart-b3a708bb.js";import{f as x}from"./common-5afeacdf.js";const $=t({components:{Chart:b},props:{year:{default:null}},data:()=>({}),mounted(){},methods:{request:function(){let t=this.$refs.chart.chart;this.$request.get({url:e.bill.statistic.month,params:{year:this.year},loading:{target:"#chart"}}).then((e=>{let a=e.map((t=>t.price));t.setOption({tooltip:{trigger:"axis",formatter:function(t,e,a){return`${t[0].axisValue}月: ${x(t[0].data)}`}},xAxis:{type:"category",data:[1,2,3,4,5,6,7,8,9,10,11,12]},yAxis:{type:"value"},series:[{data:a,type:"line",markLine:{silent:!0,lineStyle:{color:"rgba(193, 65, 65, 1)"},data:[{type:"average",name:"Avg"}]}}]})}))}},watch:{year:function(t){this.request()}}},[["render",function(t,e,n,o,d,c){const m=a("v-card-title"),f=b,p=a("v-card-text"),h=a("v-card"),v=a("v-sheet");return l(),r(v,{id:"chart",border:"",rounded:""},{default:s((()=>[i(h,{flat:""},{default:s((()=>[i(m,null,{default:s((()=>e[0]||(e[0]=[u(" 月支出 ")]))),_:1}),i(p,null,{default:s((()=>[i(f,{ref:"chart"},null,512)])),_:1})])),_:1})])),_:1})}]]);const q=t({components:{Chart:b},props:{year:{default:null}},data:()=>({}),mounted(){},methods:{request:function(){let t=this.$refs.chart.chart;this.$request.get({url:e.bill.statistic.classify,params:{year:this.year},loading:{target:"#pie_chart"}}).then((e=>{let a=e.map((t=>({name:t.tag,value:t.price})));t.setOption({tooltip:{trigger:"item",formatter:function(t,e,a){return`${t.name}: ${x(t.value)} (${t.percent}%)`}},series:[{type:"pie",radius:["40%","70%"],itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},data:a}]})}))}},watch:{year:function(t){this.request()}}},[["render",function(t,e,n,o,d,c){const m=a("v-card-title"),f=b,p=a("v-card-text"),h=a("v-card"),v=a("v-sheet");return l(),r(v,{id:"pie_chart",border:"",rounded:""},{default:s((()=>[i(h,{flat:""},{default:s((()=>[i(m,null,{default:s((()=>e[0]||(e[0]=[u("分类支出")]))),_:1}),i(p,null,{default:s((()=>[i(f,{ref:"chart"},null,512)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-84c76b62"]]),j={__name:"Statistics",setup(t){const b=n(),x=o(void 0),j=o(void 0),w=o(0);return d((()=>{b.commit("update_sider_active","/bill/statistics")})),c((()=>{m.get({url:e.bill.statistic.years,loading:{target:"#statistics"}}).then((t=>{t&&t.length>0&&(j.value=t,f((()=>{x.value=j.value[0]})))}))})),p(x,(()=>{m.get({url:e.bill.statistic.price,params:{year:x.value}}).then((t=>{w.value=t||0}))})),(t,e)=>{const n=a("v-list-item"),o=a("v-select"),d=a("v-sheet"),c=a("v-col"),m=a("v-row");return l(),r(d,{id:"statistics"},{default:s((()=>[i(d,null,{default:s((()=>[i(d,{class:"d-flex align-end"},{default:s((()=>[i(d,{width:"130px"},{default:s((()=>[i(o,{density:"compact",variant:"outlined","hide-details":"",items:j.value,modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=t=>x.value=t)},{selection:s((({item:t})=>[h("span",null,v(t.title)+"年",1)])),item:s((({props:t,item:e})=>[i(n,y(t,{title:`${e.title}年`}),null,16,["title"])])),_:1},8,["items","modelValue"])])),_:1}),w.value?(l(),r(d,{key:0,class:"ml-2"},{default:s((()=>[e[1]||(e[1]=u("总支出 ")),i(g,{size:24,amount:w.value},null,8,["amount"])])),_:1})):_("",!0)])),_:1}),i(m,{class:"mt-0"},{default:s((()=>[i(c,{cols:"7",class:"pr-0"},{default:s((()=>[i($,{year:x.value},null,8,["year"])])),_:1}),i(c,{cols:"5"},{default:s((()=>[i(q,{year:x.value},null,8,["year"])])),_:1})])),_:1})])),_:1})])),_:1})}}};export{j as default};
