const fs = require("fs");
// 创建一个65kb的文件；不写内容
let buffer = Buffer.alloc(65*1024);
// 第一个参数是文件名
fs.writeFile("64kb",buffer,err=>{
    if(err){
        return console.log(err);
    }
    console.log("写入成功");
})
// let rs = fs.createReadStream("65kb");
// // 每次一小段一小段读取的chunk
// rs.on("data",chunk=>{
//     console.log(chunk);
// })