<template>
	<div id="container">
		<div class="tabBar">
			<div class="item" @click="tofollow">
				<img src="~@/assets/img/followup.png" >
				<div>跟进</div>
			</div>
			<a  :href="'tel:' + info.tel" class="item">
				<img src="~@/assets/img/tel.png" >
				<div>电话</div>
			</a>
			<div class="item"  @click="copywxtap"
            ref="copytext">
				<img src="~@/assets/img/vx.png" >
				<div>微信</div>
			</div>
			<div class="item" @click="toChange">
				<img src="~@/assets/img/needschange.png" >
				<div>修改需求</div>
			</div>
		</div>
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
			  <div class="" style="margin-top: 0.6rem;">
			  	
			  
			  <el-timeline :reverse="true">
			    <el-timeline-item
			      v-for="(item, index) in info.list"
			      :key="index"
			     >
			      <div class="content">
			      	<div class="head">
			      		<span v-if="currentIndex==0">
			      			创建客户
			      		</span>
			      		<span  v-if="currentIndex==1">
			      			创建订单
			      		</span>
			      		<span>
			      			{{info.name}}
			      		</span>
			      		<div class="time">
			      		{{info.creatTime}}
			      		</div>
			      	</div>
			      	<div class="contentBody">
			      		<div class="type">
			      			<span  v-if="currentIndex==0">创建客户—</span>
			      			<span  v-if="currentIndex==1">
			      				创建订单
			      			</span>
			      			<span>{{item.type}}—</span>
			      			<span>{{item.creat}}</span>
			      			
			      		</div>
			      		<div class="type" v-if="currentIndex==0">
			      			<span>下次跟进时间：</span>
			      			<span>{{info.nextTime}}</span>
			      		</div>
			      		<div class="type" v-if="currentIndex==1">
			      			<span>订单内容：</span>
			      			<span>{{info.content}}</span>
						
			      		</div>
			      	</div>
			      </div>
				  
			    </el-timeline-item>
			  </el-timeline>
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
					vx:'13500008888',
					name: "金秀炫",
					rmks: "未知",
					clock: "3天后跟进",
					tel: "13500009999",
					nextTime: "2021-07-05 12:50:20",
					level: "A",
					list:[
						{
								type:"APP",
								creat:"主动创建",
						},
						{
								type:"APP",
								creat:"主动创建",
						},
						{
								type:"APP",
								creat:"主动创建",
						},
						{
								type:"APP",
								creat:"主动创建",
						}
					],
					detail: "需要性能好一些，性价比高，舒适型，视野开阔需要性能好一些，性价比高，舒适型，视野开阔需要性能好一些，性价比高，舒适型，视野开阔",
					creatTime:"2021-07-05 12:50:20",
				
					
					content:"奥迪 奥迪A6 2004款 奥迪A6 1.8T 自动舒适 一辆"
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
			},
			toChange(){
				this.until.href("/views/customermagt/new.html")
			},
			tofollow(){
				this.until.href("/views/customermagt/newfollow.html")

			},
			copywxtap() {
			      this.copyContent = this.info.vx;//也可以直接写上等于你想要复制的内容
			      var input = document.createElement("input"); // 直接构建input
			      input.value = this.copyContent; // 设置内容
			      console.log(input.value);
			      document.body.appendChild(input); // 添加临时实例
			      input.select(); // 选择实例内容
			      document.execCommand("Copy"); // 执行复制
			      document.body.removeChild(input); // 删除临时实例
			      Toast("微信号复制成功");
			    },

		},
	};
</script>
<style type="less">
	.el-timeline-item{
		margin-bottom: -0.24rem;
	}
</style>
<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {

		// width: 100%;
		// height: 100%;
		padding-bottom: 4rem;
		background: url('~@/assets/img/header.png') no-repeat;
		background-color: #F1F3F2;
		background-size: 100% 1.28rem;
		// overflow: hidden;
		
		/*display: flex;*/
		/*display: -webkit-flex;*/
		.tabBar{
			display: flex;
			// justify-content: space-around;
			align-items: center;
			
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 199;
		width: 100%;
			height: 1rem;
			background: #FFFFFF;
			border-top: 0.02rem solid  #F1F3F2  ;
			.item{
				text-align: center;
				width: 25%;
				font-size: 0.22rem;
				font-weight: 500;
				color: #999999;
				img{
					width: 0.38rem;
					height: 0.38rem;
					
				}
			}
			
		}
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
					bottom: -0.12rem;
					left: 0;
					
				}
			}
			.content{
				margin-top: 0.2rem;
				.head{
					font-size: 0.24rem;
					font-weight: 500;
					color: #909090;
					display: flex;
					padding: 0;
					span{
						position: relative;
						margin-right: 0.42rem;
					}
					span::after{
						content: "";
						width:0.02rem ;
						height: 0.2rem;
						background-color: #000000;
						position: absolute;
						top:50%;
						transform: translateY(-50%);
						right: -0.1rem;
					}
				}
			   .contentBody{
				   margin-top: 0.2rem;
				  font-size: 0.24rem;
				  font-weight: 500;
				  color: #303030;
					.type{
						display: flex;
					}
			   }
			} 
		}


	}
</style>
