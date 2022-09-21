<template>
    <h1 class="page-title">
        <slot></slot>
    </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Components

@Component
export default class VPageTitle extends Vue {}
</script>

<style lang="scss">
.page-title {
    font-size: 2.75rem;
    text-align: center;
    margin: 1rem auto 2rem;
}
</style>
