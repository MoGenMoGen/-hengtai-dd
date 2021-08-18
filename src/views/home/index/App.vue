<!-- 互生升首页 -->
<template>
  <div id="container">
    <div class="top">互生升</div>
    <div class="wrapper">
      <div class="bg">
        <img src="~@/assets/img/cover.png" />
      </div>
      <div class="list">
        <div class="item" @click="toDetail('/views/reception/index.html')">
          <div class="left">
            <img src="~@/assets/img/icon1.png" alt="" class="icon" />
            <div class="text">
              <div class="title">接待</div>
              <div class="en">Reception</div>
            </div>
          </div>

          <img src="~@/assets/img/arrow.png" alt="" class="arrow" />
        </div>
        <div class="item" @click="toDetail('/views/maintain/index.html')">
          <div class="left">
            <img src="~@/assets/img/icon2.png" alt="" class="icon" />
            <div class="text">
              <div class="title">车保姆</div>
              <div class="en">Car nanny</div>
            </div>
          </div>

          <img src="~@/assets/img/arrow.png" alt="" class="arrow" />
        </div>
        <div class="item" @click="toDetail('/views/customermagt/index.html')">
          <div class="left">
            <img src="~@/assets/img/icon3.png" alt="" class="icon" />
            <div class="text">
              <div class="title">客户管理</div>
              <div class="en">Customer management</div>
            </div>
          </div>

          <img src="~@/assets/img/arrow.png" alt="" class="arrow" />
        </div>
        <div class="item" @click="toDetail('/views/productneeds/index.html')">
          <div class="left">
            <img src="~@/assets/img/icon4.png" alt="" class="icon" />
            <div class="text">
              <div class="title">产品需求</div>
              <div class="en">Product demand</div>
            </div>
          </div>
          <img src="~@/assets/img/arrow.png" alt="" class="arrow" />
        </div>
      </div>
    </div>
    <tabbar :currentIndex="0"> </tabbar>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import tabbar from "@/components/tabbar";
export default {
  data() {
    return {};
  },
  components: {
    tabbar,
  },
  async mounted() {},
  methods: {
    toDetail(url){
      console.log('进入详情');
      this.until.href(url)
    }
  },
};
</script>

<style lang="less" scoped>
@import url("../../../assets/css/mobile.less");
@import url("../../../assets/css/common.css");

#container {
  width: 100%;
  height: 100%;
  background: @backgroundColor;
  min-height: 100vh;
  .top {
    font-size: 0.36rem;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 1.52rem;
    width: 100%;
    height: 1.52rem;
    background: url("~@/assets/img/header.png");
  }

  .wrapper {
    margin-top: -14px;
    height: calc(100vh - 1.52rem + 14px);
    overflow: scroll;
    border-radius: 25px;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg {
      margin: 15px;
      margin-bottom: 0;
      width: 345px;
      height: 175px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 8px 0px rgba(238, 238, 238, 0.75);
      border-radius: 15px;
      img {
        width: 126px;
        height: 126px;
      }
    }

    .list {
      .item {
        width: 345px;
        height: 56px;
        background: #fffeff;
        box-shadow: 2px 3px 5px 0px rgba(11, 2, 5, 0.07);
        border-radius: 5px;
        margin: 20px 15px 0;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 36px;
          height: 36px;
          margin-right: 15px;
          display: inline-block;
        }
        .text {
          display: inline-block;

          .title {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #303030;
          }
          .en {
            font-size: 9px;
            font-weight: 500;
            color: #303030;
            opacity: 0.5;
          }
        }
        .arrow {
          width: 13px;
          height: 13px;
        }
      }
    }
  }
}
</style>