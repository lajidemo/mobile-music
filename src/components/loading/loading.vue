<template>
  <div class="loading">
    <img src="@/assets/img/loading.gif" alt="">
    <h2>加载中...</h2>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  .loading{
    text-align: center;
    font-weight: bold;
    margin: 20px auto;
    font-size: $font-size-large;
    img{
      display: block;
      width: 25px;
      margin: 20px auto;
    }
  }
</style>
