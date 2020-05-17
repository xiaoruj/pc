import {reqTradeInfo, reqPayInfo} from '@/api'
const state = {
    tradeInfo: {},
    payInfo:{},
}
const mutations = {
    RECEIVE_TRADE_INFO(state, {tradeInfo}){
        state.tradeInfo = tradeInfo
    },
    RECEIVE_PAY_INFO(state, payInfo){
        state.payInfo = payInfo
    },
}
const actions = {
    async getTradeInfo({commit}){
        const result = await reqTradeInfo()
        if(result.code=== 200){
            const tradeInfo = result.data
            commit('RECEIVE_TRADE_INFO', {tradeInfo})
        }
    },
    async getPayInfo({commit}, orderId){
        const result = await reqPayInfo(orderId)
        if(result.code===200){
            const payInfo = result.data
            commit('RECEIVE_PAY_INFO', payInfo)
        }
    }
}
const getters = {

}
export default{
    state,
    mutations,
    actions,
    getters
}



