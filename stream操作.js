const fs = require("fs");
// 创建一个65kb的文件；不写内容
// let buffer = Buffer.alloc(64*1024);
// 第一个参数是文件名
// fs.writeFile("64kb(2)",buffer,err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("写入成功");
// })
// let rs = fs.createReadStream("64kb(2)");
// 每次一小段一小段读取的chunk
// rs.on("data",chunk=>{
//     console.log(chunk);
// })
// let num = 0;
// rs.on("data",chunk=>{
//     num++;
//     console.log(num);
// })

let rs = fs.createReadStream("1.txt");
let num = 0;
let str = "";
// 每次一小段一小段读取的chunk
rs.on("data",chunk=>{
    num++;
    str += chunk; // buffer加等于变成字符串
    console.log(num);
})
// 流完成了；
rs.on("end",()=>{
    console.log(str);
})
