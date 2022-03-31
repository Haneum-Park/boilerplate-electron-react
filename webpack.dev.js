const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = [
  merge(
    common,
    {
      mode: 'development',
      devtool: 'source-map',
      devServer: {
        host: 'localhost',
        port: process.env.PORT || 8000,
        open: process.env.BROWSER && process.env.BROWSER === 'none' ? false : true,
        compress: true,
        historyApiFallback: true,
        hot: true,
        liveReload: true,
        static: {
          publicPath: path.join(__dirname, 'dist'),
          watch: true,
        },
        client: {
          logging: 'log',
          // progress: true,
        },
      },
    },
  ),
];