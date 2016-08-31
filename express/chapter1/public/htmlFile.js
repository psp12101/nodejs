var express = require('express');
var path = require('path');
var fs = require('fs'); // 这里用来处理404 页面不存在的情况
var app = express();

//http://localhost:1888/page1
app.get('/',function(req,res){
    res.sendFile('html1.html',{root:path.join(__dirname,'./html')});
});

// http://localhost:1888/page1
app.get('/page1',function(req,res){
    res.sendFile('html2.html',{root:path.join(__dirname,'./html')});
});

// 请求任意文件, 用正则表达式匹配
// http://localhost:1888/html1 http://localhost:1888/html2 http://localhost:1888/html3
app.get(/^(.+)$/,function(req,res){
    // 看看请求的是什么
    console.log(req.params);
    res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'./html')});
});

// 路径映射
// app.use('/css',express.static(__dirname +'/stylesheets'));


app.listen(1888,function(){
    console.log("最简单的 HTML 服务器");
});
