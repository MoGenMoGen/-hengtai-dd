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
				<div class="workHours" v-if="list.length>0">总计工时：{{list[0].count}}H</div>
				<div class="searchBox">
					 <div class="boxOne">
					 	<input placeholder="项目名称" v-model="name" />
					 </div>
					<div class="boxTwo" @click="showPicker = true" style="position: relative;">
						<img :src="time" />
						<p v-if="!dateTime" style="margin-left:0.14rem ;">月份选择</p>
						<p v-if="dateTime" style="color: #000;margin-left:0.14rem ;">{{ dateTime }}</p>
						<img :src="close" style="position: absolute; right:0.15rem" @click.stop="deleteDate" />
					</div>
					 <div class="btnSearch" @click="search">
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
				</div>
			</div>
			
		</div>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getInfo()"
			>
		<div class="bottom">
			<div class="list" v-for="(item,index) in list" :key='index'>
				<div class="listName">
				{{item.projName}}
				</div>
				<div class="listName">
					{{item.workDate}}
				</div>
				<div class="listName">
					{{item.workHours}}
				</div>
			</div>
		</div>
		</van-list>

		
		
		
		
	</div>
</template>
<script>
	import bg from "../../../assets/img/总分背景.png"
	import time from "../../../assets/img/时间控件.png"
	import close from "../../../assets/img/关闭.png"
	import {
		Notify
	} from 'vant';
	export default {
		data() {
			return {
				loading:false,
				finished:false,
				currentRole:1,
				currentIndex:0,
				bg,
				time,
				close,
				name:'',
				tabList:['项目','人员'],
				showPicker:false,
				currentTime:new Date(),
				dateTime:"",
				userNm:'',
				deptNm:'',
				list:[],
				current:1,
				size:10,
				userInfo:'',
				deptIds:'',
				isCharge:'',
				total:'',
				deptId:'',
				userId:''
			}
		},
		mounted() {
			this.until.loSave("currentIndex",1);
			this.userNm=this.until.getQueryString('userNm')
			this.deptNm=this.until.getQueryString('deptNm')
			this.deptId=this.until.getQueryString('deptId')
			this.userId=this.until.getQueryString('userId')
			this.userInfo = this.until.loGet("userInfo");
			if (this.userInfo) {
				this.deptIds = this.userInfo.dept_id
				this.isCharge = this.userInfo.detail.isCharge
				if (this.userInfo.detail.chargeDepts) {
					this.deptIds = this.deptIds +','+this.userInfo.detail.chargeDepts.join(",")
				}
				if(!this.userInfo.detail.chargeDepts&&this.userInfo.detail.isCharge == 1&&this.userInfo.role_name.indexOf('boss')==(-1)){
					this.currentRole=3
				}
			}
			console.log(798,this.currentRole);
			if (this.userInfo && this.userInfo.detail.isCharge == 1&&this.userInfo.detail.chargeDepts) this.currentRole = 1;
			 if (this.userInfo && this.userInfo.role_name.indexOf('boss')!=-1) this.currentRole = 2;
		},
		methods: {
			search(){
				this.current=1
				this.list=[]
				this.getInfo()
			},
			deleteDate(){
				this.dateTime=''
			},
			getInfo(){
				if(this.currentRole==2){
					document.title=this.deptNm+"-"+this.userNm
					this.api.getPersonProjBossReport1(this.name,this.dateTime,this.userId,this.current,this.size,this.deptId).then(res=>{
						this.total = res.total
						this.list = [...this.list, ...res.records]
						this.finished = this.list.length >= res.total;
						this.loading = false
						this.current++
					})
				}
				if(this.currentRole==1){
					document.title=this.deptNm+"-"+this.userNm
					this.api.getPersonProjBossReport1(this.name,this.dateTime,this.userNm,this.current,this.size,this.deptId).then(res=>{
						this.total = res.total
						this.list = [...this.list, ...res.records]
						this.finished = this.list.length >= res.total;
						this.loading = false
						this.current++
					})
				}
				if(this.currentRole==3){
					document.title=this.userNm
					this.api.getPersonProjBossReport(this.name,this.dateTime,this.userId,this.current,this.size,this.isCharge,this.deptIds).then(res=>{
						this.total = res.total
						this.list = [...this.list, ...res.records]
						this.finished = this.list.length >= res.total;
						this.loading = false
						this.current++
					})
				}
				
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
		min-height: 100vh;
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
			padding-bottom: 0.2rem;
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
