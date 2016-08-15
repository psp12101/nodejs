/**
 * Created by denglimin on 16/8/15.
 */
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
                //tasks:['concat:js']
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

    // 默认任务, 合并文件, 压缩文件, 监视文件, 自定义文件
    grunt.registerTask('default', ['concat','uglify','watch','both']);
}