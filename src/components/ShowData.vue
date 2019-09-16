<template>
    <div id="show-data">
        <span class="md-subheader">Current ethereum address is...
            <span class="wallet">{{wallet}}</span>
        </span>
        <div class="messages">
            <span v-for="message in messages" v-bind:key="message" class="md-body-1">{{message}}<br/></span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export default {
        name: 'ShowData',
        computed: {
            wallet() {
                return this.$store.state.wallet
            },
            messages() {
                return this.$store.state.messages
            }
        }
    }
</script>

<style scoped>
    #show-data {
        padding-top: 35px;
    }
   .md-subheader {
        padding-left: 15%;
   }
    .md-body-1 {
        text-align: left;
        font-size: 13px;
        font-weight: 500;
        font-family: monospace;
    }
    .wallet {
        background-color: azure;
    }
    .messages {
        margin-top: 30px;
    }
</style>