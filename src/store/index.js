import Vue from 'vue'
import Vuex from 'vuex'
import {moduleA} from './module/sectionA'

Vue.use(Vuex)
export const store = new Vuex.Store({
  module: {
    moduleA
  }
})
