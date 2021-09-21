<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      客户管理
    </div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div class="query">
        <div class="left">
          <div class="row1">
            <van-field
              class="leftpart bg input"
              v-model="info.nameAndphone"
              placeholder="姓名、手机号"
            ></van-field>
            <van-field
              class="rightpart input bg"
              readonly
              label=""
              :value="info.business"
              placeholder="选择购买类型"
              @click="showPicker1 = true"
            />
            <van-popup v-model="showPicker1" round position="bottom">
              <van-search
                v-model="search1"
                shape="round"
                background="#09c076"
                @input="onSearch1"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="content"
                show-toolbar
                :columns="searchbuytypes"
                @cancel="showPicker1 = false"
                @confirm="handleBuysType"
              />
            </van-popup>
          </div>
          <div class="row2">
            <van-field
              style="padding: 0; text-align: center"
              class="input bg leftpart"
              readonly
              label=""
              :value="info.nature"
              placeholder="客流性质"
              @click="showPicker2 = true"
            />
            <van-popup v-model="showPicker2" round position="bottom">
              <van-search
                v-model="search2"
                shape="round"
                background="#09c076"
                @input="onSearch2"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="content"
                show-toolbar
                :columns="searchflowtypes"
                @cancel="showPicker2 = false"
                @confirm="handleFlowtype"
              />
            </van-popup>

            <van-field
              style="padding: 0; text-align: center"
              class="input bg centerpart"
              readonly
              label=""
              :value="info.saler"
              placeholder="销售顾问"
              @click="showPicker3 = true"
            />
            <van-popup v-model="showPicker3" round position="bottom">
              <van-search
                v-model="search3"
                shape="round"
                background="#09c076"
                @input="onSearch3"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="arg7"
                show-toolbar
                :columns="searchsalers"
                @cancel="showPicker3 = false"
                @confirm="handleSaler"
              />
            </van-popup>

            <van-field
              style="padding: 0; text-align: center"
              class="input bg rightpart"
              readonly
              label=""
              :value="info.intentionLevel"
              placeholder="意向等级"
              @click="showPicker4 = true"
            />
            <van-popup v-model="showPicker4" round position="bottom">
              <van-search
                v-model="search4"
                shape="round"
                background="#09c076"
                @input="onSearch4"
                placeholder="请输入搜索关键词"
              />
              <van-picker
                value-key="content"
                show-toolbar
                :columns="searchintentLevels"
                @cancel="showPicker4 = false"
                @confirm="handleIntentionLevel"
              />
            </van-popup>
          </div>
          <div class="row3">
            <van-field
              style="padding: 0; text-align: center"
              class="input bg leftpart"
              readonly
              label=""
              :value="datetype"
              placeholder="日期类型"
              @click="showPicker7 = true"
            />
            <van-popup v-model="showPicker7" round position="bottom">
              <van-picker
                value-key="content"
                show-toolbar
                :columns="dateList"
                @cancel="showPicker7 = false"
                @confirm="handledatetype"
              />
            </van-popup>
            <van-field
              style="padding: 0; text-align: center"
              class="picker son leftpart bg"
              readonly
              label=""
              :value="info.beginFollowUpTime"
              placeholder="开始日期"
              @click="showPicker5 = true"
            />
            <van-popup v-model="showPicker5" round position="bottom">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择开始日期"
                @confirm="startTimeChange"
                @cancel="showPicker5 = false"
              />
            </van-popup>
            <!-- 结束日期 -->
            <van-field
              style="padding: 0; text-align: center"
              class="picker son rightpart bg"
              readonly
              label=""
              :value="info.endFollowUpTime"
              placeholder="结束日期"
              @click="showPicker6 = true"
            />
            <van-popup v-model="showPicker6" round position="bottom">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="endTimeChange"
                @cancel="showPicker6 = false"
              />
            </van-popup>

            <!-- <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="info.beginFollowUpTime"
              @change="startTimeChange"
              :picker-options="stOptions"
              class="picker son leftpart bg"
            ></el-date-picker>
            <el-date-picker
              type="date"
              placeholder="结束日期"
              v-model="info.endFollowUpTime"
              @change="endTimeChange"
              :picker-options="etOptions"
              class="picker son rightpart bg"
            ></el-date-picker> -->
          </div>
        </div>
        <div class="right" @click="handleQuery">查询</div>
      </div>
      <div style="padding-left: 0.3rem; margin-top: -0.24rem">
        共 {{ customerList.length }} 条记录
        <span style="margin-left: 0.3rem" v-if="datetype == '按跟进日期排序'"
          >已跟进{{followedNum}}条</span
        >
      </div>

      <van-list
        class="list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="handleLoad"
      >
        <van-cell
          class="item"
          v-for="(item, index) in customerList"
          :key="index"
          @click="toDetail(item.id)"
        >
          <div class="level">{{ item.intentionLevel }}</div>
          <div class="row1">
            <div class="name">{{ item.name }}</div>
            <div class="type" v-if="item.sex == '先生'">(先生)</div>
            <div class="type" v-else-if="item.sex == '女士'">(女士)</div>
            <div class="type" v-else>(未知)</div>
          </div>
          <div class="item_row">
            <div class="key left">手机号:</div>
            <div class="value">{{ item.phone }}</div>
          </div>
          <div class="item_row">
            <div class="key left">微信号:</div>
            <div class="value">{{ item.wxId }}</div>
          </div>
          <div class="item_row">
            <div class="key left">下次跟进时间:</div>
            <div class="value">{{ item.nextFollowUpTime }}</div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
    <div class="newbtn" @click="newcustomer" v-show="hideshow">新增客户</div>
  </div>
