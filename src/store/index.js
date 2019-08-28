import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
// let defaultIsCollapse = true
const store = new Vuex.Store({
    state,
    actions,
    mutations
    // state: {
    //     isCollapse: defaultIsCollapse
    // },
    // actions: {
    //     changeStatus(context,isCollapse){
    //         context.commit("changeValue",isCollapse)
    //     }
    // },
    // mutations:{
    //     changeValue(state,isCollapse){
    //         state.isCollapse = isCollapse
    //     }
    // }
})

export default store