<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      客户管理
    </div>
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
              :label="item.value"
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
              :label="item.value"
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
              :label="item.name"
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
              :key="item.level"
              :value="item.id"
              :label="item.level"
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
      <div class="item" v-for="item in customerList" :key="item.id">
        <div class="level">A</div>
        <div class="row1">
          <div class="name">{{ item.name }}</div>
          <div class="type">({{ item.type }})</div>
        </div>
        <div class="item_row">
          <div class="key left">手机号:</div>
          <div class="value">{{ item.phone }}</div>
        </div>
        <div class="item_row">
          <div class="key left">微信号:</div>
          <div class="value">{{ item.wx }}</div>
        </div>
        <div class="item_row">
          <div class="key left">下次跟进时间:</div>
          <div class="value">{{ item.followtime }}</div>
        </div>
      </div>
    </div>
    <div class="newbtn" @click="newcustomer">新增客户</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入框
      invalue: "",
      // 购买类型list
      buytypes: [
        { value: "首购", id: 1 },
        { value: "增购", id: 2 },
        { value: "置换", id: 3 },
        { value: "求购", id: 4 },
      ],
      buytype: "",
      // 客流性质list
      flowtypes: [
        { value: "首次自行", id: 1 },
        { value: "邀约首次", id: 2 },
        { value: "转介绍首次", id: 3 },
        { value: "重购首次", id: 4 },
        { value: "再次邀约", id: 5 },
        { value: "售后服务", id: 6 },
        { value: "牌证服务", id: 7 },
        { value: "其他服务", id: 8 },
      ],
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
          wx: "13312345678",
          type: "未知",
          followtime: "2020-01-01 12:00:00",
        },
        {
          name: "金秀炫",
          phone: "13312345678",
          wx: "13312345678",
          type: "未知",
          followtime: "2020-01-01 12:00:00",
        },
        {
          name: "金秀炫",
          phone: "13312345678",
          wx: "13312345678",
          type: "未知",
          followtime: "2020-01-01 12:00:00",
        },
      ],
    };
  },
  components: {},
  async mounted() {},
  methods: {
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