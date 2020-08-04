// 引入组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  // 路由的匹配路径匹配模式
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  //
})

export default router
