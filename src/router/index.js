import Vue from 'vue'
import VueRouter from 'vue-router'


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//获取原型对象上的replace函数
const originalReplace = VueRouter.prototype.replace
//修改原型对象中的replace方法
VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue')
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router