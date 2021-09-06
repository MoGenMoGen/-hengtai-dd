<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<input type="" name="" id="" value="" placeholder="姓名、电话、销售顾问" v-model="searchStr" />
				<el-select v-model="value" filterable clearable placeholder="留档状态" class="select" @change="postId">
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
				<button type="button" @click="search">查询</button>
			</div>

		</div>
		<div  style="padding-bottom: 1.5rem;">
			
		
		<div class="bodyList" v-for="(item,index) in infoList" :key="index">
				
				<div class="list">
					<div class="listhead">
					客户姓名:
					</div>
					<div class="listCotent">
					{{item.name}}
					<img src="../../../assets/img/new.png" v-if="item.isRead==false" >
					</div>
					
				</div>
				<div class="list">
					<div class="listhead">
					联系电话:
					</div>
					<div class="listCotent">
					{{item.phone}}
					</div>
				</div>
				<div class="list">
					<div class="listhead">
					到店时间:
					</div>
					<div class="listCotent">
					{{item.crtTm}}
					</div>
				</div>
				<div class="list" style="margin-bottom: 0;">
					<div class="listhead">
						销售顾问:
					</div>
					<div class="listCotent">
					{{item.saler}}
					</div>
				</div>
				<div class="btn">
					<button type="button" @click="toDetail(item.id)">完善信息</button>
					
				</div>
		</div>
		</div>
		<div class="btn1">
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
				searchStr:"",
				gearStatus: "",
				page:{
					searchStr:"",
					beginTime:"",
					endTime:"",
					gearStatus:"",
					n:1,
					s:10
				},
				options: [{
					id: 1,
					label: '是'
				}, {
					id: 0,
					label: '否'
				},
				],
				infoList:[
					
				],
				total:"",
			
			};
		},
		components: {},
		async mounted() {
		    this.getList()
			window.addEventListener('scroll', this.menu)
		},
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
			},
			toDetail(id){
				this.until.href(`/views/reception/detail.html?id=${id}`)
			},
			getList(){
				this.page.searchStr=this.searchStr
				this.page.gearStatus=this.gearStatus
				this.page.beginTime=this.startTime
				this.page.endTime=this.endTime
				this.api.getWxCheckin(this.page).then(res=>{
					this.total=res.page.total
					this.infoList=[...this.infoList,...res.data.list]
					this.istrue=true
					console.log(this.infoList,this.total);
				})
			},
			postId(val)
			{
				this.gearStatus=val
			},
			search(){
				this.infoList=[]
				this.page.n=1
				this.getList()
			},
			//分页
			menu(){
				this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
				let scrollBottom = document.documentElement.scrollHeight - this.scroll - document.documentElement
					.clientHeight
					if(this.istrue==true){
						
						if(scrollBottom<100 &&this.infoList.length<this.total){
							this.istrue=false
							this.page.n++
							this.getList()
						}
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
		.btn1{
		
			position: fixed;
			bottom: 0rem;
			left: 0;
			margin-left: 50%;
			transform: translateX(-50%);
			text-align:center;
			button{
				width: 5.7rem;
				height: 0.7rem;
				background: #09C076;
				border-radius: 0.34rem;
				font-size: 0.3rem;
				font-weight: 500;
				color: #ffffff;
				margin-bottom: 0.2rem;
				
			}
		}
	}		
</style>
