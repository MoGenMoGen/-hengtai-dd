<template>
	<div class="content">
		<van-popup v-model="showPicker" round position="bottom">
			<van-datetime-picker v-model="currentTime" type="year-month" title="选择年月" @cancel="showPicker = false"
				@confirm="onConfirm" />
		</van-popup>
		<div class="top">
			<div class="tab">
				<div class="tabList" v-for="(item, index) in tabList" :key="index" @click="changeTab(index)"
					:class="currentIndex == index ? 'active' : ''" v-if="currentRole == 3">
					{{ item }}
				</div>
				<div class="tabList" v-for="(item, index) in tabListTwo" :key="index" @click="changeTab(index)"
					:class="currentIndex == index ? 'active' : ''" v-if="currentRole!= 3">
					{{ item }}
				</div>
			</div>
			<div class="bodyContent">
				<div class="workHours" v-if="list.length>0">总计工时：{{total ? list[0].count : '0.00'}}H</div>
				<div class="searchBox">
					<div class="boxOne">
						<input placeholder="项目名称" v-model="proname" v-if="currentIndex == 0" />
						<!-- <input placeholder="姓名" v-model="name" v-if="currentIndex == 1 && currentRole == 1" /> -->
						<input placeholder="部门名称" v-model="name" v-if="currentIndex == 1&&currentRole!=3" />
						<input placeholder="人员" v-model="name" v-if="currentIndex == 1&&currentRole==3" />
					</div>
					<div class="boxTwo" @click="showPicker = true" style="position: relative;">

						<img :src="time" />
						<p v-if="!dateTime" style="margin-left:0.14rem ;">月份选择</p>
						<p v-if="dateTime" style="color: #000;margin-left:0.14rem ;">{{ dateTime }}</p>
						<img :src="close" style="position: absolute; right:0.15rem" @click.stop="deleteDate" />
					</div>
					<div class="btnSearch" @click="search">查询</div>
				</div>
			</div>
		</div>
        <!--项目-->
		<div class="list1" style="padding: 0rem 0.2rem;padding-bottom: 0.2rem;" v-if="currentIndex == 0">
			<div class="header">
				<div class="headName1 headname">项目</div>
				<div class="headName2 headname">月份</div>
				<div class="headName2 headname">工作时长(H)</div>
				<div class="headName3 headname" v-if="currentRole!=3">部门详情</div>
				<div class="headName3 headname" v-if="currentRole==3">人员详情</div>
			</div>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getInfo()"   :immediate-check="immediate"
				v-if="currentIndex == 0">
				<div class="bottom">
					<div class="list" v-for="(item,index) in list">
						<div class="listName1 listName">{{item.projName}}</div>
						<div class="listName2 listName">{{item.workDate}}</div>
						<div class="listName2 listName">{{item.AllHours}}</div>
						<div class="listName3 listName" @click="toDetail(item)">查看</div>
					</div>
				</div>
			</van-list>
		</div>
        <!--负责人看员工currentIndex == 1&&currentRole==3-->
		<div class="list2"  v-if="currentIndex == 1&&currentRole==3">

			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getInfo()"  :immediate-check="immediate">
                <div class="list22">
                    <div class="listLeft">
                        <div class="header2">
                            <div class="headName4 headname">姓名</div>
                        </div>
                        <div class="list" v-for="(item,index) in list " :key="index">
                            <!--<div class="listName4 listName">{{item.userName}}</div>-->
                            <div class="listName4 listName">{{item.userName}}</div>
                        </div>
                    </div>
                    <div class="listRight">
                        <div class="header2">
                            <!--<div class="headName4 headname">姓名</div>-->
                            <div class="headName4 headname">月份</div>
                            <div class="headName5 headname">月应出勤时长(H)</div>
                            <div class="headName5 headname">月实际出勤时长(H)</div>
                            <div class="headName5 headname">达成率(%)</div>
                            <div class="headName5 headname">项目详情</div>
                        </div>
                        <div class="list" v-for="(item,index) in list " :key="index">
                            <!--<div class="listName4 listName">{{item.userName}}</div>-->
                            <div class="listName4 listName">{{item.workDate}}</div>
                            <div class="listName5 listName">{{item.planHours}}</div>
                            <div class="listName5 listName">{{item.workHours}}</div>
                            <div class="listName5 listName">{{item.workLv}}</div>
                            <div class="listName5 listName" style="color: #ca093a; text-decoration: underline"
                                 @click="pepDetial(item)">
                                查看
                            </div>
                        </div>
                    </div>
                </div>


			</van-list>
		</div>
        <!--非负责人看部门currentIndex == 1&&currentRole!=3-->
		<div class="list3" v-if="currentIndex == 1&&currentRole!=3">

			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getInfo()"  :immediate-check="immediate">
                <div class="list33">
                    <div class="listLeft">
                        <div class="header2">
                            <div class="headName4 headname">部门</div>
                        </div>
                        <div class="list" v-for="(item,index) in list" :key='index'>
                            <div class="listName4 listName">{{item.deptName}}</div>
                        </div>
                    </div>
                    <div class="listRight">
                        <div class="header2">
                            <!--<div class="headName4 headname">部门</div>-->
                            <div class="headName4 headname">月份</div>
                            <div class="headName5 headname">月应出勤时长(H)</div>
                            <div class="headName5 headname">月实际出勤时长(H)</div>
                            <div class="headName5 headname">达成率(%)</div>
                            <div class="headName5 headname">项目详情</div>
                            <div class="headName5 headname">人员详情</div>
                        </div>
                        <div class="list" v-for="(item,index) in list" :key='index'>
                            <!--<div class="listName4 listName">{{item.deptName}}</div>-->
                            <div class="listName4 listName">{{item.workDate}}</div>
                            <div class="listName5 listName">{{item.planHours}}</div>
                            <div class="listName5 listName">{{item.workHours}}</div>
                            <div class="listName5 listName">{{item.workLv}}</div>
                            <div class="listName5 listName" style="color: #ca093a; text-decoration: underline"
                                 @click="pepDetial(item)">
                                查看
                            </div>
                            <div class="listName5 listName" style="color: #ca093a; text-decoration: underline"
                                 @click="pepDetialTwo(item)">
                                查看
                            </div>
                        </div>
                    </div>
                </div>

			</van-list>
		</div>
	</div>
