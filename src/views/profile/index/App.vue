<!-- 互生升个人中心页面 -->
<template>
  <div id="container">
    <div class="title">个人中心</div>
	<div class="personInfomation" @click="toDetail">
		<img class="img1" src="~@/assets/img/cover.png">
		<img  class="img2" src="~@/assets/img/arrowrightwhite.png" >
		<div class="textbox">
			<div class="name">
				{{name}}
				<span class="tel">({{tel}})</span>
				
			</div>
			<div class="position">
				<span>{{position}}</span>
			</div>
		</div>
	</div>
	<div class="personList">
		<div class="listcontent">
			<img  class="img1" src="~@/assets/img/mycustomer.png" >
			<span>
			  我的客户
			</span>
			<img class="img2" src="~@/assets/img/arrowrightblack.png" >
		</div>
		<div class="listcontent">
			<img  class="img1" src="~@/assets/img/customerservice.png" >
			<span>
			 客服中心
			</span>
			<div class="customerServiceTel">
				{{customerService}}
			</div>
		</div>
		<div class="listcontent">
			<img  class="img1" src="~@/assets/img/aboutus.png" >
			<span>
			关于我们
			</span>
			<img class="img2" src="~@/assets/img/arrowrightblack.png" >
		</div>
	</div>

    <tabbar :currentIndex="1"> </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";

import { Toast } from "mint-ui";
export default {
  data() {
    return {
			name:"张章",
			tel:13456179573,
			position:"销售经理",
			customerService:'400-88880000'			
	};
  },
  components: {
    tabbar,
  },
  async mounted() {},
  methods: {
	  toDetail(){
		  this.until.href("/views/profile/detail.html")
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
  background: url('~@/assets/img/profilebg.png') no-repeat @backgroundColor;  
  background-size:100% 4.73rem;
  overflow: hidden;
  /*display: flex;*/
  /*display: -webkit-flex;*/
  /*flex-direction: column;*/
  .title{
	 font-size: 0.36rem;
	 margin-top: 0.67rem;
	 font-weight: 500;
	 color: #ffffff;
	 text-align: center;
	 
  }
  .personInfomation{
	  margin-top:0.55rem;
	  padding: 0 0.55rem;
	  box-sizing:border-box;
	  display: flex;
	  width: 100%;
	  position: relative;
	  .img1{
		  width: 1.2rem;
		  height: 1.2rem;
		  border-radius: 0.6rem;
	
	  }
	  .img2{
		  width: 0.13rem;
		  height: 0.25rem;
		  position: absolute;
		  top: 50%;
		  right: 0.8rem;
		  transform:translateY(-50%);
	  }
	  .textbox{
	  			 padding: 0.1rem 0.26rem;
				 box-sizing: border-box;
	  			  .name{
	  				  font-size: 0.3rem;
	  				  font-weight: 500;
	  				  color: #ffffff;
	  				  .tel{
	  					  font-size: 0.24rem;
	  					  font-weight: 500;
	  					  color: #ffffff;
						  margin-left:0.25rem ;
	  				  }
	  				  
	  			  }
				  .position{
					  margin-top: 0.2rem;
					  font-size: 0.24rem;
					  font-weight: 500;
					  color: #FFFFFF;
				  }
	  }
  }
  .personList{
		width: 6.9rem;
	
		background: #FFFFFF;
		box-shadow: 0rem 0rem 0rem 0rem rgba(120, 120, 120, 0.12);
		border-radius: 0.2rem;
		margin: 0 auto;
		margin-top: 0.73rem;
		.listcontent{
			display: flex;
			position: relative;
			padding: 0.4rem;
			border-bottom: 0.01rem solid #F1F1F1 ;
			.img1{
				width: 0.32rem;
				height: 0.3rem;
				
			}
			span{
				font-size: 0.26rem;
				font-weight: 500;
				color: #303030;
				line-height: 0.3rem;
				margin-left: 0.15rem;
			}
			.customerServiceTel{
				font-size: 0.26rem;
				line-height: 0.3rem;
				position: absolute;
				top: 50%;
				right: 0.19rem;
				transform: translateY(-50%);
				
			}
			.img2{
				width: 0.13rem;
				height: 0.25rem;
				position: absolute;
				top: 50%;
				right: 0.19rem;
				transform: translateY(-50%);
			}
		}
	}
}
</style>