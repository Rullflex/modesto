<template>
    <textarea class="v-textarea" :class="{ 'v-textarea--error': error }" :value="value" v-on="listeners"></textarea>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VTextarea extends Vue {
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

.v-textarea {
    width: 100%;
    height: 4.625rem;
    max-width: 16.25rem;
    min-height: 2.375rem;
    padding: 0.5rem 1rem;

    background-color: var(--input-background-color);
    border-radius: $input-border-radius;
    border: 0.0625rem solid var(--input-border-color);
    resize: vertical;

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
