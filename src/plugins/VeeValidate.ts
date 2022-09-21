import Vue from 'vue';
import { extend, localize, setInteractionMode } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';

import { confirmed, max, min, regex, required, email } from './VeeValidateRules';
import { customEager } from './VeeValidateModes';

extend('min', min);
extend('max', max);
extend('regex', regex);
extend('required', required);
extend('confirmed', confirmed);
extend('email', email);

localize({
    ru: {
        messages: ru.messages,
        names: {
            username: 'Логин',
            password: 'Пароль',
            oldPassword: 'Старый пароль',
            repeatPassword: 'Повторить пароль',
        },
    },
});

let LOCALE = 'ru';

Object.defineProperty(Vue.prototype, 'locale', {
    get() {
        return LOCALE;
    },

    set(locale: string) {
        LOCALE = locale;

        localize(locale);
    },
});

localize(LOCALE);

setInteractionMode('customEager', customEager);
