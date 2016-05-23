// 引入3个模块
var module1 = require('./module1.js');
console.log("module1.str1:"+module1.str1);

var module2 = require('./module2.js');
console.log("module2.str1:"+module2.str1);
console.log("module2.str2:"+module2.str2);

var module3 = require('./module3.js');
console.log("module3.str1:"+module3.str1);
console.log("module3.str2:"+module3.str2);
console.log("module3.str3:"+module3.str3);

// 引入函数模块
var functionModule = require('./functionModule.js');

// 加减乘除
console.log(functionModule.add(100,10));
console.log(functionModule.sub(100,10));
console.log(functionModule.mul(100,10));
console.log(functionModule.div(100,10));

// 引入类模块
var classModule = require('./classModule.js');
myPerson = new classModule.person('聚变','30')；
//console.log("name:"+myPerson.getName());
//console.log("age:"+myPerson.getAge());

