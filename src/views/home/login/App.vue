<template>
  <div class="content">
    <img class="logo" :src="logo" />
    <div class="loginBox">
      <div class="loginItem">
        <img :src="zhanghao" />
        <input placeholder="请输入手机号码" v-model="account" />
      </div>
      <div class="loginItem">
        <img :src="mima" />
        <input placeholder="请输入密码" v-model="password" type="password" />
      </div>
      <div class="btn" @click="loginTo">确认</div>
    </div>
    <div class="bottomText">技术支持：宁波聚联科技有限公司</div>
  </div>
</template>

<script>
import md from "assets/js/md5";
import * as dd from "dingtalk-jsapi";
import logo from "../../../assets/img/登录-logo.png";
import zhanghao from "../../../assets/img/账号.png";
import mima from "../../../assets/img/密码.png";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      logo,
      zhanghao,
      mima,
      account: "",
      password: "",
      code: "",
    };
  },
  mounted() {
	
  },
  methods: {
    topage(url) {
      this.until.replace(url);
    },
    login() {
      let obj = {
        code: "c1eb1508249132b6a9a4d87cce062f84",
        tenantId: "000000",
        account: this.account,
        password: md.hex_md5(this.password),
      };
      this.api.login2(obj).then((res) => {
        console.log(res);
        this.until.loSave("token", res.access_token);
        this.until.loSave("userInfo", res);
        this.until.href("/views/home/index.html");
      });
    },
    loginTo() {
      let that = this;
      dd.ready(function () {
        window.localStorage.setItem("codeInfoDDD", "已进入");
        dd.runtime.permission.requestAuthCode({
          //获取code
          corpId: "dingc35f50400f19d66d", // 企业id
          onSuccess: (info) => {
            console.log("获取钉钉code");
            console.log(info);
            window.localStorage.setItem("codeInfoDDD", info);
            that.code = info.code;
            let obj = {
              code: that.code,
              tenantId: "000000",
              account: that.account,
              password: md.hex_md5(that.password),
            };
            console.log("params", obj);
            that.api.login2(obj).then((res) => {
              Toast("登录成功");
			  // console.log('111 '+res.access_token);
         let token=res.token_type + " " + res.access_token;
              token = token.replace(/\"/g, "");
              that.until.loSave("token",token);
              that.until.loSave("userInfo", res);
              that.until.replace("/views/home/index.html");
            });
          },
          onFail: (err) => {
              Toast(err);
            console.log("获取钉钉code失败");
            window.localStorage.setItem("codeInfoDDD", err);
            console.log(err);
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  background-color: #f1f3f2;
  padding: 0.3rem;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;

  .logo {
    width: 2.75rem;
    height: 0.72rem;
    position: absolute;
    top: 0.92rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .loginBox {
    margin-top: 3rem;
    background-color: #fff;
    padding: 1rem 0.8rem;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.12rem;

    .loginItem {
      width: 5.69rem;
      padding: 0.2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 0.8rem;

      img {
        width: 0.23rem;
        height: 0.25rem;
      }

      input {
        border: 0;
        margin-left: 0.32rem;
      }
    }

    .btn {
      width: 5.7rem;
      height: 0.8rem;
      background: #ca093a;
      border-radius: 0.1rem;
      text-align: center;
      line-height: 0.8rem;
      font-size: 0.3rem;
      color: #ffffff;
    }
  }

  .bottomText {
    width: 100%;
    text-align: center;
    font-size: 0.2rem;
    color: #666666;
    opacity: 0.8;
    margin-top: 3rem;
  }
}
</style>
