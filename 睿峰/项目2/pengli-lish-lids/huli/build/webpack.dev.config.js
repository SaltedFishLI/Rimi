// 1.【模块引入】
const webpack = require('webpack');
const path    = require('path');
const glob    = require('glob');
const Entry   = require('./webpack.entry');
const HTML    = require('./webpack.html');
const Loader  = require('./webpack.loader');
const purifyCSS            = require('purifycss-webpack');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const CopyWebpackPlugin    = require("copy-webpack-plugin");


// 2.【配置任务】
module.exports = {
    // * Context
    context: path.resolve(__dirname, '../'),
    // * Entry
    entry: Entry.config,
    // * Output
    output: {
        // 输出路径
        path: path.resolve(__dirname, '../dist/'),
        // 文件名
        filename: "static/js/[name]-bundle.js",
        publicPath: "http://localhost:8080/"
    },
    // * Loader
    module: {
        rules: Loader.config
    },
    // * Plugin
    plugins: [
        // 编译HTML文件
        ...HTML.config,
        // 清除文件
        //new CleanWebpackPlugin(["../dist/static"]),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 抽离CSS
        new ExtractTextPlugin('static/css/[name].min.css'),
        // 文件拷贝迁移
        new CopyWebpackPlugin([
            {
                from:'./src/json',
                to: './static/json'
            },
            {
                from:'./src/plugins',
                to: './static/plugins'
            }
        ]),
        // 清除未使用的CSS
        // new purifyCSS({paths: glob.sync(path.join(__dirname, './src/*.html'))}),
        // 版权声明
        new webpack.BannerPlugin("版权归咸鱼组所有， 翻版必究！"),
        // 全局引入三方插件
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ],
    // * resolve
    resolve: {
        // 路径解析/创建别名
        alias: {
            'Normalize-LESS': path.resolve(__dirname, '../src/less/ll-normalize.less'),
            'Common-LESS': path.resolve(__dirname, '../src/less/common.less'),
            'Index-LESS': path.resolve(__dirname, '../src/less/ll-index.less'),
            'Classify-LESS': path.resolve(__dirname, '../src/less/ll-classify.less'),
            'Common-LESS': path.resolve(__dirname, '../src/less/ll-common.less'),
            'UserInfo-JS': path.resolve(__dirname, '../src/js/userInfo.js'),
            'Index-JS': path.resolve(__dirname, '../src/js/index.js'),
            'UserInfo-LESS': path.resolve(__dirname, '../src/less/userInfo.less'), 
            'Classify-LESS': path.resolve(__dirname, '../src/less/ll-classify.less'),
            'Swiper-JS': path.resolve(__dirname, '../src/js/swiper.min.js'), 
            'Swiper-LESS': path.resolve(__dirname, '../src/less/swiper.min.less'), 
            'Shopping-JS': path.resolve(__dirname, '../src/js/shopping.js'),
            'Shopping-LESS': path.resolve(__dirname, '../src/less/shopping.less'), 
            'LHY-JS':path.resolve(__dirname, '../src/js/LHYAlertView.js'), 
            'LHY-CSS':path.resolve(__dirname, '../src/less/LHYAlertView.less'), 
            'Register-LESS': path.resolve(__dirname, '../src/less/ll-register.less'), 
            'Goodsdetails-LESS': path.resolve(__dirname, '../src/less/ll-goodsdetails.less'),
            'Sofasdetails-LESS': path.resolve(__dirname, '../src/less/ll-sofasdetails.less'),
        
        }
    },
    // * devServer
    devServer:{
        // 设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./dist'), // 最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port:8080,
        // 设置自动拉起浏览器
        open:true,
        // 自动刷新
        inline: true,
        // 模块热替换
        hot: true
    }
}
