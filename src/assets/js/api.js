
const hostUrl = "http://u2768442w0.qicp.vip";
// const hostUrl = "http://hss.jiaxiangtech.com";
import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'mint-ui';
Vue.prototype.axios = axios    //全局注册，使用方法为:this.$axios
//ajax请求listByDepart
function get(url, data, header, cache = false) {
    let newurl = '/api' + url
    // let newurl = hostUrl+ url
    // let headers = { ...header, ...{ "yui3-token": "yui3-sid-ba372dba-0e61-42e9-b296-eefff719a344", 'Content-Type': 'application/json' } }
    let headers = { ...header, ...{ "yui3-token": "yui3-sid-b45f988b-ad0c-48b4-8911-b343742a7f55", 'Content-Type': 'application/json' } }
    let promise = new Promise((resolve, reject) => {
        axios.get(newurl, { params: data, headers }).then(res => {

            if (res.data.code == 0) {
                resolve(res.data)
            } else {
                Toast(res.data.msg)
            }
        }).catch(err => {
            Toast(JSON.stringify(err))
        })
    });
    return promise;
}

function post(url, data, header) {
    let newurl = '/api' + url
    let headers = { ...header, ...{ "yui3-token": "yui3-sid-b45f988b-ad0c-48b4-8911-b343742a7f55", 'Content-Type': 'application/json' } }


    console.log(data)
    let promise = new Promise((resolve, reject) => {
        axios.post(newurl, data, { headers })
            .then(function (response) {
                if (response.data.code == 0) {
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
    let newurl = '/api' + url
    let headers = { ...header, ...{ "yui3-token": "yui3-sid-ba372dba-0e61-42e9-b296-eefff719a344", 'Content-Type': 'application/json' } }


    let promise = new Promise((resolve, reject) => {
        axios.get(newurl, { params: data, headers }).then(res => {

            resolve(res.data)

        }).catch(err => {
            Toast(JSON.stringify(err))
        })
    });
    return promise;
}
class api {

    //code登录 DD
    login(code) {
        // let header={
        //     'Content-Type': 'application/json',
        // }
        // return get2(hostUrl + '/general/access/ddLogin', { code: code }, '')

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
            get( '/hss/vehicleCustomer/info/' + id, { reqType: 22 }, header).then(res => {
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
        post( '/hss/follow/add', data, header).then(res => {
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
    receptionList(data){
        return new Promise(resolve => {
            post("/hss/wxCheckin/page", data, {}).then(res => {
                resolve(res.data)
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
}

export { api, hostUrl };