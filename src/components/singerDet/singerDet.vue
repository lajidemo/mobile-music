<template>
  <div class="SingerDet CON">
    <div class="content" v-if="singerDet">
      <div class="head">
        <i class="icon-back" @click="goBack"></i>
        <h2>{{singerDet.singer_info.name}}</h2>
      </div>
      <div class="singerImg" :style="singerImg" ref="singerImg">
        <div class="play">
          <i class="icon-play"></i>
          <span>随机播放全部</span>
        </div>
      </div>
      <div ref="songList" class="songList">
        <scroll :data='singerDet.songlist'>
          <ul class="songListItem">
            <li v-for="(item,index) in singerDet.songlist" :key="index">
              <h4 class="name">{{item.name}}</h4>
              <p class="desc">{{item.album.name}}</p>
            </li>
          </ul>
        </scroll>
      </div>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
import { getSingerDet } from '@/api/recommend'
export default {
  name: 'SingerDet',
  components: {
    Scroll, Loading
  },
  data () {
    return {
      singerDet: null
    }
  },
  created () {
    console.log(this.$route)
    this._getSingerDet()
  },
  computed: {
    singerImg () {
      const url = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.$route.params.id}.jpg`
      return `background-image: url('${url}');`
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    _getSingerDet () {
      const url = '/API/cgi-bin/musicu.fcg'
      const params = this.$route.params.id
      getSingerDet(url, params).then((res) => {
        console.log(res.singer.data)
        this.singerDet = res.singer.data
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  .SingerDet{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    .head{
      height: 50px;
      line-height: 50px;
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
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
    .songList{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 290px;
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
  }
</style>
