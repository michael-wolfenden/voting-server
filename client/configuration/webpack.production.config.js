const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const sourceMappingURL = require("source-map-url")
var qs = require('webpack-query-string');
const fs = require('fs');

const PATHS = require('./paths');
const pkg = require('../package.json');

const webpackConfig = {

    entry: {
        app: PATHS.entryFile,
        vendor: Object.keys(pkg.dependencies)
    },

    output: {
        path: PATHS.distDir,
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },

    devtool: 'source-map',

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
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    eslint: {
        failOnWarning: true,
        failOnError: true
    },

    plugins: [
        
        new CleanWebpackPlugin(PATHS.distDir, {
            root: PATHS.rootDir
        }),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),

        new webpack.NamedModulesPlugin(),

        new HtmlWebpackPlugin({
            excludeChunks: ['manifest'],
            inject: true,
            templateContent: addManifestChunckContentsToIndexTemplate,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

function addManifestChunckContentsToIndexTemplate(templateParams, compilation, callback) {
    Object.keys(compilation.assets)
        .filter(function (key) {
            return key.indexOf('manifest.') !== -1;
        })
        .forEach(function (manifestAsset) {
            var isManifestSourceMap = manifestAsset.indexOf('.map') !== -1;
            if (!isManifestSourceMap) {
                // manifestSource will include the //# sourceMappingURL line if including sourcemaps so we need to remove
                var manifestSource = compilation.assets[manifestAsset].source();
                templateParams.htmlWebpackPlugin.options.webpackManifest = sourceMappingURL.removeFrom(manifestSource);
            }

            delete compilation.assets[manifestAsset];
        });

    fs.readFile(PATHS.index, 'utf8', callback);
};

module.exports = webpackConfig;