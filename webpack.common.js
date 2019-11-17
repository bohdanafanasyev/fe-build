const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.js', './src/styles.css']
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,

        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }

      },
      {
        test: /\.(jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './'
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new ManifestPlugin(),
    new StylelintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: ["**/*.css"]
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: `Webpack is Awesome`,
    })
  ],
};
