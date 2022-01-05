import Vue from 'vue';
import init from 'assets/js/init.js'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(init);
import App from './App';
Vue.use(ElementUI);
import { PullRefresh } from "vant";
Vue.use(PullRefresh);
new Vue({
  render: h => h(App)
}).$mount('#container')