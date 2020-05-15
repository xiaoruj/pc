import { getUserTempId, saveUserInfo, getUserInfo, removeUserInfo } from '@/utils'
import {reqRegister, reqLogin, reqLogout} from '@/api'
export default  {
    state: {
      userInfo: getUserInfo(),
      userTempId: getUserTempId()
    },
    mutations: {
      RECEIVE_USER_INFO (state, {userInfo}){
        state.userInfo = userInfo
      },
      RESET_USER_INFO(state){
        state.userInfo = {}
      }
    },
    actions: {
      async logout ({commit}){
        const result = await reqLogout()
        if(result.code===200){
          commit('RESET_USER_INFO')
          removeUserInfo()
        }else{
          alert(result.message || '退出登陆失败')
        }
      },
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
          saveUserInfo(userInfo)
        }else {
          throw new Error(result.data || result.message || '登陆失败')
        }
      }
    },
    getters: {},
  }