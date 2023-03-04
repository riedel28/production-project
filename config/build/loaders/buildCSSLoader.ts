import MiniCSSExtractPlugin from 'mini-css-extract-plugin';

// renamed from buildCSSLoader
export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCSSExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => {
              return Boolean(resPath.includes('.module.'));
            },
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };
};
