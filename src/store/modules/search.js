import {reqProductList} from '@/api'

const state = {
  productList: {}, // 搜索得到商品列表相关数据的对象(不是数组)
}
const mutations = {
  RECEIVE_PRODUCT_LIST (state, productList) {
    state.productList = productList
  }
}

const actions = {
  async getProductList ({commit}, searchParams) {
    const result = await reqProductList(searchParams)
    if (result.code===200) {
      const productList = result.data
      commit('RECEIVE_PRODUCT_LIST', productList)
    }
  }
}
const getters = {
  trademarkList (state) {
    return state.productList.trademarkList || []
  },

  attrsList (state) {
    return state.productList.attrsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}