<template functional>
    <span class="v-spinner" :class="[data.staticClass, data.class]" v-bind="data.attrs"></span>
</template>
<style lang="scss">
.v-spinner {
    display: inline-block;
    width: 2em;
    height: 2em;
    vertical-align: middle;
    border: 0.2em solid currentColor;
    border-right-color: transparent;
    color: var(--color-brand-accent);
    border-radius: 50%;
    -webkit-animation: spinner 0.75s linear infinite;
    animation: spinner 0.75s linear infinite;
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
