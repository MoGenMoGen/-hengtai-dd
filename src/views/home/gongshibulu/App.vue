<template>
	<div class="content">
		<van-popup v-model="showPicker1" round position="bottom">
			<van-datetime-picker :filter="filter" v-model="currentTime1" type="time" title="选择时间" :min-hour="9"
				:max-hour="17" :max-minute="30" @cancel="showPicker1 = false" @confirm="onConfirm1" />
		</van-popup>
		<van-popup v-model="showPicker2" round position="bottom">
			<van-datetime-picker :filter="filter" v-model="currentTime2" type="time" title="选择时间" :min-hour="9"
				:max-hour="17" :max-minute="30" @cancel="showPicker2 = false" @confirm="onConfirm2" />
		</van-popup>
		<van-popup v-model="showPicker3" round position="bottom">
			<van-picker title="选择总部" show-toolbar :columns="columns" @confirm="onConfirm3"
				@cancel="showPicker3 = false" />
		</van-popup>
		<van-popup v-model="showPicker4" round position="bottom">
			<van-picker title="选择运营店" show-toolbar :columns="columns2" @confirm="onConfirm4"
				@cancel="showPicker4 = false" />
		</van-popup>
		<van-popup v-model="showPicker5" round position="bottom">
			<van-datetime-picker v-model="currentTime3" type="date" title="选择日期" 
				 @cancel="showPicker5 = false" @confirm="onConfirm5" />
		</van-popup>
		<div class="bodyList">
			<div class="listItem">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作日期：</p>
				<div class="timeBox" @click="showPicker5=true">
					<p v-if="!nowDate">请选择日期</p>
					<p v-if="nowDate" style="color: #000;">{{nowDate}}</p>
					<img :src="shijian" >
				</div>
			</div>
			<div class="listItem">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作时间：</p>
				<div class="selectBox">
					<div class="beginTm" @click="showPicker1=true">
						<p v-if="!value1">开始时间</p>
						<p v-if="value1" style="color: #000;">{{value1}}</p>
					</div>
					~
					<div class="endTm" @click="showPicker2=true">
						<p v-if="!value2">结束时间</p>
						<p v-if="value2" style="color: #000;">{{value2}}</p>
					</div>
				</div>
				<div class="allSelectBox">
					<div class="leftBox" @click="allSelect">
						<img :src="xuanzhong" v-if="selectFlag">
					</div>
					<div class="rightBox">
						<p>全天</p>
					</div>
				</div>
			</div>
			<div class="listItem">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作时长：</p>
				<p class="itemRight">7.00小时/1.00天</p>
			</div>
			<div class="listItem" style="border-bottom:1px solid #E6E6E6;">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>服务项目：</p>
				<div class="addNew">
					<img :src="xinzeng">
					<p>新增</p>
				</div>
			</div>
			<div class="addBox">
				<div class="addList">
					<div class="listBox" @click="showPicker3=true">
						<p v-if="!value3">总部</p>
						<p v-if="value3" style="color: #000;">{{value3}}</p>
						<img :src="xiala">
					</div>
					<div class="listBox" @click="showPicker4=true">
						<p v-if="!value4">运营商</p>
						<p v-if="value4" style="color: #000;">{{value4}}</p>
						<img :src="xiala">
					</div>
				</div>
			</div>
			<div class="listItem2">
				<div class="" style="display: flex;">
					<p style="color: #FF2015; font-size: 0.24rem;">*</p>
					<p>工作内容：</p>
				</div>
				<div class="checkBox">
					<div class="boxList" v-for="(item,index) in checkList" :key=index>
						<div class="leftBox" @click="checkSelcet(index)">
							<img :src="xuanzhong" v-if="item.flag">
						</div>
						<div class="rightBox">
							<p>{{item.name}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="listItem2">
				<div class="" style="display: flex;">
					<p style="color: #FF2015; font-size: 0.24rem;opacity: 0;">*</p>
					<p>备注：</p>
				</div>
				<textarea rows="" cols="" placeholder="请输入内容"></textarea>
			</div>
		</div>
		<div class="submit">
			 提交
		</div>
	</div>
</template>
<script>
	import {
		Notify
	} from 'vant';
	import xuanzhong from "../../../assets/img/选中.png"
	import xinzeng from "../../../assets/img/新增.png"
	import xiala from "../../../assets/img/下拉.png"
	import shijian from "../../../assets/img/时间控件.png"
	// import 'vant/lib/index.css'
	export default {
		data() {
			return {
				xuanzhong,
				xinzeng,
				xiala,
				shijian,
				currentTime1: '',
				currentTime2: '',
				currentTime3:new Date(),
				time: '',
				nowDate:'',
				showPicker1: false,
				showPicker2: false,
				showPicker3: false,
				showPicker4: false,
				showPicker5:false,
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				selectFlag: false,
				columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
				columns2: ['杭州121', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
				checkList: [{
						name: '业主对接',
						flag: false
					},
					{
						name: '预算概算',
						flag: false
					},
					{
						name: '财务知识培训',
						flag: false
					},
					{
						name: '开业协助',
						flag: false
					},
					{
						name: '报表审核',
						flag: false
					},
					{
						name: '费用管控',
						flag: false
					},
					{
						name: '招商管控',
						flag: false
					},

				]
			}
		},
		mounted() {
			console.log(11);
		},
		methods: {
			checkSelcet(index) {
				this.checkList[index].flag = !this.checkList[index].flag
			},
			allSelect() {
				this.selectFlag = !this.selectFlag
			},
			filter(type, options) {
				if (type === 'minute') {
					return options.filter((option) => option % 30 === 0);
				}
				return options;
			},
			onConfirm1(val) {
				if (this.value2) {
					if (val > this.value2) {
						Notify('开始时间不能大于结束时间');
						this.showPicker1 = false
						return
					}
				}
				this.value1 = val
				this.showPicker1 = false
			},
			onConfirm2(val) {
				if (this.value1) {
					if (val < this.value1) {
						Notify('结束时间不能小于开始时间');
						this.showPicker2 = false
						return
					}
				}
				this.value2 = val
				this.showPicker2 = false
			},
			onConfirm3(val) {
				this.value3 = val
				this.showPicker3 = false
			},
			onConfirm4(val) {
				this.value4 = val
				this.showPicker4 = false
			},
			onConfirm5(val){
				this.nowDate=this.getNowDate(val)
				this.showPicker5=false
			},
			getNowDate(val) {
				let nowDate = new Date(val);
				let year = nowDate.getFullYear();
				let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
				let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
				return year + "-" + month + "-" + day;
			}
		}
	}
</script>
<style lang="less" scoped>
	.content {
		background-color: #F1F3F2;
		min-height: 100vh;
		padding: 0.2rem;
		padding-bottom: 2rem;
		box-sizing: border-box;
		.submit{
			width: 100%;
			height: 1rem;
			background-color:#CA093A ;
			text-align: center;
			line-height: 1rem;
			color: #ffffff;
			position: fixed;
			bottom: 0;
			left:0;
			z-index: 50;
		}
		.bodyList {
			.listItem2 {
				align-items: center;
				background-color: #FFFFFF;
				padding: 0.34rem;
				box-sizing: border-box;
				border-radius: 0.1rem;
				margin-top: 0.1rem;
				textarea{
					width: 6rem;
					height: 2.19rem;
					border: 1px solid #DDDDDD;
					border-radius: 0.1rem;
					margin-left: 0.3rem;
					margin-top: 0.2rem;
					padding: 0.15rem;
					box-sizing: border-box;
					font-size: 0.24rem;
				}
				p {
					margin-left: 0.14rem;
					font-size: 0.28rem;
					color: #333333;
				}

				.checkBox {
					margin-top: 0.35rem;
					margin-left: 0.1rem;
					display: flex;

					flex-wrap: wrap;

					.boxList {
						display: flex;
						margin-right: 0.4rem;
						margin-top: 0.2rem;

						.leftBox {
							width: 0.35rem;
							height: 0.35rem;
							border: 1px solid #DDDDDD;
							border-radius: 0.1rem;

							img {
								width: 0.3rem;
								height: 0.3rem;
							}
						}

						.rightBox {
							p {
								font-size: 0.24rem;
								font-weight: 500;
								color: #333333;
							}
						}
					}
				}
			}

			.listItem {
				display: flex;
				align-items: center;
				background-color: #FFFFFF;
				padding: 0.34rem;
				box-sizing: border-box;
				border-radius: 0.1rem;
				margin-top: 0.1rem;

				.addNew {
					width: 1.3rem;
					height: 0.5rem;
					background: #CA093A;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 0.5rem;

					img {
						width: 0.3rem;
						height: 0.3rem;
					}

					p {
						font-size: 0.24rem;
						color: #FFFFFF;
					}

				}

				.middleLine {
					width: 100%;
					height: 0.1rem;
					background: #E6E6E6;
				}

				p {
					margin-left: 0.14rem;
					font-size: 0.28rem;
					color: #333333;
				}

				.itemRight {
					margin-left: 0.51rem;
				}

				.selectBox {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 3rem;
					height: 0.6rem;
					border: 0.01px solid #DDDDDD;
					border-radius: 0rem;

					.beginTm {
						p {
							color: rgba(0, 0, 0, 0.5);
							margin-left: 0;
						}
					}

					.endTm {
						p {
							color: rgba(0, 0, 0, 0.5);
							margin-left: 0;
						}
					}
				}

				.allSelectBox {
					margin-left: 0.5rem;
					display: flex;
					justify-content: center;
					align-items: center;

					.leftBox {
						width: 0.35rem;
						height: 0.35rem;
						border: 1px solid #DDDDDD;
						text-align: center;
						line-height: 0.35rem;

						img {
							width: 0.3rem;
							height: 0.3rem;
						}
					}

					.rightBox {
						p {
							font-size: 0.24rem;
							font-weight: 500;
							color: #333333;
						}
					}
				}
				.timeBox{
					width: 4.6rem;
					height: 0.6rem;
					border: 1px solid #DDDDDD;
					border-radius: 0.1rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 0.2rem;
					p{
						font-size: 0.24rem;
						color: #909090;
					}
					img{
						width: 0.28rem;
						height: 0.26rem;
					}
				}
			}

			.addBox {
				background-color: #ffffff;
				box-sizing: border-box;
				padding: 0.3rem 0.45rem;
				border-radius: 0.1rem;

				.addList {
					display: flex;
					justify-content: center;
					align-items: center;

					.listBox {
						width: 2.39rem;
						height: 0.6rem;
						border: 1px solid #DDDDDD;
						border-radius: 0.1rem;
						margin-right: 0.4rem;
						padding: 0.1rem 0.2rem;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;

						p {
							color: rgba(0, 0, 0, 0.5);
							font-size: 0.24rem;
							font-weight: 500;
							color: #909090;
						}

						img {
							width: 0.19rem;
							height: 0.1rem;
						}
					}
				}
			}
		}
	}
</style>
