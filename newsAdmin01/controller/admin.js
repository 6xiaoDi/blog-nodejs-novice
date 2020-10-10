const fs = require("fs");
const adminModel = require("../service/admin.js");
module.exports = {
    // 渲染主页；
    async renderIndex(ctx) {
        // 渲染主页；
        // ctx.body = "后端管理的主页";
        await ctx.render("admin/admin");
    },
    //渲染添加页面
    async renderAddNews(ctx) {
        await ctx.render("admin/addNews");
    },
    // 渲染后端的新闻页面
    async renderNewsList(ctx) {
        let newsData = adminModel.getNewsData();
        let p = ctx.query.p || 1;
        let perPage = ctx.query.perPage || 5;

        let pCount = Math.ceil(newsData.length / perPage);
        let perPageContent = newsData.splice((p - 1) * perPage, perPage);
        await ctx.render("admin/newsList", {
            perPageContent,
            pCount
        });
        // ctx.body = "新闻列表"
    },
    async addNewsData(ctx) {
        // 获取的数据
        let res = await adminModel.addNewsData(ctx);
        let resData;
        if (res.status === 1) {
            resData = {
                info: "添加成功",
                status: 1
            }
        } else {
            resData = {
                info: "添加失败",
                status: 0
            }
        }
        // 提示页面读秒完成后的跳转页面
        let redirectUrl = "/admin/addNews"
        //  渲染提示页面
        await ctx.render("admin/message",{
            res:resData,
            redirectUrl
        })
    },
    async delNews(ctx) {
        let id = parseInt(ctx.query.id) || 1;
        let res = await adminModel.delNews(id);
        if (res.status !== 1) {
            res = {
                info: "删除失败",
                status: 0
            }
        }
        let redirectUrl = "/admin/newsList"
        await ctx.render("admin/message", {
            res,
            redirectUrl
        });
    }

}
