const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
<<<<<<< Updated upstream
const dotenv = require('dotenv');
const webpack = require('webpack');
=======
const webpack = require("webpack");
>>>>>>> Stashed changes

dotenv.config();

module.exports = (env, argv) => {
<<<<<<< Updated upstream
    const prod = argv.mode === "production";
    
    return {
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval",
        entry: "./src/index.tsx",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "[name].js",
        },
        devServer: {
            port: 3000,
            hot: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            alias: {
                "@public": path.resolve("public"),
            }  
=======
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@public": path.resolve(__dirname, "public"),
        "@components": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["babel-loader", "ts-loader"],
>>>>>>> Stashed changes
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
<<<<<<< Updated upstream
        plugins: [
            new webpack.ProvidePlugin({
                React: "react",
            }),
            // new Dotenv(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: process.env.NODE_ENV === 'production' ? {
                    collapseWhitespace: true, // 빈칸 제거
                    removeComments: true, // 주석 제거
                } : false,
            }),
            new webpack.DefinePlugin({
                'process.env' : JSON.stringify(process.env),
            }),
            new CleanWebpackPlugin(),
        ],
    }
};
=======
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify:
          process.env.NODE_ENV === "production"
            ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
              }
            : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
>>>>>>> Stashed changes
