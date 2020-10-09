const Router = require("koa-router");
// admin加上 admin前缀
let router = new Router({
    prefix:"/admin"  // 前缀  =>  /admin/index  ... /admin
});
router.get("/index", ctx=>{
    ctx.body = "admin主页"
});

module.exports = router;