const fs = require("fs");
// fs.writeFile("1.txt","我是追加的文字",{flag:"a"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("添加成功");
//     }
// })

// fs.readFile("1.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })

// fs.readFile("1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString())
//     }
// })

// fs.unlink("2.txt",err=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("删除成功");
// })

fs.copyFile("fs.js","111.txt", err=>{
    if(err){
        return console.log(err);
    }
    console.log("复制成功!");
});