webpackJsonp([11],{1002:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"main"},[n("div",{staticClass:"status"},[t._v("\n            车辆信息\n        ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",[n("p",[n("span",[t._v("品牌型号：")]),t._v(t._s(t.info.brandModel)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("车牌号码：")]),t._v(t._s(t.info.vehicleNum)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("车架号码：")]),t._v(t._s(t.info.vin)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("发动机号：")]),t._v(t._s(t.info.engineNum)+"\n                ")])]),t._v(" "),n("div",[n("p",[n("span",[t._v("上牌日期：")]),t._v(t._s(t.info.licenseTime)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("年检 ：")]),t._v(t._s(t.info.annualInspectTime)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("成交价（万）：")]),t._v(t._s(t.info.finalPrice)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("公里数（万）：")]),t._v(t._s(t.info.mileage)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("整备人：")]),t._v(t._s(t.info.prepareReponsibleMan)+"\n                ")])]),t._v(" "),n("div",[n("p",[n("span",[t._v("排量：")]),t._v(t._s(t.info.displacement)+"\n                ")]),t._v(" "),n("p",[n("span",[t._v("颜色：")]),t._v(t._s(t.info.vehicleColor)+"\n                ")])])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(0),t._v(" "),n("div",{staticClass:"information"},[n("p",[n("span",[t._v("交强险公司：")]),t._v(t._s(t.info.compulsoryInsuranceUnit))]),t._v(" "),n("p",[n("span",[t._v("保险期间：  ")]),t._v(t._s(t.info.compulsoryInsuranceTimeUp)+" 至 "+t._s(t.info.compulsoryInsuranceTimeTo))]),t._v(" "),n("p",[n("span",[t._v("商业险公司： ")]),t._v(t._s(t.info.commercialInsuranceUnit))]),t._v(" "),n("p",[n("span",[t._v("保险期间： ")]),t._v(t._s(t.info.commercialInsuranceTimeUp)+" 至 "+t._s(t.info.commercialInsuranceTimeTo))])])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(1),t._v(" "),n("div",{staticClass:"information"},[n("p",[n("span",[t._v("按揭公司：")]),t._v(t._s(t.info.mortgageUnit))]),t._v(" "),n("p",[n("span",[t._v("业务员：")]),t._v(t._s(t.info.mortageSaler))]),t._v(" "),n("p",[n("span",[t._v("联系方式：")]),t._v(t._s(t.info.mortageSalerPhone))]),t._v(" "),n("p",[n("span",[t._v("按揭年限：")]),t._v(t._s(t.info.mortageYears))]),t._v(" "),n("p",[n("span",[t._v("押金：")]),t._v(t._s(t.info.mortageDeposit))]),t._v(" "),n("p",[n("span",[t._v("贷款金额：")]),t._v(t._s(t.info.loanAmount))])])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(2),t._v(" "),n("div",{staticClass:"information"},[n("p",[n("span",[t._v("最新保养时间：")]),t._v(" "+t._s(t.info.recentMaintainDate))]),t._v(" "),n("p",[n("span",[t._v("下次保养时间：  ")]),t._v(t._s(t.info.nextMaintainDate)+" ")])])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(3),t._v(" "),n("div",{staticClass:"information"},[n("p",[n("span",[t._v("最新年检时间：")]),t._v(" "+t._s(t.info.recentInspectDate))]),t._v(" "),n("p",[n("span",[t._v("下次年检时间：  ")]),t._v(t._s(t.info.nextInspectDate))])])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(4),t._v(" "),n("p",[t._v(t._s(t.info.specialGift?t.info.specialGift:"暂无"))])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(5),t._v(" "),n("p",[t._v(t._s(t.info.rmks?t.info.rmks:"暂无"))])]),t._v(" "),n("div",{staticClass:"situation"},[t._m(6),t._v(" "),t._l(t.serviceRecords,function(e){return n("div",{key:e.id,staticClass:"serviceList",on:{click:function(n){return t.toDetail(e.worksheetId)}}},[n("div",{staticClass:"content"},[1==e.type?n("p",[n("span",[t._v("服务项目：")]),t._v("年检服务")]):t._e(),t._v(" "),2==e.type?n("p",[n("span",[t._v("服务项目：")]),t._v("续保服务")]):t._e(),t._v(" "),3==e.type?n("p",[n("span",[t._v("服务项目：")]),t._v("精洗服务")]):t._e(),t._v(" "),4==e.type?n("p",[n("span",[t._v("服务项目：")]),t._v("保养服务")]):t._e(),t._v(" "),n("p",[n("span",[t._v("服务时间：")]),t._v(t._s(e.serviceTime))])]),t._v(" "),n("span",{staticClass:"iconfont"},[t._v("")])])})],2),t._v(" "),t.followList.length>0?n("div",{staticClass:"situation"},[t._m(7),t._v(" "),n("follow-list",{ref:"follow"})],1):t._e()]),t._v(" "),n("button",{on:{click:t.toPage}},[t._v("新建跟进记录")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("保险信息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("按揭信息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("保养信息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("年检信息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("特殊赠送")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("备注信息")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("服务项目")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span"),t._v("跟进记录")])}]}},102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),i=n.n(s),a=n(12);n.n(a);e.default={data:function(){return{lable:"",myList:[],date:void 0,nextFollowDate:void 0,index:-1,current:{followWayValue:"",followWayLabel:""},followWay:"",typeSHow:!1,edit:!1,currentInfo:{},typeList:[{values:[{value:"1",lable:"电话拜访"},{value:"2",lable:"上门拜访"},{value:"3",lable:"其他"}],value:{value:"2",lable:"上门拜访"},defaultIndex:1}]}},components:{},created:function(){},mounted:function(){var t=new Date;this.date=new Date(t.getFullYear()-1+t.getMonth()+t.getDate())},methods:{getList:function(t){console.log("子组件"),this.myList=JSON.parse(t)},toEdit:function(t,e){console.log("去编辑"),console.log(t),this.edit=!0,this.index=e,this.current.followWayValue=t.followWay,1==this.current.followWayValue?this.current.followWayLabel="电话拜访":2==this.current.followWayValue?this.current.followWayLabel="上门拜访":3==this.current.followWayValue?this.current.followWayLabel="其他":this.current.followWayLabel="",this.current.followWayValue?this.typeList[0].defaultIndex=parseInt(this.current.followWayValue)-1:this.typeList[0].defaultIndex=0,this.typeList[0].value.value=this.typeList[0].values[this.typeList[0].defaultIndex].value,this.typeList[0].value.lable=this.typeList[0].values[this.typeList[0].defaultIndex].lable,this.currentInfo=JSON.parse(i()(t)),console.log(this.currentInfo),this.nextFollowDate=new Date(this.currentInfo.nextFollowDate)},typeChange:function(t,e){console.log(e),this.current.followWayValue=e[0].value,this.current.followWayLabel=e[0].lable},save:function(){var t=this,e=this.currentInfo;this.api.followUpd(e).then(function(e){0===e.code&&(t.$set(t.myList,t.index,t.currentInfo),n.i(a.Toast)("操作成功！"),t.edit=!1)})},cancel:function(){this.typeSHow=!1},typeConfirm:function(){this.currentInfo.followWay=this.current.followWayValue,this.typeSHow=!1},chooseTime:function(){this.$refs.picker.open()},handleConfirm:function(t){console.log(t);var e=this.until.formatDate(t);this.currentInfo.nextFollowDate=e.year+"-"+e.month+"-"+e.day}}}},362:function(t,e){},393:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("mt-datetime-picker",{ref:"picker",attrs:{startDate:t.date,type:"date"},on:{confirm:t.handleConfirm},model:{value:t.nextFollowDate,callback:function(e){t.nextFollowDate=e},expression:"nextFollowDate"}}),t._v(" "),t.typeSHow?n("div",{staticClass:"typeList"},[n("div",{staticClass:"top"},[n("p",{on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("p",{on:{click:t.typeConfirm}},[t._v("确定")])]),t._v(" "),n("mt-picker",{attrs:{slots:t.typeList,valueKey:"lable"},on:{change:t.typeChange}})],1):t._e(),t._v(" "),t.edit?n("div",{staticClass:"edit"},[n("div",{staticClass:"editMain"},[n("div",{staticClass:"input"},[n("p",[t._v("跟进方式：")]),t._v(" "),n("button",{on:{click:function(e){t.typeSHow=!0}}},[t._v(t._s(t.current.followWayLabel?t.current.followWayLabel:"请选择跟进方式")),n("span",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{staticClass:"input"},[n("p",[t._v("跟进内容：")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentInfo.followContent,expression:"currentInfo.followContent"}],attrs:{type:"text"},domProps:{value:t.currentInfo.followContent},on:{input:function(e){e.target.composing||t.$set(t.currentInfo,"followContent",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"input"},[n("p",[t._v("下次跟进时间：")]),t._v(" "),n("button",{on:{click:t.chooseTime}},[t._v(t._s(t.currentInfo.nextFollowDate?t.currentInfo.nextFollowDate:"跟进时间")),n("span",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),n("div",{staticClass:"input"},[n("p",[t._v("备注：")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentInfo.rmks,expression:"currentInfo.rmks"}],attrs:{type:"text"},domProps:{value:t.currentInfo.rmks},on:{input:function(e){e.target.composing||t.$set(t.currentInfo,"rmks",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"button"},[n("p",{on:{click:function(e){t.edit=!1}}},[t._v("取消")]),t._v(" "),n("p",{on:{click:t.save}},[t._v("保存")])])])]):t._e(),t._v(" "),t._l(t.myList,function(e,s){return n("div",{key:s,staticClass:"followList"},[n("span",{staticClass:"iconfont",on:{click:function(n){return t.toEdit(e,s)}}},[t._v("")]),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v("跟进方式：")]),t._v(" "),1==e.followWay?n("p",[t._v("电话拜访")]):t._e(),t._v(" "),2==e.followWay?n("p",[t._v("上门拜访")]):t._e(),t._v(" "),3==e.followWay?n("p",[t._v("其他")]):t._e()]),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v("跟进内容：")]),n("p",[t._v(t._s(e.followContent))])]),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v("下次跟进时间：")]),t._v(" "),n("p",[t._v(t._s(e.nextFollowDate))])]),t._v(" "),n("div",{staticClass:"content"},[n("span",[t._v("备注：")]),n("p",[t._v(t._s(e.rmks))])])])})],2)},staticRenderFns:[]}},396:function(t,e,n){n(362);var s=n(7)(n(102),n(393),"data-v-3b98edb7",null);t.exports=s.exports},614:function(t,e,n){n(848);var s=n(7)(n(720),n(1002),"data-v-c40d4fb4",null);t.exports=s.exports},692:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n(5),a=n(614),o=n.n(a);s.default.use(i.a),new s.default({render:function(t){return t(o.a)}}).$mount("#container")},720:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(23),i=n.n(s),a=n(10),o=n.n(a),l=n(9),r=n.n(l),c=n(396),v=n.n(c);e.default={data:function(){return{id:"",info:{},serviceRecords:[],followList:[{}]}},components:{followList:v.a},created:function(){},mounted:function(){this.id=this.until.getQueryString("id"),this.getInfo()},methods:{toDetail:function(t){this.until.href("@/maintain/finished.html?id="+t)},getInfo:function(){var t=this;return r()(o.a.mark(function e(){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.api.carDetail(t.id);case 2:n=e.sent,t.info=n.vehicleCustomerVo,t.serviceRecords=n.serviceRecords.maintenanceInfoVoList,t.serviceRecords.forEach(function(t){t.serviceTime=t.serviceTime?t.serviceTime.split(" ")[0]:""}),t.getFollow();case 7:case"end":return e.stop()}},e,t)}))()},getFollow:function(){var t=this;return r()(o.a.mark(function e(){var n,s,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={vehicleId:t.info.vehicleId,customerId:t.info.customerId},e.next=3,t.api.getFollowId(n);case 3:if(!(s=e.sent)){e.next=13;break}return e.next=7,t.api.followDetail(s);case 7:a=e.sent,t.followList=a.followItemVoList,t.followList.forEach(function(t){t.nextFollowDate=t.nextFollowDate?t.nextFollowDate.split(" ")[0]:""}),t.$refs.follow.getList(i()(t.followList)),e.next=14;break;case 13:t.followList=[];case 14:case"end":return e.stop()}},e,t)}))()},toPage:function(){var t="@/maintain/creat.html?carInfo="+i()(this.info);this.until.href(t)}}}},848:function(t,e){}},[692]);