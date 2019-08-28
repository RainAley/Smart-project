const mutations = {
    changeValue(state, isCollapse){
        state.isCollapse = isCollapse
    },
    changeOptions(state,options){
        state.options = options
    }
}
export default mutations