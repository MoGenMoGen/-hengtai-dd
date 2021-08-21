<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待组登记资料
		</div>
		<div class="bodyContent">
			<div class="bodyTitle">
				基本信息
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						客户姓名
					</div>
					<div class="listContent">
						{{info.name}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						联系电话
					</div>
					<div class="listContent">
						{{info.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						微信号
					</div>
					<div class="listContent">
						{{info.vx}}
					</div>
				</div>
				<div class="list">
					<div class="listHead">
						客户类型
					</div>
					<div class="listContent">
						{{info.type}}
					</div>
				</div>
			</div>
			<div class="bodyTitle">
				客户需求
			</div>
			<div class="bodyList">
				<div class="list">
					{{info.needs}}
				</div>
				<div class="list" style="padding-bottom: 0.1rem;">
					<div class="listHead">
						客流性质
					</div>
					<el-select v-model="value" filterable placeholder="请选择客流性质" class="select" @change="postId">
						<el-option v-for="item in info.options" :key="item.value" :label="item.label" :value="item.id">
						</el-option>
					</el-select>

				</div>
				<div class="list">
					<div class="listHead">
						销售顾问
					</div>
					<div class="listContent">
						{{info.person}}
					</div>
				</div>
			</div>
			<div class="btn">
				<button type="button">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				info: {
					name: "金秀清",
					tel: "13500009999",
					vx: "13500009999",
					type: "新客户",
					needs: '对动力的需求、要舒适、外观也很重要',
					person: "刘晓华",
					options: [{
						id: 1,
						label: '首次自行'
					}, {
						id: 2,
						label: '第二次自行'
					}, {
						id: 3,
						label: '蚵仔煎'
					}, {
						id: 4,
						label: '龙须面'
					}, {
						id: 5,
						label: '北京烤鸭'
					}]
				}
			};
		},
		components: {},
		async mounted() {},
		methods: {
			back() {
				this.until.back()
			}
		},
		computed: {

		}
	};
</script>
<style type="less">
	body{
		background-color: #F1F3F2;
	}
	.el-input__inner{
		border: 0;
		font-size: 0.24rem;
		font-weight: bold;
		color: #303030;
		/* margin-top: -0.3rem; */
		width: 4.7rem;
		margin-left:0.54rem ;
	}
	.el-input__suffix{
		right: -0.52rem;
	}
</style>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");
	
	#container {
		width: 100%;
		background: url('~@/assets/img/header.png') no-repeat;
		background-color: #F1F3F2;
		background-size: 100% 1.28rem;

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
			.bodyTitle {
				padding: 0.3rem 0.48rem;
				font-size: 0.24rem;
				font-weight: bold;
				color: #303030;
			}

			.bodyList {
				width: 100%;
				background: #ffffff;
				border-radius: 0.12rem;

				.list {
					display: flex;
					border-bottom: 0.02rem solid rgba(0, 0, 0, 0.1);
					padding: 0.3rem 0.48rem;
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;

					.listHead {
						width: 1rem;
						font-size: 0.24rem;
						font-weight: bold;
						color: #303030;
					}

					.select {
						margin-top: -0.23rem;
					}

					.listContent {
						margin-left: 0.84rem;
						font-size: 0.24rem;
						font-weight: bold;
						color: #303030;
					}
				}

			}

			.btn {
				margin-top: 1.76rem;
				text-align: center;

				button {
					width: 5.7rem;
					height: 0.7rem;

					background: #09C076;
					border-radius: 0.34rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}



	}
</style>
