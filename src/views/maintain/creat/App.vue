<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

#container {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
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
    .main{
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .input{
            width: 100%;
            display: flex;
            display: -webkit-flex;
            padding: 0.25rem 0.3rem;
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

    }
    >button{
        background: @color;
        color: #ffffff;
        font-size: 1.1em;
        height: 0.8rem;
        line-height: 0.8rem;
    }
}
</style>

<template>
    <div id="container">
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
        <mt-datetime-picker
                :startDate="today"
                v-model="nextFollowDate"
                type="date"
                ref="picker"
                @confirm="handleConfirm">
        </mt-datetime-picker>
        <div class="main">
            <div class="input">
                <p>车牌号码：</p>
                <input type="text" v-model="form.vehicleNum" :disabled="disabled"/>
            </div>
            <div class="input" v-if="!ifCar">
                <p>车架后六位：</p>
                <input type="text" v-model="form.vinLastSixNum" :disabled="disabled"/>
            </div>
            <div class="input" v-if="!ifCar">
                <p>客户名称：</p>
                <input type="text" v-model="form.linkMan" :disabled="disabled"/>
            </div>
            <div class="input" v-if="!ifCar">
                <p>联系电话：</p>
                <input type="text" v-model="form.linkManPhone" :disabled="disabled"/>
            </div>
            <div class="input">
                <p>跟进方式：</p>
                <button @click="typeToShow">{{followWay?followWay:'请选择跟进方式'}}<span class="iconfont">&#xe638;</span></button>
            </div>
            <div class="input">
                <p>跟进内容：</p>
                <textarea type="text" v-model="form.followContent"></textarea>
            </div>

            <div class="input">
                <p>下次跟进时间：</p>
                <button @click="chooseTime">{{form.nextFollowDate ? form.nextFollowDate : '跟进时间'}}<span class="iconfont">&#xe64d;</span></button>

            </div>
            <div class="input">
                <p>备注：</p>
                <textarea type="text" v-model="form.rmks"></textarea>
            </div>
        </div>
        <button @click="toSave">保存</button>
    </div>
</template>

<script>
    import { Picker } from 'mint-ui';
    import { DatetimePicker } from 'mint-ui';
export default {
  data() {
    return {
        disabled:false,
        today:undefined,
        nextFollowDate:'',
        pickerVisible:'',
        typeSHow:false,
        followWay:'',
        ifCar:false, //是否从车辆详情点击过来
        current:{
            followWayValue:'',
            followWayLabel:'',
        },
        form:{
            followWay:'',//方式
            followContent:'',//跟进内容
            rmks:'',
            nextFollowDate:'',  //下次跟进时间
        },
        typeList:[{values:[{
            value:'1',
            lable:'电话拜访'
        },{
            value:'2',
            lable:'上门拜访'
        },{
            value:'3',
            lable:'其他'
        }]}]
    };
  },
  components:{

  },
  created(){
  },
  mounted() {
      this.today =  new Date()
      this.nextFollowDate = this.today
      console.log(this.today)
      if(this.until.getQueryString('info')){
          this.disabled = true
          let data = JSON.parse(this.until.getQueryString('info'))
          this.form.vehicleNum = data.vehicleNum
          this.form.vinLastSixNum = data.vinLastSixNum
          this.form.linkMan = data.linkMan
          this.form.linkManPhone = data.linkManPhone
          this.form.id = data.id
      }
      if(this.until.getQueryString('carInfo')){
          this.disabled = true
          let data = JSON.parse(this.until.getQueryString('carInfo'))
          console.log(data)

          this.form.vehicleNum = data.vehicleNum
          this.form.customerId = data.customerId
          this.form.vehicleId = data.vehicleId
          this.ifCar = true
      }
  },
  methods: {
      typeToShow(){
          this.typeSHow=true
      },
      //拜访方式选择
      typeChange(e,values){
        this.current.followWayValue = values[0].value
        this.current.followWayLabel = values[0].lable
      },
      //拜访方式取消
      cancel(){
          this.current.followWayValue = ''
          this.current.followWayLabel = ''
          this.typeSHow = false
      },
      //拜访方式确定
      typeConfirm(){
          this.followWay = this.current.followWayLabel
          this.form.followWay = this.current.followWayValue
          this.typeSHow = false
      },
      chooseTime(){
          this.$refs.picker.open();
      },
      handleConfirm(e){
          console.log(e)
        let myDate = this.until.formatDate(e)
        this.form.nextFollowDate = myDate.year+'-'+myDate.month+'-'+myDate.day

      },
      toSave(){
          // console.log(this.form)
          this.api.followAdd(this.form)
      }
  }
};
</script>

