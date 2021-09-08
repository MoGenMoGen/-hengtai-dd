<style lang="less" scoped>
    @import url('../../../assets/css/mobile.less');
    @import url('../../../assets/css/common.css');

    #container {
        width: 100%;
        min-height: 100%;
        background: @backgroundColor;
        /*display: flex;*/
        /*display: -webkit-flex;*/
        /*flex-direction: column;*/
        .main{
            /*flex: 1;*/
            /*overflow: auto;*/
            /*width: 100%;*/
            /*-webkit-overflow-scrolling: touch;*/
            border-top: 1px solid @borderColor;
            margin-bottom: 0.8rem;
            -webkit-overflow-scrolling: touch;
        }
        >button{
            z-index: 10;
            bottom: 0;
            position: fixed;
            width: 100%;
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
                    width: 2rem;
                }
            }

        }
        .record{
            border-top: 1px solid @borderColor;
        }
        .list{
            background: #ffffff;
            border-bottom: 1px solid @borderColor;
            padding: 0.25rem 0.3rem;
            line-height: 0.6rem;
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
    }
</style>

<template>
    <div id="container">
        <div class="main">
            <div class="info">
                <p>
                    <span>行驶证名：</span>{{info.linkMan}}
                </p>
                <p>
                    <span>联系电话：</span>{{info.linkManPhone}}
                </p>
                <p v-if="info.drivingLicenseGender==1">
                    <span>性别：</span>男
                </p>
                <p v-if="info.drivingLicenseGender==0">
                    <span>性别：</span>女
                </p>
                <p>
                    <span>民族：</span>{{info.drivingLicenseNation}}
                </p>
            </div>
            <div class="record">
                <follow-list  ref="follow"></follow-list>

            </div>
        </div>
        <button @click="toPage">新建跟进记录</button>
    </div>
</template>

<script>
    import followList from '@/components/followDetailList'
    export default {
        data() {
            return {
                id:'',
                info:{},
                list:[{}]
            };
        },
        components:{
            followList
        },
        created(){
        },
        mounted() {
            this.id = this.until.getQueryString('id')
            this.getInfo()
        },
        methods: {
            async getInfo(){
                let data = await this.api.followDetail(this.id)
                console.log(data)
                this.info = data.followVo
                this.list = data.followItemVoList
                this.list.forEach(item=>{
                    item.nextFollowDate = item.nextFollowDate ? item.nextFollowDate.split(' ')[0] : ''
                })
                this.$refs.follow.getList(JSON.stringify(this.list))
            },

            toPage(){
                let url = '/views/maintain/creat.html?info='+JSON.stringify(this.info)
                this.until.href(url)
            }
        }
    };
</script>

