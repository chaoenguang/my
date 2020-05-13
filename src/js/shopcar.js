const reg = /id=(\d+)/
if (!reg.test(window.location.search)){
  window.location.href = '../pages/list.html'
}
const id = reg.exec(window.location.search)[1]-0
setCookie(`${id}`, `${id}`, 100)
  // delCookie('7')
  var arrlist = []
  var arr2 = []
  var cookiestr = document.cookie
  var cookiearr = cookiestr.split('; ')
  var cookieis 
  var cookievalue = []
$.ajax({
  url:'../data/list.json',
  dataType:'json',
  success (res) {
      cookiearr.forEach(item=>{
        cookieis = +getCookie(`${item.split('=')[0]}`)
        cookievalue.push(cookieis)
      })
      
      function findPurpose(purposeName){
        return $.grep(res, function(n, i){
          return n.goods_id == purposeName;
        });
      };
      for (var i = 0; i < cookievalue.length; i++) {
        var attrpaixu = findPurpose(cookievalue[i])
        arr2.push(attrpaixu)
      }
      var str = ''
      arr2.forEach(item=>{
        str += `
            <div class="row ca_box">
              <div class="ca_input_box">
                  <input type="checkbox">
              </div>
              <div class="ca_content_box">
                <div class="ca_content">
                  <img src="${item[0].goods_big_logo[0]}" alt="">
                  <p>${item[0].goods_name}</p>
                </div>
                <div class="ca_jj">
                  <span class="ca_sum_d">-</span>
                  <div class="ca_shuzi">1</div>
                  <span class="ca_sum_u">+</span>
                </div>
                <div class="ca_price">
                  <i>¥</i>
                  <span>${ item[0].goods_price }</span>
                </div>
                <div class="ca_con_sc" num = "${item[0].goods_id}">删除</div>
              </div>
          </div>
        `
      })
      $('.car_main').html(str)
      var arr = Array.from($('.car_main input'))
    
      $('#all').change(function () {
        $('.car_main input').prop('checked',this.checked)
      })

      $('.car_main input').change(function () {
        var flag = arr.every(function (item,index) {
          return item.checked
        })
        $('#all').prop('checked', flag)
      })
      $('.car_main').on('click','.ca_con_sc',function () {
        console.log('123')
        delCookie(`${ +$(this).attr('num') }`)
        var arrlist = []
        var arr2 = []
        var cookiestr = document.cookie
        var cookiearr = cookiestr.split('; ')
        var cookieis 
        var cookievalue = []
        cookiearr.forEach(item=>{
          cookieis = +getCookie(`${item.split('=')[0]}`)
          cookievalue.push(cookieis)
        })
        
        console.log(cookievalue)
        function findPurpose(purposeName){
          return $.grep(res, function(n, i){
            return n.goods_id == purposeName;
          });
        };
        for (var i = 0; i < cookievalue.length; i++) {
          var attrpaixu = findPurpose(cookievalue[i])
          arr2.push(attrpaixu)
        }
        console.log(arr2[0])
        var str = ''
        if (arr2[0].length === 0) {
          $('.car_main').html('什么也没有，快去购物吧！！！')
        } else {
            arr2.forEach(item=>{
            str += `
                <div class="row ca_box">
                  <div class="ca_input_box">
                      <input type="checkbox">
                  </div>
                  <div class="ca_content_box">
                    <div class="ca_content">
                      <img src="${item[0].goods_big_logo[0]}" alt="">
                      <p>${item[0].goods_name}</p>
                    </div>
                    <div class="ca_jj">
                      <span class="ca_sum_d">-</span>
                      <div class="ca_shuzi">1</div>
                      <span class="ca_sum_u">+</span>
                    </div>
                    <div class="ca_price">
                      <i>¥</i>
                      <span>${ item[0].goods_price }</span>
                    </div>
                    <div class="ca_con_sc" num = "${item[0].goods_id}">删除</div>
                  </div>
              </div>
            `
          })
          $('.car_main').html(str)
          var arr = Array.from($('.car_main input'))
    
          $('#all').change(function () {
            $('.car_main input').prop('checked',this.checked)
          })

          $('.car_main input').change(function () {
            var flag = arr.every(function (item,index) {
              return item.checked
            })
            $('#all').prop('checked', flag)
          })
        }
       
      })
      
    }
})
