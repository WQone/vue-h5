import 'lib-flexible/flexible';
import Vue from 'vue';
import 'vant/lib/index.css';
import App from './App';
import router from './router';
import store from './store';
import './vant-ui';
import './api/mock'; // 添加mockjs拦截请求，模拟返回服务器数据

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
