const Koa = require("koa");
const app = new Koa();
app.use(ctx=>{
    ctx.status = 404;
    ctx.body = "hello";
});
app.listen(4000);