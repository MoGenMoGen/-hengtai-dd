<style lang="less" scoped>
  @import url('../assets/css/mobile.less');
  @import url('../assets/css/common.css');
  .app {
    display: flex;
    display: -webkit-flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    .tips{
      text-align: center;
      padding: 0.3rem;
    }
    .search{
      background: #ffffff;
      padding: 0.5rem 0;
      overflow: hidden;
      margin-bottom: 0.2rem;
      >p{
        margin-left: 5%;
      }
      input{
        height: 0.8rem;
        line-height: 0.8rem;
        margin-left: 5%;
        width: 90%;
        border-radius: 3px 0 0 3px;
        border: 1px solid @borderColor;
        box-sizing: border-box;
        text-indent: 10px;
      }
      >div{
        display: flex;
        display: -webkit-flex;
        margin: 0.1rem;
        button{
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          padding: 0 0.3rem;
          flex: 1;
          border-radius: 3px;
          background: @color;
          color: #ffffff;
          margin: 0 5%;

        }
        .all{
          border-radius: 3px;
          margin-left: 0.1rem;
        }
      }

    }
    .tab{
      display: flex;
      display: -webkit-flex;
      background: #ffffff;
      padding-top: 0.2rem;
      p{
        flex: 1;
        border-bottom: 1px solid @borderColor;
        text-align: center;
        padding: 0.15rem 0;
      }
      p.active{
        color: @color;
        border-bottom: 2px solid @color;
      }
    }
    .main{
      width: 100%;
      flex: 1;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      .list{
        background: #ffffff;
        border-bottom: 1px solid @borderColor;
        padding: 0.25rem 0.3rem;
        line-height: 0.6rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        .content{
          flex: 1;
          p span{
            display: inline-block;
            width: 1.7rem;
          }
        }
        >p{
          color: #999999;
          font-size: 1.1em;
          margin-right: 0.2rem;
          span{
            margin-left: 0.1rem;
            color: #999999!important;
          }
        }
        .blue{
          color: #1F95E6;
        }
        .yellow{
          color: @color;
        }
      }
    }

  }
</style>

<template>
  <div class="app">
      <div class="search">
        <input v-model="keys" placeholder="手机号、车牌号、车架后六位、品牌、客户姓名精准查询"/>
        <div>

          <button @click="toSearch">查询</button>
        </div>

        <p>共 {{total}} 条作业工单</p>
      </div>
      <div class="tab">
        <p @click="currentCd=item.cd" :class="{active:currentCd==item.cd}" v-for="item in tabList" :key="item.cd">{{item.title}}</p>
      </div>
      <div v-infinite-scroll="loadBottom"
           class="main"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div v-for="(item,index) in list" :key="index" class="list"  @click="toPage(item)">
          <div class="content">
            <p><span>联系人：</span>{{item.linkMan}}</p>
            <p><span>联系电话：</span>{{item.linkManPhone}}</p>
            <p><span>车牌号码：</span>{{item.vehicleNum}}</p>
            <p><span>品牌型号：</span>{{item.brandModel}}</p>
            <p><span>维保项目：</span>{{item.project}}</p>
            <p v-if="item.assignTime"><span>派单时间：</span>{{item.assignTime}}</p>
            <p v-if="item.finallyTime"><span>完成时间：</span>{{item.finallyTime}}</p>
          </div>
          <p v-if="item.status==1">
            待接单
            <span class="iconfont">&#xe63f;</span>
          </p>
          <p v-if="item.status==2">
            待完成
            <span class="iconfont">&#xe63f;</span>
          </p>
          <p v-if="item.status==5">
            已完成
            <span class="iconfont">&#xe63f;</span>
          </p>
        </div>
        <p class="tips">{{text}}</p>
      </div>
      <!--<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" class="main">-->
        <!--<div v-for="(item,index) in list" :key="index" class="list"  @click="toPage(item)">-->
          <!--<div class="content">-->
            <!--<p><span>联系人：</span>{{item.linkMan}}</p>-->
            <!--<p><span>联系电话：</span>{{item.linkManPhone}}</p>-->
            <!--<p><span>车牌号码：</span>{{item.vehicleNum}}</p>-->
            <!--<p><span>品牌型号：</span>{{item.brandModel}}</p>-->
            <!--<p><span>维保项目：</span>{{item.project}}</p>-->
            <!--<p v-if="item.assignTime"><span>派单时间：</span>{{item.assignTime}}</p>-->
            <!--<p v-if="item.finallyTime"><span>完成时间：</span>{{item.finallyTime}}</p>-->
          <!--</div>-->
          <!--<p v-if="item.status==1">-->
            <!--待接单-->
            <!--<span class="iconfont">&#xe63f;</span>-->
          <!--</p>-->
          <!--<p v-if="item.status==2">-->
            <!--待完成-->
            <!--<span class="iconfont">&#xe63f;</span>-->
          <!--</p>-->
          <!--<p v-if="item.status==5">-->
            <!--已完成-->
            <!--<span class="iconfont">&#xe63f;</span>-->
          <!--</p>-->
        <!--</div>-->
        <!--<p class="tips">{{text}}</p>-->
      <!--</mt-loadmore>-->
  </div>
