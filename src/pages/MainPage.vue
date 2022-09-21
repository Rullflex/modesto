<template>
    <VAppLayout has-header>
        <VAppHeader></VAppHeader>

        <VAppMain>
            <RouterView></RouterView>
        </VAppMain>
    </VAppLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Components
import VAppLayout from '@/components/VAppLayout.vue';
import VAppHeader from '@/components/VAppHeader.vue';
import VAppMain from '@/components/VAppMain.vue';

@Component({
    components: {
        VAppLayout,
        VAppHeader,
        VAppMain,
    },
})
export default class MainPage extends Vue {}
</script>

<style lang="scss"></style>
