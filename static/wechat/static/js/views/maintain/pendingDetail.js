webpackJsonp([23],{623:function(t,n,e){e(844);var i=e(7)(e(729),e(998),"data-v-78054d29",null);t.exports=i.exports},701:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(3),s=e(5),a=e(623),r=e.n(a);i.default.use(s.a),new i.default({render:function(t){return t(r.a)}}).$mount("#container")},729:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(10),s=e.n(i),a=e(9),r=e.n(a),o=e(65),c=e.n(o),v=e(37),u=e.n(v),l=e(12);e.n(l);n.default={data:function(){return{staffId:"",rmks:"",info:{},receiptShow:!1,dispatchShow:!1,dispatchChooseSHow:!1,staffList:[],role:0,userInfo:{attrMap:null,avatar:null,customerId:null,customerName:null,mob:"18666666666",nickname:null,openId:null,roles:null,sysUserOrgList:null,tntId:null,unionId:null,userDepartRole:{10000.4:1},userId:4534078142125056,username:"18666666666"}}},components:{},created:function(){},mounted:function(){this.id=this.until.getQueryString("id"),this.userInfo=JSON.parse(this.until.loGet("userInfo")),console.log(this.userInfo);var t=!0,n=!1,e=void 0;try{for(var i,s=u()(c()(this.userInfo.userDepartRole));!(t=(i=s.next()).done);t=!0){var a=i.value;this.role=a}}catch(t){n=!0,e=t}finally{try{!t&&s.return&&s.return()}finally{if(n)throw e}}this.getInfo(),this.getStaffList()},methods:{toPage:function(){var t="@/maintain/carDetail.html?id="+this.info.vehicleId;this.until.href(t)},getStaffList:function(){var t=this;return r()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.api.staffList();case 2:t.staffList=n.sent;case 3:case"end":return n.stop()}},n,t)}))()},getInfo:function(){var t=this;return r()(s.a.mark(function n(){var e;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.api.serviceDetail(t.id);case 2:e=n.sent,t.info=e.worksheetVo,t.info.assignTime=t.info.assignTime?t.info.assignTime.split(" ")[0]:"";case 5:case"end":return n.stop()}},n,t)}))()},dispatchConfirm:function(){var t=this,n={worksheetId:this.id,serverId:this.staffId,rmks:this.rmks};this.api.serviceUpd(n).then(function(){e.i(l.Toast)("指派成功！"),setTimeout(function(){t.until.back()},1500)})},dispatch:function(){this.dispatchShow=!0},receipt:function(){var t=this;console.log("receipt");var n={servierId:this.userInfo.userId,status:2,id:this.id};this.api.serviceApply(n).then(function(n){t.receiptShow=!0,setTimeout(function(){t.until.href("@/maintain/index.html?cd=3&serviceCd=2")},1500)})}}}},844:function(t,n){},998:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"container"}},[t.dispatchShow?e("div",{staticClass:"dispatch"},[e("div",{staticClass:"main"},[e("div",{staticClass:"top"},[t._v("\n                派单\n            ")]),t._v(" "),e("div",{staticClass:"content"},[e("div",[e("p",[t._v("指派工作人员：")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.staffId,expression:"staffId"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.staffId=n.target.multiple?e:e[0]}}},[t._l(t.staffList,function(n){return e("option",{key:n.id,domProps:{value:n.id}},[t._v(t._s(n.arg7))])}),t._v(" "),e("span",{staticClass:"iconfont"},[t._v("")])],2)]),t._v(" "),e("div",[e("p",[t._v("备注：")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rmks,expression:"rmks"}],domProps:{value:t.rmks},on:{input:function(n){n.target.composing||(t.rmks=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"footer"},[e("p",{on:{click:function(n){t.dispatchShow=!1}}},[t._v("取消")]),t._v(" "),e("p",{on:{click:t.dispatchConfirm}},[t._v("确定")])])])]):t._e(),t._v(" "),t.receiptShow?e("div",{staticClass:"receiptSuccess"},[t._m(0)]):t._e(),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"info"},[e("p",[e("span",[t._v("行驶证名：")]),t._v(t._s(t.info.drivingLicenseName)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("联系电话：")]),t._v(t._s(t.info.linkManPhone)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("联系人：")]),t._v(t._s(t.info.linkMan)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("品牌型号：")]),t._v(t._s(t.info.brandModel)+"\n            ")]),t._v(" "),e("p",{on:{click:function(n){return t.toPage()}}},[e("span",[t._v("车架号：")]),t._v(t._s(t.info.vin)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("公里数（万）：")]),t._v(t._s(t.info.mileage)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("车牌号：")]),t._v(t._s(t.info.vehicleNum)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("对接人：")]),t._v(t._s(t.info.caller)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("对接人电话：")]),t._v(t._s(t.info.callerPhone)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("所属销售：")]),t._v(t._s(t.info.salerName)+"\n            ")]),t._v(" "),e("p",[e("span",[t._v("ERP：")]),t._v(t._s(t.info.erp)+"\n            ")]),t._v(" "),t.info.assignTime?e("p",[e("span",[t._v("派单时间：")]),t._v(t._s(t.info.assignTime)+"\n            ")]):t._e(),t._v(" "),e("p",[e("span",[t._v("备注：")]),t._v(t._s(t.info.rmks)+"\n            ")])]),t._v(" "),e("div",{staticClass:"situation"},[e("p",[e("span",[t._v("维保项目：")]),t._v(t._s(t.info.project))])])]),t._v(" "),1==t.role?e("div",{staticClass:"btn"},[e("button",{on:{click:t.dispatch}},[t._v("派单")]),t._v(" "),e("button",{on:{click:t.receipt}},[t._v("接单")])]):t._e(),t._v(" "),0==t.role?e("div",{staticClass:"btn"},[e("button",{on:{click:t.receipt}},[t._v("接单")])]):t._e()])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"receiptMain"},[e("span",{staticClass:"iconfont"},[t._v("")]),t._v("\n            接单成功！\n        ")])}]}}},[701]);