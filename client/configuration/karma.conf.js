var webpack = require('webpack');
var webpackConfig = require('./webpack.development.config');

module.exports = function (config) {
    config.set({
        
        // run browserless
        browsers: ['PhantomJS'],
        
        // use the mocha test framework
        frameworks: ['mocha'],
         
        // just load this file
        files: [
            'test.specs.js'
        ],
        
        // preprocess with webpack
        preprocessors: {
            'test.specs.js': ['webpack']
        },
        
        // report results in this format
        reporters: ['mocha'],

        webpack: {
            module: webpackConfig.module
        },
        
        // please don't spam the console when running in karma!
        webpackServer: {
            noInfo: true
        }
    });
};