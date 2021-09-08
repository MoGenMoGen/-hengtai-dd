<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  height: 100%;
  background-color: @backgroundColor;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .toptitle {
    width: 100%;
    height: 1.28rem;
    position: relative;
    line-height: 1.28rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: 500;
    color: #ffffff;
  background: url("~@/assets/img/header.png") no-repeat;

    img {
      height: 0.31rem;
      width: 0.17rem;
      position: absolute;
      top: 50%;
      left: 0.36rem;
      transform: translateY(-50%);
    }
  }
  .main {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  > button {
    background: @color;
    color: #ffffff;
    font-size: 1.1em;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .status {
    padding: 0.35rem 0.3rem;
    color: @color;
    font-size: 1.1em;
    background: #ffffff;
    border-bottom: 1px solid @borderColor;
    margin-bottom: 0.2rem;
  }
  .info {
    background: #ffffff;
    margin-bottom: 0.2rem;
    border-top: 1px solid @borderColor;

    p {
      line-height: 0.6rem;
      span {
        display: inline-block;
        width: 2rem;
      }
    }
    > div {
      border-bottom: 1px solid @borderColor;
      padding: 0.25rem 0.3rem;
    }
  }
  .title {
    padding: 0.25rem 0.3rem;
    padding-bottom: 0;
    span {
      display: inline-block;
      background: @color;
      height: 0.25rem;
      width: 0.1rem;
      margin-right: 0.2rem;
    }
  }
  .situation {
    background: #ffffff;
    border-top: 1px solid @borderColor;
    margin-bottom: 0.2rem;
    > p {
      border-bottom: 1px solid #f4f4f4;
      padding: 0.3rem 0.3rem;
    }
  }
  .information {
    padding: 0.25rem 0.3rem;
    border-bottom: 1px solid @borderColor;
    > p {
      line-height: 0.6rem;
      span {
        display: inline-block;
        width: 2rem;
      }
    }
  }
}
</style>

<template>
  <div id="container">
    <div class="toptitle">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      客户详情
    </div>
    <div class="main">
      <div class="status">客户信息</div>
      <div class="info">
        <div>
          <p><span>行驶证名：</span>{{ info.drivingLicenseName }}</p>
          <p><span>联系电话：</span>{{ info.drivingLicenseLinkPhone }}</p>
          <p v-if="info.drivingLicenseGender == 1"><span>性别：</span>男</p>
          <p v-if="info.drivingLicenseGender == 2"><span>性别：</span>女</p>
          <p><span>民族：</span>{{ info.drivingLicenseNation }}</p>
        </div>
        <div>
          <p><span>联系人：</span>{{ info.linkMan }}</p>
          <p><span>联系电话：</span>{{ info.linkManPhone }}</p>
          <p v-if="info.gender == 1"><span>性别：</span>男</p>
          <p v-else-if="info.gender == 2"><span>性别：</span>女</p>
          <p v-else>
            <span>性别：</span>
          </p>
          <p><span>民族：</span>{{ info.nation }}</p>
        </div>
        <div>
          <p><span>身份证号码：</span>{{ info.linkManIdNum }}</p>
          <p><span>联系地址：</span>{{ info.linkAddress }}</p>
          <p><span>车辆归属地：</span>{{ info.vehicleLocation }}</p>
          <p><span>微信号：</span>{{ info.wxNum }}</p>
          <p v-if="info.level == 1"><span>客户等级：</span>直客</p>
          <p v-else-if="info.level == 2"><span>客户等级：</span>同行3</p>
          <p v-else-if="info.level == 3"><span>客户等级：</span>中介</p>
          <p v-else-if="info.level == 4"><span>客户等级：</span>优质</p>
          <p v-else-if="info.level == 5"><span>客户等级：</span>一般</p>
          <p v-else>
            <span>客户等级：</span>
          </p>
        </div>
        <div>
          <p><span>客户来源：</span>{{ info.source }}</p>
          <p><span>推荐人：</span>{{ info.recommender }}</p>
          <p><span>销售人员：</span>{{ info.salerName }}</p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>销售变更记录</div>
        <div class="information">
          <p><span>前销售人员：</span>{{ info.preSaler }}</p>
          <p><span>变更时间：</span>{{ info.changeTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      info: {},
    };
  },
  components: {},
  created() {},
  mounted() {
    this.id = this.until.getQueryString("id");
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.info = await this.api.custDetail(this.id);
    },
    back() {
      this.until.back();
    },
  },
};
</script>

