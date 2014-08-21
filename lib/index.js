'use strict';

module.exports = function(key) {
    return process.env[key] ||
        process.env['npm_config_' + key] ||
        process.env['npm_package_config_' + key];
}
