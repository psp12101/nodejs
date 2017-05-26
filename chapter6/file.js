var fs = require('fs');
fs.watchFile('./oldFolder/fileMove1.md',function(curr,prev){
	if(Date.parse(prev.ctime)==0){
		console.log('fileMove1.md 被创建了');
	}
	else if(Date.parse(curr.ctime)==0){
		console.log('fileMove1.md 被删除了');
	}
	else if(Date.parse(prev.mtime)!=Date.parse(curr.mtime)){
		console.log('fileMove1.md 被修改了');
	}
})


// var options ={
// 	   				flag:'a',    
// 	   				//mode:'6',
// 	   				encoding:'utf8'
// 	   			}

// 写文件
// fs.appendFile('./filecontent1.md','\n这是我追加的数据',options,function(error,data){
// 	if(error) console.log(error);
// 	else {
// 			console.log('文件写成功了！');

// 			// 读文件
// 			fs.readFile('./filecontent1.md','utf8',function(error,data){
// 				if(error){
// 					if(error) console.log(error);
// 				}
// 				else{
// 					console.log(data);
// 				}
// 			})	
// 	}
// })