<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			接待组登记资料
		</div>
		<div class="bodyContent">
			<div class="bodyTitle">
				基本信息
			</div>
			<div class="bodyList">
				<div class="list">
					<div class="listHead">
						客户姓名
					</div>
					<input class="listContent" placeholder="请输入姓名" v-model="name" />


				</div>
				<div class="list">
					<div class="listHead">
						联系电话
					</div>

					<input class="listContent" placeholder="请输入联系电话" v-model="phone"  @blur="test"/>

				</div>
				<div class="list">
					<div class="listHead">
						微信号
					</div>
					<input class="listContent" placeholder="请输入微信号" v-model="wxId" />
				</div>
				<div class="list">
					<div class="listHead">
						客户人数
					</div>
					<input class="listContent" placeholder="请输入客户人数" v-model="people" />
				</div>
				<div class="list">
					<div class="listHead">
						客户类型
					</div>
					<van-field
					  class="vantSelect"
					  readonly
					  clickable
					  label=""
					  :value="customerType"
					  placeholder="选择客户类型"
					  @click="showPicker123 = true"
					/>
					<van-popup v-model="showPicker123" round position="bottom">
					  <van-search
					    v-model="search123"
					    shape="round"
					    background="#09c076"
					    @input="onSearch123"
					    placeholder="请输入搜索关键词"
					  />
					  <van-picker
					    value-key="content"
					    show-toolbar
					    :columns="searchoptionsTwo"
					    @cancel="showPicker123 = false"
					    @confirm="handleBuysType"
					  />
					</van-popup>
					<!-- <el-select v-model="value2" filterable placeholder="请选择客户类型" class="select" @change="postIdTwo">
						<el-option v-for="item in optionsTwo" :key="item.value" :label="item.content" :value="item.content">
						</el-option>
					</el-select> -->
				</div>
				<div class="list">
					<div class="listHead">
						来访时间
					</div>
					<van-field
					  class="vantSelect"
					  readonly
					  clickable
					  label=""
					  :value="visitingTime "
					  placeholder="请选择来访时间 "
					  @click="showPicker3 = true"
					/>
					<van-popup v-model="showPicker3" round position="bottom">
					  <van-search
					    v-model="search3"
					    shape="round"
					    background="#09c076"
					    @input="onSearch3"
					    placeholder="请输入搜索关键词"
					  />
					  <van-picker
					    value-key="content"
					    show-toolbar
					    :columns="searchoptionsFour"
					    @cancel="showPicker3= false"
					    @confirm="handleBuysTypeFour"
					  />
					</van-popup>
			
				</div>
			</div>
			<div class="bodyTitle">
				客户需求
			</div>
			<div class="bodyList">
				<textarea rows="" cols="" class="listContent" placeholder="请输入需求" v-model="demand"></textarea>
				<div class="list" >
					<div class="listHead">
						客流性质
					</div>
					<van-field
					  class="vantSelect"
					  readonly
					  clickable
					  label=""
					  :value="nature"
					  placeholder="请选择客流性质"
					  @click="showPicker1 = true"
					/>
					<van-popup v-model="showPicker1" round position="bottom">
					  <van-search
					    v-model="search1"
					    shape="round"
					    background="#09c076"
					    @input="onSearch1"
					    placeholder="请输入搜索关键词"
					  />
					  <van-picker
					    value-key="content"
					    show-toolbar
					    :columns="searchoptions"
					    @cancel="showPicker1 = false"
					    @confirm="handleBuysTypeTwo"
					  />
					</van-popup>
				<!-- 	<el-select v-model="value" filterable placeholder="请选择客流性质" class="select" @change="postId">
						<el-option v-for="item in options" :key="item.value" :label="item.content" :value="item.content">
						</el-option>
					</el-select> -->

				</div>
				<div class="list" v-if="nature!='售后服务'&&nature!='证牌服务'&&nature!='其他服务'&&nature!=''">
					<div class="listHead">
						销售顾问
					</div>
					<van-field
					  class="vantSelect"
					  readonly
					  clickable
					  label=""
					  :value="saler"
					  placeholder="请选择销售顾问 "
					  @click="showPicker2 = true"
					/>
					<van-popup v-model="showPicker2" round position="bottom">
					  <van-search
					    v-model="search2"
					    shape="round"
					    background="#09c076"
					    @input="onSearch2"
					    placeholder="请输入搜索关键词"
					  />
					  <van-picker
					    value-key="arg7"
					    show-toolbar
					    :columns="searchoptionsThree"
					    @cancel="showPicker2= false"
					    @confirm="handleBuysTypeThree"
					  />
					</van-popup>
				<!-- 	<el-select v-model="value3" filterable placeholder="请选择客流性质" class="select" @change="postIdThree">
						<el-option v-for="item in optionsThree" :key="item.value" :label="item.arg7" :value="item.arg7">
						</el-option>
					</el-select> -->
				</div>
			</div>
			<div class="btn">
				<button type="button" @click="confirm">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from "mint-ui";
	export default {
		data() {
			return {
				showPicker123:false,
				showPicker1:false,
				showPicker2:false,
				showPicker3:false,
				
				
				search123:"",
				search1:"",
				search2:"",
				search3:"",
				
				
				value: '',
				value2:"",
				value3:"",
				
				
				name:"",
				phone:"",
				wxId:"",
				customerType:"",
				people:"",
				visitingTime:"",
				demand:"",
				nature:"",
				saler:"",
				isNewCustomer:'',
				
				info: {
					
				},
				options: [],
				searchoptions:[],
				
				optionsTwo:[],
				searchoptionsTwo:[],
				optionsThree:[],
				searchoptionsThree:[],
				optionsFour:[],
				searchoptionsFour:[],
				
				
				
			};
		},
		components: {},
		async mounted() {
			let querys = {
				w: [
					["category", 2, "EQ"],
				],
				o: ["id", "esc"],
				p: [1, 10],
			}
			let querysTwo = {
				w: [
					["category", 9, "EQ"],
				],
				o: ["id", "esc"],
				p: [1, 10],
			}
			let querysThree = {
				w: [
					["category", 5, "EQ"],
				],
				o: ["id", "esc"],
				p: [1, 10],
			}
			
			this.api.getCustomerCommonfield(this.query.toEncode(this.newqry(querys))).then(res=>{
				
				this.options=res
				this.searchoptions=this.options
			})
			this.api.getWxCommonfield(this.query.toEncode(this.newqry(querysTwo))).then(res=>{
				this.optionsTwo=res.list
				this.searchoptionsTwo=this.optionsTwo
			})
			this.api.staffList().then(res=>{
				console.log("ceshi",res);
				this.optionsThree=res
				this.searchoptionsThree=this.optionsThree
			})
			this.api.getVisiteTime(this.query.toEncode(this.newqry(querysThree))).then(res=>{
				console.log(11112123,res);
				this.optionsFour=res.list
				this.searchoptionsFour=this.optionsFour
			})
			
		},
		methods: {
			// 处理公共字段参数生成qry(使用query.js)
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
			back() {
				this.until.back()
			},
			postId(val){
				this.nature=val
			},
			postIdTwo(val){
				this.customerType=val
			},
			postIdThree(val){
				this.saler=val
			},
			
			async confirm(){
				
				// else if(this.phone==""){
				// 	Toast("电话不能为空")
				// 	return false
				// }
				// else if(this.reg.checkPhone(this.phone)!="ok")
				// {
				// 	Toast("请输入正确的手机号")
				// 	return false
				// }
				//  if(this.wxId==""){
				// 	Toast("微信号不能为空")
				// 	return false
				// }
				
				//  if(this.people==""){
				// 	Toast("客户人数不能为空")
				// 	return false
				// }
				//  if(this.customerType==""){
				// 	Toast("客户类型不能为空")
				// 	return false
				// }
				// if(this.visitingTime==""){
				// 	Toast("来访时间不能为空")
				// 	return false
				// }
				//  if(this.demand==""){
				// 	Toast("客户需求不能为空")
				// 	return false
				// }
				//  if(this.nature==""){
				// 	Toast("客流性质不能为空")
				// 	return false
				// }
			if(this.nature!='售后服务'&&this.nature!='证牌服务'&&this.nature!='其他服务'&&this.nature!=''&&this.saler==""){
					Toast("销售顾问不能为空")
					return false
				}
				if(this.name==""){
					this.name="(未留名)"
				}
				
				
				
				this.info.name=this.name
				this.info.phone=this.phone
				this.info.wxId=this.wxId
				this.info.people=this.people
				this.info.customerType=this.customerType
				this.info.visitingPeriod=this.visitingTime
				this.info.demand=this.demand
				this.info.nature=this.nature
				this.info.saler=this.saler
				
				
				console.log(11111111111);
				this.api.postWxCheckin(JSON.stringify(this.info)).then(res=>{
						this.until.back()

				})
				
				
			},
			onSearch123(a){
			if(a!=""){
				this.searchoptionsTwo = this.optionsTwo.filter((item) =>
				  item.content.includes(a)
				);
			}
			else{
				this.searchoptionsTwo=this.optionsTwo
			}
			},
			handleBuysType(e,v){
				this.customerType=e.content;
				this.showPicker123=false;
			},
			onSearch1(a){
				if(a!=""){
					this.searchoptions = this.options.filter((item) =>
					  item.content.includes(a)
					);
				}
				else{
					this.searchoptions=this.options
				}
			
			},
			handleBuysTypeTwo(e,v){
				this.nature=e.content
				this.showPicker1=false
			},
			onSearch2(a){
				if(a!=""){
					this.searchoptionsThree = this.optionsThree.filter((item) =>
					  item.arg7.includes(a)
					);
				}
				else{
					this.searchoptionsThree=this.optionsThree
				}
			},
			handleBuysTypeThree(e,v){
				this.saler=e.arg7
				this.showPicker2=false
				
			},
			onSearch3(a){
				if(a!=""){
					this.searchoptionsFour = this.optionsFour.filter((item) =>
					  item.content.includes(a)
					);
				}
				else{
					this.searchoptionsFour=this.optionsFour
				}
			},
			handleBuysTypeFour(e,v){
				this.visitingTime=e.content
				this.showPicker3=false
			},
			test(){
				this.api.getStoreagain({phone:this.phone}).then(res=>{
				
					 this.isNewCustomer=res.data
				
					if( this.isNewCustomer==1){
					let querys = {
						w: [
							["category", 2, "EQ"],
							["outside",3,"EQ"]
						],
						
						o: ["id", "esc"],
						p: [1, 10],
					}
					let querys2= {
						w: [
							["category", 9, "EQ"],
							["outside",3,"EQ"]
						],
						
						o: ["id", "esc"],
						p: [1, 10],
					}
					
					 this.api.getCustomerCommonfieldAgain( this.query.toEncode( this.newqry(querys))).then(res=>{
						 console.log("qw",res);
						 this.options=res
						 this.searchoptions=this.options
					 })
					 this.api.getWxCommonfieldAgain(this.query.toEncode(this.newqry(querys2))).then(res=>{
						 this.optionsTwo=res
						 this.searchoptionsTwo=this.optionsTwo
					 })
					
					}
					else{
						let querys = {
							w: [
								["category", 2, "EQ"],
							],
							o: ["id", "esc"],
							p: [1, 10],
						}
						let querys2 = {
							w: [
								["category", 9, "EQ"],
							],
							o: ["id", "esc"],
							p: [1, 10],
						}
						this.api.getCustomerCommonfield(this.query.toEncode(this.newqry(querys))).then(res=>{
							
							this.options=res
							this.searchoptions=this.options
						})
						this.api.getWxCommonfield(this.query.toEncode(this.newqry(querys2))).then(res=>{
							this.optionsTwo=res.list
							this.searchoptionsTwo=this.optionsTwo
						})
					}
					}
				)
				},
				
			
		},
		computed: {
			
		}
	};
