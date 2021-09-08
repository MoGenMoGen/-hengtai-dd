<style lang="less" scoped>
  @import url('../assets/css/mobile.less');
  @import url('../assets/css/common.css');
  .app {
    display: flex;
    display: -webkit-flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    >button{
      background: @color;
      color: #ffffff;
      font-size: 1.1em;
      height: 0.8rem;
      line-height: 0.8rem;
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
      border-bottom: 1px solid @borderColor;
      p{
        flex: 1;
        margin: 0.2rem 0.1rem;
        border: 1px solid @borderColor;
        border-radius: 3px;
        text-align: center;
        padding: 0.15rem 0;
      }
      p.active{
        background: @color;
        border-color: @color;
        color: #ffffff;
      }
    }
    .tips{
      text-align: center;
      padding: 0.3rem;
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
            width: 2.3rem;
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
          <button @click="getAll" class="all" v-if="this.role===1">查看所有</button>
        </div>

        <p>共 {{total}} 条记录</p>
      </div>

        <div class="tab">
          <p @click="currentCd=item.cd" :class="{active:currentCd==item.cd}" v-for="item in tabList" :key="item.cd">{{item.title}}</p>
        </div>
        <div v-infinite-scroll="loadBottom"
             class="main"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
          <div v-for="(item,index) in list" :key="index" class="list"  @click="toPage(item.id)">
            <div class="content">
              <p><span>车牌号码：</span>{{item.vehicleNum}}</p>
              <p><span>车架后六位：</span>{{item.vinLastSixNum}}</p>
              <p><span>客户名称：</span>{{item.linkMan}}</p>
              <p><span>联系电话：</span>{{item.linkManPhone}}</p>
              <p><span>上次跟进时间：</span>{{item.updTm}}</p>
              <p><span>下次跟进时间：</span>{{item.nextFollowDate}}</p>
            </div>
            <p v-if="item.vehicleStatus==1">
              正常
              <span class="iconfont">&#xe63f;</span>
            </p>
            <p v-if="item.vehicleStatus==2">
              成交
              <span class="iconfont">&#xe63f;</span>
            </p>
            <p v-if="item.vehicleStatus==3">
              置换
              <span class="iconfont">&#xe63f;</span>
            </p>
            <p v-if="item.vehicleStatus==4">
              收购
              <span class="iconfont">&#xe63f;</span>
            </p>
            <p v-if="item.vehicleStatus==5">
              其他
              <span class="iconfont">&#xe63f;</span>
            </p>
          </div>
          <p class="tips">{{text}}</p>
        </div>
        <!--<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText="上拉加载更多">-->
          <!--<div v-for="(item,index) in list" :key="index" class="list"  @click="toPage(item.id)">-->
            <!--<div class="content">-->
              <!--<p><span>车牌号码：</span>{{item.vehicleNum}}</p>-->
              <!--<p><span>车架后六位：</span>{{item.vinLastSixNum}}</p>-->
              <!--<p><span>客户名称：</span>{{item.linkMan}}</p>-->
              <!--<p><span>联系电话：</span>{{item.linkManPhone}}</p>-->
              <!--<p><span>上次跟进时间：</span>{{item.updTm}}</p>-->
              <!--<p><span>下次跟进时间：</span>{{item.nextFollowDate}}</p>-->
            <!--</div>-->
            <!--<p v-if="item.vehicleStatus==1">-->
              <!--正常-->
              <!--<span class="iconfont">&#xe63f;</span>-->
            <!--</p>-->
            <!--<p v-if="item.vehicleStatus==2">-->
              <!--成交-->
              <!--<span class="iconfont">&#xe63f;</span>-->
            <!--</p>-->
            <!--<p v-if="item.vehicleStatus==3">-->
              <!--置换-->
              <!--<span class="iconfont">&#xe63f;</span>-->
            <!--</p>-->
            <!--<p v-if="item.vehicleStatus==4">-->
              <!--收购-->
              <!--<span class="iconfont">&#xe63f;</span>-->
            <!--</p>-->
            <!--<p v-if="item.vehicleStatus==5">-->
              <!--其他-->
              <!--<span class="iconfont">&#xe63f;</span>-->
            <!--</p>-->
          <!--</div>-->
          <!--<p class="tips">{{text}}</p>-->
        <!--</mt-loadmore>-->

    <!--<button @click="toCreat">新建跟进记录</button>-->
  </div>
</template>

<script>
    import { Loadmore } from 'mint-ui';
    export default {
        data() {
            return {
                role:0,
                showAll:false,
                text:'',
                keys:'',
                pageNo:1,
                pageNum:10,
                total:0,
                allLoaded:false,
                currentCd:'',
                tabList:[{
                    cd:'',
                    title:'全部'
                },{
                    cd:1,
                    title:'正常'
                },{
                    cd:2,
                    title:'成交'
                },{
                    cd:3,
                    title:'置换'
                },{
                    cd:4,
                    title:'收购'
                },{
                    cd:5,
                    title:'其他'
                }],
                list:[]
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            let userInfo = JSON.parse(this.until.loGet('userInfo'))
            if(userInfo.userDepartRole){
                for(let v of Object.values(userInfo.userDepartRole)){
                    this.role = v
                }
            }
            // this.list = [{
            //
            // },{
            //
            // },{
            //
            // },{
            //
            // },{
            //
            // },{
            //
            // }]
          this.getList()
        },
        watch:{
            currentCd:function () {
                this.list = []
                this.pageNo=1
                this.getList()
            }
        },
        methods: {
            getAll(){
                this.showAll = true
                this.keys = ''
                this.pageNo = 1
                this.list = []
                this.getList()
            },
            toSearch(){
                this.list = []
                this.pageNo=1
                this.getList()
            },
            async getList(){
                let qry = this.query.new();
                // this.query.toW(qry, "gdType", 0, "EQ");
                this.query.toW(qry, "conditionInfo", this.keys, "EQ");
                // this.query.toW(qry, "vinLastSixNum", this.keys, "EQ");
                this.query.toW(qry, "vehicleStatus", this.currentCd, "EQ");
                this.query.toO(qry, 'crtTm', 'DESC');
                this.query.toP(qry, this.pageNo, this.pageNum);
                if(this.showAll){
                    this.query.toW(qry, "showAll", '1', "EQ");
                }
                let data = await this.api.followList(
                    encodeURIComponent(this.query.toJsonStr(qry))
                );
                console.log(data)
                console.log('llll')
               this.list.push(...data.data.list)
                this.total = data.page.total
                this.$refs.loadmore.onBottomLoaded();  //这个如果去掉则一直显示加载中
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
            toPage(id){
              let url = '/views/maintain/detail.html?id='+id
                this.until.href(url)
            },
            toCreat(){
                this.until.href('/views/maintain/creat.html')
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

