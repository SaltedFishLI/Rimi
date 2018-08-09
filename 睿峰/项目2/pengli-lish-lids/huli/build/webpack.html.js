
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = [
    new HtmlWebpackPlugin({
        template: "./src/html/index.html",
        inject: true,
        chunks: ["main"],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/classify/bed.html",
        inject: true,
        chunks: ["bed"],
        filename: "static/html/classify/bed.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/classify/more.html",
        inject: true,
        chunks: ["more"],
        filename: "static/html/classify/more.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/classify/sofa.html",
        inject: true,
        chunks: ["sofa"],
        filename: "static/html/classify/sofa.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/classify/storage.html",
        inject: true,
        chunks: ["storage"],
        filename: "static/html/classify/storage.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/classify/tableAndChair.html",
        inject: true,
        chunks: ["tableAndChair"],
        filename: "static/html/classify/tableAndChair.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/goodInfo/goodsDetails.html",
        inject: true,
        chunks: ["goodsDetails"],
        filename: "static/html/goodInfo/goodsDetails.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/goodInfo/sofasDetails.html",
        inject: true,
        chunks: ["sofasDetails"],
        filename: "static/html/goodInfo/sofasDetails.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/reg_login/register.html",
        inject: true,
        chunks: ["register"],
        filename: "static/html/reg_login/register.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/shopping/shopping.html",
        inject: true,
        chunks: ["shopping"],
        filename: "static/html/shopping/shopping.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/account.html",
        inject: true,
        chunks: ["account"],
        filename: "static/html/userInfo/account.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/mySell.html",
        inject: true,
        chunks: ["mySell"],
        filename: "static/html/userInfo/mySell.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/order.html",
        inject: true,
        chunks: ["order"],
        filename: "static/html/userInfo/order.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/personInfo.html",
        inject: true,
        chunks: ["personInfo"],
        filename: "static/html/userInfo/personInfo.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/systemMessage.html",
        inject: true,
        chunks: ["systemMessage"],
        filename: "static/html/userInfo/systemMessage.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/html/userInfo/reducPriceApply.html",
        inject: true,
        chunks: ["reducPriceApply"],
        filename: "static/html/userInfo/reducPriceApply.html"
    })
]

