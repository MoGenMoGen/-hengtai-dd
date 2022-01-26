<template>
  <div class="content">
    <van-popup v-model="showPicker" round position="bottom">
      <van-datetime-picker
        v-model="currentTime"
        type="year-month"
        title="选择年月"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <div class="top">
      <!-- <div class="tab">
				<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
				:class="currentIndex==index?'active':''">
					{{item}}
				</div>
			</div> -->
      <div class="bodyContent">
        <div class="workHours" v-if="info.length>0">总计工时：{{info[0].count}}H</div>
        <div class="searchBox">
          <div class="boxOne">
            <!-- <input placeholder="姓名" v-model="name" v-if="currentRole == 1" /> -->
            <input
              placeholder="部门名称"
              v-model="name"
            />
          </div>
          <div class="boxTwo" @click="showPicker = true" style="position: relative;">
            <img :src="time"  />
             <p v-if="!dateTime" style="margin-left:0.14rem ;">月份选择</p>
             <p v-if="dateTime" style="color: #000;margin-left:0.14rem ;">{{ dateTime }}</p>
            <img :src="close" style="position: absolute; right:0.15rem"  @click.stop="deleteDate"/>
          </div>
          <div class="btnSearch" @click="search">查询</div>
        </div>
        <div class="header">
          <div class="headname" >部门</div>
          <div class="headname">月份</div>
          <div class="headname">工作时长(H)</div>
          <div class="headname">人员详情</div>
        </div>
      </div>
    </div>
	<van-list
	  v-model="loading"
	  :finished="finished"
	  finished-text="没有更多了"
	  @load="getInfo()"
	>
    <div class="bottom">
      <div class="list" v-for="(item,index) in info" :key='index'>
        <div class="listName">{{item.deptName}}</div>
        <div class="listName">{{item.workDate}}</div>
        <div class="listName">{{item.AllHours}}</div>
        <div
          class="listName"
          style="color: #ca093a; text-decoration: underline"
          @click="toDetail(item)"
        >
          查看
        </div>
      </div>
    </div>
	</van-list>
  </div>
