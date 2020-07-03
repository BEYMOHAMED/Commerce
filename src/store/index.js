import Vue from 'vue'
import Vuex from 'vuex'
import database from '../static/db.json'

Vue.use(Vuex)

const state = {
  products: database.products,
  basket: []
}

const getters = {
  products: (state) => state.products,
  basket: (state) => state.basket,
  items: (state) => state.basket.length
}

const mutations = {
  ADD_PRODUCT: (state, obj) => {
    state.basket.push(
      {
        name: obj.name,
        quantity: obj.quantity
      })
  },
  REMOVE_PRODUCT: (state, index) => {
    state.basket.splice(index, 1)
  },
  ADD_QUANTITY: (state, index) => {
    state.basket[index].quantity++
  },
  REDUCE_QUANTITY: (state, index) => {
    if (state.basket[index].quantity > 0) {
      state.basket[index].quantity--
    }
    
  },
}

const actions = {
  addProduct: (store, obj) => {
    store.commit('ADD_PRODUCT', obj)
  },
  removeProduct: (store, index) => {
    store.commit('REMOVE_PRODUCT', index)
  },
  addQuantity: (store, index) => {
    store.commit('ADD_QUANTITY', index)
  },
  reduceQuantity: (store, index) => {
    store.commit('REDUCE_QUANTITY', index)
  }
}

let store = new Vuex.Store ({
  state: state,
  mutations,
  getters,
  actions
})

global.store = store

export default store