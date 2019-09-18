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
                this.isLoading = true;
                window.web3.eth.personal.sign(this.textarea, this.$store.state.wallet, (error, data) => {
                    if(error !== null) {
                        new Error(error);
                        alert(error)
                    } else {
                        this.$store.commit('addMessage', data);
                    }
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
</style>