# nodejs
![第三章节开始了](http://www.denglm.com/images/backtotop.png)
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

----

#### 与模块相关的全局函数
    1. 引入模块 var importModule = require('./exportModule.js'); // ./ 表示在当前目录下
    2. if(module===require.main)   // 判断是不是主模块
---
    加载方法1
    1. cd chapter3
    2. node main.js
    加载方法2
    1. node  // 进入REPL
    2. mymodule = require('./chapter3/exportModule.js')
    或者 mymain = require('./chapter3/main.js')
---
    删除已加载的模块
    delete require.cache[require.resolve('./chapter3/exportModule.js')];

    请查看 exportModule.js 文件
        模块加载的第一次,会运行一次test(100,200),后面的加载就不会再运行了,除非从缓冲中删除了,再次加载才会再次运行test(100,200)
        mymodule = require('./chapter3/exportModule.js');  // 运行一次 test(100,200)
        mymodule = require('./chapter3/exportModule.js');  // 不再运行 test(100,200)
        delete require.cache[require.resolve('./chapter3/exportModule.js')];  // 删除了引入的模块
        mymodule = require('./chapter3/exportModule.js');  // 再次运行一次 test(100,200)


### 3.3 __filename 和 __dirname

### 3.4 事件处理机制及事件环机制 

    3.4.1 相关代码 emitter.js

### 3.5 在node.js 使用调试器
    
    3.5.1 相关代码在debug.js 和 debug-extra.js 中

    3.5.2 调试命令

        1. node debug debug.js 进入调试debug.js
        2. 继续执行 "cont" 或者 "c" (表示继续的意思 continue)
        3. 执行下一下代码 "next" 或者 “n” (表示下一行的意思 next)
        4. step 或者 s  进入函数内部一步一步地调试
        5. out 或者 o  在进入函数内部调试时，立即执行完剩下的函数代码，跳出到外部调用函数的下一行代码
        6. 监视变量的变化，比如监视str变量的变化,watch('str'), 记住要加单引号
        7. 使用 watchers 命令查看所有有 watch 监控变量
        8. 设置断点  setBreakpoint(filename,line)  或者 sb(filename,line), 省掉 filename 表示调试当前文件 例如：sb(5),在第5行设置断点
        9. restart 重启调试(调试完了后，再来一次)
        10.list 查看调试文件当前执行位置前后几行代码，比如list(20),但看当前位置处前后的20行代码
        11.kill 中止脚本的调试
        12.run 在中止后重新开始脚本调试
        13.scripts 查看所有被加载的模块名
        14.version 查看V8 JavaScript 引擎的版本
        15.退出  .exit

    3.5.5  使用浏览器来调试 node-inspector

        1. npm install -g node-inspector
        2. node --debug-brk debug.js    (也可以node --debug debug.js 这种是直接一次性在terminal 输出结果，在chrome 里面是看不到的)
        3. 再打开一个新的terminal
        4. 在新的terminal 中输入 node-inspector
        5. 复制链接到chrome 中打开，就可以调试了
        6. 如果打了多个断点，一个断点过后，再点“continue to here” 没有反应，因为代码暂停了，点一下 chrome 浏览器 Watch Expression 上面的 || 变成 |》就又可以调试了


