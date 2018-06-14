const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "/dist/"),
    filename: "[name].js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 8080,
    contentBase: "./public",
    hot: true,
    inline: true
  }
};
