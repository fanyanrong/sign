//原始数据
const state = {
    longitude: "333",
    latitude: "444",
    openid:'',
    phone:''
}

//派生数据
const getters = {

}

//异步改变
const actions = {
    getLocation({commit},payload) {
        wx.getLocation({
            type: "wgs84",
            success(res) {
                console.log('res...',res)
                commit('updateLocation',res)
            }
        })
    }

}

//同步改变,改变数据的唯一途径
const mutations = {
    updateLocation(state,payload){
        state.longitude=payload.longitude
        state.latitude=payload.latitude

    },
    getCode(state,actions){
        console.log('state',state,'actions',actions)
        state.openid=actions.openid
        state.phone=actions.phone
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}