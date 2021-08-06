<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

#container {
    width: 100%;
    height: 100%;
    background: @backgroundColor;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    .menu{
        background: #ffffff;
        display: flex;
        display: -webkit-flex;
        p{
            flex: 1;
            padding: 0.3rem 0;
            text-align: center;
            border-bottom: 1px solid @borderColor;
        }
        p.active{
            color: @color;
            border-bottom: 2px solid @color;
        }
    }
    .main{
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

}
</style>

<template>
    <div id="container">
        <div class="menu">
            <p :class="{active:cd==1}" @click="cd=1">信息查询</p>
            <p :class="{active:cd==2}" @click="cd=2">跟进记录</p>
            <p :class="{active:cd==3}" @click="cd=3">服务作业</p>
        </div>
        <div class="main">
            <vip v-if="cd==1"></vip>
            <follow-up v-if="cd==2"></follow-up>
            <service v-if="cd==3"></service>
        </div>
    </div>
</template>

<script>
    import vip from '@/components/VIPCustomer';
    import followUp from '@/components/followUp';
    import service from '@/components/service';
export default {
  data() {
    return {
        cd:1,
    };
  },
  components:{
      vip,
      followUp,
      service
  },
  created(){
  },
  mounted() {

  },
  methods: {

  }
};
</script>