</template>

<script>
import moment from "moment";
import { Toast } from "vant";
export default {
  data() {
    return {
      defaultHeight: "0", // 默认屏幕高度
      showHeight: 0, // 实时屏幕高度
      hideshow: true, // 显示或者隐藏保存按钮,

      currentDate: new Date(),

      // 购买类型、搜索列表、搜索值、是否显示picker
      searchbuytypes: [],
      search1: "",
      showPicker1: false,
      // 客流性质
      searchflowtypes: [],
      search2: "",
      showPicker2: false,
      // 销售顾问
      searchsalers: [],
      search3: "",
      showPicker3: false,
      // 意向等级
      searchintentLevels: [],
      search4: "",
      showPicker4: false,
      // 开始日期
      showPicker5: false,

      // 结束日期
      showPicker6: false,
      // 日期类型
      showPicker7: false,
      dateList: [
        { content: "按创建日期排序", id: 1 },
        { content: "按跟进日期排序", id: 2 },
      ],
      datetype: "按创建日期排序",

      // 上拉加载loading
      loading: false,
      finished: false,
      // 是否第一次加载van-list数据
      isfirstload: true,
      total: 0,
      // 提交给后台的数据
      info: {
        // 日期类型：创建日期、跟进日期
        orders: "创建",
        nameAndphone: "", //姓名手机
        business: "", //购买类型
        beginFollowUpTime: "", //跟进时间开始时间
        endFollowUpTime: "", //跟进时间结束时间
        nature: "", //客流性质（1首次自行，2邀约首次，3转介绍首次，4重构首次，5再次邀约，6售后服务，7牌证服务，8其他服务）
        saler: "", //销售顾问（存储为销售人员的id）
        intentionLevel: "", //意向等级（此处存储意向的id，而不会是值）
        pageNo: 1, //分页起始位置
        pageSize: 5, //分页结束位置
      },

      // 是否显示下拉loading
      isLoading: false,
      // 购买类型list
      buytypes: [],
      // 客流性质list
      flowtypes: [],
      // 销售顾问list
      salers: [],
      // 意向等级
      intentLevels: [],
      // 内容列表
      customerList: [],
    };
  },
  watch: {
    // 监听键盘弹出后屏幕高度变化
    showHeight: function () {
      if (this.defaultHeight !== this.showHeight) {
        // 键盘弹出操作
        this.hideshow = false;
      } else {
        // 键盘不弹出操作
        this.hideshow = true;
      }
    },
  },
  computed: {
    // 开始日期限制
    // 有结束日期时禁止大于结束日期的日期
    // stOptions() {
    //   let _this = this;
    //   return {
    //     disabledDate(time) {
    //       if (_this.info.endFollowUpTime)
    //         return (
    //           time.getTime() > moment(_this.info.endFollowUpTime).valueOf()
    //         );
    //     },
    //   };
    // },
    maxStdate() {
      if (this.info.endFollowUpTime != "")
        return new Date(this.info.endFollowUpTime);
      return new Date();
    },
    // 结束日期限制
    // 有开始日期时禁止小于开始日期的日期
    maxEtdate() {
      if (this.info.beginFollowUpTime != "")
        return new Date(this.info.beginFollowUpTime);

      return new Date(moment().add(10, "years"));
      // return new Date(moment().add(20, 'days'));
    },
    minEtdate() {
      if (this.info.beginFollowUpTime != "")
        return new Date(this.info.beginFollowUpTime);
    },
    // etOptions() {
    //   let _this = this;
    //   return {
    //     disabledDate(time) {
    //       if (_this.info.beginFollowUpTime) {
    //         return (
    //           time.getTime() < moment(_this.info.beginFollowUpTime).valueOf()
    //         );
    //       }
    //     },
    //   };
    // },

    // 已跟进条数
    followedNum() {
      let arr = this.customerList.filter(
        (item) => moment(item.nextFollowUpTime).valueOf() < moment().valueOf()
      );
      return arr.length;
    },
  },
  async created() {
    console.log("cereated");
    // 返回刷新
    window.onpageshow = () => {
      if (this.until.seGet("needRefresh")) {
        console.log("返回刷新");
        this.until.seRemove("needRefresh");
        location.reload();
      }
      // this.customerList = [];
      // this.onRefresh();
    };
    // 获取公共列表
    // 客流性质
    let query_flow_type = {
      w: [["category", 2, "EQ"]],
      o: ["id", "esc"],
      p: [1, 10],
    };
    this.flowtypes = await this.api.getFlowtypeList(
      this.query.toEncode(this.newqry(query_flow_type))
    );
    this.flowtypes.unshift({ content: "全部" });
    this.searchflowtypes = this.flowtypes;
    // 购买类型
    let query_buys_type = {
      w: [["category", 4, "EQ"]],
      o: ["id", "esc"],
      p: [1, 20],
    };
    this.buytypes = await this.api.getBuysTypeList(
      this.query.toEncode(this.newqry(query_buys_type))
    );
    this.buytypes.unshift({ content: "全部" });
    this.searchbuytypes = this.buytypes;
    // 销售顾问
    // let query_sales = {
    //   w: [
    //     ["arg8", 20002.1, "LK"],
    //     ["arg6", "销售", "LK"],
    //   ],
    //   o: ["crtTm", "esc"],
    //   p: [1, 1000],
    // };
    this.salers = await this.api.getsalersList();
    this.salers.unshift({ arg7: "全部" });
    this.searchsalers = this.salers;

    // 意向等级
    this.intentLevels = await this.api.getWxIntentionLevel({
      p: { n: 1, s: 20 },
    });
    this.intentLevels.unshift({ content: "全部" });
    this.searchintentLevels = this.intentLevels;
  },
  async mounted() {
    console.log("mounted");

    this.defaultHeight = $(window).height();
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight;
      })();
    };
    //  获取老客户介绍人
    this.introducers = await this.api.getOldCustomer("");
    this.searchintroducers = this.introducers;
  },
  methods: {
    // 获取列表
    // async getList(data) {
    //   let res = await this.api.getcustomerList(data);
    //   this.customerList = [...this.customerList, ...res.data.list];
    //   this.total = res.page.total;
    //   console.log(this.customerList);
    // },
    // 上拉加载
    handleLoad() {
      if (this.isfirstload) {
        this.customerList = [];
        // 页码不增加
        // this.getList(this.info);
        this.api.getcustomerList(this.info).then((res) => {
          this.customerList = res.data.list;
          this.total = res.page.total;
          this.isfirstload = false;
          this.loading = false;
        });
      } else {
        if (this.total > this.customerList.length) {
          this.info.pageNo += 1;
          this.api.getcustomerList(this.info).then((res) => {
            this.customerList = [...this.customerList, ...res.data.list];
            this.total = res.page.total;
            this.loading = false;
          });
        } else {
          this.loading = false;
          this.finished = true;
        }
      }
    },
    // 处理公共字段参数生成qry(使用query.js)
    newqry(obj) {
      let qry = this.query.new();
      // 条件
      obj.w.forEach((item) => {
        this.query.toW(qry, item[0], item[1], item[2]);
      });
      // 排序
      this.query.toO(qry, obj.o[0], obj.o[1]);
      // 分页
      this.query.toP(qry, obj.p[0], obj.p[1]);
      return qry;
    },
    // 下拉刷新
    onRefresh() {
      console.log("下拉刷新完成");
      this.customerList = [];
      this.finished = false;
      this.loading = true;
      this.info.pageNo = 1;
      this.isfirstload = true;
      this.handleLoad();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    back() {
      this.until.back();
    },
    // 购买类型
    onSearch1(a) {
      if (a != "")
        this.searchbuytypes = this.buytypes.filter((item) =>
          item.content.includes(a)
        );
      else this.searchbuytypes = this.buytypes;
    },
    handleBuysType(e) {
      this.info.business = e.content;
      this.showPicker1 = false;
    },
    // 客流性质
    onSearch2(a) {
      if (a != "")
        this.searchflowtypes = this.flowtypes.filter((item) =>
          item.content.includes(a)
        );
      else this.searchflowtypes = this.flowtypes;
    },
    handleFlowtype(e) {
      this.info.nature = e.content;
      this.showPicker2 = false;
    },
    // 销售顾问
    onSearch3(a) {
      if (a != "")
        this.searchsalers = this.salers.filter((item) => item.arg7.includes(a));
      else this.searchsalers = this.salers;
    },
    handleSaler(e) {
      this.info.saler = e.arg7;
      this.showPicker3 = false;
    },
    // 意向等级
    onSearch4(a) {
      if (a != "")
        this.searchintentLevels = this.intentLevels.filter((item) =>
          item.content.includes(a)
        );
      else this.searchintentLevels = this.intentLevels;
    },
    handleIntentionLevel(e) {
      this.info.intentionLevel = e.content;
      this.showPicker4 = false;
    },
    // 选择时间类型
    handledatetype(e) {
      this.datetype = e.content;
      this.showPicker7 = false;
      if (e.id == 1) this.info.orders = "创建";
      else this.info.orders = "跟进";
    },
    // 新增客户
    newcustomer() {
      this.until.href("/views/customermagt/new.html");
    },
    toDetail(id) {
      this.until.href("/views/customermagt/detail.html?id=" + id);
    },

    // 查询
    handleQuery() {
      // 每次点击请求第一页数据
      this.customerList = [];
      this.finished = false;
      this.loading = true;
      this.info.pageNo = 1;
      this.isfirstload = true;
      this.handleLoad();
    },
    startTimeChange(val) {
      if (
        this.info.endFollowUpTime &&
        moment(this.info.endFollowUpTime).valueOf() < moment(val).valueOf()
      ) {
        Toast("日期区间选择错误");
      } else {
        this.info.beginFollowUpTime = moment(val).format("YYYY-MM-DD");
      }
      this.showPicker5 = false;
    },
    endTimeChange(val) {
      if (
        this.info.beginFollowUpTime &&
        moment(this.info.beginFollowUpTime).valueOf() > moment(val).valueOf()
      ) {
        Toast("日期区间选择错误");
      } else {
        this.info.endFollowUpTime = moment(val).format("YYYY-MM-DD");
      }

      this.showPicker6 = false;
    },
  },
};
</script>


