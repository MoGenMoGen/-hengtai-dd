<template>
	<div class="content">
		<van-popup v-model="showPicker1" round position="bottom">
			<van-datetime-picker :filter="filter" v-model="currentTime1" type="time" title="选择时间" :min-hour="9"
				:max-hour="17" :max-minute="30" @cancel="showPicker1 = false" @confirm="onConfirm1" />
		</van-popup>
		<van-popup v-model="showPicker2" round position="bottom">
			<van-datetime-picker :filter="filter" v-model="currentTime2" type="time" title="选择时间" :min-hour="9"
				:max-hour="17" :max-minute="30" @cancel="showPicker2 = false" @confirm="onConfirm2" />
		</van-popup>
		<van-popup v-model="showPicker3" round position="bottom">
			<van-picker title="选择总部" show-toolbar :columns="pickService[pickIndex2].columns1" @confirm="onConfirm3" value-key="name"
				@cancel="showPicker3 = false" />
		</van-popup>
		<van-popup v-model="showPicker4" round position="bottom">
			<van-picker title="选择运营店" show-toolbar :columns="pickService[pickIndex2].columns2" @confirm="onConfirm4" value-key="name"
				@cancel="showPicker4 = false" />
		</van-popup>
		<van-popup v-model="showPicker5" round position="bottom">
			<van-datetime-picker v-model="currentTime3" type="date" title="选择日期" 
				 @cancel="showPicker5 = false" @confirm="onConfirm5" />
		</van-popup>
		<div class="bodyList">
			<div class="listItem" v-if="type!=2">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作日期：</p>
				<p class="itemRight">{{nowDate}}</p>
			</div>
			<div class="listItem"  v-if="type==2">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作日期：</p>
				<div class="timeBox" @click="showPicker5=true">
					<p v-if="!nowDate">请选择日期</p>
					<p v-if="nowDate" style="color: #000;">{{nowDate}}</p>
					<img :src="shijian" >
				</div>
			</div>
			<div class="listItem">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作时间：</p>
				<div class="selectBox">
					<div class="beginTm" @click="showPicker1=true">
						<p v-if="!value1">开始时间</p>
						<p v-if="value1" style="color: #000;">{{value1}}</p>
					</div>
					~
					<div class="endTm" @click="showPicker2=true">
						<p v-if="!value2">结束时间</p>
						<p v-if="value2" style="color: #000;">{{value2}}</p>
					</div>
				</div>
				<div class="allSelectBox">
					<div class="leftBox" @click="allSelect">
						<img :src="xuanzhong" v-if="selectFlag">
					</div>
					<div class="rightBox">
						<p>全天</p>
					</div>
				</div>
			</div>
			<div class="listItem">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>工作时长：</p>
				<p class="itemRight">{{workHours}}小时/{{workdays}}天</p>
			</div>
			<div class="listItem" style="border-bottom:1px solid #E6E6E6;">
				<p style="color: #FF2015; font-size: 0.24rem;">*</p>
				<p>服务项目：</p>
				<div class="addNew">
					<img :src="xinzeng">
					<p @click="add">新增</p>
				</div>
			</div>
			<div class="addBox">
				<div class="addList" v-for="(item,index) in pickService" :key='index'>
					<div class="topBox" style="display: flex;">
						<div class="listBox" @click="pickshow3(index)">
							<p v-if="!item.value">总部</p>
							<p v-if="item.value" style="color: #000;">{{item.value}}</p>
							<img :src="xiala">
						</div>
						<div class="listBox" @click="pickshow4(index)">
							<p v-if="!item.value2">运营商</p>
							<p v-if="item.value2" style="color: #000;">{{item.value2}}</p>
							<img :src="xiala">
						</div>
						<div class="delete" @click="toDelete(index)">
							删除
						</div>
					</div>
					
					<div class="checkBox" v-if="item.checkList">
						<div class="boxList" v-for="(item1,index1) in item.checkList" :key='index1'>
							<div class="leftBox" @click="checkSelcetTwo(index,index1)">
								<img :src="xuanzhong" v-if="item1.flag">
							</div>
							<div class="rightBox">
								<p>{{item1.name}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="listItem2">
				<div class="" style="display: flex;">
					<p style="color: #FF2015; font-size: 0.24rem;">*</p>
					<p>工作内容：</p>
				</div>
				<div class="checkBox">
					<div class="boxList" v-for="(item,index) in checkList" :key='index'>
						<div class="leftBox" @click="checkSelcet(index)">
							<img :src="xuanzhong" v-if="item.flag">
						</div>
						<div class="rightBox">
							<p>{{item.name}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="listItem2">
				<div class="" style="display: flex;">
					<p style="color: #FF2015; font-size: 0.24rem;opacity: 0;">*</p>
					<p>备注：</p>
				</div>
				<textarea rows="" cols="" placeholder="请输入内容" v-model="rmks"></textarea>
			</div>
		</div>
		<div class="submit" @click="submit">
			 提交
		</div>
	</div>
</template>
<script>
	import {
		Notify
	} from 'vant';
	import xuanzhong from "../../../assets/img/选中.png"
	import xinzeng from "../../../assets/img/新增.png"
	import xiala from "../../../assets/img/下拉.png"
	import shijian from "../../../assets/img/时间控件.png"
	// import 'vant/lib/index.css'
	export default {
		data() {
			return {
				shijian,
				xuanzhong,
				xinzeng,
				xiala,
				nowDate: "", //当前日期
				currentTime1: '',
				currentTime2: '',
				time: '',
				showPicker1: false,
				showPicker2: false,
				showPicker3: false,
				showPicker4: false,
				showPicker5:false,
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				selectFlag: false,
				workHours:"",
				workdays:"",
				rmks:'',
				columns: [],
				columns2: [],
				checkList: [
				],
				pickIndex0:0,
				pickIndex:0,
				pickIndex2:0,
				pickService:[
					{
						
					}
				],
				userInfo:{},
				currentTime3:new Date(),
				type:'',
			}
		},
		mounted() {
			
			this.type=this.until.getQueryString('type')
			let id =this.until.getQueryString('id')
			this.userInfo=this.until.loGet('userInfo')
			if(!id){
				this.api.getProjjobcontListAll().then(res=>{
					this.checkList=res
					this.checkList.forEach(item=>{
						this.$set(item,'flag',false)
					})
					console.log(this.checkList);
				})
				this.api.getprojcatListAll('0').then(res=>{
					console.log(111111,res);
					this.$set(this.pickService[this.pickIndex],'columns1',res)
				})
			}
		
			if(this.type!=2){
				this.nowDate = this.getNowDate()
			}
			if(id){
				this.api.getProjwhreportDetail(id).then(res=>{
					this.nowDate=res.workDate
					this.value1=res.workTimeStart
					this.value2=res.workTimeEnd
					this.workHours=res.workHours
					this.workdays=res.workDays
					this.rmks=res.rmks
					let a=JSON.parse(res.params)
					this.api.getProjjobcontListAll().then(res1=>{
						this.checkList=res1
						for(let i=0;i<res1.length;i++){
							this.$set(this.checkList[i],'flag',false)
							for(let y=0;y<a.jobIds.length;y++){
								if(this.checkList[i].id==a.jobIds[y]){
									this.checkList[i].flag=true
								}
							}
						}
					})
					this.api.getprojcatListAll('0').then(res=>{
					for(let i=0;i<a.projs.length;i++){
						if(i==0){
							this.pickService[0].columns1=res
							this.pickService[0].columns2=a.projs[i].cat2List
							this.pickService[0].checkList=a.projs[i].projList
						
							this.pickService[0].id=a.projs[i].cid1
							this.pickService[0].id2=a.projs[i].cid2
							for(let j=0;j<a.projs[i].cat2List.length;j++){
								if(this.pickService[0].id2==a.projs[i].cat2List[j].id){
									this.pickService[0].value2=a.projs[i].cat2List[j].name
								} 
							}
							for(let p=0;p<res.length;p++){
								if(this.pickService[0].id==res[p].id){
									this.pickService[0].value=res[p].name
								} 
							}
						}
						else{
							let value=''
							let value2=''
							for(let j=0;j<a.projs[i].cat2List.length;j++){
								if(a.projs[i].cid2==a.projs[i].cat2List[j].id){
									value2=a.projs[i].cat2List[j].name
								} 
							}
							for(let p=0;p<a.projs[i].cat2List.length;p++){
								if(a.projs[i].cid1==res[p].id){
									value=res[p].name
								} 
							}
							console.log(777,value2);
							this.pickService.push({
								columns1:res,
								columns2:a.projs[i].cat2List,
								checkList:a.projs[i].projList,
								id:a.projs[i].cid1,
								id2:a.projs[i].cid2,
								value:value,
								value2:value2,
							})}
							
					}
					console.log(111111,this.pickService);
					})
				console.log(222222,res,a);
				})
			}
			
			
		},
		methods: {
			add(){
				this.api.getprojcatListAll('0').then(res=>{
					this.pickService.push({
						columns1:res,
						columns2:[],
					})
				})
				
			},
			checkSelcet(index) {
				this.checkList[index].flag = !this.checkList[index].flag
			},
			checkSelcetTwo(index,index1){
				console.log(index,index1);
				this.$set( this.pickService[index].checkList[index1], 'flag', !this.pickService[index].checkList[index1].flag)
				console.log(this.pickService);
				
			},
			allSelect() {
				this.selectFlag = !this.selectFlag
			},
			filter(type, options) {
				if (type === 'minute') {
					return options.filter((option) => option % 30 === 0);
				}
				return options;
			},
			onConfirm1(val) {
				if (this.value2) {
					if (val > this.value2) {
						Notify('开始时间不能大于结束时间');
						this.showPicker1 = false
						return
					}
				}
				this.value1 = val
				this.showPicker1 = false
			},
			onConfirm2(val) {
				if (this.value1) {
					if (val < this.value1) {
						Notify('结束时间不能小于开始时间');
						this.showPicker2 = false
						return
					}
				}
				this.value2 = val
				this.showPicker2 = false
			},
			onConfirm3(val) {
				this.pickService[this.pickIndex].value= val.name
				this.pickService[this.pickIndex].value2= ''
				this.$set(this.pickService[this.pickIndex],'id',
					val.id
				)
				this.api.getprojcatListAll(val.id).then(res=>{
					this.pickService[this.pickIndex].columns2=res
				})
				let obj={
					cid1:val.id,
					cid2:''
				}
				this.api.getprojListAll(obj).then(res=>{
					this.$set(this.pickService[this.pickIndex],'checkList',res)
					this.pickService[this.pickIndex].checkList.forEach(item=>{
						this.$set(item,'flag',false)
					})
				})
				console.log(this.pickService);
				this.showPicker3 = false
			},
			onConfirm4(val) {
				this.$set(this.pickService[this.pickIndex2],'id2',
					val.id
				)
				this.pickService[this.pickIndex2].value2= val.name
				let obj={
					cid1:this.pickService[this.pickIndex0].id,
					cid2:val.id
				}
				this.api.getprojListAll(obj).then(res=>{
					this.pickService[this.pickIndex2].checkList=res
					this.pickService[this.pickIndex2].checkList.forEach(item=>{
						this.$set(item,'flag',false)
					})
				})
				this.showPicker4 = false
			},
			onConfirm5(val){
				this.nowDate=this.getNowDate(val)
				this.showPicker5=false
			},
			getNowDate() {
				let nowDate = new Date();
				let year = nowDate.getFullYear();
				let month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
				let day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
				return year + "-" + month + "-" + day;
			},
			pickshow3(index){
				this.showPicker3=true
				this.pickIndex=index
				this.pickIndex0=index
			},
			pickshow4(index){
				this.showPicker4=true
				this.pickIndex2=index
				this.pickIndex0=index
			},
			toDelete(index){
				this.pickService.splice(index,1)
			},
			submit(){
				let jobId=[]
				let projsList=[]
				let projId=[]
				this.checkList.forEach(item=>{
					if(item.flag==true){
						jobId.push(item.id)
					}
				})
				this.pickService.forEach(item=>{
					item.checkList.forEach(item1=>{
						if(item1.flag==true){
							projId.push(item1.id)
						}
					})
					let obj={
						projIds:projId,
						projList:item.checkList,
						cid1:item.id,
						cid2:item.id2,
						cat2List:item.columns2
					}
					projId=[]
					projsList.push(obj)
				})
				let from={
					workDate:this.nowDate,
					workStart:'',
					workEnd:'',
					workTimeStart:this.value1,
					workTimeEnd:this.value2,
					workDays:this.workdays,
					workHours:this.workHours,
					userId:'',
					jobIds:jobId,
					projs:projsList,
					rmks:this.rmks,
					types:this.type==2?'2':'1',
					audit:"",
				}
				let id=this.until.getQueryString('id')
				if(id){
					from.id=id
				}
				console.log(from);
				this.api.ProjwhreportSubmit(from).then(res=>{
					console.log(111);
				})
			}
			
		}
	}
</script>
<style lang="less" scoped>
	.content {
		background-color: #F1F3F2;
		padding: 0.2rem;
		padding-bottom: 2rem;
		box-sizing: border-box;
		.submit{
			width: 100%;
			height: 1rem;
			background-color:#CA093A ;
			text-align: center;
			line-height: 1rem;
			color: #ffffff;
			position: fixed;
			bottom: 0;
			left:0;
			z-index: 50;
		}
		.bodyList {
			.listItem2 {
				align-items: center;
				background-color: #FFFFFF;
				padding: 0.34rem;
				box-sizing: border-box;
				border-radius: 0.1rem;
				margin-top: 0.1rem;
				
				textarea{
					width: 6rem;
					height: 2.19rem;
					border: 1px solid #DDDDDD;
					border-radius: 0.1rem;
					margin-left: 0.3rem;
					margin-top: 0.2rem;
					padding: 0.15rem;
					box-sizing: border-box;
					font-size: 0.24rem;
				}
				p {
					margin-left: 0.14rem;
					font-size: 0.28rem;
					color: #333333;
				}

				.checkBox {
					margin-top: 0.35rem;
					margin-left: 0.1rem;
					display: flex;

					flex-wrap: wrap;

					.boxList {
						display: flex;
						margin-right: 0.4rem;
						margin-top: 0.2rem;

						.leftBox {
							width: 0.35rem;
							height: 0.35rem;
							border: 1px solid #DDDDDD;
							border-radius: 0.1rem;

							img {
								width: 0.3rem;
								height: 0.3rem;
							}
						}

						.rightBox {
							p {
								
								font-size: 0.24rem;
								font-weight: 500;
								color: #333333;
							}
						}
					}
				}
			}

			.listItem {
				display: flex;
				align-items: center;
				background-color: #FFFFFF;
				padding: 0.34rem;
				box-sizing: border-box;
				border-radius: 0.1rem;
				margin-top: 0.1rem;
				.timeBox{
					width: 4.6rem;
					height: 0.6rem;
					border: 1px solid #DDDDDD;
					border-radius: 0.1rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 0.2rem;
					p{
						font-size: 0.24rem;
						color: #909090;
					}
					img{
						width: 0.28rem;
						height: 0.26rem;
					}
				}
				.addNew {
					width: 1.3rem;
					height: 0.5rem;
					background: #CA093A;
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 0.5rem;

					img {
						width: 0.3rem;
						height: 0.3rem;
					}

					p {
						font-size: 0.24rem;
						color: #FFFFFF;
					}

				}

				.middleLine {
					width: 100%;
					height: 0.1rem;
					background: #E6E6E6;
				}

				p {
					margin-left: 0.14rem;
					font-size: 0.28rem;
					color: #333333;
				}

				.itemRight {
					margin-left: 0.51rem;
				}

				.selectBox {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 3rem;
					height: 0.6rem;
					border: 0.01px solid #DDDDDD;
					border-radius: 0rem;

					.beginTm {
						p {
							color: rgba(0, 0, 0, 0.5);
							margin-left: 0;
						}
					}

					.endTm {
						p {
							color: rgba(0, 0, 0, 0.5);
							margin-left: 0;
						}
					}
				}

				.allSelectBox {
					margin-left: 0.5rem;
					display: flex;
					justify-content: center;
					align-items: center;

					.leftBox {
						width: 0.35rem;
						height: 0.35rem;
						border: 1px solid #DDDDDD;
						text-align: center;
						line-height: 0.35rem;

						img {
							width: 0.3rem;
							height: 0.3rem;
						}
					}

					.rightBox {
						p {
							font-size: 0.24rem;
							font-weight: 500;
							color: #333333;
						}
					}
				}
			}

			.addBox {
				background-color: #ffffff;
				box-sizing: border-box;
				padding: 0.3rem 0.45rem;
				border-radius: 0.1rem;

				.addList {
					justify-content: center;
					align-items: center;
					margin-bottom: 0.5rem;
					.checkBox {
						margin-top: 0.35rem;
						margin-left: 0.1rem;
						display: flex;
					
						flex-wrap: wrap;
					
						.boxList {
							display: flex;
							margin-right: 0.4rem;
							margin-top: 0.2rem;
					
							.leftBox {
								width: 0.35rem;
								height: 0.35rem;
								border: 1px solid #DDDDDD;
								border-radius: 0.1rem;
					
								img {
									width: 0.3rem;
									height: 0.3rem;
								}
							}
					
							.rightBox {
								p {
									margin-left: 0.14rem;
									font-size: 0.24rem;
									font-weight: 500;
									color: #333333;
								}
							}
						}
					}
					.listBox {
						width: 2.39rem;
						height: 0.6rem;
						border: 1px solid #DDDDDD;
						border-radius: 0.1rem;
						margin-right: 0.4rem;
						padding: 0.1rem 0.2rem;
						box-sizing: border-box;
						display: flex;
						justify-content: space-between;
						align-items: center;

						p {
							color: rgba(0, 0, 0, 0.5);
							font-size: 0.24rem;
							font-weight: 500;
							color: #909090;
						}

						img {
							width: 0.19rem;
							height: 0.1rem;
						}
					}
					.delete{
						color: red;
					}
				}
			}
		}
	}
</style>
