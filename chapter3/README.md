# nodejs
![第二章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter3 第三章节内容和代码

### nodejs 中的交互运行环境 REPL
#### 运行方式

### log.js 用来输出信息(使用console.log)

### 日志文件名
    info.log 用来保存log.js输出日志
    error.log 用来保存错误输出日志

### 输出日志文件的方法(记住了,这个不能在REPL中操作)
    node log.js 1>info.log (1表示重定向标准输出流)
    node log.js 2>error.log (2表示重定向标准错误输出流)

### 基础命令

#### console 相关命令集

 ----
    console.log('%s','hello',' world')   // 输出字符串
 ----
    console.log('%d',10,10.5)   // 输出数字
 ----
    console.log('%%','输出百分号')
 ----
    console.error('输出错误信息');
 ----
    console.dir(obj)    // 输出obj所有的相关信息
 ----
    console.trace(label) // 输出当前位置的栈信息
 ----
    console.assert(1===3,'错误,不相等')    // 对一个表达式的结果进行评估,如果为false ,输出信息
 ----

#### global 全局变量

 ----

#### setTimeout clearTimeout   setInterval clearInterval unref  ref

 ----
     unref:取消定时器对回调函数的引用
     例如:
        var testFunction = function(){console.log('my timer callback function is on');}
        var timer = setInterval(testFunction,2000);
        timer.unref();  // 取消定时器对回调函数的引用
        timer.ref();    // 恢复定时器对回调函数的引用

     代码保存在 unref.js 中
     执行过程:
         cd chapter3
         node unref.js

 ----
     ref:恢复定时器对回调函数的引用
     例如:
        var testFunction = function(){console.log('my timer callback function is on');}
        var timer = setInterval(testFunction,2000);
        timer.ref();    // 恢复定时器对回调函数的引用

     代码保存在 ref.js 中
     执行过程:
         cd chapter3
         node ref.js

