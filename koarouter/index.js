const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
let router = new Router();

router.get("/index",ctx=>{
    ctx.body = "hello";
})
router.get("/detail",ctx=>{
    ctx.body = "详细页面";
    // josn、xml；
})

app.use(router.routes());
app.listen(3000);