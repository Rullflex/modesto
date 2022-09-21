<template>
    <div
        class="app-layout"
        :class="{ 'app-layout--has-header': hasHeader, 'app-layout--has-footer': hasFooter }"
        :data-theme="theme"
    >
        <div class="app-layout__wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VAppLayout extends Vue {
    @Prop({ type: String, default: 'light' })
    public theme!: string;

    @Prop({ type: Boolean, default: false })
    public hasHeader!: boolean;

    @Prop({ type: Boolean, default: false })
    public hasFooter!: boolean;
}
</script>

<style lang="scss">
.app-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;

    &--has-header {
        padding-top: $header-height;
    }

    &--has-footer {
        padding-bottom: $footer-height;
    }

    &__wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        flex: 1 1 auto;
        position: relative;

        color: var(--color-black);
    }
}
</style>
