<template>
    <button v-on="$listeners" :class="classes" type="button">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VButtonIcon extends Vue {
    @Prop({ type: [String, Object], default: null })
    public color!: 'blue' | 'red' | 'green' | 'dark' | null;

    // Always apply active state color
    @Prop({ type: Boolean, default: false })
    public active!: boolean;

    @Prop({ type: String, default: 'normal' })
    public iconSize!: 'small' | 'normal';

    get classes() {
        return [
            'v-button-icon',
            `v-button-icon--${this.iconSize}`,
            this.color ? `v-button-icon--${this.color}` : null,
            {
                'v-button-icon--active': this.active,
            },
        ];
    }
}
</script>
<style lang="scss">
.v-button-icon {
    @include reset-button;

    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    fill: var(--color-dusty-gray);

    position: relative;

    &--normal {
        padding: 0.1875rem;
    }

    &--small {
        padding: 0.375rem;
    }

    &:hover,
    &:focus-visible,
    &--active {
        fill: currentColor;
    }

    &--blue {
        color: var(--color-blue);
    }

    &--red {
        color: var(--color-red);
    }

    &--green {
        color: var(--color-control-primary);
    }

    &--dark {
        color: var(--color-icon-primary);
    }
}
</style>
