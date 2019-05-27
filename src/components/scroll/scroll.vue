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
      default: 2
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
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        preventDefault: this.preventDefault,
        scrollY: this.scrollY,
        scrollX: this.scrollX,
        probeType: this.probeType
      })
    },
    refresh () {
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
