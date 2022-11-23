/////////////////////////////////////////////
// Режимразроботки
//////////////////////////////////////////////////////////↓
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}

console.log(mode + ' mode');
const path = require('path');
/////////////////////////////////////////////
// подключаем плавгины
//////////////////////////////////////////////////////////↓
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");






module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, 'src', 'index.js'),//входной  фаил
  output: {
    path: path.resolve(__dirname, 'dist'), //выходная папака
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

          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",

        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.jpe?g$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/imgJpeg/[name].[ext]'
        }
      },

      {
        test: /\.png$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/imgPng/[name].[ext]'
        }
      },

      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/imgSvg/[name].[ext]'
        }
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/imgIco/[name].[ext]'
        }
      },
      {
        test: /\.gif$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/imgGif/[name].[ext]'
        }
      },




      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ],

  },
}