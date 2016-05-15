/**
 * Created by denglimin on 16/5/15.
 */
var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.end('hello world! 你好世界\n');
}).listen(1888,'127.0.0.1');
console.log('服务器开始启动! 127.0.0.1:1888');
