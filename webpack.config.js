const path = require('path')
const publicDir = path.resolve(__dirname, 'public')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    movies: './src/movies/index.js',
    gallery: './src/gallery/index.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js',
    publicPath: './'
  },
  devServer: {
    contentBase: publicDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3000,
    openPage: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'resolve-url-loader',
            'postcss-loader',
            'sass-loader'
          ],
          publicPath: publicDir
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new CopyWebpackPlugin([
      { from: './src/movies/movies.html', to: './movies/movies.html' },
      { from: './src/gallery/gallery.html', to: './gallery/gallery.html' },
      { from: './src/index.html' }
    ])
  ]
}
