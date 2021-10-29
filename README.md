# config-prettier

_config-prettier_ is a configuration preset for [Prettier] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-prettier

... or [yarn], like so:

    yarn add --dev @fundamend/config-prettier

## Usage

In your [.prettierrc.js], import _config-prettier_ and spread it into the exported object, like so:

```js
const config = require('@fundamend/config-prettier');

module.exports = {
	...config
};
```

You can extend the imported preset by adding additional [configuration options] to the exported configuration object, for example like this:

```js
const config = require('@fundamend/config-prettier');

module.exports = {
	...config,
	tabWidth: 4
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[configuration options]: https://prettier.io/docs/en/options.html
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[prettier]: https://prettier.io/
[.prettierrc.js]: https://prettier.io/docs/en/configuration.html
[yarn]: https://yarnpkg.com/
