<template>
  <div class="classifyIndex">
      <div class="title">
          整备分类
          <p @click="toClose">关闭</p>
      </div>
     <!--<div class="search">-->
        <!--<input v-model="compNm"/>-->
        <!--<button @click="getList">搜索</button>-->
     <!--</div>-->
    <!--<div class="menu">-->
        <!--<p @click="toScroll(index)" v-for="(item,index) in menu" :key="index">{{item}}</p>-->
    <!--</div>-->
    <div class="main">
       <!--<div class="list"  v-for="(item,index) in list">-->
          <!--<p :id="'toScroll'+index">{{menu[index]}}</p>-->
         <!--<div class="content" v-for="(i,j) in item" :keys="i.id">-->
           <!--<p @click="choose(i)">{{i.name}}</p>-->
         <!--</div>-->
       <!--</div>-->
        <mt-index-list>
            <mt-index-section :index="menu[index]" v-for="(item,index) in list" :key="index">
                <mt-cell  v-for="(i,j) in item" :key="j" >
                    <p class="classifyList"  @click="choose(i)">{{i.name}}</p>
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
  </div>
</template>

<script>
    import { IndexList, IndexSection } from 'mint-ui';
export default {
  data() {
    return {
      compNm:'',
      menu:[],
        list:[],
    };
  },
  mounted() {
    this.getList()
  },

  components: {},
  computed: {

  },
  methods: {

     async getList(){
         // console.log('列表')
       this.list = []
       let list = {'A':[],'B':[],'C':[],'D':[],'E':[],'F':[],'G':[],'H':[],'I':[],'J':[],'K':[],'L':[],'M':[],'N':[],'O':[],'P':[],'Q':[],'R':[],'S':[],'T':[],'U':[],'V':[],'W':[],'X':[],'Y':[],'Z':[]}
       this.menu = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
         // let dataList = [{name:'A三'},{name:'B三'},{name:'A三'},{name:'C三'},{name:'D三'},{name:'F三'},{name:'G三'},{name:'H张三'},{name:'K三'},{name:'E三'},{name:'M三'},{name:'W三'},{name:'O张三'},{name:'J张三'},{name:'N张三'},{name:'Y张三'},{name:'Z张三'}]
       let dataList = await this.api.classify();
       for(let i=0;i<this.menu.length;i++){
          for(let j=0;j<dataList.length;j++){
            if(this.PY.getCamelChars(dataList[j].name)[0]==this.menu[i]){
              list[this.menu[i]].push(dataList[j])
            }
          }
       }

      for(let [k,v] of Object.entries(list)){
         if(v.length==0){
           let index = this.menu.indexOf(k);
           if (index > -1) {
             this.menu.splice(index, 1);
           }
         }else {
           this.list.push(v)
         }
      }
     },

    choose(item){
         console.log('choose')
       console.log(item)
       this.$emit('choose',JSON.stringify(item))
    },
      toClose(){
         console.log('关闭')
          this.$emit('close')
      }
  }
};
</script>

<style lang="less">
    @import url('../assets/css/mobile.less');
    @import url('../assets/css/common.css');
.classifyIndex {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    border-top: 1px solid @borderColor;
    background-color: @backgroundColor;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    .title{
        text-align: center;
        background: @color;
        color: #ffffff;
        padding: 0.2rem;
        position: relative;
        p{
            position: absolute;
            display: inline-block;
            padding: 3px 10px;
            top:0.15rem;
            background: #ffffff;
            color: @color;
            border-radius: 3px;
            right: 10px;
        }
    }
  .menu{
    position: fixed;
    z-index: 999;
    right: 0px;
    height: 90vh;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    flex-direction: column;
    top:5vh;
    p{
      width: 40px;
      flex: 1;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
    }
  }
  .search{
    background: #ffffff;
    border-bottom: 1px solid @borderColor;
    display: flex;
    display: -webkit-flex;
    padding: 0 30px;
    align-items: center;

    input{
      margin: 30px 20px 30px 0;
      flex: 1;
      /*margin-right: 20rpx;*/
      border: 1px solid @borderColor;
      border-radius: 3px;
      padding-left: 20px;
      height: 70px;
      line-height: 70px;
    }
    button{
      background: @color;
      border-radius: 3px;
      color: #ffffff;
      height: 70px;
      line-height: 70px;
      padding: 0 30px;
    }
  }
  .main {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
      .mint-cell-title{
          flex: none;
      }
      .classifyList{
          color: #333333;
          text-align: left;
      }
    .list{
      p{
        text-indent: 30px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid @borderColor;
      }
      >p{
        background: @backgroundColor;
      }
      .content{
        p{
            height: 50px;
            line-height: 50px;
          background: #ffffff;
        }
      }
    }

  }
}
</style>
