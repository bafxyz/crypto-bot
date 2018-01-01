module.exports = {
  // "url" loader works like "file" loader except that it embeds assets
  // smaller than specified limit in bytes as data URLs to avoid requests.
  // A missing `test` is equivalent to a match.
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'static/media/[name].[hash:8].[ext]'
  }
};
