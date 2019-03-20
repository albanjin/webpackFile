const path = require("path")
    // import html-webpack-
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')

const Configbase = require('./config.base.js')

// bable转换
module.exports = merge(Configbase, {
    // entry: entry,
    mode: "production",
    output: {
        filename: "[name]-[hash:8].js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {

                }
            },
            exclude: /node_modules/
        }]
    },
    plugins: [

    ]
});