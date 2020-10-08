const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views"); //加载模板（页面）；
const static = require("koa-static");// 加载资源；
const newsData = require("./data/data.json"); // 自动转为对象数组
let app = new Koa();
let router = new Router();
// __dirname总是指向被执行js文件的绝对路径 + 模版路由
app.use(views(__dirname+"/views",{
    extension:"pug" // 使用pug模版引擎渲染页面（在服务端生成页面，或者前端提供好页面，发送ajax请求即可，大多数情况下，是不会服务端来产出页面的）
}));
app.use(static(__dirname+"/static"));
router.get("/",async ctx=>{
    ctx.body = "some thing..."
})
router.get("/index",async ctx=>{
    // 加载views中index
    await ctx.render("index",{
        newsData
    });
})
app.use(router.routes());
app.listen(4000);