# nodejs
![第二章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter2 第二章节内容和代码

### nodejs 中的交互运行环境 REPL
#### 运行方式
     在REPL 中启动服务器
     var http = require('http');
     http.createServer(function (req,res){
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<head><meta charset="utf-8"/></head>');
     res.end('hello world! 你好世界\n');}).listen(1888,'127.0.0.1');

### 代码文件名
    无

### 基础命令
    node: 进入REPL 环境
    .clear: 清除上下文对象中保存的所有变量和函数
    .exit: 退出REPL 运行环境
    .Ctrl + C 一次 放弃前面的书写,重新开始,Ctrl + C 两次, 退出 REPL 运行环境
    .break 放弃前面的书写,生新开始写


