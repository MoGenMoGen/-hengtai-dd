<!-- 互生升个人中心详情页面 -->
<template>
	<div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back" />
			个人详情
		</div>
		<div class="bodyOne">
			<img :src="info.imgUrl"/>
			<el-upload class="imgChange" action="http://hsstest.jinkworld.com/general/oss/upload" :show-file-list="false"
				:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" v-if="isChange == true">
				
				<img  src="~@/assets/img/imgupload.png" />
				<span> 上传头像 </span>
			</el-upload>
		</div>
		<div class="bodyTwo">
			<div class="bodyList">
				<div class="head">昵称</div>
				<div class="content" v-if="isChange == false">
					{{ info.nickname }}
				</div>
				<div class="content" v-if="isChange == true">
					<input class="" type="" name="" id="" v-model="info.nickname" />
					<img src="~@/assets/img/change.png" />
				</div>
			</div>
			<div class="bodyList">
				<div class="head">姓名</div>
				<div class="content">
					{{ info.arg7 }}
				</div>
				<!-- <div class="content" v-if="isChange == true">
          <input class="" type="" name="" id="" :value="info.name" />
          <img src="~@/assets/img/change.png" />
        </div> -->
			</div>
			<div class="bodyList">
				<div class="head">联系电话</div>
				<div class="content" v-if="isChange == false">
					{{ info.mob }}
				</div>
				<div class="content" v-if="isChange == true">
					<input class="" type="" name="" id="" v-model="info.mob" />
					<img src="~@/assets/img/change.png" />
				</div>
			</div>
			<div class="bodyList">
				<div class="head">职称</div>
				<div class="content">
					{{ info.departRoles }}
				</div>
				<!--    <div class="content" v-if="isChange == true">
          <input class="" type="" name="" id="" :value="info.position" />
          <img src="~@/assets/img/change.png" />
        </div> -->
			</div>
			<div class="bodyList">
				<div class="head">性别</div>
				<div class="content" v-if="isChange == false">
					{{ info.sex }}
				</div>
				<div class="content" v-if="isChange == true">
					<input class="" type="" name="" id="" v-model="info.sex" />

					<img src="~@/assets/img/change.png" />
				</div>
			</div>

		</div>
		<div class="btn">
			<button type="button" v-if="isChange == false" @click="Tochange">
				修改信息
			</button>
			<button type="button" v-if="isChange == true" @click="postmsg">保存信息</button>
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
				imageUrl:"",
				isChange: false,
				nickname: "",
				mob: "",
				sex: "",

				info: {
					nickname: "杰尼龟",
					name: "小火龙",
					tel: "蒜头王八",
					position: "皮卡丘",
					sex: "呱呱呱",

				},
				infoList: {

				}

			};
		},

		async mounted() {
			this.api.getPersonInformation({}).then(res => {
				this.info = res.sysUserVo
			})
		},
		methods: {

			Tochange() {
				this.isChange = true;
			},
			back() {
				this.until.back();
			},
			postmsg() {
				this.isChange = false;
				this.infoList.nickname = this.info.nickname
				this.infoList.sex = this.info.sex
				this.infoList.id = this.info.id
				this.infoList.phone = this.info.mob
				this.infoList.imgUrl=this.info.imgUrl
				this.api.postUpdPerson(this.infoList)
				console.log(this.info);
			},
			handleAvatarSuccess(res, file) {
				
				this.imageUrl = res[0]
				console.log(this.infoList)
				this.info.imgUrl=this.imageUrl
			
				console.log(this.info.imgUrl);
				
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}

		},
	};
</script>

<style lang="less" scoped>
	@import url("../../../assets/css/mobile.less");
	@import url("../../../assets/css/common.css");

	#container {
		width: 100%;
		height: 100%;
		background: url("~@/assets/img/header.png") no-repeat;
		background-color: #f1f3f2;
		background-size: 100% 1.28rem;
		overflow: hidden;

		/*display: flex;*/
		/*display: -webkit-flex;*/
		/*flex-direction: column;*/
		.title {
			width: 100%;
			height: 1.28rem;
			position: relative;
			line-height: 1.28rem;
			text-align: center;
			font-size: 0.36rem;
			font-weight: 500;
			color: #ffffff;

			img {
				height: 0.31rem;
				width: 0.17rem;
				position: absolute;
				top: 50%;
				left: 0.36rem;
				transform: translateY(-50%);
			}
		}

		.bodyOne {
			margin-top: 0.1rem;
			padding: 0.68rem 3.15rem;
			background: #ffffff;
			border-radius: 0.2rem;
			box-sizing: border-box;

			img {
				width: 1.2rem;
				height: 1.2rem;
				border-radius: 50%;
			}

			.imgChange {
				width: 5rem;
				display: flex;
				font-size: 0.24rem;
				font-weight: 500;
				color: #909090;

				img {
					width: 0.23rem;
					height: 0.22rem;
					margin-top: 0.08rem;
				}

				span {
					margin-left: 0.01rem;
				}
			}
		}

		.bodyTwo {
			margin-top: 0.1rem;
			background: #ffffff;
			border-radius: 0.2rem;

			.bodyList {
				padding: 0.3rem 0.35rem;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				border-bottom: 0.01rem solid #f1f1f1;

				.head {
					width: 1rem;
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;
					text-align-last: justify;
				}

				.content {
					font-size: 0.24rem;
					font-weight: bold;
					color: #303030;
					display: flex;

					input {
						font-size: 0.22rem;
						font-weight: 500;
						color: #909090;
						text-align: right;
						margin-right: 0.2rem;
					}

					img {
						width: 0.23rem;
						height: 0.24rem;
						margin-top: 0.1rem;
					}
				}
			}
		}

		.btn {
			margin-top: 1.05rem;
			text-align: center;

			button {
				width: 2.61rem;
				height: 0.69rem;
				border: 0.01px solid #e5e5e5;
				background: #ffffff;
				border-radius: 0.5rem;
				font-size: 0.28rem;
				color: #303030;
				font-weight: bold;
			}
		}
	}
</style>
