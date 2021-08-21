<template>
	<div id="container">

		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			客户详情

		</div>
		<div class="head">
			<div class="level">
				{{info.level}}
			</div>
			<div class="headTitle">
				<div class="name">
					{{info.name}}
				</div>
				<div class="rmks">
					({{info.rmks}})
				</div>
				<div class="clock">
					<img src="~@/assets/img/clock.png">
					<span>{{info.clock}}</span>
				</div>
			</div>
			<div class="headList">
				<div class="list">
					<div class="listHead">
						手机号:
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						微信号:
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户来源:
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						销售:
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						最近跟进时间:
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						下次跟进时间:
					</div>
					<div class="listContent">
						{{info.nextTime}}
					</div>
				</div>
			</div>
		</div>
		<div class="bodyContent">
			<div class="contentTitle">
				基本信息
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						性别：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						重点客户：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户区域：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户性质：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户来源：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>

			</div>
		</div>
		<div class="bodyContent">
			<div class="contentTitle">
				买车需求
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						品牌：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						车型：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						价格区间：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						车身颜色：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						里程数：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						是否按揭：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						意向描述：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						意向等级：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						购买类型：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						下次跟进时间：
					</div>
					<div class="listContent">
						{{info.detail}}
					</div>
				</div>

			</div>
		</div>
		<div class="bodyContent">
			<div class="contentTitle">
				更多信息
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						老客户介绍人：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						备用号：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						身份证号：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						生日：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						所在地：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						联系地址：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						兴趣：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						职业：
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						相册：
					</div>
					<div class="listContent">
						<!-- <img :src="item" v-for="(item,index) in imglist" :key="index"> -->
						<el-image style="width: 1.6rem; height:1.6rem;margin-right: 0.2rem;" :src="item"
							:preview-src-list="imglist" v-for="(item,index) in imglist" :key="index">

						</el-image>

					</div>

				</div>

			</div>
		</div>
		<div class="bottomBox">
			<div class="tab">
				<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="tabChange(index)"
					:class="{active:currentIndex==index}">
					{{item.name}}
					<span>({{item.num}})</span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import Bg from "@/assets/img/bg.png"
	import Fg from "@/assets/img/arrow.png"
	import {
		Toast
	} from "mint-ui";
	export default {
		data() {
			return {
				Bg,
				currentIndex: 0,
				info: {
					name: "金秀炫",
					rmks: "未知",
					clock: "3天后跟进",
					tel: "13500009999",
					nextTime: "2021-07-05 12:50:20",
					level: "A",
					detail: "需要性能好一些，性价比高，舒适型，视野开阔需要性能好一些，性价比高，舒适型，视野开阔需要性能好一些，性价比高，舒适型，视野开阔"
				},
				imglist: [
					Bg,
					Fg,
					Bg,
					Bg,
				],
				tabList: [{
						name: "轨迹",
						num: 1,
					},
					{
						name: "订单",
						num: 0,
					}
				]



			};
		},

		async mounted() {

		},
		created() {

		},
		methods: {
			back() {
				this.until.back()
			},
			tabChange(index) {
				this.currentIndex = index
			}

		},
	};
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {

		// width: 100%;
		// height: 100%;
		background: url('~@/assets/img/header.png') no-repeat;
		background-color: #F1F3F2;
		background-size: 100% 1.28rem;
		// overflow: hidden;

		/*display: flex;*/
		/*display: -webkit-flex;*/
		.title {
			width: 100%;
			height: 1.28rem;
			position: relative;
			line-height: 1.28rem;
			text-align: center;
			font-size: 0.36rem;
			font-weight: 500;
			color: #FFFFFF;

			img {
				height: 0.31rem;
				width: 0.17rem;
				position: absolute;
				top: 50%;
				left: 0.36rem;
				transform: translateY(-50%);
			}
		}

		.head {
			padding: 0.26rem 0.3rem;
			margin-top: 0.1rem;
			background-color: #FFFFFF;
			border-radius: 0.12rem;
			box-sizing: border-box;
			position: relative;

			.headTitle {
				display: flex;
				align-items: center;

				.name {
					font-size: 0.28rem;
					font-weight: bold;
					color: #303030;
				}

				.rmks {
					font-size: 0.24rem;
					font-weight: 500;
					color: #303030;
					margin-left: 0.1rem;
				}

				.clock {
					padding: 0.05rem 0.22rem;
					background: rgba(255, 51, 51, 0);
					border: 0.02rem solid #FF3333;
					border-radius: 0.4rem;
					margin-left: 0.38rem;

					img {
						width: 0.2rem;
						height: 0.2rem;
					}

					span {
						font-size: 0.22rem;
						font-weight: 500;
						color: #FF3333;
					}
				}
			}

			.headList {
				margin-top: 0.16rem;

				.list {
					display: flex;
					font-size: 0.24rem;
					font-weight: 500;
					color: #606060;
					margin-top: 0.2rem;

					.listHead {
						width: 1.6rem;

					}

					.listContent {
						margin-left: 0.24rem;
					}
				}
			}

			.level {
				background: url('~@/assets/img/level.png') no-repeat;
				background-size: 0.76rem 0.74rem;
				position: absolute;
				top: 0.48rem;
				right: 0.46rem;
				width: 0.76rem;
				height: 0.74rem;
				text-align: center;
				line-height: 0.74rem;
				font-size: 0.44rem;
				font-weight: bold;
				color: #FFFFFF;
			}
		}

		.bodyContent {
			margin-top: 0.1rem;
			padding: 0.4rem 0.48rem;
			background: #FFFFFF;
			border-radius: 0.12rem;

			.contentTitle {
				border-left: 0.06rem solid #09C076;
				;
				padding: 0 0.1rem;
				font-size: 0.24rem;
				font-weight: bold;
				color: #09c076;
			}

			.bodyList {
				margin-top: 0.3rem;

				.list {
					display: flex;
					margin-top: 0.3rem;
					font-size: 0.24rem;
					font-family: PingFang SC;
					font-weight: bold;
					color: #303030;

					.listHead {
						width: 1.7rem;

					}

					.listContent {
						margin-left: 0.16rem;
						width: 4.7rem;
						overflow: hidden;
						white-space: normal;
						word-break: break-all;
					}
				}
			}
		}

		.bottomBox {
			padding: 0.5rem;
			box-sizing: border-box;
			background: #FFFFFF;
			border-radius: 0.12rem;
			margin-top: 0.1rem;

			.tab {
				display: flex;

				.tabList {
					transition: all 0.5s;
					margin-right:0.8rem ;
					position: relative;
				}

				.active {
					font-size: 0.3rem;
					font-weight: bold;
					color: #09C076;
					transition: all 0.5s;
					position: relative;
				}

				.active:after {
					content: " ";
					width: 1.08rem;
					height: 0.04rem;
					background-color: #09C076;
					position: absolute;
					bottom: -7px;
					left: -1px;
				}
			}
		}


	}
</style>
