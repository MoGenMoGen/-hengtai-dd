// const hostUrl = "http://hss.jiaxiangtech.com";
// const hostUrl = "http://hsstest.jinkworld.com"
const hostUrl = "http://htweb.jinkworld.com"

// const hostUrl = "http://pj.xiaomy.net"


// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjI4MDQ1MiIsInVzZXJfaWQiOiIxMTIzNTk4ODIxNzM4Njc1MjAxIiwicm9sZV9pZCI6IjExMjM1OTg4MTY3Mzg2NzUyMDEiLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsImRldGFpbCI6eyJ0eXBlIjoid2ViIn0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImFjY291bnQiOiJhZG1pbiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQxNjEzNzk5LCJuYmYiOjE2NDE2MTAxOTl9.C6rC-FxG4_VQxJl-NFYGL34yNvi5EjCyQcX594Oc0L72fJmoItNQD_na2Ut2dwtkxtV0L_-FPgcz5jDYYg_tHA'
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQyMjE4MDU5LCJuYmYiOjE2NDE2MTMyNTl9.6gTr5e0NGZRE06mMM93HIE6h-Yt0rVLHEKS8BrycLp8nKAvEO2odGlbH1dzxT4pfE2I8Gslkwg_X4d7mqja_Pg"

// const token = localStorage.getItem('token')
// localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMjQ4NzY5MiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQyNTYwMTQ1LCJuYmYiOjE2NDE5NTUzNDV9.karewy2bqo18ynD6Avj_P9hymKd2w2HW-6v-hZdAPYubajN7j-8WwMuu8bvNpl_oDZFxRvnN1tz-jqqk-l1Myg')


// const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjI4MDQ1MiIsInVzZXJfaWQiOiIxMTIzNTk4ODIxNzM4Njc1MjAxIiwicm9sZV9pZCI6IjExMjM1OTg4MTY3Mzg2NzUyMDEiLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsImRldGFpbCI6eyJ0eXBlIjoid2ViIn0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMjQ4NzY5MiIsImFjY291bnQiOiJhZG1pbiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQxODk0MTExLCJuYmYiOjE2NDE4OTA1MTF9.IYG-Hy4_zc8zRCQzUCYHwnzqUSsgme-JbD3rCP2OCKE0KqPBVTU6ldIpI7_FetsDwRcpbCYyCqhPq22ku6xdIA'
const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTQ3OTI4Nzc1NDczMDYxMDY5MCIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAzIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMjQ4NzY5MiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQyNzQyNTUwLCJuYmYiOjE2NDIxMzc3NTB9.pFdHYNi1-ze49dE1x2gyPJPKINUTKF8w1_QYHuMV2hhXhyKNiAPmJC3TkDGP-R380WvIZeOXZHmH4rG5AjUH6w'

import Vue from 'vue'

import axios from 'axios'
import { Toast } from 'mint-ui';
import qs from 'qs';
import { until } from '@/assets/js/until'

const until1 = new until();
// const token = until1.loGet("token")
// const token=localStorage.getItem('token')
Vue.prototype.axios = axios    //全局注册，使用方法为:this.$axios
//ajax请求listByDepart
function get(url, data, header, cache = false) {

	// let headers = { ...header, ...{ "Blade-Auth": until1.loGet("token") } }

	// let headers = { ...header, ...{ "Blade-Auth": 'bearer '+localStorage.getItem('token') } }
	let headers = { ...header, ...{ "Blade-Auth": 'bearer '+token } }
	let promise = new Promise((resolve, reject) => {
		axios.get(url, { params: data, headers }).then(res => {
			if (res.data.code == 0 || res.data.error_code == 0 || res.data.code == 200) {
				resolve(res.data)
			}
			else if (res.data.code == 401) {
				window.location.replace("/views/home/login.html")
			}
			else {

				Toast(res.data.msg)
			}
		}).catch(err => {
			if (err.response.data.code == 401) {
				Toast('请重新登录');
				setTimeout(() => {
					window.location.replace("/views/home/login.html")
				}, 2000);
			}
			else
				Toast(JSON.stringify(err))
		})
	});
	return promise;
}

