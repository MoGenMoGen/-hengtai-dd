webpackJsonp([16],{635:function(t,e,s){s(821),s(822);var n=s(7)(s(740),s(980),"data-v-100c802f",null);t.exports=n.exports},712:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s(5),i=s(21),o=s.n(i),l=s(22),r=(s.n(l),s(635)),c=s.n(r);n.default.use(a.a),n.default.use(o.a),new n.default({render:function(t){return t(c.a)}}).$mount("#container")},740:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(10),a=s.n(n),i=s(9),o=s.n(i);e.default={data:function(){return{value:"",name:"",phone:"",wxId:"",customerType:"",demand:"",nature:"",saler:"",info:{},options:[]}},components:{},mounted:function(){var t=this;return o()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s={w:[["category",2,"EQ"]],o:["id","esc"],p:[1,10]},t.api.getCustomerCommonfield(t.query.toEncode(t.newqry(s))).then(function(e){console.log(121312,e),t.options=e});case 2:case"end":return e.stop()}},e,t)}))()},methods:{newqry:function(t){var e=this,s=this.query.new();return t.w.forEach(function(t){e.query.toW(s,t[0],t[1],t[2])}),this.query.toO(s,t.o[0],t.o[1]),this.query.toP(s,t.p[0],t.p[1]),s},back:function(){this.until.back()},postId:function(t){this.nature=t},confirm:function(){this.info.name=this.name,this.info.phone=this.phone,this.info.wxId=this.wxId,this.info.customerType=this.customerType,this.info.demand=this.demand,this.info.nature=this.nature,this.info.saler=this.saler,this.api.postWxCheckin(this.info)}},computed:{}}},821:function(t,e){},822:function(t,e){},980:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"title"},[n("img",{attrs:{src:s(30)},on:{click:t.back}}),t._v("\n\t\t接待组登记资料\n\t")]),t._v(" "),n("div",{staticClass:"bodyContent"},[n("div",{staticClass:"bodyTitle"},[t._v("\n\t\t\t基本信息\n\t\t")]),t._v(" "),n("div",{staticClass:"bodyList"},[n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t客户姓名\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"listContent",attrs:{placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t联系电话\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"listContent",attrs:{placeholder:"请输入联系电话"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t微信号\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.wxId,expression:"wxId"}],staticClass:"listContent",attrs:{placeholder:"请输入微信号"},domProps:{value:t.wxId},on:{input:function(e){e.target.composing||(t.wxId=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t客户类型\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.customerType,expression:"customerType"}],staticClass:"listContent",attrs:{placeholder:"请输入客户类型"},domProps:{value:t.customerType},on:{input:function(e){e.target.composing||(t.customerType=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"bodyTitle"},[t._v("\n\t\t\t客户需求\n\t\t")]),t._v(" "),n("div",{staticClass:"bodyList"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.demand,expression:"demand"}],staticClass:"listContent",attrs:{rows:"",cols:"",placeholder:"请输入需求"},domProps:{value:t.demand},on:{input:function(e){e.target.composing||(t.demand=e.target.value)}}}),t._v(" "),n("div",{staticClass:"list",staticStyle:{"padding-bottom":"0.1rem"}},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t客流性质\n\t\t\t\t")]),t._v(" "),n("el-select",{staticClass:"select",attrs:{filterable:"",placeholder:"请选择客流性质"},on:{change:t.postId},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.content,value:t.id}})}),1)],1),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"listHead"},[t._v("\n\t\t\t\t\t销售顾问\n\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.saler,expression:"saler"}],staticClass:"listContent",attrs:{placeholder:"请输入姓名"},domProps:{value:t.saler},on:{input:function(e){e.target.composing||(t.saler=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"btn"},[n("button",{attrs:{type:"button"},on:{click:t.confirm}},[t._v("确认")])])])])},staticRenderFns:[]}}},[712]);