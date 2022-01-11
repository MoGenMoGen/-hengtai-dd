<template>
	<div class="content">
		<van-popup v-model="showPicker" round position="bottom">
			<van-datetime-picker v-model="currentTime" type="year-month" title="选择年月" 
				 @cancel="showPicker = false" @confirm="onConfirm" />
		</van-popup>
		<div class="top">
			<div class="tab">
				<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
				:class="currentIndex==index?'active':''" v-if="currentRole==1">
					{{item}}
				</div>
				<div class="tabList" v-for="(item,index) in tabListTwo" :key="index" @click="changeTab(index)"
				:class="currentIndex==index?'active':''" v-if="currentRole==2">
					{{item}}
				</div>
			</div>
			<div class="bodyContent">
				<div class="workHours">
					总计工时：125200.00H
				</div>
				<div class="searchBox">
					 <div class="boxOne">
					 	<input placeholder="项目名称" v-model="proname"  v-if="currentIndex==0"/>
						<input placeholder="姓名" v-model="name"  v-if="currentIndex==1&&currentRole==1"/>
						<input placeholder="部门名称" v-model="name"  v-if="currentIndex==1&&currentRole==2"/>
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
			</div>
		</div>
		<div class="list1" style="padding:0rem 0.2rem ;">
			<div class="header" v-if="currentIndex==0">
				<div class="headName1 headname">
					项目
				</div>
				<div class="headName2 headname">
					月份
				</div>
				<div class="headName2 headname">
					工作时长(H)
				</div>
				<div class="headName3 headname" v-if="currentRole==1">
					人员详情
				</div>
				<div class="headName3 headname"  v-if="currentRole==2">
					部门详情
				</div>
			</div>
			<div class="bottom">
				<div class="list" v-for="item in 30" v-if="currentIndex==0">
					<div class="listName1 listName">
						博白项目
					</div>
					<div class="listName2 listName">
						2021-12
					</div>
					<div class="listName2 listName">
						504.00
					</div>
					<div class="listName3 listName" @click="toDetail">
						查看
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="list2" style="width: 100%; overflow: hidden;overflow-x: auto; padding: 0rem 0.2rem;">
			<div class="header2" v-if="currentIndex==1&&currentRole==1">
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
			<div class="list" v-for="item in 30" v-if="currentIndex==1&&currentRole==1">
				<div class="listName4 listName">
					王冰冰
				</div>
				<div class="listName4 listName">
					2021-12
				</div>
				<div class="listName5 listName">
					24.00
				</div>
				<div class="listName5 listName" >
					24.00
				</div>
				<div class="listName5 listName" >
					100.00
				</div>
				<div class="listName5 listName" style="color:#CA093A; text-decoration: underline;"  @click="pepDetial" >
					查看
				</div>
			</div>
		</div>
		<div class="list3" style="width: 100%; overflow: hidden;overflow-x: auto; padding: 0rem 0.2rem;">
			<div class="header2" v-if="currentIndex==1&&currentRole==2">
				<div class="headName4 headname">
					部门
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
				<div class="headName5 headname">
					人员详情
				</div>
			</div>
			<div class="list" v-for="item in 30" v-if="currentIndex==1&&currentRole==2">
				<div class="listName4 listName">
					王冰冰
				</div>
				<div class="listName4 listName">
					2021-12
				</div>
				<div class="listName5 listName">
					24.00
				</div>
				<div class="listName5 listName" >
					24.00
				</div>
				<div class="listName5 listName" >
					100.00
				</div>
				<div class="listName5 listName" style="color:#CA093A; text-decoration: underline;"  @click="pepDetial" >
					查看
				</div>
				<div class="listName5 listName" style="color:#CA093A; text-decoration: underline;" @click="pepDetialTwo" >
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
				tabListTwo:['项目','部门'],
				showPicker:false,
				currentTime:new Date(),
				dateTime:"",
				proname:'',
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
			},
			toDetail(){
			   this.until.href("/views/baobiao/xiangmudetail.html")
			},
			pepDetial(){
				this.until.href("/views/baobiao/reyuandetail.html")
			},
			pepDetialTwo(){
				this.until.href("/views/baobiao/bosxiangmuDetail.html")
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
