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
  plugins:[
    //生成html文件的插件
    new HTMLWebpackPlugin({
      title:"Output Management"
    })
  ]
}