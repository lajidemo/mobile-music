<template>
  <div class="Recommend">
    <div class="swiper-container" ref="swiperContainer">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from 'swiper'
import {getRecommend} from '@/api/recommend'

export default {
  name: 'Recommend',
  components: {
    // Head
  },
  data(){
    return {
      swiper: null,
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  created(){
    console.log(this.$refs);
    this._getRecommend()
  },
  mounted(){
    this._initSwiper()
  },
  methods: {
    _getRecommend(){
      const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      const params = {}
      getRecommend(url,params).then((res)=> {
        console.log(res)
      })
      .catch((err)=> {
         console.log(err)
      })
    },
    _initSwiper(){
      this.swiper = new Swiper(this.$refs.swiperContainer,this.swiperOption)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

