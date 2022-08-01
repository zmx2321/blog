# js工具库
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 获取文件类型
```js
// 重写通用下载方法 - 原生
export function download (url, params, filename, status) {
  // console.log(url, params, filename)

  // 下载附件公共方法
  let createObjectURL = (object) => {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
  }

  // 使用原生xhr并添加请求头
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  // 添加formdata
  for(let item in params) {
    formData.append(item, params[item]);
  }

  /* for (let keys of formData.entries()) {
    console.log(keys);
  } */

  if(!status) {
    xhr.open('get', url);
  } else {
    xhr.open('post', url);
  }

  // 请求头
  let token = 'Bearer ' + getToken()
  xhr.setRequestHeader("Authorization", token);
  xhr.responseType = 'blob';

  // 加载
  xhr.onload = function (e) {
    if (this.status == 200) {
      let blob = this.response;
      // console.log(blob)

      if (filename === undefined) {
        console.log("文件名为空")
      }

      // 如果文件名不存在
      if(!filename) {
        filename = "code.zip"
      } else {
        if(filename.toString().indexOf('.') === -1) {
          filename = `${filename.toString()}.zip`
        }
      }
      console.log(filename)

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let a = document.createElement('a');
        let url = createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    }
  };

  xhr.send(formData);  // 发送formdata到xhr
}

this.download(url, 555)
```

## 2. 对象数组根据对象属性删除
```js
// 对象数组根据对象属性删除
removeByValue(arr, value) {
  for(var i in arr){
    if(arr[i].attrs.label === value) {
      arr.splice(i,1);
    }
  }
},
```

## 3. 判断是否为图片
```js
// 获取路径扩展名
getFileprefix(url) {
  // 获取最后一个.的位置
  var index= url.lastIndexOf(".");
  // 获取后缀
  var ext = url.substr(index+1);

  return ext
},
// 判断是否为图片
isAssetTypeAnImage(ext) {
  return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
},
// 读取路径
getFileValue(row, item) {
  let url = row[item['prop']]
  let tp = ""

  // 如果有地址
  if(url) {
    if(this.isAssetTypeAnImage(this.getFileprefix(url))) {
      // 图片
      // console.log(url)
      tp = `<img src='${url}' />`
    } else {
      // 文件
      // console.log(url)
      tp = `<a href='${url}'>点击下载</a>`
    }
  }

  return tp
},
```

## 4. 参数转对象
```js
const urlToObj = str=> {
    let strContainer={};
    let arrStr=str.split("&")
    arrStr.forEach((item,index,arr)=>{
        console.log(item)
        let arrA=item.split("=")
        console.log(arrA)
        strContainer[arrA[0]]=arrA[1]
    })
    return strContainer
}
```

## 5. 时间相关
### 5.1. 时间戳
```js
// 设置时间戳
getNowFormate(time) {
    time = new Date();
    let year = time.getFullYear(); // 年
    let month = time.getMonth() + 1;  // 月
    let date = time.getDate();  // 日
    let hour = time.getHours();  // 时
    let minute = time.getMinutes();  // 分
    let second = time.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

getNowFormate();  // 默认当前时间
```

### 5.2. 获取上月
```js
// 设置时间戳
export const getNowFormate = time=> {
  time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1;  // 月
  let date = time.getDate();  // 日

  return `${year}-${month}-${date}`
}

// 获取上月
export const getLastMonthArr = ()=> {
  let currentDate = getNowFormate()
  let currentDateArr = currentDate.split('-')
  let lastMonth = ''

  // 判断临界值
  if(currentDateArr[1] === '1') {
    currentDateArr[0] = (parseInt(currentDateArr[0]) - 1).toString()
    currentDateArr[1] = '12'
  } else {
    currentDateArr[1] = (parseInt(currentDateArr[1]) - 1).toString()
    currentDateArr[1] < 10 ? currentDateArr[1] = `0${currentDateArr[1]}` : currentDateArr[1]
  }

  lastMonth = currentDateArr.join('-')

  return [lastMonth, currentDate]
}
```

