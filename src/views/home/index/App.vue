<template>
	<div class="content">
		<van-overlay :show="userInfo.role_name == 'boss'||!userInfo" >
		    <van-loading />
		</van-overlay>
		<div class="mask" v-if="showMask">
			<div class="maskContainer" >
				<div class="title">
					工时规则
				</div>
				<img :src="close" @click="showMask=false">
				<div class="" style="margin-top: 0.2rem;" v-html="info.cont">
					
				</div>
			</div>
		</div>
		<div class="topSwiper">
			<van-swipe class="swiper" :autoplay="3000" indicator-color="white" >
			  <van-swipe-item class="swiper-item" v-for="(item,index) in imgList" :key="index"><img :src="item" ></van-swipe-item>
			</van-swipe>
		</div>
		<div class="bodyList">
			<div class="listItem" @click="topage('/views/home/gongshitianbao.html?type=1')">
				<img class="img1" :src="bulu" mode=""></img>
				<div class="contentBox">
					<div class="top">
						工时填报
					</div>
					<div class="bottom">
						Working hours is allowed
					</div>
				</div>
				<img class="img2":src="arrowRight" mode=""></img>
			</div>
			<div class="listItem" @click="topage('/views/home/gongshitianbao.html?type=2')">
				<img class="img1" :src="wode" mode=""></img>
				<div class="contentBox">
					<div class="top">
						工时补录
					</div>
					<div class="bottom">
						Working hours collection
					</div>
				</div>
				<img  class="img2":src="arrowRight" mode=""></img>
			</div>
			<div class="listItem" @click="topage('/views/home/wodegongshi.html')">
				<img class="img1" :src="baobiao" mode=""></img>
				<div class="contentBox">
					<div class="top">
						我的工时
					</div>
					<div class="bottom">
						My working hours
					</div>
				</div>
				<img  class="img2":src="arrowRight" mode=""></img>
			</div>
			<div class="listItem" @click="topage('/views/baobiao/xiangmu.html')" v-show="showReport">
				<img class="img1" :src="tianbao" mode=""></img>
				<div class="contentBox">
					<div class="top">
						工时报表
					</div>
					<div class="bottom">
						Working hours report
					</div>
				</div>
				<img  class="img2":src="arrowRight" mode=""></img>
			</div>
		</div>
		<div class="bottomText">
			技术支持：宁波聚联科技有限公司
		</div>
		<div class="guize" @click="showMask=true">
			<img :src="guize" >
		</div>
	</div>
</template>

