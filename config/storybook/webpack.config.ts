import { Configuration, RuleSetRule } from 'webpack';
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

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      };
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack'
      }
    ]
  });

  config.module?.rules?.push(buildCSSLoader(true));

  return config;
};
