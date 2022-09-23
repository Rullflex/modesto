<template>
    <button class="pizza-item" type="button" @click="handler">
        <img class="pizza-item__image" :src="imageSrc" alt="" />

        <div class="pizza-item__name">{{ name }}</div>

        <div class="pizza-item__price">price: {{ price | money }}</div>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// Components

@Component({
    components: {},
})
export default class VPizzaItem extends Vue {
    @Prop({ type: String, required: true })
    public name!: string;

    @Prop({ type: Number, required: true })
    public price!: number;

    @Prop({ type: String, required: true })
    public imageSrc!: string;

    public handler() {
        this.$emit('input');
    }
}
</script>

<style lang="scss">
.pizza-item {
    @include reset-button;
}
</style>
