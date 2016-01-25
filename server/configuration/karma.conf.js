const path = require('path');
const webpack = require('webpack');

const appDir = path.join(__dirname, '..', 'src', 'app');

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
            module: {
                preLoaders: [
                    {
                        test: /\.js$/,
                        include: appDir,
                        loaders: [
                            'eslint'
                        ]
                    }
                ],

                loaders: [
                    {
                        test: /\.js$/,
                        include: appDir,
                        loaders: [
                            'babel'
                        ]
                    },
                    {
                        test: /\.json$/,
                        include: appDir,
                        loaders: [
                            'json'
                        ]
                    }
                ]
            },
        }
    });
};