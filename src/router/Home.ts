import MainPage from '@/pages/MainPage.vue';
import PizzaSelectionPage from '@/pages/PizzaSelectionPage.vue';
import PizzaOrderingPage from '@/pages/PizzaOrderingPage.vue';

export default [
    {
        name: 'pizza',
        path: '/',
        component: MainPage,
        redirect: {
            name: 'pizza.selection',
        },
        children: [
            {
                name: 'pizza.selection',
                path: '/pizza-selection',
                component: PizzaSelectionPage,
            },
            {
                name: 'pizza.ordering',
                path: '/pizza-ordering',
                component: PizzaOrderingPage,
            },
        ],
    },
];
