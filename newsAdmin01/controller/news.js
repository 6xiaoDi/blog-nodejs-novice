const newsModel = require("../service/news");
module.exports = {
    // 显示首页列表所有数据
    async showIndex(ctx){
        // service层获取所有数据
        let newsData =   newsModel.getNewsData();
        let p = ctx.query.p || 1;
        let perPage = ctx.query.perPage ||  5;
        let pCount = Math.ceil(newsData.length/perPage);
        let perPageContent = newsData.splice((p-1)*perPage,perPage);
        await ctx.render("news/index.pug",{
            perPageContent,
            pCount
        });
    },
    // 显示详情页
    async showDetail(ctx){
        let id = parseInt(ctx.query.id)|| 1;
        let detailData =  newsModel.showDetail(id);
        console.log(detailData);
       await ctx.render("news/detail",detailData);
    }
}