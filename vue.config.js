const path = require('path');
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@use "sass:math";@import "~@/scss/variables";@import "~@/scss/mixins";@import "~@/scss/placeholders";`,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                vui: path.resolve(__dirname, 'src/plugins/vui/src/index.ts'),
            },
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]',
            });
        svgRule
            .oneOf('external')
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .end()
            .end();
    },
};
