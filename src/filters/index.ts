import Vue from 'vue';
import camelCaseFileName from '../utils/CamelCaseFileName';

const configFiles = require.context('./', false, /^(?!.*(index)).*\.ts$/);

configFiles.keys().forEach((fileName: string) => {
    const name = camelCaseFileName(fileName.split('/').pop()!.split('.')[0]);

    Vue.filter(name, configFiles(fileName).default);
});
