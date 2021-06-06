let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCss = require('optimize-css-assets-webpack-plugin') // 压缩css
let UglifJs = require('uglifyjs-webpack-plugin ')
let webpack = require('webpack')
module.exports = {
    optimization:{ // 开发环境不启用优化项
        minimizer:[
            new OptimizeCss(),
            new UglifJs({
                cache:true, // 开启到node_modules中的缓存中
                parallel:true, // 并发打包
                sourceMap:true // 源码映射
            })
        ]  
    },
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        //publicPath: 'http://www.baidu.com'
    },
    plugins: [ // 数组 放着所有webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        }),
        // new webpack.ProvidePlugin({ // 在每个模块中都注入$模块
        //     $: 'jquery'
        // })
    ],
    externals:{
        jquery: "$"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }, 
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader: 'url-loader', 
                    options:{
                        limit:200*1024,
                        outputPath: '/img/',
                        publicPath: 'http://www.baidu.com'
                    }
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader: 'file-loader', 
                }
            },
            {
                test: /\.js$/,
                use:{
                    loader: 'eslint-loader',// 添加代码校验器
                    options:{
                        enforce: 'pre'  // 强制在普通loader之前执行 或者
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{ // 用babel-loader 需要把es6 转化为es5
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            ['@babel/plugin-proposal-class-properties'],
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                },
                include: path.reslove(__dirname,'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', // 加上前缀
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // @import 解析路径
                    'postcss-loader', // 加上前缀
                    'less-loader' // 把less ->css
                ]
            }
        ]

    }
}