</script>
<style type="less">
	body{
		background-color: #F1F3F2;
	}
	.el-input__inner{
		border: 0;
		font-size: 0.24rem;
		font-weight: bold;
		color: #303030;
		/* margin-top: -0.3rem; */
		width: 4.7rem;
		margin-left:0.54rem ;
	}
	.el-input__suffix{
		right: -0.52rem;
	}
	.van-cell--clickable{
		width: 4rem;
		padding: 0;
		margin-left:0.84rem;
		font-size: 0.24rem;
		font-weight: bold;
		color: #303030;
	}
	.van-field__control{
		font-weight: bold;
	}
	.van-field__control::placeholder{
		color: rgb(192,196,204);
	}
	.van-cell::after {
		border-bottom: 0;
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

		.bodyContent {
			.bodyTitle {
				padding: 0.3rem 0.48rem;
				font-size: 0.24rem;
				font-weight: bold;
				color: #303030;
			}

			.bodyList {
				width: 100%;
				background: #ffffff;
				border-radius: 0.12rem;
				textarea{
					border-bottom: 0.02rem solid rgba(0, 0, 0, 0.1);
					padding: 0.1rem 0.2rem;
					font-size: 0.24rem;width: 100%;
					font-weight: bold;
					color: #303030;
					
				}
				textarea::placeholder{
						color: rgb(192,196,204);
				}

				.list {
					display: flex;
					border-bottom: 0.02rem solid rgba(0, 0, 0, 0.1);
					padding: 0.3rem 0.48rem;
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;

					.listHead {
						display: flex;
						align-items: center;
						width: 1rem;
						font-size: 0.24rem;
						font-weight: bold;
						color: #303030;
					}

					.select {
						margin-top: -0.215rem;
					}

					.listContent {
						margin-left: 0.84rem;
						font-size: 0.24rem;
						font-weight: bold;
						color: #303030;
					}
					input::placeholder{
						color: rgb(192,196,204);
					}
				}

			}

			.btn {
				margin-top: 1.76rem;
				text-align: center;

				button {
					width: 5.7rem;
					height: 0.7rem;

					background: #09C076;
					border-radius: 0.34rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
		}



	}
</style>
