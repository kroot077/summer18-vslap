import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';
import Vend from './models/Vend';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks: {
        kick: 10,
        slap: 1,
        punch: 5,
        hadouken: 100
      },
      items: []
    }),
    machine: new Vend({
      name: "Vendr",
      money: 0,
      acceptableCurrency: {
        quarter: 25,
        dime: 10,
        nickel: .05,
        penny: .01
      },
      snacks: [{
          id: 'a1',
          img: 'https://images-na.ssl-images-amazon.com/images/I/71opAq7oaFL._SY550_.jpg',
          price: 1.25,
          quantity: 1
        }, 
        {
          id: 'a2',
          img: 'https://cdn.shopify.com/s/files/1/1752/6725/products/smokea-stash-cans-smokea-dr-pepper-stash-can-20673625409_1400x.jpg?v=1518055462',
          price: 1.25,
          quantity: 1
        }, 
        {
          id: 'a3',
          img: 'https://target.scene7.com/is/image/Target/13052268?wid=488&hei=488&fmt=pjpeg',
          price: 1.25,
          quantity: 1
        }]
    })
  },
  mutations: {
    setHealth(state, actualHealth) {
      state.target.health = actualHealth
    },
    addMoney(state, fullTransaction) {
      state.target.money = fullTransaction
    }
  },
  actions: {
    attack({ dispatch, commit, state }, payload) {
      //async call
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth', newHealth)
    }
  }
})
