<template>
	<div class="content">
		<div class="tab">
			<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
			:class="currentIndex==index?'active':''">
				{{item}}
			</div>
		</div>
		<div class="bodycontent">
			<div class="contentList" v-for="(item,index) in infoList" :key="index" @click="toDetail(item.id)">
				<div class="title">
					<div class="name">
						{{item.realName}}提交的工时填报
					</div>
					<div class="time">
						{{item.workDate}}
					</div>
				</div>
				<div class="infolist">
					<div class="list">
						<div class="listLeft">
							工作时间：
						</div>
						<div class="listRight">
							{{item.workTimeStart}}-{{item.workTimeEnd}}
						</div>
					</div>
					<div class="list">
						<div class="listLeft">
							工作时长：
						</div>
						<div class="listRight">
							{{item.workHours}}小时/{{item.workDays}}天
						</div>
					</div>
					<div class="list">
						<div class="listLeft">
							服务项目：
						</div>
						<div class="listRight">
							{{item.jobNames}}
						</div>
					</div>
				</div>
				<img :src="daishenpi"  v-if="item.audit==1">
				<img :src="tongguo"  v-if="item.audit==2">
				<img :src="butongguo"  v-if="item.audit==3">
				<div class="btn">
					<div class="btnLeft" @click.stop="modify(item.id)">
						修改
					</div>
					<div class="btnRight" @click.stop="remove(item)">
						删除
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		Notify
	} from 'vant';
	import { Dialog } from 'vant';
	import daishenpi from "../../../assets/img/待审批.png"
	import tongguo from "../../../assets/img/审批通过.png"
	import butongguo from "../../../assets/img/审批不通过.png"
	export default {
		data() {
			return {
				daishenpi,
				tongguo,
				butongguo,
				currentIndex:0,//0全部,1待审批,2已审批
				tabList:['全部','待审批','已审批'],
				current:1,
				size:5,
				infoList:[],
			}
		},
		mounted() {
			this.getInfo()
			console.log(1112);
		},
		methods: {
			changeTab(index){
				this.currentIndex=index;
				this.current=1;
				this.getInfo();

			},
			getInfo(){
				console.log(2378);
				let obj={
					current:this.current,
					size:this.size
				}
				if(this.currentIndex==1)
				obj.audit_equal=1;
				else if(this.currentIndex==2)
				obj.audit_notequal=1;
				this.api.getProjwhreportList(obj).then(res=>{
					console.log(23123,res);
					this.infoList=res.records
				})
			},
			remove(item){
				console.log(item);
				Dialog.confirm({
				  title: '提示',
				  message: '是否确认删除',
				})
				
				  .then(() => {
					  console.log(777);
				    this.api.removeProjwhreport(item.id).then(res=>{
						Notify({ type: 'success', message: '删除成功' });
						this.getInfo()
					})

				  })
				  .catch(() => {
				    Notify({
				      message: '取消删除',
				      color: '#ffffff',
				      background: '#cccccc',
				    });

				  });
			},
			modify(id){
				this.until.href(`/views/home/gongshitianbao.html?id=${id}`)
			},
			toDetail(id){
				this.until.href(`/views/home/gongshidetail.html?id=${id}`)
			},
		
		
		}
	}
</script>
<style lang="less" scoped>
	.content {
		background-color: #F1F3F2;
		.tab{
			background-color: #F1F3F2;
			position: fixed;
			z-index: 50;
			top: 0;
			left:0 ;
			width: 100%;
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
		.bodycontent{
			margin-top: 1rem;
			padding:0.2rem ;
			background-color:#F1F3F2;
			box-sizing: border-box;
			.contentList{
				position: relative;
				background-color: #ffffff;
				padding: 0.4rem;
				box-sizing: border-box;
				border-radius: 0.1rem;
				margin-bottom: 0.2rem;
				.title{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.name{
						font-size: 0.28rem;
						font-weight: 500;
						color: #303030;
					}
					.time{
						font-size: 0.24rem;
						font-weight: 500;
						color: #909090;
					}
				}
				.infolist{
					margin-top: 0.4rem;
					.list{
						display: flex;
						font-size: 0.24rem;
						font-weight: 500;
						color: #606060;
						margin-bottom: 0.3rem;
						.listLeft{
							
						}
						.listRight{
							margin-left: 0.2rem;
						}
					}
				}
				img{
					width: 1.01rem;
					height: 0.75rem;
					position: absolute;
					right: 0.3rem;
					top: 50%;
					transform: translateY(-50%);
				}
				.btn{
					border-top: 1px solid #D9D9D9  ;
					display: flex;
					width: 100%;
					height: 0.86rem;
					align-items: center;
					.btnLeft{
						width: 50%;
						text-align: center;
						font-size: 0.28rem;
						font-weight: 500;
						color: #CA093A;
						border-right: 1px solid #D9D9D9;
					}
					.btnRight{
						width: 50%;
						text-align: center;
						font-size: 0.28rem;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
