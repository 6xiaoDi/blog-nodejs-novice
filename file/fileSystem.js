const fs = require("fs");

fs.mkdir("我的目录", err=>{
    if(err){
        console.log(err);
    }else{
        console.log("创建目录成功");
    }
})