import IPizzaItem from '@/ship/Models/IPizzaItem';
import RootState from '@/ship/Models/RootState';
import { ActionTree } from 'vuex';

export const actions: ActionTree<RootState, RootState> = {
    GET_PIZZA_ITEMS({ commit, state }) {
        if (state.pizzaItems) return state.pizzaItems;

        const pizzaItems: IPizzaItem[] = [
            {
                id: 1,
                price: 100,
                name: 'pizza top',
                imageSrc:
                    'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=',
            },
            {
                id: 2,
                price: 200,
                name: 'pizza mid',
                imageSrc:
                    'https://i0.wp.com/pizzafactory.lk/demo/wp-content/uploads/2017/08/Pizza-Pollo-Alla-Diavola.png?resize=660%2C440',
            },
            {
                id: 3,
                price: 300,
                name: 'pizza bot',
                imageSrc: 'https://pizzafactory.lk/wp-content/uploads/2017/08/Pizza-Napoletanna-300x300.png',
            },
        ];

        commit('SET_PIZZA_ITEMS', pizzaItems);
    },
};

export default actions;
