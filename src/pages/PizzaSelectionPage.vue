<template>
    <div class="pizza-selection-page">
        <VPageTitle>Choose your pizza</VPageTitle>

        <VPizzaCarousel v-if="pizzaItems" :pizza-items="pizzaItems" @order="handleOrder"></VPizzaCarousel>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

// Interfaces
import IPizzaItem from '@/ship/Models/IPizzaItem';

// Components
import VPageTitle from '@/components/VPageTitle.vue';
import VPizzaCarousel from '@/components/VPizzaCarousel.vue';

@Component({
    components: {
        VPageTitle,
        VPizzaCarousel,
    },
})
export default class PizzaSelectionPage extends Vue {
    @Action public GET_PIZZA_ITEMS!: () => Promise<IPizzaItem[]>;

    @State public pizzaItems!: IPizzaItem[] | null;

    public handleOrder() {
        // ...

        this.$router.push({ name: 'pizza.ordering', params: { pizzaId: '1' } });
    }

    protected async created() {
        try {
            await this.GET_PIZZA_ITEMS();
        } catch (error) {
            return error;
        }
    }
}
</script>

<style lang="scss">
.pizza-selection-page {
    @extend %page;
}
</style>
