<template>
	<div class="content">
		<van-popup v-model="showPicker" round position="bottom">
			<van-datetime-picker v-model="currentTime" type="year-month" title="选择年月" 
				 @cancel="showPicker = false" @confirm="onConfirm" />
		</van-popup>
		<div class="top">
			<!-- <div class="tab">
				<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
				:class="currentIndex==index?'active':''">
					{{item}}
				</div>
			</div> -->
			<div class="bodyContent">
				<div class="workHours">
					总计工时：125200.00H
				</div>
				<div class="searchBox">
					 <div class="boxOne">
					 	<input placeholder="项目名称" v-model="name" />
					 </div>
					 <div class="boxTwo" @click="showPicker=true">
					 	<p v-if="!dateTime">月份选择</p>
						 <p  v-if="dateTime" style="color: #000;"> {{dateTime}}</p>
						<img :src="time" >
					 </div>
					 <div class="btnSearch">
					 	查询
					 </div>
				</div>
				<div class="header">
					<div class=" headname">
						项目名称
					</div>
					<div class=" headname">
						月份
					</div>
					<div class="headname">
						工作时长(H)
					</div>
					<div class="headname" v-if="currentRole==2">
						人员详情
					</div>
				</div>
			</div>
			
		</div>
		<div class="bottom">
			<div class="list" v-for="item in 30">
				<div class="listName">
				博白项目
				</div>
				<div class="listName">
					2021-12
				</div>
				<div class="listName">
					504.00
				</div>
				<div class="listName"  v-if="currentRole==2" style="color: #CA093A;
						text-decoration: underline; " @click="toDetail">
					查看
				</div>
			</div>
		</div>

		
		
		
		
	</div>
</template>
<script>
	import bg from "../../../assets/img/总分背景.png"
	import time from "../../../assets/img/时间控件.png"
	import {
		Notify
	} from 'vant';
	export default {
		data() {
			return {
				currentRole:2,
				currentIndex:0,
				bg,
				time,
				name:'',
				tabList:['项目','人员'],
				showPicker:false,
				currentTime:new Date(),
				dateTime:"",
			}
		},
		mounted() {
			
		},
		methods: {
			toDetail(){
				this.until.href("/views/baobiao/xiangmuDetailTwo.html")
			},
			changeTab(index){
				this.currentIndex=index
			},
			onConfirm(val){
				this.dateTime=this.getNowDate(val)
				this.showPicker=false
			},
			getNowDate(val) {
				let nowDate = new Date(val);
				let year = nowDate.getFullYear();
				let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
				return year + "-" + month;
			}
		
		
		}
	}
</script>
<style lang="less" scoped>
	.content {
		background-color: #F1F3F2;
		.top{
			position: sticky;
			top: 0;
			left:0;
			z-index: 50;
			.tab{
				width: 100%;
				background-color: #ffffff;
				height: 1rem;
				display: flex;
				border-bottom: 1px solid #D9D9D9; 
				.tabList{
					flex: 1;
					height: 100%;
					text-align: center;
					line-height: 1rem;
					font-size: 0.3rem;
					font-weight: 500;
					color: #999999;
				}
				.active{
					border-bottom:1px solid #CA093A ;
					font-size: 0.3rem;
					font-weight: bold;
					color: #CA093A;
					transition: 0.5s;
				}
				
			}
			.bodyContent{
				background-color: #F1F3F2;
				padding:0.3rem 0.2rem ;
				box-sizing: border-box;
				.workHours{
					height: 0.88rem;
					width: 100%;
					background-image: url(../../../assets/img/总分背景.png);
					background-size: 100% 100%;
					text-align: center;
					line-height: 0.88rem;
					font-size: 0.3rem;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.searchBox{
				margin-top: 0.3rem;
				display: flex;
				justify-content: space-around;
				.boxOne{
					width: 2.63rem;
					height: 0.6rem;
					border: 1px solid #D9D9D9;
					background-color: #ffffff;
					input{
						width: 100%;
						height: 100%;
						padding: 0.2rem;
						box-sizing: border-box;
						font-size: 0.24rem;
						border: 0;
					}
					input::placeholder{
						font-size: 0.24rem;
						font-weight: 500;
						color: #999999;
					}
				}
				.boxTwo{
					width: 2.63rem;
					height: 0.6rem;
					border: 1px solid #D9D9D9;
					display: flex;
					background-color: #ffffff;
					justify-content: space-between;
					padding: 0.2rem;
					box-sizing: border-box;
					align-items: center;
					p{
						font-size: 0.24rem;
						font-weight: 500;
						color: #999999;
					}
					img{
						width: 0.28rem;
						height: 0.26rem;
					}
				}
				.btnSearch{
					width: 1.44rem;
					height: 0.6rem;
					background: #CA093A;
					border-radius: 0.04rem;
					text-align: center;
					line-height: 0.6rem;
					font-size: 0.28rem;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			.header{
				height: 0.62rem;
				background: #9F9F9F;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				margin-top: 0.3rem;
				display: flex;
				.headname{
					text-align: center;
					line-height: 0.62rem;
					font-size: 0.24rem;
					color: #FFFFFF;
					flex: 1;
				}
				
			}
		}
		.bottom{
			padding:0rem 0.2rem ;
			box-sizing: border-box;
			background-color: #F1F3F2;
			.list{
				padding: 0.3rem 0;
				background: #FFFFFF;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;
				margin-bottom: 0.1rem;
				.listName{
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.24rem;
					text-align: center;
					flex: 1;
				}
		
				
			}
		}
		
	
	
		
	}
</style>
