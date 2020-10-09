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
module.exports = router;