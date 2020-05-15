import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav' 
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import './mock/mockServer'
import 'swiper/css/swiper.min.css'
import './validate'
import * as API from '@/api'
Vue.prototype.$API = API
Vue.config.productionTip = false // 去掉不是生产环境的提示
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  // el: '#app'
  render: h => h(App), // 将App组件的对象界面渲染到页面上
  router, // 配置路由器
  store,
}).$mount('#app')

