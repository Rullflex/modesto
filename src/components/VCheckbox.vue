<template>
    <div class="v-checkbox">
        <input
            :id="id"
            :checked="value"
            :class="{ 'v-checkbox__input--error': error, 'v-checkbox__input--disabled': disabled }"
            :disabled="disabled"
            :name="name"
            class="v-checkbox__input"
            type="checkbox"
            v-bind="$attrs"
            v-on="listeners"
        />
        <CheckSVG class="v-checkbox__check" />
    </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

// SVG
import CheckSVG from '@/assets/check.svg';

@Component({
    inheritAttrs: false,
    components: { CheckSVG },
})
export default class VCheckbox extends Vue {
    @Prop({ type: Boolean, default: false })
    public value!: boolean;

    @Prop({ type: [String, Number, Boolean, Object], default: '' })
    public error!: string | number | boolean;

    @Prop({ type: String, default: '' })
    public name!: string;

    @Prop({ type: String, default: '' })
    public id!: string;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    get listeners() {
        return {
            ...this.$listeners,
            input: this.checkedHandler,
        };
    }

    @Emit('input')
    public checkedHandler(event: InputEvent) {
        return (event.target as HTMLInputElement).checked;
    }
}
</script>
<style lang="scss">
.v-checkbox {
    position: relative;
    height: 1.25rem;
    width: 1.25rem;

    &__input {
        cursor: pointer;
        margin: 0;
        position: relative;
        height: 1.25rem;
        width: 1.25rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        border: 0.0625rem solid var(--color-control-primary);
        border-radius: 0.375rem;

        &:checked {
            background: var(--color-control-primary);
            border: none;
        }

        &--error {
            border: 0.0625rem solid var(--color-red) !important;
        }

        &--disabled {
            border-color: var(--color-control-inactive);

            &:checked {
                background-color: var(--color-control-inactive);
            }
        }
    }

    &__check {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        width: 0.75rem;
        height: 0.75rem;

        pointer-events: none;
    }
}
</style>
