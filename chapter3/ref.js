/**
 * Created by denglimin on 16/5/15.
 */
function test(){
    console.log('setInterval unref,所以定时器没有工作');
}
var timer = setInterval(test,3000);
timer.ref();  // 恢复定时器对回调函数的调用