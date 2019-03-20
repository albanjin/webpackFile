const fs = require('fs')
const path = require('path')
const rootPath = path.join(__dirname, '../')
let files = fs.readdirSync(path.join(rootPath, './src/pages'))
let entry = {}
let isDirectory = [] //文件夹
let isFile = [] //文件
let plugin = []
files.forEach(item => {
    let obj = {}
    let stat = fs.statSync(path.join(rootPath, './src/pages/', item))
    if (stat.isDirectory()) {
        isDirectory.push({
            relativePath: path.join('./src/pages/', item),
            item
        })
        entry[item] = './' + path.join('./src/pages/', item, './index.js')
        plugin.push(`new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './${item}.html',
            chunks:[${JSON.stringify(item)}]
        })`)

    }
    if (stat.isFile()) {
        isFile.push({
            relativePath: path.join('./src/pages/', item),
            item,
            extname: path.extname(item)
        })
        let name = item.replace(path.extname(item), '')
        entry[name] = './' + path.join('./src/pages/', item)
        plugin.push(`new HtmlWebpackPlugin({
            template:'./index.html',
            filename: './${name}.html',
            chunks:[${JSON.stringify(name)}]
        })`)
    }
})

// console.log(plugin)
// export const entry = ${JSON.stringify(entry)}
//     export const plugin = [${plugin}]

fs.writeFileSync('./config/config.base.js', `
const HtmlWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
    entry:${JSON.stringify(entry)},
    plugins : [${plugin}]
}
`)