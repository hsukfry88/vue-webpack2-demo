const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackBase = require("./webpack-base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require('./config');
const devConfig = {
    entry: webpackBase._entry,
    output: webpackBase._output,
    module: webpackBase._module,
    resolve: webpackBase._resolve,
    devServer: {
        contentBase: './build',
        hot: true,
        inline: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'scripts/[name].bundle.js'
        }),
        new ExtractTextPlugin("styles/[name].css"),
        new HtmlWebpackPlugin({
            template: config.srcDir + '/index.html',
            filename: config.buildDir + '/views/index.html'
        })
    ]
};
module.exports = devConfig;