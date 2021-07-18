export default {
  setCateGoryData({ state, commit }, data) {
    let list = JSON.parse(localStorage.getItem('cartList')) || []

    if (list) {
      state.cartList = list
      //find 返回的是item
      let result = state.cartList.find(item =>
        item.id === data.id)
      //利用action分发多个commit事件用于调试
      if (result) {
        commit('addCount', result)
      } else {
        commit('addToCart', data)
      }
    } else {
      commit('addToCart', data)
    }
  }
}