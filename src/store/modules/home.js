import {reqBaseCategoryList} from '@/api'
export default {
    state: {
        baseCategoryList: [],
        x:{},
        y:''
    },
    mutations:{
        RECEIVE_BASE_CATEGORY_LIST (state, baseCategoryList) {
            state.baseCategoryList = baseCategoryList
        }
    },
    actions:{
        async getBaseCategoryList ({commit}){
            const result = await reqBaseCategoryList()
            if (result.code===200){
                const baseCategoryList = result.data
                commit('RECEIVE_BASE_CATEGORY_LIST', baseCategoryList)
            }
        }
    },
    getters: {},
}

