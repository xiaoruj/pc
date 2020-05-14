import { getUserTempId, saveUserInfo, getUserInfo  } from '@/utils'
import {reqRegister, reqLogin, reqLogout} from '@/api'
export default  {
    state: {
      userInfo: getUserInfo(),
      userTempId: getUserTempId()
    },
    mutations: {
      RECEIVE_USER_INFO (state, {userInfo}){
        state.userInfo = userInfo
      }
    },
    actions: {
      async register (context, userInfo){
        const result = await reqRegister(userInfo)
        if(result.code!==200){
          throw new Error(result.data || result.message || '注册失败')
        }
      },
      async login ({commit}, {mobile, password}){
        const result = await reqLogin(mobile, password)
        if(result.code===200){
          const userInfo = result.data
          commit('RECEIVE_USER_INFO', {userInfo})
        }else {
          throw new Error(result.data || result.message || '登陆失败')
        }
      }
    },
    getters: {},
  }