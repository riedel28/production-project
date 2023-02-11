import { type RuleSetRule } from 'webpack';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

import { type BuildOptions } from './types/config';

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

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCSSExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

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
