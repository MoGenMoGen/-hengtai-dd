<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			订单需求
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<input type="" name="" id="" value="" placeholder="手机号" v-if="currentIndex==0" />
				<input type="" name="" id="" value="" placeholder="销售人员" v-if="currentIndex==1" />
				<!-- <input type="" name="" id="" value="" placeholder="品牌、车型" /> -->
				<el-select v-model="value" filterable placeholder="品牌车型" class="select" v-if="currentIndex==0"
					@change="postId">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="value2" filterable placeholder="品牌车型" class="select1" v-if="currentIndex==1">
					<el-option v-for="item in optionsThree" :key="item.value" :label="item.label" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="value1" filterable placeholder="意向等级" class="select" v-if="currentIndex==0">
					<el-option v-for="item in optionsTwo" :key="item.value" :label="item.label" :value="item.id">
					</el-option>
				</el-select>
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
			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==0"
				@click="toDetail(index1)">
				<img src="~@/assets/img/arrow.png">

				<div class="itemList">
					<div class="itemListHead">
						品牌:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.brand}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						车型:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.model}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						价格区间:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.minPrice}}~{{item1.hssWxBusinessBuyReturnPageVo.maxPrice}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						意向等级:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.intentionLevel}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						销售人员:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.saler}}
					</div>
				</div>
				<div class="itemList" style="margin-bottom: 0;">
					<div class="itemListHead">
						发布时间:
					</div>
					<div class="itemListcontent">
						{{item1.hssWxBusinessBuyReturnPageVo.crtTm}}
					</div>
				</div>
				<div class="btn">
					<button type="button">回复</button>
				</div>
			</div>



			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==1"
				@click="toDetail(index1) ">
				<img src="~@/assets/img/arrow.png">
				<div class="itemList">
					<div class="itemListHead">
						品牌车系:
					</div>
					<div class="itemListcontent">
						{{item1.brandModel}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						里程数:
					</div>
					<div class="itemListcontent">
						{{item1.mileage}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						上牌时间:
					</div>
					<div class="itemListcontent">
						{{item1.licensingTime}}
					</div>
				</div>

				<div class="itemList">
					<div class="itemListHead" style="margin-bottom: 0rem;">
						销售人员:
					</div>
					<div class="itemListcontent">
						{{item1.crtBy}}
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
				page: {
					brandAndmodel: "", //品牌和车型
					beginTime: "", //发布开始时间
					endTime: "", //发布结束时间（两个时间应该同时存在或者不存在）
					phone: 234, //手机号
					intentionLevel: "", //意向等级（传id）,返回的为已经转化过的值
					n: 0, //起始位置
					s: 10 //长度
				},
				page1: {
					brandModel: "mix", //品牌车型
					beginTime: "", //发布开始时间
					endTime: "", //发布结束时间（两个时间应该同时存在或者不存在）
					n: 0, //起始位置
					s: 5 //长度
				},
				pickerVisible: true,
				result: '',
				show: true,
				startTime: '',
				endTime: '',
				tabList: ["买车需求", "卖车需求"],
				currentIndex: 0,
				value: '',
				value1: "",
				value2: "",
				total: '',
				options: [{
					id: 1,
					label: '黄金糕'
				}, {
					id: 2,
					label: '双皮奶'
				}, {
					id: 3,
					label: '蚵仔煎'
				}, {
					id: 4,
					label: '龙须面'
				}, {
					id: 5,
					label: '北京烤鸭'
				}],
				optionsTwo: [{
					id: 1,
					label: '黄金糕'
				}, {
					id: 2,
					label: '双皮奶'
				}, {
					id: 3,
					label: '蚵仔煎'
				}, {
					id: 4,
					label: '龙须面'
				}, {
					id: 5,
					label: '北京烤鸭'
				}],
				optionsThree: [{
					id: 1,
					label: '黄金糕'
				}, {
					id: 2,
					label: '双皮奶'
				}, {
					id: 3,
					label: '蚵仔煎'
				}, {
					id: 4,
					label: '龙须面'
				}, {
					id: 5,
					label: '北京烤鸭'
				}, ],
				infoList: [


				]
			};
		},
		components: {

		},
		async mounted() {

			this.api.getWxBusinessBuy(this.page).then(res => {
				console.log(888, res);
				this.total = res.data.total
				this.infoList = res.data.list

				console.log(77, this.infoList);
			})
			window.addEventListener('scroll', this.menu)
		},
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
				this.infoList = []
				this.page.n = 0
				this.page1.n = 0
				this.getList()

			},
			toDetail(index) {
				this.until.href(`/views/productneeds/detail.html?index=${this.currentIndex}&id=${this.infoList[index].id}`)
			},
			postId(id) {
				console.log(11, id);
			},
			getList() {



				if (this.currentIndex == 0) {
					this.api.getWxBusinessBuy(this.page).then(res => {
						this.total = res.data.total
						console.log(res);
						this.infoList = [...this.infoList, ...res.data.list]
						this.istrue = true

					})
				} else {
					this.api.getWxBusinessSell(this.page1).then(res => {
						console.log(res);
						this.total = res.page.total
						this.infoList = [...this.infoList, ...res.data.list]
						this.istrue = true
					})
				}
			},
			menu() {
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				let scrollBottom = document.documentElement.scrollHeight - this.scroll - document.documentElement
					.clientHeight
				if (this.istrue == true) {
					if (scrollBottom < 100) {
						this.istrue = false
						if (this.currentIndex == 0 && this.infoList.length < this.total) {
							this.page.n++

							this.getList()

						} else if (this.currentIndex == 1 && this.infoList.length <this.total) {
							this.page1.n++
					
							this.getList()
						}
					}
					// load() {
					// 	console.log(1231321);
					// 	this.getList()
					// }
				}
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
<style lang="less">
	.el-input__inner {
		height: 0.8rem;
		font-size: 0.24rem;
	}

	.select1 .el-input__inner {
		width: 3.91rem;
	}

	.el-input--prefix .el-input__inner {
		height: 0.8rem;
	}
</style>
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
					width: 1.8rem;
					height: 0.8rem;
					background: #FFFFFF;
					border: 0.01px solid #DDDDDD;
					border-radius: 0rem;
					font-size: 0.24rem;
					padding: 0 0.1rem;

				}

				input::placeholder {
					font-size: 0.24rem;
					color: #909090;
					opacity: 0.7;

				}

				.select {
					width: 1.9rem;
					height: 0.7rem;

				}


				.pick {
					display: flex;

					.picker {
						width: 2.9rem;
						font-size: 0.24rem;
						margin-top: 0.1rem;
						padding-right: 0;
						margin-right: 0.009rem;

						/deep/ .el-input--prefix .el-input__inner {
							padding-right: 0;
						}
					}
				}
			}

			.rightBox {
				button {
					width: 1rem;
					height: 1.6rem;
					background: #09C076;
					border-radius: 0rem;
					margin-left: 0.2rem;
					font-size: 0.3rem;
					font-weight: bold;
					color: #FFFFFF;
					border-radius: 0.1rem;
				}

			}
		}

		.bodycontent {
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

			.bodyList {
				position: relative;
				width: 100%;
				background: #FFFFFF;
				padding: 0.3rem 0.31rem;
				box-sizing: border-box;
				font-size: 0.24rem;
				font-weight: bold;
				color: #303030;
				border-bottom: 0.01rem solid #E5E5E5;

				img {
					width: 0.3rem;
					height: 0.3rem;
					position: absolute;
					opacity: 0.5;
					top: 50%;
					right: 0.3rem;
					transform: translateY(-50%);
				}

				.itemList {
					display: flex;
					margin-bottom: 0.25rem;

					.itemListHead {
						width: 1.1rem;
					}

					.itemListcontent {
						margin-left: 0.17rem;
					}
				}

				.btn {

					button {
						width: 1.37rem;
						height: 0.51rem;
						background: #09C076;
						border-radius: 0.2rem;
						font-size: 0.24rem;
						color: #FFFFFF;
						font-weight: 500;
						position: absolute;
						right: 0.3rem;
						bottom: 0.3rem;
					}
				}
			}
		}

	}
</style>
