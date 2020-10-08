const fs = require("fs");
const mime =  require("./mime.json");  // require 自动转为json对象，不需要用JSON.parse
const path = require("path");  // 提供获取后缀的方法
// 创建服务器
const http = require("http");
// req 客户端到node端 res 返还相关（服务端给浏览器的）
let server = http.createServer((req,res)=>{
    // 屏蔽favicon.ico
    if(req.url != '/favicon.ico'){
        console.log(req.url);
        if(req.url==="/index"){
            res.setHeader("content-type","text/html;charset=utf8");
            // 同步读取文件
            // let indexData =  fs.readFileSync("./views/index.html");
            // console.log(indexData.toString());
            // res.write(indexData);
            // 流方式:节约性能；
            let rs = fs.createReadStream("./views/index.html");
            // 通过管道导入
            rs.pipe(res);
        }else if (req.url==="/detail"){
            res.setHeader("content-type","text/html;charset=utf8");
            // let detailData =  fs.readFileSync("./views/detail.html");
            // res.write(detailData);
            let rs = fs.createReadStream("./views/detail.html");
            rs.pipe(res);
            // 当它等于一个接口的时候
        }else if(req.url==="/getData"){
            // 类似模拟json数据
            let obj  = {
                name:"张三",
                age:20
            };
            // 变成JSON输出到页面上
            res.write(JSON.stringify(obj));
            res.end();
        }else{
            // 获取后缀；
            let extName = path.extname(req.url);
            // 设置头部
            res.setHeader("content-type",mime[extName]);
            // __dirname 当前文件的绝对地址
            // let cssData =  fs.readFileSync(__dirname+"/views"+req.url)
            // res.write(cssData);
            let rs = fs.createReadStream(__dirname+"/views"+req.url);
            rs.pipe(res);
        }
        // 注意 流方式  不要end；
        // res.end();
    }
})
// 端口一般设置4位或者4位以上的，因为系统端口都是4位以下的
server.listen(4000);