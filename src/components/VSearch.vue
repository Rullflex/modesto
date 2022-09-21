<template>
    <label class="v-search" :class="{ active: search }">
        <SearchSVG class="v-search__icon-search"></SearchSVG>

        <VInput
            class="v-input--search"
            v-model="inputValue"
            v-on="listeners"
            v-bind="$attrs"
            type="text"
            :placeholder="placeholder"
        ></VInput>

        <VButtonIcon
            v-show="search"
            class="v-search__button-clear"
            color="dark"
            icon-size="small"
            active
            @click="clearSearch"
        >
            <CrossSVG></CrossSVG>
        </VButtonIcon>
    </label>
</template>

<script lang="ts">
import VueI18n from 'vue-i18n';
import { Component, Prop, VModel, Vue } from 'vue-property-decorator';

// SVG
import SearchSVG from '@/assets/search.svg';
import CrossSVG from '@/assets/cross.svg';

// Components
import VInput from '@/components/VInput.vue';
import VButtonIcon from '@/components/VButton/VButtonIcon.vue';

@Component({
    inheritAttrs: false,
    components: {
        SearchSVG,
        CrossSVG,

        VInput,
        VButtonIcon,
    },
})
export default class VSearch extends Vue {
    @VModel({ type: String })
    public search!: string;

    @Prop({ type: String, default: '' })
    public placeholder!: string | VueI18n.TranslateResult;

    public inputValue = '';

    public created() {
        this.inputValue = this.search;
    }

    public clearSearch() {
        this.inputValue = this.search = '';
    }

    public inputHandler() {
        this.search = this.inputValue;
    }

    get listeners() {
        return { ...this.$listeners, input: this.inputHandler };
    }
}
</script>

<style lang="scss">
.v-search {
    display: flex;
    flex: 1 1 100%;
    position: relative;

    &__icon-search {
        position: absolute;
        left: 1.1875rem;
        top: 0;
        bottom: 0;
        margin: auto 0;

        width: 1.25rem;
        height: 1.25rem;

        fill: var(--color-silver);
    }

    &__button-clear {
        position: absolute;
        right: 1rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }
}
</style>
