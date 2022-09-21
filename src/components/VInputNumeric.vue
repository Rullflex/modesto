<template>
    <input
        ref="input"
        class="v-input"
        :class="{ 'v-input--error': error }"
        :value="inputValue"
        v-on="listeners"
        inputmode="numeric"
    />
</template>

<script lang="ts">
import { Component, Emit, Prop, Watch, Ref, Vue } from 'vue-property-decorator';

@Component
export default class VInputNumeric extends Vue {
    @Prop({ type: [Number, Object], default: null })
    public value!: number | null;

    @Prop({ type: [Boolean, String], default: false })
    public error!: boolean | string;

    @Ref()
    public input!: HTMLInputElement;

    public inputValue = '';

    get listeners() {
        return {
            ...this.$listeners,
            input: this.inputHandler,
            change: this.changeHandler,
        };
    }

    @Watch('value')
    public valueWatchHandler() {
        this.inputValue = this.value?.toLocaleString('fullwide', { useGrouping: false }) ?? '';
    }

    @Emit('input')
    public inputHandler(event: InputEvent): number | null {
        const { value } = event.target as HTMLInputElement;
        this.input.value = value.replace(/\D/g, '');
        return this.parseNumber(value);
    }

    @Emit('change')
    public changeHandler(event: InputEvent): number | null {
        const { value } = event.target as HTMLInputElement;
        return this.parseNumber(value);
    }

    public parseNumber(value: string): number | null {
        const digits = value.replace(/\D/g, '');
        const numberValue = parseInt(digits, 10);
        return isNaN(numberValue) ? null : numberValue;
    }

    public created() {
        this.valueWatchHandler();
    }
}
</script>
