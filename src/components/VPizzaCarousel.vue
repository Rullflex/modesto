<template>
    <Carousel adjustableHeight>
        <Slide v-for="{ id, imageSrc, name, price } in pizzaItems" :key="id">
            <VPizzaItem :imageSrc="imageSrc" :name="name" :price="price" @input="handler(id)"></VPizzaItem>
        </Slide>
    </Carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// Interfaces
import IPizzaItem from '@/ship/Models/IPizzaItem';

// Components
import VPizzaItem from '@/components/VPizzaItem.vue';
import { Carousel, Slide } from 'vue-carousel';

@Component({
    components: {
        VPizzaItem,
        Carousel,
        Slide,
    },
})
export default class VPizzaCarousel extends Vue {
    @Prop({ type: Array, required: true })
    public pizzaItems!: IPizzaItem[];

    public handler(id: number) {
        this.$emit('order', id);
    }
}
</script>

<style lang="scss"></style>
