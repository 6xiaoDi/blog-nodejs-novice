let newsData = require("../data/data.json");
const fs = require("fs");
module.exports = {
    addNewsData(ctx) {
        console.log(ctx.request.body);
        // 读取之前的json  添加数据修改 json文件；
        // 获取文件；
        console.log(ctx.request.files);
        // 解构数据
        let { title , content , country ,type} = ctx.request.body;

        // 转存文件 先读取 在写入；
        if (!fs.existsSync("static/uploads")) {
            fs.mkdirSync("static/uploads");
        }
        let fileData = fs.readFileSync(ctx.request.files.img.path)
        fs.writeFileSync("static/uploads/img/" + ctx.request.files.img.name, fileData);

        // 储存数据
        let obj = {
            // id自增长（找到数据最后一个id再加1），如果是数据库的话，一般默认自增长
            id:newsData[newsData.length-1].id+1,
            title,
            content,
            country,
            type,
            imgUrl:"/img/" + ctx.request.files.img.name,
            addTime:new Date().getFullYear() // 服务端的时间，这里只取年，再往后再拼接即可
        }
        newsData.push(obj);

        // 重新写data/data.json
        // （异步）返回Promise对象，是为将数据状态交给前台
        return new Promise((resolve,reject)=>{
            fs.writeFile("data/data.json",JSON.stringify(newsData),err=>{
                if(err){
                    console.log(err)
                    reject(err);
                }else{
                     console.log("修改成功");
                     resolve({
                         info:"修改成功",
                         status:1
                     });
                }
            })
        })
        

    },
    getNewsData() {
        return JSON.parse(JSON.stringify(newsData));
    },
    showDetail(id) {
        let detailData = newsData.filter(v => v.id === id);
        return detailData[0]
    },
    delNews(id) {
        // console.log(id);
        newsData.splice((id - 1), 1);
        return new Promise((resolve, reject) => {
            fs.writeFile("data/data.json", JSON.stringify(newsData), err => {
                if (err) {
                    reject(err);
                    return console.log(err);
                }
                resolve({
                    info: "更新成功",
                    status: 1
                });
            })
        })
    }
}