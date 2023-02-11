import { type Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { type BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions
): WebpackDevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  };
};
