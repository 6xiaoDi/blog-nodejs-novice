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

// 新闻列表页面
router.get("/index",async ctx=>{
    // 加载views中index
    await ctx.render("index",{
        newsData
    });
})
// 新闻详细页面；
router.get("/detail",async ctx=>{
    // 1.跳转； 2.带参数；
    // 接收id(如果id没有，就默认为1，防止错误):注意 类型，到底是num还是string，尽量转成num好做查询；
    let id = parseInt(ctx.request.query.id) || 1;
    // console.log(typeof id);
    // 通过id来查询数据；
    // “==”只管值相等，不管类型 “===”类型和值都需要相等
    let news =  newsData.filter(v=>v.id===id); // 获取数组对象
    /**
     * news  ：  [{id:1,content....}]
     */
    let detailData = news[0];
    // ctx.body = "新闻详细页面";
    // {detailData} 实际就是对应一个对象{detailData:{内容}}，我们要取其下标里的内容 pug的 #{detailData.title}
    // detailData 直接对应pug #{title}
    await ctx.render("detail",detailData);  // 将数据推送到模板里
    // await ctx.render("detail");
})
app.use(router.routes());
app.listen(4000);