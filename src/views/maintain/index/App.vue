<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

#container {
    width: 100%;
    height: 100%;
    background: @backgroundColor;
    overflow: hidden;
    /*display: flex;*/
    /*display: -webkit-flex;*/
    /*flex-direction: column;*/
    .menu{
        background: #ffffff;
        display: flex;
        display: -webkit-flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
        p{
            flex: 1;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            border-bottom: 1px solid @borderColor;
        }
        p.active{
            color: @color;
            border-bottom: 2px solid @color;
        }
    }
    .main{
        padding-top: 1rem;
        height: 100%;
        box-sizing: border-box;
        /*flex: 1;*/
        /*overflow: auto;*/
        /*-webkit-overflow-scrolling: touch;*/
    }

}
</style>

<template>
    <div id="container">
        <div class="menu">
            <p :class="{active:cd==1}" @click="cd=1">信息查询
            </p>
            <p :class="{active:cd==2}" @click="cd=2">跟进记录</p>
            <p :class="{active:cd==3}" @click="cd=3">服务作业</p>
        </div>
        <div class="main">
            <vip v-if="cd==1" :id="customerId" ref="customer"></vip>
            <follow-up v-if="cd==2"></follow-up>
            <service v-if="cd==3"></service>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    // import * as dd from 'dingtalk-jsapi';
    import vip from '@/components/VIPCustomer';
    import followUp from '@/components/followUp';
    import service from '@/components/service';
export default {
  data() {
    return {
        cd:0,
        customerId:'',
        userInfo:{}
    };
  },
  components:{
      vip,
      followUp,
      service
  },
  created(){
      // Toast('creat')
  },
  mounted() {
      // console.log('home')
      // Toast('mounted')
    //   this.customerId = this.until.getQueryString('id') ? this.until.getQueryString('id') : ''
    //   this.login()
    //   if(this.until.getQueryString('cd')){
    //       this.cd = this.until.getQueryString('cd')
    //   }else {
    //       this.cd = this.until.seGet('homeCd')? this.until.seGet('homeCd') : 1
    //   }

  },
    watch:{
    //   cd:function (e) {
    //       this.until.seSave('homeCd',e)
    //   }
    },
  methods: {
//获取code
      login(){
          let that = this
          dd.runtime.permission.requestAuthCode({
              corpId:"ding2c2e5aee012096b435c2f4657eb6378f", // 企业id
              onSuccess: function (info) {
                  console.log(info)
                  that.code = info.code
                  that.codeLogin()
              },
              onFail : function(err) {
                  console.log(err)
              }
          });

      },
      //code登录
      codeLogin(){
          this.api.login(this.code).then(res=>{
              console.log(res)
              if(res.code=='0'){   // 如果是表示绑定过，不需要再绑定
                  this.until.loSave('token',res.data.token)
                  this.userInfo = res.data.userInfo
                  this.until.loSave('userInfo',JSON.stringify(res.data.userInfo))
                  this.$refs.customer.getInfo(this.userInfo)
                  // this.getInfo()
              }else {
                  Toast(JSON.stringify(res))
              }
          })
      },
  }
};
</script>

