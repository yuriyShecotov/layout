let mode = 'development';
if(process.env.NODE_ENV === 'production'){
  mode = 'production'
}

console.log(mode + ' mode');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");






module.exports = {
  mode: mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
       }),

    ],
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [

               (mode === 'development') ? "style-loader": MiniCssExtractPlugin.loader,
               "css-loader",
               "sass-loader",
            ],
          },
        ],
        
      },
}