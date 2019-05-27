<template>
  <div id="app">
    <m-head></m-head>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHead from '@/components/head/Head'
import Tab from '@/components/tab/Tab'

export default {
  name: 'home',
  components: {
    MHead, Tab
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variable.scss';
#app{
  color: $color-theme;
}
.CON{
  position: fixed;
  width: 100%;
  top: 88px;
  left: 0;
  bottom: 0;
  .scroll{
    height: 100%;
  }
}
</style>
