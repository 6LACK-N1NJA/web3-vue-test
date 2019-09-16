<template>
  <div id="app">
    <ShowData/>
    <AddMessage/>
    <Dialog v-if="notMetamask()" dialogText="To work with app you need MetaMask plugin"/>
    <Dialog v-if="!this.$store.state.isAccessed" dialogText="Please accept permission to your public wallet"/>
  </div>
</template>

<script>
  import 'vue-material/dist/vue-material.min.css';
  import 'vue-material/dist/theme/default.css';
  import AddMessage from './components/AddMessage.vue';
  import ShowData from './components/ShowData.vue';
  import Dialog from './components/Dialog';
  import Web3 from 'web3';

  export default {
    name: 'app',
    components: {
      AddMessage,
      ShowData,
      Dialog
    },
    methods: {
      notMetamask: () => window.web3.currentProvider.constructor.name !== "MetamaskInpageProvider",
    },
    beforeCreate() {
      if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          const store = this.$store;
          window.ethereum.enable();
          window.web3.eth.getAccounts((err, acc) => {
            if(err !== null) {
              new Error(err);
            } else {
              this.$store.commit('setWallet', acc[0])
            }
          });
          window.ethereum.on('accountsChanged', function (acc) {
            store.commit('setWallet', acc[0])
          })
        } catch {
          this.$store.commit('setAccess', false)
        }
      }
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
