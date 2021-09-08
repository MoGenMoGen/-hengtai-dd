<template>
  <div id="container">
    <div class="tabBar">
      <div class="item" @click="tofollow">
        <img src="~@/assets/img/followup.png" />
        <div>跟进</div>
      </div>
      <a :href="'tel:' + userinfo.data.phone" class="item">
        <img src="~@/assets/img/tel.png" />
        <div>电话</div>
      </a>
      <div class="item" @click="copywxtap" ref="copytext">
        <img src="~@/assets/img/vx.png" />
        <div>微信</div>
      </div>
      <div class="item" @click="toChange">
        <img src="~@/assets/img/needschange.png" />
        <div>修改需求</div>
      </div>
    </div>
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      客户详情
    </div>
    <div class="head">
      <!-- <div class="level">
				{{userinfo.data.intentionLevel}}
			</div> -->
      <div class="headTitle">
        <div class="name">
          {{ userinfo.data.name }}
        </div>
        <!-- <div class="rmks" v-if="userinfo.data.sex == 1">（女）</div>
        <div class="rmks" v-else-if="userinfo.data.sex == 2">（女）</div>
        <div class="rmks" v-else>（未知）</div> -->
        <div class="rmks">({{ userinfo.data.sex }})</div>
        <div class="clock">
          <img src="~@/assets/img/clock.png" />
          <span>{{ relativeTime }}跟进</span>
        </div>
      </div>
      <div class="headList">
        <div class="list">
          <div class="listHead">手机号:</div>
          <div class="listContent">
            {{ userinfo.data.phone }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">微信号:</div>
          <div class="listContent">
            {{ userinfo.data.wxId }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">客户来源:</div>
          <div class="listContent">
            {{ userinfo.data.source }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">销售:</div>
          <div class="listContent">
            {{ userinfo.data.saler }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">最近跟进时间:</div>
          <div class="listContent">
            {{ userinfo.data.lastFollowUpTime }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">下次跟进时间:</div>
          <div class="listContent">
            {{ userinfo.data.nextFollowUpTime }}
          </div>
        </div>
      </div>
    </div>
    <div class="bodyContent">
      <div class="contentTitle">基本信息</div>
      <div class="bodyList">
        <div class="list">
          <div class="listHead">性别:</div>
          <!-- <div class="listContent" v-if="userinfo.data.sex == 1">女</div>
          <div class="listContent" v-else-if="userinfo.data.sex == 2">男</div>
          <div class="listContent" v-else>未知</div> -->
          <div class="listContent">{{ userinfo.data.sex }}</div>
        </div>
        <div class="list">
          <div class="listHead">重点客户:</div>
          <div class="listContent">
            {{ userinfo.data.important ? "是" : "否" }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">客户区域:</div>
          <div class="listContent">
            {{ userinfo.data.region }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">客户性质:</div>
          <div class="listContent">
            {{ userinfo.data.nature }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">客户来源:</div>
          <div class="listContent">
            {{ userinfo.data.source }}
          </div>
        </div>
      </div>
    </div>
    <div class="bodyContent">
      <div class="contentTitle">买车需求</div>
      <div class="bodyList">
        <div class="list">
          <div class="listHead">品牌:</div>
          <div class="listContent">
            {{ buyInfo.data.brand }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">车系:</div>
          <div class="listContent">
            {{ buyInfo.data.series }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">车型:</div>
          <div class="listContent">
            {{ buyInfo.data.model }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">价格区间:</div>
          <div class="listContent">
            {{ buyInfo.data.minPrice }}~{{ buyInfo.data.maxPrice }}万
          </div>
        </div>
        <!-- <div class="list">
          <div class="listHead">车身颜色:</div>
          <div class="listContent">
            {{ buyInfo.data.color }}
          </div>
        </div> -->
        <div class="list">
          <div class="listHead">里程数:</div>
          <div class="listContent">
            {{ buyInfo.data.mileage }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">是否按揭:</div>
          <div class="listContent">
            {{ buyInfo.data.isMortgage == 1 ? "否" : "是" }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">意向描述:</div>
          <div class="listContent">
            {{ buyInfo.data.describes }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">意向等级:</div>
          <div class="listContent">
            {{ userinfo.data.intentionLevelInfo }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">购买类型:</div>
          <div class="listContent">{{ userinfo.data.business }}</div>
        </div>
        <div class="list">
          <div class="listHead">下次跟进时间:</div>
          <div class="listContent">{{ userinfo.data.nextFollowUpTime }}</div>
        </div>
      </div>
    </div>
    <div class="bodyContent">
      <div class="contentTitle">卖车需求</div>
      <div class="bodyList">
        <div class="list">
          <div class="listHead">卖车需求:</div>
          <div class="listContent">
            {{ userinfo.data.isSell ? "是" : "否" }}
          </div>
        </div>
        <!-- <div class="list">
          <div class="listHead">品牌车系:</div>
          <div class="listContent">
            {{ sellInfo.data.brandModel }}
          </div>
        </div> -->
        <div class="list">
          <div class="listHead">品牌:</div>
          <div class="listContent">
            {{ sellInfo.data.brand }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">车系:</div>
          <div class="listContent">
            {{ sellInfo.data.series }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">车型:</div>
          <div class="listContent">
            {{ sellInfo.data.model }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">里程数:</div>
          <div class="listContent">{{ sellInfo.data.mileage }}（万公里）</div>
        </div>
        <div class="list">
          <div class="listHead">上牌时间:</div>
          <div class="listContent">
            {{ sellInfo.data.licensingTime }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">备注:</div>
          <div class="listContent">
            {{ sellInfo.data.remarks }}
          </div>
        </div>
      </div>
    </div>
    <div class="bodyContent">
      <div class="contentTitle">更多信息</div>
      <div class="bodyList">
        <div class="list">
          <div class="listHead">老客户介绍人:</div>
          <div class="listContent">
            {{ userinfo.data.introducer }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">备用号:</div>
          <div class="listContent">
            {{ userinfo.data.sparePhone }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">身份证号:</div>
          <div class="listContent">
            {{ userinfo.data.idcard }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">生日:</div>
          <div class="listContent">
            {{ userinfo.data.birthday }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">所在地:</div>
          <div class="listContent">
            {{ userinfo.data.location }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">联系地址:</div>
          <div class="listContent">
            {{ userinfo.data.contactAddress }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">兴趣:</div>
          <div class="listContent">
            {{ userinfo.data.hobby }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">职业:</div>
          <div class="listContent">
            {{ userinfo.data.occupation }}
          </div>
        </div>
        <div class="list">
          <div class="listHead">相册:</div>
          <div class="listContent">
            <!-- <img :src="item" v-for="(item, index) in userinfo1.data.pic.split(',')" :key="index" /> -->
            <el-image
              style="width: 1.6rem; height: 1.6rem; margin-right: 0.2rem"
              :src="item"
              :preview-src-list="userinfo.data.pic.split(',')"
              v-for="(item, index) in userinfo.data.pic.split(',')"
              :key="index"
            >
            </el-image>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="tab">
        <div
          class="tabList"
          v-for="(item, index) in tabList"
          :key="index"
          @click="tabChange(index)"
          :class="{ active: currentIndex == index }"
        >
          {{ item.name }}
          <span>({{ item.num }})</span>
        </div>
      </div>
      <div class="" style="margin-top: 0.6rem">
        <!-- 轨迹 -->
        <el-timeline :reverse="true" v-if="currentIndex == 0">
          <el-timeline-item
            v-for="(item, index) in trailList"
            :key="index"
            :color="activeColor(item.nextFollowUpTime)"
          >
            <div class="content">
              <div class="head">
                <span>{{ item.behavior }}</span>
                <span>
                  {{ item.saler }}
                </span>
                <div class="time">
                  {{ item.crtTm }}
                </div>
              </div>
              <div class="contentBody">
                <div
                  class="type"
                  v-for="(conitem, conindex) in trailContentList(item.content)"
                  :key="conindex"
                >
                  <span>{{ conitem }}</span>
                </div>
                <div style="display: flex; flex-wrap: wrap; width: 100%">
                  <div
                    style="width: 30%"
                    v-for="(picitem, picindex) in item.pic.split(',')"
                    :key="picindex"
                  >
                    <img
                      :src="picitem"
                      style="width: 1.6rem; height: 1.6rem"
                      alt=""
                    />
                  </div>
                </div>
                <!-- <div class="type">{{item.content}}</div> -->
                <div class="type">
                  <span>下次跟进时间： </span>
                  <span>{{ item.nextFollowUpTime }}</span>
                </div>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
        <!-- 订单 -->
        <el-timeline :reverse="true" v-else>
          <el-timeline-item
            v-for="(item, index) in orderList"
            :key="index"
            :color="activeColor(item.crtTm)"
          >
            <div class="content">
              <div class="head">
                <span>{{ item.behavior }}</span>
                <span>
                  {{ item.saler }}
                </span>
                <div class="time">
                  {{ item.crtTm }}
                </div>
              </div>
              <span>{{item.content}}</span>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import Bg from "@/assets/img/bg.png";
import moment from "moment";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: "",
      Bg,
      currentIndex: 0,
      info: {},
      // 用户信息
      userinfo: {},
      // 买车信息
      buyInfo: {},
      // 卖车信息
      sellInfo: {},
      userinfo1: {
        data: {
          pic: "https://tse1-mm.cn.bing.net/th/id/R-C.8c372fd892b3bd371eb3a1df8bd7fc88?rik=4KxekfOQD28FKA&riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fscenery%2f20170303%2fdfe53a7300794009a029131a062836d5.jpg&ehk=6ayU5y%2fwtGnzhu7g%2bJimm2REgEbHGczl9Mkbg3I1%2b5I%3d&risl=&pid=ImgRaw&r=0,https://tse1-mm.cn.bing.net/th/id/R-C.33674725d9ae34f86e3835ae30b20afe?rik=Pb3C9e5%2b%2b3a9Vw&riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fscenery%2f20180626%2f4c8157d07c14a30fd76f9bc110b1314e.jpg&ehk=9tpmnrrRNi0eBGq3CnhwvuU8PPmKuy1Yma0zL%2ba14T0%3d&risl=&pid=ImgRaw&r=0,https://tse1-mm.cn.bing.net/th/id/R-C.33674725d9ae34f86e3835ae30b20afe?rik=Pb3C9e5%2b%2b3a9Vw&riu=http%3a%2f%2fwww.desktx.com%2fd%2ffile%2fwallpaper%2fscenery%2f20180626%2f4c8157d07c14a30fd76f9bc110b1314e.jpg&ehk=9tpmnrrRNi0eBGq3CnhwvuU8PPmKuy1Yma0zL%2ba14T0%3d&risl=&pid=ImgRaw&r=0",
        },
      },
      // 轨迹内容列表
      trailList: [],
      // 订单列表
      orderList: [],
      tabList: [
        {
          name: "轨迹",
          num: 0,
        },
        {
          name: "订单",
          num: 0,
        },
      ],
    };
  },
  computed: {
    // 相对时间
    relativeTime() {
      // return moment([this.userinfo.data.nextFollowUpTime]).fromNow();
      let year = moment(this.userinfo.data.nextFollowUpTime).format("YYYY");
      let month = parseInt(
        moment(this.userinfo.data.nextFollowUpTime).format("MM")
      );
      let day = moment(this.userinfo.data.nextFollowUpTime).format("DD");
      // 跟进时间在现在之前
      if (
        moment(this.userinfo.data.nextFollowUpTime).valueOf() <
        moment().valueOf()
      ) {
        return moment(this.userinfo.data.nextFollowUpTime).to(moment());
      } else {
        return moment(this.userinfo.data.nextFollowUpTime).from(moment());
      }
    },
    // 轨迹变更列表
    trailContentList() {
      console.log(1);
      return function (content) {
        if (content) {
          return content.split(";");
        } else {
          return [];
        }
      };
    },
     
    // 时间线颜色
    activeColor() {
      return function (nexttime) {
        if (moment(nexttime).valueOf() < moment().valueOf()) return "#09c076";
        return "";
      };
    },
  },
  async mounted() {
    // console.log("相对日期", this.relativeTime);
  },
  async created() {
    moment.locale("zh-cn");
    console.log(typeof moment().format("YYYY"));
    this.id = this.until.getQueryString("id");
    // 获取详情信息
    let info = await this.api.getcustomerDetail(this.id);
    this.userinfo = info.customer;

    this.sellInfo = info.sell;
    this.buyInfo = info.buy;
    console.log("userinfo", this.userinfo);

    // 获取轨迹信息
    let trailData = await this.api.gettrail(
      encodeURIComponent(
        JSON.stringify({
          w: [{ customerId: this.id }],
          o: [{ k: "id", t: "desc" }],
          p: { n: 1, s: 100 },
        })
      )
    );
    console.log(111111,trailData);
    this.trailList =trailData.data.list;
    this.tabList[0].num=trailData.page.total;

    // 获取订单信息
     let orderData= await this.api.getorder(
      encodeURIComponent(
        JSON.stringify({
          w: [{ customerId: this.id }],
          o: [{ k: "id", t: "desc" }],
          p: { n: 1, s: 100 },
        })
      )
    );
    this.orderList=orderData.data.list;
    this.tabList[1].num=orderData.page.total;

  },
  methods: {
    back() {
      this.until.back();
    },
    tabChange(index) {
      this.currentIndex = index;
    },
    toChange() {
      this.until.href("/views/customermagt/new.html?id=" + this.id);
    },
    tofollow() {
      this.until.href("/views/customermagt/newfollow.html?id=" + this.id);
    },
    copywxtap() {
      this.copyContent = this.userinfo.data.wxId; //也可以直接写上等于你想要复制的内容
      var input = document.createElement("input"); // 直接构建input
      input.value = this.copyContent; // 设置内容
      console.log(input.value);
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(input); // 删除临时实例
      Toast("微信号复制成功");
    },
  },
};
</script>
<style lang="less">
.el-timeline-item {
  margin-bottom: -0.24rem;
}
</style>
<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  // width: 100%;
  // height: 100%;
  padding-bottom: 4rem;
  background: url("~@/assets/img/header.png") no-repeat;
  background-color: #f1f3f2;
  background-size: 100% 1.28rem;
  // overflow: hidden;

  /*display: flex;*/
  /*display: -webkit-flex;*/
  .tabBar {
    display: flex;
    // justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 199;
    width: 100%;
    height: 1rem;
    background: #ffffff;
    border-top: 0.02rem solid #f1f3f2;
    .item {
      text-align: center;
      width: 25%;
      font-size: 0.22rem;
      font-weight: 500;
      color: #999999;
      img {
        width: 0.38rem;
        height: 0.38rem;
      }
    }
  }
  .title {
    width: 100%;
    height: 1.28rem;
    position: relative;
    line-height: 1.28rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: 500;
    color: #ffffff;

    img {
      height: 0.31rem;
      width: 0.17rem;
      position: absolute;
      top: 50%;
      left: 0.36rem;
      transform: translateY(-50%);
    }
  }

  .head {
    padding: 0.26rem 0.3rem;
    margin-top: 0.1rem;
    background-color: #ffffff;
    border-radius: 0.12rem;
    box-sizing: border-box;
    position: relative;

    .headTitle {
      display: flex;
      align-items: center;

      .name {
        font-size: 0.28rem;
        font-weight: bold;
        color: #303030;
      }

      .rmks {
        font-size: 0.24rem;
        font-weight: 500;
        color: #303030;
        margin-left: 0.1rem;
      }

      .clock {
        padding: 0.05rem 0.22rem;
        background: rgba(255, 51, 51, 0);
        border: 0.02rem solid #ff3333;
        border-radius: 0.4rem;
        margin-left: 0.38rem;

        img {
          width: 0.2rem;
          height: 0.2rem;
        }

        span {
          font-size: 0.22rem;
          font-weight: 500;
          color: #ff3333;
        }
      }
    }

    .headList {
      margin-top: 0.16rem;

      .list {
        display: flex;
        font-size: 0.24rem;
        font-weight: 500;
        color: #606060;
        margin-top: 0.2rem;

        .listHead {
          width: 1.6rem;
        }

        .listContent {
          margin-left: 0.24rem;
        }
      }
    }

    .level {
      background: url("~@/assets/img/level.png") no-repeat;
      background-size: 0.76rem 0.74rem;
      position: absolute;
      top: 0.48rem;
      right: 0.46rem;
      width: 0.76rem;
      height: 0.74rem;
      text-align: center;
      line-height: 0.74rem;
      font-size: 0.44rem;
      font-weight: bold;
      color: #ffffff;
    }
  }

  .bodyContent {
    margin-top: 0.1rem;
    padding: 0.4rem 0.48rem;
    background: #ffffff;
    border-radius: 0.12rem;

    .contentTitle {
      border-left: 0.06rem solid #09c076;
      padding: 0 0.1rem;
      font-size: 0.24rem;
      font-weight: bold;
      color: #09c076;
    }

    .bodyList {
      margin-top: 0.3rem;

      .list {
        display: flex;
        margin-top: 0.3rem;
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #303030;

        .listHead {
          width: 1.7rem;
        }

        .listContent {
          margin-left: 0.16rem;
          width: 4.7rem;
          overflow: hidden;
          white-space: normal;
          word-break: break-all;
        }
      }
    }
  }

  .bottomBox {
    padding: 0.5rem;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 0.12rem;
    margin-top: 0.1rem;

    .tab {
      display: flex;

      .tabList {
        transition: all 0.5s;
        margin-right: 0.8rem;
        position: relative;
      }

      .active {
        font-size: 0.3rem;
        font-weight: bold;
        color: #09c076;
        transition: all 0.5s;
        position: relative;
      }

      .active:after {
        content: " ";
        width: 1.08rem;
        height: 0.04rem;
        background-color: #09c076;
        position: absolute;
        bottom: -0.12rem;
        left: 0;
      }
    }
    .content {
      margin-top: 0.2rem;
      .head {
        font-size: 0.24rem;
        font-weight: 500;
        color: #909090;
        display: flex;
        padding: 0;
        span {
          position: relative;
          margin-right: 0.42rem;
        }
        span::after {
          content: "";
          width: 0.02rem;
          height: 0.2rem;
          background-color: #909090;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -0.21rem;
        }
      }
      .contentBody {
        margin-top: 0.2rem;
        font-size: 0.24rem;
        font-weight: 500;
        color: #303030;
        .type {
          display: flex;
        }
      }
    }
  }
}
</style>
