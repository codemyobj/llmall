import { Toast } from 'vant'
import {
  SET_TABBAR_SHOW,
  SET_CART_LIST,
  ADD_TO_CART,
  ADD_COUNT,
<<<<<<< HEAD
  CLEAR_CART_LIST
=======
  SET_LOADING
>>>>>>> category
} from './types'

export default {
  // 设置tabbar的展示和隐藏
  [SET_TABBAR_SHOW](state, bol) {
    state.tabBarShow = bol
  },
  // 给购物车赋值本地数据
  [SET_CART_LIST](state, data) {
    state.cartList = data
  },
  // 往购物车添加数据
  [ADD_TO_CART](state, data) {
    data.count = 1
    data.checked = false
    state.cartList.push(data)
    Toast({
      type: 'success',
      message: '加入购物车成功',
      forbidClick: true,
      duration: 1500
    })
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  //id相同的时候购物车叠加数量
  [ADD_COUNT](state, result) {
    result.count++
    Toast({
      type: 'success',
      message: `当前商品数量为${result.count}`,
      forbidClick: true,
      duration: 1500
    })
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
<<<<<<< HEAD
  [CLEAR_CART_LIST](state) {
    let result = state.cartList.filter(item => item.checked !== true)
    if (result.length === 0) {
      localStorage.removeItem('cartList')
      state.cartList = []
    } else {
      state.cartList = result
      localStorage.setItem('cartList', JSON.stringify(state.cartList))
    }
=======
  [SET_LOADING](state, bol) {
    state.isLoading = bol
>>>>>>> category
  }
}