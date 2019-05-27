<template>
  <div class="Rank CON">
    <scroll :data="topList" v-if="topList.length">
      <ul>
        <li v-for="(list, index) in topList" :key="index">
          <img v-lazy="list.picUrl" alt="">
          <div class="topThree">
            <p v-for="(item,key) in list.songList" :key="key">
              {{key + 1}}. {{item.songname}} - {{item.singername}}
            </p>
          </div>
        </li>
      </ul>
    </scroll>
    <loading v-else></loading>
  </div>
</template>

<script>
import { getRunk } from '@/api/recommend'
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'

export default {
  name: 'Rank',
  components: {
    Scroll, Loading
  },
  data () {
    return {
      topList: []
    }
  },
  methods: {
    _getRunk () {
      const url = '/api/v8/fcg-bin/fcg_myqq_toplist.fcg'
      const params = {}
      getRunk(url, params).then((res) => {
        console.log(res)
        this.topList = res.data.data.topList
      })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this._getRunk()
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  .Rank{
    padding: 0 20px;
    ul li{
      display: flex;
      align-items: center;
      margin: 20px auto;
      overflow: hidden;
      background-color: $color-highlight-background;
      img{
        width: 100px;
      }
      .topThree{
        // flex: 1;
        width: calc(100% - 100px);
        font-size: $font-size-small;
        padding: 0 20px;
        color: $color-text-d;
        p{
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          line-height: 2em;
          letter-spacing: 1px;
        }
      }
    }
  }
</style>
