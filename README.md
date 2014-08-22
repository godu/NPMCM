# NPM Configuration Manager
===

## Usage

```JavaScript
var NPMCM = require('NPMCM');

NPMCM('port'); // '8000'
```

## Sources & priority

1. Environment variables

```Shell
export port=8000
```

2. `.npmrc` --global

```INI
port=8000
```

3. CLI

```Shell
npm start --port=8000
```

4. `.npmrc`

```INI
<package-name>:port=8000
```

5. `package.json`

```JSON
{
	config: {
		port: 8000
	}
}
```