<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');
    .pickerList{
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
    .receiptSuccess{
        background: rgba(0,0,0,0.75);
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 100%;
        .receiptMain{
            width: 60%;
            margin: 2rem auto;
            background: #ffffff;
            border-radius: 5px;
            text-align: center;
            padding: 0.5rem 0;
            span{
                color: @color;
                font-size: 2em;
                display: block;
                margin-bottom: 0.3rem;
            }
        }
    }
    .dispatch{
        background: rgba(0,0,0,0.75);
        position: fixed;
        z-index: 99;
        width: 100%;
        height: 100%;
        .main{
            width: 80%;
            margin: 2rem auto;
            background: #ffffff;
            border-radius: 5px;
            .top{
                text-align: center;
                padding: 0.2rem 0;
            }
            .content{

                padding: 0.4rem 0.2rem;
                border-bottom: 1px solid @borderColor;
                >div{
                    display: flex;
                    display: -webkit-flex;
                    align-items: center;
                    margin-bottom: 0.2rem;
                    p{
                        width: 2.3rem;
                    }
                    textarea{
                        flex: 1;
                        height: 1.8rem;
                        border: 1px solid @borderColor;
                        border-radius: 3px;
                        padding: 0 0.1rem;
                    }
                    select{
                        flex: 1;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        text-align: left;
                        border: 1px solid @borderColor;
                        border-radius: 3px;
                        padding: 0 0.1rem;
                        span{
                            display: inline-block;
                            float: right;
                        }
                    }
                }

            }
            .footer{
                display: flex;
                display: -webkit-flex;
                text-align: center;
                p{
                    flex: 1;
                    height: 0.8rem;
                    line-height: 0.8rem;
                    &:last-of-type{
                        color: @color;
                        border-left: 1px solid @borderColor;
                    }
                }
            }
        }
    }
    #container {
        width: 100%;
        height: 100%;
        background: @backgroundColor;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        .main{
            flex: 1;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }
        .btn{
            width: 100%;
            border-top: 1px solid @color;
            display: flex;
            display: -webkit-flex;
            >button{
                flex: 1;
                font-size: 1.1em;
                height: 0.8rem;
                line-height: 0.8rem;
                &:first-of-type{
                    color: @color;
                }
                &:last-of-type{
                    background: @color;
                    color: #ffffff;
                }
            }
        }

        .info{
            background: #ffffff;
            margin-bottom: 0.2rem;
            border-top: 1px solid @borderColor;
            border-bottom: 1px solid @borderColor;
            padding: 0.25rem 0.3rem;
            p{
                line-height: 0.6rem;
                span{
                    display: inline-block;
                    width: 2.3rem;
                }
            }
        }

        .situation{
            background: #ffffff;
            border-top: 1px solid @borderColor;
            margin-bottom: 0.2rem;
            >p{
                border-bottom: 1px solid #f4f4f4;
                padding: 0.3rem 0.3rem;
            }
        }

    }
</style>