function post(url, data, header) {
	// let headers = { ...header, ...{ "yui3-token": "yui3-sid-c70ea28b-485c-4a5f-bacd-a5b3ca7a45d4", 'Content-Type': 'application/json' } }
	// let headers = { ...header, ...{ "Blade-Auth": until1.loGet("token") } }
	// let headers = { ...header, ...{ "Blade-Auth": 'bearer ' + localStorage.getItem('token') } }
	let headers = { ...header, ...{ "Blade-Auth": 'bearer '+token } }
	let promise = new Promise((resolve, reject) => {
		axios.post(url, data, { headers })
			.then(function (response) {
				console.log('then', response);
				if (response.data.code == 0 || response.status == 200) {
					if (response.data.error_description == '请绑定账号.') {
						Toast('请绑定账号.');
						setTimeout(() => {
							window.location.replace("/views/home/login.html")
						}, 2000);
					}
						resolve(response.data);
				}
				 else {
					Toast(response.data.msg)
				}
			})
			.catch(function (error) {
				console.log('catch', error);

				if (err.response.data.code == 401) {
					Toast('请重新登录');
					setTimeout(() => {
						window.location.replace("/views/home/login.html")
					}, 2000);
				}
				else
					Toast(JSON.stringify(err))

			});
	});
	return promise;
}
function get2(url, data, header, cache = false) {
	let headers = { ...header, ...{ "yui3-token": localStorage.getItem('token') } }
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
	//获取微信签名
	getSign(url) {
		let header = {
			// 'Content-Type': 'application/json',
			// 'yui3-token': localStorage.getItem('token')
		}
		// return get(hostUrl + '/general/access/ddBindPhone', data, header)

		return new Promise(resolve => {
			get('/wxMp/access/getJsTicket', { url: url }, header).then(res => {
				resolve(res.data)
			})
		})
	}
	//code登录 DD(后台已有账号)
	login(data) {
		let header = {
			'Authorization': 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
		return new Promise(resolve => {
			post('/blade-dingding/access/login2', qs.stringify(data), header).then(res => {
				resolve(res)
			})
		})
	}
	//code 登录
	login2(data) {
		let header = {
			'Authorization': 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
		return new Promise(resolve => {
			post('/blade-dingding/access/bindAndLogin', qs.stringify(data), header).then(res => {
				resolve(res)
			})
		})
	}
	//获取工时填报分页（我的）
	getProjwhreportList(data) {
		let header = {
			'Authorization': 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
			'Content-Type': 'application/x-www-form-urlencoded',
		}
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/mylist', data, header).then(res => {
				resolve(res.data)
			})
		})
	}
	//工时填报删除
	removeProjwhreport(data) {
		let header = {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
		return new Promise(resolve => {
			post('/api/blade-proj/apis/projwhreport/remove?ids=' + data, '', header).then(res => {
				resolve(res)
			})
		})
	}
	//工时填报提交
	ProjwhreportSubmit(data) {
		let header = {
			'Content-Type': 'application/json',
		}
		return new Promise(resolve => {
			post('/api/blade-proj/apis/projwhreport/submit', data, header).then(res => {
				resolve(res)
			})
		})
	}
	//工时填报详情
	getProjwhreportDetail(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/detail?id=' + data).then(res => {
				resolve(res.data)
			})
		})
	}
	// 数据处理后的详情
	getProjwhreportDetail2(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/info?id=' + data).then(res => {
				resolve(res.data)
			})
		})
	}
	//工作内容-列表
	getProjjobcontListAll() {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projjobcont/listAll').then(res => {
				resolve(res.data)
			})
		})
	}
	//获取项目分类列表
	getprojcatListAll(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projcat/listAll?parentId=' + data).then(res => {
				resolve(res.data)
			})
		})
	}
	//获取项目列表
	getprojListAll(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/proj/listAll', data).then(res => {
				resolve(res.data)
			})
		})
	}
	//获取指定日期某人的排班时间
	getPaiban(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/getPaiban?dateStr=' + data).then(res => {
				resolve(res.data)
			})
		})
	}
	//计算工作时长
	getDuration(data) {
	    return new Promise((resolve, reject) => {
	        get('/api/blade-proj/apis/projwhreport/getDuration',data).then(res => {
	            resolve(res.data)
	        })
	    })
	}
	//部门看项目
	getDeptProjReport(projNm,workDate,isCharge,chargeDepts,current,size) {
	    return new Promise((resolve, reject) => {
	        post('/api/blade-proj/apis/projwhreport/deptProjReport?projNm='+projNm+'&workDate='+workDate+'&isCharge='+isCharge+'&chargeDepts='+chargeDepts+'&current='+current+'&size='+size).then(res => {
	            resolve(res.data)
	        })
	    })
	}
	//boss看项目/部门
	getProjBossReport(deptNm,projNm,workDate,current,size) {
	    return new Promise((resolve, reject) => {
	        post('/api/blade-proj/apis/projwhreport/projBossReport?deptNm='+deptNm+'&projNm='+projNm+'&workDate='+workDate+'&current='+current+'&size='+size).then(res => {
	            resolve(res.data)
	        })
	    })
	}




}

export { api, post, hostUrl };
