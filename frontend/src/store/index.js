import Vue from 'vue'
import Vuex from 'vuex'



import user from './user.module'
import uploade from './uploade.module'
import consumer from './consumer.module'
import alert from './alert.module'
import product from './product.module'
import usersAll from './usersAll.module'
import cart from './cart.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    uploade,
    consumer,
    alert,
    product,
    usersAll,
    cart
  }
})
