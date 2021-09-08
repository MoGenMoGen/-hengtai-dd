<!-- 互生升首页 -->
<template>
  <div id="container">
    <div class="top">
      <div class="toptitle"></div>
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
    </div>

    <tabbar :currentIndex="0"> </tabbar>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import tabbar from "@/components/tabbar";
export default {
  data() {
    return {
      code: "",
    };
  },
  components: {
    tabbar,
  },
  async mounted() {
    console.log(this.until.loGet("token"), 55);
    if (!this.until.loGet("token")) {
      console.log(111);
      this.code = this.until.getQueryString("code");
      if (!this.code) {
        this.until
          .href(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwa9310f942b8696dc&redirect_uri=http%3A%2F%2Fhsstest.jinkworld.com%2Fviews%2Fhome%2Findex.html&response_type=code&scope=snsapi_base&state=#wechat_redirect
	  	  `);
      } else {
        this.api.getWxlogin({ code: this.code }).then((res) => {
          this.until.loSave("token", res.data.token);
          this.until.loSave("userInfo", res.data.userInfo);
          // window.location.replace("/static/wechat/views/home/index.html")
        });
      }
    }
  },
  methods: {
    toDetail(url) {
      console.log("进入详情");
      this.until.href(url);
    },
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
  overflow: hidden;
  .top {
    position: fixed;
    top: 0;
    bottom: 1.2rem;
    overflow-y: scroll;
    height: auto;
    -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/

    .toptitle {
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
      margin-top: -0.28rem;
      height: calc(100vh - 1.52rem + 0.28rem);
      overflow: scroll;
      border-radius: 0.5rem;
      background: #f9f9f9;
      display: flex;
      flex-direction: column;
      align-items: center;

      .bg {
        margin: 0.3rem;
        margin-bottom: 0;
        width: 6.9rem;
        height: 3.5rem;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0.08rem 0.16rem 0px rgba(238, 238, 238, 0.75);
        border-radius: 0.3rem;

        img {
          width: 2.52rem;
          height: 2.52rem;
        }
      }

      .list {
        .item {
          width: 6.9rem;
          height: 1.12rem;
          background: #fffeff;
          box-shadow: 0.04rem 0.06rem 0.1rem 0px rgba(11, 2, 5, 0.07);
          border-radius: 0.1rem;
          margin: 0.4rem 0.3rem 0;
          padding: 0 0.3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .icon {
            width: 0.72rem;
            height: 0.72rem;
            margin-right: 0.3rem;
            display: inline-block;
          }

          .text {
            display: inline-block;

            .title {
              font-size: 0.3rem;
              font-family: PingFang SC;
              font-weight: bold;
              color: #303030;
            }

            .en {
              font-size: 0.18rem;
              font-weight: 500;
              color: #303030;
              opacity: 0.5;
            }
          }

          .arrow {
            width: 0.26rem;
            height: 0.26rem;
          }
        }
      }
    }
  }
}
</style>
