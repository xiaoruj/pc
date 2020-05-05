import Vue from 'vue'
// import App from './App.vue'
import App from '@/App'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false // 去掉不是生产环境的提示
Vue.component('TypeNav', TypeNav)
new Vue({
  // el: '#app'
  render: h => h(App), // 将App组件的对象界面渲染到页面上
  router, // 配置路由器
  store,
}).$mount('#app')

