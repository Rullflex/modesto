import RootState from '@/ship/Models/RootState';
import { StoreOptions } from 'vuex';
import actions from './Actions';
import getters from './Getters';
import mutations from './Mutations';

const state: RootState = {
    pizzaItems: null,
};

export const root: StoreOptions<RootState> = {
    state,
    actions,
    getters,
    mutations,
};

export default root;
