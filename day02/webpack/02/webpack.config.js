const path = require("path")
module.exports = {
  mode: "development",
  //入口
  entry: "./main.js",
  //出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
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
  }
}