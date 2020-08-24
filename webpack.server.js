const path = require('path');
const { merge } = require('webpack-merge');
const WebpackMessages = require('webpack-messages');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const config = {
  // inform webpack that we are building a bundle for a nodeJS rather than for the browser
  target: 'node',

  // tell webpack the root/entry file of our server application
  entry: './server/index.js',

  // tell webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new WebpackMessages({
      name: 'Server',
      logger: (str) => console.log(`\n>> ${str}...\n`),
    }),
  ],

  /* --------------------------------- */
  // this rule tells webpack to not to bundle any library in the
  // output file if the library which is inside the node_module folder

  /*
  it also removes this warning:-
    WARNING in ./node_modules/express/lib/view.js
    Critical dependency: the request of a dependency is an expression
  */
  externals: [webpackNodeExternals()],
  /* --------------------------------- */
};

module.exports = merge([baseConfig, config]);
