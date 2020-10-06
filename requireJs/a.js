console.log("a文件");
define(["b"],function(res){
    console.log("b导出的",res);
    return {
        name:"张三",
        age:20
    }
});