import { reqProduct, reqAddToCart } from '@/api'
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
    async addToCart({commit}, {skuId, skuNum, callback}){
        const result = await reqAddToCart(skuId, skuNum)
        if(result.code===200){
            console.log('成功添加到购物车');
            callback()
        }else{
            console.log('添加购物车失败');
            callback('添加购物车失败')
        }
    },
    async addToCart2({commit}, {skuId, skuNum}){
        const result = await reqAddToCart(skuId, skuNum)
        if(result.code===200){
            // console.log('成功添加到购物车');
            return ''
        }else{
            // console.log('添加购物车失败');
            return '添加购物车失败'
        }
    },
    async addToCart3({commit}, {skuId, skuNum}){
        const result = await reqAddToCart(skuId, skuNum)
        if(result.code===200){
            // console.log('成功添加到购物车');
            return ''
        }else{
            // console.log('添加购物车失败');
            throw new Error('添加购物车失败') 
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


