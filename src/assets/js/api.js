// const hostUrl = "http://hss.jiaxiangtech.com";
const hostUrl = "http://hsstest.jinkworld.com"
// const hostUrl = "http://u2768442w0.qicp.vip/";
// const hostUrl = "http://5anpucq.nat.ipyingshe.com";
// const token = 'yui3-sid-01b6df85-2af4-409a-b902-60e8ab0a9b47'
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui';
import { until} from '@/assets/js/until'
const until1=new until();
const token=until1.loGet("token")
// const token=localStorage.getItem('token')
Vue.prototype.axios = axios    //全局注册，使用方法为:this.$axios
//ajax请求listByDepart
function get(url, data, header, cache = false) {
    let headers = { ...header, ...{ "yui3-token": token } }
    let promise = new Promise((resolve, reject) => {
        axios.get(url, { params: data, headers }).then(res => {
       console.log(1111222,res);
            if (res.data.code == 0 || res.data.error_code == 0) {
                resolve(res.data)
            }
			else if(res.data.code == 400){
				window.location.replace("/static/wechat/views/profile/login.html")
			}
			 else {

                Toast(res.data.msg)
            }
        }).catch(err => {
            Toast(JSON.stringify(err))
        })
    });
    return promise;
}

function post(url, data, header) {

    // let headers = { ...header, ...{ "yui3-token": "yui3-sid-c70ea28b-485c-4a5f-bacd-a5b3ca7a45d4", 'Content-Type': 'application/json' } }


    let headers = { ...header, ...{ "yui3-token": token } }
    console.log(data)
    let promise = new Promise((resolve, reject) => {
        axios.post(url, data, { headers })
            .then(function (response) {

                if (response.data.code == 0 || response.status == 200) {
                    resolve(response.data);
                } else {
                    Toast(response.data.msg)
                }
            })
            .catch(function (error) {
                Toast(JSON.stringify(error))
            });
    });
    return promise;
}
function get2(url, data, header, cache = false) {
    let headers = { ...header, ...{ "yui3-token": token } }
    let promise = new Promise((resolve, reject) => {
        axios.get(url, { params: data, headers }).then(res => {

            resolve(res.data)

        }).catch(err => {
            Toast(JSON.stringify(err))
        })
    });
    return promise;
}
class api {

