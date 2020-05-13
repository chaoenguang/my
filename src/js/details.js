const box1 = document.querySelector('.box_eg')
const reg = /id=(\d+)/
if (!reg.test(window.location.search)){
  window.location.href = '../pages/list.html'
}
const id = reg.exec(window.location.search)[1]-0
console.log(id)
$.ajax({
  url:'../data/list.json',
  dataType:'json',
  success (res) {
    var arrlist = []
    var arr2 = []
    console.log(res)
    res.forEach(item=>{
      if (item.goods_id === id) {
        arrlist.push(item.goods_id)
      }
    })
    function findPurpose(purposeName){
      return $.grep(res, function(n, i){
        return n.goods_id == purposeName;
      });
    };
    for (var i =0; i < arrlist.length; i++) {
      var attrpaixu = findPurpose(arrlist[i])
      arr2.push(attrpaixu)
    }
    const res2 = arr2[0]
    
    let str = ''
    res2.forEach(item=>{

      str = `
      <div class="media">
        <div class="box_left media-left">
          <div class="box_eg" id="box">
            <div class="showBox">
              <img src="${item.goods_big_logo[0]}" alt="">
              <div class="mask"></div>
            </div>
            <ul class="list">
              <p class="active">
                <img data-src="${item.goods_big_logo[0]}" data-show-src="${item.goods_big_logo[0]}" src="${item.goods_min_logo[0]}" alt="">
              </p>
              <p>
                <img data-src="${item.goods_big_logo[1]}" data-show-src="${item.goods_big_logo[1]}" src="${item.goods_min_logo[1]}" alt="">
              </p>
            </ul>
            <div class="enlarge">
            <img src="${item.goods_big_logo[0]}" alt="">
            </div>
          </div>
        </div>
        <div class="box_right media-body">
          <h4 class="media-heading">${item.goods_name}</h4>
          <div class="btns btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">XL</button>
            <button type="button" class="btn btn-default">L</button>
            <button type="button" class="btn btn-default">M</button>
            <button type="button" class="btn btn-default">S</button>
          </div>
          <p class="price">
            <i class="glyphicon glyphicon-jpy"></i>
            <span>${ item.goods_price }</span>
          </p>
          <div>
            <a href="http://localhost:18/pages/shopcar.html?id=${ item.goods_id }" class="btn btn-info btn-warning shopcar1">加入购物车</a>
            <a href="javascript:;" class="btn btn-info btn-danger">立即购买</a>
          </div>
        </div>
      </div>
      `
    })
    
    $('.box').html(str)
    new Enlarge('box')
  }
})