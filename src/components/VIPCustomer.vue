<style lang="less" scoped>
  @import url('../assets/css/mobile.less');
  @import url('../assets/css/common.css');
  .app {
    display: flex;
    display: -webkit-flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    .search{

      background: #ffffff;
      padding: 0.5rem 0;
      overflow: hidden;
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

      >p{
        margin-left: 5%;
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
      .list >div{
        background: #ffffff;
        border-bottom: 1px solid @borderColor;
        padding: 0.25rem 0.3rem;
        line-height: 0.6rem;
        display: flex;
        display: -webkit-flex;
        align-items: center;
        &:first-of-type{
          border-top: 1px solid #999999;
        }
        &:last-of-type{
          border-bottom: 1px solid #999999;
        }
        .content{
          flex: 1;
          p span{
            display: inline-block;
            width: 2rem;
          }
        }
        >span{
          font-size: 1.1em;
          margin-right: 0.2rem;
          color: #999999;
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

        <p>共 {{total}} 条客户信息</p>
      </div>
      <div v-infinite-scroll="loadBottom"
           class="main"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div v-for="(item,index) in list" :key="index" class="list" >
          <div @click="toCustomer(item.customerVo.id)">
            <div class="content">
              <p><span>行驶证姓名：</span>{{item.customerVo.drivingLicenseName}}</p>
              <p><span>联系电话：</span>{{item.customerVo.drivingLicenseLinkPhone}}</p>
              <p><span>联系人：</span>{{item.customerVo.linkMan}}</p>
              <p><span>联系电话：</span>{{item.customerVo.linkManPhone}}</p>
            </div>
            <span class="iconfont">&#xe63f;</span>
          </div>
          <div v-for="(i,j) in item.vehicleCustomerVoList" @click="toCar(i.id)">
            <div class="content">
              <p><span>车辆信息：</span>{{i.vehicleNum}}</p>
              <p><span>保养时间：</span>{{i.nextMaintainDate}}</p>
              <p><span>商业险时间：</span>{{i.commercialInsuranceTimeTo}}</p>
              <p><span>交强险时间：</span>{{i.compulsoryInsuranceTimeTo}}</p>
              <p><span>年检时间：</span>{{i.annualInspectTime}}</p>
            </div>
            <span class="iconfont">&#xe63f;</span>
          </div>
        </div>
        <p class="tips">{{text}}</p>
      </div>
      <!--<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" class="main">-->

        <!--<div v-for="(item,index) in list" :key="index" class="list" >-->
          <!--<div @click="toCustomer(item.customerVo.id)">-->
            <!--<div class="content">-->
              <!--<p><span>行驶证姓名：</span>{{item.customerVo.drivingLicenseName}}</p>-->
              <!--<p><span>联系电话：</span>{{item.customerVo.drivingLicenseLinkPhone}}</p>-->
              <!--<p><span>联系人：</span>{{item.customerVo.linkMan}}</p>-->
              <!--<p><span>联系电话：</span>{{item.customerVo.linkManPhone}}</p>-->
            <!--</div>-->
            <!--<span class="iconfont">&#xe63f;</span>-->
          <!--</div>-->
          <!--<div v-for="(i,j) in item.vehicleCustomerVoList" @click="toCar(i.id)">-->
            <!--<div class="content">-->
              <!--<p><span>车辆信息：</span>{{i.vehicleNum}}</p>-->
              <!--<p><span>保养时间：</span>{{i.nextMaintainDate}}</p>-->
              <!--<p><span>商业险时间：</span>{{i.commercialInsuranceTimeTo}}</p>-->
              <!--<p><span>交强险时间：</span>{{i.compulsoryInsuranceTimeTo}}</p>-->
              <!--<p><span>年检时间：</span>{{i.annualInspectTime}}</p>-->
            <!--</div>-->
            <!--<span class="iconfont">&#xe63f;</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<p class="tips">{{text}}</p>-->
      <!--</mt-loadmore>-->
  </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { Loadmore } from 'mint-ui';
    export default {
        props:['id'],
        data() {
            return {
                role:0,
                showAll:false,
                myId:'',
                text:'',
                keys:'',
                pageNo:1,
                pageNum:10,
                total:0,
                allLoaded:false,
                list:[],
                userInfo:{}
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            // console.log('userInfo')
            // console.log(this.until.loGet('userInfo'))
            this.userInfo = JSON.parse(this.until.loGet('userInfo'))

            if(this.userInfo.userDepartRole){
                for(let v of Object.values(this.userInfo.userDepartRole)){
                    this.role = v
                }
            }

            this.myId = this.id
            this.getList()
        },
        methods: {
            getInfo(obj){
                this.userInfo = obj
                for(let v of Object.values(this.userInfo.userDepartRole)){
                    this.role = v
                }
            },
            toSearch(){

                if(this.keys==''){
                    Toast('请输入关键字')
                }else {
                    this.myId = ''
                    this.showAll = false
                    this.pageNo=1
                    this.list = []
                    this.getList()
                }

            },
            getAll(){
                this.showAll = true
                this.keys = ''
                this.pageNo = 1
                this.list = []
                this.getList()
            },
            async getList(){
                console.log('getVIPList')
                let qry = this.query.new();
                this.query.toW(qry, "conditionInfo", this.keys, "EQ");
                if(this.myId){
                    this.query.toW(qry, "id", this.myId, "EQ");
                }
                if(this.showAll){
                    this.query.toW(qry, "showAll", '1', "EQ");
                }
                this.query.toP(qry, this.pageNo, this.pageNum);

                let data = await this.api.infoList(
                    encodeURIComponent(this.query.toJsonStr(qry))
                );
                this.list.push(...data.data.list)
                this.total = data.page.total

                if(this.list.length===this.total){
                    // this.allLoaded = true;// 若数据已全部获取完毕
                    console.log(data)
                    console.log(this.list)
                    console.log(this.total)
                    console.log('数据已获取结束')
                    if(this.total==0){
                        this.text = '暂无数据'
                    }else {
                        this.text = '数据已加载完'
                    }
                }else {
                    this.text = '上拉加载更多'
                }

            },
            toCustomer(id){
                console.log('customer')
                let url = '../customer/customerDetail.html?id='+id
                this.until.href(url)

            },
            toCar(id){
                console.log('car')
                let url = '../customer/carDetail.html?id='+id
                this.until.href(url)

            },
            loadBottom(){
                console.log('loadMore')
                if(this.total > this.list.length){
                    this.pageNo++
                    this.getList()
                }

            }
        }
    };
</script>

