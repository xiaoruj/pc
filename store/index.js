import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex)

const mutations = {
  test2 (state) { // 总state

  }
}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules
})

