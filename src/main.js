import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Bmob from "hydrogen-js-sdk";
import { routes } from './routers'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueRouter)

// 初始化
Bmob.initialize("bb26fd0b553e2765fe5c0bb3e54eafe2","76b3bdc8f80b4150dd7d933cf179978a");
// 挂载到全局使用
Vue.prototype.Bmob = Bmob


//创建路由
const router = new VueRouter({
    //routes : routes, 普通语法
    routes, // ES6语法
    mode:'history',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
