<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			订单需求
		</div>
		<div class="searchBox">
			<div class="leftBox">
				<div id="" style="display: flex;">
					
				
				<van-field class="vantSelect" readonly clickable label="" :value="brandname" placeholder="选择品牌"
					@click="showPicker1 = true" />
				<van-popup v-model="showPicker1" round position="bottom">
					<van-search v-model="search1" shape="round" background="#09c076" @input="onSearch1"
						placeholder="请输入搜索关键词" />
					<van-picker value-key="brand_name" show-toolbar :columns="searchoptions"
						@cancel="showPicker1 = false" @confirm="handleBuysType" />
				</van-popup>
				<van-field class="vantSelect" readonly clickable label="" :value="seriesname" placeholder="选择车系"
					@click="showPicker2 = true" />
				<van-popup v-model="showPicker2" round position="bottom">
					<van-search v-model="search2" shape="round" background="#09c076" @input="onSearch2"
						placeholder="请输入搜索关键词" />
					<van-picker value-key="name" show-toolbar :columns="searchoptionsTwo"
						@cancel="showPicker2= false" @confirm="handleBuysTypeTwo" />
				</van-popup>
				<van-field class="vantSelect" readonly clickable label="" :value="modelname" placeholder="选择车型"
					@click="showPicker3 = true" />
				<van-popup v-model="showPicker3" round position="bottom">
					<van-search v-model="search3" shape="round" background="#09c076" @input="onSearch3"
						placeholder="请输入搜索关键词" />
					<van-picker value-key="name" show-toolbar :columns="searchoptionsThree"
						@cancel="showPicker3= false" @confirm="handleBuysTypeThree" />
				</van-popup>
				</div>
				<!-- <el-select v-model="value" filterable placeholder="品牌" class="select2" @change="postId">
					<el-option v-for="item in options" :key="item.value" :label="item.brand_name" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="value2" filterable placeholder="车系" class="select2" @change="postIdThree">
					<el-option v-for="item in optionsThree" :key="item.value" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="value3" filterable placeholder="车型" class="select2" @change="postIdFour">
					<el-option v-for="item in optionsFour" :key="item.value" :label="item.name" :value="item.id">
					</el-option>
				</el-select> -->
					<div id="" style="display: flex;">
						
				<input type="" name="" id="" value="" placeholder="手机号" v-if="currentIndex==0" v-model="phone" />
				<input type="" name="" id="" value="" placeholder="销售人员" v-if="currentIndex==1" v-model="salesman"
					class="putin" />
				<!-- <input type="" name="" id="" value="" placeholder="品牌、车型" /> -->
				<!-- 	<el-select v-model="value" filterable placeholder="品牌车型" class="select" v-if="currentIndex==0"
					@change="postId">
					<el-option v-for="item in options" :key="item.value" :label="item.brand_name" :value="item.id">
					</el-option>
				</el-select> -->
				<!-- <el-select v-model="value2" filterable placeholder="品牌车型" class="select1" v-if="currentIndex==1">
					<el-option v-for="item in optionsThree" :key="item.value" :label="item.label" :value="item.id">
					</el-option>
				</el-select> -->
				<van-field class="vantSelectTwo" readonly clickable label="" :value="levelname" placeholder="选择意向等级"
					@click="showPicker4 = true"   v-if="currentIndex==0"/>
				<van-popup v-model="showPicker4" round position="bottom">
					<van-search v-model="search4" shape="round" background="#09c076" @input="onSearch4"
						placeholder="请输入搜索关键词" />
					<van-picker value-key="content" show-toolbar :columns="searchoptionsFour"
						@cancel="showPicker4= false" @confirm="handleBuysTypeFour" />
				</van-popup>
				</div>
			
				<!-- <el-select v-model="value1" filterable placeholder="意向等级" class="select" v-if="currentIndex==0"
					@change="postIdTwo" style="margin-bottom: 0;">
					<el-option v-for="item in optionsTwo" :key="item.value" :label="item.content" :value="item.id">
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
		<div class="bodycontent">
			<div class="bodyCurrent">
				<div class="list" v-for="(item,index) in tabList" :key="index" :class="{active:currentIndex==index}"
					@click="changePage(index)">
					{{item}}
				</div>
			</div>
			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==0"
				@click="toDetail(item1.id)">
				<img src="~@/assets/img/arrow.png">

				<div class="itemList">
					<div class="itemListHead">
						品牌:
					</div>
					<div class="itemListcontent">
						{{item1.brand}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						车型:
					</div>
					<div class="itemListcontent">
						{{item1.model}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						价格区间:
					</div>
					<div class="itemListcontent">
						{{item1.minPrice}}~{{item1.maxPrice}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						意向等级:
					</div>
					<div class="itemListcontent">
						{{item1.intentionLevel}}
					</div>
				</div>
				<div class="itemList">
					<div class="itemListHead">
						销售人员:
					</div>
					<div class="itemListcontent">
						{{item1.saler}}
					</div>
				</div>
				<div class="itemList" style="margin-bottom: 0;">
					<div class="itemListHead">
						跟进时间:
					</div>
					<div class="itemListcontent">
						{{item1.updTm}}
					</div>
				</div>
				<div class="btn">
					<button type="button">回复</button>
				</div>
				<div class="newReport" v-if="item1.notreadnumber!=''&&item1.notreadnumber>0">
					新消息{{item1.notreadnumber}}条
				</div>
			</div>



			<div class="bodyList" v-for="(item1,index1) in infoList" :key="index1" v-if="currentIndex==1"
				@click="toDetail(item1.id) ">
				<img src="~@/assets/img/arrow.png">
				<div class="itemList">
					<div class="itemListHead">
						品牌车系:
					</div>
					<div class="itemListcontent">
						{{item1.brand}}{{" "}}{{ item1.series}}
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
						{{item1.saler}}
					</div>
				</div>
				<div class="newReport" v-if="item1.notreadnumber!=''&&item1.notreadnumber>0">
					新消息{{item1.notreadnumber}}条
				</div>

				<div class="btn">
					<button type="button">回复</button>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import moment from "moment";

	export default {
		data() {
			return {
				showPicker1: false,
				showPicker2: false,
				showPicker3:false,
				showPicker4:false,
				showPicker5:false,
				showPicker6:false,
				search1: "",
				search2: "",
				search3:"",
				search4:"",

				page: {
					brand: "", //车牌
					series: "", //车系	
					model: "", //车型
					beginTime: "", //发布开始时间
					endTime: "", //发布结束时间（两个时间应该同时存在或者不存在）
					phone: "", //手机号
					intentionLevel: "", //意向等级（传id）,返回的为已经转化过的值
					n: 1, //起始位置
					s: 5 //长度
				},
				page1: {
					brand: "", //车牌
					series: "", //车系	
					model: "", //车型
					saler: "", //销售
					beginTime: "", //发布开始时间
					endTime: "", //发布结束时间（两个时间应该同时存在或者不存在）
					n: 1, //起始位置
					s: 5 //长度
				},
				salesman: "",
				brand: "", //车牌id
				brandname: "", //车牌
				series: "", //车系id
				seriesname: "", //车系
				model: "", //车型id
				modelname:"", //车型
				currentDate:"",
				
				phone: "",
				pickerVisible: true,
				levelId: '',
				levelname:"",
				
				result: '',
				show: true,
				startTime: '',
				endTime: '',
				tabList: ["求购", "评估"],
				currentIndex: 0,
				value: '',
				value1: "",
				value2: "",
				value3: "",
				total: '',
				options: [],
				searchoptions: [],
				optionsTwo: [],
				searchoptionsTwo: [],
				optionsThree: [],
					searchoptionsThree: [],
				optionsFour: [],
				searchoptionsFour:[],
				infoList: [


				]
			};
		},
		components: {

		},
		async mounted() {
			this.currentDate=new Date()
			let p = {
				n: 1,
				s: 10
			}
			this.api.getWxIntentionLevel(p).then(res => {

				this.optionsFour = res
				this.searchoptionsFour=this.optionsFour
				this.searchoptionsFour.unshift({content:"全部"})
			})
			this.getList()
			// this.api.getWxBusinessBuy(this.page).then(res => {
			// 	this.total = res.page.total
			// 	this.infoList = res.data.list
			// 	console.log(888,this.infoList);
			// })
			window.addEventListener('scroll', this.menu)
			// let list = "abcdefghijklmnopqrstuvwxyz"

			this.api.searchbrandlist('').then(res => {

				for (let i = 0; i < res.length; i++) {
					this.options = [...this.options, ...res[i].result]
				}
				this.searchoptions = this.options
				this.searchoptions.unshift({brand_name:"全部"})

			})
			window.addEventListener("pageshow",  () =>{
			  //   if (isPageHide) {
			  //     window.location.reload();
			  //   }
			   console.log("返回刷新");
			  if (this.until.seGet("needRefresh")) {
			   
			    this.until.seRemove("needRefresh");
			    location.reload();
			  }
			});

			// this.api.searchbrandlist('').then(res => {

			//  for(let i=0;i<res.length;i++)
			//  {
			// 	 this.options = [...this.options, ...res[i].result]
			//  }

			// })

		},
		methods: {
			startTimeChange(val){
				this.startTime=moment(val).format("YYYY-MM-DD");
				this.showPicker5=false
			},
			endTimeChange(val){
				this.endTime=moment(val).format("YYYY-MM-DD");
				this.showPicker6=false
			},
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
				let startTime = moment(val).format("YYYY-MM-DD");
				this.startTime = startTime;
			},
			endTimeChang(val) {
				let endTime = moment(val).format("YYYY-MM-DD");
				this.endTime = endTime;
			},
			changePage(index) {
				this.currentIndex = index
				// this.optionsTwo=[]
				this.value = ""
				this.value1 = ""
				this.value2 = ""
				this.value3 = ""
				this.optionsThree = []
				this.optionsFour = []
				this.levelId = ""
				this.brand = ""
				this.series = ""
				this.model = ""
				this.salesman = ""
				this.infoList = []
				this.startTime = ""
				this.endTime = ""
				this.page.n = 1
				this.page1.n = 1
				this.getList()

			},
			toDetail(id) {

				this.until.href(`/views/productneeds/detail.html?index=${this.currentIndex}&id=${id}`)



			},

			getList() {



				if (this.currentIndex == 0) {
					this.page.intentionLevel = this.levelId
					this.page.phone = this.phone
					this.page.brand = this.brand
					this.page.series = this.series
					this.page.model = this.model
					this.page.beginTime = this.startTime
					this.page.endTime = this.endTime
					this.api.getWxBusinessBuy(this.page).then(res => {
						this.total = res.page.total
						console.log("kankan", res);
						this.infoList = [...this.infoList, ...res.data.list]
						this.istrue = true
						

					})

				} else if (this.currentIndex == 1) {
					this.page1.brand = this.brand
					this.page1.series = this.series
					this.page1.model = this.model
					this.page1.beginTime = this.startTime
					this.page1.endTime = this.endTime
					this.page1.saler = this.salesman
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

						} else if (this.currentIndex == 1 && this.infoList.length < this.total) {
							this.page1.n++

							this.getList()
						}
					}
					// load() {
					// 	console.log(1231321);
					// 	this.getList()
					// }
				}
			},
			search() {
				this.infoList = []
				this.page.n = 1
				this.page1.n = 1
				this.getList()
			},
			postId(val) {
				console.log(4878, val);
				this.brand = val
				this.api.getCarSeries({
					brandid: val
				}).then(res => {
					console.log("kankan", res);
					this.optionsThree = res
					console.log("测试", this.optionsThree);
				})
			},
			postIdTwo(val) {
				this.levelId = val
			},
			postIdThree(val) {
				this.series = val
				this.api.getCarModels({
					seriesId: val
				}).then(res => {
					this.optionsFour = res.result
				})
			},
			postIdFour(val) {
				this.model = val
			},
			onSearch1(a) {
				if (a != "") {
					this.searchoptions = this.options.filter((item) =>
						item.brand_name.includes(a)
					);
				} else {
					this.searchoptions = this.options
				}
			},
			handleBuysType(e, v) {
				this.seriesname=''
				this.modelname=''
				this.brand = e.id
				this.brandname = e.brand_name
				if(this.brandname=="全部"){
					this.brandname=''
				}
				this.api.getCarSeries({
					brandid: this.brand
				}).then(res => {
					this.optionsTwo = res
					this.searchoptionsTwo = this.optionsTwo
					this.searchoptionsTwo.unshift({name:"全部"})
					this.showPicker1 = false
					
				})
			},

			onSearch2(a) {
				if (a != "") {
					this.searchoptionsTwo = this.optionsTwo.filter((item) =>
						item.content.includes(a)
					);
				} else {
					this.searchoptionsTwo = this.optionsTwo
				}


			},
			handleBuysTypeTwo(e, v) { 
				this.modelname=''
				this.series = e.id
				this.seriesname = e.name
				if(this.seriesname=="全部"){
					this.seriesname=''
				}
			this.api.getCarModels({
				seriesId: this.series
			}).then(res => {
				this.optionsThree = res.result
				this.searchoptionsThree=this.optionsThree
				this.searchoptionsThree.unshift({name:"全部"})
				this.showPicker2=false
			})
			},
			onSearch3(a) {
				if (a != "") {
					this.searchoptionsThree = this.optionsThree.filter((item) =>
						item.content.includes(a)
					);
				} else {
					this.searchoptionsThree = this.optionsThree
				}
			
			
			},
			handleBuysTypeThree(e, v) {
				
				this.model = e.id
				this.modelname = e.name
				if(this.modelname=="全部"){
					this.modelname=''
				}
				this.showPicker3=false
				},
			onSearch4(a) {
				if (a != "") {
					this.searchoptionsFour = this.optionsFour.filter((item) =>
						item.content.includes(a)
					);
				} else {
					this.searchoptionsFour = this.optionsFour
				}
			
			
			},	
			handleBuysTypeFour(e, v) {
				console.log(e)
				this.levelId = e.id
				this.levelname = e.content
				this.showPicker4=false
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
	
	.el-select-dropdown__item {
		text-align: center;
	}

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
				.vantSelect{
						width: 1.88rem;
					  margin-right: 0.09rem;
					  border-radius: 0.1rem;
					  height: 0.8rem;
					  margin-bottom: 0.1rem;
					  font-size:0.24rem ;
					  text-align: center;
					  display: flex;
					  align-items: center;
					  justify-content: center;
					  padding: 0.4rem 0.4rem;
						// line-height: 0.8rem;
				}
				.vantSelectTwo{
					width: 2.866rem;
					height: 0.8rem;
					border-radius: 0.1rem;
					height: 0.8rem;
					// margin-bottom: 0.1rem;
					font-size:0.24rem ;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0.4rem 0.65rem;
					margin-left: 0.09rem;
				}
				input {
					width: 2.866rem;
					height: 0.8rem;
					background: #FFFFFF;
					// border: 0.02rem solid #DDDDDD;
					border-radius: 0.1rem;
					font-size: 0.24rem;
					padding: 0 0.32rem;

				}

				.putin {
					width: 5.8rem;
				}

				input::placeholder {
					text-align: center;
					font-size: 0.24rem;
					color: #909090;
					opacity: 0.8;
					opacity: 0.7;

				}

				.select {
					width: 2.866rem;
					height: 0.7rem;
					margin-bottom: 10px;

				}

				.select2 {
					width: 1.88rem;
					height: 0.7rem;
					margin-bottom: 0.2rem;
				}


				.pick {
					display: flex;

					.picker {
						width: 2.9rem;
						font-size: 0.24rem;
						margin-top: 0.1rem;
						padding-right: 0;
						margin-right: 0.059rem;

						/deep/ .el-input--prefix .el-input__inner {
							padding-right: 0;
						}
					}
				}
			}

			.rightBox {
				button {
					width: 1rem;
					height: 2.6rem;
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
					margin-bottom: 0.2rem;

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

				.newReport {
					width: 1.3rem;
					height: 0.51rem;
					background-color: red;
					border-radius: 0.2rem;
					font-size: 0.24rem;
					color: #ffffff;
					position: absolute;
					right: 0.3rem;
					top: 0.3rem;
					text-align: center;
					line-height: 0.51rem;

				}
			}
		}

	}
</style>
