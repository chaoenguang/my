$('.banner_box>ul>li>img').mouseout(function () {
  $(this)
    .parents()
    .find('.leftRight')
    .css({
      display:"none"
    })
})
$('.banner_box>ul>li>img').mouseover(function () {
  $(this)
    .parents()
    .find('.leftRight')
    .css({
      display:"flex"
    })
})
$('.banner_box>.leftRight').mouseover(function () {
  $(this)
    .css({
      display:"flex"
    })
})
$(window).scroll(()=>{
  let topp = $(window).scrollTop()
  if(topp < 696) {
    $('.gd').hide()
    
  } else {
    $('.gd').show()
  }
  if (topp < 590) {
    $('.lc').hide()
  } else {
    $('.lc').show()
  }

})
$('.lc>ul>li').click(function () {
  let index = $(this).index()
  $(this)
    .addClass('lcActive')
    .siblings()
    .removeClass('lcActive')
  if (index === 0) {
    $('html').animate({
      scrollTop:600
    }, 500)
  }
  if (index === 1) {
    $('html').animate({
      scrollTop:1157
    },500)
  }
  if (index === 2) {
    $('html').animate({
      scrollTop:1714
    },500)
  }
  if (index === 3) {
    $('html').animate({
      scrollTop:2271
    },500)
  }
  
})

$('.goTop').click(function () {
  $('html').animate({
    scrollTop:0
  })
})
var a = getCookie('a')
if (a) {
  $('.shopcar>dl>dd>.btn').css({
    display:'none'
  })
  $('.top_nav_content_right>ul>li').first().find('p').text('已登录')
}