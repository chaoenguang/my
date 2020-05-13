$('.top_btn').click(function () {
  $(this)
    .toggleClass('btn_open')
    .prev()
    .toggleClass('top_active')
  if (!$(this).hasClass('btn_open')) {
    $(this).attr('title', '关闭')
  }else {
    $(this).attr('title', '打开')
  }
})
$('.top_nav_content_left>ul>.hov').mouseover(function () {
    $(this)
      .find('.zf')
      .text('∧')
      .end()
      .addClass('change')
      .find('.wb_nav')
      .show()
      .end()
      .find('.shop_nav')
      .show()
      .end()
      .find('.person_nav')
      .show()
      .end()
      .children()
      .eq(0)
      .css('color','#f60')
      $.ajax({
        url:'../data/find.json',
        dataType:'json',
        
        success (res) {
          let str = ''
          let str1 = ''
          let str2 = ''
          let str3 = ''
          let str4 = ''
          let shop_navstr = ''
          let person_navstr = ''
          res.wb_nav.forEach(item=>{
            str += `<p>${item}</p>`

          })
          $('.dd1').html(str)

          res.wb_nav1.forEach(item=>{
            str1 += `<p>${item}</p>`

          })
          $('.dd2').html(str1)

          res.wb_nav2.forEach(item=>{
            str2 += `<p>${item}</p>`

          })
          $('.dd3').html(str2)

          res.wb_nav3.forEach(item=>{
            str3 += `<p>${item}</p>`

          })
          $('.dd4').html(str3)

          res.wb_nav4.forEach(item=>{
            str4 += `<p>${item}</p>`

          })
          $('.dd5').html(str4)

          res.shop_nav.forEach(item=>{
            shop_navstr += `<p>${item}</p>`
          })
          $('.shop_nav>dl>dd').html(shop_navstr)

          res.person_nav.forEach(item=>{
            person_navstr += `<p>${item}</p>`
          })
          $('.person_nav>dl>dd').html(person_navstr)
        }
        
      })
})
$('.top_nav_content_left>ul>.hov').mouseout(function () {
  $(this)
    .find('.zf')
    .text('∨')
    .end()
    .removeClass('change')
    .find('.wb_nav')
    .hide()
    .end()
    .find('.shop_nav')
    .hide()
    .end()
    .find('.person_nav')
    .hide()
    .end()
    .children()
    .eq(0)
    .css('color','#000')
})
$('.top_nav_content_right>ul>.hov').mouseover(function () {
  $(this)
    .find('.zf')
    .text('∧')
    .end()
    .addClass('change')
    .find('.dingdan')
    .show()
    .end()
    .find('.yigo')
    .show()
    .end()
    .find('.shopcar')
    .show()
    .end()
    .children()
    .eq(0)
    .css('color','#f60')
  $.ajax({
    url:'../data/find.json',
    dataType:'json',
    success (res) {
      let str = ''
      let str2 = ''
      res.dingdan.forEach(item=>{
        str += `<p>${item}</p>`
      })
      $('.dingdan>dl>dd').html(str)

      
      res.yigo.forEach(item=>{
        str2 += `<p>${item}</p>`
      })
      $('.yigo>dl>dd').html(str2)


    }
  })
})
$('.top_nav_content_right>ul>.hov').mouseout(function () {
  $(this)
    .find('.zf')
    .text('∨')
    .end()
    .removeClass('change')
    .find('.dingdan')
    .hide()
    .end()
    .find('.yigo')
    .hide()
    .end()
    .find('.shopcar')
    .hide()
    .end()
    .children()
    .eq(0)
    .css('color','#000')
    
})
$('.header_foot_center>li').mouseover(function () {
  $(this)
    .find('span')
    .animate({
      height:'8px'
    },80,'linear')
})

$('.header_foot_center>li').mouseout(function () {
  $(this)
    .find('span')
    .animate({
      height:'0px'
    },80,'linear')
})

$('.banner_caidan>ul>li').mouseout(function () {
  $('.erji').css({
    display:'none'
  })
  $(this).css({
    background: '#000',
    color: '#fff'
  })
})
$('.banner_caidan>ul>li').mouseover(function () {
  $('.erji').css({
    display:'block'
  })
  $(this).css({
    background: '#fff',
    color: '#000'
  })
  // console.log($('.banner_caidan>ul>li').index($(this)))
  let n = $('.banner_caidan>ul>li').index($(this))

  $('.erji').mouseover(function () {
    $(this).css({
      display:'block'
    })
    $('.banner_caidan>ul>li').eq(n).css({
      background: '#fff',
      color: '#000'
    })
      .siblings().css({
        background: '#000',
        color: '#fff'
      })
  })
  $('.erji').mouseout(function () {
    $(this).css({
      display:'none'
    })
    $('.banner_caidan>ul>li').eq(n).css({
      background: '#000',
      color: '#fff'
    })
  })




  $.ajax({
    url:'../data/caidan.json',
    dataType:'json',
    success (res) {
      let str = ''
      let str1 = ''
      let str2 = ''
      let str3 = ''
      let str4 = ''
      let str5 = ''
      let str6 = ''
      let str7 = ''
      let str8 = ''
      let str9 = ''
      let strtop = ''
      let arr = []
      res[n].a1.forEach(item=>{
        str1 += `
        <p>${item}</p>
        `
      })
      res[n].a2.forEach(item=>{
        str2 += `
        <p>${item}</p>
        `
      })
      res[n].a3.forEach(item=>{
        str3 += `
        <p>${item}</p>
        `
      })
      res[n].a4.forEach(item=>{
        str4 += `
        <p>${item}</p>
        `
      })
      res[n].a5.forEach(item=>{
        str5 += `
        <p>${item}</p>
        `
      })
      res[n].a6.forEach(item=>{
        str6 += `
        <p>${item}</p>
        `
      })
      res[n].a7.forEach(item=>{
        str7 += `
        <p>${item}</p>
        `
      })
      res[n].a8.forEach(item=>{
        str8 += `
        <p>${item}</p>
        `
      })
      res[n].a9.forEach(item=>{
        str9 += `
        <p>${item}</p>
        `
      })
      arr.push(str1)
      arr.push(str2)
      arr.push(str3)
      arr.push(str4)
      arr.push(str5)
      arr.push(str6)
      arr.push(str7)
      arr.push(str8)
      arr.push(str9)
      // console.log(arr)
      res[n].name.forEach(function(item,index){
        str += `
        <dl>
          <dt>${item}</dt>
          <dd>
            ${arr[index]}
          </dd>
        </dl>
        
        `
      })
      $('.erji_b').html(str)
      res[n].top.forEach(item=>{
        strtop += `
        <div>${item}</div>
        `
      })
      $('.erji_a').html(strtop)
    }
  })
})
$('#lon_shop').click(function () {
  $(location).attr('href','http://localhost:18/pages/shopcar.html')
})
$('#login_bo').click(function () {
  $(location).attr('href','http://localhost:18/pages/denglu.html')
  console.log('13')
})
$('#zhuce_bo').click(function () {
  $(location).attr('href','http://localhost:18/pages/zhuce.html')
  console.log('13')
})