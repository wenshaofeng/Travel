import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
 Vue.use(Vuex)
  export default new Vuex.Store({
    state,
    mutations
  })
