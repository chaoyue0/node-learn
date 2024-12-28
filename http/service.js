const http=require('http')
// 创建服务器
http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
    res.end()
}).listen(3000,()=>{
    console.log("server start")
})