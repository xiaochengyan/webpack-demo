let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let cleanWebpackPlugin = require('clean-webpack-plugin')
let copyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')
// webpack 小插件的使用
// 1> cleanWebpackPlugin
// 2> copywebpackPlugin
// 3> bannerPlugin 内置

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
    resolve:{
        modules:[path.resolve('node_modlues')]
    },
    devServer:{

        //1.前端单独来模拟数据
        before(app){ // 提供的方法
            app.get('/user',(req,res)=>{
                res.json({name:'adfasd'})
            })
        },
    //2.开启代理
        // proxy:{
        //     '/api':{
        //         target:'http://localhost:3000',
        //         pathRewrite:{
        //             '/api':''
        //         }
        //     } //配置一个代理
        // }
    },
    watch:true, // 更改文件 实时变化
    watchOptions:{
        poll: 1000, // 每秒问我1000次
        aggregateTimeout: 500, // 防抖 我一直输入代码
        ignored:/node_modules/ //不需要监控哪个文件
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
            chunks:['home']
        }),
        new cleanWebpackPlugin('./dist'),
        new copyWebpackPlugin([{
            from: 'doc',
            to: './'
        }]),
        new webpack.BannerPlugin('make 2019 by xiao')
    ]
}