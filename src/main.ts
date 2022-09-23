import Vue from 'vue';
import App from './App.vue';

// Filters
import './filters';

// Plugins
import './plugins/Axios';
import './plugins/VueHead';
import './plugins/VeeValidate';
import './plugins/VueModal';
import './plugins/VTooltip';
import './plugins/VMask';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
