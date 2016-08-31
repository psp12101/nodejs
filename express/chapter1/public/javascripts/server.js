var server = require('http');
function myServer(req,res){
    console.log(req.headers);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('<body><h2>hello world! 你好世界\n</h2></body>');
    res.end('');

}
server.createServer(myServer).listen(2888,'127.0.0.1');
