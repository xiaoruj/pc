import ajax from './ajax'
import mockAjax from './mockAjax'

export function reqBaseCategoryList() {
  // return ajax('/product/getBaseCategoryList')
  return ajax({
    method: 'GET',
    url: '/product/getBaseCategoryList'
  })
  // return ajax.get('/product/getBaseCategoryList')
}

export function reqLogin (mobile, password) {
  return ajax({
    method: 'POST',
    url: '/user/passport/login',
    data: {mobile, password}
  })

  // return ajax.post('/user/passport/login', {mobile, password})
}

export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')

export const reqProductList = (searchParams) => ajax({
  url: '/list',
  method: 'POST',
  data: searchParams
})
// export const reqProductList = (searchParams) => ajax.post('/list', searchParams)
/* 
reqProductList({
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}) */

export const reqProduct = (skuId) => ajax(`/item/${skuId}`) 

export const reqAddToCart = (skuId, skuNumChange) => ajax.post(`/cart/addToCart/${skuId}/${skuNumChange}`)
export const reqCartList = () => ajax('/cart/cartList')
// reqCartLit()
export const reqCheckCartItem = (skuId, isChecked) => ajax(`/cart/checkCart/${skuId}/${isChecked}`)
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)
/* export const reqDeleteCartItem = () => ajax({
  url: `/cart/deleteCart/${skuId}`,
  method: 'DELETE'
}) */
export const reqRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)
export const reqLogout = () => ajax('/user/passport/logout')
export const reqMyOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)
