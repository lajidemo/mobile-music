<template>
  <div>
    <div class="content" v-if="singerDet">
      <div class="head" ref="head">
        <i class="icon-back" @click="goBack"></i>
        <h2>{{singerDet.singer_info.name}}</h2>
      </div>
      <div class="singerImg" :style="singerImg" ref="singerImg" id="singerImg">
        <div class="play">
          <i class="icon-play"></i>
          <span>随机播放全部</span>
        </div>
      </div>
      <div class="layer" ref='layer'></div>
      <div ref="songList" class="songList" id="songList">
        <scroll :data='singerDet.songlist' @onScroll='changeTop'>
          <ul class="songListItem" ref="songListItem">
            <li v-for="(item,index) in singerDet.songlist"
                :key="index"
                @click="selectItem(singerDet.songlist,index)">
              <h4 class="name">{{item.name}}</h4>
              <p class="desc">{{item.album.name}}</p>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
    <loading v-show="!singerDet"></loading>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
import { mapActions } from 'vuex'
export default {
  name: 'MusicList',
  components: {
    Scroll, Loading
  },
  props: {
    singerDet: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      singerImgH: 0
    }
  },
  created () {

  },
  updated () {
    if (this.singerDet) {
      this.singerImgH = this.$refs.singerImg.clientHeight
      console.log('asdsaasdasdsa', this.$refs.singerImg.clientHeight)
      this.$refs.songList.style.top = `${this.singerImgH}px`
      this.$refs.layer.style.top = `${this.singerImgH}px`
      this.$refs.layer.style.height = this.$refs.songListItem.clientHeight + 'px'
    }
  },
  mounted () {

  },
  computed: {
    singerImg () {
      const url = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.$route.params.id}.jpg`
      return `background-image: url('${url}');`
    }
  },
  methods: {
    selectItem (list, index) {
      console.log('-------------------')
      console.log('list:', list)
      this.selectPlay(list, index)
    },
    changeTop (scrollY) {
      this.$refs.layer.style.transform = `translate3d(0,${scrollY.y}px,0)`
      if (scrollY.y > 0) {
        this.$refs.songList.style.top = `${this.singerImgH + scrollY.y}px`
        this.$refs.singerImg.style.transform = `scale(${1 + scrollY.y / (this.singerImgH * 2)})`
      } else {
        this.$refs.head.style.backgroundColor = `rgba(50,50,50,${-scrollY.y / (this.singerImgH - 50)})`
        this.$refs.singerImg.style.filter = `blur(${-scrollY.y * 2 / this.singerImgH}px)`
      }
    },
    goBack () {
      this.$router.back()
    },
    ...mapActions(['selectPlay'])
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  @import "@/assets/css/mixin.scss";
  .head{
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: rgba(50,50,50,0);
    i{
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: $font-size-large-x;
    }
    h2{
      font-size: $font-size-large;
      color: $color-text;
      letter-spacing: 1px;
      width: 80%;
      margin: 0 auto;
      @include no-wrap();
    }
  }
  .singerImg{
    background-position: top;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70%;
    width: 100%;
    .play{
      position: absolute;
      left: 50%;
      bottom: 10%;
      border: 1px solid $color-theme;
      color: $color-theme;
      padding: 7px 17px;
      border-radius: 50px;
      transform: translateX(-50%);
      font-size: $font-size-small;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 1px;
      *{
        font-weight: bold;
      }
      i{
        font-size: $font-size-medium-x;
        margin-right: 6px;
      }
    }
  }
  .layer{
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color-background;
    z-index: 50;
    // display: none;
  }
  .songList{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 60;
    .scroll{
      overflow: visible;
    }
    ul.songListItem{
      font-size: $font-size-medium-x;
      line-height: 1.6em;
      padding: 20px 30px;
      li{
        padding: 10px 0;
        h4{
          color: $color-text;
        }
        p{
          color: $color-text-d;
        }
      }
    }
  }
</style>
