const defaultStatsOptions = {
  colors: true
};
const defaultDevServerOptions = {
  stats: defaultStatsOptions
};
const defaultServerOptions = {
  port: 3000,
  host: 'localhost'
};

export default (config, userDevServerOptions, userServerOptions) => (input) => {
  return function webpackDevServer(log) {
    const webpackLib = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');

    return new Promise((resolve, reject) => {
      const options = {
        ...defaultDevServerOptions,
        ...userDevServerOptions
      };
      const { port, host } = {
        ...defaultServerOptions,
        ...userServerOptions
      };
      const server = new WebpackDevServer(webpackLib(config), options);

      server.listen(port, host, (error) => {
        if (error) {
          return reject(error);
        }

        log(`http://${host}:${port}/`);
        resolve(input);
      });
    });
  };
};
