import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import '@/assets/css/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(VueLazyload, {
  error: require('@/assets/img/default.png'),
  loading: require('@/assets/img/default.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
