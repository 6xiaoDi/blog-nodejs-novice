const fs = require("fs");
// 创建服务器
const http = require("http");
// req 客户端到node端 res 返还相关（服务端给浏览器的）
let server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==="/index"){
        res.setHeader("content-type","text/html;charset=utf8");
        // 同步读取文件
        let indexData =  fs.readFileSync("./views/index.html");
        console.log(indexData.toString());
        res.write(indexData);
    }else if (req.url==="/detail"){
        res.setHeader("content-type","text/html;charset=utf8");
        res.write("详细页面");
    }
    res.end();
})
// 端口一般设置4位或者4位以上的，因为系统端口都是4位以下的
server.listen(4000);