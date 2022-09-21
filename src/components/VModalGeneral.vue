<template>
    <modal class="vm-general" v-bind="modalProps" v-on="modalListeners">
        <VModalClose v-if="!hideCloseIcon" @click="hideModal"></VModalClose>

        <div class="vm-general__wrapper">
            <h2 v-if="title" class="vm-general__title">{{ title }}</h2>

            <p v-if="description" class="vm-general__description">{{ description }}</p>

            <slot></slot>

            <div v-if="$slots.actions" class="vm-general__actions">
                <slot name="actions"></slot>
            </div>
        </div>
    </modal>
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

// Components
import VModalClose from './VModalClose.vue';
import VButton from '@/components/VButton/VButton.vue';

// Mixins
import VModalMixin from '@/mixins/VModalMixin';

@Component({
    components: {
        VModalClose,
        VButton,
    },
})
export default class VModalGeneral extends VModalMixin {
    @Prop({ type: Number, default: 528 })
    declare maxWidth: number;

    @Prop({ type: String, default: null })
    public title!: string | null;

    @Prop({ type: String, default: null })
    public description!: string | null;
}
</script>
<style lang="scss">
.vm-general {
    &__wrapper {
        padding: 3rem 2.5rem;
        text-align: center;

        @media (min-width: $grid-breakpoint-sm) {
            padding: 3.75rem;
        }
    }

    &__title {
        padding: 0;
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.3125rem;
        color: var(--color-tundora);
        margin: 0 0 2rem;

        @media (min-width: $grid-breakpoint-sm) {
            font-size: 1.5rem;
            line-height: 1.75rem;
        }
    }

    &__description {
        font-size: 0.875rem;
        line-height: 1.4;
        color: var(--color-gray);
        margin: -1rem 0 2rem;

        @media (min-width: $grid-breakpoint-sm) {
            font-size: 1.125rem;
            line-height: 1.3125rem;
        }
    }

    &__actions {
        display: grid;
        grid-auto-flow: column;
        gap: 1.25rem;
        margin: 2rem 0 0 0;
    }
}
</style>
