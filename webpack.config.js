const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
       test: /\.(sass|scss)$/,
       loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
     }
   ]
 },
 plugins: [
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
