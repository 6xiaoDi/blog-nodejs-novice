// 主入口 ； 单入口；
// mvc---> model:模型 、view：视图； controller：控制器
const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
// const Router = require("koa-router");
const router = require("./router"); // 接收导出的函数
// 接收post参数及上传的文件；
const koaBody = require("koa-body");

let app = new Koa();
// let router = new Router();
// router.get("/", ctx=>{
//     ctx.body = "主页"
// });
app.use(koaBody({
    multipart:true   //允许文件上传；
}));
// 引入模板引擎
app.use(views(__dirname+"/views",{
    extension:"pug"
}));
app.use(static(__dirname+"/static"));
router(app); // 参数传入router.js导出的函数
// app.use(router.routes());
app.listen(4000);