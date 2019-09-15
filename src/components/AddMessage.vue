<template>
    <div id="add-message">
        <loading :active.sync="isLoading"
                 class="loader"
                 :loader="'dots'"
                 :can-cancel="false"
                 :is-full-page="true"></loading>
        <md-field>
            <md-textarea v-model="textarea" id="message" placeholder="Type your message here..."></md-textarea>
        </md-field>
        <md-button class="md-primary" v-on:click="addMessage">ADD MESSAGE</md-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import MdButton from 'vue-material/dist/components/MdButton';
    import MdField from 'vue-material/dist/components/MdField';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    Vue.use(MdButton);
    Vue.use(MdField);

    export default {
        name: 'AddMessage',
        components: {
            Loading
        },
        methods: {
            addMessage: function () {
                const messageToHex = web3.utils.toHex(this.textarea);
                const transaction = {
                    from: this.$store.state.wallet,
                    gas: '210000',
                    to: '0xdEa9E461B715311bF49c0678842F9e2CEcAc91d7',
                    value: 0,
                    data: messageToHex
                };
                this.isLoading = true;
                web3.eth.sendTransaction(transaction)
                    .then((t) => web3.eth.getTransaction(t.transactionHash))
                    .then((tr) => {
                        const message = web3.utils.hexToUtf8(tr.input);
                        this.$store.commit('addMessage', message);
                        this.isLoading = false;
                    });
                this.textarea = '';
            }
        },
        data:() => ({
            textarea: '',
            isLoading: false
        })
    }
</script>

<style scoped>
    div {
        margin: 40px 30% 20px 50px;
    }
    textarea {
        margin: auto;
    }
    .loader > div {
    border-width: 0;
    border-color: white;
    box-shadow: 0 0 0 white;
    }
</style>