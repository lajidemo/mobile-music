<template>
  <div class="scroll" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    data: {
      require: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: true
    },
    bounce: {
      default: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initBScroll()
    })
  },
  methods: {
    _initBScroll () {
      const that = this
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        preventDefault: this.preventDefault,
        scrollY: this.scrollY,
        scrollX: this.scrollX,
        probeType: this.probeType,
        momentum: false,
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        },
        swipeTime: 1500
      })
      function pullingDown () {
        that.$emit('require')
        that.scroll.finishPullDown()
      }
      function scroll (y) {
        that.$emit('onScroll', y)
      }
      this.scroll.on('pullingDown', pullingDown)
      this.scroll.on('scroll', scroll)
    },
    refresh () {
      console.log(this.scroll)
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data () {
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll{
  overflow: hidden;
}
</style>
