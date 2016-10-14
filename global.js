
var Global; if (!Global) Global = {};


// 图片预加载
/*	
	jQuery 图片预加载， 插件 lazyload
	http://www.ijquery.cn/?p=253
*/
// 图片预加载
(function lodinImg(){
 var images = new Array()
    function preload() {
            for (i = 0; i < preload.arguments.length; i++) 
            {
                images[i] = new Image()
 			    images[i].src = preload.arguments[i]                               
             }
    }
    preload(
           /*
            "images/gift1.png",
            "images/gift2.png",
            "images/gift3.png",
            "images/gift4.png"
            */
    )
})();


//动态更改视频
function setEmbed(){
	var tabv = document.getElementById("f_tabv");
	var tabva = tabv.getElementsByTagName("a");
	var tabcv = document.getElementById("f_tab_cv");
	tabcv.innerHTML = '<EMBED src="abc.wmv" autostart="true" width="545" height="325" type="video/x-ms-asf"></EMBED>';
	
	for(var i=0; i<tabva.length; i++){
	  tabva[i].onclick=function(){
	      var href1 = this.getAttribute("href");
	        var href2 = '<EMBED src="'+href1+'" autostart="true" width="545" height="325" type="video/x-ms-asf"></EMBED>';
	        tabcv.getElementsByTagName("embed")[0].style.display="none";
	        tabcv.innerHTML="";
	        tabcv.innerHTML=href2;
	        for(i=0; i<tabva.length; i++){
	          tabva[i].className='';
	        }
	        this.className = "act";
	        return false;
	    }
	}
}


//兼容ie
(function setSrc(obj){ 
	var play = $(".play");
	var playLen = $(".play").length;
	var videoPar = $(".video_pop")
	var videoParHTML = null;
	//$(videoParHTML).appendTo(videoPar);    
	
	for (var i=0;i<playLen;i++) {
		//var _index = i;
		//console.log(_index)
		
		play.eq(i).click(function(){
			var iTargetSrc = $(this).attr("dateSrc");   //获取点击播放视频的url
			var iTargetName = $(this).attr("videoname");   //获取点击播放视频的名称
			videoParHTML = '<div class="close" onclick="Tips.hideVideo();"><img src="images/video_x.png" /></div>'
						  +'<h2 class="video_tit">'+iTargetName+'</h2>'
						  +'<embed allowscriptaccess="never" allownetworking="internal" invokeurls="false" src='+iTargetSrc+' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" quality="high" autostart="0" wmode="transparent" align="middle"></embed>';
			
			//console.log(iTargetSrc)
			//console.log(iTargetName)
			//alert(iTargetSrc)
			//alert(iTargetName)
	
			
			$(".video_pop embed").hide();  				//隐藏embed 标签
			$(".video_pop").html("");						//清空
		
			$(videoParHTML).appendTo(videoPar);	
			showHide('#fade_div','.video_pop');
			
			
			var parentWidth = $("embed").parent().width();
			var parentHeight = $("embed").parent().height();
			
		
			$("embed").css({
				"width":parentWidth,
				"height":parentHeight
			})

		});
	}
})();

//动态更改视频


function lodinImg(){
 var images = new Array()
    function preload() {
            for (i = 0; i < preload.arguments.length; i++) 
            {
                images[i] = new Image()
 			    images[i].src = preload.arguments[i]                               
             }
    }
    preload(
            "http://domain.tld/gallery/image-001.jpg",
            "http://domain.tld/gallery/image-002.jpg",
            "http://domain.tld/gallery/image-003.jpg"
    )
}


