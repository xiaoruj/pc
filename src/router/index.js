/* 
路由器对象模块
*/
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store'
Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  console.log("push()", location, onComplete, onAbort);
  // this是路由器对象 $router
  // 如果调用push, 传递了成功或者失败的回调函数
  if (onComplete || onAbort) {
    originPush.call(this, location, onComplete, onAbort);
  } else {
    return originPush.call(this, location).catch((error) => {
      console.log("catch 到重复请求的error");
      return new Promise(() => {})
    })
  }
}

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete || onAbort) {
    originReplace.call(this, location, onComplete, onAbort);
  } else {
    return originReplace.call(this, location).catch(() => {
      console.log("catch error2")
      return new Promise(() => {})
    })
  }
}
const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(to, from, savedPosition){
    return{x: 0, y: 0}
  }
})
const checkPaths = ['/trade', '/ppay', '/center']
router.beforeEach((to, from, next) => {
  const targetPath = to.path
  const isCheckPath = checkPaths.some(path => targetPath.indexOf(path)===0)
  if(isCheckPath){
    if(store.state.user.userInfo.name){
      next()
    }else{
      next('/login?redirect=' + targetPath)
    }
  }else{
      next()
  }
})



export default router