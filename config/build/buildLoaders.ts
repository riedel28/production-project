import type { RuleSetRule } from 'webpack';

import type { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack'
      }
    ]
  };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCSSLoader(isDev);

  // Если не используем тайпскрипт - нужен babel-loader
  // const typescriptLoader = {
  //     test: /\.tsx?$/,
  //     use: 'ts-loader',
  //     exclude: /node_modules/,
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader
  ];
};
