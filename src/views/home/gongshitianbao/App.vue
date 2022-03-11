<template>
  <div class="content">
    <div class="mask" v-if="showMask">
      <div class="maskContainer">
        <div class="title">工时规则</div>
        <img :src="close" @click="showMask = false" />
        <div
          class=""
          style="margin-top: 0.2rem; font-size: 0.24rem !important"
          v-html="info.cont"
        ></div>
      </div>
    </div>
    <div class="guize" @click="showMask = true">
      <img :src="guize" />
    </div>
    <van-popup v-model="showPicker1" round position="bottom">
      <van-datetime-picker
        :filter="filter"
        ref="tmBox"
        v-model="currentTime1"
        type="time"
        title="选择开始时间"
        :min-hour="startTm"
        :max-hour="endTm"
        :min-minute="startMi"
        :max-minute="endMi"
        @cancel="showPicker1 = false"
        @confirm="onConfirm1"
        @change="changeTm"
      />
    </van-popup>
    <van-popup v-model="showPicker2" round position="bottom">
      <van-datetime-picker
        :filter="filter"
        v-model="currentTime2"
        type="time"
        title="选择结束时间"
        :min-hour="startTm"
        :max-hour="endTm"
        :min-minute="startMi"
        :max-minute="endMi"
        @cancel="showPicker2 = false"
        @confirm="onConfirm2"
        @change="changeTm"
      />
    </van-popup>
    <van-popup v-model="showPicker3" round position="bottom">
      <van-picker
        title="选择总部"
        show-toolbar
        :columns="pickService.length > 0 ? pickService[pickIndex].columns1 : ''"
        @confirm="onConfirm3"
        value-key="name"
        @cancel="showPicker3 = false"
        :default-index="
          pickService.length > 0 ? pickService[pickIndex].index : ''
        "
      />
    </van-popup>
    <van-popup v-model="showPicker4" round position="bottom">
      <van-picker
        title="选择运营店"
        show-toolbar
        :columns="
          pickService.length > 0 ? pickService[pickIndex2].columns2 : ''
        "
        @confirm="onConfirm4"
        value-key="name"
        @cancel="showPicker4 = false"
        :default-index="
          pickService.length > 0 ? pickService[pickIndex2].index2 : ''
        "
      />
    </van-popup>
    <van-popup v-model="showPicker5" round position="bottom">
      <van-datetime-picker
        v-model="currentTime3"
        type="date"
        title="选择日期"
        @cancel="showPicker5 = false"
        @confirm="onConfirm5"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </van-popup>
    <div class="bodyList">
      <div class="listItem" v-if="types != 2">
        <p style="color: #ff2015; font-size: 0.24rem">*</p>
        <p>工作日期：</p>
        <p class="itemRight">{{ nowDate }}</p>
      </div>
      <div class="listItem" v-if="types == 2">
        <p style="color: #ff2015; font-size: 0.24rem">*</p>
        <p>工作日期：</p>
        <div class="timeBox" @click="showPicker5 = true">
          <p v-if="!nowDate">请选择日期</p>
          <p v-if="nowDate" style="color: #000">{{ nowDate }}</p>
          <img :src="shijian" />
        </div>
      </div>
      <div
        class="listItem"
        style="padding: 0.5rem 0.34rem; box-sizing: border-box"
        :style="{ border: showBorder ? '1px solid red' : 'none' }"
      >
        <p style="color: #ff2015; font-size: 0.24rem">*</p>
        <p>工作时间：</p>
        <div class="selectBox">
          <div class="beginTm" @click="showPicker1 = true">
            <p v-if="!value1">开始时间</p>
            <p v-if="value1" style="color: #000">{{ value1 }}</p>
          </div>
          ~
          <div class="endTm" @click="showPicker2 = true">
            <p v-if="!value2">结束时间</p>
            <p v-if="value2" style="color: #000">{{ value2 }}</p>
          </div>
        </div>
        <div class="allSelectBox">
          <div class="leftBox" @click="allSelect" v-if="!selectFlag"></div>
          <img :src="xuanzhong" v-if="selectFlag" @click="allSelect" />
          <div class="rightBox">
            <p>全天</p>
          </div>
        </div>
      </div>
      <div class="listItem">
        <p style="color: #ff2015; font-size: 0.24rem">*</p>
        <p>工作时长：</p>
        <p class="itemRight">{{ workHours }}小时/{{ workdays }}天</p>
      </div>
      <div
        class="listItem"
        style="border-bottom: 1px solid #e6e6e6"
        v-if="userInfo && userInfo.detail.needProj == 1"
      >
        <p style="color: #ff2015; font-size: 0.24rem">*</p>
        <p>服务项目：</p>
        <div class="addNew">
          <img :src="xinzeng" />
          <p @click="add">新增</p>
        </div>
      </div>
      <!-- 	<div class="listItem" style="border-bottom:1px solid #E6E6E6;">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>服务项目：</p>
				<div class="addNew">
					<img :src="xinzeng">
					<p @click="add">新增</p>
				</div>
			</div> -->

      <!-- <div class="addBox"  v-if="userInfo&&userInfo.detail.needProj==1"> -->
      <div class="addBox">
        <div
          class="addList"
          v-for="(item, index) in pickService"
          :key="index"
          :class="index === index1 || index === index2 ? 'active' : ''"
        >
          <div class="topBox" style="display: flex; align-items: center">
            <div class="listBox" @click="pickshow3(index)">
              <p v-if="!item.value">一级大类</p>
              <p v-if="item.value" style="color: #000">{{ item.value }}</p>
              <img :src="xiala" />
            </div>
            <div class="listBox" @click="pickshow4(index)">
              <p v-if="!item.value2">二级大类</p>
              <p v-if="item.value2" style="color: #000">{{ item.value2 }}</p>
              <img :src="xiala" />
            </div>
            <div class="delete" @click="toDelete(index)" v-if="index != 0">
              <img :src="shanchu" />
            </div>
          </div>
          <div class="allSelectBox" v-if="item.checkList">
            <div
              class="leftBox"
              @click="allSelectTwo(index)"
              v-if="!item.selectFlag"
            ></div>
            <img
              :src="xuanzhong"
              v-if="item.selectFlag"
              @click="allSelectTwo(index)"
            />
            <div class="rightBox">
              <p>全选</p>
            </div>
          </div>
          <div class="checkBox" v-if="item.checkList">
            <div
              class="boxList"
              v-for="(item1, index1) in item.checkList"
              :key="index1"
            >
              <div
                class="leftBox"
                @click="checkSelcetTwo(index, index1)"
                v-if="!item1.flag"
              ></div>
              <img
                :src="xuanzhong"
                v-if="item1.flag"
                @click="checkSelcetTwo(index, index1)"
              />
              <div class="rightBox">
                <p>{{ item1.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="listItem2">
        <div class="" style="display: flex">
          <p style="color: #ff2015; font-size: 0.24rem">*</p>
          <p>工作内容：</p>
        </div>
        <div class="checkBox">
          <div class="boxList" v-for="(item, index) in checkList" :key="index">
            <div
              class="leftBox"
              @click="checkSelcet(index)"
              v-if="!item.flag"
            ></div>
            <img
              :src="xuanzhong"
              v-if="item.flag"
              @click="checkSelcet(index)"
            />
            <div class="rightBox">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="listItem2">
        <div class="" style="display: flex">
          <p style="color: #ff2015; font-size: 0.24rem; opacity: 0">*</p>
          <p>备注：</p>
        </div>
        <textarea
          rows=""
          cols=""
          placeholder="请输入内容"
          v-model="rmks"
        ></textarea>
      </div>
    </div>
    <div class="submit" @click="submit">提交</div>
  </div>
</template>
<script>
import { Notify } from "vant";
import { Toast } from "vant";
import xuanzhong from "../../../assets/img/选中.png";
import xinzeng from "../../../assets/img/新增.png";
import xiala from "../../../assets/img/下拉.png";
import shijian from "../../../assets/img/时间控件.png";
import shanchu from "../../../assets/img/删除.png";
import guize from "../../../assets/img/工时规则.png";
import close from "../../../assets/img/close.png";
// import 'vant/lib/index.css'
export default {
  data() {
    return {
      shijian,
      close,
      xuanzhong,
      xinzeng,
      xiala,
      shanchu,
      guize,
      processInstanceId: "",
      nowDate: "", //当前日期
      startTm: 9, //最小时间
      endTm: 17, //最大时间
      startMi: 0,
      endMi: 30,
      minDate: "",
      maxDate: new Date(), //最大日期
      currentTime1: "",
      currentTime2: "",
      time: "",
      showMask: false,
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      showPicker4: false,
      showPicker5: false,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      selectFlag: false,
      workHours: "",
      workdays: "",
      rmks: "",
      columns: [],
      columns2: [],
      checkList: [],
      pickIndex0: 0,
      pickIndex: 0,
      pickIndex2: 0,
      pickService: [{}],
      userInfo: {},
      currentTime3: new Date(),
      type: "",
      types: "",
      minminute: "",
      maxminute: "",
      index1: "",
      index2: "",
      info: "",
      showBorder: false,
    };
  },
  watch: {
    pickService: {
      handler(val, val1) {
        if (val.length == 1) {
          console.log(111);
          this.index1 = "";
          this.index2 = "";
          return;
        }
        for (let i = 0; i < val.length; i++) {
          for (let j = i + 1; j < val.length; j++) {
            if (val[i].id && val[i].id2) {
              if (val[j].id && val[i].id == val[j].id && !val[j].id2) {
                this.index1 = i;
                this.index2 = j;
                return;
              } else if (
                `${val[i].id}+${val[i].id2}` == `${val[j].id}+${val[j].id2}`
              ) {
                this.index1 = i;
                this.index2 = j;
                return;
              } else {
                this.index1 = "";
                this.index2 = "";
              }
            } else if (val[i].id && !val[i].id2) {
              if (val[j].id) {
                if (val[i].id == val[j].id) {
                  this.index1 = i;
                  this.index2 = j;
                  return;
                } else {
                  this.index1 = "";
                  this.index2 = "";
                }
              } else {
                this.index1 = "";
                this.index2 = "";
              }
            }
          }
        }
        console.log(55, this.index1, this.index2);
        // val.forEach((item, index) => {
        // 	val.forEach((item2, index1) => {
        // 		console.log(555);
        // 		if (index1 > index) {
        // 			if (item.id && item.id2) {
        // 				if (item2.id && item.id == item2.id && !item2.id2) {
        // 					this.index1=index
        // 					this.index2=index1
        // 					return
        // 				} else if (`${item.id}+${item.id2}` == `${item2.id}+${item2.id2}`) {
        // 					this.index1=index
        // 					this.index2=index1
        // 					return
        // 				}
        // 				else {
        // 					this.index1=''
        // 					this.index2=''
        // 					return
        // 				}

        // 			}
        // 			else if (item.id && !item.id2) {
        // 				if (item2.id) {
        // 					if (item.id == item2.id) {
        // 					this.index1=index
        // 					this.index2=index1
        // 					return
        // 					}
        // 				}
        // 				else {
        // 					this.index1=''
        // 					this.index2=''
        // 					return
        // 				}
        // 			}
        // 			console.log(11,this.index1,this.index2)

        // 		}

        // 	})

        // })
      },
      deep: true,
    },
  },
  mounted() {
    // this.type = this.until.getQueryString('type') ? this.until.getQueryString('type') : this.until.getQueryString('types')
    this.types = this.until.getQueryString("types");
    if (this.types == 2) {
      document.title = "工时补录";
    }
    if (this.types == 1) {
      document.title = "工时填报";
    }
    this.minDate = new Date(this.getMinDate());
    this.maxDate = new Date(this.getMaxDate());
    this.api.getContarticle().then((res) => {
      this.info = res;
    });

    let id = this.until.getQueryString("id");
    this.userInfo = this.until.loGet("userInfo");
    if (!id) {
      this.api.getProjjobcontListAll().then((res) => {
        this.checkList = res;
        this.checkList.forEach((item) => {
          this.$set(item, "flag", false);
        });
      });
      // this.api.getprojcatListAll('0').then(res=>{
      // 	this.$set(this.pickService[this.pickIndex],'columns1',res)
      // })
      this.api.getprojcatListAll("0").then((res) => {
        this.$set(this.pickService[0], "columns1", res);
      });
    }

    if (this.types != 2) {
      this.nowDate = this.getNowDate();
      this.api.getPaiban(this.nowDate).then((res) => {
        this.startTm = res.start ? Number(res.start.split(":")[0]) : "9";
        this.minminute = res.start ? Number(res.start.split(":")[1]) : "0";
        this.startMi = this.minminute;
        this.maxminute = res.end ? Number(res.end.split(":")[1]) : "0";
        this.endMi = this.maxminute;
        this.endTm = res.end ? Number(res.end.split(":")[0]) : "17";
      });
    }

    if (id) {
      this.api.getProjwhreportDetail(id).then((res) => {
        this.nowDate = res.workDate;
        this.value1 = res.workTimeStart;
        this.value2 = res.workTimeEnd;
        this.workHours = res.workHours;
        this.workdays = res.workDays;
        this.rmks = res.rmks;
        this.processInstanceId = res.processInstanceId;
        let a = JSON.parse(res.params);
        this.api.getProjjobcontListAll().then((res1) => {
          this.checkList = res1;
          for (let i = 0; i < res1.length; i++) {
            this.$set(this.checkList[i], "flag", false);
            for (let y = 0; y < a.jobIds.length; y++) {
              if (this.checkList[i].id == a.jobIds[y]) {
                this.checkList[i].flag = true;
              }
            }
          }
        });
        this.api.getprojcatListAll("0").then((res) => {
          console.log(77777, res);
          this.pickService.splice(0, 1);
          for (let i = 0; i < a.projs.length; i++) {
            // if(i==0){
            // 	this.pickService[0].columns1=res
            // 	this.pickService[0].columns2=a.projs[i].cat2List
            // 	this.pickService[0].checkList=a.projs[i].projList
            // 	this.pickService[0].checkList.forEach(item=>{
            // 		this.$set(item,'flag',false)
            // 	})
            // 	a.projs[i].projIds.forEach(item=>{
            // 		 this.pickService[0].checkList.forEach(item1=>{
            // 			 if(item==item1.id){
            // 				 item1.flag=true
            // 			 }
            // 		 })
            // 	})
            // 	this.pickService[0].id=a.projs[i].cid1
            // 	this.pickService[0].id2=a.projs[i].cid2
            // 	for(let j=0;j<a.projs[i].cat2List.length;j++){
            // 		if(this.pickService[0].id2==a.projs[i].cat2List[j].id){
            // 			this.pickService[0].value2=a.projs[i].cat2List[j].name
            // 		}
            // 	}
            // 	for(let p=0;p<res.length;p++){
            // 		if(this.pickService[0].id==res[p].id){
            // 			this.pickService[0].value=res[p].name
            // 		}
            // 	}
            // }
            // else{
            let value = "";
            let value2 = "";
            for (let j = 0; j < a.projs[i].projList.length; j++) {
              this.$set(a.projs[i].projList[j], "flag", false);
              for (let m = 0; m < a.projs[i].projIds.length; m++) {
                if (a.projs[i].projList[j].id == a.projs[i].projIds[m]) {
                  a.projs[i].projList[j].flag = true;
                }
              }
            }
            for (let j = 0; j < a.projs[i].cat2List.length; j++) {
              if (a.projs[i].cid2 == a.projs[i].cat2List[j].id) {
                value2 = a.projs[i].cat2List[j].name;
              }
            }

            // for (let p = 0; p < a.projs[i].cat2List.length; p++) {
            // 	if (a.projs[i].cid1 == a.projs[i].cat2List[p].id) {
            // 		value = a.projs[i].cat2List[p].name
            // 	}
            // }
            for (let p = 0; p < res.length; p++) {
              if (a.projs[i].cid1 == res[p].id) {
                value = res[p].name;
              }
            }
            console.log(777, value2);
            this.pickService.push({
              columns1: res,
              columns2: a.projs[i].cat2List,
              checkList: a.projs[i].projList,
              id: a.projs[i].cid1,
              id2: a.projs[i].cid2,
              value: value,
              value2: value2,
            });
            // }
          }
          console.log(111111, this.pickService);
        });
        console.log(222222, res, a);
      });
    }
  },
  methods: {
    add() {
      this.api.getprojcatListAll("0").then((res) => {
        this.pickService.push({
          columns1: res,
          columns2: [],
        });
      });
    },
    checkSelcet(index) {
      this.checkList[index].flag = !this.checkList[index].flag;
    },
    checkSelcetTwo(index, index1) {
      this.$set(
        this.pickService[index].checkList[index1],
        "flag",
        !this.pickService[index].checkList[index1].flag
      );
      this.pickService[index].checkList.forEach((item) => {
        if (item.flag == false) {
          this.pickService[index].selectFlag = false;
        }
      });
    },
    allSelect() {
      if (!this.nowDate) {
        Toast("请先选择日期");
        return;
      }
      this.selectFlag = !this.selectFlag;
      if (this.selectFlag == true) {
        this.api.getPaiban(this.nowDate).then((res) => {
          this.value1 = res.start ? res.start : "09:00";
          this.value2 = res.end ? res.end : "17:30";
          let obj = {
            date: this.nowDate,
            start: this.value1,
            end: this.value2,
          };
          this.api.getDuration(obj).then((res) => {
            this.workHours = res.workHours;
            this.workdays = res.workDays;
          });
        });
      } else {
        this.workHours = "";
        this.workdays = "";
        this.value1 = "";
        this.value2 = "";
      }
    },
    allSelectTwo(index) {
      if (this.pickService[index].selectFlag) {
        this.$set(this.pickService[index], "selectFlag", false);
        this.pickService[index].checkList.forEach((item) => {
          item.flag = false;
        });
        return;
      }
      this.$set(this.pickService[index], "selectFlag", true);
      this.pickService[index].checkList.forEach((item) => {
        item.flag = true;
      });
    },
    filter(type, options) {
      if (type == "hour") {
        console.log(11, type, options);
      } else if (type == "minute") {
        console.log(11, type, options);
        return options.filter((option) => option % 30 === 0);
      }
      return options;
    },
    onConfirm1(val) {
      if (!this.nowDate) {
        Toast("请先选择日期");
        return;
      }
      if (this.value2) {
        if (val >= this.value2) {
          Notify("开始时间不能大于结束时间");
          this.showPicker1 = false;
          return;
        }
        let obj = {
          date: this.nowDate,
          start: val,
          end: this.value2,
        };
        this.api.getDuration(obj).then((res) => {
          this.workHours = res.workHours;
          this.workdays = res.workDays;
        });
      }
      if (val != this.value1) {
        this.selectFlag = false;
      }
      this.value1 = val;
      this.showPicker1 = false;
    },
    changeTm(val1) {
      console.log(11, val1.getValues());
      if (val1.getValues()[0] == this.startTm) {
        this.startMi = this.minminute;
      } else {
        this.startMi = 0;
      }
      if (val1.getValues()[0] == this.endTm) {
        this.endMi = this.maxminute;
      } else {
        this.endMi = 30;
      }
    },
    onConfirm2(val) {
      if (!this.nowDate) {
        Toast("请先选择日期");
        return;
      }
      if (this.value1) {
        if (val <= this.value1) {
          Notify("结束时间不能小于开始时间");
          this.showPicker2 = false;
          return;
        }
        let obj = {
          date: this.nowDate,
          start: this.value1,
          end: val,
        };
        this.api.getDuration(obj).then((res) => {
          this.workHours = res.workHours;
          this.workdays = res.workDays;
        });
      }
      if (val != this.value2) {
        this.selectFlag = false;
      }
      this.value2 = val;
      this.showPicker2 = false;
    },
    onConfirm3(val) {
      this.pickService[this.pickIndex].value = val.name;
      this.pickService[this.pickIndex].value2 = "";
      this.$set(this.pickService[this.pickIndex], "id", val.id);
      for (
        let i = 0;
        i < this.pickService[this.pickIndex].columns1.length;
        i++
      ) {
        if (this.pickService[this.pickIndex].columns1[i].id == val.id) {
          console.log(1, i);
          this.$set(this.pickService[this.pickIndex], "index", i);
        }
      }
      this.api.getprojcatListAll(val.id).then((res) => {
        this.pickService[this.pickIndex].columns2 = res;
        this.pickService[this.pickIndex].columns2.unshift({
          name: "全部",
          id: "1",
        });
      });
      let obj = {
        cid1: val.id,
        cid2: "",
      };
      this.api.getprojListAll(obj).then((res) => {
        this.$set(this.pickService[this.pickIndex], "checkList", res);
        this.pickService[this.pickIndex].checkList.forEach((item) => {
          this.$set(item, "flag", false);
        });
      });
      console.log(this.pickService);
      this.showPicker3 = false;
    },
    onConfirm4(val) {
      let obj = {
        cid1: this.pickService[this.pickIndex0].id,
        cid2: val.id,
      };
      if (val.id == 1) {
        obj.cid2 = "";
		 this.pickService[this.pickIndex2].value2 = '';
      } else {
        this.$set(this.pickService[this.pickIndex2], "id2", val.id);
        this.pickService[this.pickIndex2].value2 = val.name;
        for (
          let i = 0;
          i < this.pickService[this.pickIndex2].columns2.length;
          i++
        ) {
          if (this.pickService[this.pickIndex2].columns2[i].id == val.id) {
            this.$set(this.pickService[this.pickIndex2], "index2", i);
          }
        }
      }

      this.api.getprojListAll(obj).then((res) => {
        this.pickService[this.pickIndex2].checkList = res;
        this.pickService[this.pickIndex2].checkList.forEach((item) => {
          this.$set(item, "flag", false);
        });
      });
      this.showPicker4 = false;
    },
    onConfirm5(val) {
      let date = this.getNowDateTwo(val);
      this.api.getPaiban(date).then((res) => {
        this.nowDate = this.getNowDateTwo(val);
        this.startTm = res.start ? Number(res.start.split(":")[0]) : "9";
        this.minminute = res.start ? Number(res.start.split(":")[1]) : "0";
        this.startMi = this.minminute;
        this.maxminute = res.end ? Number(res.end.split(":")[1]) : "0";
        this.endMi = this.maxminute;
        this.endTm = res.end ? Number(res.end.split(":")[0]) : "17";
      });
      this.showPicker5 = false;
    },
    getMinDate() {
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      let month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      return year + "/" + month + "/" + 1;
    },
    getMaxDate() {
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      let month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      let day =
        nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      if (day == 1 && this.types == 2) {
        Toast("一号不能补录");
        setTimeout(() => {
          this.until.back();
        }, 1000);
      }
      return year + "/" + month + "/" + (day - 1);
    },
    getNowDate() {
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      let month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      let day =
        nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      return year + "-" + month + "-" + day;
    },
    getNowDateTwo(val) {
      let nowDate = new Date(val);
      let year = nowDate.getFullYear();
      let month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      let day =
        nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
      return year + "-" + month + "-" + day;
    },
    pickshow3(index) {
      this.showPicker3 = true;
      this.pickIndex = index;
      this.pickIndex0 = index;
      console.log(777, this.pickIndex);
    },
    pickshow4(index) {
      this.showPicker4 = true;
      this.pickIndex2 = index;
      this.pickIndex0 = index;
    },
    toDelete(index) {
      console.log(123, this.pickService);
      this.pickService.splice(index, 1);
      this.pickIndex = 0;
      this.pickIndex2 = 0;
      this.pickIndex0 = 0;
    },
    submit() {
      if (!this.value1) {
        Toast("请选择开始时间");
        return;
      }
      if (!this.value2) {
        Toast("请选择结束时间");
        return;
      }
      if (this.index2 > 0) {
        Toast("服务项目有重复，请重新选择");
        return;
      }
      console.log(666, this.pickService);
      if (this.userInfo.detail.needProj == 1) {
        this.pickService.forEach((item) => {
          this.$set(item, "checkFlag", false);
          if (item.checkList) {
            item.checkList.forEach((item1) => {
              if (item1.flag == true) {
                item.checkFlag = true;
              }
            });
          }
        });
        for (let i = 0; i < this.pickService.length; i++) {
          if (
            this.pickService[i].checkFlag == false &&
            this.userInfo.detail.needProj == 1
          ) {
            Toast("请选择服务项目");
            return;
          }
        }
      }

      let modelFlag = false;
      this.checkList.forEach((item) => {
        if (item.flag == true) {
          modelFlag = true;
        }
      });
      if (!modelFlag) {
        Toast("请选择工作内容");
        return;
      }
      let jobId = [];
      let projsList = [];
      let projId = [];
      let checkAll = false;
      let isIndeterminate = false;
      this.checkList.forEach((item) => {
        if (item.flag == true) {
          jobId.push(item.id);
        }
      });
      if (this.userInfo.detail.needProj == 1) {
        this.pickService.forEach((item) => {
          item.checkList.forEach((item1) => {
            if (item1.flag == true) {
              projId.push(item1.id);
            }
          });
          if (projId.length == item.checkList.length) {
            checkAll = true;
            isIndeterminate = false;
          } else {
            checkAll = false;
            isIndeterminate = true;
          }
          let obj = {
            isIndeterminate: isIndeterminate,
            checkAll: checkAll,
            projIds: projId,
            projList: item.checkList,
            cid1: item.id,
            cid2: item.id2,
            cat2List: item.columns2,
          };
          projId = [];
          projsList.push(obj);
        });
      }

      let from = {
        workDate: this.nowDate,
        workStart: "",
        workEnd: "",
        workTimeStart: this.value1,
        workTimeEnd: this.value2,
        workDays: this.workdays,
        workHours: this.workHours,
        userId: "",
        jobIds: jobId,
        projs: projsList,
        rmks: this.rmks,
        types: this.types == 2 ? "2" : "1",
        audit: "",
      };
      let id = this.until.getQueryString("id");
      if (id) {
        from.id = id;
        from.processInstanceId = this.processInstanceId;
      }
      console.log(from);
      this.api
        .ProjwhreportSubmit(from)
        .then((res) => {
          Toast("提交成功");
          setTimeout(() => {
            this.until.back();
          }, 1000);
        })
        .catch((err) => {
          this.showBorder = true;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  background-color: #f1f3f2;
  padding: 0.2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  .mask {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .maskContainer {
      position: relative;
      width: 90%;
      max-height: 60%;
      background-color: #ffffff;
      border-radius: 0.12rem;
      z-index: 50;
      padding: 0.4rem 0.3rem;
      box-sizing: border-box;
      overflow-y: scroll;
      .title {
        text-align: center;
        font-size: 0.3rem;
        font-weight: bold;
        color: #333333;
      }
      img {
        width: 0.36rem;
        height: 0.37rem;
        position: absolute;
        top: 0.4rem;
        right: 0.3rem;
      }
    }
  }

  .guize {
    position: fixed;
    z-index: 50;
    right: 0.54rem;
    bottom: 10%;

    img {
      width: 0.84rem;
      height: 0.84rem;
      background: #ffffff;
      border-radius: 50%;
    }
  }

  .submit {
    width: 100%;
    height: 1rem;
    background-color: #ca093a;
    text-align: center;
    line-height: 1rem;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
  }

  .bodyList {
    .listItem2 {
      align-items: center;
      background-color: #ffffff;
      padding: 0.34rem;
      box-sizing: border-box;
      border-radius: 0.1rem;
      margin-top: 0.1rem;

      textarea {
        width: 6rem;
        height: 2.19rem;
        border: 1px solid #dddddd;
        border-radius: 0.1rem;
        margin-left: 0.3rem;
        margin-top: 0.2rem;
        padding: 0.15rem;
        box-sizing: border-box;
        font-size: 0.24rem;
      }

      p {
        margin-left: 0.14rem;
        font-size: 0.28rem;
        color: #333333;
      }

      .checkBox {
        margin-top: 0.35rem;
        margin-left: 0.1rem;
        display: flex;

        flex-wrap: wrap;

        .boxList {
          display: flex;
          margin-right: 0.4rem;
          margin-top: 0.2rem;

          .leftBox {
            width: 0.35rem;
            height: 0.35rem;
            border: 1px solid #dddddd;
            border-radius: 0.05rem;
          }

          img {
            width: 0.35rem;
            height: 0.35rem;
          }

          .rightBox {
            p {
              font-size: 0.24rem;
              font-weight: 500;
              color: #333333;
            }
          }
        }
      }
    }

    .listItem {
      display: flex;
      align-items: center;
      background-color: #ffffff;
      padding: 0.34rem;
      box-sizing: border-box;
      border-radius: 0.1rem;
      margin-top: 0.1rem;

      .timeBox {
        width: 4.6rem;
        height: 0.6rem;
        border: 1px solid #dddddd;
        border-radius: 0.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;

        p {
          font-size: 0.24rem;
          color: #909090;
        }

        img {
          width: 0.28rem;
          height: 0.26rem;
        }
      }

      .addNew {
        width: 1.3rem;
        height: 0.5rem;
        background: #ca093a;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0.5rem;

        img {
          width: 0.3rem;
          height: 0.3rem;
        }

        p {
          font-size: 0.24rem;
          color: #ffffff;
        }
      }

      .middleLine {
        width: 100%;
        height: 0.1rem;
        background: #e6e6e6;
      }

      p {
        margin-left: 0.14rem;
        font-size: 0.28rem;
        color: #333333;
      }

      .itemRight {
        margin-left: 0.51rem;
      }

      .selectBox {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.5rem;
        height: 0.6rem;
        border-radius: 0rem;

        .beginTm {
          p {
            color: rgba(0, 0, 0, 0.5);
            margin-left: 0;
          }
        }

        .endTm {
          p {
            color: rgba(0, 0, 0, 0.5);
            margin-left: 0;
          }
        }
      }

      .allSelectBox {
        margin-left: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .leftBox {
          width: 0.35rem;
          height: 0.35rem;
          border: 1px solid #dddddd;
          text-align: center;
          line-height: 0.35rem;
          border-radius: 0.05rem;
        }

        img {
          // border-radius: 0.1rem;
          width: 0.35rem;
          height: 0.35rem;
        }

        .rightBox {
          p {
            font-size: 0.24rem;
            font-weight: 500;
            color: #333333;
          }
        }
      }
    }

    .addBox {
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0.3rem 0.45rem;
      border-radius: 0.1rem;

      .active {
        .listBox {
          p {
            color: #ca093a !important;
          }
        }

        .allSelectBox {
          margin-left: 0.1rem;
          margin-top: 0.2rem;
          display: flex;
          align-items: center;

          .leftBox {
            width: 0.35rem;
            height: 0.35rem;
            border: 1px solid #dddddd;
            text-align: center;
            line-height: 0.35rem;
            border-radius: 0.05rem;
          }

          img {
            width: 0.35rem;
            height: 0.35rem;
          }

          .rightBox {
            margin-left: 0.14rem;

            p {
              font-size: 0.24rem;
              font-weight: 500;
              color: #ca093a !important;
            }
          }
        }

        .checkBox {
          margin-bottom: 0.35rem;
          margin-left: 0.1rem;
          display: flex;

          flex-wrap: wrap;

          .boxList {
            display: flex;
            margin-right: 0.4rem;
            margin-top: 0.2rem;

            .leftBox {
              width: 0.35rem;
              height: 0.35rem;
              border: 1px solid #dddddd;
              border-radius: 0.05rem;
            }

            img {
              width: 0.35rem;
              height: 0.35rem;
            }

            .rightBox {
              p {
                margin-left: 0.14rem;
                font-size: 0.24rem;
                font-weight: 500;
                color: #ca093a !important;
              }
            }
          }
        }
      }

      .addList {
        // justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;

        .allSelectBox {
          margin-left: 0.1rem;
          margin-top: 0.2rem;
          display: flex;
          align-items: center;

          .leftBox {
            width: 0.35rem;
            height: 0.35rem;
            border: 1px solid #dddddd;
            text-align: center;
            line-height: 0.35rem;
            border-radius: 0.05rem;
          }

          img {
            width: 0.35rem;
            height: 0.35rem;
          }

          .rightBox {
            margin-left: 0.14rem;

            p {
              font-size: 0.24rem;
              font-weight: 500;
              color: #333333;
            }
          }
        }

        .checkBox {
          margin-bottom: 0.35rem;
          margin-left: 0.1rem;
          display: flex;

          flex-wrap: wrap;

          .boxList {
            display: flex;
            margin-right: 0.4rem;
            margin-top: 0.2rem;

            .leftBox {
              width: 0.35rem;
              height: 0.35rem;
              border: 1px solid #dddddd;
              border-radius: 0.05rem;
            }

            img {
              width: 0.35rem;
              height: 0.35rem;
            }

            .rightBox {
              p {
                margin-left: 0.14rem;
                font-size: 0.24rem;
                font-weight: 500;
                color: #333333;
              }
            }
          }
        }

        .listBox {
          width: 2.39rem;
          height: 0.6rem;
          border: 1px solid #dddddd;
          border-radius: 0.1rem;
          margin-right: 0.4rem;
          padding: 0.1rem 0.2rem;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            font-size: 0.24rem;
            font-weight: 500;
            color: #909090;
          }

          img {
            width: 0.19rem;
            height: 0.1rem;
          }
        }

        .delete {
          color: red;
          width: 0.31rem;
          height: 0.31rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
