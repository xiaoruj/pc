import {reqBaseCategoryList} from '@/api'

export default  {
  state: {
    baseCategoryList: [],
    x: {},
    y: ''
  },

  mutations: {
    RECEIVE_BASE_CATEGORY_LIST (state, baseCategoryList) {
      state.baseCategoryList = baseCategoryList
    }
  },

  actions: {
    async getBaseCategoryList ({commit}) {
      // 1. 发异步ajax请求
      const result = await reqBaseCategoryList()
      // 2. 成功后, 提交mutation保存数据
      if (result.code===200) {
        const baseCategoryList = result.data
        commit('RECEIVE_BASE_CATEGORY_LIST', baseCategoryList)
      }
    }
    
  },
  getters: {},
}