### 5.3. 完整显示时间
```js
// 设置时间戳 - 显示
export const getDateTimeNowFormate = time=> {
  time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1;  // 月
  let date = time.getDate();  // 日
  let hour = time.getHours();  // 时
  let minute = time.getMinutes();  // 分
  let second = time.getSeconds();  // 秒

  let day = time.getDay();  // 获取当前星期几
  let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  // console.log(weekday[day])


  // 加上0
  month < 10 ? month=`0${month}` : month;  // 月
  date < 10 ? date=`0${date}` : date;  // 日
  hour < 10 ? hour=`0${hour}` : hour;  // 时
  minute < 10 ? minute=`0${minute}` : minute;  // 分
  second < 10 ? second=`0${second}` : second;  // 秒

  return `${year}-${month}-${date} ${hour}:${minute}:${second} ${weekday[day]}`
}
```

## 6. 深拷贝
```js
// 深拷贝
export const deepClone = (obj = {}) => {
    // obj是null，或者不是对象或数组，直接返回
    if (typeof obj !== 'object' || obj == null) {
        // 递归里面，如果是值，直接返回
        return obj
    }

    // 递归中如果遇到对象里面的值是对象或者数组，走下面的逻辑
    // 初始化返回结果
    let result;
    // 判断是否是数组
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    // 无论对象还是数组，都可以使用for in遍历
    for (let key in obj) {
        // 判断这个key是不是这个对象自身所拥有的属性
        // 保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归(重点)
            // obj[key]表示值
            // 递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
            result[key] = deepClone(obj[key]);
        }
    }

    // 返回结果
    return result
}
```

## 7. 防抖和节流
### 7.1. 防抖
```js
// 防抖
export const debounce = (fn, delay = 500) => {
    // timer是在闭包中的 => 下面的if(timer)
    // 这样不会被外界轻易拿到 => 即不对外暴露
    // 我们在外面使用不需要关心
    // 同时也是在debounce的作用域中
    // 闭包的使用场景：函数当做返回值或者参数传入
    let timer = null;

    // 函数作为返回值，这就形成闭包了
    return function () {
        // 这里面的timer需要在它定义的作用域往上寻找
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            // 触发change事件
            // 第一个参数是改变this指向
            // 第二个参数是获取所有的参数
            // apply第二个参数开始，只接收数组
            // fn函数在执行的时候，argument传进来
            // debounce返回的函数可能会传进来一些参数
            // 面试使用fn()也没问题
            // fn()
            fn.apply(this, arguments)

            // 清空定时器
            timer = null
        }, delay)
    }
}
```
### 7.2. 节流
```js
// 节流
export const throttle = (fn, delay = 100) => {
    let timer = null  // 这个timer是在闭包里面的

    // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
    // 不会传给下面的那个fn
    return function () {
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            // 一般写一个事件，function里面都要加上event参数，即事件对象
            fn.apply(this, arguments)  // 打印坐标

            timer = null
        }, delay)
    }
}

// 判断对象为空
export const objIsEmpty = obj => {
  if(JSON.stringify(obj) == '{}' ){
    return true;
  }

  return false;
}
```

## 8. 获取路径扩展名
```js
// 获取路径扩展名
export const getFileprefix = url => {
  // 获取最后一个.的位置
  let index= url.lastIndexOf(".");
  // 获取后缀
  let ext = url.substr(index+1);

  return ext
}
```

## 9. 去重
```js
// 去重
export const uniqueArr = arr => {
  return Array.from(new Set(arr));
}
```

## 10. 求补集
```js
let a = new Set([1, 2, 3]);
let b = new Set([1, 2, 3, 4, 5]);
let difference = new Set([...b].filter(x => !a.has(x)));
console.log([...difference])
```

## 10. 获取设备类型
```js
OSnow() {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

  let uaType = ""

  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
    uaType = "win32"
  }
  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
    uaType = "win64"
  }
  if(isMac){
    uaType = "mac"
  }

  return uaType
},
```

