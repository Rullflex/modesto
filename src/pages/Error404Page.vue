<template>
    <VAppLayout>
        <VAppMain>
            Запрашиваемая страница
            <br />не найдена.
        </VAppMain>
    </VAppLayout>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

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
export default class Error404Page extends Vue {}
</script>
