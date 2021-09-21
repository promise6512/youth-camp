const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry:"./main.js",
  mode:"development",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
    //清除无关文件
    clean:true
  },
  module: {
    rules: [
      {
        //css-loader将css文件转换为js文件
        //style-loader 是通过一个JS脚本创建一个style标签
        test: /\.css$/i,
        //.css -> .js
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  plugins:[
    //生成html文件的插件
    new HTMLWebpackPlugin({
      title:"Output Management"
    })
  ],
  //开启静态服务
  //可以实时更新 方便调试
  devServer:{
    static:"./dist"
  }
}