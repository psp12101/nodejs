/*================================================
 * Author: tony Deng
 * Time: 2015/06/03 - 2015/06/??
 *===============================================*/
 
// 为IE8 添加indexOf 方法
if (!Array.prototype.indexOf){  
        Array.prototype.indexOf = function(elt /*, from*/){  
        var len = this.length >>> 0;  
        var from = Number(arguments[1]) || 0;  
        from = (from < 0)  
             ? Math.ceil(from)  
             : Math.floor(from);  
        if (from < 0)  
          from += len;  
        for (; from < len; from++)  
        {  
          if (from in this &&  
              this[from] === elt)  
            return from;  
        }  
        return -1;  
      };  
    }  


(function(){
		var $p=function(domElements){
			return new domSelected(domElements);	
		}
		
		var domSelected=function(domElements){
			i=0;
			var selectedElements=document.querySelectorAll(domElements);
			this.length=selectedElements.length;
			this.version="1.0.0";
			this.author="邓利民";
			this.note="公共库文件";
			for(i=0;i<this.length;i++)
			{
				this[i]=selectedElements[i];
			}
		}
		
		// 显示或隐藏dom元素
		$p.prototype=domSelected.prototype={
			hide:function(){
				var len=this.length;
				for(i=0;i<len;i++)
				{
					this[i].style.display="none";
				}
				return this;
			},
			show:function(){
				var len=this.length;
				for(i=0;i<len;i++)
				{
					this[i].style.display="block";
				}
				return this;	
			},
			
			//图片异步加载
			imgDelayLoad:function(){
				var pageImages=[];       //来自页面的图片
				var cacheImages=[];	  //缓存图片,用来在台后加载图片
				var len=this.length;
				
				//获取页面图片数组
				//<img src="loading.gif"  class="delayimg" alt="" bigimg="http://test.jinjiajinrong.com/jjjr-static/crowd/images/3.jpg"/>
				for(i=0;i<len;i++){
					pageImages.push(this[i]);
					var imageItem=new Image();
					imageItem.src=this[i].getAttribute("bigimg");  //自定义属性为bigimg,见上图
					cacheImages.push(imageItem);
				}	
				
				for(i=0;i<len;i++){
					cacheImages[i].onload=function(){
						var imageIndex=cacheImages.indexOf(this);
						pageImages[imageIndex].src=cacheImages[imageIndex].src;
					}
					cacheImages[i].src=this[i].getAttribute("bigimg");   //因为在IE8 中有图片缓存, 如果是第二次进入这个页面的话，图片在设置上面onload 回调函数之前就加载好了，不会触发回调函数。所以重新设置一下src 来再次触发onload 事件。
				}
			}
			
			// 接着扩展方法	
		}
		
		
		//如果没有的话
		if(!window.$p){
			window.$p=$p;
		}
	}	
)();



 /*================================================
 * 静态方法
 *===============================================*/
  
var $j=function()
{
	
}

// 获取元素在页面上的位置
$j.getElementPosition=function(obj)
{
	var pos = {"top":0, "left":0};
    if (obj.offsetParent)
    {
        while (obj.offsetParent)
        {
             pos.top += obj.offsetTop;
             pos.left += obj.offsetLeft;
             obj = obj.offsetParent;
         }
     }
     else if(obj.x)
     {
         pos.left += obj.x;
     }
     else if(obj.y)
     {
     	 pos.top += obj.y;
     }
     return {x:pos.left, y:pos.top};	
}

// 显示半透明遮罩mask

$j.showMask = function()
{
	var mask=document.getElementById("mask");
	if(mask)    // 如果有mask
	{
		if(window.navigator.userAgent.indexOf("MSIE 8.0")>-1)
		{
			
			mask.style.cssText="display:block; visibility:visible; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:#000; filter:alpha(opacity=70);z-index:1000";
		}
		else
		{
			mask.style.cssText="display:block; visibility:visible; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000";
		}
	}
	else        // 如果没有
	{
		//如果是IE8
		if(window.navigator.userAgent.indexOf("MSIE 8.0")>-1)
		{
			mask=document.createElement("div");
			mask.id="mask";
			mask.style.cssText="display:block; visibility:visible; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:#000; filter:alpha(opacity=70); z-index:1000";
		}
		else
		{
			mask=document.createElement("div");
			mask.id="mask";
			mask.style.cssText="display:block; visibility:visible; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000";
		}
		document.body.appendChild(mask);
	}
}

// 隐藏半透明遮罩mask
$j.hideMask=function()
{
	var mask=document.getElementById("mask");
	if(mask)    // 如果有mask
	{
		if(window.navigator.userAgent.indexOf("MSIE 8.0")>-1)
		{
			mask.style.cssText="display:block; visibility:hidden; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:#000; filter:alpha(opacity=70) z-index:1000";
		}
		else
		{
			mask.style.cssText="display:block; visibility:hidden; position:fixed; left:0px; top:0px; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000";
		}
	}
}

// 判断浏览器是不是ie
$j.isIe=function()
{ 
    if (!!window.ActiveXObject || "ActiveXObject" in window)  
        return true;  
    else  
        return false;  
}  

// 判断浏览器是不是ie6
$j.isIe6=function()
{
	if(window.navigator.userAgent.indexOf("MSIE 6.0")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断浏览器是不是ie7
$j.isIe7=function()
{
	if(window.navigator.userAgent.indexOf("MSIE 7.0")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断浏览器是不是ie8
$j.isIe8=function()
{
	if(window.navigator.userAgent.indexOf("MSIE 8.0")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断浏览器是不是ie9
$j.isIe9=function()
{
	if(window.navigator.userAgent.indexOf("MSIE 9.0")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断浏览器是不是ie9
$j.isIe10=function()
{
	if(window.navigator.userAgent.indexOf("MSIE 10.0")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断浏览器是不是ie11
$j.isIe11=function()
{
	// ie 11 不再带有 MSIE 11.0 的标志 ，转而使用 Trident/7.0 和 rv:11.0 作为标志
	/*
		window.navigator.userAgent
"Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; Shuame; rv:11.0) like Gecko"
	*/
	var trident = !!navigator.userAgent.match(/Trident\/7.0/);
    var rv=navigator.userAgent.indexOf("rv:11.0");

    if (trident&&rv!=-1) 
	{
		return true;
	}
	else
	{
		return false;
	}
}

// 判断是不是chrome 
$j.isChrome=function()
{
	if(window.navigator.userAgent.indexOf("Chrome")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断是不是firefox 
$j.isFirefox=function()
{
	if(navigator.userAgent.indexOf("Firefox")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断是不是Opera 
$j.isOpera=function()
{
	if(navigator.userAgent.indexOf('Opera')>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断是不是手机
$j.isMobile=function()
{
	if(!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/))
	{
		return true;
	}
	else
	{
		return false;	
	}	
}
   
// 判断是不是IOS手机
$j.isIos=function()
{
	if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断是不是iPad
$j.isIpad=function()
{
	if(navigator.userAgent.indexOf("iPad")>-1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}


// 判断是不是Android手机
$j.isAndroid=function()
{
	if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}

// 判断是不是微信浏览器
$j.isWechat=function()
{
	if(navigator.userAgent.indexOf('MicroMessenger')> -1)
	{
		return true;
	}
	else
	{
		return false;	
	}	
}


//是否支持wegGL
$j.isWebglSupported=function()
{
	try{
    	return !! (window.WebGLRenderingContext && ( document.createElement( 'canvas' ).getContext( 'webgl' ) || document.createElement( 'canvas' ).getContext( 'experimental-webgl' )));
   	}
	catch( e ) { return false; } 	
}


