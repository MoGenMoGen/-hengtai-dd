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
        .bigImg{
            background: rgba(0,0,0,0.35);
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 999;
            border-top: 1px solid @borderColor;
            display: flex;
            display: -webkit-flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            span{
                position: absolute;
                right: 0.5rem;
                top:0.5rem;
            }
            img{
                width: auto;
                height: auto;
                max-height: 100%;
                max-width: 100%;
            }
        }
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
        .title{
            padding: 0.25rem 0.3rem;
            padding-bottom: 0;
            span{
                display: inline-block;
                background: @color;
                height: 0.25rem;
                width: 0.1rem;
                margin-right: 0.2rem;
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
            p.red{
                padding-left: 1.7rem;
                padding-top: 0.1rem;
                color: #fe3001;
            }

        }

        .content{
            background: #ffffff;
            border-bottom: 1px solid @borderColor;
            line-height: 0.6rem;
            padding: 0.25rem 0.3rem;
            .toSign{
                display: flex;
                display: -webkit-flex;
                button{
                    flex: 1;
                    text-align: left;
                    img{
                        width: auto;
                        max-width: 100%;
                        height: auto;
                    }
                }
            }
            >p{
                display: flex;
                display: -webkit-flex;
                span{
                    width: 2.3rem;
                    display: inline-block;
                }
                input{
                    flex: 1;
                    border-bottom: 1px solid @borderColor;
                }
                textarea{
                    flex: 1;
                    border: 1px solid @borderColor;
                    height: 2rem;
                    padding: 0.2rem;
                }
                select{
                    flex: 1;
                    border: 1px solid @borderColor;
                    height: 0.6rem;
                    line-height: 0.6rem;
                }
            }
            .upImg{
                display: flex;
                display: -webkit-flex;
                >span{
                    width: 2.3rem;
                }
                .imgList{
                    flex: 1;
                    overflow: hidden;
                    .img{
                        float: left;
                        width: 32%;
                        margin-right: 1%;
                        border: 1px solid @borderColor;
                        box-sizing: border-box;
                        display: flex;
                        display: -webkit-flex;
                        align-items: center;
                        height: 2rem;
                        justify-content: center;
                        margin-top: 0.2rem;
                        img{
                            width: auto;
                            height: auto;
                            max-width: 100%;
                            max-height: 100%;
                        }

                    }
                }
            }

        }

        .add{
            width: 70%;
            display: block;
            text-align: center;
            height: 0.8rem;
            line-height: 0.8rem;
            background: @color;
            color: #ffffff;
            border-radius: 5px;
            margin: 0.4rem auto;
        }

    }
</style>

<template>
    <div id="container">
        <div class="bigImg" v-show="bigImgShow" >
            <span class="iconfont" @click="bigImgShow=false">&#xe673;</span>
            <img :src="currentImg"/>
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
                <p>
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
                <p>
                    <span>派单时间：</span>{{info.assignTime}}
                </p>
                <p>
                    <span>完成时间：</span>{{info.finallyTime}}
                </p>
            </div>
            <div class="situation">
                <p><span>维保项目：</span>{{info.project}}</p>
            </div>
            <div class="situation">
                <p><span>当前公里数（万）：</span>{{info.curMileage}}</p>
            </div>
            <div class="situation">
                <div class="title"><span></span>车辆情况</div>
                <div class="content">
                    <p><span>车辆外观：</span>{{info.vehicleOutRemark}}</p>
                    <div class="upImg">
                        <span></span>
                        <div class="imgList">
                            <p class="img" v-for="(item,index) in outImg" :key="index">
                                <img  @click="bigImg(item)" :src="item"/>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="content">
                    <p><span>车辆内部：</span>车辆内部</p>
                    <div class="upImg">
                        <span></span>
                        <div class="imgList">
                            <p class="img" v-for="(item,index) in inImg" :key="index">
                                <img  @click="bigImg(item)" :src="item"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <p><span>备注信息：</span>{{info.rmks?info.rmks:''}}</p>
                    <p class="red">*贵重物品已提醒客户带走</p>
                </div>
            </div>
            <div class="situation">
                <div class="title"><span></span>整备项</div>
                <div class="content" v-for="item in list" :key="item.id">
                    <p>
                        <span>整备分类：</span>
                       {{item.prepareName}}
                    </p>
                    <p><span>整备明细：</span>{{item.rmks}}</p>
                    <p><span>金额（成本）：</span>{{item.cost}}</p>
                    <p><span>金额（销售）：</span>{{item.price}}</p>
                </div>

                <div class="content">
                    <p><span>合计：</span></p>
                    <p><span>金额（成本）：</span>{{totalCost}}</p>
                    <p><span>金额（销售）：</span>{{totalPrice}}</p>
                </div>
                <div class="content">
                    <p><span>维保服务人：</span>{{info.servier}}</p>
                    <p><span>付款日期：</span>{{info.payTime}}</p>
                    <p><span>服务日期：</span>{{info.serviceTime}}</p>
                    <p class="toSign">
                        <span>客户签字：</span>
                        <button >
                            <img :src="info.sign"/>
                        </button>
                    </p>
                    <p v-if="info.appraiseLevel==1"><span>满意度评价：</span>一般满意</p>
                    <p v-if="info.appraiseLevel==2"><span>满意度评价：</span>满意</p>
                    <p v-if="info.appraiseLevel==3"><span>满意度评价：</span>非常满意</p>
                </div>
            </div>
            <div class="content">
                <p><span>完成时间：</span>{{info.finallyTime}}</p>
            </div>

        </div>
        <button @click="toEdit()">编辑</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bigImgShow:false,
                currentImg:'',
                id:'',
                outImg:[],
                inImg:[],
                list:[],
                info:{},
                totalCost:0,
                totalPrice:0,
            };
        },
        components:{
        },
        created(){
        },
        mounted() {
            this.id = this.until.getQueryString('id')
            this.getInfo()
        },
        methods: {
            toEdit(){
               let url = '/views/maintain/serviceDetail.html?id='+this.id
                this.until.href(url)
            },
            bigImg(item){
                this.currentImg = item
                this.bigImgShow = true
            },
            async getInfo(){
                let myData = await this.api.serviceDetail(this.id)
                this.info = myData.worksheetVo
                console.log(this.info)
                this.info.assignTime = this.info.assignTime ? this.info.assignTime.split(' ')[0] : ''
                this.info.finallyTime = this.info.finallyTime ? this.info.finallyTime.split(' ')[0] : ''
                this.inImg = this.info.vehicleInAttach ? this.info.vehicleInAttach.split(',') : []
                this.outImg = this.info.vehicleOutAttach ? this.info.vehicleOutAttach.split(',') : []
                myData.worksheetItemDtos.forEach(item=>{
                    this.list.push(item.worksheetItemVo)
                })

                this.totalPrice = this.list.reduce((p,n)=>{
                    return p+ parseFloat(n.price)
                },0)
                this.totalPrice = this.totalPrice.toFixed(2)

                this.totalCost = this.list.reduce((p,n)=>{
                    return p+ parseFloat(n.cost)
                },0)
                this.totalCost = this.totalCost.toFixed(2)
            },


        }
    };
</script>

