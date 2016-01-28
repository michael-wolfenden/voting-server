module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "indent": [2, 4],
        "padded-blocks": 0,
        "no-use-before-define": 0,
        "react/jsx-no-bind": [1, {
            "allowArrowFunctions": true
        }],
        "react/jsx-quotes": [1, "single"]
    },
    "env": {
        "mocha": true
    }
};