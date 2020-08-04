import { login } from "../../api/auth";
import dayjs from "dayjs";

export default {
  namespaced: true,
  state: {
    token_type: '',
    access_token: '',
    refresh_token: '',
    expires_at: null
  },
  mutations: {
    SET_TOKEN_TYPE: (state, payload) => (state.token_type = payload || ''),
    SET_ACCESS_TOKEN: (state, payload) => (state.access_token = payload || ''),
    SET_REFRESH_TOKEN: (state, payload) => (state.refresh_token = payload || ''),
    SET_EXPIRES_AT: (state, payload) => state.expires_at = typeof payload === 'number'
      ? dayjs().add(payload, 's').toString()
      : null
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await login(payload)

      commit('SET_TOKEN_TYPE', data.token_type)
      commit('SET_ACCESS_TOKEN', data.access_token)
      commit('SET_REFRESH_TOKEN', data.refresh_token)
      commit('SET_EXPIRES_AT', data.expires_in)
    },
    logout({ commit }) {
      commit('SET_TOKEN_TYPE', '')
      commit('SET_ACCESS_TOKEN', '')
      commit('SET_REFRESH_TOKEN', '')
      commit('SET_EXPIRES_AT', null)
      commit('user/SET_CURRENT_USER', {}, { root: true })
    }
  }
}
