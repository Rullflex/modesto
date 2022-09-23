import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import camelCaseFileName from '@/utils/CamelCaseFileName';
import RootState from '@/ship/Models/RootState';
import root from './Root/Root';

const stores: any = {};

// fix jest warning with "require.context" on testing app
if (process.env.NODE_ENV !== 'test') {
    const storeFiles = require.context('./', true, /^(?!.*(actions|mutations|getters|Root|index)).*\.ts$/);

    storeFiles.keys().forEach((fileName: string) => {
        const name = camelCaseFileName(fileName.split('/').pop()!.split('.')[0]);

        stores[name] = {
            namespaced: true,
            ...storeFiles(fileName).default,
        };
    });
}

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    ...root,
    modules: stores,
    strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store(store);
