/* 
所有路由配置的数组
*/
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'


import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
  {
    path: '/',
    component: Home
  },
  {
    name: 'search',  // 是当前路由的标识名称
    path: '/search/:keyword?',
    component: Search,
    // 将params参数和query参数映射成属性传入路由组件
    props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
  },
  {
    name: 'detail',  // 是当前路由的标识名称
    path: '/detail/:id',
    component: Detail,
  },


  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true
    }
  },
]