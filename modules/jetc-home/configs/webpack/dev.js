// development config
const {merge} = require("webpack-merge");
const commonConfig = require("../../../../shared/webpack.config");
const moduleRegistry = require("../../../../shared/module_registry");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

const {resolve} = require("path");
const deps = require("../../package.json").dependencies;

module.exports = merge(commonConfig, {
    mode: "development",
    context: resolve(__dirname, "../../src"),
    devServer: {
        port: moduleRegistry.container.port
    },
    plugins: [new ModuleFederationPlugin({
        name: "home",
        filename: "remoteEntry.js",
        remotes: {
            "jetc-search": `search@http://localhost:${moduleRegistry.search.port}/remoteEntry.js`,
            "jetc-product": `product@http://localhost:${moduleRegistry.product.port}/remoteEntry.js`,
        },
        shared: {
            ...deps,
            react: {
                eager: true,
                singleton: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
                eager: true,
                singleton: true,
                requiredVersion: deps["react-dom"],
            },
        },
    }), new HtmlWebpackPlugin({template: "index.html"})],
});