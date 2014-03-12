# NPM Configuration Manager
===

## Usage

```javascript
var NPMCM = require('NPMCM');

NPMCM('port'); // '8000'
```

## Sources

- `./package.json`
```json
...
config: {
    port: 8000
},
...
```

- Environment variables
```shell
export port=8000
```

- NPM Environnement variables
```shell
npm config set port 8000
npm config set port 8000 --global

npm config set <application-name>:port 8000
npm config set <application-name>:port 8000 --global
```