// 移动端 rem尺寸
function setRem = function(){
	var doc = document;
	var docEl = document.documentElement;
	var win = window;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		// 按照640比例可以直接用设计图尺寸除100
		if (width > 640) width = 640;
		if (width < 320) width = 320;
		var rem = width / 640 * 10;
		docEl.style.fontSize = rem + "px";
	}
	var tid;
	win.addEventListener("resize", function() {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 300);
	}, false);
	win.addEventListener("pageshow", function(e) {
		if (e.persisted) {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);
	refreshRem();
}

//天下军武，签到，标签变换---进度条增长---显示签到后状态
function btnQiandao(){
	$(".btn").bind('click',function(){
		$(this).removeClass('wbtn_02').addClass('wbtn_02_end').text('已签到');
	});

	var iNow = 0;
	var tNow = iNow;
	var percentShowWidth = 0;
	$(".percent-show").width(percentShowWidth);
	
	$(".btn").bind('click',function(){
		//(iNow = 0)? $(".percent-show").width(0) : false;
		if (tNow = 0) {
			$(".percent-show").width(0);
		}
		percentShowWidth+=3.57142857;
		
		(percentShowWidth>=100)? percentShowWidth = "100" :  false;
		
		$(".percent-show").animate({
			width:percentShowWidth+"%"
		},300);
		console.log(tNow);
	});
	
	$(".btn").bind('click',function(){
		$(".list p").eq(iNow).show();
		iNow++;
		console.log(iNow);
	});
}
	



// 战舰专题页，轮播 战舰参数
function addremoveClass(){
	$(".numberPbgRpt").next('.dlnumber').show();
	$(".numberlist .numberP").click(function(){
		$(this).addClass('numberPbgRpt').siblings().removeClass('numberPbgRpt');
		var _thisSL = $(this).siblings('.numberP');
		_thisSL.find('.bgcolor').removeClass('bgcolorbgRpt');
		_thisSL.find('.new').removeClass('avtive');
		_thisSL.next('.dlnumber').hide();
		if ($(this).is('.numberPbgRpt')) {
			$(this).find('.bgcolor').toggleClass('bgcolorbgRpt');
			$(this).find('.new').toggleClass('avtive');
			$(this).next('.dlnumber').toggle();
		} else{}		
	});
};

// 选项卡
function jqTab(){
	var $div_li =$(".tabs .tabList ul li");
	$div_li.click(function(){
		$( "html,body").animate({ "scrollTop" : 681 });  //滚动到指定位置
		$(this).addClass('active').siblings().removeClass('active');  
		var index =  $div_li.index(this); 
		$(".tabs .tabBox .show").eq(index).show().siblings().hide(); 
	})
}

/*
	调用：
	jqTab(".tabs .tabList .jb_ul li",".tabs .tabBox .show")

	@css主要对应样式
	.dj_tabs .dj_tabBox .shows{width: 100%;height: auto;display: none;margin-top: 10px;}
*/

function argumentsTab(tabList,tabbox)
{
	var $div_li =$(tabList);
	$div_li.click(function(){
		$(this).addClass('active').siblings().removeClass('active');  
		var index =  $div_li.index(this); 
		//alert(index);
		$(tabbox).eq(index).show().siblings().hide(); 
	})
}

// 战舰活动中心，  --  仿seleset  下拉选择框
function selectData(){
	$(".select_p_txt").bind('click',function(){
		$(".select_p_txt").each(function(){
			$(this).text("选择期限");
		});
		amount = 0;
		gift_type = 0;
		ship_level = 0;
		gift_id = 0;
		shipname = "";
		
		
		gift_id = $(this).attr("shipid");
		ship_level = $(this).attr("shiplevel");
		shipname = $(this).attr("shipname");
		$(this).siblings('.table_row').toggle().parent().parent().siblings().children('.select_p_bott').children('.table_row').hide();
		
	});
}




//imglunbo--轮播
function imglb(){
	var iNow=0;
	var iTimer=null;
	var oDivSmall = $(".pos_Smail");      						 //被移动的父节点
	var oDivSmallWidth = oDivSmall.outerWidth(true);				 //获取父节点的宽度
	var aLiSmall = $(".pos_Smail li");							 //获取移动的小图片的宽度
	var aLiSmallWidth = aLiSmall.outerWidth(true);
	oDivSmallWidth = aLiSmall.length*aLiSmallWidth+'px';		 //重置父节点的宽度，跟随li的个数计算
	
	//console.log(oDivSmallWidth);
	$(".pos_Smail").css({'width':oDivSmallWidth})				 //设置
	/*//获取ol下 li 的个数
	var sNumber = $('.focuslist ol li').length;
	console.log(sNumber);
	
	//获取ol下 li 的宽度
	var outWidth = $('.focuslist ol li').outerWidth();
	console.log(outWidth);
	
	var c = sNumber*outWidth;
	console.log(c)*/
	//获取ol下 li 的宽度
	//$('.focuslist ol').outerWidth(c);
	
	//console.log(aLiSmall.length)
	$('.focuslist ul li:first').css('zIndex',8)
	
	$('.focuslist ol li').click(function(e) {
		_index = $(this).index();
		
		if(_index == iNow) return;
			iNow = _index;
			//console.log(iNow);
			//tab
			tab();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.focuslist ul li').eq(_index).fadeIn().siblings().fadeOut();
		
		//console.log(_index);
		//newInow ();
		//playAuto();
		//_index = iNow;
	});
	function playAuto(){
		if(iNow==$('.focuslist ul li').length-1){iNow=0}else{iNow++}     //判断当前小图片是否是最后一个，是的话，返回从新开始，不是的话++
		
		$('.focuslist ol li').eq(iNow).addClass('cur').siblings().removeClass('cur')
		$('.focuslist ul li').eq(iNow).fadeIn(1000).siblings().fadeOut(1000)

		tab ();
	}
	
	function tab (){
		//第一个小图片和最后一个小图片的位置
		if (iNow == 0) //第一张
		{
			oDivSmall.animate({left:0},1000)
			
		}
		else if(iNow > aLiSmall.length-3){      //记录最后一个不用移动的小图片的位置
				
		}
		else   //不是第一张也不是最后一张
		{
			var newEle = -(iNow-1)*aLiSmallWidth+'px';
			oDivSmall.animate({left:newEle},1000)
			//startMove(oDivSmall,'left',-(iNow-1)*aLiSmall.width());
		}
		//document.title = newEle;
	}
	iTimer=setInterval(playAuto,3000)
	
	$('.focuslist').mouseover(function(e) {
	clearInterval(iTimer)
	});
	
	$('.focuslist').mouseout(function(e) {
	clearInterval(iTimer)
	iTimer=setInterval(playAuto,3000)
	});
}

// 触发型，变换位置函数，动画
function animate(obj,offsetTop,target){
	
	$(obj).hover(
		function(){
			$(this).stop().animate({marginTop:offsetTop},500)
		},
		function(){
			$(this).stop().animate({marginTop:target},500)
	});
};


//点击关闭
function closePop()
{
	var oDiv = $(".pop");
	var oBlackOverlay = $(".black_overlay");
	
	oBlackOverlay.bind("click",function(e){
	var target = $(e.target);
	if(target.closest(".pop").length == 0){
		oDiv.hide();
		oBlackOverlay.hide();
	} 
	})
};


//弹出居中
function showDiv(obj) {
	$(obj).hide();
	center(obj);
	$(window).scroll(function() {
		center(obj);
	});
	$(window).resize(function() {
		center(obj);
	});
}

function center(obj) {
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(obj).height();
	var popupWidth = $(obj).width();
	$(obj).css({
		"position": "absolute",
		"top": (windowHeight - popupHeight) / 2 + $(document).scrollTop(),
		"left": (windowWidth - popupWidth) / 2
	});
}


//广告滚动条
function ScrollImgLeft(){
	var speed=20
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML=scroll_begin.innerHTML
	
	function Marquee(){
		if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
		scroll_div.scrollLeft-=scroll_begin.offsetWidth
		else
		scroll_div.scrollLeft++
	}
	var MyMar=setInterval(Marquee,speed)
	scroll_div.onmouseover=function() {clearInterval(MyMar)}
	scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
}


function menuNav(){
	//导航
	$('.nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
	});
	//导航
	$('.right_links a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
	});
}


