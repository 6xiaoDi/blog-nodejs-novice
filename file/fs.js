const fs = require("fs");
// fs.writeFile("1.txt","我是追加的文字",{flag:"a"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("添加成功");
//     }
// })

fs.readFile("1.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})