<script>
import * as dd from "dingtalk-jsapi";
import logo from "../../../assets/img/轮播图.png";
import tianbao from "../../../assets/img/工时填报.png";
import bulu from "../../../assets/img/工时补录.png";
import wode from "../../../assets/img/我的工时.png";
import baobiao from "../../../assets/img/工时报表.png";
import arrowRight from "../../../assets/img/点击.png";
import guize from "../../../assets/img/工时规则.png";
import shanchu from "../../../assets/img/删除.png";
import close from "../../../assets/img/close.png";
export default {
  data() {
    return {
	  guize,
      logo,
      tianbao,
	  close,
      bulu,
      wode,
      baobiao,
	  shanchu,
      arrowRight,
      imgList: [],
      indicatorDots: true,
	  showMask:false,//弹出层显示隐藏
      autoplay: true,
      interval: 2000,
      duration: 500,
      code: "",
      userInfo: "",
	  info:{},
    };
  },
  computed: {
    showReport() {
      this.userInfo = this.until.loGet("userInfo");
      if (this.userInfo) {
        if (
          this.userInfo.detail.isCharge == 1 ||
          this.userInfo.role_name == "boss"
        )
		
          return true;
        else return false;
      } else return false;
    },
	// showReport(){
	// 	return true
	// }
  },
  created() {
	  this.userInfo = this.until.loGet("userInfo");
	 
	this.currentRole = 2;

    this.dd();
  },
  mounted() {},
  methods: {
    topage(url) {
      this.until.href(url);
    },
    dd() {
      let that = this;
      console.log("是钉钉");
      window.localStorage.setItem("codeInfoDDD", "是钉钉");
      dd.ready(function () {
        window.localStorage.setItem("codeInfoDDD", "已进入");
        dd.runtime.permission.requestAuthCode({
          //获取code
          corpId: "ding0a5a75e21ecf953f35c2f4657eb6378f", // 企业id
          onSuccess: (info) => {
            console.log("获取钉钉code");

            console.log(info);
            window.localStorage.setItem("codeInfoDDD", info);
            that.code = info.code;
            let obj = {
              code: that.code,
              tenantId: "000000",
            };
            that.api.login(obj).then((res) => {
              if (res.error_description != "请绑定账号.") {
                let token = res.token_type + " " + res.access_token;
                console.log("tokensdjldsg");
                console.log(token);
                that.until.loSave("token", token);
                that.until.loSave("userInfo", res);
              }
			  if (that.userInfo && that.userInfo.role_name == "boss"){
			  		 that.until.href('/views/baobiao/xiangmu.html')
			  }
			  that.api.getContarticle().then(res=>{
			  	that.info=res
			  })
			  that.api.getListAdsByPos().then(res=>{
			  	console.log(777,res);
			  	res.forEach(item=>{
			  		that.imgList.push(item.imgUrl)
			  	})
			  })
            });
          },
          onFail: (err) => {
            console.log("获取钉钉code失败");
            window.localStorage.setItem("codeInfoDDD", err);
            console.log(err);
            that.until.replace("/views/home/index.html");
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #f1f3f2;
  padding: 0.3rem;
  box-sizing: border-box;
  width: 100vw;
   height: 100vh;
   .van-overlay{
	   display: flex;
	       justify-content: center;
	       align-items: center;
		   background-color: #ffffff;
   }
  .mask{
	  width: 100vw;
	  height: 100vh;
	  background-color: rgba(0,0,0,0.5);
	  z-index: 10;
	  position: fixed;
	  top: 0;
	  left: 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  .maskContainer{
		  position: relative;
		  width: 90%;
		 max-height: 60%;
		  background-color: #ffffff;
		  border-radius: 0.12rem;
		  z-index: 50;
		  padding: 0.4rem 0.3rem;
		  box-sizing: border-box;
		  overflow-y: scroll;
		  text-align: center;
		  .title{
			  text-align: center;
			  font-size: 0.28rem;
			  font-weight: 500;
			  color: #333333;
		  }
		  img{
			  width: 0.36rem;
			  height: 0.37rem;
			  position: absolute;
			  top: 0.4rem;
			  right:0.3rem;
		  }
	  }
  }
  .topSwiper {
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 0.12rem;
    .swiper {
      width: 100%;
      height: 100%;
      text-align: center;
	  border-radius: 0.12rem;
      .swiper-item {
        width: 100%;
        height: 100%;
		border-radius: 0.12rem;
        img {
          width: 100%;
          height: 100%;
		  border-radius: 0.12rem;
        }
      }
    }
  }
  .bodyList {
    width: 6.9rem;
    .listItem {
      position: relative;
      width: 100%;
      height: 1.13rem;
      background: #ffffff;
      border: 1px solid #ececec;
      border-radius: 0.56rem;
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      padding: 0 0.23rem;
      box-sizing: border-box;
      .img1 {
        width: 0.72rem;
        height: 0.72rem;
      }
      .img2 {
        width: 0.13rem;
        height: 0.25rem;
        position: absolute;
        right: 0.3rem;
      }
      .contentBox {
        margin-left: 0.2rem;
        .top {
          font-size: 0.28rem;
          font-weight: bold;
          color: #303030;
        }
        .bottom {
          font-size: 0.16rem;
          font-weight: 500;
          color: #303030;
          opacity: 0.5;
          margin-top: 0.08rem;
        }
      }
    }
  }
  .bottomText {
	  
    text-align: center;
    font-size: 0.2rem;
    color: #666666;
    opacity: 0.8;
	position: absolute;
	bottom: 0.4rem;
	left: 50%;
	transform: translateX(-50%);
  }
  .guize{
	  position: absolute;
	  right: 0.54rem;
	  bottom: 10%;
	  img{
		  width: 0.84rem;
		  height: 0.84rem;
		  background: #FFFFFF;
		  border-radius: 50%;
	  }
  }
}
</style>
