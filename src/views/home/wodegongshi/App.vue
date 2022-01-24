<template>
  <div class="content">
    <div class="tab">
      <div
        class="tabList"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
        :class="currentIndex == index ? 'active' : ''"
      >
        {{ item }}
      </div>
    </div>
    <van-list
      class="bodycontent"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getInfo()"
	  :immediate-check="immediate"
    >
      <div
        class="contentList"
        v-for="(item, index) in infoList"
        :key="index"
        @click="toDetail(item.id)"
      >
        <div class="title">
          <div class="name">{{ item.realName }}提交的{{item.types==1?'工时填报':'工时补录'}}</div>
          <div class="time">
            {{ item.workDate }}
          </div>
        </div>
        <div class="infolist">
          <div class="list">
            <div class="listLeft">工作时间：</div>
            <div class="listRight">
              {{ item.workTimeStart }}-{{ item.workTimeEnd }}
            </div>
          </div>
          <div class="list">
            <div class="listLeft">工作时长：</div>
            <div class="listRight">
              {{ item.workHours }}小时/{{ item.workDays }}天
            </div>
          </div>
          <div class="list">
            <div class="listLeft">服务项目：</div>
            <div class="listRight">{{ item.projNames }}</div>
          </div>
        </div>
        <img :src="daishenpi" v-if="item.audit == 1" />
        <img :src="tongguo" v-if="item.audit == 2" />
        <img :src="butongguo" v-if="item.audit == 3" />
        <div class="btn" v-if="item.audit==1" >
          <div class="btnLeft" @click.stop="modify(item.id)">修改</div>
          <div class="btnRight" @click.stop="remove(item,index)">删除</div>
        </div>
      </div>
    </van-list>
  </div>
</template>  
<script>
import { Notify } from "vant";
import { Dialog } from "vant";
import daishenpi from "../../../assets/img/待审批.png";
import tongguo from "../../../assets/img/审批通过.png";
import butongguo from "../../../assets/img/审批不通过.png";
export default {
  data() {
    return {
      daishenpi,
      tongguo,
      butongguo,
      currentIndex: 0, //0全部,1待审批,2已审批
      tabList: ["全部", "待审批", "已审批"],
      current: 1,
      size: 5,
      infoList: [],
      //   shopAlllist: [], //全部店铺数组
      shoplist1: [], //店铺数组一
      shoplist2: [], //店铺数组二
      finished: false,
      loading: false,
	  immediate:false,
	  total:'',
    };
  },
  async mounted() {
    // this.shoplist = await this.api.getprojcatListAll("1476099168979910658");
    // this.shoplist = await this.api.getprojcatListAll("1476099222931243010");
    console.log(1111, this.shoplist1);
	this.getInfo()
  },
  methods: {
    changeTab(index) {
      this.currentIndex = index;
      this.current = 1;
      this.infoList = [];
      this.getInfo();
    },
    getInfo() {
     
      let obj = {
        current: this.current,
        size: this.size,
        // userId_equal:"1123598821738675201"
      };
      if (this.currentIndex == 1) obj.audit_equal = 1;
      else if (this.currentIndex == 2) obj.audit_notequal = 1;

      this.api.getProjwhreportList(obj).then((res) => {
        this.total = res.total;
		
		this.current++;
        this.infoList = [...this.infoList,...res.records];
		 if( this.infoList.length >= res.total){
			 this.finished =true
		 }
		 this.loading = false;
        
     
        console.log("list", this.infoList);
      });
    },
    remove(item,index) {
      console.log(item,index);
      Dialog.confirm({
        title: "提示",
        message: "是否确认删除",
      })

        .then(() => {
          console.log(777);
		  
          this.api.removeProjwhreport(item.id).then((res) => {
            Notify({ type: "success", message: "删除成功" });
            this.infoList.splice(index,1)
          });
        })
        .catch(() => {
          Notify({
            message: "取消删除",
            color: "#ffffff",
            background: "#cccccc",
          });
        });
    },
    modify(id) {
      this.until.href(`/views/home/gongshitianbao.html?id=${id}`);
    },
    toDetail(id) {
      this.until.href(`/views/home/gongshidetail.html?id=${id}`);
    },
  },
};
</script>
<style lang="less" scoped>
	body{
		 height: 100vh;
		 background-color:#f1f3f2; ;
	}
.content {
  background-color: #f1f3f2;
  .tab {
    background-color: #f1f3f2;
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
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
  .bodycontent {
    margin-top: 1rem;
    padding: 0.2rem;
    background-color: #f1f3f2;
    box-sizing: border-box;
    .contentList {
      position: relative;
      background-color: #ffffff;
      padding: 0.4rem;
	  padding-bottom: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.1rem;
      margin-bottom: 0.2rem;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 0.28rem;
          font-weight: 500;
          color: #303030;
        }
        .time {
          font-size: 0.24rem;
          font-weight: 500;
          color: #909090;
        }
      }
      .infolist {
        margin-top: 0.4rem;
        .list {
          display: flex;
          font-size: 0.24rem;
          font-weight: 500;
          color: #606060;
          margin-bottom: 0.3rem;
          .listLeft {
			  width:1.2rem ;
          }
          .listRight {
			flex: 1;
            margin-left: 0.2rem;
          }
        }
      }
      img {
        width: 1.01rem;
        height: 0.75rem;
        position: absolute;
        right: 0.3rem;
        top: 1rem;
      }
      .btn {
        border-top: 1px solid #d9d9d9;
        display: flex;
        width: 100%;
        height: 0.86rem;
        align-items: center;
        .btnLeft {
          width: 50%;
          text-align: center;
          font-size: 0.28rem;
          font-weight: 500;
          color: #ca093a;
          border-right: 1px solid #d9d9d9;
        }
        .btnRight {
          width: 50%;
          text-align: center;
          font-size: 0.28rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
