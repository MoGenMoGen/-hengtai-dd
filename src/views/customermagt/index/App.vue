<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      客户管理
    </div>
    <van-pull-refresh v-model="isLoading"  success-text="刷新成功" @refresh="onRefresh">
      <div class="query">
        <div class="left">
          <div class="row1">
            <el-input
              class="leftpart bg input"
              v-model="invalue"
              placeholder="姓名、手机号"
            ></el-input>
            <el-select
              clearable
              filterable
              class="rightpart bg"
              v-model="buytype"
              placeholder="购买类型"
              @change="handleBuysType"
            >
              <el-option
                v-for="(item, index) in buytypes"
                :label="item.content"
                :key="index"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <div class="row2">
            <el-select
              clearable
              filterable
              class="leftpart bg"
              v-model="flowtype"
              placeholder="客流性质"
            >
              <el-option
                v-for="item in flowtypes"
                :key="item.id"
                :value="item.id"
                :label="item.content"
              >
              </el-option>
            </el-select>
            <el-select
              clearable
              filterable
              class="centerpart bg"
              v-model="saler"
              placeholder="销售顾问"
            >
              <el-option
                v-for="item in salers"
                :key="item.id"
                :label="item.arg7"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select
              clearable
              filterable
              class="rightpart bg"
              v-model="intentlevel"
              placeholder="意向等级"
            >
              <el-option
                v-for="item in intentLevels"
                :key="item.id"
                :value="item.id"
                :label="item.content"
              >
              </el-option>
            </el-select>
          </div>
          <div class="row3">
            <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="st"
              class="picker son leftpart bg"
            ></el-date-picker>
            <el-date-picker
              type="date"
              placeholder="结束日期"
              v-model="et"
              class="picker son rightpart bg"
            ></el-date-picker>
          </div>
        </div>
        <div class="right">查询</div>
      </div>

      <div class="list">
        <div
          class="item"
          v-for="item in customerList"
          :key="item.id"
          @click="toDetail"
        >
          <div class="level">A</div>
          <div class="row1">
            <div class="name">{{ item.name }}</div>
            <div class="type" v-if="item.sex == 1">(男)</div>
            <div class="type" v-else-if="item.sex == 2">(女)</div>
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
        </div>
      </div>
   </van-pull-refresh>
    <div class="newbtn" @click="newcustomer">新增客户</div>
 

  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      count: 0,
      isLoading: true,
      // 输入框
      invalue: "",
      // 购买类型list
      buytypes: [],
      buytype: "",
      // 客流性质list
      flowtypes: [],
      flowtype: "",
      // 销售顾问list
      salers: [
        {
          name: "张三",
          id: 1,
        },
        {
          name: "李四",
          id: 2,
        },
        {
          name: "王五",
          id: 3,
        },
      ],
      saler: "",
      // 意向等级
      intentLevels: [
        {
          level: "O",
          id: 1,
        },
        {
          level: "k",
          id: 2,
        },
        {
          level: "A",
          id: 3,
        },
        {
          level: "B",
          id: 4,
        },
        {
          level: "C",
          id: 5,
        },
        {
          level: "J",
          id: 6,
        },
        {
          level: "S",
          id: 7,
        },
        {
          level: "P",
          id: 8,
        },
        {
          level: "战败",
          id: 9,
        },
        {
          level: "无效",
          id: 10,
        },
      ],
      intentlevel: "",
      st: "",
      et: "",
      customerList: [
        {
          name: "金秀炫",
          phone: "13312345678",
          wxId: "13312345678",
          sex: 3,
          nextFollowUpTime: "2020-01-01 12:00:00",
        },
      ],
    };
  },
  components: { Toast },
  async created() {
    // 客流性质
    let query_flow_type = {
      w: [["category", 2, "EQ"]],
      o: ["id", "esc"],
      p: [1, 10],
    };
    this.flowtypes = await this.api.getFlowtypeList(
      this.query.toEncode(this.newqry(query_flow_type))
    );
    // 购买类型
    let query_buys_type = {
      w: [["category", 4, "EQ"]],
      o: ["id", "esc"],
      p: [1, 20],
    };
    this.buytypes = await this.api.getBuysTypeList(
      this.query.toEncode(this.newqry(query_buys_type))
    );
    // 销售顾问
    let query_sales = {
      w: [
        ["arg8", 20002.1, "LK"],
        ["arg6", "销售", "LK"],
      ],
      o: ["crtTm", "esc"],
      p: [1, 10],
    };
    this.salers = await this.api.getsalersList(
      this.query.toEncode(this.newqry(query_sales))
    );
    console.log(this.salers);
    // 意向等级
    this.intentLevels = await this.api.getWxIntentionLevel({ p: { n: 1, s: 10 } });
 console.log(this.intentLevels);
 },
  mounted() {
    console.log("mounted");
    this.getList({});
  },
  methods: {
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
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    back() {
      this.until.back();
    },
    handleBuysType(id) {
      console.log(id);
      console.log(this.buystype);
    },
    newcustomer() {
      this.until.href("/views/customermagt/new.html");
    },
    toDetail() {
      this.until.href("/views/customermagt/detail.html");
    },
    async getList(data) {
      let res = await this.api.getcustomerList(data);
      this.customerList = res.list;
    },
  },
};
</script>

<style lang="less">
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
  padding-bottom: 1.04rem;
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
    height: 2.92rem;
    padding: 0.32rem 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bg {
      background: #fff;
      // padding: .24rem .22rem;
      // padding-left: .22rem;
      border: 1px solid #dddddd;
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
          margin-right: 0.1rem;

          .input {
            // width: 2.31rem;
            font-size: 0.24rem;
            padding-left: 0.2rem;
          }
        }

        .rightpart {
          flex: 1;
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
      box-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.3);
      position: relative;
      .level {
        position: absolute;
        top: 0.4rem;
        right: 0.4rem;
        width: 0.44rem;
        height: 0.44rem;
        font-size: 0.26rem;
        text-align: center;
        line-height: 0.44rem;
        font-weight: bold;
        color: #ffffff;
        background-image: url("~@/assets/img/level.png");
        background-repeat: no-repeat;
        background-size: 0.44rem;
      }
      .left {
        margin-right: 0.24rem;
      }
      .row1 {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.28rem;
          font-weight: bold;
          color: #303030;
          margin-right: 0.12rem;
        }
        .type {
          font-size: 0.24rem;
          font-weight: 500;
          color: #303030;
        }
      }
      .item_row {
        display: flex;
        align-items: center;
        margin-top: 0.3rem;
        .key {
          font-size: 0.24rem;
          font-weight: 500;
          color: #606060;
        }
        .value {
          font-size: 0.24rem;
          font-weight: 500;
          color: #606060;
        }
      }
    }
  }
  .newbtn {
    z-index: 99;
    position:fixed;
    bottom:1.04rem;
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