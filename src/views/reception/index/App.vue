<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<div id="" style="display: flex;">
					
		
				<input type="" name="" id="" value="" placeholder="客户姓名、电话、销售" v-model="searchStr" />
				<van-field class="vantSelect" readonly clickable label="" :value="gearStatus" placeholder="选择客流性质"
					@click="showPicker4 = true" />
				<van-popup v-model="showPicker4" round position="bottom">
					<van-search v-model="search4" shape="round" background="#09c076" @input="onSearch4"
						placeholder="请输入搜索关键词" />
					<van-picker value-key="content" show-toolbar :columns="searchoptionsFour"
						@cancel="showPicker4= false" @confirm="handleBuysTypeFour" />
				</van-popup>
						</div>
				<!-- <el-select v-model="value" filterable clearable placeholder="留档状态" class="select" @change="postId"
     >
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.id">
					</el-option>
				</el-select> -->
				<div class="pick">
					<van-field
					  style="padding: 0; text-align: center"
					  class="picker son leftpart bg"
					  readonly
					  label=""
					  :value="startTime"
					  placeholder="选择开始日期"
					  @click="showPicker5 = true"
					/>
					<van-popup v-model="showPicker5" round position="bottom">
					  <van-datetime-picker
					    v-model="currentDate"
					    type="date"
					    title="选择开始日期"
					    @confirm="startTimeChange"
					    @cancel="showPicker5 = false"
					  />
					</van-popup>
					<van-field
					  style="padding: 0; text-align: center"
					  class="picker son rightpart bg"
					  readonly
					  label=""
					  :value="endTime"
					  placeholder="选择结束日期"
					  @click="showPicker6 = true"
					/>
					<van-popup v-model="showPicker6" round position="bottom">
					  <van-datetime-picker
					    v-model="currentDate"
					    type="date"
					    @confirm="endTimeChange"
					    @cancel="showPicker6 = false"
					  />
					</van-popup>
					<!-- <el-date-picker type="date" placeholder="选择开始日期" :picker-options="pickerOptionsStart"
						v-model="startTime" @change="startTimeChang" class="picker"></el-date-picker>
					<el-date-picker type="date" placeholder="选择结束日期" :picker-options="pickerOptionsOver"
						v-model="endTime" @change="endTimeChang" class="picker"></el-date-picker> -->
				</div>
			</div>
			<div class="rightBox">
				<button type="button" @click="search">查询</button>
			</div>

		</div>
		<div  style="padding-bottom: 1.5rem;">
			<div class="" style="margin-left: 0.3rem;">
				共{{total}}条记录
			</div>
		
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
				<div class="list">
					<div class="listhead">
					到店人数:
					</div>
					<div class="listCotent">
					{{item.people}}
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
					<button type="button" @click="toDetail(item.id)" v-if="item.gearStatus==false">完善信息</button>
					<button type="button" v-if="item.nature=='售后服务'||item.nature=='牌证服务'||item.nature=='其他访客'" style="background-color:rgb(132,132,132);color: #ffffff;border: 0;">完善信息</button>
					<button type="button" v-if="item.gearStatus==true" style="background-color:rgb(132,132,132);color: #ffffff;border: 0;">已完善</button>
				</div>
		</div>
		</div>
		<div class="btn1">
			<button type="button" @click="addNew" v-if="userinfo.departRole==1||identity.includes('接待')">新增接待</button>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	export default {
		data() {
			return {
				showPicker4:false,
				
				showPicker5:false,
				showPicker6:false,
				searchoptionsFour:[],
					 userinfo:"",
				identity:[],	  
				currentDate:"",
				search4:"",
				obj:{
					
				},
				value: "",
				startTime: "",
				endTime: "",
				searchStr:"",
				gearStatus: "",
				page:{
					searchStr:"",
					beginTime:"",
					endTime:"",
					nature:"",
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
			this.obj= JSON.parse(this.until.seGet('obj'))
			console.log(11,this.obj);
			if(this.obj){
				this.searchStr=this.obj.searchStr
				this.gearStatus=this.obj.gearStatus
				this.startTime=this.obj.startTime
				this.endTime=this.obj.endTime
			}
			
			this.getList()
			 this.userinfo=JSON.parse(this.until.loGet('userInfo'))
			 this.identity=this.userinfo.arg6.split(",")
		
				let querys = {
					w: [
						["category", 2, "EQ"],
					],
					o: ["id", "esc"],
					p: [1, 10],
				}
				this.api.getCustomerCommonfield(this.query.toEncode(this.newqry(querys))).then(res=>{
					console.log(res);
					this.options=res
						this.searchoptionsFour=this.options
				})
				
				this.currentDate=new Date()
			    console.log(this.currentDate);
				 var isPageHide = false;
				window.addEventListener("pageshow",  () =>{
				  //   if (isPageHide) {
				  //     window.location.reload();
				  //   }
				  if (this.until.seGet("needRefresh")) {
				    console.log("返回刷新");
				    this.until.seRemove("needRefresh");
				    location.reload();
				  }
				});
		
		 
			window.addEventListener('scroll', this.menu)
			
		},
		methods: {
			newqry(obj) {
				let qry = this.query.new();
				// 条件
				obj.w.forEach((item) => {
					this.query.toW(qry, item[0], item[1], item[2]);
				});
				// 排序
				this.query.toO(qry, obj.o[0], obj.o[1]);
				// 分页
				this.query.toP(qry, obj.p[0], obj.p[1]);
				return qry;
			},
			onSearch4(a)
			{
				if(a!=""){
				   this.searchoptionsFour=this.options.filter((item) =>
						item.content.includes(a));
				}
				else {
					this.searchoptionsFour = this.options
				}
			},
			handleBuysTypeFour(e, v) {
			
				this.gearStatus = e.content
				this.showPicker4=false
				},
			back() {
				this.until.seRemove('obj')
			
				this.until.back()
				
			},
			startTimeChange(val) {
				let startTime = moment(val).format("YYYY-MM-DD");
				this.startTime = startTime;
				this.showPicker5=false
			},
			endTimeChange(val) {
				let endTime = moment(val).format("YYYY-MM-DD");
				this.endTime = endTime;
				this.showPicker6=false
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
				this.page.nature=this.gearStatus
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
				let obj={
					searchStr:this.searchStr,
					gearStatus:this.gearStatus,
					startTime:this.startTime,
					endTime:this.endTime,
				}
				this.until.seSave('obj',JSON.stringify(obj))
				
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
			},
		
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
	.van-field__control {
	  text-align: center !important;
	      width: 2.866rem;
		  height: 0.8rem;
		  border-radius: 0.1rem;
	}
	// .van-cell--clickable{
	// 	 text-align: center !important;
	// 	 font-size: 0.28rem;
	// 	 width: 2.9rem;
	// 	 height: 0.7rem;
	// 	 padding: 0;
	// 	 margin: 0;
	// }
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
				.vantSelect{
						 font-size: 0.24rem;
						 width: 2.9rem;
						 height: 0.7rem;
						 border-radius: 0.1rem;
						  margin-left: 0.09rem;
						 text-align: center;
						 display: flex;
						 align-items: center;
						 justify-content: center;
						  padding: 0.4rem 0.4rem;
				}
				input {
					width: 2.9rem;
					height: 0.8rem;
					background: #FFFFFF;
					// border: 0.02rem solid #DDDDDD;
					border-radius: 0rem;
					font-size: 0.24rem;
					padding: 0 0.1rem;
					// border: 0.02rem solid rgb(192,196,204);
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
				margin-bottom: 0.2rem;
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
