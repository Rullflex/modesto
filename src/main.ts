// Plugins
import './plugins/Axios';
import './plugins/VueHead';
import './plugins/VeeValidate';
import './plugins/VueModal';
import './plugins/VTooltip';
import './plugins/VMask';

import App from './App.vue';
import Vue from 'vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
