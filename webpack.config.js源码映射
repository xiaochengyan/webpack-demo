let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    // 多个入口
    entry:{
        home: './src/index.js',
        other: './src/other.js'
    },
    output:{
        // [name] home, other.js
        filename:'[name][hash:8].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'other.html',
            chunks:['other']
        })
    ]
}