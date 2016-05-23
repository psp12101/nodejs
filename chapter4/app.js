
// 如果在 node_modules 下建一个子文件夹 myModule, 并且里面有一个index.js 的话
// 直接引用这个子文件夹，就相当于引用下面的index.js 模块
//var module = require('myModule');
//console.log("module.str:" + module.str);

// myModule 文件夹下有一个package.json 文件
// myModule 里面有一个module.js 文件
// 将module.js 文件配置到 myModule
/*{
	"name":"myModule",
	"main":"./module.js"
}*/

var myModule = require('myModule');
//console.log("myModule.str:" + myModule.str);
//console.log(myModule.id);
//myModule.id="module";
//console.log(myModule.filename);