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
export const reqProductList = (searchParams) => ajax ({
  url: '/list',
  method: 'POST',
  data: searchParams
})
export const reqProduct = (skuId) => ajax(`/item/${skuId}`)
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)