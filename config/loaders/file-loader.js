module.exports = {
  // Exclude `js` files to keep "css" loader working as it injects
  // it's runtime that would otherwise processed through "file" loader.
  // Also exclude `html` and `json` extensions so they get processed
  // by webpacks internal loaders.
  exclude: [/\.js$/, /\.html$/, /\.json$/],
  loader: require.resolve('file-loader'),
  options: { name: 'static/media/[name].[hash:8].[ext]' }
};