    //code登录 DD
    login(data) {
        // let header={
        //     'Content-Type': 'application/json',
        // }
        // return get2(hostUrl + '/general/access/ddLogin', { code: code }, '')
      let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
		return new Promise(resolve => {
		    get('/general/access/login', data,header).then(res => {
		        resolve(res)
		    })
		})
		
    }
    //绑定手机号 DD
    setTel(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        // return get(hostUrl + '/general/access/ddBindPhone', data, header)
        return get('/general/access/ddBindPhone', data, header)
    }
    //信息查询 DD
    infoList(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise(resolve => {
            get('/hss/customer/page?query=' + data, { reqType: 22 }, header).then(res => {
                resolve(res)
            })
        })
    }
    //客户详情 DD
    custDetail(id) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/customer/info/' + id, { reqType: 22 }, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //车辆详情 DD
    carDetail(id) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/vehicleCustomer/info/' + id, { reqType: 22 }, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //预约详情 DD
    appointDetail(id) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/appoint/info/' + id, { reqType: 22 }, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //预约跟进 DD
    appointFollow(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return post('/hss/appoint/upd', data, header)
    }
    //服务作业列表 DD
    servicelist(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/worksheet/page?query=' + data, { reqType: 22 }, header).then(res => {
                resolve(res)
            })

        })
    }
    //服务详情 DD
    serviceDetail(id) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/worksheet/info/' + id, '', header).then(res => {
                resolve(res.data)
            })

        })
    }
    //服务完成 DD
    serviceFinish(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }

        post('/hss/worksheet/upd', data, header).then(res => {
            Toast('操作成功！')
            setTimeout(() => {
                window.history.back();
            }, 1500)
        })

    }
    //跟进记录 DD
    followList(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/follow/page?query=' + data, { reqType: 22 }, header).then(res => {
                resolve(res)
            })

        })
    }
    //新建记录
    followAdd(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        post('/hss/follow/add', data, header).then(res => {
            Toast('操作成功！')
            setTimeout(() => {
                window.location.href = '../home/index.html?cd=2';
            }, 1500)
        })
    }
    //跟进详情 DD
    followDetail(id) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/follow/info/' + id, '', header).then(res => {
                resolve(res.data)
            })

        })
    }
    //跟进修改 DD
    followUpd(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }

        return post('/hss/followItem/upd', data, header)


    }
    //根据客户Id及车id获取一个id，然后再根据这个Id获取跟进列表
    getFollowId(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/follow/infoNoItemByVIdCId', data, header).then(res => {
                resolve(res.data.followVo.id)
            })

        })
    }
    //派单 DD
    serviceUpd(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return get('/hss/worksheet/assignWorksheet', data, header)
    }
    //接单DD
    serviceApply(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return post('/hss/worksheet/upd', data, header)
    }
    //员工列表 DD
    staffList() {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/sys/user/listByDepart', { reqType: 22 }, header).then(res => {
                resolve(res.data.list)
            })

        })
    }
    //整项分类
    classify() {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise(resolve => {
            get("/hss/prepare/list", '', header).then(res => {
                resolve(res.data.list)
            })
        })
    }

    // 接待
    receptionList(data) {
        return new Promise(resolve => {
            post("/hss/wxCheckin/page", data, {}).then(res => {
                resolve(res.data)
            })
        })
    }

    // post图片上传
    upnewimg(data) {
        console.log('post上传');
        return new Promise((resolve, reject) => {
            post('/general/oss/upload', data, { "Content-Type": "multipart/form-data" }).then(res => {
                resolve(res)
            })
                .catch(err => {
                    reject(err)

                })

        })
    }
    //上传
    upImg(e) {
        let $q = new Promise((resolve, reject) => {
            let blob = e.target.files;
            Object.keys(blob).forEach((o) => {
                if (!/^image/.test(blob[o].type)) {
                    delete blob[o];
                }
            });
            if (blob.length < 1) {
                return reject('请选择图片文件');
            }
            let param = new FormData();
            Object.keys(blob).forEach((o) => {
                let obj = blob[o];
                param.append('files', obj);
            })
            this.upLoad(param).then(res => {
                console.log(res)
                resolve(res.data)

            })
        });
        return $q;
    }
    //上传
    upImg2(blob) {
        let $q = new Promise((resolve, reject) => {

            let param = new FormData();
            let obj = blob;
            param.append('files', obj);
            this.upLoad(param).then(res => {
                console.log(res)
                resolve(res.data)

            })
        });
        return $q;
    }
    //上传
    upImg3(formData) {
        console.log('上传')
        let $q = new Promise((resolve, reject) => {
            console.log(formData)
            // let param = new FormData();
            // let obj = blob;
            // param.append('files',obj);
            this.upLoad(formData).then(res => {
                console.log(res)
                resolve(res.data)

            })
        });
        return $q;
    }
    //获取买车需求订单列表
    getWxBusinessBuy(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessBuy/pageList', data, header).then(res => {
                console.log(res);
                resolve(res)

            })

        })
    }
    //获取买车需求订单详情
    getWxBusinessBuyDetail(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessBuy/info/' + data, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //获取卖车需求订单列表
    getWxBusinessSell(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessSell/pageList', data, header).then(res => {
                resolve(res)
            })

        })
    }
    //获取卖车需求订单详情
    getWxBusinessSellDetail(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessSell/info/' + data, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //获取意愿登记表
    getWxIntentionLevel(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxIntentionLevel/list', data, header).then(res => {
                resolve(res.data.list)
            })

        })

    }
    //买车买车回复提交
    postWxCommunicate(data) {
        return new Promise(resolve => {
            post("/hss/wxCommunicate/add", data, {}).then(res => {
                resolve(res.data)
            })
        })
    }
    //获取买车需求订单列表
    getWxBusinessBuy(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessBuy/pageList', data, header).then(res => {
                console.log(res);
                resolve(res)

            })

        })
    }
    //获取买车需求订单详情
    getWxBusinessBuyDetail(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessBuy/info/' + data, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //获取卖车需求订单列表
    getWxBusinessSell(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxBusinessSell/pageList', data, header).then(res => {
                resolve(res)
            })

        })
    }

    // 获取客户管理列表(含搜索)
    getcustomerList(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCustomer/pageList', data, {}).then(res => {
                resolve(res)
            })

        })
    }

    // 获取客户详情
    getcustomerDetail(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCustomer/info/' + data, {}, {}).then(res => {
                resolve(res.data)
            })

        })
    }
    // 轨迹
    gettrail(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxTrajectory/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 跟进详情
    followDetail(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxFollowup/info/' + data).then(res => {
                resolve(res)
            })

        })
    }

    // 获取购买类型列表
    getBuysTypeList(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 获取客流性质列表
    getFlowtypeList(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 获取门店列表
    getstoreList(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 获取销售顾问列表
    getsalersList(data) {
        return new Promise((resolve, reject) => {
            get('/sys/user/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 获取省市区列表
    getmapList(data) {
        return new Promise((resolve, reject) => {
            get('/sys/region/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }
    // 获取客户来源列表
    getCustomerSource(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }

    //获取留言列表
    getWxCommunicate(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommunicate/page?query=' + data).then(res => {
                resolve(res)
            })

        })
    }
    //获取接待列表

    getWxCheckin(data) {
        return new Promise((resolve, reject) => {
            let header = {
                // 'Content-Type': 'application/json',
                // 'yui3-token': localStorage.getItem('token')
            }
            get('/hss/wxCheckin/pageList', data, header).then(res => {
                resolve(res)
            })

        })
    }
    //获取接待详情
    getWxCheckinDetail(data) {
        return new Promise((resolve, reject) => {
            let header = {
                // 'Content-Type': 'application/json',
                // 'yui3-token': localStorage.getItem('token')
            }
            get('/hss/wxCheckin/info/' + data, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //获取客户性质列表
    getCustomerCommonfield(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }

    //获取客户区域列表
    getCustomerArea(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }

    // 获取价格区间
    getpriceList(data){
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/page?query=' + data).then(res => {
                resolve(res.data.list)
            })

        })
    }

    // 获取八个常用车标
    getCommonCarIcon() {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/mostbrand').then(res => {
                resolve(res.data)
            })

        })
    }
    // 获取老客户介绍人
    getOldCustomer(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCheckin/listOldUser?name=' + data).then(res => {
                resolve(res.data)
            })

        })
    }
    //提交新增接待
    postWxCheckin(data) {
        return new Promise(resolve => {
            post("/hss/wxCheckin/add", data, {}).then(res => {
                resolve(res.data)
            })
        })
    }

    //获取留言列表
    getWxCommunicate(data) {
        return new Promise((resolve, reject) => {
            get('/hss/wxCommunicate/page?query=' + data).then(res => {
                resolve(res)
            })

        })
    }
    //获取接待列表

    getWxCheckin(data) {
        return new Promise((resolve, reject) => {
            let header = {
                // 'Content-Type': 'application/json',
                // 'yui3-token': localStorage.getItem('token')
            }
            get('/hss/wxCheckin/pageList', data, header).then(res => {
                resolve(res)
            })

        })
    }
    //获取接待详情
    getWxCheckinDetail(data) {
        return new Promise((resolve, reject) => {
            let header = {
                // 'Content-Type': 'application/json',
                // 'yui3-token': localStorage.getItem('token')
            }
            get('/hss/wxCheckin/info/' + data, header).then(res => {
                resolve(res.data)
            })

        })
    }

    //提交新增接待
    postWxCheckin(data) {
        return new Promise(resolve => {
            post("/hss/wxCheckin/add", data, {}).then(res => {
                resolve(res.data)
            })
        })
    }
    //获取个人信息
    getPersonInformation(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/sys/user/getPerson', data, header).then(res => {
                resolve(res.data)
            })

        })
    }
    //提交修改个人修改信息
    postUpdPerson(data) {
        return new Promise(resolve => {
            post("/sys/user/updPerson", data, {}).then(res => {
                resolve(res.data)
            })
        })
    }
    //获取关于我们信息
    getAboutUs(data) {
        return new Promise((resolve, reject) => {
            get('/sys/show/page?query=' + data).then(res => {
                resolve(res.data)
            })

        })
    }

	 
		//使用token
		getWxlogin(data) {
		    let header = {
		        // 'Content-Type': 'application/json',
		        // 'yui3-token': localStorage.getItem('token')
		    }
		    return new Promise((resolve, reject) => {
		        get('/general/access/wxlogin' , data, header).then(res => {
					
		            resolve(res)
		        })
			
		    })
		}
		//退出登录
		postUpdPerson() {
		    return new Promise(resolve => {
		        post("/sys/user/updPerson",{}, {}).then(res => {
					
		            resolve(res.data)
				
					
		        })
		    })
		}
 
    //获取品牌列表
    // getWxCommonfield(data) {
    //     let header = {
    //         'Content-Type': 'application/json',
    //         'yui3-token': localStorage.getItem('token')
    //     }
    //     return new Promise((resolve, reject) => {
    //         get('/hss/wxCommonfield/brand/' + data, header).then(res => {
    //             resolve(res.result)
    //         })

    //     })
    // }
    //搜索品牌列表
    searchbrandlist(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/search?firstLetter='+data, header).then(res => {
                resolve(res.data)
            })

        })
    }

    //获取车系列表
    getCarSeries(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/series', data, header).then(res => {
                resolve(res.result)
            })

        })
    }
    //获取车型列表
    getCarModels(data) {
        let header = {
            // 'Content-Type': 'application/json',
            // 'yui3-token': localStorage.getItem('token')
        }
        return new Promise((resolve, reject) => {
            get('/hss/wxCommonfield/models' , data, header).then(res => {
                resolve(res)
            })

        })
    }

}

export { api, hostUrl };
