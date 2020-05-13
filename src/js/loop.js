/* 

*/
//移动函数move
function move(ele, target, cb) {
  const timerObj = {}
  for (let attr in target) {
    timerObj[attr] = setInterval(() => {
      let current = attr === 'opacity' ? getComputedStyle(ele)[attr] * 100 : parseInt(getComputedStyle(ele)[attr])
      //计算移动距离
      let disdence = (target[attr] - current) / 5
      disdence = disdence > 0 ? Math.ceil(disdence) : Math.floor(disdence) 
      //判断赋值和停止
      if (current === target[attr]) {
        clearInterval(timerObj[attr])
        delete timerObj[attr]
        if (getObjLength(timerObj) === 0) cb()
      } else {
        ele.style[attr] = attr === 'opacity' ? (disdence + current) / 100 : disdence + current + 'px'
      }
    },30)
  }
}
function getObjLength(obj) {
  let n = 0
  for (let attr in obj) {
    n++
  }
  return n
}


function Loop(id) {
  this.ele = document.querySelector(`#${id}`)
  this.img_box = this.ele.querySelector('ul')
  this.point_box = this.ele.querySelector('ol')
  this.lis = this.ele.querySelectorAll('ul>li')
  this.window_height = 165
  this.left = this.ele.querySelector('.left')
  this.right = this.ele.querySelector('.right')
  this.leftRight = this.ele.querySelector('.leftRight')
}
Loop.prototype.change = function() {
  let index = 1
  const _this = this
  let loopTimer = null
  let flag = true
  // 添加焦点
  // setPoint()
  //复制元素
  copyEle()
  //动起来
  autoPlay()
  // 移入移出
  overOut()
  // 左右点击
  // leftRight()
  // 焦点点击
  // pointClick()

  w_stop()
  // 添加焦点的函数
  function setPoint() {
    let frg = document.createDocumentFragment()
    for (let i = 0; i < _this.lis.length; i++) {
      const li = document.createElement('li')
      if (i === 0) li.className = 'active'
      li.setAttribute('index',i)
      frg.appendChild(li)
    }
    _this.point_box.appendChild(frg)
    //重新设置ol宽
    _this.point_box.style.width = _this.lis.length * 20 * 2 +'px'
  }

  // 复制元素的函数
  function copyEle() {
    const first = _this.img_box.firstElementChild.cloneNode(true)
    const last= _this.img_box.lastElementChild.cloneNode(true)
    _this.img_box.appendChild(first)
    _this.img_box.insertBefore(last,_this.img_box.firstElementChild)
    //重新设置ul宽—
    _this.img_box.style.height = _this.img_box.children.length * _this.window_width +'px'
    _this.img_box.style.top = -1 * _this.window_height  + 'px'
  }

  //动起来的函数
  function autoPlay() {
    
    loopTimer = setInterval(() => {
      index++
      fn()
    },5000)
    
  } 

  // 移入移出函数
  function overOut() {
    _this.ele.addEventListener('mouseover', () => {clearInterval(loopTimer)})
    _this.ele.addEventListener('mouseout', () => {autoPlay()})
  }
  // 浏览器切换停止计时器
  function w_stop() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden'){
        clearInterval(loopTimer)
      } else {
        autoPlay()
      }
      
    })
  }

  // 左右点击函数
  function leftRight() {
    _this.leftRight.addEventListener('click',function (e) {
        e = e || window.event
        const target = e.target || e.srcElement
        if (!flag) {
          return
        }
        flag = false
        if (target.className === 'left') {
          index--
          fn()
        }
        if (target.className === 'right') {
          index++
          fn()
        }
      }
    )
  }
  // 焦点点击函数
  function pointClick() {
    _this.point_box.addEventListener('click', function (e) {
      e = e || window.event
      const target = e.target || e.srcElement
      
      if (target.tagName === 'LI') {
        if (!flag) {
          return
        }
        flag = false
        index = target.getAttribute('index') - 0 + 1 
        fn()
      }
    })
  }


function fn() {
  const lisLength = _this.img_box.children.length
  move(_this.img_box, {
    top:-_this.window_height * index
    },
    () => {
      if (index === lisLength - 1) {
        index = 1
        _this.img_box.style.top = -_this.window_height * index +'px'
      }
      if (index === 0) {
        index = lisLength - 2
        _this.img_box.style.top = -_this.window_height * index + 'px'
      }
      if (index === lisLength - 1) {
        index = 1
        _this.img_box.style.top = -_this.window_height * index + 'px'
      }
      // for (let i = 0; i < _this.point_box.children.length; i++) {
      //   _this.point_box.children[i].className = ''
      // }
      // _this.point_box.children[index - 1].className = 'active'
      // flag = true
    }
  )
}

}