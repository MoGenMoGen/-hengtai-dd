<template>
	<div class="content">
		<div class="tab">
			<div class="tabList" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)"
			:class="currentIndex==index?'active':''">
				{{item}}
			</div>
		</div>
		<div class="bodycontent">
			<div class="contentList" v-for="item in 4">
				<div class="title">
					<div class="name">
						王冰冰提交的工时填报
					</div>
					<div class="time">
						2021-12-28
					</div>
				</div>
				<div class="infolist">
					<div class="list">
						<div class="listLeft">
							工作时间：
						</div>
						<div class="listRight">
							9:00-17:30
						</div>
					</div>
					<div class="list">
						<div class="listLeft">
							工作时长：
						</div>
						<div class="listRight">
							7.00小时/1.00天
						</div>
					</div>
					<div class="list">
						<div class="listLeft">
							服务项目：
						</div>
						<div class="listRight">
							总部-营运店
						</div>
					</div>
				</div>
				<img :src="daishenpi" >
				<div class="btn">
					<div class="btnLeft">
						修改
					</div>
					<div class="btnRight">
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
	import daishenpi from "../../../assets/img/待审批.png"
	import tongguo from "../../../assets/img/审批通过.png"
	import butongguo from "../../../assets/img/审批不通过.png"
	export default {
		data() {
			return {
				daishenpi,
				tongguo,
				butongguo,
				currentIndex:0,
				tabList:['全部','待审批','已审批']
			}
		},
		mounted() {
			
		},
		methods: {
			changeTab(index){
				this.currentIndex=index
			}
		
		
		}
	}
</script>
<style lang="less" scoped>
	.content {
		background-color: #F1F3F2;
		.tab{
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
