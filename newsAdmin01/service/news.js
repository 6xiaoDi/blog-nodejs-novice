let newsData = require("../data/data.json");
module.exports = {
    // 获取所有数据
    getNewsData(){
        return JSON.parse(JSON.stringify(newsData));
    },
    // 获取某条详细数据
    showDetail(id){
        let detailData = newsData.filter(v=>v.id===id);
        return detailData[0]
    }
}