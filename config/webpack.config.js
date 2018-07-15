// webpack v4
const path = require("path");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
      // {
      //   test: /\.(jpe?g|png|gif)$/,
      //   loader: "url-loader",
      //   options: {
      //     // Images larger than 10 KB won’t be inlined 
      //   }
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-url-loader',
      //   options: {
      //     // Images larger than 10 KB won’t be inlined
      //     limit: 10 * 1024,
      //     // Remove quotes around the encoded URL –
      //     // they’re rarely useful
      //     noquotes: true,
      //   }
      // }
      //   {
      //     test: /\.css$/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: "style-loader",
      //       use: ["css-loader"]
      //     })
      //   }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "../dist"), {}),
    // new ExtractTextPlugin({
    //   filename: "style.[hash].css",
    //   disable: false,
    //   allChunks: true
    // }),
    new MiniCssExtractPlugin({
      filename: "style.[chunkhash].css"
    }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new WebpackMd5Hash()
  ]
};
