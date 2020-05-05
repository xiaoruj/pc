## 显示所有命令
Ctrl + Shift + p
## 在文件中查找
Ctrl  + F

## Home组件(静态)
    1).TypeNav: 3级分类导航
    2).ListContainer: 包含轮播列表的容器
    3).TodayRecommend: 今日推荐
    4).Rank: 排行
    5).Like: 猜你喜欢
    6).Floor: 楼层
    7).Brand: 品牌
    注意: 图片/删除暂时不用的结构

## 使用postman测试接口
    1). 启动 ===> 选择登陆==> cancel ===> 进入主界面
    2). 输入url/参数进行请求测试
    3). 注意post请求体参数需要指定为json格式
    4). 保存测试接口 ==> 后面可以反复使用

## 前后台交互ajax
    1). 下载axios / nprogress
    2). 对axios进行二次封装(axios本身就是对原生ajax(xHR)的封装)   面试必说
        1. 配置通用的基础路径和超时: axios.create({baseURL, timeout})
        2. 显示请求进度条
            显示: 准备发请求前显示, 在请求拦截器中执行NProgress.start()
            隐藏: 请求结束隐藏, 在响应拦截器成功/失败回调中NProgress.done()
        3. 成功返回的数据不再是response, 而直接是响应体数据response.data
            响应拦截器成功的回调中: return response.data
        4. 统一处理请求错误, 具体请求也可以选择处理或不处理
            在响应拦截器失败的回调中: alert提示错误信息, return Promise.reject(error)
    3). 测试调用接口请求函数
        1). 出404的错误
            axios请求配置的地址: /api/product/getBaseCategoryList'
            当前发请求所在的地址:　http://localhost:8080/
            最终ajax请求的地址: http://localhost:8080/api/product/getBaseCategoryList (没人处理)
        2). 解决办法1
            配置baseURL: http://182.92.128.115/api     ==> 成功的前提是后台允许ajax跨域
        3). 使用代理服务器转发到目标接口地址 (使用代理解决ajax跨域)
            配置baseURL: /api
            配置代理: vue.config.js中
                devServer: {
                    proxy: { // 配置代理
                    '/api': { // 只处理以/api开头的请求
                        target: 'http://182.92.128.115', // 转发的目标地址
                        changeOrigin: true // 支持跨域
                    }
                }
