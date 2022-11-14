// development config
const { merge } = require("webpack-merge");
const commonConfig = require("../../../../shared/webpack.config");
const moduleRegistry = require("../../../../shared/module_registry");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = merge(commonConfig, {
    mode: "development",
    context: resolve(__dirname, "../../src"),
    devServer: {
        port: moduleRegistry.container.port
    },
    plugins: [new HtmlWebpackPlugin({template: "index.html"})],
});