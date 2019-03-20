
const HtmlWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
    entry:{"333":"./src/pages/333/index.js","Index":"./src/pages/Index/index.js","Other":"./src/pages/Other/index.js","three":"./src/pages/three.js"},
    plugins : [new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './333.html',
            chunks:["333"]
        }),new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './Index.html',
            chunks:["Index"]
        }),new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './Other.html',
            chunks:["Other"]
        }),new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './three.html',
            chunks:["three"]
        })]
}
