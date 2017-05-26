# nodejs
![第六章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter6 第六章节 nodejs 文件操作

### 同步方法与异步方法

    1. 	一般用异步方法，这样不会卡住进程；
    2. 	在系统初始化等重要的场合就要用同步方法，同步方法一般带有sync 字样，比如：fs.readFileSync('index.html','utf8');

       	同步方法1
       		var fs = require('fs');
       		var data = fs.readFileSync('index.html','utf8');
       		console.log(data);

       	异步方法1,
       		‘utf8’显示解码后的文本内容
       		var fs = require('fs');
			fs.readFile('./filecontent.md','utf8',function(error,data){
			if(error) console.log(error);
				else console.log(data);
			})

		异步方法2,
       		没有解码方式，显示二进制内容
       		var fs = require('fs');
			fs.readFile('./filecontent.md',function(error,data){
			if(error) console.log(error);
				else console.log(data);     // 这里输出了二进制，当然也可以用data.toString() 方法显示出解码后的文本
			})

### 文件读

    1. fs.readFile(filename,data,[options],callback)         // 异步读取
    2. fs.readFileSync(filename,data,[options],callback) 	 // 同步读取
    3. options 是一个可选的对像
         	var options = {
         					flag:'r',				// 指定读的方式
         					encoding:'utf8'			// 指定解码的方式
         				}

### 文件写

	1. fs.writeFile(filename,data,[options],callback);		// 异步写入
	2. fs.writeFileSync(filename,data,[options],callback);  // 同步写入
	3. options 是一个可选的对像
	   	options ={
	   				flag:'w',       // 'r':读取；'r+'：读取并写入文件； ‘rs’:以同方式读取文件，忽略本地文件系统缓存；
	   								// 'w':写入文件; 'w+':读取并写入文件，如果不存在就创建；‘wx’:以排他方式写入
	   								// 'a':追加写入文件，如果不存在就创建文件；'ax':以排他方式写入文件；‘a+’：读取并追加写入文件件，如果不存在就创建一个文件
	   				mode:'6',
	   				encoding,'utf8'
	   			}

	4. 在写完文件后，再去读文件输出来结果
		var fs = require('fs');
		var options ={
	   				flag:'w',
	   				mode:'6',
	   				encoding:'utf8'
	   			}

		// 写文件
		fs.writeFile('./filecontent.md','这是第一行。\n这是第二行',options,function(error,data){
		f(error) console.log(error);
		else {
				console.log('文件写成功了！');

				// 读文件
				fs.readFile('./filecontent.md','utf8',function(error,data){
					if(error){
						if(error) console.log(error);
					}
					else{
						console.log(data);
					}
				})
			}
		})