<template>
    <div id="container">

        <div class="dispatch" v-if="dispatchShow">
            <div class="main">
                <div class="top">
                    派单
                </div>
                <div class="content">
                    <div>
                        <p>指派工作人员：</p>
                        <select v-model="staffId">
                            <option v-for="item in staffList" :key="item.id" :value="item.id">{{item.arg7}}</option>
                            <span class="iconfont">&#xe638;</span>
                        </select>
                    </div>

                    <div>
                        <p>备注：</p>
                        <textarea v-model="rmks"></textarea>
                    </div>
                    <!--<button @click="dispatchChooseSHow=true">请选择工作人员<span class="iconfont">&#xe638;</span></button>-->
                </div>
                <div class="footer">
                    <p @click="dispatchShow=false">取消</p>
                    <p @click="dispatchConfirm">确定</p>
                </div>
            </div>
        </div>
        <div class="receiptSuccess" v-if="receiptShow">
            <div class="receiptMain">
                <span class="iconfont">&#xe626;</span>
                接单成功！
            </div>
        </div>
        <div class="main">
            <div class="info">
                <p>
                    <span>行驶证名：</span>{{info.drivingLicenseName}}
                </p>
                <p>
                    <span>联系电话：</span>{{info.linkManPhone}}
                </p>
                <p>
                    <span>联系人：</span>{{info.linkMan}}
                </p>
                <p>
                    <span>品牌型号：</span>{{info.brandModel}}
                </p>
                <p @click="toPage()">
                    <span>车架号：</span>{{info.vin}}
                </p>
                <p>
                    <span>公里数（万）：</span>{{info.mileage}}
                </p>
                <p>
                    <span>车牌号：</span>{{info.vehicleNum}}
                </p>
                <p>
                    <span>对接人：</span>{{info.caller}}
                </p>
                <p>
                    <span>对接人电话：</span>{{info.callerPhone}}
                </p>
                <p>
                    <span>所属销售：</span>{{info.salerName}}
                </p>
                <p>
                    <span>ERP：</span>{{info.erp}}
                </p>
                <p v-if="info.assignTime">
                    <span>派单时间：</span>{{info.assignTime}}
                </p>
                <p>
                    <span>备注：</span>{{info.rmks}}
                </p>
            </div>
            <div class="situation">
                <p><span>维保项目：</span>{{info.project}}</p>
            </div>
        </div>
        <!--未派单情况下主管可以派单及接单-->
        <div class="btn" v-if="role==1">
            <button @click="dispatch">派单</button>
            <button @click="receipt">接单</button>
        </div>
        <!--主管已派单给员工，如果是自己接单不会显示在待接单里-->
        <!--<div class="btn" v-if="info.servierId!=null && role==1">-->
            <!--<button>已派单</button>-->
        <!--</div>-->
        <!--员工接单-->
        <div class="btn" v-if="role==0">
            <button @click="receipt">接单</button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                staffId:'',
                rmks:'',
                info:{},
                receiptShow:false,
                dispatchShow:false,
                dispatchChooseSHow:false,
                staffList:[],
                role:0,
                userInfo:{
                    attrMap: null,
                    avatar: null,
                    customerId: null,
                    customerName: null,
                    mob: "18666666666",
                    nickname: null,
                    openId: null,
                    roles: null,
                    sysUserOrgList: null,
                    tntId: null,
                    unionId: null,
                    userDepartRole: {
                        10000.40: 1  //1是主管，0员工
                    },
                    userId: 4534078142125056,
                    username: "18666666666"
                }
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            this.id = this.until.getQueryString('id')
            this.userInfo = JSON.parse(this.until.loGet('userInfo'))
            console.log(this.userInfo)
            for(let v of Object.values(this.userInfo.userDepartRole)){
                    this.role = v
            }
            this.getInfo()
            this.getStaffList()
        },
        methods: {
            toPage(){
              let url = '@/maintain/carDetail.html?id='+this.info.vehicleId
                this.until.href(url)
            },
            async getStaffList(){
              this.staffList = await this.api.staffList()
            },
            async getInfo(){
                let myData = await this.api.serviceDetail(this.id)
                this.info = myData.worksheetVo
                this.info.assignTime = this.info.assignTime ? this.info.assignTime.split(' ')[0] : ''
            },
            dispatchConfirm(){
                let param = {
                    worksheetId:this.id,
                    serverId:this.staffId,
                    rmks:this.rmks
                }
                this.api.serviceUpd(param).then(()=>{
                    Toast('指派成功！')
                    setTimeout(()=>{
                        this.until.back()
                    },1500)
                })
            },
            dispatch(){
                this.dispatchShow = true
            },
            receipt(){
                console.log('receipt')
                // this.until.href('../home/index.html?cd=3&serviceCd=2')
                let param = {
                    servierId:this.userInfo.userId,
                    status:2,
                    id:this.id
                }
                this.api.serviceApply(param).then(res=>{
                    this.receiptShow = true
                    setTimeout(()=>{
                        this.until.href('@/maintain/index.html?cd=3&serviceCd=2')
                    },1500)
                })
            },

        }
    };
</script>

