<template>
    <div class="header">
        <VHeaderLogo></VHeaderLogo>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

// Components
import VHeaderLogo from './VHeaderLogo.vue';

@Component({
    components: { VHeaderLogo },
})
export default class VHeader extends Vue {}
</script>

<style lang="scss">
.header {
    padding: 0 4rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    background: var(--color-iron);

    position: relative;
}
</style>
