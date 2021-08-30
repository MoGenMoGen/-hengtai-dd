

<template>
    <div id="container">
		<div class="title">
			<img src="~@/assets/img/arrowback.png" @click="back">
			关于我们
		</div>
         <div v-html="aboutus" style="padding: 20px;">
			 
		 </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
	aboutus:"",
	
    };
  },
  components:{

  },
  created(){
  },
  mounted() {
  let querys = {
  	w: [
  		["cd","about","Lk"],
  	],
  	o: ["seq", "asc"],
  	p: [1, 10],
  }
	this.api.getAboutUs(this.query.toEncode(this.newqry(querys))).then(res => {
		
						this.aboutus = res.list[0].cont
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
   back(){
	   this.until.back()
	   
   }
  }
};
</script>

<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

    
	#container{
		width: 100%;
		background: url('~@/assets/img/header.png') no-repeat; 
	  // background: url(../../../assets/img/header.png) no-repeat;
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
	}


</style>

