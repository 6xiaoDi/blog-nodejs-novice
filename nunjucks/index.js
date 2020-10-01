const Koa = require("koa");
const Router = require("koa-router");
const nunjucks = require("koa-nunjucks-2");
let app = new Koa();
let router = new Router();
// 使用nunjucks，首先需要配置
app.use(nunjucks({
    ext:"html", //后缀名，官方推荐后缀名.njk（方便区分）
    path:__dirname+"/views", // 模版目录
    nunjucksConfig:{
        trimBlocks:true //防止Xss（以前常见的攻击网站方式，如在input框写script代码）漏铜；
    }
}))
router.get("/",async ctx=>{
    // ctx.body = "hello";
    // ext已经设置后缀名了，这里就不需要重复再加后缀了
    await ctx.render("index",{
        username:"张三",
        num:2,
        arr:[{
            name:"张三",
            age:20
        },{
            name:"李四",
            age:28
        }],
        str:"hello world"
    });
})
// 再加一个路由
router.get("/son1",async ctx=>{
    await ctx.render("son1");
})

router.get("/import",async ctx=>{
    await ctx.render("import");
})

app.use(router.routes())
app.listen(8000);