//点击显示隐藏
function showHide(Ele,iTaget){
		$(Ele).show();
		$(iTaget).show();
	}

//点击显示隐藏
function hide(Ele,iTaget){
		$(Ele).hide();
		$(iTaget).hide();
	}
//竖向tabs
function tabH(){
	var $aLi = $(".tabH li");
	var $aDiv = $(".dright");
	var $wrap = $(".wrap");
	
	$aLi.click(function()
	{
	for (var i =0;i<$aLi.length;i++) 
	{
		var $this = $(this);
		var $t = $this.index();
		//alert($t);
		if ($t == 0) {
			$wrap.removeClass().addClass('wrap');
		}
		if ($t == 1) {
			$wrap.removeClass().addClass('wrap1');
		}
		if ($t == 2) {
			$wrap.removeClass().addClass('wrap');
		}
		$(this).addClass("tabH_active").siblings().removeClass("tabH_active");	
		$aDiv.removeClass("tabH_show").eq($t).addClass("tabH_show");
		}
	});
};
//横向tab
function tabW(){
	var $aLi = $("#tabW_2 ul li");
	var $aUl = $("#tabW_2_c .u_2 ul");
	$aLi.click(function()
{
	for (var i =0;i<$aLi.length;i++) 
	{
		var $this = $(this);
		var $t = $this.index();
		$(this).addClass("active").siblings().removeClass("active");	
		$aUl.removeClass("tabW_show").eq($t).addClass("tabW_show");
		}
	});
};


