import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import router from "../router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    forgetUser(state){
      state.user = null
      router.push({name: 'main'}).catch()
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    async login(context, payload){
      const data = await api.post("user/login", payload)
      if(data.error)
        return data
      context.commit("setUser", data)
    },
    async logout(context){
      await api.post("user/logout")
      context.commit("forgetUser")
    },
    async reg(context, payload){
      const data = await api.post("user/reg", payload)
      if(data.error)
        return data
      context.commit("setUser", data)
    }
  },
})
