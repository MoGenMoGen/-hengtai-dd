<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			订单需求
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<input type="" name="" id="" value="" placeholder="手机号" v-if="currentIndex==0" />
				<input type="" name="" id="" value="" placeholder="销售人员" v-if="currentIndex==1"/>
				<input type="" name="" id="" value="" placeholder="品牌、车型" />

				<div class="pick">
					<el-date-picker type="date" placeholder="选择开始日期" :picker-options="pickerOptionsStart"
						v-model="startTime" @change="startTimeChang" class="picker"></el-date-picker>
					<el-date-picker type="date" placeholder="选择结束日期" :picker-options="pickerOptionsOver"
						v-model="endTime" @change="endTimeChang" class="picker"></el-date-picker>
				</div>
			</div>
			<div class="rightBox">
				<button type="button">查询</button>
			</div>
		</div>
		<div class="bodycontent">
			<div class="bodyCurrent">
				<div class="list" v-for="(item,index) in tabList" :key="index" :class="{active:currentIndex==index}"
					@click="changePage(index)">
					{{item}}
				</div>
			</div>
			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==0" @click="toDetail()">
				<div class="itemList">
					<div class="itemListHead">
						品牌:
					</div>
					<div class="itemListcontent">
						{{item1.pinpai}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						车型:
					</div>
					<div class="itemListcontent">
						{{item1.chexing}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						价格区间:
					</div>
					<div class="itemListcontent">
						{{item1.jiage}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						意向等级:
					</div>
					<div class="itemListcontent">
						{{item1.yixiang}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						销售人员:
					</div>
					<div class="itemListcontent">
						{{item1.xiaoshou}}
					</div>
				</div>
				<div class="itemList" style="margin-bottom: 0;">
					<div class="itemListHead">
						发布时间:
					</div>
					<div class="itemListcontent">
						{{item1.shijian}}
					</div>
				</div>
				<div class="btn">
					<button type="button">回复</button>
				</div>
			</div>
			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==1">
				<div class="itemList">
					<div class="itemListHead">
						品牌车系:
					</div>
					<div class="itemListcontent">
						{{item1.chexi}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						里程数:
					</div>
					<div class="itemListcontent">
						{{item1.licheng}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						上牌时间:
					</div>
					<div class="itemListcontent">
						{{item1.shangpai}}
					</div>
				</div>
		
				<div class="itemList">
					<div class="itemListHead" style="margin-bottom: 0rem;">
						销售人员:
					</div>
					<div class="itemListcontent">
						{{item1.xiaoshou}}
					</div>
				</div>
			
				<div class="btn">
					<button type="button">回复</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pickerVisible: true,
				result: '',
				show: true,
				startTime: '',
				endTime: '',
				tabList: ["买车需求", "卖车需求"],
				currentIndex: 0,
				infoList:[
					{
						pinpai:"奔驰",
						chexing:"迈巴赫S级",
						jiage:"30-40万",
						yixiang:"o",
						xiaoshou:"王晓红",
						shijian:"2021-07-28 12:01:20",
						chexi:"奥迪 奥迪A6 2004款 奥迪A6 1.8T 自动舒适",
						licheng:"12万公里",
						shangpai:"2021-07-02",
					},
					{
						pinpai:"奔驰",
						chexing:"迈巴赫S级",
						jiage:"30-40万",
						yixiang:"o",
						xiaoshou:"王晓红",
						shijian:"2021-07-28 12:01:20",
						chexi:"奥迪 奥迪A6 2004款 奥迪A6 1.8T 自动舒适",
						licheng:"12万公里",
						shangpai:"2021-07-02",
					},
					{
						pinpai:"奔驰",
						chexing:"迈巴赫S级",
						jiage:"30-40万",
						yixiang:"o",
						xiaoshou:"王晓红",
						shijian:"2021-07-28 12:01:20",
						chexi:"奥迪 奥迪A6 2004款 奥迪A6 1.8T 自动舒适",
						licheng:"12万公里",
						shangpai:"2021-07-02",
					},
					{
						pinpai:"奔驰",
						chexing:"迈巴赫S级",
						jiage:"30-40万",
						yixiang:"o",
						xiaoshou:"王晓红",
						shijian:"2021-07-28 12:01:20",
						chexi:"奥迪 奥迪A6 2004款 奥迪A6 1.8T 自动舒适",
						licheng:"12万公里",
						shangpai:"2021-07-02",
					}
				]
			};
		},
		components: {
			
		},
		async mounted() {},
		methods: {
			cancel() {
				console.log('cancel')
				this.result = 'click cancel result: null'
			},
			confirm(res) {
				this.result = JSON.stringify(res)
				console.log(res)
			},
			back() {
				this.until.back()
			},
			dateFilter: function(input) {
				var d = new Date(input);
				var year = d.getFullYear();
				var month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1);
				var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
				// var hour = d.getHours();
				// var minutes = d.getMinutes();
				// var seconds = d.getSeconds();
				return year + '-' + month + '-' + day;
			},
			startTimeChang(val) {
				let startTime = this.dateFilter(val);
				this.startTime = startTime;
			},
			endTimeChang(val) {
				let endTime = this.dateFilter(val);
				this.endTime = endTime;
			},
			changePage(index) {
				this.currentIndex = index
			},
			toDetail(){
				this.until.href("/views/productneeds/detail.html")
			}


		},
		computed: {
			pickerOptionsStart: {
				disabledDate(time) {
					return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
				}
			},
			pickerOptionsOver: {
				disabledDate(time) {
					return time.getTime() < 1488297600000 || time.getTime() >= Date.now();
				}
			}

		}
	};
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {
		width: 100%;
		height: 100%;
		background: url('~@/assets/img/header.png') no-repeat;
		background-color: #F1F3F2;
		background-size: 100% 1.28rem;
		// overflow: hidden;

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

		.searchBox {
			width: 100%;
			background-color: #F1F3F2;
			display: flex;
			padding: 0.3rem;
			box-sizing: border-box;

			.leftBox {
				input {
					width: 1.9rem;
					height: 0.7rem;
					background: #FFFFFF;
					border: 0.01px solid #DDDDDD;
					border-radius: 0rem;
					font-size: 0.24rem;
					padding: 0 0.1rem;

				}

				input::placeholder {
					font-size: 0.24rem;
					color: #909090;

				}

				.pick {
					display: flex;

					.picker {
						width: 2.9rem;
						font-size: 0.24rem;
						margin-top: 0.1rem;
						padding-right: 0;

						/deep/ .el-input--prefix .el-input__inner {
							padding-right: 0;
						}
					}
				}
			}

			.rightBox {
				button {
					width: 1.2rem;
					height: 1.6rem;
					background: #09C076;
					border-radius: 0rem;
					margin-left: 0.1rem;
					font-size: 0.3rem;
					font-weight: bold;
					color: #FFFFFF;
				}

			}
		}

		.bodycontent{
			width: 100%;
			background: #FFFFFF;
			border-radius: 0.2rem;

			.bodyCurrent {
				height: 0.86rem;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-bottom: 0.01rem solid #E5E5E5;

				.list {
					font-size: 0.28rem;
					height: 0.86rem;
					font-weight: 500;
					color: #909090;
					width: 1.99rem;
					text-align: center;
					line-height: 0.86rem;
				}

				.active {
					font-size: 0.28rem;
					font-weight: 500;
					color: #09C076;
					position: relative;
					// border-bottom: 0.03rem solid #09C076;
				}

				.active:after {
					content: " ";
					position: absolute;
					bottom: 0;
					left: 0;
					background: #09C076;
					width: 1.99rem;
					height: 0.02rem;
				}




			}
			.bodyList{
				position: relative;
				width: 100%;
				background: #FFFFFF;
				padding:0.3rem 0.31rem ;
				box-sizing: border-box;
				font-size: 0.24rem;
				font-weight: bold;
				color: #303030;
				border-bottom: 0.01rem solid #E5E5E5;
				.itemList{
					display: flex;
					margin-bottom: 0.25rem;
					
					.itemListHead{
						width: 1.1rem;
					}
					.itemListcontent{
						margin-left: 0.17rem;
					}
				}
				.btn{
					
					button{
						width: 1.37rem;
						height: 0.51rem;
						background: #09C076;
						border-radius: 0.2rem;
						font-size: 0.24rem;
						color: #FFFFFF;
						font-weight: 500;
						position: absolute;
						right: 0.3rem;
						bottom:0.3rem;
					}
				}
			}
		}

	}
</style>
