const Koa = require("koa");
const Router = require("koa-router");
const nunjucks = require("koa-nunjucks-2");
let app = new Koa();
let router = new Router();
// 使用nunjucks，首先需要配置
app.use(nunjucks({
    ext:"html", //后缀名设置，官方推荐后缀名.njk（方便区分）
    path:__dirname+"/views", // 模版目录
    nunjucksConfig:{
        trimBlocks:true //防止Xss（以前常见的攻击网站方式，如在input框写script代码）漏铜；
    }
}))
router.get("/",async ctx=>{
    ctx.body = "hello";
})
app.use(router.routes())
app.listen(8000);