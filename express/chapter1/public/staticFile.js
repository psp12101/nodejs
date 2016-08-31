var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('这是首页,可以从 http://localhost:1888/ 访问到');
})
app.get('/page1',function(req,res){
    res.send('这是page1,可以从 http://localhost:1888/page1 访问到');
})

// 将localhost:1888/css 访问到stylesheets 中的文件
// 比如 localhost:1888/css/style.css 是访问 stylesheets/style.css 的文件

app.use('/css',express.static(__dirname +'/stylesheets'));


app.listen(1888,function(){
    console.log("最简单的 express 程序");
})
