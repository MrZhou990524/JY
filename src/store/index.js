import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import boot from "./plugins/boot";

Vue.use(Vuex)

// 动态导入模块
const requireContext = require.context('./modules', false, /.*\.js$/)
const modules = requireContext.keys()
  .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file).default])
  .reduce((modules, [name, module]) => ({ ...modules, [name]: module }), {})

export default new Vuex.Store({
  modules,
  getters,
  plugins: [boot]
})
