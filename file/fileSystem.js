const fs = require("fs");

// fs.mkdir("我的目录", err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("创建目录成功");
//     }
// })

// fs.rename("我的目录", "xd的目录", err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("修改目录成功");
//     }
// });

// fs.readdir("xd的目录", (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// fs.rmdir('123', err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("删除目录成功");
//     }
// });

fs.exists("xd的目录", exists=>{
    console.log(exists);
})