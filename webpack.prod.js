const path = require('path');
const { merge } = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.config');

module.exports = [
  merge(
    common,
    {
      mode: 'production',
      output: {
        path: path.join(__dirname, '/dist'),
      },
      optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      },
      plugins: [
        new CleanWebpackPlugin({
          cleanAfterEveryBuildPatterns: ['dist'],
        }),
        // new CopyPlugin({
        //   patterns: [
        //     { from: './public/robots.txt', to: 'robots.txt' },
        //     { from: './public/sitemap.xml', to: 'sitemap.xml' },
        //   ],
        // }),
      ],
    }
  ),
];