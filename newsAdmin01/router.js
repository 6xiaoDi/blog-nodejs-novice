const Index = require("koa-router");

// 解决关联上述问题：
module.exports = function(app){
    let router = new Index();
    router.get("/", ctx=>{
        ctx.body = "主页"
    });
    app.use(router.routes());
}