<!-- 互生升买车需求详情页面 -->
<template>
	<div id="container">
		<div class="mask" v-if="isPopShow==true">

		</div>
		<div class="popBox" v-if="isPopShow==true">
			<div class="title">
				回复
			</div>
			<textarea rows="" cols="" placeholder="多行输入" v-model="reply"></textarea>
			<div class="bOttom">
				<div class="btn1" @click="cancel">取消</div>
				<div class="btn2" @click="submit">确认</div>
			</div>
		</div>
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			需求详情
		</div>
		<div class="bodyList" v-if="currentindex==0">
			<div class="list">
				<div class="listHead">
					品牌
				</div>
				<div class="listContent">
					{{info.brand}}
				</div>
			</div>
			<div class="list">

				<div class="listHead">
					车型
				</div>
				<div class="listContent">
					{{info.model}}
				</div>
			</div>

			<div class="list">
				<div class="listHead">
					价格区间
				</div>
				<div class="listContent">
					{{info.minPrice}}~{{info.maxPrice}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					车身颜色
				</div>
				<div class="listContent">
					{{info.color}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					里程数
				</div>
				<div class="listContent">
					{{info.mileage}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					是否按揭
				</div>
				<div class="listContent">
					{{isMortgage}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					备注
				</div>
				<div class="listContent">
					{{info.describes}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					意向等级
				</div>
				<div class="listContent">
					{{info.intentionLevel}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					发布时间
				</div>
				<div class="listContent">
					{{info.crtTm}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					销售人员
				</div>
				<div class="listContent">
					{{info.crtBy}}
				</div>
			</div>
		</div>
		<div class="bodyList" v-if="currentindex==1">
			<div class="list">
				<div class="listHead">
					品牌车系
				</div>
				<div class="listContent">
					{{info.brandModel}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					里程数
				</div>
				<div class="listContent">
					{{info.mileage}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					上牌时间
				</div>
				<div class="listContent">
					{{info.licensingTime}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					备注
				</div>
				<div class="listContent">
					{{info.remarks}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					发布时间
				</div>
				<div class="listContent">
					{{info.crtTm}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					销售人员
				</div>
				<div class="listContent">
					{{info.saler}}
				</div>
			</div>
		</div>
		<div id="" style="padding-bottom:1.2rem;">


			<div class="reply" v-for="(item,index) in replayList" :key="index">
				<div class="replyCotent">
					{{item.content}}
				</div>
				<div class="replyCotent">
					回复时间: {{item.crtTm}}
				</div>
				<div class="replyCotent">
					回复人: {{item.crtBy}}
				</div>
			</div>
		</div>
		<div class="btn">
			<button type="button" @click="popShow">回复</button>
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
				isPopShow: false,
				currentindex: 0,
				id: "",
				reply: "",
				isbuy: true,
				istrue: true,
				num: 1,

				total: "",
				info: {
					pinpai: "奔驰",
					chexing: "迈巴赫S级",
					jiage: "30-50万",
					yanse: "黑色",
					licheng: "十万公里",
					anjie: '否',
					beizhu: "需要性能好一些，舒适性，视野开阔",
					dengji: 'o',
					shijian: "2021-07-28 12:02:01",
					xiaoshou: "杰尼龟",
					shangpai: "2020-06-01"
				},
				replayList: [],




			};
		},

		async mounted() {
			if (this.currentindex == 0) {
				this.api.getWxBusinessBuyDetail(this.id).then(res => {

					this.info = res
					this.isbuy = true
					let querys = {
						w: [
							["businessId", this.info.id, "EQ"],
							["isbuy", "1", "EQ"],
						],
						o: ["id", "desc"],
						p: [1, 10],
					}
					this.api.getWxCommunicate(this.query.toEncode(this.newqry(querys))).then(res => {
						this.replayList = [...this.replayList, ...res.data.list]
						this.total = res.page.total

					})

				})

			} else if (this.currentindex == 1) {
				this.api.getWxBusinessSellDetail(this.id).then(res => {

					this.info = res
					this.isbuy = false
					let querystwo = {
						w: [
							["businessId", this.info.id, "EQ"],
							["isbuy", "0", "EQ"],
						],
						o: ["id", "desc"],
						p: [1, 10],
					}
					this.api.getWxCommunicate(this.query.toEncode(this.newqry(querystwo))).then(res => {
						this.replayList = [...this.replayList, ...res.data.list]
						this.total = res.page.total
					})

				})
			}
			window.addEventListener('scroll', this.menu)
		},
		created() {
			this.currentindex = this.until.getQueryString('index')
			this.id = this.until.getQueryString('id')
			console.log(this.currentindex, this.id);
		},
		methods: {
			// 处理公共字段参数生成qry(使用query.js)
			newqry(obj) {
				let qry = this.query.new();
				// 条件
				obj.w.forEach((item) => {
					this.query.toW(qry, item[0], item[1], item[2]);
				});
				// 排序
				this.query.toO(qry, obj.o[0], obj.o[1]);
				// 分页
				this.query.toP(qry, obj.p[0], obj.p[1]);
				return qry;
			},
			menu() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				let scrollBottom = document.documentElement.scrollHeight - this.scroll - document.documentElement
					.clientHeight
				if (this.istrue == true) {
					console.log(1);
					if (scrollBottom < 100) {
						console.log(2, this.currentindex, this.replayList.length < this.total);
						this.istrue = false
						if (this.currentindex == 0 && this.replayList.length < this.total) {
							console.log(3);
							this.num++
							let querys = {
								w: [
									["business_id", this.info.id, "EQ"],
									["isbuy", "1", "EQ"],
								],
								o: ["id", "desc"],
								p: [this.num, 10],
							}

							console.log(44545, querys.p[0]);
							this.api.getWxCommunicate(this.query.toEncode(this.newqry(querys))).then(res => {
								this.replayList = [...this.replayList, ...res.data.list]
								this.istrue = true

							})


						} else if (this.currentindex == 1 && this.replayList.length < this.total) {
							this.num++

							let querystwo = {
								w: [
									["business_id", this.info.id, "EQ"],
									["isbuy", "0", "EQ"],
								],
								o: ["id", "desc"],
								p: [this.num, 10],
							}

							this.api.getWxCommunicate(this.query.toEncode(this.newqry(querystwo))).then(res => {
								this.replayList = [...this.replayList, ...res.data.list]
								this.istrue = true
							})

						}
					}
					// load() {
					// 	console.log(1231321);
					// 	this.getList()
					// }
				}
			},
			back() {
				this.until.back()
			},
			popShow() {
				this.isPopShow = true
			},
			cancel() {
				this.isPopShow = false
			},
			submit() {
				let p = {
					businessId: "",
					customerId: "",
					isbuy: "",
					content: "",
				}
				p.content = this.reply
				p.businessId = this.info.id
				p.customerId = this.info.customerId
				p.isbuy = this.isbuy
				this.api.postWxCommunicate(p).then(res => {
					if (this.currentindex == 0) {
						this.api.getWxBusinessBuyDetail(this.id).then(res => {

							this.info = res
							this.isbuy = true
							let querys = {
								w: [
									["businessId", this.info.id, "EQ"],
									["isbuy", "1", "EQ"],
								],
								o: ["id", "desc"],
								p: [1, 10],
							}
							this.api.getWxCommunicate(this.query.toEncode(this.newqry(querys))).then(
							res => {
								this.replayList = [...this.replayList, ...res.data.list]
								this.total = res.page.total

							})

						})

					} else if (this.currentindex == 1) {
						this.api.getWxBusinessSellDetail(this.id).then(res => {

							this.info = res
							this.isbuy = false
							let querystwo = {
								w: [
									["businessId", this.info.id, "EQ"],
									["isbuy", "0", "EQ"],
								],
								o: ["id", "desc"],
								p: [1, 10],
							}
							this.api.getWxCommunicate(this.query.toEncode(this.newqry(querystwo))).then(
								res => {
									this.replayList = [...this.replayList, ...res.data.list]
									this.total = res.page.total
								})

						})
					}
					this.isPopShow = false
				})


			}
		},
		computed: {
			isMortgage() {
				if (this.info.isMortgage == false)
					return "否"
				else if (this.info.isMortgage == true)
					return "是"
			}
		}
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
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: black;
			opacity: 0.3;
			z-index: 100;
		}

		.popBox {
			position: fixed;
			top: 5.65rem;
			left: 50%;
			transform: translateX(-50%);
			width: 6.07rem;
			background: #FFFFFF;
			border-radius: 0rem;
			z-index: 199;
			border-radius: 0.1rem;

			.title {
				width: 100%;
				height: 1.06rem;
				text-align: center;
				line-height: 1.06rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #333333;
				border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);

			}

			textarea {
				width: 100%;
				height: 2.48rem;
				padding: 0.20rem 0.35rem;
				font-size: 0.24rem;
				border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);
				box-sizing: border-box;
				display: block;
			}

			textarea::placeholder {
				font-size: 0.24rem;
				font-family: PingFang SC;
				font-weight: 500;
				color: #909090;
			}

			.bOttom {
				display: flex;
				width: 100%;
				height: 0.98rem;

				.btn1 {
					width: 50%;
					height: 100%;
					border-right: 0.01rem solid rgba(0, 0, 0, 0.2);
					text-align: center;
					line-height: 0.98rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: 500;
					color: #606060;

				}

				.btn2 {
					width: 50%;
					height: 100%;
					text-align: center;
					line-height: 0.98rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: 500;
					color: #09C076;
				}
			}
		}

		/*display: flex;*/
		/*display: -webkit-flex;*/
		/*flex-direction: column;*/
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

		.bodyList {
			width: 100%;
			background: #FFFFFF;
			border-radius: 0.2rem;
			margin-top: 0.1rem;
			padding: 0.4rem 0.37rem;


			.list {
				display: flex;
				margin-bottom: 0.3rem;

				.listHead {
					width: 1.03rem;
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;
				}

				.listContent {
					width: 5rem;
					font-size: 0.24rem;
					font-family: PingFang SC;
					font-weight: bold;
					color: #303030;
					margin-left: 0.66rem;
				}
			}


		}

		.reply {
			padding: 0.4rem;
			background-color: #ffffff;
			margin-top: 0.1rem;
			border-radius: 0.2rem;

			.replyCotent {
				font-size: 0.24rem;
				font-family: PingFang SC;
				font-weight: bold;
				color: #303030;
				margin-top: 0.2rem;
			}
		}

		.btn {
			text-align: center;
			margin-top: 3.5rem;
			position: fixed;
			bottom: 0.4rem;
			left: 0;
			margin-left: 50%;
			transform: translateX(-50%);

			button {


				width: 5.7rem;
				height: 0.7rem;
				background: #09C076;
				border-radius: 0rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #FFFFFF;
				border-radius: 0.5rem;
			}
		}


	}
</style>
