webpackJsonp([22],{625:function(t,s,i){i(824);var n=i(7)(i(731),i(982),"data-v-151d5afe",null);t.exports=n.exports},703:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(3),e=i(5),a=i(625),l=i.n(a);n.default.use(e.a),new n.default({render:function(t){return t(l.a)}}).$mount("#container")},731:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(10),e=i.n(n),a=i(38),l=i.n(a),o=i(9),c=i.n(o),d=i(12);i.n(d);s.default={data:function(){return{isPopShow:!1,currentindex:0,id:"",reply:"",isbuy:!0,istrue:!0,num:1,total:"",info:{pinpai:"奔驰",chexing:"迈巴赫S级",jiage:"30-50万",yanse:"黑色",licheng:"十万公里",anjie:"否",beizhu:"需要性能好一些，舒适性，视野开阔",dengji:"o",shijian:"2021-07-28 12:02:01",xiaoshou:"杰尼龟",shangpai:"2020-06-01"},replayList:[]}},mounted:function(){var t=this;return c()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:0==t.currentindex?t.api.getWxBusinessBuyDetail(t.id).then(function(s){t.info=s,t.isbuy=!0;var i={w:[["business_id",t.info.id,"EQ"],["isbuy","1","EQ"]],o:["id","desc"],p:[1,10]};t.api.getWxCommunicate(t.query.toEncode(t.newqry(i))).then(function(s){t.replayList=[].concat(l()(t.replayList),l()(s.data.list)),t.total=s.page.total})}):1==t.currentindex&&t.api.getWxBusinessSellDetail(t.id).then(function(s){t.info=s,t.isbuy=!1;var i={w:[["business_id",t.info.id,"EQ"],["isbuy","0","EQ"]],o:["id","desc"],p:[1,10]};t.api.getWxCommunicate(t.query.toEncode(t.newqry(i))).then(function(s){t.replayList=[].concat(l()(t.replayList),l()(s.data.list)),t.total=s.page.total})}),window.addEventListener("scroll",t.menu);case 2:case"end":return s.stop()}},s,t)}))()},created:function(){this.currentindex=this.until.getQueryString("index"),this.id=this.until.getQueryString("id"),console.log(this.currentindex,this.id)},methods:{newqry:function(t){var s=this,i=this.query.new();return t.w.forEach(function(t){s.query.toW(i,t[0],t[1],t[2])}),this.query.toO(i,t.o[0],t.o[1]),this.query.toP(i,t.p[0],t.p[1]),i},menu:function(){var t=this;this.scroll=document.documentElement.scrollTop||document.body.scrollTop;var s=document.documentElement.scrollHeight-this.scroll-document.documentElement.clientHeight;if(1==this.istrue&&(console.log(1),s<100))if(console.log(2,this.currentindex,this.replayList.length<this.total),this.istrue=!1,0==this.currentindex&&this.replayList.length<this.total){console.log(3),this.num++;var i={w:[["business_id",this.info.id,"EQ"],["isbuy","1","EQ"]],o:["id","desc"],p:[this.num,10]};console.log(44545,i.p[0]),this.api.getWxCommunicate(this.query.toEncode(this.newqry(i))).then(function(s){t.replayList=[].concat(l()(t.replayList),l()(s.data.list)),t.istrue=!0})}else if(1==this.currentindex&&this.replayList.length<this.total){this.num++;var n={w:[["business_id",this.info.id,"EQ"],["isbuy","0","EQ"]],o:["id","desc"],p:[this.num,10]};this.api.getWxCommunicate(this.query.toEncode(this.newqry(n))).then(function(s){t.replayList=[].concat(l()(t.replayList),l()(s.data.list)),t.istrue=!0})}},back:function(){this.until.back()},popShow:function(){this.isPopShow=!0},cancel:function(){this.isPopShow=!1},submit:function(){var t={businessId:"",customerId:"",isbuy:"",content:""};t.content=this.reply,t.businessId=this.info.id,t.customerId=this.info.customerId,t.isbuy=this.isbuy,this.api.postWxCommunicate(t),this.isPopShow=!1}},computed:{isMortgage:function(){return 0==this.info.isMortgage?"否":1==this.info.isMortgage?"是":void 0}}}},824:function(t,s){},982:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"container"}},[1==t.isPopShow?n("div",{staticClass:"mask"}):t._e(),t._v(" "),1==t.isPopShow?n("div",{staticClass:"popBox"},[n("div",{staticClass:"title"},[t._v("\n\t\t\t回复\n\t\t")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reply,expression:"reply"}],attrs:{rows:"",cols:"",placeholder:"多行输入"},domProps:{value:t.reply},on:{input:function(s){s.target.composing||(t.reply=s.target.value)}}}),t._v(" "),n("div",{staticClass:"bOttom"},[n("div",{staticClass:"btn1",on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("div",{staticClass:"btn2",on:{click:t.submit}},[t._v("确认")])])]):t._e(),t._v(" "),n("div",{staticClass:"title"},[n("img",{attrs:{src:i(30)},on:{click:t.back}}),t._v("\n\t\t需求详情\n\t")]),t._v(" "),0==t.currentindex?n("div",{staticClass:"bodyList"},[n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t品牌\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.brand)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t车型\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.model)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t价格区间\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.minPrice)+"~"+t._s(t.info.maxPrice)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t车身颜色\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.color)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t里程数\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.mileage)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t是否按揭\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.isMortgage)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t备注\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.describes)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t意向等级\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.intentionLevel)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t发布时间\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.crtTm)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t销售人员\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.crtBy)+"\n\t\t\t")])])]):t._e(),t._v(" "),1==t.currentindex?n("div",{staticClass:"bodyList"},[n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t品牌车系\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.brandModel)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t里程数\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.mileage)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t上牌时间\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.licensingTime)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t备注\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.remarks)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t发布时间\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.crtTm)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t销售人员\n\t\t\t")]),t._v(" "),n("div",{staticClass:"listContent"},[t._v("\n\t\t\t\t"+t._s(t.info.saler)+"\n\t\t\t")])])]):t._e(),t._v(" "),n("div",{staticStyle:{"padding-bottom":"1.2rem"},attrs:{id:""}},t._l(t.replayList,function(s,i){return n("div",{key:i,staticClass:"reply"},[n("div",{staticClass:"replyCotent"},[t._v("\n\t\t\t\t"+t._s(s.content)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"replyCotent"},[t._v("\n\t\t\t\t回复时间: "+t._s(s.crtTm)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"replyCotent"},[t._v("\n\t\t\t\t回复人: "+t._s(s.crtBy)+"\n\t\t\t")])])}),0),t._v(" "),n("div",{staticClass:"btn"},[n("button",{attrs:{type:"button"},on:{click:t.popShow}},[t._v("回复")])])])},staticRenderFns:[]}}},[703]);