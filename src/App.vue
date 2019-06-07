<template>
  <div id="app">
    <m-head></m-head>
    <tab></tab>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <play></play>
  </div>
</template>

<script>
import MHead from '@/components/head/Head'
import Tab from '@/components/tab/Tab'
import Play from '@/routers/Play'

export default {
  name: 'home',
  components: {
    MHead, Tab, Play
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variable.scss';
#app{
  color: $color-theme;
}
.CON{
  background-color: $color-background;
  position: fixed;
  width: 100%;
  top: 88px;
  left: 0;
  bottom: 0;
  .scroll{
    height: 100%;
  }
}
.v-enter-active,.v-leave-active {
  transition: all .3s ease;
}
.v-enter, .v-leave-to{
  transform: translate3d(100%,0,0);
}
</style>