//上下自动滚动
function aotoTop(id){
	var box = document.getElementById(id),
		can = true;
	box.innerHTML += box.innerHTML;
	box.onmouseover = function() {
		can = false
	};
	box.onmouseout = function() {
		can = true
	};
	new function() {
		var stop = box.scrollTop % 50 == 0 && !can;
		if (!stop) box.scrollTop == parseInt(box.scrollHeight / 2) ? box.scrollTop = 0 : box.scrollTop++;
		setTimeout(arguments.callee, box.scrollTop % 100 ? 10 : 500);
	};
};

//智能设定高度
function dleftHerght(ELement){
	var Height = document.body.clientHeight;
	$(ELement).css({'*height':Height,'_height':Height,'height':Height});
	alert(Height)
};

// 20160919------整理新增

// 钢铁新纪元专题

/*
	滚动动画锚点，自动计算，一一对应 -- 返回顶部
	scrollTarget(".fiedList ul li",".conbox",".go_top");
*/

function scrollTarget(ele,obj,goTop){
	
	$(ele).click(function(){
		var _index = $(this).index();
		console.log(_index);
		
		var iTarget = $(obj).eq(_index).offset().top;
		//console.log(a);
		$( "html,body").animate({ "scrollTop" : iTarget},1000);  //滚动到指定位置

	});
	$(goTop).click(function(){
		$( "html,body").animate({ "scrollTop" : 0 },1000);  //滚动到指定位置
	});
	
};
// 钢铁新纪元专题
/*
	调用：动画形式-向上滚动，显示隐藏，标题下说明部分
	scrollTit(".scrollTit",".t_3",-210,0);
*/

function scrollTit(parent,obj,iTarget,inatial){
	
	$(parent).hover(function(){
		$(this).children(obj).stop().animate({marginTop:iTarget})
	},function(){
		var topn=$(this).height();
		$(this).children(obj).stop().animate({marginTop:inatial})
	})
};
// 钢铁新纪元专题 -- 手机版
/*
	手机端手风琴效果
*/
function sfq(){
	$(".sfq .box").not('.firstBox').hide();
	$(".sfq .title").click(function(){
		$(this).siblings('.box').slideDown()
		.parent('li').siblings()
		.find('.box').hide();
				
		$(this).parent('li').addClass('active').siblings().removeClass('active');
	});
}

// showGirl专题
/*
	BLue -- 照片墙，效果，--- 没有碰撞检测， 也没有交换位置时候，动画效果 ----- 学习

	showGirl专题， 动态改变，图片路径
*/
function setImgSrc(){
	$(".showGirl li").click(function(){
		var girl4 = $(".girl4 img");
		var oldSrc = $(".girl4 img").attr('src');
		
		var newGirl = $(this).find('img');
		var targetSrc = $(this).find('img').attr('src');
		

		girl4.attr({src:targetSrc});
		newGirl.attr({src:oldSrc});
		
		//targetSrc.attr({src:'src'})
		console.log(targetSrc);
	});
}

//一、 判断是IOS设备or安卓设备

//方法一：
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if(isAndroid) {
	alert('这是Android');
}
if(isiOS) {
	alert('这是IOS');
}

//方法二：
if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
	//alert(navigator.userAgent);
	alert('这是IOS');
} else if(/(Android)/i.test(navigator.userAgent)) {
	//alert(navigator.userAgent);
	alert('这是Android');
} else {
	alert('这是PC');
};

//一、 微信浏览器or非微信浏览器。

function is_weixn() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == 'micromessenger') {
		alert('在微信里打开');
	} else {
		alert('不在微信里打开');
	}
}
is_weixn();