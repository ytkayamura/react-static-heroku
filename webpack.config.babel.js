import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './js/index.jsx',
  output: {
    path: path.join(__dirname, '/www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html?$/, loader: 'html-loader' },
    ],
  },
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src/js') ],
    extensions: ['.js'],
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'www'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 8888,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
