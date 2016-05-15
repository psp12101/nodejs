/**
 * Created by denglimin on 16/5/15.
 */
console.log('1:第一条信息来自console.log');  // 用于向info.log 输出信息
//console.assert(1===3,'2:第二条信息,1不等2');  // 用于向error.log 输出错误信息
function test(){
    var i=0;
    function test1(){
        var j=1;
        console.log('j的值为:'+j+'!');
    }
    test1();
    console.log('i的值为:'+i+'!');
}
test();
