const Router = require("koa-router");
// news加上 news前缀
let router = new Router({
    prefix:"/news"
});
router.get("/index",ctx=>{
    ctx.body = "新闻的主页";
})
module.exports = router;