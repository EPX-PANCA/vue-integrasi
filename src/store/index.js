import Vue from 'vue'
import Vuex from 'vuex'
import Api from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async registerAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup", JSON.stringify({ data: payload }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      commit("setBoolean", { key: "postLoading", value: false });
    },
  },
  modules: {
  }
})
