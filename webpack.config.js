const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index_bundle.js",
  },
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    template : './src/index.html'
  })],
};