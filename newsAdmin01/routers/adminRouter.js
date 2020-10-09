const Router = require("koa-router");
// admin加上 admin前缀
let router = new Router({
    prefix:"/admin"  // /admin/index  ... /admin
});
router.get("/index",async ctx=>{
    // 渲染主页
    // ctx.body = "后端管理的主页"
    await ctx.render("admin/admin");
});
// 加载添加页面的路由
router.get("/addNews",async ctx=>{
    await ctx.render("admin/addNews");
})
router.get("/newsList",async ctx=>{
    ctx.body = "新闻列表";
})
module.exports = router;