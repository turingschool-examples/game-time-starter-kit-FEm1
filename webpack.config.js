const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};
