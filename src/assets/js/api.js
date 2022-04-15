// const hostUrl = "http://hss.jiaxiangtech.com";
// const hostUrl = "http://hsstest.jinkworld.com"
const hostUrl = "http://htweb2.jinkworld.com:81"

// const hostUrl = "http://pj.xiaomy.net"


// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjI4MDQ1MiIsInVzZXJfaWQiOiIxMTIzNTk4ODIxNzM4Njc1MjAxIiwicm9sZV9pZCI6IjExMjM1OTg4MTY3Mzg2NzUyMDEiLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsImRldGFpbCI6eyJ0eXBlIjoid2ViIn0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImFjY291bnQiOiJhZG1pbiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQxNjEzNzk5LCJuYmYiOjE2NDE2MTAxOTl9.C6rC-FxG4_VQxJl-NFYGL34yNvi5EjCyQcX594Oc0L72fJmoItNQD_na2Ut2dwtkxtV0L_-FPgcz5jDYYg_tHA'
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQyMjE4MDU5LCJuYmYiOjE2NDE2MTMyNTl9.6gTr5e0NGZRE06mMM93HIE6h-Yt0rVLHEKS8BrycLp8nKAvEO2odGlbH1dzxT4pfE2I8Gslkwg_X4d7mqja_Pg"

// const token = localStorage.getItem('token')
// localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMjQ4NzY5MiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQyNTYwMTQ1LCJuYmYiOjE2NDE5NTUzNDV9.karewy2bqo18ynD6Avj_P9hymKd2w2HW-6v-hZdAPYubajN7j-8WwMuu8bvNpl_oDZFxRvnN1tz-jqqk-l1Myg')


// const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjI4MDQ1MiIsInVzZXJfaWQiOiIxMTIzNTk4ODIxNzM4Njc1MjAxIiwicm9sZV9pZCI6IjExMjM1OTg4MTY3Mzg2NzUyMDEiLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm5pY2tfbmFtZSI6IueuoeeQhuWRmCIsImRldGFpbCI6eyJ0eXBlIjoid2ViIn0sInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMjQ4NzY5MiIsImFjY291bnQiOiJhZG1pbiIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjQxODk0MTExLCJuYmYiOjE2NDE4OTA1MTF9.IYG-Hy4_zc8zRCQzUCYHwnzqUSsgme-JbD3rCP2OCKE0KqPBVTU6ldIpI7_FetsDwRcpbCYyCqhPq22ku6xdIA'

import Vue from 'vue'

import axios from 'axios'
// import { Toast } from 'mint-ui';
import { Toast } from 'vant';
import qs from 'qs';
import { until } from '@/assets/js/until'

const until1 = new until();
// const token = until1.loGet("token")
// const token=localStorage.getItem('token')
Vue.prototype.axios = axios    //全局注册，使用方法为:this.$axios

// const token =
// 	'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJub21hbCIsInBvc3RfaWQiOiIxNTA0MzU5Mjc3MDk1MTI5MDg5IiwidXNlcl9pZCI6IjE2MjA2NzA3NiIsInJvbGVfaWQiOiIxNDc5NDAwOTQ1MjcxNzk5ODEwIiwidXNlcl9uYW1lIjoi5YWr5pyIIiwibmlja19uYW1lIjoi5YWr5pyIIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIiLCJpc0NoYXJnZSI6MCwibmVlZFByb2oiOjF9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjI0ODc2ODIiLCJhY2NvdW50Ijoi5YWr5pyIIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE2NDg0MzUzMDYsIm5iZiI6MTY0ODQzMTcwNn0.gCwgNbJE09Kb02aCDfUst5PQ0NhLgVmWpYZFsJ9BX_WpPuHRIeryALSR3AFHjNbTqu9EMCYxekQR9z0dbhwkGQ'
// const userInfo = {
// 	access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJub21hbCIsInBvc3RfaWQiOiIxNTA0MzU5Mjc3MDk1MTI5MDg5IiwidXNlcl9pZCI6IjE2MjA2NzA3NiIsInJvbGVfaWQiOiIxNDc5NDAwOTQ1MjcxNzk5ODEwIiwidXNlcl9uYW1lIjoi5YWr5pyIIiwibmlja19uYW1lIjoi5YWr5pyIIiwiZGV0YWlsIjp7InR5cGUiOiJ3ZWIiLCJpc0NoYXJnZSI6MCwibmVlZFByb2oiOjF9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjI0ODc2ODIiLCJhY2NvdW50Ijoi5YWr5pyIIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE2NDg0MzUzMDYsIm5iZiI6MTY0ODQzMTcwNn0.gCwgNbJE09Kb02aCDfUst5PQ0NhLgVmWpYZFsJ9BX_WpPuHRIeryALSR3AFHjNbTqu9EMCYxekQR9z0dbhwkGQ",
// 	account: "八月",
// 	avatar: "/img/bg/img-logo.png",
// 	dept_id: "2487682",
// 	detail: { type: "web", isCharge: 0, needProj: 1 },
// 	isCharge: 0,
// 	needProj: 1,
// 	type: "web",
// 	expires_in: 3600,
// 	license: "powered by bladex",
// 	nick_name: "八月",
// 	oauth_id: "",
// 	post_id: "1504359277095129089",
// 	refresh_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTYyMDY3MDc2Iiwicm9sZV9pZCI6IjE0Nzk0MDA5NDUyNzE3OTk4MTAiLCJ0b2tlbl90eXBlIjoicmVmcmVzaF90b2tlbiIsImRlcHRfaWQiOiIyNDg3NjgyIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE2NDkwMzY1MDYsIm5iZiI6MTY0ODQzMTcwNn0.B0WIoJKKYTsxhmUJQOw4xZ4jeST1gGP33PB3CEC7lE2cPVQ3EPgN4l5bXyhoqnFKANg7_QSnAQk-AQfjZwQfcw",
// 	role_id: "1479400945271799810",
// 	role_name: "nomal",
// 	tenant_id: "000000",
// 	token_type: "bearer",
// 	user_id: "162067076",
// 	user_name: "八月"
// }

