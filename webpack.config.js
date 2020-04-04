const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isLocal = false;
module.exports = {
entry: {
   app: './src/index.js'
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isLocal ? 'style-loader' :
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                sourceMap: true
                }
            }
            ]
              },
    {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
            isLocal ? 'style-loader' :
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
},
  devtool : 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        filename: isLocal ? '[name].css' :'[name].[hash].css',
        chunkFilename: isLocal? '[id].css' : '[id].[hash].css'
    })
  ]
};