const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const config = require('./config');
const baseConfig = {
    _entry: {
        app: config.srcDir + '/app.js'
    },
    _output: {
        filename: 'scripts/[name].js',
        path: config.buildDir + '/assets/'
    },
    _module: {
        rules: [{
            test: /\.vue?$/,
            include: [
                path.resolve(config.srcDir)
            ],
            exclude: [
                path.resolve(__dirname, "../node_modules")
            ],
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallbackLoader: 'vue-style-loader'
                    }),
                }
            }
        }]
    },
    _resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
module.exports = baseConfig;