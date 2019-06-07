<template>
  <div class="play" v-show="sequenceList.length">
    <div class="normal-play" v-show="fullScreen">
      <div class="top">
        <div @click="setFullScreen(false)" class="back">
          <i class="icon-back"></i>
        </div>
        <div class="title">
          <h2>撒旦</h2>
          <p>能凑合</p>
        </div>
      </div>
      <div class="middle">
        <div class="CDWrapper">
          <div :style='{backgroundImage:`url(${imgSrc})`}'></div>
        </div>
      </div>
      <div class="bottom">
        <div class="operators">
          <div class="icon i-left">
            <i class="icon-sequence"></i>
          </div>
          <div class="icon i-left">
            <i class="icon-prev"></i>
          </div>
          <div class="icon i-center">
            <i class="icon-play"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-next"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-not-favorite"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mini-play" v-show="!fullScreen" @click="setFullScreen(true)">
      迷你模式
      <div>正常</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import QRCode from 'qrcode'
export default {
  name: 'play',
  data () {
    return {
      imgSrc: ''
    }
  },
  created () {
    QRCode.toDataURL('https://www.baidu.com')
      .then(url => {
        console.log(url)
        this.imgSrc = url
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed: {
    ...mapState({
      playing: 'playing',
      fullScreen: 'fullScreen',
      currentIndex: 'currentIndex'
    }),
    ...mapGetters(['sequenceList'])
  },
  methods: {
    ...mapMutations(['setPlaying', 'setFullScreen', 'setCurrentIndex'])
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variable.scss';
  @import '@/assets/css/mixin.scss';
  .normal-play{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 200;
    background-color: $color-background;
    .top{
      position: relative;
      .back{
        position: absolute;
        left: 6px;
        top: 0;
        i{
          display: block;
          padding: 9px;
          transform: rotate(-90deg);
          font-size: $font-size-large-x;
          color: $color-theme;
        }
      }
      .title{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        @include no-wrap();
        color: $color-text;
        h2{
          font-size: $font-size-large;
          line-height: 2.2em;
        }
        p{
          font-size: $font-size-medium;
          line-height: 1.2em;
        }
      }
    }
    .middle{
      position: fixed;
      top: 80px;
      bottom: 170px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .CDWrapper{
        width: 80%;
        padding-top: 40%;
        padding-bottom: 40%;
        box-shadow: 0 0 10px 10px rgba(255,255,255,.1);
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        div{
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
        }
      }
    }
    .bottom{
      position: fixed;
      bottom: 50px;
      width: 100%;
      .operators{
        display: flex;
        align-items: center;
        text-align: center;
        .icon{
          flex: 1;
          color: $color-theme;
          font-size: 30px;
        }
      }
    }
  }
  .mini-play{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    z-index: 200;
    background-color: $color-highlight-background;
  }
</style>
