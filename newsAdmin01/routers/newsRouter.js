const Router = require("koa-router");
const newsController = require("../controller/news");
// news加上 news前缀
let router = new Router({
    prefix:"/news"
});
router.get("/index",newsController.showIndex)
router.get("/detail",newsController.showDetail)
module.exports = router;