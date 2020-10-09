let adminRouter = require("./routers/adminRouter"); // 后台管理路由
let newsRouter = require("./routers/newsRouter"); // 新闻页面路由

module.exports = function(app){
    app.use(adminRouter.routes());
    app.use(newsRouter.routes());
}