import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router' //引入路由
import index from '@/store' //引入VUEX
import '@/styles/common.scss' // 引入公共样式
import 'element-ui/lib/theme-chalk/index.css';
import { Message, Carousel, CarouselItem, Image, } from 'element-ui'

Message.install = function (Vue, ) {
  Vue.prototype.$message = Message
}
Vue.use(Message)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)

// VUE启动时产生生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store: index,
  render: h => h(App)
}).$mount('#app')
