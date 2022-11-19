// production config
const { merge } = require("webpack-merge");
const commonConfig = require("../../../../shared/webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = merge(commonConfig, {
    mode: "production",
    context: resolve(__dirname, "../../src"),
    devtool: "source-map",
    output: {
        filename: "js/bundle.[contenthash].min.js",
        path: resolve(__dirname, "../../dist"),
        publicPath: "/",
    },
    plugins: [new HtmlWebpackPlugin({template: "index.html"})],
});