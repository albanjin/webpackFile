
const HtmlWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
    entry:{"Index":"./src/pages/Index/index.js","Other":"./src/pages/Other/index.js","three":"./src/pages/three.js"},
    plugins : [new HtmlWebpackPlugin({
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