</template>

<script>
    import { Loadmore } from 'mint-ui';
    export default {
        data() {
            return {
                text:'',
                keys:'',
                pageNo:1,
                pageNum:10,
                total:0,
                allLoaded:false,
                currentCd:'',
                tabList:[{   //"1-待接单 2-服务中 3-待确认完成 4-待客户确认完成 5-已完成",
                    cd:'',
                    title:'全部'
                },{
                    cd:1,
                    title:'待接单'
                },{
                    cd:2,
                    title:'服务中'
                },{
                    cd:3,
                    title:'已完成'
                }],
                list:[]
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            if(this.until.getQueryString('serviceCd')){
                this.currentCd = this.until.getQueryString('serviceCd')
            }else {
                this.getList()
            }
            // this.list = [{},{},{},{},{},{},{},{}]
        },
        watch:{
            currentCd:function () {
                console.log('currentId')
                this.list = []
                this.pageNo=1
                this.getList()
            }
        },
        methods: {
            toSearch(){
                this.list = []
                this.pageNo=1
                this.getList()
            },
            async getList(){
                let qry = this.query.new();
                this.query.toO(qry, 'crtTm', 'DESC');
                this.query.toP(qry, this.pageNo, this.pageNum);
                let data = {}
                this.query.toW(qry, "conditionInfo", this.keys, "EQ");
                // this.query.toW(qry, "linkManPhone", this.keys, "LK");
                if(this.currentCd==3){
                    this.query.toW(qry, 'status', '3,4,5' ,'IN');
                }else {
                    this.query.toW(qry, 'status', this.currentCd ,'EQ');
                }

                data = await this.api.servicelist(encodeURIComponent(this.query.toJsonStr(qry)))
                // this.$refs.loadmore.onBottomLoaded();  //这个如果去掉则一直显示加载中

                this.total = data.page.total
                this.list.push(...data.data.list)
                console.log(this.text)
                if(this.list.length==this.total){
                    this.allLoaded = true;// 若数据已全部获取完毕

                    if(this.total==0){
                        this.text = '暂无数据'
                    }else {
                        this.text = '数据已加载完'
                    }
                }else {
                    this.text = '上拉加载更多'
                }

            },

            toPage(item){
                let url = ''
                if(item.status==1){
                    url = '@/maintain/pendingDetail.html?id='+item.id
                }
                if(item.status==2){
                    url = '@/maintain/serviceDetail.html?id='+item.id
                }
                if(item.status==3 || item.status==4 || item.status==5){
                    url = '@/maintain/finished.html?id='+item.id
                }
                this.until.href(url)

            },
            loadBottom(){
                if(this.total==this.list.length){
                    this.allLoaded = true;// 若数据已全部获取完毕
                }else {
                    this.pageNo++
                    this.getList()
                }
            }
        }
    };
</script>