## 11. 获取zoom
```js
// 缩放
const getZoom = ()=> {
  let zoom = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI;
  // console.log("当前浏览器zoom值", zoom)

  if (zoom != 1) {
    // console.log("系统检测到您的设备对显示进行改变，可能导致页面显示不全,请调整后打开")
    // Message.error("系统检测到您的设备对显示进行改变，可能导致页面显示不全,请调整后打开");

    // document.body.style.zoom = -0.6 * zoom + 1.55;
    document.body.style.zoom = 1/zoom;
  } else {
    document.body.style.zoom = 1
  }

  // console.log("调整后zoom值", document.body.style.zoom)
}

// 初始化
getZoom()

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  getZoom()
}
```

## 12. 获取月份区间
```js
// 根据年月判断天数
getMonthDay(year, month) {
  // console.log(year, month)
  const isLeapYear = year => {
    if(year/4 == 0 && year/100 != 0){
      return true ;
    } else if (year/400 == 0){
      return true ;
    } else{
      return false ;
    }
  }

  let days = 0

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    case 2:
      isLeapYear(year) ? days = 29 : days = 28;
  }

  // console.log(days)
  return days
},

getTitleLabel() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  parseInt(m) < 10 ? m='0'+m : m
  parseInt(d) < 10 ? d='0'+d : d

  let date0 = y + '-' + m
  let thisTimeArr = date0.split('-')
  // 上月
  let lastMonth = parseInt(thisTimeArr[1]) - 1
  parseInt(lastMonth) < 10 ? lastMonth='0'+lastMonth : lastMonth
  // console.log(lastMonth)

  date.setTime(date.getTime()-24*60*60*1000);
  let d1 = date.getDate();
  parseInt(d1) < 10 ? d1='0'+d1 : d1

  let time0Str = ""
  let timeStr = ""

  if(this.queryParams.nowDate === "" || this.queryParams.nowDate.split('-')[1] === m) {
    this.queryParams.nowDate = date0
    // console.log(d, d1)

    if(parseInt(d) === 1) {
      // 月初第一天，昨天应是上个月，判断月 1-月底
      time0Str = thisTimeArr[0] + '.' + lastMonth + '.01'
      timeStr = thisTimeArr[0] + '.' + lastMonth + '.' + this.getMonthDay(parseInt(thisTimeArr[0]), parseInt(thisTimeArr[1]) - 1)
    } else {
      time0Str = y + '.' + m + '.01'
      timeStr = y + '.' + m + '.' + d1
    }
  } else {
    let selTimeArr = this.queryParams.nowDate.split('-')
    console.log(selTimeArr)
    time0Str = selTimeArr[0] + '.' + selTimeArr[1] + '.01'
    timeStr = selTimeArr[0] + '.' + selTimeArr[1] + '.' + this.getMonthDay(parseInt(selTimeArr[0]), parseInt(selTimeArr[1]))
  }

  this.labelTitle = `【${time0Str}-${timeStr}】${this.titleStr}-`
},
```

## 使用递归思想将对象所有null转化成空字符串
```js
obj: {
  a: null,
  b: "",
  c: 1,
  d: ['1', '2', null],
  e: {
    e1: null,
    e2: undefined,
    e3: 1,
    e4: '123',
    e5: false,
    e6: {
      e61: [1, 2, 4, undefined, null, 3],
      e62: null,
      e63: undefined,
      e64: {
        e641: null,
        e642: "123",
        e643: true
      }
    }
  }
}

setObj(obj) {
  // 判断是否是对象或数组
  const isObj = obj=> {
    return typeof obj === 'object' && obj !== null
  }

  // 遍历
  for(let key in obj) {
    if(obj[key] == null) {
      obj[key] = ''
    }
    // 对象或者数组
    if(isObj(obj[key])) {
      this.setObj(obj[key])
    }
  }

  return obj
},
```