import { reqProduct } from '@/api'
const state = {
    detailInfo:{},
}
const mutations = {
    RECEIVE_DETAIL_INFO(state, detailInfo){
        state.detailInfo = detailInfo
    }
}
const actions = {
    async getDetailInfo({commit}, skuId){
        const result = await reqProduct(skuId)
        if(result.code===200){
            const detailInfo = result.data
            commit('RECEIVE_DETAIL_INFO', detailInfo)
        }
    },
}
const getters = {
    categoryView (state){
        const categoryView = state.detailInfo.categoryView
        return categoryView || {}
    },
    skuInfo(state){
    const skuInfo = state.detailInfo.skuInfo
    return skuInfo || {}
    },
    skuImageList(state){
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList: []
    },
    spuSaleAttrList(state){
        const spuSaleAttrList = state.detailInfo.spuSaleAttrList
        return spuSaleAttrList || []
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}


