import Vue from 'vue';
import init from 'assets/js/init.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(init);
Vue.use(ElementUI);
import App from './App';
new Vue({
  render: h => h(App)
}).$mount('#container')