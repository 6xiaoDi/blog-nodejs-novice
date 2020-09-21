const fs = require("fs");
fs.writeFile("1.txt","我是1.txt文件",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("添加成功");
    }
})