var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

/*********** webpack-dev-server配置项 ***********/
var IP = ''            //代理IP
var HOST = ''          //代理HOST
/************************************************/

var api = require('./src/js/config/api')
var getProxyOptions = function() {
  var options = {}
  for (var key in api) {
    var url = api[key]
    if (url.indexOf('?') != -1) {
      url = url.split('?')[0] + '**'
    }
    if (url && url.substring(0, 6) != '/mock/') {
      options[url] = {
        target: 'http://' + IP,
        headers: {Host: HOST},
        changeOrigin: true,
        secure: false
      }
    }
  }
  return options
}

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'hot'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import']
          }
        }]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.s[a|c]ss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    hot: true,
    historyApiFallback: true,
    noInfo: true,
    disableHostCheck: true,
    proxy: getProxyOptions()
  },
  devtool: '#inline-source-map'
}