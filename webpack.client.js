const path = require('path');
const { merge } = require('webpack-merge');
const WebpackMessages = require('webpack-messages');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
  // tell webpack the root/entry file of our client application
  entry: './client/src/index.js',

  // tell webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new WebpackMessages({
      name: 'client',
      logger: (str) => console.log(`\n>> ${str}...\n`),
    }),
  ],
};

module.exports = merge([baseConfig, config]);
