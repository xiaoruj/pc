## 事件控制二三级分类列表的显示与隐藏

    绑定事件:
        mouseenter: 绑定在分类项上
        mouseleave: 标题和分类列表的父div(不能包含水平导航)  ---> 做动态效果时可能需要修改结构
    状态数据: currentIndex: 需要显示子分类列表的一级分类的下标
    样式类名: item_on 显示子分类列表div

## 优化高频事件触发处理: 利用 lodash 进行函数节流处理

    问题: mouseenter事件频繁触发会导致分类列表更新卡的现象
    解决: 使用lodash的throttle函数进行节流处理, 限制更新的次数

## 节流与防抖

    1. 事件频繁触发可能造成的问题?
        1). 一些浏览器事件:window.onresize、window.mousemove等，触发的频率非常高，会造成浏览器性能问题
        2). 如果向后台发送请求，频繁触发，对服务器造成不必要的压力

    2. 如何限制事件处理函数频繁调用
        1). 函数节流
        2). 函数防抖

    3. 函数节流(throttle)
        1). 理解:
            在函数需要频繁触发时: 函数执行一次后，只有大于设定的执行时间后才会执行第二次
            适合多次事件按时间做平均分配触发 (触发少量几次)
        2). 场景：
            窗口调整（resize）
            页面滚动（scroll）
            DOM 元素的拖拽功能实现（mousemove）
            抢购疯狂点击（click）

    4. 函数防抖(debounce)
        1). 理解:
            在函数需要频繁触发时: 在规定时间内，只让最后一次生效，前面的不生效。
            适合多次事件一次响应的情况
        2). 场景：
            输入框实时搜索联想（keyup/input）

## 优化减小打包文件: 对 lodash 库实现按需引入

    import _ from 'lodash'  // 引入整体lodash  ==> 打包了没用的工具函数, 打包文件变大
    import throttle from 'lodash/throttle'  // 只引入我需要的工具函数   

## 解决快速移出后可能显示第一个分类的子分类列表的 bug

    在最后一个mouseenter事件延迟0.3m才执行更新的回调函数
    在这个0.3s之内可能已经移出去了

## 优化减少组件对象数量: 使用编程式导航代替声明式导航

    问题: 使用声明式导航跳转Search, 每个分类项都需要渲染一个RouterLink组件对象  ==> 显示缓慢
    解决: 使用编程式路由导航, 不用创建多个Routerlink组件对象 ===> 显示更快

## 优化事件处理效率: 利用事件委托

    问题: 每个分类都绑定了点击监听, 监听回调函数的数量就会非常多  ==> 效率不太高
    解决: 使用事件委托, 从n个点击监听变为1个点击监听 ==> 效率高些
    问题: 需要在点击回调中得到相应的分类数据?  ===> 利用标签的data自定义属性

## 利用标签 data 自定义属性携带动态数据

    在标签中指定自定义属性: <a data-categoryName="abc" data-category1Id="3">
    在事件回调函数中读取自定义属性数据: const {categoryname, category1id} = aEle.dataset

## 控制一级列表的显示与隐藏

    标识状态数据: isShowFirst
    在离开时: 如果当前不是首页隐藏 isShowFirst = false
    在进入时: 显示一级列表 isShowFirst = true

## 一级列表显示隐藏的过渡效果

    用<trasition name="xxx">包含显示隐藏的标签
    在特定类名下指定过渡样式
    在特定类名下指定隐藏时样式

## 优化请求执行的位置, 减少请求次数

    问题: 在首页与搜索页进行路由跳转时, 总会重新请求分类列表    没有必要, 只要一次就可以了
    原因: 首页和搜索页有各自的TypeNav标签对象, 跳转时都是重新创建的, 而我们是在mounted中发请求
    解决: 将dispatch发请求的代码放在App的mounted中执行

## 合并分类 query 参数与搜索的关键字 params 参数

    问题:
        根据分类搜索时, 会丢失搜索关键字params参数
        根据搜索关键字搜索时, 会丢失分类的query参数
    解决:
        根据分类搜索时, 也携带搜索关键字params参数
        根据搜索关键字搜索时, 也携带上分类的query参数

## Mock 接口数据

    问题: 首页只有分类的接口, 其它数据接口还没有写好
    解决: 需要我们前台工程自己在前台mock数据

## 理解 JSON 数据结构

    a.结构: 名称, 数据类型
    b.value
    c.value可以变, 但结构不要变

## 使用 mockjs 来模拟接口数据

    下载mockjs npm install -S mockjs 
    引入mockjs得到Mock
    mock接口: Mock.mock('/mock/xxx', {code: 200, data: banners/floors})
    mockAjax: 指定baseURL为/mock
    api/index.js: reqBanners = () => mockAjax('/banners')
    在组件中调用测试: reqBanners()
