import axios from 'axios'
import store from '@/store'

// API地址
axios.defaults.baseURL = process.env.VUE_APP_API;

//设置超时时间
axios.defaults.timeout = 10000;

//设置POST请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//axios设置请求拦截器
axios.interceptors.request.use(config => {
  //请求头携带token
  if (store.getters.token) {
    config.headers.Authorization = store.getters.token
  }

  return config;
}, error => {
  console.log(error)
  return Promise.error(error)
})

export default axios
