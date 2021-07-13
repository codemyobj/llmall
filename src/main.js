import Vue from 'vue'
// 全局引入网络请求
import './network/request'
// 全局引入vant
import vant from 'vant'
import 'vant/lib/index.css'
// 全局引入样式
import './assets/css/base.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入懒加载
import { Lazyload } from 'vant'

Vue.config.productionTip = false

Vue.use(vant)

// 使用懒加载
Vue.use(Lazyload, {
  // 未加载的占位图
  loading: require('@/assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')