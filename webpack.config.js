const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   entry: './src/js/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
   },
   module:{
      rules:[
         {
            test: /\.(sa|sc|c)ss$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
            ],
         },
         {
            test: /\.css$/i,
            use: [
               'style-loader',
               'css-loader'
            ]
         }
      ]
   },
   plugins: [
      new htmlWebpackPlugin({
         filename: 'index.html',
         template: './src/views/index.html',
      }),
      new MiniCssExtractPlugin({
         filename: 'styles.css'
      })
   ]
}