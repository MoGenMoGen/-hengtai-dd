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
        .main{
            flex: 1;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
        }
        >button{
            background: @color;
            color: #ffffff;
            font-size: 1.1em;
            height: 0.8rem;
            line-height: 0.8rem;
        }

        .info{
            /*background: #ffffff;*/
            /*margin-bottom: 0.2rem;*/
            border-top: 1px solid @borderColor;
            padding-top: 1rem;
            p{
                line-height: 1rem;
                span{
                    display: inline-block;
                    width: 2.3rem;
                }
            }
            >div{
                padding: 0.25rem 0.5rem;
            }
        }

    }
</style>

<template>
    <div id="container">
        <div class="main">
            <div class="info">
                <div>
                    <!--type: "1:年检，2:续保，3:精洗，4:保养"-->

                    <p v-if="info.type==1">
                        <span>预约服务：</span>年检服务
                    </p>
                    <p v-if="info.type==2">
                        <span>预约服务：</span>续保服务
                    </p>
                    <p v-if="info.type==3">
                        <span>预约服务：</span>精洗服务
                    </p>
                    <p v-if="info.type==4">
                        <span>预约服务：</span>保养服务
                    </p>
                    <p>
                        <span>客服名称：</span>{{info.linkMan}}
                    </p>
                    <p>
                        <span>联系电话：</span>{{info.linkPhone}}
                    </p>
                    <p>
                        <span>车牌号码：</span>{{info.vehicleNum}}
                    </p>

                    <p>
                        <span>预约接车时间：</span>{{info.appointTime}}
                    </p>
                    <p>
                        <span>备注 ：</span>{{info.rmks}}
                    </p>
                </div>

            </div>
        </div>
        <button @click="submitAppoint" v-if="info.hasFollow==0">跟进</button>
        <button v-if="info.hasFollow==1">已跟进</button>
    </div>
</template>

<script>
    import * as dd from 'dingtalk-jsapi';
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {
                id:'',
                info:{},
                serviceRecords:{}
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            this.login()
            this.id = this.until.getQueryString('id')
        },
        methods: {
            async getInfo(){
                let myData = await this.api.appointDetail(this.id)
                this.info = myData
            },
            submitAppoint(){
                let param = {
                    id:this.id,
                    hasFollow:1
                }
                this.api.appointFollow(param).then(()=>{
                    Toast('操作成功！')
                    this.info.hasFollow = 1
                })

            },
            //code登录
            codeLogin(){
                this.api.login(this.code).then(res=>{
                    console.log(res)
                    if(res.code=='0'){   // 如果是表示绑定过，不需要再绑定
                        this.until.loSave('token',res.data.token)
                        this.until.loSave('userInfo',JSON.stringify(res.data.userInfo))
                        this.getInfo()
                    }else {
                        Toast(JSON.stringify(res))
                    }
                })
            },
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

        }
    };
</script>

