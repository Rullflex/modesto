import VueMask, { VueMaskDirective } from 'v-mask';
import Vue from 'vue';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

Vue.use(createNumberMask);

Vue.use(VueMask, {
    placeholders: {
        '#': 9,
        'D': /\d/,
        'Я': /[\wа-яА-Я]/,
    },
});

Vue.directive('mask', VueMaskDirective);