</template>
<script>
	import * as dd from "dingtalk-jsapi";
	import bg from "../../../assets/img/总分背景.png";
	import time from "../../../assets/img/时间控件.png";
	import close from "../../../assets/img/关闭.png";
	import {
		Notify
	} from "vant";
	export default {
		data() {
			return {
				loading: false,
				finished: false,
				immediate:false,
				currentRole: 1, //1:领导;2:老板;3:部门负责人
				currentIndex: 0,
				bg,
				time,
				close,
				name: "",
				tabList: ["项目", "人员"],
				tabListTwo: ["项目", "部门"],
				showPicker: false,
				currentTime: new Date(),
				dateTime: "",
				proname: "",
				userInfo: "",
				list: [],
                list2:['','','',''],
				deptIds: "",
				isCharge: '',
				size: 15,
				current: 1,
				total: '',
				deptName: '',
			};
		},
		mounted() {
            document.title = ''
		    // let info = {"tenant_id":"000000","user_id":"136117678","dept_id":"2487682","post_id":"540497","role_id":"1479400945271799810","oauth_id":"","account":"13968355558","user_name":"13968355558","nick_name":"陈中梁","role_name":"nomal","avatar":"","access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJub21hbCIsInBvc3RfaWQiOiI1NDA0OTciLCJ1c2VyX2lkIjoiMTM2MTE3Njc4Iiwicm9sZV9pZCI6IjE0Nzk0MDA5NDUyNzE3OTk4MTAiLCJ1c2VyX25hbWUiOiIxMzk2ODM1NTU1OCIsIm5pY2tfbmFtZSI6IumZiOS4reaigSIsImRldGFpbCI6eyJ0eXBlIjoid2ViIiwiaXNDaGFyZ2UiOjEsIm5lZWRQcm9qIjoxfSwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiIsImRlcHRfaWQiOiIyNDg3NjgyIiwiYWNjb3VudCI6IjEzOTY4MzU1NTU4IiwiY2xpZW50X2lkIjoic3dvcmQiLCJleHAiOjE2NDMxODA4MTAsIm5iZiI6MTY0MzE3NzIxMH0.myiaSG5YG3pIuIsNRCTY4_CGqIUUyHKTNK7KcJSZ0y3_PwYhAfnfvPEV4r-ki4nr5b5WOTQkSDG_JMaIuUuKVw","refresh_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTM2MTE3Njc4Iiwicm9sZV9pZCI6IjE0Nzk0MDA5NDUyNzE3OTk4MTAiLCJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImRlcHRfaWQiOiIyNDg3NjgyIiwiY2xpZW50X2lkIjoic3dvcmQiLCJleHAiOjE2NDM3ODIwMTAsIm5iZiI6MTY0MzE3NzIxMH0.UOPRw3sppIiqB53CAQFqsT-ZWZ-lxT-VJVmMcLvPKOcdADsFBJiwam0HsAXgdk6a71nCRY9MgOqCbPeeMWTu9g","token_type":"bearer","expires_in":3600,"detail":{"type":"web","isCharge":1,"needProj":1},"license":"powered by bladex"}
			this.currentIndex=this.until.loGet('currentIndex')
			this.userInfo = this.until.loGet("userInfo");
            // this.userInfo = info
            let val = ''
			if (this.userInfo.role_name.indexOf('boss')==(-1)) {
			    console.log('非老板')
                console.log(this.userInfo.detai)
			    if(this.userInfo.detail.chargeDepts){//领导人

                    val = "工时报表";
                }else {
                    this.api.getDeptDetail(this.userInfo.dept_id).then(res1 => {
                        console.log('工时详情1111',res1.deptName);
                        this.until.loSave("deptNm", res1.deptName);
                        val = res1.deptName
                    })
                }

			} else if (this.userInfo.role_name.indexOf('boss')!=-1)	{
                console.log(444);
                val = "工时报表";
            }
			
			// this.deptName = this.until.loGet("deptNm");
			// document.title = this.deptName
            dd.ready(function() {
                dd.biz.navigation.setTitle({
                    title : val,//控制标题文本，空字符串表示显示默认文本
                    onSuccess : function(result) {},
                    onFail : function(err) {}
                });
            });
			this.getInfo()
		},
		methods: {
			deleteDate() {
				this.dateTime = ''
			},
			getInfo() {
				this.loading=true
				// this.userInfo = this.until.loGet("userInfo");

				this.api.getDeptDetail(this.userInfo.dept_id).then(res => {
					// console.log(789,res);
					// this.deptName=res.deptName
					if (this.userInfo) {
						this.deptIds = this.userInfo.dept_id
						this.isCharge = this.userInfo.detail.isCharge
						if (this.userInfo.detail.chargeDepts) {
							this.deptIds = this.deptIds + ',' + this.userInfo.detail.chargeDepts.join(",")
						}
						if (!this.userInfo.detail.chargeDepts && this.userInfo.detail.isCharge == 1 && this
							.userInfo.role_name.indexOf('boss')==(-1)) {
							this.currentRole = 3
						}
					}
					if (this.userInfo && this.userInfo.detail.isCharge == 1 && this.userInfo.detail.chargeDepts)
						this.currentRole = 1;
					if (this.userInfo && this.userInfo.role_name.indexOf('boss')!=-1)		this.currentRole = 2;
					// if (this.currentRole == 2) document.title = "工时报表";
					// console.log(222,this.currentRole);
					if (this.currentRole == 1 && this.currentIndex == 0) {
						this.loading=true
						this.api.getProjBossReport(this.proname, this.dateTime, this.current, this.size, this
							.isCharge, this.deptIds).then(res => {
							this.total = res.total
                            res.records.forEach(item=>{
                                item.AllHours = item.AllHours ? parseFloat(item.AllHours).toFixed(2) : '0.00'
                            })
							this.list = [...this.list, ...res.records]
                            if(this.current==1 && this.total){
                                this.list[0].count=  parseFloat(this.list[0].count).toFixed(2)
                            }
							this.finished = this.list.length >= res.total;
							this.loading = false
							this.current++
						})
					} else if (this.currentRole == 3 && this.currentIndex == 0) {
						this.loading=true
						this.api.getProjBossReport(this.proname, this.dateTime, this.current, this.size, this
							.isCharge, this.deptIds).then(res => {
							this.total = res.total
                            res.records.forEach(item=>{
                                item.AllHours = item.AllHours ? parseFloat(item.AllHours).toFixed(2) : '0.00'
                            })
							this.list = [...this.list, ...res.records]
                            if(this.current==1 && this.total){
                                this.list[0].count= parseFloat(this.list[0].count).toFixed(2)
                            }
							this.finished = this.list.length >= res.total;
							this.loading = false
							this.current++
						})
					} else if (this.currentRole == 2 && this.currentIndex == 0) {
						this.loading=true
						this.api.getProjBossReport(this.proname, this.dateTime, this.current, this.size, '', '')
							.then(res => {
								console.log(122);
								this.total = res.total
                                res.records.forEach(item=>{
                                    item.AllHours = item.AllHours ? parseFloat(item.AllHours).toFixed(2) : '0.00'
                                })
								this.list = [...this.list, ...res.records]
                                if(this.current==1 && this.total){
                                    this.list[0].count= parseFloat(this.list[0].count).toFixed(2)
                                }
								this.finished = this.list.length >= res.total;
								this.loading = false
								this.current++

							})
					} else if (this.currentRole == 3 && this.currentIndex == 1) {
						// this.api.getDeptDetail(this.userInfo.dept_id).then(res=>{
						this.loading=true
						this.api.getDeptPersonReport(this.name, this.dateTime, this.current, this.size, this
							.userInfo.dept_id,'').then(res => {
							this.total = res.total
                            res.records.forEach(item=>{
                                item.planHours = item.planHours ? parseFloat(item.planHours).toFixed(2) : '0.00'
                                item.workHours = item.workHours ? parseFloat(item.workHours).toFixed(2) : '0.00'
                            })
							this.list = [...this.list, ...res.records]
                            if(this.current==1 && this.total){
							    console.log('total:',this.total)
                                this.list[0].count=parseFloat(this.list[0].count).toFixed(2)
                            }
							this.finished = this.list.length >= res.total;
							this.loading = false
							this.current++
						})

					} else if (this.currentRole == 2 && this.currentIndex == 1) {
						this.loading=true
						this.api.getDeptBossReport(this.name, this.dateTime, this.current, this.size, '', '').then(
							res => {
                                res.records.forEach(item=>{
                                    item.planHours = item.planHours ? parseFloat(item.planHours).toFixed(2) : '0.00'
                                    item.workHours = item.workHours ? parseFloat(item.workHours).toFixed(2) : '0.00'
                                })
								this.total = res.total
                                // console.log('老板')
								this.list = [...this.list, ...res.records]
                                if(this.current==1 && this.total){
                                    this.list[0].count=  parseFloat(this.list[0].count).toFixed(2)
                                }
								this.finished = this.list.length >= res.total;
								this.loading = false
								this.current++
							})
					} else if (this.currentRole == 1 && this.currentIndex == 1) {
						this.loading=true
						this.api.getDeptBossReport(this.name, this.dateTime, this.current, this.size, this
							.isCharge, this
							.deptIds).then(res => {
                            res.records.forEach(item=>{
                                item.planHours = item.planHours ? parseFloat(item.planHours).toFixed(2) : '0.00'
                                item.workHours = item.workHours ? parseFloat(item.workHours).toFixed(2) : '0.00'
                            })

							this.total = res.total
							this.list = [...this.list, ...res.records]
                            if(this.current==1 && this.total){
                                this.list[0].count= parseFloat(this.list[0].count).toFixed(2)
                            }
							this.finished = this.list.length >= res.total;
							this.loading = false
							this.current++
						})
					}
				})




			},
			search() {
				this.current = 1
				this.list = []
				this.getInfo()

			},
			changeTab(index) {
				if(this.currentIndex!=index){
					this.currentIndex = index;
					this.current = 1
					this.list = []
					this.finished = false
					this.immediate=false
					this.getInfo()
				}


			},
			onConfirm(val) {
				this.dateTime = this.getNowDate(val);
				this.showPicker = false;
			},
			getNowDate(val) {
				let nowDate = new Date(val);
				let year = nowDate.getFullYear();
				let month =
					nowDate.getMonth() + 1 < 10 ?
					"0" + (nowDate.getMonth() + 1) :
					nowDate.getMonth() + 1;
				return year + "-" + month;
			},
			toDetail(item) {
				console.log(item);
				if (this.currentRole != 3) {
					this.until.href(`/views/baobiao/xiangmudetail.html?deptNm=${item.deptName}&projNm=${item.projName}&projId=${item.projId}`);
				} else {
					this.until.href(
					`/views/baobiao/xiangmuDetailTwo.html?deptNm=${item.deptName}&projNm=${item.projName}&projId=${item.projId}&deptId=${item.deptId}`);
				}
			},
			pepDetial(item) {
				if (this.currentRole != 3) {
					this.until.href(`/views/baobiao/reyuandetail.html?userNm=${item.userName}&deptNm=${item.deptName}&deptId=${item.deptId}`);
				} else {
					this.until.href(
					`/views/baobiao/bosrenyuanDetail.html?userNm=${item.userName}&deptNm=${item.deptId}&userId=${item.userId}`);
				}
			},
			pepDetialTwo(item) {
				this.until.href(`/views/baobiao/bosxiangmuDetail.html?deptNm=${item.deptName}&projNm=${item.projName}&deptId=${item.deptId}`);
			},
		},
	};
