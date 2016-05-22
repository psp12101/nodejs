var http = require("http");
var events = require("events");
var server = http.createServer();

// 一般最多绑定10次(我自已试了一下，绑定11个出现问题，possible EventEmitter memory leak detected. 
// 11 request listeners added. Use emitter.setMaxListeners() to increase limit)，这里调多一点,可以绑定20个
server.setMaxListeners(20);

// 绑定第1个处理request 事件的回调处理函数
server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"/></head>');
	res.end("启动 127.0.0.1:1888 测试网站\n");
})

// 绑定第2个处理request 事件的回调处理函数
server.on('request',function(req,res){ 
	if(req.url!=="/favicon.ico"){
		console.log(req.url);
	}
})

// 绑定第3个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("3");
	}
})

// 绑定第4个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("4");
	}
})

// 绑定第5个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("5");
	}
})
// 绑定第6个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("6");
	}
})
// 绑定第7个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("7");
	}
})
// 绑定第8个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("8");
	}
})
// 绑定第9个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("9");
	}
})

// 绑定第10个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("10");
	}
})

// 绑定第11个处理request 事件的回调处理函数
server.on('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("11");
	}

	// 触发自定义参数相当于dispatchEvent
	server.emit('customEvent','自定义事件第1个参数','自定义事件第2个参数','自定义事件第3个参数');
})

// 只执行一次的事件
server.once('request',function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("once，只执行一次的事件");
	}
})

// 删除事件 removeListener
var testFunction = function(req,res){
	if(req.url!=="/favicon.ico"){
		console.log("testFunction 用来做removeListener");
	}
}

server.on('request',testFunction);

// 删除一个request 监听函数
server.removeListener('request',testFunction);

// 删除所有request 监听函数
// server.removeAllListeners('request');

// 输出server 对像 request 事件绑定了多少个函数
console.log(events.EventEmitter.listenerCount(server,'request'));

// 自定义事件 customEvent 监听
server.on('customEvent',function(arg1,arg2,arg3){
	console.log('自定义事件被触发了');
	console.log('参数 arg1:'+arg1+'\n');
	console.log('参数 arg2:'+arg2+'\n');
	console.log('参数 arg3:'+arg3+'\n');
})

// 触发自定义参数相当于dispatchEvent
// server.emit('customEvent','自定义事件第1个参数','自定义事件第2个参数','自定义事件第3个参数');

// 监听端口1888
server.listen(1888,"127.0.0.1");
console.log("127.0.0.1:1888 测试网站网站已经起动了！");