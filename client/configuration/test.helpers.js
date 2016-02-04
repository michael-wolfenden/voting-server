// phantomjs require es2015 pollyfills
require('babel-polyfill');

// configure jsxChai
const chai = require('chai');
const jsxChai = require('jsx-chai').default;

chai.use(jsxChai);

// configure teaspoon
const $ = require('teaspoon');

$.registerPseudo('disabled', function(node, innerSelector) {
  var domNode = $.dom(node.instance);

  // Nodes can be wrapped in a teaspoon collection
  return $(node).is('[disabled]')
    || (domNode && domNode.disabled)
})