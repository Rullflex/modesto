import IPizzaItem from '@/ship/Models/IPizzaItem';
import RootState from '@/ship/Models/RootState';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<RootState> = {
    SET_PIZZA_ITEMS(state: RootState, pizzaItems: IPizzaItem[]) {
        state.pizzaItems = pizzaItems;
    },
};

export default mutations;
