const Router = require("koa-router");
// let router = new Router();
// admin加上 admin前缀
let router = new Router({
    prefix:"/admin"  // /admin/index  ... /admin
});
// router.get("/index",async ctx=>{
//     // 渲染主页
//     // ctx.body = "后端管理的主页"
//     await ctx.render("admin/admin");
// });
const adminController = require("../controller/admin");
router.get("/index",adminController.renderIndex)
// 加载添加页面的路由
// router.get("/addNews",async ctx=>{
//     await ctx.render("admin/addNews");
// })
// router.get("/newsList",async ctx=>{
//     ctx.body = "新闻列表";
// })
router.get("/addNews",adminController.renderAddNews)
router.get("/newsList",adminController.renderNewsList)
// 添加数据
router.post("/addNewsData",adminController.addNewsData)
module.exports = router;