'use strict';

var NPMCM = require('./');

['package', 'npmrcpackage', 'cli', 'npmrc', 'env'].forEach(function(key){
	var value = NPMCM(key);

	if(key !== value)
		throw new Error(key + ' : ' + value);
});