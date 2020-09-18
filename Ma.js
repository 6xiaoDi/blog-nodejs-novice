console.log("我是Ma.js文件");
let a = 10;
class Person{
	constructor(){
		this.name = "张三";
	}
	hobby(){
		console.log("喜欢篮球");
	}
}
module.exports = {
	a,
	Person
}