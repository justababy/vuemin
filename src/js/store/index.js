import Vue from 'vue'
import Vuex from 'vuex'
import Frame from './frame'
import Home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Frame,
    Home,
  }
})
