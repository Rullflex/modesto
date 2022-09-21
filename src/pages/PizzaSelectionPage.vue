<template>
    <div class="pizza-selection-page">
        <VPageTitle>Choose your pizza</VPageTitle>

        <VPizzaCarousel @order="handleOrder"></VPizzaCarousel>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import VPageTitle from '@/components/VPageTitle.vue';

@Component({
    components: {
        VPageTitle,
    },
})
export default class PizzaSelectionPage extends Vue {
    protected handleOrder() {
        // ...

        this.$router.push({ name: 'pizza.ordering', params: { pizzaId: '1' } });
    }
}
</script>

<style lang="scss">
.pizza-selection-page {
    // page mixin
    width: 100%;
}
</style>
