<template>
  <div>
    <div class="nav">
      <router-link to="/login" v-if="show">登录</router-link>
      <router-link to="/login" v-if="!show">
        <img :src="avatar" alt />
      </router-link>
      <router-link to="/reference">使用方法</router-link>
      <router-link to>常见问题</router-link>
      <router-link to>关于我们</router-link>
    </div>
  </div>
</template>
<script>
// import { apiMe } from '@/api/auth'

export default {
  created() {
    this.judge()
  },
  data() {
    return {
      nav: 'nav',
      show: true,
      avatar: require('@/assets/yh.png')
    }
  },
  methods: {
    //判断本地是否存在token
    judge: function() {
      if (localStorage.getItem('token') == null) {
        this.show = true
      } else {
        this.show = !true
        //携带本地TOKEN发送GET请求
        apiMe().then(res => {
          console.log(res.data.avatar)
          this.avatar = res.data.avatar
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  margin: 30px;
  background: #ffffff;
  padding: 0 10px;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    color: #333;
    padding: 9px 10px;
  }
  a:hover {
    background-color: rgb(250, 250, 250);
  }
  img {
    display: block;
    width: 22px;
  }
}
</style>
