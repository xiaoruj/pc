import {reqBaseCategoryList, reqBanners, reqFloors} from '@/api'
export default {
    state: {
        baseCategoryList: [],
        // 轮播图片的数组
        banners: [],
        // 楼层的数组
        floors: [],
    },
    mutations:{
        RECEIVE_BASE_CATEGORY_LIST (state, baseCategoryList) {
            state.baseCategoryList = baseCategoryList
        },
        RECEIVE_BANNERS (state, banners){
            state.banners = banners
        },
        RECEIVE_FLOORS (state, floors){
            state.floors = floors
        },

    },
    actions:{
        async getBaseCategoryList ({commit}){
            const result = await reqBaseCategoryList()
            if (result.code===200){
                const baseCategoryList = result.data
                commit('RECEIVE_BASE_CATEGORY_LIST', baseCategoryList)
            }
        },
        async getBanners ({commit}){
            const result = await reqBanners()
            if(result.code===200){
                const banners = result.data
                commit('RECEIVE_BANNERS', banners)
            }
        },

        async getFloors ({commit}){
            const result = await reqFloors()
            if(result.code===200){
                const floors = result.data
                commit('RECEIVE_FLOORS', floors)
            }
        },
    },
    getters: {},
}

