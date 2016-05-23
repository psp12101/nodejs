# nodejs
![第四章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter4 第四章节内容和代码

### nodejs 核心模块

    1. 直接引入就行了，不用加./
        require('http'); 

### exports 和类模块，变量模块，函数模块
    
    1. 如果是自定义的模块 当前目录要中./
        require('./module1.js')

    2. 变量模块 module1.js module2.js module3.js 

    3. 函数模块 functionModule.js

    4. 类模块 classModule.js

    5. 主模块 mainModule.js (模块载入入口)

### 组织和管理模块
    
    package.json 的说明链接：
    https://docs.npmjs.com/getting-started/using-a-package.json


### 从全局目录中加载模块



### 模块对象的属性



### 包与NPM 包管理工具
    
    1.  npm search express 在node.js 的官方包仓库（https://registry.npmjs.org）中搜索并查看express 的信息
    2.  npm view express 查看官方包 express package.json 的信息
    3.  npm install express 安装 express 
    4.  npm install express -g 全局安装
    5.  npm root -g  查看全局安装包的位置 ， 如果发现下面有 express ，可以用 open express 打开 express 所在的安装文件夹
    6.  npm list -g 查看node.js 全局包安装路径下安装的所有包
    7.  npm list  查看路径下安装的所有包
    8.  npm uninstall <包名> 卸载当前路径下安装的包
    9.  npm uninstall <包名> -g 卸载全局安装路径下安装的包
    10. npm update <包名> 更新当前路径下安装的包
    11. npm update <包名> -g 更新全局路径下安装的包
    12. npm update 更新当前路径下安装的所有包
    13. npm update -g 更新全局路径下安装的所有包


