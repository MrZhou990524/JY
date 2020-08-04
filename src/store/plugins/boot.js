import { STORAGE_CURRENT_USER_KEY } from "../../enums/user";
import {
  STORAGE_TOKEN_TYPE_KEY,
  STORAGE_ACCESS_TOKEN_KEY,
  STORAGE_REFRESH_TOKEN_KEY,
  STORAGE_EXPIRES_AT_KEY
} from "../../enums/auth";

export default store => {
  registerWatchers(store)

  importStorageData(store)
}

function registerWatchers(store) {
  store.watch((state, getters) => getters.token, async (token) => {
    if (typeof token !== 'string' || token === '') return

    await store.dispatch('user/fetchCurrentUser')
  })

  store.watch(({ auth }) => auth.token_type, payload => localStorage.setItem(STORAGE_TOKEN_TYPE_KEY, payload))
  store.watch(({ auth }) => auth.access_token, payload => localStorage.setItem(STORAGE_ACCESS_TOKEN_KEY, payload))
  store.watch(({ auth }) => auth.refresh_token, payload => localStorage.setItem(STORAGE_REFRESH_TOKEN_KEY, payload))
  store.watch(({ auth }) => auth.expires_at, payload => localStorage.setItem(STORAGE_EXPIRES_AT_KEY, payload))
  store.watch(({ user }) => user.currentUser, payload => localStorage.setItem(STORAGE_CURRENT_USER_KEY, JSON.stringify(payload)))
}

function importStorageData(store) {
  store.commit('auth/SET_TOKEN_TYPE', localStorage.getItem(STORAGE_TOKEN_TYPE_KEY))
  store.commit('auth/SET_ACCESS_TOKEN', localStorage.getItem(STORAGE_ACCESS_TOKEN_KEY))
  store.commit('auth/SET_REFRESH_TOKEN', localStorage.getItem(STORAGE_REFRESH_TOKEN_KEY))
  store.commit('auth/SET_EXPIRES_AT', localStorage.getItem(STORAGE_EXPIRES_AT_KEY))
  store.commit('user/SET_CURRENT_USER', JSON.parse(localStorage.getItem(STORAGE_CURRENT_USER_KEY) || '{}'))
}
