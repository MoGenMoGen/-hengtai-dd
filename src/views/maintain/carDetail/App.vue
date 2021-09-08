<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  min-height: 100%;
  background: @backgroundColor;
  /*display: flex;*/
  /*display: -webkit-flex;*/
  /*flex-direction: column;*/
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
    margin-bottom: 0.8rem;
    -webkit-overflow-scrolling: touch;
    /*flex: 1;*/
    /*overflow: auto;*/
    /*-webkit-overflow-scrolling: touch;*/
  }
  > button {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
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
  .serviceList {
    padding: 0.25rem 0.3rem;
    border-bottom: 1px solid @borderColor;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    .content {
      flex: 1;
      > p {
        line-height: 0.6rem;
        span {
          display: inline-block;
          width: 2rem;
        }
      }
    }
  }
}
</style>

<template>
  <div id="container">
    <div class="toptitle">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      车辆详情
    </div>
    <div class="main">
      <div class="status">车辆信息</div>
      <div class="info">
        <div>
          <p><span>品牌型号：</span>{{ info.brandModel }}</p>
          <p><span>车牌号码：</span>{{ info.vehicleNum }}</p>
          <p><span>车架号码：</span>{{ info.vin }}</p>
          <p><span>发动机号：</span>{{ info.engineNum }}</p>
        </div>
        <div>
          <p><span>上牌日期：</span>{{ info.licenseTime }}</p>
          <p><span>年检 ：</span>{{ info.annualInspectTime }}</p>
          <p><span>成交价（万）：</span>{{ info.finalPrice }}</p>
          <p><span>公里数（万）：</span>{{ info.mileage }}</p>
          <p><span>整备人：</span>{{ info.prepareReponsibleMan }}</p>
        </div>
        <div>
          <p><span>排量：</span>{{ info.displacement }}</p>
          <p><span>颜色：</span>{{ info.vehicleColor }}</p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>保险信息</div>
        <div class="information">
          <p><span>交强险公司：</span>{{ info.compulsoryInsuranceUnit }}</p>
          <p>
            <span>保险期间： </span>{{ info.compulsoryInsuranceTimeUp }} 至
            {{ info.compulsoryInsuranceTimeTo }}
          </p>
          <p><span>商业险公司： </span>{{ info.commercialInsuranceUnit }}</p>
          <p>
            <span>保险期间： </span>{{ info.commercialInsuranceTimeUp }} 至
            {{ info.commercialInsuranceTimeTo }}
          </p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>按揭信息</div>
        <div class="information">
          <p><span>按揭公司：</span>{{ info.mortgageUnit }}</p>
          <p><span>业务员：</span>{{ info.mortageSaler }}</p>
          <p><span>联系方式：</span>{{ info.mortageSalerPhone }}</p>
          <p><span>按揭年限：</span>{{ info.mortageYears }}</p>
          <p><span>押金：</span>{{ info.mortageDeposit }}</p>
          <p><span>贷款金额：</span>{{ info.loanAmount }}</p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>保养信息</div>
        <div class="information">
          <p><span>最新保养时间：</span> {{ info.recentMaintainDate }}</p>
          <p><span>下次保养时间： </span>{{ info.nextMaintainDate }}</p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>年检信息</div>
        <div class="information">
          <p><span>最新年检时间：</span> {{ info.recentInspectDate }}</p>
          <p><span>下次年检时间： </span>{{ info.nextInspectDate }}</p>
        </div>
      </div>
      <div class="situation">
        <div class="title"><span></span>特殊赠送</div>
        <p>{{ info.specialGift ? info.specialGift : "暂无" }}</p>
      </div>
      <div class="situation">
        <div class="title"><span></span>备注信息</div>
        <p>{{ info.rmks ? info.rmks : "暂无" }}</p>
      </div>
      <div class="situation">
        <div class="title"><span></span>服务项目</div>
        <div
          class="serviceList"
          v-for="item in serviceRecords"
          :key="item.id"
          @click="toDetail(item.worksheetId)"
        >
          <div class="content">
            <!--type: "1:年检，2:续保，3:精洗，4:保养"-->
            <p v-if="item.type == 1"><span>服务项目：</span>年检服务</p>
            <p v-if="item.type == 2"><span>服务项目：</span>续保服务</p>
            <p v-if="item.type == 3"><span>服务项目：</span>精洗服务</p>
            <p v-if="item.type == 4"><span>服务项目：</span>保养服务</p>
            <p><span>服务时间：</span>{{ item.serviceTime }}</p>
          </div>
          <span class="iconfont">&#xe63f;</span>
        </div>
      </div>
      <div class="situation" v-if="followList.length > 0">
        <div class="title"><span></span>跟进记录</div>
        <follow-list ref="follow"></follow-list>
      </div>
    </div>
    <button @click="toPage">新建跟进记录</button>
  </div>
</template>

<script>
import followList from "@/components/followDetailList";
export default {
  data() {
    return {
      id: "",
      info: {},
      serviceRecords: [],
      followList: [{}],
    };
  },
  components: {
    followList,
  },
  created() {},
  mounted() {
    this.id = this.until.getQueryString("id");
    this.getInfo();
  },
  methods: {
    toDetail(id) {
      this.until.href("/views/maintain/finished.html?id=" + id);
    },
    async getInfo() {
      let myData = await this.api.carDetail(this.id);
      this.info = myData.vehicleCustomerVo;
      this.serviceRecords = myData.serviceRecords.maintenanceInfoVoList;
      this.serviceRecords.forEach((item) => {
        item.serviceTime = item.serviceTime
          ? item.serviceTime.split(" ")[0]
          : "";
      });
      this.getFollow();
    },
    async getFollow() {
      let param = {
        vehicleId: this.info.vehicleId,
        customerId: this.info.customerId,
      };
      let id = await this.api.getFollowId(param);

      if (id) {
        let data = await this.api.followDetail(id);
        this.followList = data.followItemVoList;
        this.followList.forEach((item) => {
          item.nextFollowDate = item.nextFollowDate
            ? item.nextFollowDate.split(" ")[0]
            : "";
        });
        // console.log(this.followList)

        this.$refs.follow.getList(JSON.stringify(this.followList));
      } else {
        this.followList = [];
      }
    },

    toPage() {
      let url =
        "/views/maintain/creat.html?carInfo=" + JSON.stringify(this.info);
      this.until.href(url);
    },
     back() {
      this.until.back();
    },
  },
};
</script>

