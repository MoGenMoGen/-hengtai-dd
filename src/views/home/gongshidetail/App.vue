<template>
  <div class="container">
    <div class="top">
      王小虎提交的工时
      <img :src="pending" alt="" class="status" />
    </div>
    <div class="bottom">
      <div class="box">
        <div class="title">工作日期：</div>
        <div class="content">2021-12-28</div>
      </div>
      <div class="box">
        <div class="title">工作时间：</div>
        <div class="content">9:00-17:30</div>
      </div>
      <div class="box">
        <div class="title">工作时长：</div>
        <div class="content">7.00小时/1.00天</div>
      </div>
      <div class="box">
        <div class="title">服务项目：</div>
        <div class="content">（运营店）</div>
        <div class="content">博白项目、龙南项目、博白项目、龙南项目</div>
      </div>
      <div class="box">
        <div class="title">工作内容：</div>
        <div class="content">品质检查，节点管控，会议</div>
      </div>
      <div class="box">
        <div class="title">备注：</div>
        <div class="content" style="white-space: pre">{{ info }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Notify } from "vant";
import pending from "../../../assets/img/待审批.png";
// import 'vant/lib/index.css'
export default {
  data() {
    return {
      info: "1、与品管组进行品质检查工作；\n2、内部沟通当前进度，重新更新节点进度表；\n3、组织召开每周项目例会，汇报各部门工作情况。\n",
      pending,
    };
  },
  mounted() {
    let id = this.until.getQueryString("id");
    this.api.getProjwhreportDetail(id).then((res) => {
      console.log(res);
      let a = JSON.parse(res.params);
      console.log(77, a);
    });
    this.nowDate = this.getNowDate();
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
      height: .74rem;
	  position: absolute;
	  bottom:-.36rem;
	  right:.6rem;
	  object-fit: cover;
    }
  }

  .bottom {
    background: #fff;
    padding: 0.3rem 0.4rem;
    margin-top: 0.1rem;
    .box {
      margin-bottom: .2rem;
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
