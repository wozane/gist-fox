const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: './dist/bundle-[hash].js',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    // noInfo: true,
  },
}