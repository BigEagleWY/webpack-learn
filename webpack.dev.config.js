const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

module.exports = webpackMerge(webpackBaseConfig,{
    mode:"development",
    output:{
        filename:"js/[name].[hash:6].js",
        publicPath:"/",
        path:path.resolve(__dirname,"./dev/")
    },
    devServer:{
        contentBase:"./dev",
        hot:true,
        port:9001,
        host:"localhost"
    }
});