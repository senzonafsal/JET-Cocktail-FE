// shared webpack config

const getRemoteEntryUrl = (port) => `//localhost:${port}/remoteEntry.js`;
const commonConfig = {
    entry: "./index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/, /\.js?$/, /\.ts?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env','@babel/preset-react'] },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
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
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
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
            },
        ]
    }
}
module.exports = {commonConfig, getRemoteEntryUrl};