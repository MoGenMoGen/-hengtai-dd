<style lang="less">
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

#login {
    width: 100%;
    height: 100%;
    background: #ffffff;
    text-align: center;
    img{
        width: auto;
        height: auto;
    }
    .form{
        padding: 0.5rem;
        text-align: left;
    }
    .mint-cell-wrapper{
        background-image: none;
    }
    .mint-cell:last-child{
        background-image: none;
    }
    .mint-field{
        border-bottom: 1px solid @borderColor;
    }
    >button{
        width: 70%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 1rem auto;
        background: @color;
        color: #ffffff;
        border-radius: 3px;
    }
}
</style>

<template>
    <div id="login">
        <img src=""/>
        <div class="form" v-if="ifShow">
            <mt-field label="手机号" placeholder="请输入手机号码" v-model="tel" type="tel" maxLength="1"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="pwd" type="password"></mt-field>
        </div>
        <button @click="submit"  v-if="ifShow">登录</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
        ifShow:false,
       tel:'',
        pwd:'',
        code:'',
    };
  },
  components:{

  },
  created(){
  },
  mounted() {
	  
	   this.code=this.until.getQueryString('code')
	  if(!this.code)
      this.until.href(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww45310caa5a15d5b4&redirect_uri=http%3A%2F%2F5q35epf.nat.ipyingshe.com%2Fstatic%2Fwechat%2Fviews%2Fprofile%2Flogin.html&response_type=code&scope=snsapi_base&state=#wechat_redirect
`)
      else
      this.ifShow=true
    //   this.tel = this.until.loGet('tel') ? this.until.loGet('tel') : ''
    //   this.pwd = this.until.loGet('pwd') ? this.until.loGet('pwd') : ''
  },

  methods: {
      //code登录
    //   codeLogin(){
    //       this.api.login(this.code).then(res=>{
    //           console.log(res)
    //           if(res.code=='0'){   // 如果是表示绑定过，不需要再绑定
    //               this.until.loSave('token',res.data.token)
    //               this.until.loSave('userInfo',JSON.stringify(res.data.userInfo))
    //               // console.log(res.data.userInfo)
    //               // console.log(this.until.loGet('userInfo'))
    //               this.until.href('@/maintain/index.html')
    //           }else {
    //               this.ifShow = true
    //               Toast(JSON.stringify(res))
    //           }
    //       })
    //   },
      //获取code
      login(){
		  
		  
        //   let that = this
        //   dd.runtime.permission.requestAuthCode({
        //       corpId:"ding2c2e5aee012096b435c2f4657eb6378f", // 企业id
        //       onSuccess: function (info) {
        //           console.log(info)
        //           that.code = info.code
        //           that.codeLogin()
        //       },
        //       onFail : function(err) {
        //           console.log(err)
        //       }
        //   });

      },
      submit(){
			
			let p={
				username:this.tel,
				password:this.pwd
			}
			this.api.login(p).then(res=>{
				console.log(res);
			})
        //   let that = this
        //   dd.runtime.permission.requestAuthCode({
        //       corpId:"ding2c2e5aee012096b435c2f4657eb6378f", // 企业id
        //       onSuccess: function (info) {
        //           console.log(info)
        //           let param = {
        //               mob:that.tel,
        //               password:that.pwd,
        //               code:info.code,
        //               rememberMe:true,
        //           }
        //           that.api.setTel(param).then((res)=>{
        //               console.log(res)
        //               that.until.loSave('tel',that.tel)
        //               that.until.loSave('pwd',that.pwd)
        //               that.until.loSave('token',res.data.token)
        //               that.until.loSave('userInfo',JSON.stringify(res.data.userInfo))
        //               that.until.href('@/maintain/index.html')
        //           })
        //       },
        //       onFail : function(err) {
        //           console.log(err)
        //       }
        //   });

      }
  }
};
</script>

