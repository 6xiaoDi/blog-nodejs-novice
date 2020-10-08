// koa  express 是nodejs的框架；轻量级；
// 创建服务器；
const Koa = require("koa");
let app = new Koa();  //Application
// 中间件；
app.use(ctx=>{
    ctx.body = "hello world 你好";
})
app.listen(3000);