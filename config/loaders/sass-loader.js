import { appSrc } from '../paths';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 * Exprorts loader
 *
 * @param {Boolean} isDev - Node env
 * @return {Object} loader configuration
 */
module.exports = isDev => {
  const test = /\.scss$/;

  const loaders = [
    {
      loader: 'css-loader',
      options: Object.assign(
        {
          minimize: !isDev,
          sourceMap: isDev,
          importLoaders: 1,
          convertToAbsoluteUrls: true
        },
        {
          localIdentName: '[name]-[local]-[hash:base64:2]',
          modules: true
        }
      )
    },
    {
      loader: require.resolve('postcss-loader'),
      options: { sourceMap: isDev }
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: isDev
      }
    }
  ];

  if (isDev) {
    return {
      test,
      include: appSrc,
      use: Array.concat(
        [
          {
            loader: require.resolve('style-loader'),
            options: { sourceMap: isDev }
          }
        ],
        loaders
      )
    };
  }

  return {
    test,
    include: appSrc,
    loader: ExtractTextPlugin.extract({
      fallback: require.resolve('style-loader'),
      use: loaders
    })
  };
};
