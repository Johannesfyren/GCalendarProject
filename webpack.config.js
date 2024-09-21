const { watch } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const NodeExternals = require('webpack-node-externals');

const browserConfig = { 
  entry: {
    index: './src/index.js',
    // gapi: './src/gapi.js',
    // stateController: './src/stateController.js',
    // countdown:'./src/countDown.js',
    // manMeetings:'./src/manipulateMeetings.js',
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    },

    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'img/[name][ext]',
      },
    },
    
    ],
  },
  watch: true,
};

// Configuration for Node.js file
const nodeConfig = {
  entry: './src/indexNode.js',  // Add your Node.js file here
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'node.bundle.js', // Output file for Node.js
  },
  target: 'node', // Make sure Webpack understands this is for Node.js
  externals: [NodeExternals()], // Exclude node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

// Export both configurations
module.exports = [browserConfig, nodeConfig];