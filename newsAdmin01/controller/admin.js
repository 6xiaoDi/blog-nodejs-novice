
const fs = require("fs");
module.exports = {
    // 渲染主页；
    async renderIndex(ctx){
        // 渲染主页；
        // ctx.body = "后端管理的主页";
        await ctx.render("admin/admin");
    },

    //渲染添加页面
    async renderAddNews(ctx){
        await ctx.render("admin/addNews");
    } ,

    // 渲染后端的新闻页面
    async renderNewsList(ctx){
        ctx.body = "新闻列表"
    },

    // 与addNews.pug中post的action保持一致
    async addNewsData(ctx){
        // 获取的数据("koa-body")
        console.log(ctx.request.body);
        // 读取之前的json  添加数据修改 json文件；
        // 获取文件；("koa-body")
        console.log(ctx.request.files);
        // 转存文件 先读取 在写入；
        if(!fs.existsSync("static/uploads")){
            fs.mkdirSync("static/uploads");
        }

        let fileData =   fs.readFileSync(ctx.request.files.img.path)

        // 严格而言需要修改文件名，使文件名唯一
        fs.writeFileSync("static/uploads/"+ctx.request.files.img.name,fileData);
    }

}