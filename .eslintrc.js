module.exports = {
    "env": {
     
        "es6": true
    },
    "extends": "eslint:recommended",
    
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        allowNamedFunctions: 1, 
        allowUnboundThis: 1
    }
};

