const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/app/index.html`),
      env: 'production',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['client']
    }),
  ],
  devtool: 'source-map',
});
