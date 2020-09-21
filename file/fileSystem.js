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

// fs.exists("xd的目录", exists=>{
//     console.log(exists);
// })

// fs.stat("filesystem.js", (err, stat)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(stat);
//     }
// });

// 获取文件或者目录的详细信息
// fs.stat("filesystem.js", (err, stat)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(stat);
//     }
//     // 判断文件是否是文件
//     let res =  stat.isFile();
//     console.log(res);
//     // 判断文件是否是文件夹/目录
//     res =  stat.isDirectory();
//     console.log(res);
// });

// 删除非空文件夹；
// 先把目录里的文件删除-->删除空目录；
function removeDir(path){
    let data = fs.readdirSync(path);
    for(let i=0;i<data.length;i++){
        // 是文件或者是目录； --->?文件 直接删除   ---> ？目录继续查找；
        let url = path + "/" + data[i];
        let stat =  fs.statSync(url);
        if(stat.isDirectory()){
            //目录 继续查找；
            removeDir(url);
        }else{
            // 文件 删除
            fs.unlinkSync(url);
        }
    }
    //  删除空目录
    fs.rmdirSync(path);
}
removeDir("xd的目录");