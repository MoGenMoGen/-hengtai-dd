<!-- 互生升个人中心页面 -->
<template>
	<div id="container">
		<div class="wrapper">
			<div class="title"><span>个人中心</span></div>
			<div class="personInfomation" @click="toDetail">
				<img class="img1" :src="info.imgUrl" style="object-fit: cover;" />
				<img class="img2" src="~@/assets/img/arrowrightwhite.png" />
				<div class="textbox">
					<div class="name">
						{{ info.arg7 }}
						<span class="tel">({{ info.phone }})</span>
					</div>
					<div class="position">
						<span>{{ info.departRoles }}</span>
					</div>
				</div>
			</div>
			<div class="personList">
				<div class="listcontent" @click="toMycostomer">
					<img class="img1" src="~@/assets/img/mycustomer.png" />
					<span> 我的客户 </span>
					<img class="img2" src="~@/assets/img/arrowrightblack.png" />
				</div>
				<div class="listcontent">
					<a :href="'tel:' + customerService" style="display: flex;align-items: center;"  >
						<img class="img1" src="~@/assets/img/customerservice.png" />
						<span> 客服中心 </span>
					
					<div class="customerServiceTel">
						{{ customerService }}
					</div>
					</a>
				</div>
				<div class="listcontent" @click="toAboutus">
					<img class="img1" src="~@/assets/img/aboutus.png" />
					<span> 关于我们 </span>
					<img class="img2" src="~@/assets/img/arrowrightblack.png" />
				</div>
			</div>

			<div class="btn">
				<button type="button" @click="quit">退出登录</button>
			</div>
		</div>
		<tabbar :currentIndex="1"> </tabbar>
	</div>
</template>

<script>
	import tabbar from "@/components/tabbar";

	import {
		Toast
	} from "mint-ui";
	export default {
		data() {
			return {
				name: "张章",
				tel: 13456179573,
				position: "销售经理",
				customerService: "",
				info: {},
			};
		},
		components: {
			tabbar,
		},
		async mounted() {
			let querys = {
				w: [
					["category", 10, "EQ"],
				],
				o: ["id", "esc"],
				p: [1, 10],
			}
			this.api.getPersonInformation({}).then((res) => {
				this.info = res.sysUserVo;
				console.log(this.info);
			});
			this.api.getTelNumber(this.query.toEncode(this.newqry(querys))).then(res => {
				console.log(555555, res);
				this.customerService = res.list[0].content
			})
		},
		methods: {
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
			toDetail() {
				this.until.href("/views/profile/detail.html");
			},
			toAboutus() {
				this.until.href("/views/profile/aboutus.html");
			},
			toMycostomer() {
				this.until.href("/views/customermagt/index.html");
			},
			quit() {
				this.api.logout().then(() => {
					localStorage.clear();
					window.location.replace("/views/profile/login.html");
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {
		overflow: hidden;

		width: 100%;
		//   height: 100%;
		min-height: 100vh;
		background-color: @backgroundColor;
		background: url("~@/assets/img/profilebg.png") no-repeat;
		background-size: 100% 4.73rem;
		background-attachment: scroll;

		// overflow: hidden;
		/*display: flex;*/
		/*display: -webkit-flex;*/
		/*flex-direction: column;*/
		//   .wrapper {
		//     background: url("~@/assets/img/profilebg.png") no-repeat;
		//     background-size: 100% 4.73rem;
		//     background-attachment: scroll;
		//     width: 100%;
		//     position: fixed;
		//     top: 0;
		//     bottom: 1.2rem;
		//     overflow-y: scroll;
		//     height: auto;
		//     -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/
		.title {
			font-size: 0.36rem;
			font-weight: 500;
			color: #ffffff;
			text-align: center;
			padding-top: 0.67rem;
		}

		.personInfomation {
			margin-top: 0.55rem;
			padding: 0 0.55rem;
			box-sizing: border-box;
			display: flex;
			width: 100%;
			position: relative;

			.img1 {
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 0.6rem;
			}

			.img2 {
				width: 0.13rem;
				height: 0.25rem;
				position: absolute;
				top: 50%;
				right: 0.8rem;
				transform: translateY(-50%);
			}

			.textbox {
				padding: 0.1rem 0.26rem;
				box-sizing: border-box;

				.name {
					font-size: 0.3rem;
					font-weight: 500;
					color: #ffffff;

					.tel {
						font-size: 0.24rem;
						font-weight: 500;
						color: #ffffff;
						margin-left: 0.25rem;
					}
				}

				.position {
					margin-top: 0.2rem;
					font-size: 0.24rem;
					font-weight: 500;
					color: #ffffff;
				}
			}
		}

		.personList {
			width: 6.9rem;

			background: #ffffff;
			box-shadow: 0rem 0rem 0rem 0rem rgba(120, 120, 120, 0.12);
			border-radius: 0.2rem;
			margin: 0 auto;
			margin-top: 0.73rem;

			.listcontent {
				display: flex;
				position: relative;
				padding: 0.4rem;
				border-bottom: 0.01rem solid #f1f1f1;

				.img1 {
					width: 0.32rem;
					height: 0.3rem;
				}

				span {
					font-size: 0.26rem;
					font-weight: 500;
					color: #303030;
					line-height: 0.3rem;
					margin-left: 0.15rem;
				}

				.customerServiceTel {
					font-size: 0.26rem;
					line-height: 0.3rem;
					position: absolute;
					top: 50%;
					right: 0.19rem;
					transform: translateY(-50%);
				}

				.img2 {
					width: 0.13rem;
					height: 0.25rem;
					position: absolute;
					top: 50%;
					right: 0.19rem;
					transform: translateY(-50%);
				}
			}
		}

		.btn {
			display: flex;
			justify-content: center;
			margin-top: 1rem;

			button {
				padding: 0.2rem 1rem;
				background-color: #09c076;
				color: #ffffff;
				border-radius: 0.4rem;
			}
		}
	}

	// }
</style>
