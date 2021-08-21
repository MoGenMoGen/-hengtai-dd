import Vue from 'vue';
import init from 'assets/js/init.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Cascader } from 'vant';

Vue.use(Cascader);
Vue.use(init);
import App from './App';
Vue.use(ElementUI);
new Vue({
  render: h => h(App)
}).$mount('#container')