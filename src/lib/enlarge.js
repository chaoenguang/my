function Enlarge(id) {
this.ele = document.querySelector(`#${id}`)
this.showBox = this.ele.querySelector('.showBox')
this.mask = this.ele.querySelector('.mask')
this.enlarge = this.ele.querySelector('.enlarge')
this.ps = this.ele.querySelectorAll('p')
this.img = this.ele.querySelector('.enlarge>img')

this.inti()
}
//启动器
Enlarge.prototype.inti = function () {
  this.overOut()
  this.maskMove()
  this.setSize()
  this.pClick()
}
// 移入移出
Enlarge.prototype.overOut = function () {
  this.showBox.addEventListener('mouseover', () => {
    this.mask.style.display = 'block'
    this.enlarge.style.display = 'block'
  })
  this.showBox.addEventListener('mouseout', () => {
    this.mask.style.display = 'none'
    this.enlarge.style.display = 'none'
  })
}
//动起来
Enlarge.prototype.maskMove = function () {
  this.showBox.addEventListener('mousemove', e => {
    e = e || window.event
    let x = e.pageX - this.ele.offsetLeft - 100
    let y = e.pageY - this.ele.offsetTop - 100
    //边界值判断
    if (x <= 0) x = 0
    if (y <= 0) y = 0
    if (x >= this.showBox.offsetWidth - this.mask.offsetWidth) x = this.showBox.offsetWidth - this.mask.offsetWidth
    if (y >= this.showBox.offsetHeight - this.mask.offsetHeight) y = this.showBox.offsetHeight - this.mask.offsetHeight
    this.mask.style.left = x + 'px'
    this.mask.style.top = y + 'px'
    const enlargeX = this.enlarge.offsetWidth
    const enlargeY = this.enlarge.offsetHeight
    const bgX = -x * enlargeX / this.mask.offsetWidth
    const bgy = -y * enlargeY / this.mask.offsetHeight
    this.img.style.top = bgy + 'px'
    this.img.style.left = bgX + 'px'
    // this.img.style.backgroundPosition = `-${bgX}px -${bgy}px`
  })
}
// 等比例
Enlarge.prototype.setSize = function () {
  //获取mask的尺寸
  const maskX = parseInt(getComputedStyle(this.mask).width)
  const maskY = parseInt(getComputedStyle(this.mask).height)
  //获取showBox的尺寸
  const showBoxX = this.showBox.offsetWidth
  const showBoxY = this.showBox.offsetHeight
  //获取背景图的尺寸
  const bgX = this.img.offsetWidth
  // const bgX = parseInt(getComputedStyle(this.enlarge).backgroundSize.split(' ')[0])
  const bgY = this.offsetHeight
  // const bgY = parseInt(getComputedStyle(this.enlarge).backgroundSize.split(' ')[1])
  //计算enlarge的宽高
  const x = maskX / showBoxX * bgX
  const y = maskY / showBoxY * bgY
  this.enlarge.style.width = x + 'px'
  this.enlarge.style.height = y + 'px'
}
//添加点击事件
Enlarge.prototype.pClick = function () {
  const _this = this
  this.ps.forEach( item => {
    // item.className = ''
    item.addEventListener('click',  function () {
      _this.ps.forEach(item => item.className = '')
      this.className = 'active'
      const showImg = this.firstElementChild.getAttribute('data-show-src')
      const bgImg = this.firstElementChild.getAttribute('data-src')
      _this.showBox.firstElementChild.setAttribute('src', showImg)
      _this.img.setAttribute('src',bgImg)
      // _this.enlarge.style.backgroundImage = `url(${ bgImg })`
    })
  })
}