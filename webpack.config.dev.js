const { merge } = require('webpack-merge');
const path = require('path');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000,
  },
});
