<template>
    <div class="pizza-ordering-page">
        <VPageTitle>Make order</VPageTitle>
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
export default class PizzaOrderingPage extends Vue {}
</script>

<style lang="scss">
.pizza-ordering-page {
    @extend %page;
}
</style>
