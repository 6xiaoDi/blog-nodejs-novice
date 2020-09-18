console.log("我是Ma.js文件");
require("./Mb");
let a = 10;
class Person{
	constructor(){
		this.name = "张三";
	}
	hobby(){
		console.log("喜欢篮球");
	}
}
exports.a = a;
exports.Person = Person;