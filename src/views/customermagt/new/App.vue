<template>
  <div id="container">
    <div class="title">
      <img src="~@/assets/img/arrowback.png" @click="back" />
      新增客户
    </div>
    <div class="top">
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder">*</div>
          <div class="rowtitle">门店</div>
        </div>
        <el-select v-model="shop" placeholder="请选择门店">
          <el-option
            v-for="item in shopList"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="row shopbox">
        <!-- 占位符 -->
        <div style="display: flex">
          <div class="placeholder"></div>
          <div class="rowtitle">销售</div>
        </div>
        <el-select v-model="saler" placeholder="请选择销售顾问">
          <el-option
            v-for="item in salers"
            :key="item.id"
            :label="item.value"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="textbox">
        <div class="texttitle">基本信息</div>
        <span class="tip">(手机号和微信号至少填一项)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: "",
      // 门店列表
      shopList: [
        {
          id: 1,
          value: "互生升汽车空间",
        },
        {
          id: 2,
          value: "摩根汽车空间",
        },
      ],
      saler: "",
      // 销售顾问列表
      salers: [
        {
          id: 1,
          value: "摩根",
        },
        {
          id: 2,
          value: "吴林超",
        },
        {
          id: 3,
          value: "姚峰",
        },
      ],
    };
  },
  methods: {
    back() {
      this.until.back();
    },
  },
};
</script>
<style lang="less">
.el-input__inner {
  border: none;
  height: 14px;
}
.el-input__icon {
  display: flex;
  align-items: center;
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
  .row {
    padding: 15px;
    padding-right: 24px;
    background: #fff;
    display: flex;
    .placeholder {
      width: 9px;
      font-size: 12px;
      font-weight: bold;
      color: #ff3000;
    }
  }
  .rowtitle {
    font-size: 12px;
    font-weight: bold;
    color: #303030;
    margin-right: 66px;
  }
  .top {
    border-radius: 6px;
    padding: 7px 0px 10px;
    .shopbox {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      justify-content: space-between;
      align-items: center;
    }
    .row {
      el-select {
        flex: 1;
      }
    }
  }
  .textbox {
    padding: 15px 24px;
    display: flex;
    .texttitle {
      font-size: 12px;
      font-weight: bold;
      color: #303030;
      margin-right: 5px;
    }
    .tip {
      font-size: 12px;
      font-weight: bold;
      color: #09c076;
    }
  }
}
</style>