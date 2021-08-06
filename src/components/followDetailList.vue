<style lang="less" scoped>
  @import url('../assets/css/mobile.less');
  @import url('../assets/css/common.css');
  .app {
    .followList{
      background: #ffffff;
      border-bottom: 1px solid @borderColor;
      padding: 0.25rem 0.3rem;
      line-height: 0.6rem;
      position: relative;
      >span{
        position: absolute;
        top: 0.1rem;
        right: 0.15rem;
        font-size: 0.4rem;
        color: #666666;
      }
      .content{
        display: flex;
        display: -webkit-flex;
        span{
          display: inline-block;
          width: 2.3rem;
        }
        p{
          flex: 1;
        }
      }

    }
    .edit{
      position: fixed;
      z-index: 99;
      width: 100%;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.3);
      .editMain{
        width: 80%;
        margin: auto;
        max-height: 80%;
        overflow: auto;
        background: #ffffff;
        border-radius: 8px;
        padding-top: 0.5rem;
        -webkit-overflow-scrolling: touch;
        .input{
          width: 100%;
          display: flex;
          display: -webkit-flex;
          padding: 0.20rem 0.3rem;
          p{
            width: 2rem;
            line-height: 0.6rem;
          }
          input,button,textarea{
            text-align: left;
            text-indent: 10px;
            flex: 1;
            border: 1px solid @borderColor;
            height: 0.6rem;
            line-height: 0.6rem;
            span{
              float: right;
              margin-right: 0.1rem;
              color: #999999;
            }
          }
          textarea{
            height: 2rem;
          }
        }
        .button{
          width: 100%;
          display: flex;
          display: -webkit-flex;
          padding-top: 0.25rem;
          p{
            flex: 1;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            background: @backgroundColor;
            border-top: 1px solid @color;
            &:first-of-type{
              border-radius: 0 0 0 3px;
            }
            &:last-of-type{
              border-radius: 0 0 3px 0;
              background: @color;
              color: #ffffff;
            }
          }
        }
      }
    }
    .typeList{
      background: #ffffff;
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 999;
      border-top: 1px solid @borderColor;
      .top{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        p{
          flex: 1;
          padding: 0.2rem;
          &:last-of-type{
            text-align: right;
            color: @color;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="app">
    <mt-datetime-picker
            :startDate="date"
            v-model="nextFollowDate"
            type="date"
            ref="picker"
            @confirm="handleConfirm">
    </mt-datetime-picker>
    <div class="typeList" v-if="typeSHow" >
      <div class="top">
        <p @click="cancel">取消</p>
        <p @click="typeConfirm">确定</p>
      </div>
      <mt-picker
              :slots="typeList"
              @change="typeChange"
              valueKey="lable"></mt-picker>
    </div>
    <div class="edit" v-if="edit">
      <div class="editMain">
        <div class="input">
          <p>跟进方式：</p>
          <button @click="typeSHow = true">{{current.followWayLabel?current.followWayLabel:'请选择跟进方式'}}<span class="iconfont">&#xe638;</span></button>
        </div>
        <div class="input">
          <p>跟进内容：</p>
          <textarea type="text" v-model="currentInfo.followContent"></textarea>
        </div>

        <div class="input">
          <p>下次跟进时间：</p>
          <button @click="chooseTime">{{currentInfo.nextFollowDate ? currentInfo.nextFollowDate : '跟进时间'}}<span class="iconfont">&#xe64d;</span></button>

        </div>
        <div class="input">
          <p>备注：</p>
          <textarea type="text" v-model="currentInfo.rmks"></textarea>
        </div>
        <div class="button">
          <p @click="edit = false">取消</p>
          <p @click="save">保存</p>
        </div>
      </div>

    </div>
    <div v-for="(item,index) in myList" :key="index" class="followList">
      <span class="iconfont" @click="toEdit(item,index)">&#xe732;</span>
      <div class="content">
        <span>跟进方式：</span>
        <p v-if="item.followWay==1">电话拜访</p>
        <p v-if="item.followWay==2">上门拜访</p>
        <p v-if="item.followWay==3">其他</p>
      </div>
      <div class="content">
        <span>跟进内容：</span><p>{{item.followContent}}</p>
      </div>
      <div class="content">
        <span>下次跟进时间：</span> <p>{{item.nextFollowDate}}</p>
      </div>
      <div class="content">
        <span>备注：</span><p>{{item.rmks}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                lable:'',
                myList:[],
                date:undefined,
                nextFollowDate:undefined,
                index:-1,
                current:{
                    followWayValue:'',
                    followWayLabel:''
                },
                followWay:'',
                typeSHow:false,
                edit:false,
                currentInfo:{},
                typeList:[{
                    values:[{
                        value:'1',
                        lable:'电话拜访'
                    },{
                        value:'2',
                        lable:'上门拜访'
                    },{
                        value:'3',
                        lable:'其他'
                    }],
                    value:{
                        value:'2',
                        lable:'上门拜访'
                    },
                    defaultIndex:1
                }]
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            let today =  new Date()
            this.date = new Date(today.getFullYear()-1+today.getMonth() + today.getDate())
        },

        methods: {
            getList(data){
                console.log('子组件')
                // console.log(data)
                this.myList = JSON.parse(data)

            },
            toEdit(info,index){
                console.log('去编辑')

                console.log(info)
                this.edit = true
                this.index = index
                this.current.followWayValue = info.followWay
                if(this.current.followWayValue == 1) {
                    this.current.followWayLabel = '电话拜访'

                }else if(this.current.followWayValue == 2) {
                    this.current.followWayLabel = '上门拜访'

                }else if(this.current.followWayValue == 3) {
                    this.current.followWayLabel = '其他'

                }else {
                    this.current.followWayLabel = ''
                }
                if(this.current.followWayValue){
                    this.typeList[0].defaultIndex = parseInt(this.current.followWayValue)-1

                }else {
                    this.typeList[0].defaultIndex = 0

                }
                this.typeList[0].value.value = this.typeList[0].values[this.typeList[0].defaultIndex].value
                this.typeList[0].value.lable = this.typeList[0].values[this.typeList[0].defaultIndex].lable
                this.currentInfo = JSON.parse(JSON.stringify(info))
                // let date =new Date(this.currentInfo.nextFollowDate)
                console.log(this.currentInfo)
                this.nextFollowDate = new Date(this.currentInfo.nextFollowDate)

            },
            //拜访方式选择
            typeChange(e,values){
                console.log(values)
                this.current.followWayValue = values[0].value
                this.current.followWayLabel = values[0].lable
            },
            save(){
                let param = this.currentInfo
                this.api.followUpd(param).then(res=>{
                    if(res.code===0){
                        this.$set(this.myList,this.index,this.currentInfo)
                        Toast('操作成功！')
                        this.edit = false
                    }
                })
            },
            //拜访方式取消
            cancel(){
                this.typeSHow = false
            },
            //拜访方式确定
            typeConfirm(){
                this.currentInfo.followWay = this.current.followWayValue
                this.typeSHow = false
            },
            chooseTime(){
                this.$refs.picker.open();
            },
            handleConfirm(e){
                console.log(e)
                let myDate = this.until.formatDate(e)
                this.currentInfo.nextFollowDate = myDate.year+'-'+myDate.month+'-'+myDate.day

            },
        }
    };
</script>

