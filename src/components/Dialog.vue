<template>
    <md-content class="dialogCard">
        <div class="md-subheader">{{dialogText}}</div>
        <md-button class="button" href="https://metamask.io">GO</md-button>
    </md-content>
</template>

<script>
    import Vue from 'vue';
    import MdButton from 'vue-material/dist/components/MdButton';
    import MdContent from 'vue-material/dist/components/MdButton';

    Vue.use(MdButton);
    Vue.use(MdContent);

    export default {
        name: 'Dialog',
        props: ['dialogText', 'buttons'],
    }
</script>

<style>
    .dialogCard {
        width: 500px;
        height: 175px;
        position: absolute;
        left: 20%;
        top: 9%;
        z-index: 4;
        background-color: rgb(134,134,45);
        box-shadow: 1px 3px 5px darkkhaki;
    }
    .md-subheader {
        text-align: center;
        padding-left: 10%;
        padding-top: 19px;
        font-size: 16px;
        font-weight: 500;
        font-family: monospace;
    }
    .button {
        margin-top: 12%;
    }
</style>