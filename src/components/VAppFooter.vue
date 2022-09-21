<template>
    <footer class="app-footer">
        <div class="app-footer__row">
            <slot></slot>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class VAppFooter extends Vue {}
</script>

<style lang="scss">
.app-footer {
    width: 100%;
    height: $footer-height;
    background-color: var(--color-footer);

    z-index: $zindex-footer;
    position: absolute;
    bottom: -$footer-height;
    left: 0;

    &__row {
        display: flex;
        width: 100%;
        height: 100%;
        max-height: 100%;
        flex: 1 1 auto;
        align-self: center;
        position: relative;
    }
}
</style>
