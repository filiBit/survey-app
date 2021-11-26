const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './frontend/src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/template.html',
    }),
  ],
  devServer: {
    static: './dev-build',
    historyApiFallback: {
      index: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: '3.19.1' } }], '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.tsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: '3.19.1' } }], '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
