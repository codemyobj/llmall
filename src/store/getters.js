export default {
  tabBarShow: state => state.tabBarShow,
  cartList: state => state.cartList,
  // 映射请求加载
  isLoading: state => state.isLoading,
  cartListLength: state => state.cartList.length,
  isShouCang: state => state.isShouCang
}