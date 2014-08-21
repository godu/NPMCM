var NPMCM = require('./');

if(NPMCM('package') !== 'package')
  throw new Error('package');
if(NPMCM('npmrc') !== 'npmrc')
  throw new Error('npmrc');
if(NPMCM('env') !== 'env')
  throw new Error('env');
