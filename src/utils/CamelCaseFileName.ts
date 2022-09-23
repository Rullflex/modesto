import camelCase from 'lodash/camelCase';

export default (fileName: string) => {
    const name = fileName.replace(/(\.\/|\.js|\.ts)/i, '');

    return name ? camelCase(name) : name;
};
