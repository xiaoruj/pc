import {reqCartLit, reqCheckCartItem, reqAddToCart} from '@/api'

export default  {
  state: {
    cartList: [], 
  },

  mutations: {
    RECEIVE_CART_LIST (state, {cartList}) {
      state.cartList = cartList
    }
  },

  actions: {
    async getCartList ({commit}) {
      const result = await reqCartLit()
      if (result.code===200) {
        const cartList = result.data
        commit('RECEIVE_CART_LIST', {cartList})
      }
    },
    async checkCartItem ({}, {skuId, isChecked}) {
      const result = await reqCheckCartItem(skuId, isChecked)

      if (result.code!==200) { 
        throw new Error(result.message || '修改勾选状态操作成功')
      }
    },

    // async checkAllCartItems(context, checked) {
    async checkAllCartItems({state, commit, dispatch, getters}, checked) {
      const isChecked = checked ? 1 : 0
      const promises = []

      state.cartList.forEach(item => {
        if (item.isChecked===isChecked)  return
        const promise = dispatch('checkCartItem',  {skuId: item.skuId, isChecked})
        promises.push(promise)
      })

      return Promise.all(promises)
    },
    async addToCart ({commit}, {skuId, skuNum, callback}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code===200) { 
        console.log('添加到购物车成功')
        callback() 
        // callback({status: 0, message: '添加到购物车成功'})
      } else { 
        console.log('添加到购物车失败')
        callback('添加到购物车失败')
        // callback({status: 1, message: '添加到购物车失败'})
      }
    },


    async addToCart2 ({commit}, {skuId, skuNum}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code===200) { // 添加到购物车成功
        // console.log('添加到购物车成功')
        return '' 
      } else { 
        // console.log('添加到购物车失败')
        return '添加到购物车失败' 
      }
    },
    async addToCart3 ({commit}, {skuId, skuNum}) {
      const result = await reqAddToCart(skuId, skuNum)
      if (result.code!==200) { 
        // console.log('添加到购物车失败')
        throw new Error('添加到购物车失败') 
      }
    }
  },
  getters: {
    totalCount (state) {
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, skuNum} = item
        if (isChecked===1) {
          total += skuNum
        }
      })

      return total

     /*  return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum : pre
      }, 0) */
    },
    totalPrice (state) {
      let total = 0
      state.cartList.forEach(item => {
        const {isChecked, cartPrice, skuNum} = item
        // 只有在当前购物项选中才累加
        if (isChecked===1) {
          total += cartPrice * skuNum
        }
      })
      return total

      /* 
      return state.cartList.reduce((pre, item) => {
        return item.isChecked===1 ? pre + item.skuNum*item*cartPrice : pre
      }, 0) */
    }
  },
}