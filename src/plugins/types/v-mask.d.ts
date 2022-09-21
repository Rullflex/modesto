declare module 'v-mask' {
    import { DirectiveFunction, PluginObject } from 'vue';

    const VMask: PluginObject<VMask>;
    const VueMaskDirective: DirectiveFunction;

    interface VMask {
    }

    export { VueMaskDirective };
    export default VMask;
}
