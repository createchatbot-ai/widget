const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './packages/core/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chatbot.min.js',
    library: 'Chatbot',
    libraryTarget: 'window',
    libraryExport: 'default'  
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ]
  }
};

module.exports = config;
