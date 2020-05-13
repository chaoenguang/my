/**
 * move 运动函数
 * @param {ELEMENT} ele 要运动的元素
 * @param {OBJECT} target 运动的目标位置
 * @param {FUNCTION} cb 运动结束的时候执行的函数
 */

function move(ele, target, cd) {
  let timerObj = {}
  for (let attr in target) {
    timerObj[attr] = setInterval (()=> {
      let current
      if (attr === 'opacity') {
        current = parseFloat(getComputedStyle(ele)[attr]) * 100
      } else {
        current = parseInt(getComputedStyle(ele)[attr])
      }
      let distance = (target[attr] - current) / 5
      distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance)
      if (current === target[attr]) {
        clearInterval(timerObj[attr])
        delete timerObj[attr]
        const res = timerObjDel(timerObj)

        if (res === 0) {
          cd()
        }

      }else {
        if (attr === 'opacity') {
          ele.style[attr] = (distance + current) / 100
        } else {
          ele.style[attr] = distance + current + 'px'
        }
        
      }
    },30)
  }
  function timerObjDel(obj) {
    let n = 0
    for (let attr in obj) {
      n++
    }
    return n
  }
}
//随机数
function fn(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
} 
//随机颜色
function setColor() {
  return `rgb(${fn(0, 255)}, ${fn(0, 255)}, ${fn(0, 255)})` 
}

//分页器
function Pagenation (id,info) {
  this.ele = document.querySelector(id)
  this.pageInfo = {
    pagenum:1,
    pagesize:info ? info.pagesize|| 10 : 10,
    total:info ? info.total|| 90 : 90,
  }
  this.textInfo = {
    first: info ? info.first|| 'first' : 'first',
    prev: info ? info.prev|| 'prev' : 'prev',
    list: '',
    next: info ? info.next|| 'next' : 'next',
    last: info ? info.last|| 'last' : 'last'
  }
  this.change = info ? info.change || function () {} : function () {}
  // 准备一个东西放list标签
  this.list = null
  this.initiator()
}


