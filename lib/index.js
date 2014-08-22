'use strict';

function getEnv(key) {
	return process.env[key];
}

function getConfig(key) {
	return process.env['npm_config_' + key];
}

function getPackage(key) {
	return process.env['npm_package_config_' + key];
}

function getValue(key) {
	return getEnv(key) || getConfig(key) || getPackage(key);
}

function getArray(key) {
	var output = [];
	var value;
	var i = 0;
	do{	
		value = getValue([key, i].join('_'));
		i++;
	}
	while(value && output.push(value));

	return output.length > 0 ? output: undefined;
}

module.exports = function(key) {
    return getValue(key) || getArray(key);
};
