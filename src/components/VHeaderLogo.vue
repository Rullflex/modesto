<template>
    <RouterLink class="header__logo" :to="{ name: 'main' }">
        <img
            src="https://invlab.ru/wp-content/uploads/2018/12/%D1%92%D0%93%CC%81%D0%B1%E2%84%A2%D0%93%CC%81%D2%90%D0%B1%E2%84%A2%E2%80%A0%D0%BF-%C2%B0%C2%AE%D0%B0%C2%B6%E2%80%A0.png"
        />
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

        img {
            width: 100%;
            fill: white;
        }
    }
}
</style>
