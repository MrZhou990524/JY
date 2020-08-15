<template>
  <div class="content">
    <div class="tite">
      <img src="~@/assets/logo.png" alt />
      <h1>即艺素材解析平台</h1>
    </div>
    <h1>将各大平台的下载连接复制到解析窗口即可</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scopes>
.content {
  height: 100%;
  width: calc(100vw - 114px);
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .tite {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;

    img {
      width: 50px;
      padding-right: 20px;
    }
  }
}
</style>