<style lang="less">
.van-cell::after {
  border-bottom: none;
}
.van-field__control {
  text-align: center !important;
}

.el-input__inner {
  border: none;
}
.el-select {
  .el-input--suffix .el-input__inner {
    font-size: 0.24rem;
    padding: 0;
    padding-left: 0.2rem;
  }
}
.el-input__icon {
  display: flex;
  align-items: center;
}
.row3 {
  .el-input--suffix .el-input__inner {
    font-size: 0.24rem !important;
    padding-right: 0.2rem !important;
  }
}
</style>
<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  background: url("~@/assets/img/header.png") no-repeat;
  background-color: #f1f3f2;
  background-size: 100% 1.28rem;
  min-height: 100vh;
  padding-bottom: 2.1rem;
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
  .query {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    padding: 0.32rem 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bg {
      background: #fff;
      // padding: .24rem .22rem;
      // padding-left: .22rem;
      // border: 1px solid #dddddd;
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }
    .son {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .el-input,
      .el-input--suffix input {
        padding: 0 !important;
        border: 0px !important;
      }
    }
    .left {
      box-sizing: border-box;
      width: 5.6rem;
      height: 2.3rem;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .row1 {
        width: 100%;
        height: 0.7rem;
        display: flex;

        .leftpart {
          flex: 1;
          // border: 1px solid #dddddd;
          border-radius: 0.06rem;
          margin-right: 0.1rem;

          .input {
            // width: 2.31rem;
            font-size: 0.24rem;
            padding-left: 0.2rem;
          }
        }

        .rightpart {
          flex: 1;
          // border: 1px solid #dddddd;
          border-radius: 0.06rem;
        }
      }

      .row2 {
        width: 100%;
        height: 0.7rem;

        display: flex;
        justify-content: space-between;
        .leftpart {
          flex: 1;
          margin-right: 0.1rem;
        }

        .centerpart {
          flex: 1;
          margin-right: 0.1rem;
        }

        .rightpart {
          flex: 1;
        }
      }
      .row3 {
        width: 100%;
        height: 0.7rem;
        display: flex;
        justify-content: space-between;

        .leftpart {
          flex: 1;
          margin-right: 0.1rem;
        }

        .rightpart {
          flex: 1;
        }
      }
    }

    .right {
      width: 1.2rem;
      height: 2.3rem;
      background: #09c076;
      border-radius: 0.06rem;
      text-align: center;
      line-height: 2.3rem;
      color: #ffffff;
      font-size: 0.3rem;
    }
  }
  .list {
    .item {
      margin-top: 0.16rem;
      width: 100%;
      box-sizing: border-box;
      padding: 0.3rem;
      background: #fff;
      border-radius: 0.12rem;
      box-shadow: 0 0 0.04rem rgba(0, 0, 0, 0.3);
      position: relative;
      .level {
        position: absolute;
        top: 0;
        right: 0rem;
        width: 0.88rem;
        height: 0.44rem;
        font-size: 0.26rem;
        text-align: center;
        line-height: 0.44rem;
        font-weight: bold;
        color: #ffffff;
        // background-image: url("~@/assets/img/level.png");
        background-image: url("~@/assets/img/biglevel.png");
        background-repeat: no-repeat;
        background-size: 0.78rem;
        background-position: center center;
      }
      .left {
        margin-right: 0.24rem;
      }
      .row1 {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.32rem;
          font-weight: bold;
          color: #303030;
          margin-right: 0.12rem;
        }
        .type {
          font-size: 0.32rem;
          // font-weight: 500;
          color: #303030;
        }
      }
      .item_row {
        display: flex;
        align-items: center;
        margin-top: 0.1rem;
        .key {
          font-size: 0.26rem;
          // font-weight: 500;
          color: #606060;
        }
        .value {
          font-size: 0.26rem;
          // font-weight: 500;
          color: #606060;
        }
      }
    }
  }
  .newbtn {
    z-index: 99;
    position: fixed;
    bottom: 0.78rem;
    width: 5.7rem;
    height: 0.7rem;
    background: #09c076;
    border-radius: 0.34rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 0.7rem;
    text-align: center;
    margin: 0.52rem 0.9rem 0px;
  }
}
</style>