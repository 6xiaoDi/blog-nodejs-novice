// buffer创建
// new Buffer() //nodejs6.0之前版本的创建格式
// let buffer = Buffer.alloc(10); // 指定大小（单位：字节）
// console.log(buffer);

// let buffer = Buffer.from("大家好");
// console.log(buffer);

let buffer = Buffer.from([0xe5,0xa4,0xa7,0xe5,0xae,0xb6,0xe5,0xa5,0xbd]);
console.log(buffer.toString());