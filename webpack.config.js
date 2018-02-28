const webpack = require('webpack') //访问内置的插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //通过 npm 安装
const CleanWebpackPlugin = require('clean-webpack-plugin')

//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
  entry: './src/index.js',//唯一入口文件，就像Java中的main方法
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ['css-loader', 'style-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      {
        test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /(node_modules|bower_components)/, //屏蔽不需要处理的文件（文件夹）（可选）
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  output: {//输出目录
    path: __dirname + '/dist', //打包后的js文件存放的地方
    filename: 'bundle.js', //打包后的js文件名
    publicPath: '/'
  }
};