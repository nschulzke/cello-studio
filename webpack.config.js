const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'), 'node_modules'
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  entry: ['babel-polyfill', './lib/renderers/dom/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.css?$/, use: ["style-loader", "css-loader"] },
    ],
  }
};

module.exports = config;
