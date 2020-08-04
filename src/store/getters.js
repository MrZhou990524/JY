export default {
  token: state => `${state.auth.token_type}${state.auth.token_type + state.auth.access_token === '' ? '' : ' '}${state.auth.access_token}`,
  isLogin: (state, getters) => getters.token !== '',
  currentUser: state => state.user.currentUser
}
