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
						<input placeholder="姓名" v-model="name" />
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
			</div>
		</div>
		<div class="list2" style="width: 100%; overflow: hidden;overflow-x: auto; padding: 0rem 0.2rem;">
			<div class="header2" >
				<div class="headName4 headname">
					姓名
				</div>
				<div class="headName4 headname">
					月份
				</div>
				<div class="headName5 headname">
					月应出勤时长(H)
				</div>
				<div class="headName5 headname">
					月实际出勤时长(H)
				</div>
				<div class="headName5 headname">
					达成率(%)
				</div>
				<div class="headName5 headname">
					项目详情
				</div>
			</div>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getInfo()">
			<div class="list" v-for="(item,index) in list" :key='index' >
				<div class="listName4 listName">
					{{item.userName}}
				</div>
				<div class="listName4 listName">
					{{item.workDate}}
				</div>
				<div class="listName5 listName">
					{{item.monthHours}}
				</div>
				<div class="listName5 listName" >
					{{item.workHours}}
				</div>
				<div class="listName5 listName" >
					{{item.workLv}}
				</div>
				<div class="listName5 listName" style="color:#CA093A; text-decoration: underline;"  @click="pepDetial(item)" >
					查看
				</div>
			</div>
			</van-list>
		</div>
		
	

		
		
		
		
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
				bg,
				time,
				close,
				name:'',
				tabList:['项目','人员'],
				showPicker:false,
				currentTime:new Date(),
				dateTime:"",
				proname:'',
				list:[],
				deptNm:'',
				current:1,
				size:10,
				userInfo:"",
				currentRole:2,
				isCharge:'',
				deptIds:'',
				total:'',
			}
		},
		mounted() {
			this.userInfo = this.until.loGet("userInfo");
			if (this.userInfo) {
				this.deptIds = this.userInfo.dept_id
				this.isCharge = this.userInfo.detail.isCharge
				if (this.userInfo.detail.chargeDepts) {
					this.deptIds = this.deptIds +','+this.userInfo.detail.chargeDepts.join(",")
				}
			}
			if (this.userInfo && this.userInfo.detail.isCharge == 1) this.currentRole = 1;
			else if (this.userInfo && this.userInfo.role_name == "boss")
			this.currentRole = 2;
			this.deptNm=this.until.getQueryString('deptNm')
		},
		methods: {
			deleteDate(){
				this.dateTime=''
			},
			search(){
			this.current=1
			this.list=[]
			this.getInfo()
			},
			getInfo(){
				if(this.currentRole==2){
					this.api.getDeptPersonReport(this.name,this.dateTime,'','',this.current,this.size,this.deptNm).then(res=>{
						this.total = res.total
						this.list = [...this.list, ...res.records]
						this.finished = this.list.length >= res.total;
						this.loading = false
						this.current++
					})
				}
				if(this.currentRole==1){
					this.api.getDeptPersonReport(this.name,this.dateTime,this.isCharge,this.deptIds,this.current,this.size,'').then(res=>{
						this.total = res.total
						this.list = [...this.list, ...res.records]
						this.finished = this.list.length >= res.total;
						this.loading = false
						this.current++
					})
				}
				
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
			},
			pepDetial(item){
				this.until.href(`/views/baobiao/bosrenyuanDetail.html?userNm=${item.userName}&deptNm=${item.deptName}`)
			},
			
			
		
		
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
			
		
		}
		.list2{
			.header2{
				width: 13rem;
				overflow-x: auto;
				white-space: nowrap;
				height: 0.62rem;
				box-sizing: border-box;
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
					display: inline-block;  
				}
				.headName4{
					width:1.5rem; 
					border-right: 1px solid #FFFFFF;
				}
				.headName5{
					width: 2.5rem;
					border-right: 1px solid #FFFFFF;
				}
			}
			.list{
				width: 13rem;
				padding: 0.3rem 0;
				background: #FFFFFF;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;
				margin-bottom: 0.1rem;
				overflow-x: auto;
				white-space: nowrap;
				box-sizing: border-box;
				.listName{
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.24rem;
					text-align: center;
				}
				.listName4{
					width: 1.5rem;
				}
				.listName5{
					width: 2.5rem;
				}
				
			}
		}
		.list1{
			.bottom{
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
					}
					.listName1{
						width: 30%;
					}
					.listName2{
						width: 25%;
					}
					.listName3{
						width: 20%;
						color: #CA093A;
						text-decoration: underline;
					}
					.listName4{
						width: 20%;
					}
					.listName5{
						width: 30%;
					}
					
				}
			}
			.header{
				height: 0.62rem;
				box-sizing: border-box;
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
					display: inline-block;  
				}
				.headName1{
					width: 30%;
					border-right: 1px solid #FFFFFF;
				}
				.headName2{
					width: 25%;
					border-right: 1px solid #FFFFFF;
				}
				.headName3{
					width: 20%;
				}
			
			}
		}
		.list3{
			.header2{
				width: 15.5rem;
				overflow-x: auto;
				white-space: nowrap;
				height: 0.62rem;
				box-sizing: border-box;
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
					display: inline-block;  
				}
				.headName4{
					width:1.5rem; 
					border-right: 1px solid #FFFFFF;
				}
				.headName5{
					width: 2.5rem;
					border-right: 1px solid #FFFFFF;
				}
			}
			.list{
				width: 15.5rem;
				padding: 0.3rem 0;
				background: #FFFFFF;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;
				margin-bottom: 0.1rem;
				overflow-x: auto;
				white-space: nowrap;
				box-sizing: border-box;
				.listName{
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.24rem;
					text-align: center;
				}
				.listName4{
					width: 1.5rem;
				}
				.listName5{
					width: 2.5rem;
				}
				
			}
		}
	
	
		
	
	
		
	}
</style>
