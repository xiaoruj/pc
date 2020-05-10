import {reqProductList} from '@/api'
const state = {
    productList:{},
}
const mutations = {
    RECEIVE_PRODUCT_LIST (state, productList){
        state.productList = productList
    }
}

const actions = {
    async getProductList ({commit}, searchParams){
        const result = await reqProductList(searchParams)
        if(result.code===200){
            const productList = result.data
            commit('RECEIVE_PRODUCT_LIST', productList)
        }
    }
}
const geeters = {

}
export default{
    state,
    mutations,
    actions,
    geeters
}