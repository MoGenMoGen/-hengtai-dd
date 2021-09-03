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
	import {
		Toast
	} from "mint-ui";
	import tabbar from "@/components/tabbar";
	export default {
		data() {
			return {};
		},
		components: {
			tabbar,
		},
		async mounted() {
			console.log(this.until.loGet('token'),55); 
			if (!this.until.loGet('token')) {
				console.log(111);
				this.code = this.until.getQueryString('code')
				if (!this.code) {
					this.until.href(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww45310caa5a15d5b4&redirect_uri=http%3A%2F%2F5q35epf.nat.ipyingshe.com%2Fstatic%2Fwechat%2Fviews%2Fprofile%2Flogin.html&response_type=code&scope=snsapi_base&state=#wechat_redirect
	  	  `)
				} 
				else {
					this.api.getWxlogin(this.code).then(res => {
						this.until.loSave('token', res.data.token)
						// window.location.replace("/static/wechat/views/home/index.html")
					})
				}
			}
		},
		methods: {
			toDetail(url) {
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
			margin-top: -.28rem;
			height: calc(100vh - 1.52rem + .28rem);
			overflow: scroll;
			border-radius: .5rem;
			background: #f9f9f9;
			display: flex;
			flex-direction: column;
			align-items: center;

			.bg {
				margin: .3rem;
				margin-bottom: 0;
				width: 6.9rem;
				height: 3.5rem;
				background-color: #ffffff;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0px .08rem .16rem 0px rgba(238, 238, 238, 0.75);
				border-radius: .3rem;

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
					box-shadow: .04rem .06rem .1rem 0px rgba(11, 2, 5, 0.07);
					border-radius: .1rem;
					margin: .4rem .3rem 0;
					padding: 0 .3rem;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.icon {
						width: .72rem;
						height: .72rem;
						margin-right: .3rem;
						display: inline-block;
					}

					.text {
						display: inline-block;

						.title {
							font-size: .3rem;
							font-family: PingFang SC;
							font-weight: bold;
							color: #303030;
						}

						.en {
							font-size: .18rem;
							font-weight: 500;
							color: #303030;
							opacity: 0.5;
						}
					}

					.arrow {
						width: .26rem;
						height: .26rem;
					}
				}
			}
		}
	}
</style>
