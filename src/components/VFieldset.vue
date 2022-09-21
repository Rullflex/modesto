<template functional>
    <div class="v-fieldset" :class="[data.staticClass, data.class]" v-bind="data.attrs">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.v-fieldset {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
}
</style>
