const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3000, //by default webpack uses 8080 if you remove this devServer object.
    }
})