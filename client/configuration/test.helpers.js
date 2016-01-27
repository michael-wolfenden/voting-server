// phantomjs require es2015 pollyfills
require('babel-polyfill');

const chai = require('chai');
const jsxChai = require('jsx-chai').default;

chai.use(jsxChai);