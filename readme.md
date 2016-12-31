# start-webpack-dev-server

[![npm](https://img.shields.io/npm/v/start-webpack-dev-server.svg?style=flat-square)](https://www.npmjs.com/package/start-webpack-dev-server)
[![linux build](https://img.shields.io/travis/start-runner/webpack-dev-server/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/webpack-dev-server)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/webpack-dev-server/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/webpack-dev-server)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/webpack-dev-server/master.svg?style=flat-square)](https://codecov.io/github/start-runner/webpack-dev-server)
[![deps](https://img.shields.io/gemnasium/start-runner/webpack-dev-server.svg?style=flat-square)](https://gemnasium.com/start-runner/webpack-dev-server)

[Webpack dev-server 2](https://webpack.js.org/) task for [Start](https://github.com/start-runner/start). You might also need [start-webpack](https://github.com/start-runner/webpack).

## Install

```sh
npm install --save-dev start-webpack-dev-server
# or
yarn add --dev start-webpack-dev-server
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import webpackDevServer from 'start-webpack-dev-server';

const start = Start(reporter());

export const dev = () => start(
  webpackDevServer(require('conf/webpack.dev'))
);
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`webpackDevServer(config, devServerOptions, serverOptions)`

* `config` – [webpack config](https://webpack.js.org/configuration/)
* `devServerOptions` – [webpack dev-server options](https://webpack.github.io/docs/webpack-dev-server.html#api), `{ stats: { colors: true } }` by default
* `serverOptions` – `{ port: 3000, host: 'localhost' }` by default
