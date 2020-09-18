console.log("我是index.js");
// 引入
let Ma = require("./Ma.js");
console.log(Ma.a);
let cai = new Ma.Person();
cai.hobby();