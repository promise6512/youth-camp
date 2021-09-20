const http = require("http");
const fs = require("fs")
const server = http.createServer((request,response)=>{
  const {url,method} = request;
  //console.log(method)
  if(url === "/" && method === "GET"){
    fs.readFile('./index.html',(err,data)=>{
      if(!err){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end(data)
      }
    })
    return
  }
  if(url === "/login" && method === "GET"){
    fs.readFile('./login.html',(err,data)=>{
      if(!err){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html')
        response.end(data)
      }
    })
    return
  }

  response.statusCode = 404;
  response.end("winter yyds")
})
.listen(3000,()=>{
  console.log("监听3000端口")
})