const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: {
    app: './src/app/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'cache-loader'
      }, {
        loader: 'thread-loader',
      }, {
        loader: 'babel-loader',
      }]
    }]
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: process.cwd(),
    }),
  ],
  stats: {
    builtAt: true,
    errors: true,
    assets: false,
    entrypoints: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    modules: false,
    version: false,
  }
}