Pagenation.prototype.initiator = function () {
  this.pageNum()
  this.setpageBox()
  this.setElestyle()
  this.createGo()
  this.createPagelist()
  this.disable()
  this.play()
}
// 1. 根据一页多少条和一共多少条算出多少页
Pagenation.prototype.pageNum = function () {
  this.pageInfo.totalpage = Math.ceil(this.pageInfo.total / this.pageInfo.pagesize)
  console.log(this.textInfo.first)
}
// 2. 添加上一页 / 下一页 / ... 的盒子
Pagenation.prototype.setpageBox = function () {
  const frg = document.createDocumentFragment()
  
  for (let attr in this.textInfo) {
    const div = document.createElement('div')
    if (attr === 'list') {
      
      setCss(div,{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      })
      this.list = div
    } else {
      setCss(div, {
        border: '1px solid #333',
        padding: '0 5px',
        margin: '0 5px',
        cursor: 'pointer'
      })
    }
  
    div.innerHTML = this.textInfo[attr]
    div.className = attr
    frg.appendChild(div)
  }
  this.ele.appendChild(frg)
}
// 3. 给 this.ele 添加一些样式
Pagenation.prototype.setElestyle = function () {
  setCss(this.ele,{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
      
    })
}
// 4. 创建一个文本框和按钮
Pagenation.prototype.createGo = function () {
  const inp = document.createElement('input')
  const btn = document.createElement('button')
  setCss(inp,{
    height:'20px',
    width:'50px',
    outline:'none'
  })
  setCss(btn,{
    width:'30px',
    height:'24px'

  })
  btn.innerHTML = 'go'
  inp.type = 'number'
  this.ele.appendChild(inp)
  this.ele.appendChild(btn)
}
// 5. 创建分页列表按钮
Pagenation.prototype.createPagelist = function () {
  const {totalpage, pagenum, pagesize} = this.pageInfo
  const frg = document.createDocumentFragment()
  if (totalpage <= 9){
    for (let i = 1; i <= totalpage; i++) {
      const p = createP(i, pagenum)
      frg.appendChild(p)
    }
  } else {
    if (pagenum < 5) {
      for (let i = 1; i <= 5; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span =document.createElement('span')
      span.innerHTML = '...'
      frg.appendChild(span)
      for (let i = totalpage - 1; i <= totalpage; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
    }

    if (pagenum === 5) {
      for (let i = 1; i <= 7; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span =document.createElement('span')
      span.innerHTML = '...'
      frg.appendChild(span)
      for (let i = totalpage - 1; i <= totalpage; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
    }
    if (pagenum > 5 && pagenum < totalpage - 4) {
      for (let i = 1; i <= 2; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span =document.createElement('span')
      span.innerHTML = '...'
      frg.appendChild(span)
      for (let i = pagenum - 2; i <= pagenum + 2; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span2 =document.createElement('span')
      span2.innerHTML = '...'
      frg.appendChild(span2)
      for (let i = totalpage - 1; i <= totalpage; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
    }

    if (pagenum === totalpage - 4) {
      for (let i = 1; i <= 2; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span =document.createElement('span')
      span.innerHTML = '...'
      frg.appendChild(span)
      for (let i = pagenum - 2; i <= totalpage; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
    }

    if (pagenum > totalpage - 4 ) {
      for (let i = 1; i <= 2; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
      const span =document.createElement('span')
      span.innerHTML = '...'
      frg.appendChild(span)
      for (let i = totalpage - 4; i <= totalpage; i++) {
        const p = createP(i, pagenum)
        frg.appendChild(p)
      }
    }
  }
  this.change(pagenum, pagesize)
  this.ele.children[5].value = this.pageInfo.pagenum
  this.list.innerHTML = ''
  this.list.appendChild(frg)
}
// 6. 判断一个禁用标识
Pagenation.prototype.disable = function () {
  if (this.pageInfo.pagenum === 1) {
    this.ele.children[0].style.backgroundColor = "#ccc"
    this.ele.children[1].style.backgroundColor = "#ccc"
  } else {
    this.ele.children[0].style.backgroundColor = "#F8F8FA"
    this.ele.children[1].style.backgroundColor = "#F8F8FA"
  }
  if (this.pageInfo.pagenum === this.pageInfo.totalpage) {
    this.ele.children[3].style.backgroundColor = "#ccc"
    this.ele.children[4].style.backgroundColor = "#ccc"
  } else {
    this.ele.children[3].style.backgroundColor = "#F8F8FA"
    this.ele.children[4].style.backgroundColor = "#F8F8FA"
  }
} 
// 7. 让分页器动起来
Pagenation.prototype.play = function () {
  this.ele.addEventListener('click',e => {
    e = e || window.event
    const target = e.target || e.srcElement
    if (target.className === 'first' && this.pageInfo.pagenum !== 1) {
      this.pageInfo.pagenum = 1
      this.createPagelist()
      this.disable()
    }
    if (target.className === 'prev' && this.pageInfo.pagenum !== 1) {
      this.pageInfo.pagenum--
      this.createPagelist()
      this.disable()
      
    }
    if (target.className === 'next' && this.pageInfo.pagenum !== this.pageInfo.totalpage) {
      this.pageInfo.pagenum++
      this.createPagelist()
      this.disable()
    }
    if (target.className === 'last' && this.pageInfo.pagenum !== this.pageInfo.totalpage) {
      this.pageInfo.pagenum = this.pageInfo.totalpage
      this.createPagelist()
      this.disable()
    }
    if (target.tagName === 'P') {
      this.pageInfo.pagenum = target.innerHTML - 0
      this.createPagelist()
      this.disable()
      this.ele.inp = this.ele.querySelector('input')
      this.ele.inp.value = this.pageInfo.pagenum
    }
    if (target.tagName === 'BUTTON') {
      let value = target.previousElementSibling.value - 0
      if (value >= this.pageInfo.totalpage) {
        value = this.pageInfo.totalpage
      }
      if (value <= 1) {
        value = 1
      }
      this.pageInfo.pagenum = value
      target.previousElementSibling.value = value
      this.createPagelist()
      this.disable()
    }
    
  })
}

function setCss(ele, styles) {
  for(let attr in styles) {
    ele.style[attr] = styles[attr]
  }
}


function createP(i,pagenum) {
  const p = document.createElement('p')
  setCss(p,{
    border: '1px solid #333',
    padding: '0 5px',
    margin: '0 5px',
    cursor: 'pointer'
  })
  if (i === pagenum) {
    setCss(p,{
      backgroundColor: '#6a6a6f',
      color: '#fff',
      fontWeight: 'bold',
    })
  }
  p.innerHTML = i
  return p
}

// ajax
/*
  1. 函数的参数
    + 在这个 ajax 请求里面可以变的内容作为参数
    + url 必填
    + 请求方式 我可以设置一个默认值 get
    + 是否异步 我可以设置一个默认值 true
    + 是否执行 JSON.parse 方法，默认不执行
    + 请求的时候像后端发送的参数 默认空
    + 回调函数
*/

function ajax(options) {

  // console.log(options)

  // 如果 url 没有传递
  // 不在继续向下执行
  // 可以手动抛出一个错误（异常）
  if (!options.url) {
    // 进入这里，表示 url 是 false
    //   undefined, 给了一个 ''
    // 手动抛出异常
    throw new Error('您好，url 是必填选项')
  }


  // 判断 type 传递的内容
  // 如果你的 type 是 get 或者 post 或者 空字符串 或者 undefined 以外的内容都不行
  // if (!(options.type === undefined || options.type.toUpperCase() === 'GET' || options.type.toUpperCase() === 'POST' || options.type === '')) {
  //   // 能进入 if 条件只有 get post '' undefined
  //   console.log('if 条件')
  // }
  // 一个条件写不下
  if (typeof options.type === 'string' || options.type === undefined) {
    if (!(options.type === undefined || options.type.toUpperCase() === 'GET' || options.type.toUpperCase() === 'POST' || options.type === '')) {
      // console.log('error')
      // 抛出一个异常
      throw new Error('目前只支持 get 和 post 请求，请期待更新')
    }
  } else {
    // console.log('error')
    // 抛出异常
    throw new Error('请按照规则传递数据')
  }


  // 判断是否异步
  // 如果你是 udnefined 或者是个 布尔都可以
  if (!(typeof options.async === 'boolean' || options.async === undefined)) {
    // 抛出异常
    throw new Error('async 只接受 布尔数据类型')
  }

  // 判断是否执行 JSON.parse 这个方法
  if (!(typeof options.dataType === 'boolean' || options.dataType === undefined)) {
    // 抛出异常
    throw new Error('dataType 只接受 布尔数据类型')
  }

  // 判断 data
  // data 接受的内容可以是一个 对象，可以是一个字符串
  if (!(typeof options.data === 'string' || options.data === undefined || Object.prototype.toString.call(options.data) === '[object Object]')) {
    // 抛出异常
    throw new Error('data 只能传递字符串或者对象')
  }

  // options.success 就是一个函数
  if (!(options.success === undefined || Object.prototype.toString.call(options.success) === '[object Function]')) {
    // 抛出异常
    throw new Error('success 只能传递函数')
  }

  // 整合一下所有的参数
  // 准备一个默认值
  const _default = {
    url: options.url,
    type: options.type ? options.type : 'GET',
    async: typeof(options.async) === 'boolean' ? options.async : true,
    dataType: typeof(options.dataType) === 'boolean' ? options.dataType : false,
    data: typeof(options.data) === 'string' ? options.data : '',
    success: options.success ? options.success : function () {}
  }

  // 单独处理对象形式的 data
  if (Object.prototype.toString.call(options.data) === '[object Object]') {
    // 要把对象里面的每一个成员拆开，组装成字符串
    let str = ''

    for (let attr in options.data) {
      str += `${attr}=${options.data[attr]}&`
    }

    // slice(开始索引，结束索引) 包前不包后
    // console.log(str.slice(0, -1))
    _default.data = str.slice(0, -1)
  }

  // console.log(_default)

  // 准备发送请求，使用的就是 _default 里面的内容

  // 1. 创建一个 ajax 对象
  let xhr
  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 2. 配置请求参数
  xhr.open(_default.type, _default.url + `${ _default.type === 'GET' ? '?' + _default.data : '' }`, _default.async)

  // 3. 接受响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      // 成功

      // 请求成功
      // 在请求成功的时候执行成功的回调函数
      // _default.success 是什么，是你传递进来的那个函数
      if (_default.dataType) {
        _default.success(JSON.parse(xhr.responseText))
        // console.log(JSON.parse(xhr.responseText))
      } else {
        // success 调用的是你传递进来的那个函数
        // 传递的实参是给谁了？ 给了你传递进来的那个函数
        _default.success(xhr.responseText)
        // console.log()
      }
    }
  }

  // 4. 判断要不要添加请求头
  if (_default.type === 'POST') {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
  }

  // 5. 发送请求
  xhr.send(_default.type === 'GET' ? null : _default.data)
}
function pAjax(options) {
  // 返回的是一个 promise 对象
  return new Promise(function (resolve, reject) {
    // 把 options 里面的 success 函数给改了
    options.success = function (res) {
      // 这个函数会在请求成功的时候执行
      // 执行的时候就调用了一下 resolve
      resolve(res)
    }
    ajax(options)
  })
}
