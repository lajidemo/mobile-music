<template>
  <div class="SingerDet CON">
    <!-- <music-list :singerDet='singerDet' :singerImg='singerImg' :singerName='singerName'></music-list> -->
    <music-list :singerDet='singerDet'></music-list>
  </div>
</template>

<script>
import MusicList from '@/components/musicList/musicList'
import { getSingerDet } from '@/api/recommend'
export default {
  name: 'SingerDet',
  components: {
    MusicList
  },
  data () {
    return {
      singerDet: null
    }
  },
  created () {
    this._getSingerDet()
  },
  mounted () {

  },
  computed: {
    // singerImg () {
    //   const url = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.$route.params.id}.jpg`
    //   return `background-image: url('${url}');`
    // },
    // singerName () {
    //   return this.singerDet.singer_info.name
    // }
  },
  methods: {
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
  .SingerDet{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }
</style>
