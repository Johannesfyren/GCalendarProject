const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// import "./style.css";
// import * as css from "style.css";

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  
};