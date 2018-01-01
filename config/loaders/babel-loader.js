import { appSrc } from '../paths';

/**
 * Exprorts loader
 *
 * @param {Boolean} isDev - Node env
 * @return {Object} loader configuration
 */
module.exports = isDev => {
  return {
    test: /.jsx?$/,
    include: appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: isDev ? true : false,
      // Compact syntax should be on prod
      compact: !isDev ? true : false
    }
  };
};
