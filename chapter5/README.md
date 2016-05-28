# nodejs
![第五章节开始了](http://www.denglm.com/images/backtotop.png)
## chapter5 第五章节 nodejs buffer 类处理二进制数据

### 创建二进制Buffer 对像

    1. mybuffer = new Buffer(100);       	// 初始化100byte 长度的Buffer
    2. mybuffer = new Buffer([1,2,3,4,5]);  // 用数组来初始化buffer
    3. mybuffer.fill('你好'，10，90);    		// buf.fill(value,[offset],[end])  


### 字符串的长度，buffer 的长度
    
    1. 如果是英文字符，一个字符占一个byte,如果是中文，一个字符点三个byte
    2. strEn = "en"  strZh = "中文"
    3. strEnBuffer = new Buffer(2)  strEnBuffer.fill("en");      // <Buffer 65 6e>
    4. strZhBuffer = new Buffer(6)  strZhBuffer.fill("中文");     // <Buffer e4 b8 ad e6 96 87>
    5. strEnBuffer.length   // 2 
    6. strZhBuffer.length   // 6
    7. strEnBuffer.toString() 	// "en" 
    7. strZhBuffer.toString() 	// "中文"
    8. strEn.length // 2
    9. strZh.length // 2 

### slice 截取一部分 buffer

    1. buff = new Buffer("我喜欢编程");    // <Buffer e6 88 91 e5 96 9c e6 ac a2 e7 bc 96 e7 a8 8b>
    2. buffTiny = buff.slice(3,10);       // <Buffer e5 96 9c e6 ac a2 e7>
    3. buffTiny 和 buff 指向内存的同一个位置，所以，修改buffTiny， buff 也会跟着变


### Buffer 对象的write 方法

	1. buff = new Buffer("我喜爱编程");    // <Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
	2. buff.write('热',3,3);      		  // <Buffer e6 88 91 e7 83 ad e7 88 b1 e7 bc 96 e7 a8 8b>
	3. buf.write('string',[offset],[length],[encoding]);    // 语法

### stringDecoder

    1. 跟.toString 方法一样，只不过有一种情况不太一样
    2. buff = new Buffer("我喜爱编程");   // <Buffer e6 88 91 e5 96 9c e7 88 b1 e7 bc 96 e7 a8 8b>
       buff1 = buff.slice(0,5);  		// <Buffer e6 88 91 e5 96>
       buff2 = buff.slice(5,15); 		// <Buffer 9c e7 88 b1 e7 bc 96 e7 a8 8b>
       buff1.toString();		 		// '我��'
       buff2.toString();		 		//'�爱编程'
    3. stringDecoder 不会出现这种情况
       var stringDecoder = require('string_decoder').StringDecoder;
       var decoder = new stringDecoder();      	// new stringDecoder([encoding])  默认是utf8
       decoder.write(buff1);			// '我'
       decoder.write(buff2);			// '喜爱编程'

### copy 方法 复制 buffer
    
    1.  a.copy(b,10)     				// 将a复制到b,从10 开始的位置
    									// buf.copy(targetBuffer,[targetStart],[sourceStart],[souceEnd])
    2.  跟slice 不一样，修改a后，b不会跟着改变

### isBuffer 判断是不是buffer

	1. 用typeof 不能正确判断，因为只能显示为object
	2. Buffer.isBuffer(buff)   			// true

# byteLength 方法
 
    1. Buffer.byteLength('我喜欢编程','utf8') // 15 
    									// Buffer.byteLength(string,[encoding])

# concat 方法
    
    str1 = new Buffer('我'); str2 = new Buffer('喜'); str3 = new Buffer('欢');str4 = new Buffer('编');str5 = new Buffer('序');str6 = new Buffer('啊');
    buff = Buffer.concat([str1,str2,str3,str4,str5,str6])   // <Buffer e6 88 91 e5 96 9c e6 ac a2 e7 bc 96 e5 ba 8f e5 95 8a>
    buff.toString() 										// '我喜欢编序啊'

# isEncoding 方法，判断是不是某种编码格式字符串

   	Buffer.isEncoding('utf8')   	// true
   	Buffer.isEncoding('utf88888')   // false
