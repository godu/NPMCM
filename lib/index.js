'use strict';

var prefixes = [
    // Flag
    'npm_config_',
    // Env
    '',
    // NPM
    'npm_config_' + process.env.npm_package_name + '_',
    'npm_package_config_'
];

module.exports = function(key){
    for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        if (process.env.hasOwnProperty(prefix + key))
            return process.env[prefix + key];
    }
    return;
};