</template>
<script>
import bg from "../../../assets/img/总分背景.png";
import time from "../../../assets/img/时间控件.png";
import close from "../../../assets/img/关闭.png";
import { Notify } from "vant";
export default {
  data() {
    return {
		loading:false,
		finished:false,
      currentRole: 2, //1:领导;2:老板
      currentIndex: 0,
      bg,
	  close,
      time,
      name: "",
      tabList: ["项目", "人员"],
      showPicker: false,
      currentTime: new Date(),
      dateTime: "",
	  deptNm:'',
	  projNm:'',
	  current:1,
	  size:10,
	  total:"",
	  info:{},
	  deptIds:'',
	  isCharge:'',
	  projId:'',
    };
  },
  mounted() {
	  this.until.loSave("currentIndex",0);
    this.userInfo = this.until.loGet("userInfo");
	if(this.userInfo){
		this.deptIds=this.userInfo.dept_id
		this.isCharge=this.userInfo.detail.isCharge
		if(this.userInfo.detail.chargeDepts){
		this.deptIds = this.deptIds +','+this.userInfo.detail.chargeDepts.join(",")
		}
		if(!this.userInfo.detail.chargeDepts&&this.userInfo.detail.isCharge == 1&&this.userInfo.role_name.indexOf('boss')==(-1)){
			this.currentRole=3
		}
	}
    if (this.userInfo && this.userInfo.detail.isCharge == 1&&this.userInfo.detail.chargeDepts) this.currentRole = 1;
    if (this.userInfo && this.userInfo.role_name.indexOf('boss')!=-1) this.currentRole = 2;
	this.deptNm=this.until.getQueryString('deptNm')
	this.projNm=this.until.getQueryString('projNm')
	this.projId=this.until.getQueryString('projId')
	// this.getInfo()
  },
  methods: {
	deleteDate(){
			this.dateTime=''  
	},
	 getInfo(){
		 if(this.currentRole==2){
			 document.title=this.projNm
			 this.api.getProjDeptReport(this.projId,this.name,this.dateTime,this.current,this.size,'','').then(res=>{
			 	this.total=res.total
			 	this.info=[...this.info,...res.records]
			 	 this.finished = this.info.length >= res.total;
			 	 this.loading = false
			 	this.current++
			 }) 
		 }
		 if(this.currentRole==1){
			 document.title=this.projNm
			 this.api.getProjDeptReport(this.projId,this.name,this.dateTime,this.current,this.size,this.isCharge,this.deptIds).then(res=>{
			 	this.total=res.total
			 	this.info=[...this.info,...res.records]
			 	 this.finished = this.info.length >= res.total;
			 	 this.loading = false
			 	this.current++
				
			 }) 
		 }
			
	
	 },
	 search(){
		 this.current=1
		 this.info=[]
		this.getInfo() 
	 },
    toDetail(item) {
      this.until.href(`/views/baobiao/xiangmuDetailTwo.html?deptNm=${item.deptName}&projNm=${item.projName}&projId=${item.projId}&deptId=${item.deptId}`);
    },
    changeTab(index) {
      this.currentIndex = index;
    },
    onConfirm(val) {
      this.dateTime = this.getNowDate(val);
      this.showPicker = false;
    },
    getNowDate(val) {
      let nowDate = new Date(val);
      let year = nowDate.getFullYear();
      let month =
        nowDate.getMonth() + 1 < 10
          ? "0" + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1;
      return year + "-" + month;
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  background-color: #f1f3f2;
  min-height: 100vh;
  .top {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 50;
    .tab {
      width: 100%;
      background-color: #ffffff;
      height: 1rem;
      display: flex;
      border-bottom: 1px solid #d9d9d9;
      .tabList {
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.3rem;
        font-weight: 500;
        color: #999999;
      }
      .active {
        border-bottom: 1px solid #ca093a;
        font-size: 0.3rem;
        font-weight: bold;
        color: #ca093a;
        transition: 0.5s;
      }
    }
    .bodyContent {
      background-color: #f1f3f2;
      padding: 0.3rem 0.2rem;
      box-sizing: border-box;
      .workHours {
        height: 0.88rem;
        width: 100%;
        background-image: url(../../../assets/img/总分背景.png);
        background-size: 100% 100%;
        text-align: center;
        line-height: 0.88rem;
        font-size: 0.3rem;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .searchBox {
      margin-top: 0.3rem;
      display: flex;
      justify-content: space-around;
      .boxOne {
        width: 2.63rem;
        height: 0.6rem;
        border: 1px solid #d9d9d9;
        background-color: #ffffff;
        input {
          width: 100%;
          height: 100%;
          padding: 0.2rem;
          box-sizing: border-box;
          font-size: 0.24rem;
          border: 0;
        }
        input::placeholder {
          font-size: 0.24rem;
          font-weight: 500;
          color: #999999;
        }
      }
      .boxTwo {
        width: 2.63rem;
        height: 0.6rem;
        border: 1px solid #d9d9d9;
        display: flex;
        background-color: #ffffff;
        padding: 0.2rem;
        box-sizing: border-box;
        align-items: center;
        p {
          font-size: 0.24rem;
          font-weight: 500;
          color: #999999;
        }
        img {
          width: 0.28rem;
          height: 0.26rem;
        }
      }
      .btnSearch {
        width: 1.44rem;
        height: 0.6rem;
        background: #ca093a;
        border-radius: 0.04rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.28rem;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .header {
      height: 0.62rem;
      background: #9f9f9f;
      box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
      border-radius: 0.1rem;
      margin-top: 0.3rem;
      display: flex;
      .headname {
        text-align: center;
        line-height: 0.62rem;
        font-size: 0.24rem;
        color: #ffffff;
        flex: 1;
      }
    }
  }
  .bottom {
    padding: 0.2rem 0.2rem;
	padding-top: 0;
    box-sizing: border-box;
    background-color: #f1f3f2;
    .list {
      padding: 0.3rem 0;
      background: #ffffff;
      box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
      border-radius: 0.1rem;
      display: flex;
      margin-bottom: 0.1rem;
      .listName {
        font-size: 0.24rem;
        color: #333333;
        line-height: 0.24rem;
        text-align: center;
        flex: 1;
      }
    }
  }
}
</style>
