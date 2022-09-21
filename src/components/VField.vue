<template functional>
    <label class="v-field" :class="[data.staticClass, data.class]" v-bind="data.attrs">
        <slot></slot>
    </label>
</template>

<style lang="scss">
.v-field {
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 0.75rem;

    cursor: pointer;
}
</style>
