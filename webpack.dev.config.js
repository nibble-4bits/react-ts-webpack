const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: './dev/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'index.js',
    clean: { keep: 'index.html' },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.svg$/, use: '@svgr/webpack' },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    watchContentBase: true,
    open: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
