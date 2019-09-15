import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    messages: [],
    wallet: '',
    token: '',
    addressTo: '0xdEa9E461B715311bF49c0678842F9e2CEcAc91d7',
    isAccessed: true,
  },
  mutations: {
    addMessage (state, message) {
      state.messages.push(message);
    },
    setWallet (state, wallet) {
      state.wallet = wallet;
    },
    setToken (state, token) {
      state.token = token;
    },
    setAccess (state, isAccessed) {
      state.isAccessed = isAccessed;
    }
  },
  actions: {

  }
})
