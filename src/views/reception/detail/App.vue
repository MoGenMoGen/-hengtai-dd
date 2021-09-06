<template>
	<div id="container">

		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待组登记资料
		</div>
		<div class="bodyContent">
			<div class="contentTitle">
				基本信息
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						客户姓名:
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						联系电话:
					</div>
					<div class="listContent">
						{{info.phone}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						微信号:
					</div>
					<div class="listContent">
						{{info.wxId}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户类型:
					</div>
					<div class="listContent">
						{{info.customerType}}
					</div>
				</div>
			</div>
		</div>
		<div class="bodyContent">
			<div class="contentTitle">
				客户需求
			</div>
			<div class="bodyList">
				<div class="list">
					{{info.demand}}
				</div>
				<div class="list">
					<div class="listHead">
						客流性质:
					</div>
					<div class="listContent">
						{{info.nature}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						销售顾问:
					</div>
					<div class="listContent">
						{{info.saler}}
					</div>
				</div>

			</div>
		</div>
		<div class="btn">
			<button type="button" @click="perfectTo">信息完善</button>
		</div>
	</div>

</template>

<script>
	import {
		Toast
	} from "mint-ui";
	export default {
		data() {
			return {
				id:"",
				info: {
					name: "金秀清",
					needs: "对动力的需求、要舒适、外观也很重要"
				}



			};
		},

		async mounted() {
			this.api.getWxCheckinDetail(this.id).then(res=>{
				this.info=res
			})
		},
		created() {
         this.id = this.until.getQueryString('id')
		},
		methods: {
			back() {
				this.until.back()
			},
			//跳转至新增客户页面
			perfectTo(){
				this.until.href(`/views/customermagt/new.html?cusid=${this.info.id}`)
			}
		},
	};
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {

		// width: 100%;
		height: 100%;
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
						width: 1.4rem;

					}

					.listContent {
						margin-left: 0.66rem;
						img{
							width: 1.6rem;
							height: 1.6rem;
						}
					}
				}
			}
		}

		.btn {
			margin-top: 3rem;
			text-align: center;

			button {
				width: 5.7rem;
				height: 0.7rem;
				background: #09C076;
				border-radius: 0.34rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #fff;
				
			}
		}

	}
</style>
