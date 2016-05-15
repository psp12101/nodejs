/**
 * Created by denglimin on 16/5/15.
 */
var obj = {str:'hello world',num:3.1415926};
function test(num1,num2){
    console.log(num1+'+'+num2+'='+(num1+num2));
}
/**
    模块加载的第一次,会运行一次test(100,200),后面的加载就不会再运行了,除非从缓冲中删除了,再次加载才会再次运行test(100,200)
    mymodule = require('./chapter3/exportModule.js');  // 运行一次 test(100,200)
    mymodule = require('./chapter3/exportModule.js');  // 不再运行 test(100,200)
    delete require.cache[require.resolve('./chapter3/exportModule.js')];  // 删除了引入的模块
    mymodule = require('./chapter3/exportModule.js');  // 再次运行一次 test(100,200)
 **/
test(100,200);
exports.obj = obj;
exports.add = test;
console.log('输出__filename:'+__filename);
console.log('输出__dirname:'+__dirname);
