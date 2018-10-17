// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';   //引入iview
import 'iview/dist/styles/iview.css';    //引入iview的一些css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios';

const host = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:8080/lot/' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
const instance = axios.create({
  baseURL: host
})
 
Vue.prototype.$axios = instance
Vue.prototype.$echarts = echarts 
Vue.prototype.baseURL = process.env.API_ROOT;

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
