import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../view/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('../view/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('../view/cart/Cart.vue')
  },
  {
    path: '/profile',
    component: () => import('../view/profile/Profile.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router