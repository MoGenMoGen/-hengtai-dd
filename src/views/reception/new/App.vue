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
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		components: {},
		async mounted() {},
		methods: {
			back(){
				this.until.back()
			}
		},
		computed: {

		}
	};
</script>

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
		.bodyContent{
			.bodyTitle{
				padding: 0.3rem 0.48rem;
				 font-size: 0.24rem;
				 font-weight: bold;
				 color: #303030;
			}
		}



	}
</style>
