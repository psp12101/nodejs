# nodejs
## bower 代码及笔记
![章节目录简介](http://www.denglm.com/images/backtotop.png)
参考链接: https://bower.io/

### 1. Bower  干什么的

    网站一般是由很多资源组成的 - 框架, 库, 图片样式等资源, 以及应用.  bower 可以管理所有这些东西
    一般情况下,要跟踪管理这些资源,并保证这些资源是最新的(或者指定到某一版本) - 是一件很麻烦的事情
    bower 可以管理,html, css, javascript, fonts, 甚至字体资源, 但是bower 不拼接资源,也不压缩资源 - bower 只是帮你安装
    正确版本的包及其依赖

---

### 2. 安装 Bower

    全局安装 npm install -g bower
    bower 需要 node,npm 和 git 环境

### 3. 使用 Bower 安装第三方库

    # 安装所有在 bower.json 列出的依赖项
    $ bower install

    # 安装第三方库
    $ bower install jquery

    # 安装 GitHub 上的包
    $ bower install desandro/masonry

    # 安装 Git 另一个方法
    $ bower install git://github.com/user/package.git

    # 使用 URL 安装
    $ bower install http://example.com/script.js

### 4. bower 搜索库

    https://bower.io/search/
    或者
    bower search bootstrap

### 5. 创建 bower.json

    bower init
    在安装时将依赖添加到bower.json
        bower install angularjs --save

### 6. bower info 查看库的版本和相关信息

    比如想查看 jquery 相关的信息,例如版本列表,当前版本,git 主页等等

    bower info jquery

### 7. bower update 更新库的版本

    一个完整的版本号组表示为： [主要版本号，次要版本号，补丁版本号]

    比如现在的 jquery 版本是:3.1.0
    怎么把版降到:2.2.0
    直接修改bower.json 里面的依赖项:
      "dependencies": {
        "jquery": "~2.2.0"
      }
    然后bower update 就可以了

### 9. bower register 注册自定义包

    比方说自已有一个 https://github.com/psp12101/frontend.git
    先注册一下: bower register tony_frontend https://github.com/psp12101/frontend.git
    然后就可以用:bower install tony_frontend 安装到本地,别人也可以这么安装这个了

### 10. 包的卸载

    例如:
    bower uninstall jquery