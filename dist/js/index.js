"use strict";$(".banner_box>ul>li>img").mouseout(function(){$(this).parents().find(".leftRight").css({display:"none"})}),$(".banner_box>ul>li>img").mouseover(function(){$(this).parents().find(".leftRight").css({display:"flex"})}),$(".banner_box>.leftRight").mouseover(function(){$(this).css({display:"flex"})}),$(window).scroll(function(){var i=$(window).scrollTop();i<696?$(".gd").hide():$(".gd").show(),i<590?$(".lc").hide():$(".lc").show()}),$(".lc>ul>li").click(function(){var i=$(this).index();$(this).addClass("lcActive").siblings().removeClass("lcActive"),0===i&&$("html").animate({scrollTop:600},500),1===i&&$("html").animate({scrollTop:1157},500),2===i&&$("html").animate({scrollTop:1714},500),3===i&&$("html").animate({scrollTop:2271},500)}),$(".goTop").click(function(){$("html").animate({scrollTop:0})});var a=getCookie("a");a&&($(".shopcar>dl>dd>.btn").css({display:"none"}),$(".top_nav_content_right>ul>li").first().find("p").text("已登录"));