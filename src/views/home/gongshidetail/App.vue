<template>
  <div class="container">
    <div class="top">
      {{ info.realName }}提交的{{ typeName }}工时
      <img
        v-show="statusUrl(info.audit)"
        :src="statusUrl(info.audit)"
        alt=""
        class="status"
      />
    </div>
    <div class="center">
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
      <div class="box" v-for="(item, index) in info.projs" :key="index">
        <div class="title" v-show="index == 0">服务项目：</div>
        <div class="content">
          <span v-if="item.projCatNames.indexOf(',') == -1">
            {{ item.projCatNames }}</span
          >
          <span v-else>
            {{ item.projCatNames.match(/(\S*),/)[1] }}({{
              item.projCatNames.match(/,(\S*)/)[1]
            }})</span
          >
        </div>
        <div class="content">{{ item.projNames }}</div>
      </div>
      <div class="box">
        <div class="title">工作内容：</div>
        <div class="content">{{ info.jobNames }}</div>
      </div>
      <div class="box">
        <div class="title">备注：</div>
        <div class="content" style="white-space: pre">{{ info.rmks }}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">流程</div>
      <div class="item">
        <div class="left">
          <img src="~@/assets/img/avatar.jpg" alt="" class="avatar" />
          <div class="content">
            <div class="role">我</div>
            <div class="detail">发起申请</div>
          </div>
        </div>
        <div class="right">12-28 22:08</div>
      </div>

      <div class="line"></div>
      <div class="item" style="position: relative">
        <div class="left">
          <div class="circle_box" style="margin-right: 0.1rem">国华</div>
          <div class="content">
            <div class="role">徐国华（已同意）</div>
            <div class="detail">审批人</div>
          </div>
        </div>
        <div class="right">12-28 22:30</div>
        <input type="text" disabled value="同意" class="annotation" />
      </div>
      <div class="line"></div>
      <div class="item">
        <div class="left">
          <img src="~@/assets/img/已抄送.png" class="avatar" alt="" />
          <div class="content">
            <div class="role">已抄送2人</div>
            <div class="detail">抄送人</div>
          </div>
        </div>
        <div class="right">
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <div class="circle_box" style="margin-bottom: 0.1rem">张伟</div>
            <div class="detail">张伟</div>
          </div>
          <div
            class="detail"
            style="
              font-weight: 800;
              margin: 0rem 0.2rem;
              height: 0.65rem;
              line-height: 0.65rem;
            "
          >
            +
          </div>
          <div>
            <div class="circle_box" style="margin-bottom: 0.1rem">阿门</div>
            <div class="detail">张阿门</div>
          </div>
        </div>
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
      info: "",
      typeName: "",
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
      // this.info = JSON.parse(res.params);
      this.info = res;
      this.info.jobNames = this.info.jobNames.join(",");
      if (this.info.types == 2) {
        document.title = "补录详情";
        this.typeName = "补录";
      }
      // console.log(77, this.info);
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

  .center {
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
  .bottom {
    background: #fff;
    padding: 0.4rem;
    margin-top: 0.1rem;
    .title {
      font-size: 0.3rem;
      font-weight: bold;
      color: #303030;
      margin-bottom: 0.28rem;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .detail {
        font-size: 0.24rem;
        font-weight: 500;
        color: #909090;
        line-height: 0.24rem;
      }
      .left {
        display: flex;
        .avatar {
          width: 0.65rem;
          height: 0.65rem;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 0.1rem;
        }
        .content {
          .role {
            font-size: 0.24rem;
            font-weight: 500;
            color: #303030;
            line-height: 0.24rem;
            margin-bottom: 0.1rem;
          }
        }
      }
      .right {
        font-size: 0.22rem;
        font-weight: 400;
        color: #909090;
        line-height: 0.24rem;
        display: flex;
      }
      .annotation {
        position: absolute;
        bottom: -1rem;
        left: 0.75rem;
        height: 0.8rem;
        line-height: 0.8rem;
        padding-left:.2rem;
        border: none;
        background: #f3f3f7;
        width: 5.15rem;
        box-sizing: border-box;
        border-radius: 5px;

      }
    }
    .line {
      width: 1px;
      height: 0.94rem;
      background: #000000;
      opacity: 0.2;
      margin: 0.1rem 0.32rem;
    }
    .circle_box {
      width: 0.65rem;
      height: 0.65rem;
      background: #02a0ea;
      border-radius: 50%;
      font-size: 0.24rem;
      color: #ffffff;
      line-height: 0.65rem;
      text-align: center;
    }
  }
}
</style>
