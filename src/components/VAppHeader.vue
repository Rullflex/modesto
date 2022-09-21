<template>
    <header class="app-header">
        <div class="app-header__row">
            <slot>
                <VHeader></VHeader>
            </slot>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Components
import VHeader from '@/components/VHeader.vue';

@Component({
    components: { VHeader },
})
export default class VAppHeader extends Vue {}
</script>

<style lang="scss">
.app-header {
    width: 100%;
    height: $header-height;
    background-color: var(--color-header);

    z-index: $zindex-header;
    position: absolute;
    top: -$header-height;
    left: 0;

    &__row {
        display: flex;
        align-self: center;
        width: 100%;
        height: 100%;
        max-height: 100%;
        position: relative;
    }
}
</style>
