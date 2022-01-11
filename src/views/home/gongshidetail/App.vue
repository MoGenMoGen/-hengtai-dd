<template>
  <div class="container">
    <div class="top">
      {{info.realName}}提交的工时
      <img v-show="statusUrl(detailData.audit)" :src="statusUrl(detailData.audit)" alt="" class="status" />
    </div>
    <div class="bottom">
      <div class="box">
        <div class="title">工作日期：</div>
        <div class="content">{{ info.workDate }}</div>
      </div>
      <div class="box">
        <div class="title">工作时间：</div>
        <div class="content">
          {{ info.workTimeStart }}-{{ info.workTimeEnd }}
        </div>
      </div>
      <div class="box">
        <div class="title">工作时长：</div>
        <div class="content">
          {{ info.workHours }}小时/{{ info.workDays }}天
        </div>
      </div>
      <div class="box" v-for="(item, index) in list" :key="index">
        <div class="title" v-show="index == 0">服务项目：</div>
        <div class="content">{{ item.con1 }}</div>
        <div class="content">{{ item.con2 }}</div>
      </div>
      <div class="box">
        <div class="title">工作内容：</div>
        <div class="content">{{ detailData.jobNames }}</div>
      </div>
      <div class="box">
        <div class="title">备注：</div>
        <div class="content" style="white-space: pre">{{ info.rmks }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Notify } from "vant";
import pending from "../../../assets/img/待审批.png";
import fail from "../../../assets/img/审批不通过.png";
import on from "../../../assets/img/审批通过.png";
// import 'vant/lib/index.css'
export default {
  data() {
    return {
      pending,
      on,
      fail,
      detailData:"",//详情数据
      info: "",//提交的数据
      list: [
        {
          con1: "总部(运营点)",
          con2: "博白项目、龙南项目、博白项目、龙南项目",
        },
        {
          con1: "总部(运营点)",
          con2: "博白项目、龙南项目、博白项目、龙南项目",
        },
      ],
    };
  },
  computed: {
    statusUrl() {
      return (status) => {
        if (status == 1) return this.pending;
        else if (status == 2) return this.on;
        else if (status == 3) return this.fail;
        else return "";
      };
    },
  },
  mounted() {
    let id = this.until.getQueryString("id");
    this.api.getProjwhreportDetail2(id).then((res) => {
      console.log(res);
      this.detailData=res;
      this.info = JSON.parse(res.params);
      if (this.detailData.types == 2) document.title = "补录详情";
      console.log(77, this.info);
    });
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.container {
  min-height: 100vh;
  background: #f1f3f2;
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem;
  padding-bottom: 1.6rem;
  .top {
    font-size: 0.36rem;
    font-weight: 500;
    color: #333333;
    line-height: 0.48rem;
    background: #fff;
    padding: 0.2rem 0.39rem;
    position: relative;
    .status {
      width: 1rem;
      height: 0.74rem;
      position: absolute;
      bottom: -0.36rem;
      right: 0.6rem;
      object-fit: cover;
    }
  }

  .bottom {
    background: #fff;
    padding: 0.3rem 0.4rem;
    margin-top: 0.1rem;
    .box {
      margin-bottom: 0.2rem;
      .title {
        font-size: 0.26rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #909090;
        line-height: 0.5rem;
      }
      .content {
        font-size: 0.26rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 0.3rem;
      }
    }
  }
}
</style>
