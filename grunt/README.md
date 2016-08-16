# nodejs
## grunt 代码及笔记
![章节目录简介](http://www.denglm.com/images/backtotop.png)

参考链接: http://www.cnblogs.com/yexiaochai/p/3603389.html

### 1. grunt 的安装

    全局安装,这样在什么路径下都可以调用了
    npm install -g grunt-cli

---
### 2. 创建一个 grunt 打包样例

##### 2.1 创建一个 grunt 文件夹
##### 2.2 在grunt 文件夹里面创建一个 package.json 文件,内容如下:
    可以用 npm init 创建

    也可以直接创建一个在根目录
    {
        "name": "demo",
        "file": "zepto",
        "version": "0.1.0",
        "description": "demo",
        "license": "MIT",
        "devDependencies": {
            "grunt": "~0.4.1",
            "grunt-contrib-jshint": "~0.6.3",
            "grunt-contrib-uglify": "~0.2.1",
            "grunt-contrib-requirejs": "~0.4.1",
            "grunt-contrib-copy": "~0.4.1",
            "grunt-contrib-clean": "~0.5.0",
            "grunt-strip": "~0.2.1"
        },
        "dependencies": {
            "express": "3.x"
        }
    }

##### 2.3 在terminal 下定位到 grunt 文件夹, npm install, 把package.json 中的依赖下载下来

          安装好后,再添加一个依赖的方法:
          npm install grunt-contrib-nodeunit --save-dev
          这样会把 grunt-contrib-nodeunit 添加到 package.json 依赖项上去

##### 2.4 在grunt 文件夹下面建一个 src 文件夹,把一个zepto.js 放里面去

##### 2.5 在grunt 文件夹下面建一个 Gruntfile.js , 在里添加如下代码:
    module.exports = function (grunt) {

          // 项目配置
          grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                uglify: {
                      options: {   // 在打包的文件上面加上一行注释,这里的格式是文件名加上日期,比如: /*! zepto 2016-08-15 */
                            banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                      },
                      build: {
                        src: 'src/<%=pkg.file %>.js',
                        dest: 'dest/<%= pkg.file %>.min.js'
                      }
                }
          });

          // 加载提供"uglify"任务的插件
          grunt.loadNpmTasks('grunt-contrib-uglify');

          // 默认任务 uglify（压缩）
          grunt.registerTask('default', ['uglify']);
    }

    然后运行: grunt

---
### 3. 合并文件

    合并文件依赖于grunt-contrib-concat插件，
    方法1: 在package 依赖项要新增一项: "grunt-contrib-concat": "^1.0.1",
    方法2: npm install grunt-contrib-concat --save-dev

    测试合并: concat1.js + concat2.js + concat3.js  -> concat.js

    concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['src/concat/concat1.js', 'src/concat/concat2.js', 'src/concat/concat3.js'],
                    dest: 'dest/concat/concat.js'
                }
            }

    在Gruntfile.js 里添加:

        // 合并文件
        grunt.loadNpmTasks('grunt-contrib-concat');

        // 加载提供 "uglify"任务的插件, 压缩文件
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // 默认任务, 合并文件, 压缩文件
        grunt.registerTask('default', ['concat','uglify']);

    grunt concat

---
### 4. 自动检查文件改变 grunt-contrib-watch

    方法1:
    "grunt-contrib-watch": "^1.0.0",

    方法2:
    npm install grunt-contrib-watch --save-dev

    启用watch 检测
    grunt watch
    然后只要修改一下css 文件里面的样式文件,就可以看到实时编译了

    代码样例:
    module.exports = function (grunt) {

        // 项目配置
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            concat: {
                js: {
                    src: ['src/concat/concat1.js', 'src/concat/concat2.js', 'src/concat/concat3.js'],
                    dest: 'dest/concat/concat.js'
                },
                css:{
                    src: ['src/css/test1.css', 'src/css/test2.css', 'src/css/test3.css'],
                    dest: 'dest/css/concat.css'
                }
            },
            watch:{
                js:{
                    files:['src/concat/concat1.js', 'src/concat/concat2.js', 'src/concat/concat3.js'],
                    tasks:['concat']
                },
                css:{
                    files:['src/css/test1.css', 'src/css/test2.css', 'src/css/test3.css'],
                    tasks:['concat']
                }
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/<%=pkg.file %>.js',
                    dest: 'dest/<%= pkg.file %>.min.js'
                }
            }
        });

        // 修改实时打包检查
        grunt.loadNpmTasks('grunt-contrib-watch');

        // 合并文件
        grunt.loadNpmTasks('grunt-contrib-concat');

        // 加载提供 "uglify"任务的插件, 压缩文件
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // 自定义事件1
        grunt.registerTask('speak',function(){
            console.log("我就试一下自定义事件speak !");
        });

        // 自定义事件1
        grunt.registerTask('talk',function(){
            console.log("我就试一下自定义事件 talk !");
        });

        // 自定义事件3
        grunt.registerTask('both',['speak','talk']);

        // 默认任务, 合并文件, 压缩文件
        grunt.registerTask('default', ['concat','uglify','both']);
    }

---
### 5. jshint 检测文件中的js语法问题

    1. 方法1: "grunt-contrib-jshint": "~0.6.3",
    2. 方法2: npm install grunt-contrib-watch --save-dev

    jshint:{
                /**options: {
                    '-W033': true           // 忽略分号的错误,不检查
                },**/
                all:['src/js/test1.js']
           }

    grunt.loadNpmTasks('grunt-contrib-jshint');

    执行: grunt jshint

---
### 6. cssmin 打包样式文件

    1. 方法1: "grunt-contrib-cssmin": "^1.0.1",
    2. 方法2: npm install grunt-contrib-cssmin --save-dev

    cssmin:{
                compress:{
                    files:{
                        'dest/css/h.min.css':['src/css/h1.css','src/css/h2.css','src/css/h3.css']
                    }
                }
            },

    // 合并css 样式文件
        grunt.loadNpmTasks('grunt-contrib-cssmin');

    执行: grunt cssmin

### 7. copy 移动打包文件

    1. 方法1: "grunt-contrib-copy": "^1.0.0",
    2. 方法2: npm install grunt-contrib-copy --save-dev

    copy:{
                main:{
                    //      flatten: true,
                    //      expand: true,
                    src:'dest/css/*.css',
                    dest:'copyDest/'
                }
         },

        // 移动文件 copy
        grunt.loadNpmTasks('grunt-contrib-copy');