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

					<input class="listContent" placeholder="请输入联系电话" v-model="phone"/>

				</div>
				<div class="list">
					<div class="listHead">
						微信号
					</div>
					<input class="listContent" placeholder="请输入微信号" v-model="wxId" />
				</div>
				<div class="list">
					<div class="listHead">
						客户类型
					</div>
					<el-select v-model="value2" filterable placeholder="请选择客户类型" class="select" @change="postIdTwo">
						<el-option v-for="item in optionsTwo" :key="item.value" :label="item.content" :value="item.content">
						</el-option>
					</el-select>
				</div>
			</div>
			<div class="bodyTitle">
				客户需求
			</div>
			<div class="bodyList">
				<textarea rows="" cols="" class="listContent" placeholder="请输入需求" v-model="demand"></textarea>
				<div class="list" style="padding-bottom: 0.1rem;">
					<div class="listHead">
						客流性质
					</div>
					<el-select v-model="value" filterable placeholder="请选择客流性质" class="select" @change="postId">
						<el-option v-for="item in options" :key="item.value" :label="item.content" :value="item.content">
						</el-option>
					</el-select>

				</div>
				<div class="list">
					<div class="listHead">
						销售顾问
					</div>
					<el-select v-model="value3" filterable placeholder="请选择客流性质" class="select" @change="postIdThree">
						<el-option v-for="item in optionsThree" :key="item.value" :label="item.arg7" :value="item.arg7">
						</el-option>
					</el-select>
				</div>
			</div>
			<div class="btn">
				<button type="button" @click="confirm">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				value2:"",
				value3:"",
				
				name:"",
				phone:"",
				wxId:"",
				customerType:"",
				demand:"",
				nature:"",
				saler:"",
				
				info: {
					
				},
				options: [],
				optionsTwo:[],
				optionsThree:[],
				
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
			
			this.api.getCustomerCommonfield(this.query.toEncode(this.newqry(querys))).then(res=>{
				
				this.options=res
			})
			this.api.getWxCommonfield(this.query.toEncode(this.newqry(querysTwo))).then(res=>{
				this.optionsTwo=res.list
			})
			this.api.staffList().then(res=>{
				console.log("ceshi",res);
				this.optionsThree=res
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
				this.info.name=this.name
				this.info.phone=this.phone
				this.info.wxId=this.wxId
				this.info.customerType=this.customerType
				this.info.demand=this.demand
				this.info.nature=this.nature
				this.info.saler=this.saler
				console.log(11111111111);
				await this.api.postWxCheckin(JSON.stringify(this.info))
				console.log(4445,JSON.stringify(this.info));
				this.until.back()
			}
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
