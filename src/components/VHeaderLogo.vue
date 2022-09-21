<template>
    <RouterLink class="header__logo" :to="{ name: 'main' }">
        <LogoSvg></LogoSvg>
    </RouterLink>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Svg
import LogoSvg from '@/assets/modesto-logo.svg';

@Component({
    components: {
        LogoSvg,
    },
})
export default class VHeaderLogo extends Vue {}
</script>
<style lang="scss">
.header {
    &__logo {
        width: 3.375rem;

        svg {
            width: 100%;
            fill: white;
        }
    }
}
</style>
