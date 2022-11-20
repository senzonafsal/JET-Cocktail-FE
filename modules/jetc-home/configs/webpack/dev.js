// development config
const {merge} = require("webpack-merge");
const {commonConfig, getRemoteEntryUrl} = require("../../../../shared/webpack.config");
const moduleRegistry = require("../../../../shared/module_registry");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

const {resolve} = require("path");
const deps = require("../../package.json").dependencies;
const moduleName = "home";
module.exports = merge(commonConfig, {
    mode: "development",
    context: resolve(__dirname, "../../src"),
    devServer: {
        port: moduleRegistry[moduleName].port
    },
    plugins: [new ModuleFederationPlugin({
        name: moduleName,
        filename: "remoteEntry.js",
        remotes: {
            "jetc-search": `search@${getRemoteEntryUrl(moduleRegistry.search.port)}`,
            "jetc-product": `product@${getRemoteEntryUrl(moduleRegistry.product.port)}`,
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
            "jet-cocktail-shared": {
                eager: true,
                singleton: true,
                import: "jet-cocktail-shared",
                requiredVersion: require('jet-cocktail-shared/package.json').version,
            }
        },
    }), new HtmlWebpackPlugin({template: "index.html"})],
});