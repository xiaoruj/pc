## 显示所有命令

Ctrl + Shift + p

## 在文件中查找

Ctrl + F

## 前后台交互 ajax

1. 下载 axios / nprogress npm install -S axios nprogress
2. 对 axios 进行二次封装(axios 本身就是对原生 ajax(xHR)的封装) 面试必说
   1.  配置通用的基础路径和超时: axios.create({baseURL, timeout})
   2.  显示请求进度条
   显示: 准备发请求前显示, 在请求拦截器中执行 NProgress.start()
   隐藏: 请求结束隐藏, 在响应拦截器成功/失败回调中 NProgress.done()
   3.  成功返回的数据不再是 response,  而直接是响应体数据 response.data
   响应拦截器成功的回调中: return response.data
   4.  统一处理请求错误,  具体请求也可以选择处理或不处理
   在响应拦截器失败的回调中: alert 提示错误信息, return Promise.reject(error)
3. 测试调用接口请求函数
   1). 出 404 的错误
   axios 请求配置的地址: /api/product/getBaseCategoryList'
   当前发请求所在的地址:　http://localhost:8080/
   最终 ajax 请求的地址: http://localhost:8080/api/product/getBaseCategoryList (没人处理)
   2). 解决办法 1
   配置 baseURL: http://182.92.128.115/api ==> 成功的前提是后台允许 ajax 跨域
   3). 使用代理服务器转发到目标接口地址 (使用代理解决 ajax 跨域)
   配置 baseURL: /api
   配置代理: vue.config.js 中
   devServer: {
   proxy: { // 配置代理
   '/api': { // 只处理以/api 开头的请求
   target: 'http://182.92.128.115', // 转发的目标地址
   changeOrigin: true //  支持跨域
   }
   }

## 使用 vuex

1. 下载 vuex npm install -S vuex
2. vuex 的基本使用
   store 对象: state, mutations, actions, getters
   配置 store 对象: 在 vm 中配置
3. vuex 多模块编程
   什么时候用? 当 vuex 管理的数据个数很多时
   好处: 每个功能模块的数据单独管理, 更方便, 更有扩展性
4. vuex 多模块编程的总 state 结构
   {
   user: {
   userInfo: {}
   },
   home: {
   baseCategoryList: []
   }
   }
5. vuex 与 api 交互
   异步 action: 调用 api 接口请求函数 ==> 成功之后 commit ===> 调用 mutation ==> 更新状态数据

## TypeNav 动态显示分类列表

1. 在 mounted()中分发请求数据的异步 action
   this.\$store.dispatch('getBaseCategoryList')
2. 利用 mapState()将 state 中的分类列表映射成计算属性
   mapState(['xxx']): 映射总 state 的直接属性 xxx 成为 xxx 计算属性
   mapState({xxx2: 'xxx'}): 映射总 state 的直接属性 xxx 成为 xxx2 计算属性
   mapState({categoryList: state => state.home.baseCategoryList}): 映射 home 子模块的 baseCategoryList 属性成为 categoryList 计算属性
   vuex 单模块, 计算属性名与 state 中对应的属性名一致的情况
   ...mapState(['baseCategoryList', 'xxx'])
   ...{
   baseCategoryList () {
   return this.$store.state['baseCategoryList']
        },
        xxx () {
          return this.$store.state['xxx']
   }  
    }
   vuex 单模块, 计算属性名与总 state 中对应的属性名不一样的情况
   ...mapState({
   categoryList: 'baseCategoryList',
   xxx2: 'xxx'
   })
   vuex 多模块
   不利用 mapState
   baseCategoryList () {
   return this.\$store.state.home.baseCategoryList
   }
   ...mapState({
   计算属性值由 vuex 内部调用此回调函数(传入总 state)得到返回值作为属性值
   state: store 的总状态
   categoryList: state => state.home.baseCategoryList
   })
