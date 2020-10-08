// koa  express 是nodejs的框架；轻量级；
// 创建服务器；
const Koa = require("koa");
let app = new Koa();  //Application
// 中间件：理解为函数；
// ctx:context（上下文）简写；（相当于原生res和req的集合体或封装体）；
// next 将控制权转交给下一个中间件
let m1 = function(ctx,next){
    console.log("m1start");
    // throw new Error("some error...");
    next();  //转交控制权给下一个中间件；m2();
    console.log("m1end");
}
let m2 = function(ctx,next){
    console.log("m2start");
    next();
    console.log("m2end");
}
app.use(m1);
app.use(m2);
app.use(ctx=>{
    // console.log(ctx.req.url);
    console.log(ctx.request.query);
    ctx.body = "hello world 你好";
})

// 错误处理中间件；
app.on("error",err=>{
    console.log("??",err);
})

app.listen(3000);