import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    messages: [],
    wallet: '',
    isAccessed: true,
  },
  mutations: {
    addMessage (state, message) {
      state.messages.push(message);
    },
    setWallet (state, wallet) {
      state.wallet = wallet;
    },
    setAccess (state, isAccessed) {
      state.isAccessed = isAccessed;
    }
  },
})
