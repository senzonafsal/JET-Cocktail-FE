// development config
const {merge} = require("webpack-merge");
const {commonConfig} = require("jet-cocktail-shared/src/Build/webpackConfig");
const moduleRegistry = require("jet-cocktail-shared/src/Build/moduleRegistry");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;

const {resolve} = require("path");
const deps = require("../../package.json").dependencies;
module.exports = merge(commonConfig, {
    mode: "development",
    context: resolve(__dirname, "../../src"),
    devServer: {
        port: moduleRegistry.search.port,
    },
    plugins: [new ModuleFederationPlugin({
        name: "search",
        filename: "remoteEntry.js",
        exposes: {
            "./SearchField": "./components/SearchField",
            "./Filter": "./components/Filter",
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
            },
        },
    }), new HtmlWebpackPlugin({template: "index.html"}),
    ],
});