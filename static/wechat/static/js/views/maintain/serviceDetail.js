webpackJsonp([6],{1007:function(e,t,n){n(841);var i=n(7)(n(713),n(996),null,null);e.exports=i.exports},106:function(e,t,n){e.exports={default:n(111),__esModule:!0}},107:function(e,t,n){e.exports={default:n(112),__esModule:!0}},110:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(106),s=i(r),a=n(37),o=i(a);t.default=function(){function e(e,t){var n=[],i=!0,r=!1,s=void 0;try{for(var a,c=(0,o.default)(e);!(i=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(r)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,s.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},111:function(e,t,n){n(77),n(68),e.exports=n(127)},112:function(e,t,n){n(128),e.exports=n(15).Object.entries},127:function(e,t,n){var i=n(87),r=n(24)("iterator"),s=n(57);e.exports=n(15).isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||s.hasOwnProperty(i(t))}},128:function(e,t,n){var i=n(33),r=n(118)(!0);i(i.S,"Object",{entries:function(e){return r(e)}})},626:function(e,t,n){n(828);var i=n(7)(n(731),n(985),"data-v-41c03dc7",null);e.exports=i.exports},703:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(5),s=n(626),a=n.n(s);i.default.use(r.a),new i.default({render:function(e){return e(a.a)}}).$mount("#container")},713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(23),r=n.n(i),s=n(10),a=n.n(s),o=n(107),c=n.n(o),u=n(37),l=n.n(u),p=n(110),v=n.n(p),f=n(9),m=n.n(f),d=n(11);n.n(d);t.default={data:function(){return{compNm:"",menu:[],list:[]}},mounted:function(){this.getList()},components:{},computed:{},methods:{getList:function(){var e=this;return m()(a.a.mark(function t(){var n,i,r,s,o,u,p,f,m,d,h,_,g,I;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.list=[],n={A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]},e.menu=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],t.next=5,e.api.classify();case 5:for(i=t.sent,r=0;r<e.menu.length;r++)for(s=0;s<i.length;s++)e.PY.getCamelChars(i[s].name)[0]==e.menu[r]&&n[e.menu[r]].push(i[s]);for(o=!0,u=!1,p=void 0,t.prev=10,f=l()(c()(n));!(o=(m=f.next()).done);o=!0)d=m.value,h=v()(d,2),_=h[0],g=h[1],0==g.length?(I=e.menu.indexOf(_))>-1&&e.menu.splice(I,1):e.list.push(g);t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,p=t.t0;case 18:t.prev=18,t.prev=19,!o&&f.return&&f.return();case 21:if(t.prev=21,!u){t.next=24;break}throw p;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}},t,e,[[10,14,18,26],[19,,21,25]])}))()},choose:function(e){console.log("choose"),console.log(e),this.$emit("choose",r()(e))},toClose:function(){console.log("关闭"),this.$emit("close")}}}},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(23),r=n.n(i),s=n(108),a=n.n(s),o=n(10),c=n.n(o),u=n(9),l=n.n(u),p=n(53),v=n.n(p),f=n(37),m=n.n(f),d=n(1007),h=n.n(d),_=n(11);n.n(_);t.default={data:function(){return{imgMax:10,staffList:[],role:0,staffId:"",dispatchShow:!1,bigImgShow:!1,typeSHow:!1,currentImg:"",typeList:[{values:[]}],currentIndex:-1,prepareCurrent:{},prepareList:[{cost:"",price:"",garage:"",rmks:"",prepareId:"",prepareName:""}],id:"",info:{},outImg:[],inImg:[],form:{curMileage:"",vehicleOutRemark:"",vehicleOutAttach:"",vehicleInRemark:"",vehicleInAttach:"",rmks:"",worksheetItemDtos:[]}}},components:{classifyIndex:h.a},created:function(){},mounted:function(){this.id=this.until.getQueryString("id"),this.userInfo=JSON.parse(this.until.loGet("userInfo"));var e=!0,t=!1,n=void 0;try{for(var i,r=m()(v()(this.userInfo.userDepartRole));!(e=(i=r.next()).done);e=!0){var s=i.value;this.role=s}}catch(e){t=!0,n=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}this.getInfo(),this.getClassify(),this.getStaffList()},methods:{getStaffList:function(){var e=this;return l()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.staffList();case 2:e.staffList=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},dispatchConfirm:function(){var e=this,t={worksheetId:this.id,serverId:this.staffId,rmks:this.rmks};this.api.serviceUpd(t).then(function(){n.i(_.Toast)("指派成功！"),setTimeout(function(){e.until.back()},1500)})},dispatch:function(){this.dispatchShow=!0},bigImg:function(e){this.currentImg=e,this.bigImgShow=!0},typeConfirm:function(e){this.prepareCurrent=JSON.parse(e),console.log(this.prepareCurrent),this.prepareList[this.currentIndex].prepareId=this.prepareCurrent.id,this.prepareList[this.currentIndex].prepareName=this.prepareCurrent.name,console.log(this.currentIndex),console.log(this.prepareList),this.typeSHow=!1},cancel:function(){this.typeSHow=!1},toChoose:function(e){this.currentIndex=e,this.typeSHow=!0},typeChange:function(e,t){this.prepareCurrent=t[0]},getClassify:function(){var e=this;return l()(c.a.mark(function t(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},getInfo:function(){var e=this;return l()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.serviceDetail(e.id);case 2:n=t.sent,e.info=n.worksheetVo,e.info.assignTime=e.info.assignTime?e.info.assignTime.split(" ")[0]:"",console.log(e.info),e.form.rmks=e.info.rmks,e.form.vehicleOutRemark=e.info.vehicleOutRemark,e.form.vehicleInRemark=e.info.vehicleInRemark,e.form.curMileage=e.info.curMileage,e.inImg=e.info.vehicleInAttach?e.info.vehicleInAttach.split(","):[],e.outImg=e.info.vehicleOutAttach?e.info.vehicleOutAttach.split(","):[],n.worksheetItemDtos.length>0&&(e.prepareList=[],n.worksheetItemDtos.forEach(function(t){e.prepareList.push(t.worksheetItemVo)}));case 13:case"end":return t.stop()}},t,e)}))()},upImg:function(e,t){var i=this;return l()(c.a.mark(function r(){var s,o,u;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(e),s=e.target.files,a()(s).forEach(function(e){/^image/.test(s[e].type)||delete s[e]}),!(s.length<1)){r.next=6;break}return n.i(_.Toast)("请选择图片文件"),r.abrupt("return");case 6:if(!(s.length>10||"out"==t&&s.length+i.outImg.length>10||"in"==t&&s.length+i.inImg.length>10)){r.next=9;break}return n.i(_.Toast)("最多只能上传10张图片"),r.abrupt("return");case 9:o=0;case 10:if(!(o<s.length)){r.next=23;break}if(!(s[o].size>1048576)){r.next=15;break}!function(){console.log("图片太大了"),console.log(s[o]);var e=i;e.lrz(s[o]).then(function(t){return e.api.upImg3(t.formData)}).then(function(n){console.log("上传成功"),console.log(n);var i=n;"out"==t&&e.outImg.push(i),"in"==t&&e.inImg.push(i)})}(),r.next=20;break;case 15:return r.next=17,i.api.upImg2(s[o]);case 17:u=r.sent,"out"==t&&i.outImg.push(u),"in"==t&&i.inImg.push(u);case 20:o++,r.next=10;break;case 23:case"end":return r.stop()}},r,i)}))()},toDele:function(e,t){"out"==t&&this.outImg.splice(e,1),"in"==t&&this.inImg.splice(e,1)},addPrepare:function(){var e={cost:"",price:"",rmks:"",prepareName:"",prepareId:""};this.prepareList.push(e)},delePrepare:function(e){this.prepareList.splice(e)},toSave:function(e){if(this.form.id=this.id,this.form.vehicleOutAttach=this.outImg.join(","),this.form.vehicleInAttach=this.inImg.join(","),this.form.worksheetItemList=r()(this.prepareList),"submit"===e){if(this.form.status=3,""==this.form.curMileage)return void n.i(_.Toast)("当前公里数不能为空！");if(0==this.prepareList.length)return void n.i(_.Toast)("整备项至少填一项！");if(this.prepareList.findIndex(function(e){return""===e.cost||""===e.price||""===e.prepareId||""===e.prepareName})>-1)return void n.i(_.Toast)("整备项除备注外其他项不能为空！")}this.api.serviceFinish(this.form),console.log("提交")}}}},828:function(e,t){},841:function(e,t){},985:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}},[e.dispatchShow?n("div",{staticClass:"dispatch"},[n("div",{staticClass:"main"},[n("div",{staticClass:"top"},[e._v("\n                派单\n            ")]),e._v(" "),n("div",{staticClass:"content"},[n("div",[n("p",[e._v("指派工作人员：")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.staffId,expression:"staffId"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.staffId=t.target.multiple?n:n[0]}}},[e._l(e.staffList,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.arg7))])}),e._v(" "),n("span",{staticClass:"iconfont"},[e._v("")])],2)]),e._v(" "),n("div",[n("p",[e._v("备注：")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rmks,expression:"rmks"}],domProps:{value:e.rmks},on:{input:function(t){t.target.composing||(e.rmks=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"footer"},[n("p",{on:{click:function(t){e.dispatchShow=!1}}},[e._v("取消")]),e._v(" "),n("p",{on:{click:e.dispatchConfirm}},[e._v("确定")])])])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.bigImgShow,expression:"bigImgShow"}],staticClass:"bigImg"},[n("span",{staticClass:"iconfont",on:{click:function(t){e.bigImgShow=!1}}},[e._v("")]),e._v(" "),n("img",{attrs:{src:e.currentImg}})]),e._v(" "),e.typeSHow?n("classify-index",{on:{choose:e.typeConfirm,close:e.cancel}}):e._e(),e._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"info"},[n("p",[n("span",[e._v("行驶证名：")]),e._v(e._s(e.info.drivingLicenseName)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("联系电话：")]),e._v(e._s(e.info.linkManPhone)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("联系人：")]),e._v(e._s(e.info.linkMan)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("品牌型号：")]),e._v(e._s(e.info.brandModel)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("车架号：")]),e._v(e._s(e.info.vin)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("公里数（万）：")]),e._v(e._s(e.info.mileage)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("车牌号：")]),e._v(e._s(e.info.vehicleNum)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("对接人：")]),e._v(e._s(e.info.caller)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("对接人电话：")]),e._v(e._s(e.info.callerPhone)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("所属销售：")]),e._v(e._s(e.info.salerName)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("ERP：")]),e._v(e._s(e.info.erp)+"\n            ")]),e._v(" "),n("p",[n("span",[e._v("派单时间：")]),e._v(e._s(e.info.assignTime)+"\n            ")])]),e._v(" "),n("div",{staticClass:"situation"},[n("p",[n("span",[e._v("维保项目：")]),e._v(e._s(e.info.project))])]),e._v(" "),n("div",{staticClass:"situation"},[n("p",[n("i",[e._v("*")]),n("span",[e._v("当前公里数（万）：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.curMileage,expression:"form.curMileage"}],attrs:{type:"number"},domProps:{value:e.form.curMileage},on:{input:function(t){t.target.composing||e.$set(e.form,"curMileage",t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"situation"},[e._m(0),e._v(" "),n("div",{staticClass:"content"},[n("p",[n("span",[e._v("车辆外观：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vehicleOutRemark,expression:"form.vehicleOutRemark"}],attrs:{type:"text",placeholder:"请输入车辆外观描述"},domProps:{value:e.form.vehicleOutRemark},on:{input:function(t){t.target.composing||e.$set(e.form,"vehicleOutRemark",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"upImg"},[n("span",[e._v("上传图片：")]),e._v(" "),n("div",{staticClass:"imgList"},[e._l(e.outImg,function(t,i){return e.outImg.length>0?n("p",{key:i,staticClass:"img"},[n("span",{staticClass:"iconfont",on:{click:function(t){return e.toDele(i,"out")}}},[e._v("")]),e._v(" "),n("img",{attrs:{src:t},on:{click:function(n){return e.bigImg(t)}}})]):e._e()}),e._v(" "),n("p",[n("input",{ref:"upload",attrs:{type:"file",name:"file",multiple:"multiple"},on:{change:function(t){return e.upImg(t,"out")}}}),e._v("\n                            +")])],2)])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[n("span",[e._v("车辆内部：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.vehicleInRemark,expression:"form.vehicleInRemark"}],attrs:{type:"text",placeholder:"请输入车辆内部描述"},domProps:{value:e.form.vehicleInRemark},on:{input:function(t){t.target.composing||e.$set(e.form,"vehicleInRemark",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"upImg"},[n("span",[e._v("上传图片：")]),e._v(" "),n("div",{staticClass:"imgList"},[e._l(e.inImg,function(t,i){return e.inImg.length>0?n("p",{staticClass:"img"},[n("span",{staticClass:"iconfont",on:{click:function(t){return e.toDele(i,"in")}}},[e._v("")]),e._v(" "),n("img",{attrs:{src:t},on:{click:function(n){return e.bigImg(t)}}})]):e._e()}),e._v(" "),n("p",[n("input",{ref:"upload",attrs:{type:"file",name:"file",multiple:"multiple"},on:{change:function(t){return e.upImg(t,"in")}}}),e._v("+")])],2)])]),e._v(" "),n("div",{staticClass:"content"},[n("p",[n("span",[e._v("备注信息：")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.rmks,expression:"form.rmks"}],domProps:{value:e.form.rmks},on:{input:function(t){t.target.composing||e.$set(e.form,"rmks",t.target.value)}}})]),e._v(" "),n("p",{staticClass:"red"},[e._v("*贵重物品已提醒客户带走")])])]),e._v(" "),e._l(e.prepareList,function(t,i){return n("div",{staticClass:"situation situation2"},[i>0?n("span",{staticClass:"iconfont",on:{click:function(t){return e.delePrepare(i)}}},[e._v("")]):e._e(),e._v(" "),e._m(1,!0),e._v(" "),n("div",{staticClass:"content"},[n("p",[n("i",[e._v("*")]),n("span",[e._v("整备分类：")]),e._v(" "),n("button",{on:{click:function(t){return e.toChoose(i)}}},[e._v(e._s(t.prepareName?t.prepareName:"请选择整备分类"))]),e._v(" "),n("span",{staticClass:"iconfont"},[e._v("")])]),e._v(" "),n("p",[n("span",[e._v("整备明细：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rmks,expression:"item.rmks"}],attrs:{type:"text"},domProps:{value:t.rmks},on:{input:function(n){n.target.composing||e.$set(t,"rmks",n.target.value)}}})]),e._v(" "),n("p",[n("span",[e._v("修理厂：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.garage,expression:"item.garage"}],attrs:{type:"text"},domProps:{value:t.garage},on:{input:function(n){n.target.composing||e.$set(t,"garage",n.target.value)}}})]),e._v(" "),n("p",[n("i",[e._v("*")]),n("span",[e._v("金额（成本）：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"item.cost"}],attrs:{type:"number"},domProps:{value:t.cost},on:{input:function(n){n.target.composing||e.$set(t,"cost",n.target.value)}}})]),e._v(" "),n("p",[n("i",[e._v("*")]),n("span",[e._v("金额（销售）：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price"}],attrs:{type:"number"},domProps:{value:t.price},on:{input:function(n){n.target.composing||e.$set(t,"price",n.target.value)}}})])])])}),e._v(" "),n("button",{staticClass:"add",on:{click:e.addPrepare}},[e._v("添加整备项")])],2),e._v(" "),n("div",{staticClass:"btn"},[1==e.role?n("button",{on:{click:e.dispatch}},[e._v("派单")]):e._e(),e._v(" "),3!=e.info.status?n("button",{on:{click:e.toSave}},[e._v("保存")]):e._e(),e._v(" "),n("button",{on:{click:function(t){return e.toSave("submit")}}},[e._v("完成")])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("span"),e._v("车辆情况")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("span"),e._v("整备项")])}]}},996:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"classifyIndex"},[n("div",{staticClass:"title"},[e._v("\n        整备分类\n        "),n("p",{on:{click:e.toClose}},[e._v("关闭")])]),e._v(" "),n("div",{staticClass:"main"},[n("mt-index-list",e._l(e.list,function(t,i){return n("mt-index-section",{key:i,attrs:{index:e.menu[i]}},e._l(t,function(t,i){return n("mt-cell",{key:i},[n("p",{staticClass:"classifyList",on:{click:function(n){return e.choose(t)}}},[e._v(e._s(t.name))])])}),1)}),1)],1)])},staticRenderFns:[]}}},[703]);