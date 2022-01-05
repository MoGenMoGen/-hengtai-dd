<template>
	<div class="content">
		<van-popup v-model="showPicker" round position="bottom">
			<van-datetime-picker v-model="currentTime" type="year-month" title="选择年月" 
				 @cancel="showPicker = false" @confirm="onConfirm" />
		</van-popup>
		<div class="tab">
			<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
			:class="currentIndex==index?'active':''">
				{{item}}
			</div>
		</div>
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
		}
		
	}
</style>
