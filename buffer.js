// buffer创建
// new Buffer() //nodejs6.0之前版本的创建格式
// let buffer = Buffer.alloc(10); // 指定大小（单位：字节）
// console.log(buffer);

// let buffer = Buffer.from("大家好");
// console.log(buffer);

// let buffer = Buffer.from([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd]);
// console.log(buffer.toString());

// 3个字节代表一个中文字符，这里4个字节打印出来会乱码
let buffer1 = Buffer.from([0xe5,0xa4,0xa7,0xe5]);
let buffer2 = Buffer.from([0xae,0xb6,0xe5,0xa5,0xbd]);
console.log(buffer1.toString());
// 连接两个buffer
// let newbuffer = Buffer.concat([buffer1,buffer2]);
// console.log(newbuffer.toString());

// 基于nodejs内置模块StringDecoder，更高一些的性能处理方式（处理乱码）
let { StringDecoder } = require("string_decoder");
let decoder =  new StringDecoder();
let res1 = decoder.write(buffer1); // 自动处理乱码，存乱码并隐藏
let res2 = decoder.write(buffer2);
console.log(res1);
console.log(res2);
console.log(res1+res2);// 连接的时候会把隐藏的乱码加进去一块连接