/* 
所有路由配置的数组
*/
const Search = () => import('@/pages/Search')
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import store from '@/store'
import router from '@/router'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupBuy from '@/pages/Center/GroupBuy'
export default [
  {
    path: '/',
    component: () => import('@/pages/Home')
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
    path: '/detail/:skuId',
    component: Detail,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    beforeEnter(to, from, next){
      const skuNum = to.query.skuNum
      const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
      console.log('---', skuNum, skuInfo);
      if(skuNum && skuInfo){
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/shopcart',
    component: ShopCart,
  },
  {
    path: '/trade',
    component: Trade,
    beforeEnter(to, from, next){
      if(from.path==='/shopcart'){
        next()
      }else{
        next('/shopcart')
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    beforeEnter(to, from, next){
      if(from.path==='/trade'){
        next()
      }else{
        next('/trade')
      }
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    beforeEnter(to, from, next){
      if(from.path==='/pay'){
        next()
      }else{
        next('/pay')
      }
    }
  },
  {
    path: '/center',
    component: Center,
    children: [
      {
        // path: '/center/myorder',
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'groupbuy',
        component: GroupBuy,
      },

      {
        path: '',
        redirect: 'myorder'
      }
    ]
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