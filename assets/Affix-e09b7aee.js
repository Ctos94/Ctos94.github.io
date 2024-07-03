import{_ as b,o as l,c as r,b as o,B as F,l as x,z as B,L as D,H as O,A as c,r as w,h as d,w as n,F as p,M as T,N as H,O as N,G as P,a as h,n as g,e as v,t as R,s as z,P as M,E as j}from"./index-d815b49d.js";/* empty css                   *//* empty css                  *//* empty css               */import{_ as V}from"./Uploader-a1f3e008.js";/* empty css                 */const W={props:{src:{type:String},height:{type:String,default:"100%"}},computed:{showMask(){return this.$slots.mask}}},X={key:0,class:"mask"};function $(t,s,a,f,i,u){const m=D;return l(),r("div",{class:"container",style:B({height:a.height})},[o(m,{src:a.src},null,8,["src"]),u.showMask?(l(),r("div",X,[F(t.$slots,"mask",{},void 0,!0)])):x("",!0)],4)}const G=b(W,[["render",$],["__scopeId","data-v-7ddf7ef8"]]);const J={setup(){O().commit("update_sider_openeds","DIABLO4_SOURCE_AFFIXES")},components:{Uploader:V},data(){return{uploaded_count:0,queryArgs:{keyword:"",notHasImages:void 0},showImage:!1,upload_url:c.diablo4.source.import_data,upload_file_url:c.file.upload,affixList:[],filterAffixList:[],picVisible:!1,picList:[],current_affix:void 0}},computed:{dialogTitle:function(){return this.current_affix!=null?this.current_affix.description:""}},mounted(){this.fetchAffixes()},methods:{fetchAffixes(){this.$request.get({url:c.diablo4.source.affixes,params:{showImage:this.showImage}}).then(t=>{this.affixList=t,this.$nextTick(()=>{this.filterAffix()})})},filterAffix(){this.filterAffixList=this.affixList.filter(t=>{let s=!0,a=!0;return this.queryArgs.keyword&&(s=t.description.includes(this.queryArgs.keyword)),this.queryArgs.notHasImages&&(a=!t.hasImages),s&&a})},showPicDialog(t){this.picVisible=!0,this.current_affix=t,this.fetchAffixImages()},fetchAffixImages(){this.$request.get({url:c.diablo4.source.affix_images,params:{idSno:this.current_affix.idSno}}).then(t=>{this.picList=t,this.current_affix!=null&&(this.current_affix.hasImages=this.picList.length>0,this.showImage&&(this.current_affix.images=this.picList))})},saveAffixImages(t,s,a){if(this.uploaded_count++,this.uploaded_count==a.length){let f=[];a.forEach(i=>{f.push(i.response.data.id)}),this.$request.post({url:c.diablo4.source.save_affix_images,data:{idSno:this.current_affix.idSno,fileIds:f.join(",")}}).then(()=>{this.uploaded_count=0,this.$refs.uploader.clearFiles(),this.fetchAffixImages()})}},delPic(t){this.$request.delete({loading:{fullscreen:!0,lock:!0},url:c.diablo4.source.del_affix_image,data:{id:t}}).then(()=>{this.fetchAffixImages()})}},watch:{queryArgs:{handler:"filterAffix",deep:!0},showImage:{handler:"fetchAffixes"}}},K={class:"header"},Q=["onClick"],Y={key:0,class:"picture-box"},Z={class:"picture-dialog"},ee={class:"picture-box"},te={class:"btn"};function se(t,s,a,f,i,u){const m=T,y=H,I=V,S=w("WarnTriangleFilled"),A=z,k=G,E=M,L=N,q=w("Delete"),C=j,U=P;return l(),r(p,null,[d("div",K,[o(m,{clearable:"",style:{width:"300px",height:"32px",marginRight:"12px"},modelValue:i.queryArgs.keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>i.queryArgs.keyword=e),placeholder:"词缀"},null,8,["modelValue"]),o(y,{modelValue:i.queryArgs.notHasImages,"onUpdate:modelValue":s[1]||(s[1]=e=>i.queryArgs.notHasImages=e),style:{marginRight:"12px"}},{default:n(()=>[h("未关联图像")]),_:1},8,["modelValue"]),o(y,{modelValue:i.showImage,"onUpdate:modelValue":s[2]||(s[2]=e=>i.showImage=e),style:{marginRight:"12px"}},{default:n(()=>[h("显示图像")]),_:1},8,["modelValue"]),o(I,{upload_url:i.upload_url,accept:".json",data:{type:"AFFIXES"},onOnSuccess:u.fetchAffixes},null,8,["upload_url","onOnSuccess"])]),o(L,{gutter:20},{default:n(()=>[(l(!0),r(p,null,g(i.filterAffixList,e=>(l(),v(E,{key:e.idSno,span:8,class:"pointer",style:{marginBottom:"8px"}},{default:n(()=>[d("div",{class:"grid-content",onClick:_=>u.showPicDialog(e)},[e.hasImages?x("",!0):(l(),v(A,{key:0,class:"text-red"},{default:n(()=>[o(S)]),_:1})),d("span",null,R(e.description),1)],8,Q),this.showImage?(l(),r("div",Y,[(l(!0),r(p,null,g(e.images,_=>(l(),r("div",{class:"pic",key:_.id},[o(k,{height:"40px",src:_.fileUrl},null,8,["src"])]))),128))])):x("",!0)]),_:2},1024))),128))]),_:1}),d("div",Z,[o(U,{modelValue:i.picVisible,"onUpdate:modelValue":s[3]||(s[3]=e=>i.picVisible=e),"z-index":2,width:"500",onClosed:s[4]||(s[4]=e=>this.current_affix=void 0),title:u.dialogTitle},{default:n(()=>[d("div",ee,[(l(!0),r(p,null,g(i.picList,e=>(l(),r("div",{class:"pic",key:e.id},[o(k,{height:"40px",src:e.fileUrl},{mask:n(()=>[o(A,{onClick:_=>u.delPic(e.id),class:"mask-icon"},{default:n(()=>[o(q)]),_:2},1032,["onClick"])]),_:2},1032,["src"])]))),128))]),d("div",te,[o(I,{ref:"uploader",upload_url:i.upload_file_url,accept:"image/*",multiple:!0,onOnSuccess:u.saveAffixImages},{default:n(()=>[o(C,{type:"primary"},{default:n(()=>[h("Upload")]),_:1})]),_:1},8,["upload_url","onOnSuccess"])])]),_:1},8,["modelValue","title"])])],64)}const ue=b(J,[["render",se],["__scopeId","data-v-af8273b9"]]);export{ue as default};
