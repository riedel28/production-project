import { type RuleSetRule } from 'webpack';

import { type BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack'
      }
    ]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = buildCSSLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru']
            }
          ]
        ]
      }
    }
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
