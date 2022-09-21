<template>
    <main class="app-main">
        <div class="app-main__wrapper" :class="{ 'app-main__wrapper--loading': loading }">
            <div v-show="loading" class="app-main__spinner-wrapper">
                <VSpinner class="app-main__spinner"></VSpinner>
            </div>

            <div class="grid-page">
                <slot></slot>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VSpinner from '@/components/VSpinner.vue';

@Component({
    components: { VSpinner },
})
export default class VAppMain extends Vue {
    @Prop({ type: Boolean, default: false })
    public loading!: boolean;
}
</script>

<style lang="scss">
.grid-page {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
}

.app-main {
    background-color: $color-bg-main;
    flex-grow: 1;

    &__wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden auto;

        &--loading {
            pointer-events: none;
            overflow: hidden;
        }
    }

    &__spinner-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: $color-bg-main;
        z-index: 9999;
    }

    &__spinner {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
}
</style>
