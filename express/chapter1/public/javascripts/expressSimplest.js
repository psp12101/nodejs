var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('这是首页,可以从 http://localhost:1888/ 访问到');
})
app.get('/page1',function(req,res){
    res.send('这是page1,可以从 http://localhost:1888/page1 访问到');
})
app.get('/page2',function(req,res){
    res.send('这是page2,可以从 http://localhost:1888/page2 访问到');
})
app.listen(1888,function(){
    console.log("最简单的 express 程序");
})
