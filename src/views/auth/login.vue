<template>
  <div class="container">
    <div class="form">
      <input
        type="email"
        :placeholder="emailTip"
        v-model="email"
        @focus="emailEmpty"
        @blur="emailCover"
      />
      <input
        type="password"
        :placeholder="passwordTip"
        v-model="password"
        @focus="passwordEmpty"
        @blur="passwordCover"
        v-show="exists"
      />
      <button @click="handleAttempt" v-show="!exists">注册/登录</button>
      <button @click="handleLogin" v-show="exists">登录</button>
      <span>未注册的邮箱会自动注册</span>
    </div>
    <div class="Mask" @click="Jump"></div>
  </div>
</template>
<script>
import { attempt } from '../../api/auth'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      //检测是否存在
      exists: false,
      //双向绑定邮箱
      email: 'jianonghe@gmail.com',
      //双向绑定密码
      password: 'secret',
      //邮箱未输入提示
      emailTip: '请输入邮箱',
      //密码未输入提示
      passwordTip: '请输入密码'
    }
  },
  methods: {
    Jump() {
      this.$router.push('/')
    },
    ...mapActions('auth', ['login']),
    //检测账号是否存在API
    async handleAttempt() {
      const { data } = await attempt({ email: this.email })

      this.exists = data.exists

      if (data.exists === false) {
        this.$message({
          showClose: true,
          message: '账号注册成功请前往邮箱验证',
          type: 'success'
        })
      }
    },
    //账号登录API
    async handleLogin() {
      try {
        await this.login({ email: this.email, password: this.password })
        // location.reload()
      } catch (e) {
        console.error(e)
      }
    },

    //邮箱输入框被选中时触发函数
    emailEmpty() {
      this.emailTip = ''
    },
    //邮箱输入框取消选中时触发函数
    emailCover() {
      this.emailTip = '请输入邮箱'
    },
    passwordEmpty() {
      this.passwordTip = ''
    },
    passwordCover() {
      this.passwordTip = '请输入密码'
    }
  }
}
</script>
<style lang="scss" scoped>
input:focus {
  border-bottom: 1px solid lightblue !important;
}
.container {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  .Mask {
    width: calc(100vw - 500px);
    height: 100vh;
    order: -1;
    flex-grow: 2;
    cursor: pointer;
  }
  .form {
    width: 500px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 50%;
      height: 40px;
      margin-bottom: 20px;
      padding: 20px 0;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid black;
      text-align: center;
      font-family: ys;
    }
    button {
      border: none;
      background: rgb(96, 172, 232);
      box-sizing: border-box;
      padding: 15px;
      color: #fff;
      border-radius: 15px;
      outline: none;
      cursor: pointer;
      transition: background 0.2s;
      font-size: 16px;
    }
    button:hover {
      background: lightskyblue;
    }
    span {
      font-family: pg;
      font-size: 12px;
      padding: 20px 0;
      color: lightgray;
    }
  }
}
</style>
