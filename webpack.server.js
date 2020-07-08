const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // inform webpack that we are building a bundle for a nodeJS rather than for the browser
  target: 'node',

  // tell webpack the root/entry file of our server application
  entry: './server/index.js',

  // tell webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader', // webpack loader module
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Looks for index.js first, then falls back to index.jsx
  },

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
