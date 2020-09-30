const Koa = require("koa");
const Router = require("koa-router"); // 路由
const views  = require("koa-views");  // 通过它来加载模版
let app = new Koa();
let router = new Router();
// 将views（模版）加载进来，第一个参数：模版存放位置  第二个参数：配置选项，让其通过pug进行加载
// __dirname 当前目录
app.use(views(__dirname+"/views",{
    map:{
        html:"pug"
    }
}));
// "/" 获取主页
router.get("/",async ctx=>{
    // 渲染，注意渲染是需要时间，它是异步的
    await ctx.render("index.pug",{
        data:"我是数据",
    });
});
app.use(router.routes());
app.listen(3000);