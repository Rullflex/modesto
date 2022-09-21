<template>
    <RouterView></RouterView>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Styles
import './scss/style.scss';

@Component
export default class App extends Vue {}
</script>
