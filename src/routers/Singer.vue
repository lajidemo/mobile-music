<template>
  <div class="Singer CON">
    <scroll :data='RawSingerList' v-if="RawSingerList.length" @require='_getSinger'>
      <ul class="singerList">
        <li v-for="(item,index) in singerList" :key="index">
          <h2>{{item[0]}}</h2>
          <div class="singerArr" v-for="(item1,key) in item[1]" :key="key">
            <img v-lazy="item1.singer_pic" alt="">
            <p>{{item1.singer_name}}</p>
          </div>
        </li>
      </ul>
      <ol class="singerNameList">
        <li class="activ" v-for="(item, index) in singerName" :key="index">{{item}}</li>
      </ol>
    </scroll>
    <loading v-else></loading>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
import { getSinger } from '@/api/recommend'
import { getPinYinFirstCharacter } from '@/assets/js/getPinYin'

export default {
  name: 'Singer',
  components: {
    Scroll, Loading
  },
  data () {
    return {
      RawSingerList: []
    }
  },
  created () {
    console.log(getPinYinFirstCharacter('阿斯顿', '', true).substring(0, 1))
    this._getSinger()
  },
  mounted () {
    /* setTimeout(() => {
      console.log(this.singerName)
    }, 3000) */
  },
  methods: {
    _getSinger () {
      const url = '/API/cgi-bin/musicu.fcg'
      const params = {}
      getSinger(url, params).then((res) => {
        console.log(res)
        this.RawSingerList = res.singerList.data.singerlist
      })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    singerList () {
      /* [{
        country: "内地"
        singer_id: 1473880
        singer_mid: "004V53Ga0bV65j"
        singer_name: "陈雪凝"
        singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000004V53Ga0bV65j.webp"
      }] */
      let copyRawSingerList = [...this.RawSingerList]
      let singerList = []
      singerList.push([ '热门', copyRawSingerList.slice(0, 10) ])
      let letterName = copyRawSingerList.map((item, index) => { // 获取歌手名的拼音首字母和歌手索引
        return [getPinYinFirstCharacter(item.singer_name, '', true).substring(0, 1), index]
      })
      let nameObj = {}
      letterName.forEach(item => { // 利用对象key的唯一性，去重掉歌手名的拼音首字母
        nameObj[item[0]] = item[0]
      })
      let [dataArr, arr] = [[], []] // 二维数组，['A',[{singerKey:val}]]
      Object.keys(nameObj).sort() // 先对歌手名进行排序
        .forEach((item1, index1) => {
          letterName.forEach((item2, index2) => {
            if (item2[0] === item1) {
              arr.push(copyRawSingerList[item2[1]])
            }
          })
          dataArr = [item1, arr]
          singerList.push(dataArr)
          dataArr = []
          arr = []
        })
      return singerList
    },
    singerName () {
      let singerName = []
      this.singerList.forEach(item => {
        singerName.push(item[0].substring(0, 1))
      })
      return singerName
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "@/assets/css/variable.scss";
  .Singer{
    ul.singerList>li{
      h2{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
      .singerArr{
        display: flex;
        align-items: center;
        padding: 10px 0 10px 30px;
        box-shadow: inset 0 -1px 0 0 $color-text-d;
        &:last-child{
          box-shadow: none;
        }
        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        p{
          margin-left: 20px;
          color: $color-text-l;
          font-size: $font-size-medium;
        }
      }
    }
    ol.singerNameList{
      position: fixed;
      right: 15px;
      top: 50%;
      transform: translateY(-34%);
      z-index: 100;
      text-align: center;
      color: $color-text-l;
      font-size: $font-size-small;
      li{
        line-height: 1.5em;
        &.active{
          color: $color-theme;
        }
      }
    }
  }
</style>
