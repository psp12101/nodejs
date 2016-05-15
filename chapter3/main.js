/**
 * Created by denglimin on 16/5/15.
 */
var importModule = require('./exportModule.js');
importModule.add(100,200);

if(module===require.main){
    console.log('这是加载的主模块main.js');
}