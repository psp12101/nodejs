var importModule = require('./debug-extra.js');
console.log(importModule.str1);

console.log('hello world! 我是聚变！');

var str = '这是一个很长的字符串！'
console.log(str);

function test(obj){
	//console.dir(obj);

	console.log(obj.name);

	console.log(obj.sex);
}

var myObj = {name:'聚变',sex:'男'};

test(myObj);