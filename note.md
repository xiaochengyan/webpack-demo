## webpack安装
- 安装本地webpack
- webpack webpack-cli -D
yarn init -y
yarn add webpack-cli -D

## webpack 可以进行零配置
- 打包工具 -》输出后的结果 js 输出打包
The engine “node” is incompatible with this module
解决办法：运行命令
yarn config set ignore-engines true

npm install webpack -g
 npm install webpack-cli -g
npx webpack

yarn add less less-loader

yarn add postcss-loader autoprefixer
## 配置npm 插件
www.npmjs.com

yarn add mini-css-extract-plugin -D

yarn add optimize-css-assets-webpack-plugin -D

## 压缩js
yarn add uglifyjs-webpack-plugin -D

## babel-loader es6 转化es5 @babel/core babel核心模块 @babel/preset-env转化
yarn add babel-loader @babel/core @babel/preset-env -D

https://babeljs.io/

## 装饰器
@babel/plugin-proposal-class-properties
## function * gen() 转化这种语法 
@babel/plugin-transform-runtime

@babel/polyfill

export-loader 暴露全局变量

## 在html中全局引入 jquery cdn 包 在webpack打包时 忽略其打包进模块

## webpack 打包我们的图片
1） 在js中创建图片引入
2）在css引入 background("url")
3><img src="">

譬如说
// file-loader 默认会在内部生成一张图片 到build的目录下
// 把生成的图片的名字返回回来
import logo from './logo.png'

file-loader 引入 和 url-loader 区别
url-loader 可以做一些限制 当我们的图片 小于多少k的时候 用base64

