var events = require('events');

// 创建一个新的事件发生器
var eventEmitter = new events.EventEmitter();

// 监听自定义事件
eventEmitter.on('myCustomEvent',function(arg1,arg2,arg3){
    console.log('我自定义的事件被监听到了'+' arg1：'+arg1+' arg2：'+arg2+' arg3：'+arg3);
})

// 触发自定义事件
setTimeout(function(){
    eventEmitter.emit('myCustomEvent','12','ab','参数3');
},1500)
