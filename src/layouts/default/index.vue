<template>
  <div id="app">
    <!-- 背景图片 -->
    <newBackground />
    <!-- logo -->
    <Logo />
    <!-- 导航栏 -->
    <Nav />

    <div class="pages" ref="pages">
      <transition
        name="v"
        mode="out-in"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
// 导入组件
import newBackground from './components/Background/newBackground'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav'

export default {
  components: {
    newBackground,
    Logo,
    Nav
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function(el, done) {
      // ...
      done()
    },
    afterEnter: function(el) {
      // ...
      console.log(11)
      console.log(el.offsetWidth)
      // this.$refs.pages.style.width = `${el.offsetWidth}`
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      done()
    },
    afterLeave: function(el) {
      // ...
      console.log(22)
      console.log(el.offsetWidth)
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      // ...
    }
  }
}
</script>

<style lang="scss" scoped>
.pages {
  position: absolute;
  max-width: calc(100vw - 114px);
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 10;
  transition: all 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
}
</style>
