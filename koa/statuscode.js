const Koa = require("koa");
const app = new Koa();
app.use(ctx=>{
    // ctx.status = 404;
    ctx.status = 302; //临时重定向；然后去找头部location
    //设置头部location，如果不设置就不会跳转
    ctx.set("location","http://www.baidu.com");
    ctx.body = "hello";
});
app.listen(4000);