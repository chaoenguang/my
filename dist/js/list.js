"use strict";$(".sort>span").hover(function(){$(this).addClass("list_active").siblings().removeClass("list_active");var n=$(this).index()*$(".move_line").width();$(".move_line").stop().animate({left:n},300)});var listInfo={pagenum:1,pagesize:3},pageInfo={pagenum:listInfo.pagenum,pagesize:listInfo.pagesize,first:"首页",prev:"上页",next:"下页",last:"末页",change:function(n){listInfo.pagenum=n,getList()}},getList=getList0;function getList0(){$.ajax({url:"../data/list.json",dataType:"json",data:listInfo,success:function(n){var s=n.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),a="";s.forEach(function(n){a+='\n          <li class="col-xs-3">\n            <div class="row">\n              <div class="">\n                <div class="thumbnail">\n                  <img src="'.concat(n.goods_big_logo[0],'" alt="...">\n                  <div class="caption">\n                    <h3>').concat(n.goods_name,'</h3>\n                    <p class="price">\n                      <i>¥</i>\n                      <span>').concat(n.goods_price,'</span>\n                      <i class="price_end">.00</i>\n                    </p>\n                    <p class="bt">\n                      <a href="../pages/details.html?id=').concat(n.goods_id,'" class="btn btn-danger" role="button">详细信息</a> \n                      <a href="http://localhost:18/pages/shopcar.html?id=').concat(n.goods_id,'" class="btn btn-warning " role="button">去到购物车</a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n        ')}),$(".l_box").html(a)}})}function getList1(){$.ajax({url:"../data/list.json",dataType:"json",data:listInfo,success:function(n){var s=n.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),a="";s.forEach(function(n){a+='\n          <li class="col-xs-3">\n            <div class="row">\n              <div class="">\n                <div class="thumbnail">\n                  <img src="'.concat(n.goods_big_logo[0],'" alt="...">\n                  <div class="caption">\n                    <h3>').concat(n.goods_name,'</h3>\n                    <p class="price">\n                      <i>¥</i>\n                      <span>').concat(n.goods_price,'</span>\n                      <i class="price_end">.00</i>\n                    </p>\n                    <p class="bt">\n                      <a href="../pages/details.html?id=').concat(n.goods_id,'" class="btn btn-danger" role="button">详细信息</a> \n                      <a href="http://localhost:18/pages/shopcar.html?id=').concat(n.goods_id,'" class="btn btn-warning " role="button">去到购物车</a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n        ')}),$(".l_box").html(a)}})}function getList2(){$.ajax({url:"../data/list.json",dataType:"json",data:listInfo,success:function(n){var s=[],a=[];function i(a){return $.grep(n,function(n,s){return n.goods_price==a})}n.forEach(function(n){s.push(n.goods_price)}),shengxu(s);for(var t=0;t<s.length;t++){var o=i(s[t]);a.push(o)}var c=a.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),e=(n.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),"");c.forEach(function(n){e+='\n          <li class="col-xs-3">\n            <div class="row">\n              <div class="">\n                <div class="thumbnail">\n                  <img src="'.concat(n[0].goods_big_logo[0],'" alt="...">\n                  <div class="caption">\n                    <h3>').concat(n[0].goods_name,'</h3>\n                    <p class="price">\n                      <i>¥</i>\n                      <span>').concat(n[0].goods_price,'</span>\n                      <i class="price_end">.00</i>\n                    </p>\n                    <p class="bt">\n                      <a href="../pages/details.html?id=').concat(n[0].goods_id,'" class="btn btn-danger" role="button">详细信息</a> \n                      <a href="http://localhost:18/pages/shopcar.html?id=').concat(n[0].goods_id,'" class="btn btn-warning " role="button">去到购物车</a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n        ')}),$(".l_box").html(e)}})}function getList3(){$.ajax({url:"../data/list.json",dataType:"json",data:listInfo,success:function(n){var s=[],a=[];function i(a){return $.grep(n,function(n,s){return n.goods_price==a})}n.forEach(function(n){s.push(n.goods_price)}),jiangxu(s);for(var t=0;t<s.length;t++){var o=i(s[t]);a.push(o)}var c=a.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),e=(n.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize),"");c.forEach(function(n){e+='\n          <li class="col-xs-3">\n            <div class="row">\n              <div class="">\n                <div class="thumbnail">\n                  <img src="'.concat(n[0].goods_big_logo[0],'" alt="...">\n                  <div class="caption">\n                    <h3>').concat(n[0].goods_name,'</h3>\n                    <p class="price">\n                      <i>¥</i>\n                      <span>').concat(n[0].goods_price,'</span>\n                      <i class="price_end">.00</i>\n                    </p>\n                    <p class="bt">\n                      <a href="../pages/details.html?id=').concat(n[0].goods_id,'" class="btn btn-danger" role="button">详细信息</a> \n                      <a href="http://localhost:18/pages/shopcar.html?id=').concat(n[0].goods_id,'" class="btn btn-warning " role="button">去到购物车</a>\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n        ')}),$(".l_box").html(e)}})}function shengxu(n){for(var s=0;s<n.length-1;s++)for(var a=0;a<n.length-1-s;a++)if(n[a]>n[a+1]){var i=n[a];n[a]=n[a+1],n[a+1]=i}}function jiangxu(n){for(var s=0;s<n.length-1;s++)for(var a=0;a<n.length-1-s;a++)if(n[a]<n[a+1]){var i=n[a];n[a]=n[a+1],n[a+1]=i}}$("#px1").click(function(){(getList=getList1)()}),$("#px2").click(function(){(getList=getList2)()}),$("#px3").click(function(){(getList=getList3)()}),$.ajax({url:"../data/list.json",dataType:"json",success:function(n){pageInfo.total=n.length-0,new Pagenation("#page",pageInfo)}});