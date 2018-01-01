import { appSrc } from '../paths';

module.esports = {
  test: /\.(js|jsx)$/,
  enforce: 'pre',
  use: [
    {
      options: {
        eslintPath: require.resolve('eslint')
      },
      loader: require.resolve('eslint-loader')
    }
  ],
  include: appSrc
};
