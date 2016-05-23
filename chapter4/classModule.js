 //var _name, _age;
 var name ='',age = 0;

 // 构造函数
function person(name,age){
 	this.name = name;
 	this.age = age;
 }

// 获取名字
 person.prototype.getName = function(){
 	return this.name;
 }

 // 获取名字
 person.prototype.setName = function(name){
 	this.name = name;
 	return this.name;
 }

 // 获取年龄
 person.prototype.getAge = function(){
 	return this.age;
 }

 // 获取名字
 person.prototype.setAge = function(age){
 	this.age = age;
 	return this.age;
 }
 
 // 初始化name,age
 person.prototype.name = name;
 person.prototype.age = age;

 module.exports.person = person;