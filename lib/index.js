'use strict';

var toLowerCase = function(val){
  return String.prototype.toLowerCase.apply(val);
},
  toUpperCase = function(val){
  return String.prototype.toUpperCase.apply(val);
},
  prefixes = [
  // Flag
  ['npm_config_', toLowerCase],
  // Env
  ['', toUpperCase],
  // NPM
  ['npm_config_' + process.env.npm_package_name + '_', toLowerCase],
  ['npm_package_config_', toLowerCase]
];

module.exports = function(key){
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i][0];
    key = prefixes[i][1](key);
    if (process.env.hasOwnProperty(prefix + key))
      return process.env[prefix + key];
  }
  return;
};