</script>
<style lang="less" scoped>
	.content {
		background-color: #f1f3f2;
        min-height: 100vh;
		.top {
			position: sticky;
			top: 0;
			left: 0;
			z-index: 50;

			.tab {
				width: 100%;
				background-color: #ffffff;
				height: 1rem;
				display: flex;
				border-bottom: 1px solid #d9d9d9;

				.tabList {
					flex: 1;
					height: 100%;
					text-align: center;
					line-height: 1rem;
					font-size: 0.3rem;
					font-weight: 500;
					color: #999999;
				}

				.active {
					border-bottom: 1px solid #ca093a;
					font-size: 0.3rem;
					font-weight: bold;
					color: #ca093a;
					transition: 0.5s;
				}
			}

			.bodyContent {
				background-color: #f1f3f2;
				padding: 0.3rem 0.2rem;
				box-sizing: border-box;

				.workHours {
					height: 0.88rem;
					width: 100%;
					background-image: url(../../../assets/img/总分背景.png);
					background-size: 100% 100%;
					text-align: center;
					line-height: 0.88rem;
					font-size: 0.3rem;
					font-weight: 500;
					color: #ffffff;
				}
			}

			.searchBox {
				margin-top: 0.3rem;
				display: flex;
				justify-content: space-around;

				.boxOne {
					width: 2.63rem;
					height: 0.6rem;
					border: 1px solid #d9d9d9;
					background-color: #ffffff;

					input {
						width: 100%;
						height: 100%;
						padding: 0.2rem;
						box-sizing: border-box;
						font-size: 0.24rem;
						border: 0;
					}

					input::placeholder {
						font-size: 0.24rem;
						font-weight: 500;
						color: #999999;
					}
				}

				.boxTwo {
					width: 2.63rem;
					height: 0.6rem;
					border: 1px solid #d9d9d9;
					display: flex;
					background-color: #ffffff;
					padding: 0.2rem;
					box-sizing: border-box;
					align-items: center;

					p {
						font-size: 0.24rem;
						font-weight: 500;
						color: #999999;
					}

					img {
						width: 0.28rem;
						height: 0.26rem;
					}
				}

				.btnSearch {
					width: 1.44rem;
					height: 0.6rem;
					background: #ca093a;
					border-radius: 0.04rem;
					text-align: center;
					line-height: 0.6rem;
					font-size: 0.28rem;
					font-weight: 500;
					color: #ffffff;
				}
			}
		}

		.list2 {
			.header2 {
				width: 13rem;
				overflow-x: auto;
				white-space: nowrap;
				height: 0.62rem;
				box-sizing: border-box;
				background: #9f9f9f;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;

				.headname {
					text-align: center;
					line-height: 0.62rem;
					font-size: 0.24rem;
					color: #ffffff;
					display: inline-block;
				}

				.headName4 {
					width: 1.5rem;
					border-right: 1px solid #ffffff;
				}

				.headName5 {
					width: 2.5rem;
					border-right: 1px solid #ffffff;
				}
			}

			.list {
				width: 13rem;
				padding: 0.3rem 0;
				background: #ffffff;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;
				margin-bottom: 0.1rem;
				overflow-x: auto;
				white-space: nowrap;
				box-sizing: border-box;

				.listName {
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.24rem;
					text-align: center;
				}

				.listName4 {
					width: 1.5rem;
				}

				.listName5 {
					width: 2.5rem;
				}
			}
		}

		.list1 {
			.bottom {
				box-sizing: border-box;
				background-color: #f1f3f2;

				.list {
					padding: 0.3rem 0;
					background: #ffffff;
					box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
					border-radius: 0.1rem;
					display: flex;
					margin-bottom: 0.1rem;

					.listName {
						font-size: 0.24rem;
						color: #333333;
						line-height: 0.24rem;
						text-align: center;
					}

					.listName1 {
						width: 30%;
					}

					.listName2 {
						width: 25%;
					}

					.listName3 {
						width: 20%;
						color: #ca093a;
						text-decoration: underline;
					}

					.listName4 {
						width: 20%;
					}

					.listName5 {
						width: 30%;
					}
				}
			}

			.header {
				height: 0.62rem;
				box-sizing: border-box;
				background: #9f9f9f;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;

				.headname {
					text-align: center;
					line-height: 0.62rem;
					font-size: 0.24rem;
					color: #ffffff;
					display: inline-block;
				}

				.headName1 {
					width: 30%;
					border-right: 1px solid #ffffff;
				}

				.headName2 {
					width: 25%;
					border-right: 1px solid #ffffff;
				}

				.headName3 {
					width: 20%;
				}
			}
		}

		.list3 {
			.header2 {
				width: 15.5rem;
				overflow-x: auto;
				white-space: nowrap;
				height: 0.62rem;
				box-sizing: border-box;
				background: #9f9f9f;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;

				.headname {
					text-align: center;
					line-height: 0.62rem;
					font-size: 0.24rem;
					color: #ffffff;
					display: inline-block;
				}

				.headName4 {
					width: 2rem;
					border-right: 1px solid #ffffff;
				}

				.headName5 {
					width: 2.5rem;
					border-right: 1px solid #ffffff;
				}
			}

			.list {
				width: 15.5rem;
				padding: 0.3rem 0;
				background: #ffffff;
				box-shadow: 0.1rem 0.1 0.1rem 0.1rem rgba(47, 73, 154, 0.08);
				border-radius: 0.1rem;
				display: flex;
				margin-bottom: 0.1rem;
				overflow-x: auto;
				white-space: nowrap;
				box-sizing: border-box;

				.listName {
					font-size: 0.24rem;
					color: #333333;
					line-height: 0.24rem;
					text-align: center;
				}

				.listName4 {
					width: 1.5rem;
				}

				.listName5 {
					width: 2.5rem;
				}
			}
		}
        .list22{
            display: flex;
            width: 96vw;
            margin: 0 auto 0.2rem;
            .listLeft{
                flex-shrink: 0;
                width: 1.5rem;
                .header2,.list{
                    width: 100%;
                    border-radius: 0.1rem 0 0 0.1rem;
                }
            }
            .listRight{
                flex: 1;
                overflow-x: auto;
                .header2,.list{
                    overflow-x: hidden;
                    border-radius: 0 0.1rem 0.1rem 0;
                    width: 11.5rem;
                    >div{
                        display: inline-block;
                        &:last-of-type{
                            border-right:0;
                        }
                    }
                }
            }
        }
        .list33{
            display: flex;
            width: 96vw;
            margin: 0 auto 0.2rem;
            .listLeft{
                flex-shrink: 0;
                width: 2rem;
                .header2,.list{
                    width: 100%;
                    border-radius: 0.1rem 0 0 0.1rem;
                }
            }
            .listRight{
                flex: 1;
                overflow-x: auto;
                .header2,.list{
                    overflow-x: hidden;
                    border-radius: 0 0.1rem 0.1rem 0;
                    width: 14rem;
                    >div{
                        display: inline-block;
                        &:last-of-type{
                            border-right:0;
                        }
                    }
                }
            }
        }
	}
</style>
