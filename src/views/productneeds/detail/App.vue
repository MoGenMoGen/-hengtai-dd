<!-- 互生升买车需求详情页面 -->
<template>
	<div id="container">
		<div class="mask" v-if="isPopShow==true">
			
		</div>
		<div class="popBox" v-if="isPopShow==true">
			<div class="title">
				回复
			</div>
			<textarea rows="" cols="" placeholder="多行输入"></textarea>
			<div class="bOttom">
			    <div  class="btn1" @click="cancel">取消</div>
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
		<div class="bodyList"v-if="currentindex==1">
			<div class="list">
				<div class="listHead">
					品牌车系
				</div>
				<div class="listContent">
					{{info.pinpai}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					里程数
				</div>
				<div class="listContent">
					{{info.licheng}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					上牌时间
				</div>
				<div class="listContent">
					{{info.shangpai}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					备注
				</div>
				<div class="listContent">
					{{info.beizhu}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					发布时间
				</div>
				<div class="listContent">
					{{info.shijian}}
				</div>
			</div>
			<div class="list">
				<div class="listHead">
					销售人员
				</div>
				<div class="listContent">
					{{info.xiaoshou}}
				</div>
			</div>
		</div>
		
		<div class="reply" v-for="(item,index) in replayList" :key="index">
			<div class="replyCotent">
				{{item.replay}}
			</div>
			<div class="replyCotent">
				回复时间: {{item.date}}
			</div>
			<div class="replyCotent">
				回复人: {{item.person}}
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
				isPopShow:false,
				currentindex:0,
				id:"",
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
					shangpai:"2020-06-01"
				},
				replayList:[
					{
						replay:"我们店里刚到一款正适合您的需求，推荐您来店里试一下。随时 欢迎光临！",
						date:"2021-08-05",
						person:"杰尼龟"
					}
				]
				

			};
		},

		async mounted() {
			this.api.getWxBusinessBuyDetail(this.id).then(res=>{
				this.info=res
				console.log(this.info);
			})
		},
		created() {
			this.currentindex=this.until.getQueryString('index')
			this.id=this.until.getQueryString('id')
			console.log(this.currentindex,this.id);
		},
		methods: {

			back() {
				this.until.back()
			},
			popShow(){
				this.isPopShow=true
			},
			cancel(){
				this.isPopShow=false
			},
			submit(){
				this.isPopShow=false
			}
		},
		computed:{
			isMortgage(){
				if(this.info.isMortgage==false)
				return "否"
				else if(this.info.isMortgage==true)
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
		.mask{
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: black;
			opacity: 0.3;
			z-index: 100;
		}
		.popBox{
			position: fixed;
			top:5.65rem;
			left: 50%;
			transform: translateX(-50%);
			width: 6.07rem;
			background: #FFFFFF;
			border-radius: 0rem;
			z-index: 199;
			border-radius: 0.1rem;
			.title{
				width: 100%;
				height: 1.06rem;
				text-align: center;
				line-height:1.06rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #333333;
				border-bottom: 0.01rem solid rgba(0,0,0,0.2);
				
			}
			textarea{
				width: 100%;
				height: 2.48rem;
				padding: 0.20rem 0.35rem;
				font-size: 0.24rem;
				border-bottom: 0.01rem solid rgba(0,0,0,0.2);
				box-sizing: border-box;
				 display: block;  
			}
			textarea::placeholder{
				font-size: 0.24rem;
				font-family: PingFang SC;
				font-weight: 500;
				color: #909090;
			}
			.bOttom{
				display: flex;
				width: 100%;
				height: 0.98rem;
				.btn1{
					width: 50%;
					height: 100%;
					border-right:0.01rem solid rgba(0,0,0,0.2);
					text-align: center;
					line-height: 0.98rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: 500;
					color: #606060;
					
				}
				.btn2{
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
		.reply{
			padding: 0.4rem;
			background-color: #ffffff;
			margin-top: 0.1rem;
		    border-radius: 0.2rem;
			.replyCotent{
				font-size: 0.24rem;
				font-family: PingFang SC;
				font-weight: bold;
				color: #303030;
				margin-top: 0.2rem;
			}
		}
		.btn{
			text-align: center;
			margin-top: 3.5rem;
			button{
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
