import Error404Page from '@/pages/Error404Page.vue';
import { RouteConfig } from 'vue-router';
import Router from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';

const routes: RouteConfig[] = [];
const context = require.context('.', false, /^(?!.*(index)).*\.ts$/);

context.keys().forEach((fileName: string) => {
    routes.push(...context(fileName).default);
});

routes.push({
    name: 'error.404',
    path: '*',
    component: Error404Page,
});

Vue.use(VueRouter);

const router = new Router({
    routes,
    mode: 'history',
});

export default router;
