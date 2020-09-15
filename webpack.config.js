const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: {
    "index": path.join(__dirname, "entry", "index"),
    "scss": path.join(__dirname, "entry", "scss"),
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "/"),
    host: process.env.HOST,
    port: process.env.PORT,
    disableHostCheck: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
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
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: ['index', 'scss'],
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      template: "./src/scss/index.scss",
      publicPath: "dist"
    }),
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@elements": path.resolve(__dirname, "src/elements"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@icons": path.resolve(__dirname, "static/icons"),
      "@images": path.resolve(__dirname, "static/images"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@services": path.resolve(__dirname, "src/services"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@views": path.resolve(__dirname, "src/views"),
    }
  }
};
