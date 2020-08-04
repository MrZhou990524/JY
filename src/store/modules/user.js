import { me } from "../../api/user";

export default {
  namespaced: true,
  state: {
    currentUser: {}
  },
  mutations: {
    SET_CURRENT_USER: (state, payload) => (state.currentUser = payload || {})
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      const { data: { data } } = await me()

      commit('SET_CURRENT_USER', data)
    }
  }
}
