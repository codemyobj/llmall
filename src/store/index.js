import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  // 默认tabBar显示
  tabBarShow: true,
  // 是否开启请求加载
  isLoading: true,
  // 购物车数据
  cartList: []
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  // 异步操作或者复杂的操作放在actions里
  actions
})

