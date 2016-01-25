const path = require('path');
var qs = require('webpack-query-string');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = require('./paths');

const webpackOptions = {

    entry: [
        'babel-polyfill',
        PATHS.entryFile
    ],

    output: {
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                include: PATHS.appDir,
                loader: 'eslint'
            }
        ],

        loaders: [
            {
                test: /\.jsx?$/,
                include: PATHS.appDir,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'react-hmre'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.index,
            inject: true
        }),

        new OpenBrowserPlugin({
            url: `http://localhost:8080/index.html`
        })
    ]
};

module.exports = webpackOptions;