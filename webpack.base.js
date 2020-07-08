module.exports = {
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
};
