import { Configuration } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.tsx', '.ts');

  config.module?.rules?.push(buildCSSLoader(true));

  return config;
};
