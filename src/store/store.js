import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recommendData: null,
    singer: null,
    playing: false,
    fullScreen: false,
    currentIndex: -1,
    mode: 'sequence',
    playList: [] // 歌曲列表
  },
  getters: {
    currentSong (state) {
      return state.playList[state.currentIndex]
    },
    sequenceList (state) {
      return state.playList
    }
  },
  mutations: {
    setPlaying (state, flag) {
      state.playing = flag
    },
    setFullScreen (state, flag) {
      state.fullScreen = flag
    },
    setPlayList (state, list) {
      state.playList = list || []
    },
    setCurrentIndex (state, index) {
      state.currentIndex = index || 0
    },
    setMode (state, mode) {
      state.mode = mode || 'sequence'
    }
  },
  actions: {
    selectPlay ({ state, commit }, list, index, mode) {
      commit('setPlaying', true)
      commit('setFullScreen', true)
      commit('setPlayList', list)
      commit('setCurrentIndex', index)
      commit('setMode', mode)
    }
  }
})
