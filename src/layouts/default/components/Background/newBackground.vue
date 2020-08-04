<template>
  <div>
    <div class="box">
      <img
        :src= 'backgroundImg'
        alt
        draggable="false"
      />
      <h1>{{`${horu}:${minute}:${second}`}}</h1>
      <samp></samp>
      <h2 v-show="this.show[0]">Good morning</h2>
      <h2 v-show="this.show[1]">Good afternoon</h2>
      <h2 v-show="this.show[2]">Good evening</h2>
      <h2 v-show="this.show[3]">亲爱的陌生人，早点休息</h2>
      <h3>欢迎来即艺素材解析网</h3>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.monitoring()
  },
  data() {
    return {
      backgroundImgs: [
        'https://tva1.sinaimg.cn/large/007S8ZIlgy1gguearp444j31hd0u0hdt.jpg',
        'https://tva1.sinaimg.cn/large/007S8ZIlgy1ggueatdvwsj31hb0u04qp.jpg',
        'https://tva1.sinaimg.cn/large/007S8ZIlgy1ggueay8jqoj31hc0u0amm.jpg'
      ],
      horu: '',
      minute: '',
      second: '',
      show: {
        show1: false,
        show2: true,
        show3: false,
        show4: false
      }
    }
  },
  computed: {
    backgroundImg() {
      const arr = this.backgroundImgs
      return arr[Math.floor((Math.random()*arr.length))]
    }
  },
  methods: {
    // //判断当前时间段
    // judge: () => {
    //   switch (time.horu) {
    //     case 17: {
    //       this.show2 = true
    //     }
    //   }
    // },
    //监听
    monitoring: function() {
      setInterval(() => {
        var time = new Date()
        this.horu = time.getHours()
        this.minute = time.getMinutes()
        this.second = time.getSeconds()
        if (this.horu < 10) {
          this.horu = `0${this.horu}`
        }
        if (this.minute < 10) {
          this.minute = `0${this.minute}`
        }
        if (this.second < 10) {
          this.second = `0${this.second}`
        }
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

  samp {
    height: 1px;
    border: none;
    border-bottom: 3px dashed #fff;
    z-index: 10;
  }

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
  }
  h1 {
    font-size: 120px;
    color: #fff;
    z-index: 10;
  }
  h2 {
    font-size: 90px;
    color: #fff;
    z-index: 10;
  }
  h3 {
    font-size: 60px;
    color: #fff;
    z-index: 10;
  }
}
</style>
