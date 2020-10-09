// 主入口 ； 单入口；
// mvc---> model:模型 、view：视图； controller：控制器
const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const Router = require("koa-router");

let app = new Koa();
let router = new Router();
router.get("/", ctx=>{
    ctx.body = "主页"
});

// 引入模板引擎
app.use(views(__dirname+"/views",{
    extension:"pug"
}));
app.use(static(__dirname+"/static"));
app.use(router.routes());
app.listen(4000);