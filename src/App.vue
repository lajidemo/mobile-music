<template>
  <div id="app">
    <m-head></m-head>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MHead from '@/components/head/Head'
import Tab from '@/components/tab/Tab'

export default {
  name: 'home',
  components: {
    MHead,Tab
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variable.scss';
#app{
  color: $color-theme;
}
</style>
