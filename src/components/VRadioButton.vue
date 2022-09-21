<template>
    <input
        :class="{
            'v-radio-button--disabled': disabled,
            'v-radio-button--inline': inline,
        }"
        :disabled="disabled"
        :name="name"
        :value="value"
        class="v-radio-button"
        type="radio"
        v-on="listeners"
    />
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class VRadioButton extends Vue {
    @Prop({ type: [String, Number, Boolean], default: '' })
    public value!: string | number | boolean;

    @Prop({ type: String, default: '', required: true })
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    @Prop({ type: Boolean, default: false })
    public inline!: boolean;

    get listeners() {
        return {
            ...this.$listeners,
            input: this.inputHandler,
        };
    }

    @Emit('input')
    public inputHandler(event: InputEvent) {
        return (event.target as HTMLInputElement).value;
    }
}
</script>
<style lang="scss">
.v-radio-button {
    width: 1.25rem;
    height: 1.25rem;

    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    position: relative;
    margin: 0;

    &::before {
        content: '';
        width: 1.125rem;
        height: 1.125rem;

        border-radius: 50%;
        background-color: var(--color-white);
        border: 0.0625rem solid var(--color-control-primary);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:checked {
        &::after {
            content: '';
            width: 0.75rem;
            height: 0.75rem;

            background: var(--color-control-primary);
            border-radius: 50%;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &--inline {
        display: inline;
        margin: 0 1.125rem 0 0.5rem;
    }

    &--disabled {
        pointer-events: none;

        &::before {
            border: 0.0625rem solid var(--color-control-inactive);
        }

        &:checked {
            &::before {
                border: 0.0625rem solid var(--color-control-inactive);
            }

            &::after {
                background: var(--color-control-inactive);
            }
        }
    }
}
</style>
