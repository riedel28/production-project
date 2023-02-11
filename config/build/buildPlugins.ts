import {
  type WebpackPluginInstance,
  ProgressPlugin,
  DefinePlugin,
  HotModuleReplacementPlugin
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { type BuildOptions } from './types/config';

export function buildPlugins ({
  paths,
  isDev
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new ProgressPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ];
}
