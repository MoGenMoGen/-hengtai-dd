<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<input type="" name="" id="" value="" placeholder="姓名、电话、销售顾问" />
				<el-select v-model="value" filterable placeholder="留档状态" class="select" @change="postId">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.id">
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
		<div class="bodyList" v-for="(item,index) in infoList" :key="index">
				
				<div class="list">
					<div class="listhead">
					客户姓名:
					</div>
					<div class="listCotent">
					{{item.name}}
					<img src="../../../assets/img/new.png" v-if="item.isnew==true" >
					</div>
					
				</div>
				<div class="list">
					<div class="listhead">
					联系电话:
					</div>
					<div class="listCotent">
					{{item.tel}}
					</div>
				</div>
				<div class="list">
					<div class="listhead">
					到店时间:
					</div>
					<div class="listCotent">
					{{item.time}}
					</div>
				</div>
				<div class="list">
					<div class="listhead">
						销售顾问:
					</div>
					<div class="listCotent">
					{{item.person}}
					</div>
				</div>
				<div class="btn">
					<button type="button">完善信息</button>
					
				</div>
		</div>
		<div class="btn">
			<button type="button" @click="addNew">新增接待</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				startTime: "",
				endTime: "",
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
				infoList:[
					{
						name:"金秀炫",
						tel:"13500009999",
						time:"2021-07-28 12:01:20",
						person:"刘晓华",
						isnew:true
					},
					{
						name:"金秀炫",
						tel:"13500009999",
						time:"2021-07-28 12:01:20",
						person:"刘晓华",
						isnew:true
					},
					{
						name:"金秀炫",
						tel:"13500009999",
						time:"2021-07-28 12:01:20",
						person:"刘晓华",
						isnew:false
					}
				]
			};
		},
		components: {},
		async mounted() {},
		methods: {
			back() {
				this.until.back()
			},
			startTimeChang(val) {
				let startTime = this.dateFilter(val);
				this.startTime = startTime;
			},
			endTimeChang(val) {
				let endTime = this.dateFilter(val);
				this.endTime = endTime;
			},
			//新增接待
			addNew(){
				this.until.href("/views/reception/new.html")
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

	.el-input--prefix .el-input__inner {
		height: 0.8rem;
	}
</style>
<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {
		width: 100%;
		background: url('~@/assets/img/header.png') no-repeat;
		background-color: #F1F3F2;
		background-size: 100% 1.28rem;

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
					width: 2.9rem;
					height: 0.8rem;
					background: #FFFFFF;
					border: 0.01px solid #DDDDDD;
					border-radius: 0rem;
					font-size: 0.24rem;
					padding: 0 0.1rem;
					border: 0.02rem solid rgb(192,196,204);
					border-radius: 0.1rem;

				}

				input::placeholder {
					font-size: 0.24rem;
					color: rgb(192,196,204);


				}

				.select {
					width: 2.9rem;
					height: 0.7rem;

				}

				.pick {
					display: flex;

					.picker {
						width: 2.9rem;
						font-size: 0.24rem;
						margin-top: 0.1rem;
						padding-right: 0;
						margin-right: 0.1rem;

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
					border-radius: 0.1rem;
					margin-left: 0.1rem;
					font-size: 0.3rem;
					font-weight: bold;
					color: #FFFFFF;
				}
			}
		}
		.bodyList{

			padding: 0.3rem;
			width: 100%;
			background: #FFFFFF;
			border-radius: 0.12rem;
			margin-top: 0.1rem;
			position: relative;
			.list{
				display: flex;
				position: relative;
				margin-bottom: 0.3rem;
				.listhead{
					
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;
				}
				.listCotent{
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;
					margin-left:0.2rem ;
					position: relative;
					img{
						width: 0.56rem;
						height: 0.28rem;
						position: absolute;
						right: -0.56rem;
						top: -0.15rem;
					}
				}
				
			}
		
			
			.btn{
				button{
					width: 1.52rem;
					height: 0.54rem;
					background: rgba(255, 158, 6, 0);
					border: 0.02rem solid #09C076;
					border-radius: 0.26rem;
					position: absolute;
					top: 50%;
					right: 0.3rem;
					transform: translateY(-50%);
					font-size: 0.26rem;
					font-weight: 500;
					color:#09C076 ;
				}
			}
		}
		.btn{
			margin-top: 0.66rem ;
			
			text-align:center;
			button{
				width: 5.7rem;
				height: 0.7rem;
				background: #09C076;
				border-radius: 0.34rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #ffffff;
				margin-bottom: 1rem;
				
			}
		}
	}		
</style>
