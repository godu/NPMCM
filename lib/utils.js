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
        console.log(prefix, key, process.env.hasOwnProperty(prefix + key));
        if (process.env.hasOwnProperty(prefix + key))
            return process.env[prefix + key];
    }
    return;
};

module.exports.deepValue = function(obj, path, value){
    var properties = path.split('_');

    for (var i = 0; i < properties.length; i++) {
        var property = properties[i];
        var isLast = (properties.length === i + 1);

        console.log(property, isLast, i, properties, value, obj);

        if(isLast)
            if(value)
                obj[property] = value;
            else
                return obj[property];
        else if(obj.hasOwnProperty(property))
            if(obj.property instanceof Object)
                return;
            else
                obj = obj[property];
        else if (value)
            obj = obj[property] = {};
        else
            return;
    }
};

module.exports.each = function(obj, prefix){
    var rg = new RegExp('^' + prefix + '(.*)$', 'g');
    return Object.keys(obj).reduce(function(cur, key){
        var match = rg.exec(key);
        if(!match) return cur;

        var cleanedKey = match[1];
        if(cleanedKey){
            module.exports.deepValue(cur, cleanedKey, obj[key]);
        }
        return cur;
    }, {});
};
