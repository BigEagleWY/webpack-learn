const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:"less-loader"
            },
            {
                test:/\.ts$/,
                use:"ts-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./template/index.html"
        })
    ]
}