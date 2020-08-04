<template>
  <el-carousel
    height="100vh"
    direction="vertical"
    autoplay="true"
    loop="true"
    interval="14000"
    indicator-position="none"
  >
    <el-carousel-item v-for="item in 3" :key="item">
      <el-image style="width: 100vw; height: 100vh" :src="url[item]" fit="cover"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      url: [
        0,
        require('../../assets/background-0.jpg'),
        require('../../assets/background-1.jpg'),
        require('../../assets/background-2.jpg')
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
