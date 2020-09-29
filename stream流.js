const fs = require("fs");
// let res = fs.readFileSync("1.txt");
// console.log(res);
// console.log(res.toString());

// 创建可读流
let rs = fs.createReadStream("1.txt");

// on监听事件，读取的数据在data事件中
// 每次一小段一小段读取的chunk
rs.on("data",chunk=>{
    console.log(chunk);
    console.log(chunk.toString());
})