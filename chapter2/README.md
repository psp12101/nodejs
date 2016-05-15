# nodejs
![第二章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter2 第二章节内容和代码

### nodejs 中的交互运行环境 REPL
#### 运行方式
     在REPL 中启动服务器
     var http = require('http');
----
     http.createServer(function (req,res){
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write('<head><meta charset="utf-8"/></head>');
     res.end('hello world! 你好世界\n');}).listen(1888,'127.0.0.1');

### 代码文件名
    test.js 用来测试下面基础命令中的 .load 命令

### 通过.save 保存出来的REPL代码命令行记录文件
    saveCommand.js (这个文件是下面基础命令中.save 保存出来的)

### 基础命令
    node: 进入REPL 环境
 ----
    .clear: 清除上下文对象中保存的所有变量和函数
 ----
    .exit: 退出REPL 运行环境
 ----
    .Ctrl + C 一次 放弃前面的书写,重新开始,Ctrl + C 两次, 退出 REPL 运行环境
 ----
    .break 放弃前面的书写,生新开始写
 ----
    .help 显示所有的基础命令
 ----
    .save 保存REPL输入的命令 例如: .save chapter2/saveCommand.js
 ----
    .load 从外部加载 文件进行运行  比如运行 .load chapter2/test.js



