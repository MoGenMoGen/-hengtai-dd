// require ('assets/css/index.less');
// require ('assets/css/common.css');
import Vant from 'vant';
import 'vant/lib/index.css';


require('../css/reset.css');
require('../css/help.css');
require('../css/mobile.less');
require('assets/css/project.less');
import 'assets/js/ScreenAdaptive.js';  //这个很重要，没了样式都错乱了


// import "babel-polyfill";// 解决 IE11 Promise对象未定义
// import axios from 'axios';
// import './vueFilter';  	//全局过滤器
import { until, reg, hostUrl } from 'assets/js/until'
// import {msg,confirm,loading} from 'hero'
// import 'assets/js/wconfig.js';
// import './iconfont'  //字体库
// import './wconfig.js'
import query from './query'
import pinyin from './pinyin'
// import 'assets/js/Ios';
// import 'assets/js/WebViewJavascriptBridge';

// import EXIF  from 'exif-js';  //获取图片信息，如果上传的图片有旋转则调整过来
import lrz from 'lrz'
// import Vconsole from 'vconsole'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { api,post } from './api';
export default {
  install(Vue) {
    Vue.prototype.api = new api();
      Vue.prototype.$post = post;
      // Vue.prototype.hostUrl=hostUrl
    // Vue.prototype.Vconsole = new Vconsole()
    // Vue.prototype.EXIF  = EXIF;
    // Vue.prototype.mint  = mint;
    // Vue.prototype.axios = axios;
    Vue.prototype.until = new until();
    Vue.prototype.reg = new reg();
    Vue.prototype.lrz = lrz;
    Vue.use(MintUI);
    Vue.use(Vant);
    // Vue.use(lrz);

    // Vue.use(msg);
    // Vue.use(confirm);
    // Vue.use(loading);
    Vue.prototype.query = query;
    Vue.prototype.PY = pinyin;

  }
}


