<template>
	<div class="content">
		<div class="topSwiper">
			
			<van-swipe class="swiper" :autoplay="3000" indicator-color="white" >
			  <van-swipe-item class="swiper-item" v-for="(item,index) in imgList" :key="index"><img :src="item" ></van-swipe-item>
			</van-swipe>

		</div>
		<div class="bodyList">
			<div class="listItem" @click="topage('/views/home/gongshitianbao.html')">
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
			<div class="listItem" @click="topage('/views/home/gongshibulu.html')">
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
			<div class="listItem" @click="topage('/views/baobiao/xiangmu.html')">
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
	</div>
</template>

<script>
	import * as dd from 'dingtalk-jsapi';
	import logo from "../../../assets/img/轮播图.png"
	import tianbao from "../../../assets/img/工时填报.png"
	import bulu from "../../../assets/img/工时补录.png"
	import wode from "../../../assets/img/我的工时.png"
	import baobiao from "../../../assets/img/工时报表.png"
	import arrowRight from "../../../assets/img/点击.png"
	export default {
		data() {
			return {
				logo,
				tianbao,
				bulu,
				wode,
				baobiao,
				arrowRight,
				imgList:[
					logo,
					logo
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		mounted() {
				this.dd()
		},
		methods: {
				topage(url){
					this.until.href(url)
				},
				dd() {
					let that = this
					console.log('是钉钉')
					window.localStorage.setItem('codeInfoDDD', '是钉钉')
					dd.ready(function() {
						window.localStorage.setItem('codeInfoDDD', '已进入')
						dd.runtime.permission.requestAuthCode({ //获取code
							corpId: 'dingc35f50400f19d66d', // 企业id
							onSuccess: (info) => {
								console.log('获取钉钉code')
								console.log(info)
								window.localStorage.setItem('codeInfoDDD', info)
								that.code = info.code
								let obj={
									code:that.code,
									tenantId:'000000'
								}
								that.api.login(obj).then(res=>{
									this.until.loSave('token',res.access_token)
									this.until.loSave('userInfo',res)
								})
							},
							onFail: (err) => {
								console.log('获取钉钉code失败')
								window.localStorage.setItem('codeInfoDDD', err)
								console.log(err)
							}
						});
					});
				}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		background-color: #F1F3F2;
		padding: 0.3rem;
		box-sizing: border-box;
		width:100vw;
		height: 100vh;
		.topSwiper{
			width: 6.9rem;
			height: 3.5rem;
			border-radius: 0.12rem;
			.swiper{
				width: 100%;
				height: 100%;
				text-align: center;
				.swiper-item{
					width: 100%;
					height: 100%;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.bodyList{
			width:6.9rem;
			.listItem{
				position: relative;
				width: 100%;
				height: 1.13rem;
				background: #FFFFFF;
				border: 1px solid #ECECEC;
				border-radius: 0.56rem;
				margin-top: 0.6rem;
				display: flex;
				align-items: center;
				padding: 0 0.23rem;
				box-sizing: border-box;
				.img1{
					width: 0.72rem;
					height: 0.72rem;
				}
				.img2{
					width: 0.13rem;
					height: 0.25rem;
					position: absolute;
					right: 0.3rem;
					
				}
				.contentBox{
					margin-left: 0.2rem;
					.top{
						font-size: 0.28rem;
						font-weight: bold;
						color: #303030;
					}
					.bottom{
						font-size: 0.16rem;
						font-weight: 500;
						color: #303030;
						opacity: 0.5;
						margin-top: 0.08rem;
					}
				}
			}
		}
		.bottomText{
			width: 100%;
			text-align: center;
			font-size: 0.2rem;
			color: #666666;
			opacity: 0.8;
			margin-top: 1.52rem;
		}
	}
</style>