// until1.loSave("token", token)
// until1.loSave("userInfo", userInfo)
//ajax请求listByDepart
function get(url, data, header, cache = false) {

	let headers = { ...header, ...{ 'Cache-Control': 'no-cache' }, ...{ "Blade-Auth": until1.loGet("token") } }

	// let headers = { ...header, ...{ "Blade-Auth": 'bearer '+localStorage.getItem('token')}}
	// let headers = { ...header,...{'Cache-Control': 'no-cache'} ,...{ "Blade-Auth": 'bearer '+token } }
	let promise = new Promise((resolve, reject) => {
		axios.get(url, { params: data, headers }).then(res => {
			console.log(res.data)
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
					window.location.replace("/views/home/index.html")
				}, 1000);
			}
			else {
				Toast(err.response.data.msg)
			}
		})
	});
	return promise;
}

function post(url, data, header) {
	Toast.loading({
		message: '加载中...',
		forbidClick: true,
		duration: 0,
	});
	let headers = { ...header, ...{ 'Cache-Control': 'no-cache' }, ...{ "Blade-Auth": until1.loGet("token") } }
	// let headers = { ...header, ...{ "Blade-Auth": 'bearer ' + localStorage.getItem('token') } }
	// let headers = { ...header,...{'Cache-Control': 'no-cache'} ,...{ "Blade-Auth": 'bearer '+token } }
	let promise = new Promise((resolve, reject) => {
		axios.post(url, data, { headers })
			.then(function (response) {
				Toast.clear()
				console.log('then', response);
				if (response.data.code == 0 || response.status == 200) {
					if (response.data.error_description == '请绑定账号.') {
						Toast('请绑定账号.');
						setTimeout(() => {
							window.location.replace("/views/home/login.html")
						}, 1000);

					}
					resolve(response.data);
				}
				else if (url.indexOf('/blade-dingding/access/login') != -1 && response.data.error_code == 400) {
					Toast(response.data.error_description);
					resolve(response.data);
				} else {
					Toast(response.data.msg)
				}
			})
			.catch(function (error) {
				Toast.clear()
				console.log('catch', error);
				Toast(error.response.data.msg)
				if (error.response.data.msg.indexOf("工作时间重复") > -1) {
					console.log(22, error.response.data.msg);
					reject(error.response.data.msg)

				}
				if (error.response.data.code == 401) {
					Toast('请重新登录');
					setTimeout(() => {
						window.location.replace("/views/home/index.html")
					}, 1000);
				}
				else if (error.response.data.msg == '不存在的临时授权码') {
					setTimeout(() => {
						window.location.replace("/views/home/index.html")
					}, 1000);
				}
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
			post('/blade-dingding/access/login', qs.stringify(data), header).then(res => {
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
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/submit', data, header).then(res => {
				resolve(res)
			})
				.catch(err => {
					console.log(11, err);
					reject(err)
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
			get('/api/blade-proj/apis/projwhreport/getDuration', data).then(res => {
				resolve(res.data)
			})
		})
	}
	//部门看项目
	getDeptProjReport(projNm, workDate, isCharge, chargeDepts, current, size) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/deptProjReport?projNm=' + projNm + '&workDate=' + workDate + '&isCharge=' + isCharge + '&chargeDepts=' + chargeDepts + '&current=' + current + '&size=' + size).then(res => {
				resolve(res.data)
			})
		})
	}
	//部门看人员
	getDeptPersonReport(userNm, workDate, current, size, deptId, projId) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/deptPersonReport?userNm=' + userNm + '&workDate=' + workDate + '&current=' + current + '&size=' + size + '&deptId=' + deptId + '&projId=' + projId).then(res => {
				resolve(res.data)
			})
		})
	}
	//部门 人员看项目
	getPersonProjReport(projNm, workDate, userNm, deptNm, current, size) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/personProjReport?projNm=' + projNm + '&workDate=' + workDate + '&userNm=' + userNm + '&deptNm=' + deptNm + '&current=' + current + '&size=' + size).then(res => {
				resolve(res.data)
			})
		})
	}
	//直接看项目
	getProjBossReport(projNm, workDate, current, size, isCharge, chargeDepts) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/projBossReport?projNm=' + projNm + '&workDate=' + workDate + '&current=' + current + '&size=' + size + '&isCharge=' + isCharge + '&chargeDepts=' + chargeDepts).then(res => {
				resolve(res.data)
			})
		})
	}
	//直接看部门
	getDeptBossReport(deptNm, workDate, current, size, isCharge, chargeDepts) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/deptBossReport?deptNm=' + deptNm + '&workDate=' + workDate + '&current=' + current + '&size=' + size + '&isCharge=' + isCharge + '&chargeDepts=' + chargeDepts).then(res => {
				resolve(res.data)
			})
		})
	}
	//boss部门看项目
	getDeptProjBossReport(projNm, workDate, deptId, current, size) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/deptProjBossReport?projNm=' + projNm + '&workDate=' + workDate + '&deptId=' + deptId + '&current=' + current + '&size=' + size).then(res => {
				resolve(res.data)
			})
		})
	}
	//项目看部门
	getProjDeptReport(projId, deptNm, workDate, current, size, isCharge, chargeDepts) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/projDeptReport?projId=' + projId + '&deptNm=' + deptNm + '&workDate=' + workDate + '&current=' + current + '&size=' + size + '&isCharge=' + isCharge + '&chargeDepts=' + chargeDepts).then(res => {
				resolve(res.data)
			})
		})
	}
	//(Boss/领导)部门-->项目看人员
	getProjPersonReport(userNm, workDate, deptId, projId, current, size) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/projPersonReport?userNm=' + userNm + '&workDate=' + workDate + '&deptId=' + deptId + '&projId=' + projId + '&current=' + current + '&size=' + size).then(res => {
				resolve(res.data)
			})
		})
	}
	//Boss 部门人员看项目
	getPersonProjBossReport(projNm, workDate, userId, current, size, isCharge, chargeDepts) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/personProjBossReport?projNm=' + projNm + '&workDate=' + workDate + '&userId=' + userId + '&current=' + current + '&size=' + size + '&isCharge=' + isCharge + '&chargeDepts=' + chargeDepts).then(res => {
				resolve(res.data)
			})
		})
	}
	//Boss 部门人员看项目
	getPersonProjBossReport1(projNm, workDate, userId, current, size, deptId) {
		return new Promise((resolve, reject) => {
			post('/api/blade-proj/apis/projwhreport/personProjBossReport1?projNm=' + projNm + '&workDate=' + workDate + '&userId=' + userId + '&current=' + current + '&size=' + size + '&deptId=' + deptId).then(res => {
				resolve(res.data)
			})
		})
	}
	//工时填报-流程详情
	getProcess(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/getProcess?processInstanceId=' + data).then(res => {
				resolve(res.data)
			})
		})
	}
	//获取工时规则
	getContarticle() {
		return new Promise((resolve, reject) => {
			get('/api/blade-cont/contarticle/info').then(res => {
				resolve(res.data)
			})
		})
	}
	//获取轮播图
	getListAdsByPos() {
		return new Promise((resolve, reject) => {
			get('/api/open/advertinfo/listAdsByPos?posCd=ADPOS.001').then(res => {
				resolve(res.data)
			})
		})
	}
	//获取部门名称
	getDeptDetail(data) {
		return new Promise((resolve, reject) => {
			get('/api/blade-proj/apis/projwhreport/deptDetail?id=' + data).then(res => {
				resolve(res.data)
			})
		})
	}



}

export { api, post, hostUrl };
