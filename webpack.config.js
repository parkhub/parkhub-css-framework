const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: './src/index.js',
 output: {
   filename: './dist/index.js'
 },
 watch: true,
 module: {
   rules: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      },
     {
       test: /\.(sass|scss)$/,
       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
     }
   ]
 },
 plugins: [
  new CopyWebpackPlugin([{
    from: 'src/fonts',
    to: 'dist/fonts'
  }]),
  new ExtractTextPlugin({
    filename: 'dist/styles.css',
    allChunks: true,
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
 ],
};
