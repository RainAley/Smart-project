const actions = {
    changeStatus(context, isCollapse){
        context.commit("changeValue", isCollapse)
    },
    changeOptions(context,options){
        context.commit("changeOptions",options)
    }
}
export default actions