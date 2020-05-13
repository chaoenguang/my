$('.sort>span').hover(function () {
  $(this)
    .addClass('list_active')
    .siblings()
    .removeClass('list_active')
    let Num = $(this).index()*$('.move_line').width()
  $('.move_line').stop().animate({left:Num},300)
})

const listInfo = {
  pagenum:1,
  pagesize:3
}

const pageInfo = {
  pagenum:listInfo.pagenum,
  pagesize:listInfo.pagesize,
  first:'首页',
  prev:'上页',
  next:'下页',
  last:'末页',
  change(n) {
    listInfo.pagenum = n
    
    getList()
  }

}
var getList = getList0
$('#px1').click(function () {
    getList = getList1
    getList()
})
$('#px2').click(function () {
    getList = getList2
    getList()
})
$('#px3').click(function () {
    getList = getList3
    getList()
})
$.ajax({
  url:'../data/list.json',
  dataType:'json',
  success (res) {
    pageInfo.total = res.length - 0
    new Pagenation('#page', pageInfo)
  }
})


function getList0() {
  $.ajax({
    url:'../data/list.json',
    dataType:'json',
    data:listInfo,
    success (res) {
      var arrlist = []
      let res2 = res.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      let str = ''
      res2.forEach(item => {
        str += `
          <li class="col-xs-3">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="${ item.goods_big_logo[0] }" alt="...">
                  <div class="caption">
                    <h3>${ item.goods_name }</h3>
                    <p class="price">
                      <i>¥</i>
                      <span>${ item.goods_price }</span>
                      <i class="price_end">.00</i>
                    </p>
                    <p class="bt">
                      <a href="../pages/details.html?id=${ item.goods_id }" class="btn btn-danger" role="button">详细信息</a> 
                      <a href="http://localhost:18/pages/shopcar.html?id=${ item.goods_id }" class="btn btn-warning " role="button">去到购物车</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `
      })
      $('.l_box').html(str)
    }
  })
}

function getList1() {
  $.ajax({
    url:'../data/list.json',
    dataType:'json',
    data:listInfo,
    success (res) {
      let res2 = res.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      let str1 = ''
      res2.forEach(item => {
        str1 += `
          <li class="col-xs-3">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="${ item.goods_big_logo[0] }" alt="...">
                  <div class="caption">
                    <h3>${ item.goods_name }</h3>
                    <p class="price">
                      <i>¥</i>
                      <span>${ item.goods_price }</span>
                      <i class="price_end">.00</i>
                    </p>
                    <p class="bt">
                      <a href="../pages/details.html?id=${ item.goods_id }" class="btn btn-danger" role="button">详细信息</a> 
                      <a href="http://localhost:18/pages/shopcar.html?id=${ item.goods_id }" class="btn btn-warning " role="button">去到购物车</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `
      })
      $('.l_box').html(str1)
    }
  })
}

function getList2() {
  $.ajax({
    url:'../data/list.json',
    dataType:'json',
    data:listInfo,
    success (res) {
      var arrlist = []
      var arr2 = []
      res.forEach(item=>{
        arrlist.push(item.goods_price)
      })
      shengxu(arrlist)
      
      function findPurpose(purposeName){
        return $.grep(res, function(n, i){
          return n.goods_price == purposeName;
        });
      };
      for (var i =0; i < arrlist.length; i++) {
        var attrpaixu = findPurpose(arrlist[i])
        arr2.push(attrpaixu)
      }
      let res3 = arr2.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      
      let res2 = res.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      let str2 = ''
      res3.forEach(item => {
        str2 += `
          <li class="col-xs-3">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="${ item[0].goods_big_logo[0] }" alt="...">
                  <div class="caption">
                    <h3>${ item[0].goods_name }</h3>
                    <p class="price">
                      <i>¥</i>
                      <span>${ item[0].goods_price }</span>
                      <i class="price_end">.00</i>
                    </p>
                    <p class="bt">
                      <a href="../pages/details.html?id=${ item[0].goods_id }" class="btn btn-danger" role="button">详细信息</a> 
                      <a href="http://localhost:18/pages/shopcar.html?id=${ item[0].goods_id }" class="btn btn-warning " role="button">去到购物车</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `
      })
      $('.l_box').html(str2)
    }
  })
}

function getList3() {
  $.ajax({
    url:'../data/list.json',
    dataType:'json',
    data:listInfo,
    success (res) {
      var arrlist = []
      var arr2 = []
      res.forEach(item=>{
        arrlist.push(item.goods_price)
      })
      jiangxu(arrlist)
      
      function findPurpose(purposeName){
        return $.grep(res, function(n, i){
          return n.goods_price == purposeName;
        });
      };
      for (var i =0; i < arrlist.length; i++) {
        var attrpaixu = findPurpose(arrlist[i])
        arr2.push(attrpaixu)
      }
      let res3 = arr2.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      
      let res2 = res.splice((listInfo.pagenum-1)*listInfo.pagesize,listInfo.pagesize)
      let str2 = ''
      res3.forEach(item => {
        str2 += `
          <li class="col-xs-3">
            <div class="row">
              <div class="">
                <div class="thumbnail">
                  <img src="${ item[0].goods_big_logo[0] }" alt="...">
                  <div class="caption">
                    <h3>${ item[0].goods_name }</h3>
                    <p class="price">
                      <i>¥</i>
                      <span>${ item[0].goods_price }</span>
                      <i class="price_end">.00</i>
                    </p>
                    <p class="bt">
                      <a href="../pages/details.html?id=${ item[0].goods_id }" class="btn btn-danger" role="button">详细信息</a> 
                      <a href="http://localhost:18/pages/shopcar.html?id=${ item[0].goods_id }" class="btn btn-warning " role="button">去到购物车</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `
      })
      $('.l_box').html(str2)
    }
  })
}


function shengxu(arr) {
  for (var i = 0; i < arr.length - 1; i++) {

    for (var j = 0; j < arr.length - 1 - i; j++) {

      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }

    }

  }
}
function jiangxu(arr) {
  for (var i = 0; i < arr.length - 1; i++) {

    for (var j = 0; j < arr.length - 1 - i; j++) {

      if (arr[j] < arr[j + 1]) {
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }

    }

  }
}


