<template>
    <input class="v-input" :class="{ 'v-input--error': error }" :value="value" v-on="listeners" />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VInput extends Vue {
    @Prop({ type: [Boolean, String], default: false })
    public error!: boolean | string;

    @Prop({ type: [String, Number, Boolean], default: '' })
    public value!: string | number | boolean;

    get listeners() {
        return {
            ...this.$listeners,
            input: this.inputHandler,
            change: this.changeHandler,
        };
    }

    @Emit('input')
    public inputHandler(event: InputEvent) {
        return (event.target as HTMLInputElement).value;
    }

    @Emit('change')
    public changeHandler(event: InputEvent) {
        return (event.target as HTMLInputElement).value;
    }
}
</script>

<style lang="scss">
$input-border-radius: 0.5rem;

:root {
    @include defineColor(--input-background-color, $color-white);
    @include defineColor(--input-text-color, $color-text-primary);
    @include defineColor(--input-placeholder-color, $color-text-tertiary);
    @include defineColor(--input-border-color, $color-border);

    @include defineColor(--input-disabled-placeholder-color, $color-iron);
    @include defineColor(--input-disabled-background-color, $color-alabaster);

    @include defineColor(--input-error-color, $color-red);
}

.v-input {
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;

    background-color: var(--input-background-color);
    border-radius: $input-border-radius;
    border: 0.0625rem solid var(--input-border-color);

    appearance: none;
    transition: border-color 0.15s;

    font-family: inherit;
    font-weight: 400;
    color: var(--input-text-color);
    font-size: 0.875rem;

    &::placeholder {
        color: var(--input-placeholder-color);
    }

    &:focus {
        outline: none;
        border-color: var(--color-control-active);
    }

    &:disabled,
    &[disabled] {
        background-color: var(--input-disabled-background-color);
        color: hsla(0, 0%, 50%, 1);

        &::placeholder {
            color: var(--input-disabled-placeholder-color);
        }
    }

    &--error {
        border-color: var(--input-error-color) !important;
    }

    // Static classes
    &--search {
        font-size: 1.125rem;
        padding: 0.875rem 0 0.875rem 3.125rem;
    }
}
</style>
