<template>
  <div class="Recommend CON">
    <scroll :data="swiperData" v-if="hasData">
      <div class="recommendData">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperData" :key="index">
              <a :href="slide.linkUrl"><img :src="slide.picUrl" alt=""></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="recommendSings">
          <h1>热门歌单推荐</h1>
          <ul>
            <li v-for="(list,key) in songList" :key="key">
              <img v-lazy="list.picUrl" alt="">
              <div class="info">
                <h2>{{list.songListAuthor}}</h2>
                <p>{{list.songListDesc}}盘点演唱会经典万人</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <loading v-else></loading>
  </div>
</template>

<script>
import { getRecommend } from '@/api/recommend'
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'

export default {
  name: 'Recommend',
  components: {
    Scroll, Loading
  },
  data () {
    return {
      swiper: null,
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperData: [],
      songList: [],
      hasData: false
    }
  },
  created () {
    console.log(this.$refs)
    this._getRecommend()
  },
  mounted () {
    /* this.$nextTick(() => {
      this._initSwiper()
    }) */
  },
  methods: {
    _getRecommend () {
      const url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      const params = {}
      getRecommend(url, params).then((res) => {
        console.log(res)
        this.swiperData = res.data.data.slider
        this.songList = res.data.data.songList
        this.hasData = true
        console.log(this.swiperData)
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "@/assets/css/variable.scss";
  .swiper{
    a{
      display: block;
      img{
        display: block;
        width: 100%;
      }
    }
  }
  .recommendSings{
    h1{
      height: 65px;
      line-height: 65px;
      text-align: center;
    }
    ul li{
      display: flex;
      align-items: center;
      padding: 0 20px 20px;
      font-size: $font-size-medium;
      img{
        display: block;
        width: 60px;
        margin-right: 20px;
      }
      h2{
        margin-bottom: 10px;
        color: $color-text;
      }
      p{
        color: $color-text-d;
        line-height: 1.2em;
      }
    }
  }
</style>
<style lang="scss">
.swiper .swiper-pagination-bullet-active{
  transition: all .2s linear;
  background: #fff;
  opacity: .5;
  width: 20px;
  border-radius: 50px;
}
</style>
